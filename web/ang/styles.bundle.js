webpackJsonp(["styles"],{

/***/ "../../../../../src/fonts/Geometria.otf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Geometria.ad7e0cab75cee35de4a2.otf";

/***/ }),

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n    font-family: \"Geometria\";\n    src: url(" + __webpack_require__("../../../../../src/fonts/Geometria.otf") + ");\n}\n\nh2 {\n    font-family: Geometria, Arial, Helvetica, sans-serif;\n}\n\nbody {\n    /* min-width: 400px; */\n    width: 100%;\n    /* min-width: 500px; */\n    max-width: 1200px;\n    margin: auto;\n    /* padding: 20px; */\n}\n\n.header {\n    width: 100%;\n    margin: 10px;\n    /* border-bottom: 1px solid #ccc;\n    padding-bottom: 10px; */\n}\n\n.with-delimiter {\n    padding-bottom: 60px;\n    border-bottom: solid 1px #ccc;\n}\n\n.header-contacts {\n    width: 60%;\n    float: left;\n}\n\n.header-image {\n    min-width: 200px;\n    max-width: 200px;\n}\n\n.header-contacts-row {\n    display: block;\n}\n\n.phone-number {\n    display: inline-block;\n    margin: 15px;\n    margin-left: 0;\n    color: #404040;\n}\n\n.header-link {\n    display: inline-block;\n    margin: 15px;\n    margin-left: 0;\n    color: blue;\n    text-decoration: none;\n    font-family: Geometria, Arial, Helvetica, sans-serif;\n}\n\n.header-link :active {\n    color: blue;\n}\n\n.body-pay-area {\n    width: 100%;\n    margin:10px;\n    margin-left: 0;\n    padding-top: 60px;\n}\n\n.pay-links {\n    display: inline-block;\n}\n\n.pay-link {\n    display: inline-block;\n    margin: 15px;\n    margin-left: 0;\n    font-family: Geometria, Arial, Helvetica, sans-serif;\n    font-size: 1.5em;\n    color: blue;\n    text-decoration: none;\n}\n\n.pay-link-current {\n    color: black;\n    pointer-events: none;\n}\n \n.pay-link:active {\n    color: blue;\n}\n\n.card-switch-area {\n    display: block;\n    padding: 10px;\n    padding-left: 0;\n}\n\n.active-card {\n    display: inline-block;\n    border: 3px solid #ccc;\n    border-radius: 5px;\n    font-family: Geometria, Arial, Helvetica, sans-serif;\n    font-size: 12pt;\n    padding: 5px;\n    background: #ccc;\n    margin: 5px;\n    margin-left: 0;\n}\n\n.inactive-card {\n    display: inline-block;\n    font-family: Geometria, Arial, Helvetica, sans-serif;\n    font-size: 12pt;\n    padding: 5px;\n    margin: 5px;\n    margin: 0;\n}\n\n.pay-area {\n    display: block;\n}\n\n.card-form {\n    display: inline-block;\n    border: solid 1px #eee;\n    border-radius: 7px;\n    width: 40%;\n    height: 250px;\n    max-width: 500px; \n    /* min-width: 430px;    */\n    background: #eee;\n    box-shadow: #404040 5px 5px 10px;\n    padding: 15px;\n    float: left;\n    margin-top: 30px;\n}\n\n.field-in-card {\n    display: block;\n    border: none;\n    border-bottom: solid 4px #ccc;\n    background: #eee !important;\n    outline: none;\n    height: 36px;\n    width: 70%;\n    font-size: 14pt;\n    font-family: Geometria, Arial, Helvetica, sans-serif;\n    margin: 30px;\n    box-shadow: none;\n}\n\n.date-cvc-field {\n    display: inline-block;\n    width: 25%;\n}\n\n.card-number :focus {\n    border-bottom-color: green;\n}\n\n.logos-row {\n    display: block;\n    float: right;\n    margin: 7px;\n}\n\n.card-logo {\n    width: 80px;\n    height: auto;\n    vertical-align: middle;\n    margin: 5px;\n}\n\n.right-form-block {\n    display: inline-block;\n    margin-left: 50px;\n    /* width: 40%; */\n    min-width: 430px;\n    /* height: 250px; */\n}\n\n\n.comments-right-block {\n    display: inline-block;\n    font-family: Geometria, Arial, Helvetica, sans-serif;\n    font-size: 12pt;\n    width: 25%;\n}\n\n.right-block-full-field {\n    display: block;\n}\n\n.field-right-block {\n    display: inline-block;\n    border: none;\n    border-bottom: solid 4px #ccc;\n    outline: none;\n    height: 36px;\n    width: 60%;\n    font-size: 14pt;\n    font-family: Geometria, Arial, Helvetica, sans-serif;\n    margin: 30px;\n    box-shadow: none;\n}\n\n.pay-form {\n    display: block;\n}\n\n.pay-button {\n    border: solid 2px black;\n    background: none;\n    padding: 10px;\n    font-family: Geometria, Arial, Helvetica, sans-serif;\n    font-size: 16pt;\n    cursor: pointer;\n    outline: none;\n}\n\n.pay-button:hover {\n    background-color: #ccc;\n}\n\n.pay-button:active {\n    background-color: #666;\n}\n\n.about-area {\n    display: block;\n    margin-top: 60px;\n    margin-bottom: 60px;\n}\n\n.about-block {\n    display: inline-block;\n    border: 1px solid #ccc;\n    width: 30%;\n    padding:10px;\n    margin: 5px;\n    margin-top: 15px;\n}\n\n.about-block-img {\n    display: block;\n    width: 100%;\n    height: 56.25%;\n}\n\n.about-block-caption {\n    font-family: Geometria, Arial, Helvetica, sans-serif;\n    font-size: 12pt;\n}\n\n.about-block-price {\n    display: block;\n    font-family: Geometria, Arial, Helvetica, sans-serif;\n    color: #444;\n\n}\n\n.footer-caption {\n    display: block;\n    width: 65%;\n    font-family: Geometria, Arial, Helvetica, sans-serif;\n    margin-top: 60px;\n}\n\n\n@media screen and (max-device-width: 930px) \n{\n    body {\n        width: 90%;\n        max-width: 100%;\n    }\n\n    .card-form {\n        display: block;\n        width: 90%;\n        /* max-width: 450px; */\n        max-width: none;\n        /* margin: 20px 20px 20px 20px; */\n        /* margin: 10px; */\n    }\n\n    .right-form-block {\n        display: block;\n        margin-left: 0;\n    }\n\n    .about-block {\n        display: block;\n        width: 80%;\n        margin: 7%;\n    }\n\n    .card-logo {\n        width: 10%;\n    }\n\n}\n\n@media screen and (max-device-width: 500px)\n{\n    .comments-right-block {\n        width: 100%;\n    }\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map