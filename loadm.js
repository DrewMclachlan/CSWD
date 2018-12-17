var loadmodule = loadmodule || {};
loadmodule = function() {



    function ajaxCallBack() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                console.log(xhr.filename);
                var html = "";
                switch (xhr.filename) {
                    case "image":
                        html = getImageFile(xhr.responseText);
                        break;
                    case "colours.xml":
                        console.log(xhr.responseXML)
                        html = getXMLFile(xhr.responseXML);
                        break;
                    case "./assets/timelinedata.xml":
                        html = sum.sliderloader(xhr.responseXML);
                        break;
                    case "./assets/soldierdata.json":
                        html = pageupdatemodule.getsoilders(xhr.responseText);
                        break;
                    case "./assets/quizdata.xml":
                        html = pageupdatemodule.getquizdata(xhr.responseXML);
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



    var ajax = function (fileType, url, callBack) {

        xhr.open("GET", url, async);
        xhr.onreadystatechange = callBack;
        xhr.fileType = fileType;
        xhr.filename = url;
        console.log(url);
        xhr.send(null);
    };



    function loadFile(filetype, filename) {
        ajax(filetype, filename, ajaxCallBack);
    };


    function processCommand(jsonText) {
        var jsonData = JSON.parse(jsonText);
        var title = jsonData.title;
        document.getElementById("menu").innerHTML = title;
        var links = jsonData.navigationLinks;
        var colourListHtml = "";
        var colourButtonsHtml = "";
        var parameters = "";
        links.forEach(function (item) {
            parameters = "\'" + item.filetype + "\', \'" + item.filename +
                "\'";
            colourListHtml += "<li class=\"nav-item\" onclick=\"loadmodule.lfile(" + parameters +
                ");\">" + "<a class=\"nav-link\" href=\"#\">" + item.filetype + "</a>" + "</li>";
        });

        colourButtonsHtml += "";
        document.getElementById("test2").innerHTML = colourListHtml;
        // colourButtonsHtml
    }

    function getCommandCallBack() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                processCommand(xhr.responseText);
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
    var xhr = (typeof window.XMLHttpRequest == "function")
        ? new XMLHttpRequest()
        : new ActiveXObject("Microsoft.XMLDOM");
    document.addEventListener("DOMContentLoaded", function () {
        if (typeof (document.getElementsByTagName) == "undefined") {
            document.write("getElementsByTagName is not supported");
            exit;
        }
        // getting here means everything is ok - so
        getColoursCommandFile();
    }, false);



    return{
        ajaxCallBack:ajaxCallBack,
        ajax:ajax,
        lfile:loadFile,
        processCommand:processCommand,
        getCommandCallBack:getCommandCallBack,
        getColoursCommandFile:getColoursCommandFile
    }



}();