app.controller('MainController', ['$scope', '$mdMenu', function ($scope, $mdMenu) {
	//CONTAINERS
	$scope.creatures = [{
		name: 'Player #1',
		initiativeModifier: 0,
		rolledInitiative: 0,
		category: 'player',
	},
	{
		name: 'Monster #1',
		initiativeModifier: 0,
		rolledInitiative: 0,
		category: 'monster'
	}
	];

	$scope.numPlayers = 1;
	$scope.numNPCs = 0;
	$scope.numMonsters = 1;

	$scope.showMoreInfo = false;
	$scope.showTooltip = false;

	//FUNCTIONS

	$scope.addNew = function (typeIn) {
		//Makes sure that added name has a proper number
		var newName = "";
		if (typeIn === "Player") {
			$scope.numPlayers += 1;
			newName = typeIn + " #" + $scope.numPlayers.toString();
		}
		else if (typeIn === "NPC") {
			$scope.numNPCs += 1;
			newName = typeIn + " #" + $scope.numNPCs.toString();
		}
		else {
			$scope.numMonsters += 1;
			newName = typeIn + " #" + $scope.numMonsters.toString();
		}

		$scope.creatures.push({
			name: newName,
			initiativeModifier: 0,
			rolledInitiative: 0,
			category: typeIn.toLowerCase()
		});
	}

	//Returns number between 1 and 20, as though rolling 1d20. Using 
	//window.crypto because Math.random() seed may not have 
	//been random enough
	$scope.roll1D20 = function () {
		var array = new Uint32Array(1);
		window.crypto.getRandomValues(array);
		return 1 + (array[0] % 20);
	}

	//Sort the list of creatures
	$scope.sortCreatures = function (creaturesIn) {
		creaturesIn.sort(function (creature1, creature2) {
			return creature2.rolledInitiative - creature1.rolledInitiative;
		});
	}

	//Roll initiative, then reorder the creatures by their rolled value
	$scope.rollInitiative = function () {
		for (var i = 0; i < $scope.creatures.length; i++) {
			var d20 = $scope.roll1D20();
			$scope.creatures[i].rolledInitiative =
				d20 + $scope.creatures[i].initiativeModifier;
		}
		$scope.sortCreatures($scope.creatures);
	}

	//Removes the creature from the list and decriments the number of that 
	//type of creature
	$scope.removeCreature = function (creature) {
		var index = $scope.creatures.indexOf(creature);
		if (creature.category === "player") {
			$scope.numPlayers -= 1;
		}
		else if (creature.category === "npc") {
			$scope.numNPCs -= 1;
		}
		else {
			$scope.numMonsters -= 1;
		}
		$scope.creatures.splice(index, 1);
	}

	$scope.getInputColor = function(category) {
		return {
			player: 'md-hue-3',
			npc: 'md-accent',
			monster: 'md-warn'
		}[category]
	}

	$scope.avatars = {
		player: [
			'https://onlinedm.files.wordpress.com/2010/12/dryad.png',
			'http://www.imarvintpa.com/Mapping/Tokens/Good%20humanoids/dwarf2.png',
			'https://onlinedm.files.wordpress.com/2010/07/paladin.png',
			'http://i.imgur.com/0HxCS.png',
			'https://s3.amazonaws.com/files.enjin.com/1186665/modules/forum/attachments/Zanath+Token+256x256_1474413247.png'			
		],
		monster: {
			demon: 'https://onlinedm.files.wordpress.com/2010/12/fire-bat.png'
		}
	}
}]);



app.controller('InfoController', ['$scope', '$mdDialog', function ($scope, $mdDialog) {

	$scope.showInfo = () => {

		$mdDialog.show(
			$mdDialog.alert()
				.textContent('This is a web tool designed for helping groups play popular role-playing games like Dungeons and Dragons and Pathfinder.')
				.clickOutsideToClose(true)
				.ok('Neat!')
				
			
		);
	}
}]);