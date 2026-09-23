import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  private categories: Category[] = [];
  private nextId = 1;

  create(createCategoryDto: CreateCategoryDto): Category {
    const category: Category = {
      id: this.nextId++,
      name: createCategoryDto.name,
    };

    this.categories.push(category);

    return category;
  }

  findAll(): Category[] {
    return this.categories;
  }

  findOne(id: number): Category {
    const category = this.categories.find(
      (category) => category.id === id,
    );

    if (!category) {
      throw new NotFoundException('Categoría no encontrada');
    }

    return category;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto): Category {
    const category = this.findOne(id);

    if (updateCategoryDto.name !== undefined) {
      category.name = updateCategoryDto.name;
    }

    return category;
  }

  remove(id: number): void {
    const index = this.categories.findIndex(
      (category) => category.id === id,
    );

    if (index === -1) {
      throw new NotFoundException('Categoría no encontrada');
    }

    this.categories.splice(index, 1);
  }
}