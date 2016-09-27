var button = document.getElementsByClassName("button");
button[0].onclick = function(){
	var cellStat = new Array();
	for(var i = 0; i < 8; i++){
		cellStat[i] = document.getElementsByClassName("cellRow")[i].getElementsByClassName("cell");
		for(var j = 0; j < 8; j++){
			if(parseInt(Math.random()*2) === 0){
				cellStat[i][j].style.backgroundColor = "black";
 			}
			else cellStat[i][j].style.backgroundColor = "white";
		}
	}
}//随机初始化各细胞状态，白为生，黑为死
button[1].onclick = function(){
	var cell = new Array();
	var cellStat = new Array();
	var i = 0;
	var j = 0;
	for(i = 0; i < 8; i++){
		cell[i] = document.getElementsByClassName("cellRow")[i].getElementsByClassName("cell");
		cellStat[i] = new Array();
		for(j = 0; j < 8; j++){
			if(cell[i][j].style.backgroundColor === "black"){
				cellStat[i][j] = 0;
 			}
			else cellStat[i][j] = 1;
		}
	}//获取当前状态
	cellStat = life_game(8, 8, cellStat);//一次细胞换代
	for(i = 0; i < 8; i++){
		for(j = 0; j < 8; j++){
			if(cellStat[i][j] === 0){
				cell[i][j].style.backgroundColor = "black";
 			}
			else cell[i][j].style.backgroundColor = "white";
		}
	}//将新的细胞状态转化为网格中的颜色表示			
}