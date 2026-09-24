import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductFactory } from './factories/product.factory';
import {
  ProductPriceContext,
  RegularPriceStrategy,
} from './strategies/product-price.strategy';

@Injectable()
export class ProductsService {
  private products: Product[] = [];
  private nextId = 1;

  private priceContext = new ProductPriceContext(
    new RegularPriceStrategy(),
  );

  create(createProductDto: CreateProductDto): Product {
    const finalPrice = this.priceContext.calculatePrice(
      createProductDto.price,
    );

    const product = ProductFactory.create('physical', {
      ...createProductDto,
      price: finalPrice,
    });

    product.id = this.nextId++;

    this.products.push(product);
    return product;
  }

  findAll(): Product[] {
    return this.products;
  }

  findByCategory(categoryId: number): Product[] {
    return this.products.filter(
      (product) => product.categoryId === categoryId,
    );
  }

  searchByName(name: string): Product[] {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  findByPriceRange(
    minPrice?: number,
    maxPrice?: number,
  ): Product[] {
    return this.products.filter((product) => {
      if (minPrice !== undefined && product.price < minPrice) {
        return false;
      }

      if (maxPrice !== undefined && product.price > maxPrice) {
        return false;
      }

      return true;
    });
  }

  findOne(id: number): Product {
    const product = this.products.find(
      (product) => product.id === id,
    );

    if (!product) {
      throw new NotFoundException(
        `Producto con id ${id} no encontrado`,
      );
    }

    return product;
  }

  update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Product {
    const product = this.findOne(id);
    Object.assign(product, updateProductDto);
    return product;
  }

  remove(id: number): void {
    const index = this.products.findIndex(
      (product) => product.id === id,
    );

    if (index === -1) {
      throw new NotFoundException(
        `Producto con id ${id} no encontrado`,
      );
    }

    this.products.splice(index, 1);
  }
}