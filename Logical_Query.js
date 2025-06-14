

use("buahDB");

db.sales.find({
    $and: [
        { jumlah: { $gte: 5 } },
        { nama: "Apel" }
    ]
});