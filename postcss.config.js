module.exports = {
    plugins: {
        'postcss-preset-env': {
            stage: 3, // Use only stable CSS features
            autoprefixer: {
                overrideBrowserslist: 'last 2 versions',
            },
        },
    },
};
