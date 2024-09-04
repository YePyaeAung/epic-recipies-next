import RecipeList from "@/components/RecipeList";
import getRecipesMetaData from "@/lib/getRecipesMetaData";

export default function Home() {
    const recipes = getRecipesMetaData("recipes");

    return (
        <div className="w-5/6 mx-auto">
            <RecipeList recipes={recipes} />
        </div>
    );
}
