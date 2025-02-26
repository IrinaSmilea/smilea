import {nanoid} from "nanoid";

export function mapPriceListSheetItemsToPriceListItems(sheetData: string[][]) {
    return sheetData.map((row: string[]) => {
        // Проверка, что строка содержит достаточно элементов
        if (row.length < 2) {
            console.warn("Row does not have enough columns:", row);
            return { code:row[0], name: row[0], cost: null, id: nanoid() }; // Возвращаем значение по умолчанию
        }

        return { code:row[0], name: row[0], cost: row[1], id: nanoid() };
    }); 
}

