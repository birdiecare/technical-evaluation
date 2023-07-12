import express from 'express';
import {getDatabaseConnection} from "../lib/data";
import {sql} from "@databases/sqlite";

const app = express();
const port = 1337;

getDatabaseConnection().then((connection) => {
    app.use(express.json());

    app.get('/api/care-recipients', async (req, res) => {
        const result = await connection.query(sql`SELECT * FROM care_recipients`);
        res.status(200).json(result);
    });

    app.post('/api/care-recipients', async (req, res) => {
        const result = await connection.query(
            sql`insert into care_recipients (id, first_name, last_name, date_of_birth, phone, email, address, postcode)
            values (
             ${req.body.id},
             ${req.body.first_name},
             ${req.body.last_name},
             ${req.body.date_of_birth},
             ${req.body.phone},
             ${req.body.email},
             ${req.body.address},
             ${req.body.postcode})`
        );
        res.status(200).json(result);
    });

    app.put('/api/care-recipients/:id', async (req, res) => {
        const result = await connection.query(
            sql`UPDATE care_recipients
            SET first_name = ${req.body.first_name},
             last_name = ${req.body.last_name},
             date_of_birth = ${req.body.date_of_birth},
             phone = ${req.body.phone},
             email = ${req.body.email},
             address = ${req.body.address},
             postcode = ${req.body.postcode}
            WHERE id = ${req.params.id}`
        );
        res.status(200).json(result);
    });

    app.get('/api/care-log', async (req, res) => {
        const result = await connection.query(sql`SELECT * FROM care_log`);
        res.status(200).json(result);
    });

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});
