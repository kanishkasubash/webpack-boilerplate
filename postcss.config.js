module.exports = {
    plugins: {
        'postcss-preset-env': {
            stage: 3, // Use only stable CSS features
            autoprefixer: {
                browsers: 'last 2 versions', // Specify the target browsers
            },
        },
    },
};
