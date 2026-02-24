import Link from "next/link";

import styles from "./banner.module.css";
import Discounts from "@/app/(main)/discounts/page";


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
                    <span className={styles.serviceName}>
                        Семейная скидка 5%*
                    </span>
                    <span className={styles.serviceName}>
                        Индивидуальная скидка на имплантацию*
                    </span>
                    <div className={styles.imageMobile}></div>
                    <Link className={styles.link} href="tel:+78125160027">
                        Записаться на приём
                    </Link>
                    <span className={styles.offer}>
                        *Предложение не является публичной офертой
                    </span>
                </div>
            </div>
            <div className={styles.background}></div>
            <div className={styles.image}></div>
            <Discounts/>
        </section>
    );
};
