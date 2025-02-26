import {PriceListSheets, PriceListUrls} from "@/shared/models";

export function getCategorySheet(categoryUrl: PriceListUrls): PriceListSheets {
    switch (categoryUrl) {
        case PriceListUrls.Orthodontics:
            return PriceListSheets.Orthodontics;
        // case PriceListUrls.Aesthetic:
        //     return PriceListSheets.Aesthetic;
        case PriceListUrls.Orthopedics:
            return PriceListSheets.Orthopedics;
        case PriceListUrls.Surgery:
            return PriceListSheets.Surgery;
        case PriceListUrls.Implantology:
            return PriceListSheets.Implantology;
        // case PriceListUrls.Periodontology:
        //     return PriceListSheets.Periodontology;
        case PriceListUrls.Child:
            return PriceListSheets.Child;
        case PriceListUrls.Therapy:
        default:
            return PriceListSheets.Therapy;
    }
}
