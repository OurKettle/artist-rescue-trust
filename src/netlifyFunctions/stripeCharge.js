(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./stripeCharge.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/dotenv/lib/main.js":
/*!*****************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/dotenv/lib/main.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* @flow */
/*::

type DotenvParseOptions = {
  debug?: boolean
}

// keys and values from src
type DotenvParseOutput = { [string]: string }

type DotenvConfigOptions = {
  path?: string, // path to .env file
  encoding?: string, // encoding of .env file
  debug?: string // turn on logging for debugging purposes
}

type DotenvConfigOutput = {
  parsed?: DotenvParseOutput,
  error?: Error
}

*/

const fs = __webpack_require__(/*! fs */ "fs")
const path = __webpack_require__(/*! path */ "path")

function log (message /*: string */) {
  console.log(`[dotenv][DEBUG] ${message}`)
}

const NEWLINE = '\n'
const RE_INI_KEY_VAL = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/
const RE_NEWLINES = /\\n/g
const NEWLINES_MATCH = /\n|\r|\r\n/

// Parses src into an Object
function parse (src /*: string | Buffer */, options /*: ?DotenvParseOptions */) /*: DotenvParseOutput */ {
  const debug = Boolean(options && options.debug)
  const obj = {}

  // convert Buffers before splitting into lines and processing
  src.toString().split(NEWLINES_MATCH).forEach(function (line, idx) {
    // matching "KEY' and 'VAL' in 'KEY=VAL'
    const keyValueArr = line.match(RE_INI_KEY_VAL)
    // matched?
    if (keyValueArr != null) {
      const key = keyValueArr[1]
      // default undefined or missing values to empty string
      let val = (keyValueArr[2] || '')
      const end = val.length - 1
      const isDoubleQuoted = val[0] === '"' && val[end] === '"'
      const isSingleQuoted = val[0] === "'" && val[end] === "'"

      // if single or double quoted, remove quotes
      if (isSingleQuoted || isDoubleQuoted) {
        val = val.substring(1, end)

        // if double quoted, expand newlines
        if (isDoubleQuoted) {
          val = val.replace(RE_NEWLINES, NEWLINE)
        }
      } else {
        // remove surrounding whitespace
        val = val.trim()
      }

      obj[key] = val
    } else if (debug) {
      log(`did not match key and value when parsing line ${idx + 1}: ${line}`)
    }
  })

  return obj
}

// Populates process.env from .env file
function config (options /*: ?DotenvConfigOptions */) /*: DotenvConfigOutput */ {
  let dotenvPath = path.resolve(process.cwd(), '.env')
  let encoding /*: string */ = 'utf8'
  let debug = false

  if (options) {
    if (options.path != null) {
      dotenvPath = options.path
    }
    if (options.encoding != null) {
      encoding = options.encoding
    }
    if (options.debug != null) {
      debug = true
    }
  }

  try {
    // specifying an encoding returns a string instead of a buffer
    const parsed = parse(fs.readFileSync(dotenvPath, { encoding }), { debug })

    Object.keys(parsed).forEach(function (key) {
      if (!Object.prototype.hasOwnProperty.call(process.env, key)) {
        process.env[key] = parsed[key]
      } else if (debug) {
        log(`"${key}" is already defined in \`process.env\` and will not be overwritten`)
      }
    })

    return { parsed }
  } catch (e) {
    return { error: e }
  }
}

module.exports.config = config
module.exports.parse = parse


/***/ }),

/***/ "../../node_modules/qs/lib/formats.js":
/*!****************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/qs/lib/formats.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var util = __webpack_require__(/*! ./utils */ "../../node_modules/qs/lib/utils.js");

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = util.assign(
    {
        'default': Format.RFC3986,
        formatters: {
            RFC1738: function (value) {
                return replace.call(value, percentTwenties, '+');
            },
            RFC3986: function (value) {
                return String(value);
            }
        }
    },
    Format
);


/***/ }),

/***/ "../../node_modules/qs/lib/index.js":
/*!**************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/qs/lib/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "../../node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "../../node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "../../node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "../../node_modules/qs/lib/parse.js":
/*!**************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/qs/lib/parse.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "../../node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = options.decoder(part.slice(pos + 1), defaults.decoder, charset, 'value');
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
            val = val.split(',');
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "../../node_modules/qs/lib/stringify.js":
/*!******************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/qs/lib/stringify.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "../../node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "../../node_modules/qs/lib/formats.js");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = obj.join(',');
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key') : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key');
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value'))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (isArray(obj)) {
            pushToArray(values, stringify(
                obj[key],
                typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        } else {
            pushToArray(values, stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        }
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "../../node_modules/qs/lib/utils.js":
/*!**************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/qs/lib/utils.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),

/***/ "../../node_modules/stripe/lib/Error.js":
/*!******************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/Error.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * StripeError is the base error from which all other more specific Stripe errors derive.
 * Specifically for errors returned from Stripe's REST API.
 */
class StripeError extends Error {
  constructor(raw = {}) {
    super(raw.message);
    this.type = this.constructor.name;

    this.raw = raw;
    this.rawType = raw.type;
    this.code = raw.code;
    this.doc_url = raw.doc_url;
    this.param = raw.param;
    this.detail = raw.detail;
    this.headers = raw.headers;
    this.requestId = raw.requestId;
    this.statusCode = raw.statusCode;
    this.message = raw.message;

    this.charge = raw.charge;
    this.decline_code = raw.decline_code;
    this.payment_intent = raw.payment_intent;
    this.payment_method = raw.payment_method;
    this.setup_intent = raw.setup_intent;
    this.source = raw.source;
  }

  /**
   * Helper factory which takes raw stripe errors and outputs wrapping instances
   */
  static generate(rawStripeError) {
    switch (rawStripeError.type) {
      case 'card_error':
        return new StripeCardError(rawStripeError);
      case 'invalid_request_error':
        return new StripeInvalidRequestError(rawStripeError);
      case 'api_error':
        return new StripeAPIError(rawStripeError);
      case 'authentication_error':
        return new StripeAuthenticationError(rawStripeError);
      case 'rate_limit_error':
        return new StripeRateLimitError(rawStripeError);
      case 'idempotency_error':
        return new StripeIdempotencyError(rawStripeError);
      case 'invalid_grant':
        return new StripeInvalidGrantError(rawStripeError);
      default:
        return new GenericError('Generic', 'Unknown Error');
    }
  }
}

// Specific Stripe Error types:

/**
 * CardError is raised when a user enters a card that can't be charged for
 * some reason.
 */
class StripeCardError extends StripeError {}

/**
 * InvalidRequestError is raised when a request is initiated with invalid
 * parameters.
 */
class StripeInvalidRequestError extends StripeError {}

/**
 * APIError is a generic error that may be raised in cases where none of the
 * other named errors cover the problem. It could also be raised in the case
 * that a new error has been introduced in the API, but this version of the
 * Node.JS SDK doesn't know how to handle it.
 */
class StripeAPIError extends StripeError {}

/**
 * AuthenticationError is raised when invalid credentials are used to connect
 * to Stripe's servers.
 */
class StripeAuthenticationError extends StripeError {}

/**
 * PermissionError is raised in cases where access was attempted on a resource
 * that wasn't allowed.
 */
class StripePermissionError extends StripeError {}

/**
 * RateLimitError is raised in cases where an account is putting too much load
 * on Stripe's API servers (usually by performing too many requests). Please
 * back off on request rate.
 */
class StripeRateLimitError extends StripeError {}

/**
 * StripeConnectionError is raised in the event that the SDK can't connect to
 * Stripe's servers. That can be for a variety of different reasons from a
 * downed network to a bad TLS certificate.
 */
class StripeConnectionError extends StripeError {}

/**
 * SignatureVerificationError is raised when the signature verification for a
 * webhook fails
 */
class StripeSignatureVerificationError extends StripeError {}

/**
 * IdempotencyError is raised in cases where an idempotency key was used
 * improperly.
 */
class StripeIdempotencyError extends StripeError {}

/**
 * InvalidGrantError is raised when a specified code doesn't exist, is
 * expired, has been used, or doesn't belong to you; a refresh token doesn't
 * exist, or doesn't belong to you; or if an API key's mode (live or test)
 * doesn't match the mode of a code or refresh token.
 */
class StripeInvalidGrantError extends StripeError {}

module.exports.generate = StripeError.generate;
module.exports.StripeError = StripeError;
module.exports.StripeCardError = StripeCardError;
module.exports.StripeInvalidRequestError = StripeInvalidRequestError;
module.exports.StripeAPIError = StripeAPIError;
module.exports.StripeAuthenticationError = StripeAuthenticationError;
module.exports.StripePermissionError = StripePermissionError;
module.exports.StripeRateLimitError = StripeRateLimitError;
module.exports.StripeConnectionError = StripeConnectionError;
module.exports.StripeSignatureVerificationError = StripeSignatureVerificationError;
module.exports.StripeIdempotencyError = StripeIdempotencyError;
module.exports.StripeInvalidGrantError = StripeInvalidGrantError;


/***/ }),

/***/ "../../node_modules/stripe/lib/ResourceNamespace.js":
/*!******************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/ResourceNamespace.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ResourceNamespace allows you to create nested resources, i.e. `stripe.issuing.cards`.
// It also works recursively, so you could do i.e. `stripe.billing.invoicing.pay`.

function ResourceNamespace(stripe, resources) {
  for (const name in resources) {
    const camelCaseName = name[0].toLowerCase() + name.substring(1);

    const resource = new resources[name](stripe);

    this[camelCaseName] = resource;
  }
}

module.exports = function(namespace, resources) {
  return function(stripe) {
    return new ResourceNamespace(stripe, resources);
  };
};

module.exports.ResourceNamespace = ResourceNamespace;


/***/ }),

/***/ "../../node_modules/stripe/lib/StripeMethod.basic.js":
/*!*******************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/StripeMethod.basic.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const stripeMethod = __webpack_require__(/*! ./StripeMethod */ "../../node_modules/stripe/lib/StripeMethod.js");

module.exports = {
  create: stripeMethod({
    method: 'POST',
  }),

  list: stripeMethod({
    method: 'GET',
    methodType: 'list',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{id}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '{id}',
  }),

  // Avoid 'delete' keyword in JS
  del: stripeMethod({
    method: 'DELETE',
    path: '{id}',
  }),
};


/***/ }),

/***/ "../../node_modules/stripe/lib/StripeMethod.js":
/*!*************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/StripeMethod.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const utils = __webpack_require__(/*! ./utils */ "../../node_modules/stripe/lib/utils.js");
const makeRequest = __webpack_require__(/*! ./makeRequest */ "../../node_modules/stripe/lib/makeRequest.js");
const makeAutoPaginationMethods = __webpack_require__(/*! ./autoPagination */ "../../node_modules/stripe/lib/autoPagination.js")
  .makeAutoPaginationMethods;

/**
 * Create an API method from the declared spec.
 *
 * @param [spec.method='GET'] Request Method (POST, GET, DELETE, PUT)
 * @param [spec.path=''] Path to be appended to the API BASE_PATH, joined with
 *  the instance's path (e.g. 'charges' or 'customers')
 * @param [spec.urlParams=[]] Array of required arguments in the order that they
 *  must be passed by the consumer of the API. Subsequent optional arguments are
 *  optionally passed through a hash (Object) as the penultimate argument
 *  (preceding the also-optional callback argument
 * @param [spec.encode] Function for mutating input parameters to a method.
 *  Usefully for applying transforms to data on a per-method basis.
 * @param [spec.host] Hostname for the request.
 */
function stripeMethod(spec) {
  return function(...args) {
    const callback = typeof args[args.length - 1] == 'function' && args.pop();

    spec.urlParams = utils.extractUrlParams(
      this.createResourcePathWithSymbols(spec.path || '')
    );

    const requestPromise = utils.callbackifyPromiseWithTimeout(
      makeRequest(this, args, spec, {}),
      callback
    );

    if (spec.methodType === 'list') {
      const autoPaginationMethods = makeAutoPaginationMethods(
        this,
        args,
        spec,
        requestPromise
      );
      Object.assign(requestPromise, autoPaginationMethods);
    }

    return requestPromise;
  };
}

module.exports = stripeMethod;


/***/ }),

/***/ "../../node_modules/stripe/lib/StripeResource.js":
/*!***************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/StripeResource.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const http = __webpack_require__(/*! http */ "http");
const https = __webpack_require__(/*! https */ "https");
const path = __webpack_require__(/*! path */ "path");

const utils = __webpack_require__(/*! ./utils */ "../../node_modules/stripe/lib/utils.js");
const {
  StripeConnectionError,
  StripeAuthenticationError,
  StripePermissionError,
  StripeRateLimitError,
  StripeError,
  StripeAPIError,
} = __webpack_require__(/*! ./Error */ "../../node_modules/stripe/lib/Error.js");

