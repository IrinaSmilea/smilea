import {Banner, Footer, Navbar, PageLayout} from "@/shared/ui";

import styles from "./page.module.css";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <PageLayout>
                <Banner />
            </PageLayout>
            <Footer />
        </>
    );
}
