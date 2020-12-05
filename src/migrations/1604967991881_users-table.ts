/* eslint-disable @typescript-eslint/camelcase */
import { MigrationBuilder, ColumnDefinitions, PgType } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
    pgm.createType('accountType', ['Admin', 'User']);
    pgm.createTable('users', {
        id: {
            type: PgType.UUID,
            notNull: true,
            primaryKey: true,
            default: pgm.func('gen_random_uuid()'),
        },
        email: {
            type: `${PgType.VARCHAR}(254)`,
            notNull: true,
        },
        accountType: {
            type: 'accountType',
            default: 'User',
            notNull: true
        },
        createdAt: {
            type: PgType.TIMESTAMP_WITHOUT_TIME_ZONE,
            default: 'current_timestamp',
            notNull: true,
        },
        updatedAt: {
            type: PgType.TIMESTAMP_WITHOUT_TIME_ZONE,
        },
        deletedAt: {
            type: PgType.TIMESTAMP_WITHOUT_TIME_ZONE
        }
    })
}

export async function down(pgm: MigrationBuilder): Promise<void> {
    pgm.dropTable('users');
}
