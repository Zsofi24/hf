// 1. Tekintsük az alábbi adatszerkezeteket és írjunk kódot a kérdések megválaszolására!

let szemelyek = {
    "alice@example.com": {
        nev: "Alice Allison",
        szuletett: "1988-05-02"
    },
    "bob@example.com": {
        nev: "Robert Robertsson",
        szuletett: "1999-12-21"
    }
};

// kulcsok: felhasználói név
let vasarlok = {
    "alice42": {
        email: "alice@example.com"
    },
    "bobafett": {
        email: "bob@example.com"
    }
};

let uj = {
    nev: "Cecil Cecilianus",
    email: "cecil@example.com",
    szuletett: "1997-08-12"
};


// 1.a Kérd be egy vásárló felhasználói nevét és írd ki a születési dátumát!

let kulcs = prompt("Addj meg egy felhasználói nevet!"); // alice42


if (vasarlok[kulcs]["email"] == "alice@example.com") {
    alert("Alice születési ideje: " + szemelyek["alice@example.com"]["szuletett"]);
} else if (vasarlok[kulcs]["email"] == "bob@example.com") {
    alert("Robert születési ideje: " + szemelyek["bob@example.com"]["szuletett"])
} else {
    alert("nincs ilyen felhasználói név")
}


// 2. Mentsd el az uj objektum adatait a megfelelő objektumokba!

szemelyek["cecil@example.com"] = {nev: "Cecil Cecilianus", szuletett: "1997-08-12"};

