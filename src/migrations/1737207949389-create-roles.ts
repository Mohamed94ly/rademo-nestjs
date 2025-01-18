import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRoles1737207949389 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'rd_roles',
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
                        length: '30',
                    },
                    {
                        name: 'disabled',
                        type: 'boolen',
                        default: false
                    }
                ]
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('rd_roles');
    }

}
