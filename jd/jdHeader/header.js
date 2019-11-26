function AddHeader(data){
    this.data = data
}
AddHeader.prototype = {
    constructor:AddHeader,
    addHotSearch:function(){
        let searchList = document.querySelector(".hot-search"),
            data = this.data["hotSearch"];
        for(let i=0,il=data.length;i<il;i++){
            let a = document.createElement("a");
            if(i===0){
                a.classList.add("red");
            };
            a.innerHTML = data[i];
            searchList.appendChild(a);
        }
    },
    addSeckill:function(){
        let seckillList = document.querySelector(".seckill"),
            data = this.data["seckill"];
        for(let i=0,il=data.length;i<il;i++){
            let a = document.createElement("a");
            if(i<=1){
                a.classList.add("red");
            };
            a.innerHTML = data[i];
            seckillList.appendChild(a);
        }
    },
    changePlaceHolder:function(){
        let placeholder = document.querySelector(".search input"),
            data = this.data["placeHolder"];
        placeholder.setAttribute("placeholder",data)
    }
}
