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

export default () => {
    return (
        <div className={styles.container}>
            <Headline size={1}>Акции</Headline>
            <div className={styles.discountList}>
                <div className={styles.discountBlock}>
                    <div className={styles.textBlock}>
                        <div>
                            <span className={styles.title}>
                                3 импланта по цене 2! Также: Бесплатная
                                развернутая консультация с составлением плана
                                лечения ортопеда и хирурга-имплантолога
                            </span>
                        </div>
                        <div>
                            <span className={styles.description}>
                                Наша клиника предлагает Вам получить развернутую
                                консультацию от наших опытных специалистов -
                                ортопеда и хирурга-имплантолога. Также мы
                                предлагаем специальное предложение: три импланта
                                по цене двух! Они составят для Вас
                                индивидуальный план лечения, учитывая все Ваши
                                потребности и особенности. Запишитесь на прием и
                                сделайте первый шаг к здоровой и красивой
                                улыбке!
                            </span>
                        </div>
                        <div>
                            <div>
                                <span className={styles.costTitle}>
                                    Стоимость услуги:
                                </span>
                                <span className={styles.cost}>
                                    рассчитывается после консультации
                                </span>
                            </div>
                            <div>
                                <span className={styles.costTitle}>
                                    Срок проведения акции:
                                </span>
                                <span className={styles.cost}>бессрочно</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.image_discount0}></div>
                </div>
                {/*<div className={styles.discountBlock}>*/}
                {/*    <div className={styles.textBlock}>*/}
                {/*        <div>*/}
                {/*            <span className={styles.title}>*/}
                {/*                Лечение кариеса любой сложности по выгодной*/}
                {/*                цене!*/}
                {/*            </span>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <span className={styles.description}>*/}
                {/*                Не дайте кариесу разрушить вашу улыбку! Мы*/}
                {/*                предлагаем эффективное и безболезненное лечение*/}
                {/*                кариеса по доступной цене. Наши опытные*/}
                {/*                стоматологи позаботятся о здоровье ваших зубов и*/}
                {/*                вернут им красоту и прочность.*/}
                {/*            </span>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <div>*/}
                {/*                <span className={styles.costTitle}>*/}
                {/*                    Стоимость услуги:*/}
                {/*                </span>*/}
                {/*                <span className={styles.cost}>2990₽</span>*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                <span className={styles.costTitle}>*/}
                {/*                    Срок проведения акции:*/}
                {/*                </span>*/}
                {/*                <span className={styles.cost}>*/}
                {/*                    19 апреля - 19 мая*/}
                {/*                </span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className={styles.image_discount3}></div>*/}
                {/*</div>*/}
                {/* <div className={styles.discountBlock}>
                    <div className={styles.textBlock}>
                        <div>
                            <span className={styles.title}>
                                Профессиональная ультразвуковая чистка со
                                скидкой 50%!
                            </span>
                        </div>
                        <div>
                            <span className={styles.description}>
                                Подарите себе сияющую улыбку с профессиональной
                                ультразвуковой чисткой зубов! Избавьтесь от
                                зубного камня, налёта и верните зубам
                                естественную белизну по специальной цене. Наши
                                специалисты обеспечат вашим зубам максимально
                                эффективное и бережное очищение, используя
                                передовое оборудование и высококачественные
                                материалы.
                            </span>
                        </div>
                        <div>
                            <div>
                                <span className={styles.costTitle}>
                                    Стоимость услуги:
                                </span>
                                <span className={styles.cost}>1990₽</span>
                            </div>
                            <div>
                                <span className={styles.costTitle}>
                                    Срок проведения акции:
                                </span>
                                <span className={styles.cost}>
                                    19 апреля - 19 мая
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.image_discount1}></div>
                </div> */}
            </div>
        </div>
    );
};
