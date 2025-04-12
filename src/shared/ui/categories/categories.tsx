"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

import {CategoriesProps} from "./categories.props";
import styles from "./categories.module.css";

export const Categories = ({categories}: CategoriesProps) => {
    const category = usePathname().split("/")[2];
    console.log(categories)

    return (
        <div className={styles.categoryList}>
            {categories.map((item) => {
                return (
                    <Link
                        key={item.id}
                        href={{
                            pathname: `/pricelist/${item.id}`,
                        }}
                        className={
                            category === item.id ? styles.linkActive : undefined
                        }
                    >
                        {item.displayName}
                    </Link>
                );
            })}
        </div>
    );
};
