
use("buahDB");

db.sales.find({
    total: { $gt: 100000 } 
});