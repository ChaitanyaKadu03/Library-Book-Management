import { Client } from 'pg'

export async function getClient() {
    const client = new Client("random")
    await client.connect()
    return client
}