const defaultHttpAgent = new http.Agent({keepAlive: true});
const defaultHttpsAgent = new https.Agent({keepAlive: true});

// Provide extension mechanism for Stripe Resource Sub-Classes
StripeResource.extend = utils.protoExtend;

// Expose method-creator & prepared (basic) methods
StripeResource.method = __webpack_require__(/*! ./StripeMethod */ "../../node_modules/stripe/lib/StripeMethod.js");
StripeResource.BASIC_METHODS = __webpack_require__(/*! ./StripeMethod.basic */ "../../node_modules/stripe/lib/StripeMethod.basic.js");

StripeResource.MAX_BUFFERED_REQUEST_METRICS = 100;
const MAX_RETRY_AFTER_WAIT = 60;

/**
 * Encapsulates request logic for a Stripe Resource
 */
function StripeResource(stripe, deprecatedUrlData) {
  this._stripe = stripe;
  if (deprecatedUrlData) {
    throw new Error(
      'Support for curried url params was dropped in stripe-node v7.0.0. Instead, pass two ids.'
    );
  }

  this.basePath = utils.makeURLInterpolator(
    this.basePath || stripe.getApiField('basePath')
  );
  this.resourcePath = this.path;
  this.path = utils.makeURLInterpolator(this.path);

  if (this.includeBasic) {
    this.includeBasic.forEach(function(methodName) {
      this[methodName] = StripeResource.BASIC_METHODS[methodName];
    }, this);
  }

  this.initialize(...arguments);
}

StripeResource.prototype = {
  path: '',

  // Methods that don't use the API's default '/v1' path can override it with this setting.
  basePath: null,

  initialize() {},

  // Function to override the default data processor. This allows full control
  // over how a StripeResource's request data will get converted into an HTTP
  // body. This is useful for non-standard HTTP requests. The function should
  // take method name, data, and headers as arguments.
  requestDataProcessor: null,

  // Function to add a validation checks before sending the request, errors should
  // be thrown, and they will be passed to the callback/promise.
  validateRequest: null,

  createFullPath(commandPath, urlData) {
    return path
      .join(
        this.basePath(urlData),
        this.path(urlData),
        typeof commandPath == 'function' ? commandPath(urlData) : commandPath
      )
      .replace(/\\/g, '/'); // ugly workaround for Windows
  },

  // Creates a relative resource path with symbols left in (unlike
  // createFullPath which takes some data to replace them with). For example it
  // might produce: /invoices/{id}
  createResourcePathWithSymbols(pathWithSymbols) {
    return `/${path
      .join(this.resourcePath, pathWithSymbols || '')
      .replace(/\\/g, '/')}`; // ugly workaround for Windows
  },

  // DEPRECATED: Here for backcompat in case users relied on this.
  wrapTimeout: utils.callbackifyPromiseWithTimeout,

  _timeoutHandler(timeout, req, callback) {
    return () => {
      const timeoutErr = new TypeError('ETIMEDOUT');
      timeoutErr.code = 'ETIMEDOUT';

      req._isAborted = true;
      req.abort();

      callback.call(
        this,
        new StripeConnectionError({
          message: `Request aborted due to timeout being reached (${timeout}ms)`,
          detail: timeoutErr,
        }),
        null
      );
    };
  },

  _responseHandler(req, callback) {
    return (res) => {
      let response = '';

      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        response += chunk;
      });
      res.once('end', () => {
        const headers = res.headers || {};
        // NOTE: Stripe responds with lowercase header names/keys.

        // For convenience, make Request-Id easily accessible on
        // lastResponse.
        res.requestId = headers['request-id'];

        const requestEndTime = Date.now();
        const requestDurationMs = requestEndTime - req._requestStart;

        const responseEvent = utils.removeNullish({
          api_version: headers['stripe-version'],
          account: headers['stripe-account'],
          idempotency_key: headers['idempotency-key'],
          method: req._requestEvent.method,
          path: req._requestEvent.path,
          status: res.statusCode,
          request_id: res.requestId,
          elapsed: requestDurationMs,
          request_start_time: req._requestStart,
          request_end_time: requestEndTime,
        });

        this._stripe._emitter.emit('response', responseEvent);

        try {
          response = JSON.parse(response);

          if (response.error) {
            let err;

            // Convert OAuth error responses into a standard format
            // so that the rest of the error logic can be shared
            if (typeof response.error === 'string') {
              response.error = {
                type: response.error,
                message: response.error_description,
              };
            }

            response.error.headers = headers;
            response.error.statusCode = res.statusCode;
            response.error.requestId = res.requestId;

            if (res.statusCode === 401) {
              err = new StripeAuthenticationError(response.error);
            } else if (res.statusCode === 403) {
              err = new StripePermissionError(response.error);
            } else if (res.statusCode === 429) {
              err = new StripeRateLimitError(response.error);
            } else {
              err = StripeError.generate(response.error);
            }
            return callback.call(this, err, null);
          }
        } catch (e) {
          return callback.call(
            this,
            new StripeAPIError({
              message: 'Invalid JSON received from the Stripe API',
              response,
              exception: e,
              requestId: headers['request-id'],
            }),
            null
          );
        }

        this._recordRequestMetrics(res.requestId, requestDurationMs);

        // Expose res object
        Object.defineProperty(response, 'lastResponse', {
          enumerable: false,
          writable: false,
          value: res,
        });
        callback.call(this, null, response);
      });
    };
  },

  _generateConnectionErrorMessage(requestRetries) {
    return `An error occurred with our connection to Stripe.${
      requestRetries > 0 ? ` Request was retried ${requestRetries} times.` : ''
    }`;
  },

  _errorHandler(req, requestRetries, callback) {
    return (error) => {
      if (req._isAborted) {
        // already handled
        return;
      }
      callback.call(
        this,
        new StripeConnectionError({
          message: this._generateConnectionErrorMessage(requestRetries),
          detail: error,
        }),
        null
      );
    };
  },

  // For more on when and how to retry API requests, see https://stripe.com/docs/error-handling#safely-retrying-requests-with-idempotency
  _shouldRetry(res, numRetries, maxRetries) {
    // Do not retry if we are out of retries.
    if (numRetries >= maxRetries) {
      return false;
    }

    // Retry on connection error.
    if (!res) {
      return true;
    }

    // The API may ask us not to retry (e.g., if doing so would be a no-op)
    // or advise us to retry (e.g., in cases of lock timeouts); we defer to that.
    if (res.headers && res.headers['stripe-should-retry'] === 'false') {
      return false;
    }
    if (res.headers && res.headers['stripe-should-retry'] === 'true') {
      return true;
    }

    // Retry on conflict errors.
    if (res.statusCode === 409) {
      return true;
    }

    // Retry on 500, 503, and other internal errors.
    //
    // Note that we expect the stripe-should-retry header to be false
    // in most cases when a 500 is returned, since our idempotency framework
    // would typically replay it anyway.
    if (res.statusCode >= 500) {
      return true;
    }

    return false;
  },

  _getSleepTimeInMS(numRetries, retryAfter = null) {
    const initialNetworkRetryDelay = this._stripe.getInitialNetworkRetryDelay();
    const maxNetworkRetryDelay = this._stripe.getMaxNetworkRetryDelay();

    // Apply exponential backoff with initialNetworkRetryDelay on the
    // number of numRetries so far as inputs. Do not allow the number to exceed
    // maxNetworkRetryDelay.
    let sleepSeconds = Math.min(
      initialNetworkRetryDelay * Math.pow(numRetries - 1, 2),
      maxNetworkRetryDelay
    );

    // Apply some jitter by randomizing the value in the range of
    // (sleepSeconds / 2) to (sleepSeconds).
    sleepSeconds *= 0.5 * (1 + Math.random());

    // But never sleep less than the base sleep seconds.
    sleepSeconds = Math.max(initialNetworkRetryDelay, sleepSeconds);

    // And never sleep less than the time the API asks us to wait, assuming it's a reasonable ask.
    if (Number.isInteger(retryAfter) && retryAfter <= MAX_RETRY_AFTER_WAIT) {
      sleepSeconds = Math.max(sleepSeconds, retryAfter);
    }

    return sleepSeconds * 1000;
  },

  // Max retries can be set on a per request basis. Favor those over the global setting
  _getMaxNetworkRetries(settings = {}) {
    return settings.maxNetworkRetries &&
      Number.isInteger(settings.maxNetworkRetries)
      ? settings.maxNetworkRetries
      : this._stripe.getMaxNetworkRetries();
  },

  _defaultIdempotencyKey(method, settings) {
    // If this is a POST and we allow multiple retries, ensure an idempotency key.
    const maxRetries = this._getMaxNetworkRetries(settings);

    if (method === 'POST' && maxRetries > 0) {
      return `stripe-node-retry-${utils.uuid4()}`;
    }
    return null;
  },

  _makeHeaders(
    auth,
    contentLength,
    apiVersion,
    clientUserAgent,
    method,
    userSuppliedHeaders,
    userSuppliedSettings
  ) {
    const defaultHeaders = {
      // Use specified auth token or use default from this stripe instance:
      Authorization: auth ? `Bearer ${auth}` : this._stripe.getApiField('auth'),
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': contentLength,
      'User-Agent': this._getUserAgentString(),
      'X-Stripe-Client-User-Agent': clientUserAgent,
      'X-Stripe-Client-Telemetry': this._getTelemetryHeader(),
      'Stripe-Version': apiVersion,
      'Idempotency-Key': this._defaultIdempotencyKey(
        method,
        userSuppliedSettings
      ),
    };

    return Object.assign(
      utils.removeNullish(defaultHeaders),
      // If the user supplied, say 'idempotency-key', override instead of appending by ensuring caps are the same.
      utils.normalizeHeaders(userSuppliedHeaders)
    );
  },

  _getUserAgentString() {
    const packageVersion = this._stripe.getConstant('PACKAGE_VERSION');
    const appInfo = this._stripe._appInfo
      ? this._stripe.getAppInfoAsString()
      : '';

    return `Stripe/v1 NodeBindings/${packageVersion} ${appInfo}`.trim();
  },

  _getTelemetryHeader() {
    if (
      this._stripe.getTelemetryEnabled() &&
      this._stripe._prevRequestMetrics.length > 0
    ) {
      const metrics = this._stripe._prevRequestMetrics.shift();
      return JSON.stringify({
        last_request_metrics: metrics,
      });
    }
  },

  _recordRequestMetrics(requestId, requestDurationMs) {
    if (this._stripe.getTelemetryEnabled() && requestId) {
      if (
        this._stripe._prevRequestMetrics.length >
        StripeResource.MAX_BUFFERED_REQUEST_METRICS
      ) {
        utils.emitWarning(
          'Request metrics buffer is full, dropping telemetry message.'
        );
      } else {
        this._stripe._prevRequestMetrics.push({
          request_id: requestId,
          request_duration_ms: requestDurationMs,
        });
      }
    }
  },

  _request(method, host, path, data, auth, options = {}, callback) {
    let requestData;

    const retryRequest = (
      requestFn,
      apiVersion,
      headers,
      requestRetries,
      retryAfter
    ) => {
      return setTimeout(
        requestFn,
        this._getSleepTimeInMS(requestRetries, retryAfter),
        apiVersion,
        headers,
        requestRetries + 1
      );
    };

    const makeRequest = (apiVersion, headers, numRetries) => {
      // timeout can be set on a per-request basis. Favor that over the global setting
      const timeout =
        options.settings &&
        Number.isInteger(options.settings.timeout) &&
        options.settings.timeout >= 0
          ? options.settings.timeout
          : this._stripe.getApiField('timeout');

      const isInsecureConnection =
        this._stripe.getApiField('protocol') == 'http';
      let agent = this._stripe.getApiField('agent');
      if (agent == null) {
        agent = isInsecureConnection ? defaultHttpAgent : defaultHttpsAgent;
      }

      const req = (isInsecureConnection ? http : https).request({
        host: host || this._stripe.getApiField('host'),
        port: this._stripe.getApiField('port'),
        path,
        method,
        agent,
        headers,
        ciphers: 'DEFAULT:!aNULL:!eNULL:!LOW:!EXPORT:!SSLv2:!MD5',
      });

      const requestStartTime = Date.now();

      const requestEvent = utils.removeNullish({
        api_version: apiVersion,
        account: headers['Stripe-Account'],
        idempotency_key: headers['Idempotency-Key'],
        method,
        path,
        request_start_time: requestStartTime,
      });

      const requestRetries = numRetries || 0;

      const maxRetries = this._getMaxNetworkRetries(options.settings);

      req._requestEvent = requestEvent;

      req._requestStart = requestStartTime;

      this._stripe._emitter.emit('request', requestEvent);

      req.setTimeout(timeout, this._timeoutHandler(timeout, req, callback));

      req.once('response', (res) => {
        if (this._shouldRetry(res, requestRetries, maxRetries)) {
          return retryRequest(
            makeRequest,
            apiVersion,
            headers,
            requestRetries,
            ((res || {}).headers || {})['retry-after']
          );
        } else {
          return this._responseHandler(req, callback)(res);
        }
      });

      req.on('error', (error) => {
        if (this._shouldRetry(null, requestRetries, maxRetries)) {
          return retryRequest(
            makeRequest,
            apiVersion,
            headers,
            requestRetries,
            null
          );
        } else {
          return this._errorHandler(req, requestRetries, callback)(error);
        }
      });

      req.once('socket', (socket) => {
        if (socket.connecting) {
          socket.once(
            isInsecureConnection ? 'connect' : 'secureConnect',
            () => {
              // Send payload; we're safe:
              req.write(requestData);
              req.end();
            }
          );
        } else {
          // we're already connected
          req.write(requestData);
          req.end();
        }
      });
    };

    const prepareAndMakeRequest = (error, data) => {
      if (error) {
        return callback(error);
      }

      requestData = data;

      this._stripe.getClientUserAgent((clientUserAgent) => {
        const apiVersion = this._stripe.getApiField('version');
        const headers = this._makeHeaders(
          auth,
          requestData.length,
          apiVersion,
          clientUserAgent,
          method,
          options.headers,
          options.settings
        );

        makeRequest(apiVersion, headers);
      });
    };

    if (this.requestDataProcessor) {
      this.requestDataProcessor(
        method,
        data,
        options.headers,
        prepareAndMakeRequest
      );
    } else {
      prepareAndMakeRequest(null, utils.stringifyRequestData(data || {}));
    }
  },
};

