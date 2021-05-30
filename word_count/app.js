document.getElementById("evaluatedText").addEventListener("input", function() {
    var wom = this.value.match(/\S+/g);
    let length = wom ? wom.length: 0;
    document.getElementById("wordCount").innerHTML= length;
})
