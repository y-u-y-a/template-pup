import puppeteer from 'puppeteer'

export const initPuppeteer = async () => {
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
    }
    const browser = await puppeteer.launch(options)
    const page = await browser.newPage()
    // await page.setRequestInterception(true) // Enable abort/continue, response methods.
    // //
    // page.on('request', (request) => {
    //     const rType = request.resourceType()
    //     const isAssets = ['font', 'image', 'stylesheet'].includes(rType)
    //     if (isAssets) request.abort().catch((err) => console.error(err))
    // })
    page.on('error', () => browser.close()) // When page clashing.
    return { browser, page }
}
