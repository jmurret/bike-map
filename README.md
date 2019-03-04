bike-map
========

https://jmurret.github.io/bike-map/

A map of on-demand bike vendors in cities around the world.  A simple POC to explore the capabilities of react-map-gl and deck.gl.

Uses the free api at api.citybik.es.  Really appreciate that they share this data.  

Steps to run:
--------------------------
1. Create .env.local file at project root.
2. Add `REACT_APP_MAPBOX_TOKEN=<your mapbox api key>` to this file and save it.  (this was bootstrapped form Create React App)
3.  `npm start`
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Notes:
--------------------------
-Some locations have a center point that is a little off with the default zoom level for the city.  Try a few and you will see.  Denver and Portland to name a few work really well.  
