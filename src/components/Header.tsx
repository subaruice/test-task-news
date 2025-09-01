import { Newspaper } from "lucide-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { Context } from "../Context";
import PostService from "../API/PostService";

interface Context {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const categories = ["business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"];

const Header = () => {
    const { search, setSearch, setHeadlines } = useContext<Context | any>(Context);

    const fetchOnKey = async () => {
        const res = await PostService.getArticleByQuery(search);
        setHeadlines(res.data);
    };

    const onKeyDown = (e: any) => {
        if (e.key === "Enter") {
            e.preventDefault();
            fetchOnKey();
        }
    };

    return (
        <header className="px-5 py-2 gap-10 flex flex-col">
            <div className="flex  gap-5 justify-center">
                <Link to={"/"}>
                    <Newspaper className="ml-10 h-10 w-10" />
                </Link>
                <input
                    onKeyDown={onKeyDown}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
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
