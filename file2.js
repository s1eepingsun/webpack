

function useful() {
    var $ = require('jquery');
    var jqspan = $('span').html();
    console.log('file 2: ', jqspan);



    //if(__DEV__) console.log('dev env');
    //if(__PRERELEASE__) console.log('production env');

    /*if (NODE_ENV === 'production') {
        console.log('There is Production mode');
    } else {
        console.log('There is Development mode');
    }*/

}
useful();

var justVar = 3;

Array.max = function (array) {
    return Math.max.apply(null, array);
};


//$('span').css('color', 'blue');

module.exports = justVar;