

const ctrl = 'HomeController';
angular.module('jm', []);

angular.module('jm').controller(ctrl, function ($scope) {
    const newGame = require('/newGame');
    const move = require('/move');
    const availableCells = require('/availableCells');
    const printGame = require('/printGame');

    $scope.reset = () => {
        $scope.game = newGame();
        updateAvailableCells();
        $scope.winner = '';
    };

    function updateAvailableCells() {
        $scope.availableCells = availableCells($scope.game);
        $scope.choice = $scope.availableCells[0];

        const old = console.log;
        const lines = [];
        console.log = v => lines.push(v);
        printGame($scope.game);
        console.log = old;

        $scope.output = lines.join('\n');

        console.log({
            '$scope.availableCells':$scope.availableCells,
            '$scope.output':$scope.output,
        });
    }

    $scope.move = () => {
        let result = move($scope.game, $scope.choice);
        updateAvailableCells();

        if (result.success === true) {
            $scope.winner = result.winner === 'O' ? 'O wins!' : 'Draw!';
        }

        console.log({result})
    }

    $scope.reset();
    

});