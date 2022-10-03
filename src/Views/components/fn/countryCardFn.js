// Looping through the country object... // working...
export const filterViewed = (country, countries) => {
    const filteredCountries = (item) => {
        const itemLowercase = item.name.common.toLowerCase();
        if (itemLowercase.trim() === country) {
            return item;
        }
    };
    const filtered = countries.filter(filteredCountries);

    return filtered;
};

// Filtering individual country fn... // working...
export const viewedCountry = (countryName, countries) => {
    const filteredCountry = filterViewed(countryName, countries);
    return filteredCountry[0];
};

// UPDATING THE BORDERS...

// Function that stores the border countries in an array....
export const updateBorder = (borderArray, viewedCountryState, countries) => {
    const result = borderArrFn(borderArray, viewedCountryState, countries);

    return result;
};

export const borderArrFn = (borderArray, viewedCountryState, countries) => {
    const result = [];
    if (viewedCountryState !== undefined && viewedCountryState !== []) {
        viewedCountryState.forEach((item) => {
            const bordersArr = filterBorder(item, countries);

            result.push(bordersArr[0]);
        });
    }

    return result;
};

// Returning the country object with the borders from border updater... // working...
export const filterBorder = (border, countries) => {
    function filteredBorder(item) {
        const country = item.cca3;

        return country === border;
    }

    const borderObj = countries.filter(filteredBorder);
    return borderObj;
};