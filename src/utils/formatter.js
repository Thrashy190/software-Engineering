export function formatCurrencyToMXN(amount) {
    const formattedAmount = new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
    }).format(amount);

    return formattedAmount;
}
