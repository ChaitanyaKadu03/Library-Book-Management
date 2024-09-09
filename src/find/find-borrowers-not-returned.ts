import { getClient } from '../utils'

async function findBorrowersByNotReturned() {
    const client = await getClient()

    const findBorrowersByNotReturned = `
        SELECT * FROM borrow_records WHERE return_date = $1
    `

    const findBorrowersByNotReturnedValue = [null]

    await client.query(findBorrowersByNotReturned, findBorrowersByNotReturnedValue)
}

findBorrowersByNotReturned()