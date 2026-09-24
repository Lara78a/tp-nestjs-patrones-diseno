import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  quantity: number;
}