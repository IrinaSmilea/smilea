import {Headline} from "@/shared/ui";

import styles from "../pricelist/styles.module.css";
export default async function ContactsPage() {
    return (
        <div className={styles.container}>
            <Headline size={1}>Контакты</Headline>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 10,
                    marginBottom: "60px"
                }}
            >
                <span className={styles.text}>
                    Адрес: пр. Луначарского, 64А
                </span>
                <span className={styles.text}>Телефон: +7 (921) 895-65-71</span>
                <span className={styles.text}>Телефон: +7 (812) 516-00-27</span>
                <span className={styles.text}>Режим работы:</span>
                <span className={styles.text}>Пн-Пт: 09:00-20:00</span>
                <span className={styles.text}>Сб-Вс: 11:00-20:00</span>
            </div>

            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A0d40cc1e48015ce7eea952d98de51511824833824372f3096bdfc6fdb70ee940&amp;source=constructor"
                frameBorder={0}
                width={"100%"}
                height={600}
            ></iframe>
        </div>
    );
}
