
use("buahDB");

db.sales.updateOne(
    { pelanggan: "Siti" },
    { $set: { jumlah: 8, total: 120000 } }
);