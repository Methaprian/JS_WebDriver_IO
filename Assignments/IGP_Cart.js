/**
 *                 https://igp.com
 * 
 *  Launch the Browser and Provide the URL of the Application
 *      URL     :  https://igp.com
 * 
 *  Enter the item to be added in the Cart in the Search Field
 *      item    :   Blueberry Cake
 * 
 *  Click on the Search Button. List of items searched should be displayed
 * 
 *  Click on the desired product.
 *      itemName    :   Exotic Blueberry Cake
 * 
 *  Enter the Pincode and check for the Delivery
 * 
 *  Select a variant form the options
 *      variant     :   1 KG
 * 
 *  
 */



describe('igp.com',async()=>{
    
    let item='Blueberry Cake'
    it('Identify the Search Field',async()=>{
        await browser.maximizeWindow()
        await browser.url('https://www.igp.com/')
        expect(browser).toHaveTitleContaining('Online Gifts Delivery: Buy/Send Gifts to India, Unique Gift Shop')

        const searchTF=await browser.$('[name="q"]')
        expect(searchTF).toBeEnabled()
        await searchTF.setValue(item)

        const searchBTN=await browser.$('//div[contains(@class,"search-icon-wrapper")]')
        expect(searchBTN).toBeEnabled()
        await searchBTN.click()

        expect(browser).toHaveTextContaining(item)
    })

    
    let pinCode='560050'
    let weight='1 kg'
    let cake_weight='1 Kg'
    // let date='Feb 24 2023'
    let month='Feb'
    let date=25
    let cost_in_menu
    let cake_name='Exotic Blueberry Cake'
    it('Click Item and Select Delivery Date',async()=>{
        const item_To_Be_Added=await browser.$(`//p[contains(.,'${cake_name}')]`)
        await item_To_Be_Added.waitForDisplayed()
        await item_To_Be_Added.click()
        
        const pin_Search=await browser.$('#location-input')
        expect(pin_Search).toBeEnabled()
        await pin_Search.setValue(pinCode)

        // expect(browser.$('//button[contains(.,"Available")]')).toBeDisplayed()
        await (await browser.$('//button[contains(.,"Available")]')).waitForDisplayed({timeout:3000})

        expect(browser).toHaveTitleContaining(item)

        const variant=await browser.$('//span[text()="1 Kg"]')
        expect(variant).toBeExisting()
        await variant.click()

        cost_in_menu=await (await browser.$(`//a[contains(@data-name,'${cake_name} (${cake_weight})')]/child::div/span[@class='upsell-price']`)).getText()


        const check_weight=await browser.$('//li[.="Weight : 1 kg"]')
        expect(check_weight).toHaveTextContaining(weight)

        const select_date=await browser.$('//span[text()="Select Date"]')
        expect(select_date).toBeEnabled()
        expect(select_date).toBeClickable()
        await select_date.click()

        const delivery_date=await browser.$(`//span[contains(.,'${month}')]/../../..//a[text()='${date}']`)
        expect(delivery_date).toBeExisting()
        await delivery_date.click()

        const selected_delivery_date=await browser.$('//input[@id="std-datepicker"]')

        expect(selected_delivery_date).toHaveValueContaining(`${month} ${date}`)

    })

    let time="17:00 hrs - 21:00 hrs"
    it('TimeSlot Selection from Dropdown',async()=>{
        const timeslot_DD=await browser.$(`#timepicker`)
        expect(timeslot_DD).toBeEnabled()
        expect(timeslot_DD).toHaveTextContaining(time)
        await timeslot_DD.selectByVisibleText('17:00 hrs - 21:00 hrs')

    })

    it('Delivery Type',async()=>{
        const delivery_type=await browser.$(`#cal-Standard`)
        await delivery_type.waitForDisplayed({timeout:5000})
        await delivery_type.click()
    })

    let message_on_cake='Happy Birthday to ME..!!'
    it('Message On Cake',async()=>{
        const msg_on_cake_TF=await browser.$(`#msgcake`)
        expect(msg_on_cake_TF).toBeEnabled()
        await msg_on_cake_TF.setValue(message_on_cake)
    })

    let gourmet_addons='Birthday Chocolate'
    xit('Add Gourmet',async()=>{
        const gourmet_addons_BTN=await browser.$(`//p[contains(.,'${gourmet_addons}')]/..//div[@class='add-ao-icon-revamp`)
        expect(gourmet_addons_BTN).toBeExisting()
        await gourmet_addons_BTN.click()

    })

    let candle='Sparkle Candle'
    xit('Add Candle',async()=>{
        const candle_add_BTN=await browser.$(`//div/img[@alt='${candle}']/../..//div/div[contains(.,'ADD')]`)
        expect(candle_add_BTN).toBeExisting()
        await candle_add_BTN.click()
    })

    let balloon_name='Foil HBD Balloon'
    let balloon_cost
    xit('Add Balloon',async()=>{
        const balloon_add_BTN=await browser.$(`//p[contains(.,'${balloon_name}')]/..//div[contains(.,'ADD')]`)
        expect(balloon_add_BTN).toBeExisting()
        await balloon_add_BTN.click()

    })

    it('Click on Add to Cart',async()=>{
        const add_to_cart_BTN=await browser.$(`#add-cart`)
        expect(add_to_cart_BTN).toBeExisting()
        expect(add_to_cart_BTN).toBeEnabled()
        await add_to_cart_BTN.click()

        expect(browser).toHaveTitleContaining('Shopping Cart')
    })


    it('Checking Added Items in Cart',async()=>{

        async function checkBlock(item_name){
            const item_to_check=await browser.$(`//p[contains(.,'${item_name}')]`)
            expect(item_to_check).toBeExisting()
            expect(item_to_check).toHaveTextContaining(item_name)

            const cost_in_checkout=await browser.$(`//p[contains(.,'${item_name}')]/../../..//div//span[contains(@class,'s-total-val')]`)
            expect(cost_in_checkout).toBeDisplayed()
            expect(cost_in_checkout).toEqual(cost_in_menu)
        }

        checkBlock(cake_name)
    })


})