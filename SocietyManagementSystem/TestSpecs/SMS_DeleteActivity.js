/**
 
"1.Open to  application
2.enter the vaild username and password
3.click on Activities module
4.Search for an Activity and Click on delete button
5.click on Options module
6.click on Logout button


 */

import loginPage from "../POM/login.page.js";
import homePage from "../POM/home.page.js";
import activitiesPage from "../POM/activities.page.js";

describe('Deleting an Activity',async()=>{
    
    let username='admin'
    let password='admin'
    
    it('Launch Browser and Login into Application',async()=>{
        await browser.maximizeWindow()
        await browser.url('http://testingserver/domain/Society_Management_System/admin/')
        await loginPage.login(username,password)
    })

    it('Navigate to Activities Module',async()=>{
        expect(homePage.activities_link).toBeExisting()
        expect(homePage.activities_link).toBeDisplayed()
        expect(homePage.activities_link).toBeClickable()

        await homePage.activities_link.click()

        expect(browser).toHaveUrlContaining(`activity`)

        expect(activitiesPage.add_Activity_BTN).toBeDisplayed()

    })

    let act_name="Cricket"
    it('Search and Delete Activity',async()=>{
        await activitiesPage.deleteActivity(act_name)
    })

    it('Logout of the Application',async()=>{
        await homePage.logout()
    })
})