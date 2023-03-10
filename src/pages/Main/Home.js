import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import {
  clearFilter,
  toggleBrand,
  toggleStock,
} from "../../redux/actions/filterAction";
import { loadProduct } from "../../redux/actions/productAction";
import loadProductData from "../../redux/thunk/products/fetchProducts";

const Home = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const filters = useSelector((state) => state.filter.filters);
  const { brands, stock, keyword } = filters;

  useEffect(() => {
    /*    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => dispatch(loadProduct(data.data))); */
    dispatch(loadProductData());
  }, [dispatch]);

  const activeClass = "text-white  bg-indigo-500 border-white";

  let content;
  if (products.length) {
    content = products.map((product) => (
      <ProductCard key={product.model} product={product} />
    ));
  }
  if (products.length && (stock || brands.length || keyword)) {
    content = products
      .filter((product) => {
        if (stock) {
          return product.status === true;
        } else {
          return product;
        }
      })
      .filter((product) => {
        if (brands.length) {
          return brands.includes(product.brand);
        }
        return product;
      })
      .filter((product) => {
        if (keyword.length) {
          return keyword.toLowerCase().includes(product.model.toLowerCase());
        }
        return product;
      })
      .map((product) => <ProductCard key={product.model} product={product} />);
  }
  /* if (products.length && keyword) {
    content = products
      .filter((product) => {
        if (keyword.length) {
          return product.model.toLowerCase().includes(keyword.toLowerCase());
        }
        return product;
      })
      .map((product) => <ProductCard key={product.model} product={product} />);
  } */

  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${
            stock ? activeClass : null
          } `}
          onClick={() => dispatch(toggleStock())}
        >
          In Stock
        </button>
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("amd") ? activeClass : null
          } }`}
          onClick={() => dispatch(toggleBrand("amd"))}
        >
          AMD
        </button>
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("intel") ? activeClass : null
          } }`}
          onClick={() => dispatch(toggleBrand("intel"))}
        >
          Intel
        </button>
        <button
          className={`border px-3 py-2 rounded-full font-semibold  }`}
          onClick={() => dispatch(clearFilter())}
        >
          Clear
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {content}
      </div>
    </div>
  );
};

export default Home;
