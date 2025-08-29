import { createContext, useEffect, useMemo, useState } from "react";
import type { Article } from "./types/types";
import PostService from "./API/PostService";
import { useLocation } from "react-router";

interface Props {
    children: React.ReactNode;
}

type Headlines = {
    articles: Article[];
    totalResults: number;
    status: string;
};

interface Context {
    setHeadlines: React.Dispatch<React.SetStateAction<Headlines>>;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    searchFilter: Article[];
}

export const Context = createContext<Context | []>([]);

export const ContextProvider: React.FC<Props> = ({ children }) => {
    const [headlines, setHeadlines] = useState<Headlines>({
        articles: [],
        totalResults: 0,
        status: "ok",
    });
    const [search, setSearch] = useState("");
    const location = useLocation();
    const category = location.pathname;

    const fetch = async () => {
        if (location.pathname.startsWith("/category")) {
            const res = await PostService.getHeadlinesByCategory(category);
            setHeadlines(res.data);
        } else if (location.pathname === "/") {
            const res = await PostService.getHeadlines();
            setHeadlines(res.data);
        }
    };

    const searchFilter = useMemo(() => {
        if (search) {
            return headlines.articles.filter((article) => {
                return article.title.toLocaleLowerCase().includes(search);
            });
        }
        return headlines.articles;
    }, [search, headlines]);

    useEffect(() => {
        fetch();
    }, [location.pathname]);

    return <Context.Provider value={{ searchFilter, setHeadlines, search, setSearch }}>{children}</Context.Provider>;
};
