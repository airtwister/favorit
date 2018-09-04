module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-preset-env': {},
        'cssnano': {},
        'autoprefixer': {
            'browsers': [
                '> 5%',
                'last 2 versions',
            ]
        }
    }
};