const shortid = require('shortid');
const URL = require('../model/url.model');

module.exports.handleGenrateSortUrl = async (req, res) => {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ error: "url is required" })
    }
    const shortID = shortid()
    await URL.create({
        shortId: shortID,
        redirectUrl: body.url,

    })
    return res.json({ id: `http://localhost:8000/${shortID} ` });
}

module.exports.redirectUrl = async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOne({
        shortId
    })
    res.redirect(entry.redirectUrl)
}
