import { createContext, useEffect, useState } from "react";
import type { Article } from "./types/types";
import PostService from "./API/PostService";
import { useLocation } from "react-router";

interface Props {
    children: React.ReactNode;
}

interface Context {
    headlines: Article[];
    setHeadlines: React.Dispatch<React.SetStateAction<Article[]>>;
}

export const context = createContext<Context | []>([]);

export const ContextProvider: React.FC<Props> = ({ children }) => {
    const [headlines, setHeadlines] = useState<Article[]>([]);
    const location = useLocation();
    const category = location.pathname;

    const fetch = async () => {
        if (location.pathname.startsWith("/category")) {
            const res = await PostService.getHeadlinesByCategory(category);
            setHeadlines(res.data);
        } else if (location.pathname === "/") {
            const res = await PostService.getHeadlines()
            setHeadlines(res.data);
        }
    };

    useEffect(() => {
        fetch();
    }, [location.pathname]);

    return <context.Provider value={{ headlines, setHeadlines }}>{children}</context.Provider>;
};
