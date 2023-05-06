import { MigrationInterface, QueryRunner } from "typeorm";

export class UserUpdateEntity1683320462063 implements MigrationInterface {
    name = 'UserUpdateEntity1683320462063'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET NOT NULL`);
    }

}
