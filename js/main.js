var n = 0;
var timeoutID;
var hashMap = new Array();

// Split the number by simple numbers
function parse_num (num) {
	console.log("------------------------------------------");
	console.log("Split number: " + num);
	var temp_arr = new Array();
	
	if (num < 10)
	{
		temp_arr[0] = num;
		return temp_arr;
	}

	var numStr = num.toString();
    temp_arr = numStr.split("");
    return temp_arr;
}

function calc_factorial (num) {
	if (num == 0)
		return 1;

	var multipl = 1;
	for (var i = 2; i <= num; i++) {
				
		multipl *= i;
	};

	return multipl;
}

// Calculate expression
function calc_expr (arrVal) {
	var summ = 0;
	for (var i = 0; i < arrVal.length; i++) {
		summ += calc_factorial(arrVal[i]);
		console.log("Array[" + i + "] = " + arrVal[i]);
	};

	return summ;
}

// Check if the number value equal to expression
function check_num (num) {
	if(num < 0)
		return false;

	var simple_nums = parse_num(num);
	var calc_res = calc_expr(simple_nums);

	if (num == calc_res)
		return true;

	return false;
}

// The timer tic
function tic () {
	//if (n == 200000)
	//	window.clearTimeout(timeoutID);

	$("#curr_number").text(n);

	if (check_num(n))
	{
		var num_id = "num_" + n;
		var num_block = '<div id="' + num_id + '">' + n + '</div>';
    	var new_num = $("#numbers").append(num_block);
    	var num_id1 = "#" + num_id;
    	var a = $(num_id1);
    	a.hide();
    	a.slideDown('slow');
    }

    n++;
};

jQuery(document).ready(function() {
    startTimer();
});

function stopTimer () {
	window.clearTimeout(timeoutID);
}

function startTimer () {
	timeoutID = setInterval(tic, 0);
}