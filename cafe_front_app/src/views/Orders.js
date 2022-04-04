import { useState } from "react";

import Product from "../components/orders/products";
import Category from "../components/orders/categories";
import OrderBadges from "../components/orders/orderBadges";

function Orders() {
  return (
    <>
      <Category />
      <Product />
      <OrderBadges />
    </>
  );
}

export default Orders;
