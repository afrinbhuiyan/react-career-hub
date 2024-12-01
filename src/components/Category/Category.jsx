
const Category = ({ category }) => {
    const { logo, category_name, availability } = category;
    return (
        <div className="mt-10 mb-20">
                <img className="bg-[#1111] p-3 rounded-lg my-4" src={logo} alt="" />
                <p className="font-bold text-[20px] mb-1 " > {category_name} </p>
                <p> {availability} </p>
        </div>
    );
};

export default Category;