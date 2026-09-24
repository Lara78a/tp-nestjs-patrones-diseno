export interface ProductPriceStrategy {
  calculatePrice(price: number): number;
}

export class RegularPriceStrategy implements ProductPriceStrategy {
  calculatePrice(price: number): number {
    return price;
  }
}

export class DiscountPriceStrategy implements ProductPriceStrategy {
  calculatePrice(price: number): number {
    return price * 0.9;
  }
}

export class ProductPriceContext {
  constructor(private strategy: ProductPriceStrategy) {}

  setStrategy(strategy: ProductPriceStrategy): void {
    this.strategy = strategy;
  }

  calculatePrice(price: number): number {
    return this.strategy.calculatePrice(price);
  }
}