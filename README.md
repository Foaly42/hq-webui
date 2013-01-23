HQ WebUI 2.1
============
Schnelles Webfrontend zur Administration der Homematic CCU und zur Entwicklung von Homematic-Scripten.


Features
========
* schnelle Ladezeit
* geringere Belastung der CCU
* Durch Login gesch�tzt, sowohl im Frontend als auch im Backend
* Editor mit Syntax-Highlighting und Auto-Vervollst�ndigung
* Editor unterst�tzt Homematic Script, TCL, Shell Script, XML RPC, JSON RPC
* Direktes Ausf�hren der Scripte und RPC aus dem Editor, automatisches Speichern im "LocalStorage"
* Anzeige von Ger�ten/Kan�len/Datenpunkten, Variablen, Programmen und der "RSSI-List" in �bersichtlichen Tabellen
* Anzeige von diversen Informationen und dem Systemprotokoll, l�schen des Systemprotokolls
* Schreibender Zugriff auf Datenpunkte
* �ndern des Wertes eine Variable, umbenennen von Variablen, editieren der Beschreibung, aktivieren/deaktiveren der Protokollierung
* Starten, umbenennen und aktivieren/deaktivieren von Programmen
* Umbenennen, Ger�ten und Kan�len
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
**Achtung bei Updates:** vor dem installieren die alte Version deinstallieren. Bitte nach der Installation den Browsercache leeren.

Die Datei hq-webui-(version).tar.gz wird als Zusatzsoftware auf der CCU installiert. Das HQ WebUI ist dann unter http://IP-Adresse-der-CCU/addons/hq/ui/ erreichbar.

*Hinweis: Die Nutzung ohne Installation auf der CCU (wie sie mit Version 1.x m�glich war) ist nicht mehr vorgesehen (wenn auch mit einigen Verrenkungen machbar)*


Bedienung
=========

Allgemein
---------
Links unten in jeder Tabellen-Ansicht befindet sich ein Reload-Button um die Daten neu zu laden. Bei den Systemprotokollen ist hier au�erdem ein L�sch-Button zu finden.
Alle Sichtbaren Datenpunkten werden st�ndig automatisch aktualisiert, die Reload-Buttons sind eigentlich nur dann zu verwenden wenn �nderungen ausserhalb des HQ WebUI vorgenommen wurden (z.B. neues Ger�t oder Programm, ...)
Im Einstellungsmen� (Zahnrad-Button oben rechts) kann man alle zwischengespeicherten Daten l�schen.
Rechts oben befindet sich der Logout-Button, der Einstellungen-Button (in den Einstellungen kann das Theme gew�hlt werden und gespeicherte Login-Daten k�nnen gel�scht werden), sowie ein Hilfe-Button.
Eigene Themes k�nnen quasi ohne HTML/CSS-Kenntnisse hier zusammengecklickt werden: http://jqueryui.com/themeroller/
Diverse Konfigurationsoptionen k�nnen in der Datei ui/js/config.js editiert werden.

Favoriten
---------
Die Favoritenbereiche lassen sich per Drag&Drop sortieren, diese Einstellung wir automatisch im LocalStorage gespeichert. Unten Links befindet sich ein Refresh-Button.


Variablen & Programme
---------------------
Variablen und Programme k�nnen �ber einfach-Klick markiert werden, dann werden unten Links 2 Buttons aktiv, einer zum �ndern des Variablen-Werts (bzw zum starten eines Programms), einer zum editieren des Namens und der Beschreibung.


Ger�te
------
In der Ger�teliste befindet sich ganz links in den Tabellen-Zeilen bei jedem Ger�t ein + Symbol. Hier�ber k�nnen Ger�te "aufgeklappt" werden, dann werden Kan�le sichtbar. Diese verf�gen ihrerseits wieder �ber ein + zum aufklappen, dann werden die Datenpunkte sichtbar.
Datenpunkte lassen sich �ber einen Button rechts in der jeweiligen Zeile editieren, hier k�nnen auch Servicemeldungen best�tigt werden. Ger�te und Kan�le k�nnen ebenfalls �ber den Button rechts umbenannt werden.

Ger�te/Servicemeldungen
-----------------------
Wenn Servicemeldungen vorhanden sind werden diese im Reiter Ger�te mit Anzahl angezeigt. Klappt man Ger�te und Kan�le mit aktiven Servicemeldungen auf kann man �ber den "Checkmark" Button die Servicemeldung best�tigen.


Entwicklung
-----------
Beim Ausf�hren von JSON RPC muss der Parameter _session_id nicht angebeben werden, er wird automatisch mit der aktuellen Session-ID erg�nzt.
Man sollte sich nicht auf die Speichern-Funktion des Script-Editors verlassen. Die Scripte werden im "LocalStorage" gespeichert, das ist nichts weiter als eine modernere Art Browser-Cookie und kann "verloren gehen".

