import puppeteer from 'puppeteer'

const options = {
    headless: false,
    args: [
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-setuid-sandbox',
        '--no-first-run',
        '--no-sandbox',
        '--no-zygote',
        '--single-process',
    ],
    // ignoreDefaultArgs: ['--disable-extensions'], // Disable extensions function.
}

const initPuppeteer = async () => {
    const browser = await puppeteer.launch(options)
    const page = await browser.newPage()
    // await page.setRequestInterception(true) // Enable abort/continue, response methods.
    page.on('error', () => browser.close()) // When page clashing.
    return { browser, page }
}

const main = async () => {
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
