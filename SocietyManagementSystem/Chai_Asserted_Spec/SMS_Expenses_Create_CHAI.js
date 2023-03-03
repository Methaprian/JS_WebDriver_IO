/**
1.Open the application
2.Enter valid username and Password
3.click on Expense module
4.Click on Add Expense button
6.Enter the valid detais and click on Save button
7.Click on Transaction module
8.Enter the Student ID on Enter Student ID textbox that you want to check.
9.click on search button
10.Click on Options module
11.click on logout button

 */

import loginPage from "../POM/login.page.js";
import homePage from "../POM/home.page.js";
import expensesPage from "../POM/expenses.page.js";
import createExpensesPage from "../POM/createExpenses.page.js";
import transactionPage from "../POM/transaction.page.js";
import { expect } from "chai";

describe('Expenses Module',async()=>{

    let url="http://testingserver/domain/Society_Management_System/admin/"
    let username='admin'
    let password='admin'
    
    let exp_name='Laptop';
    let price='45000';
    let start_year='2022';
    let end_year='2023';
    let sem='1st';
    let deadline='03-25-2024' // mm-dd-yyyy

    let stud_ID='21201455'

    it('Launch Browser and Login into Application',async()=>{
        await loginPage.login(url,username,password)
    })

    it('Navigate to Expenses Module and Click on Add Expense Button',async()=>{
        expect(await homePage.expenses_link.waitForClickable({timeout:5000})).to.be.true
        await homePage.expenses_link.click()

        expect(await browser.getUrl()).to.contain('expenses')
        
        expect(await expensesPage.addExpenses_BTN.waitForClickable({timeout:5000})).to.be.true
        await expensesPage.addExpenses_BTN.click()

        expect(await browser.$(`//div[.='Expenses/Add new']`)).to.exist
    })
    
    it('Create Expense with all Necessary Details',async()=>{
        await createExpensesPage.expenseCreation(exp_name,price,start_year,end_year,sem,deadline)
    })
    
    it('Navigate to Transactions Module Enter Student ID and Enter the Student ID and Click on Search',async()=>{
        expect(await homePage.transaction_link.waitForClickable({timeout:5000})).to.be.true
        await homePage.transaction_link.click()
        expect(await browser.getUrl()).to.contain('transaction')

        expect(await transactionPage.studID_search_TF).to.exist
        await transactionPage.studID_search_TF.setValue(stud_ID)

        expect(await transactionPage.search_BTN).to.exist
        await transactionPage.search_BTN.click()
    })

    it('Check for the Created Expense',async()=>{
        expect(await transactionPage.status_DD).to.exist
        await transactionPage.status_DD.selectByVisibleText('Available')
        expect(await transactionPage.expenses_DD.waitForEnabled({timeout:5000})).to.be.true
        expect(await transactionPage.expenses_DD.getText()).to.include(exp_name)
    })

    it('Logout of the Application',async()=>{
        await homePage.logout()
    })

})