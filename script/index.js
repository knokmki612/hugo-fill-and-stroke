(()=>{function u(t){var c=[],a=t.createElement("x");function r(){requestAnimationFrame(function(){c.forEach(function(o){var n=[];[].forEach.call(t.querySelectorAll(o.scopeSelector),function(e){var s=[].indexOf.call(e.parentNode.children,e)+1,d=o.relativeSelectors.map(function(m){return o.scopeSelector+":nth-child("+s+") "+m}).join(),i=e.parentNode.querySelector(d);(o.isNot?!i:i)&&(n.push(e),a.innerHTML="<x "+o.attributeName+">",e.setAttributeNode(a.children[0].attributes[0].cloneNode()),t.documentElement.style.zoom=1,t.documentElement.style.zoom=null)}),o.nodes.forEach(function(e){n.indexOf(e)===-1&&(e.removeAttribute(o.attributeName),t.documentElement.style.zoom=1,t.documentElement.style.zoom=null)}),o.nodes=n})})}function l(o){try{[].forEach.call(o.cssRules||[],function(n){if(n.selectorText){var e=decodeURIComponent(n.selectorText.replace(/\\(.)/g,"$1")).match(/^(.*?)\[:(not-)?has\((.+?)\)\](.*?)$/);if(e){var s=":"+(e[2]?"not-":"")+"has("+encodeURIComponent(e[3]).replace(/%3A/g,":").replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/%2C/g,",")+")";c.push({rule:n,scopeSelector:e[1],isNot:e[2],relativeSelectors:e[3].split(/\s*,\s*/),attributeName:s,nodes:[]})}}else l(n)})}catch{}}[].forEach.call(t.styleSheets,l),r(),new MutationObserver(function(o){o.forEach(function(n){[].forEach.call(n.addedNodes||[],function(e){e.nodeType===1&&e.sheet&&l(e.sheet)}),[].push.apply(c,c.splice(0).filter(function(e){return e.rule.parentStyleSheet&&e.rule.parentStyleSheet.ownerNode&&t.documentElement.contains(e.rule.parentStyleSheet.ownerNode)})),r()})}).observe(t,{childList:!0,subtree:!0}),t.addEventListener("focus",r,!0),t.addEventListener("blur",r,!0),t.addEventListener("input",r)}u(document);(()=>{if(document.getElementsByClassName("twitter-tweet").length!==0)if(window.twttr)window.twttr.widgets.load();else{let t=document.createElement("script");t.defer=!0,t.src="https://platform.twitter.com/widgets.js",document.body.appendChild(t)}})();})();
