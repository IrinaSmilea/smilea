import Script from "next/script";
import {Headline, VkReviews} from "@/shared/ui";

import styles from "../pricelist/styles.module.css";
export default async function FeedbackPage() {
    return (
        <div className={styles.container}>
            <Headline size={1}>Отзывы</Headline>
            <VkReviews />
        </div>
    );
}
