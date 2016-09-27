function life_game(row, col, cellStat){
     if(row <= 0 || col <= 0 || row > cellStat.length){
		return false;
	}//行数,列数不得为0
	var i = 0;
	var j = 0;	
	for(i = 0; i < row; i++){
		for(j = 0; j < col; j++){
			if(col > cellStat[i].length || (cellStat[i][j] != 0 && cellStat[i][j] != 1)){
				return false;				
			}
		}		
	}//每个细胞状态应用0,1表示生死
	
	var nextCellStat = new Array();	//一次细胞游戏后的各细胞状态
	var enviro = 0;
	for(i = 0; i < row; i++){
		nextCellStat[i] = new Array();
		for(j = 0; j < col; j++){
			enviro = cellStat[(i+1)%row][(j+1)%col] + cellStat[(i+1)%row][(j+col-1)%col]
				+ cellStat[(i+row-1)%row][(j+1)%col]+ cellStat[(i+row-1)%row][(j+col-1)%col]
				+ cellStat[(i+1)%row][(j)%col]+ cellStat[(i+row-1)%row][(j)%col]
				+ cellStat[(i)%row][(j+1)%col]+ cellStat[(i)%row][(j+col-1)%col];//计算周围活细胞数
			if(enviro === 3){
				nextCellStat[i][j] = 1;
			}
			else if(enviro === 2){
				nextCellStat[i][j] = cellStat[i][j];
			}	
			else nextCellStat[i][j] = 0;//细胞游戏规则
		}			
	}
	return nextCellStat;
}