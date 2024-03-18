export const getProducts = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/products`);

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading products: ", error);
  }
};
