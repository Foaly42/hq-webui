HQ WebUI
========
Alternatives leichtgewichtiges und schnelles WebUI zur Bedienung der Homematic CCU.

Mit diesem WebUI k�nnen Variablen und Datenpunkte angezeigt und ge�ndert werden, Programme k�nnen gestartet werden und das Systemprotokoll kann angezeigt und gel�scht werden. Ger�te-Konfiguration oder das Anlegen von Variablen oder Programmen und Verkn�pfungen u.�. ist nicht vorgesehen. Achtung: Wie bei XML-API Anwendungen �blich findet keine Authentifizierung statt, das HQ WebUI ist also ohne Passwortschutz erreichbar.

Die Idee hinter diesem WebUI ist nicht das originale vollst�ndig zu ersetzen, es ist vielmehr als schnelles erg�nzendes GUI f�r den Homematic-"Administrator" gedacht der komfortabel und schnell einen Datenpunkt oder eine Variable editieren m�chte, eine ise_id nachschauen muss oder �hnliches.

Ben�tigt eine modifizierte Version der XML API (mindestens Version 1.2-hq6) - zu finden hier: https://github.com/hobbyquaker/hq-xmlapi

Das HQ WebUI l�dt die ben�tigten jQuery Bibliotheken vom CDN ("Content Delivery Network") googleapis.com - so kann der Speicherplatz den die Bibliotheken auf der CCU belegen w�rden eingespart werden. Allerdings ist deshalb zur Benutzung ein funktionierender Web-Zugang erforderlich.

Siehe auch diesen Foren-Thread: http://homematic-forum.de/forum/viewtopic.php?f=31&t=10559

Installation
============

Download
--------
https://github.com/hobbyquaker/hq-webui/zipball/master
Diese Zip Datei beinhaltet sowohl die Quellen (die Standalone genutzt werden k�nnen) als auch die .tar.gz Datei f�r die Installation als Zusatzsoftware auf der CCU

Installation auf der CCU
------------------------

Die Datei hq-webui-(version).tar.gz kann als Zusatzsoftware auf der CCU installiert werden. Das HQ WebUI ist dann unter http://IP-Adresse-der-CCU/addons/hq-webui/ erreichbar.


Ohne Installation auf der CCU
-----------------------------
Dateien irgendwo ablegen (kann auf einem beliebigen Webserver sein, kann aber auch einfach lokal benutzt werden).
In der Datei "hq-webui.js" (zu finden im Unterordner "js") die URL der CCU anpassen. Die Variable ccuUrl (zu finden in den ersten paar Zeilen des Scripts) auf 'http://IP-Adresse-der-CCU' (also z.B. 'http://192.168.1.20') setzen. Nun einfach die index.html im Browser aufrufen.


Bedienung
=========
Links unten bei jeder Tabellen-Ansicht befindet sich ein Reload-Button um die Daten neu zu laden. Bei den Systemprotokollen ist hier au�erdem ein L�sch-Button zu finden.
Datenpunkte und Variablen lassen sich einfach �ber Doppelklick auf die Tabellenzeile editieren, Programme werden auch �ber Doppelklick auf die Tabellenzeile gestartet.
In der Ger�teliste befindet sich ganz links in der Tabelle bei jedem Ger�t ein + Symbol. Hier�ber k�nnen Ger�te "aufgeklappt" werden, dann werden Kan�le sichtbar. Diese verf�gen ihrerseits wieder �ber ein + zum aufklappen, dann werden die Datenpunkte sichtbar. Analog dazu befinden sich auch in der Raum und Gewerkeliste diese Aufklapp-Buttons.
Der Tab Favoriten zeigt defaultm��ig nur die Favoriten des Users _USER1004 (bei mir der Admin) an - sollen hier die Favoriten eines anderen Users angezeigt werden muss die Variable favoriteUser in der Datei hq-webui.js entsprechend angepasst werden.

Changelog
=========

1.3.0
-----
* Als Erweiterung installierbar (nicht wie zuvor als Update)
* Tab Favoriten hinzugef�gt (favoritelist.cgi)
* jQuery UI Slider bei Datenpunkten (noch nicht ganz fertig)
* Tab Funk (xmlapi rssilist.cgi) hinzugef�gt
* Tab Script-Konsole hinzugef�gt (daf�r exec.cgi von http://homematic-forum.de/forum/viewtopic.php?f=31&t=7014 in xmlapi 1.2-hq6 integriert)
* Tab Info hinzugef�gt
* Tabs R�ume und Gewerke wieder entfernt
* hq-webui.js aufger�umt
* R�ume, Gewerke und Servicemeldungen voll in Ger�te�bersicht integriert
* Neue Spalten in Ger�teliste
* CDN auf googleapis.com umgestellt, jQuery UI css und img werden nun ebenfalls aus dem CDN geladen

1.2.3
-----
* Raum- und Gewerkeliste neu formatiert

1.2.2
-----
* Typos

1.2.1
-----
* jQuery Selektoren aufger�umt
* Fehler behoben der Select/Option bei Wertelisten verhindert hat
* True/False Select/Option beim editieren von Bool Datenpunkten
* Float-Werte bei Variablen und Datenpunkten auf 2 Nachkommastellen formatiert
* Timestamps formatiert
* Anzeige der Einheit beim Variablen editieren
* Ger�teliste neu formatiert

1.2.0
-----
* Neue Tabs R�ume und Gewerke
* R�ume und Gewerke werden unter Ger�te angezeigt

1.1.3
-----
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


Todo/Ideen
==========

* Tab Favoriten: Manueller Refresh
* Favoriten: Auswahlm�glichkeit f�r angezeigten User?
* Datenpunkte: Slider beim editieren fertigstellen
* Datenpunkte: angepasste Darstellung je nach Ger�tetyp?
* Favoriten: nicht bedienbare disablen
* Anzahl Servicemeldungen irgendwo prominent pr�sentieren?
* Addon statt Update!
* Refresh Button je Variable und Datenpunkt bzw Favoritenbereich (-> xmlapi state.cgi erweitern um M�glichkeit mehrere ise_id zu �bergeben?)
* Intelligenter und Ressourcenschonender Update-Mechanismus (-> xmlapi update.cgi brauchbar? state.cgi erweitern um M�glichkeit mehrere ise_id zu �bergeben?)
* Variablen vom Typ Zahl: beim Editieren gleich auf [0-9.]* und min/max pr�fen.?
* Auth?
* generate_img.sh Skript erweitern - automatisches minifizieren und mergen der .js und .css Dateien, automatisches entfernen der ccuUrl
* Programme aktivieren/deaktivieren? Ger�te sperren? Raumthermostat Modus setzen? Servicemeldungen best�tigen? (xmlapi erweiterung notwendig?)
* Icons - Datenpunkt-Typen, True/False, Ger�te-Typen, ...
* Verzicht auf xmlapi? komplett auf Remote Script und XML RPC umsteigen?
* Clientseitig Daten cachen, Settings speichern, ... (WebSQL?)?

Lizenz
======
GNU GPL v3