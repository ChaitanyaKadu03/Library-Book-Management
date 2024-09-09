import { getClient } from '../utils'

async function insertBorrowRecords() {
    const client = await getClient()

    const insertBorrowRecords = `
        INSERT INTO borrow_records (book_id, borrower_id, borrow_date) VALUES ($1,$2,$3) RETURNING id
    `

    const insertBorrowRecordsValues = [1, 1, '2024-01-01']

    await client.query(insertBorrowRecords, insertBorrowRecordsValues)
}

insertBorrowRecords()