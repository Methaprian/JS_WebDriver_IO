/**

1.Open to  application
2.enter the vaild username and password
3.click on Activities module
4.click on Add Activities button
5.Enter the valid data in Title, Description, Select Start date and end date.
6.click on Save button
7.Click on Options module
8.click on logout button

*/

import loginPage from "../POM/login.page.js";
import homePage from "../POM/home.page.js";
import activitiesPage from "../POM/activities.page.js";
import createActivityPage from "../POM/createActivity.page.js";
import { expect } from "chai";

describe('Creating New Activity',async()=>{
    let url="http://testingserver/domain/Society_Management_System/admin/"
    let username='admin'
    let password='admin'

    let act_title='Cricket'
    let act_desc='Tennis Ball Tournament - Total of 8 Teams - 6 Overs per side.'
    let start_date='05-03-2023'
    let end_date='09-03-2023'
    
    it('Launch Browser and Login into Application',async()=>{
        
        await loginPage.login(url,username,password)
    })

    it('Navigate to Activities Module and Click on Add Activity',async()=>{
        
        expect(await homePage.activities_link.waitForClickable({timeout:5000})).to.be.true
        await homePage.activities_link.click()

        expect(await browser.getUrl()).to.contain(`activity`)

        expect(activitiesPage.add_Activity_BTN).to.exist

        await activitiesPage.add_Activity_BTN.click()
        expect(browser.$(`//div[.='Activity/Add new']`)).to.exist
    })

    it('Create Activity with all Necessary Details',async()=>{
        await createActivityPage.ActivityCreation(act_title,act_desc,start_date,end_date)
    })

    it('Logout of the Application',async()=>{
        await homePage.logout()
    })
})