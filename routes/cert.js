const express = require('express');

const router = express.Router();

router.get('/.well-known/acme-challenge/_RqrYZiSW2cifTVcfn7DE5F167aQbhD8jviNt6858Is', (req, res) => {
    return res.status(200).send('_RqrYZiSW2cifTVcfn7DE5F167aQbhD8jviNt6858Is.FRMPN6oI4B940dlzqnttr4ApGgG0Y1pHcxNJs3Pwwm4')
})

module.exports = router;