module.exports = StripeResource;


/***/ }),

/***/ "../../node_modules/stripe/lib/Webhooks.js":
/*!*********************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/Webhooks.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const crypto = __webpack_require__(/*! crypto */ "crypto");

const utils = __webpack_require__(/*! ./utils */ "../../node_modules/stripe/lib/utils.js");
const {StripeError, StripeSignatureVerificationError} = __webpack_require__(/*! ./Error */ "../../node_modules/stripe/lib/Error.js");

const Webhook = {
  DEFAULT_TOLERANCE: 300, // 5 minutes

  constructEvent(payload, header, secret, tolerance) {
    this.signature.verifyHeader(
      payload,
      header,
      secret,
      tolerance || Webhook.DEFAULT_TOLERANCE
    );

    const jsonPayload = JSON.parse(payload);
    return jsonPayload;
  },

  /**
   * Generates a header to be used for webhook mocking
   *
   * @typedef {object} opts
   * @property {number} timestamp - Timestamp of the header. Defaults to Date.now()
   * @property {string} payload - JSON stringified payload object, containing the 'id' and 'object' parameters
   * @property {string} secret - Stripe webhook secret 'whsec_...'
   * @property {string} scheme - Version of API to hit. Defaults to 'v1'.
   * @property {string} signature - Computed webhook signature
   */
  generateTestHeaderString: function(opts) {
    if (!opts) {
      throw new StripeError({
        message: 'Options are required',
      });
    }

    opts.timestamp =
      Math.floor(opts.timestamp) || Math.floor(Date.now() / 1000);
    opts.scheme = opts.scheme || signature.EXPECTED_SCHEME;

    opts.signature =
      opts.signature ||
      signature._computeSignature(
        opts.timestamp + '.' + opts.payload,
        opts.secret
      );

    var generatedHeader = [
      't=' + opts.timestamp,
      opts.scheme + '=' + opts.signature,
    ].join(',');

    return generatedHeader;
  },
};

const signature = {
  EXPECTED_SCHEME: 'v1',

  _computeSignature: (payload, secret) => {
    return crypto
      .createHmac('sha256', secret)
      .update(payload, 'utf8')
      .digest('hex');
  },

  verifyHeader(payload, header, secret, tolerance) {
    payload = Buffer.isBuffer(payload) ? payload.toString('utf8') : payload;

    // Express's type for `Request#headers` is `string | []string`
    // which is because the `set-cookie` header is an array,
    // but no other headers are an array (docs: https://nodejs.org/api/http.html#http_message_headers)
    // (Express's Request class is an extension of http.IncomingMessage, and doesn't appear to be relevantly modified: https://github.com/expressjs/express/blob/master/lib/request.js#L31)
    if (Array.isArray(header)) {
      throw new Error(
        'Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header.'
      );
    }

    header = Buffer.isBuffer(header) ? header.toString('utf8') : header;

    const details = parseHeader(header, this.EXPECTED_SCHEME);

    if (!details || details.timestamp === -1) {
      throw new StripeSignatureVerificationError({
        message: 'Unable to extract timestamp and signatures from header',
        detail: {
          header,
          payload,
        },
      });
    }

    if (!details.signatures.length) {
      throw new StripeSignatureVerificationError({
        message: 'No signatures found with expected scheme',
        detail: {
          header,
          payload,
        },
      });
    }

    const expectedSignature = this._computeSignature(
      `${details.timestamp}.${payload}`,
      secret
    );

    const signatureFound = !!details.signatures.filter(
      utils.secureCompare.bind(utils, expectedSignature)
    ).length;

    if (!signatureFound) {
      throw new StripeSignatureVerificationError({
        message:
          'No signatures found matching the expected signature for payload.' +
          ' Are you passing the raw request body you received from Stripe?' +
          ' https://github.com/stripe/stripe-node#webhook-signing',
        detail: {
          header,
          payload,
        },
      });
    }

    const timestampAge = Math.floor(Date.now() / 1000) - details.timestamp;

    if (tolerance > 0 && timestampAge > tolerance) {
      throw new StripeSignatureVerificationError({
        message: 'Timestamp outside the tolerance zone',
        detail: {
          header,
          payload,
        },
      });
    }

    return true;
  },
};

function parseHeader(header, scheme) {
  if (typeof header !== 'string') {
    return null;
  }

  return header.split(',').reduce(
    (accum, item) => {
      const kv = item.split('=');

      if (kv[0] === 't') {
        accum.timestamp = kv[1];
      }

      if (kv[0] === scheme) {
        accum.signatures.push(kv[1]);
      }

      return accum;
    },
    {
      timestamp: -1,
      signatures: [],
    }
  );
}

Webhook.signature = signature;

module.exports = Webhook;


/***/ }),

/***/ "../../node_modules/stripe/lib/autoPagination.js":
/*!***************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/autoPagination.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const makeRequest = __webpack_require__(/*! ./makeRequest */ "../../node_modules/stripe/lib/makeRequest.js");
const utils = __webpack_require__(/*! ./utils */ "../../node_modules/stripe/lib/utils.js");

function makeAutoPaginationMethods(self, requestArgs, spec, firstPagePromise) {
  const promiseCache = {currentPromise: null};
  let listPromise = firstPagePromise;
  let i = 0;

  function iterate(listResult) {
    if (
      !(
        listResult &&
        listResult.data &&
        typeof listResult.data.length === 'number'
      )
    ) {
      throw Error(
        'Unexpected: Stripe API response does not have a well-formed `data` array.'
      );
    }

    if (i < listResult.data.length) {
      const value = listResult.data[i];
      i += 1;
      return {value, done: false};
    } else if (listResult.has_more) {
      // Reset counter, request next page, and recurse.
      i = 0;
      const lastId = getLastId(listResult);
      listPromise = makeRequest(self, requestArgs, spec, {
        starting_after: lastId,
      });
      return listPromise.then(iterate);
    }
    return {value: undefined, done: true};
  }

  function asyncIteratorNext() {
    return memoizedPromise(promiseCache, (resolve, reject) => {
      return listPromise
        .then(iterate)
        .then(resolve)
        .catch(reject);
    });
  }

  const autoPagingEach = makeAutoPagingEach(asyncIteratorNext);
  const autoPagingToArray = makeAutoPagingToArray(autoPagingEach);

  const autoPaginationMethods = {
    autoPagingEach,
    autoPagingToArray,

    // Async iterator functions:
    next: asyncIteratorNext,
    return: () => {
      // This is required for `break`.
      return {};
    },
    [getAsyncIteratorSymbol()]: () => {
      return autoPaginationMethods;
    },
  };
  return autoPaginationMethods;
}

module.exports.makeAutoPaginationMethods = makeAutoPaginationMethods;

/**
 * ----------------
 * Private Helpers:
 * ----------------
 */

function getAsyncIteratorSymbol() {
  if (typeof Symbol !== 'undefined' && Symbol.asyncIterator) {
    return Symbol.asyncIterator;
  }
  // Follow the convention from libraries like iterall: https://github.com/leebyron/iterall#asynciterator-1
  return '@@asyncIterator';
}

function getDoneCallback(args) {
  if (args.length < 2) {
    return undefined;
  }
  const onDone = args[1];
  if (typeof onDone !== 'function') {
    throw Error(
      `The second argument to autoPagingEach, if present, must be a callback function; receieved ${typeof onDone}`
    );
  }
  return onDone;
}

/**
 * We allow four forms of the `onItem` callback (the middle two being equivalent),
 *
 *   1. `.autoPagingEach((item) => { doSomething(item); return false; });`
 *   2. `.autoPagingEach(async (item) => { await doSomething(item); return false; });`
 *   3. `.autoPagingEach((item) => doSomething(item).then(() => false));`
 *   4. `.autoPagingEach((item, next) => { doSomething(item); next(false); });`
 *
 * In addition to standard validation, this helper
 * coalesces the former forms into the latter form.
 */
function getItemCallback(args) {
  if (args.length === 0) {
    return undefined;
  }
  const onItem = args[0];
  if (typeof onItem !== 'function') {
    throw Error(
      `The first argument to autoPagingEach, if present, must be a callback function; receieved ${typeof onItem}`
    );
  }

  // 4. `.autoPagingEach((item, next) => { doSomething(item); next(false); });`
  if (onItem.length === 2) {
    return onItem;
  }

  if (onItem.length > 2) {
    throw Error(
      `The \`onItem\` callback function passed to autoPagingEach must accept at most two arguments; got ${onItem}`
    );
  }

  // This magically handles all three of these usecases (the latter two being functionally identical):
  // 1. `.autoPagingEach((item) => { doSomething(item); return false; });`
  // 2. `.autoPagingEach(async (item) => { await doSomething(item); return false; });`
  // 3. `.autoPagingEach((item) => doSomething(item).then(() => false));`
  return function _onItem(item, next) {
    const shouldContinue = onItem(item);
    next(shouldContinue);
  };
}

function getLastId(listResult) {
  const lastIdx = listResult.data.length - 1;
  const lastItem = listResult.data[lastIdx];
  const lastId = lastItem && lastItem.id;
  if (!lastId) {
    throw Error(
      'Unexpected: No `id` found on the last item while auto-paging a list.'
    );
  }
  return lastId;
}

/**
 * If a user calls `.next()` multiple times in parallel,
 * return the same result until something has resolved
 * to prevent page-turning race conditions.
 */
function memoizedPromise(promiseCache, cb) {
  if (promiseCache.currentPromise) {
    return promiseCache.currentPromise;
  }
  promiseCache.currentPromise = new Promise(cb).then((ret) => {
    promiseCache.currentPromise = undefined;
    return ret;
  });
  return promiseCache.currentPromise;
}

function makeAutoPagingEach(asyncIteratorNext) {
  return function autoPagingEach(/* onItem?, onDone? */) {
    const args = [].slice.call(arguments);
    const onItem = getItemCallback(args);
    const onDone = getDoneCallback(args);
    if (args.length > 2) {
      throw Error('autoPagingEach takes up to two arguments; received:', args);
    }

    const autoPagePromise = wrapAsyncIteratorWithCallback(
      asyncIteratorNext,
      onItem
    );
    return utils.callbackifyPromiseWithTimeout(autoPagePromise, onDone);
  };
}

function makeAutoPagingToArray(autoPagingEach) {
  return function autoPagingToArray(opts, onDone) {
    const limit = opts && opts.limit;
    if (!limit) {
      throw Error(
        'You must pass a `limit` option to autoPagingToArray, e.g., `autoPagingToArray({limit: 1000});`.'
      );
    }
    if (limit > 10000) {
      throw Error(
        'You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.'
      );
    }
    const promise = new Promise((resolve, reject) => {
      const items = [];
      autoPagingEach((item) => {
        items.push(item);
        if (items.length >= limit) {
          return false;
        }
      })
        .then(() => {
          resolve(items);
        })
        .catch(reject);
    });
    return utils.callbackifyPromiseWithTimeout(promise, onDone);
  };
}

