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
        return $(`//a[contains(text(),'Options')]`)
    }
    get logout_link(){
        return $(`//a[contains(text(),'Logout')]`)
    }

    //Business Libraries

    async logout(){
        expect(this.options_link).toBeDisplayed()
        expect(this.options_link).toBeClickable()
        await this.options_link.click()

        await (await this.logout_link).waitForDisplayed({timeout:3000})
        expect(this.logout_link).toBeClickable()
        await this.logout_link.click()

        expect(browser).toHaveUrlContaining(`logout`)
    }

    async admin_module(){
        expect(this.accounts_link).toBeDisplayed()
        expect(this.accounts_link).toBeClickable()
        await this.accounts_link.click()

        expect(this.admin_link).toBeDisplayed()
        expect(this.admin_link).toBeClickable()
        await this.admin_link.click()

        expect(browser).toHaveUrlContaining(`admin.php`)
    }

    async student_module(){
        expect(this.accounts_link).toBeDisplayed()
        expect(this.accounts_link).toBeClickable()
        await this.accounts_link.click()

        expect(this.student_link).toBeDisplayed()
        expect(this.student_link).toBeClickable()
        await this.student_link.click()

        expect(browser).toHaveTitleContaining(`student`)
        
    }
}
export default new HomePage()