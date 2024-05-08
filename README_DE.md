# Github Username API
[![Statusübersicht-Badge](../../blob/badges/.github/badges/autograding/badge.svg)](#Ergebnisse)


Erstelle eine Webseite, um Repositories mit einem bestimmten Github-Benutzernamen zu finden. Die Webseite sollte es dem Nutzer ermöglichen, einen Github-Benutzernamen in ein Formular einzugeben und dieses Formular an die Github-API zu senden, um eine Liste aller Repositories des Nutzers zu erhalten.

Du wirst in der GitHub-API-Dokumentation recherchieren und Dinge ausprobieren müssen, um herauszufinden, wie das geht (ein wichtiger Teil der modernen Webentwicklung!). Hab keine Angst vor dem Scheitern! Durch Ausprobieren und Scheitern kannst du viel lernen und Fehlermeldungen sind dein Freund.

**Hinweis** Verwende nur Klassen und verwende nur async/await Syntax. Das Styling ist dir überlassen.
  
![Vorschau](./demo.gif)

**BONUS** Zeige zwei dieser Formulare und Repository-Listen nebeneinander.

ERKLÄRUNG:
index.js enthält eine asynchrone Funktion getRepositories() und eine reguläre Funktion displayRepositories(repositories). 
getRepositories(): Diese Funktion ruft Repository-Daten von der GitHub-API ab, basierend auf dem vom Benutzer in ein Eingabefeld eingegebenen Benutzernamen. Sie erstellt eine URL unter Verwendung des eingegebenen Benutzernamens und sendet mithilfe der Funktion fetch() eine GET-Anfrage an die GitHub-API. 
Bei einer erfolgreichen Antwort ruft sie die Funktion displayRepositories() auf, um die Repository-Daten auf der Webseite darzustellen. Wenn die Anfrage fehlschlägt, fängt sie den Fehler ab und zeigt dem Benutzer eine Warnung an. 
displayRepositories(repositories): Diese Funktion verwendet ein Array von Repository-Objekten als Eingabe und generiert dynamisch HTML-Elemente, um den Namen, die Beschreibung und die URL jedes Repositorys auf der Webseite anzuzeigen.





















































                                                      🐢

[//]: # (autograding info start)
## Ergebnisse


### Browser-Github Benutzername API

| Status | Prüfen |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status0.svg) | Eingabefeld sollte vorhanden sein |
| ![Status](../../blob/badges/.github/badges/autograding/status1.svg) | Submit Button sollte auf der Seite vorhanden sein |
| ![Status](../../blob/badges/.github/badges/autograding/status2.svg) | Javascript-Datei sollte verlinkt sein |
| ![Status](../../blob/badges/.github/badges/autograding/status3.svg) | Sollte eine Liste von Github Repo's anzeigen, sobald der Benutzer sich anmeldet |



[🔬 Ergebnisdetails](https://github.com/DigitalCareerInstitute/Browser-Github-UserName-API/actions)

[📢 Feedback geben oder Problem melden](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=Browser-Github-UserName-API&entry.2115011968=https%3A%2F%2Fgithub.com%2FDigitalCareerInstitute%2FBrowser-Github-UserName-API)

### Debugging deines Codes
> [Lesen der Testausgaben](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)

Es gibt zwei Möglichkeiten, um herauszufinden, warum Aufgaben nicht erledigt werden können:
#### 1. Tests lokal ausführen
- Führe `npm install` aus
- Führe `npm test` im Terminal aus. Du wirst sehen, wo deine Lösung vom erwarteten Ergebnis abweicht.

#### 2. Überprüfen der Testausgabe auf GitHub
- Gehe auf die [Registerkarte Aktionen deines Übungsrepos](https://github.com/DigitalCareerInstitute/Browser-Github-UserName-API/actions)
- Dort siehst du eine Liste mit den Testläufen. Klicke auf den obersten.
- Klicke auf "Autograding".
- Erweitere den Punkt 'Run DCI-EdTech/autograding-action@main'
- Hier siehst du alle Ausgaben des Testlaufs

[//]: # (autograding info end)