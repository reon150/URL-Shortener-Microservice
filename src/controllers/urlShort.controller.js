const urlCtrl = {};

const URLShorterDB = require('../models/URLShort');

urlCtrl.getURLFull = async (req, res) => { 
    try {
        const URLFull = await URLShorterDB.findOne(
            { short_url : req.params.url }, 
            { '_id': 0, 'short_url' : 1, 'original_url': 1 }
        );
        res.redirect(URLFull.original_url);
    }
    catch (e) {
        res.status(400).json({"error": e.errmsg});
    }
};

urlCtrl.createURLShort = async (req, res) => {
    try {
        const originalURL = req.body.url;
        if (isValidUrl(originalURL)) {
            const shortURL = generateShortURL();
            const newUrl= new URLShorterDB({ 
                original_url: originalURL, short_url: shortURL
            });
            await newUrl.save();
            res.json(newUrl);
        } else {
            res.json({ 'error' : 'invalid URL' });
        }
    } catch (e) {
        console.log(e)
        try {
            const shortURL = await URLShorterDB.findOne({
                original_url : req.body.url
            });
            res.json(shortURL);
        } catch (e) {
            res.status(500).json({"error": e.errmsg});
        }
    }
};

function generateShortURL() {
    return Math.random().toString(36).substr(2, 5);
}

function isValidUrl(urlString) {
    try {
      new URL(urlString);
    } catch (_) {
      return false;  
    }
    return true;
}

module.exports = urlCtrl;