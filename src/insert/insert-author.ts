import { getClient } from "../utils";

async function insertAuthor() {
    const client = await getClient()

    const insertAuthor = `
        INSERT INTO authors (name) VALUES ($1) RETURNING id
    `

    const insertAuthorValues = ["chaitanya@gmail.com"]

    await client.query(insertAuthor, insertAuthorValues)
}

insertAuthor()

