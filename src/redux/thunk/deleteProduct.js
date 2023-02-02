import { deleteProduct } from "../actions/productAction";

const deleteProductData = (_id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/product/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(deleteProduct(_id));
    }
  };
};

export default deleteProductData;
