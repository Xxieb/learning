$.getJSON("jdRecommend/recommend.json", function (data) {
    let addRecommend = new AddRecommend(data);
    addRecommend.main();
})
function AddRecommend(data) {
    this.data = data;
    this.recommendList = document.querySelector(".recommend-bd-list");
}
AddRecommend.prototype = {
    constructor: AddRecommend,
    addhtml: function () {
        for (let i = 0, il = this.data["content"].length; i < il; i++) {
            let li = document.createElement("li");
            li.classList.add("bd-list-items");
            li.innerHTML = "<a href=\"\"><div><img src=\"\" class=\"list-items-img\"></div><div class=\"list-items-title\"><p></p></div>" +
                "<div class=\"list-items-price\"><span>¥</span><span class=\"recomendPrice\"></span> </div><div class=\"list-items-find-wrap\"><div class=\"list-items-find\"><i class=\"items-find-icon\"></i><span>找相似</span></div></div></a>";
            this.recommendList.appendChild(li);
        }
    },
    adddata: function () {
        let img = this.recommendList.querySelectorAll("img"),
            title = this.recommendList.querySelectorAll(".list-items-title p"),
            price = this.recommendList.querySelectorAll(".recomendPrice");
        for (let i = 0, il = this.data["content"].length; i < il; i++) {
            img[i].src = this.data["content"][i]["img"];
            title[i].innerHTML = this.data["content"][i]["title"];
            price[i].innerHTML = this.data["content"][i]["price"];
        }
    },
    main: function () {
        this.addhtml();
        this.adddata();
    }
}