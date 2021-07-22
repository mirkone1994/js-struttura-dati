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

const cardSection = document.getElementById("cards");
let cardTemplate = `
<ul class "card">
    <li>Id: ${card.id}</li>
    <li>Nome: ${card.name}</li>
    <li>Costo di lancio: ${card.launchCost.join(", ")}</li>
    <li>Costo cmc: ${card.cmc}</li>
    
`
cardSection.innerHTML = cardTemplate;

