// Handle Auto Suggestions

describe('Handling the Auto-Suggestions',async()=>{

    let item_to_search='Blueberry Cake'
    it('Launch Browser and Identify the Search Text Field',async()=>{
        await browser.maximizeWindow()
        await browser.url(`https://www.igp.com/`)
        browser.waitUntil()

        expect(browser).toHaveTitleContaining(`IGP: India's #1 Online Gift Shop`)

        const search_TF=await browser.$(`[name="q"]`)
        expect(search_TF).toBeEnabled()
        await search_TF.setValue(item_to_search)
        // //div[@class='cards-suggest-name']

        expect(browser.$(`#searched-Items`)).toBeDisplayedInViewport()
    })

    it('Get all the auto Suggested Values',async()=>{
        const auto_suggest=await browser.$$(`//li//div[@class='cards-suggest-name']`)
        expect(auto_suggest).toBeDisplayedInViewport()

        const auto_list=await Promise.all(auto_suggest.map(async auto=> auto.getText()))
        for (const it of auto_list) {
            console.log(`====> ${it}`);
        }
    })
})