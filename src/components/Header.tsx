import { Newspaper } from "lucide-react";
import { Link } from "react-router";

const categories = ["business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"];

const Header = () => {
    return (
        <header className="px-5 py-2 gap-10 flex flex-col">
            <div className="flex  gap-5 justify-center">
                <Link to={'/'}>
                    <Newspaper className="ml-10 h-10 w-10" />
                </Link>
                <input
                    type="text"
                    placeholder="Search by whatever"
                    className="text-black/80 w-[50%] outline-none mx-auto px-2 border border-black/20 rounded-xl"
                />
            </div>
            <nav className=" flex justify-evenly  text-black/80 font-medium">
                {categories.map((cat, i) => (
                    <Link
                        key={i}
                        to={`/category/${cat}`}
                        className="border-b border-black/30 cursor-pointer hover:font-semibold"
                    >
                        {cat}
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default Header;
