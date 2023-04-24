describe('sample',()=>{
    it('Sample1',async()=>{
        await browser.url('https://www.google.com')
        let sy=await browser.$("//a[@aria-label='Gmail (opens a new tab)']").getText()
        console.log(sy);
    })
})