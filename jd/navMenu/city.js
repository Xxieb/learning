$.getJSON("navMenu/city.json", function (data) {
    addCity(data);
})
function addCity(data) {
    city_List = data["cityList"];
    for (let i = 0, il = city_List.length; i < il; i++) {
        let cityList = document.querySelector(".city-lists"),
            div = document.createElement("div"),
            a = document.createElement("a");
        if (i === 0) {
            a.classList.add("selected")
        }
        div.classList.add("items");
        div.appendChild(a);
        cityList.appendChild(div);

    }
    aList = document.querySelectorAll(".city-lists div a");
    for (let i = 0, il = city_List.length; i < il; i++) {
        aList[i].innerHTML = city_List[i]
    }
}