function wrapAsyncIteratorWithCallback(asyncIteratorNext, onItem) {
  return new Promise((resolve, reject) => {
    function handleIteration(iterResult) {
      if (iterResult.done) {
        resolve();
        return;
      }

      const item = iterResult.value;
      return new Promise((next) => {
        // Bit confusing, perhaps; we pass a `resolve` fn
        // to the user, so they can decide when and if to continue.
        // They can return false, or a promise which resolves to false, to break.
        onItem(item, next);
      }).then((shouldContinue) => {
        if (shouldContinue === false) {
          return handleIteration({done: true});
        } else {
          return asyncIteratorNext().then(handleIteration);
        }
      });
    }

    asyncIteratorNext()
      .then(handleIteration)
      .catch(reject);
  });
}


/***/ }),

/***/ "../../node_modules/stripe/lib/makeRequest.js":
/*!************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/makeRequest.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const utils = __webpack_require__(/*! ./utils */ "../../node_modules/stripe/lib/utils.js");

function getRequestOpts(self, requestArgs, spec, overrideData) {
  // Extract spec values with defaults.
  const commandPath = utils.makeURLInterpolator(spec.path || '');
  const requestMethod = (spec.method || 'GET').toUpperCase();
  const urlParams = spec.urlParams || [];
  const encode = spec.encode || ((data) => data);
  const host = spec.host;
  const path = self.createResourcePathWithSymbols(spec.path);

  // Don't mutate args externally.
  const args = [].slice.call(requestArgs);

  // Generate and validate url params.
  const urlData = urlParams.reduce((urlData, param) => {
    const arg = args.shift();
    if (typeof arg !== 'string') {
      throw new Error(
        `Stripe: Argument "${param}" must be a string, but got: ${arg} (on API request to \`${requestMethod} ${path}\`)`
      );
    }

    urlData[param] = arg;
    return urlData;
  }, {});

  // Pull request data and options (headers, auth) from args.
  const dataFromArgs = utils.getDataFromArgs(args);
  const data = encode(Object.assign({}, dataFromArgs, overrideData));
  const options = utils.getOptionsFromArgs(args);

  // Validate that there are no more args.
  if (args.filter((x) => x != null).length) {
    throw new Error(
      `Stripe: Unknown arguments (${args}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options. (on API request to ${requestMethod} \`${path}\`)`
    );
  }

  const requestPath = self.createFullPath(commandPath, urlData);
  const headers = Object.assign(options.headers, spec.headers);

  if (spec.validator) {
    spec.validator(data, {headers});
  }

  const dataInQuery = spec.method === 'GET' || spec.method === 'DELETE';
  const bodyData = dataInQuery ? {} : data;
  const queryData = dataInQuery ? data : {};

  return {
    requestMethod,
    requestPath,
    bodyData,
    queryData,
    auth: options.auth,
    headers,
    host,
    settings: options.settings,
  };
}

function makeRequest(self, requestArgs, spec, overrideData) {
  return new Promise((resolve, reject) => {
    try {
      var opts = getRequestOpts(self, requestArgs, spec, overrideData);
    } catch (err) {
      reject(err);
      return;
    }

    function requestCallback(err, response) {
      if (err) {
        reject(err);
      } else {
        resolve(
          spec.transformResponseData
            ? spec.transformResponseData(response)
            : response
        );
      }
    }

    const emptyQuery = Object.keys(opts.queryData).length === 0;
    const path = [
      opts.requestPath,
      emptyQuery ? '' : '?',
      utils.stringifyRequestData(opts.queryData),
    ].join('');

    const {headers, settings} = opts;

    self._request(
      opts.requestMethod,
      opts.host,
      path,
      opts.bodyData,
      opts.auth,
      {headers, settings},
      requestCallback
    );
  });
}

module.exports = makeRequest;


/***/ }),

/***/ "../../node_modules/stripe/lib/multipart.js":
/*!**********************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/multipart.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const utils = __webpack_require__(/*! ./utils */ "../../node_modules/stripe/lib/utils.js");
const {StripeError} = __webpack_require__(/*! ./Error */ "../../node_modules/stripe/lib/Error.js");

class StreamProcessingError extends StripeError {}

// Method for formatting HTTP body for the multipart/form-data specification
// Mostly taken from Fermata.js
// https://github.com/natevw/fermata/blob/5d9732a33d776ce925013a265935facd1626cc88/fermata.js#L315-L343
const multipartDataGenerator = (method, data, headers) => {
  const segno = (
    Math.round(Math.random() * 1e16) + Math.round(Math.random() * 1e16)
  ).toString();
  headers['Content-Type'] = `multipart/form-data; boundary=${segno}`;
  let buffer = Buffer.alloc(0);

  function push(l) {
    const prevBuffer = buffer;
    const newBuffer = l instanceof Buffer ? l : Buffer.from(l);
    buffer = Buffer.alloc(prevBuffer.length + newBuffer.length + 2);
    prevBuffer.copy(buffer);
    newBuffer.copy(buffer, prevBuffer.length);
    buffer.write('\r\n', buffer.length - 2);
  }

  function q(s) {
    return `"${s.replace(/"|"/g, '%22').replace(/\r\n|\r|\n/g, ' ')}"`;
  }

  const flattenedData = utils.flattenAndStringify(data);

  for (const k in flattenedData) {
    const v = flattenedData[k];
    push(`--${segno}`);
    if (v.hasOwnProperty('data')) {
      push(
        `Content-Disposition: form-data; name=${q(k)}; filename=${q(
          v.name || 'blob'
        )}`
      );
      push(`Content-Type: ${v.type || 'application/octet-stream'}`);
      push('');
      push(v.data);
    } else {
      push(`Content-Disposition: form-data; name=${q(k)}`);
      push('');
      push(v);
    }
  }
  push(`--${segno}--`);

  return buffer;
};

const streamProcessor = (method, data, headers, callback) => {
  const bufferArray = [];
  data.file.data
    .on('data', (line) => {
      bufferArray.push(line);
    })
    .once('end', () => {
      const bufferData = Object.assign({}, data);
      bufferData.file.data = Buffer.concat(bufferArray);
      const buffer = multipartDataGenerator(method, bufferData, headers);
      callback(null, buffer);
    })
    .on('error', (err) => {
      callback(
        new StreamProcessingError({
          message:
            'An error occurred while attempting to process the file for upload.',
          detail: err,
        }),
        null
      );
    });
};

const multipartRequestDataProcessor = (method, data, headers, callback) => {
  data = data || {};

  if (method !== 'POST') {
    return callback(null, utils.stringifyRequestData(data));
  }

  const isStream = utils.checkForStream(data);
  if (isStream) {
    return streamProcessor(method, data, headers, callback);
  }

  const buffer = multipartDataGenerator(method, data, headers);
  return callback(null, buffer);
};

module.exports.multipartRequestDataProcessor = multipartRequestDataProcessor;


/***/ }),

/***/ "../../node_modules/stripe/lib/resources.js":
/*!**********************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const resourceNamespace = __webpack_require__(/*! ./ResourceNamespace */ "../../node_modules/stripe/lib/ResourceNamespace.js");

