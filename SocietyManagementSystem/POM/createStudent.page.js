import { expect } from "chai"
import studentPage from "./student.page.js"

class CreateStudent{
    get studID_TF(){
        return $(`[name="student_id"]`)
    }
    get stud_firstname_TF(){
        return $(`[name="firstname"]`)
    }
    get stud_middlename_TF(){
        return $(`[name="middlename"]`)
    }
    get stud_lastname_TF(){
        return $(`[name="lastname"]`)
    }
    get stud_year_DD(){
        return $(`[name="year"]`)
    }
    get stud_section_TF(){
        return $(`[name="section"]`)
    }
    get stud_save_BTN(){
        return $(`[name="save_student"]`)
    }
    get uploadIMG_BTN(){
        return $(`[name="image"]`)
    }
    get cancel_stud_BTN(){
        return $(`[name="cancel_student"]`)
    }

    //Business Libraries

    async studentCreation(stud_ID,stud_FN,stud_MN,stud_LN,stud_YR,stud_SEC){
        
        expect(await browser.$(`//div[text()='Accounts/Student/Add new']`).waitForDisplayed({timeout:5000}))
        expect(await this.studID_TF).to.be.exist
         this.studID_TF.setValue(stud_ID)

        expect(await this.stud_firstname_TF).to.be.exist
        await this.stud_firstname_TF.setValue(stud_FN)

        expect(await this.stud_middlename_TF).to.be.exist
        await this.stud_middlename_TF.setValue(stud_MN)

        expect(await this.stud_lastname_TF).to.exist
        await this.stud_lastname_TF.setValue(stud_LN)

        expect(await this.stud_year_DD).to.be.exist
        await this.stud_year_DD.selectByVisibleText(stud_YR)

        expect(await this.stud_section_TF).to.be.exist
        await this.stud_section.setValue(stud_SEC)

        expect(await this.stud_save_BTN.waitForClickable({timeout:5000})).to.be.true
        await this.stud_save_BTN.click()

        expect(await studentPage.addStudent_BTN).to.exist

    }
}
export default new CreateStudent()
