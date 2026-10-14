import { test} from '@playwright/test'

test('demo test',async({page})=>{
    await page.goto('https://eventhub.rahulshettyacademy.com/admin/events')
    let allitems=  await page.locator('.items-start').allInnerTexts()
    console.log(allitems)

})