module.exports = {
  Accounts: __webpack_require__(/*! ./resources/Accounts */ "../../node_modules/stripe/lib/resources/Accounts.js"),
  // Support Accounts for consistency, Account for backwards compatibility
  Account: __webpack_require__(/*! ./resources/Accounts */ "../../node_modules/stripe/lib/resources/Accounts.js"),
  AccountLinks: __webpack_require__(/*! ./resources/AccountLinks */ "../../node_modules/stripe/lib/resources/AccountLinks.js"),
  ApplePayDomains: __webpack_require__(/*! ./resources/ApplePayDomains */ "../../node_modules/stripe/lib/resources/ApplePayDomains.js"),
  ApplicationFees: __webpack_require__(/*! ./resources/ApplicationFees */ "../../node_modules/stripe/lib/resources/ApplicationFees.js"),
  Balance: __webpack_require__(/*! ./resources/Balance */ "../../node_modules/stripe/lib/resources/Balance.js"),
  BalanceTransactions: __webpack_require__(/*! ./resources/BalanceTransactions */ "../../node_modules/stripe/lib/resources/BalanceTransactions.js"),
  Charges: __webpack_require__(/*! ./resources/Charges */ "../../node_modules/stripe/lib/resources/Charges.js"),
  CountrySpecs: __webpack_require__(/*! ./resources/CountrySpecs */ "../../node_modules/stripe/lib/resources/CountrySpecs.js"),
  Coupons: __webpack_require__(/*! ./resources/Coupons */ "../../node_modules/stripe/lib/resources/Coupons.js"),
  CreditNotes: __webpack_require__(/*! ./resources/CreditNotes */ "../../node_modules/stripe/lib/resources/CreditNotes.js"),
  Customers: __webpack_require__(/*! ./resources/Customers */ "../../node_modules/stripe/lib/resources/Customers.js"),
  Disputes: __webpack_require__(/*! ./resources/Disputes */ "../../node_modules/stripe/lib/resources/Disputes.js"),
  EphemeralKeys: __webpack_require__(/*! ./resources/EphemeralKeys */ "../../node_modules/stripe/lib/resources/EphemeralKeys.js"),
  Events: __webpack_require__(/*! ./resources/Events */ "../../node_modules/stripe/lib/resources/Events.js"),
  ExchangeRates: __webpack_require__(/*! ./resources/ExchangeRates */ "../../node_modules/stripe/lib/resources/ExchangeRates.js"),
  Files: __webpack_require__(/*! ./resources/Files */ "../../node_modules/stripe/lib/resources/Files.js"),
  FileLinks: __webpack_require__(/*! ./resources/FileLinks */ "../../node_modules/stripe/lib/resources/FileLinks.js"),
  Invoices: __webpack_require__(/*! ./resources/Invoices */ "../../node_modules/stripe/lib/resources/Invoices.js"),
  InvoiceItems: __webpack_require__(/*! ./resources/InvoiceItems */ "../../node_modules/stripe/lib/resources/InvoiceItems.js"),
  IssuerFraudRecords: __webpack_require__(/*! ./resources/IssuerFraudRecords */ "../../node_modules/stripe/lib/resources/IssuerFraudRecords.js"),
  Mandates: __webpack_require__(/*! ./resources/Mandates */ "../../node_modules/stripe/lib/resources/Mandates.js"),
  OAuth: __webpack_require__(/*! ./resources/OAuth */ "../../node_modules/stripe/lib/resources/OAuth.js"),
  Orders: __webpack_require__(/*! ./resources/Orders */ "../../node_modules/stripe/lib/resources/Orders.js"),
  OrderReturns: __webpack_require__(/*! ./resources/OrderReturns */ "../../node_modules/stripe/lib/resources/OrderReturns.js"),
  PaymentIntents: __webpack_require__(/*! ./resources/PaymentIntents */ "../../node_modules/stripe/lib/resources/PaymentIntents.js"),
  PaymentMethods: __webpack_require__(/*! ./resources/PaymentMethods */ "../../node_modules/stripe/lib/resources/PaymentMethods.js"),
  Payouts: __webpack_require__(/*! ./resources/Payouts */ "../../node_modules/stripe/lib/resources/Payouts.js"),
  Plans: __webpack_require__(/*! ./resources/Plans */ "../../node_modules/stripe/lib/resources/Plans.js"),
  Prices: __webpack_require__(/*! ./resources/Prices */ "../../node_modules/stripe/lib/resources/Prices.js"),
  Products: __webpack_require__(/*! ./resources/Products */ "../../node_modules/stripe/lib/resources/Products.js"),
  Refunds: __webpack_require__(/*! ./resources/Refunds */ "../../node_modules/stripe/lib/resources/Refunds.js"),
  Reviews: __webpack_require__(/*! ./resources/Reviews */ "../../node_modules/stripe/lib/resources/Reviews.js"),
  SetupIntents: __webpack_require__(/*! ./resources/SetupIntents */ "../../node_modules/stripe/lib/resources/SetupIntents.js"),
  Skus: __webpack_require__(/*! ./resources/SKUs */ "../../node_modules/stripe/lib/resources/SKUs.js"),
  Sources: __webpack_require__(/*! ./resources/Sources */ "../../node_modules/stripe/lib/resources/Sources.js"),
  Subscriptions: __webpack_require__(/*! ./resources/Subscriptions */ "../../node_modules/stripe/lib/resources/Subscriptions.js"),
  SubscriptionItems: __webpack_require__(/*! ./resources/SubscriptionItems */ "../../node_modules/stripe/lib/resources/SubscriptionItems.js"),
  SubscriptionSchedules: __webpack_require__(/*! ./resources/SubscriptionSchedules */ "../../node_modules/stripe/lib/resources/SubscriptionSchedules.js"),
  TaxRates: __webpack_require__(/*! ./resources/TaxRates */ "../../node_modules/stripe/lib/resources/TaxRates.js"),
  Tokens: __webpack_require__(/*! ./resources/Tokens */ "../../node_modules/stripe/lib/resources/Tokens.js"),
  Topups: __webpack_require__(/*! ./resources/Topups */ "../../node_modules/stripe/lib/resources/Topups.js"),
  Transfers: __webpack_require__(/*! ./resources/Transfers */ "../../node_modules/stripe/lib/resources/Transfers.js"),
  WebhookEndpoints: __webpack_require__(/*! ./resources/WebhookEndpoints */ "../../node_modules/stripe/lib/resources/WebhookEndpoints.js"),
  BillingPortal: resourceNamespace('billingPortal', {
    Sessions: __webpack_require__(/*! ./resources/BillingPortal/Sessions */ "../../node_modules/stripe/lib/resources/BillingPortal/Sessions.js"),
  }),
  Checkout: resourceNamespace('checkout', {
    Sessions: __webpack_require__(/*! ./resources/Checkout/Sessions */ "../../node_modules/stripe/lib/resources/Checkout/Sessions.js"),
  }),
  Issuing: resourceNamespace('issuing', {
    Authorizations: __webpack_require__(/*! ./resources/Issuing/Authorizations */ "../../node_modules/stripe/lib/resources/Issuing/Authorizations.js"),
    Cards: __webpack_require__(/*! ./resources/Issuing/Cards */ "../../node_modules/stripe/lib/resources/Issuing/Cards.js"),
    Cardholders: __webpack_require__(/*! ./resources/Issuing/Cardholders */ "../../node_modules/stripe/lib/resources/Issuing/Cardholders.js"),
    Disputes: __webpack_require__(/*! ./resources/Issuing/Disputes */ "../../node_modules/stripe/lib/resources/Issuing/Disputes.js"),
    Transactions: __webpack_require__(/*! ./resources/Issuing/Transactions */ "../../node_modules/stripe/lib/resources/Issuing/Transactions.js"),
  }),
  Radar: resourceNamespace('radar', {
    EarlyFraudWarnings: __webpack_require__(/*! ./resources/Radar/EarlyFraudWarnings */ "../../node_modules/stripe/lib/resources/Radar/EarlyFraudWarnings.js"),
    ValueLists: __webpack_require__(/*! ./resources/Radar/ValueLists */ "../../node_modules/stripe/lib/resources/Radar/ValueLists.js"),
    ValueListItems: __webpack_require__(/*! ./resources/Radar/ValueListItems */ "../../node_modules/stripe/lib/resources/Radar/ValueListItems.js"),
  }),
  Reporting: resourceNamespace('reporting', {
    ReportRuns: __webpack_require__(/*! ./resources/Reporting/ReportRuns */ "../../node_modules/stripe/lib/resources/Reporting/ReportRuns.js"),
    ReportTypes: __webpack_require__(/*! ./resources/Reporting/ReportTypes */ "../../node_modules/stripe/lib/resources/Reporting/ReportTypes.js"),
  }),
  Sigma: resourceNamespace('sigma', {
    ScheduledQueryRuns: __webpack_require__(/*! ./resources/Sigma/ScheduledQueryRuns */ "../../node_modules/stripe/lib/resources/Sigma/ScheduledQueryRuns.js"),
  }),
  Terminal: resourceNamespace('terminal', {
    ConnectionTokens: __webpack_require__(/*! ./resources/Terminal/ConnectionTokens */ "../../node_modules/stripe/lib/resources/Terminal/ConnectionTokens.js"),
    Locations: __webpack_require__(/*! ./resources/Terminal/Locations */ "../../node_modules/stripe/lib/resources/Terminal/Locations.js"),
    Readers: __webpack_require__(/*! ./resources/Terminal/Readers */ "../../node_modules/stripe/lib/resources/Terminal/Readers.js"),
  }),
};


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/AccountLinks.js":
/*!***********************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/AccountLinks.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'account_links',

  includeBasic: ['create'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Accounts.js":
/*!*******************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Accounts.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

// Since path can either be `account` or `accounts`, support both through stripeMethod path;
module.exports = StripeResource.extend({
  path: '',

  reject: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/reject',
  }),

  create: stripeMethod({
    method: 'POST',
    path: 'accounts',
  }),

  del: stripeMethod({
    method: 'DELETE',
    path: 'accounts/{account}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: 'accounts',
    methodType: 'list',
  }),

  retrieve(id) {
    // No longer allow an api key to be passed as the first string to this function due to ambiguity between
    // old account ids and api keys. To request the account for an api key, send null as the id
    if (typeof id === 'string') {
      return stripeMethod({
        method: 'GET',
        path: 'accounts/{id}',
      }).apply(this, arguments);
    } else {
      if (id === null || id === undefined) {
        // Remove id as stripeMethod would complain of unexpected argument
        [].shift.apply(arguments);
      }
      return stripeMethod({
        method: 'GET',
        path: 'account',
      }).apply(this, arguments);
    }
  },

  update: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}',
  }),

  listCapabilities: stripeMethod({
    method: 'GET',
    path: 'accounts/{account}/capabilities',
    methodType: 'list',
  }),

  retrieveCapability: stripeMethod({
    method: 'GET',
    path: 'accounts/{account}/capabilities/{capability}',
  }),

  updateCapability: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/capabilities/{capability}',
  }),

  createExternalAccount: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/external_accounts',
  }),

  deleteExternalAccount: stripeMethod({
    method: 'DELETE',
    path: 'accounts/{account}/external_accounts/{id}',
  }),

  listExternalAccounts: stripeMethod({
    method: 'GET',
    path: 'accounts/{account}/external_accounts',
    methodType: 'list',
  }),

  retrieveExternalAccount: stripeMethod({
    method: 'GET',
    path: 'accounts/{account}/external_accounts/{id}',
  }),

  updateExternalAccount: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/external_accounts/{id}',
  }),

  createLoginLink: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/login_links',
  }),

  createPerson: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/persons',
  }),

  deletePerson: stripeMethod({
    method: 'DELETE',
    path: 'accounts/{account}/persons/{person}',
  }),

  listPersons: stripeMethod({
    method: 'GET',
    path: 'accounts/{account}/persons',
    methodType: 'list',
  }),

  retrievePerson: stripeMethod({
    method: 'GET',
    path: 'accounts/{account}/persons/{person}',
  }),

  updatePerson: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/persons/{person}',
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/ApplePayDomains.js":
/*!**************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/ApplePayDomains.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'apple_pay/domains',

  includeBasic: ['create', 'del', 'list', 'retrieve'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/ApplicationFees.js":
/*!**************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/ApplicationFees.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'application_fees',

  includeBasic: ['list', 'retrieve'],

  createRefund: stripeMethod({
    method: 'POST',
    path: '/{id}/refunds',
  }),

  listRefunds: stripeMethod({
    method: 'GET',
    path: '/{id}/refunds',
    methodType: 'list',
  }),

  retrieveRefund: stripeMethod({
    method: 'GET',
    path: '/{fee}/refunds/{id}',
  }),

  updateRefund: stripeMethod({
    method: 'POST',
    path: '/{fee}/refunds/{id}',
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Balance.js":
/*!******************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Balance.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'balance',

  retrieve: stripeMethod({
    method: 'GET',
    path: '',
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/BalanceTransactions.js":
/*!******************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/BalanceTransactions.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'balance_transactions',

  includeBasic: ['list', 'retrieve'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/BillingPortal/Sessions.js":
/*!*********************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/BillingPortal/Sessions.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'billing_portal/sessions',

  includeBasic: ['create'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Charges.js":
/*!******************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Charges.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'charges',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  capture: stripeMethod({
    method: 'POST',
    path: '/{charge}/capture',
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Checkout/Sessions.js":
/*!****************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Checkout/Sessions.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'checkout/sessions',

  includeBasic: ['create', 'list', 'retrieve'],

  listLineItems: stripeMethod({
    method: 'GET',
    path: '/{session}/line_items',
    methodType: 'list',
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/CountrySpecs.js":
/*!***********************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/CountrySpecs.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'country_specs',

  includeBasic: ['list', 'retrieve'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Coupons.js":
/*!******************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Coupons.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'coupons',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/CreditNotes.js":
/*!**********************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/CreditNotes.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'credit_notes',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  preview: stripeMethod({
    method: 'GET',
    path: '/preview',
  }),

  voidCreditNote: stripeMethod({
    method: 'POST',
    path: '/{id}/void',
  }),

  listLineItems: stripeMethod({
    method: 'GET',
    path: '/{creditNote}/lines',
    methodType: 'list',
  }),

  listPreviewLineItems: stripeMethod({
    method: 'GET',
    path: '/preview/lines',
    methodType: 'list',
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Customers.js":
/*!********************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Customers.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'customers',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],

  deleteDiscount: stripeMethod({
    method: 'DELETE',
    path: '/{customer}/discount',
  }),

  createBalanceTransaction: stripeMethod({
    method: 'POST',
    path: '/{customer}/balance_transactions',
  }),

  listBalanceTransactions: stripeMethod({
    method: 'GET',
    path: '/{customer}/balance_transactions',
    methodType: 'list',
  }),

  retrieveBalanceTransaction: stripeMethod({
    method: 'GET',
    path: '/{customer}/balance_transactions/{transaction}',
  }),

  updateBalanceTransaction: stripeMethod({
    method: 'POST',
    path: '/{customer}/balance_transactions/{transaction}',
  }),

  createSource: stripeMethod({
    method: 'POST',
    path: '/{customer}/sources',
  }),

  listSources: stripeMethod({
    method: 'GET',
    path: '/{customer}/sources',
    methodType: 'list',
  }),

  retrieveSource: stripeMethod({
    method: 'GET',
    path: '/{customer}/sources/{id}',
  }),

  updateSource: stripeMethod({
    method: 'POST',
    path: '/{customer}/sources/{id}',
  }),

  deleteSource: stripeMethod({
    method: 'DELETE',
    path: '/{customer}/sources/{id}',
  }),

  verifySource: stripeMethod({
    method: 'POST',
    path: '/{customer}/sources/{id}/verify',
  }),

  createTaxId: stripeMethod({
    method: 'POST',
    path: '/{customer}/tax_ids',
  }),

  deleteTaxId: stripeMethod({
    method: 'DELETE',
    path: '/{customer}/tax_ids/{id}',
  }),

  listTaxIds: stripeMethod({
    method: 'GET',
    path: '/{customer}/tax_ids',
    methodType: 'list',
  }),

  retrieveTaxId: stripeMethod({
    method: 'GET',
    path: '/{customer}/tax_ids/{id}',
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Disputes.js":
/*!*******************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Disputes.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'disputes',

  includeBasic: ['list', 'retrieve', 'update'],

  close: stripeMethod({
    method: 'POST',
    path: '/{dispute}/close',
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/EphemeralKeys.js":
/*!************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/EphemeralKeys.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'ephemeral_keys',

  includeBasic: ['del'],

  create: stripeMethod({
    method: 'POST',
    path: '',
    validator: (data, options) => {
      if (!options.headers || !options.headers['Stripe-Version']) {
        throw new Error(
          'stripe_version must be specified to create an ephemeral key'
        );
      }
    },
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Events.js":
/*!*****************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Events.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'events',

  includeBasic: ['list', 'retrieve'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/ExchangeRates.js":
/*!************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/ExchangeRates.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'exchange_rates',

  includeBasic: ['list', 'retrieve'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/FileLinks.js":
/*!********************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/FileLinks.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'file_links',

  includeBasic: ['create', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Files.js":
/*!****************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Files.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const {multipartRequestDataProcessor} = __webpack_require__(/*! ../multipart */ "../../node_modules/stripe/lib/multipart.js");
const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'files',

  includeBasic: ['list', 'retrieve'],

  create: stripeMethod({
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    host: 'files.stripe.com',
  }),

  requestDataProcessor: multipartRequestDataProcessor,
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/InvoiceItems.js":
/*!***********************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/InvoiceItems.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'invoiceitems',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Invoices.js":
/*!*******************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Invoices.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'invoices',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],

  finalizeInvoice: stripeMethod({
    method: 'POST',
    path: '/{invoice}/finalize',
  }),

  markUncollectible: stripeMethod({
    method: 'POST',
    path: '/{invoice}/mark_uncollectible',
  }),

  pay: stripeMethod({
    method: 'POST',
    path: '/{invoice}/pay',
  }),

  sendInvoice: stripeMethod({
    method: 'POST',
    path: '/{invoice}/send',
  }),

  retrieveUpcoming: stripeMethod({
    method: 'GET',
    path: '/upcoming',
  }),

  voidInvoice: stripeMethod({
    method: 'POST',
    path: '/{invoice}/void',
  }),

  listLineItems: stripeMethod({
    method: 'GET',
    path: '/{invoice}/lines',
    methodType: 'list',
  }),

  listUpcomingLineItems: stripeMethod({
    method: 'GET',
    path: '/upcoming/lines',
    methodType: 'list',
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/IssuerFraudRecords.js":
/*!*****************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/IssuerFraudRecords.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'issuer_fraud_records',

  includeBasic: ['list', 'retrieve'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Issuing/Authorizations.js":
/*!*********************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Issuing/Authorizations.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'issuing/authorizations',

  includeBasic: ['list', 'retrieve', 'update'],

  approve: stripeMethod({
    method: 'POST',
    path: '/{authorization}/approve',
  }),

  decline: stripeMethod({
    method: 'POST',
    path: '/{authorization}/decline',
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Issuing/Cardholders.js":
/*!******************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Issuing/Cardholders.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'issuing/cardholders',

  includeBasic: ['create', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Issuing/Cards.js":
/*!************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Issuing/Cards.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'issuing/cards',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  retrieveDetails: stripeMethod({
    method: 'GET',
    path: '/{card}/details',
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Issuing/Disputes.js":
/*!***************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Issuing/Disputes.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'issuing/disputes',

  includeBasic: ['create', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Issuing/Transactions.js":
/*!*******************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Issuing/Transactions.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'issuing/transactions',

  includeBasic: ['list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Mandates.js":
/*!*******************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Mandates.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'mandates',

  includeBasic: ['retrieve'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/OAuth.js":
/*!****************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/OAuth.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;
const utils = __webpack_require__(/*! ../utils */ "../../node_modules/stripe/lib/utils.js");

