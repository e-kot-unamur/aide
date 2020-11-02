const contact = 'https://www.messenger.com/t/ekotnamur'

export default class HtmlParser {
    /**
     * replace <contact> from the json diagram to a 
     * <a> tag referencing messenger's contact page
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