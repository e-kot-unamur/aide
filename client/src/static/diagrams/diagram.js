import frInternet from "./1/fr.json"
import enInternet from "./1/en.json"
import frMac from "./2/fr.json"
import enMac from "./2/en.json"
import frPcLent from "./3/fr.json"
import enPcLent from "./3/en.json"
import frWifi from "./4/fr.json"
import enWifi from "./4/en.json"
import frPasswordUpdate from "./5/fr.json"
import enPasswordUpdate from "./5/en.json"

const diagrams = {
    "fr": [frPasswordUpdate, frInternet, frMac, frPcLent, frWifi],
    "en": [enPasswordUpdate, enInternet, enMac, enPcLent, enWifi],
}

export default diagrams