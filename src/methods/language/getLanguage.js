const { getLang } = require("../../utils/Variables")

/** Returns the current language.
 * @returns {'english' | 'spanish' | 'italian' | 'german' | 'french' | 'korean' | 'japanese' | 'chinese-traditional' | 'chinese-simplified'} */
module.exports = function getLanguage() {
    const lang = getLang();
    if (lang === 'en') return 'english';
    else if (lang === 'es') return 'spanish';
    else if (lang === 'it') return 'italian';
    else if (lang === 'de') return 'german';
    else if (lang === 'fr') return 'french';
    else if (lang === 'ko') return 'korean';
    else if (lang === 'ja') return 'japanese';
    else if (lang === 'zh-Hant') return 'chinese-traditional';
    else if (lang === 'zh-Hans') return 'chinese-simplified';
    return undefined;
}