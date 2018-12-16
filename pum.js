
$("body").on('click', '#soilder', function () {
        var html = "<div>";
        var name = $(this).text();
        for (i in jsonfile) {
            if (jsonfile[i].TITLE === name) {
                html = "<p>" + "Title: " + jsonfile[i].TITLE + "</p>" +
                    "<p>" + "Date of publication: " + jsonfile[i].DATES + "</p>" +
                    "<p>" + "Description: " + jsonfile[i].DESCRIPT + "</p>" +
                    "<p>" + "History: " + jsonfile[i].HISTORY + "</p>" +
                    "<p>" + "Subject: " + jsonfile[i].SUBJECT + "</p>" +
                    "<p>" + "Source: " + jsonfile[i].SOURCE + "</p>" + "" + "</div>"
                document.getElementById('content').innerHTML = html;

            }

        }
});

$( "body" ).on('click', '#answer', function() {
    var name = $(this).text();
    var answers = xmlfile.getElementsByTagName("ca");
    value2 = answers[0].childNodes[0].nodeValue;
    console.log(value2)
    if (name === value2) {
        console.log("correct")
        document.getElementById("content").innerHTML = "correct"
    } else {
        console.log('wrong');
        document.getElementById("content").innerHTML = "wrong"
    }
});


$("body").on('click', '.content', function () {
    document.getElementById('content')
    var contentid = $(this).attr('id');
    loadFile2('XML', 'timelinedata.xml', contentid);

});

$("body").on('click', '.next', function () {
    testfunction()
})

$("body").on('click', '.previous', function () {
    testfunction2()
})

