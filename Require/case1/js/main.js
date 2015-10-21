require.config({
    paths: {
        jquery: '../lib/jquery',
        math  : 'math'
    }
});
 
require(['jquery','math'], function($,math) {   
    $('.wrapper').html(math.add(1,2))
});
