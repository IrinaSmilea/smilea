import {PriceList} from "@/shared/ui";
import {getPriceListTherapySheet} from "@/shared/api/google";
import {getCategorySheet} from "@/shared/utils";

import {CategoryProps} from "./props";
import {PriceListUrls} from "@/shared/models";

export async function generateStaticParams() {
    return [
        {category: PriceListUrls.Implantology},
        {category: PriceListUrls.Child},
        {category: PriceListUrls.Orthodontics},
        {category: PriceListUrls.Orthopedics},
        {category: PriceListUrls.Therapy},
        {category: PriceListUrls.Surgery},
    ];
}
export default async function PriceListTherapyPage({
    params: {category},
}: CategoryProps) {
    const priceList = await getPriceListTherapySheet(
        getCategorySheet(category),
    );

    return <>{priceList && <PriceList list={priceList} />}</>;
}
