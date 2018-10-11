const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
    mode: 'development',
    devtool: false,
    plugins: [
        new CircularDependencyPlugin()
    ]
};
