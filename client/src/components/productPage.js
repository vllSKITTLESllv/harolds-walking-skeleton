import { useEffect, useState } from "react";
import api from "../api";

const ProductPage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await api.getProducts();
				if (!result.ok) {
					throw new Error("API connection Error");
				}
				const data = await result.json();
				setProducts(data.products);
			} catch (error) {
				throw new Error("Fetch data request failed");
			}
		};
		fetchData();
	}, []);

	return (
		<div>
			<h1>{products.name}</h1>
			<h2>{products.price}</h2>
			<p>{products.description}</p>
		</div>
	);
};

export default ProductPage;
