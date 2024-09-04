"use client";

import { useState } from "react";
import RecipeCard from "./RecipeCard";
import SearchRecipe from "./SearchRecipe";

const RecipeList = ({ recipes }) => {
    const [searchValue, setSearchValue] = useState("");
    const filteredRecipe = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
        <section>
            <SearchRecipe
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <h2 className="text-xl font-bold">Popular Recipes</h2>
            {filteredRecipe.length === 0 && (<p className="my-4 text-center">No Recipe Fond.</p>)}
            {filteredRecipe.map((recipe, index) => (
                <RecipeCard recipe={recipe} key={index} />
            ))}
        </section>
    );
};

export default RecipeList;
