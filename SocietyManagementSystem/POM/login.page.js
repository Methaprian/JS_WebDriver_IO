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

    async login(un,pwd){
        expect(this.username_TF).toBeEnabled()
        await this.username_TF.setValue(un)
        
        expect(this.password_TF).toBeEnabled()
        await this.password_TF.setValue(pwd)
        
        expect(this.login_BTN).toBeEnabled()
        await this.login_BTN.click()

        expect(browser).toHaveUrlContaining(`home`)
    }

}

// module.exports=new LoginPage()
export default new LoginPage()