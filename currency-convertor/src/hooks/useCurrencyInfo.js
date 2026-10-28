
import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                const response = await fetch(
                    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
                );

                if (!response.ok) {
                    throw new Error("Currency data fetch failed");
                }

                const result = await response.json();
                setData(result[currency] || {});
            } catch (error) {
                console.error("Currency API error:", error);
                setData({});
            }
        };

        fetchCurrency();
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
