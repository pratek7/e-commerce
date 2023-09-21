import React from "react";

const Category = ({ categories, setSelectedCategory }) => {
  return (
    <div className="flex justify-evenly bg-slate-400 py-2">
      {categories.map((category) => (
        <div key={category}>
          <p
            className="font-bold text-[1.5rem] mt-6 cursor-pointer hover:text-slate-500"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Category;
