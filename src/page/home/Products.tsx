"use client";
import {
    useGetAllCategoryQuery,
    useGetAllProductsQuery,
} from "@/redux/features/product/productApi";
import { TCategory, TProduct } from "@/types";
import { Spin } from "antd";
import { useState } from "react";
import SectionHeading from "../shered/ui/SectionHeading";
import ProductCard from "../shered/ui/ProductCard";
import ButtonOutline from "../shered/ui/ButtonOutline";
import FloatingLeaf from "../shered/ui/FloatingLeaf";
import Link from "next/link";

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const { data, isLoading } = useGetAllProductsQuery(undefined);
    const { data: categoryData, isLoading: isCategoryLoading } =
        useGetAllCategoryQuery(undefined);

    const products: TProduct[] = data?.data ?? [];
    const displayedProducts =
        selectedCategory === "All"
            ? products.slice(0, 8)
            : products.filter(
                  (product) =>
                      product?.category?.categoryName === selectedCategory
              );
    return (
        <div className='container relative pt-40'>
            <SectionHeading
                tag='Our Products'
                title='Our Fresh Products'
                description='We pride ourselves on offering a wide variety of fresh and
                flavorful fruits, vegetables, and salad ingredients.'></SectionHeading>

            <Spin
                tip='Loading'
                spinning={isLoading || isCategoryLoading}
                size='large'>
                {" "}
                <div className='mx-auto w-fit mt-4 flex flex-wrap justify-center items-center sm:gap-6 gap-3'>
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
                    {displayedProducts.map((product: TProduct) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </Spin>
            {/* Floating leaf */}
            <div className=''>
                <FloatingLeaf className=' right-5 top-10 -rotate-45' />
                <FloatingLeaf className=' left-5 top-20' />
            </div>
            {/* See more button */}
            <div className='text-center mt-8 `'>
                <Link
                    href={"/shop"}
                    className='px-8 py-4 cursor-pointer text-lg font-semibold mt-4 rounded-lg text-primary border'>
                    See All Products
                </Link>
            </div>
        </div>
    );
};

export default Products;
