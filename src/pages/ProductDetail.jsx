import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../redux/productSlice";
import ProductDetailComp from "../components/ProductDetailComp";
import Loading from "../components/Loading";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);
  return (
    <div>
      {productDetailStatus === "LOADING" ? (
        <Loading />
      ) : (
        <ProductDetailComp productDetail={productDetail} />
      )}
    </div>
  );
};

export default ProductDetail;
