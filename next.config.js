const path = require('path')
const withImages = require('next-images')

let config = {
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            // utils: path.join(__dirname, 'src', 'utils'),
            // hooks: path.join(__dirname, 'src', 'hooks'),
            // styles: path.join(__dirname, 'src', 'styles'),
            assets: path.join(__dirname, 'src', 'assets'),
            components: path.join(__dirname, 'src', 'components'),
            pages: path.join(__dirname, 'src', 'pages'),
            datas: path.join(__dirname, 'src', 'datas'),
        };
        return config;
    }
}

module.exports = withImages(config)