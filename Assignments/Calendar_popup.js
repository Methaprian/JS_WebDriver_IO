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
    let date='25'
    let month='Feb'

    it('Click Item and Add Item to Cart',async()=>{
        const item_To_Be_Added=await browser.$('//p[contains(.,"Exotic Blueberry Cake")]')
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
})