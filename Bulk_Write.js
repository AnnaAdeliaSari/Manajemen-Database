
use("buahDB");

db.sales.bulkWrite([
    {
        insertOne: {
            document: {
                nama: "Pisang",
                jumlah: 15,
                hargaSatuan: 4000,
                total: 60000,
                pelanggan: "Rina",
                tanggal: new Date()
            }
        }
    },
    {
        updateOne: {
            filter: { pelanggan: "Budi" },
            update: { $set: { hargaSatuan: 9000, total: 90000 } }
        }
    },
    {
        deleteOne: {
            filter: { pelanggan: "Andi" }
        }
    }
]);