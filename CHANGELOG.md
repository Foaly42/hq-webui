Changelog
=========

2.2-beta1
----------
* Zeitpunkt des letzten Refreshs wird angezeigt
* Mit Kan�len verkn�pfte Variablen k�nnen nun auch �ber einen Button in der Datenpunkt-Tabelle editiert werden
* Variablen/Programme/Ger�te/Kan�le: Beim Umbenennen wird nun gepr�ft ob Name bereits verwendet wird und ob Name g�ltig ist
* Diverse Style-Anpassungen und Fehlerbehebungen
* Debug-Ausgaben entfernt


2.2-alpha4
----------
* In den Suchfiltern muss die Enter-Taste nun nicht mehr benutzt werden
* Dialog Kanalauswahl implementiert - Variablen k�nnen nun Kan�len zugeordnet werden

2.2-alpha3
----------
* Variablen: �ndern vervollst�ndigt, Fehler behoben
* Variablen: Neue Spalte "Kanalzuordnung"
* Variablen: Kanalzuordnung kann nun entfernt werden. Zuordnungen neu anlegen/�ndern fehlt noch

2.2-alpha2
----------
* Kanalzuordnungen bleiben beim editieren von Variablen nun erhalten
* Variablen: Hinzuf�gen vervollst�ndigt, Fehler behoben


2.2-alpha1
----------

Achtung!!! Beim �ndern von Variablen/Alarmen wird eine evtl. bestehende Kanalzuordnung gel�scht!

* Variablen: l�schen
* Variablen: �ndern von Alarmen
* Variablen: �ndern von Variablen des Typs Logikwert und Zahl
* Variablen: Hinzuf�gen von Alarmen und Variablen des Typs Logikwert und Zahl

2.1.0
-----
* Favoriten: Fehler behoben bei Keymatic-�ffnen

2.1-beta1
---------
* Favoriten: Fehler behoben bei Tastern
* Servicemeldungen: Fehler behoben bei Anzeige Alarm-Ausl�se-Zeitpunkt
* Systemprotokoll neu aufgebaut

2.1-alpha10
-----------
* Anzeige der Servicemeldungen in der Ger�te-, Kan�le- und Datenpunkttabelle
* Fehler bei Anzeige Anzahl Servicemeldungen behoben
* Editieren- und Servicemeldung-Best�tigen-Button in Datenpunkt-Tabelle implementiert
* Umbenennen-Button bei Ger�ten und Kan�len implementiert
* Favoriten: Fehler behoben beim editieren von Variablen des Typs Werteliste
* config.js: Aktualisierungsintervall-Faktor auf 4 ge�ndert. Entspricht circa 20% Last auf der Logikschicht und f�hrt in der Praxis zu Aktualisierungsintervallen zwischen 1,2 und 5 Sekunden.
* Variablen/Programme: Editieren von Name und Beschreibung, Programme aktiv/inaktiv, Variablen Protokollieren

2.1-alpha9
----------
* Fehler behoben beim Refresh von Ger�ten/Kan�len/Datenpunkten
* Favoriten-Aktualisierung vervollst�ndigt
* CCU-Anfragen die l�nger als 1s dauern werden signalisiert durch einen dickeren doppel-Pfeil (oben rechts)
* Servicemeldungen werden nun korrekt im Reiter Ger�te signalisiert (mit Anzahl)

2.1-alpha8
----------
* Fehler behoben bei Autorefresh der auftrat wenn Zeilenumbr�chen und Sonderzeichen in Zeichenketten-Variablen waren


2.1-alpha7
----------
* Anzahl der ausgel�sten Alarm-Variablen wird nun im Reiter Variablen angezeigt
* Beim �ndern einer Variable wird die Ansicht sofort aktualisiert
* Favoriten: Slider, Radiobuttons und Variablen-Inputs werden nun automatisch aktualisiert

