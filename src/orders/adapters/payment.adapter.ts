export interface PaymentService {
  pay(amount: number): string;
}

export class ExternalPaymentService {
  makePayment(amount: number): string {
    return `Pago externo procesado por $${amount}`;
  }
}

export class PaymentAdapter implements PaymentService {
  constructor(
    private readonly externalPaymentService: ExternalPaymentService,
  ) {}

  pay(amount: number): string {
    return this.externalPaymentService.makePayment(amount);
  }
}