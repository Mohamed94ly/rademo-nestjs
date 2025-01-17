import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'RaDemo ... Start [2025-01-17]';
  }
}
