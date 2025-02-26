import {PropsWithChildren} from "react";

import {Footer, Navbar, PageLayout} from "@/shared/ui";

export default function MainLayout({children}: PropsWithChildren) {
    return (
        <>
            <Navbar />
            <PageLayout>{children}</PageLayout>
            <Footer />
        </>
    );
}
