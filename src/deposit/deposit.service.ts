import { Injectable } from '@nestjs/common';
export type Deposit = any;
@Injectable()
export class DepositService {
    private readonly deposit: Deposit[];

    constructor() {
        this.deposit = [
            {
                Id: 1,
                accountId: '123456789012A',
                date: '12/04/2019',
                amount: '50'
            },
        ]
    }
    async createOne(deposit: Deposit): Promise<any> {
        this.deposit.push(deposit);
        return;
    }
}
