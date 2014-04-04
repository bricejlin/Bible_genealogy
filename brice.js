/*global Viva */
'use strict';

var graph = Viva.Graph.graph();

var bibleChars = [
    {
        "name": "adam",
        "spouse": "eve",
        "father": ["god"],
        "yearsLived": 930
    },
    {
        "name": "cain",
        "father": ["adam"]
    },
    {
        "name": "abel",
        "father": ["adam"]
    },
    {
        "name": "enoch",
        "father": ["cain"]
    },
    {
        "name": "irad",
        "father": ["enoch"]
    },
    {
        "name": "mehujael",
        "father": ["irad"]
    },
    {
        "name": "methushael",
        "father": ["mehujael"]
    },
    {
        "name": "lamech",
        "father": ["methushael"],
        "spouse": ["adah", "zillah"]
    },
    {
        "name": "jabal",
        "father": ["lamech"],
        "mother": "adah"
    },
    {
        "name": "jubal",
        "father": ["lamech"],
        "mother": "adah"
    },
    {
        "name": "tubal-cain",
        "father": ["lamech"],
        "mother": "zillah"
    },
    {
        "name": "naamah",
        "father": ["lamech"],
        "mother": "zillah",
        "gender": "female"
    },
    {
        "name": "seth",
        "father": ["adam", 130],
          "yearsLived": 912
    },
    {
        "name": "enosh",
        "father": ["seth", 105],
          "yearsLived": 905
    },
    {
        "name": "kenan",
        "father": ["enosh", 90],
          "yearsLived": 910
    },
    {
        "name": "mahalalel",
        "father": ["kenan", 70],
          "yearsLived": 895
    }, 
    {
        "name": "jared",
        "father": ["mahalalel", 65],
          "yearsLived": 962
    },
    {
        "name": "enoch",
        "father": ["jared", 162],
          "yearsLived": 365
    },
    {
        "name": "methuselah",
        "father": ["enoch", 65],
        "yearsLived": 969
    },
    {
        "name": "lamech",
        "father": ["methuselah", 187],
        "yearsLived": 777
    },
    {
        "name": "noah",
        "father": ["lamech", 182],
        "yearsLived": 950
    },
    {
        "name": "shem",
        "father": ["noah", 500],
        "yearsLived": 600
    },
    {
        "name": "ham",
        "father": ["noah", 500]
    },
    {
        "name": "japheth",
        "father": ["noah", 500]
    },
    {
        "name": "canaan",
        "father": ["ham"]
    },
    {
        "name": "gomer",
        "father": ["japheth"]
    },
    {
        "name": "magog",
        "father": ["japheth"]
    },
    {
        "name": "madai",
        "father": ["japheth"]
    },
    {
        "name": "javan",
        "father": ["japheth"]
    },
    {
        "name": "tubal",
        "father": ["japheth"]
    },
    {
        "name": "meshech",
        "father": ["japheth"]
    },
    {
        "name": "tiras",
        "father": ["japheth"]
    },
    {
        "name": "ashkenaz",
        "father": ["gomer"]
    },
    {
        "name": "riphath",
        "father": ["gomer"]
    },
    {
        "name": "togarmah",
        "father": ["gomer"]
    },
    {
        "name": "elishah",
        "father": ["javan"]
    },
    {
        "name": "tarshish",
        "father": ["javan"]
    },
    {
        "name": "kittim",
        "father": ["javan"]
    },
    {
        "name": "dodanim",
        "father": ["javan"]
    },
    {
        "name": "cush",
        "father": ["ham"]
    },
    {
        "name": "egypt",
        "father": ["ham"]
    },
    {
        "name": "put",
        "father": ["ham"]
    },
    {
        "name": "seba",
        "father": ["cush"]
    },
    {
        "name": "havilah",
        "father": ["cush"]
    },
    {
        "name": "sabtah",
        "father": ["cush"]
    },
    {
        "name": "raamah",
        "father": ["cush"]
    },
    {
        "name": "sabteca",
        "father": ["cush"]
    },
    {
        "name": "sheba",
        "father": ["raamah"]
    },
    {
        "name": "dedan",
        "father": ["raamah"]
    },
    {
        "name": "nimrod",
        "father": ["cush"]
    },
    {
        "name": "ludim",
        "father": ["egypt"]
    },
    {
        "name": "anamim",
        "father": ["egypt"]
    },
    {
        "name": "lehabim",
        "father": ["egypt"]
    },
    {
        "name": "naphtuhim",
        "father": ["egypt"]
    },
    {
        "name": "pathrusim",
        "father": ["egypt"]
    },
    {
        "name": "casluhim",
        "father": ["egypt"]
    },
    {
        "name": "caphtorim",
        "father": ["egypt"]
    },
    {
        "name": "sidon",
        "father": ["canaan"]
    },
    {
        "name": "heth",
        "father": ["canaan"]
    },
    {
        "name": "elam",
        "father": ["shem"]
    },
    {
        "name": "asshur",
        "father": ["shem"]
    },
    {
        "name": "arpachshad",
        "father": ["shem", 100],
        "yearsLived": 438
    },
    {
        "name": "lud",
        "father": ["shem"]
    },
    {
        "name": "aram",
        "father": ["shem"]
    },
    {
        "name": "uz",
        "father": ["aram"]
    },
    {
        "name": "hul",
        "father": ["aram"]
    },
    {
        "name": "gether",
        "father": ["aram"]
    },
    {
        "name": "mash",
        "father": ["aram"]
    },
    {
        "name": "shelah",
        "father": ["arpachshad", 35],
        "yearsLived": 433
    },
    {
        "name": "eber",
        "father": ["shelah", 30],
        "yearsLived": 464
    },
    {
        "name": "peleg",
        "father": ["eber", 34],
        "yearsLived": 239
    },
    {
        "name": "reu",
        "father": ["peleg", 30],
        "yearsLived": 239
    },
    {
        "name": "serug",
        "father": ["reu", 32],
        "yearsLived": 230
    },
    {
        "name": "nahor",
        "father": ["serug", 30],
        "yearsLived": 148
    },
    {
        "name": "terah",
        "father": ["nahor", 29],
        "yearsLived": 205
    },
    {
        "name": "joktan",
        "father": ["eber"]
    },
    {
        "name": "almodad",
        "father": ["joktan"]
    },
    {
        "name": "sheleph",
        "father": ["joktan"]
    },
    {
        "name": "hazarmaveth",
        "father": ["joktan"]
    },
    {
        "name": "jerah",
        "father": ["joktan"]
    },
    {
        "name": "hadoram",
        "father": ["joktan"]
    },
    {
        "name": "uzal",
        "father": ["joktan"]
    },
    {
        "name": "diklah",
        "father": ["joktan"]
    },
    {
        "name": "obal",
        "father": ["joktan"]
    },
    {
        "name": "abimael",
        "father": ["joktan"]
    },
    {
        "name": "sheba",
        "father": ["joktan"]
    },
    {
        "name": "ophir",
        "father": ["joktan"]
    },
    {
        "name": "havilah",
        "father": ["joktan"]
    },
    {
        "name": "jobab",
        "father": ["joktan"]
    },
    {
        "name": "abram",
        "father": ["terah", 70],
        "spouse": ["sarai", "hagar"],
        "otherNames": ["Abraham"]
    },
    {
        "name": "sarai",
        "father": [""],
        "otherNames": ["sarah"]
    },
    {
        "name": "nahor",
        "father": ["terah", 70],
        "spouse": ["milcah"]
    },
    {
        "name": "milcah",
        "father": ["haran"],
        "gender": "female"
    },
    {
        "name": "haran",
        "father": ["terah", 70]
    },
    {
        "name": "lot",
        "father": ["haran"]
    },
    {
        "name": "ishmael",
        "father": ["abram", 86]
    },
    {
        "name": "isaac",
        "father": ["abraham", 100]
    },
    {
        "name": "uz",
        "father": ["nahor"],
        "mother": ["milcah"]
    },
    {
        "name": "buz",
        "father": ["nahor"],
        "mother": ["milcah"]
    },
    {
        "name": "kemuel",
        "father": ["nahor"],
        "mother": ["milcah"]
    },
    {
        "name": "chesed",
        "father": ["nahor"],
        "mother": ["milcah"]
    },
    {
        "name": "hazo",
        "father": ["nahor"],
        "mother": ["milcah"]
    },
    {
        "name": "pildash",
        "father": ["nahor"],
        "mother": ["milcah"]
    },
    {
        "name": "jidlaph",
        "father": ["nahor"],
        "mother": ["milcah"]
    },
    {
        "name": "bethuel",
        "father": ["nahor"],
        "mother": ["milcah"]
    },
    {
        "name": "aram",
        "father": ["kemuel"]
    },    
    {
        "name": "rebekah",
        "father": ["bethuel"],
        "gender": "female"
    },

];

//var bibleChars = JSON.parse(bibleCharsJSON);

bibleChars.forEach(function (person) {
    if (graph.getNode(person.name)) {
        graph.addNode(person.name, { father: person.father[0] });
        console.log('found a dup ' + person.name + '!');
    } else {
        graph.addNode(person.name, { father: person.father[0] });
    }

    graph.forEachNode(function (node) {
        // Note: some two people have identical names
        if (person.father[0] === node.id) {
            graph.addLink(person.name, node.id);
            //console.log('added link!');
        }
    });

    //console.log('added ' + person.name + '!');
});

var graphics = Viva.Graph.View.svgGraphics();
graphics.node(function (node) {
    return Viva.Graph.svg('text').text(node.id);
});

var renderer = Viva.Graph.View.renderer(graph, { graphics: graphics });
renderer.run();