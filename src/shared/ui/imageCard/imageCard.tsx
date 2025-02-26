import classNames from "classnames";

import {ImageCardProps} from "./imageCard.props";
import styles from "./imageCard.module.css";

export const ImageCard = ({image, alt, text, isTitle}: ImageCardProps) => {
    const cardStyles = classNames(
        styles.card,
        isTitle && styles.isTitle
    );

    const textStyles = isTitle ? styles.textH1 : styles.textP;

    const imgStyle = isTitle ? styles.imgWide : styles.img;

    return (
        <div className={cardStyles} style={{backgroundImage: `url(${image}`}}>
            {isTitle ? (
                <h1 className={textStyles}>{text}</h1>
            ) : (
                <p className={textStyles}>{text}</p>
            )}
        </div>
    );
};
