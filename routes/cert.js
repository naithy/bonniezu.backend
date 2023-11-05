const express = require('express');

const router = express.Router();

router.get('/.well-known/acme-challenge/UZTnbq1XBvBE-fgFg3ERQB-Mr0du-GxWXQo1K6Xi8B0', (req, res) => {
    return res.status(200).send('UZTnbq1XBvBE-fgFg3ERQB-Mr0du-GxWXQo1K6Xi8B0.FRMPN6oI4B940dlzqnttr4ApGgG0Y1pHcxNJs3Pwwm4')
})

module.exports = router;