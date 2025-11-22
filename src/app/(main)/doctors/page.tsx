import {Headline} from "@/shared/ui";
import {DoctorCard} from "@/shared/ui/doctorCard/doctorCard";

import styles from "./styles.module.css";

export default function DoctorsPage() {
    return (
        <>
            <Headline size={1}>Наши врачи</Headline>
            <div className={styles.doctorsWrap}>
                <DoctorCard name={"Бородулин Иван Владимирович"} imageUrl="/static/images/doctor_6.jpg" profession={"Хирург"} />
                <DoctorCard name={"Дуков Руслан Витальевич"} imageUrl="/static/images/doctor_3.jpg" profession={"Врач-ортопед"} />
                <DoctorCard name={"Сидоренко Евгения Александровна"} imageUrl="/static/images/doctor_0.jpg" profession={"Терапевт"} />
                <DoctorCard name={"Цыварева Екатерина Евгеньевна"} imageUrl="/static/images/doctor_7.jpg" profession={"Терапевт"} />
                <DoctorCard name={"Зверькова Татьяна Михайловна"} imageUrl="/static/images/doctor_4.jpg" profession={"Терапевт"} />
                <DoctorCard name={"Кичемасова Анна Юрьевна"} imageUrl="/static/images/doctor_5.jpg" profession={"Ассистент"} />
                <DoctorCard name={"Кузина Елена Николаевна"} imageUrl="/static/images/doctor_2.jpg" profession={"Ассистент"} />     
             
            </div>
        </>
    );
}
