(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,n,t){e.exports=t(45)},45:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(20),i=t.n(o),c=t(7),s=t.n(c),l=t(15),u=t(8),p=t(9),d=t(11),h=t(10),f=t(12),v=t(5),m=t(6);function w(){var e=Object(v.a)(["\n  display: grid;\n  grid-template-columns: ",'px auto;\n  grid-template-areas: "sidebar main";\n']);return w=function(){return e},e}var b=m.a.div(w(),function(e){return e.sideBarWidth||480});function k(){var e=Object(v.a)(["\n  grid-area: sidebar;\n  height: 100vh;\n  overflow-y: scroll;\n  padding: 10px;\n"]);return k=function(){return e},e}var g=m.a.span(k());function x(){var e=Object(v.a)(["\n  grid-area: main;\n  height: 100vh;\n"]);return x=function(){return e},e}var O=m.a.span(x()),y=function(e){return a.a.createElement(b,{className:e.className},a.a.createElement(g,null,e.renderSideBar),a.a.createElement(O,null,e.renderMainContent))},j=t(14),A=t(32),E={network:"network",networks:"networks",none:"none"},C="#093",S="#FFB43F",I="#E33033",F={enter:13,upArrow:38,downArrow:40},B={viewport:{latitude:30.785164,longitude:0,zoom:1,bearing:0,pitch:0},style:"mapbox://styles/mapbox/light-v9",layers:[],mode:E.networks,network:null},N=function(){var e=Object(l.a)(s.a.mark(function e(n,t){var r,a,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.citybik.es").concat(n));case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,o=a&&a[t],e.abrupt("return",o||[]);case 8:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),V=function(){var e=Object(l.a)(s.a.mark(function e(){var n,t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("/v2/networks","networks");case 2:return n=e.sent,t=n.map(function(e){return D(e)}).sort(function(e,n){return e.search-n.search}),e.abrupt("return",t);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(s.a.mark(function e(n){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(n,"network");case 2:return t=e.sent,e.abrupt("return",D(t));case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),D=function(e){var n=e.location,t=Object(A.a)(e,["location"]);return Object(j.a)({},t,n,{search:"".concat(n.city,", ").concat(n.country," - ").concat(t.name)})},z=t(17),H=function(e){return e>=6?C:e>0?S:I},J={cursor:"pointer",fill:"#346F8F",stroke:"grey"},M=function(e){function n(){return Object(u.a)(this,n),Object(d.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){var e=this.props,n=e.size,t=void 0===n?20:n,r=e.onClick,o=e.data,i=e.mode===E.networks?J.fill:H(o.free_bikes),c=Object(j.a)({},J,{fill:i});return a.a.createElement("svg",{height:t,viewBox:"0 0 24 24",style:Object(j.a)({},c,{transform:"translate(".concat(-t/2,"px,").concat(-t,"px)")}),onClick:r},a.a.createElement("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"}))}}]),n}(r.PureComponent),R=function(e){function n(){return Object(u.a)(this,n),Object(d.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){var e=this.props,n=e.points,t=e.onPinClick,r=e.mode;return n?n.map(function(e,n){return a.a.createElement(z.b,{key:"".concat(n),longitude:e.longitude,latitude:e.latitude},a.a.createElement(M,{size:20,data:e,mode:r,onClick:function(){return t(e)}}))}):null}}]),n}(r.Component),K=t(31),Y=function(e){function n(e){var t;Object(u.a)(this,n),(t=Object(d.a)(this,Object(h.a)(n).call(this,e)))._onViewportChange=function(e){t.setState({viewport:e})},t._transitionToPosition=function(e){var n=Object(j.a)({},e,{transitionDuration:3e3,transitionInterpolator:new z.a,transitionEasing:K.a});t.setState({viewport:n})},t._onTransitionEnd=function(e){},t._handleClick=function(e){var n=t.props,r=n.mode,a=n.onNetworkSelected;r===E.networks&&a(e)};var r=t.props.networks;return t.initialState=Object(j.a)({},B,{data:r}),t.state=t.initialState,t}return Object(f.a)(n,e),Object(p.a)(n,[{key:"componentDidUpdate",value:function(e,n){if(e.network!==this.props.network){var t=this.props.network,r=t?Object(j.a)({},this.state.viewport,{longitude:t.longitude,latitude:t.latitude,zoom:12}):this.initialState.viewport;this._transitionToPosition(r)}}},{key:"render",value:function(){var e=this.props,n=e.token,t=e.mode,r=e.data,o=this.state,i=o.viewport,c=o.style;return a.a.createElement(z.c,Object.assign({},i,{mapStyle:c,width:"100%",height:"100%",maxPitch:85,onViewportChange:this._onViewportChange,mapboxApiAccessToken:n,onTransitionEnd:this._onTransitionEnd}),t!==E.none?a.a.createElement(R,{points:r,onPinClick:this._handleClick,mode:t}):null)}}]),n}(r.Component);function P(){var e=Object(v.a)(['\n  color: rgb(72, 72, 72);\n  height: 100%;\n  border-width: 1px;\n  border-style: solid;\n  border-color: rgb(235, 235, 235) ;\n  border-image: initial;\n  border-radius: 3px;\n  padding: 4px;\n  margin: 8px;\n\n  .station--name {\n    overflow-wrap: break-word;\n    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;\n    font-size: 16px;\n    font-weight: 800;\n    line-height: 1.44444em;\n    color: rgb(72, 72, 72);\n    margin: 0px;\n  }\n\n  .station--slots {\n    float: right;\n  }\n']);return P=function(){return e},e}var U=m.a.div(P());function Q(){var e=Object(v.a)(["\n  background-color: ",";\n  border: none;\n  color: white;\n  padding: 2px 4px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  margin: 4px 2px;\n  border-radius: 16px;\n  font-size: 10px;\n"]);return Q=function(){return e},e}var Z=m.a.div(Q(),function(e){return e.color}),L=function(e){var n=e.station;e.className;return a.a.createElement(U,null,a.a.createElement("div",{className:"station--name"},n.name),a.a.createElement(Z,{color:H(n.free_bikes),className:"station--bikes"},n.free_bikes," Available Bikes"),a.a.createElement(Z,{color:H(n.empty_slots),className:"station--slots"},n.empty_slots," Available Slots"))},T=function(e){return e.stations.map(function(e,n){return a.a.createElement("div",{key:n},a.a.createElement(L,{station:e}))})};function X(){var e=Object(v.a)(["\n  display:flex;\n"]);return X=function(){return e},e}function q(){var e=Object(v.a)(["\n  margin-right: 20px;\n  svg {\n    height: 48px;\n    path {\n      fill: #FF5A5F;\n    }\n  }\n"]);return q=function(){return e},e}function W(){var e=Object(v.a)(['\n  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;\n']);return W=function(){return e},e}var G=m.a.div(W()),$=m.a.div(q()),ee=m.a.div(X());function ne(){var e=Object(v.a)(["\n  display: inline-table;\n  list-style: none;\n  width: 360px;\n  transition: width 0.3s;\n  margin: auto;\n  position: relative;\n  max-height: 368px;\n  overflow-y: scroll;\n\n\n  li {\n    display: block;\n    background: white;\n    margin: 10px auto;\n    padding: 10px;\n    font-size: 1.2rem;\n    width: 100%;\n    border-radius: 2px;\n    margin-left: -40px;\n  }\n  li:hover, ul.options li.option-active {\n    cursor: pointer;\n    transition: 0.3s all;\n    background: whitesmoke;\n  }\n\n  li.option-active {\n    background: whitesmoke;\n  }\n"]);return ne=function(){return e},e}function te(){var e=Object(v.a)(['\n  height: 100%;\n  width: 24px;\n  margin-top: -10px;\n  position: absolute;\n  top: 50%;\n  left: 20px;\n\n  opacity: 0.6;\n  background-color: transparent;\n  border: 0;\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAACnElEQVR4AcXZsUsbYRjH8e+dh2s1SyAGJwMJuDj1BIcEhJQIOnTq5F+QOf0jIq79A7oFh7aYyVBEkaZDC3awECc1AUXRIqUQotfFocnjJe/dk+b9PKP65Md7z13ee3Uwk2SNHKmngs5TnbDLJQqjA+RYZ4OXuDzvkSYf+cAJ44fPAYFhHeAzVhlqBBGrRoax8KjSJYhRXap4KCVoECiqQQKFLC0CZbXIElOBOwJ9cUchzm2Y5QsveN4tdfY4o00HSDHHPKuUmOV5v/D5SSSJ0MXfIY+HBB55dkIvRIIIvJDR28dnFJ/9kHH0MFaVDehRxlSZnuxAFUMZunKQKBJFUQ4wXTIYqcmPZ5GoFmUEahjw5eJTJI6ivBD4jCS/csrEVZZfU4yQk5OPhrwjcoRygQ0GVdCQf73OUEfisaMkHk1HDJHkYeDX82jlBzo+kCSEyxruwDP/EK1DbsWnhHDFgNTpodWjLgY9NECKfnvoyS4p8wBngN5Z/ABtQK8dP0AH0OuYB5iMqfAAMque7HJtHmAOPdnlxjzAPHqyy5V5gFX0ZJfj8AAn9CvhoeVRol8zPMAuj/xrlhW0Vpg1D3ApflhGR3b4wTlDvI24i4u+w9y0uyVrM213U1qxuy2/Z8bui8m23VezgGW7L6cBLdIWXs9FBAsHFCLCJI9opFMKXEzkkEp/IbK0bEdI0LARQRzVWoigPKy+Z5tlWooIiuP6NhVmAEiPNwLkqHDEw5CGx2wyDQDRI8T7l80U19xwxTFNmpwzKM1nFsyeCw7jFymCAxYjrHDp8r9cUOCUYRZ4Bw6AxVV47QJYXIVXLliNsOSC1Qh/XLAa4ZuDmmIcH1l2AaytwhZfmaAkn/qOb7eYBofJekOJJX7znfccAvwFyB3OeNys7d4AAAAASUVORK5CYII=");\n']);return te=function(){return e},e}function re(){var e=Object(v.a)(["\n  height: 100%;\n  width: 24px;\n  margin-top: -24px;\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  opacity: 0.6;\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n\n  svg {\n    height: 12px;\n    width: 12px;\n    display: block;\n    fill: currentcolor;\n  }\n"]);return re=function(){return e},e}function ae(){var e=Object(v.a)(["\n  width: 100%;\n  text-align: right;\n  position: relative;\n\n  svg {\n    height: 18px;\n    width: 18px;\n    display: block;\n    fill: currentcolor;\n  }\n\n  input {\n    background-color: rgb(255, 255, 255);\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;\n    height: 48px;\n    transition: box-shadow 200ms ease-in 0s;\n    border-width: 1px;\n    border-style: solid;\n    border-color: rgb(235, 235, 235);\n    border-image: initial;\n    border-radius: 4px;\n    font-size: 20px;\n    width: 320px;\n    padding-left: 56px;\n  }\n  input:focus {\n    outline: none;\n  }\n"]);return ae=function(){return e},e}function oe(){var e=Object(v.a)([""]);return oe=function(){return e},e}var ie=m.a.div(oe()),ce=m.a.div(ae()),se=m.a.button(re()),le=m.a.div(te()),ue=m.a.ul(ne()),pe=function(e){var n=e.options,t=e.activeIndex,r=e.displayField,o=e.onOptionClick;return a.a.createElement(ue,null,n.map(function(e,n){var i;return n===t&&(i="option-active"),a.a.createElement("li",{className:i,key:n,onClick:o},e[r])}))},de=function(e){var n=e.onChange,t=e.onKeyDown,r=e.inputValue,o=e.disabled,i=e.onClear,c=e.placeholder;return a.a.createElement(ce,null,a.a.createElement("input",{type:"text",onChange:n,onKeyDown:t,value:r,disabled:o,placeholder:c}),a.a.createElement(le,null),o?a.a.createElement(se,{type:"button",onClick:i},a.a.createElement("svg",{viewBox:"0 0 24 24",focusable:"false"},a.a.createElement("path",{d:"m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22",fillRule:"evenodd"}))):null)},he=function(e){function n(e){var t;Object(u.a)(this,n),(t=Object(d.a)(this,Object(h.a)(n).call(this,e)))._onChange=function(e){var n=t.props,r=n.options,a=n.searchField,o=e.currentTarget.value,i=r.filter(function(e){return e[a].toLowerCase().indexOf(o.toLowerCase())>-1});t.setState({activeIndex:0,filteredOptions:i,showOptions:!0,inputValue:o})},t._onOptionClick=function(e){var n=t.state.filteredOptions[t.state.activeIndex];t._onSelect(n),t.setState({activeIndex:0,selectedOption:n,filteredOptions:[],showOptions:!1,inputValue:e.currentTarget.innerText})},t._onSelect=function(e){(0,t.props.onSelect)(e)},t._onClear=function(){t._onSelect(null),t.setState({activeIndex:0,selectedOption:null,filteredOptions:[],showOptions:!1,inputValue:""})},t._onKeyDown=function(e){var n=t.state,r=n.activeIndex,a=n.filteredOptions;if(e.keyCode===F.enter){var o=a[r];t._onSelect(o),t.setState({activeIndex:0,selectedOption:o,showOptions:!1,inputValue:a[r].search})}else if(e.keyCode===F.upArrow){if(0===r)return;t.setState({activeIndex:r-1})}else if(e.keyCode===F.downArrow){if(r===a.length-1)return;t.setState({activeIndex:r+1})}};var r=e.selectedOption;return t.state={activeIndex:0,selectedOption:r,filteredOptions:[],showOptions:!1,inputValue:r?r.search:""},t}return Object(f.a)(n,e),Object(p.a)(n,[{key:"componentDidUpdate",value:function(e,n){if(e.selectedOption!==this.props.selectedOption){var t=this.props.selectedOption;this.setState({selectedOption:t,inputValue:t?t.search:""})}}},{key:"render",value:function(){var e=this.state,n=e.activeIndex,t=e.filteredOptions,r=e.showOptions,o=e.inputValue,i=e.selectedOption,c=this.props,s=c.displayField,l=c.placeholder;return a.a.createElement(ie,null,a.a.createElement(de,{onChange:this._onChange,onKeyDown:this._onKeyDown,inputValue:o,disabled:!!i,onClear:this._onClear,placeholder:l}),r&&o?a.a.createElement(pe,{options:t,activeIndex:n,displayField:s,onOptionClick:this._onOptionClick}):null)}}]),n}(r.Component),fe=function(e){return a.a.createElement($,null,a.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"bicycle",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},a.a.createElement("path",{fill:"currentColor",d:"M512.509 192.001c-16.373-.064-32.03 2.955-46.436 8.495l-77.68-125.153A24 24 0 0 0 368.001 64h-64c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h50.649l14.896 24H256.002v-16c0-8.837-7.163-16-16-16h-87.459c-13.441 0-24.777 10.999-24.536 24.437.232 13.044 10.876 23.563 23.995 23.563h48.726l-29.417 47.52c-13.433-4.83-27.904-7.483-42.992-7.52C58.094 191.83.412 249.012.002 319.236-.413 390.279 57.055 448 128.002 448c59.642 0 109.758-40.793 123.967-96h52.033a24 24 0 0 0 20.406-11.367L410.37 201.77l14.938 24.067c-25.455 23.448-41.385 57.081-41.307 94.437.145 68.833 57.899 127.051 126.729 127.719 70.606.685 128.181-55.803 129.255-125.996 1.086-70.941-56.526-129.72-127.476-129.996zM186.75 265.772c9.727 10.529 16.673 23.661 19.642 38.228h-43.306l23.664-38.228zM128.002 400c-44.112 0-80-35.888-80-80s35.888-80 80-80c5.869 0 11.586.653 17.099 1.859l-45.505 73.509C89.715 331.327 101.213 352 120.002 352h81.3c-12.37 28.225-40.562 48-73.3 48zm162.63-96h-35.624c-3.96-31.756-19.556-59.894-42.383-80.026L237.371 184h127.547l-74.286 120zm217.057 95.886c-41.036-2.165-74.049-35.692-75.627-76.755-.812-21.121 6.633-40.518 19.335-55.263l44.433 71.586c4.66 7.508 14.524 9.816 22.032 5.156l13.594-8.437c7.508-4.66 9.817-14.524 5.156-22.032l-44.468-71.643a79.901 79.901 0 0 1 19.858-2.497c44.112 0 80 35.888 80 80-.001 45.54-38.252 82.316-84.313 79.885z"})))},ve=function(e){function n(){var e,t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(a)))).state={networks:null,mode:E.networks,data:null},t._fetchBikeNetworks=Object(l.a)(s.a.mark(function e(){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V();case 3:n=e.sent,t.setState({networks:n,data:n}),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}},e,null,[[0,7]])})),t._fetchBikeNetwork=function(){var e=Object(l.a)(s.a.mark(function e(n){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(n.href);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}},e,null,[[0,6]])}));return function(n){return e.apply(this,arguments)}}(),t._onNetworkSelect=function(){var e=Object(l.a)(s.a.mark(function e(n){var r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=4;break}t.setState({network:null,mode:E.networks,data:t.state.networks}),e.next=8;break;case 4:return e.next=6,t._fetchBikeNetwork(n);case 6:r=e.sent,t.setState({network:r,mode:E.network,data:r.stations});case 8:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t}return Object(f.a)(n,e),Object(p.a)(n,[{key:"componentDidMount",value:function(){this._fetchBikeNetworks()}},{key:"render",value:function(){var e=this.state,n=e.networks,t=e.mode,r=e.network,o=e.data;return n?a.a.createElement(G,null,a.a.createElement(y,{renderSideBar:a.a.createElement(a.a.Fragment,null,a.a.createElement(ee,null,a.a.createElement(fe,null),a.a.createElement(he,{options:n,selectedOption:r,searchField:"search",displayField:"search",onSelect:this._onNetworkSelect,placeholder:"Search for a city or network"})),r?a.a.createElement(T,{stations:r.stations}):null),renderMainContent:a.a.createElement(Y,{token:"pk.eyJ1Ijoiam11cnJldHhhY3RseSIsImEiOiJjanNkMnZxOHcwMTEwNDNxZzM5bG1hMHZ2In0.fXNRPQsfUYANL2FaL5qZYw",data:o,mode:t,network:r,onNetworkSelected:this._onNetworkSelect})})):null}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.a38c13de.chunk.js.map