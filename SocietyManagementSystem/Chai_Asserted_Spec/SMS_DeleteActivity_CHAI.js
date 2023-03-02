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
import { expect } from "chai";

describe('Deleting an Activity',async()=>{
    let url="http://testingserver/domain/Society_Management_System/admin/"
    let username='admin'
    let password='admin'

    let act_name="Cricket"
    
    it('Launch Browser and Login into Application',async()=>{
        
        await loginPage.login(url,username,password)
    })

    it('Navigate to Activities Module',async()=>{
        
        expect(await homePage.activities_link.waitForClickable({timeout:5000})).to.be.true
        await homePage.activities_link.click()

        expect(await browser.getUrl()).to.contain(`activity`)

        expect(await activitiesPage.add_Activity_BTN.waitForDisplayed({timeout:5000})).to.be.true

    })

    
    it('Search and Delete Activity',async()=>{
        await activitiesPage.deleteActivity(act_name)
    })

    it('Logout of the Application',async()=>{
        await homePage.logout()
    })
})