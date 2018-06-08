var object = {
    tab_t_data: ["one", "two", "three"],
    tab_d_data: ["我是own!", "我是two", "我是three"],
    id:"tab"
};
var obj_02 = {
    tab_t_data: ["one", "two", "three"],
    tab_d_data: ["我是own!", "我是two", "我是three"],
    id:"tab01"
}
function tabFun(obj) {
    // 动态的创建Dom结构，可以自由的设置到底有多少个tab
    var tab = document.getElementById(obj.id);
    this.tab_btn = document.createElement("ul");
    this.tab_body = document.createElement("ul");
    this.tab_btn.className = "tab_t";
    this.tab_body.className = "tab_b";
    for (var i = 0; i < obj.tab_t_data.length; i++) {
        this.tab_li = document.createElement("li");
        this.tab_btn.appendChild(this.tab_li);
        this.em_txt = document.createTextNode(obj.tab_t_data[i]);
        this.tab_li.appendChild(this.em_txt);
    }
    for (var j = 0; j < obj.tab_d_data.length; j++) {
        this.tab_body_li = document.createElement("li");
        this.tab_body.appendChild(this.tab_body_li);
        this.em_txt_b = document.createTextNode(obj.tab_d_data[j]);
        this.tab_body_li.appendChild(this.em_txt_b);
    }
    tab.appendChild(this.tab_btn);
    tab.appendChild(this.tab_body);
    // 开始写点击事件
    this.tab_li = this.tab_btn.getElementsByTagName("li");
    this.tab_body_li = this.tab_body.getElementsByTagName("li");
    for (var c = 0; c < this.tab_li.length; c++) {
        this.tab_li[c].index = c;
        var that = this;
        this.tab_li[c].onclick = function () {
            for (var e = 0; e < that.tab_body_li.length; e++) {
                that.tab_body_li[e].style.display = 'none';
            }
            that.tab_body_li[this.index].style.display = 'block';
            for (var x = 0; x < that.tab_li.length; x++) {
                that.tab_li[x].style.cssText = 'background-color:black; color:#fff';
            }
            that.tab_li[this.index].style.background = 'indianred';
        }
    }
}
var obj = new tabFun(object);
var obj = new tabFun(obj_02);