export function convertNumberToCost(input: string | number | undefined): string {
    if (input === undefined || String(input).trim() === '') {
        return '';
    }
    const sanitizedInput = String(input).trim();

    const rangeMatch = sanitizedInput.match(/(\d+)-(\d+)/);
    if (rangeMatch) {
        const start = rangeMatch[1];
        const end = rangeMatch[2];

        if (end === "00") {
            return `${start} ₽`; 
        }

        return `${sanitizedInput} ₽`;
    }

    const numString = sanitizedInput.replace(/[^0-9.]/g, '');

    const cleanedNumberString = numString.replace(/\.0+$/, '');

    if (cleanedNumberString === '') {
        return '';
    }

    const formattedNumber = cleanedNumberString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    return `${formattedNumber} ₽`; 
}
