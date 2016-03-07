var QUnit = require("steal-qunit");
var DetailViewModel = require("./detail");
require("bitballs/models/fixtures/players");

QUnit.module("bitballs/components/player/detail/", function(hooks){
	hooks.beforeEach = function(){
		localStorage.clear();
	}

	QUnit.test("basics of playerPromise and player properties", function(){
		var detailVM = new DetailViewModel({playerId: 1});
		
		stop();
		stop();
		
		detailVM.bind("player", function(ev, player){
			
			deepEqual(player.attr("name"),"Test Player", "got player name");
			start();
			
		});
		
		detailVM.attr("playerPromise").then(function(player){
			deepEqual(player.attr("name"),"Test Player", "got player promise name");
			start();
		});
		
		
	});

});
