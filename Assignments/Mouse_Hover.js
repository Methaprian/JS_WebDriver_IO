describe('Mouse Hover Action',async()=>{
    it('Online Banking Application',async()=>{
        
        await browser.url('http://testingserver/domain/Online_Banking_System/')
        expect(browser).toHaveTitleContaining('Online Banking System')
        await browser.setWindowSize(700,700)

        const internetBanking_link=await browser.$('//a[contains(.,"Internet Banking")]')
        // await internetBanking_link.scrollIntoView({block:'center',inline:'center'})
        // expect(internetBanking_link).toBeDisplayedInViewport()
        // await internetBanking_link.moveToElement()
        // await browser.scroll(0,200)
        await internetBanking_link.moveTo({})
        

        const login_Link=await browser.$('//li[contains(text(),"Login")]')
        expect(login_Link).toBeDisplayed()
        await login_Link.click()
        await browser.maximizeWindow()
        await browser.$(`//img[@class='userloginimg']`).waitForDisplayed({timeout:5000})
        expect(browser).toHaveTitleContaining('Login Page')
    })
})