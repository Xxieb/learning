$.getJSON("jdApp/app.json", function (data) {
	let addContainer = new AddContainer(data);
	addContainer.main();
})
function AddContainer(data) {
	this.data = data;
}
AddContainer.prototype = {
	constructor: AddContainer,
	addCouponCenter: function () {
		let item = document.querySelectorAll(".jd-container .box-bd .item"),
			container_1 = document.querySelector(".jd-container .box-bd");
		for (let i = 0, il = item.length; i < il; i++) {
			let a = document.createElement("a");
			a.innerHTML = "<div class=\"coupon-img\"><img src=\"\" alt=\"\"></div><div class=\"coupon-info\">" +
				"<div class=\"info-price\"><span>¥</span><span class=\"number\"></span></div><div class=\"full-reduction\"></div>" +
				"<div class=\"info-last\"></div></div><div class=\"coupin-more\">更多好券</div><i class=\"arrow-arrow\"></i>";

			item[i].appendChild(a);
		}
		let img = container_1.querySelectorAll('img'),
			reduction = container_1.querySelectorAll('.full-reduction'),
			info = container_1.querySelectorAll('.info-last'),
			price = container_1.querySelectorAll('.number');
		for (let i = 0, il = item.length; i < il; i++) {
			img[i].src = this.data['couponCenter'][i]['src'];
			price[i].innerHTML = this.data['couponCenter'][i]['price'];
			reduction[i].innerHTML = this.data['couponCenter'][i]['reduction'];
			info[i].innerHTML = this.data['couponCenter'][i]['info'];
		}
	},
	addNiceShop:function(){
		let niceShop = document.querySelector(".nice-shop .box-bd"),
			img = niceShop.querySelectorAll("img"),
			title = niceShop.querySelectorAll(".item-title"),
			number = niceShop.querySelectorAll("p"),
			tags = niceShop.querySelectorAll(".item-tags");
		for(let i=0,il=this.data["niceShop"].length;i<il;i++){
			img[i].src = this.data["niceShop"][i]["img"];
			title[i].innerHTML = this.data["niceShop"][i]["title"];
			number[i].innerHTML = this.data["niceShop"][i]["number"];
			let span = tags[i].querySelectorAll("span");
			for(let j=0,jl=span.length;j<jl;j++){
				span[j].innerHTML = this.data["niceShop"][i]["tags"][j];
			}
		}
	},
	addFindCom:function(){
		let img = document.querySelectorAll(".find-com img"),
			title = document.querySelector(".find-com .find-name"),
			author = document.querySelector(".find-com .author-name");
		for(let i=0,il=img.length;i<il;i++){
			img[i].src = this.data["findCom"]["img"][i];
		}
		title.innerHTML = this.data["findCom"]["title"];
		author.innerHTML = this.data["findCom"]["author"];
	},
	addNewProducts:function(){
		let img = document.querySelectorAll(".new-products img"),
			title = document.querySelector(".products-title"),
			info = document.querySelector(".products-info-end");
		for(let i=0,il=img.length;i<il;i++){
			img[i].src = this.data["newProducts"]["img"][i];
			title.innerHTML = this.data["newProducts"]["title"];
			info.innerHTML = this.data["newProducts"]["info"];
		}
	},
	main:function(){
		this.addCouponCenter();
		this.addNiceShop();
		this.addFindCom();
		this.addNewProducts();
	}
}