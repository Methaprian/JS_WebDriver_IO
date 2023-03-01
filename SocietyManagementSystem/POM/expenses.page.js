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

        expect(this.expensesTableLength_DD).toBeEnabled()
        await (await this.expensesTableLength_DD).selectByVisibleText('100')

        expect(this.searchExpenses_TF).toBeEnabled()
        await (await this.searchExpenses_TF).setValue(exp_name)

        expect(browser.$(`//th[text()='Detail']/../../..//td[@class='sorting_1']`)).toHaveTextContaining(exp_name)
    }
}
export default new Expenses()