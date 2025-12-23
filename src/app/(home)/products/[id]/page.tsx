import SingleProduct from "@/page/products/SingleProduct";
import React from "react";

const SingleProductPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;
    return <SingleProduct id={id} />;
};

export default SingleProductPage;
