var pageupdatemodule = pageupdatemodule || {};
    pageupdatemodule = function () {

    var jsonfile;
    var cname;
    var id = 1;


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
        var imgHTML = "<img src='" + data + "' height='200' width='200'>";
        return imgHTML;
    };

    var setid = function(counter){
        id = counter
    }



    var getXMLFile3 = function( data ) {
        var rootNode = data.documentElement;
        var colours = rootNode.getElementsByTagName("question" + id);
        xmlfile = rootNode;
        var qa = "<p>";
        value = colours[0].childNodes[0].nodeValue;
        qa += "<h3>" + value.toString() + "</h3>" + "<br>"
       var answers = rootNode.getElementsByTagName("a" + id);
            for (i=0; i<answers.length; i++) {
                if(answers)
                value2 = answers[i].childNodes[0].nodeValue;
                qa += "<h4 id =\"answer\">" + value2 + "</h4>"

           }




            qa += "</ul> </p>"
        return qa;
    };


    var splitfile = function( data ){
        var jsonObj = JSON.parse(data);
        var html = "<p>";

            for(i in jsonObj) {

                var imgloc = jsonObj[i].imgfile;
                html += "<div class='imgs'>" + pageupdatemodule.getimg(imgloc) + "</div>" + "<div>" + jsonObj[i].description.join('\n') + "<p>"+"<br>"+ jsonObj[i].facts + "</p>" + "</div>"
            }
            html += "</p>"
            return html;
        };

        var getcountries = function(data){
            console.log(data);
            var html="<div class='countries'>"
           var node, childNodes = data.documentElement.childNodes
            for(var i = 0; i < childNodes.length; i++)
            {
                node = childNodes[i];
                if(node.nodeType !== Node.TEXT_NODE)
                    console.log(node.tagName)
                    if(node.tagName === cname) {
                        console.log(node.childNodes.length)
                        for(var i = 0; i < node.childNodes.length; i++) {
                            if (node.childNodes[i].nodeType !== Node.TEXT_NODE)
                                console.log(node.childNodes)
                               html += "<p>" + node.childNodes[i].textContent + "</p>"
                        }

                        html +="</div>"
                        return html
                    }
            }
            return 'error'
        }

        var setname = function(name){
                cname = name
        }


return {
    getsoilders: getJSONFile,
    getquizdata: getXMLFile3,
    getJson: getJson,
    splitfile: splitfile,
    getimg: getImageFile,
    getcountries: getcountries,
    setname:setname,
    setid:setid

}


}();