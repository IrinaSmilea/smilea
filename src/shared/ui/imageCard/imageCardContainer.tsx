import {PropsWithChildren} from "react";

import styles from "./imageCard.module.css";

export const ImageCardContainer = ({children}: PropsWithChildren) => {
    return <section className={styles.container}>{children}</section>;
};
