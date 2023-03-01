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
        return $(`[name="deadline"]`)
    }
    get exp_save_BTN(){
        return $(`[name="save_expenses"]`)
    }
    get exp_cancel_BTN(){
        return $(`#cancel_expenses`)
    }

    async expenseCreation(exp_name,price,start_year,end_year,sem,deadline){

        expect(browser.$(`//div[text()='Expenses/Add new']`)).toBeDisplayed()

        expect(this.exp_detail_TF).toBeEnabled()
        await (await this.exp_detail_TF).setValue(exp_name)

        expect(this.exp_price_TF).toBeEnabled()
        await (await this.exp_price_TF).setValue(price)

        expect(this.exp_start_acad_year_TF).toBeEnabled()
        await (await this.exp_start_acad_year_TF).setValue(start_year)
        
        expect(this.exp_end_acad_year_TF).toBeEnabled()
        await (await this.exp_end_acad_year_TF).setValue(end_year)

        expect(this.exp_sem_DD).toBeEnabled()
        await this.exp_sem_DD.selectByVisibleText(sem)

        expect(this.exp_deadline_calendar).toBeEnabled()
        await (await this.exp_deadline_calendar).setValue(deadline)

        expect(this.exp_save_BTN).toBeClickable()
        await (await this.exp_save_BTN).click()
    }

    
}



export default new CreateExpense()