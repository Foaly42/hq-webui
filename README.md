HQ WebUI 2.0
============
Leichtgewichtiges und schnelles Webfrontend zur Bedienung der Homematic CCU.

Features
========
* schnelle Ladezeit
* geringere Belastung der CCU
* �bersichtliche Favoritenansicht
* Anzeige von Ger�ten/Kan�len/Datenpunkten, Variablen, Programmen
* Anzeige von diversen Informationen und dem Systemprotokoll, l�schen des Systemprotokolls
* Schreibender Zugriff auf Datenpunkte
* �ndern des Wertes eine Variable
* Starten, umbenennen und aktivieren/deaktivieren von Programmen
* Umbenennen von Ger�ten und Kan�len
* Editor mit Syntax-Highlighting und Auto-Vervollst�ndigung f�r Homematic Scripte, TCL Scripte, Bash Scripte, XML RPC, JSON RPC
* Direktes Ausf�hren der Scripte und RPC aus dem Editor, automatisches Speichern im "LocalStorage"
* Themes
* ...geplante Features siehe "Todo"

Das HQ WebUI l�dt die ben�tigten jQuery Bibliotheken vom CDN ("Content Delivery Network") googleapis.com - so kann der Speicherplatz den die Bibliotheken auf der CCU belegen w�rden eingespart werden. Allerdings ist deshalb zur Benutzung ein funktionierender Web-Zugang erforderlich.

Getestet wird das HQ WebUI prim�r mit Google Chrome. Firefox und Safari Kompatibilit�t wird angestrebt. Opera und der Internet Explorer werden nicht von mir getestet. Vielleicht funktioniert es, vielleicht aber auch nicht...

Diese Software darf kostenfrei verwendet, modifiziert und weiterverbreitet werden, allerdings ohne jegliche Garantien, die Benutzung erfolgt auf eigenes Risiko. Bei einer Weiterverbreitung bitte dieses Readme beibehalten!

Allgemeines Feedback, Verbesserungsvorschl�ge, W�nsche und Fehlerberichte sind jederzeit willkommen!

Siehe auch diesen Foren-Thread: http://homematic-forum.de/forum/viewtopic.php?f=31&t=10559



Installation
============


Installation
------------

Die Datei hq-webui-(version).tar.gz wird als Zusatzsoftware auf der CCU installiert. Das HQ WebUI ist dann unter http://IP-Adresse-der-CCU/addons/hq/ui/ erreichbar.

*Hinweis: Die Nutzung ohne Installation auf der CCU (wie sie mit Version 1.x m�glich war) ist nicht mehr vorgesehen*

**Achtung bei Updates:** vor dem installieren die alte Version deinstallieren. Bitte nach der Installation den Browsercache leeren.

Bedienung
=========
Allgemein
---------
Links unten in jeder Tabellen-Ansicht befindet sich ein Reload-Button um die Daten neu zu laden. Bei den Systemprotokollen ist hier au�erdem ein L�sch-Button zu finden.
Die Ger�tedaten, die R�ume und die Gewerke werden lokal zwischengespeichert und lassen sich �ber den zweiten Reload-Button in der Ger�teansicht unten Links aktualisieren, der erste Reload-Button l�dt lediglich die Status der Datenpunkte neu.

Favoriten
---------
Die einzelnen Favoritenbereiche lassen sich per Drag&Drop sortieren, diese Einstellung wir automatisch im LocalStorage gespeichert. Unten Links befindet sich ein Refresh-Button. Die Einstellungen Anzahl Spalten und Position Name (im originalen WebUI vorzunehmen) werden ausgewertet.

Ger�te und Variablen
--------------------
In der Ger�teliste befindet sich ganz links in der Tabelle bei jedem Ger�t ein + Symbol. Hier�ber k�nnen Ger�te "aufgeklappt" werden, dann werden Kan�le sichtbar. Diese verf�gen ihrerseits wieder �ber ein + zum aufklappen, dann werden die Datenpunkte sichtbar.
Datenpunkte und Variablen lassen sich einfach �ber Doppelklick auf die Tabellenzeile editieren.
Ger�te und Kan�le k�nnen �ber Doppelklick umbenannt werden.

Programme
---------
Programme k�nnen �ber einen Doppelklick auf die Tabellenzelle umbenannt und aktiviert/deaktiviert werden. Links in jeder Zeile befindet sich ein "Play-Button", hiermit k�nnen Programme gestartet werden.

Entwicklung
-----------
Beim Ausf�hren von JSON RPC muss der Parameter _session_id nicht angebeben werden, er wird automatisch mit der aktuellen Session-ID erg�nzt.
Man sollte sich nicht auf die Speichern-Funktion des Script-Editors verlassen. Die Scripte werden im "LocalStorage" gespeichert, das ist nichts weiter als eine modernere Art Browser-Cookie und kann "verloren gehen".

