/**
 *      Konfigurations-Datei f�r das HQ WebUI
 *
 *      https://github.com/hobbyquaker
 */

// Hier die URL der CCU eintragen (z.B.: 'http://172.16.23.3')
// Wird das HQ WebUI auf der CCU installiert kann diese Variable leer bleiben ('')
var ccuUrl =                '';

// Pfad zur xmlapi
var xmlapiPath =            "/config/xmlapi";

// Der User dessen Favoriten angezeigt werden
// http://ccu/config/xmlapi/favoritelist.cgi aufrufen um nachzusehen welche User verf�gbar sind
var favoriteUsername =      "_USER1004";

// Hier k�nnen verschiedene Optionen f�r alle Grids vorgegeben werden
var gridWidth =             1024;
var gridHeight =            490;
var gridRowList =           [20,50,100,500];    // Auswahl Anzahl angezeigter Eintr�ge
var gridRowNum =            100;                // Standardm��ige Anzahl angezeigter Eintr�ge

// jQuery UI Theme
var themeUrl =              "http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/themes/";
var defaultTheme =          "overcast";
var themeSuffix =           "/jquery-ui.css";
