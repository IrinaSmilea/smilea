import {
    Create,
    Form,
    ImageField,
    ImageInput,
    required,
    SaveButton,
    SimpleForm,
    TextInput,
    Toolbar,
} from "react-admin";

const validation = (values: any) => {
    const errors: Record<string, string> = {};

    if (!values.name) {
        errors.name = "Поле ФИО пустое. Необходимо заполнить поле!";
    }

    if (!values.profession) {
        errors.profession = "Поле Должность пустое. Необходимо заполнить поле!";
    }

    if (!values.photo) {
        errors.photo = "Вы не загрузили фотографию, пожалуйста, загрузите ее!";
    }

    return errors;
};

export const DoctorCreate = () => {
    return (
        <Create>
            <SimpleForm
                toolbar={
                    <Toolbar>
                        <SaveButton label="Создать запись" />
                    </Toolbar>
                }
                validate={validation}
                reValidateMode="onBlur"
            >
                <TextInput
                    name="ФИО"
                    source="name"
                    label="ФИО"
                    fullWidth
                    required
                />

                <TextInput
                    name="Должность"
                    source="profession"
                    label="Должность"
                    fullWidth
                    validate={[required()]}
                />

                <ImageInput
                    name="Фотография"
                    source="photo"
                    label="Фотография"
                    isRequired
                    fullWidth
                    placeholder={<p>Нажмите или перетащите фотографию сюда</p>}
                >
                    <ImageField
                        source="src"
                        sx={{
                            "& .RaImageField-image": {
                                width: 320,
                                height: "auto",
                                objectFit: "contain",
                            },
                        }}
                    />
                </ImageInput>
            </SimpleForm>
        </Create>
    );
};
