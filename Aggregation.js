
use("buahDB");

db.sales.aggregate([
    {
        $group: {
            _id: "$nama",
            totalPenjualan: { $sum: "$total" },
            jumlahTransaksi: { $sum: 1 }
        }
    }
]);