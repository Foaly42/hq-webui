HQ WebUI 2.0
============
Leichtgewichtiges erg�nzendes Webfrontend zur Administration der Homematic CCU und zur Entwicklung von Scripten.



Features
========
* schnelle Ladezeit
* geringere Belastung der CCU
* Durch Login gesch�tzt, sowohl im Frontend als auch im Backend (Die .cgi Dateien im API Verzeichnis sind im Gegensatz zur "xmlapi" z.B. ebenfalls durch Username und Passwort gesch�tzt)
* Editor mit Syntax-Highlighting und Auto-Vervollst�ndigung f�r Homematic Scripte, TCL Scripte, Bash Scripte, XML RPC, JSON RPC
* Direktes Ausf�hren der Scripte und RPC aus dem Editor, automatisches Speichern im "LocalStorage"
* Anzeige von Ger�ten/Kan�len/Datenpunkten, Variablen, Programmen
* Anzeige von diversen Informationen und dem Systemprotokoll, l�schen des Systemprotokolls
* Schreibender Zugriff auf Datenpunkte
* �ndern des Wertes eine Variable
* Starten, umbenennen und aktivieren/deaktivieren von Programmen
* Umbenennen von Ger�ten und Kan�len
* �bersichtliche Favoritenansicht
* Themes, jQuery UI basiert.
* ...geplante Features siehe "Todo"

Das HQ WebUI l�dt die ben�tigten jQuery Bibliotheken vom CDN ("Content Delivery Network") googleapis.com - so kann der Speicherplatz den die Bibliotheken auf der CCU belegen w�rden eingespart werden. Allerdings ist deshalb zur Benutzung ein funktionierender Web-Zugang erforderlich.

Getestet wird das HQ WebUI prim�r mit Google Chrome. Firefox und Safari Kompatibilit�t wird angestrebt. Opera und der Internet Explorer werden nicht von mir getestet. Vielleicht funktioniert es, vielleicht aber auch nicht...

Diese Software darf kostenfrei verwendet, modifiziert und weiterverbreitet werden, allerdings ohne jegliche Garantien, die Benutzung erfolgt auf eigenes Risiko. Bei einer Weiterverbreitung bitte dieses Readme beibehalten!

Allgemeines Feedback, Verbesserungsvorschl�ge, W�nsche und Fehlerberichte sind jederzeit willkommen!

Siehe auch diesen Foren-Thread: http://homematic-forum.de/forum/viewtopic.php?f=31&t=10559

Download
========
http://www.homematic-inside.de/software/download/item/hq-webui-addon


Installation
============
Die Datei hq-webui-(version).tar.gz wird als Zusatzsoftware auf der CCU installiert. Das HQ WebUI ist dann unter http://IP-Adresse-der-CCU/addons/hq/ui/ erreichbar.

*Hinweis: Die Nutzung ohne Installation auf der CCU (wie sie mit Version 1.x m�glich war) ist nicht mehr vorgesehen (wenn auch mit einigen Verrenkungen machbar)*

**Achtung bei Updates:** vor dem installieren die alte Version deinstallieren. Bitte nach der Installation den Browsercache leeren.

Bedienung
=========

Allgemein
---------
Links unten in jeder Tabellen-Ansicht befindet sich ein Reload-Button um die Daten neu zu laden. Bei den Systemprotokollen ist hier au�erdem ein L�sch-Button zu finden.
Die Ger�tedaten, die R�ume und die Gewerke werden lokal zwischengespeichert und lassen sich �ber den zweiten Reload-Button in der Ger�teansicht unten Links aktualisieren, der erste Reload-Button l�dt lediglich die Status der Datenpunkte neu.
Rechts oben befindet sich der Logout-Button, der Einstellungen-Button (in den Einstellungen kann das Theme gew�hlt werden und gespeicherte Login-Daten k�nnen gel�scht werden), sowie ein Hilfe-Button.
Eigene Themes k�nnen quasi ohne HTML/CSS hier "zusammengecklickt" werden: http://jqueryui.com/themeroller/

Favoriten
---------
Die Favoritenbereiche lassen sich per Drag&Drop sortieren, diese Einstellung wir automatisch im LocalStorage gespeichert. Unten Links befindet sich ein Refresh-Button.

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


