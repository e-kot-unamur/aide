import frInternet from "./1/fr.json"
import frMac from "./2/fr.json"

import enInternet from "./1/en.json"
import enMac from "./2/en.json"

import frPcLent from "./3/fr.json"

const diagrams = {
    "fr": [frInternet, frMac, frPcLent],
    "en": [enInternet, enMac, frPcLent], //TODO faire pclent en anglais 
}

export default diagrams