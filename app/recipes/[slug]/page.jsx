import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import getRecipesMetaData from "@/lib/getRecipesMetaData";
import fs from "fs";
import matter from "gray-matter";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
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
    const { author, created_at, cook_time, description } = recipe.data;
    return (
        <section className="w-5/6 mx-auto pb-10">
            <div className="mb-6 mt-4">
                <Link href="/" passHref>
                    <Button
                        variant="ghost"
                        className="p-0 hover:bg-transparent"
                    >
                        <ArrowLeft className="h-6 w-6 mr-2" />
                        Back to Recipes
                    </Button>
                </Link>
            </div>
            <div className="grid grid-cols-3 gap-6">
                <div className="markdown-content col-span-2">
                    <Markdown>{recipe.content}</Markdown>
                </div>
                <div className="col-span-1">
                    <Card className="p-6">
                        <div className="flex items-center gap-3 flex-wrap">
                            <Badge
                                variant="secondary"
                                className="flex items-center gap-1"
                            >
                                <User className="h-3 w-3" />
                                <span>{author}</span>
                            </Badge>
                            <Badge
                                variant="secondary"
                                className="flex items-center gap-1"
                            >
                                <CalendarDays className="h-3 w-3" />
                                <span>{created_at}</span>
                            </Badge>
                            <Badge
                                variant="secondary"
                                className="flex items-center gap-1"
                            >
                                <Clock className="h-3 w-3" />
                                <span>{cook_time}</span>
                            </Badge>
                        </div>
                        <p className="text-sm font-medium mt-3">
                            {description}
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default RecipePage;
