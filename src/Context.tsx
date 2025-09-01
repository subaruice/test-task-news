import { createContext, useEffect, useMemo, useState } from "react";
import type { Article } from "./types/types";
import PostService from "./API/PostService";
import { useLocation, useNavigate } from "react-router";

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
    sideItems: Headlines;
}

export const Context = createContext<Context | []>([]);

export const ContextProvider: React.FC<Props> = ({ children }) => {
    const [sideItems, setSideItems] = useState<Headlines>({
        articles: [],
        totalResults: 0,
        status: "ok",
    })
    const [headlines, setHeadlines] = useState<Headlines>({
        articles: [],
        totalResults: 0,
        status: "ok",
    });
    const [search, setSearch] = useState("");
    const location = useLocation();
    const category = location.pathname;
    const navigate = useNavigate();

    const fetch = async () => {
        setSearch("");
        if (location.pathname.startsWith("/category")) {
            const res = await PostService.getHeadlinesByCategory(category);
            localStorage.setItem("articles", JSON.stringify(res.data));
            const local = localStorage.getItem("articles");
            const ready = local ? JSON.parse(local) : [];
            setHeadlines(ready);
        } else if (location.pathname === "/") {
            const res = await PostService.getHeadlines();
            localStorage.setItem("articles", JSON.stringify(res.data));
            const local = localStorage.getItem("articles");
            const ready = local ? JSON.parse(local) : [];
            setHeadlines(ready);
        }
    };

    

    const searchFilter = useMemo(() => {
        if (search && !location.pathname.startsWith('/article') ) {
            return headlines.articles.filter((article) => {
                return article.title.toLocaleLowerCase().includes(search);
            });
        }
        return headlines.articles;
    }, [search, headlines]);

    useEffect(() => {
        fetch();
    }, [location.pathname]);

    useEffect(() => {
        const sideItems = async () => {
                const res = await PostService.getSideItems();
                localStorage.setItem("sideItems", JSON.stringify(res.data));
                setSideItems(res.data)
        };
        sideItems();
    }, []);

    return <Context.Provider value={{ sideItems ,searchFilter, setHeadlines, search, setSearch }}>{children}</Context.Provider>;
};
