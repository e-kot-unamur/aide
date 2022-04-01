const contact = 'https://www.facebook.com/ekotnamur'
const facebookLink = 'https://www.messenger.com/t/ekotnamur'
const instagramLink = 'https://www.instagram.com/ekot.unamur/'

export default class HtmlParser {

    // TODO refactor the following

    static parseFacebook(text) {
        return text
            .replace("<facebook>", `<a href=${facebookLink} target="_blank" rel="noopener">`)
            .replace("</facebook>", `</a>`)
    }

    static parseInstagramTag(text) {
        return text
            .replace("<instagram>", `<a href=${instagramLink} target="_blank" rel="noopener">`)
            .replace("</instagram>", `</a>`)
    }

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
            .replace('<contact>', `<a href="${contact}" target="_blank" rel="noopener">`)
            .replace('</contact>', '</a>')
    }
}