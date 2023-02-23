const express = require("express");
const router = express.Router();
const db = require("../db");

const getProducts = async () => {
	try {
		const result = await db.query(`SELECT * FROM product`);
		return result.rows;
	} catch (error) {
		throw Error(error);
	}
};

router.get("/", async (req, res, next) => {
	try {
		const products = await getProducts();
		return res.json(products);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
