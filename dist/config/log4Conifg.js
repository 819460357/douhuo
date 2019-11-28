"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log4Config = {
    'appenders': {
        'access': {
            'type': 'dateFile',
            'filename': 'log/access.log',
            'pattern': '-yyyy-MM-dd',
            'category': 'http'
        },
        'app': {
            'type': 'file',
            'filename': 'log/app.log',
            'maxLogSize': 10485760,
            'numBackups': 3
        },
        'errorFile': {
            'type': 'file',
            'filename': 'log/errors.log'
        },
        'errors': {
            'type': 'logLevelFilter',
            'level': 'ERROR',
            'appender': 'errorFile'
        }
    },
    'categories': {
        'default': { 'appenders': ['app', 'errors'], 'level': 'DEBUG' },
        'http': { 'appenders': ['access'], 'level': 'DEBUG' }
    }
};
//# sourceMappingURL=log4Conifg.js.map