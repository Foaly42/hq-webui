HQ WebUI 2.0
============
Leichtgewichtiges und schnelles Webfrontend zur Bedienung der Homematic CCU.

Dieses WebUI ist als schnelle erg�nzende Oberfl�che f�r den Homematic-"Administrator" oder Entwickler gedacht, es ist _nicht_ das Ziel ein weiteres GUI f�r die allt�gliche Bedienung mit hohem "WAF" anzubieten.

Das HQ WebUI l�dt die ben�tigten jQuery Bibliotheken vom CDN ("Content Delivery Network") googleapis.com - so kann der Speicherplatz den die Bibliotheken auf der CCU belegen w�rden eingespart werden. Allerdings ist deshalb zur Benutzung ein funktionierender Web-Zugang erforderlich.

Getestet wird das HQ WebUI prim�r mit Google Chrome. Firefox und Safari Kompatibilit�t wird angestrebt. Opera und der Internet Explorer werden nicht von mir getestet. Vielleicht funktioniert es, vielleicht aber auch nicht...

Diese Software darf kostenfrei verwendet, modifiziert und weiterverbreitet werden, allerdings ohne jegliche Garantien, die Benutzung erfolgt auf eigenes Risiko. Bei einer Weiterverbreitung bitte dieses Readme beibehalten!

Allgemeines Feedback, Verbesserungsvorschl�ge, W�nsche und Fehlerberichte sind jederzeit willkommen!

Siehe auch diesen Foren-Thread: http://homematic-forum.de/forum/viewtopic.php?f=31&t=10559


Features
========
* schnelle Ladezeiten
* Anzeige von Ger�ten/Kan�len/Datenpunkten, Variablen, Programmen, diversen Informationen und dem Systemprotokoll
* Schreibender Zugriff auf Datenpunkte
* �ndern des Wertes eine Variable
* Starten von Programmen
* Favoritenansicht
* Editor mit Syntax-Highlighting und Auto-Vervollst�ndigung f�r Homematic Scripte, TCL Scripte, Bash Scripte, XML RPC, JSON RPC
* Direktes Ausf�hren der Scripte und RPC aus dem Editor, automatisches Speichern im "LocalStorage"
* Themes
* ...geplante Features siehe "Todo"


Installation
============

Download
--------
Die .tar.gz Datei zur Installation auf der CCU kann hier heruntergeladen werden:


Installation
------------

Die Datei hq-webui-(version).tar.gz wird als Zusatzsoftware auf der CCU installiert. Das HQ WebUI ist dann unter http://IP-Adresse-der-CCU/addons/hq/ui/ erreichbar.

*Hinweis: Die Nutzung ohne Installation auf der CCU (wie sie mit Version 1.x m�glich war) ist nicht mehr vorgesehen*

Bedienung
=========
Allgemein
---------
Links unten in jeder Tabellen-Ansicht befindet sich ein Reload-Button um die Daten neu zu laden. Bei den Systemprotokollen ist hier au�erdem ein L�sch-Button zu finden.
Die Ger�tedaten, die R�ume und die Gewerke werden lokal zwischengespeichert und lassen sich �ber den Reload-Button oben rechts aktualisieren. Der Reload-Button unten Links in der Ger�tetabelle l�dt lediglich die Status der Datenpunkte neu.

Favoriten
---------
Der Tab Favoriten zeigt defaultm��ig nur die Favoriten des Users _USER1004 (bei mir der Admin) an - sollen hier die Favoriten eines anderen Users angezeigt werden muss die Variable favoriteUser in der Datei config.js entsprechend angepasst werden.
Die Favoritenansicht ist fix zwei-spaltig und zeigt leider keine "Separatoren" an. Die einzelnen Favoritenbereiche lassen sich per Drag&Drop sortieren.

Ger�te und Variablen
--------------------
In der Ger�teliste befindet sich ganz links in der Tabelle bei jedem Ger�t ein + Symbol. Hier�ber k�nnen Ger�te "aufgeklappt" werden, dann werden Kan�le sichtbar. Diese verf�gen ihrerseits wieder �ber ein + zum aufklappen, dann werden die Datenpunkte sichtbar.
Datenpunkte und Variablen lassen sich einfach �ber Doppelklick auf die Tabellenzeile editieren.

Programme
---------
Programme werden �ber Doppelklick auf die Tabellenzeile gestartet.

Entwicklung
-----------
Beim Ausf�hren von JSON RPC muss die Eigenschaft _session_id nicht angebeben werden, sie wird automatisch erg�nzt.
Man sollte sich nicht auf die Speichern-Funktion des Script-Editors verlassen. Die Scripte werden im "LocalStorage" gespeichert, das ist nichts weiter als eine modernere Art Browser-Cookie und kann "verloren gehen".




