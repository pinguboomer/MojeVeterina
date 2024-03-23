module.exports.EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
module.exports.PHONE_REGEX = /^[+]?[()/0-9. -]{9,}$/

module.exports.TOKEN_COOKIE_NAME = 'token'
module.exports.TOKEN_COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 30 // 30 dní
module.exports.TOKEN_COOKIE_SAME_SITE = 'none'