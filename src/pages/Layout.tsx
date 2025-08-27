import { Outlet } from "react-router";
import Header from "../components/Header";
import { useEffect, useMemo, useState } from "react";
import PostSerive from "../API/PostService";

const Layout = () => {
    const [headlines, setHeadlines] = useState();

    const getHeadlines = async() => {
        const res = await PostSerive.getHeadlines();
        setHeadlines(res.data);
    }

    useEffect(() => {
        getHeadlines()
    },[])

    const contextValue = useMemo(() => ({headlines}), [headlines]);

    return (
       <div className="p-2 md:p-5">
           <Header />
           <Outlet context={contextValue}/>
       </div>
    );
};

export default Layout ;