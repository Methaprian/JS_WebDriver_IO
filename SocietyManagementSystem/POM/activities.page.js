class Activities{
    get add_Activity_BTN(){
        return $(`#add_activity`)
    }
    get search_Activity_TF(){
        return $(`//label[text()='Search:']/input[@type='search']`)
    }
    get searchTableLength_DD(){
        return $(`[name="table_length"]`)
    }
    get delete_act_BTN(){
        return $(`//th[.='Title']/../../..//td[@class='sorting_1']/..//a[contains(text(),'Delete')]`)
    }
    get delete_yes_BTN(){
        return $(`//a[contains(.,'Yes')]`)
    }
    get delete_no_BTN(){
        return $(`//button[contains(.,'No')]`)
    }
    //  //th[.='Title']/../../..//td[@class='sorting_1']

    async deleteActivity(act_name){
        expect(this.search_Activity_TF).toBeEnabled()
        await this.search_Activity_TF.setValue(act_name)

        expect(browser.$(`//th[.='Title']/../../..//td[@class='sorting_1']`)).toHaveText(act_name)

        expect(this.delete_act_BTN).toBeExisting()
        await this.delete_act_BTN.click()

        await (await this.delete_yes_BTN).waitForDisplayed({timeout:3000})
        await this.delete_yes_BTN.click()
    }
}
export default new Activities()