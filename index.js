// 商品列表 JSON 数据
var carProducts = [
  {
    "id": 1,
    "name": "英雄牌 钢笔",
    "count": 1,
    "price": 69,
    "checked": false
  },
  {
    "id": 2,
    "name": "晨光牌 铅字笔",
    "count": 2,
    "price": 5.5,
    "checked": true
  },

  {
    "id": 3,
    "name": "晨光牌 铅笔",
    "count": 1,
    "price": 2,
    "checked": false
  },

  {
    "id": 4,
    "name": "狗熊牌 橡皮擦",
    "count": 1,
    "price": 1,
    "checked": false
  },

  {
    "id": 5,
    "name": "瑞士牌 双肩书包",
    "count": 1,
    "price": 199,
    "checked": true
  },

  {
    "id": 6,
    "name": "晨光牌 作业本",
    "count": 5,
    "price": 2.5,
    "checked": false
  }
]

var count;
//将所有商品数据加入到购物车中
for (var i = 0; i < carProducts.length; i++) {
  if(carProducts[i].count != 0) {
    var name = carProducts[i].name;
    var price = carProducts[i].price;
    count = carProducts[i].count;
    var totalPrice = price * count;
    
    var goodsDescription = "<td>"+(i+1)+"</td> <td>"+name+"</td> <td>"+price+"</td> <td><a href='#' class='num-change reduce'>-</a><span>"+count+"</span><a href='#' class='num-change increase'>+</a></td> <td>"+totalPrice+"</td>";
    var tr = document.createElement("tr");
    tr.innerHTML = goodsDescription;
  
    var tr2 = document.getElementsByClassName("footer")[0];
    var tbody = document.getElementsByTagName("tbody")[0];
    tbody.insertBefore(tr,tr2); 
  }
}
//找到加和减的DOM节点
var increase = document.querySelectorAll(".increase");
var reduce = document.querySelectorAll(".reduce");

//数量添加事件
for(var i = 0; i < increase.length; i++) {
  increase[i].onclick = function() {
    var amount = this.parentNode;
    var span = amount.getElementsByTagName("span")[0];
    ++span.innerText;
    //计算这一行的小计
    var tr = amount.parentNode;
    var price = tr.getElementsByTagName("td")[2].innerText;
    var count = span.innerText;
    var totalPrice = count * price;
    tr.getElementsByTagName("td")[4].innerText = totalPrice;
  }
}

//数量减少事件
for(var i = 0; i < reduce.length; i++) {
  reduce[i].onclick = function() {
    //数量变化
    var amount = this.parentNode;
    var span = amount.getElementsByTagName("span")[0];
    --span.innerText;
    //计算这一行的小计
    var tr = amount.parentNode;
    var price = tr.getElementsByTagName("td")[2].innerText;
    var count = span.innerText;
    var totalPrice = count * price;
    tr.getElementsByTagName("td")[4].innerText = totalPrice;
  }
}












