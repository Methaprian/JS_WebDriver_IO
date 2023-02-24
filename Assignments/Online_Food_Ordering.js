/**
 * 
 */

describe('OnlineFood Ordering',async()=>{
    it('Launch Browser and Navigate to the Application',async()=>{
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Online_Food_Ordering_System/")
        expect(browser).toHaveTitleContaining('Home')
    })

    let userName='SKM'
    let passWord='Test@123'
    it('Login into the Account',async()=>{

        const login_link=await browser.$(`//a[text()='Login']`)
        expect(login_link).toBeExisting()
        expect(login_link).toBeClickable()
        await login_link.click()

        expect(browser).toHaveTitleContaining('Login')

        const username_TF=await browser.$(`[name="username"]`)
        expect(username_TF).toBeEnabled()
        await username_TF.setValue(userName)

        const password_TF=await browser.$(`[name="password"]`)
        expect(password_TF).toBeEnabled()
        await password_TF.setValue(passWord)

        const login_BTN=await browser.$(`#buttn`)
        expect(login_BTN).toBeEnabled()
        expect(login_BTN).toBeClickable()
        await login_BTN.click()

        const logout_link=await browser.$(`//a[text()='My Orders']`)
        expect(logout_link).toBeDisplayed()

    })

    let restaurant_name="Eataly"
    it('Click on Restaurants and Click on a desired restaurant',async()=>{

        async function restaurant_NAME(restaurant_name) {
            const restaurant_link=await browser.$('//a[contains(.,"Restaurants")]')
            expect(restaurant_link).toBeClickable()
            await restaurant_link.click()
            expect(browser).toHaveTitleContaining('Restaurants')
        

            const restaurant_NAME_link=await browser.$(`//a[contains(.,'${restaurant_name}')]`)
            await restaurant_NAME_link.click()
        }
        
        restaurant_NAME(restaurant_name)
        expect(browser).toHaveTitleContaining('Dishes')

        const restaurant_name_Verify=await browser.$(`//div//a[contains(.,'${restaurant_name}')]`).getText()
        expect(restaurant_name_Verify).toContain(restaurant_name)
    })

    let dish_Name="Pink Spaghetti Gamberoni"
    let quantity='2'
    let menuDetails=[]
    let cartDetails=[]

    it('Select a dish, Enter Quantity and Add to Cart',async()=>{

        const dish_name_in_menu=await browser.$(`//div[@class='menu-widget']//a[contains(.,'${dish_Name}')]`).getText()
        const costinmenu=await browser.$(`//div[@class='menu-widget']//a[contains(text(),'${dish_Name}')]/../../../../..//span`).getText()
        menuDetails.push(dish_name_in_menu)
        menuDetails.push(costinmenu)
        menuDetails.push(quantity)
        console.log(`********************************* Menu Details: [ ${menuDetails} ]`);

        async function orderDish(dish_Name,quantity){
            const dish_link=await browser.$(`//div[@class='menu-widget']//a[contains(text(),'${dish_Name}')]`)
            expect(dish_Name).toHaveTextContaining(dish_Name)
    
            const quantity_TF=await browser.$(`[name="quantity"]`)
            expect(quantity_TF).toBeEnabled()
            await quantity_TF.setValue(quantity)
    
            const add_to_cart_button=await browser.$(`//a[contains(.,'${dish_Name}')]/../../../../..//input[@value='Add To Cart']`)
            expect(add_to_cart_button).toBeEnabled()
            await add_to_cart_button.click()
    
        }

        orderDish(dish_Name,quantity)

        const added_dish_in_cart=await browser.$(`//div[@class='widget-heading']/..//div[contains(text(),'${dish_Name}')]`).getText()
        // //div[@class='widget-heading']//self::div[contains(.,'Your Cart')]/..//div[contains(text(),'${dish_Name}')]
        const added_cost_per_item_in_cart=await browser.$(`//input[@id='exampleSelect1']`).getValue()

        const added_quantity_in_cart=await browser.$(`//input[@id='example-number-input']`).getValue()

        cartDetails.push(added_dish_in_cart)
        cartDetails.push(added_cost_per_item_in_cart)
        cartDetails.push(added_quantity_in_cart)

        console.log(`***************************** Cart Details: [ ${cartDetails} ]`);

        for (let index = 0; index < menuDetails.length; index++) {
            if (menuDetails[index]===cartDetails[index]) {
                console.log(`${index} is same`);
            }
        }
    })

    it('Total Price in Cart',async()=>{
        const total_cost=await (await browser.$(`//div[@class='price-wrap text-xs-center']/child::*[@class='value']`)).getText()
        console.log(`Total Cost in Cart is : ${total_cost}`);
    })

    it('Checkout and Order Now',async()=>{
        const checkout_BTN=await browser.$(`//a[text()='Checkout']`)
        expect(checkout_BTN).toBeEnabled()
        await checkout_BTN.click()
        expect(browser).toHaveTitleContaining('Checkout')

        const order_now_BTN=await browser.$(`//input[@value='Order Now']`)
        await order_now_BTN.waitForDisplayed({timeout:9000})
        await order_now_BTN.click()
        

    })

    it('Popup Handling and Print alert text',async()=>{
        // await browser.waitUntil(async()=>{await browser.isAlertOpen()})
        // console.log("************************"+await browser.getAlertText()+"************************");
        // await browser.acceptAlert()
        // await browser.waitUntil(async()=>{await browser.isAlertOpen()})
        // console.log("************************"+await browser.getAlertText()+"************************");
        // await browser.acceptAlert()
        await browser.isAlertOpen()
        await browser.getAlertText()
        await browser.acceptAlert()
        await browser.isAlertOpen()
        await browser.getAlertText()
        await browser.acceptAlert()
    })

})