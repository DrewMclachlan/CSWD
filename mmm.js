var menuMmodule = menuMmodule || {};
menuMmodule = function () {

    function getCommandCallBack() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                menuMmodule.processCommand(xhr.responseText);
            } else {
                document.getElementById("menu").innerHTML = "XHR failed:" + xhr.statusText + " status:" + xhr.status;
            }
        }
    }



    function getColoursCommandFile() {
        var url = "./assets/links.json";
        xhr.open("GET", url, async);
        xhr.onreadystatechange = menuMmodule.getCommandCallBack;
        xhr.send(null);
    }

    function processCommand(jsonText) {
        var jsonData = JSON.parse(jsonText);
        var title = jsonData.title;
        document.getElementById("menu").innerHTML = title;
        var links = jsonData.navigationLinks;
        var colourListHtml = "";
        var parameters = "";
        links.forEach(function (item) {
            parameters = "\'" + item.filetype + "\', \'" + item.filename +
                "\'";
            colourListHtml += "<li class=\"nav-item\" onclick=\"loadmodule.lfile(" + parameters +
                ");\">" + "<a class=\"nav-link\" href=\"#\">" + item.filetype + "</a>" + "</li>";
        });
        document.getElementById("test2").innerHTML = colourListHtml;
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
        menuMmodule.getColoursCommandFile();
    }, false);



    return{
    getCommandCallBack:getCommandCallBack,
    getColoursCommandFile:getColoursCommandFile,
        processCommand:processCommand,
        xhr:xhr

}
}();