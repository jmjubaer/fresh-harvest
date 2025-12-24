"use client";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import ProductCard from "../shered/ui/ProductCard";
import { Spin } from "antd";
import { TProduct } from "@/types";

const ManageProducts = () => {
    const { data, isLoading, error } = useGetAllProductsQuery(undefined);

    return (
        <div className='pt-20'>
            <Spin tip='Loading' spinning={isLoading} size='large'>
                {" "}
                <div className='mt-8 grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-5 min-h-screen'>
                    {data?.data?.slice(0, 8).map((product: TProduct) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </Spin>
        </div>
    );
};

export default ManageProducts;