2.1-alpha6
----------
* Verlinkungen auf andere Zusatzsoftware (CUxD, Webmatic, QA)
* Kleine Styleanpassungen (Abst�nde Buttons oben rechts, Abst�nde Tab-Reiter)
* Styleanpassungen Ger�teicons (Zentriert, Hintergrundfarbe #fff)
* Button Cache l�schen hinzugef�gt im Einstellungs-Dialog
* Diverse Fehler beim bef�llen der Info-Tabelle behoben, addInfo() �berschreibt nun einen bereits vorhandenen Eintrag in der Info-Tabelle statt ihn neu hinzuzuf�gen


2.1-alpha5
----------
* Diverse neue Buttons und �nderungen an der Ger�te-Tabelle (noch Baustelle)
* Neuer Dialog "Variable konfigurieren" (noch Baustelle)
* Neuer Dialog Programme editieren (Name und Beschreibung �ndern, aktivieren/deaktivieren)
* Debug-Ausgabe in Browser-Konsole �ber config.js aktivierbar
* Diverse Fehler beim Umbenennen von Ger�ten/Kan�len und Setzen von Werten behoben

2.1-alpha4
----------
* Buttons unten links disabled
* Fehler bei der Darstellung von Favoriten-Datenpunkten behoben (danke Micha602)
* Integration der AL-Datenpunkte
* Diverse neue Buttons und �nderungen an der Ger�te-Tabelle (noch Baustelle)
* Ger�te: eigene Spalte f�r Icons


2.1-alpha3
----------
* Variablen und Programme Tabelle umgebaut, neue Buttons unten links

2.1-alpha2
----------
* Anzeige des Refreshs in den Tabellen-�berschriften

2.1-alpha1
----------
* Automatischer Refresh-Mechanismus (Variablen und Programme). Dynamische Refreshzeiten, siehe auch config.js
* Kleine HTML/CSS-�nderungen bei der Favoritenansicht
* Fehler behoben bei Darstellung der Favoriten (Formatierung Float-Variablen hat Scriptabbruch verursacht.

2.0.6
-----
* Cache f�r Favoriten, Variablen, Programme, Status
* Anzeige des Zeitpunkts der letzten Aktualisierung bei Favoriten und allen Tabellen
* Fehlerhafte Verwendung von State() statt Value() bei Abfrage der Ger�teliste entfernt. M�glicherweise Ursache f�r CCU Abst�rze die zwei User berichtet haben
* Systemprotokoll umgebaut und (vorl�ufig) auf maximal 1000 Eintr�ge begrenzt (um ReGaHss Abst�rze wegen zu langer Scriptlaufzeit zu verhindern...) Ordentliche L�sung folgt.

2.0.4
-----
* Fehler beim neu-einloggen mit gespeicherten User/Passwort behoben
* Anzeige "Bitte warten" hinzugef�gt w�hrend Session erneuert wird (kriegt man eigentlich nur kurz zu Gesicht wenn die CCU unter hoher Last steht)
* Favoriten: Darstellungsfehler behoben wenn ein Favorit in mehreren Bereichen vorkommt (3-fache Anzeige von Buttons und Icons)
* Favoriten: Anzeige des Datenpunkt-Namens erfolgt nun analog zum originalen WebUI
* Favoriten: Anpassung f�r CUxD Ger�t EM1000 (Anzahl Dezimalstellen �ber config.js konfigurierbar)
* Favoriten: Fehler behoben bei Darstellung Wetterstation (fehlerhafte formatfunction f�r Windrichtungen in config.js vorerst auskommentiert)
* Ger�te: Typ und m�gliche Operationen (lesen=r,schreiben=w,event=e) auf Datenpunkten werden angezeigt
* Fehler beim abfragen von Servicemeldungen behoben
* Ger�te: nur noch schreibbare Datenpunkte �ffnen auf Doppelklick ein editier-Dialog

2.0.3
-----
* Editor Autovervollst�ndigung/Syntax-Highlight - Homematic-Script um einige Schl�sselw�rter erweitert
* config.js aufger�umt und hqConf.dpDetails[type].formatfunction hinzugef�gt - hier�ber k�nnen Datenpunkt-Werte beliebig f�r die Favoritenanischt formatiert werden
* formatfunction f�r Windrichtung hinzugef�gt, weitere kleine Korrekturen f�r die Wetterstation
* Favoriten An/Aus bzw Auf/Zu Button neben Slidern bei Datenpunkttyp LEVEL
* Favoriten - KeyMatic Anpassungen


2.0.2
-----
* Ger�te Anzeige des HssType von Kan�len
* Favoriten Datenpunkt Namen und Werte werden nun aus config/stringtable_de.txt gelesen
* xmlapi Versionsabfrage entfernt
* setState nun via XML RPC statt �ber ReGa. Bringt ein paar Millisekunden Perfomancevorteil, insbesondere wenn die ReGa anderweitig besch�ftigt ist.
* Fehler behoben Darstellung von �berfl�ssigem Slider bei virtuellen RF Tasten
* Fehler behoben nach Logout blieben unter Umst�nden Slider-Kn�pfe sichtbar

2.0.1
-----
* Zuordnung Ger�te -> Icons vervollst�ndigt (Danke DrTob!)
* Fehlermeldung wenn Scriptfehler nicht in /var/log/messages gefunden wurde angepasst
* ExecutionFailed Fehler bei Scriptausf�hrung wird ausgewertet
* Button zum editieren eines Variablen-Wertes (zus�tzlich zum Doppelklick)


2.0.0
-----
* Fehler behoben bei Werte-Bezeichner Drehgriff-Kontakt
* Favoriten, Fehler behoben beim �ndern der Browsergr��e und beim ersten Laden
* Entwicklung XML RPC bei Ausf�hrung erscheint nun Men� f�r den Zielport
* Session Refresh alle 4 Minuten

2.0-beta5
---------
* Favoriten/Variablen Wertebezichner f�r Logikwerte werden nun angezeigt
* Variablen Beschreibung wird angezeigt
* Favoriten weitere kleine Verbesserungen und Fehlerbehebungen
* Alarmicon bei Servicemeldungen durch Sprechblasen-Icon ersetzen
* neues kleines Icon oben rechts. Wird immer eingeblendet wenn CCU Kommunikation stattfindet
* Fehler beim Editieren von Alarmvariablen behoben
* Logout umgestaltet


2.0-beta4
---------
* Favoriten diverse Detailverbesserungen HTML/CSS
* jQuery UI select und input, Plugin Multiselect hinzugef�gt
* Favoriten Spaltenanzahl "automatisch" wird nun sinnvoll dargestellt
* Favoriten Ausrichtung links/zentriert wird nun sinnvoll dargestellt
* Favoriten Datenpunktformatierung und Formatierung f�r Datenpunkt State in Abh�ngigkeit vom Ger�t hinzugef�gt. Konfigurierbar in config.js

2.0-beta3
---------
* Favoriten diverse Detailverbesserungen HTML/CSS
* Favoriten ge�nderter HTML Aufbau

2.0-beta2
---------
* Fehler behoben Ausrichtung der id nach inline-Edit
* Performance-Optimierung beim Laden der Ger�teliste
* verschiedene �nderungen an Tabellen- und Spaltenbreiten
* Favoriten passen sich nun auch in der H�he dem Browserfenster an
* Favoriten "Separatoren" werden angezeigt
* Favoriten des eingeloggten Users werden nun angezeigt (hqConf.favoriteUsername entf�llt damit)
* Favoriten Fehler behoben bei Anzeige des Namens von verkn�pften Variablen
* Favoriten Einstellung Namens-Position links/oben wird ausgewertet


2.0-beta1
---------
* Funk: Einheit dBm bei RX/TX hinzugef�gt
* Zus�tzliche Spalte f�r Buttons bei Programme und Variablen
* Programme Play-Button hinzugef�gt
* Aufr�umaktion (mehrfach verwendete jQuery Selektoren)
* Fehler behoben beim Laden der Sortierung der Favoriten-Bereiche der dazu gef�hrt hat das die Favoriten nicht mehr bedienbar waren
* Namens�nderung von Kanal 0 unterbunden
* Button f�r manuellen Refresh der Favoritenansicht hinzugef�gt
* �berfl�ssige Dateien im Verzeichnis edit_area entfernt


2.0-alpha6
----------
* Umlaut-Workaround in hmscript.cgi eingebaut.
* Programm-Namen und Beschreibungen sind editierbar, Programme k�nnen aktiviert und deaktiviert werden
* Darstellung passt sich nun an beliebige Fenstergr��en an
* Favoriten-Ger�st neu aufgebaut mit Tabelle - stellt jetzt die in der CCU konfigurierte Anzahl an Spalten dar
* HTML <img> Tags in Zeichenketten-Variablen werden nun im Tab Variablen escaped und im Tab Favoriten angezeigt


2.0-alpha5
----------
* Umbennen von Ger�ten und Kan�len (via Doppelklick)
* Soriertung nach ise_id gefixt
* Fehler behoben bei der Anzeige von Wertelisten/Werten
* Systemprotokoll: Sortierreihenfolge umgedreht, neueste Eintr�ge nun ganz oben
* Ger�te: Falsch beschriftete Reload-Buttons korrigiert
* Zentrale: Grid-Gr��e Protokoll und Infos angepasst
* Favoriten: Icon-Anzeige f�r T�r-Fenster-Kontakte und Drehgriff
* Favoriten: Anzeige der Einheit von Systemvariablen
* Fehler behoben beim L�schen des Systemprotokolls


2.0-alpha4
----------
* Fehler behoben bei der Anzeige des AES Modus im Tab Funk
* Fehler behoben der zur mehrfachen Anzeige mancher Protokolleintr�ge gef�hrt hat
* Fehler beim l�schen des Protokolls behoben
* Alle XML-API Aufrufe durch JSON RPC oder Remote TCL Scripts ersetzt, das HQ WebUI kann ab sofort ohne XML-API genutzt werden

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

