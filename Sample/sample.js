describe('SampleLaunch',()=>{
    it('Launch',async()=>{
        browser.maximizeWindow()
        browser.url('http://testingserver:8888/');
        // browser.pause(10000)
        browser.$('input[type="text"]').setValue("admin")
        browser.$('input[type="password"]').setValue("admin")
        broswer.$('input[type="button"]').click()

    })
})