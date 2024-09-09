import { ArrowUpRight, CalendarDays, Clock, User } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Link from "next/link";

const RecipeCard = ({ recipe }) => {
    const { title, cook_time, author, created_at, description, slug } = recipe;
    return (
        <Card className="my-4">
            <CardHeader>
                <p className="md:text-lg font-bold my-2">{title}</p>
                <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="secondary">
                        <User className="w-4 h-4 me-1" />
                        <p className="text-xs">{author}</p>
                    </Badge>
                    <Badge variant="secondary">
                        <CalendarDays className="w-4 h-4 me-1" />
                        <p className="text-xs">{created_at}</p>
                    </Badge>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm font-medium">{description}</p>
            </CardContent>
            <CardFooter>
                <div className="sm:flex items-center justify-between w-full">
                    <Badge variant="secondary" className="w-fit mb-4 sm:mb-0">
                        <Clock className="w-4 h-4 me-1" />
                        <p className="text-xs">{cook_time}</p>
                    </Badge>
                    <Link
                        href={`/recipes/${slug}`}
                        className="flex items-center gap-1 hover:underline"
                    >
                        <p className="font-bold">Read more</p>
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </CardFooter>
        </Card>
    );
};

export default RecipeCard;
