import SectionTag from "./SectionTag";
type TProps = {
    tag: string;
    title: string;
    description: string;
};
const SectionHeading = ({ tag, title, description }: TProps) => {
    return (
        <div className='lg:w-[50%] sm:w-4/5 mx-auto text-center'>
            <SectionTag tag={tag} />
            <h2 className='mt-4 sm:text-5xl text-3xl font-medium'>{title}</h2>
            <p className='mt-4 text-sm font-secondary w-4/5 mx-auto'>
                {description}
            </p>
        </div>
    );
};

export default SectionHeading;
