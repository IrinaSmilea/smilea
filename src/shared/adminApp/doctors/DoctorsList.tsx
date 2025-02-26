import {Datagrid, DateField, List, TextField} from "react-admin";

export const DoctorsList = () => {
    return (
        <List resource="doctors" hasCreate={true}>
            <Datagrid>
                <TextField source="name" label="ФИО" sortable />
                <TextField source="profession" label="Должность" sortable />
                <DateField
                    source="created_at"
                    label="Запись создана"
                    sortable
                />
                <DateField
                    source="updated_at"
                    label="Запись обновлена"
                    sortable
                />
            </Datagrid>
        </List>
    );
};
