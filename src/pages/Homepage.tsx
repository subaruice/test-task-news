import { useOutletContext } from "react-router";
import type { Article } from "../types/types";

interface OutletContextType {
    headlines: {
        articles: Article[];
        totalResults: number;
        status: string;
    };
}

const Homepage = () => {
    const { headlines } = useOutletContext<OutletContextType>();
    return (
        <div className="p-5 flex flex-col gap-3">
            <h1 className="text-center">Breaking NEWS</h1>
            <div className=" flex flex-wrap justify-center gap-7 cursor-pointer">
                {headlines?.articles?.map((article) => (
                    <div className="hover:bg-black/10 text-black/80 flex flex-col w-80 rounded-xl ">
                        <img src={`${article.urlToImage}`} className="rounded-xl" alt="hoho" />
                        <div className="p-2 flex flex-col gap-1 flex-1">
                            <p className="text-blue-500 text-[12px]">{article.source.name}</p>
                            <p>{article.title}</p>
                            <p className="text-[12px] text-black/50 text-right">{new Date(article.publishedAt).toLocaleDateString()}</p>
                            <p className="text-black/70 font-semibold mt-auto text-center pb-2">Read more</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Homepage;
