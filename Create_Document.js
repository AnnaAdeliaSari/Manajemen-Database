use("buahDB");

db.sales.insertOne({
    nama: "Apel",
    jumlah: 5,
    hargaSatuan: 15000,
    total: 75000,
    pelanggan: "Siti",
    tanggal: new Date()
});

db.sales.insertOne({
    nama: "Jeruk",
    jumlah: 10,
    hargaSatuan: 8000,
    total: 80000,
    pelanggan: "Budi",
    tanggal: new Date()
});

db.sales.insertOne({
    nama: "Mangga",
    jumlah: 3,
    hargaSatuan: 12000,
    total: 36000,
    pelanggan: "Andi",
    tanggal: new Date()
});