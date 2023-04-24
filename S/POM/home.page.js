import { expect } from "chai"
import adminPage from "./admin.page.js"

class HomePage{
    get home_link(){
        return $(`//a[contains(.,'Home')]`)
    }
    get accounts_link(){
        return $(`//a[contains(text(),'Accounts')]`)
    }
    get admin_link(){
        return $(`//a[contains(text(),'Administrator')]`)
    }
    get student_link(){
        return $(`//a[contains(text(),'Student')]`)
    }
    get activities_link(){
        return $(`//a[contains(text(),'Activities')]`)
    }
    get expenses_link(){
        return $(`//a[contains(text(),'Expenses')]`)
    }
    get transaction_link(){
        return $(`//a[contains(text(),'Transaction')]`)
    }
    get options_link(){
        return $(`//a[contains(.,'Options')]`)
    }
    get logout_link(){
        return $(`//a[contains(.,'Logout')]`)
    }

    //Business Libraries

    async logout(){
        expect(await this.options_link).to.be.exist
        await this.options_link.click()

        expect(await (await this.logout_link).waitForClickable({timeout:10000})).to.be.true
        await this.logout_link.click()

        expect(await browser.getUrl()).to.include(`logout.php`)
    }

    async admin_module(){
        expect(await this.accounts_link).to.be.exist
        await this.accounts_link.click()

        expect(await this.admin_link).to.be.exist
        await this.admin_link.click()

        expect(await adminPage.addAdmin_BTN.waitForDisplayed({timeout:5000})).to.be.true
        const actualURL=await browser.getUrl()
        expect(actualURL).to.include('admin.php')
    }

    async student_module(){
        expect(await this.accounts_link.waitForDisplayed({timeout:5000})).to.be.true
        await this.accounts_link.click()

        expect(await this.student_link.waitForDisplayed({timeout:5000})).to.be.true
        await this.student_link.click()

        expect(await browser.getUrl()).to.include('student.php')
        
    }
}
export default new HomePage()