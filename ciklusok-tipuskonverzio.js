// 1. Kérj be egy n értéket. Ha nem szám, írd ki, hogy hibás input és kérd be újra, midaddig, amíg számot nem adott meg a felhasználó.

let n = Number(prompt("Adja meg, hány elemű legyen a tömb!"));


while (Number.isNaN(n)) {
    alert("Hibás input. Próbáld újra!");
    n = Number(prompt("Írj be egy értéket!"));
}
console.log(n);

// 2. Tölts fel egy t tömböt n elemmel. Az elemek csak számok lehetnek. 
// Ha nem számot adott meg a felhasználó, írd ki, hogy hibás input és kérd be újra, midaddig, amíg számot nem adott meg a felhasználó.

let t = [];

for(let i = 0; i <n; i++) {
   t[i] = Number(prompt("Adja meg az " + (i+1) + ". elemet!"));

    while (Number.isNaN(t[i])) {
        alert("Hibás input. Próbáld újra!"); 
        t[i] = Number(prompt("Írj be egy értéket!"));
}
}

alert("A tömb elemei: " + t);

// 3. Kérd be, hogy pozitív vagy negatív számokat listázzunk. 
// Ha nem a felsorolt értékek valamelyikét adta meg a felhasználó, írd ki, hogy hibás input és kérd be újra,
// midaddig, amíg nem a felsorolt értékek valamelyikét adta meg.
// 4. Írd a konzolra a felahsználó választása alapján a tömb pozitív vagy negatív elemeit.
// Ha váalsztás alapján nincs mit kiírni (pl. nincsenek pozitív számok), akkor írd ki, hogy nincsenek ilyen számok a tömbben.

let list = prompt("Pozitív vagy negatív számokat listázzuk ki? (pozitív / negatív)");

while (list != "pozitív" && list != "negatív") {
    alert("Hibás input");
    list = prompt("Pozitív vagy negatív számokat listázzuk ki? (pozitív / negatív)");
}

let poz = [];
let neg = [];

if (list == "pozitív") {
    for(let i = 0; i < t.length; i++) {
        if (t[i] >= 0 ) {
            poz.push(t[i]);
        }
    }

    if (poz.length == 0) {
        alert("Nincsenek pozitív számok a tömbben.")
    } else {
    alert("Pozitív elemek a tömbből: " + poz);
    }

} else if (list == "negatív") {
    for(let i = 0; i < t.length; i++) {
        if (t[i] < 0 ) {
            neg.push(t[i]);
        }
    }
    if (neg.length == 0) {
        alert("Nincsenek negatív számok a tömbben.")
    } else {
    alert("Negatív elemek a tömbből: " + neg);
    }
}

// 5. Írd ki a t tömb elemeinek összegét.

let ossz = 0;

for(let i = 0; i < t.length; i++) {
    ossz += t[i];
}

alert("A tömb elemei: " + t);
alert("A tömb elemeinek összege: " + ossz);



