var searchmod = searchmod || {};
searchmod = function() {

    var search = function(value){
        var content = document.getElementById('content').textContent
        console.log(content.indexOf(value))

        if(content.indexOf(value) > -1){
           //var words = content.split(" ")
          // for(i=0; words.length; i++){
            //   if(words[i] === value){
                   console.log("true")
            document.body.innerHTML =  document.body.innerHTML.replace(new RegExp(value, "g"), "<span class = hlight>"+ value+ "</span>");;

}
           }
       // }
   // }
    return{
        search:search
    }
}();