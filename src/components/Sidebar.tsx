import { useContext } from "react";
import type { Article } from "../types/types";
import { Context } from "../Context";
import { Link } from "react-router";

interface Side {
    totalResults: number
    status: string;
    articles: Article[]
}

const Sidebar = () => {
    const {sideItems} = useContext<Side | any>(Context)
    return (
       <div className="py-5 flex max-w-[20%] min-w-[20%] flex-col gap-2">
        <h4 className="font-semibold py-5 text-center text-[18px]">Popular</h4>
           <div className="flex flex-col gap-3"> 
            {sideItems && sideItems.articles.map((article: Article) => (
                <Link to={`article/${encodeURIComponent(article.url)}`} className="p-3 rounded-lg border border-black/20">
                    <img className="rounded-lg mb-2" src={article.urlToImage ?`${article.urlToImage}` : 'no-image.jpg'} alt="" />
                    <p>{article.title}</p>
                </Link>
            ))}
           </div>
       </div>
    );
};

export default Sidebar ;