import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import typeorm from './config/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async(configService: ConfigService) => (configService.get('typeorm'))

      // type: 'postgres',
      // host: process.env.DB_HOST,
      // port: parseInt(process.env.DB_PORT),
      // username: process.env.DB_USER,
      // password: process.env.DB_PASS,
      // database: process.env.DB_NAME,
      // //timezone: 'utc',
      // logging: true,
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // migrations: [join(__dirname, '/../../', 'database/migrations/**/*{.ts,.js}')],
      // migrationsTableName: 'rd_migrations',
      // migrationsRun: false,
      // synchronize: false,
    }),
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
  exports:[AppService]
})
export class AppModule {}
