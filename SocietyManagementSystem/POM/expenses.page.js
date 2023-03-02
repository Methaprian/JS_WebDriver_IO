import { expect } from "chai"

class Expenses{
    get addExpenses_BTN(){
        return $(`#add_expenses`)
    }
    get searchExpenses_TF(){
        return $(`//label[text()='Search:']/input[@type='search']`)
    }
    get expensesTableLength_DD(){
        return $(`[name="table_length"]`)
    }

    //Business Libraries

    async expenseSearch(exp_name){

        expect(await this.expensesTableLength_DD.waitForEnabled({timeout:5000})).to.be.true
        await this.expensesTableLength_DD.selectByVisibleText('100')

        expect(await this.searchExpenses_TF).to.be.exist
        await this.searchExpenses_TF.setValue(exp_name)

        expect(await browser.$(`//th[text()='Detail']/../../..//td[@class='sorting_1']`)).to.equal(exp_name)
    }
}
export default new Expenses()