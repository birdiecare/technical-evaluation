import connect, {DatabaseConnection} from "@databases/sqlite";
import {runMigrations} from "./migrations";
import {insertDummyData} from "./dummy_data";

export async function getDatabaseConnection() {
    let connection: DatabaseConnection;

    if (process.env.NODE_ENV === 'prod') {
        connection = connect(process.env.DB_URL);
    } else {
        connection = connect();
    }

    await runMigrations(connection);

    // -------------------------------
    await insertDummyData(connection); // Not part of the exercise, just here to provide some example data
    // -------------------------------

    return connection;
}