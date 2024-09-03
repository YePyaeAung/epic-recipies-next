import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
    return (
        <section>
            <h2 className="text-xl font-bold">Popular Recipes</h2>
            {recipes.map(recipe => (
                <RecipeCard recipe={recipe} />
            ))}
        </section>
    );
};

export default RecipeList;
