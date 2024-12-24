const date = new Date;
const currentYear = date.getFullYear();

//Place it on ID "current-year"
const node = document.getElementsByClassName("current-year");
for(let i = 0; i < node.length; i++) {
    node[i].innerHTML = currentYear;
}

console.log("Current year: " + currentYear);