import {Categories, Headline} from "@/shared/ui";
import {categoriesMock} from "@/shared/ui/categories/categories-mock";
import {PropsWithChildren} from "react";

import styles from "./styles.module.css";

export default async function PriceListLayout({children}: PropsWithChildren) {
    return (
        <>
            <Headline size={1}>Услуги</Headline>
            <div className={styles.container}>
                <Categories categories={categoriesMock} />
                {children}
            </div>
        </>
    );
}