Changelog
=========

2.0-alpha4
* Fehler behoben bei der Anzeige des AES Modus im Tab Funk
* Fehler behoben der zur mehrfachen Anzeige mancher Protokolleintr�ge gef�hrt hat
* Fehler beim l�schen des Protokolls behoben

2.0-alpha3
----------
* Diverse kleine Fehler behoben beim Laden der Favoriten und Ger�teansicht

2.0-alpha2
----------
* Fehler behoben der Ausf�hrung von HMScripts verhinderte

2.0-alpha1
---------
* JSON RPC Interface - Login, Session
* Editor: Ausf�hrung von XML und JSON RPC Abfragen
* Editor: Ausf�hrung von TCL Scripten
* Editor: Ausf�hrung von Shell Scripten
* Neue Verzeichnisstruktur (/www/addons/hq/api und /www/addons/hq/ui)
* Neuer Tab "Zentrale"
* Die auf der CCU vorhandenen Ger�te-Icons werden nun in der Ger�teliste angezeigt. (abschaltbar und um weitere Typen erweiterbar in config.js)
* kleine Style Korrekturen im Script-Editor
* Die Anzeige der Zeilennummer in der Fehlermeldung des Script-Editors funktioniert nun auch ohne Zugriff auf /var/log/messages. Konfigurierbar in config.js
* Hilfe und Doku Buttons hinzugef�gt

1.4.6
-----
* Die einzelnen Favoritenbereiche lassen sich nun via Drag&Drop sortieren

1.4.5
-----
* Sortierung der Rssilist nach RX/TX gefixt
* diverse Fehlerbehebungen im Script-Editor (der leider immer noch an einigen Stellen buggt)

1.4.4
-----
* Fehler behoben der bewirkte dass ein Grid �berfl�ssigerweise erneut die index.html geladen hat
* Autocompletion im Firefox erstmal deaktiviert - so ist die Scriptkonsole wenigstens benutzbar

1.4.3
-----
* Datenpunkt-Edit-Dialog �berarbeitet, Slider, Input und Radio verhalten sich nun so wie man es erwartet
* Neuer Punkt in der Info-Tabelle: CCU Batteriestatus
* Sortierung der Variablen in Scriptkonsole gefixt

1.4.2
-----
* Favoriten: langen und kurzen Tastendruck hinzugef�gt
* Favoriten: Es werden nun alle Datenpunkte dargestellt
* config.js �berarbeitet - nur noch ein Objekt im globalen Namensraum
* Servicemeldungen werden als Icon im Ger�te-Reiter angezeigt
* Alarmmeldungen werden als Icon im Variablen-Reiter angezeigt

1.4.1
-----
* separates Config-File: config.js im Unterordner js
* diverse Icons
* neue Spalten Sichtbar und Protokolliert in Variablen-Ansicht
* div. kleine �nderungen an den Grid-Formattern
* Favoriten werden jetzt zweispaltig angezeigt
* Navigation mit vor und zur�ck Buttons ist jetzt m�glich
* Fehler in hq-webui.js behoben der dazu f�hrte dass die Favoriten in Firefox nicht korrekt dargestellt wurden
* in der Favoritenansicht k�nnen nun Programme gestartet werden

1.4.0
-----
* lostorage.js eingebunden
* Ausgew�hltes Theme wird nun gespeichert
* Editor erweitert - man kann nun parallel mehrere Scripte bearbeiten
* Scripteditor speichert die Scripte nun automatisch ab (sp�testens wenn ein Script ausgef�hrt wird).
* devicelist.cgi, roomlist.cgi und functionlist.cgi werden nun lokal gecached, um den Cache zu leeren gibt es ein neuen Button rechts in der Toolbar


1.3.3
-----
* Fehler bei Parameter xmlapiPath gefixt...

1.3.2
-----
* Neue Scriptkonsole: Editor mit Syntax Highlight und Autocomplete, Debug-Modus mit Ausgabe der Fehlermeldungen aus /var/log/messages (ben�tigt xmlapi 1.2-hq9)
* Parameter xmlapiPath hinzugef�gt

1.3.1
-----
* diverse kleine Fehler behoben


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



Todo/Bekannte Fehler
====================
* Script-Editor buggt im Firefox. Fehler in edit_area/autocompletion.js - daher keine Autovervollst�ndigung mit Firefox
* Befindet man sich in der letzten Zeile eines Scriptes buggt die Autovervollst�ndigung (Anfangsbuchstabe erscheint doppelt)

Todo/Ideen
==========

