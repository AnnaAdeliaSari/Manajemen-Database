
const prompt = require('prompt-sync')();
const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        const db = client.db("db_wide_column");
        const collection = db.collection("students");

        const jumlah = 5;
        console.log("=== INPUT DATA MODEL WIDE-COLUMN ===");
        for (let i = 0; i < jumlah; i++) {
            console.log(`\nData ke-${i + 1}`);
            const username = prompt("username: ");
            const password = prompt("password: ");
            const role = prompt("role: ");
            const status= prompt("status: ");
            const last_login = prompt("last_login: ");

            await collection.insertOne({
                username: username,
                password: password,
                role: role,
                status: status,
                last_login: last_login
            });
        }

        const hasil = await collection.find().toArray();
        console.log("\nData berhasil dimasukkan:");
        console.table(hasil);
    } catch (err) {
        console.error("Terjadi kesalahan:", err);
    } finally {
        await client.close();
    }
}

main();
