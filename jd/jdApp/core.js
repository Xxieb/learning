$.getJSON("jdApp/app.json", function (data) {
    let addCore = new AddCore(data)
    addCore.main();
})
function AddCore(data) {
    this.data = data;
}
AddCore.prototype = {
    constructor: AddCore,
    addCoreL: function () {
        let topItem = document.querySelectorAll(".top-item"),
            topList = document.querySelector(".top-list")
        for (let i = 0, il = this.data["coreL"].length; i < il; i++) {
            let a = document.createElement("a")
            a.innerHTML =
                "<img src=\"\" alt=\"\" class=\"right-img\"><div class=\"top-two top-js\"><span></span><span></span></div><span class=\"top-item-name\"></span>";
            topItem[i].appendChild(a);
        }
        let img = topList.querySelectorAll("img"),
            topJs = topList.querySelectorAll(".top-js");
        topJs[0].classList.remove("top-two");
        topJs[0].classList.add("top-one");
        img[0].classList.remove("right-img");
        img[0].classList.add("left-img");
        for (let i = 0, il = this.data["coreL"].length; i < il; i++) {
            img[i].src = this.data["coreL"][i]["src"];
            let topSpan = topJs[i].querySelectorAll("span"),
                topName = topList.querySelectorAll(".top-item-name");
            for (let j = 0, jl = topSpan.length; j < jl; j++) {
                topSpan[j].innerHTML = this.data["coreL"][i]["top"][j]
            }
            topName[i].innerHTML = this.data["coreL"][i]["title"];
        }
    },
    addCoreR: function () {
        let coreBd = document.querySelector(".core-right .box-bd"),
            leftImg = coreBd.querySelector('.left-img'),
            title = leftImg.querySelector('h6'),
            span = leftImg.querySelectorAll('span'),
            lImgs = leftImg.querySelectorAll('img');
        for (let i = 0, il = lImgs.length; i < il; i++) {
            lImgs[i].src = this.data['coreR']['left']['img'][i];
        }
        for (let i = 0, il = span.length; i < il; i++) {
            span[i].innerHTML = this.data['coreR']['left']['info'][i];
        }
        title.innerHTML = this.data['coreR']['left']['title'];

        let otherList = document.querySelector(".other-items-list");
        for (let i = 0, il = this.data['coreR']['right'].length; i < il; i++) {
            let a = document.createElement("a");
            a.classList.add("other-items");
            a.innerHTML = "<img src=\"\"><p>金纺超级品牌日</p>";
            otherList.appendChild(a)
        }
        for (let i = 0, il = this.data['coreR']['right'].length; i < il; i++) {
            let img = otherList.querySelectorAll('img'),
                p = otherList.querySelectorAll('p');
            img[i].src = this.data['coreR']['right'][i]["img"];
            p[i].innerHTML = this.data['coreR']['right'][i]["title"];
        }
    },
    main: function () {
        this.addCoreL();
        this.addCoreR();
    }
}