import { getClient } from '../utils'

async function insertBorrowers() {
    const client = await getClient()

    const insertBorrowers = `
        INSERT INTO borrowers (name,email) VALUES ($1,$2) RETURNING id
    `

    const insertBorrowersValues = ["Chaitanya", "chaitanya@gmail.com"]

    await client.query(insertBorrowers, insertBorrowersValues)
}

insertBorrowers()