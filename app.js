//

class Item {
    constructor(name, price, image){
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

//Items del juego 
const potion = new Item("Life potion", 200, "pocion.png");
const sword = new Item("Sword", 50, "espada.png");
const shield = new Item("Shield", 125, "escudo.png");

const inventary = [];

//Oro
let gold = 1500;


const elGold = document.querySelector("#gold span");
elGold.innerText = gold;
const elInventary = document.getElementById("inventary");

//Funcion agregar items al inventario
function buy(item) {
    if (gold - item.price >= 0){
        inventary.push(item);
        gold = gold - item.price

        updateHTML();

    } else{
        alert(`You do not have enough gold to buy ${item.name}.`);
    }
}
//Funcion para vender
function sell(itemName){
    const itemFound = inventary.find((item) => item.name == itemName);
    if (itemFound) {
        gold = gold + itemFound.price;
        const indice = inventary.indexOf(itemFound);
        inventary.splice(indice,1);

        updateHTML();
    }

}

//Funcion para actualizar HTML
function updateHTML(){
    elInventary.innerHTML = "";
    for (const item of inventary) {
        const li = `
        <li onclick="sell('${item.name}')">
        <img src="images/${item.image}" alt="${item.image}" />
        </li>`

        elInventary.innerHTML +=li
    }

    elGold.innerText = gold;
}