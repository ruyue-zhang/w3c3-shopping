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

var tbody = document.getElementsByTagName("tbody")[0];
//将所有商品数据加入到购物车中
for (var i = 0; i < carProducts.length; i++) {
  if(carProducts[i].count != 0) {
    var name = carProducts[i].name;
    var price = carProducts[i].price;
    var checked = carProducts[i].checked ? 'checked' : '';
    count = carProducts[i].count;
    var totalPrice = price * count;
    
    var goodsDescription = "<td><input type='checkbox' class='checked' "+checked+"/></td> <td>"+name+"</td> <td>"+price+"</td> <td><a href='#' class='num-change reduce'>-</a><span class='lineCount'>"+count+"</span><a href='#' class='num-change increase'>+</a></td> <td class='linePrice'>"+totalPrice+"</td>";
    var tr = document.createElement("tr");
    tr.className = "row";
    tr.innerHTML = goodsDescription;
  
    var tr2 = document.getElementsByClassName("footer")[0];
    tbody.insertBefore(tr,tr2); 
  }
}
//找到加和减的DOM节点
var increase = document.querySelectorAll(".increase");
var reduce = document.querySelectorAll(".reduce");
//找到所有商品的行
var rows = tbody.querySelectorAll(".row");
//找到所有单选框
var checked = document.querySelectorAll(".checked");

//数量添加事件
for(var i = 0; i < increase.length; i++) {
  increase[i].onclick = function() {
    numberChange(this,"increase");
  }
}

//数量减少事件
for(var i = 0; i < reduce.length; i++) {
  reduce[i].onclick = function() {
    numberChange(this,"reduce");
  }
}

/**
 *
 * 数量改变事件
 * @param {*} dom 点击的对象
 * @param {*} act 增加或减少
 * @returns
 */
function numberChange(dom,act) {
  var amount = dom.parentNode;
  var span = amount.getElementsByTagName('span')[0];
  if(act == "increase") {
    ++span.innerText;
  }
  else if(act == "reduce") {
    --span.innerText;
    if(span.innerText == 0) {
      tbody.removeChild(amount.parentNode);
    }
  }
  else {
    return;
  }
  //计算这一行的小计
  var tr = amount.parentNode;
  var price = tr.getElementsByTagName("td")[2].innerText;
  var count = span.innerText;
  var totalPrice = count * price;
  tr.getElementsByTagName("td")[4].innerText = totalPrice;
  //选中此行
  var check = tr.querySelector(".checked");
  check.checked = true;

  getTotal();
}

//单选框点击事件
for(var i = 0; i < checked.length; i++) {
  checked[i].onclick = function() {
    getTotal();
  }
}


/**
 *
 * 计算总计数量和价格
 * @param {*} rows 哪一行/哪一个商品
 */
function getTotal() {
  var Count = 0;
  var Price = 0;
  for(var i = 0; i < rows.length; i++) {
    //找到被选中的行
    var check = rows[i].querySelector(".checked");
    if(check.checked == true) {
      var lineCount = rows[i].querySelector(".lineCount").innerText;
      var linePrice = rows[i].querySelector(".linePrice").innerText;
      lineCount = Number(lineCount);
      linePrice = Number(linePrice);
      Count += lineCount;
      Price += linePrice;
    }
  }
  var totalCount = tbody.querySelector(".totalCount");
  totalCount.innerText = Count;
  var totalPrice = tbody.querySelector(".totalPrice");
  totalPrice.innerText = Price.toFixed(2);
}














