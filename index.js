import { countryList } from "./countryList.js";

countryList.map((item,i) => {
    const details = `My language name is ${item.language['name']}`
    console.log(details)
});