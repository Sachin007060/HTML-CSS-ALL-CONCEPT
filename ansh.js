let items = document.getElementsByClassName("item");
console.log(items);

for (let ele of items) {
    ele.style.display = "flex";
    ele.style.height = "100px";
    ele.style.width = "100px";
    ele.style.borderRadius = "50%";
    ele.style.alignItems = "center";
}
let box1 = items[0];
let box2 = items[1];
let box3 = items[2];
let box4 = items[3];
let box5 = items[4];
let box6 = items[5];

box1.style.backgroundColor = "violet";
box2.style.backgroundColor = "blue";
box3.style.backgroundColor = "green";
box4.style.backgroundColor = "yellow";
box5.style.backgroundColor = "orange";
box6.style.backgroundColor = "red";