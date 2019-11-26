function AddUserRight(data) {
    this.data = data
}
AddUserRight.prototype = {
    constructor: AddUserRight,
    addNews: function () {
        let data = this.data["news"],
            newsList = document.querySelector(".news-list ul");
        for (let i = 0, il = data["title"].length; i < il; i++) {
            let li = document.createElement("li"),
                a = document.createElement("a"),
                span = document.createElement("span"),
                text = document.createTextNode(data["content"][i]);
            span.innerHTML = data["title"][i];
            span.classList.add("hot-info");
            a.appendChild(span);
            a.appendChild(text);
            li.appendChild(a);
            newsList.appendChild(li)
        }
    },
    addIcons: function () {
        let data = this.data["info"],
            iconList = document.querySelector(".icon-list ul");
        for (i = 0, il = data.length; i < il; i++) {
            let li = document.createElement("li"),
                a = document.createElement("a"),
                span = document.createElement("span"),
                element_i = document.createElement("i");
            element_i.classList.add(`icon_${i+1}`);
            li.classList.add("items");
            span.classList.add("items-info");
            span.innerHTML = data[i];
            a.appendChild(element_i);
            a.appendChild(span);
            li.appendChild(a);
            iconList.appendChild(li);
        }
    }
}