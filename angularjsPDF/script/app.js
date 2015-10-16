var app = angular.module("app", []);
app.controller('myCtrl', [
    '$scope', function ($scope) {
        $scope.dataList = [];

        $scope.isSmall = true;



        var smallData = [
            {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'D',
                roll: '15',
                addess: 'Kasmir',
                religion: 'islam'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'Semi Pak- Semi India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '15',
                addess: 'bangladesh',
                religion: 'Buddism'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'Semi Pak- Semi India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '15',
                addess: 'bangladesh',
                religion: 'Buddism'
            }
        ];
        var bigData = [
            {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'D',
                roll: '15',
                addess: 'Kasmir',
                religion: 'islam'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }, {
                name: 'A',
                roll: '12',
                addess: 'bangladesh',
                religion: 'islam'
            },
            {
                name: 'B',
                roll: '13',
                addess: 'India',
                religion: 'Hindu'
            }, {
                name: 'C',
                roll: '14',
                addess: 'Pakisthan',
                religion: 'Kathlic'
            }
        ];

        $scope.switchData = function (isLarge) {
            try {
                $scope.dataList = [];
                $scope.dataList = !isLarge ? bigData : smallData;
            } catch (e) {

            }
        }

        $scope.normal = function () {
            try {
                var pdf = new jsPDF('l', 'pt', 'a4');
                //pdf.setFontSize(8);
                var options = {
                    format: 'JPEG',
                    pagesplit: true,
                };
                var div = document.getElementById('myHTML');
                pdf.addHTML($('#myHTML'), 0, 10, options, function () {
                    pdf.save("test.pdf");
                });
            } catch (e) {
                throw e;
            }
        }
        $scope.withOutSpliNormal = function () {
            try {
                var pdf = new jsPDF('l', 'pt', 'a4');
                //pdf.setFontSize(8);
                var options = {
                    format: 'PNG',
                    pagesplit: true,
                };
                var div = document.getElementById('myHTML');
                pdf.addHTML($('#myHTML'), 0, 10, options, function () {
                    pdf.save("test.pdf");
                });
            } catch (e) {
                throw e;
            }
        }
        $scope.clearOneImage = function () {
            try {
                var div = document.getElementById('myHTML');
                html2canvas([div], {
                    onrendered: function (canvas) {
                        // Note: instead of canvas.toBlob, you could do var imageUrl = canvas.toDataURL('image/png');
                        // then you wouldn't need to include the polyfill.  However, your file size will be massive


                        var imageUrl = canvas.toDataURL('image/jpg');
                        canvas.toBlob(function (blob) {
                            var urlCreator = window.URL || window.webkitURL;
                            var imageUrl = urlCreator.createObjectURL(blob);
                            var img = new Image();
                            img.src = imageUrl;
                            img.onload = function () {
                                var pdf = new jsPDF('p', 'px', [img.height, img.width]);
                                pdf.addImage(img, 0, 0, img.width, img.height);
                                pdf.save('myPdf.pdf');
                            };
                        });
                    }
                });
            } catch (e) {

            }
        }
        $scope.clearMutiplePage = function () {
            try {

                var pdf = new jsPDF2('l');

                var pdfInternals = pdf.internal;
                var pdfPageSize = pdfInternals.pageSize;

                var pdfScaleFactor = pdfInternals.scaleFactor;

                var pdfPageWidth = pdfPageSize.width;

                var pdfPageHeight = pdfPageSize.height;

                var pdfPageWidthPx = pdfPageWidth * pdfScaleFactor;
                // pdfPageHeightPx = pdfPageHeight * pdfScaleFactor,
                // pdfPageRatio = pdfPageWidth / pdfPageHeight,
                var count = 0;
                var addPage = function (img, height, width) {
                    pdf.addImage(img, 0, -(pdfPageHeight * count), width, height);
                    count++;
                    if ((pdfPageHeight * count) < height) {
                        pdf.addPage();
                        addPage(img, height, width);
                    }
                }
                var div = document.getElementById('myHTML');
                html2canvas([div], {
                    onrendered: function (canvas) {
                        canvas.toBlob(function (blob) {
                            var urlCreator = window.URL || window.webkitURL;
                            var imgUrl = urlCreator.createObjectURL(blob);
                            var img = new Image();
                            img.src = imgUrl;
                            img.onload = function () {
                                var width, height;
                                if (img.width < pdfPageWidthPx) {
                                    width = img.width / pdfScaleFactor;
                                } else {
                                    width = pdfPageWidth;
                                }
                                height = img.height / (img.width / width);
                                addPage(img, height, width, 0);
                                // pdf.addImage(img, 0, 0, width, height);
                                // pdf.addPage();
                                // pdf.addImage(img, 0, -pdfPageHeight, width, height);
                                pdf.save('new-hotness-two.pdf');
                            };
                        });
                    }
                });



            } catch (e) {

            }
        }


        function printbypage(pdf, k) {
            if (k >= $('#myHTML').length) {
                pdf.save("test.pdf");
            }
            pdf.addHTML($('#myHTML')[k], function () {
                if (k < $('#myHTML').length - 1) {
                    pdf.addPage();
                }
                printbypage(pdf, k + 1);
            });
        };
        function print_myshow() {
            var pdf = new jsPDF('p', 'mm', 'a4');
            printbypage(pdf, 0);
        };

        $scope.switchData($scope.isSmall);
    }
]);
