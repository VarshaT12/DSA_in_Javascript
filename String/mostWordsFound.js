const mostWordsFound = function (sentences) {
    var res = [];
    for (let i = 0; i < sentences.length; i++) {
        var count = 0;
        sentences[i].split("");
        for (let j = 0; j < sentences[i].length; j++) {
            if (sentences[i][j] == ' ') {
                count++;
            }
        }
        res.push(count);
    }
    for (let k = 0; k < sentences.length; k++) {
        if (res[k] == Math.max(...res)) {
            return sentences[k];
        }
    }

}

let sentencesing = ["alice and bob love leetcode hello", "i think so too", "this is great thanks very much"];
console.log(mostWordsFound(sentencesing))

