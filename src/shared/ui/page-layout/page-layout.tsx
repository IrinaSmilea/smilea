import {PropsWithChildren} from "react";
import classNames from "classnames";
import { YMInitializer } from 'react-yandex-metrika';

import styles from "./page-layout.module.css";

export const PageLayout = ({children}: PropsWithChildren) => {
    return (
        <main className={classNames("container", styles.layout)}>
            <YMInitializer
        accounts={[103953677]} // ваш ID счетчика Яндекс.Метрики
        options={{
          webvisor: true,
          trackLinks: true,
          accurateTrackBounce: true,
          clickmap: true
        }}
        version="2"
      />
            {children}
        </main>
    );
};