const oAuthHost = 'connect.stripe.com';

module.exports = StripeResource.extend({
  basePath: '/',

  authorizeUrl(params, options) {
    params = params || {};
    options = options || {};

    let path = 'oauth/authorize';

    // For Express accounts, the path changes
    if (options.express) {
      path = `express/${path}`;
    }

    if (!params.response_type) {
      params.response_type = 'code';
    }

    if (!params.client_id) {
      params.client_id = this._stripe.getClientId();
    }

    if (!params.scope) {
      params.scope = 'read_write';
    }

    return `https://${oAuthHost}/${path}?${utils.stringifyRequestData(params)}`;
  },

  token: stripeMethod({
    method: 'POST',
    path: 'oauth/token',
    host: oAuthHost,
  }),

  deauthorize(spec) {
    if (!spec.client_id) {
      spec.client_id = this._stripe.getClientId();
    }

    return stripeMethod({
      method: 'POST',
      path: 'oauth/deauthorize',
      host: oAuthHost,
    }).apply(this, arguments);
  },
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/OrderReturns.js":
/*!***********************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/OrderReturns.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'order_returns',

  includeBasic: ['list', 'retrieve'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Orders.js":
/*!*****************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Orders.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'orders',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  pay: stripeMethod({
    method: 'POST',
    path: '/{id}/pay',
  }),

  returnOrder: stripeMethod({
    method: 'POST',
    path: '/{id}/returns',
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/PaymentIntents.js":
/*!*************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/PaymentIntents.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'payment_intents',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  cancel: stripeMethod({
    method: 'POST',
    path: '/{intent}/cancel',
  }),

  capture: stripeMethod({
    method: 'POST',
    path: '/{intent}/capture',
  }),

  confirm: stripeMethod({
    method: 'POST',
    path: '/{intent}/confirm',
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/PaymentMethods.js":
/*!*************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/PaymentMethods.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'payment_methods',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  attach: stripeMethod({
    method: 'POST',
    path: '/{paymentMethod}/attach',
  }),

  detach: stripeMethod({
    method: 'POST',
    path: '/{paymentMethod}/detach',
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Payouts.js":
/*!******************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Payouts.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'payouts',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  cancel: stripeMethod({
    method: 'POST',
    path: '/{payout}/cancel',
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Plans.js":
/*!****************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Plans.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'plans',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Prices.js":
/*!*****************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Prices.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'prices',

  includeBasic: ['create', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Products.js":
/*!*******************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Products.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'products',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Radar/EarlyFraudWarnings.js":
/*!***********************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Radar/EarlyFraudWarnings.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'radar/early_fraud_warnings',

  includeBasic: ['list', 'retrieve'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Radar/ValueListItems.js":
/*!*******************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Radar/ValueListItems.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'radar/value_list_items',

  includeBasic: ['create', 'del', 'list', 'retrieve'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Radar/ValueLists.js":
/*!***************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Radar/ValueLists.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'radar/value_lists',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Refunds.js":
/*!******************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Refunds.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'refunds',

  includeBasic: ['create', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Reporting/ReportRuns.js":
/*!*******************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Reporting/ReportRuns.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'reporting/report_runs',

  includeBasic: ['create', 'list', 'retrieve'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Reporting/ReportTypes.js":
/*!********************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Reporting/ReportTypes.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'reporting/report_types',

  includeBasic: ['list', 'retrieve'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Reviews.js":
/*!******************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Reviews.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'reviews',

  includeBasic: ['list', 'retrieve'],

  approve: stripeMethod({
    method: 'POST',
    path: '/{review}/approve',
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/SKUs.js":
/*!***************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/SKUs.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'skus',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/SetupIntents.js":
/*!***********************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/SetupIntents.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'setup_intents',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  cancel: stripeMethod({
    method: 'POST',
    path: '/{intent}/cancel',
  }),

  confirm: stripeMethod({
    method: 'POST',
    path: '/{intent}/confirm',
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Sigma/ScheduledQueryRuns.js":
/*!***********************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Sigma/ScheduledQueryRuns.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'sigma/scheduled_query_runs',

  includeBasic: ['list', 'retrieve'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Sources.js":
/*!******************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Sources.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'sources',

  includeBasic: ['create', 'retrieve', 'update'],

  listSourceTransactions: stripeMethod({
    method: 'GET',
    path: '/{source}/source_transactions',
    methodType: 'list',
  }),

  verify: stripeMethod({
    method: 'POST',
    path: '/{source}/verify',
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/SubscriptionItems.js":
/*!****************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/SubscriptionItems.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'subscription_items',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],

  createUsageRecord: stripeMethod({
    method: 'POST',
    path: '/{subscriptionItem}/usage_records',
  }),

  listUsageRecordSummaries: stripeMethod({
    method: 'GET',
    path: '/{subscriptionItem}/usage_record_summaries',
    methodType: 'list',
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/SubscriptionSchedules.js":
/*!********************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/SubscriptionSchedules.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'subscription_schedules',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  cancel: stripeMethod({
    method: 'POST',
    path: '/{schedule}/cancel',
  }),

  release: stripeMethod({
    method: 'POST',
    path: '/{schedule}/release',
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Subscriptions.js":
/*!************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Subscriptions.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'subscriptions',

  includeBasic: ['create', 'list', 'retrieve', 'update', 'del'],

  deleteDiscount: stripeMethod({
    method: 'DELETE',
    path: '/{subscriptionExposedId}/discount',
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/TaxRates.js":
/*!*******************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/TaxRates.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'tax_rates',

  includeBasic: ['create', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Terminal/ConnectionTokens.js":
/*!************************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Terminal/ConnectionTokens.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'terminal/connection_tokens',

  includeBasic: ['create'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Terminal/Locations.js":
/*!*****************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Terminal/Locations.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'terminal/locations',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Terminal/Readers.js":
/*!***************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Terminal/Readers.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'terminal/readers',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Tokens.js":
/*!*****************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Tokens.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'tokens',

  includeBasic: ['create', 'retrieve'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Topups.js":
/*!*****************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Topups.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'topups',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  cancel: stripeMethod({
    method: 'POST',
    path: '/{topup}/cancel',
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/Transfers.js":
/*!********************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/Transfers.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'transfers',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  createReversal: stripeMethod({
    method: 'POST',
    path: '/{id}/reversals',
  }),

  listReversals: stripeMethod({
    method: 'GET',
    path: '/{id}/reversals',
    methodType: 'list',
  }),

  retrieveReversal: stripeMethod({
    method: 'GET',
    path: '/{transfer}/reversals/{id}',
  }),

  updateReversal: stripeMethod({
    method: 'POST',
    path: '/{transfer}/reversals/{id}',
  }),
});


/***/ }),

/***/ "../../node_modules/stripe/lib/resources/WebhookEndpoints.js":
/*!***************************************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/resources/WebhookEndpoints.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'webhook_endpoints',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../node_modules/stripe/lib/stripe.js":
/*!*******************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/stripe.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const resources = __webpack_require__(/*! ./resources */ "../../node_modules/stripe/lib/resources.js");

const DEFAULT_HOST = 'api.stripe.com';
const DEFAULT_PORT = '443';
const DEFAULT_BASE_PATH = '/v1/';
const DEFAULT_API_VERSION = null;

const DEFAULT_TIMEOUT = 80000;

Stripe.PACKAGE_VERSION = __webpack_require__(/*! ../package.json */ "../../node_modules/stripe/package.json").version;

Stripe.USER_AGENT = {
  bindings_version: Stripe.PACKAGE_VERSION,
  lang: 'node',
  lang_version: process.version,
  platform: process.platform,
  publisher: 'stripe',
  uname: null,
  typescript: false,
};

Stripe.USER_AGENT_SERIALIZED = null;

const MAX_NETWORK_RETRY_DELAY_SEC = 2;
const INITIAL_NETWORK_RETRY_DELAY_SEC = 0.5;

const APP_INFO_PROPERTIES = ['name', 'version', 'url', 'partner_id'];
const ALLOWED_CONFIG_PROPERTIES = [
  'apiVersion',
  'typescript',
  'maxNetworkRetries',
  'httpAgent',
  'timeout',
  'host',
  'port',
  'protocol',
  'telemetry',
  'appInfo',
];

const EventEmitter = __webpack_require__(/*! events */ "events").EventEmitter;
const utils = __webpack_require__(/*! ./utils */ "../../node_modules/stripe/lib/utils.js");
const {emitWarning} = utils;

Stripe.StripeResource = __webpack_require__(/*! ./StripeResource */ "../../node_modules/stripe/lib/StripeResource.js");
Stripe.resources = resources;

function Stripe(key, config = {}) {
  if (!(this instanceof Stripe)) {
    return new Stripe(key, config);
  }

  const props = this._getPropsFromConfig(config);

  Object.defineProperty(this, '_emitter', {
    value: new EventEmitter(),
    enumerable: false,
    configurable: false,
    writable: false,
  });

  this.on = this._emitter.on.bind(this._emitter);
  this.once = this._emitter.once.bind(this._emitter);
  this.off = this._emitter.removeListener.bind(this._emitter);

  this._api = {
    auth: null,
    host: props.host || DEFAULT_HOST,
    port: props.port || DEFAULT_PORT,
    protocol: props.protocol || 'https',
    basePath: DEFAULT_BASE_PATH,
    version: props.apiVersion || DEFAULT_API_VERSION,
    timeout: utils.validateInteger('timeout', props.timeout, DEFAULT_TIMEOUT),
    maxNetworkRetries: utils.validateInteger(
      'maxNetworkRetries',
      props.maxNetworkRetries,
      0
    ),
    agent: props.httpAgent || null,
    dev: false,
  };

  const typescript = props.typescript || false;
  if (typescript !== Stripe.USER_AGENT.typescript) {
    // The mutation here is uncomfortable, but likely fastest;
    // serializing the user agent involves shelling out to the system,
    // and given some users may instantiate the library many times without switching between TS and non-TS,
    // we only want to incur the performance hit when that actually happens.
    Stripe.USER_AGENT_SERIALIZED = null;
    Stripe.USER_AGENT.typescript = typescript;
  }

  if (props.appInfo) {
    this._setAppInfo(props.appInfo);
  }

  this._prepResources();
  this._setApiKey(key);

  this.errors = __webpack_require__(/*! ./Error */ "../../node_modules/stripe/lib/Error.js");
  this.webhooks = __webpack_require__(/*! ./Webhooks */ "../../node_modules/stripe/lib/Webhooks.js");

  this._prevRequestMetrics = [];
  this._enableTelemetry = props.telemetry !== false;
}

Stripe.errors = __webpack_require__(/*! ./Error */ "../../node_modules/stripe/lib/Error.js");
Stripe.webhooks = __webpack_require__(/*! ./Webhooks */ "../../node_modules/stripe/lib/Webhooks.js");

