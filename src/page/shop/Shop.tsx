"use client";
import ProductCard from "@/page/shered/ui/ProductCard";
import SectionHeading from "@/page/shered/ui/SectionHeading";
import {
    useGetAllCategoryQuery,
    useGetAllProductsQuery,
} from "@/redux/features/product/productApi";
import { TCategory, TProduct } from "@/types";
import { Pagination, Spin } from "antd";
import { useEffect, useMemo, useState } from "react";

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const { data, isLoading } = useGetAllProductsQuery(undefined);
    const { data: categoryData, isLoading: isCategoryLoading } =
        useGetAllCategoryQuery(undefined);
    const [page, setPage] = useState(1);
    const pageSize = 8;

    //Category filter ======================
    const filteredProducts = useMemo(() => {
        let products: TProduct[] = data?.data ?? [];

        if (selectedCategory !== "All") {
            products = products.filter(
                (p) => p.category?.categoryName === selectedCategory
            );
        }

        return products;
    }, [data, selectedCategory]);

    // pagination function ====================
    const skip = (page - 1) * pageSize;
    const totalPage = Math.ceil(filteredProducts.length / pageSize);
    console.log(totalPage);
    const displayedProducts = useMemo(() => {
        return filteredProducts.slice(skip, skip + pageSize);
    }, [filteredProducts, skip, pageSize]);

    // Rest page ==============================
    useEffect(() => {
        () => setPage(1);
    }, [selectedCategory]);

    useEffect(() => {
        () => setPage(1);
    }, [selectedCategory]);
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
                <div className='mt-8 grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-5'>
                    {displayedProducts.map((product: TProduct) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </Spin>
            <div className='mt-8'>
                <Pagination
                    className=''
                    align='center'
                    pageSize={pageSize}
                    current={page}
                    onChange={(value) => {
                        setPage(value);
                        window.scrollTo({
                            top: 150,
                            behavior: "smooth",
                        });
                    }}
                    total={filteredProducts?.length}
                />
            </div>
        </div>
    );
};

export default Shop;
