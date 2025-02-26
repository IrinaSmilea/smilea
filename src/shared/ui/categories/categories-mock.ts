import {Category} from "./categories.props";
import {PriceListSheets, PriceListUrls} from "@/shared/models";

export const categoriesMock: Category[] = [
    {
        id: PriceListUrls.Therapy,
        displayName: PriceListSheets.Therapy,
    },
    {
        id: PriceListUrls.Orthopedics,
        displayName: PriceListSheets.Orthopedics,
    },
    {
        id: PriceListUrls.Surgery,
        displayName: PriceListSheets.Surgery,
    },
    {
        id: PriceListUrls.Implantology,
        displayName: PriceListSheets.Implantology,
    },
    // {
    //     id: PriceListUrls.Aesthetic,
    //     displayName: PriceListSheets.Aesthetic,
    // },
    {
        id: PriceListUrls.Orthodontics,
        displayName: PriceListSheets.Orthodontics,
    },
    // {
    //     id: PriceListUrls.Periodontology,
    //     displayName: PriceListSheets.Periodontology,
    // },
    {
        id: PriceListUrls.Child,
        displayName: PriceListSheets.Child,
    },
];
