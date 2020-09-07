(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{558:function(e,n,t){"use strict";t.r(n);var a=t(25),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"numbergenerator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#numbergenerator"}},[e._v("#")]),e._v(" NumberGenerator")]),e._v(" "),t("h2",{attrs:{id:"classes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#classes"}},[e._v("#")]),e._v(" Classes")]),e._v(" "),t("dl",[t("dt",[t("a",{attrs:{href:"#NumberGenerator"}},[e._v("NumberGenerator")])]),e._v(" "),t("dd",[t("p",[e._v("The "),t("code",[e._v("NumberGenerator")]),e._v(" is capable of generating random numbers.")])])]),e._v(" "),t("h2",{attrs:{id:"constants"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#constants"}},[e._v("#")]),e._v(" Constants")]),e._v(" "),t("dl",[t("dt",[t("a",{attrs:{href:"#maxEngine"}},[e._v("maxEngine")]),e._v(" : "),t("code",[e._v("Object")])]),e._v(" "),t("dd",[t("p",[e._v("Engine that always returns the maximum value.\nUsed internally for calculating max roll values.")])]),e._v(" "),t("dt",[t("a",{attrs:{href:"#minEngine"}},[e._v("minEngine")]),e._v(" : "),t("code",[e._v("Object")])]),e._v(" "),t("dd",[t("p",[e._v("Engine that always returns the minimum value.\nUsed internally for calculating min roll values.")])]),e._v(" "),t("dt",[t("a",{attrs:{href:"#engines"}},[e._v("engines")]),e._v(" : "),t("code",[e._v("Object")])]),e._v(" "),t("dd",[t("p",[e._v("List of built-in number generator engines.")])])]),e._v(" "),t("p",[t("a",{attrs:{name:"NumberGenerator"}})]),e._v(" "),t("h2",{attrs:{id:"numbergenerator-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#numbergenerator-2"}},[e._v("#")]),e._v(" NumberGenerator")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("NumberGenerator")]),e._v(" is capable of generating random numbers.")]),e._v(" "),t("p",[t("strong",[e._v("Kind")]),e._v(": global class"),t("br"),e._v(" "),t("strong",[e._v("See")]),e._v(": This uses "),t("a",{attrs:{href:"https://github.com/ckknight/random-js",target:"_blank",rel:"noopener noreferrer"}},[e._v("random-js"),t("OutboundLink")],1),e._v(".\nFor details of the engines, check the "),t("a",{attrs:{href:"https://github.com/ckknight/random-js#engines",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),t("OutboundLink")],1),e._v("."),t("br"),e._v(" "),t("strong",[e._v("Since")]),e._v(": 4.2.0")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#NumberGenerator"}},[e._v("NumberGenerator")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#new_NumberGenerator_new"}},[e._v("new NumberGenerator([engine])")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#NumberGenerator+engine"}},[e._v(".engine")]),e._v(" ⇒ "),t("code",[e._v("Engine")]),e._v(" | "),t("code",[e._v("Object")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#NumberGenerator+engine"}},[e._v(".engine")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#NumberGenerator+integer"}},[e._v(".integer(min, max)")]),e._v(" ⇒ "),t("code",[e._v("number")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#NumberGenerator+real"}},[e._v(".real(min, max, [inclusive])")]),e._v(" ⇒ "),t("code",[e._v("number")])])])])]),e._v(" "),t("p",[t("a",{attrs:{name:"new_NumberGenerator_new"}})]),e._v(" "),t("h3",{attrs:{id:"new-numbergenerator-engine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-numbergenerator-engine"}},[e._v("#")]),e._v(" new NumberGenerator([engine])")]),e._v(" "),t("p",[e._v("Create a "),t("code",[e._v("NumberGenerator")]),e._v(" instance.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("engine")]),e._v(" can be any object that has a "),t("code",[e._v("next()")]),e._v(" method, which returns a number.")]),e._v(" "),t("p",[t("strong",[e._v("Throws")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("TypeError")]),e._v(" engine must have function "),t("code",[e._v("next()")])])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Param")]),e._v(" "),t("th",[e._v("Type")]),e._v(" "),t("th",[e._v("Default")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("[engine]")]),e._v(" "),t("td",[t("code",[e._v("Engine")]),e._v(" | "),t("code",[e._v("Object")])]),e._v(" "),t("td",[t("code",[e._v("nativeMath")])]),e._v(" "),t("td",[e._v("The RNG engine to use")])])])]),e._v(" "),t("p",[t("strong",[e._v("Example")]),e._v(" "),t("em",[e._v("(Built-in engine)")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("NumberGenerator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("engines"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("nodeCrypto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[t("strong",[e._v("Example")]),e._v(" "),t("em",[e._v("(Custom engine)")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("NumberGenerator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("next")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// return a random number")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[t("a",{attrs:{name:"NumberGenerator+engine"}})]),e._v(" "),t("h3",{attrs:{id:"numbergenerator-engine-⇒-engine-object"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#numbergenerator-engine-⇒-engine-object"}},[e._v("#")]),e._v(" numberGenerator.engine ⇒ "),t("code",[e._v("Engine")]),e._v(" | "),t("code",[e._v("Object")])]),e._v(" "),t("p",[e._v("The current engine.")]),e._v(" "),t("p",[t("strong",[e._v("Kind")]),e._v(": instance property of "),t("a",{attrs:{href:"#NumberGenerator"}},[t("code",[e._v("NumberGenerator")])]),t("br"),e._v(" "),t("a",{attrs:{name:"NumberGenerator+engine"}})]),e._v(" "),t("h3",{attrs:{id:"numbergenerator-engine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#numbergenerator-engine"}},[e._v("#")]),e._v(" numberGenerator.engine")]),e._v(" "),t("p",[e._v("Set the engine.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("engine")]),e._v(" can be any object that has a "),t("code",[e._v("next()")]),e._v(" method, which returns a number.")]),e._v(" "),t("p",[t("strong",[e._v("Kind")]),e._v(": instance property of "),t("a",{attrs:{href:"#NumberGenerator"}},[t("code",[e._v("NumberGenerator")])]),t("br"),e._v(" "),t("strong",[e._v("Throws")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("TypeError")]),e._v(" engine must have function "),t("code",[e._v("next()")])])]),e._v(" "),t("p",[t("strong",[e._v("See")]),e._v(": "),t("a",{attrs:{href:"#engines"}},[e._v("engines")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Param")]),e._v(" "),t("th",[e._v("Type")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("engine")]),e._v(" "),t("td",[t("code",[e._v("Engine")]),e._v(" | "),t("code",[e._v("Object")])])])])]),e._v(" "),t("p",[t("strong",[e._v("Example")]),e._v(" "),t("em",[e._v("(Built-in engine)")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("numberGenerator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("engine "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" engines"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("nodeCrypto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[t("strong",[e._v("Example")]),e._v(" "),t("em",[e._v("(Custom engine)")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("numberGenerator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("engine "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("next")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// return a random number")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[t("a",{attrs:{name:"NumberGenerator+integer"}})]),e._v(" "),t("h3",{attrs:{id:"numbergenerator-integer-min-max-⇒-number"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#numbergenerator-integer-min-max-⇒-number"}},[e._v("#")]),e._v(" numberGenerator.integer(min, max) ⇒ "),t("code",[e._v("number")])]),e._v(" "),t("p",[e._v("Generate a random integer within the inclusive range "),t("code",[e._v("[min, max]")]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("Kind")]),e._v(": instance method of "),t("a",{attrs:{href:"#NumberGenerator"}},[t("code",[e._v("NumberGenerator")])]),t("br"),e._v(" "),t("strong",[e._v("Returns")]),e._v(": "),t("code",[e._v("number")]),e._v(" - The random integer")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Param")]),e._v(" "),t("th",[e._v("Type")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("min")]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[e._v("The minimum integer value, inclusive.")])]),e._v(" "),t("tr",[t("td",[e._v("max")]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[e._v("The maximum integer value, inclusive.")])])])]),e._v(" "),t("p",[t("a",{attrs:{name:"NumberGenerator+real"}})]),e._v(" "),t("h3",{attrs:{id:"numbergenerator-real-min-max-inclusive-⇒-number"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#numbergenerator-real-min-max-inclusive-⇒-number"}},[e._v("#")]),e._v(" numberGenerator.real(min, max, [inclusive]) ⇒ "),t("code",[e._v("number")])]),e._v(" "),t("p",[e._v("Returns a floating-point value within "),t("code",[e._v("[min, max)")]),e._v(" or "),t("code",[e._v("[min, max]")]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("Kind")]),e._v(": instance method of "),t("a",{attrs:{href:"#NumberGenerator"}},[t("code",[e._v("NumberGenerator")])]),t("br"),e._v(" "),t("strong",[e._v("Returns")]),e._v(": "),t("code",[e._v("number")]),e._v(" - The random floating-point value")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Param")]),e._v(" "),t("th",[e._v("Type")]),e._v(" "),t("th",[e._v("Default")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("min")]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td"),e._v(" "),t("td",[e._v("The minimum floating-point value, inclusive.")])]),e._v(" "),t("tr",[t("td",[e._v("max")]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td"),e._v(" "),t("td",[e._v("The maximum floating-point value.")])]),e._v(" "),t("tr",[t("td",[e._v("[inclusive]")]),e._v(" "),t("td",[t("code",[e._v("boolean")])]),e._v(" "),t("td",[t("code",[e._v("false")])]),e._v(" "),t("td",[e._v("If "),t("code",[e._v("true")]),e._v(", "),t("code",[e._v("max")]),e._v(" will be inclusive.")])])])]),e._v(" "),t("p",[t("a",{attrs:{name:"maxEngine"}})]),e._v(" "),t("h2",{attrs:{id:"maxengine-object"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maxengine-object"}},[e._v("#")]),e._v(" maxEngine : "),t("code",[e._v("Object")])]),e._v(" "),t("p",[e._v("Engine that always returns the maximum value.\nUsed internally for calculating max roll values.")]),e._v(" "),t("p",[t("strong",[e._v("Kind")]),e._v(": global constant"),t("br"),e._v(" "),t("strong",[e._v("Since")]),e._v(": 4.2.0")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#maxEngine"}},[e._v("maxEngine")]),e._v(" : "),t("code",[e._v("Object")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#maxEngine.range"}},[e._v(".range")]),e._v(" : "),t("code",[e._v("Array.<number>")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#maxEngine.next"}},[e._v(".next()")]),e._v(" ⇒ "),t("code",[e._v("number")])])])])]),e._v(" "),t("p",[t("a",{attrs:{name:"maxEngine.range"}})]),e._v(" "),t("h3",{attrs:{id:"maxengine-range-array-number"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maxengine-range-array-number"}},[e._v("#")]),e._v(" maxEngine.range : "),t("code",[e._v("Array.<number>")])]),e._v(" "),t("p",[e._v("The min / max number range (e.g. "),t("code",[e._v("[1, 10]")]),e._v(").")]),e._v(" "),t("p",[e._v("This "),t("em",[e._v("must")]),e._v(" be set for the "),t("code",[e._v("next()")]),e._v(" method to return the correct last index.")]),e._v(" "),t("p",[t("strong",[e._v("Kind")]),e._v(": static property of "),t("a",{attrs:{href:"#maxEngine"}},[t("code",[e._v("maxEngine")])]),t("br"),e._v(" "),t("strong",[e._v("Example")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("maxEngine"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("range "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[t("a",{attrs:{name:"maxEngine.next"}})]),e._v(" "),t("h3",{attrs:{id:"maxengine-next-⇒-number"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maxengine-next-⇒-number"}},[e._v("#")]),e._v(" maxEngine.next() ⇒ "),t("code",[e._v("number")])]),e._v(" "),t("p",[e._v("Returns the maximum number index for the range")]),e._v(" "),t("p",[t("strong",[e._v("Kind")]),e._v(": static method of "),t("a",{attrs:{href:"#maxEngine"}},[t("code",[e._v("maxEngine")])]),t("br"),e._v(" "),t("a",{attrs:{name:"minEngine"}})]),e._v(" "),t("h2",{attrs:{id:"minengine-object"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minengine-object"}},[e._v("#")]),e._v(" minEngine : "),t("code",[e._v("Object")])]),e._v(" "),t("p",[e._v("Engine that always returns the minimum value.\nUsed internally for calculating min roll values.")]),e._v(" "),t("p",[t("strong",[e._v("Kind")]),e._v(": global constant"),t("br"),e._v(" "),t("strong",[e._v("Since")]),e._v(": 4.2.0"),t("br"),e._v(" "),t("a",{attrs:{name:"minEngine.next"}})]),e._v(" "),t("h3",{attrs:{id:"minengine-next-⇒-number"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minengine-next-⇒-number"}},[e._v("#")]),e._v(" minEngine.next() ⇒ "),t("code",[e._v("number")])]),e._v(" "),t("p",[e._v("Returns the minimum number index, "),t("code",[e._v("0")])]),e._v(" "),t("p",[t("strong",[e._v("Kind")]),e._v(": static method of "),t("a",{attrs:{href:"#minEngine"}},[t("code",[e._v("minEngine")])]),t("br"),e._v(" "),t("a",{attrs:{name:"engines"}})]),e._v(" "),t("h2",{attrs:{id:"engines-object"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#engines-object"}},[e._v("#")]),e._v(" engines : "),t("code",[e._v("Object")])]),e._v(" "),t("p",[e._v("List of built-in number generator engines.")]),e._v(" "),t("p",[t("strong",[e._v("Kind")]),e._v(": global constant"),t("br"),e._v(" "),t("strong",[e._v("See")]),e._v(": This uses "),t("a",{attrs:{href:"https://github.com/ckknight/random-js",target:"_blank",rel:"noopener noreferrer"}},[e._v("random-js"),t("OutboundLink")],1),e._v(".\nFor details of the engines, check the "),t("a",{attrs:{href:"https://github.com/ckknight/random-js#engines",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),t("OutboundLink")],1),e._v("."),t("br"),e._v(" "),t("strong",[e._v("Since")]),e._v(": 4.2.0")])])}),[],!1,null,null,null);n.default=r.exports}}]);