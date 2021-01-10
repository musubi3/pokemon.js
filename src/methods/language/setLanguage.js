const { setLang } = require("../../utils/Variables")

/** Sets the language, returning true if successfully set and false otherwise.
 * @param {'english' | 'spanish' | 'italian' | 'german' | 'french' | 'korean' | 'japanese' | 'chinese-traditional' | 'chinese-simplified'} language 
 * @returns {Boolean} */
module.exports = function setLanguage(language) {
    if (language === 'english') setLang('en');
    else if (language === 'spanish') setLang('es');
    else if (language === 'italian') setLang('it');
    else if (language === 'french') setLang('fr');
    else if (language === 'korean') setLang('ko');
    else if (language === 'japanese') setLang('ja');
    else if (language === 'chinese-simplified') setLang('zh-Hans');
    else if (language === 'chinese-traditional') setLang('zh-Hant');
    else { console.error('ERROR: Invalid Language'); return false; }
    return true;
}