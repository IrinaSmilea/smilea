import {convertNumberToCost} from "@/shared/utils";

import {PriceListItemProps} from "./PriceListItem.props";
import styles from "./priceList.module.css";



export const PriceListItem = ({item}: PriceListItemProps) => {

    return (
        <div className={styles.item}>
            <div className={styles.name}>{item.name}</div>
            {item.cost && 
            <div>{convertNumberToCost(item.cost)}</div>
            }
            

        </div>
    );
};
