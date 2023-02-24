/**
 * ********************************
 *   CRM_Settings : Workflow
 * ********************************
 * 
 *  Open the browser and enter the URL. Login Page should be Displayed
 * 
 *  Enter the Username and Password and CLick on Login button. Home page should be Displayed.
 *      UN  :   admin
 *      PWD :   admin
 * 
 *  Move the mouse cursor to Setting and Click on CRM settings. CRM settings page should be displayed
 * 
 *  Click on the workflow module. It should display Workflow List Page
 * 
 *  Click on New Workflow. Create Workflow popup will appear.
 * 
 *  Click on the Radio button based on the condition and select the Module from the dropdown and Click on Create Button.
 * 
 *  Fill the Description Field and choose when to run the workflow and Click on Save Button.
 * 
 *  Click on Save Button.
 * 
 *  Click on the Workflows link from the Other Settings Options in LHP.
 * 
 *  List of Workflows should be displayed. Check for the newly added workflow.
 * 
 *  Click on the Delete button in the Created workflow and confirm the alert popup.
 * 
 *  Check whether the workflow is deleted or not.
 * 
 */

describe('CRM_Settings : WorkFlow',async()=>{
    let adminUserName="admin"
    let adminPassword="admin"
    it('Login into Application',async()=>{
        await browser.maximizeWindow()
        await browser.url('http://testingserver:8888/')
        await console.log(browser.getTitle());
        expect(browser).toHaveTitleContaining('vtiger CRM 5 - Commercial Open Source CRM')
        
        const loginUN = await browser.$('[name="user_name"]')
        expect(loginUN).toBeEnabled()
        await loginUN.setValue(adminUserName)

        const loginPWD = await browser.$('[name="user_password"]')
        // await expect(loginPWD).toBeDisabled()
        await expect(loginPWD).toBeEnabled()
        await loginPWD.setValue(adminPassword)

        const loginButton = await browser.$('#submitButton')
        expect(loginButton).toBeEnabled()
        await loginButton.waitForClickable()
        await loginButton.click()

        await console.log(browser.getTitle());
        expect(browser).toHaveTitleContaining('Administrator - Home - vtiger CRM 5')
    
    })

    it('Open CRM Settings and Click on Workflow',async()=>{
        const settings=await browser.$('//img[@src="themes/softed/images/mainSettings.PNG"]')
        expect(settings).toBeEnabled()
        await settings.moveTo({x:10,y:10})

        const CRM_Settings=await browser.$('//a[text()="CRM Settings"]')
        await expect(CRM_Settings).toBeDisplayed()
        expect(CRM_Settings).toBeClickable()
        await CRM_Settings.click()

        expect(browser).toHaveTitleContaining('Administrator - Settings - vtiger CRM 5')

        const workflowLink=await browser.$('//a[contains(.,"Workflows")]')
        expect(workflowLink).toBeClickable()
        await workflowLink.click()

        await expect(browser).toHaveTitleContaining('Administrator - com_vtiger_workflow - vtiger CRM 5')

    })
    
    
    
    let WorkFlowName="Leads"
    let Work_Desc="This Workflow is for Leads Module"


    it('Create New WorkFLow',async()=>{
        const new_workflowBtn=await browser.$('#new_workflow')
        await expect(new_workflowBtn).toBeClickable()
        await new_workflowBtn.click()

        const forModule_RBtn=await browser.$('//input[@value="from_module"]')
        const forTemplate_RBtn=await browser.$('//input[@value="from_template"]')
        expect(forModule_RBtn).toBeEnabled()
        expect(forTemplate_RBtn).toBeEnabled()

        const moduleListDD=await browser.$('#module_list')
        await moduleListDD.selectByVisibleText(WorkFlowName)
        // expect(moduleListDD).toContain(WorkFlowName)


        const PopUp_Save_Btn=await browser.$('#new_workflow_popup_save')
        expect(PopUp_Save_Btn).toBeEnabled()
        await PopUp_Save_Btn.click()
        
        const Work_Desc_TF=await browser.$('[name="description"]')
        await Work_Desc_TF.waitForExist({timeout:5000})
        await Work_Desc_TF.setValue(Work_Desc)
        


        const ON_FIRST_SAVE_RBtn=await browser.$('//td[text()="Only on the first save."]/..//input[@name="execution_condition"]')
        const ONCE_RBtn=await browser.$('//td[text()="Until the first time the condition is true."]/..//input[@name="execution_condition"]')
        const ON_EVERY_SAVE_RBtn=await browser.$('//td[text()="Every time the record is saved."]/..//input[@name="execution_condition"]')
        const ON_MODIFY_RBtn=await browser.$('//td[text()="Every time a record is modified."]/..//input[@name="execution_condition"]')

        expect(ON_FIRST_SAVE_RBtn).toBeEnabled()
        expect(ONCE_RBtn).toBeEnabled()
        expect(ON_EVERY_SAVE_RBtn).toBeEnabled()
        expect(ON_MODIFY_RBtn).toBeEnabled()

        await ON_EVERY_SAVE_RBtn.click()

        // await browser.pause(3000);
        // await browser.$('//strong[text()="Summary"]/../..//input[@value="Save"]').waitForDisplayed({timeout:3000})
        const save_WorkFlow_Btn=await browser.$('//strong[text()="Summary"]/../..//input[@value="Save"]')
        await save_WorkFlow_Btn.waitForDisplayed({timeout:3000})
        // expect(save_WorkFlow_Btn).toBeClickable()
        // await  (await browser.$('#save_submit')).isDisplayed()
        // await browser.$('#save_submit').waitForEnabled({timeout:3000})
        await save_WorkFlow_Btn.click()

        const LHN_WorkFlow_Link=await browser.$('//a[contains(.,"Workflows")]')
        expect(LHN_WorkFlow_Link).toBeClickable()
        await LHN_WorkFlow_Link.click()

        const tableList=await browser.$('//table[@id="expressionlist"]//tr[last()]')
        expect(tableList).toHaveTextContaining(Work_Desc)

        const delete_Link=await browser.$('//table[@id="expressionlist"]//tr[last()]//img[@alt="Delete"]')
        expect(delete_Link).toBeExisting()
        await delete_Link.click()

        // const alert_Verify=await browser.isAlertOpen()
        // const alert_Text=await browser.getAlertText()
        // await alert_Text.waitForDisplayed({timeout:5000})
        // expect(alert_Verify).toHaveTextContaining('true')
        // await browser.acceptAlert()

        await browser.keys("Enter")






    })
})