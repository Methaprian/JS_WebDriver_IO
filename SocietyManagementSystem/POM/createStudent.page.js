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
        
        expect(browser.$(`//div[text()='Accounts/Student/Add new']`)).toBeDisplayed()
        expect(this.studID_TF).toBeEnabled()
        await (await this.studID_TF).setValue(stud_ID)

        expect(this.stud_firstname_TF).toBeEnabled()
        await (await this.stud_firstname_TF).setValue(stud_FN)

        expect(this.stud_middlename_TF).toBeEnabled()
        await (await this.stud_middlename_TF).setValue(stud_MN)

        expect(this.stud_lastname_TF).toBeEnabled()
        await (await this.stud_lastname_TF).setValue(stud_LN)

        expect(this.stud_year_DD).toBeEnabled()
        await (await this.stud_year_DD).selectByVisibleText(stud_YR)

        expect(this.stud_section_TF).toBeEnabled()
        await (await this.stud_section).setValue(stud_SEC)

        expect(this.stud_save_BTN).toBeClickable()
        await (await this.stud_save_BTN).click()

    }
}
export default new CreateStudent()
