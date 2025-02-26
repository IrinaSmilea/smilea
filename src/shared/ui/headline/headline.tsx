import {HeadlineProps} from "./headline.props";
import styles from "./headline.module.css";

export const Headline = ({size, children}: HeadlineProps) => {
    switch (size) {
        case 6: {
            return <h6 className={styles.h6}>{children}</h6>;
        }
        case 5: {
            return <h5 className={styles.h5}>{children}</h5>;
        }
        case 4: {
            return <h4 className={styles.h4}>{children}</h4>;
        }
        case 3: {
            return <h3 className={styles.h3}>{children}</h3>;
        }
        case 2: {
            return <h2 className={styles.h2}>{children}</h2>;
        }
        case 1:
        default: {
            return <h1 className={styles.h1}>{children}</h1>;
        }
    }
};
