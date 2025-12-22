"use client";
import ProductCard from "@/page/shered/ui/ProductCard";
import SectionHeading from "@/page/shered/ui/SectionHeading";
import {
    useGetAllCategoryQuery,
    useGetAllProductsQuery,
} from "@/redux/features/product/productApi";
import { TCategory, TProduct } from "@/types";
import { Pagination, Spin } from "antd";
import { useState } from "react";

const Shop = () => {
    const [page, setPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const { data, isLoading, error } = useGetAllProductsQuery(undefined);
    const { data: categoryData, isLoading: isCategoryLoading } =
        useGetAllCategoryQuery(undefined);
    console.log(data, error);
    console.log(categoryData);
    // Todo: filter by category in frontend filter method
    return (
        <div className='container pt-24 pb-10'>
            <SectionHeading
                // tag='Our Products'
                title='Our Fresh Products'
                description='We pride ourselves on offering a wide variety of fresh and
                flavorful fruits, vegetables, and salad ingredients.'></SectionHeading>

            <Spin
                tip='Loading'
                spinning={isLoading || isCategoryLoading}
                size='large'>
                {" "}
                <div className='mx-auto w-fit mt-4 flex items-center sm:gap-6 gap-3'>
                    <button
                        onClick={() => setSelectedCategory("All")}
                        className={`${
                            selectedCategory === "All"
                                ? "bg-secondary text-white "
                                : ""
                        } md:px-6 px-3 md:py-3 py-2 text-[#A6A6A6] rounded-md  sm:text-lg text-xs border cursor-pointer`}>
                        All
                    </button>
                    {categoryData?.data?.map((category: TCategory) => (
                        <button
                            key={category?.id}
                            onClick={() =>
                                setSelectedCategory(category?.categoryName)
                            }
                            className={`${
                                selectedCategory === category?.categoryName
                                    ? "bg-secondary text-white "
                                    : ""
                            } md:px-6 px-3 md:py-3 py-2 text-[#A6A6A6] rounded-md  md:text-lg text-xs border cursor-pointer capitalize`}>
                            {category?.categoryName}
                        </button>
                    ))}
                </div>
                <div className='mt-8 grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-5 min-h-screen'>
                    {data?.data?.slice(0, 8).map((product: TProduct) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </Spin>
            <Pagination
                align='center'
                pageSize={20}
                current={page}
                onChange={(value) => setPage(value)}
                total={50}
            />
        </div>
    );
};

export default Shop;
