function formatMoney(amount, locale = 'en-IN', currency = 'INR') {
    let amountNumber = Number(amount);
    if (isNaN(amountNumber)) {
        amountNumber = 0;
    }

    return amountNumber.toLocaleString(locale, {
        style: 'currency',
        currency,
        minimumFractionDigits: 0,
    });
}

export default formatMoney;