
const SectionTag = ({ tag }: { tag: string }) => {
    // todo: Transparent 
    return (
        <p className='bg-[#e4e8df] capitalize text-secondary px-2 py-1 rounded text-lg Z-10 w-fit'>
            {tag}
        </p>
    );
};

export default SectionTag;
