import {DatabaseConnection, sql} from "@databases/sqlite";

/*
 * The dummy data is supplied to make it easier to get started with the application.
 * It is not intended to be reviewed as part of the exercise.
 */
export async function insertDummyData(db: DatabaseConnection) {
    await db.query(sql`
        INSERT INTO care_recipients (id, first_name, last_name, date_of_birth, email, phone, address, postcode)
        VALUES
        ('550e8400-e29b-41d4-a716-446655440000', 'John', 'Doe', '1970-01-01', 'john.doe@gmail.com', '1234567890', '123 Main St', 'SW1A 1AA'),
        ('620e8301-e39c-51d5-b616-556655550001', 'Jane', 'Smith', '1980-02-02', 'jane.smith@gmail.com', '0987654321', '456 Elm St', 'CB3 0FA'),
        ('710e8202-e49d-61d6-c617-666755660002', 'Bob', 'Johnson', '1990-03-03', 'bob.johnson@gmail.com', '2345678901', '789 Pine St', 'DE56 1BA'),
        ('810e8103-e59e-71d7-d618-777855770003', 'Alice', 'Williams', '2000-04-04', 'alice.williams@gmail.com', '3456789012', '012 Oak St', 'EC1A 1BB'),
        ('910e8004-e69f-81d8-e619-888955880004', 'Charlie', 'Brown', '1960-05-05', 'charlie.brown@gmail.com', '4567890123', '345 Maple St', 'W1A 0AX'),
        ('101e7905-e7a0-91d9-f61a-999955990005', 'Diana', 'Davis', '1975-06-06', 'diana.davis@gmail.com', '5678901234', '678 Willow St', 'M1 1AE'),
        ('111e7806-e8a1-1011-g61b-aaa955aa0006', 'Frank', 'Miller', '1985-07-07', 'frank.miller@gmail.com', '6789012345', '901 Birch St', 'B33 8TH'),
        ('121e7707-e9a2-1112-h61c-bbb955bb0007', 'Grace', 'Wilson', '1995-08-08', 'grace.wilson@gmail.com', '7890123456', '234 Cedar St', 'CR2 6XH'),
        ('131e7608-eaa3-1213-i61d-ccc955cc0008', 'Henry', 'Moore', '2005-09-09', 'henry.moore@gmail.com', '8901234567', '567 Spruce St', 'DN55 1PT'),
        ('141e7509-eba4-1314-j61e-ddd955dd0009', 'Irene', 'Taylor', '1965-10-10', 'irene.taylor@gmail.com', '9012345678', '890 Alder St', 'GL51 0EX'),
        ('151e7410-eca5-1415-k61f-eee955ee0010', 'Jack', 'Anderson', '1975-11-11', 'jack.anderson@gmail.com', '0123456789', '123 Cherry St', 'HX1 2EA'),
        ('161e7311-edc6-1516-l620-fff955ff0011', 'Karen', 'Thomas', '1985-12-12', 'karen.thomas@gmail.com', '1234567890', '456 Dogwood St', 'L1 8JQ'),
        ('171e7212-eeb7-1617-m621-000955000012', 'Leo', 'Jackson', '1995-01-13', 'leo.jackson@gmail.com', '2345678901', '789 Magnolia St', 'KT12 4HQ'),
        ('181e7113-efa8-1718-n622-111955110013', 'Nancy', 'White', '2005-02-14', 'nancy.white@gmail.com', '3456789012', '012 Palm St', 'RH10 1BG'),
        ('191e7014-f0a9-1819-o623-222955220014', 'Oscar', 'Harris', '1965-03-15', 'oscar.harris@gmail.com', '4567890123', '345 Redwood St', 'SN1 1RT');
    `);

    await db.query(sql`
        INSERT INTO care_log (id, care_recipient_id, type, status, note)
        VALUES
        ('550e8400-e29b-41d4-a716-446655440000', '151e7410-eca5-1415-k61f-eee955ee0010', 'Routine Check', 'Completed', 'Checked Mr. Anderson. He is in good spirits, took medication and ate his lunch.'),
        ('620e8301-e39c-51d5-b616-556655550001', '181e7113-efa8-1718-n622-111955110013', 'Physical Therapy', 'In Progress', 'Ms. White showed some improvement in mobility. Continuing with her physical therapy routine.'),
        ('710e8202-e49d-61d6-c617-666755660002', '910e8004-e69f-81d8-e619-888955880004', 'Routine Check', 'Completed', 'Mr. Brown is maintaining a healthy diet. He needs assistance with daily chores.'),
        ('810e8103-e59e-71d7-d618-777855770003', '810e8103-e59e-71d7-d618-777855770003', 'Medication Review', 'Completed', 'Ms. Williams has been given her medication. Need to monitor her health conditions closely.'),
        ('910e8004-e69f-81d8-e619-888955880004', '910e8004-e69f-81d8-e619-888955880004', 'Physical Therapy', 'In Progress', 'Mr. Brown is struggling with the exercises, will adjust the routine as needed.');
    `);
}