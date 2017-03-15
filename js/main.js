document.addEventListener("DOMContentLoaded", function() {

    var index;
    var h1 = document.getElementById("word");
    var ul = document.getElementById("definition");

    var size = wds.length;
    var defs = [];

    function updateDefinition() {

        ul.innerHTML = "";
        defs = wds[index].slice(1);
        defs.forEach(function(val, index) {
            ul.innerHTML += "<li>" + val + "</li>";
        });

        setTimeout(updateWord, 1000);

    }

    function updateWord() {
        index = Math.floor(Math.random() * size);

        h1.innerHTML = wds[index][0];
        ul.innerHTML = "";

        setTimeout(updateDefinition, 1000);
    }

    setTimeout(updateWord, 1000);
});
