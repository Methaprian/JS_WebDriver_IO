/**

1.Open the application  application
2.Enter the vaild username and password
3.click on Accounts module
4.click on Administrator module
5.click on add admin button
6.Enter the username, password and name and click on save button.
7.Validate that the admin created is present in the list of admins.
8.Click on Options module
9.click on logout button"

*/

import loginPage from "../POM/login.page.js"
import homePage from "../POM/home.page.js"
import adminPage from "../POM/admin.page.js"
import createAdminPage from "../POM/createAdmin.page.js"
import { expect } from "chai"

describe('Creating New Administrator',async()=>{
    let url="http://testingserver/domain/Society_Management_System/admin/"
    let username='admin'
    let password='admin'

    let rn=Math.random()*(1000-100)+10
    let admin_un="SKM"+Math.trunc(rn)
    let admin_pwd="12345678"
    let admin_name="Admin"


    it('Launch Browser and Login into Application',async()=>{
        
        await loginPage.login(url,username,password)
    })

    it('Navigate to Administrator Page and Click on Add Admin Button',async()=>{
        await homePage.admin_module()

        // expect(adminPage.addAdmin_BTN)
        expect(await adminPage.addAdmin_BTN.waitForClickable({timeout:3000})).to.be.true
        await adminPage.addAdmin_BTN.click()
        
        expect(await createAdminPage.createadmin_pagename.waitForDisplayed({timeout:5000})).to.be.true
    })
    
    it('Enter all necessary Details and Click on Save button',async()=>{
        await createAdminPage.adminCreation(admin_un,admin_pwd,admin_name)
    })
    
    it('Validation of Admin Creation',async()=>{
        await adminPage.search_for_admin(admin_un)
    })
    
    it('Logout Of the Application',async()=>{
        await homePage.logout()
    })
})