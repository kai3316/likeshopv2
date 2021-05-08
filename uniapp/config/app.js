module.exports = {
    HEADER: {
        'content-type': 'application/json'
    },
	// #ifdef H5
    baseURL: process.env.NODE_ENV == 'production' ? '/api/' : 'http://likeshopb2cos.yixiangonline.com/api/',
    // baseURL: process.env.NODE_ENV == 'production' ? '/api/' : '/api/',
	// #endif
	// #ifndef H5
	baseURL: 'http://likeshopb2cos.yixiangonline.com/api/'
	// #endif
}