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
        trimstr = 'uk'
    }else if(trimstr === "The United States"){
        trimstr = 'usa'
    }
    pageupdatemodule.setname(trimstr);
    //add set filename
    loadmodule.lfile('xml', "./assets/xml/countries.xml")
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



$(body).on('submit', '#reg', function (e) {
    e.preventDefault();
    console.log('got')
    var $inputs = $('form :input');

    var values = {};
    $inputs.each(function () {
        values[this.name] = $(this).val();
    });
    console.log(values);

    var password = values.password
    var hashpassword = [];
    for (var i = 0; i < password.length; i++) {
        var yip = (password.charCodeAt(i) + 15) % 24;
        var char = String.fromCharCode(97 + yip)
        hashpassword += char;
        console.log(hashpassword);
    }

    add(values.name, hashpassword)


});



$(body).on('submit', '#log', function (e) {
    e.preventDefault();
    var $inputs = $('form :input');

    var values = {};
    $inputs.each(function() {
        values[this.name] = $(this).val();
    });
    console.log("name:", values.lname);
    console.log(values);

    var password = values.pword
    var hashpassword = [];
    for (var i = 0; i < password.length; i++) {
        var yip = (password.charCodeAt(i) + 15)%24;
        var char = String.fromCharCode(97 + yip)
        hashpassword += char;

    }
    console.log(hashpassword);

    read(values.lname, hashpassword)

    //stop form submission

});

$(body).on('submit', '#search', function (e){
    e.preventDefault()
    console.log('fired');

    var $inputs = $('form :input');
    var values = {};
    $inputs.each(function () {
        values[this.name] = $(this).val();
    });
    console.log(values.search);

    searchmod.search(values.search)



})

$(body).on('submit', '#input', function (e) {
    var $inputs = $('form :input');

    var values = {};
    $inputs.each(function () {
        values[this.name] = $(this).val();
    });
    console.log(values)
    addUinput(values.input)
    e.preventDefault();

});

$(body).on('click', '#ui', function(e){
    var utext = $(this).text()
    var html = "<h3 id =\"uit\">" + utext + "</h3>";
    html += "<button onclick=\"adminmod.test()\">Delete"
    html += "<button onclick=\"adminmod.publish()\">Publish"
    document.getElementById('content').innerHTML = html;
})
