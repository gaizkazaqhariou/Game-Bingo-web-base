var usedNums = new Array(25);

function newCard() {
	for(var i=0; i < 25; i++) {
		setSquare(i);
	}
}

function setSquare(thisSquare) {
	var currSquare = "p"+thisSquare;
	var newNum;
	
	var colPlace =new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1); // :v 
	
	do 
    {
		newNum =(colPlace[thisSquare] * 1) + getNewNum();
	}
	while (usedNums[newNum]);
	
	usedNums[newNum] = true;
	document.getElementById(currSquare).innerHTML = newNum;
}

function getNewNum() {
	return Math.floor(Math.random() * 25);
	
}

function changeMe(selector){
	var m_id = $(selector).attr("id");
	if($(selector).attr("amOn") == "false"){
		$("#"+m_id).attr("amOn","true");
		//css
		$("#"+m_id).css("background-color","red");
	}else{
		$("#"+m_id).attr("amOn","false");
		//css
		$("#"+m_id).css("background-color","white");
	}
}

function anotherCard() {
	location.reload();
}

function notification(){
    var a = document.getElementsByClassName("kotak").rows.length;
    var b = document.getElementsByClassName("kotak").columns.length;
    if (a[0] == a[1]) {
        alert("Bingo");
    }
}

function bingo(){
 var totalBaris = 0
        if($('#p0').attr("amOn") == "true" &&
        $('#p1').attr("amOn") == "true" &&
        $('#p2').attr("amOn") == "true" &&
        $('#p3').attr("amOn") == "true" &&
        $('#p4').attr("amOn") == "true"){
            totalBaris+=1
        } 

        if($('#p5').attr("amOn") == "true" &&
        $('#p6').attr("amOn") == "true" &&
        $('#p7').attr("amOn") == "true" &&
        $('#p8').attr("amOn") == "true" &&
        $('#p9').attr("amOn") == "true"){
            totalBaris+=1
        } 

        if($('#p10').attr("amOn") == "true" &&
        $('#p11').attr("amOn") == "true" &&
        $('#p12').attr("amOn") == "true" &&
        $('#p13').attr("amOn") == "true" &&
        $('#p14').attr("amOn") == "true"){
            totalBaris+=1
        } 

        if($('#p15').attr("amOn") == "true" &&
        $('#p16').attr("amOn") == "true" &&
        $('#p17').attr("amOn") == "true" &&
        $('#p18').attr("amOn") == "true" &&
        $('#p19').attr("amOn") == "true"){
            totalBaris+=1
        } 

        if($('#p20').attr("amOn") == "true" &&
        $('#p21').attr("amOn") == "true" &&
        $('#p22').attr("amOn") == "true" &&
        $('#p23').attr("amOn") == "true" &&
        $('#p24').attr("amOn") == "true"){
            totalBaris+=1
        }
        
        if($('#p0').attr("amOn") == "true" &&
        $('#p5').attr("amOn") == "true" &&
        $('#p10').attr("amOn") == "true" &&
        $('#p15').attr("amOn") == "true" &&
        $('#p20').attr("amOn") == "true"){
            totalBaris+=1
        } 

        if($('#p1').attr("amOn") == "true" &&
        $('#p6').attr("amOn") == "true" &&
        $('#p11').attr("amOn") == "true" &&
        $('#p16').attr("amOn") == "true" &&
        $('#p21').attr("amOn") == "true"){
            totalBaris+=1
        } 

        if($('#p2').attr("amOn") == "true" &&
        $('#p7').attr("amOn") == "true" &&
        $('#p12').attr("amOn") == "true" &&
        $('#p17').attr("amOn") == "true" &&
        $('#p22').attr("amOn") == "true"){
            totalBaris+=1
        } 

        if($('#p3').attr("amOn") == "true" &&
        $('#p8').attr("amOn") == "true" &&
        $('#p13').attr("amOn") == "true" &&
        $('#p18').attr("amOn") == "true" &&
        $('#p23').attr("amOn") == "true"){
            totalBaris+=1
        } 

        if($('#p4').attr("amOn") == "true" &&
        $('#p9').attr("amOn") == "true" &&
        $('#p14').attr("amOn") == "true" &&
        $('#p19').attr("amOn") == "true" &&
        $('#p24').attr("amOn") == "true"){
            totalBaris+=1
        }
           
        if($('#p0').attr("amOn") == "true" &&
        $('#p6').attr("amOn") == "true" &&
        $('#p12').attr("amOn") == "true" &&
        $('#p18').attr("amOn") == "true" &&
        $('#p24').attr("amOn") == "true"){
            totalBaris+=1
        } 

        if($('#p4').attr("amOn") == "true" &&
        $('#p8').attr("amOn") == "true" &&
        $('#p12').attr("amOn") == "true" &&
        $('#p16').attr("amOn") == "true" &&
        $('#p20').attr("amOn") == "true"){
            totalBaris+=1
        }
      scoreMe(totalBaris)
}           