Zentrale/Systemprotokoll
------------------------
Da das laden des Systemprotokolls die CCU u.U. f�r l�ngere Zeit unter Voll-Last setzt wird hier nicht automatisch geladen. Um das Systemprotokoll anzuzeigen muss also der Refresh-Button unten links angeklickt werden.

Changelog
=========
Siehe https://github.com/hobbyquaker/hq-webui/blob/master/CHANGELOG.md


Roadmap/Todo/Ideen
==================

2.2
---
* Neuer Dialog "Kanalauswahl" mit kleinem Grid
* Automatisches aktualisieren des Systemprotokolls
* �ndern von Variablen
* Anlegen und L�schen von Variablen
* Zuordnen von Variablen zu Kan�len
* Ger�te: Kan�le Protokollierung aktivieren/deaktivieren
* Anzeige Protokolliert-Checkbox bei Ger�ten von Kan�len kummulieren
* Beim Umbenennen und neu Anlegen auf bereits vorhandenen Namen pr�fen (Variablen, Programme, Ger�te, Kan�le)

2.3
---
* Hinzuf�gen/Entfernen von Kan�len zu/von Gewerken und R�umen
* Hinzuf�gen/�ndern/Entfernen von Gewerken und R�umen

2.4
---
* Umbennen von "Dateien" im Scripteditor
* Programme mit Script im "Dann-Teil" direkt aus dem Scripteditor heraus erzeugen
* Programme anzeigen, anlegen, editieren, l�schen.

2.5
---
* Hinzuf�gen/Entfernen/Umbenennen von Favoritenbereichen
* Hinzuf�gen/Entfernen von Kan�len, Variablen und Programmen zu Favoriten
* Sortieren von Favoriten per Drag & Drop

2.6
---
* Ger�te konfigurieren

3.0
---
* Refactoring, ordentliche Nomenklatur einf�hren, Perfomance optimieren, ...



irgendwann
----------
* Verlinkungen - Variablen und Programme die diese Variable nutzen, Programme die Ger�te beinhalten etc
* Benchmark-Funktion f�r Homematic-Scripte
* Webmatic Flags in Variablen-Editieren Fenster mittels Checkboxen setzen
* Tabellenheader anpassen (Sortierung, Filter - Selects)
* (r) in einer Variablenbeschreibung in Favoritendarstellung auswerten (nur-lesen, "Webmatic Style")
* TCL und Shellscripte aus Editor auf CCU Speichern
* http://homematic/ise/checkrega.cgi auswerten im Fehlerfall und entsprechende Meldung darstellen
* Session Fehler abfangen
* Automatisches erstellen eines Programms zum Start eines TCL/Shellscripts aus dem Editor (wahlweise system.exec oder cuxd)
* Kontextmen� in Grid-Ansichten
* Exportfunktionen (.csv)
* Scriptkonsole: Anderen (besseren) Editor einbauen - vermutlich ACE
* CCU-Dateibrowser (Mit m�glichkeit eine Datei auszuf�hren bzw anzusehen/downzuloaden/upzuloaden)
* neuer Tab "Kan�le"
* Tab Ger�te: Wahlweise �bersetzungen/Texte von Werten, Datenpunkten und Servicemeldungen anzeigen (Checkbox im Einstellungen-Dialog)
* Favoriten-Separatoren per config.js abschaltbar machen (dann kann man sie zum "Auff�llen" benutzen bei ungleichm��iger Spaltenverteilung)
* generate_img.sh Skript erweitern - automatisches minifizieren und mergen der .js und .css Dateien, automatisches �ndern der js includes in index.html, automatisches "reinigen" der conf Datei?
* Selbst-Update / Auto-Update des HQ WebUI
* Snippets f�r Editor
* Machbarkeit pr�fen: Anlegen/Editieren/L�schen von Cronjobs?
* Dienste starten/stoppen (inetd (telnet), ftpd etc)
* Zusatzsoftware installieren - optional ohne Zwangsreboot - und deinstallieren
* Style-Korrektur f�r nicht-quadratische Ger�te-Icons
* Editor-Ausgabe: Einbinden sch�ner (auf/zuklappbarer) Baumansichten f�r XML und JSON Ausgaben (Plugin ausw�hlen! http://freebiesdesign.com/7-best-jquery-treeview-plugins/)
* Mehr Infos f�r die Info-Tabelle: z.B.: Inventarscript integrieren, CCU FW-Version, Uptime, ...
* rssilist: Einf�rben der RX/TX Werte?
* Variablen vom Typ Zahl: beim Editieren gleich auf [0-9.]* und min/max pr�fen.?
* Backup erstellen
* Reboot und Safe-Mode Reboot
* Firewallkonfiguration
* Ausbau des Tabs Funk


tendenziell eher nicht
----------------------
* Ger�te anlernen, l�schen
* Direktverkn�pfungen anlegen/editieren/l�schen
* CUxD Administration
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