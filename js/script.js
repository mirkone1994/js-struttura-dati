/*Descrizione:
Proviamo a ripetere quanto visto in classe, creando la struttura che riteniamo più adeguata per rappresentare una carta di Magic.
Una volta definita la struttura, stampiamo sulla pagina HTML tutte le informazioni relative alla carta stessa, senza particolare attenzione a dettagli grafici (va bene una lista coi tag UL e LI)*/

const card = {
    id: 1,
    name: "Bloodfire Colossus",
    launchCost: ['6', 'R', 'R'],
    cmc: 8,
    cardType: "Creatura",
    subType: "Gigante",
    expansion: {
        reprintId: 9,
        name: "Bestie Infuocate",
        rarity: "Gold",
        collectionNr: 12,
        totalCard: 430,
    },
    flavorText: {
        quote: "Emana molto caldo",
        author: "Jim Bim",
    },
    abilities: [
        {
            launchCost: ["R", "T"],
            description: ["Pugno infuocato"]
        },
        {
            launchCost: ["R", "T"],
            description: ["Calcio rovente"],
        },
    ],
    constitution: 13,
    strength: 13,
    borderColor: "#000",
    illustration : {
        autohr: {
            id: 1,
            name: "John Bon",
        },
        source: "..img/pic.jpg",
    },
    background: {
        color: "red",
        source: "..img/pic.jpg",
    },
}

console.log(card);

let abilitiesContent = "Nessuna abilità";
if (card.abilities.length) {
    abilitiesContent = "<ul>";
    for (let i = 0; i < card.abilities.length; i++) {
        const currentABility = card.abilities[i];
        abilitiesContent += "---";
        abilitiesContent += `<li>Descrizione: ${currentABility.description}</li>`;
        abilitiesContent += `<li>Costo di lancio: ${currentABility.launchCost.join(", ")}</li>`;
        abilitiesContent += "</ul>";
    }
}

const cardSection = document.getElementById("cards");
const cardSection2 = document.getElementById("cards2");
const subType = card.subType ? `- ${card.subType}` : " ";
let cardTemplate = `
<ul class "card">
    <li>Id: ${card.id}</li>
    <li>Nome: ${card.name}</li>
    <li>Costo di lancio: ${card.launchCost.join(", ")}</li>
    <li>Costo cmc: ${card.cmc}</li>
    <li>Tipo di carta: ${card.cardType} ${subType}</li>
    <li>Espansione: 
        <ul>
            <li>Ristampa: ${card.expansion.reprintId}</li>
            <li>Nome: ${card.expansion.name}</li>
            <li>Rarità: ${card.expansion.rarity}</li>
            <li>Posizione numero: ${card.expansion.collectionNr}/${card.expansion.totalCard}</li>
        </ul>
    </li>
    <li>Testo di Colore: ${card.flavorText.quote} - ${card.flavorText.author}</li>
    <li>Abilità: ${abilitiesContent}</li>
    <li>Costituzione: ${card.constitution}</li>
    <li>Forza: ${card.strength}</li>
    <li>Colore bordo: ${card.borderColor}</li>
    <li>
        <ul>
            <li>Autore: ${card.illustration.autohr.source} (id: ${card.illustration.autohr.id})</li>
            <li>Link illustrazione: ${card.illustration.source}</li>
        </ul>
    </li>
</ul>
`;
cardSection.innerHTML = cardTemplate;
cardSection2.innerHTML = cardTemplate;

