
use("buahDB");

db.createCollection("validated_sales", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nama", "jumlah", "hargaSatuan", "total", "pelanggan"],
            properties: {
                nama: {
                    bsonType: "string",
                    description: "Nama buah harus string"
                },
                jumlah: {
                    bsonType: "int",
                    minimum: 1,
                    maximum: 50,
                    description: "Jumlah harus antara 1-50"
                },
                hargaSatuan: {
                    bsonType: "int",
                    minimum: 1000,
                    maximum: 20000,
                    description: "Harga per satuan harus antara 1rb - 20rb"
                },
                total: {
                    bsonType: "int",
                    description: "Total = jumlah × hargaSatuan"
                },
                pelanggan: {
                    bsonType: "string",
                    description: "Nama pelanggan harus string"
                }
            }
        }
    }
});