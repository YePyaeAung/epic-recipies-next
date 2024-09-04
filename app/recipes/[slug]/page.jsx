import getRecipesMetaData from "@/lib/getRecipesMetaData";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { notFound } from "next/navigation";

const getContent = slug => {
    const folder = "recipes";
    const file = `${folder}/${slug}.md`;

    if (!fs.existsSync(file)) {
        notFound();
    }

    const content = fs.readFileSync(file, "utf8");
    const result = matter(content);
    return result;
};

export async function generateMetadata({ params }) {
    const slug = params.slug;

    const title = slug
        ? `Epic Recipes - ${slug
              .replace(/_/g, " ")
              .split(" ")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}`
        : "";

    return {
        title,
    };
}

export async function generateStaticParams() {
    const recipes = getRecipesMetaData("recipes");

    return recipes.map(recipe => ({
        slug: recipe.slug,
    }));
}

const RecipePage = ({ params }) => {
    const { slug } = params;
    const recipe = getContent(slug);
    return (
        <section className="markdown-content pb-10">
            <Markdown>{recipe.content}</Markdown>
        </section>
    );
};

export default RecipePage;
