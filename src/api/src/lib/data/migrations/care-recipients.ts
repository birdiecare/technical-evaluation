import {DatabaseConnection, sql} from "@databases/sqlite";
export async function runCareRecipientMigrations(db: DatabaseConnection) {
    await db.query(sql`
        CREATE TABLE care_recipients (
            id UUID NOT NULL PRIMARY KEY,
            first_name VARCHAR NOT NULL,
            last_name VARCHAR NOT NULL,
            date_of_birth DATE NOT NULL,
            email VARCHAR NOT NULL,
            phone VARCHAR NOT NULL,
            address VARCHAR NOT NULL,
            postcode VARCHAR NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
  `);
}