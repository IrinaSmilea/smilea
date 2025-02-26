import Link from "next/link";
import classNames from "classnames";

import styles from "./footer.module.css";
export const Footer = () => {
    return (
        <section className={styles.wrapper}>
            <section className={classNames("container", styles.container)}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <h3 className={styles.title}>Навигация</h3>
                        <Link href="/about" className={styles.text}>
                            О стоматологии
                        </Link>
                        <Link href="/pricelist" className={styles.text}>
                            Услуги
                        </Link>
                        <Link href="/feedback" className={styles.text}>
                            Отзывы
                        </Link>
                        <Link href="/contacts" className={styles.text}>
                            Контакты
                        </Link>
                    </div>
                    <div className={styles.column}>
                        <h3 className={styles.title}>Контактная информация</h3>
                        <span className={styles.text}>
                            Адрес: пр. Луначарского, 64А
                        </span>
                        <span className={styles.text}>
                            Телефон: +7 (921) 895-65-71
                        </span>
                        <span className={styles.text}>
                            Телефон: +7 (812) 516-00-27
                        </span>
                        <span className={styles.text}>Режим работы:</span>
                        <span className={styles.text}>Пн-Пт: 09:00-20:00</span>
                        <span className={styles.text}>Сб-Вс: 11:00-20:00</span>
                    </div>
                    <div className={styles.column}>
                        <h3 className={styles.title}>Нормативные документы</h3>
                        <Link href="/contacts" className={styles.text}>
                            Контакты
                        </Link>
                    </div>
                </div>
                <hr className={styles.separator} />
                <div className={styles.copyrightBlock}>
                    <span className={styles.text}>
                        © 2016 Смайл-А. All Rights Reserved
                    </span>
                    <span className={styles.text}>
                        Powered by teamgo Group LLC.
                    </span>
                </div>
            </section>
        </section>
    );
};
