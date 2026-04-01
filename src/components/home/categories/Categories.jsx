import useFetchQuery from "../../../hooks/useFetchQuery";
import ErrorAlert from "../../ErrorAlert";
import CategoryItems from "./CategoryItems";


const Categories = () => {
    const {data : category, isLoading, error} = useFetchQuery('category', "/category/")
    
    return (
        <div className='max-w-7xl mx-auto py-16'>
            <div className='flex justify-between items-center '>
                <h1 className='text-3xl md:text-4xl font-bold'>Explore Categories</h1>
                <a href="" className='btn btn-secondary py-4 px-8 rounded-full shadow'>View All</a>
            </div>
            {/* Spinner */}
            {
                isLoading && <div className='flex justify-center items-center my-5'><span className="loading loading-bars loading-xl"></span></div>
            }
            {/* Errors Message */}
            {
                error && <ErrorAlert message={error?.message} />
            }
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-10'>
                {
                    category?.map((category, index) => (
                        <CategoryItems key={category.id} index={index} category={category} />
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;