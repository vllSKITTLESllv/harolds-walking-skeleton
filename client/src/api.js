const api = {
	getProducts: async () => {
		await fetch(`${process.env.REACT_APP_API_URL}/products`, {
			headers: {
				"Content-Type": "application/json",
			},
		});
	},
};

export default api;
