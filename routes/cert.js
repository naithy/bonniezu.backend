const express = require('express');

const router = express.Router();

router.get('/.well-known/acme-challenge/z5a-rSlBMvHwITCw2bhE85DJYegN2B1F4plnt5J5iAs', (req, res) => {
    return res.status(200).send('z5a-rSlBMvHwITCw2bhE85DJYegN2B1F4plnt5J5iAs.6J7nS24mSfzCtz1vziOCgzLBL_ULeGXPYirt4tFOFAs')
})

module.exports = router;