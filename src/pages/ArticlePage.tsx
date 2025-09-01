import { memo, useContext } from "react";
import { Link, useParams } from "react-router";
import { Context } from "../Context";
import type { Article } from "../types/types";

const ArticlePage = memo(() => {
    const { searchFilter, sideItems } = useContext<Article[] | any>(Context);
    const updated = [...searchFilter, ...sideItems.articles];
    const { articleID } = useParams();
    const article: Article = updated.find((post: Article) => {
        return post.url === articleID ? encodeURIComponent(articleID) : "";
    });

    return (
        <>
            {article && (
                <div className="p-5 flex text-black/80 flex-col gap-3">
                    <div className="font-semibold text-[18px] text-center py-5">{article.title}</div>
                    <img className="rounded-lg" src={searchFilter ? `${article.urlToImage}` : "no-image.jpg"} alt="" />
                    <div className="flex justify-between px-2">
                        <p className="text-blue-500 text-[16px]">{article.source.name}</p>
                        <p className="font-semibold font-[cursive]">{article.author}</p>
                    </div>
                    <div className="flex justify-end gap-3 px-2">
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
                    <p>
                        {article.content}{" "}
                        <Link className="text-black/60 underline" to={article.url}>
                            Continue reading
                        </Link>
                    </p>
                </div>
            )}
        </>
    );
});

export default ArticlePage;
