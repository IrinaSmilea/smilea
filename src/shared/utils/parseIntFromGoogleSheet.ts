export function parseIntFromGoogleSheet(value: string | undefined): number {
    if (value === undefined || value === null) {
        console.warn("Received undefined or null value in parseIntFromGoogleSheet");
        return 0;
    }
    
    return parseInt(value.replaceAll(' ', '').replaceAll(',', ''), 10);
}
