import Link from "next/link";

import styles from "./banner.module.css";

export const Banner = () => {
    return (
        <section className={styles.container}>
            <div className={styles.titleSection}>
                <h1 className={styles.h1}>Стоматологическая клиника Смайл-А</h1>
                <h2 className={styles.h2}>Лечить зубы - это просто!</h2>
                <div className={styles.linkContainer}>
                    <Link className={styles.link} href="/about">
                        О стоматологии
                    </Link>
                    <Link className={styles.link} href="/pricelist/therapy">
                        Список услуг
                    </Link>
                </div>
            </div>
            <div className={styles.serviceBlock}>
                <div className={styles.priceBlock}>
                    {/* <span className={styles.serviceName}>
                        Профессиональная ультразвуковая чистка*
                    </span>
                    <div className={styles.imageMobile}></div>
                    <span className={styles.servicePrice}>1990₽</span> */}
                    <Link className={styles.link} href="tel:+78125160027">
                        Записаться на приём
                    </Link>
                    {/* <span className={styles.offer}>
                        *Предложение не является публичной офертой
                    </span> */}
                </div>
            </div>
            <div className={styles.background}></div>
            <div className={styles.image}></div>
        </section>
    );
};
