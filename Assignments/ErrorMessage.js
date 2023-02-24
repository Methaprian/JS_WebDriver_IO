describe('Error Message Capture',async()=>{

    let username="admin"
    let password="admin"
    let expectedErrorMsg="Invalid username or password"
    it('Login Page',async()=>{
        await browser.maximizeWindow()
        await browser.url('http://testingserver/domain/Society_Management_System/admin/')
        expect(browser).toHaveTitleContaining('Society_Management_System')

        const username_TF=await browser.$('#username')
        expect(username_TF).toBeEnabled()
        await username_TF.setValue(username)

        const password_TF=await browser.$('#password')
        expect(password_TF).toBeEnabled()
        await password_TF.setValue(password)

        const login_BTN=await browser.$('#login')
        expect(login_BTN).toBeEnabled()
        expect(login_BTN).toBeClickable()
        await login_BTN.click()

        const error_TXT=await browser.$('//div[@id="loading"]//label[text()]').getText()
        expect(error_TXT).toHaveTextContaining(expectedErrorMsg)
        console.log("********************* "+error_TXT+" **************************");
    })  
})