(function wheelChange() {
	let scrollPage = true,
		liList = document.querySelectorAll(".pageScroll"),
		hdiv = document.querySelector(".index-header"),
		liContainer = document.querySelector('.li-container'),
		wheelNum = document.querySelectorAll('.wheel-container'),
		fwContainer = document.querySelector(".fullpage-wrapper-container"),
		carousel = document.querySelector(".swiper-content"),
		spList = document.querySelector('.swiper-pagination-clickable'),
		appendElement = document.querySelector(".index-swiper"),
		whindex = 0,
		index = 0,
		changeHeight = window.innerHeight,
		changeWidth = window.innerWidth;
	fwContainer.style.height = window.innerHeight + "px";
	function changeColor() {
		if (whindex > 0) {
			hdiv.style.backgroundColor = "rgb(2, 91, 235)";
			hdiv.style.padding = "15px 2%";
		} else {
			hdiv.style.backgroundColor = "transparent";
			hdiv.style.padding = "22px 2%";
		};
	};
	function hidicon(whindex) {
		if (whindex > 0) {
			spList.style.display = "none";
		} else {
			spList.style.display = "block";
		};
	};
	function activeChange(index) {
		for (i = 0, il = liList.length; i < il; i++) {
			liList[i].classList.remove("active");
		};
		liList[index].classList.add("active")
	};
	document.onmousewheel = function (e) {
		e = e || window.event;
		fwContainer.classList.add("change-transition");
		if (e.wheelDelta < 0 && scrollPage) {
			whindex++;
			if (whindex > (wheelNum.length - 1)) {
				whindex = (wheelNum.length - 1);
			};
			num = -whindex * changeHeight;
			fwContainer.style.transform = `translate3d(0px,${num}px,0px)`;
			scrollPage = false;
			var timeOutID = setTimeout(function () {
				scrollPage = true;
			}, 500)
			changeColor();
			hidicon(whindex);
		};
		if (e.wheelDelta > 0 && scrollPage) {
			whindex--;
			if (whindex < 0) {
				whindex = 0;
			};
			num = -whindex * changeHeight;
			fwContainer.style.transform = `translate3d(0px,${num}px,0px)`;
			scrollPage = false;
			var timeOutID = setTimeout(function () {
				scrollPage = true;
			}, 500)
			changeColor();
			hidicon(whindex);
		};
		activeChange(whindex);
	};
	liContainer.onclick = function (event) {
		const liIndex = event.target.attributes.data.nodeValue;
		if (liIndex) {
			activeChange(liIndex);
			clnum = -liIndex * changeHeight;
			fwContainer.classList.add("change-transition");
			fwContainer.style.transform = `translate3d(0px,${clnum}px,0px)`;
			whindex = liIndex;
			changeColor();
			hidicon(whindex);
		};
	};
	window.onresize = function () {
		changeWidth = window.innerWidth;
		changeHeight = window.innerHeight;
		fwContainer.classList.remove("change-transition");
		fwContainer.style.transform = `translate3d(0px,${-changeHeight * whindex}px,0px)`;
		fwContainer.style.height = window.innerHeight + "px";
		carousel.classList.remove("change-transition")
		carousel.style.transform = `translate3d(${-index * changeWidth}px,0px,0px)`;
	};
	function Carousel(createNum, appendElement) {
		this.num = 0;
		this.index = 0;
		this.appendElement = appendElement;
		this.createNum = createNum;
	};
	Carousel.prototype = {
		constructor: Carousel,
		createContainer: function (createNum, appendElement) {
			let divContainer = document.createElement("div"),
				iconDiv = document.createElement("div");
			divContainer.classList.add("swiper-content");
			iconDiv.classList.add("swiper-pagination-clickable");
			for (let i = 0, il = createNum.length + 1; i < il; i++) {
				let div = document.createElement("div"),
					img = document.createElement("img");
				if (i === createNum.length) {
					img.setAttribute("src", createNum[0])
				} else {
					img.setAttribute("src", createNum[i])
				}
				div.appendChild(img);
				divContainer.appendChild(div);
			};
			for (let i = 0, il = createNum.length; i < il; i++) {
				let span = document.createElement("span");
				span.setAttribute("data", i);
				span.classList.add("swiper-pagination-bullet");
				if (i === 0) {
					span.classList.add("swiper-pagination-bullet-active");
				}
				iconDiv.appendChild(span);
			}
			appendElement.appendChild(divContainer);
			appendElement.appendChild(iconDiv);
		},
		getElement: function () {
			this.carousel = document.querySelector(".swiper-content");
			carousel = this.carousel;
			this.carouselImg = this.carousel.querySelectorAll("img");
			this.carouselButton = document.querySelector(".swiper-pagination-clickable");
			spList = this.carouselButton;
			this.spanList = this.carouselButton.querySelectorAll("span");
		},
		toPercent: function (point) {
			var percent = Number(point * 100).toFixed(2);
			percent += "%";
			return percent;
		},
		initialize: function () {
			this.carousel.style.width = this.toPercent(this.carouselImg.length);
			this.carousel.classList.remove("change-transition");
			this.carousel.style.transform = `translate3d(${index * changeWidth}px,0px,0px)`;
		},
		carouselChange: function () {
			this.carousel.classList.add("change-transition");
			num = -index * changeWidth;
			this.carousel.style.transform = `translate3d(${num}px,0px,0px)`;
		},
		iconChange: function (index) {
			for (i = 0, il = this.spanList.length; i < il; i++) {
				this.spanList[i].classList.remove("swiper-pagination-bullet-active");
			};
			if (index > 0 && index < (this.carouselImg.length - 1)) {
				this.spanList[index].classList.add("swiper-pagination-bullet-active");
			} else {
				this.spanList[0].classList.add("swiper-pagination-bullet-active");
			};
		},
		toPercent: function (point) {
			var percent = Number(point * 100).toFixed(2);
			percent += "%";
			return percent;
		},
		run: function () {
			this.createContainer(this.createNum, this.appendElement);
			this.getElement();
			this.initialize();
			that = this;
			let carouselID = setInterval(function () {
				index += 1;
				that.carouselChange();
				that.iconChange(index);
				if (index === (that.carouselImg.length - 1)) {
					setTimeout(function () {
						index = 0;
						num = -index * changeWidth;
						that.carousel.classList.remove("change-transition")
						that.carousel.style.transform = `translate3d(${num}px,0px,0px)`;
					}, 300);
				};
			}, 3000);
			this.carouselButton.onclick = function (e) {
				e = e || window.event;
				const spanIndex = event.target.attributes.data.nodeValue;
				if (spanIndex) {
					index = spanIndex;
					that.carouselChange();
					that.iconChange(index);
					clearInterval(carouselID);
				};
			};
		},
	};
	let carousel1 = new Carousel(["static/1.jpg","static/2.jpg","static/3.jpg","static/4.jpg","static/5.jpg"], appendElement);
	carousel1.run();
})()