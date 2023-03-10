import db from '../config/database.js'

// get all products 
export const getProducts = (result) => {
    db.query("SELECT * FROM product", (err, results) => {
        if (err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
    })
}

// get single product 
export const getProductById = (id, result) => {
    db.query("SELECT * FROM product WHERE id =?", [id], (err, results) => {
        if (err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results[0])
        }
    })
}

// insert product to databaseId
export const insertProduct = (data, result) => {
    db.query("INSERT INTO product SET?", [data], (err, results) => {
        if (err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results[0])
        }
    })
}

// update product to database 
export const updateProductById = (data, id, result) => {
    db.query(
        "UPDATE product SET name = ?, price = ? WHERE id = ?",
        [data.name, data.price, id],
        (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        }
    );
};

// Delete product from database
export const deleteProductById = (id, result) => {
    db.query("DELETE FROM product WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};