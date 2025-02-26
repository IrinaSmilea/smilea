import {PriceListProps} from "./PriceList.props";
import {PriceListItem} from "./PriceListItem";
import styles from "./priceList.module.css";


export const PriceList = ({list}: PriceListProps) => {
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <div>Наименование услуги</div>
                <div>Стоимость*</div>
            </div>
            {list.map((item) => (
                <PriceListItem item={item} key={item.id} />
            ))}
            <span className={styles.span}>
                *Стоимость услуг, в зависимости от сложности работ, может быть
                изменена
            </span>
        </section>
    );
};
