var request = (function() {
    var BASE_URL = "http://notify.renren.com/rmessage/get?getbybigtype=1&bigtype=1&limit=11&begin=0&view=16&rand="

    return function(callback){
        var url = BASE_URL + Math.random();
        $.getJSON(url, function(data){
            callback(data);
        });
    };
})();
