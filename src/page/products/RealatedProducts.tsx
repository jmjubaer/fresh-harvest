"use client";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { Spin } from "antd";
import SectionTag from "../shered/ui/SectionTag";
import ProductCard from "../shered/ui/ProductCard";
type TProps = {
    productId: string;
    category: string;
};
const RelatedProduct = ({ category, productId }: TProps) => {
    // Todo: Change api to get related product by category
    const { data, isLoading } = useGetAllProductsQuery(undefined);

    const products: TProduct[] = data?.data ?? [];
    const relatedProducts = products.filter(
        (product) =>
            product?.category?.categoryName === category &&
            product?.id !== productId
    );
    return (
        <div className='md:my-32 my-16'>
            <div className='text-center flex flex-col items-center'>
                <SectionTag tag='Our Products' />
                <h2 className='sm:text-5xl text-3xl font-medium mt-4'>
                    Related products
                </h2>
            </div>
            <Spin tip='Loading' spinning={isLoading} size='large'>
                {" "}
                <div className='mt-8 grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 md:gap-6 gap-5'>
                    {relatedProducts?.length > 0 ? relatedProducts.map((product: TProduct) => (
                        <ProductCard key={product.id} product={product} />
                    )) : <p className="text-cente text-4xl text-shadow font-semibold mt-10 col-span-4">There has no related Product. Products add soon .....</p>}
                </div>
            </Spin>
        </div>
    );
};

export default RelatedProduct;
