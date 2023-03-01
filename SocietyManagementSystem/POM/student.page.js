class Student{

    get addStudent_BTN(){
        return $(`#add_student`)
    }
    get searchStudent_TF(){
        return $(`//label[contains(text(),'Search:')]/input[@type='search']`)
    }
    get studTableLength_DD(){
        return $(`[name="table_length"]`)
    }
}
export default new Student()