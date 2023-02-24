describe('Vtiger',async()=>{

    let un='admin'
    let pwd='admin'

    it('Login into Application',async()=>{
        await browser.maximizeWindow()
        await browser.url('http://testingserver:8888/')

        //Username
        expect(browser.$(`[name="user_name"]`)).toBeEnabled()
        await (await browser.$(`[name="user_name"]`)).setValue(un)

        //Password
        expect(browser.$(`[name='user_password']`)).toBeEnabled()
        await (await browser.$(`[name='user_password']`)).setValue(pwd)

        //Login Button
        expect(browser.$(`#submitButton`)).toBeClickable()
        await (await browser.$(`#submitButton`)).click()

        expect(browser).toHaveTitleContaining('Administrator - Home - vtiger CRM 5')
    })

    it('Click on Leads Module and ',async()=>{
        const leads_link=await browser.$(`//td[@class='tabUnSelected']//a[.='Leads']`)
        expect(browser).toBeExisting()
        await leads_link.click()
        expect(browser).toHaveTitleContaining('Administrator - Leads - vtiger CRM 5')

        const search_DD=await browser.$(`#bas_searchfield`)
        await search_DD.selectByAttribute('value','lastname')
        let selected_value=await search_DD.getValue()
        console.log(selected_value);
    })
})