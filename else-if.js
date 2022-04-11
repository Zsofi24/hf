let coffee = prompt("Kérsz kávét? (igen/nem)");

if (coffee == "nem") {
    alert("nem kér kávét")
} else if (coffee == "igen" ) {
    let milk = prompt("Kérsz bele tejet? (igen/nem)");
    let sugar = prompt("Kérsz bele cukrot? (igen/nem)")
        if (milk == "igen" && sugar == "igen") {
            alert("kávé cukorral és tejjel")
        } else if (milk == "nem" && sugar == "igen") {
            alert("kávé cukorral")
        } else if (milk == "igen" && sugar == "nem") {
            alert("kávé tejjel")
        } else if (milk == "nem" && sugar == "nem") {
            alert ("kávé")
        } else {
            alert("nem megfelelő válasz")
        }
} else {
    alert("nem megfelelő válasz")
}