import Page from "./Page";

export default class LoginPage extends Page{

    get username(){
        return $('[name="user_password"]')
    }

    get password(){
        return $('[name="user_password"]')
    }

    get login_BTN(){
        return $('#submitButton')
    }

    get login_title(){
        return browser.getTitle()
    }

    get login_url(){
        return browser.getUrl()
    }
}

// export default new LoginPage()