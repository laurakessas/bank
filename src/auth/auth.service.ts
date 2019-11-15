import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) { }

    async validateUser(accountId: string, pinCode: string): Promise<any> {
        const user = await this.usersService.findOne(accountId);
        if (user && user.pinCode === pinCode) {
            return user;
        }
        return null;
    }

    async login(user: any) {
        const payload = { accountId: user.accountId, max: 1000, sub: user.Id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
