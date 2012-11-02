HQ WebUI 1.1.2
==============
Alternatives leichtgewichtiges und schnelles WebUI zur Bedienung der Homematic CCU.

Mit diesem WebUI k�nnen Variablen und Datenpunkte angezeigt und ge�ndert werden, Programme k�nnen gestartet werden und das Systemprotokoll kann angezeigt und gel�scht werden. Ger�te-Konfiguration u.�. ist nicht vorgesehen. Achtung: Wie bei XML-API Anwendungen �blich findet keine Authentifizierung statt, das HQ WebUI ist also ohne Passwortschutz erreichbar.

Ben�tigt eine modifizierte Version der XML API (mindestens Version 1.2-hq4) - zu finden hier: https://github.com/hobbyquaker/hq-xmlapi

Baut auf jQuery UI auf - d.h. die Optik ist �ber jQuery UI Themes einfach anpassbar. Hier kann man sich eigene Themes "zusammenklicken": http://jqueryui.com/themeroller/

Screenshots gibt es hier: https://github.com/hobbyquaker/hq-webui/tree/master/screenshots

Siehe auch diesen Foren-Thread: http://homematic-forum.de/forum/viewtopic.php?f=31&t=10559

Installation
============

Installation auf der CCU
------------------------

Die Datei hq-webui-1.1.2.img kann als Softwareupdate (nicht als Zusatzsoftware!) auf der CCU installiert werden. Das HQ WebUI ist dann unter http://Ip-Adresse-der-CCU/config/hq-webui/ erreichbar.


Ohne Installation auf der CCU
-----------------------------
Dateien irgendwo ablegen (kann auf einem beliebigen Webserver sein, kann aber auch einfach lokal benutzt werden).
In der Datei "hq-webui.js" (zu finden im Unterordner "js") die URL der CCU anpassen. Die Variable ccuIP (zu finden in den ersten paar Zeilen des Scripts) auf 'http://IP-Adresse-der-CCU' (also z.B. 'http://192.168.1.20') setzen. Nun einfach die index.html im Browser aufrufen.



Changelog
=========

1.x
---
* Fehler behoben der dazu gef�hrt hat dass hin und wieder leere Grids geladen wurden
* Eventuelle Ajax Fehler beim Laden der Grids abgefangen

1.1.2
-----
* Variablentyp wird als Text dargestellt
* Buttons entfernt und in jqGrid Navbar hinzugef�gt
* Kleinere Aufr�umaktionen

1.1.1
-----
* Encoding Fehler behoben
* CDN f�r jQuery und jQuery UI
* .img Datei hinzugef�gt f�r einfach Installation auf der CCU

1.1
---
* Beim ersten Laden der Seite werden die einzelnen CGI f�r die "Erstbef�llung" der Grids eines nach dem anderen geladen.
* jqGrid Pager und Auswahl wieviele Eintr�ge angezeigt werden hinzugef�gt
* jqGrid Toolbar-Suche / Filter hinzugef�gt
* jqGrid sortable aktiviert - Spalten k�nnen jetzt per Drag&Drop umsortiert werden
* Tab Ger�te entfernt, Tab Status in Ger�te umbenannt


Todo
====
* Timestamp formatieren!
* Autorefresh? xmlapi update.cgi nutzen?
* Variablen vom Typ Zahl: beim Editieren gleich auf [0-9.]* und min/max pr�fen. Unit im Edit-Dialog anzeigen
* Select/Option bei Datenpunkt edit bool/value_list
* Neuer Tab: Favoriten - nicht im Grid sondern gro�z�giger mit sch�nen Selektoren und jQuery UI Slider f�r Float Werte
* R�ume und Gewerke in Ger�teliste, Suchfilter mit Selektoren
* in Ger�teliste auf Unter-Listen verzichten - nur Datenpunkte anzeigen - und stattdessen Ger�te- und Kanal-Infos als zus�tzliche Spalten?? Oder ein Umschalter zwischen hierarchischer und flacher Darstellung?
* Step-by-Step Anleitung zum einbinden anderer Themes und Hinweise zu sonstigen Customizing zusammenschreiben
* Neuer Tab: Servicemeldungen
* Neuer Tab: Signalqualit�t (xmlapi rssilist.cgi) - oder besser Signalqualit�t in Ger�teliste als zus�tzliche Spalten?
* Neuer Tab: Skriptkonsole
* Auth?
