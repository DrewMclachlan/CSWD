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
        menuMmodule.getColoursCommandFile();
    }, false);



    return{
        ajaxCallBack:ajaxCallBack,
        ajax:ajax,
        lfile:loadFile,


    }



}();