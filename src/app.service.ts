import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AppService {
  getHello(): string {
    return 'RaDemo ... Start [2025-01-17]';
  }
  
  async hashText(text: string){
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(text, saltOrRounds);

    return hash;
  }

  async compareHash(text: string, hash: string){
    return await bcrypt.compare(text, hash);
  }
}
