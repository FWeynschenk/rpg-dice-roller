(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{555:function(t,e,a){"use strict";a.r(e);var l=a(25),s=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"rollresult"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollresult"}},[t._v("#")]),t._v(" RollResult")]),t._v(" "),a("p",[a("a",{attrs:{name:"RollResult"}})]),t._v(" "),a("h2",{attrs:{id:"rollresult-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollresult-2"}},[t._v("#")]),t._v(" RollResult")]),t._v(" "),a("p",[t._v("A "),a("code",[t._v("RollResult")]),t._v(" represents the value and applicable modifiers for a single die roll")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("You will probably not need to create your own "),a("code",[t._v("RollResult")]),t._v(" instances, unless you're importing\nrolls, but "),a("code",[t._v("RollResult")]),t._v(" objects will be returned when rolling dice.")])]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": global class")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#RollResult"}},[t._v("RollResult")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#new_RollResult_new"}},[t._v("new RollResult(value, [modifiers], [useInTotal])")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#RollResult+calculationValue"}},[t._v(".calculationValue")]),t._v(" ⇒ "),a("code",[t._v("number")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#RollResult+calculationValue"}},[t._v(".calculationValue")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#RollResult+initialValue"}},[t._v(".initialValue")]),t._v(" ⇒ "),a("code",[t._v("number")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#RollResult+modifierFlags"}},[t._v(".modifierFlags")]),t._v(" ⇒ "),a("code",[t._v("string")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#RollResult+modifiers"}},[t._v(".modifiers")]),t._v(" ⇒ "),a("code",[t._v("Set.<string>")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#RollResult+modifiers"}},[t._v(".modifiers")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#RollResult+useInTotal"}},[t._v(".useInTotal")]),t._v(" ⇒ "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#RollResult+useInTotal"}},[t._v(".useInTotal")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#RollResult+value"}},[t._v(".value")]),t._v(" ⇒ "),a("code",[t._v("number")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#RollResult+value"}},[t._v(".value")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#RollResult+toJSON"}},[t._v(".toJSON()")]),t._v(" ⇒ "),a("code",[t._v("Object")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#RollResult+toString"}},[t._v(".toString()")]),t._v(" ⇒ "),a("code",[t._v("string")])])])])]),t._v(" "),a("p",[a("a",{attrs:{name:"new_RollResult_new"}})]),t._v(" "),a("h3",{attrs:{id:"new-rollresult-value-modifiers-useintotal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-rollresult-value-modifiers-useintotal"}},[t._v("#")]),t._v(" new RollResult(value, [modifiers], [useInTotal])")]),t._v(" "),a("p",[t._v("Create a "),a("code",[t._v("RollResult")]),t._v(" instance.")]),t._v(" "),a("p",[a("code",[t._v("value")]),t._v(" can be a number, or an object containing a list of different values.\nThis allows you to specify the "),a("code",[t._v("initialValue")]),t._v(", "),a("code",[t._v("value")]),t._v(" and "),a("code",[t._v("calculationValue")]),t._v(" with different\nvalues.")]),t._v(" "),a("p",[a("strong",[t._v("Throws")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("TypeError")]),t._v(" Result value, calculation value, or modifiers are invalid")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[a("code",[t._v("number")]),t._v(" | "),a("code",[t._v("Object")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The value rolled")])]),t._v(" "),a("tr",[a("td",[t._v("[value.value]")]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The value with modifiers applied")])]),t._v(" "),a("tr",[a("td",[t._v("[value.initialValue]")]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The initial, unmodified value rolled")])]),t._v(" "),a("tr",[a("td",[t._v("[value.calculationValue]")]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The value used in calculations")])]),t._v(" "),a("tr",[a("td",[t._v("[modifiers]")]),t._v(" "),a("td",[a("code",[t._v("Array.<string>")]),t._v(" | "),a("code",[t._v("Set.<string>")])]),t._v(" "),a("td",[a("code",[t._v("[]")])]),t._v(" "),a("td",[t._v("List of modifier names that affect this roll")])]),t._v(" "),a("tr",[a("td",[t._v("[useInTotal]")]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("Whether to include the roll value when calculating totals")])])])]),t._v(" "),a("p",[a("strong",[t._v("Example")]),t._v(" "),a("em",[t._v("(Numerical value)")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RollResult")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Example")]),t._v(" "),a("em",[t._v("(Object value)")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// must provide either `value` or `initialValue`")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `calculationValue` is optional.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RollResult")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  initialValue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  calculationValue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Example")]),t._v(" "),a("em",[t._v("(With modifiers)")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RollResult")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'explode'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'critical-success'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("a",{attrs:{name:"RollResult+calculationValue"}})]),t._v(" "),a("h3",{attrs:{id:"rollresult-calculationvalue-⇒-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollresult-calculationvalue-⇒-number"}},[t._v("#")]),t._v(" rollResult.calculationValue ⇒ "),a("code",[t._v("number")])]),t._v(" "),a("p",[t._v("The value to use in calculations.\nThis may be changed by modifiers.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance property of "),a("a",{attrs:{href:"#RollResult"}},[a("code",[t._v("RollResult")])]),a("br"),t._v(" "),a("a",{attrs:{name:"RollResult+calculationValue"}})]),t._v(" "),a("h3",{attrs:{id:"rollresult-calculationvalue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollresult-calculationvalue"}},[t._v("#")]),t._v(" rollResult.calculationValue")]),t._v(" "),a("p",[t._v("Set the value to use in calculations.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance property of "),a("a",{attrs:{href:"#RollResult"}},[a("code",[t._v("RollResult")])]),a("br"),t._v(" "),a("strong",[t._v("Throws")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("TypeError")]),t._v(" value is invalid")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[a("code",[t._v("number")])])])])]),t._v(" "),a("p",[a("a",{attrs:{name:"RollResult+initialValue"}})]),t._v(" "),a("h3",{attrs:{id:"rollresult-initialvalue-⇒-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollresult-initialvalue-⇒-number"}},[t._v("#")]),t._v(" rollResult.initialValue ⇒ "),a("code",[t._v("number")])]),t._v(" "),a("p",[t._v("The initial roll value before any modifiers.")]),t._v(" "),a("p",[t._v("Not used for calculations and is just for reference.\nYou probably want "),a("code",[t._v("value")]),t._v(" instead.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance property of "),a("a",{attrs:{href:"#RollResult"}},[a("code",[t._v("RollResult")])]),a("br"),t._v(" "),a("strong",[t._v("See")]),t._v(": "),a("a",{attrs:{href:"#RollResult+value"}},[t._v("value")]),a("br"),t._v(" "),a("a",{attrs:{name:"RollResult+modifierFlags"}})]),t._v(" "),a("h3",{attrs:{id:"rollresult-modifierflags-⇒-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollresult-modifierflags-⇒-string"}},[t._v("#")]),t._v(" rollResult.modifierFlags ⇒ "),a("code",[t._v("string")])]),t._v(" "),a("p",[t._v("The visual flags for the modifiers that affect the roll.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance property of "),a("a",{attrs:{href:"#RollResult"}},[a("code",[t._v("RollResult")])]),a("br"),t._v(" "),a("strong",[t._v("See")]),t._v(": "),a("a",{attrs:{href:"#RollResult+modifiers"}},[t._v("modifiers")]),a("br"),t._v(" "),a("a",{attrs:{name:"RollResult+modifiers"}})]),t._v(" "),a("h3",{attrs:{id:"rollresult-modifiers-⇒-set-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollresult-modifiers-⇒-set-string"}},[t._v("#")]),t._v(" rollResult.modifiers ⇒ "),a("code",[t._v("Set.<string>")])]),t._v(" "),a("p",[t._v("The names of modifiers that affect the roll.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance property of "),a("a",{attrs:{href:"#RollResult"}},[a("code",[t._v("RollResult")])]),a("br"),t._v(" "),a("a",{attrs:{name:"RollResult+modifiers"}})]),t._v(" "),a("h3",{attrs:{id:"rollresult-modifiers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollresult-modifiers"}},[t._v("#")]),t._v(" rollResult.modifiers")]),t._v(" "),a("p",[t._v("Set the modifier names that affect the roll.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance property of "),a("a",{attrs:{href:"#RollResult"}},[a("code",[t._v("RollResult")])]),a("br"),t._v(" "),a("strong",[t._v("Throws")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("TypeError")]),t._v(" modifiers must be a Set or array of modifier names")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[a("code",[t._v("Array.<string>")]),t._v(" | "),a("code",[t._v("Set.<string>")])])])])]),t._v(" "),a("p",[a("strong",[t._v("Example")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("rollResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("modifiers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'explode'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'re-roll'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("a",{attrs:{name:"RollResult+useInTotal"}})]),t._v(" "),a("h3",{attrs:{id:"rollresult-useintotal-⇒-boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollresult-useintotal-⇒-boolean"}},[t._v("#")]),t._v(" rollResult.useInTotal ⇒ "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Whether to use the value in total calculations or not.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance property of "),a("a",{attrs:{href:"#RollResult"}},[a("code",[t._v("RollResult")])]),a("br"),t._v(" "),a("a",{attrs:{name:"RollResult+useInTotal"}})]),t._v(" "),a("h3",{attrs:{id:"rollresult-useintotal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollresult-useintotal"}},[t._v("#")]),t._v(" rollResult.useInTotal")]),t._v(" "),a("p",[t._v("Set whether to use the value in total calculations or not.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance property of "),a("a",{attrs:{href:"#RollResult"}},[a("code",[t._v("RollResult")])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[a("code",[t._v("boolean")])])])])]),t._v(" "),a("p",[a("a",{attrs:{name:"RollResult+value"}})]),t._v(" "),a("h3",{attrs:{id:"rollresult-value-⇒-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollresult-value-⇒-number"}},[t._v("#")]),t._v(" rollResult.value ⇒ "),a("code",[t._v("number")])]),t._v(" "),a("p",[t._v("Value of the roll after modifiers have been applied.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance property of "),a("a",{attrs:{href:"#RollResult"}},[a("code",[t._v("RollResult")])]),a("br"),t._v(" "),a("a",{attrs:{name:"RollResult+value"}})]),t._v(" "),a("h3",{attrs:{id:"rollresult-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollresult-value"}},[t._v("#")]),t._v(" rollResult.value")]),t._v(" "),a("p",[t._v("Set the roll value.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance property of "),a("a",{attrs:{href:"#RollResult"}},[a("code",[t._v("RollResult")])]),a("br"),t._v(" "),a("strong",[t._v("Throws")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("RangeError")]),t._v(" value must be finite")]),t._v(" "),a("li",[a("code",[t._v("TypeError")]),t._v(" value is invalid")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[a("code",[t._v("number")])])])])]),t._v(" "),a("p",[a("a",{attrs:{name:"RollResult+toJSON"}})]),t._v(" "),a("h3",{attrs:{id:"rollresult-tojson-⇒-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollresult-tojson-⇒-object"}},[t._v("#")]),t._v(" rollResult.toJSON() ⇒ "),a("code",[t._v("Object")])]),t._v(" "),a("p",[t._v("Return an object for JSON serialising.")]),t._v(" "),a("p",[t._v("This is called automatically when JSON encoding the object.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance method of "),a("a",{attrs:{href:"#RollResult"}},[a("code",[t._v("RollResult")])]),a("br"),t._v(" "),a("a",{attrs:{name:"RollResult+toString"}})]),t._v(" "),a("h3",{attrs:{id:"rollresult-tostring-⇒-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollresult-tostring-⇒-string"}},[t._v("#")]),t._v(" rollResult.toString() ⇒ "),a("code",[t._v("string")])]),t._v(" "),a("p",[t._v("Return the String representation of the object.")]),t._v(" "),a("p",[t._v("This is called automatically when casting the object to a string.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": instance method of "),a("a",{attrs:{href:"#RollResult"}},[a("code",[t._v("RollResult")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);