* Soriertung nach ise_id fixen
* Intelligenter und Ressourcenschonender automatischer Refresh-Mechanismus (erstmal f�r den Favoriten-Tab) (XML-RPC Event Subscription mangels Javascript XML RPC Server schwer machbar? -> Polling via xmlrpc oder rega?, Nutzeraktivit�t erkennen? Erkennen welche Daten sichtbar sind und nur diese Updaten?)
* html/css - eine Menge Kleinigkeiten, automatisches Anpassen an Browser-Breite/H�he, ...
* Autovervollst�ndigungs und Syntaxhighlight Konfiguration f�r TCL und Shell Scripte vervollst�ndigen
* Editor-Ausgabe: Einbinden sch�ner (auf/zuklappbarer) Baumansichten f�r XML und JSON Ausgaben (jstree?)
* Hinzuf�gen/Entfernen von Kan�len zu Gewerken und R�umen (Kontextmen� auf Rechtsklick? Buttons in Tabellenansicht?)
* Anpassen an Fenstergr��e! Editor/Ausgabe/Variablen resizeable
* Favoriten des eingeloggten Users anzeigen
* Umbenennen von Programmen
* Umbenennen von Variablen/Ger�ten/Kan�len
* Programme anzeigen (Programme anlegen/�ndern??)
* �ndern von Variablentypen und Wertelisten
* Anlernmodus??
* Verkn�pfungen anzeigen. Anlegen/�ndern?
* Systemprotokoll bei Klick auf aktualisieren nicht komplett neu laden sondern nur neue Eintr�ge nachladen.
* ERROR-Datenpunkte als Servicemeldungen anzeigen
* Doppelklick auf Ger�t oder Kanal -> Subgrid aufklappen (als alternative zum Plus-Icon)
* Systemprotokoll: Standard-Sortierreihenfolge umkehren, neueste ganz oben
* �berfl�ssige Dateien im Verzeichnis edit_area entfernen
* generate_img.sh Skript erweitern - automatisches minifizieren und mergen der .js und .css Dateien, automatisches �ndern der js includes in index.html, automatisches "reinigen" der conf Datei?
* Mehr Infos f�r die Info-Tabelle: z.B.: Inventarscript integrieren, CCU FW-Version, Uptime, ...
* addInfo() soll einen bereits vorhandenen Eintrag �berschreiben statt ihn neu hinzuzuf�gen
* Scriptkonsole: ACE Editor statt area_edit?! Warum noch mal hatte ich mich gegen ACE entschieden?
* Favoriten: Variablen-Einheiten anzeigen
* Favoriten: Darstellung verschiedener Ger�te: z.B. TFK Offen/Zu statt Aus/An -> xmlapi favoritelist.cgi erweitern - ben�tige Ger�tetyp
* Tastenk�rzel f�r Buttons in Scriptkonsole
* rssilist: Einf�rben der RX/TX Werte. Einheit (dBm?) in �berschrift hinzuf�gen
* Icons - Zurodnung HM-Ger�te->Bilddateien vervollst�ndigen, Datenpunkt-Typen, True/False,
* Favoriten: nicht bedienbare disablen
* Refresh Button je Variable und Datenpunkt bzw Favoritenbereich (-> xmlapi state.cgi erweitern um M�glichkeit mehrere ise_id zu �bergeben?)
* Variablen vom Typ Zahl: beim Editieren gleich auf [0-9.]* und min/max pr�fen.?
* Programme aktivieren/deaktivieren
* Ger�te (ent)sperren
* Raumthermostat Modus setzen
* Dienste starten/stoppen (inetd (telnet), ftpd etc)
* CCU-Dateibrowser (Mit m�glichkeit eine Datei auszuf�hren bzw anzusehen/downzuloaden)







in HQ WebUI verwendete Software
===============================
* jQuery http://jquery.com/
* jQuery UI http://jqueryui.com/
* jqGrid http://www.trirand.com/blog/
* jQuery JSON View https://github.com/quickredfox/jquery-jsonview
* editarea http://www.cdolivet.com/editarea/
* lostorage.js https://github.com/js-coder/loStorage.js



Copyright, Lizenz, Bedingungen
==============================
HQ WebUI - lightweight and fast Webfrontend for the Homematic CCU

Copyright (c) 2012 hobbyquaker https://github.com/hobbyquaker

This software is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
Version 3 as published by the Free Software Foundation.

http://www.gnu.org/licenses/gpl.html

**deutsche �bersetzung**: http://www.gnu.de/documents/gpl.de.html

Please keep this Readme File when redistributing this Software!

This software comes without any warranty, use it at your own risk!