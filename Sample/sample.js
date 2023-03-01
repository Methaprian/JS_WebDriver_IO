/**
 * Scenario :
 *      Launch the Browser
 *      
 *      Pass the Main URL of the Application
 *          URL : http://testingserver/domain/Society_Management_System/admin/
 *      
 *      Login into the application with valid Credentials
 *          UN : admin
 *          PWD : admin
 *       
 *      
 */



describe('SampleLaunch',()=>{
    it('Launch',async()=>{
        browser.maximizeWindow()
        browser.url('http://testingserver/domain/Society_Management_System/admin/');
        // browser.pause(10000)
        const loginUN = await $('#username')
        await loginUN.setValue('admin')

        const loginPWD = await $('#password')
        await loginPWD.setValue('admin')

        const loginButton=await $('#login')
        await loginButton.click()

        await (await browser.$(`//a[contains(text(),'Activities')]`)).click()
        await (await browser.$(`#add_activity`)).click()
        await (await browser.$(`[name="start"]`)).setValue('03-03-2023')
        await browser.pause(5000)
        await (await browser.$(`[name="end"]`)).setValue('08-03-2023')
        await browser.pause(5000)
    })
})