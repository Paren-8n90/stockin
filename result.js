const money = localStorage.getItem("money");
const result_text = document.getElementById("result");

result_text.innerText = parseInt(money).toLocaleString()+"원";