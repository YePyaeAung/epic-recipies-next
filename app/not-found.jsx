import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
    return (
        <section className="text-center">
            <h2 className="text-3xl font-bold mb-2">404 Not Found !!!</h2>
            <p className="mb-10">Could not find requested resource</p>
            <Button asChild>
                <Link href="/">Return Home</Link>
            </Button>
        </section>
    );
};

export default NotFound;
