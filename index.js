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

for (var i = 0; i < carProducts.length; i++) {
  var name = carProducts[i].name;
  var price = carProducts[i].price;
  var count = carProducts[i].count;
  var totalPrice = price * count;

  var goodsDescription = "<td>"+(i+1)+"</td> <td>"+name+"</td> <td>"+price+"</td> <td>"+count+"</td> <td>"+totalPrice+"</td>";
  var tr = document.createElement("tr");
  tr.innerHTML = goodsDescription;
  
  var tr2 = document.getElementsByClassName("footer")[0];
  var tbody = document.getElementsByTagName("tbody")[0];
  tbody.insertBefore(tr,tr2);
}













