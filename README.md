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
* Umbenennen von Ger�ten und Kan�len
* Favoritenansicht
* Editor mit Syntax-Highlighting und Auto-Vervollst�ndigung f�r Homematic Scripte, TCL Scripte, Bash Scripte, XML RPC, JSON RPC
* Direktes Ausf�hren der Scripte und RPC aus dem Editor, automatisches Speichern im "LocalStorage"
* Themes
* ...geplante Features siehe "Todo"


Installation
============


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
Ger�te und Kan�le k�nnen �ber Doppelklick umbenannt werden.

Programme
---------
Programme werden �ber Doppelklick auf die Tabellenzeile gestartet.

Entwicklung
-----------
Beim Ausf�hren von JSON RPC muss die Eigenschaft _session_id nicht angebeben werden, sie wird automatisch erg�nzt.
Man sollte sich nicht auf die Speichern-Funktion des Script-Editors verlassen. Die Scripte werden im "LocalStorage" gespeichert, das ist nichts weiter als eine modernere Art Browser-Cookie und kann "verloren gehen".

Changelog
=========
Siehe https://github.com/hobbyquaker/hq-webui/blob/master/CHANGELOG.md

Todo/Bekannte Fehler
====================
* Script-Editor buggt im Firefox. Fehler in edit_area/autocompletion.js - daher keine Autovervollst�ndigung mit Firefox
* Befindet man sich in der letzten Zeile eines Scriptes buggt die Autovervollst�ndigung (Anfangsbuchstabe erscheint doppelt)

Todo/Ideen/Roadmap
==================
asap
----
* ExecutionFailed Fehler bei Scriptausf�hrung auswerten
* html/css - eine Menge Kleinigkeiten, styles aus .js und .html entfernen, ...
* Gr��enanpassung Tab Ger�te
* Aufr�umen: console.log() entfernen, mehrfache verwendete jQuery-Selectoren, h�ssliche Bezeichner (Styleguide aufsetzen?)...
* Autovervollst�ndigungs und Syntaxhighlight Konfiguration f�r TCL und Shell Scripte vervollst�ndigen
* Editor-Ausgabe: Einbinden sch�ner (auf/zuklappbarer) Baumansichten f�r XML und JSON Ausgaben (Plugin ausw�hlen! http://freebiesdesign.com/7-best-jquery-treeview-plugins/)
* Systemprotokoll bei Klick auf aktualisieren nicht komplett neu laden sondern nur neue Eintr�ge nachladen.
* ERROR-Datenpunkte als Servicemeldungen anzeigen
* addInfo() soll einen bereits vorhandenen Eintrag �berschreiben statt ihn neu hinzuzuf�gen
* �berfl�ssige Dateien im Verzeichnis edit_area entfernen
* generate_img.sh Skript erweitern - automatisches minifizieren und mergen der .js und .css Dateien, automatisches �ndern der js includes in index.html, automatisches "reinigen" der conf Datei?

2.0
---
* Favoriten des eingeloggten Users anzeigen
* Intelligenter und Ressourcenschonender automatischer Refresh-Mechanismus (erstmal f�r den Favoriten-Tab) (XML-RPC Event Subscription mangels Javascript XML RPC Server nicht machbar? -> Polling via xmlrpc oder rega?, Nutzeraktivit�t erkennen? Erkennen welche Daten sichtbar sind und nur diese Updaten?)

2.1
---
* Anlegen, l�schen und �ndern von Variablen

2.2
---
* Hinzuf�gen/Entfernen von Kan�len zu Gewerken und R�umen (Kontextmen� auf Rechtsklick? Buttons in Tabellenansicht?)
* Hinzuf�gen/�ndern/Entfernen von Gewerken und R�umen


2.5
---
* Programme anzeigen, anlegen, editieren, l�schen. Programme aus dem Scripteditor heraus erzeugen

3.0
---
* Intern komplett vom xml auf json umstellen ("�berbleibsel" xmlapi)
* Auto-Refresh aller sichtbaren Variablen

irgendwann
----------
* Dienste starten/stoppen (inetd (telnet), ftpd etc)
* CCU-Dateibrowser (Mit m�glichkeit eine Datei auszuf�hren bzw anzusehen/downzuloaden)
* Einspielen von Zusatzsoftware ohne Zwangsreboot! (falls machbar...)
* Ger�te (ent)sperren?
* Icons - Zurodnung HM-Ger�te->Bilddateien vervollst�ndigen (im Forum Benutzer bitten zu helfen), Datenpunkt-Typen, True/False,
* Raumthermostat Modus setzen
* Mehr Infos f�r die Info-Tabelle: z.B.: Inventarscript integrieren, CCU FW-Version, Uptime, ...
* Tastenk�rzel f�r Buttons in Scriptkonsole
* rssilist: Einf�rben der RX/TX Werte?
* Favoriten: nicht bedienbare disablen (fraglich. Systemvariablen lassen sich im originalen UI ja leider nicht als Bedienbarer Favorit konfigurieren)
* Variablen vom Typ Zahl: beim Editieren gleich auf [0-9.]* und min/max pr�fen.?


eher nicht
----------
* Anlernmodus??
* Verkn�pfungen anzeigen. Anlegen/�ndern?
* Scriptkonsole: ACE Editor statt area_edit?! Warum noch mal hatte ich mich gegen ACE entschieden?





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