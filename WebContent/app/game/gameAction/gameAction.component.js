angular.module('game')
	.component('gameAction', {
		templateUrl : 'app/game/gameAction/gameAction.component.html',
		controller : function(){
			var vm = this;
			
			vm.keyword = '';
			
			vm.keywords = [
				'abstract', 'continue', 'for', 	'new', 	'switch',
				'assert', 'default', 'goto', 'package', 'synchronized',
				'boolean', 'do', 'if', 'private', 'this',
				'break', 'double', 'implements', 'protected', 'throw',
				'byte', 'else', 'import', 'public', 'throws',
				'case', 'enum', 'instanceof', 'return', 'transient',
				'catch', 'extends', 'int', 'short', 'try',
				'char', 'final', 'interface', 'static', 'void',
				'class', 'finally', 'long', 'strictfp', 'volatile',
				'const', 'float', 'native', 'super', 'while', '_'
			];
			
			vm.keywords.sort();
			

			vm.generateId = function(){
				return vm.currentId++;
			};
			
			var generateKeywordBoxes = function(){
				for(let i = 0; i < vm.keywords.length; i++) {
					vm.keywordBoxes.push({
						id : i,
						value : '             ',
						cssClass: ''
					});
				}
			};
						
			vm.reset = function(){
				vm.currentId = 0;
				vm.keywordBoxes = [];
				generateKeywordBoxes();
				vm.success = 0;
				vm.playAgain = false;
			};
			
			vm.reset();
			
			vm.check = function($event){
				for(let i = 0; i < vm.keywords.length; i++){
					if (vm.keywords[i] == vm.keyword && vm.keywordBoxes[i].value != vm.keyword) {
						vm.keywordBoxes[i].value = vm.keyword;
						vm.keywordBoxes[i].cssClass = 'finished';
						vm.keyword = '';
						vm.success++;
						vm.checkIfFinished();
						break;
					}
				}
				
			};
			
			vm.reveal = function(){
				for(let i = 0; i < vm.keywords.length; i++){
					if ( vm.keywordBoxes[i].value != vm.keywords[i]) {
						vm.keywordBoxes[i].value = vm.keywords[i];
						vm.keywordBoxes[i].cssClass = 'revealed';
					} else {
						vm.keywordBoxes[i].cssClass = 'finished';
					}
				}
				vm.playAgain = true;
			}
			
			vm.checkIfFinished = function(){
				if (vm.success == vm.keywords.length) {
					vm.reveal();
				}
			};
			
		},
		controllerAs : 'vm'
	});
	