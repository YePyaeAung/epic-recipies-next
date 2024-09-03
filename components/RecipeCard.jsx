import { ArrowUpRight, CalendarDays, Clock, User } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Link from "next/link";

const RecipeCard = ({ recipe }) => {
    const { title, cook_time, author, created_at, description } = recipe;
    return (
        <Card className="my-4">
            <CardHeader>
                <p className="text-lg font-bold my-2">{title}</p>
                <div className="md:flex items-center gap-2">
                    <Badge className="mb-4 sm:mb-0">
                        <User className="w-4 h-4 me-1" />
                        <p className="text-xs">{author}</p>
                    </Badge>
                    <Badge>
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
                    <Badge className="w-fit mb-4 sm:mb-0">
                        <Clock className="w-4 h-4 me-1" />
                        <p className="text-xs">{cook_time}</p>
                    </Badge>
                    <Link href={"/"} className="flex items-center gap-1">
                        <p>Read more</p>
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </CardFooter>
        </Card>
    );
};

export default RecipeCard;
