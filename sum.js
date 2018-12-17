var sum = sum || {};
sum = function () {
    var id;

    var setid = function(did){
        console.log(did);
        id = did;
    };

    var getid = function(){
        return id;
    };

    function slidenext(){
        newid = +id + 1;
        sum.setid(newid);
        loadmodule.lfile('XML', './assets/timelinedata.xml')
    }

    function slideback(){
        newid = +id - 1;
        sum.setid(newid)
        loadmodule.lfile('XML', './assets/timelinedata.xml')
    }

    function slidefirst(){
        newid = 0;
        sum.setid(newid)
        loadmodule.lfile('XML', './assets/timelinedata.xml')
    }

    function slidelast(){
        newid = 10;
        sum.setid(newid)
        loadmodule.lfile('XML', './assets/timelinedata.xml')
    }


    function home(){
        loadmodule.lfile('html', './assets/timeline.html')
    }


    var slideloader = function( data ) {
        var i = sum.getid()
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
            "<a href=\"#\" class=\"next\">Next &raquo;</a>" +  "<a href=\"#\" class=\"first\">First Slide </a>" +  "<a href=\"#\" class=\"last\">Last Slide</a>"
        +  "<a href=\"#\" class=\"home\">Home </a>";
        console.log(html);
        return html;
    }



    return{
        setid:setid,
        getid:getid,
        sliderloader: slideloader,
        slidenext: slidenext,
        slideback: slideback,
        slidefirst: slidefirst,
        slidelast: slidelast,
        home: home
    }


}();