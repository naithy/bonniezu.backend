const express = require('express');

const router = express.Router();

router.get('/.well-known/acme-challenge/YNXUN99__li_IUXXBhjm1pk8NptsIgPoU8Flx47cqVQ', (req, res) => {
    return res.status(200).send('YNXUN99__li_IUXXBhjm1pk8NptsIgPoU8Flx47cqVQ.FRMPN6oI4B940dlzqnttr4ApGgG0Y1pHcxNJs3Pwwm4')
})

module.exports = router;