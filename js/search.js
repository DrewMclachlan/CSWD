var searchmod = searchmod || {};
searchmod = function() {

    var search = function(value){
        var content = document.getElementById('content').textContent
        console.log(content.indexOf(value))

        if(content.indexOf(value) > -1){
           var words = content.split(" ")
           for(i=0; words.length; i++){
               if(words[i] === value){
                   console.log("true")
               }
           }
        }
    }
    return{
        search:search
    }
}();