import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateManagers1737202502427 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'rd_managers',
                columns:[
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'f_name',
                        type: 'varchar',
                        length: '50',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'access_token',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'token_type',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'role',
                        type: 'int',
                        isNullable: true
                    },
                ],
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('rd_managers');
    }

}