Stripe.prototype = {
  /**
   * @deprecated will be removed in a future major version. Use the config object instead:
   *
   * const stripe = new Stripe(API_KEY, {
   *   host: 'example.com',
   *   port: '8080',
   *   protocol: 'http',
   * });
   *
   */
  setHost(host, port, protocol) {
    emitWarning(
      '`setHost` is deprecated. Use the `host` config option instead.'
    );
    this._setApiField('host', host);
    if (port) {
      this.setPort(port);
    }
    if (protocol) {
      this.setProtocol(protocol);
    }
  },

  /**
   * @deprecated will be removed in a future major version. Use the config object instead:
   *
   * const stripe = new Stripe(API_KEY, {
   *   protocol: 'http',
   * });
   *
   */
  setProtocol(protocol) {
    emitWarning(
      '`setProtocol` is deprecated. Use the `protocol` config option instead.'
    );
    this._setApiField('protocol', protocol.toLowerCase());
  },

  /**
   * @deprecated will be removed in a future major version. Use the config object instead:
   *
   * const stripe = new Stripe(API_KEY, {
   *   port: 3000,
   * });
   *
   */
  setPort(port) {
    emitWarning(
      '`setPort` is deprecated. Use the `port` config option instead.'
    );
    this._setApiField('port', port);
  },

  /**
   * @deprecated will be removed in a future major version. Use the config object instead:
   *
   * const stripe = new Stripe(API_KEY, {
   *   apiVersion: API_VERSION,
   * });
   *
   */
  setApiVersion(version) {
    emitWarning(
      '`setApiVersion` is deprecated. Use the `apiVersion` config or request option instead.'
    );
    if (version) {
      this._setApiField('version', version);
    }
  },

  /**
   * @deprecated will be removed in a future major version. Use the config object instead:
   *
   * const stripe = new Stripe(API_KEY);
   *
   * Or, for Stripe Connect, use `stripeAccount` instead:
   *
   * const stripe = new Stripe(API_KEY, {
   *   stripeAccount: 'acct_...',
   * });
   *
   * Or, to use a different apiKey on a given request:
   *
   * stripe.customers.create(params, {apiKey: 'sk_test_...'});
   */
  setApiKey(key) {
    emitWarning(
      '`setApiKey` is deprecated. Use the `apiKey` request option instead.'
    );
    this._setApiKey(key);
  },

  /**
   * @private
   */
  _setApiKey(key) {
    if (key) {
      this._setApiField('auth', `Bearer ${key}`);
    }
  },

  /**
   * @deprecated will be removed in a future major version. Use the config object instead:
   *
   * const stripe = new Stripe(API_KEY, {
   *   timeout: TIMEOUT_MS,
   * });
   */
  setTimeout(timeout) {
    emitWarning(
      '`setTimeout` is deprecated. Use the `timeout` config or request option instead.'
    );
    this._setApiField('timeout', timeout == null ? DEFAULT_TIMEOUT : timeout);
  },

  /**
   * @deprecated will be removed in a future major version. Use the config object instead:
   *
   * const stripe = new Stripe(API_KEY, {
   *   appInfo: {
   *     name: 'MyPlugin',
   *     version: '1.4.2',
   *     url: 'https://myplugin.com',
   *     partner_id: '1234',
   *   },
   * });
   */
  setAppInfo(info) {
    emitWarning(
      '`setAppInfo` is deprecated. Use the `appInfo` config option instead.'
    );
    this._setAppInfo(info);
  },

  /**
   * @private
   * This may be removed in the future.
   */
  _setAppInfo(info) {
    if (info && typeof info !== 'object') {
      throw new Error('AppInfo must be an object.');
    }

    if (info && !info.name) {
      throw new Error('AppInfo.name is required');
    }

    info = info || {};

    const appInfo = APP_INFO_PROPERTIES.reduce((accum, prop) => {
      if (typeof info[prop] == 'string') {
        accum = accum || {};

        accum[prop] = info[prop];
      }

      return accum;
    }, undefined);

    // Kill the cached UA string because it may no longer be valid
    Stripe.USER_AGENT_SERIALIZED = undefined;

    this._appInfo = appInfo;
  },

  /**
   * @deprecated will be removed in a future major version. Use the config object instead:
   *
   * const ProxyAgent = require('https-proxy-agent');
   * const stripe = new Stripe(API_KEY, {
   *   httpAgent: new ProxyAgent(process.env.http_proxy),
   * });
   *
   */
  setHttpAgent(agent) {
    emitWarning(
      '`setHttpAgent` is deprecated. Use the `httpAgent` config option instead.'
    );
    this._setApiField('agent', agent);
  },

  /**
   * @private
   * This may be removed in the future.
   */
  _setApiField(key, value) {
    this._api[key] = value;
  },

  /**
   * @private
   * Please open or upvote an issue at github.com/stripe/stripe-node
   * if you use this, detailing your use-case.
   *
   * It may be deprecated and removed in the future.
   */
  getApiField(key) {
    return this._api[key];
  },

  setClientId(clientId) {
    this._clientId = clientId;
  },

  getClientId() {
    return this._clientId;
  },

  /**
   * @private
   * Please open or upvote an issue at github.com/stripe/stripe-node
   * if you use this, detailing your use-case.
   *
   * It may be deprecated and removed in the future.
   */
  getConstant: (c) => {
    switch (c) {
      case 'DEFAULT_HOST':
        return DEFAULT_HOST;
      case 'DEFAULT_PORT':
        return DEFAULT_PORT;
      case 'DEFAULT_BASE_PATH':
        return DEFAULT_BASE_PATH;
      case 'DEFAULT_API_VERSION':
        return DEFAULT_API_VERSION;
      case 'DEFAULT_TIMEOUT':
        return DEFAULT_TIMEOUT;
      case 'MAX_NETWORK_RETRY_DELAY_SEC':
        return MAX_NETWORK_RETRY_DELAY_SEC;
      case 'INITIAL_NETWORK_RETRY_DELAY_SEC':
        return INITIAL_NETWORK_RETRY_DELAY_SEC;
    }
    return Stripe[c];
  },

  getMaxNetworkRetries() {
    return this.getApiField('maxNetworkRetries');
  },

  /**
   * @deprecated will be removed in a future major version. Use the config object instead:
   *
   * const stripe = new Stripe(API_KEY, {
   *   maxNetworkRetries: 2,
   * });
   *
   */
  setMaxNetworkRetries(maxNetworkRetries) {
    this._setApiNumberField('maxNetworkRetries', maxNetworkRetries);
  },

  /**
   * @private
   * This may be removed in the future.
   */
  _setApiNumberField(prop, n, defaultVal) {
    const val = utils.validateInteger(prop, n, defaultVal);

    this._setApiField(prop, val);
  },

  getMaxNetworkRetryDelay() {
    return MAX_NETWORK_RETRY_DELAY_SEC;
  },

  getInitialNetworkRetryDelay() {
    return INITIAL_NETWORK_RETRY_DELAY_SEC;
  },

  /**
   * @private
   * Please open or upvote an issue at github.com/stripe/stripe-node
   * if you use this, detailing your use-case.
   *
   * It may be deprecated and removed in the future.
   *
   * Gets a JSON version of a User-Agent and uses a cached version for a slight
   * speed advantage.
   */
  getClientUserAgent(cb) {
    if (Stripe.USER_AGENT_SERIALIZED) {
      return cb(Stripe.USER_AGENT_SERIALIZED);
    }
    this.getClientUserAgentSeeded(Stripe.USER_AGENT, (cua) => {
      Stripe.USER_AGENT_SERIALIZED = cua;
      cb(Stripe.USER_AGENT_SERIALIZED);
    });
  },

  /**
   * @private
   * Please open or upvote an issue at github.com/stripe/stripe-node
   * if you use this, detailing your use-case.
   *
   * It may be deprecated and removed in the future.
   *
   * Gets a JSON version of a User-Agent by encoding a seeded object and
   * fetching a uname from the system.
   */
  getClientUserAgentSeeded(seed, cb) {
    utils.safeExec('uname -a', (err, uname) => {
      const userAgent = {};
      for (const field in seed) {
        userAgent[field] = encodeURIComponent(seed[field]);
      }

      // URI-encode in case there are unusual characters in the system's uname.
      userAgent.uname = encodeURIComponent(uname || 'UNKNOWN');

      if (this._appInfo) {
        userAgent.application = this._appInfo;
      }

      cb(JSON.stringify(userAgent));
    });
  },

  /**
   * @private
   * Please open or upvote an issue at github.com/stripe/stripe-node
   * if you use this, detailing your use-case.
   *
   * It may be deprecated and removed in the future.
   */
  getAppInfoAsString() {
    if (!this._appInfo) {
      return '';
    }

    let formatted = this._appInfo.name;

    if (this._appInfo.version) {
      formatted += `/${this._appInfo.version}`;
    }

    if (this._appInfo.url) {
      formatted += ` (${this._appInfo.url})`;
    }

    return formatted;
  },

  /**
   * @deprecated will be removed in a future major version. Use the config object instead:
   *
   * const stripe = new Stripe(API_KEY, {
   *   telemetry: false,
   * });
   *
   */
  setTelemetryEnabled(enableTelemetry) {
    emitWarning(
      '`setTelemetryEnabled` is deprecated. Use the `telemetry` config option instead.'
    );
    this._enableTelemetry = enableTelemetry;
  },

  getTelemetryEnabled() {
    return this._enableTelemetry;
  },

  /**
   * @private
   * This may be removed in the future.
   */
  _prepResources() {
    for (const name in resources) {
      this[utils.pascalToCamelCase(name)] = new resources[name](this);
    }
  },

  /**
   * @private
   * This may be removed in the future.
   */
  _getPropsFromConfig(config) {
    // If config is null or undefined, just bail early with no props
    if (!config) {
      return {};
    }

    // config can be an object or a string
    const isString = typeof config === 'string';
    const isObject = config === Object(config) && !Array.isArray(config);

    if (!isObject && !isString) {
      throw new Error('Config must either be an object or a string');
    }

    // If config is a string, we assume the old behavior of passing in a string representation of the api version
    if (isString) {
      return {
        apiVersion: config,
      };
    }

    // If config is an object, we assume the new behavior and make sure it doesn't contain any unexpected values
    const values = Object.keys(config).filter(
      (value) => !ALLOWED_CONFIG_PROPERTIES.includes(value)
    );

    if (values.length > 0) {
      throw new Error(
        `Config object may only contain the following: ${ALLOWED_CONFIG_PROPERTIES.join(
          ', '
        )}`
      );
    }

    return config;
  },
};

module.exports = Stripe;

// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Stripe = Stripe;

// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
module.exports.default = Stripe;


/***/ }),

/***/ "../../node_modules/stripe/lib/utils.js":
/*!******************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/lib/utils.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EventEmitter = __webpack_require__(/*! events */ "events").EventEmitter;
const qs = __webpack_require__(/*! qs */ "../../node_modules/qs/lib/index.js");
const crypto = __webpack_require__(/*! crypto */ "crypto");

const hasOwn = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

// Certain sandboxed environments (our known example right now are CloudFlare
// Workers) may make `child_process` unavailable. Because `exec` isn't critical
// to the operation of stripe-node, we handle this unavailability gracefully.
let exec = null;
try {
  exec = __webpack_require__(/*! child_process */ "child_process").exec;
} catch (e) {
  if (e.code !== 'MODULE_NOT_FOUND') {
    throw e;
  }
}

const OPTIONS_KEYS = [
  'apiKey',
  'idempotencyKey',
  'stripeAccount',
  'apiVersion',
  'maxNetworkRetries',
  'timeout',
];

const DEPRECATED_OPTIONS = {
  api_key: 'apiKey',
  idempotency_key: 'idempotencyKey',
  stripe_account: 'stripeAccount',
  stripe_version: 'apiVersion',
  stripeVersion: 'apiVersion',
};
const DEPRECATED_OPTIONS_KEYS = Object.keys(DEPRECATED_OPTIONS);

