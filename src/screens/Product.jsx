import FilterableProductTable from "../Components/Product/FilterableProductTable.jsx";
import { useSelector } from "react-redux";

const Product = () => {
  const PRODUCTS = useSelector((state) => state.product.dataProduct);

  return (
    <FilterableProductTable products={PRODUCTS} />
  )
}

export default Product;