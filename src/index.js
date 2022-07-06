const main = (operations) => {
    let absProfit = 0;
    let portfolioTickers = new Set(operations.map((item) => (item.ticker)));
    let portfolio = Object.create(null);

    operations.filter((item) => (item.type === "SELL")).forEach((item) => (
        absProfit += item.price * item.qnt));
    operations.filter((item) => (item.type === "BUY")).forEach((item) => (
        absProfit -= item.price * item.qnt));

    portfolioTickers.forEach((ticker) => {
        let profitByTicker = 0;
        operations.filter((item) => (item.ticker === ticker)).filter((item) => (item.type === "SELL")).forEach((item) => (
            profitByTicker += item.price * item.qnt));
        operations.filter((item) => (item.ticker === ticker)).filter((item) => (item.type === "BUY")).forEach((item) => (
            profitByTicker -= item.price * item.qnt));
            portfolio[`${ticker}`] = profitByTicker;
    });

    return {
        absProfit: absProfit,
        portfolio: portfolio

    };
}

module.exports = main;