const utils = (module.exports = {
  isOptionsHash(o) {
    return (
      o &&
      typeof o === 'object' &&
      (OPTIONS_KEYS.some((prop) => hasOwn(o, prop)) ||
        DEPRECATED_OPTIONS_KEYS.some((prop) => hasOwn(o, prop)))
    );
  },

  /**
   * Stringifies an Object, accommodating nested objects
   * (forming the conventional key 'parent[child]=value')
   */
  stringifyRequestData: (data) => {
    return (
      qs
        .stringify(data, {
          serializeDate: (d) => Math.floor(d.getTime() / 1000),
        })
        // Don't use strict form encoding by changing the square bracket control
        // characters back to their literals. This is fine by the server, and
        // makes these parameter strings easier to read.
        .replace(/%5B/g, '[')
        .replace(/%5D/g, ']')
    );
  },

  /**
   * Outputs a new function with interpolated object property values.
   * Use like so:
   *   var fn = makeURLInterpolator('some/url/{param1}/{param2}');
   *   fn({ param1: 123, param2: 456 }); // => 'some/url/123/456'
   */
  makeURLInterpolator: (() => {
    const rc = {
      '\n': '\\n',
      '"': '\\"',
      '\u2028': '\\u2028',
      '\u2029': '\\u2029',
    };
    return (str) => {
      const cleanString = str.replace(/["\n\r\u2028\u2029]/g, ($0) => rc[$0]);
      return (outputs) => {
        return cleanString.replace(/\{([\s\S]+?)\}/g, ($0, $1) =>
          encodeURIComponent(outputs[$1] || '')
        );
      };
    };
  })(),

  extractUrlParams: (path) => {
    const params = path.match(/\{\w+\}/g);
    if (!params) {
      return [];
    }

    return params.map((param) => param.replace(/[{}]/g, ''));
  },

  /**
   * Return the data argument from a list of arguments
   *
   * @param {object[]} args
   * @returns {object}
   */
  getDataFromArgs(args) {
    if (!Array.isArray(args) || !args[0] || typeof args[0] !== 'object') {
      return {};
    }

    if (!utils.isOptionsHash(args[0])) {
      return args.shift();
    }

    const argKeys = Object.keys(args[0]);

    const optionKeysInArgs = argKeys.filter((key) =>
      OPTIONS_KEYS.includes(key)
    );

    // In some cases options may be the provided as the first argument.
    // Here we're detecting a case where there are two distinct arguments
    // (the first being args and the second options) and with known
    // option keys in the first so that we can warn the user about it.
    if (
      optionKeysInArgs.length > 0 &&
      optionKeysInArgs.length !== argKeys.length
    ) {
      emitWarning(
        `Options found in arguments (${optionKeysInArgs.join(
          ', '
        )}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.`
      );
    }

    return {};
  },

  /**
   * Return the options hash from a list of arguments
   */
  getOptionsFromArgs: (args) => {
    const opts = {
      auth: null,
      headers: {},
      settings: {},
    };
    if (args.length > 0) {
      const arg = args[args.length - 1];
      if (typeof arg === 'string') {
        opts.auth = args.pop();
      } else if (utils.isOptionsHash(arg)) {
        const params = args.pop();

        const extraKeys = Object.keys(params).filter(
          (key) => !OPTIONS_KEYS.includes(key)
        );

        if (extraKeys.length) {
          const nonDeprecated = extraKeys.filter((key) => {
            if (!DEPRECATED_OPTIONS[key]) {
              return true;
            }
            const newParam = DEPRECATED_OPTIONS[key];
            if (params[newParam]) {
              throw Error(
                `Both '${newParam}' and '${key}' were provided; please remove '${key}', which is deprecated.`
              );
            }
            /**
             * TODO turn this into a hard error in a future major version (once we have fixed our docs).
             */
            emitWarning(`'${key}' is deprecated; use '${newParam}' instead.`);
            params[newParam] = params[key];
          });
          if (nonDeprecated.length) {
            emitWarning(
              `Invalid options found (${extraKeys.join(', ')}); ignoring.`
            );
          }
        }

        if (params.apiKey) {
          opts.auth = params.apiKey;
        }
        if (params.idempotencyKey) {
          opts.headers['Idempotency-Key'] = params.idempotencyKey;
        }
        if (params.stripeAccount) {
          opts.headers['Stripe-Account'] = params.stripeAccount;
        }
        if (params.apiVersion) {
          opts.headers['Stripe-Version'] = params.apiVersion;
        }
        if (Number.isInteger(params.maxNetworkRetries)) {
          opts.settings.maxNetworkRetries = params.maxNetworkRetries;
        }
        if (Number.isInteger(params.timeout)) {
          opts.settings.timeout = params.timeout;
        }
      }
    }
    return opts;
  },

  /**
   * Provide simple "Class" extension mechanism
   */
  protoExtend(sub) {
    const Super = this;
    const Constructor = hasOwn(sub, 'constructor')
      ? sub.constructor
      : function(...args) {
          Super.apply(this, args);
        };

    // This initialization logic is somewhat sensitive to be compatible with
    // divergent JS implementations like the one found in Qt. See here for more
    // context:
    //
    // https://github.com/stripe/stripe-node/pull/334
    Object.assign(Constructor, Super);
    Constructor.prototype = Object.create(Super.prototype);
    Object.assign(Constructor.prototype, sub);

    return Constructor;
  },

  /**
   * Secure compare, from https://github.com/freewil/scmp
   */
  secureCompare: (a, b) => {
    a = Buffer.from(a);
    b = Buffer.from(b);

    // return early here if buffer lengths are not equal since timingSafeEqual
    // will throw if buffer lengths are not equal
    if (a.length !== b.length) {
      return false;
    }

    // use crypto.timingSafeEqual if available (since Node.js v6.6.0),
    // otherwise use our own scmp-internal function.
    if (crypto.timingSafeEqual) {
      return crypto.timingSafeEqual(a, b);
    }

    const len = a.length;
    let result = 0;

    for (let i = 0; i < len; ++i) {
      result |= a[i] ^ b[i];
    }
    return result === 0;
  },

  /**
   * Remove empty values from an object
   */
  removeNullish: (obj) => {
    if (typeof obj !== 'object') {
      throw new Error('Argument must be an object');
    }

    return Object.keys(obj).reduce((result, key) => {
      if (obj[key] != null) {
        result[key] = obj[key];
      }
      return result;
    }, {});
  },

  /**
   * Normalize standard HTTP Headers:
   * {'foo-bar': 'hi'}
   * becomes
   * {'Foo-Bar': 'hi'}
   */
  normalizeHeaders: (obj) => {
    if (!(obj && typeof obj === 'object')) {
      return obj;
    }

    return Object.keys(obj).reduce((result, header) => {
      result[utils.normalizeHeader(header)] = obj[header];
      return result;
    }, {});
  },

  /**
   * Stolen from https://github.com/marten-de-vries/header-case-normalizer/blob/master/index.js#L36-L41
   * without the exceptions which are irrelevant to us.
   */
  normalizeHeader: (header) => {
    return header
      .split('-')
      .map(
        (text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()
      )
      .join('-');
  },

  /**
   * Determine if file data is a derivative of EventEmitter class.
   * https://nodejs.org/api/events.html#events_events
   */
  checkForStream: (obj) => {
    if (obj.file && obj.file.data) {
      return obj.file.data instanceof EventEmitter;
    }
    return false;
  },

  callbackifyPromiseWithTimeout: (promise, callback) => {
    if (callback) {
      // Ensure callback is called outside of promise stack.
      return promise.then(
        (res) => {
          setTimeout(() => {
            callback(null, res);
          }, 0);
        },
        (err) => {
          setTimeout(() => {
            callback(err, null);
          }, 0);
        }
      );
    }

    return promise;
  },

  /**
   * Allow for special capitalization cases (such as OAuth)
   */
  pascalToCamelCase: (name) => {
    if (name === 'OAuth') {
      return 'oauth';
    } else {
      return name[0].toLowerCase() + name.substring(1);
    }
  },

  emitWarning,

  /**
   * Node's built in `exec` function sometimes throws outright,
   * and sometimes has a callback with an error,
   * depending on the type of error.
   *
   * This unifies that interface.
   */
  safeExec: (cmd, cb) => {
    // Occurs if we couldn't load the `child_process` module, which might
    // happen in certain sandboxed environments like a CloudFlare Worker.
    if (utils._exec === null) {
      cb(new Error('exec not available'), null);
      return;
    }

    try {
      utils._exec(cmd, cb);
    } catch (e) {
      cb(e, null);
    }
  },

  // For mocking in tests.
  _exec: exec,

  isObject: (obj) => {
    const type = typeof obj;
    return (type === 'function' || type === 'object') && !!obj;
  },

  // For use in multipart requests
  flattenAndStringify: (data) => {
    const result = {};

    const step = (obj, prevKey) => {
      Object.keys(obj).forEach((key) => {
        const value = obj[key];

        const newKey = prevKey ? `${prevKey}[${key}]` : key;

        if (utils.isObject(value)) {
          if (!Buffer.isBuffer(value) && !value.hasOwnProperty('data')) {
            // Non-buffer non-file Objects are recursively flattened
            return step(value, newKey);
          } else {
            // Buffers and file objects are stored without modification
            result[newKey] = value;
          }
        } else {
          // Primitives are converted to strings
          result[newKey] = String(value);
        }
      });
    };

    step(data);

    return result;
  },

  /**
   * https://stackoverflow.com/a/2117523
   */
  uuid4: () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  },

  validateInteger: (name, n, defaultVal) => {
    if (!Number.isInteger(n)) {
      if (defaultVal !== undefined) {
        return defaultVal;
      } else {
        throw new Error(`${name} must be an integer`);
      }
    }

    return n;
  },
});

function emitWarning(warning) {
  if (typeof process.emitWarning !== 'function') {
    return console.warn(
      `Stripe: ${warning}`
    ); /* eslint-disable-line no-console */
  }

  return process.emitWarning(warning, 'Stripe');
}


/***/ }),

/***/ "../../node_modules/stripe/package.json":
/*!******************************************************************!*\
  !*** /Users/Seth/Sites/ART_CMS/node_modules/stripe/package.json ***!
  \******************************************************************/
/*! exports provided: name, version, description, keywords, homepage, author, contributors, repository, bugs:, engines, main, types, devDependencies, dependencies, license, scripts, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"stripe\",\"version\":\"8.52.0\",\"description\":\"Stripe API wrapper\",\"keywords\":[\"stripe\",\"payment processing\",\"credit cards\",\"api\"],\"homepage\":\"https://github.com/stripe/stripe-node\",\"author\":\"Stripe <support@stripe.com> (https://stripe.com/)\",\"contributors\":[\"Ask Bjørn Hansen <ask@develooper.com> (http://www.askask.com/)\",\"Michelle Bu <michelle@stripe.com>\",\"Alex Sexton <alex@stripe.com>\",\"James Padolsey\"],\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/stripe/stripe-node.git\"},\"bugs:\":\"https://github.com/stripe/stripe-node/issues\",\"engines\":{\"node\":\"^8.1 || >=10.*\"},\"main\":\"lib/stripe.js\",\"types\":\"types/2020-03-02/index.d.ts\",\"devDependencies\":{\"@typescript-eslint/eslint-plugin\":\"^2.13.0\",\"@typescript-eslint/parser\":\"^2.13.0\",\"chai\":\"~4.2.0\",\"chai-as-promised\":\"~7.1.1\",\"coveralls\":\"^3.0.0\",\"eslint\":\"^6.8.0\",\"eslint-config-prettier\":\"^4.1.0\",\"eslint-plugin-chai-friendly\":\"^0.4.0\",\"eslint-plugin-prettier\":\"^3.0.1\",\"mocha\":\"~6.1.4\",\"mocha-junit-reporter\":\"^1.23.1\",\"nock\":\"^10.0.6\",\"nyc\":\"^14.1.0\",\"prettier\":\"^1.16.4\",\"typescript\":\"^3.7.2\"},\"dependencies\":{\"@types/node\":\">=8.1.0\",\"qs\":\"^6.6.0\"},\"license\":\"MIT\",\"scripts\":{\"clean\":\"rm -rf ./.nyc_output ./node_modules/.cache ./coverage\",\"mocha\":\"nyc mocha\",\"mocha-only\":\"mocha\",\"test\":\"yarn lint && yarn test-typescript && yarn mocha\",\"test-typescript\":\"tsc --build types/test\",\"lint\":\"eslint --ext .js,.jsx,.ts .\",\"fix\":\"yarn lint --fix && ./scripts/updateAPIVersion.js\",\"report\":\"nyc -r text -r lcov report\",\"coveralls\":\"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js\"}}");

/***/ }),

/***/ "./stripeCharge.js":
/*!*************************!*\
  !*** ./stripeCharge.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! dotenv */ "../../node_modules/dotenv/lib/main.js").config({
  path: `.env.${"development"}`
});

exports.handler = async (event, context, callback) => {
  const stripe = __webpack_require__(/*! stripe */ "../../node_modules/stripe/lib/stripe.js")(process.env.GATSBY_STRIPE_SECRET_KEY);

  const data = JSON.parse(event.body);
  const {
    donationAmount,
    donationIndex,
    name
  } = data;

  const calculateOrderAmount = async donationAmount => {
    if (donationIndex === 4) {
      // parseFloat(donationAmount) * 100
      console.log('test');
    }

    return donationAmount;
  }; // console.log(donationAmount)


  const paymentIntent = await stripe.paymentIntents.create({
    amount: await calculateOrderAmount(donationAmount),
    currency: "usd",
    description: `Dear ${name},\n \n This is a receipt for your gracious donation to Artist Rescue Trust. Artist Rescue Trust is a fiscally sponsored program by The Digital Harbor Foundation - a 501c3 non-profit, EIN 45-2536579, that builds tools to help communities respond and be more resilient to crises. This donation is tax deductible in the USA. \n \n Thank you,  \n Artist Rescue Trust`
  });
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type"
    },
    body: JSON.stringify({
      clientSecret: paymentIntent.client_secret
    })
  };
};

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ })));