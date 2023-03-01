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
        await this.username_TF.waitForEnabled({timeout:3000})
        await (await this.username_TF).click()
        await this.username_TF.setValue(username)

        expect(this.password_TF).toBeEnabled()
        await this.password_TF.waitForEnabled({timeout:3000})
        await this.password_TF.setValue(password)

        expect(this.name_TF).toBeEnabled()
        this.name_TF.waitForEnabled({timeout:3000})
        await this.name_TF.setValue(Name)

        expect(this.save_BTN).toBeClickable()
        await this.save_BTN.click()


    }
}
export default new CreateAdmin()