import { Product } from '../entities/product.entity';

export interface ProductData {
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: number;
}

export abstract class ProductCreator {
  abstract createProduct(data: ProductData): Product;
}

export class PhysicalProductCreator extends ProductCreator {
  createProduct(data: ProductData): Product {
    return {
      id: 0,
      ...data,
    };
  }
}

export class DigitalProductCreator extends ProductCreator {
  createProduct(data: ProductData): Product {
    return {
      id: 0,
      ...data,
    };
  }
}

export class ProductFactory {
  static create(type: string, data: ProductData): Product {
    let creator: ProductCreator;

    if (type === 'physical') {
      creator = new PhysicalProductCreator();
    } else if (type === 'digital') {
      creator = new DigitalProductCreator();
    } else {
      throw new Error(`Tipo de producto no válido: ${type}`);
    }

    return creator.createProduct(data);
  }
}