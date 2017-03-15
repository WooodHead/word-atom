document.addEventListener("DOMContentLoaded", function() {

    var index;
    var h1 = document.getElementById("word");
    var ul = document.getElementById("definition");

    var wordsCopy = words.slice();
    // var wordsCopy = testWords.slice();

    var size = wordsCopy.length;
    var defs = [];
    var currentIndex;
    var timer;
    var waitFor;

    function updateH1(word) {
        h1.innerHTML = wordsCopy[index][0];
        ul.innerHTML = "";
    }


    function updateDefinition() {
        clearTimeout(timer);

        ul.innerHTML = "";
        defs = wordsCopy[index].slice(1);
        defs.forEach(function(val, index) {
            ul.innerHTML += "<li>" + val + "</li>";
        });

        waitFor = "word";
        timer = setTimeout(updateWord, 1000);

    }

    function updateWord() {
        clearTimeout(timer);

        index = Math.floor(Math.random() * size);
        var w = wordsCopy[index][0];

        updateH1(w);
        waitFor = "definition";
        timer = setTimeout(updateDefinition, 1000);
    }

    function removeWord() {
        wordsCopy.splice(index, 1);
        size = wordsCopy.length;
        if (size == 0) {
            alert('size==0');
            wordsCopy = testWords.slice();
            size = wordsCopy.length;
        }

    }

    document.addEventListener("keydown", function(e) {
        switch (e.which) {
            case 13:
                removeWord();
                updateWord();
                break;

            case 32:
                waitFor == "word" ? updateWord() : updateDefinition();
                break;

            default:
                break;

        }

    });

    setTimeout(updateWord, 1000);
});
