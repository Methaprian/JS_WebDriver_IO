class Transaction{
    get studID_search_TF(){
        return $(`#search`)
    }
    get search_BTN(){
        return $(`#btn_search`)
    }
    get status_DD(){
        return $(`//select[contains(@class,'status')]`)
    }
    get expenses_DD(){
        return $(`//select[contains(@class,'expenses')]`)
    }

    //Business Libraries
}

export default new Transaction()