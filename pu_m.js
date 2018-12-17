var pageupdatemodule = pageupdatemodule || {};
    pageupdatemodule = function () {
    var jsonfile;
    var id;
    var getJSONFile = function(data) {
        console.log('called')
        var colourListHtml = "<ol>";
        var jsonObj = JSON.parse(data);
        jsonfile = jsonObj;
        for(i in jsonObj){
            colourListHtml += "<li id=\"soilder\">"  + jsonObj[i].TITLE   + "</li>";
        }
        colourListHtml += "</ol>";


        return colourListHtml
    };

    var getJson = function(){
        return jsonfile;
    };



       var getXMLFile3 = function( data ) {
            var rootNode = data.documentElement;
            xmlfile = rootNode;

            var colours = rootNode.getElementsByTagName("question");
            var qa = "<p>";
            value = colours[0].childNodes[0].nodeValue;
            console.log(value)
            qa = "<h3>" + value.toString() + "</h3>" + "<ul>"
            var answers = rootNode.getElementsByTagName("a");
            for (i=0; i<answers.length; i++) {
                value2 = answers[i].childNodes[0].nodeValue;
                console.log(value2)
                qa += "<li id =\"answer\">" + value2 + "</li>"
            }
            qa += "</ul> </p>"

            return qa;
        }


return {
    getsoilders: getJSONFile,
    getquizdata: getXMLFile3,
    getJson: getJson

}


}();