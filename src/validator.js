
const VALIDATOR = require('./validator.const');

/**
 * @class Validator
 * @memberof CodiceFiscaleUtils
 */
class Validator {

    /**
     * Validation regexp for the given surname or generic
     * @param {string} surname Optional surname to generate validation regexp
     * @returns {RegExp} CF Surname matcher
     * @memberof CodiceFiscaleUtils.Validator
     */
    static cfSurname(surname) {
        if ((surname || '').length > 1) {
            const cons = surname.match(new RegExp(`[${VALIDATOR.CONSONANT_LIST}]`, 'ig')) || [];
            const vow = surname.match(new RegExp(`[${VALIDATOR.VOWEL_LIST}]`, 'ig')) || [];
            const cfMatcher = cons.concat(vow).join('').toUpperCase().padEnd(3, 'X').substr(0, 3);
            return new RegExp(`^${cfMatcher}$`, 'i');
        }
        return new RegExp(`^${VALIDATOR.NAME_MATCHER}$`, 'i');
    }
}

module.exports = Validator;