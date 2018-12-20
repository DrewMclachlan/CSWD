


if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}


var db, request = window.indexedDB.open("newDatabase", 1);
request.onerror = function (event) {
    console.log("error:");
};
request.onsuccess = function (event) {
    db = request.result;
    console.log("success:" + db);
};
//the word password is set as the word test, after cyper
var test = [{name:"drew", password:"lukl"}]
request.onupgradeneeded = function (event) {
    var db = event.target.result;
    var objectStore = db.createObjectStore("cswd", {keyPath: "name"} );
    var objStore = db.createObjectStore("userinput", {keyPath: 'id', autoIncrement:true})
    objectStore.add({name:"drew", password:"lukl"});
};

function add(name, password) {
    var request = db.transaction(["cswd"], "readwrite")
        .objectStore("cswd")
        .add({name: name, password:password});
    request.onsuccess = function (event) {
        alert("Lab has been added to your database.");
    };
    request.onerror = function (event) {
        alert("Unable to add data. Username must be unique");
    }
};

function read(name, hpassword) {
    var transaction = db.transaction(["cswd"]);
    var objectStore = transaction.objectStore("cswd");
    var request = objectStore.get(name);
    request.onerror = function (event) {
        alert("Unable to retrieve data from database!");
    };
    request.onsuccess = function (event) {
        if (request.result) {
            if(request.result.password === hpassword){
                console.log("yeah")
                loadmodule.lfile('html','./assets/phtml/admin/adminpage.html')
            }else{
                console.log('no match');
            }
        } else {
            alert("Name couldn't be found in your database!");
        }
    };
};


function remove(key) {
    var request = db.transaction(["userinput"], "readwrite")
        .objectStore("userinput")
        .delete(key);
    request.onsuccess = function (event) {
        alert("removed from db");
        loadmodule.lfile("html",'./assets/phtml/admin/adminpage.html')
    };
    request.onerror = function (event) {
        alert("Unable to remove from db!");
    };
};

function getKey(item) {
    var transaction = db.transaction(["userinput"]);
    var objectStore = transaction.objectStore("userinput");
    var request = objectStore.getAll()
    request.onerror = function (event) {
        alert("Unable to retrieve data from database!");
    };
    request.onsuccess = function (event) {
        console.log(event.target.result)
        if (request.result) {
            for (var i in request.result) {
                if(request.result[i].userinput === item){
                    var key = request.result[i].id
                    console.log(key);
                    adminmod.setkey(key);

                }
            }
        } else {
            alert("Name couldn't be found in your database!");
        }
    }
}

function addUinput(input) {
    var request = db.transaction(["userinput"], "readwrite")
        .objectStore("userinput")
        .add({userinput: input, pub:false});
    request.onsuccess = function (event) {
        console.log("added to database.");
        document.getElementById('content').innerText = "Thank you for your submission"
    };
    request.onerror = function (event) {
        alert("Unable to add data. ");
    }
};

function pub(key, item){
    var transaction = db.transaction(["userinput"], "readwrite");
    var objectStore = transaction.objectStore("userinput");
    console.log('here');
    console.log(key);
    var request = objectStore.put({userinput:item,pub:true, id:key});
    request.onsuccess = function (event) {
        console.log("added to database.");
    };
}

function readUinput() {
    var results = "";
    var transaction = db.transaction(["userinput"]);
    var objectStore = transaction.objectStore("userinput");
    var request = objectStore.getAll()
    request.onerror = function (event) {
        alert("Unable to retrieve data from database!");
    };
    request.onsuccess = function (event) {
        console.log(event.target.result)
        if (request.result) {
            for (var i in request.result) {
                if(request.result[i].pub != true) {
                    results += ("<li id='ui'>" + request.result[i].userinput + "</li>")
                }
            }
            console.log(results)

            document.getElementById("load").innerHTML = results;

        } else {
            alert("Name couldn't be found in your database!");
        }
    }
};
    function loadutext(){
        console.log('fired');
        var results = "";
        var transaction = db.transaction(["userinput"]);
        var objectStore = transaction.objectStore("userinput");
        var request = objectStore.getAll()
        request.onerror = function (event) {
            alert("Unable to retrieve data from database!");
        };
        request.onsuccess = function (event) {
            console.log(event.target.result)
            if (request.result) {
                for (var i in request.result) {
                    if(request.result[i].pub === true){
                        console.log(request.result[i].userinput)
                        results += "<p>" + request.result[i].userinput + "</p>"
                    }
                }
                console.log(results)

               document.getElementById("text").innerHTML = results;

            } else {
                alert("Name couldn't be found in your database!");
            }
        };
    }

