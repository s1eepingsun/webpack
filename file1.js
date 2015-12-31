define(['jquery'], function($) {
    $(function() {

        var custom1 = (function() {
            var jqvar = $('span').html();
            console.log('file 1: ', jqvar);
        })();

        return custom1;
    });

});

document.write('<div><span class="file1-span">document.write: html in file1</span></div>');

module.exports = {
    custom1: function() {
        console.log('file1 module.exports');
    }
};