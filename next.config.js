const path = require('path')

let config = {
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            // utils: path.join(__dirname, 'src', 'utils'),
            // hooks: path.join(__dirname, 'src', 'hooks'),
            // styles: path.join(__dirname, 'src', 'styles'),
            // assets: path.join(__dirname, 'src', 'assets'),
            components: path.join(__dirname, 'src', 'components'),
        };
        return config;
    },
}

module.exports = config