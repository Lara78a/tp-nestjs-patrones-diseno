import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  private orders: Order[] = [];
  private nextId = 1;

  create(createOrderDto: CreateOrderDto): Order {
    const order: Order = {
      id: this.nextId++,
      ...createOrderDto,
    };

    this.orders.push(order);

    return order;
  }

  findAll(): Order[] {
    return this.orders;
  }

  findOne(id: number): Order {
    const order = this.orders.find((order) => order.id === id);

    if (!order) {
      throw new NotFoundException(
        `Orden con id ${id} no encontrada`,
      );
    }

    return order;
  }

  update(id: number, updateOrderDto: UpdateOrderDto): Order {
    const order = this.findOne(id);

    Object.assign(order, updateOrderDto);

    return order;
  }

  remove(id: number): void {
    const index = this.orders.findIndex((order) => order.id === id);

    if (index === -1) {
      throw new NotFoundException(
        `Orden con id ${id} no encontrada`,
      );
    }

    this.orders.splice(index, 1);
  }
}