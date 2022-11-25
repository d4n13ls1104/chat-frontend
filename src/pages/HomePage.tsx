import { Dashboard } from "../components/nav/Dashboard";
import { NavSidebar } from "../components/nav/NavSidebar";
import { RightPanel } from "../components/nav/RightPanel";

export const HomePage = () => {
    return (
        <>
            <NavSidebar />
            <Dashboard />
            <RightPanel />
        </>
    );
};