Changelog
=========
Siehe https://github.com/hobbyquaker/hq-webui/blob/master/CHANGELOG.md

Bekannte Fehler
===============
* Script-Editor buggt im Firefox. Fehler in edit_area/autocompletion.js - daher keine Autovervollst�ndigung mit Firefox
* Befindet man sich in der letzten Zeile eines Scriptes buggt die Autovervollst�ndigung (Anfangsbuchstabe erscheint doppelt)

Todo/Ideen/Roadmap
==================
2.0
---
* addInfo() soll einen bereits vorhandenen Eintrag �berschreiben statt ihn neu hinzuzuf�gen
* Auswahl Port bei Ausf�hrung von XML RPC
* ExecutionFailed Fehler bei Scriptausf�hrung auswerten
* Editor-Ausgabe: Einbinden sch�ner (auf/zuklappbarer) Baumansichten f�r XML und JSON Ausgaben (Plugin ausw�hlen! http://freebiesdesign.com/7-best-jquery-treeview-plugins/)
* Systemprotokoll bei Klick auf aktualisieren nicht komplett neu laden sondern nur neue Eintr�ge nachladen.
* ERROR-Datenpunkte als Servicemeldungen anzeigen
* generate_img.sh Skript erweitern - automatisches minifizieren und mergen der .js und .css Dateien, automatisches �ndern der js includes in index.html, automatisches "reinigen" der conf Datei?
* Logout umgestalten
* Session Timeout behandeln. Session Fehler abfangen

2.1
---
* Neue Favoritengruppen anlegen, l�schen, Favoriten hinzuf�gen, Favoriten per Drag&Drop sortieren
* Automatisches Refreshen aller sichtbaren Favoriten in einstellbaren Intervallen
* Automatisches deaktivieren des Auto-Refreshs wenn Browser nicht sichtbar (http://stackoverflow.com/questions/1060008/is-there-a-way-to-detect-if-a-browser-window-is-not-currently-active)

2.2
---
* Kan�le: Protokollierung aktivieren/deaktivieren
* Hinzuf�gen/Entfernen von Kan�len zu Gewerken und R�umen
* Anlegen, l�schen und �ndern von Variablen
* Hinzuf�gen/�ndern/Entfernen von Gewerken und R�umen

2.3
---
* Programme anzeigen, anlegen, editieren, l�schen.
* Programme direkt aus dem Scripteditor heraus erzeugen
* Dateien aus Editor auf CCU Speichern

2.4
---
* CCU-Dateibrowser (Mit m�glichkeit eine Datei auszuf�hren bzw anzusehen/downzuloaden/upzuloaden)
* Dienste starten/stoppen (inetd (telnet), ftpd etc)
* Zusatzsoftware installieren (wenn m�glich optional ohne Zwangsreboot) und deinstallieren


3.0
---
* Style, Nomenklatur, komplettes Refactoring
* Intern komplett vom xml auf json umstellen ("�berbleibsel" der xmlapi aus Version 1.x)


irgendwann
----------
* Raumthermostat Modus setzen
* Autovervollst�ndigungs und Syntaxhighlight Konfiguration f�r TCL und Shell Scripte vervollst�ndigen
* Machbarkeit pr�fen: Anlegen von Cronjobs?
* Ger�te (ent)sperren?
* Icons - Zurodnung HM-Ger�te->Bilddateien vervollst�ndigen (im Forum Benutzer bitten zu helfen), Datenpunkt-Typen, True/False,
* Mehr Infos f�r die Info-Tabelle: z.B.: Inventarscript integrieren, CCU FW-Version, Uptime, ...
* Tastenk�rzel f�r Buttons in Scriptkonsole
* rssilist: Einf�rben der RX/TX Werte?
* Variablen vom Typ Zahl: beim Editieren gleich auf [0-9.]* und min/max pr�fen.?
* Komfortableres best�tigen von Servicemeldungen (noch eine extra Liste von Service-Meldungen im Zentrale-Tab?)
* Backup erstellen
* Reboot und Safe-Mode Reboot
* Firewallkonfiguration

tendenziell nein
----------------
* Anlernmodus
* Direkte Verkn�pfungen Anzeigen/Anlegen/�ndern/L�schen? (machbar, aber zu gro�er Zeitaufwand)
* Scriptkonsole: ACE Editor statt area_edit?
* Backup zur�ckspielen
* Firmwareupdate




in HQ WebUI verwendete Software
===============================
* jQuery http://jquery.com/
* jQuery UI http://jqueryui.com/
* jqGrid http://www.trirand.com/blog/
* jQuery JSON View https://github.com/quickredfox/jquery-jsonview
* editarea http://www.cdolivet.com/editarea/
* lostorage.js https://github.com/js-coder/loStorage.js
* jQuery UI Multiselect Widget https://github.com/ehynds/jquery-ui-multiselect-widget



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