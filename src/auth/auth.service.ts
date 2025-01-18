import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AppService } from 'src/app.service';
import { authPayloadDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  private readonly users = [
    {
      userId: 1,
      user: 'admin',
      pass: '1234',
    },
    {
      userId: 2,
      user: 'root',
      pass: '1234',
    },
  ];

  constructor(private jwtService: JwtService, private appService: AppService) {}

async validateUser({username, password}: authPayloadDto) {
    //const user = await this.managerService.findOneByUsername(username);
    const user = this.users.find(user => user.user == username);

    if(!await this.appService.compareHash(password, user.pass))
        throw new HttpException('User not found', 404);
    else{
        return {
            'access_token': await this.jwtService.sign({'username': user.user}),
        };
    }
}
}
