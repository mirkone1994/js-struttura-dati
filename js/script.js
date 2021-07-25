/*Descrizione:
Proviamo a ripetere quanto visto in classe, creando la struttura che riteniamo più adeguata per rappresentare una carta di Magic.
Una volta definita la struttura, stampiamo sulla pagina HTML tutte le informazioni relative alla carta stessa, senza particolare attenzione a dettagli grafici (va bene una lista coi tag UL e LI)*/
const deck = [
    {
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
    },
    {
        id: 2,
        name: "Black Lotus",
        launchCost: ['4', 'G', 'R'],
        cmc: 8,
        cardType: "Creatura",
        subType: "Pianta",
        expansion: {
            reprintId: 12,
            name: "Magie Arcane",
            rarity: "Gold",
            collectionNr: 8,
            totalCard: 430,
        },
        flavorText: {
            quote: "Costa tanto",
            author: "Jim Bim",
        },
        abilities: [
            {
                launchCost: ["R", "T"],
                description: ["Sgroda"]
            },
            {
                launchCost: ["R", "T"],
                description: ["Sbreni"],
            },
        ],
        constitution: 4,
        strength: 5,
        borderColor: "#000",
        illustration : {
            autohr: {
                id: 4,
                name: "John Bon",
            },
            source: "..img/pic.jpg",
        },
        background: {
            color: "red",
            source: "..img/pic.jpg",
        },
    },
    {
        id: 1,
        name: "Placeholder",
        launchCost: ['2', 'R'],
        cmc: 8,
        cardType: "Mostro",
        subType: "Nano",
        expansion: {
            reprintId: 9,
            name: "Nani da giardino",
            rarity: "Gold",
            collectionNr: 7,
            totalCard: 430,
        },
        flavorText: {
            quote: "È un nano",
            author: "Jim Bim",
        },
        abilities: [
            {
                launchCost: ["R", "T"],
                description: ["Bassezza"]
            },
            {
                launchCost: ["R", "T"],
                description: ["Nanitudine"],
            },
        ],
        constitution: 2,
        strength: 16,
        borderColor: "#000",
        illustration : {
            autohr: {
                id: 6,
                name: "John Bon",
            },
            source: "..img/pic.jpg",
        },
        background: {
            color: "red",
            source: "..img/pic.jpg",
        },
    },
];

function createCardTemplate(card){
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
    };
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
    return cardTemplate;
}

const renderDeck = (deck, targetElement) => {
    let deckTemplate = "";
    for (let i = 0; i < deck.length; i++) {
        const currentCard = deck[i];
        const currentCardTemplate = createCardTemplate(currentCard);
        deckTemplate += currentCardTemplate;
    }
    targetElement.innerHTML = deckTemplate;
}

const cardSection = document.getElementById("cards");
renderDeck(deck, cardSection);
let deckTemplate = "";
for (let i = 0; i < deck.length; i++) {
    const currentCard = deck[i];
    const currentCardTemplate = createCardTemplate(currentCard);
    deckTemplate += currentCardTemplate;
}
cardSection.innerHTML = deckTemplate;

const inputField = document.getElementById("search");
const selectField = document.getElementById("filter");
const button = document.getElementById("button");

selectField.addEventListener("change", () => {
    const currentValue = selectField.value;
    if (currentValue !== "all") {
        inputField.classList.remove("d-none");
    } else {
        inputField.classList.add("d-none");
    }
});

button.addEventListener("click", () => {
    const inputValue = inputField.value;
    const selectValue = selectField.value;
    if (selectValue === "all") {
        renderDeck(deck, cardSection);
        return
    }
    const filteredDeck = [];
    for(let i = 0; i < deck.length; i++){
        const currentCard = deck[i];
        if(currentCard[selectValue] == inputValue) {
            filteredDeck.push(currentCard);
        }
    }
    renderDeck(filteredDeck, cardSection);

});

