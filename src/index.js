import { initPuppeteer } from './common.js'
async function main() {
    const { page, browser } = await initPuppeteer()
    const initURL = 'https://news.yahoo.co.jp/'
    try {
        await page.goto(initURL, { waitUntil: 'networkidle2' })
    } catch (err) {
        console.log('err >>>>>', err)
    } finally {
        await browser.close()
    }
}

main()
