import { expect } from "chai"

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
        // expect(this.search_Activity_TF).toBeEnabled()
        expect(await this.search_Activity_TF).to.be.exist
        await this.search_Activity_TF.setValue(act_name)

        expect(await browser.$(`//th[.='Title']/following::td[@class='sorting_1'][position()=(1)]`).getText()).to.be.equal(act_name)

        expect(await this.delete_act_BTN).to.exist
        await this.delete_act_BTN.click()

        expect (await this.delete_yes_BTN.waitForDisplayed({timeout:3000})).to.be.true
        await this.delete_yes_BTN.click()

        expect(this.add_Activity_BTN.wait).to.be.exist
    }
}
export default new Activities()