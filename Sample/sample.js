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
        await browser.pause(3000)

        const loginPWD = await $('#password')
        await loginPWD.setValue('admin')
        await browser.pause(3000)

        const loginButton=await $('#login')
        await loginButton.click()
        await browser.pause(3000)
    })
})