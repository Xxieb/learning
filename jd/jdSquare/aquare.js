$.getJSON("jdSquare/square.json", function (data) {
    let addSquare = new AddSquare(data);
    addSquare.main();
});
function AddSquare(data) {
    this.data = data;
    this.squareL = document.querySelector(".jd-square-body-l");
    this.squareR = document.querySelector(".jd-square-body-r");
    this.imgL = this.squareL.querySelectorAll("img");
};
AddSquare.prototype = {
    constructor: AddSquare,
    addhtml: function () {
        for (let i = 0, il = this.imgL.length; i < il; i++) {
            this.imgL[i].src = this.data["bigImg"][i]
        };
        for (i = 0, il = this.data["squareContent"].length; i < il; i++) {
            let div = document.createElement("div");
            div.classList.add("jd-square-item7");
            div.innerHTML = "<a href=\"\" class=\"item-title\"><span class=\"item-title-l\"></span><span class=\"item-title-r\"></span></a>" +
                "<div class=\"item-imgs\"><a href=\"\"><img src=\"\" alt=\"\"></a><a href=\"\"><img src=\"\" alt=\"\"></a></div>";
            if (i < 4) {
                this.squareL.appendChild(div)
            } else {
                this.squareR.appendChild(div)
            };
        };
    },
    adddata: function () {
        let titleL = document.querySelectorAll(".item-title-l"),
            titleR = document.querySelectorAll(".item-title-r"),
            imgs = document.querySelectorAll(".item-imgs");
        for (i = 0, il = this.data["squareContent"].length; i < il; i++) {
            titleL[i].innerHTML = this.data["squareContent"][i]["titleL"];
            titleR[i].innerHTML = this.data["squareContent"][i]["titleR"];
            let img = imgs[i].querySelectorAll("img");
            for (let j = 0, jl = img.length; j < jl; j++) {
                img[j].src = this.data["squareContent"][i]["smallImg"][j]
            };
        };
    },
    main:function(){
        this.addhtml();
        this.adddata();
    }
};