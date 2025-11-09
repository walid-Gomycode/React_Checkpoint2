import React from "react";
import { product } from "../product";

const Description = () => {
  console.log(product.description);
  return (
    <div>
      <p>{product.description}</p>
    </div>
  );
};

export default Description;
