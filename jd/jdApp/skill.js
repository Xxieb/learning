$.getJSON("jdApp/app.json", function (data) {
    let addseckill = new Addseckill(data);
    addseckill.main();
})
function Addseckill(data) {
    this.data = data;
}
Addseckill.prototype = {
    constructor: Addseckill,
    addL: function (data) {
        data = data["seckill"];
        let seckillList = document.querySelector(".seckill-list");
        for (let i = 0, il = data.length; i < il; i++) {
            let a = document.createElement("a");
            a.classList.add("seckill-list1");
            a.innerHTML = "<div class=\"list-picture\"><img src=\"\" alt=\"\"></div><h5 class=\"seckill-title_name\"></h5><div class=\"seckill-price\"><span class=\"miaosha-price\">" +
                "<b>¥</b><span class=\"seckillPrice\"></span></span><span class=\"original-price\"><b>¥</b><span class=\"originalPrice\"></span></span></div>"
            seckillList.appendChild(a);
        }
        for (let i = 0, il = data.length; i < il; i++) {
            let img = seckillList.querySelectorAll("img"),
                title = seckillList.querySelectorAll(".seckill-title_name"),
                seckillPrice = seckillList.querySelectorAll(".seckillPrice"),
                originalPrice = seckillList.querySelectorAll(".originalPrice");
            img[i].src = data[i]["src"];
            title[i].innerHTML = data[i]["title"];
            seckillPrice[i].innerHTML = data[i]["seckillPrice"];
            originalPrice[i].innerHTML = data[i]["originalPrice"];
        }
    },
    addR: function (data) {
        let dataL = data["seckillLast"][0],
            seckillLast = document.querySelector(".seckill-last"),
            img = seckillLast.querySelector("img"),
            p = seckillLast.querySelectorAll("p");
        img.src = dataL["src"];
        for (let i = 0, il = p.length; i < il; i++) {
            p[i].innerHTML = dataL["info"][i]
        }
    },
    main: function () {
        this.addL(this.data);
        this.addR(this.data);
    }
}