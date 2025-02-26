"use client";

import {Admin, EditGuesser, ListGuesser, Resource} from "react-admin";
import {LoginPage} from "ra-supabase";

import {AppwriteResources} from "@/shared/models";

import {sbAuthProvider, sbDataProvider} from "./supabase";
import {DoctorsList} from "@/shared/adminApp/doctors/DoctorsList";
import {DoctorCreate} from "@/shared/adminApp/doctors/DoctorCreate";

const AdminApp = () => {
    return (
        <Admin
            dataProvider={sbDataProvider}
            authProvider={sbAuthProvider}
            requireAuth={true}
            loginPage={LoginPage}
        >
            <Resource
                name={AppwriteResources.Doctors}
                list={DoctorsList}
                edit={EditGuesser}
                create={DoctorCreate}
            />
        </Admin>
    );
};

export default AdminApp;
