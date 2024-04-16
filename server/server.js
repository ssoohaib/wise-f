const express = require("express");
const app = express();
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const cors = require("cors");
app.use(cors());



app.get('/sadapay',(req,res)=>{
    // console.log(req.params.ext);

    async function run() {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto("https://help.sadapay.pk/en/articles/6895053-exchange-rates-on-sadapay");
        let source = await page.content();
        browser.close();

        const $ = cheerio.load(source);
        let lol=$('tr div p')

        wowData={
            USD:lol.eq(2).text(),
            GBP:lol.eq(8).text(),
            EUR:lol.eq(17).text()
        }

        console.log(wowData);
        res.json(wowData);
    }
    
    run();
    // res.send(Source);
})



let port=5000
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});