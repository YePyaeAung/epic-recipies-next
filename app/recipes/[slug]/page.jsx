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

const RecipePage = ({ params }) => {
    const { slug } = params;
    const recipe = getContent(slug);
    console.log(recipe);
    return (
        <section className="markdown-content pb-10">
            <Markdown>{recipe.content}</Markdown>
            <hr className="mt-5" />
        </section>
    );
};

export default RecipePage;
