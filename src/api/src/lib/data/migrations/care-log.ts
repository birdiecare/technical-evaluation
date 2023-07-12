import {DatabaseConnection, sql} from "@databases/sqlite";
export async function runCareLogMigrations(db: DatabaseConnection) {
    await db.query(sql`
        CREATE TABLE care_log (
            id UUID NOT NULL PRIMARY KEY,
            care_recipient_id UUID NOT NULL,
            type VARCHAR NOT NULL,
            status VARCHAR NOT NULL,
            note VARCHAR NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
  `);
}