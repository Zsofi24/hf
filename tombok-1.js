<p>1. feladat: Két osztály tanulóinak magasságait tároljuk két tömbben. Kérdezd meg a felhasználótól, 
melyik osztály átlagos magasságát szeretné látni és a válaszának megfelelően jelenítsd meg az adott 
osztály átlagos magasságát!</p>

let first = [160, 160, 155, 159, 162, 178, 198, 188, 187, 186, 170, 173, 168, 168, 169];
let  second = [160, 161, 156, 158, 165, 179, 198, 200, 188, 183, 184, 171, 173, 168, 168, 169, 173];

let classes = prompt("Melyik osztály átlagmagasságát szeretné mehtudni? (first/second)", "first / second");

let first_height = 0;
let second_height = 0;

if (classes == "first") {
    for (let i = 0; i < math.length; i++) {
        first_height += math[i];
    }
    console.log(first_height);
    alert("At első osztály átlagmagassága: " + (first_height/math.length) + " cm");

} else if (classes == "second") {
    for (let i = 0; i < english.length; i++) {
        second_height += english[i];
    }
    console.log(english.average);
    alert("A második osztály átlagmagassága: " + (second_height/english.length) + " cm");

} else {
    alert("Nincs ilyen osztály");
}

<p>3. feladat: Egy cég alkalmazottainak az adatait eltároltuk egy többdimenziós tömbben. 
Kérd be a felhasználótól, hogy melyik munkakörre vonatkoztatva írjuk ki, hogy mennyit költ a cég fizetésekre és jelenítsd meg a választ! 
Ha nem létezik a kért munkakör, írd ki, hogy nincs ilyen pozíció!</p>

let alkalmazottak = [
    // név, foglalkozás, havi bér
    ["alice", "programozó", 140000],
    ["bob", "programozó", 140000],
    ["cecil", "tesztelő", 100000]
];

let job = prompt("Melyik munkakör fizetésére kíváncsi? (programozó / tesztelő)");

let salery_prog = alkalmazottak[0][2];
let salery_test = alkalmazottak[2][2];

console.log(salery_prog);
console.log(salery_test);

if (job == "programozó") {
    alert("A programozók össz munkabére a hónapban: " + (alkalmazottak[0][2]+alkalmazottak[1][2]) + " Ft");
} else if (job == "tesztelő") {
    alert("A tesztelők össz munkabére a hónapban: " + (alkalmazottak[2][2]) + " Ft");
} else {
    alert("Nincs ilyen foglalkozás");
}

<p>4.Találj ki és írj egy életszerű példa programot, amelynek a megoldásához tömböt és elágazást kell használni!</p>

let priceList_coffee = [
    ["espresso", 500],
    ["cappuccino", 650],
    ["americano", 550],
    ["ristretto", 500],
    ["flat white", 700],
]

let coffee = ["espresso ", "cappuccino ", "americano ", "ristretto ", "flat white "];

let answerCoffee = prompt("Kér kávét? (igen / nem)");

let orderPrice = 0;
let order = "";

if (answerCoffee == "igen") {
    let sortOf = prompt("Milyen kávét kérsz? " + "(" + coffee + ")");
    order += sortOf;
        if (sortOf == "espresso") {
            orderPrice += priceList_coffee[0][1];
        } else if (sortOf == "cappuccino") {
            orderPrice += priceList_coffee[1][1];
        } else if (sortOf == "americano") {
            orderPrice += priceList_coffee[2][1];
        } else if (sortOf == "ristretto") {
            orderPrice += priceList_coffee[3][1];
        } else if (sortOf == "flat white") 
            orderPrice += priceList_coffee[4][1];
} else {
    alert("Rendben")
}

alert("A rendelése: 1 " + order+ ", " + orderPrice + " Ft.")







