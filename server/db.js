const { Pool } = require("pg");
const types = require("pg").types;

types.setTypeParser(1700, function (val) {
	return parseFloat(val);
});

const pool = new Pool({
	connectionString: process.env.BATABASE_URL,
	ssl: process.env.DATABASE_URL
		? {
				rejectUnauthorized: false,
		  }
		: false,
});

module.exports = {
	query: (text, params, callback) => {
		return pool.query(text, params, callback);
	},
	end: () => {
		pool.end();
	},
};
