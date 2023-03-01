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

describe('Expenses Module',async()=>{
    
    let username='admin'
    let password='admin'
    
    it('Launch Browser and Login into Application',async()=>{
        await browser.maximizeWindow()
        await browser.url('http://testingserver/domain/Society_Management_System/admin/')
        await loginPage.login(username,password)
    })

    it('Navigate to Expenses Module and Click on Add Expense Button',async()=>{
        expect(homePage.expenses_link).toBeClickable()
        await homePage.expenses_link.click()

        expect(browser).toHaveUrlContaining('expenses')
        
        expect(expensesPage.addExpenses_BTN).toBeClickable()
        await expensesPage.addExpenses_BTN.click()

        expect(browser.$(`//div[.='Expenses/Add new']`)).toBeDisplayed()
    })

    let exp_name='Laptop';
    let price='45000';
    let start_year='2022';
    let end_year='2024';
    let sem='1st';
    let deadline='25-03-2024'
    
    it('Create Expense with all Necessary Details',async()=>{
        await createExpensesPage.expenseCreation(exp_name,price,start_year,end_year,sem,deadline)
    })

    let stud_ID='21201455'
    it('Navigate to Transactions Module Enter Student ID and Enter the Student ID and Click on Search',async()=>{
        expect(homePage.transaction_link).toBeEnabled()
        await homePage.transaction_link.click()
        expect(browser).toHaveTitleContaining('transaction')

        expect(transactionPage.studID_search_TF).toBeEnabled()
        await  transactionPage.studID_search_TF.setValue(stud_ID)

        expect(transactionPage.search_BTN).toBeEnabled()
        await transactionPage.search_BTN.click()
    })

    it('Check for the Created Expense',async()=>{
        await transactionPage.status_DD.isDisplayed()
        expect(transactionPage.status_DD).toBeDisplayed()

        await transactionPage.status_DD.selectByVisibleText('Available')

        expect(transactionPage.expenses_DD).toBeEnabled()

        expect(transactionPage.expenses_DD).toHaveText(exp_name)
    })

    it('Logout of the Application',async()=>{
        await homePage.logout()
    })

})