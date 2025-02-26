import {DoctorCardProps} from "./doctorCard.props";
import styles from "./doctorCard.module.css";

export const DoctorCard = ({name, profession, imageUrl}: DoctorCardProps) => {
    return <div className={styles.doctorCard}>
        <div className={styles.doctorPhoto} style={{backgroundImage: `url(${imageUrl}`}}></div>
        <div className={styles.doctorName}>{name}</div>
        <div className={styles.doctorProfession}>{profession}</div>
    </div>
};
