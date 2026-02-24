import {Metadata} from "next";

import {Headline} from "@/shared/ui";

import styles from "./styles.module.css";

export const metadata: Metadata = {
    title: "Акции в стоматологической клинике Смайл-А",
    description:
        "Уникальные предложения и акции в стоматологии Смайл-А. " +
        "Узнайте о текущих акциях в стоматологической клинике Смайл-А и получите специальные предложения на лечение зубов" +
        " и уход за полостью рта. Радуйтесь здоровым улыбкам с нами!",
    // openGraph: {
    //     title: "Акции в стоматологической клинике Смайл-А",
    //     description:
    //         "Уникальные предложения и акции в стоматологии Смайл-А. " +
    //         "Узнайте о текущих акциях в стоматологической клинике Смайл-А и получите специальные предложения на лечение зубов" +
    //         " и уход за полостью рта. Радуйтесь здоровым улыбкам с нами!",
    //     phoneNumbers: "+7 (921) 895-65-71",
    //     siteName: "smilea.ru",
    //     type: "website",
    //     images: [
    //         {
    //             href: "/static/og_discounts.png",
    //             width: 1200,
    //             height: 630,
    //             url: "https://smilea.ru/discounts",
    //         },
    //     ],
    // },
};

 const Discounts = () => {
    return (
        <div className={styles.container}>
            <Headline size={1}>Акции</Headline>
            <div className={styles.discountList}>
                <div className={styles.discountBlock}>
                    <div className={styles.textBlock}>
                        <div>
                            <span className={styles.title}>
                                Скидка 10% на лечение кариеса.*
                            </span>
                        </div>
                        <div>
                            <span className={styles.description}>
                                Почему кариес — не просто дырка в зубе?<br />

                                • Кариес часто воспринимают, как мелкую проблему: «потемнело — потом полечу». Но на самом деле это хронический инфекционный процесс, который затрагивает не только эмаль!<br />

                                • Кариес начинается незаметно — с деминерализации эмали, без боли и явной «дырки».<br />
                                • Затем бактерии проникают глубже — в дентин, а позже могут добраться до нерва.<br />

                                • Без лечения кариес приводит к пульпиту, воспалению, боли, инфекции и даже потере зуба.  <br />
                                Записывайтесь на консультацию, чтобы выявить кариес на ранней стадии и быстрее решить вопрос со здоровьем и красотой вашей улыбки!<br />
                                
                            </span>
                        </div>
                        <div>
                            <div>
                                <span className={styles.costTitle}>
                                    Стоимость услуги:
                                </span>
                                <span className={styles.cost}>
                                    Рассчитывается после консультации специалиста
                                </span>
                            </div>
                            <div>
                                <span className={styles.costTitle}>
                                    Срок проведения акции:
                                </span>
                                <span className={styles.cost}>до 10 марта 2026 года</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.image_discount1}></div>
                </div>
                <div className={styles.discountBlock}>
                    <div className={styles.textBlock}>
                        <div>
                            <span className={styles.title}>
                               -10% на полный съёмный протез в «СМАЙЛ—А»*
                            </span>
                        </div>
                        <div>
                            <span className={styles.description}>
                            До 10 марта 2026 года у нас действует акция: скидка 10% на изготовление полного съёмного протеза!<br />

                            Если вы или ваши близкие столкнулись с потерей зубов — не стоит мириться с неудобством!<br />

                            Съёмный протез:<br />
                                • восстанавливает жевательную функцию<br />
                                • возвращает комфорт в общении<br />
                                • улучшает эстетику и уверенность в себе<br />

                            Подберём оптимальное решение, учтём все анатомические особенности и сделаем всё, чтобы вы снова улыбались без стеснения!<br />
                            Записывайтесь на консультацию, ведь вы имеете право на красивую улыбку!
                            </span>
                        </div>
                        <div>
                            <div>
                                <span className={styles.costTitle}>
                                    Стоимость услуги:
                                </span>
                                <span className={styles.cost}>
                                    Рассчитывается после консультации специалиста
                                </span>
                            </div>
                            <div>
                                <span className={styles.costTitle}>
                                    Срок проведения акции: 
                                </span>
                                <span className={styles.cost}>до 10 марта 2026 года</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.image_discount8}></div>
                </div>
                   <div className={styles.discountList}>
                <div className={styles.discountBlock}>
                    <div className={styles.textBlock}>
                        <div>
                            <span className={styles.title}>
                                Профессиональная гигиена (чистка зубных отложений) 5100 ₽ вместо 6400 ₽.*
                            </span>
                        </div>
                        <div>
                            <span className={styles.description}>
                                Профессиональная гигиена полости рта — это не просто уход, а важная процедура для здоровья и красоты вашей улыбки.
                                Во время чистки стоматолог аккуратно удаляет налёт и зубной камень даже из труднодоступных мест под десной, проводит полировку эмали и наносит укрепляющий состав.

                                Результат — гладкие, чистые зубы, свежее дыхание и защита от кариеса и воспалений дёсен.<br /><br />
                                Регулярная профессиональная чистка помогает сохранить здоровье зубов и сияние улыбки на долгие годы.  
                                
                            </span>
                        </div>
                        <div>
                            <div>
                                <span className={styles.costTitle}>
                                    Стоимость услуги:
                                </span>
                                <span className={styles.cost}>
                                    5100 рублей
                                </span>
                            </div>
                            <div>
                                <span className={styles.costTitle}>
                                    Срок проведения акции:
                                </span>
                                <span className={styles.cost}>до 10 марта 2026 года</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.image_discount9}></div>
                </div>
                 
             </div>   
                <span className={styles.offer}>
                    *Предложение не является публичной офертой. Необходима консультация специалиста.
                </span>
            </div>
        </div>
    );
};


export default Discounts