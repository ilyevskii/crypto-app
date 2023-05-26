import {usePortfolio, PortfolioCurrency} from "contexts";
import {CoincapService} from "services";


export const usePortfolioFunctions = () => {

    const {portfolio, setPortfolio, currencies, setCurrencies} = usePortfolio();


    const addCurrency = (currency_id: string, name:string, rate: string, amount: number) => {
        portfolio.current_investments += amount * Number(rate);
        portfolio.initial_investments += amount * Number(rate);

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
                name: name,
                amount: amount,
                initial_investments: amount * Number(rate),
                current_investments: amount * Number(rate),
            });
        }

        setCurrencies(currencies);
        setPortfolio(portfolio);
    }

    const removeCurrency = (currency_id: string) => {

        if (currencies.some((currency: PortfolioCurrency) => currency.id === currency_id)) {
            let new_currencies = currencies.filter((saved_currency: PortfolioCurrency) => {
                if (saved_currency.id === currency_id) {
                    portfolio.current_investments -= saved_currency.current_investments;
                    portfolio.initial_investments -= saved_currency.initial_investments;
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

    const updateCurrencyRates = () => {

        currencies.map(async (currency: PortfolioCurrency, index) => {
            const result = await CoincapService.getCurrencyRate(currency.id);
            currency.current_investments = result.data * currency.amount;
            if (index) portfolio.current_investments += currency.current_investments;
            else portfolio.current_investments = currency.current_investments;
            setPortfolio(portfolio);
        })
        setCurrencies(currencies);
    }

    const getDifferences = () => {
        const differenceUsd: string = (portfolio.current_investments - portfolio.initial_investments).toFixed(3);
        const profit: boolean = !differenceUsd.startsWith("-");
        const differencePercent: string = ((+differenceUsd / portfolio.initial_investments) || 0).toFixed(2);

        return {
            differenceUsd,
            differencePercent,
            profit
        }
    }

    return {
        portfolio,
        currencies,
        addCurrency,
        removeCurrency,
        updateCurrencyRates,
        getDifferences
    }
};