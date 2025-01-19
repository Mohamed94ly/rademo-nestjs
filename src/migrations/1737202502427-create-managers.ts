import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateManagers1737202502427 implements MigrationInterface {

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
                        name: 'enabled',
                        type: 'boolean',
                        default: true
                    }
                ]
            })
        )

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
                        name: 'username',
                        type: 'varchar',
                        length: '50',
                        isUnique: true,
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        length: '150',
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
                        name: 'roleId',
                        type: 'int',
                        isNullable: true
                    },
                ],
            }),
        )

        await queryRunner.createForeignKey(
            'rd_managers',
            new TableForeignKey({
                columnNames: ['roleId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'rd_roles',
                onDelete: "CASCADE",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('rd_managers');
        const foreignKey = table.foreignKeys.find(
            (fk) =>fk.columnNames.indexOf('roleId') !== -1,
        );

        await queryRunner.dropForeignKey('rd_managers', foreignKey)
        await queryRunner.dropColumn('rd_managers', 'roleId')
        await queryRunner.dropTable('rd_managers');
        await queryRunner.dropTable('rd_roles');
    }

}
