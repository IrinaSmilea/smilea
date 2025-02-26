import {PropsWithChildren} from "react";
import classNames from "classnames";

import styles from "./page-layout.module.css";

export const PageLayout = ({children}: PropsWithChildren) => {
    return (
        <main className={classNames("container", styles.layout)}>
            {children}
        </main>
    );
};
