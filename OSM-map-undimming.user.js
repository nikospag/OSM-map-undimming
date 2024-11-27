// ==UserScript==
// @name         Remove map dimming in dark mode for OpenStreetMap
// @version      1.0
// @description  Remove map dimming in dark mode for OpenStreetMap
// @author       nikospag
// @match        https://www.openstreetmap.org/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
    @media(prefers-color-scheme: dark) {
        .leaflet-tile-container, .leaflet-tile {
            filter:brightness(1) !important
        }
    }
`);
