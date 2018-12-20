var adminmod = adminmod || {};
adminmod = function() {
    var key;

    var setkey = function(ikey){
        key = ikey;
    };

    function test() {
        var test = document.getElementById('uit').textContent;
            getKey(test);
            setTimeout(function(){
                remove(key)
            },1000)


    }

    function publish() {
        var usertext = document.getElementById('uit').textContent;
        getKey(usertext)
        setTimeout(function(){
            pub(key, usertext)
        },1000)
    }

    return{
        test:test,
        setkey:setkey,
        publish:publish
    }
}()