var body = $('body')

$(body).on('click', '#soilder', function () {
    var html = "<div>";
    var name = $(this).text();
    var json = pageupdatemodule.getJson();
    for (i in json) {
        if (json[i].TITLE === name) {
            html = "<p>" + "Title: " + json[i].TITLE + "</p>" +
                "<p>" + "Date of publication: " + json[i].DATES + "</p>" +
                "<p>" + "Description: " + json[i].DESCRIPT + "</p>" +
                "<p>" + "History: " + json[i].HISTORY + "</p>" +
                "<p>" + "Subject: " + json[i].SUBJECT + "</p>" +
                "<p>" + "Source: " + json[i].SOURCE + "</p>" + "" + "</div>"
            document.getElementById('content').innerHTML = html;

        }

    }
});

$(body).on('click', '#answer', function() {
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


$(body).on('click', '.content', function () {
    document.getElementById('content')
    var contentid = $(this).attr('id');
    new sum.setid(contentid);
    loadmodule.lfile('XML', './assets/xml/timelinedata.xml')


});

$(body).on('click', '.overlay', function () {
    document.getElementsByClassName('text')
    var text = $(this).text()
    console.log(text)
    var trimstr = $.trim(text)
    console.log(trimstr);

    if(trimstr === "The United Kingdom"){
        trimstr = "uk"

    }
    else if(trimstr === "The United States"){
        trimstr = "usa"
    }
    var filename = './assets/txt/' + trimstr + '.txt'
    console.log(filename);
    loadmodule.lfile('txt', filename)
});






$(body).on('click', '.next', function () {
    sum.slidenext()
});

$(body).on('click', '.previous', function () {
    sum.slideback()
});

$(body).on('click', '.first', function () {
    sum.slidefirst()
});

$(body).on('click', '.last', function () {
    sum.slidelast()
});

$(body).on('click', '.home', function () {
    sum.home()
});

