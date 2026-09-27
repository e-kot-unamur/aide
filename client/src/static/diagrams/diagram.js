import frInternet from "./2/fr.json"
import enInternet from "./2/en.json"
import frMac from "./4/fr.json"
import enMac from "./4/en.json"
import frPcLent from "./5/fr.json"
import enPcLent from "./5/en.json"
import frWifi from "./1/fr.json"
import enWifi from "./1/en.json"
import frPasswordUpdate from "./3/fr.json"
import enPasswordUpdate from "./3/en.json"

const diagrams = {
    "fr": [frWifi, frInternet, frPasswordUpdate, frMac, frPcLent],
    "en": [enWifi, enInternet, enPasswordUpdate, enMac, enPcLent],
}

export default diagrams