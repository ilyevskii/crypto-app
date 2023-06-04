import {usePortfolio, PortfolioCurrency} from "contexts";
import {Currency} from "services";

export const usePortfolioFunctions = () => {

    const {portfolio, setPortfolio} = usePortfolio();


    const addPortfolioCurrency = (currency: Currency, amount: number): void => {

        if (portfolio.currencies.some((saved_currency: PortfolioCurrency) => saved_currency.id === currency.id)) {
            portfolio.currencies.map((saved_currency: PortfolioCurrency) => {
                if (saved_currency.id === currency.id) {
                    saved_currency.amount += amount;
                    saved_currency.initial_investments = (+saved_currency.initial_investments + amount * +currency.priceUsd).toFixed(3);
                    saved_currency.current_investments = (+saved_currency.current_investments! + amount * +currency.priceUsd).toFixed(3);
                }
            })
        } else {
            portfolio.currencies.push({
                id: currency.id,
                name: currency.name,
                rank: currency.rank,
                amount: amount,
                priceUsd: currency.priceUsd,
                is_profit: true,
                initial_investments: (amount * +currency.priceUsd).toFixed(3),
                current_investments: (amount * +currency.priceUsd).toFixed(3),
                difference_usd: "0.000",
                difference_percent: "0.000"
            });
        }

        setPortfolio(portfolio);
        updatePortfolioInfo();
    }

    const removePortfolioCurrency = (currency_id: string): void => {

        if (portfolio.currencies.some((currency: PortfolioCurrency) => currency.id === currency_id)) {
            portfolio.currencies = portfolio.currencies.filter((saved_currency: PortfolioCurrency) => {
                return saved_currency.id !== currency_id;
            })

            setPortfolio(portfolio);
            updatePortfolioInfo();
        }
    }

    const updatePortfolioInfo = (): void => {
        portfolio.balance = "0";
        portfolio.difference_usd = "+0";

        for (let currency of portfolio.currencies) {
            portfolio.balance = (+portfolio.balance + +currency.current_investments!).toFixed(3);
            portfolio.difference_usd = (currency.is_profit ? "+" : "") +
                (+portfolio.difference_usd + +currency.difference_usd!).toFixed(3);
        }

        portfolio.is_profit = +portfolio.difference_usd >= 0;
        portfolio.difference_percent = (portfolio.is_profit ? "+" : "") +
            (+portfolio.difference_usd / +portfolio.balance || 0).toFixed(3);

        setPortfolio(portfolio);
    }

    const updatePortfolioCurrencies = (currencies: any[]): void => {

        portfolio.currencies = portfolio.currencies.map((saved_currency: PortfolioCurrency) => {

            const currency = currencies.find((curr: Currency) => curr.id === saved_currency.id);
            const current_investments = saved_currency.amount * +currency.priceUsd;
            const difference_usd = current_investments - +saved_currency.initial_investments;
            const is_profit = difference_usd >= 0;

            return {
                id: saved_currency.id,
                rank: saved_currency.rank,
                amount: saved_currency.amount,
                initial_investments: saved_currency.initial_investments,
                name: currency.name,
                priceUsd: currency.priceUsd,
                current_investments: (current_investments).toFixed(3),
                is_profit: is_profit,
                difference_usd: (is_profit ? "+" : "") + difference_usd.toFixed(3),
                difference_percent: (is_profit ? "+" : "") + (difference_usd / +saved_currency.initial_investments || 0).toFixed(3)
            }
        });

        setPortfolio(portfolio);
        updatePortfolioInfo();
    }


    return {
        portfolio,
        addPortfolioCurrency,
        removePortfolioCurrency,
        updatePortfolioCurrencies
    }
};