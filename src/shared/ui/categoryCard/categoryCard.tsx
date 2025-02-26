import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import type {CategoryCardProps} from "./categoryCard.props";
import styles from "./categoryCard.module.css";
export const CategoryCard = ({
    name,
    description,
    imageUrl,
    to,
    size = "md",
}: CategoryCardProps) => {
    const containerStyles = classNames(styles.container);

    return (
        <div className={containerStyles}>
            <h3>{name}</h3>
            <span>{description}</span>
            <Link href={to}>Подробнее об услугах</Link>
            <Image src={imageUrl} alt={name} />
        </div>
    );
};
