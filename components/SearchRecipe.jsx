import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchRecipe = ({ searchValue, setSearchValue }) => {
    return (
        <div className="relative w-1/2 mb-5 ml-auto">
            <Input
                placeholder="search recipe..."
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
            />
            {searchValue && (
                <Button
                    variant="ghost"
                    className="absolute inset-y-0 right-0 px-3 text-gray-500 hover:text-gray-700"
                    onClick={() => setSearchValue("")}
                >
                    <X className="w-4 h-4" />
                </Button>
            )}
        </div>
    );
};

export default SearchRecipe;
