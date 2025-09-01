import { Outlet } from "react-router";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = () => {
    return (
        <div className="p-2 md:p-5 flex flex-col">
            <Header />
            <div className="flex gap-2">
                <Outlet />
                <Sidebar />
            </div>
        </div>
    );
};

export default Layout;
