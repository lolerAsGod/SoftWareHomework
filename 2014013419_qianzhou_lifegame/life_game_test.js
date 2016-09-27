describe('life_game', function(){
	it('should be a function', function(){
		assert.isFunction(life_game);		
	});	
	it('should have three arguments', function(){
		assert.equal(life_game.length, 3);		
	});	
	it('should return life state of all cells in life game', function(){
		var cellStat = [
			[1,0,0],
			[1,0,0],
			[0,1,1]
		];
		assert.sameDeepMembers(life_game(3, 3, cellStat), [[1,0,0],[1,0,0],[0,1,1]]);		
	});	
	it('should return false when input is error', function(){
		var cellStat = [
			[1,0,0],
			[1,0,0],
			[0,1,1]
		];
		assert.strictEqual(life_game(5, 3, cellStat), false);		
	});	
});