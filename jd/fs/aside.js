function AddFs(data) {
    this.json = data;
}
AddFs.prototype = {
    constructor: AddFs,
    createLi:function(){
        let ul = document.querySelector("aside ul");
        for(let i=0,il=this.json["dataList"].length;i<il;i++){
            let li = document.createElement("li");
            li.innerHTML = "<div class=\"menu menu_2\"><div class=\"submenu-left\"><div class=\"subtop\"></div><div class=\"subbottom\"></div></div>"+
            "<div class=\"submenu-right\"><div class=\"picture-top\"></div><div class=\"picture-bottom\"></div></div></div>";
            li.classList.add("aside-items");
            li.classList.add("aside-items_1");
            ul.appendChild(li);
        }
    },
    createLeft: function () {
        for (let i = 0, il = this.nameList.length; i < il; i++) {
            let a = document.createElement("a"),
                span = document.createElement("span");
            span.classList.add("oblique-line");
            a.innerHTML = this.nameList[i];
            span.innerHTML = "/";
            if (i < this.nameList.length - 1) {
                this.fsLi.insertBefore(a, this.menu);
                this.fsLi.insertBefore(span, this.menu);
            } else {
                this.fsLi.insertBefore(a, this.menu);
            };
        };
    },
    createRightTitle: function () {
        for (let i = 0, il = this.titleList.length; i < il; i++) {
            let a = document.createElement("a"),
                elment_i = document.createElement("i");
            elment_i.classList.add("arrow-right");
            a.innerHTML = this.titleList[i];
            a.appendChild(elment_i);
            this.subTop.appendChild(a);
        }
    },
    createRightContent: function () {
        for (let i = 0, il = this.contentList.length; i < il; i++) {
            let dl = document.createElement("dl"),
                dt_a = document.createElement("a"),
                dt = document.createElement("dt"),
                dd = document.createElement("dd"),
                elment_i = document.createElement("i");
            elment_i.classList.add("arrow-right_1");
            dt_a.innerHTML = this.contentList[i]["generalName"];
            dt_a.appendChild(elment_i);
            dt.appendChild(dt_a);
            dl.appendChild(dt);
            this.subbottom.appendChild(dl);
            for (let j = 0, jl = this.contentList[i]["goods"].length; j < jl; j++) {
                let dd_a = document.createElement("a");
                dd_a.innerHTML = this.contentList[i]["goods"][j];
                dd.appendChild(dd_a);
            };
            dl.appendChild(dd);
        };
    },
    createRightPicture: function () {
        for (let i = 0, il = this.pictureTList.length; i < il; i++) {
            let a = document.createElement("a"),
                img = document.createElement("img");
            img.src = this.pictureTList[i];
            a.appendChild(img);
            this.pictureTop.appendChild(a);
        };
        for (let i = 0, il = this.pictureBList.length; i < il; i++) {
            let a = document.createElement("a"),
                img = document.createElement("img");
            img.src = this.pictureBList[i];
            a.appendChild(img);
            this.pictureBottom.appendChild(a);
        };
    },
    main: function () {
        this.createLi();
        this.fsLiList = document.querySelectorAll(".aside-items");
        for (let j = 0, jl = this.fsLiList.length; j < jl; j++) {
            this.fsLi = this.fsLiList[j];
            this.data = this.json["dataList"][j];
            this.menu = this.fsLi.querySelector(".menu");
            this.subTop = this.fsLi.querySelector(".subtop");
            this.subbottom = this.fsLi.querySelector(".subbottom");
            this.pictureTop = this.fsLi.querySelector(".picture-top");
            this.pictureBottom = this.fsLi.querySelector(".picture-bottom");
            this.nameList = this.data["name"];
            this.titleList = this.data["title"];
            this.contentList = this.data['content'];
            this.pictureTList = this.data["pictureT"];
            this.pictureBList = this.data["pictureB"];
            this.createLeft();
            this.createRightTitle();
            this.createRightContent();
            this.createRightPicture();
        };
    }
};