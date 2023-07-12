import {runCareRecipientMigrations} from "./care-recipients";
import {DatabaseConnection} from "@databases/sqlite";
import {runCareLogMigrations} from "./care-log";

export async function runMigrations(db: DatabaseConnection) {
    await runCareRecipientMigrations(db);
    await runCareLogMigrations(db);
}