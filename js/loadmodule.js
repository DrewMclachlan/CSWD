var jsonfile;
var xmlfile;
var divid


function testfunction(){
    divid = +divid + 1;
    console.log(divid);
    loadFile2('XML', 'timelinedata.xml', divid)
}

function testfunction2(){
    divid = +divid - 1;
    console.log(divid);
    loadFile2('XML', 'timelinedata.xml', divid)
}
function getXMLFile2( data ) {

    console.log(divid);
    var i = divid - 1;
    var html = "<div>";
    var rootNode = data.documentElement;
    var title = rootNode.getElementsByTagName("title");
    titlevalue = title[i].childNodes[0].nodeValue;
    html += "<h2>" + titlevalue + "</h2>";

    var date = rootNode.getElementsByTagName("date");
    datevalue = date[i].childNodes[0].nodeValue;
    html += "<h5>" + datevalue + "</h5>";

    var body = rootNode.getElementsByTagName("body");
    bodyvalue = body[i].childNodes[0].nodeValue;
    html += "<p>" + bodyvalue + "</p>";

    html += "<br><br>" + "<a href=\"#\" class=\"previous\">Previous &laquo;" +
    "<a href=\"#\" class=\"next\">Next &raquo;</a>"
    console.log(html);
    return html;
}

function getXMLFile3( data ) {
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






// the JSON file has to be parsed before placing on page
function getJSONFile(data) {
    var colourListHtml = "<ol>";
    var jsonObj = JSON.parse(data);
    jsonfile = jsonObj;
    for(i in jsonObj){
        colourListHtml += "<li id=\"soilder\">"  + jsonObj[i].TITLE   + "</li>";
    }
    colourListHtml += "</ol>";
    return colourListHtml
}



// the image file doesn't get retrieved but placed in an <img> tag
function getImageFile( data ) {
    var imgHTML = "<img src='" + data + "' height='100' width='100'>";
    return imgHTML;
}

function ajaxCallBack() {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            console.log(xhr.filename);
            var html = "";
            switch ( xhr.filename ) {
                case "image":
                    html = getImageFile( xhr.responseText );
                    break;
                case "colours.xml":
                    console.log(xhr.responseXML)
                    html = getXMLFile( xhr.responseXML );
                    break;
                case "timelinedata.xml":
                    html = getXMLFile2( xhr.responseXML );
                    break;
                case "./assets/soldierdata.json":
                    html = getJSONFile( xhr.responseText );
                    break;
                case "quizdata.xml":
                    html = getXMLFile3( xhr.responseXML );
                    break;
                default:
                    html = xhr.responseText;
                    break;
            }
            document.getElementById("content").innerHTML = html;
        } else {
            document.getElementById("content").innerHTML = "Request"
            failed: " + "
            xhr.statusText;
        }
    }
};

// ajax without Promise
// jde 19/11/17, added xml flag to indicate that xml data is to be
//returned, default is text
var ajax = function (fileType, url, callBack) {

    xhr.open("GET", url, async);
    xhr.onreadystatechange = callBack;
    xhr.fileType = fileType;
    xhr.filename = url;
    console.log(url);
    xhr.send(null);
};
function loadFile2( filetype, filename, id){
    divid = id
    console.log(divid);
    ajax( filetype, filename, ajaxCallBack);
}
function loadFile( filetype, filename ) {
    ajax( filetype, filename, ajaxCallBack);
};
function processCommand( jsonText ) {
    var jsonData = JSON.parse(jsonText);
    var title = jsonData.title;
    document.getElementById( "menu" ).innerHTML = title;
    var links = jsonData.navigationLinks;
    var colourListHtml = "";
    var colourButtonsHtml = "";
    var parameters = "";
    links.forEach( function (item) {
        parameters = "\'" +item.filetype + "\', \'" + item.filename +
            "\'";
        colourListHtml += "<li class=\"nav-item\" onclick=\"loadFile(" + parameters +
            ");\">" + "<a class=\"nav-link\" href=\"#\">" + item.filetype + "</a>" + "</li>";
    });

    colourButtonsHtml += "";
    document.getElementById("test2").innerHTML = colourListHtml;
       // colourButtonsHtml
}
function getCommandCallBack() {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            processCommand( xhr.responseText );
        } else {
            document.getElementById("menu").innerHTML = "XHR failed:" + xhr.statusText + " status:" + xhr.status;
        }
    }
}


function getColoursCommandFile() {
    var url = "./assets/links.json";
    xhr.open("GET", url, async);
    xhr.onreadystatechange = getCommandCallBack;
    xhr.send(null);
}
var async = true;
var xhr = ( typeof window.XMLHttpRequest == "function" )
    ? new XMLHttpRequest( )
    : new ActiveXObject("Microsoft.XMLDOM") ;
document.addEventListener( "DOMContentLoaded", function() {
    if (typeof (document.getElementsByTagName) == "undefined") {
        document.write("getElementsByTagName is not supported");
        exit;
    }
    // getting here means everything is ok - so
    getColoursCommandFile();
}, false);