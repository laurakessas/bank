import { Injectable } from '@nestjs/common';

export type User = any;

var randomize = require('randomatic');
@Injectable()
export class UsersService {
    public readonly users: User[];

    constructor() {
        this.users = [
            {
                Id: 1,
                civility: 'francaise',
                lastname: 'kessas',
                firstname: 'laura',
                dateOfBirth: '27/11/1995',
                adress: '123 fvodfnvodn',
                accountId: '123456789012A',
                pinCode: '123456',
                amount: '1000'
            },
        ]
    }

    async findOne(accountId: string): Promise<User | undefined> {
        return this.users.find(user => user.accountId === accountId);
    }
    //on cré notre utilisateur avec les informations qu'il rentre et on génère un numéro de compte avec son code pin
    async createOne(user: User): Promise<User> {
        user.accountId = '12345' + randomize('0', 7) + randomize('A', 1);
        user.pinCode = randomize('0', 6);
        this.users.push(user);

        return [user.accountId, user.pinCode];
    }
}
