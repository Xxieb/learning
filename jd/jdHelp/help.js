function AddHelp(data){
	this.data = data
}
AddHelp.prototype = {
	constructor:AddHelp,
	addHelpNav:function(){
		let helpList = document.querySelector(".help-wrap"),
			helpCover = document.querySelector(".help-cover"),
			data = this.data["helpNav"];
		for(let i=0,il=data.length;i<il;i++){
			let div = document.createElement("div"),
				h5 = document.createElement("h5"),
				ul = document.createElement("ul");
			div.classList.add("help-nav");
			h5.classList.add("help-nav-tit");
			h5.innerHTML = data[i]["title"];
			for(let j=0,jl=data[i]["info"].length;j<jl;j++){
				let li = document.createElement("li"),
					a = document.createElement("a");
				a.innerHTML = data[i]["info"][j];
				li.appendChild(a);
				ul.appendChild(li);
			}
			div.appendChild(h5);
			div.appendChild(ul);
			helpList.insertBefore(div,helpCover);
		};
	},
	addHelpCover:function(){
		let data = this.data["helpCover"]
			helpCover = document.querySelector(".help-cover"),
			title = helpCover.querySelector(".help-nav-tit"),
			info = helpCover.querySelector(".help-cover-info"),
			detail = helpCover.querySelector(".help-cover-more a"),
			eli = detail.querySelector("i"),
			text = document.createTextNode(data["detail"]);
		title.innerHTML = data["title"];
		info.innerHTML = data["info"];
		detail.insertBefore(text,eli);
	},
	addCopyRight: function() {
		let data = this.data["copyRight"],
			linkList = document.querySelector(".mod-copyright-link");
		for (let i = 0, il = data.length; i < il; i++) {
			let a = document.createElement("a"),
				span = document.createElement("span");
			a.innerHTML = data[i];
			span.innerHTML = "|";
			if(i<data.length-1){
				linkList.appendChild(a);
				linkList.appendChild(span);
			}else{
				linkList.appendChild(a)
			}
		}
	}
}