Roadmap/Todo/Ideen
==================
Asap
----
* Verbuggte Favoritendarstellung wenn ein Favorite in mehreren Bereichen vorkommt.
* Session Fehler abfangen
* Bug fixen: Systemprotokoll wird unter Umst�nden nicht geladen
* Anzeige Protokolliert-Checkbox bei Ger�ten
* Zugeordnete Systemvariablen in Datenpunkt-Liste (Unter Ger�te/Kan�le) als Systemvariable erkenntlich machen.
* Tab Favoriten: stringtable_de.txt konsequent �berall verwenden, M�glichkeit schaffen via config.js einzelne Werte zu �berschreiben
* Tab Ger�te: Wahlweise �bersetzungen/Texte von Werten, Datenpunkten und Servicemeldungen anzeigen (Checkbox im Einstellungen-Dialog)
* addInfo() soll einen bereits vorhandenen Eintrag �berschreiben statt ihn neu hinzuzuf�gen
* Favoriten-Separatoren per config.js abschaltbar machen (dann kann man sie zum "Auff�llen" benutzen bei ungleichm��iger Spaltenverteilung)
* generate_img.sh Skript erweitern - automatisches minifizieren und mergen der .js und .css Dateien, automatisches �ndern der js includes in index.html, automatisches "reinigen" der conf Datei?
* ERROR-Datenpunkte als Servicemeldungen anzeigen


2.1
---
* Kan�le: Protokollierung aktivieren/deaktivieren
* Anlegen, l�schen und �ndern von Variablen
* Zuordnung von Variablen zu Kan�len setzen, l�schen
* Hinzuf�gen/Entfernen von Kan�len  Gewerken und R�umen
* Hinzuf�gen/�ndern/Entfernen von Gewerken und R�umen
* Ressourcebschonender Automatischer Refresh aller sichtbaren Datenpunkte, Variablen und Timestamps
* Automatische drosselung des Auto-Refresh-Intervall wenn User Idle oder Browser nicht sichtbar (http://stackoverflow.com/questions/1060008/is-there-a-way-to-detect-if-a-browser-window-is-not-currently-active)


2.2
---
* Programme anzeigen, anlegen, editieren, l�schen.
* Programme direkt aus dem Scripteditor heraus erzeugen
* TCL und Shellscripte aus Editor auf CCU Speichern
* Machbarkeit pr�fen: Anlegen/Editieren/L�schen von Cronjobs?
* CCU-Dateibrowser (Mit m�glichkeit eine Datei auszuf�hren bzw anzusehen/downzuloaden/upzuloaden)
* Dienste starten/stoppen (inetd (telnet), ftpd etc)
* Zusatzsoftware installieren (wenn m�glich optional ohne Zwangsreboot) und deinstallieren

2.3
---
* Hinzuf�gen/Entfernen/Umbenennen von Favoritenbereichen
* Hinzuf�gen/Entfernen von Kan�len, Variablen und Programmen zu Favoriten
* Favoriten per Drag & Drop sortieren, Favoriten konfigurieren (Ausrichtung, Titel


3.0
---
* Style, Nomenklatur, komplettes Refactoring
* Intern komplett vom xml auf json umstellen ("�berbleibsel" der xmlapi aus Version 1.x)


irgendwann
----------

* Nicht quadratische Ger�te-Icons
* Script-Editor buggt im Firefox. Fehler in edit_area/autocompletion.js - daher keine Autovervollst�ndigung mit Firefox
* Befindet man sich in der letzten Zeile eines Scriptes buggt die Autovervollst�ndigung (Anfangsbuchstabe erscheint doppelt)
* Editor-Ausgabe: Einbinden sch�ner (auf/zuklappbarer) Baumansichten f�r XML und JSON Ausgaben (Plugin ausw�hlen! http://freebiesdesign.com/7-best-jquery-treeview-plugins/)
* Systemprotokoll bei Klick auf aktualisieren nicht komplett neu laden sondern nur neue Eintr�ge nachladen.
* Raumthermostat Modus setzen
* Autovervollst�ndigungs und Syntaxhighlight Konfiguration f�r TCL und Shell Scripte vervollst�ndigen
* Ger�te (ent)sperren?
* Mehr Infos f�r die Info-Tabelle: z.B.: Inventarscript integrieren, CCU FW-Version, Uptime, ...
* Tastenk�rzel f�r Buttons in Scriptkonsole
* rssilist: Einf�rben der RX/TX Werte?
* Variablen vom Typ Zahl: beim Editieren gleich auf [0-9.]* und min/max pr�fen.?
* Komfortableres best�tigen von Servicemeldungen (noch eine extra Liste von Service-Meldungen im Zentrale-Tab?)
* Backup erstellen
* Reboot und Safe-Mode Reboot
* Firewallkonfiguration
* HMCompanion Integration mit komfortabler Auswahl von Graphen f�r Favoriten-Ansicht
* Ausbau des Tabs Funk

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