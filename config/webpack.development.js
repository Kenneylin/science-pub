const { p } = require('./webpack.baseConfig');
console.log(p);


module.exports = function () {
    return new Promise(resolve => {
        p.then(data => {
            resolve(data.devConfig);
        });
    });
};