const path = require('path')

const isProduction = process.env.NODE_ENV === 'production';
const repo = "fancheer-ts-2";

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
            features: path.join(__dirname, 'src', 'features'),
            reducers: path.join(__dirname, 'src', 'reducers'),
        };
        return config;
    },

    basePath: isProduction ? `/${repo}` : "",
    assetPrefix: isProduction ? `/${repo}/` : "",
    images: {
        unoptimized: true,
    },
}



module.exports = config