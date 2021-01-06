var lang = ''
module.exports = {
    /** @param {'en' | 'it' | 'fr' | 'es' | 'ja' | 'ko' | 'de' | 'zh-Hant' | 'zh-Hans'} newLang */
    setLang(newLang) { lang = newLang },
    getLang() { return lang }
}