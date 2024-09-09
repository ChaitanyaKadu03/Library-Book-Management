import { getClient } from '../utils'

async function findBooks() {
    const client = await getClient()

    const findBooks = `
        SELECT * FROM books 
    `

    await client.query(findBooks)
}

findBooks()