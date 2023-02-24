// //th[@class='table-head__cell rankings-table__team']/../../..//span[@class='u-hide-phablet']


describe('Find Elements - Fetching all the Team Names in ODI Ranking',async()=>{
    it("ICC Men's T20i Ranking List" ,async()=>{
        await browser.maximizeWindow()
        await browser.url(`https://www.icc-cricket.com/rankings/mens/team-rankings/t20i`)
        expect(browser).toHaveTitleContaining("ICC Men's T20I Team Rankings")

        // const team_name=await browser.$$(`//td[contains(@class,'team')]`)
        const team_name=await browser.$$(`//th[@class='table-head__cell rankings-table__team']/../../..//span[@class='u-hide-phablet']`)
        expect(team_name).toBeDisplayedInViewport()
        
        // for (let index = 0; index < team_name.length; index++) {
        //     let team=await team_name[index].getText()
        //     console.log(`=======> ${team}`);
        // }

        let team=await Promise.all(team_name.map(async a=>await a.getText()))
        for (const iterator of team) {
            console.log(`==> ${iterator}`);
        }
    })
})