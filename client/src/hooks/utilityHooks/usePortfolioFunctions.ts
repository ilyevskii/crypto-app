import {usePortfolio, PortfolioCurrency} from "contexts";


export const usePortfolioFunctions = () => {

    const {portfolio, setPortfolio, currencies, setCurrencies} = usePortfolio();


    const addCurrency = (currency_id: string, rate: string, amount: number) => {
        portfolio!.total_investments += amount * Number(rate);

        if (currencies.some((currency: PortfolioCurrency) => currency.id === currency_id)) {
            currencies.map((saved_currency: PortfolioCurrency) => {
                if (saved_currency.id === currency_id) {
                    saved_currency.amount += amount;
                    saved_currency.current_investments += amount * Number(rate);
                }
            })
        }
        else {
            currencies.push({
                id: currency_id,
                amount: amount,
                initial_investments: amount * Number(rate),
                current_investments: amount * Number(rate),
                previous_rate: Number(rate)

            });
            portfolio.total_currencies += 1;
        }

        setCurrencies(currencies);
        setPortfolio(portfolio);
    }

    const removeCurrency = (currency_id: string, rate: string) => {

        if (currencies.some((currency: PortfolioCurrency) => currency.id === currency_id)) {
            let new_currencies = currencies.filter((saved_currency: PortfolioCurrency) => {
                if (saved_currency.id === currency_id) {
                    portfolio.total_currencies -= 1;
                    portfolio.total_investments -= saved_currency.amount * Number(rate);
                    return false;
                }
                else {
                    return true;
                }
            })

            setCurrencies(new_currencies);
            setPortfolio(portfolio);
        }
    }


    return {
        portfolio,
        currencies,
        addCurrency,
        removeCurrency
    }
};