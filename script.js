var my_endpoint = "http://localhost:3030/web_sem/sparql";

var sparql1 = d3.select("#sparql1").property("value")
var sparql2 = d3.select("#sparql2").property("value")
var sparql3 = d3.select("#sparql3").property("value")
var sparql4 = d3.select("#sparql4").property("value")
var sparql5 = d3.select("#sparql5").property("value")
var sparql6 = d3.select("#sparql6").property("value")
var sparql7 = d3.select("#sparql7").property("value")

let ca_select = document.getElementById("annee_select");
let textarea1 = document.getElementById("sparql1");
let textarea2 = document.getElementById("sparql2");
let textarea3 = document.getElementById("sparql3");
let textarea4 = document.getElementById("sparql4");
let textarea5 = document.getElementById("sparql5");
let textarea6 = document.getElementById("sparql6");


ca_select.addEventListener("change", () => {
    if (ca_select.value == "2019") {
        annee2019();
        textarea1.classList.remove("hidden");
        textarea2.classList.add("hidden");
        textarea3.classList.add("hidden");

    }
    if (ca_select.value == "2018") {
        annee2018();
        textarea2.classList.remove("hidden");
        textarea1.classList.add("hidden");
        textarea3.classList.add("hidden");
    }
    if (ca_select.value == "2017") {
        annee2017();
        textarea3.classList.remove("hidden");
        textarea1.classList.add("hidden");
        textarea2.classList.add("hidden");
    }
})

d3sparql.query(my_endpoint, sparql3, function(json) {
    var config = {
        "label_x": "Entreprise",
        "label_y": "Chiffre d'affaire en 2017",
        "var_x": "nom",
        "var_y": "ca",
        "width":  600,
        "height": 500,
        "margin":  80,
        "selector": "#result1"
    }
    d3sparql.barchart(json, config);
    });

function annee2019() {

    d3sparql.query(my_endpoint, sparql1, function(json) {
        var config = {
            "label_x": "Entreprise",
            "label_y": "Chiffre d'affaire en 2019",
            "var_x": "nom",
            "var_y": "ca",
            "width":  600,
            "height": 500,
            "margin":  80,
            "selector": "#result1"
        }
        d3sparql.barchart(json, config);
        });
}

function annee2018() {

    d3sparql.query(my_endpoint, sparql2, function(json) {
        var config = {
            "label_x": "Entreprise",
            "label_y": "Chiffre d'affaire en 2018",
            "var_x": "nom",
            "var_y": "ca",
            "width":  600,
            "height": 500,
            "margin":  80,
            "selector": "#result1"
        }
        d3sparql.barchart(json, config);
        });
}

function annee2017() {

    d3sparql.query(my_endpoint, sparql3, function(json) {
        var config = {
            "label_x": "Entreprise",
            "label_y": "Chiffre d'affaire en 2017",
            "var_x": "nom",
            "var_y": "ca",
            "width":  600,
            "height": 500,
            "margin":  80,
            "selector": "#result1"
        }
        d3sparql.barchart(json, config);
        });
}

d3sparql.query(my_endpoint, sparql4, function(json) {
    var config = {
        "selector": "#result2"
    }
    d3sparql.htmltable(json, config)
    });

d3sparql.query(my_endpoint, sparql5, function(json) {
    var config = {
        "label_x": "Région",
        "label_y": "Nombre d'entreprise",
        "var_x": "Region",
        "var_y": "Nombre_d_entreprise",
        "width":  600,
        "height": 500,
        "margin":  80,
        "selector": "#result3"
    }
    d3sparql.barchart(json, config);
    });

d3sparql.query(my_endpoint, sparql6, function(json) {
    var config = {
        "width": 900,
        "height": 4500,
        "margin": 350,
        "radius": 5,
        "selector": "#result4"
    }
    d3sparql.htmltable(json, config)
    });

d3sparql.query(my_endpoint, sparql7, function(json) {
    var config = {
        "label_x": "Région",
        "label_y": "Nombre d'entreprise radiée",
        "var_x": "Region",
        "var_y": "Nombre_d_entreprise_radiée",
        "width":  600,
        "height": 500,
        "margin":  80,
        "selector": "#result5"
    }
    d3sparql.barchart(json, config);
    });







