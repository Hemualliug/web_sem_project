# web_sem_project
Semantic Web School Project

Description des fichiers :
- rapport_projet_web_sémantique.pdf : rapport
- dossier d3 : dossier contenant la librairie d3 qui peremet de faire fonctionner d3sparql
- clean_data.ttl : données à la sortie du convertisseur et prêtes à être dans fuseki
- d3sparql.js : librairie d3sparql
- out.csv : données tabulaires à la sortie des modifications avec pandas
- schema.rdfs : schéma rdf (il est dans clean_data.ttl)
- script.js : code js pour le rendu sur une page web
- style.css : feuille de style
- web_sem.html : page web

Pré-requis
- JAVA 11
- Apache Fuseki

Etapes :
- lancer fuseki-server en ligne de commande
- aller à manage dataset
- add new dataset with name web_sem
- Dataset type : persistent
- aller à upload data
- uploader le fichier clean_data.ttl
- vérifier dans fuseki que votre endpoint est bien "http://localhost:3030/web_sem/sparql"
- lancer le fichier web_sem.html

