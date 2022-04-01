const contact = 'https://www.facebook.com/ekotnamur'
const facebookLink = 'https://www.messenger.com/t/ekotnamur'
const instagramLink = 'https://www.instagram.com/ekot.unamur/'

export default class HtmlParser {

    // TODO refactor the following

    static parseFacebook(text) {
        return this.parse(text, 'facebook', facebookLink)
    }

    static parseInstagramTag(text) {
        return this.parse(text, 'instagram', instagramLink)
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
        return this.parse(text, 'contact', contact)
    }

    // Should be private 
    static parse(text, tag, href) {
        return text
            .replace(`<${tag}>`, `<a href=${href} target="_blank" rel="noopener">`)
            .replace(`</${tag}>`, `</a>`)
    }
}