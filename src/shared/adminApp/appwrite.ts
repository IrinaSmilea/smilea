import {Client} from "appwrite";
import {AppwriteAuthProvider, AppwriteDataProvider} from "ra-appwrite";

import {AppwriteResources} from "@/shared/models";

const appId = "660a6de719e8efe9a3c3";
const appHost = "http://localhost/v1";

const appwriteClient = new Client();

appwriteClient.setProject(appId).setEndpoint(appHost);

const resourcesIds = {
    [AppwriteResources.Doctors]: "660aa1ce8f293ad2702d",
};

export const appwriteDataProvider = new AppwriteDataProvider(
    appwriteClient,
    resourcesIds,
);

export const appwriteAuthProvider = new AppwriteAuthProvider(appwriteClient);
