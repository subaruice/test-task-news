import type { Article } from "../types/types";
import { memo, useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router";

const Homepage = memo(() => {
    const { searchFilter } = useContext<Article[] | any>(Context);
    console.log('render');
    
    return (
        <div className="p-5 flex flex-col gap-3">
            <h1 className="text-center py-5 font-semibold text-[20px]">Breaking NEWS</h1>
            <div className=" flex flex-wrap justify-center gap-7 cursor-pointer">
                {searchFilter.map((article: Article) => (
                    <Link to={`/article/${encodeURIComponent(article.url)}`} key={article.url} className="hover:border-b-2 text-black/80 flex flex-col w-80 rounded-xl ">
                        <img
                            src={article.urlToImage ? `${article.urlToImage}` : "no-image.jpg"}
                            className="rounded-xl"
                            alt="hoho"
                        />
                        <div className="p-2 flex flex-col gap-1 flex-1">
                            <p className="text-blue-500 text-[12px]">{article.source.name}</p>
                            <p>{article.title}</p>
                            <div className="flex justify-between items-center">
                                <p className="text-[12px] text-black/50 text-right">
                                    {new Date(article.publishedAt).toLocaleDateString()}
                                </p>
                                <p className="text-[12px] text-black/50 text-right">
                                    {new Date(article.publishedAt).toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </p>
                            </div>
                            <p className="text-black/70 font-semibold mt-auto text-center pb-2">Read more</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
});

export default Homepage;
