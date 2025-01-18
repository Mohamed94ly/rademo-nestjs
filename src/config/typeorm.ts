import { registerAs } from "@nestjs/config";
import { config as dotenvConfig } from 'dotenv';
import { join } from "path";
import { DataSource, DataSourceOptions } from "typeorm";

dotenvConfig({ path: '.env' });

const config = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: false,
    dropSchema: false,
    logging: false,
    logger: 'file',
    entities: [__dirname + "src/**/**/*.entity{.ts,.js}"],
    //entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ["src/migrations/*{.ts,.js}"],
    autoLoadEntities: true,
    migrationsTableName: 'rd_migration',
    cli: {
        migrationsDir: __dirname + '/migrations/',
      },
}

export default registerAs('typeorm', () => config)
export const connectionSource = new DataSource(config as DataSourceOptions);