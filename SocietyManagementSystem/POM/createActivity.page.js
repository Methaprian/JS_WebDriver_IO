class CreateActivity{
    get act_title_TF(){
        return $(`[name="title"]`)
    }
    get act_Desc_TA(){
        return $(`[name="description"]`)
    }
    get act_start_Calendar_Date(){
        return $(`[name="start"]`)
    }
    get act_end_Calendar_Date(){
        return $(`[name="end"]`)
    }
    get act_save_BTN(){
        return $(`[name="save_activity"]`)
    }
    get act_cancel_BTN(){
        return $(`#cancel_activity`)
    }

    async ActivityCreation(act_title,act_desc,act_start_date,act_end_date){
        
        expect(this.act_title_TF).toBeEnabled()
        await this.act_title_TF.setValue(act_title)

        expect(this.act_Desc_TA).toBeEnabled()
        await this.act_Desc_TA.setValue(act_desc)

        expect(this.act_start_Calendar_Date).toBeEnabled()
        await this.act_start_Calendar_Date.setValue(act_start_date)

        expect(this.act_end_Calendar_Date).toBeEnabled()
        await this.act_end_Calendar_Date.setValue(act_end_date)

        expect(this.act_save_BTN).toBeEnabled()
        await this.act_save_BTN.click()
    }


}
export default new CreateActivity()