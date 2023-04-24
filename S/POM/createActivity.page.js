import { expect } from "chai"
import activitiesPage from "./activities.page.js"

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
        
        expect(await this.act_title_TF).to.be.exist
        await this.act_title_TF.setValue(act_title)

        expect(await this.act_Desc_TA).to.be.exist
        await this.act_Desc_TA.setValue(act_desc)

        expect(await this.act_start_Calendar_Date).to.be.exist
        await this.act_start_Calendar_Date.setValue(act_start_date)

        expect(await this.act_end_Calendar_Date).to.be.exist
        await this.act_end_Calendar_Date.setValue(act_end_date)

        expect(await this.act_save_BTN).to.be.exist
        await this.act_save_BTN.click()

        expect(await activitiesPage.add_Activity_BTN).to.exist

    }


}
export default new CreateActivity()