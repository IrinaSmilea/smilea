import credentials from "./credentials.json"; 
import { JWT } from "google-auth-library"; 
import { google } from "googleapis"; 
import { mapPriceListSheetItemsToPriceListItems } from "@/shared/mappers";
import { PriceListSheets } from "@/shared/models"; 

const email = "smilea@spiritual-verve-456609-j3.iam.gserviceaccount.com";
const key = credentials.private_key.replace(/\\n/g, "\n");
const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
const spreadSheetId = "1Kj9AmF69LKnsDZqyU5SWuCqpkvDg3qbUd-5K9a0PdNs";

const jwt = new JWT({
    email,
    key,
    scopes,
});


export async function getPriceListTherapySheet(sheet: PriceListSheets) {
    try {
        const sheets = google.sheets({ version: "v4", auth: jwt });
        
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: spreadSheetId,
            range: sheet,
        });

        if (!response.data.values || response.data.values.length === 0) {
            console.warn("No data found in the specified range.");
            return [];
        }

        const sheetWithHeaders = response.data.values as string[][];
        const sheetOfPriceListSheet = sheetWithHeaders.slice(1);


        return mapPriceListSheetItemsToPriceListItems(sheetOfPriceListSheet);
    } catch (error) {
        console.error("Error fetching data from Google Sheets:", error);
        throw error; 
    }
}