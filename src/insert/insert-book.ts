import { getClient } from '../utils'

async function insertBooks() {
    const client = await getClient()

    const insertBooks = `
        INSERT INTO books (title,author_id,published_year) VALUES ($1,$2,$3) RETURNING id
    `

    const insertBooksValues = ["The book title", 1, 1990]

    await client.query(insertBooks, insertBooksValues)
}

insertBooks()