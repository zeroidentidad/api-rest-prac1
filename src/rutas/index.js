const { Router } = require('express');
const router = Router();

router.get('/test',(req, res)=>{
	const data = {
		"nombre":"Jesus",
		"web":"softcun.co.nf"
	};
	res.json(data);
});

module.exports = router;