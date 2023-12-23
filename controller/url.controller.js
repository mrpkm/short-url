const shortid = require('shortid');
const URL = require('../model/url.model');

// async function handleGenrateSortUrl(req, res) {
    module.exports.handleGenrateSortUrl = async(req, res)=>{
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({error: "url is required"})
    }
    const shortID = shortid()
    await URL.create({
        shortId: shortID,
        redirectUrl: body.url,

    })
    return res.json({ id: shortID });
}
