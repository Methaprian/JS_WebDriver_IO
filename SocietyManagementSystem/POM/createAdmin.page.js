import { expect } from "chai"
import adminPage from "./admin.page.js"

class CreateAdmin{

    get username_TF(){
        return $(`//input[@name='username']`)
    }
    get password_TF(){
        return $(`[name="password"]`)
    }
    get name_TF(){
        return $(`//input[@name='name']`)
    }
    get save_BTN(){
        return $(`[name="save_admin"]`)
    }
    get cancel_BTN(){
        return $(`#cancel_admin`)
    }
    get createadmin_pagename(){
        return $(`//div[text()='Accounts/Administrator/Add new']`)
    }

    async adminCreation(username,password,Name){
        expect(await this.username_TF).waitForDisplayed({timeout:5000}).to.be.true
        await this.username_TF.click()
        await this.username_TF.setValue(username)

        expect(await this.password_TF).waitForDisplayed({timeout:5000}).to.be.true
        await this.password_TF.setValue(password)

        expect(await  this.name_TF.waitForDisplayed({timeout:5000})).to.be.true
        await this.name_TF.setValue(Name)

        expect(await this.save_BTN.waitForClickable({timeout:5000})).to.be.true
        await this.save_BTN.click()

        expect(await adminPage.addAdmin_BTN).to.exist
    }
}
export default new CreateAdmin()