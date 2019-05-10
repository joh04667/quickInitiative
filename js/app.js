var app = angular.module('InitiativeApp', ['ngMaterial'])
    .config(($mdThemingProvider) => {
        $mdThemingProvider.definePalette('greenish', {
            '50': 'eceff1',
            '100': 'cfd8dc',
            '200': 'b0bec5',
            '300': '90a4ae',
            '400': '78919c',
            '500': '607d8b',
            '600': '587583',
            '700': '4e6a78',
            '800': '44606e',
            '900': '334d5b',
            'A100': 'abe1ff',
            'A200': '78ceff',
            'A400': '45bcff',
            'A700': '2bb3ff',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': [
                '50',
                '100',
                '200',
                '300',
                '400',
                'A100',
                'A200',
                'A400',
                'A700'
            ],
            'contrastLightColors': [
                '500',
                '600',
                '700',
                '800',
                '900'
            ]
        });

        $mdThemingProvider.definePalette('bluish', {
            '50': 'fffae7',
            '100': 'fef3c2',
            '200': 'feec9a',
            '300': 'fee472',
            '400': 'fdde53',
            '500': 'fdd835',
            '600': 'fdd430',
            '700': 'fcce28',
            '800': 'fcc822',
            '900': 'fcbf16',
            'A100': 'ffffff',
            'A200': 'fffdf8',
            'A400': 'ffeec5',
            'A700': 'ffe7ac',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': [
                '50',
                '100',
                '200',
                '300',
                '400',
                '500',
                '600',
                '700',
                '800',
                '900',
                'A100',
                'A200',
                'A400',
                'A700'
            ],
            'contrastLightColors': []
        });

        $mdThemingProvider.theme('default')
            .primaryPalette('greenish', {
                default: '500',
                'hue-1': '300',
                'hue-2': '700',
                'hue-3': '50'
            })
            .accentPalette('bluish')
    })