function scoreMe(bar){
    if(bar > 0){
        alert("BINGO "+bar+ " Row")
            if (bar == 5){
            alert("You winner")
            }
    } else {
        alert("Noob")
    }
}
/*
function win(bar){
    if (bar = 5)
        alert("You winner")
    
}
*/


//he pak, js ga nggawe ; iso yo kwno keno

//function bingo(){
//	for(i=1;i<=5;i++){
//		for(j=1;j<=5;j++){
//			
//		}
//	}
//}



// referensi code :V ---------------------------------------------------------------------------------------------------------------

/*

function bingo1(){
    if(
        ($('#p0').attr("amOn") == "true" &&
        $('#p1').attr("amOn") == "true" &&
        $('#p2').attr("amOn") == "true" &&
        $('#p3').attr("amOn") == "true" &&
        $('#p4').attr("amOn") == "true") || 

        ($('#p5').attr("amOn") == "true" &&
        $('#p6').attr("amOn") == "true" &&
        $('#p7').attr("amOn") == "true" &&
        $('#p8').attr("amOn") == "true" &&
        $('#p9').attr("amOn") == "true") || 

        ($('#p10').attr("amOn") == "true" &&
        $('#p11').attr("amOn") == "true" &&
        $('#p12').attr("amOn") == "true" &&
        $('#p13').attr("amOn") == "true" &&
        $('#p14').attr("amOn") == "true") || 

        ($('#p15').attr("amOn") == "true" &&
        $('#p16').attr("amOn") == "true" &&
        $('#p17').attr("amOn") == "true" &&
        $('#p18').attr("amOn") == "true" &&
        $('#p19').attr("amOn") == "true") || 

        ($('#p20').attr("amOn") == "true" &&
        $('#p21').attr("amOn") == "true" &&
        $('#p22').attr("amOn") == "true" &&
        $('#p23').attr("amOn") == "true" &&
        $('#p24').attr("amOn") == "true")
            ){
            win()
    }
        else if (
        ($('#p0').attr("amOn") == "true" &&
        $('#p5').attr("amOn") == "true" &&
        $('#p10').attr("amOn") == "true" &&
        $('#p15').attr("amOn") == "true" &&
        $('#p20').attr("amOn") == "true") || 

        ($('#p1').attr("amOn") == "true" &&
        $('#p6').attr("amOn") == "true" &&
        $('#p11').attr("amOn") == "true" &&
        $('#p16').attr("amOn") == "true" &&
        $('#p21').attr("amOn") == "true") || 

        ($('#p2').attr("amOn") == "true" &&
        $('#p7').attr("amOn") == "true" &&
        $('#p12').attr("amOn") == "true" &&
        $('#p17').attr("amOn") == "true" &&
        $('#p22').attr("amOn") == "true") || 

        ($('#p3').attr("amOn") == "true" &&
        $('#p8').attr("amOn") == "true" &&
        $('#p13').attr("amOn") == "true" &&
        $('#p18').attr("amOn") == "true" &&
        $('#p23').attr("amOn") == "true") || 

        ($('#p4').attr("amOn") == "true" &&
        $('#p9').attr("amOn") == "true" &&
        $('#p14').attr("amOn") == "true" &&
        $('#p19').attr("amOn") == "true" &&
        $('#p24').attr("amOn") == "true")
            ){
            win()
        }else if(
        ($('#p0').attr("amOn") == "true" &&
        $('#p6').attr("amOn") == "true" &&
        $('#p12').attr("amOn") == "true" &&
        $('#p18').attr("amOn") == "true" &&
        $('#p24').attr("amOn") == "true") || 

        ($('#p4').attr("amOn") == "true" &&
        $('#p8').attr("amOn") == "true" &&
        $('#p12').attr("amOn") == "true" &&
        $('#p16').attr("amOn") == "true" &&
        $('#p20').attr("amOn") == "true")
                    
            ){
            win()
        } else{
        alert("false")
    }
}


function lineBingo() {
    goal = "line";
    document.getElementById("bLine").style.backgroundColor = "#4286f4";
    document.getElementById("bLine").disabled = true;
    document.getElementById("bFull").disabled = true;
    document.getElementById("bFull").style.backgroundColor = "#grey";

}

function fullBingo() {
    goal = "full";
    document.getElementById("bFull").style.backgroundColor = "#4286f4";
    document.getElementById("bFull").disabled = true;
    document.getElementById("bLine").disabled = true;
    document.getElementById("bLine").style.backgroundColor = "#grey";
}

function checkForBingo() {
    if (goal == "line") {
        checkVerticalBingo();
        checkHorizontalBingo();
        checkDiagonalBingo();
        checkCornersBingo();
    }
    else {
        checkFullBingo();
    }
}

function checkVerticalBingo() {
    for (var i = 0; i < 5; i++) {
        var sq1 = document.getElementById('square' + i);
        var sq2 = document.getElementById('square' + (i + 5));
        var sq3 = document.getElementById('square' + (i + 10));
        var sq4 = document.getElementById('square' + (i + 15));
        var sq5 = document.getElementById('square' + (i + 20));

        checkLines(sq1, sq2, sq3, sq4, sq5);
    }
}

function checkHorizontalBingo() {
    j = 0;
    for (var i = 0; i < 5; i++) {
        switch(i) {
            case 0: 
                var sq1 = document.getElementById('square' + i);
                var sq2 = document.getElementById('square' + (i + 1));
                var sq3 = document.getElementById('square' + (i + 2));
                var sq4 = document.getElementById('square' + (i + 3));
                var sq5 = document.getElementById('square' + (i + 4));
                break;
            case 1: 
                var sq1 = document.getElementById('square' + (i + 4));
                var sq2 = document.getElementById('square' + (i + 5));
                var sq3 = document.getElementById('square' + (i + 6));
                var sq4 = document.getElementById('square' + (i + 7));
                var sq5 = document.getElementById('square' + (i + 8));
                break;
            case 2: 
                var sq2 = document.getElementById('square' + (i + 9));
                var sq3 = document.getElementById('square' + (i + 10));
                var sq1 = document.getElementById('square' + (i + 8));
                var sq4 = document.getElementById('square' + (i + 11));
                var sq5 = document.getElementById('square' + (i + 12));
                break;
            case 3: 
                var sq1 = document.getElementById('square' + (i + 12));
                var sq2 = document.getElementById('square' + (i + 13));
                var sq3 = document.getElementById('square' + (i + 14));
                var sq4 = document.getElementById('square' + (i + 15));
                var sq5 = document.getElementById('square' + (i + 16));
                break;
            case 4: 
                var sq1 = document.getElementById('square' + (i + 16));
                var sq2 = document.getElementById('square' + (i + 17));
                var sq3 = document.getElementById('square' + (i + 18));
                var sq4 = document.getElementById('square' + (i + 19));
                var sq5 = document.getElementById('square' + (i + 20));
                break;
        }
        checkLines(sq1, sq2, sq3, sq4, sq5);
    }
}

function checkDiagonalBingo() {
    for (var i = 0; i < 2; i++) {
        switch(i) {
            case 0:
                var sq1 = document.getElementById('square' + 0);
                var sq2 = document.getElementById('square' + 6);
                var sq3 = document.getElementById('square' + 12);
                var sq4 = document.getElementById('square' + 18);
                var sq5 = document.getElementById('square' + 24);
                break;
            case 1:
                var sq1 = document.getElementById('square' + 4);
                var sq2 = document.getElementById('square' + 8);
                var sq3 = document.getElementById('square' + 12);
                var sq4 = document.getElementById('square' + 16);
                var sq5 = document.getElementById('square' + 20);
                break;
        }
        checkLines(sq1, sq2, sq3, sq4, sq5);
    }
}

function checkCornersBingo() {
    var sq1 = document.getElementById('square' + 0);
    var sq2 = document.getElementById('square' + 4);
    var sq3 = document.getElementById('square' + 20);
    var sq4 = document.getElementById('square' + 24);

    if (sq1.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq1.value)) &&
            sq2.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq2.value)) &&
            sq3.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq3.value)) &&
            sq4.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq4.value))) {
                youWinCorners(sq1, sq2, sq3, sq4);
                return;
    }
    else {
        document.getElementById("currentCall").innerHTML = "Not a valid bingo! Keep trying!";
        return;
    }
}

function checkFullBingo() {
    var j = 0;
    var flag = false;
    for (var i = 0; i < 5; i++) {
        var sq1 = document.getElementById('square' + j);
        j++;
        var sq2 = document.getElementById('square' + j);
        j++;
        var sq3 = document.getElementById('square' + j);
        j++;
        var sq4 = document.getElementById('square' + j);
        j++;
        var sq5 = document.getElementById('square' + j);
        j++;

        if (sq1.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq1.value)) &&
            sq2.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq2.value)) &&
            sq3.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq3.value)) &&
            sq4.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq4.value)) &&
            sq5.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq5.value))) {
                flag = true;
        }
        else if (sq1.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq1.value)) &&
            sq2.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq2.value)) &&
            sq3.value == "FREE" &&
            sq4.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq4.value)) &&
            sq5.style.backgroundColor == "lightblue" && calledNumbers.includes(parseInt(sq5.value))) {
                flag = true;
        }
        else {
            flag = false;
            break;
        }
    }
    if (flag == true) {
        youWinFullBingo();
    }
    else {
        document.getElementById("currentCall").innerHTML = "Not a valid bingo! Keep trying!";
        return;
    }
}*/