function changeText() {
    var textsArray = ["SIT771", "SIT772", "SIT773", "SIT774"]
    var number = getRandomNumberBetween(0, textsArray.length - 1)
    console.log("Index: ", number)
    document.getElementById("header").innerHTML = textsArray[number];
}
function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}