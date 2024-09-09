import { getClient } from '../utils'

async function findBookBorrower() {
    const client = await getClient()

    const findBookBorrower = `
        SELECT borrower_id FROM borrow_records WHERE book_id = $1
    `

    const findBookBorrowerValue = [1]

    await client.query(findBookBorrower, findBookBorrowerValue)
}

findBookBorrower()