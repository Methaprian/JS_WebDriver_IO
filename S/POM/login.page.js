import { expect } from "chai"
import homePage from "./home.page.js"

class LoginPage{

    get username_TF(){
        return $(`#username`)
    }
    get password_TF(){
        return $(`#password`)
    }
    get login_BTN(){
        return $(`#login`)
    }

    //Business Libraries

    async login(url,un,pwd){
        await browser.maximizeWindow()
        await browser.url(url)

        expect(await this.username_TF).to.exist
        await this.username_TF.setValue(un)
        
        expect(await this.password_TF).to.exist
        await this.password_TF.setValue(pwd)
        
        expect(await this.login_BTN).to.exist
        await this.login_BTN.click()

        expect(await homePage.home_link.waitForDisplayed({timeout:10000})).to.be.true

        let actualURL=await browser.getUrl()
        expect(actualURL).to.include('home.php')
        // expect(browser).toHaveUrlContaining(`home`)
    }
}

// module.exports=new LoginPage()
export default new LoginPage()