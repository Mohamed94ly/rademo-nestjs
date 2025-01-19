import { registerAs } from "@nestjs/config";
import { config as dotenvConfig } from 'dotenv';
import { authPayloadDto } from "src/auth/dto/auth.dto";
import { Manager } from "src/manager/entities/manager.entity";
import { DataSource, DataSourceOptions } from "typeorm";

dotenvConfig({ path: '.env' });

const config = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'radius',
    username: 'radius',
    password: 'radius202525',
    synchronize: false,
    dropSchema: false,
    logging: false,
    logger: 'file',
    entities: [__dirname + "/auth/dto/auth.dto.ts", __dirname + "/**/**/*.entity{.ts,.js}"],
    //entities: [Manager],
    migrations: [__dirname + "/src/migrations/*{.ts,.js}"],
    //autoLoadEntities: true,
    migrationsTableName: 'rd_migration',
    cli: {
        migrationsDir: __dirname + 'src/migrations/',
      }
}

export default registerAs('typeorm', () => config)
export const connectionSource = new DataSource(config as DataSourceOptions);