import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import Category from "../Category/Category";

const CategoryList = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [] )

    return (
        <div>
            <h2 className="text-4xl text-center font-bold mt-20">Jobs Category List</h2>
            <p className="text-center text-[#11111196] ">Explore thousands of job opportunities with all the information you need. Its your future</p>
             <div className="flex justify-between">
                {
                    categories.map(category => <Category key={category.id} category={category} ></Category> )
                }
             </div>
        </div>
    );
};

export default CategoryList;