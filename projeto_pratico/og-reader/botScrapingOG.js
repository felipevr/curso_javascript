const cheerio = require('cheerio');
const Page = require('../model/page');

const readMetaTag = function($, meta) {
    return $(`meta[property="og:${meta}"]`).attr('content');

};

const scrapingOG = function (page) {

    const $ = cheerio.load(page.data);

    let title = readMetaTag($, "title");
    let type = readMetaTag($, "type");
    let image = readMetaTag($, "image");
    let url = readMetaTag($, "url");

    let pageOg = new Page(url, title, image, type);

    if (!pageOg.isValid()) {
        return false;
    }

    return pageOg;
};


module.exports = scrapingOG;