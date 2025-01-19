import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateProfiles1737208275980 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'rd_profiles',
                columns:[
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '50',
                        isNullable: true,
                    },
                    {
                        name: 'price',
                        type: 'decimal',
                        isNullable: true,
                    },
                    {
                        name: 'enabled',
                        type: 'boolean',
                        default: true,
                        isNullable: true,
                    },
                    {
                        name: 'speed_upload',
                        type: 'varchar',
                        length: '30',
                        isNullable: true,
                    },
                    {
                        name: 'speed_download',
                        type: 'varchar',
                        length: '30',
                        isNullable: true,
                    },
                    {
                        name: 'unit_test',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'dns1',
                        type: 'varchar',
                        length: '30',
                        isNullable: true,
                    },
                    {
                        name: 'dns2',
                        type: 'varchar',
                        length: '30',
                        isNullable: true,
                    },
                    {
                        name: 'port',
                        type: 'varchar',
                        length: '30',
                        isNullable: true,
                    },
                    {
                        name: 'expire_value',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'expire_type',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'quota_upload',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'quota_download',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'qouta_total',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'quota_daily_upload',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'quota_daily_download',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'quota_daily_total',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'online_time',
                        type: 'varchar',
                        length: '30',
                        isNullable: true,
                    },
                    {
                        name: 'online_time_daily',
                        type: 'varchar',
                        length: '30',
                        isNullable: true,
                    },
                    {
                        name: 'pool_name',
                        type: 'varchar',
                        length: '50',
                        isNullable: true,
                    },
                    {
                        name: 'profile_expire',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'profile_daily',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'profile_online_time',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'type',
                        type: 'varchar',
                        length: '10',
                        isNullable: true,
                    },
                    {
                        name: 'mikrotik_addresslist',
                        type: 'varchar',
                        length: '50',
                        isNullable: true,
                    },
                    {
                        name: 'mikrotik_queue_priority',
                        type: 'int',
                        isNullable: true,
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('rd_profiles');
    }

}
