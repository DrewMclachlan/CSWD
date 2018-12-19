var pageupdatemodule = pageupdatemodule || {};
    pageupdatemodule = function () {
    var jsonfile;


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

        var getImageFile = function( data ) {
            var imgHTML = "<img src='" + data + "' height='400' width='400'>";
            return imgHTML;
        }




        var getXMLFile3 = function( data ) {
            var rootNode = data.documentElement;
            var colours = rootNode.getElementsByTagName("question");
            xmlfile = rootNode;
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
    };


        var splitfile = function( data ){
            var jsonObj = JSON.parse(data);
            var html = "<p>";
            for(i in jsonObj) {
                var imgloc = jsonObj[i].imgfile;
                console.log(jsonObj[i].facts[0])
                html += "<div>" + pageupdatemodule.getimg(imgloc) + "</div>" + "<div>" + jsonObj[i].description.join('\n') + jsonObj[i].facts + "</div>"
            }
            html += "</p>"
                return html;
        };

        var getcountries = function(data){
            console.log(data);
           var node, childNodes = data.documentElement.childNodes
            for(var i = 0; i < childNodes.length; i++)
            {
                node = childNodes[i];
                if(node.nodeType !== Node.TEXT_NODE)
                    console.log(node.tagName)
                    if(node.tagName === "usa") {
                        console.log('here');
                        var html = node.textContent;
                        return html
                    }
            }
            return 'error'
        }




return {
    getsoilders: getJSONFile,
    getquizdata: getXMLFile3,
    getJson: getJson,
    splitfile: splitfile,
    getimg: getImageFile,
    getcountries: getcountries

}


}();