import { expect } from "chai"

class AdminPage{
    get addAdmin_BTN(){
        return $(`#add_admin`)
    }
    get searchAdmin_TF(){
        return $(`//label[contains(.,'Search:')]/input[@type='search']`)
    }
    get adminTableLength_DD(){
        return $(`[name="table_length"]`)
    }
    

    async search_for_admin(admin_un){
        await (await this.adminTableLength_DD).selectByVisibleText('100')
        expect(await this.searchAdmin_TF.waitForDisplayed({timeout:3000})).to.be.true

        await this.searchAdmin_TF.setValue(admin_un)

        let admin_list=await (await browser.$(`//th[.='Username']/../../..//td[@class='sorting_1']`)).getText()
        // let admin_user_names=await Promise.all(admin_list.map(async a=>await a.getText()))

       expect(admin_list).to.equal(admin_un)
       console.log(`Admin Created Successfully.
    Created Admin : ${admin_un}`);
    }
}
export default new AdminPage()