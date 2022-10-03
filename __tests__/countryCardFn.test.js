describe("FILTERING DATA", () => {
    let countries;
    beforeEach(() => {
        countries = [{
                name: {
                    common: "DRC",
                },
            },
            {
                name: {
                    common: " Kenya",
                },
            },
            {
                name: {
                    common: "UganDa",
                },
            },
        ];
    });

    describe("filterViewed", () => {
        const filterViewed =
            require("../src/Views/components/fn/countryCardFn").filterViewed;
        it("should compare all kind of cases and return correct result", () => {
            const country = "uganda";
            const result = filterViewed(country, countries);
            const expected = [{
                name: {
                    common: "UganDa",
                },
            }, ];
            expect(result).toEqual(expected);
        });

        it("should remove any spaces outside a country name and return correct result", () => {
            const country = "kenya";
            const result = filterViewed(country, countries);
            const expected = [{
                name: {
                    common: " Kenya",
                },
            }, ];
            expect(result).toEqual(expected);
        });

        it("should accept all kinds of letter cases and return correct result", () => {
            const country = "drc";
            const result = filterViewed(country, countries);
            const expected = [{
                name: {
                    common: "DRC",
                },
            }, ];
            expect(result).toEqual(expected);
        });
    });

    // describe("viewedCountry", () => {
    //     const viewedCountry =
    //         require("../src/Views/components/fn/countryCardFn").viewedCountry;
    //     const country = 'kenya'
    //     const result = viewedCountry(country, countries)
    //     const expected = {
    //         name: {
    //             common: "UganDa",
    //         },
    //     }

    //     expect(result).toEqual(expected)
    // });
});

describe("UPDATING BORDERS", () => {
    // describe('borderArrFn', () => {
    //     let countries
    //     beforeEach(()=>{
    //         countries=[{
    //             name: {
    //                 common: "DRC",
    //             },
    //         },
    //         {
    //             name: {
    //                 common: " Kenya",
    //             },
    //         },
    //         {
    //             name: {
    //                 common: "UganDa",
    //             },
    //         },
    //     ];
    //     })
    //     const borderArrFn = require('../src/Views/components/fn/countryCardFn').borderArrFn
    //     it("should store border countries in an array", () => {
    //         const country = 'kenya'
    //         const result = borderArrFn(country, countries)

    //         expect(result).toBe(Array)
    //     });
    // })
    describe('filterBorder', () => {
        const filterBorder = require('../src/Views/components/fn/countryCardFn').filterBorder
        let countries
        beforeEach(() => {
            countries = [
                { cca3: 'JPN' },
                { cca3: 'ARE' },
                { cca3: 'AFG' }
            ]
        })
        it("should return country object with the borders", () => {
            const border = 'JPN'
            const result = filterBorder(border, countries)
            const expected = [
                { cca3: 'JPN' }
            ]

            expect(typeof result).toBe('object')
            expect(result).toEqual(expected)
        });
    })
})