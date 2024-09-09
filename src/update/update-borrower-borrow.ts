import { getClient } from "../utils";

async function updateBorrowerBorrow() {
    const client = await getClient()

    const updateBorrowerBorrow = `
        UPDATE borrow_records SET return_date = $1 WHERE record_id = $2
    `

    const updateBorrowerBorrowValue = ['2024-02-02', 1]

    await client.query(updateBorrowerBorrow, updateBorrowerBorrowValue)
}

updateBorrowerBorrow()