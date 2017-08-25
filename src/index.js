
SystemJS.config({
    baseURL: '../lib'
});
SystemJS.import('praise.js').then(function(m){
    $.fn.thumb = function () {
        new m.Thumb(this).creat()
    }
    $('.box').thumb()
})