function AddMenu(data) {
    this.data = data;
}
AddMenu.prototype = {
    constructor: AddMenu,
    addMenuOne: function () {
        let dhList = document.querySelector(".dhlist");
        for (let i = 0, il = this.data["menu"]["one"]["title"].length; i < il; i++) {
            let div = document.createElement("div"),
                p = document.createElement("p"),
                b = document.createElement("b"),
                subdiv = document.createElement("div");
            subdiv.classList.add(`dhlist_${i + 1}-list`);
            subdiv.classList.add("addContent");
            div.classList.add(`dhlist_${i + 1}`);
            p.appendChild(b);
            div.appendChild(p);
            div.appendChild(subdiv);
            dhList.appendChild(div);
            if (i < 3) {
                let linediv = document.createElement("div");
                linediv.classList.add("vertical-line");
                dhList.appendChild(linediv);
            }
        }
        let titleList = document.querySelectorAll(".dhlist p b"),
            data = this.data["menu"]["one"],
            title_List = data["title"];
        for (let i = 0, il = titleList.length; i < il; i++) {
            titleList[i].innerHTML = title_List[i]["name"];
            addContent(title_List[i]["content"], i);
        }
        function addContent(contentList, i) {
            let containerList = document.querySelectorAll(".addContent");
            for (let j = 0, il = contentList.length; j < il; j++) {
                let a = document.createElement("a"),
                    div = document.createElement("div");
                a.innerHTML = contentList[j];
                div.classList.add("items");
                div.appendChild(a);
                containerList[i].appendChild(div);
            }
        }
    },
    addMenuTwo: function () {
        let data = this.data["menu"]["two"],
            menuList = document.querySelectorAll(".myjdlist");
        for (let i = 0, il = menuList.length; i < il; i++) {
            for (let j = 0, jl = data["content"][i].length; j < jl; j++) {
                let div = document.createElement("div"),
                    a = document.createElement("a");
                a.innerHTML = data["content"][i][j];
                div.classList.add("items");
                div.appendChild(a);
                menuList[i].appendChild(div);
            }
        }
    },
    addMenuThree: function () {
        let data = this.data["menu"]["three"],
            menuList = document.querySelector(".cglist");
        for (let i = 0, il = data["content"].length; i < il; i++) {
            let div = document.createElement("div"),
                a = document.createElement("a");
            div.classList.add("items");
            a.innerHTML = data["content"][i];
            div.appendChild(a);
            menuList.appendChild(div);
        }
    },
    addMenuFour: function () {
        let data = this.data["menu"]["four"],
            menuList = document.querySelectorAll(".fwlist");
        for (let i = 0, il = menuList.length; i < il; i++) {
            for (let j = 0, jl = data["content"][i].length; j < jl; j++) {
                let div = document.createElement("div"),
                    a = document.createElement("a");
                a.innerHTML = data["content"][i][j];
                div.classList.add("items");
                div.appendChild(a);
                menuList[i].appendChild(div);
            }
        }
    }
}