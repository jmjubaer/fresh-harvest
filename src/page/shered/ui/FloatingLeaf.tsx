import Image from "next/image";
import leaf from "@/assets/leaf.png";
import clsx from "clsx";

const FloatingLeaf = ({ className }: { className: string }) => {
    return (
        <Image
            src={leaf}
            alt='Floating Leaf'
            className={clsx("absolute w-28 -z-10", className)}
        />
    );
};

export default FloatingLeaf;
