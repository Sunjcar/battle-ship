(()=>{"use strict";var t={p1Gameboard:document.querySelector(".p1-gameboard"),p2Gameboard:document.querySelector(".p2-gameboard"),p1Grid:document.querySelector(".p1-grid"),p2Grid:document.querySelector(".p2-grid"),infoContainer:document.querySelector(".info-container"),infoText:document.querySelector(".info-text"),autoPlaceBtn:document.querySelector(".fleet-autoplace"),playAgainBtn:document.querySelector(".play-again"),startBtn:document.querySelector(".start"),fleetContainer:document.querySelector(".fleet-container"),fleetDraggable:document.querySelector(".fleet-draggable"),fleetInfo:document.querySelector(".fleet-info")};const e=(n=function(t,e,n){return'<div class="grid-cell cell-'.concat(t,"-").concat(e," ").concat(n,"\" data-y='").concat(t,"' data-x='").concat(e,"'></div>")},(r=function(e){for(var n in e){var r=document.createElement("div");r.classList.add("ship","".concat(e[n].id,"-container")),r.setAttribute("draggable",!0),r.dataset.ship="".concat(e[n].id);for(var a=" ",i=0;i<e[n].length;i++)a+="<div class=".concat(e[n].id," data-index='").concat(i,"'></div>");r.insertAdjacentHTML("afterbegin",a),t.fleetDraggable.prepend(r)}})(),{renderGrid:function(t,e,r){!function(t){t.textContent=""}(t);for(var a=e.getBoard(),i=a.length,o="",l=0;l<i;l++)for(var u=0;u<i;u++){var c=a[l][u];null===c?c="":c.ship&&(c="human"===r?c.ship.id:""),o+=n(l,u,c)}t.insertAdjacentHTML("afterbegin",o)},renderFleet:r,autoPlace:function(){t.startBtn.classList.add("show"),t.fleetInfo.classList.add("hide"),t.fleetInfo.classList.remove("show"),t.fleetDraggable.textContent=""},startGame:function(){t.p1Gameboard.classList.toggle("grid-disabled"),t.p2Gameboard.classList.toggle("grid-disabled"),t.p2Gameboard.classList.toggle("hide"),t.p2Gameboard.classList.toggle("show"),t.startBtn.classList.remove("show"),t.autoPlaceBtn.classList.remove("show"),t.fleetContainer.classList.toggle("slide-out")},renderWinner:function(e){t.infoContainer.classList.toggle("show"),t.infoText.textContent="".concat(e.toUpperCase())},playAgain:function(){t.infoContainer.classList.toggle("show"),t.p1Gameboard.classList.toggle("grid-disabled"),t.p2Gameboard.classList.toggle("grid-disabled"),t.p2Gameboard.classList.toggle("hide"),t.p2Gameboard.classList.toggle("show"),t.fleetInfo.classList.toggle("hide"),t.fleetInfo.classList.toggle("show"),t.autoPlaceBtn.classList.add("show"),t.fleetContainer.classList.toggle("slide-in"),t.fleetContainer.classList.toggle("slide-out")}});var n,r;function a(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){u=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(u)throw o}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var o=["Sheldon","Kaiden","Destroyer","Submarine","Stealth","GoingMerry"],l={Sheldon:6,Kaiden:5,Destroyer:4,Submarine:3,Stealth:2,GoingMerry:1},u=function(t){var e={};return t.forEach((function(t){return e[t]=(r=n=t,a=l[n],i=Array(a).fill(null),o="horizontal",{id:r,length:a,hit:function(t){return i[t]="hit"},detectHit:function(){return i},Sunked:function(){return i.every((function(t){return"hit"===t}))},getDirection:function(){return o},changeDirection:function(){o="horizontal"===o?"vertical":"horizontal"}});var n,r,a,i,o})),e},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return Math.floor(Math.random()*t)},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return[c(t),c(t)]};function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,i=[],o=!0,l=!1;try{for(n=n.call(t);!(o=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(t){l=!0,a=t}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const g=function(){var t=Array(10).fill(null).map((function(){return Array(10).fill(null)})),e=[],n=function(t,e,n,r){var a=e+n,i=t;return"vertical"===r&&(a=e,i=t+n),[i,a]},r=function(r,i,o){var l=r.getDirection(),u=a(r.length,l,i,o);if(u){for(var c=0;c<r.length;c++){var s=d(n(i,o,c,l),2),f=s[0],g=s[1];t[f][g]={ship:r,index:c}}return e.push(r),u}return u},a=function(e,r,a,i){for(var o=[],l=0;l<e;l++){var u=d(n(a,i,l,r),2),c=u[0],s=u[1];if(!(c<10&&s<10))return!1;o.push(t[c][s])}return o.every((function(t){return null===t}))},i=new Audio("../dist/audio/sounds_explosion.wav"),l=new Audio("../dist/audio/sounds_splash.wav"),u=function t(e){var n=d(s(),2),a=n[0],i=n[1];Math.random()>.5&&e.changeDirection(),r(e,a,i)||t(e)};return{getBoard:function(){return t},placeShip:r,areAllShipsPlaced:function(){return e.length===o.length},receiveAttack:function(e,n){return null===t[e][n]?(t[e][n]="miss",l.play()):t[e][n].ship&&(t[e][n].ship.hit(t[e][n].index),t[e][n]="hit",i.play()),t[e][n]},areAllShipsSunk:function(){return e.every((function(t){return t.Sunked()}))},autoPlaceShip:function(t){for(var e in t)u(t[e])},reset:function(){t=Array(10).fill(null).map((function(){return Array(10).fill(null)})),e=[]}}};function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,i=[],o=!0,l=!1;try{for(n=n.call(t);!(o=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(t){l=!0,a=t}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=u(o),n=function(){return t},r=function(){return e},a=new Audio("../src/audio/sounds_explosion.wav"),i=new Audio("../src//audio/sounds_splash.wav"),l=function(t,e,n){return n.receiveAttack(t,e)},c=function t(e){var n=p(s(),2),r=n[0],o=n[1],l=e.getBoard()[r][o];"hit"===l||"miss"===l?t(e):(e.receiveAttack(r,o),a.pause(),i.pause())},d=function(){return e=u(o)};return{getID:n,getShips:r,attack:l,autoAttack:c,resetShips:d}};var y=function(n){var r,i=new Audio("../audio/Win.mp3"),o=new Audio("../audio/lose.wav"),l=v("human");r=v("computer");var u=g(),c=g(),s=function(n,r){var i,o,l=function(t){return o=Number(t.target.dataset.index)},u=function(t){i=t.target},c=function(a){var l=a.target,u=n.getShips()[i.dataset.ship],c="horizontal"===u.getDirection(),s=Number(l.dataset.y)-(c?0:o),d=Number(l.dataset.x)-(c?o:0);r.placeShip(u,s,d)&&(e.renderGrid(t.p1Grid,r,n.getID()),p(),i.parentElement.removeChild(i),r.areAllShipsPlaced()&&(t.startBtn.classList.add("show"),t.fleetInfo.classList.add("hide"),t.fleetInfo.classList.remove("show")))},s=function(t){return t.preventDefault()},d=function(t){return t.preventDefault()},f=function(){},g=function(){},p=function(){var e,n=document.querySelectorAll(".ship"),r=t.p1Grid.childNodes,i=a(n);try{for(i.s();!(e=i.n()).done;){var o=e.value;o.addEventListener("mousedown",l),o.addEventListener("dragstart",u),o.addEventListener("dragend",g)}}catch(t){i.e(t)}finally{i.f()}var p,h=a(r);try{for(h.s();!(p=h.n()).done;){var v=p.value;v.addEventListener("dragover",s),v.addEventListener("dragenter",d),v.addEventListener("dragleave",f),v.addEventListener("drop",c)}}catch(t){h.e(t)}finally{h.f()}};return{addDragAndDropEvenListeners:p}}(l,u),d=function(){e.renderFleet(l.getShips()),s.addDragAndDropEvenListeners(),document.querySelectorAll(".ship").forEach((function(t){t.addEventListener("dblclick",(function(t){var e=t.target.parentElement;l.getShips()[e.dataset.ship].changeDirection(),e.classList.toggle("vertical")}))}))},f=function n(a){var s=a.target;if(s.classList.contains("grid-cell")){var d=s.dataset.y,f=s.dataset.x,g=c.getBoard()[d][f];if("miss"!==g&&"hit"!==g&&(l.attack(d,f,c),r.autoAttack(u),p()),u.areAllShipsSunk()||c.areAllShipsSunk()){var h="";u.areAllShipsSunk()?(h="Computer wins!",o.play()):c.areAllShipsSunk()&&(h="You win!",i.play()),t.p2Grid.removeEventListener("click",n),e.renderWinner(h)}}},p=function(){e.renderGrid(t.p1Grid,u,l.getID()),e.renderGrid(t.p2Grid,c,r.getID())};return{renderGrids:p,renderFleet:d,autoPlace:function(){u.reset(),u.autoPlaceShip(l.getShips()),p(),e.autoPlace()},startGame:function(){"human"===r.getID&&t.p1Grid.addEventListener("click",f),t.p2Grid.addEventListener("click",f),"computer"===r.getID()&&c.autoPlaceShip(r.getShips()),e.startGame()},playAgain:function(){l.resetShips(),r.resetShips(),u.reset(),c.reset(),p(),e.playAgain(),d()},winSound:i}}();y.renderGrids(),y.renderFleet(),t.autoPlaceBtn.addEventListener("click",(function(t){y.autoPlace()})),t.startBtn.addEventListener("click",(function(t){y.startGame()})),t.playAgainBtn.addEventListener("click",(function(t){y.playAgain(),y.winSound.pause()}))})();