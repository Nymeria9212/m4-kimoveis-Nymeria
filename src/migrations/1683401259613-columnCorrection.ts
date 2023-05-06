import { MigrationInterface, QueryRunner } from "typeorm";

export class ColumnCorrection1683401259613 implements MigrationInterface {
    name = 'ColumnCorrection1683401259613'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" RENAME COLUMN "zipcode" TO "zipCode"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" RENAME COLUMN "zipCode" TO "zipcode"`);
    }

}
