const path = require('path')

const isProduction = process.env.NODE_ENV === 'production';


let config = {
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            // utils: path.join(__dirname, 'src', 'utils'),
            // hooks: path.join(__dirname, 'src', 'hooks'),
            types: path.join(__dirname, 'src', 'types'),
            assets: path.join(__dirname, 'src', 'assets'),
            components: path.join(__dirname, 'src', 'components'),
            pages: path.join(__dirname, 'src', 'pages'),
            datas: path.join(__dirname, 'src', 'datas'),
        };
        return config;
    },
    images: {
        loader: 'akamai',
        path: isProduction ? 'https://koremp.github.io/fancheer-ts-2' : 'http://localhost:3000',
    },
    assetPrefix: isProduction ? 'https://koremp.github.io/fancheer-ts-2' : '',
}



module.exports = config