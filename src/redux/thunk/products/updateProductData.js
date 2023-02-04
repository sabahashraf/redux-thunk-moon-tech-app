import { addProduct, updateProduct } from "../../actions/productAction";

const updateProductData = (product) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/product/${product._id}`, {
      method: "PATCH",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.modifiedCount) {
      dispatch(updateProduct(product));
    }
  };
};

export default updateProductData;
