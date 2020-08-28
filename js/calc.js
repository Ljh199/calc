var beijiashu = '';
var jiashu = '';
var fuhao = '';
var s = ''; //保存结果值

//点击数字时的处理函数
function chickNum(num) {
	if (fuhao == "") {
		beijiashu = beijiashu + num;
	} else {
		jiashu = jiashu + num;
	}
	document.getElementById('showScreen').value = beijiashu + fuhao + jiashu;
}

//点击符号  + - * /
function clickFuhao(f) {
	if (fuhao == "" && (beijiashu != "" || s != "")) {
		fuhao = f;
		if (s != "" && beijiashu == "") {
			beijiashu = s;
			s = ""; //重置s存的结果
		}
		document.getElementById('showScreen').value = beijiashu + fuhao;
	}
}

//点击等号 =
function clickDeng() {
	if (beijiashu != '' && jiashu != '') {
		var x = parseFloat(beijiashu);
		var y = parseFloat(jiashu);
		if (fuhao == "+") {
			s = x + y + "";
		} else if (fuhao == "-") {
			s = x - y + "";
		} else if (fuhao == "*") {
			s = x * y + "";
		} else {
			s = x / y + "";
		}
		document.getElementById('showScreen').value = s;
		//清理
		beijiashu = "";//数值型转字符串类型
		jiashu = '';
		fuhao = '';
	} else {
		alert('请输入需要做运算的两个数字')
	}
}

//点击小数点  单独处理
function clickDian() {
	if (fuhao == "") {
		if (beijiashu.length > 0 && beijiashu.indexOf(".") == -1) {
			beijiashu = beijiashu + ".";
		}
	} else {
		if (jiashu.length > 0 && jiashu.indexOf(".") == -1) {
			jiashu = jiashu + ".";
		}
	}
	document.getElementById("showScreen").value = beijiashu + fuhao + jiashu;
	console.log("beijiashu=" + beijiashu);
	console.log("jiashu=" + jiashu);
}

//点击AC 清空数据
function clickAC() {
	beijiashu = "";
	jiashu = "";
	fuhao = "";
	s = '';
	document.getElementById("showScreen").value = beijiashu + fuhao + jiashu;
}

function showScreen() {
	document.getElementById("showScreen").value = beijiashu + fuhao + jiashu;
}

//点击退格
function clickBack() {
	if (jiashu.length > 0) {
		//退加数
		jiashu = jiashu.substring(0, jiashu.length - 1)
	} else if (fuhao.length > 0) {
		//退符号
		fuhao = fuhao.substring(0, fuhao.length - 1)
	} else if (beijiashu.length > 0) {
		//退被加数
		beijiashu = beijiashu.substring(0, beijiashu.length - 1)
	}
	//在屏幕中显示
	showScreen()
}