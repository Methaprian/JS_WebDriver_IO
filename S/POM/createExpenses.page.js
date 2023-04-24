import { expect } from "chai"
import expensesPage from "./expenses.page.js"

class CreateExpense{
    get exp_detail_TF(){
        return $(`[name="detail"]`)
    }
    get exp_price_TF(){
        return $(`[name="price"]`)
    }
    get exp_start_acad_year_TF(){
        return $(`[name="ay1"]`)
    }
    get exp_end_acad_year_TF(){
        return $(`[name="ay2"]`)
    }
    get exp_sem_DD(){
        return $(`[name="sem"]`)
    }
    get exp_deadline_calendar(){
        return $(`[name="deadline"]`)   //BUG
    }
    get exp_save_BTN(){
        return $(`[name="save_expenses"]`)
    }
    get exp_cancel_BTN(){
        return $(`#cancel_expenses`)
    }

    async expenseCreation(exp_name,price,start_year,end_year,sem,deadline){

        expect(await  browser.$(`//div[text()='Expenses/Add new']`).waitForDisplayed({timeout:5000})).to.be.true

        expect(await this.exp_detail_TF).to.be.exist
        await this.exp_detail_TF.setValue(exp_name)

        expect(await this.exp_price_TF).to.be.exist
        await this.exp_price_TF.setValue(price)

        expect(await this.exp_start_acad_year_TF).to.be.exist
        await this.exp_start_acad_year_TF.setValue(start_year)
        
        expect(await this.exp_end_acad_year_TF).to.exist
        await this.exp_end_acad_year_TF.setValue(end_year)

        expect(await this.exp_sem_DD).to.be.exist
        await this.exp_sem_DD.selectByVisibleText(sem)


        expect(await this.exp_deadline_calendar.waitForEnabled({timeout:5000})).to.be.true
        await this.exp_deadline_calendar.clearValue()
        await this.exp_deadline_calendar.setValue(deadline)

        expect(await this.exp_save_BTN.waitForClickable({timeout:5000})).to.be.true
        await this.exp_save_BTN.click()

        expect(await expensesPage.addExpenses_BTN).to.exist
    }
}

export default new CreateExpense()