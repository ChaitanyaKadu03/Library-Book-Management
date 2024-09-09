import { getClient } from '../utils'

async function findBookByPublished() {
    const client = await getClient()

    const findBookByPublished = `
        SELECT * FROM books WHERE published_year = $1
    `

    const findBookByPublishedValue = [1990]

    await client.query(findBookByPublished, findBookByPublishedValue)
}

findBookByPublished()