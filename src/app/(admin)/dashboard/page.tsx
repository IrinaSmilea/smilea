import dynamic from "next/dynamic";
import {NextPage} from "next";

const AdminAppComponent = dynamic(() => import("@/shared/adminApp/AdminApp"), {
    ssr: false,
});

const DashboardPage: NextPage = () => <AdminAppComponent />;

export default DashboardPage;
