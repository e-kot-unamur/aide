import { contact } from './api'

class APIParser {
    /**
     * replace <contact> from the api response to a 
     * <a> tag referencing messenger's contact page
     * Note : This is plain string, no JSX
     * 
     * @param  {String} text The string to be parsed
     * @return {String}      The formated string 
     * 
     * @todo remove useless space from inner tag < ... >
     */
    static parseContact(text) {
        return text
            .replace('<contact>', `<a href="${contact}" target="_blank">`)
            .replace('</contact>', '</a>')
    }
}

export default APIParser