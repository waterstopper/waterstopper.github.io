importScripts("kotlin_kotlin.js");

var addImport;
var startImport;
var preload;
var writeFromMainWorker;
var currentImportNode;
var currentRoots;
var currentFileTable;

(function (root, factory) {
    if (typeof define === "function" && define.amd)
        define(["exports", "./kotlin_kotlin.js"], factory);
    else if (typeof exports === "object")
        factory(module.exports, require("./kotlin_kotlin.js"));
    else {
        if (typeof kotlin_kotlin === "undefined") {
            throw new Error(
                "Error loading module 'regina_interpreter'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'regina_interpreter'."
            );
        }
        root.regina_interpreter = factory(
            typeof regina_interpreter === "undefined" ? {} : regina_interpreter,
            kotlin_kotlin
        );
    }
})(this, function (_, kotlin_kotlin) {
    //region block: imports
    var imul = Math.imul;
    var Exception_init_$Create$ =
        kotlin_kotlin.$crossModule$.Exception_init_$Create$;
    var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
    var Map = kotlin_kotlin.$crossModule$.Map;
    var isInterface = kotlin_kotlin.$crossModule$.isInterface;
    var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
    var hashCode = kotlin_kotlin.$crossModule$.hashCode;
    var equals = kotlin_kotlin.$crossModule$.equals;
    var LinkedHashMap_init_$Create$ =
        kotlin_kotlin.$crossModule$.LinkedHashMap_init_$Create$_1;
    var ensureNotNull = kotlin_kotlin.$crossModule$.ensureNotNull;
    var last = kotlin_kotlin.$crossModule$.last_1;
    var ArrayList_init_$Create$ =
        kotlin_kotlin.$crossModule$.ArrayList_init_$Create$_1;
    var Triple = kotlin_kotlin.$crossModule$.Triple;
    var toList = kotlin_kotlin.$crossModule$.toList_1;
    var emptyList = kotlin_kotlin.$crossModule$.emptyList;
    var last_0 = kotlin_kotlin.$crossModule$.last;
    var first = kotlin_kotlin.$crossModule$.first;
    var removeLast = kotlin_kotlin.$crossModule$.removeLast;
    var toString = kotlin_kotlin.$crossModule$.toString_2;
    var toString_0 = kotlin_kotlin.$crossModule$.toString_1;
    var getKClass = kotlin_kotlin.$crossModule$.getKClass;
    var listOf = kotlin_kotlin.$crossModule$.listOf;
    var Random = kotlin_kotlin.$crossModule$.Random;
    var toInt = kotlin_kotlin.$crossModule$.toInt;
    var NumberFormatException =
        kotlin_kotlin.$crossModule$.NumberFormatException;
    var numberToInt = kotlin_kotlin.$crossModule$.numberToInt;
    var toDouble = kotlin_kotlin.$crossModule$.toDouble;
    var numberToDouble = kotlin_kotlin.$crossModule$.numberToDouble;
    var charSequenceLength = kotlin_kotlin.$crossModule$.charSequenceLength;
    var ArrayList_init_$Create$_0 =
        kotlin_kotlin.$crossModule$.ArrayList_init_$Create$;
    var charSequenceGet = kotlin_kotlin.$crossModule$.charSequenceGet;
    var toString_1 = kotlin_kotlin.$crossModule$.toString;
    var to = kotlin_kotlin.$crossModule$.to;
    var mutableMapOf = kotlin_kotlin.$crossModule$.mutableMapOf;
    var FloatCompanionObject_getInstance =
        kotlin_kotlin.$crossModule$.FloatCompanionObject_getInstance;
    var mutableListOf = kotlin_kotlin.$crossModule$.mutableListOf;
    var _get_lastIndex__339712501 =
        kotlin_kotlin.$crossModule$._get_lastIndex__339712501;
    var listOf_0 = kotlin_kotlin.$crossModule$.listOf_1;
    var getStringHashCode = kotlin_kotlin.$crossModule$.getStringHashCode;
    var Pair = kotlin_kotlin.$crossModule$.Pair;
    var Char = kotlin_kotlin.$crossModule$.Char;
    var _Char___init__impl__380027157 =
        kotlin_kotlin.$crossModule$._Char___init__impl__380027157;
    var isDigit = kotlin_kotlin.$crossModule$.isDigit;
    var StringBuilder_init_$Create$ =
        kotlin_kotlin.$crossModule$.StringBuilder_init_$Create$;
    var _get_lastIndex__339712501_0 =
        kotlin_kotlin.$crossModule$._get_lastIndex__339712501_1;
    var numberRangeToNumber = kotlin_kotlin.$crossModule$.numberRangeToNumber;
    var substring = kotlin_kotlin.$crossModule$.substring;
    var contains$default = kotlin_kotlin.$crossModule$.contains$default;
    var isWhitespace = kotlin_kotlin.$crossModule$.isWhitespace;
    var isLetter = kotlin_kotlin.$crossModule$.isLetter;
    var isLetterOrDigit = kotlin_kotlin.$crossModule$.isLetterOrDigit;
    var toCharArray = kotlin_kotlin.$crossModule$.toCharArray;
    var collectionSizeOrDefault =
        kotlin_kotlin.$crossModule$.collectionSizeOrDefault;
    var joinToString$default = kotlin_kotlin.$crossModule$.joinToString$default;
    var captureStack = kotlin_kotlin.$crossModule$.captureStack;
    var Exception = kotlin_kotlin.$crossModule$.Exception;
    var Exception_init_$Init$ =
        kotlin_kotlin.$crossModule$.Exception_init_$Init$;
    var getKClassFromExpression =
        kotlin_kotlin.$crossModule$.getKClassFromExpression;
    var first_0 = kotlin_kotlin.$crossModule$.first_1;
    var plus = kotlin_kotlin.$crossModule$.plus_1;
    var toMutableList = kotlin_kotlin.$crossModule$.toMutableList;
    var NotImplementedError = kotlin_kotlin.$crossModule$.NotImplementedError;
    var LinkedHashSet_init_$Create$ =
        kotlin_kotlin.$crossModule$.LinkedHashSet_init_$Create$;
    var toList_0 = kotlin_kotlin.$crossModule$.toList;
    var List = kotlin_kotlin.$crossModule$.List;
    var Unit = kotlin_kotlin.$crossModule$.Unit;
    var Enum = kotlin_kotlin.$crossModule$.Enum;
    var MutableList = kotlin_kotlin.$crossModule$.MutableList;
    var checkIndexOverflow = kotlin_kotlin.$crossModule$.checkIndexOverflow;
    var MutableMap = kotlin_kotlin.$crossModule$.MutableMap;
    var downTo = kotlin_kotlin.$crossModule$.downTo;
    var THROW_IAE = kotlin_kotlin.$crossModule$.THROW_IAE;
    var getProgressionLastElement =
        kotlin_kotlin.$crossModule$.getProgressionLastElement;
    var Iterable = kotlin_kotlin.$crossModule$.Iterable;
    var mapCapacity = kotlin_kotlin.$crossModule$.mapCapacity;
    var coerceAtLeast = kotlin_kotlin.$crossModule$.coerceAtLeast;
    var LinkedHashMap_init_$Create$_0 =
        kotlin_kotlin.$crossModule$.LinkedHashMap_init_$Create$;
    var toMutableMap = kotlin_kotlin.$crossModule$.toMutableMap;
    var Collection = kotlin_kotlin.$crossModule$.Collection;
    var compareTo = kotlin_kotlin.$crossModule$.compareTo;
    var plus_0 = kotlin_kotlin.$crossModule$.plus;
    var emptySet = kotlin_kotlin.$crossModule$.emptySet;
    var toMutableSet = kotlin_kotlin.$crossModule$.toMutableSet;
    var toMap = kotlin_kotlin.$crossModule$.toMap;
    var first_1 = kotlin_kotlin.$crossModule$.first_2;
    var split$default = kotlin_kotlin.$crossModule$.split$default_1;
    var StringBuilder = kotlin_kotlin.$crossModule$.StringBuilder;
    var DoubleCompanionObject_getInstance =
        kotlin_kotlin.$crossModule$.DoubleCompanionObject_getInstance;
    var IntCompanionObject_getInstance =
        kotlin_kotlin.$crossModule$.IntCompanionObject_getInstance;
    var compareValues = kotlin_kotlin.$crossModule$.compareValues;
    var Comparator = kotlin_kotlin.$crossModule$.Comparator;
    var IndexOutOfBoundsException =
        kotlin_kotlin.$crossModule$.IndexOutOfBoundsException;
    var reverse = kotlin_kotlin.$crossModule$.reverse;
    var reversed = kotlin_kotlin.$crossModule$.reversed;
    var sortWith = kotlin_kotlin.$crossModule$.sortWith;
    var sortedWith = kotlin_kotlin.$crossModule$.sortedWith;
    var removeRange = kotlin_kotlin.$crossModule$.removeRange;
    var roundToInt = kotlin_kotlin.$crossModule$.roundToInt;
    var isNumber = kotlin_kotlin.$crossModule$.isNumber;
    var indexOf$default = kotlin_kotlin.$crossModule$.indexOf$default;
    var replace$default = kotlin_kotlin.$crossModule$.replace$default;
    var isCharSequence = kotlin_kotlin.$crossModule$.isCharSequence;
    var reversed_0 = kotlin_kotlin.$crossModule$.reversed_1;
    var charArrayOf = kotlin_kotlin.$crossModule$.charArrayOf;
    var split$default_0 = kotlin_kotlin.$crossModule$.split$default;
    var println = kotlin_kotlin.$crossModule$.println;
    //endregion
    ("use strict");
    //region block: pre-declaration
    PositionalException.prototype = Object.create(Exception.prototype);
    PositionalException.prototype.constructor = PositionalException;
    SyntaxException.prototype = Object.create(Exception.prototype);
    SyntaxException.prototype.constructor = SyntaxException;
    NotFoundException.prototype = Object.create(PositionalException.prototype);
    NotFoundException.prototype.constructor = NotFoundException;
    TokenExpectedTypeException.prototype = Object.create(
        SyntaxException.prototype
    );
    TokenExpectedTypeException.prototype.constructor =
        TokenExpectedTypeException;
    ExpectedTypeException.prototype = Object.create(
        PositionalException.prototype
    );
    ExpectedTypeException.prototype.constructor = ExpectedTypeException;
    Declaration.prototype = Object.create(Node.prototype);
    Declaration.prototype.constructor = Declaration;
    ImportNode.prototype = Object.create(Declaration.prototype);
    ImportNode.prototype.constructor = ImportNode;
    FunctionNode.prototype = Object.create(Declaration.prototype);
    FunctionNode.prototype.constructor = FunctionNode;
    TypeNode.prototype = Object.create(Declaration.prototype);
    TypeNode.prototype.constructor = TypeNode;
    ObjectNode.prototype = Object.create(Declaration.prototype);
    ObjectNode.prototype.constructor = ObjectNode;
    Identifier.prototype = Object.create(Node.prototype);
    Identifier.prototype.constructor = Identifier;
    NullValue.prototype = Object.create(Variable.prototype);
    NullValue.prototype.constructor = NullValue;
    Link.prototype = Object.create(Node.prototype);
    Link.prototype.constructor = Link;
    Meta.prototype = Object.create(Node.prototype);
    Meta.prototype.constructor = Meta;
    Invocation.prototype = Object.create(Node.prototype);
    Invocation.prototype.constructor = Invocation;
    Call.prototype = Object.create(Invocation.prototype);
    Call.prototype.constructor = Call;
    Constructor.prototype = Object.create(Invocation.prototype);
    Constructor.prototype.constructor = Constructor;
    ResolvingMode.prototype = Object.create(Enum.prototype);
    ResolvingMode.prototype.constructor = ResolvingMode;
    Index.prototype = Object.create(Node.prototype);
    Index.prototype.constructor = Index;
    NodeTernary.prototype = Object.create(Node.prototype);
    NodeTernary.prototype.constructor = NodeTernary;
    Operator.prototype = Object.create(Node.prototype);
    Operator.prototype.constructor = Operator;
    NumberOperator.prototype = Object.create(Operator.prototype);
    NumberOperator.prototype.constructor = NumberOperator;
    TypeOperator.prototype = Object.create(Operator.prototype);
    TypeOperator.prototype.constructor = TypeOperator;
    Assignment.prototype = Object.create(Operator.prototype);
    Assignment.prototype.constructor = Assignment;
    CycleStatement.prototype = Object.create(Enum.prototype);
    CycleStatement.prototype.constructor = CycleStatement;
    Block.prototype = Object.create(Node.prototype);
    Block.prototype.constructor = Block;
    WordStatement.prototype = Object.create(Node.prototype);
    WordStatement.prototype.constructor = WordStatement;
    NodeDictionary.prototype = Object.create(Node.prototype);
    NodeDictionary.prototype.constructor = NodeDictionary;
    NodeList.prototype = Object.create(Node.prototype);
    NodeList.prototype.constructor = NodeList;
    NodeNull.prototype = Object.create(Node.prototype);
    NodeNull.prototype.constructor = NodeNull;
    NodeNumber.prototype = Object.create(Node.prototype);
    NodeNumber.prototype.constructor = NodeNumber;
    NodeString.prototype = Object.create(Node.prototype);
    NodeString.prototype.constructor = NodeString;
    EmbeddedFunction.prototype = Object.create(RFunction.prototype);
    EmbeddedFunction.prototype.constructor = EmbeddedFunction;
    Property.prototype = Object.create(Variable.prototype);
    Property.prototype.constructor = Property;
    Null.prototype = Object.create(Property.prototype);
    Null.prototype.constructor = Null;
    Type.prototype = Object.create(Property.prototype);
    Type.prototype.constructor = Type;
    Object_0.prototype = Object.create(Type.prototype);
    Object_0.prototype.constructor = Object_0;
    Primitive.prototype = Object.create(Property.prototype);
    Primitive.prototype.constructor = Primitive;
    PDictionary.prototype = Object.create(Primitive.prototype);
    PDictionary.prototype.constructor = PDictionary;
    PNumber.prototype = Object.create(Primitive.prototype);
    PNumber.prototype.constructor = PNumber;
    PDouble.prototype = Object.create(PNumber.prototype);
    PDouble.prototype.constructor = PDouble;
    PInt.prototype = Object.create(PNumber.prototype);
    PInt.prototype.constructor = PInt;
    PList.prototype = Object.create(Primitive.prototype);
    PList.prototype.constructor = PList;
    PString.prototype = Object.create(Primitive.prototype);
    PString.prototype.constructor = PString;
    Operator_0.prototype = Object.create(Token.prototype);
    Operator_0.prototype.constructor = Operator_0;
    ArithmeticOperator.prototype = Object.create(Operator_0.prototype);
    ArithmeticOperator.prototype.constructor = ArithmeticOperator;
    Assignment_0.prototype = Object.create(Operator_0.prototype);
    Assignment_0.prototype.constructor = Assignment_0;
    Invocation_0.prototype = Object.create(Token.prototype);
    Invocation_0.prototype.constructor = Invocation_0;
    Link_0.prototype = Object.create(Token.prototype);
    Link_0.prototype.constructor = Link_0;
    MetaToken.prototype = Object.create(Token.prototype);
    MetaToken.prototype.constructor = MetaToken;
    TokenBlock.prototype = Object.create(Token.prototype);
    TokenBlock.prototype.constructor = TokenBlock;
    TokenIdentifier.prototype = Object.create(Token.prototype);
    TokenIdentifier.prototype.constructor = TokenIdentifier;
    TokenIndex.prototype = Object.create(Token.prototype);
    TokenIndex.prototype.constructor = TokenIndex;
    TokenTernary.prototype = Object.create(Token.prototype);
    TokenTernary.prototype.constructor = TokenTernary;
    TokenWordStatement.prototype = Object.create(Token.prototype);
    TokenWordStatement.prototype.constructor = TokenWordStatement;
    TypeOperator_0.prototype = Object.create(Operator_0.prototype);
    TypeOperator_0.prototype.constructor = TypeOperator_0;
    TokenImport.prototype = Object.create(Token.prototype);
    TokenImport.prototype.constructor = TokenImport;
    TokenType.prototype = Object.create(Token.prototype);
    TokenType.prototype.constructor = TokenType;
    TokenObject.prototype = Object.create(Token.prototype);
    TokenObject.prototype.constructor = TokenObject;
    TokenFunction.prototype = Object.create(Token.prototype);
    TokenFunction.prototype.constructor = TokenFunction;
    TokenDictionary.prototype = Object.create(Token.prototype);
    TokenDictionary.prototype.constructor = TokenDictionary;
    TokenList.prototype = Object.create(Token.prototype);
    TokenList.prototype.constructor = TokenList;
    TokenNull.prototype = Object.create(Token.prototype);
    TokenNull.prototype.constructor = TokenNull;
    TokenNumber.prototype = Object.create(Token.prototype);
    TokenNumber.prototype.constructor = TokenNumber;
    TokenString.prototype = Object.create(Token.prototype);
    TokenString.prototype.constructor = TokenString;
    //endregion
    function Debug() {}
    Debug.$metadata$ = {
        simpleName: "Debug",
        kind: "interface",
        interfaces: [],
    };
    function elementToDebug(element, references) {
        var tmp;
        if (!isInterface(element, NestableDebug)) {
            tmp = element.toDebugClass$default_jlj1oy_k$(
                references,
                false,
                2,
                null
            );
        } else {
            {
                var tmp0_subject = element;
                var tmp_0;
                if (tmp0_subject instanceof Type) {
                    var tmp$ret$0;
                    $l$block: {
                        var tmp0_get_0 = references.types_1;
                        var tmp1_get_0 = element
                            .getDebugId_sdwqy0_k$()
                            ._get_second__4255435031_njbah_k$();
                        tmp$ret$0 = (
                            isInterface(tmp0_get_0, Map)
                                ? tmp0_get_0
                                : THROW_CCE()
                        ).get_1mhr4y_k$(tmp1_get_0);
                        break $l$block;
                    }
                    tmp_0 = tmp$ret$0;
                } else {
                    if (tmp0_subject instanceof PList) {
                        var tmp$ret$1;
                        $l$block_0: {
                            var tmp2_get_0 = references.lists_1;
                            var tmp3_get_0 = element
                                .getDebugId_sdwqy0_k$()
                                ._get_second__4255435031_njbah_k$();
                            tmp$ret$1 = (
                                isInterface(tmp2_get_0, Map)
                                    ? tmp2_get_0
                                    : THROW_CCE()
                            ).get_1mhr4y_k$(tmp3_get_0);
                            break $l$block_0;
                        }
                        tmp_0 = tmp$ret$1;
                    } else {
                        if (tmp0_subject instanceof PDictionary) {
                            var tmp$ret$2;
                            $l$block_1: {
                                var tmp4_get_0 = references.dictionaries_1;
                                var tmp5_get_0 = element
                                    .getDebugId_sdwqy0_k$()
                                    ._get_second__4255435031_njbah_k$();
                                tmp$ret$2 = (
                                    isInterface(tmp4_get_0, Map)
                                        ? tmp4_get_0
                                        : THROW_CCE()
                                ).get_1mhr4y_k$(tmp5_get_0);
                                break $l$block_1;
                            }
                            tmp_0 = tmp$ret$2;
                        } else {
                            {
                                throw Exception_init_$Create$(
                                    "Unexpected type"
                                );
                            }
                        }
                    }
                }
                var resolved = tmp_0;
                if (resolved == null) {
                    var tmp6_set_0 = references.queue_1;
                    var tmp7_set_0 = element.getDebugId_sdwqy0_k$();
                    tmp6_set_0.put_3mhbri_k$(tmp7_set_0, element);
                    Unit_getInstance();
                }
                tmp = element.getDebugId_sdwqy0_k$();
            }
        }
        return tmp;
    }
    function NestableDebug() {}
    NestableDebug.$metadata$ = {
        simpleName: "NestableDebug",
        kind: "interface",
        interfaces: [],
    };
    function DebugType(properties, blankCopy) {
        this.properties_1 = properties;
        this.blankCopy_1 = blankCopy;
    }
    DebugType.prototype.toString = function () {
        return (
            "DebugType(properties=" +
            this.properties_1 +
            ", blankCopy=" +
            this.blankCopy_1 +
            ")"
        );
    };
    DebugType.prototype.hashCode = function () {
        var result = hashCode(this.properties_1);
        result =
            (imul(result, 31) +
                (this.blankCopy_1 == null ? 0 : hashCode(this.blankCopy_1))) |
            0;
        return result;
    };
    DebugType.prototype.equals = function (other) {
        if (this === other) return true;
        if (!(other instanceof DebugType)) return false;
        else {
        }
        var tmp0_other_with_cast =
            other instanceof DebugType ? other : THROW_CCE();
        if (!equals(this.properties_1, tmp0_other_with_cast.properties_1))
            return false;
        if (!equals(this.blankCopy_1, tmp0_other_with_cast.blankCopy_1))
            return false;
        return true;
    };
    DebugType.$metadata$ = {
        simpleName: "DebugType",
        kind: "class",
        interfaces: [Debug],
    };
    function DebugList(properties, blankCopy) {
        this.properties_1 = properties;
        this.blankCopy_1 = blankCopy;
    }
    DebugList.prototype.toString = function () {
        return (
            "DebugList(properties=" +
            this.properties_1 +
            ", blankCopy=" +
            this.blankCopy_1 +
            ")"
        );
    };
    DebugList.prototype.hashCode = function () {
        var result = hashCode(this.properties_1);
        result =
            (imul(result, 31) +
                (this.blankCopy_1 == null ? 0 : this.blankCopy_1.hashCode())) |
            0;
        return result;
    };
    DebugList.prototype.equals = function (other) {
        if (this === other) return true;
        if (!(other instanceof DebugList)) return false;
        else {
        }
        var tmp0_other_with_cast =
            other instanceof DebugList ? other : THROW_CCE();
        if (!equals(this.properties_1, tmp0_other_with_cast.properties_1))
            return false;
        if (!equals(this.blankCopy_1, tmp0_other_with_cast.blankCopy_1))
            return false;
        return true;
    };
    DebugList.$metadata$ = {
        simpleName: "DebugList",
        kind: "class",
        interfaces: [Debug],
    };
    function DebugDictionary(properties, blankCopy) {
        this.properties_1 = properties;
        this.blankCopy_1 = blankCopy;
    }
    DebugDictionary.prototype.toString = function () {
        return (
            "DebugDictionary(properties=" +
            this.properties_1 +
            ", blankCopy=" +
            this.blankCopy_1 +
            ")"
        );
    };
    DebugDictionary.prototype.hashCode = function () {
        var result = hashCode(this.properties_1);
        result =
            (imul(result, 31) +
                (this.blankCopy_1 == null ? 0 : this.blankCopy_1.hashCode())) |
            0;
        return result;
    };
    DebugDictionary.prototype.equals = function (other) {
        if (this === other) return true;
        if (!(other instanceof DebugDictionary)) return false;
        else {
        }
        var tmp0_other_with_cast =
            other instanceof DebugDictionary ? other : THROW_CCE();
        if (!equals(this.properties_1, tmp0_other_with_cast.properties_1))
            return false;
        if (!equals(this.blankCopy_1, tmp0_other_with_cast.blankCopy_1))
            return false;
        return true;
    };
    DebugDictionary.$metadata$ = {
        simpleName: "DebugDictionary",
        kind: "class",
        interfaces: [Debug],
    };
    function References_init_$Init$(
        types,
        lists,
        dictionaries,
        queue,
        $mask0,
        $marker,
        $this
    ) {
        if (!(($mask0 & 1) === 0)) {
            var tmp$ret$0;
            var tmp$ret$0_0;
            $l$block: {
                tmp$ret$0 = LinkedHashMap_init_$Create$();
                tmp$ret$0_0 = Unit_getInstance();
                break $l$block;
            }
            types = tmp$ret$0;
        }
        if (!(($mask0 & 2) === 0)) {
            var tmp$ret$0_1;
            var tmp$ret$1;
            $l$block_0: {
                tmp$ret$0_1 = LinkedHashMap_init_$Create$();
                tmp$ret$1 = Unit_getInstance();
                break $l$block_0;
            }
            lists = tmp$ret$0_1;
        }
        if (!(($mask0 & 4) === 0)) {
            var tmp$ret$0_2;
            var tmp$ret$2;
            $l$block_1: {
                tmp$ret$0_2 = LinkedHashMap_init_$Create$();
                tmp$ret$2 = Unit_getInstance();
                break $l$block_1;
            }
            dictionaries = tmp$ret$0_2;
        }
        if (!(($mask0 & 8) === 0)) {
            var tmp$ret$0_3;
            var tmp$ret$3;
            $l$block_2: {
                tmp$ret$0_3 = LinkedHashMap_init_$Create$();
                tmp$ret$3 = Unit_getInstance();
                break $l$block_2;
            }
            queue = tmp$ret$0_3;
        }
        References.call($this, types, lists, dictionaries, queue);
        return $this;
    }
    function References_init_$Create$(
        types,
        lists,
        dictionaries,
        queue,
        $mask0,
        $marker
    ) {
        return References_init_$Init$(
            types,
            lists,
            dictionaries,
            queue,
            $mask0,
            $marker,
            Object.create(References.prototype)
        );
    }
    function getReference($this, pair) {
        var tmp0_subject = pair._get_first__3232921377_hkbbvj_k$();
        var tmp;
        switch (tmp0_subject) {
            case "Int":
                var tmp_0 = pair._get_second__4255435031_njbah_k$();
                tmp = new PInt(typeof tmp_0 === "number" ? tmp_0 : THROW_CCE());
                break;
            case "Double":
                var tmp_1 = pair._get_second__4255435031_njbah_k$();
                tmp = new PDouble(
                    typeof tmp_1 === "number" ? tmp_1 : THROW_CCE()
                );
                break;
            case "String":
                var tmp_2 = pair._get_second__4255435031_njbah_k$();
                tmp = new PString(
                    typeof tmp_2 === "string" ? tmp_2 : THROW_CCE()
                );
                break;
            case "List":
                var tmp$ret$0;
                $l$block: {
                    var tmp0_get_0 = $this.lists_1;
                    var tmp1_get_0 = pair._get_second__4255435031_njbah_k$();
                    tmp$ret$0 = (
                        isInterface(tmp0_get_0, Map) ? tmp0_get_0 : THROW_CCE()
                    ).get_1mhr4y_k$(tmp1_get_0);
                    break $l$block;
                }

                tmp = ensureNotNull(ensureNotNull(tmp$ret$0).blankCopy_1);
                break;
            case "Dictionary":
                var tmp$ret$1;
                $l$block_0: {
                    var tmp2_get_0 = $this.dictionaries_1;
                    var tmp3_get_0 = pair._get_second__4255435031_njbah_k$();
                    tmp$ret$1 = (
                        isInterface(tmp2_get_0, Map) ? tmp2_get_0 : THROW_CCE()
                    ).get_1mhr4y_k$(tmp3_get_0);
                    break $l$block_0;
                }

                tmp = ensureNotNull(ensureNotNull(tmp$ret$1).blankCopy_1);
                break;
            case "Null":
                tmp = Utils_getInstance()._get_NULL__774226340_csycv8_k$();
                break;
            case "Type":
            case "Object":
                var tmp$ret$2;
                $l$block_1: {
                    var tmp4_get_0 = $this.types_1;
                    var tmp5_get_0 = pair._get_second__4255435031_njbah_k$();
                    tmp$ret$2 = (
                        isInterface(tmp4_get_0, Map) ? tmp4_get_0 : THROW_CCE()
                    ).get_1mhr4y_k$(tmp5_get_0);
                    break $l$block_1;
                }

                tmp = ensureNotNull(ensureNotNull(tmp$ret$2).blankCopy_1);
                break;
            default:
                throw Exception_init_$Create$("Unexpected reference name");
        }
        return tmp;
    }
    function References(types, lists, dictionaries, queue) {
        this.types_1 = types;
        this.lists_1 = lists;
        this.dictionaries_1 = dictionaries;
        this.queue_1 = queue;
    }
    References.prototype._get_types__3648432760_aoxh8o_k$ = function () {
        return this.types_1;
    };
    References.prototype._get_lists__3404727004_eq0xt0_k$ = function () {
        return this.lists_1;
    };
    References.prototype._get_dictionaries__3403772951_eqldyh_k$ = function () {
        return this.dictionaries_1;
    };
    References.prototype._get_queue__3558538464_c6g84g_k$ = function () {
        return this.queue_1;
    };
    References.prototype.copy_mx3fmb_k$ = function (v) {
        var root = v.toDebugClass_dfj843_k$(this, true);
        $l$loop: while (true) {
            var tmp$ret$0;
            $l$block: {
                var tmp0_isNotEmpty_0 = this.queue_1;
                tmp$ret$0 = !tmp0_isNotEmpty_0.isEmpty_y1axqb_k$();
                break $l$block;
            }
            if (!tmp$ret$0) {
                break $l$loop;
            }
            last(
                this.queue_1._get_values__2516944425_tel787_k$()
            ).toDebugClass_dfj843_k$(this, true);
            Unit_getInstance();
        }
        {
            var tmp1_forEach_0 = this.types_1;
            var tmp$ret$1;
            $l$block_0: {
                tmp$ret$1 = tmp1_forEach_0
                    ._get_entries__31877249_iz8n5_k$()
                    .iterator_jk1svi_k$();
                break $l$block_0;
            }
            var tmp0_iterator_1 = tmp$ret$1;
            while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
                var element_2 = tmp0_iterator_1.next_20eer_k$();
                {
                    {
                        var tmp0_forEach_0_4 =
                            element_2._get_value__3683422336_a43j40_k$()
                                .properties_1;
                        var tmp$ret$2;
                        $l$block_1: {
                            tmp$ret$2 = tmp0_forEach_0_4
                                ._get_entries__31877249_iz8n5_k$()
                                .iterator_jk1svi_k$();
                            break $l$block_1;
                        }
                        var tmp0_iterator_1_5 = tmp$ret$2;
                        while (tmp0_iterator_1_5.hasNext_bitz1p_k$()) {
                            var element_2_6 = tmp0_iterator_1_5.next_20eer_k$();
                            {
                                var tmp = ensureNotNull(
                                    element_2._get_value__3683422336_a43j40_k$()
                                        .blankCopy_1
                                );
                                var tmp_0 =
                                    element_2_6._get_key__857139730_e6bh8y_k$();
                                var tmp_1 = Utils_getInstance();
                                var tmp_2 = getReference(
                                    this,
                                    element_2_6._get_value__3683422336_a43j40_k$()
                                );
                                tmp.setProperty_tmx3oq_k$(
                                    tmp_0,
                                    tmp_1.toProperty$default_127ngr_k$(
                                        tmp_2,
                                        null,
                                        1,
                                        null
                                    )
                                );
                            }
                        }
                    }
                }
            }
        }
        {
            var tmp2_forEach_0 = this.lists_1;
            var tmp$ret$3;
            $l$block_2: {
                tmp$ret$3 = tmp2_forEach_0
                    ._get_entries__31877249_iz8n5_k$()
                    .iterator_jk1svi_k$();
                break $l$block_2;
            }
            var tmp0_iterator_1_0 = tmp$ret$3;
            while (tmp0_iterator_1_0.hasNext_bitz1p_k$()) {
                var element_2_0 = tmp0_iterator_1_0.next_20eer_k$();
                {
                    {
                        var tmp0_forEach_0_4_0 =
                            element_2_0._get_value__3683422336_a43j40_k$()
                                .properties_1;
                        var tmp0_iterator_1_5_0 =
                            tmp0_forEach_0_4_0.iterator_jk1svi_k$();
                        while (tmp0_iterator_1_5_0.hasNext_bitz1p_k$()) {
                            var element_2_6_0 =
                                tmp0_iterator_1_5_0.next_20eer_k$();
                            {
                                ensureNotNull(
                                    element_2_0._get_value__3683422336_a43j40_k$()
                                        .blankCopy_1
                                )
                                    .getPValue_berniv_k$()
                                    .add_1j60pz_k$(
                                        getReference(this, element_2_6_0)
                                    );
                                Unit_getInstance();
                            }
                        }
                    }
                }
            }
        }
        {
            var tmp3_forEach_0 = this.dictionaries_1;
            var tmp$ret$4;
            $l$block_3: {
                tmp$ret$4 = tmp3_forEach_0
                    ._get_entries__31877249_iz8n5_k$()
                    .iterator_jk1svi_k$();
                break $l$block_3;
            }
            var tmp0_iterator_1_1 = tmp$ret$4;
            while (tmp0_iterator_1_1.hasNext_bitz1p_k$()) {
                var element_2_1 = tmp0_iterator_1_1.next_20eer_k$();
                {
                    {
                        var tmp0_forEach_0_4_1 =
                            element_2_1._get_value__3683422336_a43j40_k$()
                                .properties_1;
                        var tmp$ret$5;
                        $l$block_4: {
                            tmp$ret$5 = tmp0_forEach_0_4_1
                                ._get_entries__31877249_iz8n5_k$()
                                .iterator_jk1svi_k$();
                            break $l$block_4;
                        }
                        var tmp0_iterator_1_5_1 = tmp$ret$5;
                        while (tmp0_iterator_1_5_1.hasNext_bitz1p_k$()) {
                            var element_2_6_1 =
                                tmp0_iterator_1_5_1.next_20eer_k$();
                            {
                                {
                                    var tmp0_set_0_4_7 = ensureNotNull(
                                        element_2_1._get_value__3683422336_a43j40_k$()
                                            .blankCopy_1
                                    ).getPValue_berniv_k$();
                                    var tmp1_set_0_5_8 = getReference(
                                        this,
                                        element_2_6_1._get_key__857139730_e6bh8y_k$()
                                    );
                                    var tmp2_set_0_6_9 = getReference(
                                        this,
                                        element_2_6_1._get_value__3683422336_a43j40_k$()
                                    );
                                    tmp0_set_0_4_7.put_3mhbri_k$(
                                        tmp1_set_0_5_8,
                                        tmp2_set_0_6_9
                                    );
                                    Unit_getInstance();
                                }
                            }
                        }
                    }
                }
            }
        }
        return getReference(this, root);
    };
    References.$metadata$ = {
        simpleName: "References",
        kind: "class",
        interfaces: [],
    };
    function Logger() {
        Logger_instance = this;
        var tmp = this;
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = ArrayList_init_$Create$();
            break $l$block;
        }
        tmp.warnings_1 = tmp$ret$0;
        this.error_1 = null;
    }
    Logger.prototype.addWarning_wjr273_k$ = function (token, message) {
        return this.warnings_1.add_1j60pz_k$(
            new Triple(
                token
                    ._get_position__3188952002_iahqv2_k$()
                    ._get_first__3232921377_hkbbvj_k$(),
                token
                    ._get_position__3188952002_iahqv2_k$()
                    ._get_second__4255435031_njbah_k$(),
                message
            )
        );
    };
    Logger.$metadata$ = {
        simpleName: "Logger",
        kind: "object",
        interfaces: [],
    };
    var Logger_instance;
    function Logger_getInstance() {
        if (Logger_instance == null) new Logger();
        return Logger_instance;
    }

    function main() {
        preload = (dict) => {
            Object.entries(dict).forEach(([path, content]) =>
                FileSystem_getInstance().write_kwtaoc_k$(path, content, true)
            );
        };
        writeFromMainWorker = (path, content) => {
            if (content == null)
                // check importNode again
                PathBuilder_getInstance().getFullPath_k5ltdb_k$(
                    currentImportNode,
                    currentRoots,
                    currentFileTable,
                    false
                );
            FileSystem_getInstance().write_kwtaoc_k$(path, content, true);
        };
        startImport = (startFileName) => {
            var tmp =
                PathBuilder_getInstance().getNodes_jwpeo6_k$(startFileName);
            var igc = new ImportGraphCreator(
                startFileName,
                tmp,
                mutableListOf([""])
            );
            createGraphJS(igc);
            requestNextImportJS(igc);
            addImport = (fileName) => {
                // adding import
                addNextImportJS(igc, fileName);
                // requesting next import or starting evaluation
                requestNextImportJS(igc);
            };
        };
        postMessage({ type: "ready" });
    }
    function createGraphJS(importGraphCreator) {
        importGraphCreator
            ._get_visitedTables__1623761026_ququ0y_k$()
            .add_1j60pz_k$(
                new FileTable(
                    importGraphCreator._get_mainFileName__2583226955_sb4jat_k$(),
                    (importGraphCreator
                        ._get_imports__1703642979_s6azc3_k$()
                        ._get_size__809037418_ddoh9m_k$() +
                        1) |
                        0
                )
            );
        Unit_getInstance();
        {
            var tmp0_set_0 =
                importGraphCreator._get_imports__1703642979_s6azc3_k$();
            var tmp1_set_0 =
                importGraphCreator._get_mainFileName__2583226955_sb4jat_k$();
            var tmp2_set_0 = last_0(
                importGraphCreator._get_visitedTables__1623761026_ququ0y_k$()
            );
            tmp0_set_0.put_3mhbri_k$(tmp1_set_0, tmp2_set_0);
            Unit_getInstance();
        }
        importGraphCreator.addDeclarationsToFileTable_bug9i2_k$(
            first(
                importGraphCreator._get_visitedTables__1623761026_ququ0y_k$()
            ),
            importGraphCreator._get_startingNodes__3650654368_anlv1c_k$()
        );
    }
    function addNextImportJS(importGraphCreator, fileName) {
        var nodes = PathBuilder_getInstance().getNodes_jwpeo6_k$(fileName);
        var nextFileTable = removeLast(
            importGraphCreator._get_importStack__3899561998_6jewoi_k$()
        );
        importGraphCreator
            ._get_visitedTables__1623761026_ququ0y_k$()
            .add_1j60pz_k$(nextFileTable);
        Unit_getInstance();
        importGraphCreator.addDeclarationsToFileTable_bug9i2_k$(
            nextFileTable,
            nodes
        );
    }
    function requestNextImportJS(importGraphCreator) {
        var tmp$ret$0;
        $l$block: {
            var tmp0_isNotEmpty_0 =
                importGraphCreator._get_importStack__3899561998_6jewoi_k$();
            tmp$ret$0 = !tmp0_isNotEmpty_0.isEmpty_y1axqb_k$();
            break $l$block;
        }
        if (tmp$ret$0) {
            sendMessage(
                new Message(
                    "import",
                    last_0(
                        importGraphCreator._get_importStack__3899561998_6jewoi_k$()
                    )._get_filePath__151144490_2hzju2_k$()
                )
            );
        } else {
            startEvaluationJS(importGraphCreator);
        }
    }
    function startEvaluationJS(igc) {
        initializeSuperTypes(igc._get_supertypes__1291562605_lcyo31_k$());
        var tmp0_iterator = igc
            ._get_visitedTables__1623761026_ququ0y_k$()
            .iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var fileTable = tmp0_iterator.next_20eer_k$();
            new Analyzer(fileTable);
            Unit_getInstance();
        }
        var tmp = first(igc._get_visitedTables__1623761026_ququ0y_k$())
            .getMain_18urbl_k$()
            ._get_body__793495785_d4fd9l_k$();
        tmp.evaluate_hfj3qo_k$(
            SymbolTable_init_$Create$(
                null,
                null,
                first(igc._get_visitedTables__1623761026_ququ0y_k$()),
                ResolvingMode_FUNCTION_getInstance(),
                3,
                null
            )
        );
        postMessage({ type: "finished" });
        close();
    }
    function Optional_init_$Init$(value, isGood, $mask0, $marker, $this) {
        if (!(($mask0 & 1) === 0)) value = null;
        if (!(($mask0 & 2) === 0)) isGood = false;
        Optional.call($this, value, isGood);
        return $this;
    }
    function Optional_init_$Create$(value, isGood, $mask0, $marker) {
        return Optional_init_$Init$(
            value,
            isGood,
            $mask0,
            $marker,
            Object.create(Optional.prototype)
        );
    }
    function Optional(value, isGood) {
        this.value_1 = value;
        this.isGood_1 = isGood;
        if (!(this.value_1 == null)) {
            this.isGood_1 = true;
        }
    }
    Optional.prototype._get_value__3683422336_a43j40_k$ = function () {
        return this.value_1;
    };
    Optional.prototype._get_isGood__50316004_tyg2s_k$ = function () {
        return this.isGood_1;
    };
    Optional.prototype.toString = function () {
        return (
            "Optional(value=" +
            toString(this.value_1) +
            ", isGood=" +
            this.isGood_1 +
            ")"
        );
    };
    Optional.prototype.hashCode = function () {
        var result = this.value_1 == null ? 0 : hashCode(this.value_1);
        result = (imul(result, 31) + (this.isGood_1 | 0)) | 0;
        return result;
    };
    Optional.prototype.equals = function (other) {
        if (this === other) return true;
        if (!(other instanceof Optional)) return false;
        else {
        }
        var tmp0_other_with_cast =
            other instanceof Optional ? other : THROW_CCE();
        if (!equals(this.value_1, tmp0_other_with_cast.value_1)) return false;
        if (!(this.isGood_1 === tmp0_other_with_cast.isGood_1)) return false;
        return true;
    };
    Optional.$metadata$ = {
        simpleName: "Optional",
        kind: "class",
        interfaces: [],
    };
    function Tuple4(first, second, third, fourth) {
        this.first_1 = first;
        this.second_1 = second;
        this.third_1 = third;
        this.fourth_1 = fourth;
    }
    Tuple4.prototype.component1_7eebsc_k$ = function () {
        return this.first_1;
    };
    Tuple4.prototype.component2_7eebsb_k$ = function () {
        return this.second_1;
    };
    Tuple4.prototype.component3_7eebsa_k$ = function () {
        return this.third_1;
    };
    Tuple4.prototype.component4_7eebs9_k$ = function () {
        return this.fourth_1;
    };
    Tuple4.prototype.toString = function () {
        return (
            "Tuple4(first=" +
            this.first_1 +
            ", second=" +
            this.second_1 +
            ", third=" +
            this.third_1 +
            ", fourth=" +
            this.fourth_1 +
            ")"
        );
    };
    Tuple4.prototype.hashCode = function () {
        var result = this.first_1 == null ? 0 : hashCode(this.first_1);
        result =
            (imul(result, 31) +
                (this.second_1 == null ? 0 : hashCode(this.second_1))) |
            0;
        result =
            (imul(result, 31) +
                (this.third_1 == null ? 0 : hashCode(this.third_1))) |
            0;
        result =
            (imul(result, 31) +
                (this.fourth_1 == null ? 0 : hashCode(this.fourth_1))) |
            0;
        return result;
    };
    Tuple4.prototype.equals = function (other) {
        if (this === other) return true;
        if (!(other instanceof Tuple4)) return false;
        else {
        }
        var tmp0_other_with_cast =
            other instanceof Tuple4 ? other : THROW_CCE();
        if (!equals(this.first_1, tmp0_other_with_cast.first_1)) return false;
        if (!equals(this.second_1, tmp0_other_with_cast.second_1)) return false;
        if (!equals(this.third_1, tmp0_other_with_cast.third_1)) return false;
        if (!equals(this.fourth_1, tmp0_other_with_cast.fourth_1)) return false;
        return true;
    };
    Tuple4.$metadata$ = {
        simpleName: "Tuple4",
        kind: "class",
        interfaces: [],
    };
    function Evaluation() {
        Evaluation_instance = this;
        this.trainingWheels_1 = true;
    }
    Evaluation.prototype.evaluate_n4zkb6_k$ = function (fileName, roots) {
        var fileTable = analyzeSemantics$default(
            fileName,
            roots,
            null,
            4,
            null
        );
        var tmp = fileTable
            .getMain_18urbl_k$()
            ._get_body__793495785_d4fd9l_k$();
        tmp.evaluate_hfj3qo_k$(
            SymbolTable_init_$Create$(
                null,
                null,
                fileTable,
                ResolvingMode_FUNCTION_getInstance(),
                3,
                null
            )
        );
        Unit_getInstance();
    };
    Evaluation.$metadata$ = {
        simpleName: "Evaluation",
        kind: "object",
        interfaces: [],
    };
    var Evaluation_instance;
    function Evaluation_getInstance() {
        if (Evaluation_instance == null) new Evaluation();
        return Evaluation_instance;
    }
    function FunctionFactory$initializeEmbedded$lambda() {
        return function (token, args) {
            sendMessage(
                new Message(
                    "log",
                    toString_0(
                        Utils_getInstance().getIdent_dfe2u9_k$(token, "x", args)
                    )
                )
            );
            return Utils_getInstance()._get_NULL__774226340_csycv8_k$();
        };
    }
    function FunctionFactory$initializeEmbedded$lambda_0() {
        return function (token, args) {
            var tmp = toString_0(
                Utils_getInstance().getIdent_dfe2u9_k$(token, "x", args)
            );
            var tmp_0 = args
                .getFileTable_m3scuc_k$()
                ._get_filePath__151144490_2hzju2_k$();
            throw PositionalException_init_$Create$(
                tmp,
                tmp_0,
                token,
                null,
                0,
                24,
                null
            );
        };
    }
    function FunctionFactory$initializeEmbedded$lambda_1() {
        return function (
            _anonymous_parameter_0__2695192052,
            _anonymous_parameter_1__2695192083
        ) {
            return readLine();
        };
    }
    function FunctionFactory$initializeEmbedded$lambda_2() {
        return function (token, args) {
            var fileName = Utils_getInstance().getIdent_dfe2u9_k$(
                token,
                "path",
                args
            );
            Unit_getInstance();
            var content = Utils_getInstance().getIdent_dfe2u9_k$(
                token,
                "content",
                args
            );
            Unit_getInstance();
            var tmp;
            var tmp_0;
            if (!(fileName instanceof PString)) {
                tmp_0 = true;
            } else {
                {
                    tmp_0 = !(content instanceof PString);
                }
            }
            if (tmp_0) {
                var tmp_1 = listOf(getKClass(PString));
                var tmp_2 = args
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw ExpectedTypeException_init_$Create$(
                    tmp_1,
                    tmp_2,
                    token,
                    null,
                    false,
                    24,
                    null
                );
            } else {
            }
            FileSystem_getInstance().write_kwtaoc_k$(
                fileName.getPValue_berniv_k$(),
                content.getPValue_berniv_k$()
            );
            return Utils_getInstance()._get_NULL__774226340_csycv8_k$();
        };
    }
    function FunctionFactory$initializeEmbedded$lambda_3() {
        return function (token, args) {
            var fileName = Utils_getInstance().getIdent_dfe2u9_k$(
                token,
                "path",
                args
            );
            Unit_getInstance();
            var tmp;
            if (!(fileName instanceof PString)) {
                var tmp_0 = listOf(getKClass(PString));
                var tmp_1 = args
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw ExpectedTypeException_init_$Create$(
                    tmp_0,
                    tmp_1,
                    token,
                    null,
                    false,
                    24,
                    null
                );
            } else {
            }
            return FileSystem_getInstance().read_bwmtyj_k$(
                fileName.getPValue_berniv_k$()
            );
        };
    }
    function FunctionFactory$initializeEmbedded$lambda_4() {
        return function (token, args) {
            var fileName = Utils_getInstance().getIdent_dfe2u9_k$(
                token,
                "path",
                args
            );
            Unit_getInstance();
            var tmp;
            if (!(fileName instanceof PString)) {
                var tmp_0 = listOf(getKClass(PString));
                var tmp_1 = args
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw ExpectedTypeException_init_$Create$(
                    tmp_0,
                    tmp_1,
                    token,
                    null,
                    false,
                    24,
                    null
                );
            } else {
            }
            return Utils_getInstance().toPInt_yzud9u_k$(
                FileSystem_getInstance().exists_9c3km3_k$(
                    fileName.getPValue_berniv_k$()
                )
            );
        };
    }
    function FunctionFactory$initializeEmbedded$lambda_5() {
        return function (token, args) {
            var fileName = Utils_getInstance().getIdent_dfe2u9_k$(
                token,
                "path",
                args
            );
            Unit_getInstance();
            var tmp;
            if (!(fileName instanceof PString)) {
                var tmp_0 = listOf(getKClass(PString));
                var tmp_1 = args
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw ExpectedTypeException_init_$Create$(
                    tmp_0,
                    tmp_1,
                    token,
                    null,
                    false,
                    24,
                    null
                );
            } else {
            }
            return Utils_getInstance().toPInt_yzud9u_k$(
                FileSystem_getInstance().delete_47x42e_k$(
                    fileName.getPValue_berniv_k$()
                )
            );
        };
    }
    function FunctionFactory$initializeEmbedded$lambda_6() {
        return function (token, args) {
            var ident = Utils_getInstance().getIdent_dfe2u9_k$(
                token,
                "x",
                args
            );
            Unit_getInstance();
            var tmp;
            var tmp_0;
            if (!(ident instanceof PNumber)) {
                tmp_0 = true;
            } else {
                {
                    tmp_0 = equals(ident.getPValue_berniv_k$(), 0);
                }
            }
            if (tmp_0) {
                var tmp_1 = args
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    "test failed",
                    tmp_1,
                    token,
                    null,
                    0,
                    24,
                    null
                );
            } else {
            }
            return Utils_getInstance()._get_NULL__774226340_csycv8_k$();
        };
    }
    function FunctionFactory$initializeEmbedded$lambda_7() {
        return function (token, args) {
            var tmp;
            if (
                Utils_getInstance()
                    .getPInt_2trvra_k$(args, token, "isInt")
                    .getPValue_berniv_k$() === 0
            ) {
                tmp = new PDouble(
                    FunctionFactory_getInstance().rnd_1.nextDouble_s2xvfg_k$()
                );
            } else {
                tmp = new PInt(
                    FunctionFactory_getInstance().rnd_1.nextInt_ujorgc_k$()
                );
            }
            return tmp;
        };
    }
    function FunctionFactory$initializeEmbedded$lambda_8() {
        return function (token, args) {
            var seed = Utils_getInstance().getIdent_dfe2u9_k$(token, "x", args);
            Unit_getInstance();
            var tmp;
            if (!(seed instanceof PInt)) {
                var tmp_0 = listOf(getKClass(PInt));
                var tmp_1 = args
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw ExpectedTypeException_init_$Create$(
                    tmp_0,
                    tmp_1,
                    token,
                    null,
                    false,
                    24,
                    null
                );
            } else {
            }
            FunctionFactory_getInstance().randomSeed_1 =
                seed.getPValue_berniv_k$();
            Unit_getInstance();
            FunctionFactory_getInstance().rnd_1 = Random(
                FunctionFactory_getInstance().randomSeed_1
            );
            Unit_getInstance();
            return Utils_getInstance()._get_NULL__774226340_csycv8_k$();
        };
    }
    function FunctionFactory$initializeEmbedded$lambda_9() {
        return function (token, args) {
            return toString_0(
                Utils_getInstance().getIdent_dfe2u9_k$(token, "x", args)
            );
        };
    }
    function FunctionFactory$initializeEmbedded$lambda_10() {
        return function (token, args) {
            var argument = Utils_getInstance().getIdent_dfe2u9_k$(
                token,
                "x",
                args
            );
            var tmp;
            if (argument instanceof PNumber) {
                tmp = new PInt(numberToInt(argument.getPValue_berniv_k$()));
            } else {
                if (argument instanceof PString) {
                    var tmp_0;
                    try {
                        tmp_0 = new PInt(toInt(argument.getPValue_berniv_k$()));
                    } catch ($p) {
                        var tmp_1;
                        if ($p instanceof NumberFormatException) {
                            tmp_1 =
                                Utils_getInstance()._get_NULL__774226340_csycv8_k$();
                        } else {
                            {
                                throw $p;
                            }
                        }
                        tmp_0 = tmp_1;
                    }
                    tmp = tmp_0;
                } else {
                    {
                        var tmp_2 = args
                            .getFileTable_m3scuc_k$()
                            ._get_filePath__151144490_2hzju2_k$();
                        throw PositionalException_init_$Create$(
                            "Cannot cast type to int",
                            tmp_2,
                            token,
                            null,
                            0,
                            24,
                            null
                        );
                    }
                }
            }
            return tmp;
        };
    }
    function FunctionFactory$initializeEmbedded$lambda_11() {
        return function (token, args) {
            var argument = Utils_getInstance().getIdent_dfe2u9_k$(
                token,
                "x",
                args
            );
            var tmp;
            if (argument instanceof PNumber) {
                tmp = new PDouble(
                    numberToDouble(argument.getPValue_berniv_k$())
                );
            } else {
                if (argument instanceof PString) {
                    var tmp_0;
                    try {
                        tmp_0 = new PDouble(
                            toDouble(argument.getPValue_berniv_k$())
                        );
                    } catch ($p) {
                        var tmp_1;
                        if ($p instanceof NumberFormatException) {
                            tmp_1 =
                                Utils_getInstance()._get_NULL__774226340_csycv8_k$();
                        } else {
                            {
                                throw $p;
                            }
                        }
                        tmp_0 = tmp_1;
                    }
                    tmp = tmp_0;
                } else {
                    {
                        var tmp_2 = args
                            .getFileTable_m3scuc_k$()
                            ._get_filePath__151144490_2hzju2_k$();
                        throw PositionalException_init_$Create$(
                            "Cannot cast type to Double",
                            tmp_2,
                            token,
                            null,
                            0,
                            24,
                            null
                        );
                    }
                }
            }
            return tmp;
        };
    }
    function FunctionFactory$initializeEmbedded$lambda_12() {
        return function (token, args) {
            var argument = Utils_getInstance().getIdent_dfe2u9_k$(
                token,
                "x",
                args
            );
            var tmp;
            if (argument instanceof PDictionary) {
                var tmp$ret$3;
                $l$block_2: {
                    var tmp0_map_0 = argument.getPValue_berniv_k$();
                    var tmp$ret$2;
                    $l$block_1: {
                        var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                            tmp0_map_0._get_size__809037418_ddoh9m_k$()
                        );
                        var tmp$ret$0;
                        $l$block: {
                            tmp$ret$0 = tmp0_map_0
                                ._get_entries__31877249_iz8n5_k$()
                                .iterator_jk1svi_k$();
                            break $l$block;
                        }
                        var tmp0_iterator_1_2 = tmp$ret$0;
                        while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                            var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                            var tmp$ret$1;
                            $l$block_0: {
                                var tmp_0 = mutableMapOf([
                                    to(
                                        new PString("key"),
                                        Utils_getInstance().toVariable_abd9s8_k$(
                                            item_2_3._get_key__857139730_e6bh8y_k$(),
                                            token
                                        )
                                    ),
                                    to(
                                        new PString("value"),
                                        Utils_getInstance().toVariable_abd9s8_k$(
                                            item_2_3._get_value__3683422336_a43j40_k$(),
                                            token
                                        )
                                    ),
                                ]);
                                var tmp0_this_5 = Companion_getInstance_8();
                                var tmp1_6 =
                                    tmp0_this_5._get_dictionaryId__3404222234_eqbrae_k$();
                                tmp0_this_5._set_dictionaryId__2464069414_3w32dm_k$(
                                    (tmp1_6 + 1) | 0
                                );
                                tmp$ret$1 = new PDictionary(tmp_0, tmp1_6);
                                break $l$block_0;
                            }
                            tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$1);
                            Unit_getInstance();
                        }
                        tmp$ret$2 = tmp0_mapTo_0_1;
                        break $l$block_1;
                    }
                    tmp$ret$3 = tmp$ret$2;
                    break $l$block_2;
                }
                tmp = tmp$ret$3;
            } else {
                if (argument instanceof PString) {
                    var tmp$ret$6;
                    $l$block_5: {
                        var tmp1_map_0 = argument.getPValue_berniv_k$();
                        var tmp$ret$5;
                        $l$block_4: {
                            var tmp0_mapTo_0_1_0 = ArrayList_init_$Create$_0(
                                charSequenceLength(tmp1_map_0)
                            );
                            var indexedObject = tmp1_map_0;
                            var inductionVariable = 0;
                            var last = indexedObject.length;
                            while (inductionVariable < last) {
                                var item_2_3_0 = charSequenceGet(
                                    indexedObject,
                                    inductionVariable
                                );
                                inductionVariable = (inductionVariable + 1) | 0;
                                var tmp$ret$4;
                                $l$block_3: {
                                    var tmp_1 = Utils_getInstance();
                                    var tmp_2 = toString_1(item_2_3_0);
                                    tmp$ret$4 =
                                        tmp_1.toVariable$default_x99qtu_k$(
                                            tmp_2,
                                            null,
                                            1,
                                            null
                                        );
                                    break $l$block_3;
                                }
                                tmp0_mapTo_0_1_0.add_1j60pz_k$(tmp$ret$4);
                                Unit_getInstance();
                            }
                            tmp$ret$5 = tmp0_mapTo_0_1_0;
                            break $l$block_4;
                        }
                        tmp$ret$6 = tmp$ret$5;
                        break $l$block_5;
                    }
                    tmp = tmp$ret$6;
                } else {
                    {
                        var tmp_3 = args
                            .getFileTable_m3scuc_k$()
                            ._get_filePath__151144490_2hzju2_k$();
                        throw PositionalException_init_$Create$(
                            "cannot cast type to list",
                            tmp_3,
                            token,
                            null,
                            0,
                            24,
                            null
                        );
                    }
                }
            }
            return tmp;
        };
    }
    function FunctionFactory$initializeEmbedded$lambda_13() {
        return function (token, args) {
            var first = numberToDouble(
                Utils_getInstance()
                    .getPNumber_l7npfb_k$(args, token, "first")
                    .getPValue_berniv_k$()
            );
            Unit_getInstance();
            var second = numberToDouble(
                Utils_getInstance()
                    .getPNumber_l7npfb_k$(args, token, "second")
                    .getPValue_berniv_k$()
            );
            Unit_getInstance();
            var epsilon = numberToDouble(
                Utils_getInstance()
                    .getPNumber_l7npfb_k$(args, token, "epsilon")
                    .getPValue_berniv_k$()
            );
            Unit_getInstance();
            var absTh = numberToDouble(
                Utils_getInstance()
                    .getPNumber_l7npfb_k$(args, token, "absTh")
                    .getPValue_berniv_k$()
            );
            Unit_getInstance();
            var tmp;
            if (first === second) {
                tmp = Utils_getInstance()._get_TRUE__779686525_cw7dz1_k$();
            } else {
                var tmp$ret$0;
                $l$block: {
                    var tmp0_abs_0 = first - second;
                    tmp$ret$0 = Math.abs(tmp0_abs_0);
                    break $l$block;
                }
                var diff = tmp$ret$0;
                var tmp$ret$3;
                $l$block_2: {
                    var tmp$ret$1;
                    $l$block_0: {
                        tmp$ret$1 = Math.abs(first);
                        break $l$block_0;
                    }
                    var tmp_0 = tmp$ret$1;
                    var tmp$ret$2;
                    $l$block_1: {
                        tmp$ret$2 = Math.abs(second);
                        break $l$block_1;
                    }
                    var tmp1_min_0 = tmp_0 + tmp$ret$2;
                    var tmp2_min_0 =
                        FloatCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$();
                    tmp$ret$3 = Math.min(tmp1_min_0, tmp2_min_0);
                    break $l$block_2;
                }
                var norm = tmp$ret$3;
                var tmp_1 = Utils_getInstance();
                var tmp$ret$4;
                $l$block_3: {
                    var tmp3_max_0 = epsilon * norm;
                    tmp$ret$4 = Math.max(absTh, tmp3_max_0);
                    break $l$block_3;
                }
                tmp = tmp_1.toPInt_yzud9u_k$(diff < tmp$ret$4);
            }
            return tmp;
        };
    }
    function FunctionFactory$initializeEmbedded$lambda_14() {
        return function (token, args) {
            var instance = Utils_getInstance().getIdent_dfe2u9_k$(
                token,
                "instance",
                args
            );
            var tmp;
            if (instance instanceof PInt) {
                tmp = "Int";
            } else {
                if (instance instanceof PDouble) {
                    tmp = "Double";
                } else {
                    if (instance instanceof PString) {
                        tmp = "String";
                    } else {
                        if (instance instanceof PList) {
                            tmp = "List";
                        } else {
                            if (instance instanceof PDictionary) {
                                tmp = "Dictionary";
                            } else {
                                if (instance instanceof Type) {
                                    var tmp_0 =
                                        instance._get_fileTable__504497375_8cd4nz_k$();
                                    var tmp_1 =
                                        instance._get_name__804168992_das4rk_k$();
                                    var tmp0_elvis_lhs =
                                        tmp_0.getUncopiedType_3y44ec_k$(
                                            Node_init_$Create$(
                                                null,
                                                tmp_1,
                                                null,
                                                null,
                                                13,
                                                null
                                            )
                                        );
                                    var tmp_2;
                                    if (tmp0_elvis_lhs == null) {
                                        var tmp_3 = args
                                            .getFileTable_m3scuc_k$()
                                            ._get_filePath__151144490_2hzju2_k$();
                                        throw PositionalException_init_$Create$(
                                            "Class not found",
                                            tmp_3,
                                            token,
                                            null,
                                            0,
                                            24,
                                            null
                                        );
                                    } else {
                                        tmp_2 = tmp0_elvis_lhs;
                                    }
                                    tmp = tmp_2;
                                } else {
                                    {
                                        var tmp_4 = args
                                            .getFileTable_m3scuc_k$()
                                            ._get_filePath__151144490_2hzju2_k$();
                                        throw PositionalException_init_$Create$(
                                            "Unsupported type",
                                            tmp_4,
                                            token,
                                            null,
                                            0,
                                            24,
                                            null
                                        );
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return tmp;
        };
    }
    function FunctionFactory$initializeEmbedded$lambda_15() {
        return function (token, args) {
            var start = Utils_getInstance().getPInt_2trvra_k$(
                args,
                token,
                "start"
            );
            Unit_getInstance();
            var end = Utils_getInstance().getPInt_2trvra_k$(args, token, "end");
            Unit_getInstance();
            var step = Utils_getInstance().getPInt_2trvra_k$(
                args,
                token,
                "step"
            );
            Unit_getInstance();
            var tmp;
            if (step.getPValue_berniv_k$() < 1) {
                var tmp_0 = args
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    "Step must be positive",
                    tmp_0,
                    token,
                    null,
                    0,
                    24,
                    null
                );
            }
            var tmp_1 = Utils_getInstance();
            var tmp_2 = mutableListOf([start, end, step]);
            return tmp_1.toVariable$default_x99qtu_k$(tmp_2, null, 1, null);
        };
    }
    function FunctionFactory$initializeEmbedded$lambda_16() {
        return function (token, args) {
            var instance = Utils_getInstance().getIdent_dfe2u9_k$(
                token,
                "instance",
                args
            );
            Unit_getInstance();
            var deep = Utils_getInstance().getPInt_2trvra_k$(
                args,
                token,
                "deep"
            );
            Unit_getInstance();
            var r = References_init_$Create$(null, null, null, null, 15, null);
            Unit_getInstance();
            return r.copy_mx3fmb_k$(instance);
        };
    }
    function FunctionFactory() {
        FunctionFactory_instance = this;
        this.randomSeed_1 = Math.floor(
            (Math.random() * Number.MAX_SAFE_INTEGER) / 2
        );
        this.rnd_1 = Random(this.randomSeed_1);
    }
    FunctionFactory.prototype.createFunction_erlkja_k$ = function (
        node,
        fileTable
    ) {
        if (
            !(
                node
                    ._get_left__802434852_d9qyp0_k$()
                    ._get_value__3683422336_a43j40_k$() === "("
            )
        ) {
            var tmp = fileTable._get_filePath__151144490_2hzju2_k$();
            var tmp_0 = node._get_left__802434852_d9qyp0_k$();
            throw PositionalException_init_$Create$(
                "Expected parentheses after function name",
                tmp,
                tmp_0,
                null,
                0,
                24,
                null
            );
        }
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = ArrayList_init_$Create$();
            break $l$block;
        }
        var withoutDefault = tmp$ret$0;
        var tmp$ret$1;
        $l$block_0: {
            tmp$ret$1 = ArrayList_init_$Create$();
            break $l$block_0;
        }
        var withDefault = tmp$ret$1;
        var inductionVariable = 1;
        var last = _get_lastIndex__339712501(
            node
                ._get_left__802434852_d9qyp0_k$()
                ._get_children__1387553196_my42wc_k$()
        );
        if (inductionVariable <= last)
            do {
                var i = inductionVariable;
                inductionVariable = (inductionVariable + 1) | 0;
                var tmp_1 = node
                    ._get_left__802434852_d9qyp0_k$()
                    ._get_children__1387553196_my42wc_k$()
                    .get_fkrdnv_k$(i);
                if (!(tmp_1 instanceof Assignment)) {
                    var tmp_2 = node
                        ._get_left__802434852_d9qyp0_k$()
                        ._get_children__1387553196_my42wc_k$()
                        .get_fkrdnv_k$(i);
                    withoutDefault.add_1j60pz_k$(
                        tmp_2 instanceof Identifier ? tmp_2 : THROW_CCE()
                    );
                    Unit_getInstance();
                } else {
                    {
                        var tmp_3 = node
                            ._get_left__802434852_d9qyp0_k$()
                            ._get_children__1387553196_my42wc_k$()
                            .get_fkrdnv_k$(i);
                        withDefault.add_1j60pz_k$(
                            tmp_3 instanceof Assignment ? tmp_3 : THROW_CCE()
                        );
                        Unit_getInstance();
                    }
                }
            } while (!(i === last));
        return new RFunction(
            node
                ._get_left__802434852_d9qyp0_k$()
                ._get_left__802434852_d9qyp0_k$()
                ._get_value__3683422336_a43j40_k$(),
            withoutDefault,
            withDefault,
            node._get_children__1387553196_my42wc_k$().get_fkrdnv_k$(1)
        );
    };
    FunctionFactory.prototype.initializeEmbedded_2qlyva_k$ = function () {
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = LinkedHashMap_init_$Create$();
            break $l$block;
        }
        var res = tmp$ret$0;
        {
            var tmp = listOf("x");
            var tmp0_set_0 = EmbeddedFunction_init_$Create$(
                "print",
                tmp,
                null,
                FunctionFactory$initializeEmbedded$lambda(),
                4,
                null
            );
            res.put_3mhbri_k$("print", tmp0_set_0);
            Unit_getInstance();
        }
        {
            var tmp_0 = listOf("x");
            var tmp1_set_0 = EmbeddedFunction_init_$Create$(
                "except",
                tmp_0,
                null,
                FunctionFactory$initializeEmbedded$lambda_0(),
                4,
                null
            );
            res.put_3mhbri_k$("except", tmp1_set_0);
            Unit_getInstance();
        }
        {
            var tmp$ret$1;
            $l$block_0: {
                tmp$ret$1 = emptyList();
                break $l$block_0;
            }
            var tmp_1 = tmp$ret$1;
            var tmp2_set_0 = EmbeddedFunction_init_$Create$(
                "input",
                tmp_1,
                null,
                FunctionFactory$initializeEmbedded$lambda_1(),
                4,
                null
            );
            res.put_3mhbri_k$("input", tmp2_set_0);
            Unit_getInstance();
        }
        {
            var tmp_2 = listOf_0(["content", "path"]);
            var tmp3_set_0 = EmbeddedFunction_init_$Create$(
                "write",
                tmp_2,
                null,
                FunctionFactory$initializeEmbedded$lambda_2(),
                4,
                null
            );
            res.put_3mhbri_k$("write", tmp3_set_0);
            Unit_getInstance();
        }
        {
            var tmp_3 = listOf("path");
            var tmp4_set_0 = EmbeddedFunction_init_$Create$(
                "read",
                tmp_3,
                null,
                FunctionFactory$initializeEmbedded$lambda_3(),
                4,
                null
            );
            res.put_3mhbri_k$("read", tmp4_set_0);
            Unit_getInstance();
        }
        {
            var tmp_4 = listOf("path");
            var tmp5_set_0 = EmbeddedFunction_init_$Create$(
                "exists",
                tmp_4,
                null,
                FunctionFactory$initializeEmbedded$lambda_4(),
                4,
                null
            );
            res.put_3mhbri_k$("exists", tmp5_set_0);
            Unit_getInstance();
        }
        {
            var tmp_5 = listOf("path");
            var tmp6_set_0 = EmbeddedFunction_init_$Create$(
                "delete",
                tmp_5,
                null,
                FunctionFactory$initializeEmbedded$lambda_5(),
                4,
                null
            );
            res.put_3mhbri_k$("delete", tmp6_set_0);
            Unit_getInstance();
        }
        {
            var tmp_6 = listOf("x");
            var tmp7_set_0 = EmbeddedFunction_init_$Create$(
                "test",
                tmp_6,
                null,
                FunctionFactory$initializeEmbedded$lambda_6(),
                4,
                null
            );
            res.put_3mhbri_k$("test", tmp7_set_0);
            Unit_getInstance();
        }
        {
            var tmp_7 = listOf("isInt = false");
            var tmp8_set_0 = EmbeddedFunction_init_$Create$(
                "rnd",
                null,
                tmp_7,
                FunctionFactory$initializeEmbedded$lambda_7(),
                2,
                null
            );
            res.put_3mhbri_k$("rnd", tmp8_set_0);
            Unit_getInstance();
        }
        {
            var tmp_8 = listOf("x");
            var tmp9_set_0 = EmbeddedFunction_init_$Create$(
                "seed",
                tmp_8,
                null,
                FunctionFactory$initializeEmbedded$lambda_8(),
                4,
                null
            );
            res.put_3mhbri_k$("seed", tmp9_set_0);
            Unit_getInstance();
        }
        {
            var tmp_9 = listOf("x");
            var tmp10_set_0 = EmbeddedFunction_init_$Create$(
                "str",
                tmp_9,
                null,
                FunctionFactory$initializeEmbedded$lambda_9(),
                4,
                null
            );
            res.put_3mhbri_k$("str", tmp10_set_0);
            Unit_getInstance();
        }
        {
            var tmp_10 = listOf("x");
            var tmp11_set_0 = EmbeddedFunction_init_$Create$(
                "int",
                tmp_10,
                null,
                FunctionFactory$initializeEmbedded$lambda_10(),
                4,
                null
            );
            res.put_3mhbri_k$("int", tmp11_set_0);
            Unit_getInstance();
        }
        {
            var tmp_11 = listOf("x");
            var tmp12_set_0 = EmbeddedFunction_init_$Create$(
                "double",
                tmp_11,
                null,
                FunctionFactory$initializeEmbedded$lambda_11(),
                4,
                null
            );
            res.put_3mhbri_k$("double", tmp12_set_0);
            Unit_getInstance();
        }
        {
            var tmp_12 = listOf("x");
            var tmp13_set_0 = EmbeddedFunction_init_$Create$(
                "list",
                tmp_12,
                null,
                FunctionFactory$initializeEmbedded$lambda_12(),
                4,
                null
            );
            res.put_3mhbri_k$("list", tmp13_set_0);
            Unit_getInstance();
        }
        {
            var tmp_13 = listOf_0(["first", "second"]);
            var tmp_14 = listOf_0([
                "epsilon = 0.0000000000000000000000000001",
                "absTh = 0.0000001",
            ]);
            var tmp14_set_0 = new EmbeddedFunction(
                "floatEquals",
                tmp_13,
                tmp_14,
                FunctionFactory$initializeEmbedded$lambda_13()
            );
            res.put_3mhbri_k$("floatEquals", tmp14_set_0);
            Unit_getInstance();
        }
        {
            var tmp_15 = listOf("instance");
            var tmp15_set_0 = EmbeddedFunction_init_$Create$(
                "type",
                tmp_15,
                null,
                FunctionFactory$initializeEmbedded$lambda_14(),
                4,
                null
            );
            res.put_3mhbri_k$("type", tmp15_set_0);
            Unit_getInstance();
        }
        {
            var tmp_16 = listOf_0(["start", "end"]);
            var tmp_17 = listOf("step = 1");
            var tmp16_set_0 = new EmbeddedFunction(
                "range",
                tmp_16,
                tmp_17,
                FunctionFactory$initializeEmbedded$lambda_15()
            );
            res.put_3mhbri_k$("range", tmp16_set_0);
            Unit_getInstance();
        }
        {
            var tmp_18 = listOf("instance");
            var tmp_19 = listOf("deep = true");
            var tmp17_set_0 = new EmbeddedFunction(
                "copy",
                tmp_18,
                tmp_19,
                FunctionFactory$initializeEmbedded$lambda_16()
            );
            res.put_3mhbri_k$("copy", tmp17_set_0);
            Unit_getInstance();
        }
        return res;
    };
    FunctionFactory.$metadata$ = {
        simpleName: "FunctionFactory",
        kind: "object",
        interfaces: [],
    };
    var FunctionFactory_instance;
    function FunctionFactory_getInstance() {
        if (FunctionFactory_instance == null) new FunctionFactory();
        return FunctionFactory_instance;
    }
    function Message(type, content) {
        this.type_1 = type;
        this.content_1 = content;
    }
    Message.prototype._get_type__810427985_deia8h_k$ = function () {
        return this.type_1;
    };
    Message.prototype._get_content__1558689208_ps04ag_k$ = function () {
        return this.content_1;
    };
    Message.prototype.component1 = function () {
        return this.type_1;
    };
    Message.prototype.component2 = function () {
        return this.content_1;
    };
    Message.prototype.copy = function (type, content) {
        return this.copy_ftyia2_k$(
            type === void 1 ? this.type_1 : type,
            content === void 1 ? this.content_1 : content
        );
    };
    Message.prototype.copy_ftyia2_k$ = function (type, content) {
        return new Message(type, content);
    };
    Message.prototype.copy$default_wp460d_k$ = function (
        type,
        content,
        $mask0,
        $handler
    ) {
        if (!(($mask0 & 1) === 0)) type = this.type_1;
        if (!(($mask0 & 2) === 0)) content = this.content_1;
        return this.copy_ftyia2_k$(type, content);
    };
    Message.prototype.toString = function () {
        return (
            "Message(type=" +
            this.type_1 +
            ", content=" +
            toString_0(this.content_1) +
            ")"
        );
    };
    Message.prototype.hashCode = function () {
        var result = getStringHashCode(this.type_1);
        result = (imul(result, 31) + hashCode(this.content_1)) | 0;
        return result;
    };
    Message.prototype.equals = function (other) {
        if (this === other) return true;
        if (!(other instanceof Message)) return false;
        else {
        }
        var tmp0_other_with_cast =
            other instanceof Message ? other : THROW_CCE();
        if (!(this.type_1 === tmp0_other_with_cast.type_1)) return false;
        if (!equals(this.content_1, tmp0_other_with_cast.content_1))
            return false;
        return true;
    };
    Message.$metadata$ = {
        simpleName: "Message",
        kind: "class",
        interfaces: [],
    };
    Object.defineProperty(Message.prototype, "type", {
        configurable: true,
        get: Message.prototype._get_type__810427985_deia8h_k$,
    });
    Object.defineProperty(Message.prototype, "content", {
        configurable: true,
        get: Message.prototype._get_content__1558689208_ps04ag_k$,
    });
    function getFileTableByName($this, name) {
        if ($this.imports_1.get_1mhr4y_k$(name) == null) {
            {
                var tmp0_set_0 = $this.imports_1;
                var tmp1_set_0 = new FileTable(
                    name,
                    ($this.imports_1._get_size__809037418_ddoh9m_k$() + 1) | 0
                );
                tmp0_set_0.put_3mhbri_k$(name, tmp1_set_0);
                Unit_getInstance();
            }
            $this.importStack_1.add_1j60pz_k$(
                ensureNotNull($this.imports_1.get_1mhr4y_k$(name))
            );
            Unit_getInstance();
        }
        return ensureNotNull($this.imports_1.get_1mhr4y_k$(name));
    }
    function ImportGraphCreator(mainFileName, startingNodes, roots) {
        this.mainFileName_1 = mainFileName;
        this.startingNodes_1 = startingNodes;
        this.roots_1 = roots;
        var tmp = this;
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = ArrayList_init_$Create$();
            break $l$block;
        }
        tmp.visitedTables_1 = tmp$ret$0;
        var tmp_0 = this;
        var tmp$ret$1;
        $l$block_0: {
            tmp$ret$1 = LinkedHashMap_init_$Create$();
            break $l$block_0;
        }
        tmp_0.supertypes_1 = tmp$ret$1;
        var tmp_1 = this;
        var tmp$ret$2;
        $l$block_1: {
            tmp$ret$2 = LinkedHashMap_init_$Create$();
            break $l$block_1;
        }
        tmp_1.imports_1 = tmp$ret$2;
        var tmp_2 = this;
        var tmp$ret$3;
        $l$block_2: {
            tmp$ret$3 = ArrayList_init_$Create$();
            break $l$block_2;
        }
        tmp_2.importStack_1 = tmp$ret$3;
    }
    ImportGraphCreator.prototype._get_mainFileName__2583226955_sb4jat_k$ =
        function () {
            return this.mainFileName_1;
        };
    ImportGraphCreator.prototype._get_startingNodes__3650654368_anlv1c_k$ =
        function () {
            return this.startingNodes_1;
        };
    ImportGraphCreator.prototype._get_visitedTables__1623761026_ququ0y_k$ =
        function () {
            return this.visitedTables_1;
        };
    ImportGraphCreator.prototype._get_supertypes__1291562605_lcyo31_k$ =
        function () {
            return this.supertypes_1;
        };
    ImportGraphCreator.prototype._get_imports__1703642979_s6azc3_k$ =
        function () {
            return this.imports_1;
        };
    ImportGraphCreator.prototype._get_importStack__3899561998_6jewoi_k$ =
        function () {
            return this.importStack_1;
        };
    ImportGraphCreator.prototype.createGraph_hzqy5d_k$ = function () {
        this.visitedTables_1.add_1j60pz_k$(
            new FileTable(
                this.mainFileName_1,
                (this.imports_1._get_size__809037418_ddoh9m_k$() + 1) | 0
            )
        );
        Unit_getInstance();
        {
            var tmp0_set_0 = this.imports_1;
            var tmp1_set_0 = this.mainFileName_1;
            var tmp2_set_0 = last_0(this.visitedTables_1);
            tmp0_set_0.put_3mhbri_k$(tmp1_set_0, tmp2_set_0);
            Unit_getInstance();
        }
        this.addDeclarationsToFileTable_bug9i2_k$(
            first(this.visitedTables_1),
            this.startingNodes_1
        );
        $l$loop: while (true) {
            var tmp$ret$0;
            $l$block: {
                var tmp3_isNotEmpty_0 = this.importStack_1;
                tmp$ret$0 = !tmp3_isNotEmpty_0.isEmpty_y1axqb_k$();
                break $l$block;
            }
            if (!tmp$ret$0) {
                break $l$loop;
            }
            var nextFileTable = removeLast(this.importStack_1);
            this.visitedTables_1.add_1j60pz_k$(nextFileTable);
            Unit_getInstance();
            this.addDeclarationsToFileTable_bug9i2_k$(
                nextFileTable,
                PathBuilder_getInstance().getNodes_jwpeo6_k$(
                    nextFileTable._get_filePath__151144490_2hzju2_k$()
                )
            );
        }
    };
    ImportGraphCreator.prototype.addDeclarationsToFileTable_bug9i2_k$ =
        function (fileTable, nodes) {
            var tmp0_iterator = nodes.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
                var node = tmp0_iterator.next_20eer_k$();
                var tmp1_subject = node;
                if (tmp1_subject instanceof ImportNode)
                    fileTable.addImport_wgtzok_k$(
                        node,
                        getFileTableByName(
                            this,
                            PathBuilder_getInstance().getFullPath_k5ltdb_k$(
                                node._get_fileName__149290628_2gvtdw_k$(),
                                this.roots_1,
                                fileTable,
                                true
                            )
                        )
                    );
                else {
                    if (tmp1_subject instanceof FunctionNode)
                        fileTable.addFunction_5sy9lo_k$(
                            FunctionFactory_getInstance().createFunction_erlkja_k$(
                                node,
                                fileTable
                            )
                        );
                    else {
                        if (tmp1_subject instanceof TypeNode) {
                            var type = fileTable.addType_ye6w96_k$(node);
                            {
                                var tmp0_set_0 = this.supertypes_1;
                                var tmp1_set_0 =
                                    node._get_superTypeNode__300917434_4z5pdm_k$();
                                tmp0_set_0.put_3mhbri_k$(type, tmp1_set_0);
                                Unit_getInstance();
                            }
                        } else {
                            if (tmp1_subject instanceof ObjectNode)
                                fileTable.addObject_iiux36_k$(node);
                            else {
                                if (tmp1_subject instanceof Meta) {
                                } else {
                                    {
                                        var tmp =
                                            fileTable._get_filePath__151144490_2hzju2_k$();
                                        throw PositionalException_init_$Create$(
                                            "Only class, object or function can be top level declaration",
                                            tmp,
                                            node,
                                            null,
                                            0,
                                            24,
                                            null
                                        );
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
    ImportGraphCreator.$metadata$ = {
        simpleName: "ImportGraphCreator",
        kind: "class",
        interfaces: [],
    };
    function addTokens($this) {
        $this.nodes_1.add_1j60pz_k$(
            Token_init_$Create$(
                "fictive",
                null,
                null,
                0,
                null,
                null,
                null,
                null,
                254,
                null
            )
        );
        Unit_getInstance();
        $this.nodes_1.add_1j60pz_k$(createNextToken($this));
        Unit_getInstance();
        while ($this.index_1 < $this.source_1.length)
            addToken($this, createNextToken($this));
        if (
            !(
                last_0($this.nodes_1)._get_symbol__541899891_8ymsmr_k$() ===
                "(EOF)"
            )
        ) {
            var tmp = $this.position_1;
            $this.nodes_1.add_1j60pz_k$(
                Token_init_$Create$(
                    "(EOF)",
                    "(EOF)",
                    tmp,
                    0,
                    null,
                    null,
                    null,
                    null,
                    248,
                    null
                )
            );
            Unit_getInstance();
        }
        if ($this.nodes_1._get_size__809037418_ddoh9m_k$() >= 100000) {
            Logger_getInstance().addWarning_wjr273_k$(
                last_0($this.nodes_1),
                "File too large"
            );
            Unit_getInstance();
        }
        $this.nodes_1.removeAt_qvpkxi_k$(0);
        Unit_getInstance();
    }
    function createNextToken($this) {
        consumeWhitespaceAndComments($this);
        Unit_getInstance();
        if ($this.index_1 === $this.source_1.length) {
            return $this.registry_1.token_x5edt_k$(
                "(EOF)",
                "(EOF)",
                $this.position_1
            );
        }
        if (
            equals(
                new Char(charSequenceGet($this.source_1, $this.index_1)),
                new Char(_Char___init__impl__380027157(92))
            )
        ) {
            var tmp0_this = $this;
            var tmp1 = tmp0_this.index_1;
            tmp0_this.index_1 = (tmp1 + 1) | 0;
            Unit_getInstance();
            consumeWhitespaceAndComments($this);
            Unit_getInstance();
            if (!isLineSeparator($this)) {
                var tmp2_position = $this.position_1;
                var tmp3_fileName = $this.filePath_1;
                throw PositionalException_init_$Create$(
                    "Expected new line after \\",
                    tmp3_fileName,
                    null,
                    tmp2_position,
                    1,
                    4,
                    null
                );
            } else $this.index_1 = moveAfterLineSeparator($this);
            consumeWhitespaceAndComments($this);
            Unit_getInstance();
            $this.position_1 = new Pair(
                0,
                ($this.position_1._get_second__4255435031_njbah_k$() + 1) | 0
            );
        }
        var tmp;
        if (
            equals(
                new Char(charSequenceGet($this.source_1, $this.index_1)),
                new Char(_Char___init__impl__380027157(34))
            )
        ) {
            tmp = nextString($this);
        } else if (
            isFirstIdentChar(
                $this,
                charSequenceGet($this.source_1, $this.index_1)
            )
        ) {
            tmp = nextIdent($this);
        } else if (isDigit(charSequenceGet($this.source_1, $this.index_1))) {
            tmp = nextNumber($this);
        } else if (
            isOperatorChar(
                $this,
                charSequenceGet($this.source_1, $this.index_1)
            )
        ) {
            tmp = nextOperator($this);
        } else if (
            equals(
                new Char(charSequenceGet($this.source_1, $this.index_1)),
                new Char(_Char___init__impl__380027157(35))
            )
        ) {
            tmp = nextMeta($this);
        } else {
            var tmp4_position = $this.position_1;
            var tmp5_fileName = $this.filePath_1;
            throw PositionalException_init_$Create$(
                "Invalid character",
                tmp5_fileName,
                null,
                tmp4_position,
                1,
                4,
                null
            );
        }
        return tmp;
    }
    function nextMeta($this) {
        var res = StringBuilder_init_$Create$();
        res.append_t8oh9e_k$(charSequenceGet($this.source_1, $this.index_1));
        Unit_getInstance();
        move$default($this, 0, 2, null);
        while (
            $this.index_1 < $this.source_1.length
                ? isIdentChar(
                      $this,
                      charSequenceGet($this.source_1, $this.index_1)
                  )
                : false
        )
            moveAndAppend($this, res);
        if ($this.registry_1.defined_x3osmw_k$(res.toString())) {
            var tmp = res.toString();
            var tmp_0 = res.toString();
            var tmp_1 = new Pair(
                ($this.position_1._get_first__3232921377_hkbbvj_k$() -
                    res._get_length__2347802853_w7ahp7_k$()) |
                    0,
                $this.position_1._get_second__4255435031_njbah_k$()
            );
            return MetaToken_init_$Create$(tmp, tmp_0, tmp_1, null, 8, null);
        }
        var tmp0_position = new Pair(
            ($this.position_1._get_first__3232921377_hkbbvj_k$() -
                res._get_length__2347802853_w7ahp7_k$()) |
                0,
            $this.position_1._get_second__4255435031_njbah_k$()
        );
        var tmp1_length = res._get_length__2347802853_w7ahp7_k$();
        var tmp2_fileName = $this.filePath_1;
        throw PositionalException_init_$Create$(
            "No such meta token",
            tmp2_fileName,
            null,
            tmp0_position,
            tmp1_length,
            4,
            null
        );
    }
    function nextString($this) {
        var res = StringBuilder_init_$Create$();
        moveAndAppend($this, res);
        while (
            !equals(
                new Char(charSequenceGet($this.source_1, $this.index_1)),
                new Char(_Char___init__impl__380027157(34))
            )
        ) {
            if (
                equals(
                    new Char(charSequenceGet($this.source_1, $this.index_1)),
                    new Char(_Char___init__impl__380027157(92))
                )
                    ? $this.source_1.length > (($this.index_1 + 1) | 0)
                    : false
            ) {
                move$default($this, 0, 2, null);
                res.append_t8pm91_k$(
                    $this.escapes_1.get_1mhr4y_k$(
                        new Char(charSequenceGet($this.source_1, $this.index_1))
                    )
                );
                Unit_getInstance();
                move$default($this, 0, 2, null);
            } else if (
                isLineSeparator($this)
                    ? true
                    : $this.index_1 ===
                      _get_lastIndex__339712501_0($this.source_1)
            ) {
                var tmp0_errorMessage =
                    "Unterminated string at " +
                    $this.position_1._get_second__4255435031_njbah_k$() +
                    ":" +
                    $this.position_1._get_first__3232921377_hkbbvj_k$();
                var tmp1_position = new Pair(
                    ($this.position_1._get_first__3232921377_hkbbvj_k$() -
                        res._get_length__2347802853_w7ahp7_k$()) |
                        0,
                    $this.position_1._get_second__4255435031_njbah_k$()
                );
                var tmp2_length = res._get_length__2347802853_w7ahp7_k$();
                var tmp3_fileName = $this.filePath_1;
                throw PositionalException_init_$Create$(
                    tmp0_errorMessage,
                    tmp3_fileName,
                    null,
                    tmp1_position,
                    tmp2_length,
                    4,
                    null
                );
            } else moveAndAppend($this, res);
        }
        moveAndAppend($this, res);
        var tmp = $this.registry_1;
        var tmp$ret$1;
        $l$block_0: {
            var tmp0_substring_0 = res.toString();
            var tmp1_substring_0 = (res.toString().length - 1) | 0;
            var tmp$ret$0;
            $l$block: {
                tmp$ret$0 = tmp0_substring_0;
                break $l$block;
            }
            tmp$ret$1 = tmp$ret$0.substring(1, tmp1_substring_0);
            break $l$block_0;
        }
        return tmp.string_thqtp3_k$(
            "(STRING)",
            tmp$ret$1,
            new Pair(
                ($this.position_1._get_first__3232921377_hkbbvj_k$() -
                    res.toString().length) |
                    0,
                $this.position_1._get_second__4255435031_njbah_k$()
            )
        );
    }
    function nextIdent($this) {
        var res = StringBuilder_init_$Create$();
        while (
            $this.index_1 < $this.source_1.length
                ? isIdentChar(
                      $this,
                      charSequenceGet($this.source_1, $this.index_1)
                  )
                : false
        )
            moveAndAppend($this, res);
        if ($this.registry_1.defined_x3osmw_k$(res.toString())) {
            return $this.registry_1.definedIdentifier_m9xvbe_k$(
                res.toString(),
                res.toString(),
                new Pair(
                    ($this.position_1._get_first__3232921377_hkbbvj_k$() -
                        res.toString().length) |
                        0,
                    $this.position_1._get_second__4255435031_njbah_k$()
                )
            );
        }
        return $this.registry_1.identifier_q37um9_k$(
            "(IDENT)",
            res.toString(),
            new Pair(
                ($this.position_1._get_first__3232921377_hkbbvj_k$() -
                    res.toString().length) |
                    0,
                $this.position_1._get_second__4255435031_njbah_k$()
            )
        );
    }
    function nextNumber($this) {
        var res = StringBuilder_init_$Create$();
        moveAndAppend($this, res);
        while (
            $this.index_1 < $this.source_1.length
                ? isDigit(charSequenceGet($this.source_1, $this.index_1))
                : false
        )
            moveAndAppend($this, res);
        if (
            (
                (($this.index_1 + 1) | 0) < $this.source_1.length
                    ? equals(
                          new Char(
                              charSequenceGet($this.source_1, $this.index_1)
                          ),
                          new Char(_Char___init__impl__380027157(46))
                      )
                    : false
            )
                ? isDigit(
                      charSequenceGet($this.source_1, ($this.index_1 + 1) | 0)
                  )
                : false
        ) {
            moveAndAppend($this, res);
            while (
                $this.index_1 < $this.source_1.length
                    ? isDigit(charSequenceGet($this.source_1, $this.index_1))
                    : false
            )
                moveAndAppend($this, res);
        }
        return new TokenNumber(
            res.toString(),
            new Pair(
                ($this.position_1._get_first__3232921377_hkbbvj_k$() -
                    res.toString().length) |
                    0,
                $this.position_1._get_second__4255435031_njbah_k$()
            )
        );
    }
    function nextOperator($this) {
        var inductionVariable = ($this.index_1 + 2) | 0;
        var last = $this.index_1;
        if (last <= inductionVariable)
            do {
                var ind = inductionVariable;
                inductionVariable = (inductionVariable + -1) | 0;
                if (
                    ind < $this.source_1.length
                        ? $this.registry_1.defined_x3osmw_k$(
                              substring(
                                  $this.source_1,
                                  numberRangeToNumber($this.index_1, ind)
                              )
                          )
                        : false
                ) {
                    var value = substring(
                        $this.source_1,
                        numberRangeToNumber($this.index_1, ind)
                    );
                    var operator = $this.registry_1.operator_5vquas_k$(
                        value,
                        value,
                        new Pair(
                            ($this.position_1._get_first__3232921377_hkbbvj_k$() -
                                value.length) |
                                0,
                            $this.position_1._get_second__4255435031_njbah_k$()
                        )
                    );
                    var tmp;
                    if (
                        operator._get_symbol__541899891_8ymsmr_k$() === "(SEP)"
                    ) {
                        var tmp_0;
                        var tmp_1 = operator._get_value__3683422336_a43j40_k$();
                        if (contains$default(tmp_1, "\n", false, 2, null)) {
                            tmp_0 = true;
                        } else {
                            {
                                var tmp_2 =
                                    operator._get_value__3683422336_a43j40_k$();
                                tmp_0 = contains$default(
                                    tmp_2,
                                    "\r",
                                    false,
                                    2,
                                    null
                                );
                            }
                        }
                        tmp = tmp_0;
                    } else {
                        tmp = false;
                    }
                    if (tmp) {
                        toNextLine($this);
                    } else {
                        {
                            var inductionVariable_0 = $this.index_1;
                            if (inductionVariable_0 <= ind)
                                do {
                                    var i = inductionVariable_0;
                                    inductionVariable_0 =
                                        (inductionVariable_0 + 1) | 0;
                                    move$default($this, 0, 2, null);
                                } while (!(i === ind));
                        }
                    }
                    return operator;
                }
            } while (!(ind === last));
        var tmp2_position = $this.position_1;
        var tmp3_fileName = $this.filePath_1;
        throw PositionalException_init_$Create$(
            "Invalid operator",
            tmp3_fileName,
            null,
            tmp2_position,
            0,
            20,
            null
        );
    }
    function consumeWhitespaceAndComments($this) {
        var iter = 0;
        var tmp0_container = listOf_0([true, true]);
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = tmp0_container.get_fkrdnv_k$(0);
            break $l$block;
        }
        var whitespace = tmp$ret$0;
        var tmp$ret$1;
        $l$block_0: {
            tmp$ret$1 = tmp0_container.get_fkrdnv_k$(1);
            break $l$block_0;
        }
        var comments = tmp$ret$1;
        while (whitespace ? true : comments) {
            whitespace = consumeWhitespace($this);
            comments = consumeComments($this);
            if (comments) {
                addToken(
                    $this,
                    $this.registry_1.token_x5edt_k$(
                        "(SEP)",
                        "//",
                        $this.position_1
                    )
                );
            }
            var tmp1 = iter;
            iter = (tmp1 + 1) | 0;
            Unit_getInstance();
        }
        return iter > 1;
    }
    function consumeComments($this) {
        if (
            (
                (
                    $this.index_1 < $this.source_1.length
                        ? equals(
                              new Char(
                                  charSequenceGet($this.source_1, $this.index_1)
                              ),
                              new Char(_Char___init__impl__380027157(47))
                          )
                        : false
                )
                    ? $this.index_1 <
                      _get_lastIndex__339712501_0($this.source_1)
                    : false
            )
                ? equals(
                      new Char(
                          charSequenceGet(
                              $this.source_1,
                              ($this.index_1 + 1) | 0
                          )
                      ),
                      new Char(_Char___init__impl__380027157(47))
                  )
                : false
        ) {
            while (!isLineSeparator($this)) {
                move$default($this, 0, 2, null);
                if ($this.index_1 === $this.source_1.length) {
                    return true;
                }
            }
            return true;
        } else if (
            (
                $this.index_1 < _get_lastIndex__339712501_0($this.source_1)
                    ? equals(
                          new Char(
                              charSequenceGet($this.source_1, $this.index_1)
                          ),
                          new Char(_Char___init__impl__380027157(47))
                      )
                    : false
            )
                ? equals(
                      new Char(
                          charSequenceGet(
                              $this.source_1,
                              ($this.index_1 + 1) | 0
                          )
                      ),
                      new Char(_Char___init__impl__380027157(42))
                  )
                : false
        ) {
            var startingPosition = $this.position_1;
            move($this, 2);
            if ((($this.index_1 + 1) | 0) >= $this.source_1.length) {
                var tmp0_fileName = $this.filePath_1;
                throw PositionalException_init_$Create$(
                    "Unterminated comment",
                    tmp0_fileName,
                    null,
                    startingPosition,
                    2,
                    4,
                    null
                );
            }
            while (
                !(equals(
                    new Char(charSequenceGet($this.source_1, $this.index_1)),
                    new Char(_Char___init__impl__380027157(42))
                )
                    ? equals(
                          new Char(
                              charSequenceGet(
                                  $this.source_1,
                                  ($this.index_1 + 1) | 0
                              )
                          ),
                          new Char(_Char___init__impl__380027157(47))
                      )
                    : false)
            ) {
                if (isLineSeparator($this)) {
                    toNextLine($this);
                } else {
                    move$default($this, 0, 2, null);
                }
                if (
                    $this.index_1 >= _get_lastIndex__339712501_0($this.source_1)
                ) {
                    var tmp1_fileName = $this.filePath_1;
                    throw PositionalException_init_$Create$(
                        "Unterminated comment",
                        tmp1_fileName,
                        null,
                        startingPosition,
                        2,
                        4,
                        null
                    );
                }
            }
            move($this, 2);
            return true;
        }
        return false;
    }
    function consumeWhitespace($this) {
        var res = (
            $this.index_1 < $this.source_1.length
                ? !isLineSeparator($this)
                : false
        )
            ? isWhitespace(charSequenceGet($this.source_1, $this.index_1))
            : false;
        while (
            (
                $this.index_1 < $this.source_1.length
                    ? !isLineSeparator($this)
                    : false
            )
                ? isWhitespace(charSequenceGet($this.source_1, $this.index_1))
                : false
        ) {
            move$default($this, 0, 2, null);
        }
        return res;
    }
    function isLineSeparator($this) {
        if ($this.index_1 === _get_lastIndex__339712501_0($this.source_1)) {
            return equals(
                new Char(charSequenceGet($this.source_1, $this.index_1)),
                new Char(_Char___init__impl__380027157(13))
            )
                ? true
                : equals(
                      new Char(charSequenceGet($this.source_1, $this.index_1)),
                      new Char(_Char___init__impl__380027157(10))
                  );
        }
        if (
            equals(
                new Char(charSequenceGet($this.source_1, $this.index_1)),
                new Char(_Char___init__impl__380027157(13))
            )
                ? equals(
                      new Char(
                          charSequenceGet(
                              $this.source_1,
                              ($this.index_1 + 1) | 0
                          )
                      ),
                      new Char(_Char___init__impl__380027157(10))
                  )
                : false
        ) {
            return true;
        }
        return equals(
            new Char(charSequenceGet($this.source_1, $this.index_1)),
            new Char(_Char___init__impl__380027157(13))
        )
            ? true
            : equals(
                  new Char(charSequenceGet($this.source_1, $this.index_1)),
                  new Char(_Char___init__impl__380027157(10))
              );
    }
    function moveAfterLineSeparator($this) {
        if ($this.index_1 === _get_lastIndex__339712501_0($this.source_1)) {
            return (
                equals(
                    new Char(charSequenceGet($this.source_1, $this.index_1)),
                    new Char(_Char___init__impl__380027157(13))
                )
                    ? true
                    : equals(
                          new Char(
                              charSequenceGet($this.source_1, $this.index_1)
                          ),
                          new Char(_Char___init__impl__380027157(10))
                      )
            )
                ? ($this.index_1 + 1) | 0
                : $this.index_1;
        }
        if (
            equals(
                new Char(charSequenceGet($this.source_1, $this.index_1)),
                new Char(_Char___init__impl__380027157(13))
            )
                ? equals(
                      new Char(
                          charSequenceGet(
                              $this.source_1,
                              ($this.index_1 + 1) | 0
                          )
                      ),
                      new Char(_Char___init__impl__380027157(10))
                  )
                : false
        ) {
            return ($this.index_1 + 2) | 0;
        }
        return (
            equals(
                new Char(charSequenceGet($this.source_1, $this.index_1)),
                new Char(_Char___init__impl__380027157(13))
            )
                ? true
                : equals(
                      new Char(charSequenceGet($this.source_1, $this.index_1)),
                      new Char(_Char___init__impl__380027157(10))
                  )
        )
            ? ($this.index_1 + 1) | 0
            : $this.index_1;
    }
    function addToken($this, newNode) {
        if (
            !(
                last_0($this.nodes_1)._get_symbol__541899891_8ymsmr_k$() ===
                "(SEP)"
            )
                ? true
                : !(newNode._get_symbol__541899891_8ymsmr_k$() === "(SEP)")
        ) {
            $this.nodes_1.add_1j60pz_k$(newNode);
            Unit_getInstance();
        }
    }
    function move($this, step) {
        var tmp0_this = $this;
        tmp0_this.index_1 = (tmp0_this.index_1 + step) | 0;
        $this.position_1 = new Pair(
            ($this.position_1._get_first__3232921377_hkbbvj_k$() + step) | 0,
            $this.position_1._get_second__4255435031_njbah_k$()
        );
    }
    function move$default($this, step, $mask0, $handler) {
        if (!(($mask0 & 2) === 0)) step = 1;
        return move($this, step);
    }
    function moveAndAppend($this, sb) {
        sb.append_t8oh9e_k$(charSequenceGet($this.source_1, $this.index_1));
        Unit_getInstance();
        move$default($this, 0, 2, null);
    }
    function toNextLine($this) {
        $this.index_1 = moveAfterLineSeparator($this);
        $this.position_1 = new Pair(
            0,
            ($this.position_1._get_second__4255435031_njbah_k$() + 1) | 0
        );
    }
    function isFirstIdentChar($this, c) {
        return isLetter(c)
            ? true
            : equals(new Char(c), new Char(_Char___init__impl__380027157(95)));
    }
    function isIdentChar($this, c) {
        return isLetterOrDigit(c)
            ? true
            : equals(new Char(c), new Char(_Char___init__impl__380027157(95)));
    }
    function isOperatorChar($this, c) {
        var tmp$ret$1;
        $l$block_1: {
            var tmp0_any_0 = toCharArray($this.operators_1);
            var indexedObject = tmp0_any_0;
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
                var element_2 = indexedObject[inductionVariable];
                inductionVariable = (inductionVariable + 1) | 0;
                var tmp$ret$0;
                $l$block: {
                    tmp$ret$0 = equals(new Char(element_2), new Char(c));
                    break $l$block;
                }
                if (tmp$ret$0) {
                    tmp$ret$1 = true;
                    break $l$block_1;
                } else {
                }
            }
            tmp$ret$1 = false;
            break $l$block_1;
        }
        return tmp$ret$1;
    }
    function Lexer(source, filePath) {
        this.source_1 = source;
        this.filePath_1 = filePath;
        this.operators_1 = '!@$%^*-+=?.,:;"&|/(){}[]><\n\r';
        this.escapes_1 = mutableMapOf([
            to(
                new Char(_Char___init__impl__380027157(34)),
                new Char(_Char___init__impl__380027157(34))
            ),
            to(
                new Char(_Char___init__impl__380027157(92)),
                new Char(_Char___init__impl__380027157(92))
            ),
            to(
                new Char(_Char___init__impl__380027157(98)),
                new Char(_Char___init__impl__380027157(8))
            ),
            to(
                new Char(_Char___init__impl__380027157(110)),
                new Char(_Char___init__impl__380027157(10))
            ),
            to(
                new Char(_Char___init__impl__380027157(114)),
                new Char(_Char___init__impl__380027157(13))
            ),
            to(
                new Char(_Char___init__impl__380027157(116)),
                new Char(_Char___init__impl__380027157(9))
            ),
        ]);
        this.registry_1 = RegistryFactory_getInstance().getRegistry_yem37y_k$(
            this.filePath_1
        );
        this.index_1 = 0;
        this.position_1 = new Pair(0, 0);
        var tmp = this;
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = ArrayList_init_$Create$();
            break $l$block;
        }
        tmp.nodes_1 = tmp$ret$0;
        this.tokenIndex_1 = -1;
        addTokens(this);
    }
    Lexer.prototype.next_20eer_k$ = function () {
        $l$loop: while (true) {
            var tmp0_this = this;
            tmp0_this.tokenIndex_1 = (tmp0_this.tokenIndex_1 + 1) | 0;
            if (
                !(
                    this.nodes_1
                        .get_fkrdnv_k$(tmp0_this.tokenIndex_1)
                        ._get_value__3683422336_a43j40_k$() === "//"
                )
            ) {
                break $l$loop;
            }
        }
        return this.nodes_1.get_fkrdnv_k$(this.tokenIndex_1);
    };
    Lexer.prototype.prev_21xkj_k$ = function () {
        var tmp0_this = this;
        tmp0_this.tokenIndex_1 = (tmp0_this.tokenIndex_1 - 1) | 0;
        return this.nodes_1.get_fkrdnv_k$(tmp0_this.tokenIndex_1);
    };
    Lexer.prototype.moveAfterSeparator_c34j3r_k$ = function () {
        var tmp0_this = this;
        var tmp1 = tmp0_this.tokenIndex_1;
        tmp0_this.tokenIndex_1 = (tmp1 + 1) | 0;
        Unit_getInstance();
        if (
            !(
                this.nodes_1
                    .get_fkrdnv_k$(this.tokenIndex_1)
                    ._get_symbol__541899891_8ymsmr_k$() === "(SEP)"
            )
                ? !(
                      this.nodes_1
                          .get_fkrdnv_k$(this.tokenIndex_1)
                          ._get_symbol__541899891_8ymsmr_k$() === "(EOF)"
                  )
                : false
        ) {
            var tmp = this.nodes_1.get_fkrdnv_k$(this.tokenIndex_1);
            throw SyntaxException_init_$Create$(
                "Expected separator",
                this.filePath_1,
                tmp,
                null,
                8,
                null
            );
        }
    };
    Lexer.prototype.peek_21nx7_k$ = function () {
        var offset = 1;
        if (
            ((this.tokenIndex_1 + offset) | 0) >
            _get_lastIndex__339712501(this.nodes_1)
        ) {
            return last_0(this.nodes_1);
        }
        while (
            this.nodes_1
                .get_fkrdnv_k$((this.tokenIndex_1 + offset) | 0)
                ._get_value__3683422336_a43j40_k$() === "//"
        ) {
            var tmp0 = offset;
            offset = (tmp0 + 1) | 0;
            Unit_getInstance();
        }
        return this.nodes_1.get_fkrdnv_k$((this.tokenIndex_1 + offset) | 0);
    };
    Lexer.prototype.peekSeparator_78d6tm_k$ = function () {
        return (
            this.nodes_1
                .get_fkrdnv_k$((this.tokenIndex_1 + 1) | 0)
                ._get_symbol__541899891_8ymsmr_k$() === "(SEP)"
        );
    };
    Lexer.prototype.moveAfterTokenLineSeparator_7hxwau_k$ = function (once) {
        var tmp;
        var tmp_0 = this.peek_21nx7_k$()._get_value__3683422336_a43j40_k$();
        if (contains$default(tmp_0, "\n", false, 2, null)) {
            tmp = true;
        } else {
            {
                var tmp_1 =
                    this.peek_21nx7_k$()._get_value__3683422336_a43j40_k$();
                tmp = contains$default(tmp_1, "\r", false, 2, null);
            }
        }
        if (tmp) {
            this.next_20eer_k$();
            Unit_getInstance();
        } else {
        }
        if (!once) {
            $l$loop: while (true) {
                var tmp_2;
                var tmp_3 =
                    this.peek_21nx7_k$()._get_value__3683422336_a43j40_k$();
                if (contains$default(tmp_3, "\n", false, 2, null)) {
                    tmp_2 = true;
                } else {
                    {
                        var tmp_4 =
                            this.peek_21nx7_k$()._get_value__3683422336_a43j40_k$();
                        tmp_2 = contains$default(tmp_4, "\r", false, 2, null);
                    }
                }
                if (!tmp_2) {
                    break $l$loop;
                }
                this.next_20eer_k$();
                Unit_getInstance();
            }
        }
    };
    Lexer.prototype.moveAfterTokenLineSeparator$default_o1o2jt_k$ = function (
        once,
        $mask0,
        $handler
    ) {
        if (!(($mask0 & 1) === 0)) once = true;
        return this.moveAfterTokenLineSeparator_7hxwau_k$(once);
    };
    Lexer.$metadata$ = {
        simpleName: "Lexer",
        kind: "class",
        interfaces: [],
    };
    function Parser(text, filePath) {
        this.filePath_1 = filePath;
        this.lexer_1 = new Lexer(text, this.filePath_1);
    }
    Parser.prototype._get_lexer__3401167429_es58e3_k$ = function () {
        return this.lexer_1;
    };
    Parser.prototype.expression_l6myl3_k$ = function (rbp) {
        var t = this.lexer_1.next_20eer_k$();
        var tmp0_safe_receiver = t._get_nud__857243828_e6dpkk_k$();
        var tmp;
        if (tmp0_safe_receiver == null) {
            tmp = null;
        } else {
            var tmp$ret$1;
            $l$block_0: {
                {
                }
                var tmp$ret$0;
                $l$block: {
                    tmp$ret$0 = tmp0_safe_receiver(t, this);
                    break $l$block;
                }
                tmp$ret$1 = tmp$ret$0;
                break $l$block_0;
            }
            tmp = tmp$ret$1;
        }
        var tmp4_elvis_lhs = tmp;
        var tmp_0;
        if (tmp4_elvis_lhs == null) {
            var tmp1_position = t._get_position__3188952002_iahqv2_k$();
            var tmp2_length = t._get_value__3683422336_a43j40_k$().length;
            var tmp3_fileName = this.filePath_1;
            throw PositionalException_init_$Create$(
                "Expected variable or prefix operator",
                tmp3_fileName,
                null,
                tmp1_position,
                tmp2_length,
                4,
                null
            );
        } else {
            tmp_0 = tmp4_elvis_lhs;
        }
        var left = tmp_0;
        while (
            rbp <
            this.lexer_1
                .peek_21nx7_k$()
                ._get_bindingPower__398781387_6lf9or_k$()
        ) {
            t = this.lexer_1.next_20eer_k$();
            var tmp5_safe_receiver = t._get_led__857168870_e6c3qe_k$();
            var tmp_1;
            if (tmp5_safe_receiver == null) {
                tmp_1 = null;
            } else {
                var tmp$ret$3;
                $l$block_2: {
                    {
                    }
                    var tmp$ret$2;
                    $l$block_1: {
                        tmp$ret$2 = tmp5_safe_receiver(t, this, left);
                        break $l$block_1;
                    }
                    tmp$ret$3 = tmp$ret$2;
                    break $l$block_2;
                }
                tmp_1 = tmp$ret$3;
            }
            var tmp9_elvis_lhs = tmp_1;
            var tmp_2;
            if (tmp9_elvis_lhs == null) {
                var tmp6_position = t._get_position__3188952002_iahqv2_k$();
                var tmp7_length = t._get_value__3683422336_a43j40_k$().length;
                var tmp8_fileName = this.filePath_1;
                throw PositionalException_init_$Create$(
                    "Expected infix or suffix operator",
                    tmp8_fileName,
                    null,
                    tmp6_position,
                    tmp7_length,
                    4,
                    null
                );
            } else {
                tmp_2 = tmp9_elvis_lhs;
            }
            left = tmp_2;
        }
        return left;
    };
    Parser.prototype.advance_fikpbz_k$ = function (symbol) {
        var token = this.lexer_1.next_20eer_k$();
        if (token._get_symbol__541899891_8ymsmr_k$() === symbol) {
            return token;
        }
        var tmp0_errorMessage = "Expected " + symbol;
        var tmp1_position = token._get_position__3188952002_iahqv2_k$();
        var tmp2_length = token._get_symbol__541899891_8ymsmr_k$().length;
        var tmp3_fileName = this.filePath_1;
        throw PositionalException_init_$Create$(
            tmp0_errorMessage,
            tmp3_fileName,
            null,
            tmp1_position,
            tmp2_length,
            4,
            null
        );
    };
    Parser.prototype.advanceSeparator_9guq0i_k$ = function () {
        this.lexer_1.moveAfterSeparator_c34j3r_k$();
    };
    Parser.prototype.statements_3k22vw_k$ = function () {
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = ArrayList_init_$Create$();
            break $l$block;
        }
        var statements = tmp$ret$0;
        var next = this.lexer_1.peek_21nx7_k$();
        while (
            !(next._get_symbol__541899891_8ymsmr_k$() === "(EOF)")
                ? !(next._get_symbol__541899891_8ymsmr_k$() === "}")
                : false
        ) {
            statements.add_1j60pz_k$(this.statement_yhfyq9_k$());
            Unit_getInstance();
            next = this.lexer_1.peek_21nx7_k$();
        }
        var tmp$ret$3;
        $l$block_2: {
            var tmp$ret$2;
            $l$block_1: {
                var tmp0_filterTo_0_1 = ArrayList_init_$Create$();
                var tmp0_iterator_1_2 = statements.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var element_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$1;
                    $l$block_0: {
                        tmp$ret$1 = !(
                            element_2_3._get_symbol__541899891_8ymsmr_k$() ===
                            "(SEP)"
                        );
                        break $l$block_0;
                    }
                    if (tmp$ret$1) {
                        tmp0_filterTo_0_1.add_1j60pz_k$(element_2_3);
                        Unit_getInstance();
                    } else {
                    }
                }
                tmp$ret$2 = tmp0_filterTo_0_1;
                break $l$block_1;
            }
            tmp$ret$3 = tmp$ret$2;
            break $l$block_2;
        }
        return tmp$ret$3;
    };
    Parser.prototype.statement_yhfyq9_k$ = function () {
        if (
            this.lexer_1.peek_21nx7_k$()._get_symbol__541899891_8ymsmr_k$() ===
            "(SEP)"
        ) {
            return this.lexer_1.next_20eer_k$();
        }
        var token = this.lexer_1.peek_21nx7_k$();
        if (!(token._get_std__857391822_e6gvri_k$() == null)) {
            token = this.lexer_1.next_20eer_k$();
            var tmp0_safe_receiver = token._get_std__857391822_e6gvri_k$();
            var tmp;
            if (tmp0_safe_receiver == null) {
                tmp = null;
            } else {
                var tmp$ret$1;
                $l$block_0: {
                    {
                    }
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = tmp0_safe_receiver(token, this);
                        break $l$block;
                    }
                    tmp$ret$1 = tmp$ret$0;
                    break $l$block_0;
                }
                tmp = tmp$ret$1;
            }
            var tmp4_elvis_lhs = tmp;
            var tmp_0;
            if (tmp4_elvis_lhs == null) {
                var tmp1_position = token._get_position__3188952002_iahqv2_k$();
                var tmp2_length =
                    token._get_value__3683422336_a43j40_k$().length;
                var tmp3_fileName = this.filePath_1;
                throw PositionalException_init_$Create$(
                    "Expected statement",
                    tmp3_fileName,
                    null,
                    tmp1_position,
                    tmp2_length,
                    4,
                    null
                );
            } else {
                tmp_0 = tmp4_elvis_lhs;
            }
            return tmp_0;
        }
        token = this.expression_l6myl3_k$(0);
        var peeked = this.lexer_1.peek_21nx7_k$();
        if (!(peeked._get_symbol__541899891_8ymsmr_k$() === "}")) {
            this.advanceSeparator_9guq0i_k$();
        }
        return token;
    };
    Parser.prototype.block_thjbhv_k$ = function (canBeSingleStatement) {
        var token = this.lexer_1.next_20eer_k$();
        if (!(token._get_symbol__541899891_8ymsmr_k$() === "{")) {
            if (canBeSingleStatement) {
                this.lexer_1.prev_21xkj_k$();
                Unit_getInstance();
                var res = TokenBlock_init_$Create$(
                    new Pair(
                        (token
                            ._get_position__3188952002_iahqv2_k$()
                            ._get_first__3232921377_hkbbvj_k$() -
                            1) |
                            0,
                        token
                            ._get_position__3188952002_iahqv2_k$()
                            ._get_second__4255435031_njbah_k$()
                    )
                );
                res._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                    this.statement_yhfyq9_k$()
                );
                Unit_getInstance();
                if (
                    first(
                        res._get_children__1387553196_my42wc_k$()
                    )._get_symbol__541899891_8ymsmr_k$() === "(SEP)"
                ) {
                    res._get_children__1387553196_my42wc_k$().clear_j9y8zo_k$();
                }
                return res;
            }
            var tmp0_position = token._get_position__3188952002_iahqv2_k$();
            var tmp1_length = token._get_value__3683422336_a43j40_k$().length;
            var tmp2_fileName = this.filePath_1;
            throw PositionalException_init_$Create$(
                "Expected a block start '{'",
                tmp2_fileName,
                null,
                tmp0_position,
                tmp1_length,
                4,
                null
            );
        }
        var tmp3_safe_receiver = token._get_std__857391822_e6gvri_k$();
        var tmp;
        if (tmp3_safe_receiver == null) {
            tmp = null;
        } else {
            var tmp$ret$1;
            $l$block_0: {
                {
                }
                var tmp$ret$0;
                $l$block: {
                    tmp$ret$0 = tmp3_safe_receiver(token, this);
                    break $l$block;
                }
                tmp$ret$1 = tmp$ret$0;
                break $l$block_0;
            }
            tmp = tmp$ret$1;
        }
        var tmp7_elvis_lhs = tmp;
        var tmp_0;
        if (tmp7_elvis_lhs == null) {
            var tmp4_position = token._get_position__3188952002_iahqv2_k$();
            var tmp5_length = token._get_value__3683422336_a43j40_k$().length;
            var tmp6_fileName = this.filePath_1;
            throw PositionalException_init_$Create$(
                "Expected statement",
                tmp6_fileName,
                null,
                tmp4_position,
                tmp5_length,
                4,
                null
            );
        } else {
            tmp_0 = tmp7_elvis_lhs;
        }
        return tmp_0;
    };
    Parser.prototype.block$default_wttgoi_k$ = function (
        canBeSingleStatement,
        $mask0,
        $handler
    ) {
        if (!(($mask0 & 1) === 0)) canBeSingleStatement = false;
        return this.block_thjbhv_k$(canBeSingleStatement);
    };
    Parser.$metadata$ = {
        simpleName: "Parser",
        kind: "class",
        interfaces: [],
    };
    function checkFiles($this, path, roots) {
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = ArrayList_init_$Create$();
            break $l$block;
        }
        var candidates = tmp$ret$0;
        var tmp0_iterator = roots.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var root = tmp0_iterator.next_20eer_k$();
            if (FileSystem_getInstance().exists_9c3km3_k$(root + path)) {
                candidates.add_1j60pz_k$(root + path);
                Unit_getInstance();
            }
        }
        return candidates;
    }
    function PathBuilder() {
        PathBuilder_instance = this;
    }
    PathBuilder.prototype.getNodes_jwpeo6_k$ = function (fileName) {
        var code = FileSystem_getInstance().read_bwmtyj_k$(fileName);
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_map_0 = new Parser(code, fileName).statements_3k22vw_k$();
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(tmp0_map_0, 10)
                );
                var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = item_2_3.toNode_xahmvw_k$(fileName);
                        break $l$block;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
                    Unit_getInstance();
                }
                tmp$ret$1 = tmp0_mapTo_0_1;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        return tmp$ret$2;
    };
    PathBuilder.prototype.getFullPath_k5ltdb_k$ = function (
        importName,
        roots,
        fileTable,
        firstTime = false
    ) {
        var tmp0_subject = importName;
        var tmp;
        if (tmp0_subject instanceof Link) {
            var res = StringBuilder_init_$Create$();
            var tmp1_iterator = importName
                ._get_children__1387553196_my42wc_k$()
                .iterator_jk1svi_k$();
            while (tmp1_iterator.hasNext_bitz1p_k$()) {
                var child = tmp1_iterator.next_20eer_k$();
                res.append_ssq29y_k$(
                    child._get_value__3683422336_a43j40_k$() + "/"
                );
                Unit_getInstance();
            }
            tmp = res
                .deleteAt_w9fbwd_k$(_get_lastIndex__339712501_0(res))
                .append_ssq29y_k$(".rgn")
                .toString();
        } else {
            {
                tmp = importName._get_value__3683422336_a43j40_k$() + ".rgn";
            }
        }
        var path = tmp;
        if (firstTime) {
            currentImportNode = importName;
            currentRoots = roots;
            currentFileTable = fileTable;
            return tmp;
        }
        var candidates = checkFiles(this, path, roots);
        if (candidates.isEmpty_y1axqb_k$()) {
            var tmp_0;
            if (importName instanceof Link) {
                var tmp_1 = importName._get_children__1387553196_my42wc_k$();
                tmp_0 = joinToString$default(
                    tmp_1,
                    "/",
                    null,
                    null,
                    0,
                    null,
                    null,
                    62,
                    null
                );
            } else {
                {
                    tmp_0 = importName._get_value__3683422336_a43j40_k$();
                }
            }
            var tmp_2 = "File not found " + tmp_0;
            var tmp_3 = fileTable._get_filePath__151144490_2hzju2_k$();
            throw PositionalException_init_$Create$(
                tmp_2,
                tmp_3,
                importName,
                null,
                0,
                24,
                null
            );
        }
        if (candidates._get_size__809037418_ddoh9m_k$() > 1) {
            var tmp_4;
            if (importName instanceof Link) {
                var tmp_5 = importName._get_children__1387553196_my42wc_k$();
                tmp_4 = joinToString$default(
                    tmp_5,
                    "/",
                    null,
                    null,
                    0,
                    null,
                    null,
                    62,
                    null
                );
            } else {
                {
                    tmp_4 = importName._get_value__3683422336_a43j40_k$();
                }
            }
            var tmp_6 =
                "Impossible to import " +
                tmp_4 +
                ". Found " +
                candidates._get_size__809037418_ddoh9m_k$() +
                " files: ";
            var tmp_7 =
                tmp_6 +
                joinToString$default(
                    candidates,
                    ", ",
                    null,
                    null,
                    0,
                    null,
                    null,
                    62,
                    null
                );
            var tmp_8 = fileTable._get_filePath__151144490_2hzju2_k$();
            throw PositionalException_init_$Create$(
                tmp_7,
                tmp_8,
                importName,
                null,
                0,
                24,
                null
            );
        }
        return first(candidates);
    };
    PathBuilder.$metadata$ = {
        simpleName: "PathBuilder",
        kind: "object",
        interfaces: [],
    };
    var PathBuilder_instance;
    function PathBuilder_getInstance() {
        if (PathBuilder_instance == null) new PathBuilder();
        return PathBuilder_instance;
    }
    function PositionalException_init_$Init$(
        errorMessage,
        fileName,
        node,
        position,
        length,
        $mask0,
        $marker,
        $this
    ) {
        if (!(($mask0 & 4) === 0)) {
            node = Node_init_$Create$(null, null, null, null, 15, null);
        }
        if (!(($mask0 & 8) === 0)) position = new Pair(0, 0);
        if (!(($mask0 & 16) === 0)) length = 1;
        PositionalException.call(
            $this,
            errorMessage,
            fileName,
            node,
            position,
            length
        );
        return $this;
    }
    function PositionalException_init_$Create$(
        errorMessage,
        fileName,
        node,
        position,
        length,
        $mask0,
        $marker
    ) {
        var tmp = PositionalException_init_$Init$(
            errorMessage,
            fileName,
            node,
            position,
            length,
            $mask0,
            $marker,
            Object.create(PositionalException.prototype)
        );
        captureStack(tmp, PositionalException_init_$Create$);
        return tmp;
    }
    function PositionalException(
        errorMessage,
        fileName,
        node,
        position,
        length
    ) {
        Exception_init_$Init$(this);
        this.errorMessage_1 = errorMessage;
        this.fileName_1 = fileName;
        this.node_1 = node;
        this.position_1 = position;
        this.length_1 = length;
        captureStack(this, PositionalException);
    }
    PositionalException.prototype._get_node__804577417_db0vwp_k$ = function () {
        return this.node_1;
    };
    PositionalException.prototype._get_message__1663917034_rinilm_k$ =
        function () {
            return (
                "`" +
                this.node_1._get_value__3683422336_a43j40_k$() +
                "` " +
                this.errorMessage_1 +
                " at " +
                this.getPosition_oardy9_k$()
            );
        };
    PositionalException.prototype.getPosition_oardy9_k$ = function () {
        var tmp;
        if (!(this.node_1._get_value__3683422336_a43j40_k$() === "")) {
            tmp =
                "" +
                this.node_1
                    ._get_position__3188952002_iahqv2_k$()
                    ._get_second__4255435031_njbah_k$() +
                "," +
                this.node_1
                    ._get_position__3188952002_iahqv2_k$()
                    ._get_first__3232921377_hkbbvj_k$() +
                "-" +
                ((((this.node_1
                    ._get_position__3188952002_iahqv2_k$()
                    ._get_first__3232921377_hkbbvj_k$() +
                    this.node_1._get_value__3683422336_a43j40_k$().length) |
                    0) -
                    1) |
                    0);
        } else {
            tmp =
                "" +
                this.position_1._get_second__4255435031_njbah_k$() +
                "," +
                this.position_1._get_first__3232921377_hkbbvj_k$() +
                "-" +
                ((((this.position_1._get_first__3232921377_hkbbvj_k$() +
                    this.length_1) |
                    0) -
                    1) |
                    0);
        }
        return tmp;
    };
    PositionalException.$metadata$ = {
        simpleName: "PositionalException",
        kind: "class",
        interfaces: [],
    };
    Object.defineProperty(PositionalException.prototype, "message", {
        configurable: true,
        get: function () {
            return this._get_message__1663917034_rinilm_k$();
        },
    });
    function SyntaxException_init_$Init$(
        errorMessage,
        fileName,
        token,
        position,
        $mask0,
        $marker,
        $this
    ) {
        if (!(($mask0 & 8) === 0)) position = new Pair(0, 0);
        SyntaxException.call($this, errorMessage, fileName, token, position);
        return $this;
    }
    function SyntaxException_init_$Create$(
        errorMessage,
        fileName,
        token,
        position,
        $mask0,
        $marker
    ) {
        var tmp = SyntaxException_init_$Init$(
            errorMessage,
            fileName,
            token,
            position,
            $mask0,
            $marker,
            Object.create(SyntaxException.prototype)
        );
        captureStack(tmp, SyntaxException_init_$Create$);
        return tmp;
    }
    function getPosition($this) {
        var tmp;
        if (!($this.token_1._get_value__3683422336_a43j40_k$() === "")) {
            tmp =
                "" +
                $this.token_1
                    ._get_position__3188952002_iahqv2_k$()
                    ._get_second__4255435031_njbah_k$() +
                "," +
                $this.token_1
                    ._get_position__3188952002_iahqv2_k$()
                    ._get_first__3232921377_hkbbvj_k$() +
                "-" +
                (((($this.token_1
                    ._get_position__3188952002_iahqv2_k$()
                    ._get_first__3232921377_hkbbvj_k$() +
                    $this.token_1._get_value__3683422336_a43j40_k$().length) |
                    0) -
                    1) |
                    0);
        } else {
            tmp =
                "" +
                $this.position_1._get_second__4255435031_njbah_k$() +
                "," +
                $this.position_1._get_first__3232921377_hkbbvj_k$() +
                "-" +
                $this.position_1._get_first__3232921377_hkbbvj_k$();
        }
        return tmp;
    }
    function SyntaxException(errorMessage, fileName, token, position) {
        Exception_init_$Init$(this);
        this.errorMessage_1 = errorMessage;
        this.fileName_1 = fileName;
        this.token_1 = token;
        this.position_1 = position;
        captureStack(this, SyntaxException);
    }
    SyntaxException.prototype._get_token__3639048440_auim88_k$ = function () {
        return this.token_1;
    };
    SyntaxException.prototype._get_message__1663917034_rinilm_k$ = function () {
        return (
            "`" +
            this.token_1._get_value__3683422336_a43j40_k$() +
            "` " +
            this.errorMessage_1 +
            " at " +
            getPosition(this)
        );
    };
    SyntaxException.$metadata$ = {
        simpleName: "SyntaxException",
        kind: "class",
        interfaces: [],
    };
    Object.defineProperty(SyntaxException.prototype, "message", {
        configurable: true,
        get: function () {
            return this._get_message__1663917034_rinilm_k$();
        },
    });
    function NotFoundException_init_$Init$(
        node,
        fileName,
        variable,
        $mask0,
        $marker,
        $this
    ) {
        if (!(($mask0 & 1) === 0)) {
            node = Node_init_$Create$(null, null, null, null, 15, null);
        }
        if (!(($mask0 & 4) === 0)) variable = null;
        NotFoundException.call($this, node, fileName, variable);
        return $this;
    }
    function NotFoundException_init_$Create$(
        node,
        fileName,
        variable,
        $mask0,
        $marker
    ) {
        var tmp = NotFoundException_init_$Init$(
            node,
            fileName,
            variable,
            $mask0,
            $marker,
            Object.create(NotFoundException.prototype)
        );
        captureStack(tmp, NotFoundException_init_$Create$);
        return tmp;
    }
    function NotFoundException(node, fileName, variable) {
        PositionalException_init_$Init$(
            "",
            fileName,
            node,
            null,
            0,
            24,
            null,
            this
        );
        this.variable_1 = variable;
        captureStack(this, NotFoundException);
    }
    NotFoundException.prototype._get_message__1663917034_rinilm_k$ =
        function () {
            var tmp0_safe_receiver = this.variable_1;
            var tmp1_elvis_lhs =
                tmp0_safe_receiver == null
                    ? null
                    : toString_0(tmp0_safe_receiver);
            return (
                "Not found " +
                (tmp1_elvis_lhs == null
                    ? this._get_node__804577417_db0vwp_k$()._get_value__3683422336_a43j40_k$()
                    : tmp1_elvis_lhs) +
                (" at " + this.getPosition_oardy9_k$())
            );
        };
    NotFoundException.$metadata$ = {
        simpleName: "NotFoundException",
        kind: "class",
        interfaces: [],
    };
    Object.defineProperty(NotFoundException.prototype, "message", {
        configurable: true,
        get: function () {
            return this._get_message__1663917034_rinilm_k$();
        },
    });
    function TokenExpectedTypeException_init_$Init$(
        classes,
        fileName,
        token,
        value,
        expectedMultiple,
        $mask0,
        $marker,
        $this
    ) {
        if (!(($mask0 & 8) === 0)) value = null;
        if (!(($mask0 & 16) === 0)) expectedMultiple = false;
        TokenExpectedTypeException.call(
            $this,
            classes,
            fileName,
            token,
            value,
            expectedMultiple
        );
        return $this;
    }
    function TokenExpectedTypeException_init_$Create$(
        classes,
        fileName,
        token,
        value,
        expectedMultiple,
        $mask0,
        $marker
    ) {
        var tmp = TokenExpectedTypeException_init_$Init$(
            classes,
            fileName,
            token,
            value,
            expectedMultiple,
            $mask0,
            $marker,
            Object.create(TokenExpectedTypeException.prototype)
        );
        captureStack(tmp, TokenExpectedTypeException_init_$Create$);
        return tmp;
    }
    function TokenExpectedTypeException$_get_message_$lambda_2941932641() {
        return function (it) {
            return Utils_getInstance().mapToString_hbz8o4_k$(it);
        };
    }
    function TokenExpectedTypeException(
        classes,
        fileName,
        token,
        value,
        expectedMultiple
    ) {
        SyntaxException_init_$Init$("", fileName, token, null, 8, null, this);
        this.classes_1 = classes;
        this.value_1 = value;
        this.expectedMultiple_1 = expectedMultiple;
        captureStack(this, TokenExpectedTypeException);
    }
    TokenExpectedTypeException.prototype._get_message__1663917034_rinilm_k$ =
        function () {
            var tmp = this.expectedMultiple_1 ? " and " : " or ";
            return (
                "Expected " +
                joinToString$default(
                    this.classes_1,
                    tmp,
                    null,
                    null,
                    0,
                    null,
                    TokenExpectedTypeException$_get_message_$lambda_2941932641(),
                    30,
                    null
                ) +
                (!(this.value_1 == null)
                    ? ", but got " +
                      Utils_getInstance().mapToString_hbz8o4_k$(
                          getKClassFromExpression(this.value_1)
                      )
                    : "") +
                (" " +
                    this._get_token__3639048440_auim88_k$()._get_position__3188952002_iahqv2_k$())
            );
        };
    TokenExpectedTypeException.$metadata$ = {
        simpleName: "TokenExpectedTypeException",
        kind: "class",
        interfaces: [],
    };
    Object.defineProperty(TokenExpectedTypeException.prototype, "message", {
        configurable: true,
        get: function () {
            return this._get_message__1663917034_rinilm_k$();
        },
    });
    function ExpectedTypeException_init_$Init$(
        classes,
        fileName,
        node,
        value,
        expectedMultiple,
        $mask0,
        $marker,
        $this
    ) {
        if (!(($mask0 & 8) === 0)) value = null;
        if (!(($mask0 & 16) === 0)) expectedMultiple = false;
        ExpectedTypeException.call(
            $this,
            classes,
            fileName,
            node,
            value,
            expectedMultiple
        );
        return $this;
    }
    function ExpectedTypeException_init_$Create$(
        classes,
        fileName,
        node,
        value,
        expectedMultiple,
        $mask0,
        $marker
    ) {
        var tmp = ExpectedTypeException_init_$Init$(
            classes,
            fileName,
            node,
            value,
            expectedMultiple,
            $mask0,
            $marker,
            Object.create(ExpectedTypeException.prototype)
        );
        captureStack(tmp, ExpectedTypeException_init_$Create$);
        return tmp;
    }
    function ExpectedTypeException$_get_message_$lambda_2916805064() {
        return function (it) {
            return Utils_getInstance().mapToString_hbz8o4_k$(it);
        };
    }
    function ExpectedTypeException(
        classes,
        fileName,
        node,
        value,
        expectedMultiple
    ) {
        PositionalException_init_$Init$(
            "",
            fileName,
            node,
            null,
            0,
            24,
            null,
            this
        );
        this.classes_1 = classes;
        this.value_1 = value;
        this.expectedMultiple_1 = expectedMultiple;
        captureStack(this, ExpectedTypeException);
    }
    ExpectedTypeException.prototype._get_message__1663917034_rinilm_k$ =
        function () {
            var tmp = this.expectedMultiple_1 ? " and " : " or ";
            return (
                "Expected " +
                joinToString$default(
                    this.classes_1,
                    tmp,
                    null,
                    null,
                    0,
                    null,
                    ExpectedTypeException$_get_message_$lambda_2916805064(),
                    30,
                    null
                ) +
                (!(this.value_1 == null)
                    ? ", but got " +
                      Utils_getInstance().mapToString_hbz8o4_k$(
                          getKClassFromExpression(this.value_1)
                      )
                    : "") +
                (" " +
                    this._get_node__804577417_db0vwp_k$()._get_position__3188952002_iahqv2_k$())
            );
        };
    ExpectedTypeException.$metadata$ = {
        simpleName: "ExpectedTypeException",
        kind: "class",
        interfaces: [],
    };
    Object.defineProperty(ExpectedTypeException.prototype, "message", {
        configurable: true,
        get: function () {
            return this._get_message__1663917034_rinilm_k$();
        },
    });
    function register($this, symbol, bp, nud, led, std) {
        if (!($this.table_1.get_1mhr4y_k$(symbol) == null)) {
            var value = ensureNotNull($this.table_1.get_1mhr4y_k$(symbol));
            if (
                !(nud == null)
                    ? value._get_nud__857243828_e6dpkk_k$() == null
                    : false
            ) {
                value._set_nud__296131368_4rdm8l_k$(nud);
            }
            if (
                !(led == null)
                    ? value._get_led__857168870_e6c3qe_k$() == null
                    : false
            ) {
                value._set_led__296056410_ll7hoc_k$(led);
            }
            if (
                !(std == null)
                    ? value._get_std__857391822_e6gvri_k$() == null
                    : false
            ) {
                value._set_std__296279362_1k36f9_k$(std);
            }
        } else {
            var tmp0_set_0 = $this.table_1;
            var tmp1_set_0 = Token_init_$Create$(
                null,
                null,
                null,
                bp,
                nud,
                led,
                std,
                null,
                135,
                null
            );
            tmp0_set_0.put_3mhbri_k$(symbol, tmp1_set_0);
            Unit_getInstance();
        }
    }
    function Registry$prefix$lambda() {
        return function (t, p) {
            t._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                p.expression_l6myl3_k$(100)
            );
            Unit_getInstance();
            return t;
        };
    }
    function Registry$unaryMinus$lambda() {
        return function (t, p) {
            t._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                p.expression_l6myl3_k$(100)
            );
            Unit_getInstance();
            var tmp;
            var tmp_0 = t._get_left__802434852_d9qyp0_k$();
            if (tmp_0 instanceof TokenNumber) {
                t._get_left__802434852_d9qyp0_k$()._set_value__1325260276_wbpkyq_k$(
                    "-" +
                        t
                            ._get_left__802434852_d9qyp0_k$()
                            ._get_value__3683422336_a43j40_k$()
                );
                tmp = t._get_left__802434852_d9qyp0_k$();
            } else {
                {
                    tmp = t;
                }
            }
            return tmp;
        };
    }
    function Registry$infix$lambda() {
        return function (t, p, left) {
            t._get_children__1387553196_my42wc_k$().add_1j60pz_k$(left);
            Unit_getInstance();
            t._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                p.expression_l6myl3_k$(
                    t._get_bindingPower__398781387_6lf9or_k$()
                )
            );
            Unit_getInstance();
            return t;
        };
    }
    function Registry$symbol$lambda() {
        return function (t, _anonymous_parameter_1__2695192083) {
            return t;
        };
    }
    function Registry$infixRight$lambda() {
        return function (t, p, left) {
            t._get_children__1387553196_my42wc_k$().add_1j60pz_k$(left);
            Unit_getInstance();
            t._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                p.expression_l6myl3_k$(
                    (t._get_bindingPower__398781387_6lf9or_k$() - 1) | 0
                )
            );
            Unit_getInstance();
            return t;
        };
    }
    function Registry() {
        var tmp = this;
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = LinkedHashMap_init_$Create$();
            break $l$block;
        }
        tmp.table_1 = tmp$ret$0;
    }
    Registry.prototype.prefix_ujp4e8_k$ = function (symbol) {
        register(this, symbol, 0, Registry$prefix$lambda(), null, null);
    };
    Registry.prototype.unaryMinus_nbu9m7_k$ = function (symbol) {
        register(this, symbol, 0, Registry$unaryMinus$lambda(), null, null);
    };
    Registry.prototype.infix_jeww1r_k$ = function (symbol, bp) {
        register(this, symbol, bp, null, Registry$infix$lambda(), null);
    };
    Registry.prototype.operator_5vquas_k$ = function (symbol, value, position) {
        return TokenFactory_getInstance().createOperator_3irh8_k$(
            symbol,
            value,
            position,
            ensureNotNull(
                this.table_1.get_1mhr4y_k$(symbol)
            )._get_bindingPower__398781387_6lf9or_k$(),
            ensureNotNull(
                this.table_1.get_1mhr4y_k$(symbol)
            )._get_nud__857243828_e6dpkk_k$(),
            ensureNotNull(
                this.table_1.get_1mhr4y_k$(symbol)
            )._get_led__857168870_e6c3qe_k$(),
            ensureNotNull(
                this.table_1.get_1mhr4y_k$(symbol)
            )._get_std__857391822_e6gvri_k$()
        );
    };
    Registry.prototype.string_thqtp3_k$ = function (symbol, value, position) {
        return new TokenString(
            symbol,
            value,
            position,
            ensureNotNull(
                this.table_1.get_1mhr4y_k$(symbol)
            )._get_bindingPower__398781387_6lf9or_k$(),
            ensureNotNull(
                this.table_1.get_1mhr4y_k$(symbol)
            )._get_nud__857243828_e6dpkk_k$(),
            ensureNotNull(
                this.table_1.get_1mhr4y_k$(symbol)
            )._get_led__857168870_e6c3qe_k$(),
            ensureNotNull(
                this.table_1.get_1mhr4y_k$(symbol)
            )._get_std__857391822_e6gvri_k$()
        );
    };
    Registry.prototype.token_x5edt_k$ = function (symbol, value, position) {
        var tmp = ensureNotNull(
            this.table_1.get_1mhr4y_k$(symbol)
        )._get_bindingPower__398781387_6lf9or_k$();
        var tmp_0 = ensureNotNull(
            this.table_1.get_1mhr4y_k$(symbol)
        )._get_nud__857243828_e6dpkk_k$();
        var tmp_1 = ensureNotNull(
            this.table_1.get_1mhr4y_k$(symbol)
        )._get_led__857168870_e6c3qe_k$();
        var tmp_2 = ensureNotNull(
            this.table_1.get_1mhr4y_k$(symbol)
        )._get_std__857391822_e6gvri_k$();
        return Token_init_$Create$(
            symbol,
            value,
            position,
            tmp,
            tmp_0,
            tmp_1,
            tmp_2,
            null,
            128,
            null
        );
    };
    Registry.prototype.symbol_h1a58a_k$ = function (symbol) {
        register(this, symbol, 0, Registry$symbol$lambda(), null, null);
    };
    Registry.prototype.consumable_lr4ya9_k$ = function (symbol) {
        register(this, symbol, 0, null, null, null);
    };
    Registry.prototype.infixLed_mn82jz_k$ = function (symbol, bp, led) {
        register(this, symbol, bp, null, led, null);
    };
    Registry.prototype.infixRight_5fxijf_k$ = function (symbol, bp) {
        register(this, symbol, bp, null, Registry$infixRight$lambda(), null);
    };
    Registry.prototype.prefixNud_4q6m7i_k$ = function (symbol, nud) {
        register(this, symbol, 0, nud, null, null);
    };
    Registry.prototype.stmt_ai05x1_k$ = function (symbol, std) {
        register(this, symbol, 0, null, null, std);
    };
    Registry.prototype.defined_x3osmw_k$ = function (symbol) {
        return !(this.table_1.get_1mhr4y_k$(symbol) == null);
    };
    Registry.prototype.definedIdentifier_m9xvbe_k$ = function (
        symbol,
        value,
        position
    ) {
        return TokenFactory_getInstance().createWordToken_g6p633_k$(
            symbol,
            value,
            position,
            ensureNotNull(
                this.table_1.get_1mhr4y_k$(symbol)
            )._get_bindingPower__398781387_6lf9or_k$(),
            ensureNotNull(
                this.table_1.get_1mhr4y_k$(symbol)
            )._get_nud__857243828_e6dpkk_k$(),
            ensureNotNull(
                this.table_1.get_1mhr4y_k$(symbol)
            )._get_led__857168870_e6c3qe_k$(),
            ensureNotNull(
                this.table_1.get_1mhr4y_k$(symbol)
            )._get_std__857391822_e6gvri_k$()
        );
    };
    Registry.prototype.identifier_q37um9_k$ = function (
        symbol,
        value,
        position
    ) {
        return new TokenIdentifier(
            symbol,
            value,
            position,
            ensureNotNull(
                this.table_1.get_1mhr4y_k$(symbol)
            )._get_bindingPower__398781387_6lf9or_k$(),
            ensureNotNull(
                this.table_1.get_1mhr4y_k$(symbol)
            )._get_nud__857243828_e6dpkk_k$(),
            ensureNotNull(
                this.table_1.get_1mhr4y_k$(symbol)
            )._get_led__857168870_e6c3qe_k$(),
            ensureNotNull(
                this.table_1.get_1mhr4y_k$(symbol)
            )._get_std__857391822_e6gvri_k$()
        );
    };
    Registry.$metadata$ = {
        simpleName: "Registry",
        kind: "class",
        interfaces: [],
    };
    function sequence($this, node, parser) {
        var comma = false;
        while (true) {
            node._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                parser.expression_l6myl3_k$(0)
            );
            Unit_getInstance();
            if (
                !(
                    parser
                        ._get_lexer__3401167429_es58e3_k$()
                        .peek_21nx7_k$()
                        ._get_symbol__541899891_8ymsmr_k$() === ","
                )
            ) {
                return comma;
            }
            parser.advance_fikpbz_k$(",");
            Unit_getInstance();
            comma = true;
        }
    }
    function isLinkable($this, node, filePath) {
        if (!isInterface(node, Linkable)) {
            var tmp = listOf_0([
                getKClass(Identifier),
                getKClass(Invocation),
                getKClass(Index),
            ]);
            throw TokenExpectedTypeException_init_$Create$(
                tmp,
                filePath,
                node,
                null,
                false,
                24,
                null
            );
        } else {
        }
        var index = node;
        $l$loop: while (true) {
            if (!(index instanceof TokenIndex)) {
                break $l$loop;
            }
            index = index._get_left__802434852_d9qyp0_k$();
        }
        if (!isInterface(index, Linkable)) {
            var tmp_0 = listOf_0([
                getKClass(Identifier),
                getKClass(Invocation),
                getKClass(Index),
            ]);
            var tmp_1 = index;
            var tmp_2 = index;
            throw TokenExpectedTypeException_init_$Create$(
                tmp_0,
                filePath,
                tmp_1,
                tmp_2,
                false,
                16,
                null
            );
        } else {
        }
    }
    function checkImportedFolder($this, link, filePath) {
        var tmp0_iterator = link
            ._get_children__1387553196_my42wc_k$()
            .iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var ident = tmp0_iterator.next_20eer_k$();
            if (!checkIdentifierInImport($this, ident)) {
                throw SyntaxException_init_$Create$(
                    "Each folder should be represented as identifier",
                    filePath,
                    ident,
                    null,
                    8,
                    null
                );
            }
        }
    }
    function checkIdentifierInImport($this, node) {
        var tmp;
        if (node instanceof TokenIdentifier) {
            tmp = true;
        } else {
            {
                tmp =
                    node
                        ._get_children__1387553196_my42wc_k$()
                        ._get_size__809037418_ddoh9m_k$() === 0;
            }
        }
        return tmp;
    }
    function registerLink($this, node, parser, left, filePath, nullable) {
        if (nullable) {
            node._get_nullable__2526391434_t8ypva_k$().add_1j60pz_k$(1);
            Unit_getInstance();
        }
        node._get_children__1387553196_my42wc_k$().add_1j60pz_k$(left);
        Unit_getInstance();
        node._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
            parser.expression_l6myl3_k$(105)
        );
        Unit_getInstance();
        isLinkable(
            $this,
            last_0(node._get_children__1387553196_my42wc_k$()),
            filePath
        );
        var t = parser._get_lexer__3401167429_es58e3_k$().peek_21nx7_k$();
        var i = 2;
        while (t._get_symbol__541899891_8ymsmr_k$() === "(LINK)") {
            parser.advance_fikpbz_k$("(LINK)");
            Unit_getInstance();
            if (t._get_value__3683422336_a43j40_k$() === "?.") {
                node._get_nullable__2526391434_t8ypva_k$().add_1j60pz_k$(i);
                Unit_getInstance();
            }
            node._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                parser.expression_l6myl3_k$(105)
            );
            Unit_getInstance();
            t = parser._get_lexer__3401167429_es58e3_k$().peek_21nx7_k$();
            isLinkable(
                $this,
                last_0(node._get_children__1387553196_my42wc_k$()),
                filePath
            );
            var tmp0 = i;
            i = (tmp0 + 1) | 0;
            Unit_getInstance();
        }
        return node;
    }
    function registerLink$default(
        $this,
        node,
        parser,
        left,
        filePath,
        nullable,
        $mask0,
        $handler
    ) {
        if (!(($mask0 & 32) === 0)) nullable = false;
        return registerLink($this, node, parser, left, filePath, nullable);
    }
    function RegistryFactory$getRegistry$lambda() {
        return function (node, _anonymous_parameter_1__2695192083) {
            return new TokenNumber(
                "0",
                node._get_position__3188952002_iahqv2_k$()
            );
        };
    }
    function RegistryFactory$getRegistry$lambda_0() {
        return function (node, _anonymous_parameter_1__2695192083) {
            return new TokenNumber(
                "1",
                node._get_position__3188952002_iahqv2_k$()
            );
        };
    }
    function RegistryFactory$getRegistry$lambda_1() {
        return function (node, _anonymous_parameter_1__2695192083) {
            return new TokenNull(node._get_position__3188952002_iahqv2_k$());
        };
    }
    function RegistryFactory$getRegistry$lambda_2($filePath) {
        return function (node, parser, left) {
            var tmp = RegistryFactory_getInstance();
            var tmp_0 = node instanceof Link_0 ? node : THROW_CCE();
            return registerLink$default(
                tmp,
                tmp_0,
                parser,
                left,
                $filePath,
                false,
                32,
                null
            );
        };
    }
    function RegistryFactory$getRegistry$lambda_3($filePath) {
        return function (node, parser, left) {
            var tmp = RegistryFactory_getInstance();
            return registerLink(
                tmp,
                node instanceof Link_0 ? node : THROW_CCE(),
                parser,
                left,
                $filePath,
                true
            );
        };
    }
    function RegistryFactory$getRegistry$lambda_4($filePath) {
        return function (node, parser, left) {
            var tmp;
            if (
                (
                    (
                        (
                            !(
                                left._get_symbol__541899891_8ymsmr_k$() ===
                                "(LINK)"
                            )
                                ? !(
                                      left._get_symbol__541899891_8ymsmr_k$() ===
                                      "(IDENT)"
                                  )
                                : false
                        )
                            ? !(left._get_symbol__541899891_8ymsmr_k$() === "[")
                            : false
                    )
                        ? !(left._get_symbol__541899891_8ymsmr_k$() === "(")
                        : false
                )
                    ? !(left._get_symbol__541899891_8ymsmr_k$() === "!")
                    : false
            ) {
                var tmp_0 = "`" + left + "` is not invokable";
                throw SyntaxException_init_$Create$(
                    tmp_0,
                    $filePath,
                    left,
                    null,
                    8,
                    null
                );
            }
            node._get_children__1387553196_my42wc_k$().add_1j60pz_k$(left);
            Unit_getInstance();
            var t = parser._get_lexer__3401167429_es58e3_k$().peek_21nx7_k$();
            Unit_getInstance();
            var tmp_1;
            if (!(t._get_symbol__541899891_8ymsmr_k$() === ")")) {
                sequence(RegistryFactory_getInstance(), node, parser);
                Unit_getInstance();
                parser.advance_fikpbz_k$(")");
                tmp_1 = Unit_getInstance();
            } else {
                parser.advance_fikpbz_k$(")");
                tmp_1 = Unit_getInstance();
            }
            return node;
        };
    }
    function RegistryFactory$getRegistry$lambda_5($filePath) {
        return function (node, parser, left) {
            var res = TokenIndex_init_$Create$(node);
            Unit_getInstance();
            res._get_children__1387553196_my42wc_k$().add_1j60pz_k$(left);
            Unit_getInstance();
            var t = parser._get_lexer__3401167429_es58e3_k$().peek_21nx7_k$();
            Unit_getInstance();
            var tmp;
            if (!(t._get_symbol__541899891_8ymsmr_k$() === "]")) {
                sequence(RegistryFactory_getInstance(), res, parser);
                Unit_getInstance();
                parser.advance_fikpbz_k$("]");
                tmp = Unit_getInstance();
            } else {
                throw SyntaxException_init_$Create$(
                    "Expected index",
                    $filePath,
                    t,
                    null,
                    8,
                    null
                );
            }
            return res;
        };
    }
    function RegistryFactory$getRegistry$lambda_6($filePath) {
        return function (node, parser) {
            var comma = false;
            Unit_getInstance();
            var tmp;
            if (
                !(
                    parser
                        ._get_lexer__3401167429_es58e3_k$()
                        .peek_21nx7_k$()
                        ._get_symbol__541899891_8ymsmr_k$() === ")"
                )
            ) {
                comma = sequence(RegistryFactory_getInstance(), node, parser);
                tmp = Unit_getInstance();
            }
            parser.advance_fikpbz_k$(")");
            Unit_getInstance();
            var tmp_0;
            if (comma) {
                throw SyntaxException_init_$Create$(
                    "Tuples are not implemented",
                    $filePath,
                    node,
                    null,
                    8,
                    null
                );
            } else if (
                node
                    ._get_children__1387553196_my42wc_k$()
                    ._get_size__809037418_ddoh9m_k$() === 0
            ) {
                throw SyntaxException_init_$Create$(
                    "Empty parentheses",
                    $filePath,
                    node,
                    null,
                    8,
                    null
                );
            } else {
                tmp_0 = node
                    ._get_children__1387553196_my42wc_k$()
                    .get_fkrdnv_k$(0);
            }
            return tmp_0;
        };
    }
    function RegistryFactory$getRegistry$lambda_7() {
        return function (node, parser) {
            var res = new TokenList(node);
            Unit_getInstance();
            var tmp;
            if (
                !(
                    parser
                        ._get_lexer__3401167429_es58e3_k$()
                        .peek_21nx7_k$()
                        ._get_symbol__541899891_8ymsmr_k$() === "]"
                )
            ) {
                sequence(RegistryFactory_getInstance(), res, parser);
                tmp = Unit_getInstance();
            }
            parser.advance_fikpbz_k$("]");
            Unit_getInstance();
            res._set_symbol__453320063_q2hh9p_k$("[]");
            res._set_value__1325260276_wbpkyq_k$("(LIST)");
            return res;
        };
    }
    function RegistryFactory$getRegistry$lambda_8($filePath) {
        return function (node, parser) {
            var res = new TokenDictionary(node);
            Unit_getInstance();
            var tmp;
            if (
                !(
                    parser
                        ._get_lexer__3401167429_es58e3_k$()
                        .peek_21nx7_k$()
                        ._get_symbol__541899891_8ymsmr_k$() === "}"
                )
            ) {
                $l$loop: while (true) {
                    res._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                        parser.expression_l6myl3_k$(0)
                    );
                    Unit_getInstance();
                    if (
                        !(
                            last_0(
                                res._get_children__1387553196_my42wc_k$()
                            )._get_symbol__541899891_8ymsmr_k$() === ":"
                        )
                    ) {
                        var tmp_0 = last_0(
                            res._get_children__1387553196_my42wc_k$()
                        );
                        throw SyntaxException_init_$Create$(
                            "Expected key and value",
                            $filePath,
                            tmp_0,
                            null,
                            8,
                            null
                        );
                    }
                    if (
                        !(
                            parser
                                ._get_lexer__3401167429_es58e3_k$()
                                .peek_21nx7_k$()
                                ._get_symbol__541899891_8ymsmr_k$() === ","
                        )
                    ) {
                        break $l$loop;
                    }
                    parser.advance_fikpbz_k$(",");
                    Unit_getInstance();
                }
                tmp = Unit_getInstance();
            }
            parser.advance_fikpbz_k$("}");
            Unit_getInstance();
            res._set_symbol__453320063_q2hh9p_k$("{}");
            res._set_value__1325260276_wbpkyq_k$("(DICTIONARY)");
            return res;
        };
    }
    function RegistryFactory$getRegistry$lambda_9() {
        return function (node, parser) {
            var res = new TokenTernary(node);
            Unit_getInstance();
            parser.advance_fikpbz_k$("(");
            Unit_getInstance();
            var cond = parser.expression_l6myl3_k$(0);
            Unit_getInstance();
            res._get_children__1387553196_my42wc_k$().add_1j60pz_k$(cond);
            Unit_getInstance();
            parser.advance_fikpbz_k$(")");
            Unit_getInstance();
            res._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                parser.expression_l6myl3_k$(0)
            );
            Unit_getInstance();
            parser.advance_fikpbz_k$("else");
            Unit_getInstance();
            res._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                parser.expression_l6myl3_k$(0)
            );
            Unit_getInstance();
            return res;
        };
    }
    function RegistryFactory$getRegistry$lambda_10() {
        return function (node, parser) {
            var res = new TokenBlock(node);
            Unit_getInstance();
            parser.advance_fikpbz_k$("(");
            Unit_getInstance();
            res._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                parser.expression_l6myl3_k$(0)
            );
            Unit_getInstance();
            parser.advance_fikpbz_k$(")");
            Unit_getInstance();
            var tmp = parser._get_lexer__3401167429_es58e3_k$();
            tmp.moveAfterTokenLineSeparator$default_o1o2jt_k$(false, 1, null);
            res._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                parser.block_thjbhv_k$(true)
            );
            Unit_getInstance();
            var tmp_0 = parser._get_lexer__3401167429_es58e3_k$();
            tmp_0.moveAfterTokenLineSeparator$default_o1o2jt_k$(false, 1, null);
            var next = parser
                ._get_lexer__3401167429_es58e3_k$()
                .peek_21nx7_k$();
            Unit_getInstance();
            var tmp_1;
            if (next._get_value__3683422336_a43j40_k$() === "else") {
                parser._get_lexer__3401167429_es58e3_k$().next_20eer_k$();
                Unit_getInstance();
                var tmp_2 = parser._get_lexer__3401167429_es58e3_k$();
                tmp_2.moveAfterTokenLineSeparator$default_o1o2jt_k$(
                    false,
                    1,
                    null
                );
                next = parser
                    ._get_lexer__3401167429_es58e3_k$()
                    .peek_21nx7_k$();
                var tmp_3;
                if (next._get_value__3683422336_a43j40_k$() === "if") {
                    res._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                        parser.statement_yhfyq9_k$()
                    );
                    tmp_3 = Unit_getInstance();
                } else {
                    res._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                        parser.block_thjbhv_k$(true)
                    );
                    tmp_3 = Unit_getInstance();
                }
                tmp_1 = tmp_3;
            }
            return res;
        };
    }
    function RegistryFactory$getRegistry$lambda_11($filePath) {
        return function (node, parser) {
            var res = new TokenImport(node);
            Unit_getInstance();
            res._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                parser.expression_l6myl3_k$(0)
            );
            Unit_getInstance();
            var tmp;
            if (
                parser
                    ._get_lexer__3401167429_es58e3_k$()
                    .peek_21nx7_k$()
                    ._get_value__3683422336_a43j40_k$() === "as"
            ) {
                parser.advance_fikpbz_k$("as");
                Unit_getInstance();
                res._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                    parser.expression_l6myl3_k$(0)
                );
                Unit_getInstance();
                var tmp_0;
                if (
                    !checkIdentifierInImport(
                        RegistryFactory_getInstance(),
                        res._get_right__3576132917_bvz45n_k$()
                    )
                ) {
                    var tmp_1 = res._get_right__3576132917_bvz45n_k$();
                    throw SyntaxException_init_$Create$(
                        "Expected non-link identifier after `as` directive",
                        $filePath,
                        tmp_1,
                        null,
                        8,
                        null
                    );
                }
                tmp = tmp_0;
            } else {
                if (
                    !checkIdentifierInImport(
                        RegistryFactory_getInstance(),
                        res._get_left__802434852_d9qyp0_k$()
                    )
                ) {
                    throw SyntaxException_init_$Create$(
                        "Imports containing folders in name should be declared like:\n`import path as identifier` and used in code with specified identifier",
                        $filePath,
                        res,
                        null,
                        8,
                        null
                    );
                }
                var tmp_2 = res._get_children__1387553196_my42wc_k$();
                var tmp_3 = res
                    ._get_left__802434852_d9qyp0_k$()
                    ._get_symbol__541899891_8ymsmr_k$();
                var tmp_4 = res
                    ._get_left__802434852_d9qyp0_k$()
                    ._get_value__3683422336_a43j40_k$();
                tmp_2.add_1j60pz_k$(
                    Token_init_$Create$(
                        tmp_3,
                        tmp_4,
                        null,
                        0,
                        null,
                        null,
                        null,
                        null,
                        252,
                        null
                    )
                );
                tmp = Unit_getInstance();
            }
            var tmp_5;
            var tmp_6 = res._get_left__802434852_d9qyp0_k$();
            if (tmp_6 instanceof Link_0) {
                var tmp_7 = RegistryFactory_getInstance();
                var tmp_8 = res._get_left__802434852_d9qyp0_k$();
                tmp_5 = checkImportedFolder(
                    tmp_7,
                    tmp_8 instanceof Link_0 ? tmp_8 : THROW_CCE(),
                    $filePath
                );
            } else {
                if (
                    !checkIdentifierInImport(
                        RegistryFactory_getInstance(),
                        res._get_left__802434852_d9qyp0_k$()
                    )
                ) {
                    var tmp_9 = res._get_right__3576132917_bvz45n_k$();
                    throw SyntaxException_init_$Create$(
                        "Expected link or identifier before `as` directive",
                        $filePath,
                        tmp_9,
                        null,
                        8,
                        null
                    );
                } else {
                }
            }
            return res;
        };
    }
    function RegistryFactory$getRegistry$lambda_12() {
        return function (node, parser) {
            var res = new TokenType(node);
            Unit_getInstance();
            var expr = parser.expression_l6myl3_k$(0);
            Unit_getInstance();
            var tmp;
            if (expr._get_symbol__541899891_8ymsmr_k$() === ":") {
                res._get_children__1387553196_my42wc_k$().addAll_oxxjjk_k$(
                    expr._get_children__1387553196_my42wc_k$()
                );
                tmp = Unit_getInstance();
            } else {
                var tmp_0 = res._get_children__1387553196_my42wc_k$();
                tmp_0.addAll_oxxjjk_k$(
                    listOf_0([
                        expr,
                        Token_init_$Create$(
                            "",
                            "",
                            null,
                            0,
                            null,
                            null,
                            null,
                            null,
                            252,
                            null
                        ),
                    ])
                );
                tmp = Unit_getInstance();
            }
            var tmp_1 = res._get_children__1387553196_my42wc_k$();
            tmp_1.add_1j60pz_k$(parser.block$default_wttgoi_k$(false, 1, null));
            Unit_getInstance();
            return res;
        };
    }
    function RegistryFactory$getRegistry$lambda_13() {
        return function (node, parser) {
            var res = new TokenObject(node);
            Unit_getInstance();
            res._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                parser.expression_l6myl3_k$(0)
            );
            Unit_getInstance();
            var tmp = res._get_children__1387553196_my42wc_k$();
            tmp.add_1j60pz_k$(parser.block$default_wttgoi_k$(false, 1, null));
            Unit_getInstance();
            return res;
        };
    }
    function RegistryFactory$getRegistry$lambda_14() {
        return function (node, parser) {
            var res = new TokenFunction(node);
            Unit_getInstance();
            res._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                parser.expression_l6myl3_k$(0)
            );
            Unit_getInstance();
            var tmp = parser._get_lexer__3401167429_es58e3_k$();
            tmp.moveAfterTokenLineSeparator$default_o1o2jt_k$(false, 1, null);
            var tmp_0 = res._get_children__1387553196_my42wc_k$();
            tmp_0.add_1j60pz_k$(parser.block$default_wttgoi_k$(false, 1, null));
            Unit_getInstance();
            return res;
        };
    }
    function RegistryFactory$getRegistry$lambda_15() {
        return function (node, parser) {
            var res = new TokenBlock(node);
            Unit_getInstance();
            res._get_children__1387553196_my42wc_k$().addAll_oxxjjk_k$(
                parser.statements_3k22vw_k$()
            );
            Unit_getInstance();
            parser.advance_fikpbz_k$("}");
            Unit_getInstance();
            return res;
        };
    }
    function RegistryFactory$getRegistry$lambda_16() {
        return function (node, parser) {
            var res = new TokenBlock(node);
            Unit_getInstance();
            parser.advance_fikpbz_k$("(");
            Unit_getInstance();
            res._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                parser.expression_l6myl3_k$(0)
            );
            Unit_getInstance();
            parser.advance_fikpbz_k$(")");
            Unit_getInstance();
            var tmp = parser._get_lexer__3401167429_es58e3_k$();
            tmp.moveAfterTokenLineSeparator$default_o1o2jt_k$(false, 1, null);
            res._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                parser.block_thjbhv_k$(true)
            );
            Unit_getInstance();
            return res;
        };
    }
    function RegistryFactory$getRegistry$lambda_17($filePath) {
        return function (node, parser) {
            var res = new TokenBlock(node);
            Unit_getInstance();
            parser.advance_fikpbz_k$("(");
            Unit_getInstance();
            res._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                parser.expression_l6myl3_k$(0)
            );
            Unit_getInstance();
            var tmp;
            var tmp_0 = res._get_left__802434852_d9qyp0_k$();
            if (!(tmp_0 instanceof TokenIdentifier)) {
                var tmp_1 = res._get_left__802434852_d9qyp0_k$();
                throw SyntaxException_init_$Create$(
                    "Expected identifier",
                    $filePath,
                    tmp_1,
                    null,
                    8,
                    null
                );
            } else {
            }
            parser.advance_fikpbz_k$("in");
            Unit_getInstance();
            res._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                parser.expression_l6myl3_k$(0)
            );
            Unit_getInstance();
            parser.advance_fikpbz_k$(")");
            Unit_getInstance();
            var tmp_2 = parser._get_lexer__3401167429_es58e3_k$();
            tmp_2.moveAfterTokenLineSeparator$default_o1o2jt_k$(false, 1, null);
            res._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                parser.block_thjbhv_k$(true)
            );
            Unit_getInstance();
            return res;
        };
    }
    function RegistryFactory$getRegistry$lambda_18() {
        return function (node, parser) {
            var tmp;
            if (
                !(
                    parser
                        ._get_lexer__3401167429_es58e3_k$()
                        .peek_21nx7_k$()
                        ._get_symbol__541899891_8ymsmr_k$() === "}"
                )
            ) {
                tmp = parser.advanceSeparator_9guq0i_k$();
            }
            return new TokenWordStatement(node);
        };
    }
    function RegistryFactory$getRegistry$lambda_19() {
        return function (node, parser) {
            var tmp;
            if (
                !(
                    parser
                        ._get_lexer__3401167429_es58e3_k$()
                        .peek_21nx7_k$()
                        ._get_symbol__541899891_8ymsmr_k$() === "}"
                )
            ) {
                tmp = parser.advanceSeparator_9guq0i_k$();
            }
            return new TokenWordStatement(node);
        };
    }
    function RegistryFactory$getRegistry$lambda_20() {
        return function (node, parser) {
            var res = new TokenWordStatement(node);
            Unit_getInstance();
            var tmp;
            if (
                !(
                    parser
                        ._get_lexer__3401167429_es58e3_k$()
                        .peek_21nx7_k$()
                        ._get_symbol__541899891_8ymsmr_k$() === "}"
                )
                    ? !parser
                          ._get_lexer__3401167429_es58e3_k$()
                          .peekSeparator_78d6tm_k$()
                    : false
            ) {
                res._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                    parser.expression_l6myl3_k$(0)
                );
                tmp = Unit_getInstance();
            }
            return res;
        };
    }
    function RegistryFactory$getRegistry$lambda_21() {
        return function (node, _anonymous_parameter_1__2695192083) {
            return node;
        };
    }
    function RegistryFactory() {
        RegistryFactory_instance = this;
    }
    RegistryFactory.prototype.getRegistry_yem37y_k$ = function (filePath) {
        var registry = new Registry();
        registry.symbol_h1a58a_k$("(IDENT)");
        registry.symbol_h1a58a_k$("(NUMBER)");
        registry.symbol_h1a58a_k$("(STRING)");
        registry.prefixNud_4q6m7i_k$(
            "false",
            RegistryFactory$getRegistry$lambda()
        );
        registry.prefixNud_4q6m7i_k$(
            "true",
            RegistryFactory$getRegistry$lambda_0()
        );
        registry.prefixNud_4q6m7i_k$(
            "null",
            RegistryFactory$getRegistry$lambda_1()
        );
        registry.symbol_h1a58a_k$("true");
        registry.symbol_h1a58a_k$("false");
        registry.consumable_lr4ya9_k$("(SEP)");
        registry.consumable_lr4ya9_k$("\n");
        registry.consumable_lr4ya9_k$("\r");
        registry.consumable_lr4ya9_k$("\r\n");
        registry.consumable_lr4ya9_k$(";");
        registry.consumable_lr4ya9_k$("(EOF)");
        registry.consumable_lr4ya9_k$(")");
        registry.consumable_lr4ya9_k$("]");
        registry.consumable_lr4ya9_k$(",");
        registry.consumable_lr4ya9_k$("else");
        registry.consumable_lr4ya9_k$("{");
        registry.consumable_lr4ya9_k$("}");
        registry.consumable_lr4ya9_k$("as");
        registry.consumable_lr4ya9_k$("in");
        registry.infix_jeww1r_k$("+", 50);
        registry.infix_jeww1r_k$("-", 50);
        registry.infix_jeww1r_k$("*", 60);
        registry.infix_jeww1r_k$("/", 60);
        registry.infix_jeww1r_k$(":", 10);
        registry.infix_jeww1r_k$("%", 65);
        registry.infix_jeww1r_k$("<", 30);
        registry.infix_jeww1r_k$(">", 30);
        registry.infix_jeww1r_k$("<=", 30);
        registry.infix_jeww1r_k$(">=", 30);
        registry.infix_jeww1r_k$("==", 30);
        registry.infix_jeww1r_k$("!=", 30);
        registry.infix_jeww1r_k$("is", 15);
        registry.infix_jeww1r_k$("!is", 15);
        registry.unaryMinus_nbu9m7_k$("-");
        registry.prefix_ujp4e8_k$("!");
        registry.infix_jeww1r_k$("??", 20);
        registry.infixRight_5fxijf_k$("&&", 25);
        registry.infixRight_5fxijf_k$("||", 25);
        registry.infixRight_5fxijf_k$("=", 10);
        registry.infixLed_mn82jz_k$(
            ".",
            105,
            RegistryFactory$getRegistry$lambda_2(filePath)
        );
        registry.infixLed_mn82jz_k$(
            "?.",
            105,
            RegistryFactory$getRegistry$lambda_3(filePath)
        );
        registry.infixLed_mn82jz_k$(
            "(",
            120,
            RegistryFactory$getRegistry$lambda_4(filePath)
        );
        registry.infixLed_mn82jz_k$(
            "[",
            110,
            RegistryFactory$getRegistry$lambda_5(filePath)
        );
        registry.prefixNud_4q6m7i_k$(
            "(",
            RegistryFactory$getRegistry$lambda_6(filePath)
        );
        registry.prefixNud_4q6m7i_k$(
            "[",
            RegistryFactory$getRegistry$lambda_7()
        );
        registry.prefixNud_4q6m7i_k$(
            "{",
            RegistryFactory$getRegistry$lambda_8(filePath)
        );
        registry.prefixNud_4q6m7i_k$(
            "if",
            RegistryFactory$getRegistry$lambda_9()
        );
        registry.stmt_ai05x1_k$("if", RegistryFactory$getRegistry$lambda_10());
        registry.stmt_ai05x1_k$(
            "import",
            RegistryFactory$getRegistry$lambda_11(filePath)
        );
        registry.stmt_ai05x1_k$(
            "class",
            RegistryFactory$getRegistry$lambda_12()
        );
        registry.stmt_ai05x1_k$(
            "object",
            RegistryFactory$getRegistry$lambda_13()
        );
        registry.stmt_ai05x1_k$("fun", RegistryFactory$getRegistry$lambda_14());
        registry.stmt_ai05x1_k$("{", RegistryFactory$getRegistry$lambda_15());
        registry.stmt_ai05x1_k$(
            "while",
            RegistryFactory$getRegistry$lambda_16()
        );
        registry.stmt_ai05x1_k$(
            "foreach",
            RegistryFactory$getRegistry$lambda_17(filePath)
        );
        registry.stmt_ai05x1_k$(
            "break",
            RegistryFactory$getRegistry$lambda_18()
        );
        registry.stmt_ai05x1_k$(
            "continue",
            RegistryFactory$getRegistry$lambda_19()
        );
        registry.stmt_ai05x1_k$(
            "return",
            RegistryFactory$getRegistry$lambda_20()
        );
        registry.stmt_ai05x1_k$(
            "#stop",
            RegistryFactory$getRegistry$lambda_21()
        );
        return registry;
    };
    RegistryFactory.$metadata$ = {
        simpleName: "RegistryFactory",
        kind: "object",
        interfaces: [],
    };
    var RegistryFactory_instance;
    function RegistryFactory_getInstance() {
        if (RegistryFactory_instance == null) new RegistryFactory();
        return RegistryFactory_instance;
    }
    function initializeSuperTypes(superTypes) {
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = superTypes
                ._get_entries__31877249_iz8n5_k$()
                .iterator_jk1svi_k$();
            break $l$block;
        }
        var tmp0_iterator = tmp$ret$0;
        $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var tmp1_loop_parameter = tmp0_iterator.next_20eer_k$();
            var tmp$ret$1;
            $l$block_0: {
                tmp$ret$1 = tmp1_loop_parameter._get_key__857139730_e6bh8y_k$();
                break $l$block_0;
            }
            var type = tmp$ret$1;
            var tmp$ret$2;
            $l$block_1: {
                tmp$ret$2 =
                    tmp1_loop_parameter._get_value__3683422336_a43j40_k$();
                break $l$block_1;
            }
            var node = tmp$ret$2;
            if (node == null) {
                continue $l$loop;
            }
            var localSuperType = null;
            var tmp2_subject = node;
            var tmp;
            if (tmp2_subject instanceof Identifier) {
                var tmp$ret$7;
                $l$block_6: {
                    var tmp$ret$6;
                    $l$block_5: {
                        var tmp0_filterTo_0_1 = LinkedHashMap_init_$Create$();
                        var tmp$ret$3;
                        $l$block_2: {
                            tmp$ret$3 = superTypes
                                ._get_entries__31877249_iz8n5_k$()
                                .iterator_jk1svi_k$();
                            break $l$block_2;
                        }
                        var tmp0_iterator_1_2 = tmp$ret$3;
                        while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                            var element_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                            var tmp$ret$5;
                            $l$block_4: {
                                var tmp$ret$4;
                                $l$block_3: {
                                    tmp$ret$4 =
                                        element_2_3._get_key__857139730_e6bh8y_k$();
                                    break $l$block_3;
                                }
                                var t_5 = tmp$ret$4;
                                if (
                                    t_5
                                        ._get_fileTable__504497375_8cd4nz_k$()
                                        .equals(
                                            type._get_fileTable__504497375_8cd4nz_k$()
                                        )
                                        ? t_5._get_name__804168992_das4rk_k$() ===
                                          node._get_value__3683422336_a43j40_k$()
                                        : false
                                ) {
                                    localSuperType = t_5;
                                }
                                tmp$ret$5 =
                                    t_5._get_name__804168992_das4rk_k$() ===
                                    node._get_value__3683422336_a43j40_k$();
                                break $l$block_4;
                            }
                            if (tmp$ret$5) {
                                tmp0_filterTo_0_1.put_3mhbri_k$(
                                    element_2_3._get_key__857139730_e6bh8y_k$(),
                                    element_2_3._get_value__3683422336_a43j40_k$()
                                );
                                Unit_getInstance();
                            } else {
                            }
                        }
                        tmp$ret$6 = tmp0_filterTo_0_1;
                        break $l$block_5;
                    }
                    tmp$ret$7 = tmp$ret$6;
                    break $l$block_6;
                }
                tmp = tmp$ret$7;
            } else {
                if (tmp2_subject instanceof Link) {
                    if (
                        !(
                            node
                                ._get_children__1387553196_my42wc_k$()
                                ._get_size__809037418_ddoh9m_k$() === 2
                        )
                    ) {
                        var tmp_0 = type
                            ._get_fileTable__504497375_8cd4nz_k$()
                            ._get_filePath__151144490_2hzju2_k$();
                        throw PositionalException_init_$Create$(
                            "Expected imported file name and type name",
                            tmp_0,
                            node,
                            null,
                            0,
                            24,
                            null
                        );
                    }
                    var tmp3_elvis_lhs = type
                        ._get_fileTable__504497375_8cd4nz_k$()
                        .getImportOrNull_hhw2v8_k$(
                            node
                                ._get_left__802434852_d9qyp0_k$()
                                ._get_value__3683422336_a43j40_k$()
                        );
                    var tmp_1;
                    if (tmp3_elvis_lhs == null) {
                        var tmp_2 = type
                            ._get_fileTable__504497375_8cd4nz_k$()
                            ._get_filePath__151144490_2hzju2_k$();
                        var tmp_3 = node._get_left__802434852_d9qyp0_k$();
                        throw PositionalException_init_$Create$(
                            "Import not found",
                            tmp_2,
                            tmp_3,
                            null,
                            0,
                            24,
                            null
                        );
                    } else {
                        tmp_1 = tmp3_elvis_lhs;
                    }
                    var importedFileTable = tmp_1;
                    var tmp$ret$12;
                    $l$block_11: {
                        var tmp$ret$11;
                        $l$block_10: {
                            var tmp0_filterTo_0_1_0 =
                                LinkedHashMap_init_$Create$();
                            var tmp$ret$8;
                            $l$block_7: {
                                tmp$ret$8 = superTypes
                                    ._get_entries__31877249_iz8n5_k$()
                                    .iterator_jk1svi_k$();
                                break $l$block_7;
                            }
                            var tmp0_iterator_1_2_0 = tmp$ret$8;
                            while (tmp0_iterator_1_2_0.hasNext_bitz1p_k$()) {
                                var element_2_3_0 =
                                    tmp0_iterator_1_2_0.next_20eer_k$();
                                var tmp$ret$10;
                                $l$block_9: {
                                    var tmp$ret$9;
                                    $l$block_8: {
                                        tmp$ret$9 =
                                            element_2_3_0._get_key__857139730_e6bh8y_k$();
                                        break $l$block_8;
                                    }
                                    var t_5_0 = tmp$ret$9;
                                    tmp$ret$10 = t_5_0
                                        ._get_fileTable__504497375_8cd4nz_k$()
                                        .equals(importedFileTable)
                                        ? t_5_0._get_name__804168992_das4rk_k$() ===
                                          node
                                              ._get_right__3576132917_bvz45n_k$()
                                              ._get_value__3683422336_a43j40_k$()
                                        : false;
                                    break $l$block_9;
                                }
                                if (tmp$ret$10) {
                                    tmp0_filterTo_0_1_0.put_3mhbri_k$(
                                        element_2_3_0._get_key__857139730_e6bh8y_k$(),
                                        element_2_3_0._get_value__3683422336_a43j40_k$()
                                    );
                                    Unit_getInstance();
                                } else {
                                }
                            }
                            tmp$ret$11 = tmp0_filterTo_0_1_0;
                            break $l$block_10;
                        }
                        tmp$ret$12 = tmp$ret$11;
                        break $l$block_11;
                    }
                    tmp = tmp$ret$12;
                } else {
                    {
                        var tmp_4 = type
                            ._get_fileTable__504497375_8cd4nz_k$()
                            ._get_filePath__151144490_2hzju2_k$();
                        throw PositionalException_init_$Create$(
                            "Expected identifier or link",
                            tmp_4,
                            node,
                            null,
                            0,
                            24,
                            null
                        );
                    }
                }
            }
            var superType = tmp;
            if (!(localSuperType == null)) {
                type._set_supertype__3811820336_k43hjc_k$(localSuperType);
            } else {
                if (!(superType._get_size__809037418_ddoh9m_k$() === 1)) {
                    var tmp_5 = type
                        ._get_fileTable__504497375_8cd4nz_k$()
                        ._get_filePath__151144490_2hzju2_k$();
                    throw PositionalException_init_$Create$(
                        "One super type not found",
                        tmp_5,
                        node,
                        null,
                        0,
                        24,
                        null
                    );
                }
                type._set_supertype__3811820336_k43hjc_k$(
                    first_0(superType._get_keys__801529559_d97k5z_k$())
                );
            }
        }
    }
    function analyzeSemantics(startingFileName, roots, nodes) {
        var importGraphCreator = new ImportGraphCreator(
            startingFileName,
            nodes,
            roots
        );
        importGraphCreator.createGraph_hzqy5d_k$();
        initializeSuperTypes(
            importGraphCreator._get_supertypes__1291562605_lcyo31_k$()
        );
        var tmp0_iterator = importGraphCreator
            ._get_visitedTables__1623761026_ququ0y_k$()
            .iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var fileTable = tmp0_iterator.next_20eer_k$();
            new Analyzer(fileTable);
            Unit_getInstance();
        }
        return first(
            importGraphCreator._get_visitedTables__1623761026_ququ0y_k$()
        );
    }
    function analyzeSemantics$default(
        startingFileName,
        roots,
        nodes,
        $mask0,
        $handler
    ) {
        if (!(($mask0 & 4) === 0))
            nodes =
                PathBuilder_getInstance().getNodes_jwpeo6_k$(startingFileName);
        return analyzeSemantics(startingFileName, roots, nodes);
    }
    function analyzeType($this, type, fileTable) {
        var tmp0_resolvingType = ResolvingMode_FUNCTION_getInstance();
        var table = SymbolTable_init_$Create$(
            null,
            type,
            fileTable,
            tmp0_resolvingType,
            1,
            null
        );
        table.addVariable_vmj31f_k$("this", type);
        table.addVariable_vmj31f_k$("parent", type);
        var tmp1_iterator = type
            ._get_assignments__50188043_tvpcb_k$()
            .iterator_jk1svi_k$();
        while (tmp1_iterator.hasNext_bitz1p_k$()) {
            var assignment = tmp1_iterator.next_20eer_k$();
            table.addVariableOrNot_1tmm82_k$(
                assignment._get_left__802434852_d9qyp0_k$()
            );
            Unit_getInstance();
        }
        var tmp2_iterator = type
            ._get_assignments__50188043_tvpcb_k$()
            .iterator_jk1svi_k$();
        while (tmp2_iterator.hasNext_bitz1p_k$()) {
            var assignment_0 = tmp2_iterator.next_20eer_k$();
            changeInvocationType(
                $this,
                assignment_0,
                table.copy_1tks5_k$(),
                0,
                true
            );
        }
        var tmp3_iterator = type
            ._get_functions__2924404246_mnzx7u_k$()
            .iterator_jk1svi_k$();
        while (tmp3_iterator.hasNext_bitz1p_k$()) {
            var function_0 = tmp3_iterator.next_20eer_k$();
            var functionTable = addFunctionParametersToTable(
                $this,
                function_0,
                table.copy_1tks5_k$()
            );
            var tmp = function_0._get_body__793495785_d4fd9l_k$();
            changeInvocationType$default(
                $this,
                tmp,
                functionTable,
                0,
                false,
                16,
                null
            );
        }
    }
    function changeInvocationType(
        $this,
        node,
        symbolTable,
        cycles,
        inProperty
    ) {
        if (node instanceof Link)
            changeInvocationsInLink($this, node, symbolTable, inProperty);
        else {
        }
        var iterator = node
            ._get_children__1387553196_my42wc_k$()
            .iterator_jk1svi_k$();
        var index = 0;
        while (iterator.hasNext_bitz1p_k$()) {
            var index_0 = index;
            index = (index + 1) | 0;
            var child = iterator.next_20eer_k$();
            var tmp2_subject = child;
            if (tmp2_subject instanceof WordStatement) {
                if (
                    cycles < 1
                        ? child._get_symbol__541899891_8ymsmr_k$() === "break"
                            ? true
                            : child._get_symbol__541899891_8ymsmr_k$() ===
                              "continue"
                        : false
                ) {
                    var tmp =
                        child._get_symbol__541899891_8ymsmr_k$() +
                        " out of cycle";
                    var tmp_0 = symbolTable
                        .getFileTable_m3scuc_k$()
                        ._get_filePath__151144490_2hzju2_k$();
                    throw PositionalException_init_$Create$(
                        tmp,
                        tmp_0,
                        child,
                        null,
                        0,
                        24,
                        null
                    );
                }
            } else {
                if (tmp2_subject instanceof Block) {
                    if (
                        child._get_symbol__541899891_8ymsmr_k$() === "foreach"
                    ) {
                        symbolTable.addVariableOrNot_1tmm82_k$(
                            child._get_left__802434852_d9qyp0_k$()
                        );
                        Unit_getInstance();
                    }
                } else {
                    if (tmp2_subject instanceof Assignment) {
                        var tmp_1;
                        var tmp_2;
                        if (!(node instanceof Invocation)) {
                            tmp_2 = !(node instanceof Block);
                        } else {
                            {
                                tmp_2 = false;
                            }
                        }
                        if (tmp_2) {
                            tmp_1 = !(node instanceof Assignment);
                        } else {
                            {
                                tmp_1 = false;
                            }
                        }
                        if (tmp_1) {
                            var tmp_3 =
                                "unexpected assignment " +
                                node._get_value__3683422336_a43j40_k$() +
                                ", " +
                                getKClassFromExpression(node);
                            var tmp_4 = symbolTable
                                .getFileTable_m3scuc_k$()
                                ._get_filePath__151144490_2hzju2_k$();
                            throw PositionalException_init_$Create$(
                                tmp_3,
                                tmp_4,
                                child,
                                null,
                                0,
                                24,
                                null
                            );
                        } else {
                        }
                        var tmp_5 = child._get_left__802434852_d9qyp0_k$();
                        if (tmp_5 instanceof Link) {
                            var tmp_6 = child._get_left__802434852_d9qyp0_k$();
                            checkLinkAsLValue(
                                $this,
                                tmp_6 instanceof Link ? tmp_6 : THROW_CCE(),
                                symbolTable.getFileTable_m3scuc_k$()
                            );
                        } else {
                        }
                        symbolTable.addVariableOrNot_1tmm82_k$(
                            child._get_left__802434852_d9qyp0_k$()
                        );
                        Unit_getInstance();
                    } else {
                        if (tmp2_subject instanceof Invocation) {
                            if (isInvocation($this, child)) {
                                TokenFactory_getInstance().createSpecificInvocation_ycswry_k$(
                                    child,
                                    symbolTable,
                                    node,
                                    index_0
                                );
                                Unit_getInstance();
                            }
                        } else {
                            if (tmp2_subject instanceof Link)
                                changeInvocationsInLink(
                                    $this,
                                    child,
                                    symbolTable,
                                    inProperty
                                );
                            else {
                                if (tmp2_subject instanceof Meta)
                                    sendMessage(
                                        new Message(
                                            "breakpoint",
                                            child._get_position__3188952002_iahqv2_k$()
                                        )
                                    );
                                else {
                                }
                            }
                        }
                    }
                }
            }
        }
        var tmp3_iterator = node
            ._get_children__1387553196_my42wc_k$()
            .iterator_jk1svi_k$();
        while (tmp3_iterator.hasNext_bitz1p_k$()) {
            var child_0 = tmp3_iterator.next_20eer_k$();
            if (!(child_0 instanceof Link)) {
                var tmp_7;
                if (child_0 instanceof Block) {
                    tmp_7 =
                        child_0._get_symbol__541899891_8ymsmr_k$() === "foreach"
                            ? true
                            : child_0._get_symbol__541899891_8ymsmr_k$() ===
                              "while";
                } else {
                    {
                        tmp_7 = false;
                    }
                }
                if (tmp_7) {
                    var tmp_8 = (cycles + 1) | 0;
                    changeInvocationType$default(
                        $this,
                        child_0,
                        symbolTable,
                        tmp_8,
                        false,
                        16,
                        null
                    );
                } else {
                    {
                        changeInvocationType$default(
                            $this,
                            child_0,
                            symbolTable,
                            cycles,
                            false,
                            16,
                            null
                        );
                    }
                }
            } else {
                {
                        changeInvocationType$default(
                            $this,
                        child_0,
                            symbolTable,
                            cycles,
                            false,
                            16,
                            null
                        );
                    }
                }
            }
        }
    function changeInvocationType$default(
        $this,
        node,
        symbolTable,
        cycles,
        inProperty,
        $mask0,
        $handler
    ) {
        if (!(($mask0 & 16) === 0)) inProperty = false;
        return changeInvocationType(
            $this,
            node,
            symbolTable,
            cycles,
            inProperty
        );
    }
    function checkLinkAsLValue($this, link, fileTable) {
        var tmp$ret$0;
        $l$block: {
            var tmp0_isNotEmpty_0 = link._get_nullable__2526391434_t8ypva_k$();
            tmp$ret$0 = !tmp0_isNotEmpty_0.isEmpty_y1axqb_k$();
            break $l$block;
        }
        if (tmp$ret$0) {
            var tmp = fileTable._get_filePath__151144490_2hzju2_k$();
            throw PositionalException_init_$Create$(
                "Null safe calls are prohibited on the left of the assignment",
                tmp,
                link,
                null,
                0,
                24,
                null
            );
        } else {
        }
        var tmp0_iterator = link
            ._get_children__1387553196_my42wc_k$()
            .iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var child = tmp0_iterator.next_20eer_k$();
            var tmp_0;
            var tmp_1;
            if (child instanceof Invocation) {
                tmp_1 = true;
            } else {
                {
                    var tmp_2;
                    if (child instanceof Index) {
                        var tmp_3 = child.getDeepestLeft_7e2ut_k$();
                        tmp_2 = tmp_3 instanceof Invocation;
                    } else {
                        {
                            tmp_2 = false;
                        }
                    }
                    tmp_1 = tmp_2;
                }
            }
            if (tmp_1) {
                tmp_0 = true;
            } else {
                {
                    tmp_0 = child instanceof NodeTernary;
                }
            }
            if (tmp_0) {
                var tmp_4 = fileTable._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    "Invocation or ternary cannot be on the left of the assignment",
                    tmp_4,
                    child,
                    null,
                    0,
                    24,
                    null
                );
            } else {
            }
        }
    }
    function changeInvocationsInLink($this, node, symbolTable, inProperty) {
        if (isInvocation($this, node._get_left__802434852_d9qyp0_k$())) {
            TokenFactory_getInstance().createSpecificInvocation_ycswry_k$(
                node._get_left__802434852_d9qyp0_k$(),
                symbolTable,
                node,
                0
            );
            Unit_getInstance();
        }
        if (isInvocation($this, node._get_right__3576132917_bvz45n_k$())) {
            var tmp = node._get_left__802434852_d9qyp0_k$();
            if (tmp instanceof Identifier) {
                TokenFactory_getInstance().changeInvocationOnSecondPositionInLink_vcc4pr_k$(
                    symbolTable,
                    node,
                    inProperty
                );
                Unit_getInstance();
            } else {
                {
                    node._get_children__1387553196_my42wc_k$().set_meu351_k$(
                        1,
                        new Call(node._get_right__3576132917_bvz45n_k$())
                    );
                    Unit_getInstance();
                    var tmp_0 = node._get_left__802434852_d9qyp0_k$();
                    return changeInvocationType$default(
                        $this,
                        tmp_0,
                        symbolTable,
                        0,
                        false,
                        16,
                        null
                    );
                }
            }
        }
        var iterator = Utils_getInstance()
            .subList_d3dljg_k$(node._get_children__1387553196_my42wc_k$(), 2)
            .iterator_jk1svi_k$();
        var index = 0;
        while (iterator.hasNext_bitz1p_k$()) {
            var index_0 = index;
            index = (index + 1) | 0;
            var child = iterator.next_20eer_k$();
            if (isInvocation($this, child)) {
                node._get_children__1387553196_my42wc_k$().set_meu351_k$(
                    (index_0 + 2) | 0,
                    new Call(child)
                );
                Unit_getInstance();
            }
        }
    }
    function isInvocation($this, node) {
        var tmp;
        var tmp_0;
        if (node instanceof Invocation) {
            tmp_0 = !(node instanceof Call);
        } else {
            {
                tmp_0 = false;
            }
        }
        if (tmp_0) {
            tmp = !(node instanceof Constructor);
        } else {
            {
                tmp = false;
            }
        }
        return tmp;
    }
    function addFunctionParametersToTable($this, function_0, table) {
        var tmp0_iterator = function_0
            ._get_nonDefaultParams__3666398385_ae8evj_k$()
            .iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var param = tmp0_iterator.next_20eer_k$();
            table.addVariableOrNot_1tmm82_k$(param);
            Unit_getInstance();
        }
        var tmp1_iterator = function_0
            ._get_defaultParams__1735937674_spj62y_k$()
            .iterator_jk1svi_k$();
        while (tmp1_iterator.hasNext_bitz1p_k$()) {
            var defaultParam = tmp1_iterator.next_20eer_k$();
            changeInvocationType$default(
                $this,
                defaultParam,
                table,
                0,
                false,
                16,
                null
            );
            table.addVariableOrNot_1tmm82_k$(
                defaultParam._get_left__802434852_d9qyp0_k$()
            );
            Unit_getInstance();
        }
        return table;
    }
    function Analyzer(fileTable) {
        var tmp0_iterator = plus(
            fileTable.getTypes_wiwjwj_k$()._get_values__2516944425_tel787_k$(),
            fileTable.getObjects_aasile_k$()
        ).iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var type = tmp0_iterator.next_20eer_k$();
            analyzeType(this, type, fileTable);
        }
        var tmp1_iterator = fileTable
            .getFunctions_2hetqz_k$()
            .iterator_jk1svi_k$();
        while (tmp1_iterator.hasNext_bitz1p_k$()) {
            var function_0 = tmp1_iterator.next_20eer_k$();
            var table = addFunctionParametersToTable(
                this,
                function_0,
                SymbolTable_init_$Create$(
                    null,
                    null,
                    fileTable,
                    ResolvingMode_FUNCTION_getInstance(),
                    3,
                    null
                )
            );
            var tmp = function_0._get_body__793495785_d4fd9l_k$();
            changeInvocationType$default(this, tmp, table, 0, false, 16, null);
        }
    }
    Analyzer.$metadata$ = {
        simpleName: "Analyzer",
        kind: "class",
        interfaces: [],
    };
    function Assignable() {}
    Assignable.$metadata$ = {
        simpleName: "Assignable",
        kind: "interface",
        interfaces: [],
    };
    function Declaration(symbol, value, position, children) {
        Node.call(this, symbol, value, position, toMutableList(children));
    }
    Declaration.$metadata$ = {
        simpleName: "Declaration",
        kind: "class",
        interfaces: [],
    };
    function ImportNode(symbol, value, position, children) {
        Declaration.call(
            this,
            symbol,
            value,
            position,
            toMutableList(children)
        );
    }
    ImportNode.prototype._get_fileName__149290628_2gvtdw_k$ = function () {
        return this._get_children__1387553196_my42wc_k$().get_fkrdnv_k$(0);
    };
    ImportNode.prototype._get_importName__3861398203_764w1x_k$ = function () {
        return this._get_right__3576132917_bvz45n_k$()._get_value__3683422336_a43j40_k$();
    };
    ImportNode.$metadata$ = {
        simpleName: "ImportNode",
        kind: "class",
        interfaces: [],
    };
    function FunctionNode(symbol, value, position, children) {
        Declaration.call(
            this,
            symbol,
            value,
            position,
            toMutableList(children)
        );
    }
    FunctionNode.$metadata$ = {
        simpleName: "FunctionNode",
        kind: "class",
        interfaces: [],
    };
    function TypeNode(symbol, value, position, children) {
        Declaration.call(
            this,
            symbol,
            value,
            position,
            toMutableList(children)
        );
    }
    TypeNode.prototype._get_superTypeNode__300917434_4z5pdm_k$ = function () {
        return !(
            this._get_children__1387553196_my42wc_k$()
                .get_fkrdnv_k$(1)
                ._get_value__3683422336_a43j40_k$() === ""
        )
            ? this._get_children__1387553196_my42wc_k$().get_fkrdnv_k$(1)
            : null;
    };
    TypeNode.$metadata$ = {
        simpleName: "TypeNode",
        kind: "class",
        interfaces: [],
    };
    function ObjectNode(symbol, value, position, children) {
        Declaration.call(
            this,
            symbol,
            value,
            position,
            toMutableList(children)
        );
    }
    ObjectNode.$metadata$ = {
        simpleName: "ObjectNode",
        kind: "class",
        interfaces: [],
    };
    function Identifier_init_$Init$(value, $this) {
        Identifier.call($this, value, value, new Pair(0, 0));
        return $this;
    }
    function Identifier_init_$Create$(value) {
        return Identifier_init_$Init$(
            value,
            Object.create(Identifier.prototype)
        );
    }
    function Identifier(symbol, value, position) {
        Node_init_$Init$(symbol, value, position, null, 8, null, this);
    }
    Identifier.prototype.evaluate_hfj3qo_k$ = function (symbolTable) {
        var tmp1_elvis_lhs = symbolTable.getIdentifierOrNull_ua2gmg_k$(this);
        var tmp;
        if (tmp1_elvis_lhs == null) {
            var tmp0_elvis_lhs =
                symbolTable.getUncopiedTypeOrNull_j6ica_k$(this);
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
                var tmp_1 = symbolTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw NotFoundException_init_$Create$(
                    this,
                    tmp_1,
                    null,
                    4,
                    null
                );
            } else {
                tmp_0 = tmp0_elvis_lhs;
            }
            return tmp_0;
        } else {
            tmp = tmp1_elvis_lhs;
        }
        var variable = tmp;
        var tmp_2;
        if (variable instanceof Primitive) {
            tmp_2 = !(variable instanceof PNumber);
        } else {
            {
                tmp_2 = false;
            }
        }
        if (tmp_2) {
            return variable.getPValue_berniv_k$();
        } else {
        }
        return variable;
    };
    Identifier.prototype.assign_9u530r_k$ = function (
        assignment,
        parent,
        symbolTable,
        value
    ) {
        if (
            !(parent == null)
                ? assignment._get_isProperty__2864475980_nnoe5w_k$()
                : false
        ) {
            parent.setProperty_tmx3oq_k$(
                this._get_value__3683422336_a43j40_k$(),
                Utils_getInstance().toProperty_q8fusx_k$(
                    value,
                    assignment._get_right__3576132917_bvz45n_k$()
                )
            );
            var property = parent.getProperty_qi6v9p_k$(
                this,
                symbolTable.getFileTable_m3scuc_k$()
            );
            if (property instanceof Type) {
                var tmp;
                if (property._get_index__3322996031_g2optt_k$() === 0) {
                    tmp = !(property instanceof Object_0);
                } else {
                    tmp = false;
                }
                if (tmp) {
                    var tmp_0 = symbolTable
                        .getFileTable_m3scuc_k$()
                        ._get_filePath__151144490_2hzju2_k$();
                    throw PositionalException_init_$Create$(
                        "Cannot assign class reference as a property. Use instance instead",
                        tmp_0,
                        this,
                        null,
                        0,
                        24,
                        null
                    );
                } else {
                }
                property.setProperty_tmx3oq_k$("parent", parent);
            } else {
            }
        }
        symbolTable.addVariable_vmj31f_k$(
            this._get_value__3683422336_a43j40_k$(),
            Utils_getInstance().toVariable_abd9s8_k$(value, this)
        );
    };
    Identifier.prototype.findUnassigned_h2swqb_k$ = function (
        symbolTable,
        parent
    ) {
        var found = parent.getAssignment_r8m0ia_k$(this);
        if (!(found == null)) {
            return new Pair(parent, found);
        }
        return null;
    };
    Identifier.$metadata$ = {
        simpleName: "Identifier",
        kind: "class",
        interfaces: [Assignable, Linkable],
    };
    function checkNextVariable(
        $this,
        index,
        table,
        initialTable,
        variable,
        findingUnresolved
    ) {
        var tmp0_subject = $this
            ._get_children__1387553196_my42wc_k$()
            .get_fkrdnv_k$(index);
        if (tmp0_subject instanceof Call)
            return checkNextCall(
                $this,
                findingUnresolved,
                variable,
                index,
                table,
                initialTable
            );
        else {
            if (tmp0_subject instanceof Identifier) {
                var tmp;
                if (variable instanceof Type) {
                    tmp = !(variable instanceof Object_0);
                } else {
                    {
                        tmp = false;
                    }
                }
                if (tmp) {
                    var assignment = variable.getLinkedAssignment_dmryla_k$(
                        $this,
                        index
                    );
                    if (!(assignment == null)) {
                        return Optional_init_$Create$(
                            assignment,
                            false,
                            2,
                            null
                        );
                    }
                } else {
                }
                var property = variable.getPropertyOrNull_191djg_k$(
                    $this
                        ._get_children__1387553196_my42wc_k$()
                        .get_fkrdnv_k$(index)
                        ._get_value__3683422336_a43j40_k$()
                );
                if (
                    property == null
                        ? $this.nullable_1.contains_2ehdt1_k$(index)
                        : false
                ) {
                    var tmp_0 = new NullValue();
                    return Optional_init_$Create$(tmp_0, false, 2, null);
                }
                return Optional_init_$Create$(property, false, 2, null);
            } else {
                if (tmp0_subject instanceof Index) {
                    var tmp_1 = $this
                        ._get_children__1387553196_my42wc_k$()
                        .get_fkrdnv_k$(index);
                    var indexToken = (
                        tmp_1 instanceof Index ? tmp_1 : THROW_CCE()
                    ).getDeepestLeft_7e2ut_k$();
                    if (indexToken instanceof Call)
                        return checkNextCall(
                            $this,
                            findingUnresolved,
                            variable,
                            index,
                            table,
                            initialTable
                        );
                    else {
                    }
                    var property_0 = variable.getPropertyOrNull_191djg_k$(
                        indexToken._get_value__3683422336_a43j40_k$()
                    );
                    if (
                        property_0 == null
                            ? $this.nullable_1.contains_2ehdt1_k$(index)
                            : false
                    ) {
                        var tmp_2 = new NullValue();
                        return Optional_init_$Create$(tmp_2, false, 2, null);
                    }
                    var tmp1_elvis_lhs = property_0;
                    if (tmp1_elvis_lhs == null) {
                        if (variable instanceof Type) {
                            var tmp_3 =
                                variable.getAssignment_r8m0ia_k$(indexToken);
                            return Optional_init_$Create$(
                                tmp_3,
                                false,
                                2,
                                null
                            );
                        } else {
                            if ($this.nullable_1.contains_2ehdt1_k$(index)) {
                                var tmp_4 = new NullValue();
                                return Optional_init_$Create$(
                                    tmp_4,
                                    false,
                                    2,
                                    null
                                );
                            } else {
                                {
                                    var tmp_5 = initialTable
                                        .getFileTable_m3scuc_k$()
                                        ._get_filePath__151144490_2hzju2_k$();
                                    throw PositionalException_init_$Create$(
                                        "Property not found",
                                        tmp_5,
                                        indexToken,
                                        null,
                                        0,
                                        24,
                                        null
                                    );
                                }
                            }
                        }
                        Unit_getInstance();
                    } else tmp1_elvis_lhs;
                    Unit_getInstance();
                    var tmp_6 = Utils_getInstance();
                    var tmp_7 = $this
                        ._get_children__1387553196_my42wc_k$()
                        .get_fkrdnv_k$(index);
                    var tmp_8 = tmp_6.toVariable_abd9s8_k$(
                        (tmp_7 instanceof Index
                            ? tmp_7
                            : THROW_CCE()
                        ).evaluateIndexWithDeepestLeftProperty_qjgaue_k$(
                            property_0,
                            table
                        ),
                        $this
                            ._get_children__1387553196_my42wc_k$()
                            .get_fkrdnv_k$(index)
                    );
                    return Optional_init_$Create$(tmp_8, false, 2, null);
                } else {
                    {
                        var tmp_9 = initialTable
                            .getFileTable_m3scuc_k$()
                            ._get_filePath__151144490_2hzju2_k$();
                        var tmp_10 = $this
                            ._get_children__1387553196_my42wc_k$()
                            .get_fkrdnv_k$(index);
                        throw PositionalException_init_$Create$(
                            "Unexpected token",
                            tmp_9,
                            tmp_10,
                            null,
                            0,
                            24,
                            null
                        );
                    }
                }
            }
        }
    }
    function checkNextVariable$default(
        $this,
        index,
        table,
        initialTable,
        variable,
        findingUnresolved,
        $mask0,
        $handler
    ) {
        if (!(($mask0 & 32) === 0)) findingUnresolved = false;
        return checkNextVariable(
            $this,
            index,
            table,
            initialTable,
            variable,
            findingUnresolved
        );
    }
    function checkNextCall(
        $this,
        findingUnresolved,
        variable,
        index,
        table,
        initialTable
    ) {
        if (findingUnresolved) {
            var tmp = new NullValue();
            return Optional_init_$Create$(tmp, false, 2, null);
        }
        var tmp_0 = $this
            ._get_children__1387553196_my42wc_k$()
            .get_fkrdnv_k$(index);
        var function_0 = variable.getFunctionOrNull_p690c9_k$(
            tmp_0 instanceof Call ? tmp_0 : THROW_CCE()
        );
        if (
            function_0 == null
                ? $this.nullable_1.contains_2ehdt1_k$(index)
                : false
        ) {
            var tmp_1 = new NullValue();
            return Optional_init_$Create$(tmp_1, false, 2, null);
        }
        if (function_0 == null) {
            var tmp_2 = initialTable
                .getFileTable_m3scuc_k$()
                ._get_filePath__151144490_2hzju2_k$();
            var tmp_3 = $this
                ._get_children__1387553196_my42wc_k$()
                .get_fkrdnv_k$(index);
            throw PositionalException_init_$Create$(
                "Variable does not contain function",
                tmp_2,
                tmp_3,
                null,
                0,
                24,
                null
            );
        }
        var tmp_4 = resolveFunctionCall(
            $this,
            index,
            table,
            initialTable,
            function_0
        );
        return Optional_init_$Create$(tmp_4, false, 2, null);
    }
    function checkFirstVariable(
        $this,
        index,
        table,
        initialTable,
        canBeFile,
        findingUnresolved
    ) {
        var tmp0_subject = $this
            ._get_children__1387553196_my42wc_k$()
            .get_fkrdnv_k$(index);
        if (tmp0_subject instanceof Identifier) {
            var identifier = table.getIdentifierOrNull_ua2gmg_k$(
                $this._get_children__1387553196_my42wc_k$().get_fkrdnv_k$(index)
            );
            var tmp;
            if (identifier == null) {
                var tmp_0;
                if (canBeFile) {
                    var tmp1_elvis_lhs = addFile($this, table);
                    var tmp_1;
                    if (tmp1_elvis_lhs == null) {
                        return new Pair(0, null);
                    } else {
                        tmp_1 = tmp1_elvis_lhs;
                    }
                    var nextTable = tmp_1;
                    return checkFirstVariable(
                        $this,
                        (index + 1) | 0,
                        nextTable,
                        initialTable,
                        false,
                        findingUnresolved
                    );
                } else {
                    tmp_0 = new Pair(index, null);
                }
                tmp = tmp_0;
            } else {
                tmp = new Pair(index, identifier);
            }
            return tmp;
        } else {
            if (tmp0_subject instanceof Call)
                if (findingUnresolved) {
                    return new Pair(index, new NullValue());
                } else
                    return new Pair(
                        index,
                        resolveFunctionCall(
                            $this,
                            index,
                            table,
                            initialTable,
                            table.getFunction_cbvgm5_k$(
                                $this
                                    ._get_children__1387553196_my42wc_k$()
                                    .get_fkrdnv_k$(index)
                            )
                        )
                    );
            else {
                if (tmp0_subject instanceof Constructor) {
                    if (findingUnresolved) {
                        return new Pair(index, new NullValue());
                    }
                    var type = table
                        .getType_93e8u9_k$(
                            $this
                                ._get_children__1387553196_my42wc_k$()
                                .get_fkrdnv_k$(index)
                                ._get_left__802434852_d9qyp0_k$()
                        )
                        .copyRoot_8d9kp5_k$();
                    var tmp_2 = Utils_getInstance();
                    var tmp_3 = $this
                        ._get_children__1387553196_my42wc_k$()
                        .get_fkrdnv_k$(index);
                    return new Pair(
                        index,
                        tmp_2.toVariable_abd9s8_k$(
                            (tmp_3 instanceof Constructor
                                ? tmp_3
                                : THROW_CCE()
                            ).evaluateType_b2kdxc_k$(type, initialTable),
                            $this
                                ._get_children__1387553196_my42wc_k$()
                                .get_fkrdnv_k$(index)
                        )
                    );
                } else {
                    {
                        if (!canBeFile) {
                            var tmp_4 = initialTable
                                .getFileTable_m3scuc_k$()
                                ._get_filePath__151144490_2hzju2_k$();
                            var tmp_5 = $this
                                ._get_children__1387553196_my42wc_k$()
                                .get_fkrdnv_k$(index);
                            throw PositionalException_init_$Create$(
                                "Unexpected token",
                                tmp_4,
                                tmp_5,
                                null,
                                0,
                                24,
                                null
                            );
                        }
                        return new Pair(
                            index,
                            Utils_getInstance().toVariable_abd9s8_k$(
                                $this
                                    ._get_children__1387553196_my42wc_k$()
                                    .get_fkrdnv_k$(index)
                                    .evaluate_hfj3qo_k$(table),
                                $this
                                    ._get_children__1387553196_my42wc_k$()
                                    .get_fkrdnv_k$(index)
                            )
                        );
                    }
                }
            }
        }
    }
    function checkFirstVariable$default(
        $this,
        index,
        table,
        initialTable,
        canBeFile,
        findingUnresolved,
        $mask0,
        $handler
    ) {
        if (!(($mask0 & 16) === 0)) canBeFile = true;
        if (!(($mask0 & 32) === 0)) findingUnresolved = false;
        return checkFirstVariable(
            $this,
            index,
            table,
            initialTable,
            canBeFile,
            findingUnresolved
        );
    }
    function addFile($this, table) {
        var tmp0_elvis_lhs = table.getImportOrNull_hhw2v8_k$(
            $this
                ._get_left__802434852_d9qyp0_k$()
                ._get_value__3683422336_a43j40_k$()
        );
        var tmp;
        if (tmp0_elvis_lhs == null) {
            return null;
        } else {
            tmp = tmp0_elvis_lhs;
        }
        var fileTable = tmp;
        return table.changeFile_n27o1t_k$(fileTable);
    }
    function resolveFunctionCall(
        $this,
        index,
        table,
        initialTable,
        function_0
    ) {
        var type = table.getCurrentType_n8a8z_k$();
        if (!(type instanceof Type)) {
            type = null;
        } else {
        }
        var tmp;
        if (type instanceof Type) {
            tmp = type._get_fileTable__504497375_8cd4nz_k$();
        } else {
            {
                tmp = table.getFileTable_m3scuc_k$();
            }
        }
        var tmp0_fileTable = tmp;
        var tmp1_variableTable = table.getCurrentType_n8a8z_k$();
        var tmp2_resolvingType = ResolvingMode_FUNCTION_getInstance();
        var tableForEvaluation = SymbolTable_init_$Create$(
            null,
            tmp1_variableTable,
            tmp0_fileTable,
            tmp2_resolvingType,
            1,
            null
        );
        var tmp_0 = $this
            ._get_children__1387553196_my42wc_k$()
            .get_fkrdnv_k$(index);
        (tmp_0 instanceof Call
            ? tmp_0
            : THROW_CCE()
        ).argumentsToParameters_rkc6j4_k$(
            function_0,
            initialTable,
            tableForEvaluation
        );
        var tmp_1 = $this
            ._get_children__1387553196_my42wc_k$()
            .get_fkrdnv_k$(index);
        var functionResult = (
            tmp_1 instanceof Call ? tmp_1 : THROW_CCE()
        ).evaluateFunction_gez3ba_k$(tableForEvaluation, function_0);
        return Utils_getInstance().toVariable_abd9s8_k$(
            functionResult,
            $this._get_children__1387553196_my42wc_k$().get_fkrdnv_k$(index)
        );
    }
    function safeEvaluate($this, parent, symbolTable) {
        var currentParent = null;
        var table = symbolTable.copy_1tks5_k$();
        var initialTable = symbolTable.changeVariable_uoiydg_k$(parent);
        var tmp = table;
        var tmp0_container = checkFirstVariable$default(
            $this,
            0,
            tmp,
            initialTable,
            false,
            true,
            16,
            null
        );
        var index = tmp0_container.component1_7eebsc_k$();
        var currentVariable = tmp0_container.component2_7eebsb_k$();
        if (currentVariable instanceof NullValue) {
            return new Tuple4(new NullValue(), currentVariable, null, index);
        } else {
        }
        if (currentVariable == null) {
            var tmp1_elvis_lhs = parent.getAssignment_r8m0ia_k$(
                $this._get_left__802434852_d9qyp0_k$()
            );
            var tmp_0;
            if (tmp1_elvis_lhs == null) {
                var tmp_1 = symbolTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                var tmp_2 = $this._get_left__802434852_d9qyp0_k$();
                throw PositionalException_init_$Create$(
                    "Assignment not found",
                    tmp_1,
                    tmp_2,
                    null,
                    0,
                    24,
                    null
                );
            } else {
                tmp_0 = tmp1_elvis_lhs;
            }
            return new Tuple4(null, parent, tmp_0, index);
        }
        table = table.changeVariable_uoiydg_k$(currentVariable);
        var tmp2 = index;
        index = (tmp2 + 1) | 0;
        Unit_getInstance();
        while (
            index <
            $this
                ._get_children__1387553196_my42wc_k$()
                ._get_size__809037418_ddoh9m_k$()
        ) {
            var res = checkNextVariable(
                $this,
                index,
                table,
                initialTable,
                ensureNotNull(currentVariable),
                true
            );
            var tmp_3 = res._get_value__3683422336_a43j40_k$();
            if (tmp_3 instanceof NullValue) {
                return new Tuple4(
                    new NullValue(),
                    currentVariable,
                    null,
                    index
                );
            } else {
            }
            var tmp_4;
            if (res._get_isGood__50316004_tyg2s_k$()) {
                var tmp_5 = res._get_value__3683422336_a43j40_k$();
                tmp_4 = tmp_5 instanceof Assignment;
            } else {
                tmp_4 = false;
            }
            if (tmp_4) {
                return new Tuple4(
                    null,
                    currentVariable,
                    res._get_value__3683422336_a43j40_k$(),
                    index
                );
            } else {
            }
            var tmp_6 = res._get_value__3683422336_a43j40_k$();
            if (!(tmp_6 instanceof Variable)) {
                return new Tuple4(null, currentVariable, null, index);
            } else {
            }
            currentParent = currentVariable;
            table = table.changeVariable_uoiydg_k$(
                res._get_value__3683422336_a43j40_k$()
            );
            currentVariable = res._get_value__3683422336_a43j40_k$();
            var tmp3 = index;
            index = (tmp3 + 1) | 0;
            Unit_getInstance();
        }
        var tmp_7 = currentVariable;
        var tmp_8 = currentParent;
        index = (index - 1) | 0;
        return new Tuple4(tmp_7, tmp_8, null, index);
    }
    function NullValue() {
        Variable.call(this);
    }
    NullValue.prototype.getPropertyOrNull_191djg_k$ = function (name) {
        {
            throw new NotImplementedError(
                "An operation is not implemented: Not yet implemented"
            );
        }
    };
    NullValue.prototype.getProperty_qi6v9p_k$ = function (node, fileTable) {
        {
            throw new NotImplementedError(
                "An operation is not implemented: Not yet implemented"
            );
        }
    };
    NullValue.prototype.getFunctionOrNull_p690c9_k$ = function (node) {
        {
            throw new NotImplementedError(
                "An operation is not implemented: Not yet implemented"
            );
        }
    };
    NullValue.prototype.getFunction_ken7yo_k$ = function (node, fileTable) {
        {
            throw new NotImplementedError(
                "An operation is not implemented: Not yet implemented"
            );
        }
    };
    NullValue.prototype.toDebugClass_dfj843_k$ = function (
        references,
        copying
    ) {
        {
            throw new NotImplementedError(
                "An operation is not implemented: Not yet implemented"
            );
        }
    };
    NullValue.$metadata$ = {
        simpleName: "NullValue",
        kind: "class",
        interfaces: [],
    };
    function Link(symbol, value, position, children, nullable) {
        Node_init_$Init$(symbol, value, position, null, 8, null, this);
        this.nullable_1 = nullable;
        var tmp$ret$1;
        $l$block: {
            tmp$ret$1 = !children.isEmpty_y1axqb_k$();
            break $l$block;
        }
        if (tmp$ret$1) {
            this._get_children__1387553196_my42wc_k$().clear_j9y8zo_k$();
            this._get_children__1387553196_my42wc_k$().addAll_oxxjjk_k$(
                children
            );
            Unit_getInstance();
        } else {
        }
    }
    Link.prototype._get_nullable__2526391434_t8ypva_k$ = function () {
        return this.nullable_1;
    };
    Link.prototype.evaluate_hfj3qo_k$ = function (symbolTable) {
        var table = symbolTable.copy_1tks5_k$();
        var tmp = symbolTable.copy_1tks5_k$();
        var tmp0_container = checkFirstVariable$default(
            this,
            0,
            tmp,
            symbolTable,
            false,
            false,
            48,
            null
        );
        var index = tmp0_container.component1_7eebsc_k$();
        var currentVariable = tmp0_container.component2_7eebsb_k$();
        if (currentVariable == null) {
            var tmp_0 = this._get_left__802434852_d9qyp0_k$();
            var tmp_1 = symbolTable
                .getFileTable_m3scuc_k$()
                ._get_filePath__151144490_2hzju2_k$();
            throw NotFoundException_init_$Create$(tmp_0, tmp_1, null, 4, null);
        }
        table = table.changeVariable_uoiydg_k$(currentVariable);
        var tmp1 = index;
        index = (tmp1 + 1) | 0;
        Unit_getInstance();
        while (
            index <
            this._get_children__1387553196_my42wc_k$()._get_size__809037418_ddoh9m_k$()
        ) {
            var tmp_2 = index;
            var tmp_3 = table;
            var tmp_4 = ensureNotNull(currentVariable);
            var isResolved = checkNextVariable$default(
                this,
                tmp_2,
                tmp_3,
                symbolTable,
                tmp_4,
                false,
                32,
                null
            );
            var tmp_5 = isResolved._get_value__3683422336_a43j40_k$();
            if (tmp_5 instanceof NullValue) {
                return Utils_getInstance()._get_NULL__774226340_csycv8_k$();
            } else {
            }
            var tmp_6 = isResolved._get_value__3683422336_a43j40_k$();
            if (!(tmp_6 instanceof Variable)) {
                var tmp_7 = symbolTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                var tmp_8 =
                    this._get_children__1387553196_my42wc_k$().get_fkrdnv_k$(
                        index
                    );
                throw PositionalException_init_$Create$(
                    "Link not resolved",
                    tmp_7,
                    tmp_8,
                    null,
                    0,
                    24,
                    null
                );
            } else {
            }
            currentVariable = isResolved._get_value__3683422336_a43j40_k$();
            table = table.changeVariable_uoiydg_k$(currentVariable);
            var tmp2 = index;
            index = (tmp2 + 1) | 0;
            Unit_getInstance();
        }
        var tmp_9;
        var tmp_10;
        var tmp_11 = ensureNotNull(currentVariable);
        if (tmp_11 instanceof Primitive) {
            tmp_10 = !(currentVariable instanceof PNumber);
        } else {
            {
                tmp_10 = false;
            }
        }
        if (tmp_10) {
            tmp_9 = (
                currentVariable instanceof Primitive
                    ? currentVariable
                    : THROW_CCE()
            ).getPValue_berniv_k$();
        } else {
            {
                tmp_9 = currentVariable;
            }
        }
        return tmp_9;
    };
    Link.prototype.assign_9u530r_k$ = function (
        assignment,
        parent,
        symbolTable,
        value
    ) {
        var tmp0_elvis_lhs = parent;
        var tmp;
        if (tmp0_elvis_lhs == null) {
            var tmp$ret$0;
            $l$block: {
                tmp$ret$0 = LinkedHashSet_init_$Create$();
                break $l$block;
            }
            var tmp_0 = tmp$ret$0;
            var tmp_1 = symbolTable.getImport_m6etbe_k$(
                Node_init_$Create$(null, "Global", null, null, 13, null)
            );
            tmp = Type_init_$Create$(
                "@Fictive",
                tmp_0,
                tmp_1,
                -1,
                null,
                null,
                48,
                null
            );
        } else {
            tmp = tmp0_elvis_lhs;
        }
        var tmp1_container = safeEvaluate(this, tmp, symbolTable);
        var currentParent = tmp1_container.component2_7eebsb_k$();
        var index = tmp1_container.component4_7eebs9_k$();
        var tmp_2;
        if (!(currentParent instanceof Type)) {
            tmp_2 = true;
        } else {
            {
                tmp_2 = !(
                    index ===
                    _get_lastIndex__339712501(
                        this._get_children__1387553196_my42wc_k$()
                    )
                );
            }
        }
        if (tmp_2) {
            var tmp_3 = symbolTable
                .getFileTable_m3scuc_k$()
                ._get_filePath__151144490_2hzju2_k$();
            var tmp_4 = last_0(this._get_children__1387553196_my42wc_k$());
            throw PositionalException_init_$Create$(
                "Link not resolved",
                tmp_3,
                tmp_4,
                null,
                0,
                24,
                null
            );
        } else {
        }
        var tmp_5 = last_0(this._get_children__1387553196_my42wc_k$());
        if (tmp_5 instanceof Index) {
            var tmp_6 = last_0(this._get_children__1387553196_my42wc_k$());
            var tokenIndex = (
                tmp_6 instanceof Index ? tmp_6 : THROW_CCE()
            ).getDeepestLeft_7e2ut_k$();
            if (tokenIndex instanceof Call) {
                var tmp_7 = symbolTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    "Call is prohibited on the left of the assignment",
                    tmp_7,
                    tokenIndex,
                    null,
                    0,
                    24,
                    null
                );
            } else {
            }
            var tmp_8 = last_0(this._get_children__1387553196_my42wc_k$());
            (tmp_8 instanceof Index
                ? tmp_8
                : THROW_CCE()
            ).assignWithIndexable_p9wfm1_k$(
                currentParent.getProperty_qi6v9p_k$(
                    tokenIndex,
                    symbolTable.getFileTable_m3scuc_k$()
                ),
                symbolTable.changeVariable_uoiydg_k$(currentParent),
                symbolTable,
                assignment,
                Utils_getInstance().toProperty_q8fusx_k$(
                    value,
                    assignment._get_right__3576132917_bvz45n_k$()
                )
            );
        } else {
            currentParent.setProperty_tmx3oq_k$(
                last_0(
                    this._get_children__1387553196_my42wc_k$()
                )._get_value__3683422336_a43j40_k$(),
                Utils_getInstance().toProperty_q8fusx_k$(
                    value,
                    assignment._get_right__3576132917_bvz45n_k$()
                )
            );
        }
    };
    Link.prototype.getFirstUnassignedOrNull_pqyzpa_k$ = function (
        parent,
        symbolTable,
        forLValue
    ) {
        var tmp0_container = safeEvaluate(this, parent, symbolTable);
        var currentVariable = tmp0_container.component1_7eebsc_k$();
        var currentParent = tmp0_container.component2_7eebsb_k$();
        var assignment = tmp0_container.component3_7eebsa_k$();
        var index = tmp0_container.component4_7eebs9_k$();
        if (currentVariable instanceof NullValue) {
            return new Pair(null, null);
        } else {
        }
        var tmp;
        if (!(currentParent == null)) {
            tmp = !(currentParent instanceof Type);
        } else {
            tmp = false;
        }
        if (tmp) {
            return new Pair(null, null);
        } else {
        }
        if (
            forLValue
                ? index ===
                  _get_lastIndex__339712501(
                      this._get_children__1387553196_my42wc_k$()
                  )
                : false
        ) {
            return new Pair(parent, null);
        }
        if (
            (currentVariable == null ? assignment == null : false)
                ? index <
                  this._get_children__1387553196_my42wc_k$()._get_size__809037418_ddoh9m_k$()
                : false
        ) {
            var tmp1_elvis_lhs = parent.getLinkedAssignment_dmryla_k$(this, 0);
            var tmp_0;
            if (tmp1_elvis_lhs == null) {
                var tmp_1 = symbolTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    "Assignment not found",
                    tmp_1,
                    null,
                    null,
                    0,
                    28,
                    null
                );
            } else {
                tmp_0 = tmp1_elvis_lhs;
            }
            return new Pair(parent, tmp_0);
        }
        return new Pair(
            (currentParent == null ? true : currentParent instanceof Type)
                ? currentParent
                : THROW_CCE(),
            assignment
        );
    };
    Link.prototype.getFirstUnassignedOrNull$default_1i7ti5_k$ = function (
        parent,
        symbolTable,
        forLValue,
        $mask0,
        $handler
    ) {
        if (!(($mask0 & 4) === 0)) forLValue = false;
        return this.getFirstUnassignedOrNull_pqyzpa_k$(
            parent,
            symbolTable,
            forLValue
        );
    };
    Link.prototype.findUnassigned_h2swqb_k$ = function (symbolTable, parent) {
        var tmp = this._get_left__802434852_d9qyp0_k$();
        if (tmp instanceof NodeTernary) {
            var found =
                this._get_left__802434852_d9qyp0_k$().findUnassigned_h2swqb_k$(
                    symbolTable,
                    parent
                );
            if (!(found == null)) {
                return found;
            }
        } else {
        }
        var tmp0_container = this.getFirstUnassignedOrNull$default_1i7ti5_k$(
            parent,
            symbolTable,
            false,
            4,
            null
        );
        var type = tmp0_container.component1_7eebsc_k$();
        var assignment = tmp0_container.component2_7eebsb_k$();
        if (type == null ? true : assignment == null) {
            return null;
        }
        return new Pair(type, assignment);
    };
    Link.$metadata$ = {
        simpleName: "Link",
        kind: "class",
        interfaces: [Assignable],
    };
    function Linkable() {}
    Linkable.$metadata$ = {
        simpleName: "Linkable",
        kind: "interface",
        interfaces: [],
    };
    function Meta(symbol, value, position) {
        Node_init_$Init$(symbol, value, position, null, 8, null, this);
    }
    Meta.prototype.evaluate_hfj3qo_k$ = function (symbolTable) {
        var content = symbolTable.getDictionaryFromTable_awm3h4_k$();
        {
            var tmp0_set_0 = this._get_position__3188952002_iahqv2_k$();
            content.put_3mhbri_k$("@position", tmp0_set_0);
            Unit_getInstance();
        }
        {
            var tmp1_set_0 = symbolTable
                .getFileTable_m3scuc_k$()
                ._get_filePath__151144490_2hzju2_k$();
            content.put_3mhbri_k$("@file", tmp1_set_0);
            Unit_getInstance();
        }
        sendMessage(new Message("debug", content));
        return Utils_getInstance()._get_NULL__774226340_csycv8_k$();
    };
    Meta.$metadata$ = {
        simpleName: "Meta",
        kind: "class",
        interfaces: [],
    };
    function Node_init_$Init$(
        symbol,
        value,
        position,
        children,
        $mask0,
        $marker,
        $this
    ) {
        if (!(($mask0 & 1) === 0)) symbol = "";
        if (!(($mask0 & 2) === 0)) value = "";
        if (!(($mask0 & 4) === 0)) position = new Pair(0, 0);
        if (!(($mask0 & 8) === 0)) {
            var tmp$ret$0;
            var tmp$ret$0_0;
            $l$block: {
                tmp$ret$0 = ArrayList_init_$Create$();
                tmp$ret$0_0 = Unit_getInstance();
                break $l$block;
            }
            children = tmp$ret$0;
        }
        Node.call($this, symbol, value, position, children);
        return $this;
    }
    function Node_init_$Create$(
        symbol,
        value,
        position,
        children,
        $mask0,
        $marker
    ) {
        return Node_init_$Init$(
            symbol,
            value,
            position,
            children,
            $mask0,
            $marker,
            Object.create(Node.prototype)
        );
    }
    function Node(symbol, value, position, children) {
        this.symbol_1 = symbol;
        this.value_1 = value;
        this.position_1 = position;
        this.children_1 = children;
    }
    Node.prototype._get_symbol__541899891_8ymsmr_k$ = function () {
        return this.symbol_1;
    };
    Node.prototype._get_value__3683422336_a43j40_k$ = function () {
        return this.value_1;
    };
    Node.prototype._get_position__3188952002_iahqv2_k$ = function () {
        return this.position_1;
    };
    Node.prototype._get_children__1387553196_my42wc_k$ = function () {
        return this.children_1;
    };
    Node.prototype._get_left__802434852_d9qyp0_k$ = function () {
        return this.children_1.get_fkrdnv_k$(0);
    };
    Node.prototype._get_right__3576132917_bvz45n_k$ = function () {
        return this.children_1.get_fkrdnv_k$(1);
    };
    Node.prototype.toString = function () {
        return this.symbol_1 === this.value_1
            ? this.symbol_1
            : this.symbol_1 + ":" + this.value_1;
    };
    Node.prototype.evaluate_hfj3qo_k$ = function (symbolTable) {
        var tmp = symbolTable
            .getFileTable_m3scuc_k$()
            ._get_filePath__151144490_2hzju2_k$();
        throw PositionalException_init_$Create$(
            "Not implemented",
            tmp,
            this,
            null,
            0,
            24,
            null
        );
    };
    Node.prototype.findUnassigned_h2swqb_k$ = function (symbolTable, parent) {
        var tmp0_iterator = this.children_1.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var c = tmp0_iterator.next_20eer_k$();
            var found = c.findUnassigned_h2swqb_k$(symbolTable, parent);
            if (!(found == null)) return found;
        }
        return null;
    };
    Node.prototype.equals = function (other) {
        if (!(other instanceof Node)) {
            return false;
        } else {
        }
        if (
            !(
                this.children_1._get_size__809037418_ddoh9m_k$() ===
                other.children_1._get_size__809037418_ddoh9m_k$()
            )
        ) {
            return false;
        }
        if (!(this.value_1 === other.value_1)) {
            return false;
        }
        var areEqual = true;
        var inductionVariable = 0;
        var last = (this.children_1._get_size__809037418_ddoh9m_k$() - 1) | 0;
        if (inductionVariable <= last)
            do {
                var i = inductionVariable;
                inductionVariable = (inductionVariable + 1) | 0;
                areEqual = this.children_1
                    .get_fkrdnv_k$(i)
                    .equals(other.children_1.get_fkrdnv_k$(i));
            } while (inductionVariable <= last);
        return areEqual;
    };
    Node.prototype.hashCode = function () {
        var hash = getStringHashCode(this.value_1);
        var iterator = this.children_1.iterator_jk1svi_k$();
        var index = 0;
        while (iterator.hasNext_bitz1p_k$()) {
            var i = index;
            index = (index + 1) | 0;
            var c = iterator.next_20eer_k$();
            hash = (hash + imul(c.hashCode(), (i + 1) | 0)) | 0;
        }
        return hash;
    };
    Node.$metadata$ = {
        simpleName: "Node",
        kind: "class",
        interfaces: [],
    };
    function TokenFactory() {
        TokenFactory_instance = this;
        this.nonArithmeticOperators_1 = listOf_0(["+", "==", "!=", "??"]);
        this.arithmeticOperators_1 = listOf_0([
            "-",
            "*",
            "/",
            "%",
            ">=",
            "<=",
            ">",
            "<",
            "!",
            "&&",
            "||",
        ]);
        this.wordOperators_1 = listOf("is");
    }
    TokenFactory.prototype.createWordToken_g6p633_k$ = function (
        symbol,
        value,
        position,
        bindingPower,
        nud,
        led,
        std
    ) {
        var tmp0_subject = symbol;
        return this.wordOperators_1.contains_2ehdt1_k$(tmp0_subject)
            ? new TypeOperator_0(
                  symbol,
                  value,
                  position,
                  bindingPower,
                  nud,
                  led,
                  std
              )
            : new TokenIdentifier(
                  symbol,
                  value,
                  position,
                  bindingPower,
                  nud,
                  led,
                  std
              );
    };
    TokenFactory.prototype.copy_oi75uk_k$ = function (
        node,
        childrenStart,
        childrenNumber
    ) {
        if (node instanceof Assignment) {
            var res = new Assignment(
                node._get_symbol__541899891_8ymsmr_k$(),
                node._get_value__3683422336_a43j40_k$(),
                node._get_position__3188952002_iahqv2_k$(),
                node._get_children__1387553196_my42wc_k$()
            );
            res._set_isProperty__3775228504_p44z1r_k$(
                node._get_isProperty__2864475980_nnoe5w_k$()
            );
            return res;
        } else {
        }
        if (node instanceof Link) {
            return new Link(
                node._get_symbol__541899891_8ymsmr_k$(),
                node._get_value__3683422336_a43j40_k$(),
                node._get_position__3188952002_iahqv2_k$(),
                node
                    ._get_children__1387553196_my42wc_k$()
                    .subList_d153ha_k$(
                        childrenStart,
                        (childrenStart + childrenNumber) | 0
                    ),
                toList_0(node._get_nullable__2526391434_t8ypva_k$())
            );
        } else {
            {
                throw PositionalException_init_$Create$(
                    "Expected assignment or link",
                    "",
                    node,
                    null,
                    0,
                    24,
                    null
                );
            }
        }
    };
    TokenFactory.prototype.copy$default_gvqacf_k$ = function (
        node,
        childrenStart,
        childrenNumber,
        $mask0,
        $handler
    ) {
        if (!(($mask0 & 2) === 0)) childrenStart = 0;
        if (!(($mask0 & 4) === 0))
            childrenNumber = node
                ._get_children__1387553196_my42wc_k$()
                ._get_size__809037418_ddoh9m_k$();
        return this.copy_oi75uk_k$(node, childrenStart, childrenNumber);
    };
    TokenFactory.prototype.createOperator_3irh8_k$ = function (
        symbol,
        value,
        position,
        bindingPower,
        nud,
        led,
        std
    ) {
        var tmp0_subject = symbol;
        var tmp;
        if (tmp0_subject === "!is") {
            tmp = new TypeOperator_0(
                symbol,
                value,
                position,
                bindingPower,
                nud,
                led,
                std
            );
        } else if (tmp0_subject === "(") {
            tmp = new Invocation_0(
                symbol,
                value,
                position,
                bindingPower,
                nud,
                led,
                std
            );
        } else if (tmp0_subject === "." ? true : tmp0_subject === "?.") {
            tmp = Link_init_$Create$(
                "(LINK)",
                value,
                position,
                bindingPower,
                nud,
                led,
                std,
                null,
                128,
                null
            );
        } else if (tmp0_subject === "=") {
            tmp = Assignment_init_$Create$(
                "(ASSIGNMENT)",
                value,
                position,
                bindingPower,
                nud,
                led,
                std,
                null,
                128,
                null
            );
        } else if (
            (
                (tmp0_subject === ";" ? true : tmp0_subject === "\n")
                    ? true
                    : tmp0_subject === "\r\n"
            )
                ? true
                : tmp0_subject === "\r"
        ) {
            tmp = Token_init_$Create$(
                "(SEP)",
                value,
                position,
                bindingPower,
                nud,
                led,
                std,
                null,
                128,
                null
            );
        } else if (
            this.nonArithmeticOperators_1.contains_2ehdt1_k$(tmp0_subject)
        ) {
            tmp = new Operator_0(
                symbol,
                value,
                position,
                bindingPower,
                nud,
                led,
                std
            );
        } else if (
            this.arithmeticOperators_1.contains_2ehdt1_k$(tmp0_subject)
        ) {
            tmp = new ArithmeticOperator(
                symbol,
                value,
                position,
                bindingPower,
                nud,
                led,
                std
            );
        } else {
            tmp = Token_init_$Create$(
                symbol,
                value,
                position,
                bindingPower,
                nud,
                led,
                std,
                null,
                128,
                null
            );
        }
        return tmp;
    };
    TokenFactory.prototype.createSpecificInvocation_ycswry_k$ = function (
        nodeIdentifier,
        symbolTable,
        upperNode,
        index
    ) {
        if (
            !(
                symbolTable.getFunctionOrNull_p690c9_k$(
                    new Call(nodeIdentifier)
                ) == null
            )
        ) {
            upperNode
                ._get_children__1387553196_my42wc_k$()
                .set_meu351_k$(index, new Call(nodeIdentifier));
            Unit_getInstance();
        } else if (
            !(
                symbolTable.getTypeOrNull_4w5z87_k$(
                    nodeIdentifier._get_left__802434852_d9qyp0_k$()
                ) == null
            )
        ) {
            upperNode
                ._get_children__1387553196_my42wc_k$()
                .set_meu351_k$(index, new Constructor(nodeIdentifier));
            Unit_getInstance();
        } else {
            upperNode
                ._get_children__1387553196_my42wc_k$()
                .set_meu351_k$(index, new Constructor(nodeIdentifier));
            Unit_getInstance();
        }
        var tmp = upperNode
            ._get_children__1387553196_my42wc_k$()
            .get_fkrdnv_k$(index);
        return tmp instanceof Invocation ? tmp : THROW_CCE();
    };
    TokenFactory.prototype.changeInvocationOnSecondPositionInLink_vcc4pr_k$ =
        function (symbolTable, link, inProperty) {
            if (
                (
                    (
                        !(
                            symbolTable.getAssignmentOrNull_mvuv6c_k$(
                                link
                                    ._get_left__802434852_d9qyp0_k$()
                                    ._get_value__3683422336_a43j40_k$()
                            ) == null
                        )
                            ? true
                            : link
                                  ._get_left__802434852_d9qyp0_k$()
                                  ._get_value__3683422336_a43j40_k$() === "this"
                    )
                        ? true
                        : !(
                              symbolTable.getVariableOrNull_x0gevv_k$(
                                  link
                                      ._get_left__802434852_d9qyp0_k$()
                                      ._get_value__3683422336_a43j40_k$()
                              ) == null
                          )
                )
                    ? true
                    : !(
                          symbolTable.getObjectOrNull_vkys4u_k$(
                              link._get_left__802434852_d9qyp0_k$()
                          ) == null
                      )
            ) {
                link._get_children__1387553196_my42wc_k$().set_meu351_k$(
                    1,
                    new Call(link._get_right__3576132917_bvz45n_k$())
                );
                Unit_getInstance();
                var tmp = link
                    ._get_children__1387553196_my42wc_k$()
                    .get_fkrdnv_k$(1);
                return tmp instanceof Call ? tmp : THROW_CCE();
            }
            var tmp0_elvis_lhs = symbolTable.getImportOrNull_hhw2v8_k$(
                link
                    ._get_left__802434852_d9qyp0_k$()
                    ._get_value__3683422336_a43j40_k$()
            );
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
                var tmp_1;
                if (!inProperty) {
                    var tmp_2 = symbolTable
                        .getFileTable_m3scuc_k$()
                        ._get_filePath__151144490_2hzju2_k$();
                    var tmp_3 = link._get_left__802434852_d9qyp0_k$();
                    throw PositionalException_init_$Create$(
                        "Variable or import not found",
                        tmp_2,
                        tmp_3,
                        null,
                        0,
                        24,
                        null
                    );
                } else {
                    link._get_children__1387553196_my42wc_k$().set_meu351_k$(
                        1,
                        new Call(link._get_right__3576132917_bvz45n_k$())
                    );
                    Unit_getInstance();
                    var tmp_4 = link
                        ._get_children__1387553196_my42wc_k$()
                        .get_fkrdnv_k$(1);
                    return tmp_4 instanceof Call ? tmp_4 : THROW_CCE();
                }
                tmp_0 = tmp_1;
            } else {
                tmp_0 = tmp0_elvis_lhs;
            }
            var fileTable = tmp_0;
            if (
                !(
                    fileTable.getFunctionOrNull_p690c9_k$(
                        new Call(link._get_right__3576132917_bvz45n_k$())
                    ) == null
                )
            ) {
                link._get_children__1387553196_my42wc_k$().set_meu351_k$(
                    1,
                    new Call(link._get_right__3576132917_bvz45n_k$())
                );
                Unit_getInstance();
            } else if (
                !(
                    fileTable.getTypeOrNull_4rmbrt_k$(
                        link
                            ._get_right__3576132917_bvz45n_k$()
                            ._get_left__802434852_d9qyp0_k$()
                            ._get_value__3683422336_a43j40_k$()
                    ) == null
                )
            ) {
                link._get_children__1387553196_my42wc_k$().set_meu351_k$(
                    1,
                    new Constructor(link._get_right__3576132917_bvz45n_k$())
                );
                Unit_getInstance();
            } else {
                var tmp_5 =
                    "No class and function found in `" +
                    fileTable._get_filePath__151144490_2hzju2_k$() +
                    "`";
                var tmp_6 = symbolTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                var tmp_7 = link._get_right__3576132917_bvz45n_k$();
                throw PositionalException_init_$Create$(
                    tmp_5,
                    tmp_6,
                    tmp_7,
                    null,
                    0,
                    24,
                    null
                );
            }
            var tmp_8 = link
                ._get_children__1387553196_my42wc_k$()
                .get_fkrdnv_k$(1);
            return tmp_8 instanceof Invocation ? tmp_8 : THROW_CCE();
        };
    TokenFactory.$metadata$ = {
        simpleName: "TokenFactory",
        kind: "object",
        interfaces: [],
    };
    var TokenFactory_instance;
    function TokenFactory_getInstance() {
        if (TokenFactory_instance == null) new TokenFactory();
        return TokenFactory_instance;
    }
    function getParamName($this, index, function_0, fileTable) {
        var tmp;
        if (
            _get_lastIndex__339712501(
                function_0._get_nonDefaultParams__3666398385_ae8evj_k$()
            ) < index
        ) {
            var tmp_0;
            if (
                ((function_0
                    ._get_nonDefaultParams__3666398385_ae8evj_k$()
                    ._get_size__809037418_ddoh9m_k$() +
                    _get_lastIndex__339712501(
                        function_0._get_defaultParams__1735937674_spj62y_k$()
                    )) |
                    0) <
                index
            ) {
                var tmp_1 = fileTable._get_filePath__151144490_2hzju2_k$();
                var tmp_2 = $this
                    ._get_children__1387553196_my42wc_k$()
                    .get_fkrdnv_k$(index);
                throw PositionalException_init_$Create$(
                    "More arguments than parameters",
                    tmp_1,
                    tmp_2,
                    null,
                    0,
                    24,
                    null
                );
            } else {
                tmp_0 = function_0
                    ._get_defaultParams__1735937674_spj62y_k$()
                    .get_fkrdnv_k$(
                        (index -
                            function_0
                                ._get_nonDefaultParams__3666398385_ae8evj_k$()
                                ._get_size__809037418_ddoh9m_k$()) |
                            0
                    )
                    ._get_name__804168992_das4rk_k$();
            }
            tmp = tmp_0;
        } else {
            tmp = function_0
                ._get_nonDefaultParams__3666398385_ae8evj_k$()
                .get_fkrdnv_k$(index)
                ._get_value__3683422336_a43j40_k$();
        }
        return tmp;
    }
    function Call(node) {
        Invocation.call(
            this,
            node._get_symbol__541899891_8ymsmr_k$(),
            node._get_value__3683422336_a43j40_k$(),
            node._get_position__3188952002_iahqv2_k$(),
            node._get_children__1387553196_my42wc_k$()
        );
        this._get_children__1387553196_my42wc_k$().clear_j9y8zo_k$();
        this._get_children__1387553196_my42wc_k$().addAll_oxxjjk_k$(
            node._get_children__1387553196_my42wc_k$()
        );
        Unit_getInstance();
        this.allArgs_1 =
            this._get_children__1387553196_my42wc_k$().subList_d153ha_k$(
                1,
                this._get_children__1387553196_my42wc_k$()._get_size__809037418_ddoh9m_k$()
            );
    }
    Call.prototype._get_allArgs__3896514739_6l87yl_k$ = function () {
        return this.allArgs_1;
    };
    Call.prototype._get_unnamedArgs__3467525108_domyh8_k$ = function () {
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = ArrayList_init_$Create$();
            break $l$block;
        }
        var res = tmp$ret$0;
        var i = 1;
        $l$loop: while (true) {
            var tmp;
            if (
                i <
                this._get_children__1387553196_my42wc_k$()._get_size__809037418_ddoh9m_k$()
            ) {
                var tmp_0 =
                    this._get_children__1387553196_my42wc_k$().get_fkrdnv_k$(i);
                tmp = !(tmp_0 instanceof Assignment);
            } else {
                tmp = false;
            }
            if (!tmp) {
                break $l$loop;
            }
            res.add_1j60pz_k$(
                this._get_children__1387553196_my42wc_k$().get_fkrdnv_k$(i)
            );
            Unit_getInstance();
            var tmp0 = i;
            i = (tmp0 + 1) | 0;
            Unit_getInstance();
        }
        return res;
    };
    Call.prototype._get_namedArgs__2678919515_qq5ig5_k$ = function () {
        var tmp = this._get_children__1387553196_my42wc_k$().subList_d153ha_k$(
            (this._get_unnamedArgs__3467525108_domyh8_k$()._get_size__809037418_ddoh9m_k$() +
                1) |
                0,
            this._get_children__1387553196_my42wc_k$()._get_size__809037418_ddoh9m_k$()
        );
        return isInterface(tmp, List) ? tmp : THROW_CCE();
    };
    Call.prototype.evaluate_hfj3qo_k$ = function (symbolTable) {
        var function_0 = symbolTable.getFunction_cbvgm5_k$(this);
        var newTable = symbolTable
            .changeFile_n27o1t_k$(
                symbolTable.getFileOfFunction_iwsgea_k$(this, function_0)
            )
            .changeScope_rjxbi4_k$();
        newTable._set_resolvingType__2046672930_ezepws_k$(
            ResolvingMode_FUNCTION_getInstance()
        );
        this.argumentsToParameters_rkc6j4_k$(function_0, symbolTable, newTable);
        return this.evaluateFunction_gez3ba_k$(newTable, function_0);
    };
    Call.prototype.argumentsToParameters_rkc6j4_k$ = function (
        function_0,
        argTable,
        paramTable
    ) {
        var argResolvingMode =
            argTable._get_resolvingType__1126639278_imrsfi_k$();
        var paramResolvingMode =
            paramTable._get_resolvingType__1126639278_imrsfi_k$();
        argTable._set_resolvingType__2046672930_ezepws_k$(
            ResolvingMode_FUNCTION_getInstance()
        );
        paramTable._set_resolvingType__2046672930_ezepws_k$(
            ResolvingMode_FUNCTION_getInstance()
        );
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = LinkedHashMap_init_$Create$();
            break $l$block;
        }
        var assigned = tmp$ret$0;
        var iterator =
            this._get_unnamedArgs__3467525108_domyh8_k$().iterator_jk1svi_k$();
        var index = 0;
        while (iterator.hasNext_bitz1p_k$()) {
            var index_0 = index;
            index = (index + 1) | 0;
            var arg = iterator.next_20eer_k$();
            var paramName = getParamName(
                this,
                index_0,
                function_0,
                argTable.getFileTable_m3scuc_k$()
            );
            if (!(assigned.get_1mhr4y_k$(paramName) == null)) {
                var tmp = argTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    "Argument already assigned",
                    tmp,
                    arg,
                    null,
                    0,
                    24,
                    null
                );
            }
            {
                var tmp0_set_0 = Utils_getInstance().toVariable_abd9s8_k$(
                    arg.evaluate_hfj3qo_k$(argTable),
                    arg
                );
                assigned.put_3mhbri_k$(paramName, tmp0_set_0);
                Unit_getInstance();
            }
        }
        var tmp2_iterator =
            this._get_namedArgs__2678919515_qq5ig5_k$().iterator_jk1svi_k$();
        while (tmp2_iterator.hasNext_bitz1p_k$()) {
            var nArg = tmp2_iterator.next_20eer_k$();
            if (
                !function_0.hasParam_fjo57y_k$(
                    nArg._get_name__804168992_das4rk_k$()
                )
            ) {
                var tmp_0 =
                    "Parameter with name `" +
                    nArg._get_name__804168992_das4rk_k$() +
                    "` absent";
                var tmp_1 = argTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    tmp_0,
                    tmp_1,
                    nArg,
                    null,
                    0,
                    24,
                    null
                );
            }
            if (
                !(
                    assigned.get_1mhr4y_k$(
                        nArg._get_name__804168992_das4rk_k$()
                    ) == null
                )
            ) {
                var tmp_2 = argTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    "Argument already assigned",
                    tmp_2,
                    nArg,
                    null,
                    0,
                    24,
                    null
                );
            }
            {
                var tmp1_set_0 = nArg._get_name__804168992_das4rk_k$();
                var tmp2_set_0 = Utils_getInstance().toVariable_abd9s8_k$(
                    nArg
                        ._get_right__3576132917_bvz45n_k$()
                        .evaluate_hfj3qo_k$(argTable),
                    nArg
                );
                assigned.put_3mhbri_k$(tmp1_set_0, tmp2_set_0);
                Unit_getInstance();
            }
        }
        var tmp3_iterator = function_0
            ._get_defaultParams__1735937674_spj62y_k$()
            .iterator_jk1svi_k$();
        while (tmp3_iterator.hasNext_bitz1p_k$()) {
            var defaultParam = tmp3_iterator.next_20eer_k$();
            if (
                assigned.get_1mhr4y_k$(
                    defaultParam._get_name__804168992_das4rk_k$()
                ) == null
            ) {
                {
                    var tmp3_set_0 =
                        defaultParam._get_name__804168992_das4rk_k$();
                    var tmp4_set_0 = Utils_getInstance().toVariable_abd9s8_k$(
                        defaultParam
                            ._get_right__3576132917_bvz45n_k$()
                            .evaluate_hfj3qo_k$(paramTable),
                        defaultParam
                    );
                    assigned.put_3mhbri_k$(tmp3_set_0, tmp4_set_0);
                    Unit_getInstance();
                }
            }
        }
        var tmp4_iterator = function_0
            ._get_nonDefaultParams__3666398385_ae8evj_k$()
            .iterator_jk1svi_k$();
        while (tmp4_iterator.hasNext_bitz1p_k$()) {
            var param = tmp4_iterator.next_20eer_k$();
            if (
                assigned.get_1mhr4y_k$(
                    param._get_value__3683422336_a43j40_k$()
                ) == null
            ) {
                var tmp_3 = paramTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    "Parameter not assigned",
                    tmp_3,
                    param,
                    null,
                    0,
                    24,
                    null
                );
            }
        }
        var tmp$ret$1;
        $l$block_0: {
            tmp$ret$1 = assigned
                ._get_entries__31877249_iz8n5_k$()
                .iterator_jk1svi_k$();
            break $l$block_0;
        }
        var tmp5_iterator = tmp$ret$1;
        while (tmp5_iterator.hasNext_bitz1p_k$()) {
            var i = tmp5_iterator.next_20eer_k$();
            paramTable.addVariable_vmj31f_k$(
                i._get_key__857139730_e6bh8y_k$(),
                i._get_value__3683422336_a43j40_k$()
            );
        }
        argTable._set_resolvingType__2046672930_ezepws_k$(argResolvingMode);
        paramTable._set_resolvingType__2046672930_ezepws_k$(paramResolvingMode);
    };
    Call.prototype.evaluateFunction_gez3ba_k$ = function (
        symbolTable,
        function_0
    ) {
        var tmp;
        if (function_0 instanceof EmbeddedFunction) {
            tmp = function_0.executeFunction_v9v8tp_k$(
                this._get_left__802434852_d9qyp0_k$(),
                symbolTable
            );
        } else {
            {
                tmp = function_0
                    ._get_body__793495785_d4fd9l_k$()
                    .evaluate_hfj3qo_k$(symbolTable);
            }
        }
        var res = tmp;
        var tmp_0;
        if (res instanceof Unit) {
            tmp_0 = Utils_getInstance()._get_NULL__774226340_csycv8_k$();
        } else {
            {
                tmp_0 = res;
            }
        }
        return tmp_0;
    };
    Call.$metadata$ = {
        simpleName: "Call",
        kind: "class",
        interfaces: [],
    };
    function resolveArguments($this, type, symbolTable) {
        var resolvingMode =
            symbolTable._get_resolvingType__1126639278_imrsfi_k$();
        symbolTable._set_resolvingType__2046672930_ezepws_k$(
            ResolvingMode_FUNCTION_getInstance()
        );
        type.setProperty_tmx3oq_k$("this", type);
        var tmp0_iterator = $this
            ._get_children__1387553196_my42wc_k$()
            .subList_d153ha_k$(
                1,
                $this
                    ._get_children__1387553196_my42wc_k$()
                    ._get_size__809037418_ddoh9m_k$()
            )
            .iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var arg = tmp0_iterator.next_20eer_k$();
            if (!(arg instanceof Assignment)) {
                var tmp = symbolTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    "Expected assignment",
                    tmp,
                    arg,
                    null,
                    0,
                    24,
                    null
                );
            } else {
            }
            var tmp_0 = arg._get_left__802434852_d9qyp0_k$();
            if (!(tmp_0 instanceof Identifier)) {
                var tmp_1 = symbolTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    "Expected property name",
                    tmp_1,
                    arg,
                    null,
                    0,
                    24,
                    null
                );
            } else {
            }
            type.setProperty_tmx3oq_k$(
                arg
                    ._get_left__802434852_d9qyp0_k$()
                    ._get_value__3683422336_a43j40_k$(),
                Utils_getInstance().toProperty_q8fusx_k$(
                    arg
                        ._get_right__3576132917_bvz45n_k$()
                        .evaluate_hfj3qo_k$(symbolTable),
                    arg._get_left__802434852_d9qyp0_k$()
                )
            );
            var prop = ensureNotNull(
                type.getPropertyOrNull_191djg_k$(
                    arg
                        ._get_left__802434852_d9qyp0_k$()
                        ._get_value__3683422336_a43j40_k$()
                )
            );
            if (prop instanceof Type)
                prop.setProperty_tmx3oq_k$("parent", type);
            else {
            }
            type.removeAssignment_c8vby8_k$(
                arg._get_left__802434852_d9qyp0_k$()
            );
            Unit_getInstance();
        }
        symbolTable._set_resolvingType__2046672930_ezepws_k$(resolvingMode);
    }
    function Constructor(node) {
        Invocation.call(
            this,
            node._get_symbol__541899891_8ymsmr_k$(),
            node._get_value__3683422336_a43j40_k$(),
            node._get_position__3188952002_iahqv2_k$(),
            node._get_children__1387553196_my42wc_k$()
        );
        this._get_children__1387553196_my42wc_k$().clear_j9y8zo_k$();
        this._get_children__1387553196_my42wc_k$().addAll_oxxjjk_k$(
            node._get_children__1387553196_my42wc_k$()
        );
        Unit_getInstance();
    }
    Constructor.prototype.evaluate_hfj3qo_k$ = function (symbolTable) {
        var tmp;
        var tmp_0 = this._get_left__802434852_d9qyp0_k$();
        if (tmp_0 instanceof Identifier) {
            tmp = symbolTable.getType_93e8u9_k$(
                this._get_left__802434852_d9qyp0_k$()
            );
        } else {
            {
                tmp =
                    this._get_left__802434852_d9qyp0_k$().evaluate_hfj3qo_k$(
                        symbolTable
                    );
            }
        }
        var type = tmp;
        if (!(type instanceof Type)) {
            var tmp_1 = symbolTable
                .getFileTable_m3scuc_k$()
                ._get_filePath__151144490_2hzju2_k$();
            var tmp_2 = this._get_left__802434852_d9qyp0_k$();
            throw PositionalException_init_$Create$(
                "Expected type",
                tmp_1,
                tmp_2,
                null,
                0,
                24,
                null
            );
        } else {
        }
        if (type._get_index__3322996031_g2optt_k$() === 0) {
            return this.evaluateType_b2kdxc_k$(
                type.copyRoot_8d9kp5_k$(),
                symbolTable
            );
        }
        return this.evaluateType_b2kdxc_k$(type, symbolTable);
    };
    Constructor.prototype.evaluateType_b2kdxc_k$ = function (
        type,
        symbolTable
    ) {
        resolveArguments(this, type, symbolTable);
        var tmp = Utils_getInstance().parseOneNode_tdccb8_k$("before()");
        var beforeNode = new Call(
            tmp instanceof Invocation ? tmp : THROW_CCE()
        );
        var beforeResolving = type.getFunctionOrNull_p690c9_k$(beforeNode);
        if (!(beforeResolving == null)) {
            beforeNode.evaluateFunction_gez3ba_k$(symbolTable, beforeResolving);
            Unit_getInstance();
        }
        if (type._get_assignments__50188043_tvpcb_k$().isEmpty_y1axqb_k$()) {
            type.callAfter$default_vbnxx3_k$(symbolTable, false, 2, null);
        }
        return symbolTable
            ._get_resolvingType__1126639278_imrsfi_k$()
            .equals(ResolvingMode_TYPE_getInstance())
            ? type
            : Companion_getInstance_1().resolveTree_tbefwp_k$(
                  type,
                  symbolTable
                      .changeVariable_uoiydg_k$(type)
                      .changeScope_rjxbi4_k$()
              );
    };
    Constructor.$metadata$ = {
        simpleName: "Constructor",
        kind: "class",
        interfaces: [],
    };
    function Invocation(symbol, value, position, children) {
        Node.call(this, symbol, value, position, toMutableList(children));
    }
    Invocation.prototype._get_name__804168992_das4rk_k$ = function () {
        return this._get_left__802434852_d9qyp0_k$();
    };
    Invocation.prototype.evaluate_hfj3qo_k$ = function (symbolTable) {
        var tmp = symbolTable
            .getFileTable_m3scuc_k$()
            ._get_filePath__151144490_2hzju2_k$();
        throw PositionalException_init_$Create$(
            "Invocations should be replaced with Calls or Constructors",
            tmp,
            this,
            null,
            0,
            24,
            null
        );
    };
    Invocation.prototype.findUnassigned_h2swqb_k$ = function (
        symbolTable,
        parent
    ) {
        var tmp0_iterator = this._get_children__1387553196_my42wc_k$()
            .subList_d153ha_k$(
                1,
                this._get_children__1387553196_my42wc_k$()._get_size__809037418_ddoh9m_k$()
            )
            .iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var arg = tmp0_iterator.next_20eer_k$();
            var found = arg.findUnassigned_h2swqb_k$(symbolTable, parent);
            if (!(found == null)) {
                return found;
            }
        }
        return null;
    };
    Invocation.$metadata$ = {
        simpleName: "Invocation",
        kind: "class",
        interfaces: [Linkable],
    };
    var ResolvingMode_TYPE_instance;
    var ResolvingMode_FUNCTION_instance;
    var ResolvingMode_OBJECT_instance;
    var ResolvingMode_entriesInitialized;
    function ResolvingMode_initEntries() {
        if (ResolvingMode_entriesInitialized) return Unit_getInstance();
        ResolvingMode_entriesInitialized = true;
        ResolvingMode_TYPE_instance = new ResolvingMode("TYPE", 0);
        ResolvingMode_FUNCTION_instance = new ResolvingMode("FUNCTION", 1);
        ResolvingMode_OBJECT_instance = new ResolvingMode("OBJECT", 2);
    }
    function ResolvingMode(name, ordinal) {
        Enum.call(this, name, ordinal);
    }
    ResolvingMode.$metadata$ = {
        simpleName: "ResolvingMode",
        kind: "class",
        interfaces: [],
    };
    function ResolvingMode_TYPE_getInstance() {
        ResolvingMode_initEntries();
        return ResolvingMode_TYPE_instance;
    }
    function ResolvingMode_FUNCTION_getInstance() {
        ResolvingMode_initEntries();
        return ResolvingMode_FUNCTION_instance;
    }
    function ResolvingMode_OBJECT_getInstance() {
        ResolvingMode_initEntries();
        return ResolvingMode_OBJECT_instance;
    }
    function Index(symbol, value, position, children) {
        Node_init_$Init$(symbol, value, position, null, 8, null, this);
        this._get_children__1387553196_my42wc_k$().clear_j9y8zo_k$();
        this._get_children__1387553196_my42wc_k$().addAll_oxxjjk_k$(children);
        Unit_getInstance();
    }
    Index.prototype.evaluate_hfj3qo_k$ = function (symbolTable) {
        var res = this.evaluateIndex_a4vc9c_k$(symbolTable);
        var tmp;
        if (res instanceof Primitive) {
            tmp = !(res instanceof PNumber);
        } else {
            {
                tmp = false;
            }
        }
        if (tmp) return res.getPValue_berniv_k$();
        else {
        }
        return res;
    };
    Index.prototype.evaluateIndexWithDeepestLeftProperty_qjgaue_k$ = function (
        prop,
        symbolTable
    ) {
        var tmp;
        var tmp_0 = this._get_left__802434852_d9qyp0_k$();
        if (tmp_0 instanceof Index) {
            var tmp_1 = Utils_getInstance();
            var tmp_2 = this._get_left__802434852_d9qyp0_k$();
            var tmp_3 = (
                tmp_2 instanceof Index ? tmp_2 : THROW_CCE()
            ).evaluateIndexWithDeepestLeftProperty_qjgaue_k$(prop, symbolTable);
            tmp = tmp_1.toVariable$default_x99qtu_k$(tmp_3, null, 1, null);
        } else {
            {
                tmp = prop;
            }
        }
        var indexed = tmp;
        var index =
            this._get_right__3576132917_bvz45n_k$().evaluate_hfj3qo_k$(
                symbolTable
            );
        var tmp0_subject = indexed;
        var tmp_4;
        if (isInterface(tmp0_subject, Indexable)) {
            tmp_4 = indexed.get_xyyy8m_k$(
                index,
                this._get_right__3576132917_bvz45n_k$(),
                symbolTable.getFileTable_m3scuc_k$()
            );
        } else {
            {
                var tmp_5 = listOf_0([
                    getKClass(PList),
                    getKClass(PDictionary),
                    getKClass(PString),
                ]);
                var tmp_6 = symbolTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw ExpectedTypeException_init_$Create$(
                    tmp_5,
                    tmp_6,
                    this,
                    null,
                    false,
                    24,
                    null
                );
            }
        }
        return tmp_4;
    };
    Index.prototype.evaluateIndex_a4vc9c_k$ = function (symbolTable) {
        var indexed = Utils_getInstance().toVariable_abd9s8_k$(
            this._get_left__802434852_d9qyp0_k$().evaluate_hfj3qo_k$(
                symbolTable
            ),
            this._get_left__802434852_d9qyp0_k$()
        );
        var index =
            this._get_right__3576132917_bvz45n_k$().evaluate_hfj3qo_k$(
                symbolTable
            );
        var tmp0_subject = indexed;
        var tmp;
        if (isInterface(tmp0_subject, Indexable)) {
            tmp = indexed.get_xyyy8m_k$(
                index,
                this._get_right__3576132917_bvz45n_k$(),
                symbolTable.getFileTable_m3scuc_k$()
            );
        } else {
            {
                var tmp_0 = listOf_0([
                    getKClass(PList),
                    getKClass(PDictionary),
                    getKClass(PString),
                ]);
                var tmp_1 = symbolTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw ExpectedTypeException_init_$Create$(
                    tmp_0,
                    tmp_1,
                    this,
                    null,
                    false,
                    24,
                    null
                );
            }
        }
        return tmp;
    };
    Index.prototype.getDeepestLeft_7e2ut_k$ = function () {
        var res = this._get_left__802434852_d9qyp0_k$();
        $l$loop: while (true) {
            if (!(res instanceof Index)) {
                break $l$loop;
            }
            res = res._get_left__802434852_d9qyp0_k$();
        }
        return res;
    };
    Index.prototype.assign_9u530r_k$ = function (
        assignment,
        parent,
        symbolTable,
        value
    ) {
        var assignTable = !(parent == null)
            ? symbolTable.changeVariable_uoiydg_k$(parent)
            : symbolTable;
        var indexable = Utils_getInstance().toVariable_abd9s8_k$(
            this.getDeepestLeft_7e2ut_k$().evaluate_hfj3qo_k$(assignTable),
            this._get_left__802434852_d9qyp0_k$()
        );
        this.assignWithIndexable_p9wfm1_k$(
            indexable,
            assignTable,
            symbolTable,
            assignment,
            value
        );
    };
    Index.prototype.assignWithIndexable_p9wfm1_k$ = function (
        variable,
        assignTable,
        symbolTable,
        assignment,
        value
    ) {
        var index = Utils_getInstance().toVariable_abd9s8_k$(
            this._get_right__3576132917_bvz45n_k$().evaluate_hfj3qo_k$(
                assignTable
            ),
            this._get_right__3576132917_bvz45n_k$()
        );
        var tmp;
        var tmp_0 = this._get_left__802434852_d9qyp0_k$();
        if (tmp_0 instanceof Index) {
            var tmp_1 = this._get_left__802434852_d9qyp0_k$();
            tmp = (
                tmp_1 instanceof Index ? tmp_1 : THROW_CCE()
            ).evaluateIndexWithDeepestLeftProperty_qjgaue_k$(
                variable,
                symbolTable
            );
        } else {
            {
                tmp = variable;
            }
        }
        var indexable = tmp;
        var tmp_2;
        if (isInterface(indexable, Indexable)) {
            tmp_2 = indexable.checkIndexType_1ovz24_k$(index);
        } else {
            {
                tmp_2 = false;
            }
        }
        if (tmp_2) {
            indexable.set_g480bi_k$(
                index,
                value,
                this._get_right__3576132917_bvz45n_k$(),
                assignment._get_right__3576132917_bvz45n_k$(),
                symbolTable.getFileTable_m3scuc_k$()
            );
        } else {
            {
                var tmp_3 = listOf_0([getKClass(PList), getKClass(PNumber)]);
                var tmp_4 = symbolTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw ExpectedTypeException_init_$Create$(
                    tmp_3,
                    tmp_4,
                    this,
                    null,
                    true,
                    8,
                    null
                );
            }
        }
    };
    Index.prototype.findUnassigned_h2swqb_k$ = function (symbolTable, parent) {
        var found =
            this._get_right__3576132917_bvz45n_k$().findUnassigned_h2swqb_k$(
                symbolTable,
                parent
            );
        if (!(found == null)) {
            return found;
        }
        return this._get_left__802434852_d9qyp0_k$().findUnassigned_h2swqb_k$(
            symbolTable,
            parent
        );
    };
    Index.$metadata$ = {
        simpleName: "Index",
        kind: "class",
        interfaces: [Assignable, Linkable],
    };
    function NodeTernary(node) {
        Node.call(
            this,
            node._get_symbol__541899891_8ymsmr_k$(),
            node._get_value__3683422336_a43j40_k$(),
            node._get_position__3188952002_iahqv2_k$(),
            node._get_children__1387553196_my42wc_k$()
        );
    }
    NodeTernary.prototype.evaluate_hfj3qo_k$ = function (symbolTable) {
        if (
            !(
                this._get_children__1387553196_my42wc_k$()._get_size__809037418_ddoh9m_k$() ===
                3
            )
        ) {
            var tmp = symbolTable
                .getFileTable_m3scuc_k$()
                ._get_filePath__151144490_2hzju2_k$();
            throw PositionalException_init_$Create$(
                "ternary if should have else branch",
                tmp,
                this,
                null,
                0,
                24,
                null
            );
        }
        var condition = this.evaluateCondition_ji1cnt_k$(symbolTable);
        var tmp_0;
        if (
            !equals(
                condition,
                Utils_getInstance()._get_FALSE__2278683438_xcfyky_k$()
            )
        ) {
            tmp_0 =
                this._get_right__3576132917_bvz45n_k$().evaluate_hfj3qo_k$(
                    symbolTable
                );
        } else {
            tmp_0 = this._get_children__1387553196_my42wc_k$()
                .get_fkrdnv_k$(2)
                .evaluate_hfj3qo_k$(symbolTable);
        }
        return tmp_0;
    };
    NodeTernary.prototype.evaluateCondition_ji1cnt_k$ = function (symbolTable) {
        return this._get_left__802434852_d9qyp0_k$().evaluate_hfj3qo_k$(
            symbolTable
        );
    };
    NodeTernary.prototype.findUnassigned_h2swqb_k$ = function (
        symbolTable,
        parent
    ) {
        var found =
            this._get_left__802434852_d9qyp0_k$().findUnassigned_h2swqb_k$(
                symbolTable,
                parent
            );
        if (!(found == null)) {
            return found;
        }
        return null;
    };
    NodeTernary.$metadata$ = {
        simpleName: "NodeTernary",
        kind: "class",
        interfaces: [],
    };
    function evaluateLogicOperators(
        $this,
        afterFirstReturned,
        toSecondCondition,
        symbolTable
    ) {
        var tmp = Utils_getInstance();
        var tmp_0 = $this._get_left__802434852_d9qyp0_k$();
        var a = tmp.getPNumber$default_9bpbi0_k$(
            symbolTable,
            tmp_0,
            null,
            4,
            null
        );
        var tmp_1;
        if (toSecondCondition(a)) {
            var tmp_2 = Utils_getInstance();
            var tmp_3 = $this._get_right__3576132917_bvz45n_k$();
            var b = tmp_2.getPNumber$default_9bpbi0_k$(
                symbolTable,
                tmp_3,
                null,
                4,
                null
            );
            tmp_1 = Utils_getInstance().toPInt_yzud9u_k$(
                !equals(b.getPValue_berniv_k$(), 0)
            );
        } else {
            tmp_1 = afterFirstReturned;
        }
        return tmp_1;
    }
    function evaluateArithmeticOperators($this, a, b, node, fileTable) {
        var tmp0_subject = node._get_symbol__541899891_8ymsmr_k$();
        var tmp;
        switch (tmp0_subject) {
            case "-":
                tmp = a.minus_x4b36i_k$(b);
                break;
            case "*":
                tmp = a.times_q0lma8_k$(b);
                break;
            case "/":
                tmp = a.div_scc0gr_k$(b);
                break;
            case "%":
                tmp = a.rem_lfazes_k$(b);
                break;
            default:
                var tmp_0 =
                    "Operator `" +
                    node._get_symbol__541899891_8ymsmr_k$() +
                    "` not implemented";
                var tmp_1 = fileTable._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    tmp_0,
                    tmp_1,
                    node,
                    null,
                    0,
                    24,
                    null
                );
        }
        return tmp;
    }
    function NumberOperator$evaluate$lambda() {
        return function (a) {
            return !equals(a.getPValue_berniv_k$(), 0);
        };
    }
    function NumberOperator$evaluate$lambda_0() {
        return function (a) {
            return equals(a.getPValue_berniv_k$(), 0);
        };
    }
    function NumberOperator(symbol, value, position, children) {
        Operator.call(this, symbol, value, position, toMutableList(children));
    }
    NumberOperator.prototype.evaluate_hfj3qo_k$ = function (symbolTable) {
        if (
            this._get_children__1387553196_my42wc_k$()._get_size__809037418_ddoh9m_k$() ===
            1
        ) {
            var tmp0_subject = this._get_symbol__541899891_8ymsmr_k$();
            var tmp;
            switch (tmp0_subject) {
                case "-":
                    var tmp_0 = Utils_getInstance();
                    var tmp_1 = this._get_left__802434852_d9qyp0_k$();
                    tmp = tmp_0
                        .getPNumber$default_9bpbi0_k$(
                            symbolTable,
                            tmp_1,
                            null,
                            4,
                            null
                        )
                        .unaryMinus_6uz0qp_k$();
                    break;
                case "!":
                    var tmp_2 = Utils_getInstance();
                    var tmp_3 = this._get_left__802434852_d9qyp0_k$();
                    tmp = tmp_2
                        .getPNumber$default_9bpbi0_k$(
                            symbolTable,
                            tmp_3,
                            null,
                            4,
                            null
                        )
                        .not_2cb7_k$();
                    break;
                default:
                    var tmp_4 = symbolTable
                        .getFileTable_m3scuc_k$()
                        ._get_filePath__151144490_2hzju2_k$();
                    throw PositionalException_init_$Create$(
                        "Prefix arithmetic operator not implemented",
                        tmp_4,
                        this,
                        null,
                        0,
                        24,
                        null
                    );
            }
            return tmp;
        }
        var tmp1_subject = this._get_value__3683422336_a43j40_k$();
        if (tmp1_subject === "&&") {
            var tmp_5 = Utils_getInstance()._get_FALSE__2278683438_xcfyky_k$();
            return evaluateLogicOperators(
                this,
                tmp_5,
                NumberOperator$evaluate$lambda(),
                symbolTable
            );
        } else if (tmp1_subject === "||") {
            var tmp_6 = Utils_getInstance()._get_TRUE__779686525_cw7dz1_k$();
            return evaluateLogicOperators(
                this,
                tmp_6,
                NumberOperator$evaluate$lambda_0(),
                symbolTable
            );
        }
        var tmp_7 = Utils_getInstance();
        var tmp_8 = this._get_left__802434852_d9qyp0_k$();
        var a = tmp_7.getPNumber$default_9bpbi0_k$(
            symbolTable,
            tmp_8,
            null,
            4,
            null
        );
        var tmp_9 = Utils_getInstance();
        var tmp_10 = this._get_right__3576132917_bvz45n_k$();
        var b = tmp_9.getPNumber$default_9bpbi0_k$(
            symbolTable,
            tmp_10,
            null,
            4,
            null
        );
        var tmp2_subject = this._get_value__3683422336_a43j40_k$();
        switch (tmp2_subject) {
            case ">":
                return Utils_getInstance().toPInt_yzud9u_k$(
                    a.compareTo_hp6kpi_k$(b) > 0
                );
            case "<":
                return Utils_getInstance().toPInt_yzud9u_k$(
                    a.compareTo_hp6kpi_k$(b) < 0
                );
            case ">=":
                return Utils_getInstance().toPInt_yzud9u_k$(
                    a.compareTo_hp6kpi_k$(b) >= 0
                );
            case "<=":
                return Utils_getInstance().toPInt_yzud9u_k$(
                    a.compareTo_hp6kpi_k$(b) <= 0
                );
            default:
                return evaluateArithmeticOperators(
                    this,
                    a,
                    b,
                    this,
                    symbolTable.getFileTable_m3scuc_k$()
                );
        }
    };
    NumberOperator.$metadata$ = {
        simpleName: "NumberOperator",
        kind: "class",
        interfaces: [],
    };
    function plus_1(_this__1828080292, $this, other, node, symbolTable) {
        if (isInterface(_this__1828080292, MutableList)) {
            var tmp;
            if (isInterface(other, MutableList)) {
                var res = toMutableList(_this__1828080292);
                res.addAll_oxxjjk_k$(other);
                Unit_getInstance();
                tmp = res;
            } else {
                {
                    var res_0 = toMutableList(_this__1828080292);
                    var tmp_0 = Utils_getInstance();
                    res_0.add_1j60pz_k$(
                        tmp_0.toVariable$default_x99qtu_k$(other, null, 1, null)
                    );
                    Unit_getInstance();
                    tmp = res_0;
                }
            }
            return tmp;
        } else {
        }
        if (typeof _this__1828080292 === "string") {
            return toString_0(_this__1828080292) + toString_0(other);
        } else {
        }
        var tmp_1;
        if (_this__1828080292 instanceof PNumber) {
            tmp_1 = other instanceof PNumber;
        } else {
            {
                tmp_1 = false;
            }
        }
        if (tmp_1) {
            return _this__1828080292.plus_85cudg_k$(other);
        } else {
            {
                var tmp_2 = symbolTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    "Operator not applicable to operands",
                    tmp_2,
                    node,
                    null,
                    0,
                    24,
                    null
                );
            }
        }
    }
    function eq(_this__1828080292, $this, other) {
        var tmp;
        if (_this__1828080292 instanceof PNumber) {
            tmp = other instanceof PNumber;
        } else {
            {
                tmp = false;
            }
        }
        if (tmp) {
            return equals(_this__1828080292, other);
        } else {
        }
        var tmp_0;
        if (isInterface(_this__1828080292, MutableList)) {
            tmp_0 = isInterface(other, MutableList);
        } else {
            {
                tmp_0 = false;
            }
        }
        if (tmp_0) {
            if (
                !(
                    _this__1828080292._get_size__809037418_ddoh9m_k$() ===
                    other._get_size__809037418_ddoh9m_k$()
                )
            ) {
                return false;
            }
            var res = true;
            {
                var tmp0_forEachIndexed_0 = _this__1828080292;
                var index_1 = 0;
                var tmp0_iterator_2 =
                    tmp0_forEachIndexed_0.iterator_jk1svi_k$();
                while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
                    var item_3 = tmp0_iterator_2.next_20eer_k$();
                    {
                        var tmp1_4 = index_1;
                        index_1 = (tmp1_4 + 1) | 0;
                        var tmp1__anonymous__5_4003154334 =
                            checkIndexOverflow(tmp1_4);
                        if (
                            !eq(
                                ensureNotNull(
                                    _this__1828080292.get_fkrdnv_k$(
                                        tmp1__anonymous__5_4003154334
                                    )
                                ),
                                $this,
                                ensureNotNull(
                                    other.get_fkrdnv_k$(
                                        tmp1__anonymous__5_4003154334
                                    )
                                )
                            )
                        ) {
                            res = false;
                        }
                    }
                }
            }
            return res;
        } else {
        }
        var tmp_1;
        if (isInterface(_this__1828080292, MutableMap)) {
            tmp_1 = isInterface(other, MutableMap);
        } else {
            {
                tmp_1 = false;
            }
        }
        if (tmp_1) {
            if (
                !(
                    _this__1828080292._get_size__809037418_ddoh9m_k$() ===
                    other._get_size__809037418_ddoh9m_k$()
                )
            ) {
                return false;
            }
            var res_0 = true;
            {
                var tmp2_forEach_0 = _this__1828080292;
                var tmp$ret$0;
                $l$block: {
                    tmp$ret$0 = tmp2_forEach_0
                        ._get_entries__31877249_iz8n5_k$()
                        .iterator_jk1svi_k$();
                    break $l$block;
                }
                var tmp0_iterator_1 = tmp$ret$0;
                while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
                    var element_2 = tmp0_iterator_1.next_20eer_k$();
                    {
                        var tmp$ret$1;
                        $l$block_0: {
                            tmp$ret$1 =
                                element_2._get_key__857139730_e6bh8y_k$();
                            break $l$block_0;
                        }
                        var key_4 = tmp$ret$1;
                        var tmp$ret$2;
                        $l$block_1: {
                            tmp$ret$2 =
                                element_2._get_value__3683422336_a43j40_k$();
                            break $l$block_1;
                        }
                        var value_5 = tmp$ret$2;
                        var tmp$ret$4;
                        $l$block_3: {
                            var tmp0_contains_0_6 = other;
                            var tmp$ret$3;
                            $l$block_2: {
                                tmp$ret$3 = (
                                    isInterface(tmp0_contains_0_6, Map)
                                        ? tmp0_contains_0_6
                                        : THROW_CCE()
                                ).containsKey_wgk31w_k$(key_4);
                                break $l$block_2;
                            }
                            tmp$ret$4 = tmp$ret$3;
                            break $l$block_3;
                        }
                        if (!tmp$ret$4) res_0 = false;
                        else {
                            var tmp_2 = ensureNotNull(value_5);
                            var tmp$ret$5;
                            $l$block_4: {
                                var tmp1_get_0_7 = other;
                                tmp$ret$5 = (
                                    isInterface(tmp1_get_0_7, Map)
                                        ? tmp1_get_0_7
                                        : THROW_CCE()
                                ).get_1mhr4y_k$(key_4);
                                break $l$block_4;
                            }
                            if (!eq(tmp_2, $this, ensureNotNull(tmp$ret$5)))
                                res_0 = false;
                            else {
                            }
                        }
                    }
                }
            }
            return res_0;
        } else {
        }
        return equals(_this__1828080292, other);
    }
    function neq(_this__1828080292, $this, other) {
        return !eq(_this__1828080292, $this, other);
    }
    function nullCoalesce($this, symbolTable) {
        var leftEvaluated = $this
            ._get_left__802434852_d9qyp0_k$()
            .evaluate_hfj3qo_k$(symbolTable);
        return equals(
            leftEvaluated,
            Utils_getInstance()._get_NULL__774226340_csycv8_k$()
        )
            ? $this
                  ._get_right__3576132917_bvz45n_k$()
                  .evaluate_hfj3qo_k$(symbolTable)
            : leftEvaluated;
    }
    function Operator(symbol, value, position, children) {
        Node.call(this, symbol, value, position, toMutableList(children));
    }
    Operator.prototype.evaluate_hfj3qo_k$ = function (symbolTable) {
        var tmp0_subject = this._get_value__3683422336_a43j40_k$();
        var tmp;
        switch (tmp0_subject) {
            case "+":
                tmp = plus_1(
                    this._get_left__802434852_d9qyp0_k$().evaluate_hfj3qo_k$(
                        symbolTable
                    ),
                    this,
                    this._get_right__3576132917_bvz45n_k$().evaluate_hfj3qo_k$(
                        symbolTable
                    ),
                    this,
                    symbolTable
                );
                break;
            case "==":
                tmp = Utils_getInstance().toPInt_yzud9u_k$(
                    eq(
                        this._get_left__802434852_d9qyp0_k$().evaluate_hfj3qo_k$(
                            symbolTable
                        ),
                        this,
                        this._get_right__3576132917_bvz45n_k$().evaluate_hfj3qo_k$(
                            symbolTable
                        )
                    )
                );
                break;
            case "!=":
                tmp = Utils_getInstance().toPInt_yzud9u_k$(
                    neq(
                        this._get_left__802434852_d9qyp0_k$().evaluate_hfj3qo_k$(
                            symbolTable
                        ),
                        this,
                        this._get_right__3576132917_bvz45n_k$().evaluate_hfj3qo_k$(
                            symbolTable
                        )
                    )
                );
                break;
            case "??":
                tmp = nullCoalesce(this, symbolTable);
                break;
            default:
                var tmp_0 =
                    "Operator `" +
                    this._get_value__3683422336_a43j40_k$() +
                    "` not implemented";
                var tmp_1 = symbolTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    tmp_0,
                    tmp_1,
                    this,
                    null,
                    0,
                    24,
                    null
                );
        }
        return tmp;
    };
    Operator.$metadata$ = {
        simpleName: "Operator",
        kind: "class",
        interfaces: [],
    };
    function evaluateTypeCheck($this, symbolTable) {
        var checked = Utils_getInstance().toVariable_abd9s8_k$(
            $this
                ._get_left__802434852_d9qyp0_k$()
                .evaluate_hfj3qo_k$(symbolTable),
            $this._get_left__802434852_d9qyp0_k$()
        );
        var tmp0_subject = $this
            ._get_right__3576132917_bvz45n_k$()
            ._get_value__3683422336_a43j40_k$();
        var tmp;
        switch (tmp0_subject) {
            case "String":
                tmp = checked instanceof PString;
                break;
            case "Int":
                tmp = checked instanceof PInt;
                break;
            case "Double":
                tmp = checked instanceof PDouble;
                break;
            case "List":
                tmp = checked instanceof PList;
                break;
            case "Dictionary":
                tmp = checked instanceof PDictionary;
                break;
            case "Number":
                tmp = checked instanceof PNumber;
                break;
            case "Class":
                tmp = checked instanceof Type;
                break;
            case "Primitive":
                tmp = checked instanceof Primitive;
                break;
            default:
                var tmp_0;
                if (checked instanceof Primitive) {
                    tmp_0 = true;
                } else {
                    {
                        tmp_0 = checked instanceof Null;
                    }
                }

                if (tmp_0) {
                    return false;
                } else {
                }

                var tmp_1;
                var tmp_2 = $this._get_right__3576132917_bvz45n_k$();
                if (!(tmp_2 instanceof Link)) {
                    var tmp_3 = $this._get_right__3576132917_bvz45n_k$();
                    tmp_1 = !(tmp_3 instanceof Identifier);
                } else {
                    {
                        tmp_1 = false;
                    }
                }

                if (tmp_1) {
                    var tmp_4 = symbolTable
                        .getFileTable_m3scuc_k$()
                        ._get_filePath__151144490_2hzju2_k$();
                    var tmp_5 = $this._get_right__3576132917_bvz45n_k$();
                    throw PositionalException_init_$Create$(
                        "Currently `is` and `!is` expression support type and imported type on the right-hand side",
                        tmp_4,
                        tmp_5,
                        null,
                        0,
                        24,
                        null
                    );
                } else {
                }

                var tmp_6;
                var tmp_7 = $this._get_right__3576132917_bvz45n_k$();
                if (tmp_7 instanceof Identifier) {
                    tmp_6 = symbolTable.getUncopiedTypeOrNull_j6ica_k$(
                        $this._get_right__3576132917_bvz45n_k$()
                    );
                } else {
                    {
                        var tmp_8 = $this._get_right__3576132917_bvz45n_k$();
                        tmp_6 = getType(
                            $this,
                            symbolTable,
                            tmp_8 instanceof Link ? tmp_8 : THROW_CCE()
                        );
                    }
                }

                var type = tmp_6;
                var tmp_9;
                var tmp_10;
                var tmp_11;
                var tmp_12;
                var tmp_13;
                if (checked instanceof Type) {
                    tmp_13 = !(checked instanceof Object_0);
                } else {
                    {
                        tmp_13 = false;
                    }
                }

                if (tmp_13) {
                    tmp_12 = type instanceof Type;
                } else {
                    {
                        tmp_12 = false;
                    }
                }

                if (tmp_12) {
                    tmp_11 = !(type instanceof Object_0);
                } else {
                    {
                        tmp_11 = false;
                    }
                }

                if (tmp_11) {
                    tmp_10 = !(
                        checked._get_index__3322996031_g2optt_k$() === 0
                    );
                } else {
                    {
                        tmp_10 = false;
                    }
                }

                if (tmp_10) {
                    tmp_9 = type._get_index__3322996031_g2optt_k$() === 0;
                } else {
                    {
                        tmp_9 = false;
                    }
                }

                if (tmp_9) {
                    return checked.inherits_1imrpq_k$(type);
                } else {
                }

                var tmp_14 = symbolTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    "Expected class instance or primitive as left operator and class name as right operator",
                    tmp_14,
                    $this,
                    null,
                    0,
                    24,
                    null
                );
        }
        return tmp;
    }
    function getType($this, symbolTable, link) {
        var tmp;
        var tmp_0;
        if (
            !(
                link
                    ._get_children__1387553196_my42wc_k$()
                    ._get_size__809037418_ddoh9m_k$() === 2
            )
        ) {
            tmp_0 = true;
        } else {
            var tmp_1 = link._get_left__802434852_d9qyp0_k$();
            tmp_0 = !(tmp_1 instanceof Identifier);
        }
        if (tmp_0) {
            tmp = true;
        } else {
            {
                var tmp_2 = link._get_right__3576132917_bvz45n_k$();
                tmp = !(tmp_2 instanceof Identifier);
            }
        }
        if (tmp) {
            var tmp_3 = symbolTable
                .getFileTable_m3scuc_k$()
                ._get_filePath__151144490_2hzju2_k$();
            throw PositionalException_init_$Create$(
                "Expected link in form of `importName.typeName`",
                tmp_3,
                link,
                null,
                0,
                24,
                null
            );
        } else {
        }
        var import_0 = symbolTable.getImport_m6etbe_k$(
            link._get_left__802434852_d9qyp0_k$()
        );
        return symbolTable
            .changeFile_n27o1t_k$(import_0)
            .getUncopiedTypeOrNull_j6ica_k$(
                link._get_right__3576132917_bvz45n_k$()
            );
    }
    function TypeOperator(symbol, value, position, children) {
        Operator.call(this, symbol, value, position, children);
    }
    TypeOperator.prototype.evaluate_hfj3qo_k$ = function (symbolTable) {
        var tmp0_subject = this._get_symbol__541899891_8ymsmr_k$();
        var tmp;
        switch (tmp0_subject) {
            case "is":
                tmp = Utils_getInstance().toPInt_yzud9u_k$(
                    evaluateTypeCheck(this, symbolTable)
                );
                break;
            case "!is":
                tmp = Utils_getInstance().toPInt_yzud9u_k$(
                    !evaluateTypeCheck(this, symbolTable)
                );
                break;
            default:
                var tmp_0 = symbolTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    "unknown word for operator",
                    tmp_0,
                    this,
                    null,
                    0,
                    24,
                    null
                );
        }
        return tmp;
    };
    TypeOperator.$metadata$ = {
        simpleName: "TypeOperator",
        kind: "class",
        interfaces: [],
    };
    function Assignment(symbol, value, position, children) {
        Operator.call(this, symbol, value, position, children);
        this._get_children__1387553196_my42wc_k$().clear_j9y8zo_k$();
        this._get_children__1387553196_my42wc_k$().addAll_oxxjjk_k$(children);
        Unit_getInstance();
        var tmp = this._get_left__802434852_d9qyp0_k$();
        if (!isInterface(tmp, Assignable)) {
            var tmp_0 = this._get_left__802434852_d9qyp0_k$();
            throw PositionalException_init_$Create$(
                "Left operand is not assignable",
                "",
                tmp_0,
                null,
                0,
                24,
                null
            );
        } else {
        }
        this.parent_1 = null;
        this.isProperty_1 = false;
    }
    Assignment.prototype._set_parent__1403382957_83u8iz_k$ = function (
        _set____804775014
    ) {
        this.parent_1 = _set____804775014;
    };
    Assignment.prototype._get_name__804168992_das4rk_k$ = function () {
        return this._get_left__802434852_d9qyp0_k$()._get_value__3683422336_a43j40_k$();
    };
    Assignment.prototype._set_isProperty__3775228504_p44z1r_k$ = function (
        _set____804775014
    ) {
        this.isProperty_1 = _set____804775014;
    };
    Assignment.prototype._get_isProperty__2864475980_nnoe5w_k$ = function () {
        return this.isProperty_1;
    };
    Assignment.prototype.evaluate_hfj3qo_k$ = function (symbolTable) {
        var value =
            this._get_right__3576132917_bvz45n_k$().evaluate_hfj3qo_k$(
                symbolTable
            );
        var tmp = this._get_left__802434852_d9qyp0_k$();
        var tmp_0 = isInterface(tmp, Assignable) ? tmp : THROW_CCE();
        var tmp_1;
        var tmp_2 = symbolTable.getCurrentType_n8a8z_k$();
        if (tmp_2 instanceof Type) {
            var tmp_3 = symbolTable.getCurrentType_n8a8z_k$();
            tmp_1 = tmp_3 instanceof Type ? tmp_3 : THROW_CCE();
        } else {
            {
                tmp_1 = null;
            }
        }
        tmp_0.assign_9u530r_k$(this, tmp_1, symbolTable, value);
        return value;
    };
    Assignment.prototype.getFirstUnassigned_n1eh3i_k$ = function (
        symbolTable,
        parent
    ) {
        var tmp = this._get_left__802434852_d9qyp0_k$();
        if (tmp instanceof Link) {
            var tmp_0 = this._get_left__802434852_d9qyp0_k$();
            var leftUnassigned = (
                tmp_0 instanceof Link ? tmp_0 : THROW_CCE()
            ).getFirstUnassignedOrNull_pqyzpa_k$(parent, symbolTable, true);
            if (!(leftUnassigned._get_second__4255435031_njbah_k$() == null)) {
                return leftUnassigned instanceof Pair
                    ? leftUnassigned
                    : THROW_CCE();
            }
        } else {
        }
        var tmp0_elvis_lhs =
            this._get_right__3576132917_bvz45n_k$().findUnassigned_h2swqb_k$(
                symbolTable.changeVariable_uoiydg_k$(parent),
                parent
            );
        return tmp0_elvis_lhs == null ? new Pair(parent, null) : tmp0_elvis_lhs;
    };
    Assignment.prototype.assign_bxw09h_k$ = function (parent, symbolTable) {
        parent.removeAssignment_r847vu_k$(this);
        Unit_getInstance();
        var tmp = this._get_left__802434852_d9qyp0_k$();
        (isInterface(tmp, Assignable) ? tmp : THROW_CCE()).assign_9u530r_k$(
            this,
            parent,
            symbolTable,
            this._get_right__3576132917_bvz45n_k$().evaluate_hfj3qo_k$(
                symbolTable
            )
        );
    };
    Assignment.prototype.equals = function (other) {
        if (!(other instanceof Assignment)) {
            return false;
        } else {
        }
        return this._get_left__802434852_d9qyp0_k$().equals(
            other._get_left__802434852_d9qyp0_k$()
        );
    };
    Assignment.prototype.hashCode = function () {
        return this._get_left__802434852_d9qyp0_k$().hashCode();
    };
    Assignment.$metadata$ = {
        simpleName: "Assignment",
        kind: "class",
        interfaces: [],
    };
    var CycleStatement_BREAK_instance;
    var CycleStatement_CONTINUE_instance;
    var CycleStatement_entriesInitialized;
    function CycleStatement_initEntries() {
        if (CycleStatement_entriesInitialized) return Unit_getInstance();
        CycleStatement_entriesInitialized = true;
        CycleStatement_BREAK_instance = new CycleStatement("BREAK", 0);
        CycleStatement_CONTINUE_instance = new CycleStatement("CONTINUE", 1);
    }
    function evaluateForeach($this, symbolTable) {
        var tmp0_container = getIterable($this, symbolTable);
        var iterable = tmp0_container.component1_7eebsc_k$();
        var isRange = tmp0_container.component2_7eebsb_k$();
        if (isRange) {
            var tmp$ret$2;
            $l$block_1: {
                var tmp0_map_0 = isInterface(iterable, List)
                    ? iterable
                    : THROW_CCE();
                var tmp$ret$1;
                $l$block_0: {
                    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                        collectionSizeOrDefault(tmp0_map_0, 10)
                    );
                    var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
                    while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                        var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                        var tmp$ret$0;
                        $l$block: {
                            tmp$ret$0 = item_2_3.getPValue_berniv_k$();
                            break $l$block;
                        }
                        tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
                        Unit_getInstance();
                    }
                    tmp$ret$1 = tmp0_mapTo_0_1;
                    break $l$block_0;
                }
                tmp$ret$2 = tmp$ret$1;
                break $l$block_1;
            }
            iterable = tmp$ret$2;
            var progression =
                iterable.get_fkrdnv_k$(0) < iterable.get_fkrdnv_k$(1)
                    ? numberRangeToNumber(
                          iterable.get_fkrdnv_k$(0),
                          iterable.get_fkrdnv_k$(1)
                      )
                    : downTo(
                          iterable.get_fkrdnv_k$(0),
                          iterable.get_fkrdnv_k$(1)
                      );
            var nestedFirst = progression._get_first__3232921377_hkbbvj_k$();
            var nestedLast = progression._get_last__802328181_d9oodx_k$();
            var nestedStep = progression._get_step__809345279_ddv2tb_k$();
            var stepArg = iterable.get_fkrdnv_k$(2);
            if (stepArg <= 0)
                THROW_IAE("Step must be positive, was: " + stepArg + ".");
            if (nestedStep <= 0) stepArg = -stepArg | 0;
            var inductionVariable = nestedFirst;
            var last = getProgressionLastElement(
                nestedFirst,
                nestedLast,
                stepArg
            );
            var step = stepArg;
            if (
                (step > 0 ? inductionVariable <= last : false)
                    ? true
                    : step < 0
                    ? last <= inductionVariable
                    : false
            )
                $l$loop_0: do {
                    var i = inductionVariable;
                    inductionVariable = (inductionVariable + step) | 0;
                    symbolTable.addVariable_vmj31f_k$(
                        $this
                            ._get_left__802434852_d9qyp0_k$()
                            ._get_value__3683422336_a43j40_k$(),
                        Utils_getInstance().toVariable_abd9s8_k$(
                            new PInt(i),
                            $this._get_left__802434852_d9qyp0_k$()
                        )
                    );
                    var res = $this
                        ._get_children__1387553196_my42wc_k$()
                        .get_fkrdnv_k$(2)
                        .evaluate_hfj3qo_k$(symbolTable);
                    if (equals(res, CycleStatement_CONTINUE_getInstance()))
                        continue $l$loop_0;
                    else {
                        if (equals(res, CycleStatement_BREAK_getInstance()))
                            break $l$loop_0;
                        else {
                            if (!(res instanceof Unit)) return res;
                            else {
                            }
                        }
                    }
                } while (!(i === last));
        } else {
            var tmp2_iterator = iterable.iterator_jk1svi_k$();
            $l$loop_2: while (tmp2_iterator.hasNext_bitz1p_k$()) {
                var i_0 = tmp2_iterator.next_20eer_k$();
                symbolTable.addVariable_vmj31f_k$(
                    $this
                        ._get_left__802434852_d9qyp0_k$()
                        ._get_value__3683422336_a43j40_k$(),
                    Utils_getInstance().toVariable_abd9s8_k$(
                        ensureNotNull(i_0),
                        $this._get_left__802434852_d9qyp0_k$()
                    )
                );
                var res_0 = $this
                    ._get_children__1387553196_my42wc_k$()
                    .get_fkrdnv_k$(2)
                    .evaluate_hfj3qo_k$(symbolTable);
                if (equals(res_0, CycleStatement_CONTINUE_getInstance()))
                    continue $l$loop_2;
                else {
                    if (equals(res_0, CycleStatement_BREAK_getInstance()))
                        break $l$loop_2;
                    else {
                        if (!(res_0 instanceof Unit)) return res_0;
                        else {
                        }
                    }
                }
            }
        }
        return Unit_getInstance();
    }
    function getIterable($this, symbolTable) {
        var iterable = Utils_getInstance().toVariable_abd9s8_k$(
            $this
                ._get_right__3576132917_bvz45n_k$()
                .evaluate_hfj3qo_k$(symbolTable),
            $this._get_right__3576132917_bvz45n_k$()
        );
        var tmp;
        var tmp_0 = $this._get_right__3576132917_bvz45n_k$();
        if (tmp_0 instanceof Call) {
            var tmp_1 = $this._get_right__3576132917_bvz45n_k$();
            tmp =
                (tmp_1 instanceof Call ? tmp_1 : THROW_CCE())
                    ._get_name__804168992_das4rk_k$()
                    ._get_value__3683422336_a43j40_k$() === "range";
        } else {
            {
                tmp = false;
            }
        }
        if (tmp) {
            var tmp_2 = (
                iterable instanceof Primitive ? iterable : THROW_CCE()
            ).getPValue_berniv_k$();
            return new Pair(
                isInterface(tmp_2, Iterable) ? tmp_2 : THROW_CCE(),
                true
            );
        } else {
        }
        var tmp_3;
        if (!isInterface(iterable, Indexable)) {
            tmp_3 = true;
        } else {
            {
                tmp_3 = iterable instanceof PDictionary;
            }
        }
        if (tmp_3) {
            var tmp_4 = symbolTable
                .getFileTable_m3scuc_k$()
                ._get_filePath__151144490_2hzju2_k$();
            var tmp_5 = $this._get_right__3576132917_bvz45n_k$();
            throw PositionalException_init_$Create$(
                "Expected list, string or range",
                tmp_4,
                tmp_5,
                null,
                0,
                24,
                null
            );
        } else {
        }
        iterable = (
            iterable instanceof Primitive ? iterable : THROW_CCE()
        ).getPValue_berniv_k$();
        if (typeof iterable === "string") {
            var tmp$ret$2;
            $l$block_1: {
                var tmp0_map_0 = iterable;
                var tmp$ret$1;
                $l$block_0: {
                    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                        charSequenceLength(tmp0_map_0)
                    );
                    var indexedObject = tmp0_map_0;
                    var inductionVariable = 0;
                    var last = indexedObject.length;
                    while (inductionVariable < last) {
                        var item_2_3 = charSequenceGet(
                            indexedObject,
                            inductionVariable
                        );
                        inductionVariable = (inductionVariable + 1) | 0;
                        var tmp$ret$0;
                        $l$block: {
                            tmp$ret$0 = toString_1(item_2_3);
                            break $l$block;
                        }
                        tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
                        Unit_getInstance();
                    }
                    tmp$ret$1 = tmp0_mapTo_0_1;
                    break $l$block_0;
                }
                tmp$ret$2 = tmp$ret$1;
                break $l$block_1;
            }
            iterable = tmp$ret$2;
        } else {
        }
        return new Pair(
            isInterface(iterable, Iterable) ? iterable : THROW_CCE(),
            false
        );
    }
    function evaluateCycle($this, symbolTable) {
        var condition = $this._get_left__802434852_d9qyp0_k$();
        var block = $this._get_right__3576132917_bvz45n_k$();
        $l$loop_0: while (
            Utils_getInstance().toBoolean_n1sso5_k$(
                condition.evaluate_hfj3qo_k$(symbolTable),
                condition,
                symbolTable.getFileTable_m3scuc_k$()
            )
        ) {
            var res = block.evaluate_hfj3qo_k$(symbolTable);
            if (equals(res, CycleStatement_CONTINUE_getInstance()))
                continue $l$loop_0;
            else {
                if (equals(res, CycleStatement_BREAK_getInstance()))
                    break $l$loop_0;
                else {
                    if (!(res instanceof Unit)) {
                        return res;
                    } else {
                    }
                }
            }
        }
        return Unit_getInstance();
    }
    function evaluateConditional($this, symbolTable) {
        var condition = $this._get_left__802434852_d9qyp0_k$();
        var trueBlock = $this._get_right__3576132917_bvz45n_k$();
        if (
            Utils_getInstance().toBoolean_n1sso5_k$(
                condition.evaluate_hfj3qo_k$(symbolTable),
                condition,
                symbolTable.getFileTable_m3scuc_k$()
            )
        ) {
            return trueBlock.evaluate_hfj3qo_k$(symbolTable);
        } else if (
            $this
                ._get_children__1387553196_my42wc_k$()
                ._get_size__809037418_ddoh9m_k$() === 3
        ) {
            return $this
                ._get_children__1387553196_my42wc_k$()
                .get_fkrdnv_k$(2)
                .evaluate_hfj3qo_k$(symbolTable);
        }
        return Unit_getInstance();
    }
    function evaluateBlock($this, symbolTable) {
        var tmp0_iterator = $this
            ._get_children__1387553196_my42wc_k$()
            .iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var token = tmp0_iterator.next_20eer_k$();
            if (token instanceof Block) {
                if (token._get_value__3683422336_a43j40_k$() === "{") {
                    var tmp = symbolTable
                        .getFileTable_m3scuc_k$()
                        ._get_filePath__151144490_2hzju2_k$();
                    throw PositionalException_init_$Create$(
                        "Block within a block. Maybe `if`, `else` or `while` was omitted?",
                        tmp,
                        token,
                        null,
                        0,
                        24,
                        null
                    );
                }
                var res = token.evaluate_hfj3qo_k$(symbolTable);
                if (!(res instanceof Unit)) {
                    return res;
                } else {
                }
            } else {
                {
                    var tmp1_subject = token._get_symbol__541899891_8ymsmr_k$();
                    switch (tmp1_subject) {
                        case "return":
                            var tmp_0;
                            if (
                                token
                                    ._get_children__1387553196_my42wc_k$()
                                    ._get_size__809037418_ddoh9m_k$() === 0
                            ) {
                                tmp_0 = Unit_getInstance();
                            } else {
                                tmp_0 = token
                                    ._get_left__802434852_d9qyp0_k$()
                                    .evaluate_hfj3qo_k$(symbolTable);
                            }

                            return tmp_0;
                        case "break":
                            return CycleStatement_BREAK_getInstance();
                        case "continue":
                            return CycleStatement_CONTINUE_getInstance();
                        default:
                            token.evaluate_hfj3qo_k$(symbolTable);
                            Unit_getInstance();
                            break;
                    }
                }
            }
        }
        return Unit_getInstance();
    }
    function CycleStatement(name, ordinal) {
        Enum.call(this, name, ordinal);
    }
    CycleStatement.$metadata$ = {
        simpleName: "CycleStatement",
        kind: "class",
        interfaces: [],
    };
    function CycleStatement_BREAK_getInstance() {
        CycleStatement_initEntries();
        return CycleStatement_BREAK_instance;
    }
    function CycleStatement_CONTINUE_getInstance() {
        CycleStatement_initEntries();
        return CycleStatement_CONTINUE_instance;
    }
    function Block(node) {
        Node.call(
            this,
            node._get_symbol__541899891_8ymsmr_k$(),
            node._get_value__3683422336_a43j40_k$(),
            node._get_position__3188952002_iahqv2_k$(),
            node._get_children__1387553196_my42wc_k$()
        );
    }
    Block.prototype.evaluate_hfj3qo_k$ = function (symbolTable) {
        var tmp0_subject = this._get_symbol__541899891_8ymsmr_k$();
        var tmp;
        switch (tmp0_subject) {
            case "{":
                tmp = evaluateBlock(this, symbolTable);
                break;
            case "if":
                tmp = evaluateConditional(this, symbolTable);
                break;
            case "while":
                tmp = evaluateCycle(this, symbolTable);
                break;
            case "foreach":
                tmp = evaluateForeach(this, symbolTable);
                break;
            default:
                var tmp_0 = symbolTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    "Not a block",
                    tmp_0,
                    this,
                    null,
                    0,
                    24,
                    null
                );
        }
        return tmp;
    };
    Block.$metadata$ = {
        simpleName: "Block",
        kind: "class",
        interfaces: [],
    };
    function WordStatement(node) {
        Node.call(
            this,
            node._get_symbol__541899891_8ymsmr_k$(),
            node._get_value__3683422336_a43j40_k$(),
            node._get_position__3188952002_iahqv2_k$(),
            node._get_children__1387553196_my42wc_k$()
        );
    }
    WordStatement.prototype.evaluate_hfj3qo_k$ = function (symbolTable) {
        var tmp0_subject = this._get_symbol__541899891_8ymsmr_k$();
        var tmp;
        switch (tmp0_subject) {
            case "while":
                var tmp_0 = symbolTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    "while out of place",
                    tmp_0,
                    this,
                    null,
                    0,
                    24,
                    null
                );
            case "return":
                var tmp_1;
                if (
                    this._get_children__1387553196_my42wc_k$()._get_size__809037418_ddoh9m_k$() ===
                    0
                ) {
                    tmp_1 = Unit_getInstance();
                } else {
                    tmp_1 =
                        this._get_left__802434852_d9qyp0_k$().evaluate_hfj3qo_k$(
                            symbolTable
                        );
                }

                tmp = tmp_1;
                break;
            case "break":
                var tmp_2 = symbolTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    "break out of place",
                    tmp_2,
                    this,
                    null,
                    0,
                    24,
                    null
                );
            case "continue":
                var tmp_3 = symbolTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    "continue out of place",
                    tmp_3,
                    this,
                    null,
                    0,
                    24,
                    null
                );
            default:
                var tmp_4 = symbolTable
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    "Unexpected token",
                    tmp_4,
                    this,
                    null,
                    0,
                    24,
                    null
                );
        }
        return tmp;
    };
    WordStatement.$metadata$ = {
        simpleName: "WordStatement",
        kind: "class",
        interfaces: [],
    };
    function NodeDictionary(node) {
        Node.call(
            this,
            node._get_symbol__541899891_8ymsmr_k$(),
            node._get_value__3683422336_a43j40_k$(),
            node._get_position__3188952002_iahqv2_k$(),
            node._get_children__1387553196_my42wc_k$()
        );
    }
    NodeDictionary.prototype.evaluate_hfj3qo_k$ = function (symbolTable) {
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_associate_0 = this._get_children__1387553196_my42wc_k$();
            var capacity_1 = coerceAtLeast(
                mapCapacity(collectionSizeOrDefault(tmp0_associate_0, 10)),
                16
            );
            var tmp$ret$1;
            $l$block_0: {
                var tmp1_associateTo_0_2 =
                    LinkedHashMap_init_$Create$_0(capacity_1);
                var tmp0_iterator_1_3 = tmp0_associate_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_3.hasNext_bitz1p_k$()) {
                    var element_2_4 = tmp0_iterator_1_3.next_20eer_k$();
                    {
                        var tmp$ret$0;
                        $l$block: {
                            tmp$ret$0 = new Pair(
                                Utils_getInstance().toVariable_abd9s8_k$(
                                    element_2_4
                                        ._get_left__802434852_d9qyp0_k$()
                                        .evaluate_hfj3qo_k$(symbolTable),
                                    element_2_4._get_left__802434852_d9qyp0_k$()
                                ),
                                Utils_getInstance().toVariable_abd9s8_k$(
                                    element_2_4
                                        ._get_right__3576132917_bvz45n_k$()
                                        .evaluate_hfj3qo_k$(symbolTable),
                                    element_2_4._get_right__3576132917_bvz45n_k$()
                                )
                            );
                            break $l$block;
                        }
                        var tmp0_plusAssign_0_5 = tmp$ret$0;
                        tmp1_associateTo_0_2.put_3mhbri_k$(
                            tmp0_plusAssign_0_5._get_first__3232921377_hkbbvj_k$(),
                            tmp0_plusAssign_0_5._get_second__4255435031_njbah_k$()
                        );
                        Unit_getInstance();
                    }
                }
                tmp$ret$1 = tmp1_associateTo_0_2;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        return toMutableMap(tmp$ret$2);
    };
    NodeDictionary.$metadata$ = {
        simpleName: "NodeDictionary",
        kind: "class",
        interfaces: [],
    };
    function NodeList(node) {
        Node.call(
            this,
            node._get_symbol__541899891_8ymsmr_k$(),
            node._get_value__3683422336_a43j40_k$(),
            node._get_position__3188952002_iahqv2_k$(),
            node._get_children__1387553196_my42wc_k$()
        );
    }
    NodeList.prototype.evaluate_hfj3qo_k$ = function (symbolTable) {
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_map_0 = this._get_children__1387553196_my42wc_k$();
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(tmp0_map_0, 10)
                );
                var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = Utils_getInstance().toVariable_abd9s8_k$(
                            item_2_3.evaluate_hfj3qo_k$(symbolTable),
                            item_2_3
                        );
                        break $l$block;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
                    Unit_getInstance();
                }
                tmp$ret$1 = tmp0_mapTo_0_1;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        return toMutableList(tmp$ret$2);
    };
    NodeList.$metadata$ = {
        simpleName: "NodeList",
        kind: "class",
        interfaces: [],
    };
    function NodeNull(position) {
        Node_init_$Init$("(NULL)", "null", position, null, 8, null, this);
    }
    NodeNull.prototype.evaluate_hfj3qo_k$ = function (symbolTable) {
        return Utils_getInstance()._get_NULL__774226340_csycv8_k$();
    };
    NodeNull.$metadata$ = {
        simpleName: "NodeNull",
        kind: "class",
        interfaces: [],
    };
    function NodeNumber(value, position, number, isDouble) {
        Node_init_$Init$("(NUMBER)", value, position, null, 8, null, this);
        this.number_1 = number;
        this.isDouble_1 = isDouble;
    }
    NodeNumber.prototype.evaluate_hfj3qo_k$ = function (symbolTable) {
        return this.isDouble_1
            ? new PDouble(numberToDouble(this.number_1))
            : new PInt(numberToInt(this.number_1));
    };
    NodeNumber.$metadata$ = {
        simpleName: "NodeNumber",
        kind: "class",
        interfaces: [],
    };
    function NodeString(symbol, value, position) {
        Node_init_$Init$(symbol, value, position, null, 8, null, this);
    }
    NodeString.prototype.evaluate_hfj3qo_k$ = function (symbolTable) {
        return this._get_value__3683422336_a43j40_k$();
    };
    NodeString.$metadata$ = {
        simpleName: "NodeString",
        kind: "class",
        interfaces: [],
    };
    function Containerable() {}
    Containerable.$metadata$ = {
        simpleName: "Containerable",
        kind: "interface",
        interfaces: [],
    };
    function EmbeddedFunction_init_$Init$(
        name,
        args,
        namedArgs,
        execute,
        $mask0,
        $marker,
        $this
    ) {
        if (!(($mask0 & 2) === 0)) {
            var tmp$ret$0;
            var tmp$ret$0_0;
            $l$block: {
                tmp$ret$0 = emptyList();
                tmp$ret$0_0 = Unit_getInstance();
                break $l$block;
            }
            args = tmp$ret$0;
        }
        if (!(($mask0 & 4) === 0)) {
            var tmp$ret$0_1;
            var tmp$ret$1;
            $l$block_0: {
                tmp$ret$0_1 = emptyList();
                tmp$ret$1 = Unit_getInstance();
                break $l$block_0;
            }
            namedArgs = tmp$ret$0_1;
        }
        EmbeddedFunction.call($this, name, args, namedArgs, execute);
        return $this;
    }
    function EmbeddedFunction_init_$Create$(
        name,
        args,
        namedArgs,
        execute,
        $mask0,
        $marker
    ) {
        return EmbeddedFunction_init_$Init$(
            name,
            args,
            namedArgs,
            execute,
            $mask0,
            $marker,
            Object.create(EmbeddedFunction.prototype)
        );
    }
    function EmbeddedFunction(name, args, namedArgs, execute) {
        var tmp$ret$4;
        $l$block_1: {
            var tmp$ret$3;
            $l$block_0: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(args, 10)
                );
                var tmp0_iterator_1_2 = args.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$2;
                    $l$block: {
                        tmp$ret$2 = Identifier_init_$Create$(item_2_3);
                        break $l$block;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$2);
                    Unit_getInstance();
                }
                tmp$ret$3 = tmp0_mapTo_0_1;
                break $l$block_0;
            }
            tmp$ret$4 = tmp$ret$3;
            break $l$block_1;
        }
        var tmp = tmp$ret$4;
        var tmp$ret$7;
        $l$block_4: {
            var tmp$ret$6;
            $l$block_3: {
                var tmp0_mapTo_0_1_0 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(namedArgs, 10)
                );
                var tmp0_iterator_1_2_0 = namedArgs.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2_0.hasNext_bitz1p_k$()) {
                    var item_2_3_0 = tmp0_iterator_1_2_0.next_20eer_k$();
                    var tmp$ret$5;
                    $l$block_2: {
                        tmp$ret$5 =
                            Utils_getInstance().parseAssignment_qe0mu7_k$(
                                item_2_3_0
                            );
                        break $l$block_2;
                    }
                    tmp0_mapTo_0_1_0.add_1j60pz_k$(tmp$ret$5);
                    Unit_getInstance();
                }
                tmp$ret$6 = tmp0_mapTo_0_1_0;
                break $l$block_3;
            }
            tmp$ret$7 = tmp$ret$6;
            break $l$block_4;
        }
        var tmp_0 = tmp$ret$7;
        RFunction.call(
            this,
            name,
            tmp,
            tmp_0,
            Node_init_$Create$(null, null, null, null, 15, null)
        );
        this.execute_1 = execute;
    }
    EmbeddedFunction.prototype.executeFunction_v9v8tp_k$ = function (
        node,
        symbolTable
    ) {
        return this.execute_1(node, symbolTable);
    };
    EmbeddedFunction.$metadata$ = {
        simpleName: "EmbeddedFunction",
        kind: "class",
        interfaces: [],
    };
    function Companion() {
        Companion_instance = this;
        var tmp = this;
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = ArrayList_init_$Create$();
            break $l$block;
        }
        tmp.functions_1 = tmp$ret$0;
    }
    Companion.$metadata$ = {
        simpleName: "Companion",
        kind: "object",
        interfaces: [],
    };
    var Companion_instance;
    function Companion_getInstance() {
        if (Companion_instance == null) new Companion();
        return Companion_instance;
    }
    function Null() {
        Companion_getInstance();
        Property.call(this);
    }
    Null.prototype.getPropertyOrNull_191djg_k$ = function (name) {
        return null;
    };
    Null.prototype.getProperty_qi6v9p_k$ = function (node, fileTable) {
        {
            throw new NotImplementedError(
                "An operation is not implemented: Not yet implemented"
            );
        }
    };
    Null.prototype.getFunctionOrNull_p690c9_k$ = function (node) {
        var tmp = Companion_getInstance_0();
        return tmp.getFunctionOrNull_p6a1z1_k$(
            node instanceof Call ? node : THROW_CCE(),
            Companion_getInstance().functions_1
        );
    };
    Null.prototype.getFunction_ken7yo_k$ = function (node, fileTable) {
        var tmp0_elvis_lhs = this.getFunctionOrNull_p690c9_k$(node);
        var tmp;
        if (tmp0_elvis_lhs == null) {
            var tmp_0 = fileTable._get_filePath__151144490_2hzju2_k$();
            throw PositionalException_init_$Create$(
                "null does not contain function",
                tmp_0,
                node,
                null,
                0,
                24,
                null
            );
        } else {
            tmp = tmp0_elvis_lhs;
        }
        return tmp;
    };
    Null.prototype.toDebugClass_dfj843_k$ = function (references, copying) {
        return new Pair("Null", "");
    };
    Null.prototype.toString = function () {
        return "null";
    };
    Null.$metadata$ = {
        simpleName: "Null",
        kind: "class",
        interfaces: [],
    };
    function Object_0(name, assignments, fileTable) {
        Type_init_$Init$(
            name,
            assignments,
            fileTable,
            0,
            null,
            null,
            48,
            null,
            this
        );
    }
    Object_0.prototype.getProperty_qi6v9p_k$ = function (node, fileTable) {
        if (
            !(
                this._get_properties__3765791160_8r22x4_k$().get_1mhr4y_k$(
                    node._get_value__3683422336_a43j40_k$()
                ) == null
            )
        ) {
            return ensureNotNull(
                this._get_properties__3765791160_8r22x4_k$().get_1mhr4y_k$(
                    node._get_value__3683422336_a43j40_k$()
                )
            );
        }
        var tmp$ret$2;
        $l$block_2: {
            var tmp0_find_0 = this._get_assignments__50188043_tvpcb_k$();
            var tmp$ret$1;
            $l$block_1: {
                var tmp0_iterator_1_1 = tmp0_find_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_1.hasNext_bitz1p_k$()) {
                    var element_2_2 = tmp0_iterator_1_1.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 =
                            element_2_2
                                ._get_left__802434852_d9qyp0_k$()
                                ._get_value__3683422336_a43j40_k$() ===
                            node._get_value__3683422336_a43j40_k$();
                        break $l$block;
                    }
                    if (tmp$ret$0) {
                        tmp$ret$1 = element_2_2;
                        break $l$block_1;
                    } else {
                    }
                }
                tmp$ret$1 = null;
                break $l$block_1;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_2;
        }
        var assignment = tmp$ret$2;
        if (!(assignment == null)) {
            var tmp = Companion_getInstance_1();
            var tmp_0 = SymbolTable_init_$Create$(
                null,
                null,
                fileTable,
                ResolvingMode_OBJECT_getInstance(),
                3,
                null
            );
            var tmp_1 = mutableListOf([new Pair(this, assignment)]);
            var tmp$ret$3;
            $l$block_3: {
                tmp$ret$3 = LinkedHashSet_init_$Create$();
                break $l$block_3;
            }
            tmp.processAssignment_ahktbi_k$(tmp_0, tmp_1, tmp$ret$3);
            return ensureNotNull(
                this._get_properties__3765791160_8r22x4_k$().get_1mhr4y_k$(
                    node._get_value__3683422336_a43j40_k$()
                )
            );
        }
        var tmp_2 = fileTable._get_filePath__151144490_2hzju2_k$();
        throw PositionalException_init_$Create$(
            "Property not found",
            tmp_2,
            node,
            null,
            0,
            24,
            null
        );
    };
    Object_0.prototype.toString = function () {
        var tmp$ret$0;
        $l$block: {
            var tmp0_isEmpty_0 =
                this._get_fileTable__504497375_8cd4nz_k$()._get_filePath__151144490_2hzju2_k$();
            tmp$ret$0 = charSequenceLength(tmp0_isEmpty_0) === 0;
            break $l$block;
        }
        if (tmp$ret$0) throw Exception_init_$Create$("Empty fileTable name");
        else {
        }
        var tmp;
        var tmp_0 =
            this._get_fileTable__504497375_8cd4nz_k$()._get_filePath__151144490_2hzju2_k$();
        if (contains$default(tmp_0, "/", false, 2, null)) {
            var tmp_1 =
                this._get_fileTable__504497375_8cd4nz_k$()._get_filePath__151144490_2hzju2_k$();
            tmp = first_1(
                last_0(split$default(tmp_1, ["/"], false, 0, 6, null))
            );
        } else {
            {
                tmp = first_1(
                    this._get_fileTable__504497375_8cd4nz_k$()._get_filePath__151144490_2hzju2_k$()
                );
            }
        }
        var fileLetter = tmp;
        return (
            this._get_name__804168992_das4rk_k$() +
            "-" +
            new Char(fileLetter) +
            "O"
        );
    };
    Object_0.prototype.getDebugId_sdwqy0_k$ = function () {
        return new Pair("Object", this.toString());
    };
    Object_0.prototype.getPropertyOrNull_191djg_k$ = function (name) {
        if (
            !(
                this._get_properties__3765791160_8r22x4_k$().get_1mhr4y_k$(
                    name
                ) == null
            )
        ) {
            return ensureNotNull(
                this._get_properties__3765791160_8r22x4_k$().get_1mhr4y_k$(name)
            );
        }
        var tmp$ret$2;
        $l$block_2: {
            var tmp0_find_0 = this._get_assignments__50188043_tvpcb_k$();
            var tmp$ret$1;
            $l$block_1: {
                var tmp0_iterator_1_1 = tmp0_find_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_1.hasNext_bitz1p_k$()) {
                    var element_2_2 = tmp0_iterator_1_1.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 =
                            element_2_2
                                ._get_left__802434852_d9qyp0_k$()
                                ._get_value__3683422336_a43j40_k$() === name;
                        break $l$block;
                    }
                    if (tmp$ret$0) {
                        tmp$ret$1 = element_2_2;
                        break $l$block_1;
                    } else {
                    }
                }
                tmp$ret$1 = null;
                break $l$block_1;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_2;
        }
        var assignment = tmp$ret$2;
        if (!(assignment == null)) {
            var tmp = Companion_getInstance_1();
            var tmp_0 = SymbolTable_init_$Create$(
                null,
                null,
                this._get_fileTable__504497375_8cd4nz_k$(),
                ResolvingMode_OBJECT_getInstance(),
                3,
                null
            );
            var tmp_1 = mutableListOf([new Pair(this, assignment)]);
            var tmp$ret$3;
            $l$block_3: {
                tmp$ret$3 = LinkedHashSet_init_$Create$();
                break $l$block_3;
            }
            tmp.processAssignment_ahktbi_k$(tmp_0, tmp_1, tmp$ret$3);
            return ensureNotNull(
                this._get_properties__3765791160_8r22x4_k$().get_1mhr4y_k$(name)
            );
        }
        return null;
    };
    Object_0.prototype.resolveAllProperties_wubtih_k$ = function () {
        var tmp0_iterator =
            this._get_assignments__50188043_tvpcb_k$().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var a = tmp0_iterator.next_20eer_k$();
            this.getPropertyOrNull_191djg_k$(
                a._get_name__804168992_das4rk_k$()
            );
            Unit_getInstance();
        }
    };
    Object_0.prototype.getFunction_ken7yo_k$ = function (node, fileTable) {
        var tmp0_elvis_lhs = this.getFunctionOrNull_p690c9_k$(node);
        var tmp;
        if (tmp0_elvis_lhs == null) {
            var tmp_0 =
                "Object `" +
                this._get_name__804168992_das4rk_k$() +
                "` does not contain function";
            var tmp_1 = fileTable._get_filePath__151144490_2hzju2_k$();
            throw PositionalException_init_$Create$(
                tmp_0,
                tmp_1,
                node,
                null,
                0,
                24,
                null
            );
        } else {
            tmp = tmp0_elvis_lhs;
        }
        return tmp;
    };
    Object_0.prototype.equals = function (other) {
        return this === other;
    };
    Object_0.$metadata$ = {
        simpleName: "Object",
        kind: "class",
        interfaces: [],
    };
    function Property() {
        Variable.call(this);
    }
    Property.$metadata$ = {
        simpleName: "Property",
        kind: "class",
        interfaces: [],
    };
    function Companion_0() {
        Companion_instance_0 = this;
    }
    Companion_0.prototype.getFunctionOrNull_p6a1z1_k$ = function (
        call,
        functions
    ) {
        var tmp$ret$2;
        $l$block_1: {
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_filterTo_0_1 = ArrayList_init_$Create$();
                var tmp0_iterator_1_2 = functions.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var element_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = (
                            element_2_3.name_1 ===
                            call
                                ._get_name__804168992_das4rk_k$()
                                ._get_value__3683422336_a43j40_k$()
                                ? element_2_3.nonDefaultParams_1._get_size__809037418_ddoh9m_k$() <=
                                  call
                                      ._get_allArgs__3896514739_6l87yl_k$()
                                      ._get_size__809037418_ddoh9m_k$()
                                : false
                        )
                            ? ((element_2_3.nonDefaultParams_1._get_size__809037418_ddoh9m_k$() +
                                  element_2_3.defaultParams_1._get_size__809037418_ddoh9m_k$()) |
                                  0) >=
                              call
                                  ._get_allArgs__3896514739_6l87yl_k$()
                                  ._get_size__809037418_ddoh9m_k$()
                            : false;
                        break $l$block;
                    }
                    if (tmp$ret$0) {
                        tmp0_filterTo_0_1.add_1j60pz_k$(element_2_3);
                        Unit_getInstance();
                    } else {
                    }
                }
                tmp$ret$1 = tmp0_filterTo_0_1;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        var candidates = tmp$ret$2;
        var unnamedArgsRemoved = 0;
        var tmp$ret$10;
        $l$block_12: {
            var tmp0_filter_0 = candidates;
            var tmp$ret$9;
            $l$block_11: {
                var tmp0_filterTo_0_1_0 = ArrayList_init_$Create$();
                var tmp0_iterator_1_2_0 = tmp0_filter_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2_0.hasNext_bitz1p_k$()) {
                    var element_2_3_0 = tmp0_iterator_1_2_0.next_20eer_k$();
                    var tmp$ret$8;
                    $l$block_10: {
                        unnamedArgsRemoved = 0;
                        var tmp;
                        var tmp$ret$3;
                        $l$block_9: {
                            var tmp0_all_0_5 =
                                call._get_namedArgs__2678919515_qq5ig5_k$();
                            var tmp_0;
                            if (isInterface(tmp0_all_0_5, Collection)) {
                                tmp_0 = tmp0_all_0_5.isEmpty_y1axqb_k$();
                            } else {
                                {
                                    tmp_0 = false;
                                }
                            }
                            if (tmp_0) {
                                tmp$ret$3 = true;
                                break $l$block_9;
                            } else {
                            }
                            var tmp0_iterator_1_6 =
                                tmp0_all_0_5.iterator_jk1svi_k$();
                            while (tmp0_iterator_1_6.hasNext_bitz1p_k$()) {
                                var element_2_7 =
                                    tmp0_iterator_1_6.next_20eer_k$();
                                var tmp$ret$7;
                                $l$block_7: {
                                    var tmp$ret$6;
                                    $l$block_6: {
                                        var tmp0_find_0_4_8 =
                                            element_2_3_0.nonDefaultParams_1;
                                        var tmp$ret$5;
                                        $l$block_5: {
                                            var tmp0_iterator_1_1_5_9 =
                                                tmp0_find_0_4_8.iterator_jk1svi_k$();
                                            while (
                                                tmp0_iterator_1_1_5_9.hasNext_bitz1p_k$()
                                            ) {
                                                var element_2_2_6_10 =
                                                    tmp0_iterator_1_1_5_9.next_20eer_k$();
                                                var tmp$ret$4;
                                                $l$block_3: {
                                                    tmp$ret$4 =
                                                        element_2_2_6_10._get_value__3683422336_a43j40_k$() ===
                                                        element_2_7._get_name__804168992_das4rk_k$();
                                                    break $l$block_3;
                                                }
                                                if (tmp$ret$4) {
                                                    tmp$ret$5 =
                                                        element_2_2_6_10;
                                                    break $l$block_5;
                                                } else {
                                                }
                                            }
                                            tmp$ret$5 = null;
                                            break $l$block_5;
                                        }
                                        tmp$ret$6 = tmp$ret$5;
                                        break $l$block_6;
                                    }
                                    if (!(tmp$ret$6 == null)) {
                                        var tmp0_7_11 = unnamedArgsRemoved;
                                        unnamedArgsRemoved =
                                            (tmp0_7_11 + 1) | 0;
                                        Unit_getInstance();
                                    } else {
                                    }
                                    tmp$ret$7 =
                                        element_2_3_0.hasParam_fjo57y_k$(
                                            element_2_7._get_name__804168992_das4rk_k$()
                                        );
                                    break $l$block_7;
                                }
                                if (!tmp$ret$7) {
                                    tmp$ret$3 = false;
                                    break $l$block_9;
                                } else {
                                }
                            }
                            tmp$ret$3 = true;
                            break $l$block_9;
                        }
                        if (tmp$ret$3) {
                            tmp =
                                ((element_2_3_0.nonDefaultParams_1._get_size__809037418_ddoh9m_k$() -
                                    unnamedArgsRemoved) |
                                    0) <=
                                call
                                    ._get_unnamedArgs__3467525108_domyh8_k$()
                                    ._get_size__809037418_ddoh9m_k$();
                        } else {
                            {
                                tmp = false;
                            }
                        }
                        tmp$ret$8 = tmp;
                        break $l$block_10;
                    }
                    if (tmp$ret$8) {
                        tmp0_filterTo_0_1_0.add_1j60pz_k$(element_2_3_0);
                        Unit_getInstance();
                    } else {
                    }
                }
                tmp$ret$9 = tmp0_filterTo_0_1_0;
                break $l$block_11;
            }
            tmp$ret$10 = tmp$ret$9;
            break $l$block_12;
        }
        candidates = tmp$ret$10;
        var tmp$ret$11;
        $l$block_17: {
            var tmp1_minByOrNull_0 = candidates;
            var iterator_1 = tmp1_minByOrNull_0.iterator_jk1svi_k$();
            if (!iterator_1.hasNext_bitz1p_k$()) {
                tmp$ret$11 = null;
                break $l$block_17;
            }
            var minElem_2 = iterator_1.next_20eer_k$();
            if (!iterator_1.hasNext_bitz1p_k$()) {
                tmp$ret$11 = minElem_2;
                break $l$block_17;
            }
            var tmp$ret$12;
            $l$block_15: {
                var tmp2__anonymous__6_1215738848 = minElem_2;
                tmp$ret$12 =
                    (tmp2__anonymous__6_1215738848.defaultParams_1._get_size__809037418_ddoh9m_k$() +
                        tmp2__anonymous__6_1215738848.nonDefaultParams_1._get_size__809037418_ddoh9m_k$()) |
                    0;
                break $l$block_15;
            }
            var minValue_3 = tmp$ret$12;
            do {
                var e_4 = iterator_1.next_20eer_k$();
                var tmp$ret$13;
                $l$block_16: {
                    tmp$ret$13 =
                        (e_4.defaultParams_1._get_size__809037418_ddoh9m_k$() +
                            e_4.nonDefaultParams_1._get_size__809037418_ddoh9m_k$()) |
                        0;
                    break $l$block_16;
                }
                var v_5 = tmp$ret$13;
                if (compareTo(minValue_3, v_5) > 0) {
                    minElem_2 = e_4;
                    minValue_3 = v_5;
                }
            } while (iterator_1.hasNext_bitz1p_k$());
            tmp$ret$11 = minElem_2;
            break $l$block_17;
        }
        return tmp$ret$11;
    };
    Companion_0.$metadata$ = {
        simpleName: "Companion",
        kind: "object",
        interfaces: [],
    };
    var Companion_instance_0;
    function Companion_getInstance_0() {
        if (Companion_instance_0 == null) new Companion_0();
        return Companion_instance_0;
    }
    function RFunction(name, nonDefaultParams, defaultParams, body) {
        Companion_getInstance_0();
        this.name_1 = name;
        this.nonDefaultParams_1 = nonDefaultParams;
        this.defaultParams_1 = defaultParams;
        this.body_1 = body;
    }
    RFunction.prototype._get_name__804168992_das4rk_k$ = function () {
        return this.name_1;
    };
    RFunction.prototype._get_nonDefaultParams__3666398385_ae8evj_k$ =
        function () {
            return this.nonDefaultParams_1;
        };
    RFunction.prototype._get_defaultParams__1735937674_spj62y_k$ = function () {
        return this.defaultParams_1;
    };
    RFunction.prototype._get_body__793495785_d4fd9l_k$ = function () {
        return this.body_1;
    };
    RFunction.prototype.toString = function () {
        return (
            this.name_1 +
            "(" +
            joinToString$default(
                this.nonDefaultParams_1,
                ",",
                null,
                null,
                0,
                null,
                null,
                62,
                null
            ) +
            ")"
        );
    };
    RFunction.prototype.equals = function (other) {
        if (this === other) return true;
        if (!(other instanceof RFunction)) return false;
        else {
        }
        if (
            !(
                ((this.nonDefaultParams_1._get_size__809037418_ddoh9m_k$() +
                    this.defaultParams_1._get_size__809037418_ddoh9m_k$()) |
                    0) ===
                ((other.nonDefaultParams_1._get_size__809037418_ddoh9m_k$() +
                    other.defaultParams_1._get_size__809037418_ddoh9m_k$()) |
                    0)
            )
        ) {
            return false;
        }
        if (!(this.name_1 === other.name_1)) return false;
        return true;
    };
    RFunction.prototype.hasParam_fjo57y_k$ = function (name) {
        var tmp;
        var tmp$ret$0;
        $l$block_2: {
            var tmp0_any_0 = this.nonDefaultParams_1;
            var tmp_0;
            if (isInterface(tmp0_any_0, Collection)) {
                tmp_0 = tmp0_any_0.isEmpty_y1axqb_k$();
            } else {
                {
                    tmp_0 = false;
                }
            }
            if (tmp_0) {
                tmp$ret$0 = false;
                break $l$block_2;
            } else {
            }
            var tmp0_iterator_1 = tmp0_any_0.iterator_jk1svi_k$();
            while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
                var element_2 = tmp0_iterator_1.next_20eer_k$();
                var tmp$ret$1;
                $l$block_0: {
                    tmp$ret$1 =
                        element_2._get_value__3683422336_a43j40_k$() === name;
                    break $l$block_0;
                }
                if (tmp$ret$1) {
                    tmp$ret$0 = true;
                    break $l$block_2;
                } else {
                }
            }
            tmp$ret$0 = false;
            break $l$block_2;
        }
        if (tmp$ret$0) {
            tmp = true;
        } else {
            {
                var tmp$ret$2;
                $l$block_6: {
                    var tmp1_any_0 = this.defaultParams_1;
                    var tmp_1;
                    if (isInterface(tmp1_any_0, Collection)) {
                        tmp_1 = tmp1_any_0.isEmpty_y1axqb_k$();
                    } else {
                        {
                            tmp_1 = false;
                        }
                    }
                    if (tmp_1) {
                        tmp$ret$2 = false;
                        break $l$block_6;
                    } else {
                    }
                    var tmp0_iterator_1_0 = tmp1_any_0.iterator_jk1svi_k$();
                    while (tmp0_iterator_1_0.hasNext_bitz1p_k$()) {
                        var element_2_0 = tmp0_iterator_1_0.next_20eer_k$();
                        var tmp$ret$3;
                        $l$block_4: {
                            tmp$ret$3 =
                                element_2_0._get_name__804168992_das4rk_k$() ===
                                name;
                            break $l$block_4;
                        }
                        if (tmp$ret$3) {
                            tmp$ret$2 = true;
                            break $l$block_6;
                        } else {
                        }
                    }
                    tmp$ret$2 = false;
                    break $l$block_6;
                }
                tmp = tmp$ret$2;
            }
        }
        return tmp;
    };
    RFunction.prototype.hashCode = function () {
        var result = getStringHashCode(this.name_1);
        result =
            (imul(31, result) +
                ((this.nonDefaultParams_1._get_size__809037418_ddoh9m_k$() +
                    this.defaultParams_1._get_size__809037418_ddoh9m_k$()) |
                    0)) |
            0;
        return result;
    };
    RFunction.$metadata$ = {
        simpleName: "RFunction",
        kind: "class",
        interfaces: [],
    };
    function containerBfs($this, containerStack, visited, visitedTypes) {
        var tmp0_iterator = last_0(containerStack)
            .getCollection_xq05f0_k$()
            .iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var i = tmp0_iterator.next_20eer_k$();
            var tmp1_subject = i;
            if (tmp1_subject instanceof Type) {
                if (!visitedTypes.contains_2ehdt1_k$(toString_0(i))) {
                    var res = bfs($this, i, visitedTypes);
                    if (!(res == null)) return res;
                }
            } else {
                if (isInterface(tmp1_subject, Containerable)) {
                    if (
                        !visited.contains_2ehdt1_k$(
                            i.getContainerId_75kvy2_k$()
                        )
                    ) {
                        containerStack.add_1j60pz_k$(i);
                        Unit_getInstance();
                        var res_0 = containerBfs(
                            $this,
                            containerStack,
                            visited,
                            visitedTypes
                        );
                        if (!(res_0 == null)) return res_0;
                    }
                } else {
                }
            }
        }
        visited.add_1j60pz_k$(
            removeLast(containerStack).getContainerId_75kvy2_k$()
        );
        Unit_getInstance();
        return null;
    }
    function bfs($this, root, visited) {
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = ArrayList_init_$Create$();
            break $l$block;
        }
        var stack = tmp$ret$0;
        var tmp$ret$1;
        $l$block_0: {
            tmp$ret$1 = LinkedHashSet_init_$Create$();
            break $l$block_0;
        }
        var currentlyVisited = tmp$ret$1;
        stack.add_1j60pz_k$(root);
        Unit_getInstance();
        $l$loop: while (true) {
            var tmp$ret$2;
            $l$block_1: {
                tmp$ret$2 = !stack.isEmpty_y1axqb_k$();
                break $l$block_1;
            }
            if (!tmp$ret$2) {
                break $l$loop;
            }
            var current = removeLast(stack);
            var tmp$ret$3;
            $l$block_2: {
                var tmp0_isNotEmpty_0 = current.assignments_1;
                tmp$ret$3 = !tmp0_isNotEmpty_0.isEmpty_y1axqb_k$();
                break $l$block_2;
            }
            if (tmp$ret$3)
                return new Pair(current, first_0(current.assignments_1));
            else {
            }
            var currentId = current.toString();
            if (
                !visited.contains_2ehdt1_k$(currentId)
                    ? !currentlyVisited.contains_2ehdt1_k$(currentId)
                    : false
            ) {
                currentlyVisited.add_1j60pz_k$(currentId);
                Unit_getInstance();
                var tmp$ret$5;
                $l$block_4: {
                    var tmp1_filterIsInstance_0 =
                        current.properties_1._get_values__2516944425_tel787_k$();
                    var tmp$ret$4;
                    $l$block_3: {
                        var tmp0_filterIsInstanceTo_0_1 =
                            ArrayList_init_$Create$();
                        var tmp0_iterator_1_2 =
                            tmp1_filterIsInstance_0.iterator_jk1svi_k$();
                        while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                            var element_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                            if (element_2_3 instanceof Type) {
                                tmp0_filterIsInstanceTo_0_1.add_1j60pz_k$(
                                    element_2_3
                                );
                                Unit_getInstance();
                            } else {
                            }
                        }
                        tmp$ret$4 = tmp0_filterIsInstanceTo_0_1;
                        break $l$block_3;
                    }
                    tmp$ret$5 = tmp$ret$4;
                    break $l$block_4;
                }
                var properties = tmp$ret$5;
                var tmp$ret$8;
                $l$block_7: {
                    var tmp$ret$7;
                    $l$block_6: {
                        var tmp0_filterTo_0_1 = ArrayList_init_$Create$();
                        var tmp0_iterator_1_2_0 =
                            properties.iterator_jk1svi_k$();
                        while (tmp0_iterator_1_2_0.hasNext_bitz1p_k$()) {
                            var element_2_3_0 =
                                tmp0_iterator_1_2_0.next_20eer_k$();
                            var tmp$ret$6;
                            $l$block_5: {
                                var id_5 = element_2_3_0.toString();
                                tmp$ret$6 = !visited.contains_2ehdt1_k$(id_5)
                                    ? !currentlyVisited.contains_2ehdt1_k$(id_5)
                                    : false;
                                break $l$block_5;
                            }
                            if (tmp$ret$6) {
                                tmp0_filterTo_0_1.add_1j60pz_k$(element_2_3_0);
                                Unit_getInstance();
                            } else {
                            }
                        }
                        tmp$ret$7 = tmp0_filterTo_0_1;
                        break $l$block_6;
                    }
                    tmp$ret$8 = tmp$ret$7;
                    break $l$block_7;
                }
                stack.addAll_oxxjjk_k$(tmp$ret$8);
                Unit_getInstance();
            }
        }
        visited.addAll_oxxjjk_k$(currentlyVisited);
        Unit_getInstance();
        return null;
    }
    function afterAllBfs($this, visited, stack, symbolTable) {
        var condition = Type$Companion$afterAllBfs$lambda(visited);
        $l$loop: while (true) {
            var tmp$ret$0;
            $l$block: {
                tmp$ret$0 = !stack.isEmpty_y1axqb_k$();
                break $l$block;
            }
            if (!tmp$ret$0) {
                break $l$loop;
            }
            var current = removeLast(stack);
            var tmp;
            if (current instanceof Type) {
                tmp = !visited.contains_2ehdt1_k$(toString_0(current));
            } else {
                {
                    tmp = false;
                }
            }
            if (tmp) {
                visited.add_1j60pz_k$(toString_0(current));
                Unit_getInstance();
                current.callAfter_cx3tt8_k$(symbolTable, true);
                var tmp$ret$2;
                $l$block_1: {
                    var tmp0_filter_0 =
                        current.properties_1._get_values__2516944425_tel787_k$();
                    var tmp$ret$1;
                    $l$block_0: {
                        var tmp0_filterTo_0_1 = ArrayList_init_$Create$();
                        var tmp0_iterator_1_2 =
                            tmp0_filter_0.iterator_jk1svi_k$();
                        while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                            var element_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                            if (condition(element_2_3)) {
                                tmp0_filterTo_0_1.add_1j60pz_k$(element_2_3);
                                Unit_getInstance();
                            }
                        }
                        tmp$ret$1 = tmp0_filterTo_0_1;
                        break $l$block_0;
                    }
                    tmp$ret$2 = tmp$ret$1;
                    break $l$block_1;
                }
                stack.addAll_oxxjjk_k$(tmp$ret$2);
                Unit_getInstance();
            } else {
                var tmp_0;
                if (isInterface(current, Containerable)) {
                    tmp_0 = !visited.contains_2ehdt1_k$(
                        current.getContainerId_75kvy2_k$()
                    );
                } else {
                    {
                        tmp_0 = false;
                    }
                }
                if (tmp_0) {
                    visited.add_1j60pz_k$(toString_0(current));
                    Unit_getInstance();
                    var tmp$ret$4;
                    $l$block_3: {
                        var tmp1_filter_0 = current.getCollection_xq05f0_k$();
                        var tmp$ret$3;
                        $l$block_2: {
                            var tmp0_filterTo_0_1_0 = ArrayList_init_$Create$();
                            var tmp0_iterator_1_2_0 =
                                tmp1_filter_0.iterator_jk1svi_k$();
                            while (tmp0_iterator_1_2_0.hasNext_bitz1p_k$()) {
                                var element_2_3_0 =
                                    tmp0_iterator_1_2_0.next_20eer_k$();
                                if (condition(element_2_3_0)) {
                                    tmp0_filterTo_0_1_0.add_1j60pz_k$(
                                        element_2_3_0
                                    );
                                    Unit_getInstance();
                                }
                            }
                            tmp$ret$3 = tmp0_filterTo_0_1_0;
                            break $l$block_2;
                        }
                        tmp$ret$4 = tmp$ret$3;
                        break $l$block_3;
                    }
                    stack.addAll_oxxjjk_k$(tmp$ret$4);
                    Unit_getInstance();
                } else {
                }
            }
        }
    }
    function Type$Companion$afterAllBfs$lambda($visited) {
        return function (it) {
            var tmp;
            var tmp_0;
            if (isInterface(it, Containerable)) {
                tmp_0 = !$visited.contains_2ehdt1_k$(
                    it.getContainerId_75kvy2_k$()
                );
            } else {
                {
                    tmp_0 = false;
                }
            }
            if (tmp_0) {
                tmp = true;
            } else {
                {
                    var tmp_1;
                    if (it instanceof Type) {
                        tmp_1 = !$visited.contains_2ehdt1_k$(toString_0(it));
                    } else {
                        {
                            tmp_1 = false;
                        }
                    }
                    tmp = tmp_1;
                }
            }
            return tmp;
        };
    }
    function Type_init_$Init$(
        name,
        assignments,
        fileTable,
        index,
        supertype,
        properties,
        $mask0,
        $marker,
        $this
    ) {
        if (!(($mask0 & 16) === 0)) supertype = null;
        if (!(($mask0 & 32) === 0)) {
            var tmp$ret$0;
            var tmp$ret$0_0;
            $l$block: {
                tmp$ret$0 = LinkedHashMap_init_$Create$();
                tmp$ret$0_0 = Unit_getInstance();
                break $l$block;
            }
            properties = tmp$ret$0;
        }
        Type.call(
            $this,
            name,
            assignments,
            fileTable,
            index,
            supertype,
            properties
        );
        return $this;
    }
    function Type_init_$Create$(
        name,
        assignments,
        fileTable,
        index,
        supertype,
        properties,
        $mask0,
        $marker
    ) {
        return Type_init_$Init$(
            name,
            assignments,
            fileTable,
            index,
            supertype,
            properties,
            $mask0,
            $marker,
            Object.create(Type.prototype)
        );
    }
    function getInheritedFunctions($this) {
        if (!($this.supertype_1 == null)) {
            return plus_0(
                ensureNotNull($this.supertype_1).functions_1,
                getInheritedFunctions(ensureNotNull($this.supertype_1))
            );
        }
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = emptySet();
            break $l$block;
        }
        return tmp$ret$0;
    }
    function getInheritedAssignments($this) {
        if (!($this.supertype_1 == null)) {
            return plus_0(
                ensureNotNull($this.supertype_1).assignments_1,
                getInheritedAssignments(ensureNotNull($this.supertype_1))
            );
        }
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = emptySet();
            break $l$block;
        }
        return tmp$ret$0;
    }
    function Companion_1() {
        Companion_instance_1 = this;
    }
    Companion_1.prototype.resolveTree_tbefwp_k$ = function (root, symbolTable) {
        root.setProperty_tmx3oq_k$(
            "parent",
            Utils_getInstance()._get_NULL__774226340_csycv8_k$()
        );
        symbolTable._set_resolvingType__2046672930_ezepws_k$(
            ResolvingMode_TYPE_getInstance()
        );
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = LinkedHashSet_init_$Create$();
            break $l$block;
        }
        var visitedTypes = tmp$ret$0;
        $l$loop: do {
            var tmp0_elvis_lhs = bfs(this, root, visitedTypes);
            var tmp;
            if (tmp0_elvis_lhs == null) {
                break $l$loop;
            } else {
                tmp = tmp0_elvis_lhs;
            }
            var tmp1_container = tmp;
            var parent = tmp1_container.component1_7eebsc_k$();
            var current = tmp1_container.component2_7eebsb_k$();
            var tmp$ret$1;
            $l$block_0: {
                tmp$ret$1 = ArrayList_init_$Create$();
                break $l$block_0;
            }
            var stack = tmp$ret$1;
            stack.add_1j60pz_k$(new Pair(parent, current));
            Unit_getInstance();
            this.processAssignment_ahktbi_k$(
                symbolTable.changeVariable_uoiydg_k$(parent),
                stack,
                visitedTypes
            );
        } while (true);
        symbolTable._set_resolvingType__2046672930_ezepws_k$(
            ResolvingMode_FUNCTION_getInstance()
        );
        var tmp$ret$2;
        $l$block_1: {
            tmp$ret$2 = LinkedHashSet_init_$Create$();
            break $l$block_1;
        }
        afterAllBfs(this, tmp$ret$2, mutableListOf([root]), symbolTable);
        return root;
    };
    Companion_1.prototype.processAssignment_ahktbi_k$ = function (
        symbolTable,
        stack,
        visitedTypes
    ) {
        $l$loop: while (true) {
            var tmp$ret$0;
            $l$block: {
                tmp$ret$0 = !stack.isEmpty_y1axqb_k$();
                break $l$block;
            }
            if (!tmp$ret$0) {
                break $l$loop;
            }
            var unresolved = removeLast(stack);
            var top = unresolved
                ._get_second__4255435031_njbah_k$()
                .getFirstUnassigned_n1eh3i_k$(
                    symbolTable.changeVariable_uoiydg_k$(
                        unresolved._get_first__3232921377_hkbbvj_k$()
                    ),
                    unresolved._get_first__3232921377_hkbbvj_k$()
                );
            if (!(top._get_second__4255435031_njbah_k$() == null)) {
                stack.add_1j60pz_k$(top instanceof Pair ? top : THROW_CCE());
                Unit_getInstance();
            } else {
                unresolved
                    ._get_second__4255435031_njbah_k$()
                    .assign_bxw09h_k$(
                        unresolved._get_first__3232921377_hkbbvj_k$(),
                        symbolTable.changeVariable_uoiydg_k$(
                            unresolved._get_first__3232921377_hkbbvj_k$()
                        )
                    );
                var newProperty = unresolved
                    ._get_first__3232921377_hkbbvj_k$()
                    .properties_1.get_1mhr4y_k$(
                        unresolved
                            ._get_second__4255435031_njbah_k$()
                            ._get_name__804168992_das4rk_k$()
                    );
                if (
                    !(newProperty == null)
                        ? isInterface(newProperty, Containerable)
                        : false
                ) {
                    var tmp$ret$1;
                    $l$block_0: {
                        tmp$ret$1 = ArrayList_init_$Create$();
                        break $l$block_0;
                    }
                    var containerStack = tmp$ret$1;
                    containerStack.add_1j60pz_k$(newProperty);
                    Unit_getInstance();
                    $l$loop_0: while (true) {
                        var tmp$ret$2;
                        $l$block_1: {
                            tmp$ret$2 = !containerStack.isEmpty_y1axqb_k$();
                            break $l$block_1;
                        }
                        if (!tmp$ret$2) {
                            break $l$loop_0;
                        }
                        var tmp$ret$3;
                        $l$block_2: {
                            tmp$ret$3 = LinkedHashSet_init_$Create$();
                            break $l$block_2;
                        }
                        var visitedContainers = tmp$ret$3;
                        var assignment = containerBfs(
                            this,
                            containerStack,
                            visitedContainers,
                            visitedTypes
                        );
                        if (!(assignment == null)) {
                            stack.add_1j60pz_k$(assignment);
                            Unit_getInstance();
                            this.processAssignment_ahktbi_k$(
                                symbolTable,
                                stack,
                                visitedTypes
                            );
                        }
                    }
                } else {
                }
                if (
                    unresolved
                        ._get_first__3232921377_hkbbvj_k$()
                        .assignments_1.isEmpty_y1axqb_k$()
                ) {
                    var tmp = unresolved._get_first__3232921377_hkbbvj_k$();
                    tmp.callAfter$default_vbnxx3_k$(
                        symbolTable,
                        false,
                        2,
                        null
                    );
                }
            }
        }
    };
    Companion_1.$metadata$ = {
        simpleName: "Companion",
        kind: "object",
        interfaces: [],
    };
    var Companion_instance_1;
    function Companion_getInstance_1() {
        if (Companion_instance_1 == null) new Companion_1();
        return Companion_instance_1;
    }
    function Type(name, assignments, fileTable, index, supertype, properties) {
        Companion_getInstance_1();
        Property.call(this);
        this.name_1 = name;
        this.assignments_1 = assignments;
        this.fileTable_1 = fileTable;
        this.index_1 = index;
        this.supertype_1 = supertype;
        this.properties_1 = properties;
        var tmp = this;
        var tmp$ret$1;
        $l$block: {
            tmp$ret$1 = LinkedHashSet_init_$Create$();
            break $l$block;
        }
        tmp.functions_1 = tmp$ret$1;
    }
    Type.prototype._get_name__804168992_das4rk_k$ = function () {
        return this.name_1;
    };
    Type.prototype._get_assignments__50188043_tvpcb_k$ = function () {
        return this.assignments_1;
    };
    Type.prototype._get_fileTable__504497375_8cd4nz_k$ = function () {
        return this.fileTable_1;
    };
    Type.prototype._get_index__3322996031_g2optt_k$ = function () {
        return this.index_1;
    };
    Type.prototype._set_supertype__3811820336_k43hjc_k$ = function (
        _set____804775014
    ) {
        this.supertype_1 = _set____804775014;
    };
    Type.prototype._get_properties__3765791160_8r22x4_k$ = function () {
        return this.properties_1;
    };
    Type.prototype._get_functions__2924404246_mnzx7u_k$ = function () {
        return this.functions_1;
    };
    Type.prototype.getAssignment_r8m0ia_k$ = function (node) {
        var tmp$ret$2;
        $l$block_2: {
            var tmp0_find_0 = this.assignments_1;
            var tmp$ret$1;
            $l$block_1: {
                var tmp0_iterator_1_1 = tmp0_find_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_1.hasNext_bitz1p_k$()) {
                    var element_2_2 = tmp0_iterator_1_1.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = element_2_2
                            ._get_left__802434852_d9qyp0_k$()
                            .equals(node);
                        break $l$block;
                    }
                    if (tmp$ret$0) {
                        tmp$ret$1 = element_2_2;
                        break $l$block_1;
                    } else {
                    }
                }
                tmp$ret$1 = null;
                break $l$block_1;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_2;
        }
        return tmp$ret$2;
    };
    Type.prototype.getAssignment_ghhhs2_k$ = function (name) {
        var tmp$ret$2;
        $l$block_2: {
            var tmp0_find_0 = this.assignments_1;
            var tmp$ret$1;
            $l$block_1: {
                var tmp0_iterator_1_1 = tmp0_find_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_1.hasNext_bitz1p_k$()) {
                    var element_2_2 = tmp0_iterator_1_1.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 =
                            element_2_2
                                ._get_left__802434852_d9qyp0_k$()
                                ._get_value__3683422336_a43j40_k$() === name;
                        break $l$block;
                    }
                    if (tmp$ret$0) {
                        tmp$ret$1 = element_2_2;
                        break $l$block_1;
                    } else {
                    }
                }
                tmp$ret$1 = null;
                break $l$block_1;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_2;
        }
        return tmp$ret$2;
    };
    Type.prototype.getLinkedAssignment_dmryla_k$ = function (link, index) {
        var identProperty = this.getAssignment_r8m0ia_k$(
            link._get_children__1387553196_my42wc_k$().get_fkrdnv_k$(index)
        );
        if (!(identProperty == null)) return identProperty;
        var inductionVariable = 2;
        var last =
            (link
                ._get_children__1387553196_my42wc_k$()
                ._get_size__809037418_ddoh9m_k$() -
                index) |
            0;
        if (inductionVariable <= last)
            do {
                var childrenNumber = inductionVariable;
                inductionVariable = (inductionVariable + 1) | 0;
                var searched = TokenFactory_getInstance().copy_oi75uk_k$(
                    link,
                    index,
                    childrenNumber
                );
                var found = this.getAssignment_r8m0ia_k$(searched);
                if (!(found == null)) return found;
            } while (!(childrenNumber === last));
        return null;
    };
    Type.prototype.removeAssignment_r847vu_k$ = function (assignment) {
        return this.assignments_1.remove_8hbkc6_k$(assignment);
    };
    Type.prototype.removeAssignment_c8vby8_k$ = function (node) {
        var tmp0_iterator = this.assignments_1.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var a = tmp0_iterator.next_20eer_k$();
            if (a._get_left__802434852_d9qyp0_k$().equals(node)) {
                this.assignments_1.remove_8hbkc6_k$(a);
                Unit_getInstance();
                return a;
            }
        }
        return null;
    };
    Type.prototype.getFunctionOrNull_p690c9_k$ = function (node) {
        var tmp = Companion_getInstance_0();
        return tmp.getFunctionOrNull_p6a1z1_k$(
            node instanceof Call ? node : THROW_CCE(),
            plus_0(this.functions_1, getInheritedFunctions(this))
        );
    };
    Type.prototype.getFunction_ken7yo_k$ = function (node, fileTable) {
        var tmp0_elvis_lhs = this.getFunctionOrNull_p690c9_k$(node);
        var tmp;
        if (tmp0_elvis_lhs == null) {
            var tmp_0 = "Class `" + this.name_1 + "` does not contain function";
            var tmp_1 = fileTable._get_filePath__151144490_2hzju2_k$();
            throw PositionalException_init_$Create$(
                tmp_0,
                tmp_1,
                node,
                null,
                0,
                24,
                null
            );
        } else {
            tmp = tmp0_elvis_lhs;
        }
        return tmp;
    };
    Type.prototype.getProperties_k8mbbr_k$ = function () {
        var tmp$ret$5;
        $l$block_4: {
            var tmp0_mapKeys_0 = this.properties_1;
            var tmp$ret$4;
            $l$block_3: {
                var tmp1_mapKeysTo_0_1 = LinkedHashMap_init_$Create$_0(
                    mapCapacity(tmp0_mapKeys_0._get_size__809037418_ddoh9m_k$())
                );
                var tmp$ret$3;
                $l$block_2: {
                    var tmp0_associateByTo_0_2 =
                        tmp0_mapKeys_0._get_entries__31877249_iz8n5_k$();
                    var tmp0_iterator_1_3 =
                        tmp0_associateByTo_0_2.iterator_jk1svi_k$();
                    while (tmp0_iterator_1_3.hasNext_bitz1p_k$()) {
                        var element_2_4 = tmp0_iterator_1_3.next_20eer_k$();
                        var tmp$ret$1;
                        $l$block_0: {
                            var tmp$ret$0;
                            $l$block: {
                                tmp$ret$0 =
                                    element_2_4._get_key__857139730_e6bh8y_k$();
                                break $l$block;
                            }
                            var key_6 = tmp$ret$0;
                            var tmp = Utils_getInstance();
                            tmp$ret$1 = tmp.toVariable$default_x99qtu_k$(
                                key_6,
                                null,
                                1,
                                null
                            );
                            break $l$block_0;
                        }
                        var tmp_0 = tmp$ret$1;
                        var tmp$ret$2;
                        $l$block_1: {
                            tmp$ret$2 =
                                element_2_4._get_value__3683422336_a43j40_k$();
                            break $l$block_1;
                        }
                        tmp1_mapKeysTo_0_1.put_3mhbri_k$(tmp_0, tmp$ret$2);
                        Unit_getInstance();
                    }
                    tmp$ret$3 = tmp1_mapKeysTo_0_1;
                    break $l$block_2;
                }
                tmp$ret$4 = tmp$ret$3;
                break $l$block_3;
            }
            tmp$ret$5 = tmp$ret$4;
            break $l$block_4;
        }
        var tmp_1 = toMutableMap(tmp$ret$5);
        var tmp0_this = Companion_getInstance_8();
        var tmp1 = tmp0_this._get_dictionaryId__3404222234_eqbrae_k$();
        tmp0_this._set_dictionaryId__2464069414_3w32dm_k$((tmp1 + 1) | 0);
        return new PDictionary(tmp_1, tmp1);
    };
    Type.prototype.toDebugClass_dfj843_k$ = function (references, copying) {
        var id = this.getDebugId_sdwqy0_k$();
        references._get_queue__3558538464_c6g84g_k$().remove_8hbkc0_k$(id);
        Unit_getInstance();
        var tmp$ret$0;
        $l$block: {
            var tmp0_get_0 = references._get_types__3648432760_aoxh8o_k$();
            var tmp1_get_0 = id._get_second__4255435031_njbah_k$();
            tmp$ret$0 = (
                isInterface(tmp0_get_0, Map) ? tmp0_get_0 : THROW_CCE()
            ).get_1mhr4y_k$(tmp1_get_0);
            break $l$block;
        }
        if (!(tmp$ret$0 == null)) return id;
        else {
        }
        var copy;
        if (copying) {
            var tmp0_this = this.fileTable_1;
            tmp0_this._set_numberInstances__3771442672_fzfgw0_k$(
                (tmp0_this._get_numberInstances__87398780_1g19bw_k$() + 1) | 0
            );
            var index =
                this.fileTable_1._get_numberInstances__87398780_1g19bw_k$();
            var tmp1_name = this.name_1;
            var tmp$ret$3;
            $l$block_2: {
                var tmp2_map_0 = plus_0(
                    this.assignments_1,
                    getInheritedAssignments(this)
                );
                var tmp$ret$2;
                $l$block_1: {
                    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                        collectionSizeOrDefault(tmp2_map_0, 10)
                    );
                    var tmp0_iterator_1_2 = tmp2_map_0.iterator_jk1svi_k$();
                    while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                        var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                        var tmp$ret$1;
                        $l$block_0: {
                            var tmp = TokenFactory_getInstance();
                            var tmp_0 = tmp.copy$default_gvqacf_k$(
                                item_2_3,
                                0,
                                0,
                                6,
                                null
                            );
                            tmp$ret$1 =
                                tmp_0 instanceof Assignment
                                    ? tmp_0
                                    : THROW_CCE();
                            break $l$block_0;
                        }
                        tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$1);
                        Unit_getInstance();
                    }
                    tmp$ret$2 = tmp0_mapTo_0_1;
                    break $l$block_1;
                }
                tmp$ret$3 = tmp$ret$2;
                break $l$block_2;
            }
            var tmp2_assignments = toMutableSet(tmp$ret$3);
            var tmp3_fileTable = this.fileTable_1;
            var tmp4_supertype = this.supertype_1;
            copy = Type_init_$Create$(
                tmp1_name,
                tmp2_assignments,
                tmp3_fileTable,
                index,
                tmp4_supertype,
                null,
                32,
                null
            );
            copy.functions_1.addAll_oxxjjk_k$(this.functions_1);
            Unit_getInstance();
        } else copy = null;
        if (this instanceof Object_0) this.resolveAllProperties_wubtih_k$();
        else {
        }
        var tmp$ret$7;
        $l$block_6: {
            var tmp3_map_0 = this.properties_1;
            var tmp$ret$6;
            $l$block_5: {
                var tmp0_mapTo_0_1_0 = ArrayList_init_$Create$_0(
                    tmp3_map_0._get_size__809037418_ddoh9m_k$()
                );
                var tmp$ret$4;
                $l$block_3: {
                    tmp$ret$4 = tmp3_map_0
                        ._get_entries__31877249_iz8n5_k$()
                        .iterator_jk1svi_k$();
                    break $l$block_3;
                }
                var tmp0_iterator_1_2_0 = tmp$ret$4;
                while (tmp0_iterator_1_2_0.hasNext_bitz1p_k$()) {
                    var item_2_3_0 = tmp0_iterator_1_2_0.next_20eer_k$();
                    var tmp$ret$5;
                    $l$block_4: {
                        tmp$ret$5 = to(
                            item_2_3_0._get_key__857139730_e6bh8y_k$(),
                            equals(
                                item_2_3_0._get_value__3683422336_a43j40_k$(),
                                this
                            )
                                ? id
                                : elementToDebug(
                                      item_2_3_0._get_value__3683422336_a43j40_k$(),
                                      references
                                  )
                        );
                        break $l$block_4;
                    }
                    tmp0_mapTo_0_1_0.add_1j60pz_k$(tmp$ret$5);
                    Unit_getInstance();
                }
                tmp$ret$6 = tmp0_mapTo_0_1_0;
                break $l$block_5;
            }
            tmp$ret$7 = tmp$ret$6;
            break $l$block_6;
        }
        var res = new DebugType(toMutableMap(toMap(tmp$ret$7)), copy);
        {
            var tmp4_set_0 = references._get_types__3648432760_aoxh8o_k$();
            var tmp_1 = id._get_second__4255435031_njbah_k$();
            var tmp5_set_0 = typeof tmp_1 === "string" ? tmp_1 : THROW_CCE();
            tmp4_set_0.put_3mhbri_k$(tmp5_set_0, res);
            Unit_getInstance();
        }
        return id;
    };
    Type.prototype.getDebugId_sdwqy0_k$ = function () {
        return new Pair("Type", this.toString());
    };
    Type.prototype.getPropertyOrNull_191djg_k$ = function (name) {
        var tmp0_subject = name;
        return tmp0_subject === "properties"
            ? this.getProperties_k8mbbr_k$()
            : this.properties_1.get_1mhr4y_k$(name);
    };
    Type.prototype.getProperty_qi6v9p_k$ = function (node, fileTable) {
        var tmp0_subject = node._get_value__3683422336_a43j40_k$();
        var tmp;
        if (tmp0_subject === "properties") {
            tmp = this.getProperties_k8mbbr_k$();
        } else {
            var tmp1_elvis_lhs = this.properties_1.get_1mhr4y_k$(
                node._get_value__3683422336_a43j40_k$()
            );
            var tmp_0;
            if (tmp1_elvis_lhs == null) {
                var tmp_1 = fileTable._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    "Property not found",
                    tmp_1,
                    node,
                    null,
                    0,
                    24,
                    null
                );
            } else {
                tmp_0 = tmp1_elvis_lhs;
            }
            tmp = tmp_0;
        }
        return tmp;
    };
    Type.prototype.setProperty_tmx3oq_k$ = function (name, value) {
        {
            var tmp0_set_0 = this.properties_1;
            tmp0_set_0.put_3mhbri_k$(name, value);
            Unit_getInstance();
        }
    };
    Type.prototype.toString = function () {
        if (this.index_1 === 0) return this.name_1;
        var tmp$ret$0;
        $l$block: {
            var tmp0_isEmpty_0 =
                this.fileTable_1._get_filePath__151144490_2hzju2_k$();
            tmp$ret$0 = charSequenceLength(tmp0_isEmpty_0) === 0;
            break $l$block;
        }
        if (tmp$ret$0) throw Exception_init_$Create$("Empty fileTable name");
        else {
        }
        var tmp;
        var tmp_0 = this.fileTable_1._get_filePath__151144490_2hzju2_k$();
        if (contains$default(tmp_0, "/", false, 2, null)) {
            var tmp_1 = this.fileTable_1._get_filePath__151144490_2hzju2_k$();
            tmp = first_1(
                last_0(split$default(tmp_1, ["/"], false, 0, 6, null))
            );
        } else {
            {
                tmp = first_1(
                    this.fileTable_1._get_filePath__151144490_2hzju2_k$()
                );
            }
        }
        var fileLetter = tmp;
        var res = new StringBuilder(
            this.name_1 +
                "-" +
                new Char(fileLetter) +
                this.fileTable_1._get_index__3322996031_g2optt_k$() +
                this.index_1
        );
        return res.toString();
    };
    Type.prototype.inherits_1imrpq_k$ = function (other) {
        var type = this;
        while (!(type == null)) {
            if (type.equalToType_r0ad0h_k$(other)) {
                return true;
            }
            type = type.supertype_1;
        }
        return false;
    };
    Type.prototype.equalToType_r0ad0h_k$ = function (other) {
        var tmp;
        if (
            this.name_1 === other.name_1
                ? this.fileTable_1.equals(other.fileTable_1)
                : false
        ) {
            tmp = !(other instanceof Object_0);
        } else {
            tmp = false;
        }
        return tmp;
    };
    Type.prototype.copyRoot_8d9kp5_k$ = function () {
        var tmp0_this = this.fileTable_1;
        tmp0_this._set_numberInstances__3771442672_fzfgw0_k$(
            (tmp0_this._get_numberInstances__87398780_1g19bw_k$() + 1) | 0
        );
        var index = this.fileTable_1._get_numberInstances__87398780_1g19bw_k$();
        var tmp1_name = this.name_1;
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_map_0 = plus_0(
                this.assignments_1,
                getInheritedAssignments(this)
            );
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(tmp0_map_0, 10)
                );
                var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        var tmp = TokenFactory_getInstance();
                        var tmp_0 = tmp.copy$default_gvqacf_k$(
                            item_2_3,
                            0,
                            0,
                            6,
                            null
                        );
                        tmp$ret$0 =
                            tmp_0 instanceof Assignment ? tmp_0 : THROW_CCE();
                        break $l$block;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
                    Unit_getInstance();
                }
                tmp$ret$1 = tmp0_mapTo_0_1;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        var tmp2_assignments = toMutableSet(tmp$ret$2);
        var tmp3_fileTable = this.fileTable_1;
        var tmp4_supertype = this.supertype_1;
        var copy = Type_init_$Create$(
            tmp1_name,
            tmp2_assignments,
            tmp3_fileTable,
            index,
            tmp4_supertype,
            null,
            32,
            null
        );
        {
            var tmp1_forEach_0 = copy.assignments_1;
            var tmp0_iterator_1 = tmp1_forEach_0.iterator_jk1svi_k$();
            while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
                var element_2 = tmp0_iterator_1.next_20eer_k$();
                {
                    element_2._set_parent__1403382957_83u8iz_k$(this);
                }
            }
        }
        copy.functions_1.addAll_oxxjjk_k$(this.functions_1);
        Unit_getInstance();
        return copy;
    };
    Type.prototype.equals = function (other) {
        return this === other;
    };
    Type.prototype.callAfter_cx3tt8_k$ = function (symbolTable, all) {
        var tmp = Utils_getInstance().parseOneNode_tdccb8_k$(
            all ? "afterAll()" : "after()"
        );
        var afterNode = new Call(tmp instanceof Invocation ? tmp : THROW_CCE());
        var afterResolving = this.getFunctionOrNull_p690c9_k$(afterNode);
        if (!(afterResolving == null)) {
            afterNode.evaluateFunction_gez3ba_k$(symbolTable, afterResolving);
            Unit_getInstance();
        }
    };
    Type.prototype.callAfter$default_vbnxx3_k$ = function (
        symbolTable,
        all,
        $mask0,
        $handler
    ) {
        if (!(($mask0 & 2) === 0)) all = false;
        return this.callAfter_cx3tt8_k$(symbolTable, all);
    };
    Type.$metadata$ = {
        simpleName: "Type",
        kind: "class",
        interfaces: [NestableDebug],
    };
    function Variable() {}
    Variable.prototype.toDebugClass$default_jlj1oy_k$ = function (
        references,
        copying,
        $mask0,
        $handler
    ) {
        if (!(($mask0 & 2) === 0)) copying = false;
        return $handler == null
            ? this.toDebugClass_dfj843_k$(references, copying)
            : $handler(references, copying);
    };
    Variable.$metadata$ = {
        simpleName: "Variable",
        kind: "class",
        interfaces: [],
    };
    function Indexable() {}
    Indexable.$metadata$ = {
        simpleName: "Indexable",
        kind: "interface",
        interfaces: [],
    };
    function PDictionary$Companion$initializeDictionaryProperties$lambda() {
        return function (pr) {
            var tmp = Utils_getInstance();
            var tmp_0 = new PInt(
                (pr instanceof PDictionary ? pr : THROW_CCE())
                    .getPValue_berniv_k$()
                    ._get_size__809037418_ddoh9m_k$()
            );
            return tmp.toProperty$default_127ngr_k$(tmp_0, null, 1, null);
        };
    }
    function PDictionary$Companion$initializeDictionaryProperties$lambda_0() {
        return function (pr) {
            var tmp = Utils_getInstance();
            var tmp_0 = toMutableList(
                (pr instanceof PDictionary ? pr : THROW_CCE())
                    .getPValue_berniv_k$()
                    ._get_keys__801529559_d97k5z_k$()
            );
            return tmp.toProperty$default_127ngr_k$(tmp_0, null, 1, null);
        };
    }
    function PDictionary$Companion$initializeDictionaryProperties$lambda_1() {
        return function (pr) {
            var tmp = Utils_getInstance();
            var tmp_0 = toMutableList(
                (pr instanceof PDictionary ? pr : THROW_CCE())
                    .getPValue_berniv_k$()
                    ._get_values__2516944425_tel787_k$()
            );
            return tmp.toProperty$default_127ngr_k$(tmp_0, null, 1, null);
        };
    }
    function PDictionary$Companion$initializeDictionaryProperties$lambda_2() {
        return function (pr) {
            var tmp = Utils_getInstance();
            var tmp$ret$3;
            $l$block_2: {
                var tmp0_map_0 = (
                    pr instanceof PDictionary ? pr : THROW_CCE()
                ).getPValue_berniv_k$();
                var tmp$ret$2;
                $l$block_1: {
                    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                        tmp0_map_0._get_size__809037418_ddoh9m_k$()
                    );
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = tmp0_map_0
                            ._get_entries__31877249_iz8n5_k$()
                            .iterator_jk1svi_k$();
                        break $l$block;
                    }
                    var tmp0_iterator_1_2 = tmp$ret$0;
                    while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                        var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                        var tmp$ret$1;
                        $l$block_0: {
                            var tmp_0 = Utils_getInstance();
                            var tmp_1 = tmp_0.toVariable$default_x99qtu_k$(
                                "key",
                                null,
                                1,
                                null
                            );
                            var tmp_2 = Utils_getInstance();
                            var tmp_3 =
                                item_2_3._get_key__857139730_e6bh8y_k$();
                            var tmp_4 = to(
                                tmp_1,
                                tmp_2.toVariable$default_x99qtu_k$(
                                    tmp_3,
                                    null,
                                    1,
                                    null
                                )
                            );
                            var tmp_5 = Utils_getInstance();
                            var tmp_6 = mutableMapOf([
                                tmp_4,
                                to(
                                    tmp_5.toVariable$default_x99qtu_k$(
                                        "value",
                                        null,
                                        1,
                                        null
                                    ),
                                    item_2_3._get_value__3683422336_a43j40_k$()
                                ),
                            ]);
                            var tmp0_this_5 = Companion_getInstance_8();
                            var tmp1_6 =
                                tmp0_this_5._get_dictionaryId__3404222234_eqbrae_k$();
                            tmp0_this_5._set_dictionaryId__2464069414_3w32dm_k$(
                                (tmp1_6 + 1) | 0
                            );
                            tmp$ret$1 = new PDictionary(tmp_6, tmp1_6);
                            break $l$block_0;
                        }
                        tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$1);
                        Unit_getInstance();
                    }
                    tmp$ret$2 = tmp0_mapTo_0_1;
                    break $l$block_1;
                }
                tmp$ret$3 = tmp$ret$2;
                break $l$block_2;
            }
            var tmp_7 = tmp$ret$3;
            return tmp.toProperty$default_127ngr_k$(tmp_7, null, 1, null);
        };
    }
    function PDictionary$Companion$initializeDictionaryFunctions$lambda() {
        return function (token, args) {
            var dict = Utils_getInstance().getPDictionary_ryhihh_k$(
                args,
                token,
                "this"
            );
            Unit_getInstance();
            return toString_0(dict.getPValue_berniv_k$());
        };
    }
    function PDictionary$Companion$initializeDictionaryFunctions$lambda_0() {
        return function (token, args) {
            var dict = Utils_getInstance().getPDictionary_ryhihh_k$(
                args,
                token,
                "this"
            );
            Unit_getInstance();
            var key = Utils_getInstance().getIdent_dfe2u9_k$(
                token,
                "key",
                args
            );
            Unit_getInstance();
            var tmp0_elvis_lhs = dict
                .getPValue_berniv_k$()
                .remove_8hbkc0_k$(key);
            return tmp0_elvis_lhs == null
                ? Utils_getInstance()._get_NULL__774226340_csycv8_k$()
                : tmp0_elvis_lhs;
        };
    }
    function PDictionary$Companion$initializeDictionaryFunctions$lambda_1() {
        return function (token, args) {
            var dict = Utils_getInstance().getPDictionary_ryhihh_k$(
                args,
                token,
                "this"
            );
            Unit_getInstance();
            var key = Utils_getInstance().getIdent_dfe2u9_k$(
                token,
                "key",
                args
            );
            Unit_getInstance();
            var tmp = Utils_getInstance();
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_contains_0 = dict.getPValue_berniv_k$();
                var tmp$ret$0;
                $l$block: {
                    tmp$ret$0 = (
                        isInterface(tmp0_contains_0, Map)
                            ? tmp0_contains_0
                            : THROW_CCE()
                    ).containsKey_wgk31w_k$(key);
                    break $l$block;
                }
                tmp$ret$1 = tmp$ret$0;
                break $l$block_0;
            }
            return tmp.toPInt_yzud9u_k$(tmp$ret$1);
        };
    }
    function Companion_2() {
        Companion_instance_2 = this;
    }
    Companion_2.prototype.initializeDictionaryProperties_wmce6g_k$ =
        function () {
            var tmp$ret$0;
            $l$block: {
                tmp$ret$0 = LinkedHashMap_init_$Create$();
                break $l$block;
            }
            var p = new PDictionary(tmp$ret$0, -1);
            var tmp = Companion_getInstance_8();
            tmp.setProperty_o08ehl_k$(
                p,
                "size",
                PDictionary$Companion$initializeDictionaryProperties$lambda()
            );
            var tmp_0 = Companion_getInstance_8();
            tmp_0.setProperty_o08ehl_k$(
                p,
                "keys",
                PDictionary$Companion$initializeDictionaryProperties$lambda_0()
            );
            var tmp_1 = Companion_getInstance_8();
            tmp_1.setProperty_o08ehl_k$(
                p,
                "values",
                PDictionary$Companion$initializeDictionaryProperties$lambda_1()
            );
            var tmp_2 = Companion_getInstance_8();
            tmp_2.setProperty_o08ehl_k$(
                p,
                "entries",
                PDictionary$Companion$initializeDictionaryProperties$lambda_2()
            );
        };
    Companion_2.prototype.initializeDictionaryFunctions_qhpk64_k$ =
        function () {
            var tmp$ret$0;
            $l$block: {
                tmp$ret$0 = LinkedHashMap_init_$Create$();
                break $l$block;
            }
            var p = new PDictionary(tmp$ret$0, -1);
            var tmp = Companion_getInstance_8();
            tmp.setFunction_9hbg6v_k$(
                p,
                EmbeddedFunction_init_$Create$(
                    "toString",
                    null,
                    null,
                    PDictionary$Companion$initializeDictionaryFunctions$lambda(),
                    6,
                    null
                )
            );
            var tmp_0 = Companion_getInstance_8();
            var tmp_1 = listOf("key");
            tmp_0.setFunction_9hbg6v_k$(
                p,
                EmbeddedFunction_init_$Create$(
                    "remove",
                    tmp_1,
                    null,
                    PDictionary$Companion$initializeDictionaryFunctions$lambda_0(),
                    4,
                    null
                )
            );
            var tmp_2 = Companion_getInstance_8();
            var tmp_3 = listOf("key");
            tmp_2.setFunction_9hbg6v_k$(
                p,
                EmbeddedFunction_init_$Create$(
                    "has",
                    tmp_3,
                    null,
                    PDictionary$Companion$initializeDictionaryFunctions$lambda_1(),
                    4,
                    null
                )
            );
        };
    Companion_2.$metadata$ = {
        simpleName: "Companion",
        kind: "object",
        interfaces: [],
    };
    var Companion_instance_2;
    function Companion_getInstance_2() {
        if (Companion_instance_2 == null) new Companion_2();
        return Companion_instance_2;
    }
    function PDictionary(value, id) {
        Companion_getInstance_2();
        Primitive.call(this, value);
        this.id_1 = id;
    }
    PDictionary.prototype.getIndex_wcnjmk_k$ = function () {
        return 6;
    };
    PDictionary.prototype.getPValue_berniv_k$ = function () {
        var tmp = this._get_value__3683422336_a43j40_k$();
        return isInterface(tmp, MutableMap) ? tmp : THROW_CCE();
    };
    PDictionary.prototype.get_xyyy8m_k$ = function (index, node, fileTable) {
        var tmp0_elvis_lhs = this.getPValue_berniv_k$().get_1mhr4y_k$(
            Utils_getInstance().toVariable_abd9s8_k$(index, node)
        );
        return tmp0_elvis_lhs == null
            ? Utils_getInstance()._get_NULL__774226340_csycv8_k$()
            : tmp0_elvis_lhs;
    };
    PDictionary.prototype.set_g480bi_k$ = function (
        index,
        value,
        nodeIndex,
        nodeValue,
        fileTable
    ) {
        {
            var tmp0_set_0 = this.getPValue_berniv_k$();
            var tmp1_set_0 = Utils_getInstance().toVariable_abd9s8_k$(
                index,
                nodeIndex
            );
            var tmp2_set_0 = Utils_getInstance().toVariable_abd9s8_k$(
                value,
                nodeValue
            );
            tmp0_set_0.put_3mhbri_k$(tmp1_set_0, tmp2_set_0);
            Unit_getInstance();
        }
    };
    PDictionary.prototype.equals = function (other) {
        if (!(other instanceof PDictionary)) return false;
        else {
        }
        if (equals(this.getPValue_berniv_k$(), other.getPValue_berniv_k$())) {
            return true;
        }
        return false;
    };
    PDictionary.prototype.hashCode = function () {
        return hashCode(this.getPValue_berniv_k$());
    };
    PDictionary.prototype.toString = function () {
        if (this.getPValue_berniv_k$().isEmpty_y1axqb_k$()) {
            return "{}";
        }
        var res = new StringBuilder("{");
        var tmp$ret$0;
        $l$block: {
            var tmp0_iterator_0 = this.getPValue_berniv_k$();
            tmp$ret$0 = tmp0_iterator_0
                ._get_entries__31877249_iz8n5_k$()
                .iterator_jk1svi_k$();
            break $l$block;
        }
        var tmp0_iterator = tmp$ret$0;
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var tmp1_loop_parameter = tmp0_iterator.next_20eer_k$();
            var tmp$ret$1;
            $l$block_0: {
                tmp$ret$1 = tmp1_loop_parameter._get_key__857139730_e6bh8y_k$();
                break $l$block_0;
            }
            var key = tmp$ret$1;
            var tmp$ret$2;
            $l$block_1: {
                tmp$ret$2 =
                    tmp1_loop_parameter._get_value__3683422336_a43j40_k$();
                break $l$block_1;
            }
            var value = tmp$ret$2;
            if (equals(key, this)) {
                res.append_ssq29y_k$("this");
                Unit_getInstance();
            } else {
                res.append_t8pm91_k$(key);
                Unit_getInstance();
            }
            res.append_ssq29y_k$("=");
            Unit_getInstance();
            res.append_t8pm91_k$(equals(value, this) ? "this" : value);
            Unit_getInstance();
            res.append_ssq29y_k$(", ");
            Unit_getInstance();
        }
        res.deleteAt_w9fbwd_k$(_get_lastIndex__339712501_0(res));
        Unit_getInstance();
        res.deleteAt_w9fbwd_k$(_get_lastIndex__339712501_0(res));
        Unit_getInstance();
        res.append_ssq29y_k$("}");
        Unit_getInstance();
        return res.toString();
    };
    PDictionary.prototype.toDebugClass_dfj843_k$ = function (
        references,
        copying
    ) {
        var id = this.getDebugId_sdwqy0_k$();
        references._get_queue__3558538464_c6g84g_k$().remove_8hbkc0_k$(id);
        Unit_getInstance();
        var tmp$ret$0;
        $l$block: {
            var tmp0_get_0 =
                references._get_dictionaries__3403772951_eqldyh_k$();
            var tmp1_get_0 = id._get_second__4255435031_njbah_k$();
            tmp$ret$0 = (
                isInterface(tmp0_get_0, Map) ? tmp0_get_0 : THROW_CCE()
            ).get_1mhr4y_k$(tmp1_get_0);
            break $l$block;
        }
        if (!(tmp$ret$0 == null)) {
            return id;
        } else {
        }
        var tmp$ret$4;
        $l$block_3: {
            var tmp2_map_0 = this.getPValue_berniv_k$();
            var tmp$ret$3;
            $l$block_2: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    tmp2_map_0._get_size__809037418_ddoh9m_k$()
                );
                var tmp$ret$1;
                $l$block_0: {
                    tmp$ret$1 = tmp2_map_0
                        ._get_entries__31877249_iz8n5_k$()
                        .iterator_jk1svi_k$();
                    break $l$block_0;
                }
                var tmp0_iterator_1_2 = tmp$ret$1;
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$2;
                    $l$block_1: {
                        tmp$ret$2 = to(
                            equals(
                                item_2_3._get_key__857139730_e6bh8y_k$(),
                                this
                            )
                                ? id
                                : elementToDebug(
                                      item_2_3._get_key__857139730_e6bh8y_k$(),
                                      references
                                  ),
                            equals(
                                item_2_3._get_value__3683422336_a43j40_k$(),
                                this
                            )
                                ? id
                                : elementToDebug(
                                      item_2_3._get_value__3683422336_a43j40_k$(),
                                      references
                                  )
                        );
                        break $l$block_1;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$2);
                    Unit_getInstance();
                }
                tmp$ret$3 = tmp0_mapTo_0_1;
                break $l$block_2;
            }
            tmp$ret$4 = tmp$ret$3;
            break $l$block_3;
        }
        var tmp = toMutableMap(toMap(tmp$ret$4));
        var tmp_0;
        if (copying) {
            var tmp$ret$5;
            $l$block_4: {
                tmp$ret$5 = LinkedHashMap_init_$Create$();
                break $l$block_4;
            }
            var tmp_1 = tmp$ret$5;
            var tmp0_this = Companion_getInstance_8();
            var tmp1 = tmp0_this._get_dictionaryId__3404222234_eqbrae_k$();
            tmp0_this._set_dictionaryId__2464069414_3w32dm_k$((tmp1 + 1) | 0);
            tmp_0 = new PDictionary(tmp_1, tmp1);
        } else {
            tmp_0 = null;
        }
        var res = new DebugDictionary(tmp, tmp_0);
        {
            var tmp3_set_0 =
                references._get_dictionaries__3403772951_eqldyh_k$();
            var tmp_2 = id._get_second__4255435031_njbah_k$();
            var tmp4_set_0 = typeof tmp_2 === "number" ? tmp_2 : THROW_CCE();
            tmp3_set_0.put_3mhbri_k$(tmp4_set_0, res);
            Unit_getInstance();
        }
        return id;
    };
    PDictionary.prototype.getDebugId_sdwqy0_k$ = function () {
        return new Pair("Dictionary", this.id_1);
    };
    PDictionary.prototype.checkIndexType_1ovz24_k$ = function (index) {
        return true;
    };
    PDictionary.prototype.getCollection_xq05f0_k$ = function () {
        return this.getPValue_berniv_k$()._get_values__2516944425_tel787_k$();
    };
    PDictionary.prototype.getContainerId_75kvy2_k$ = function () {
        return -this.id_1 | 0;
    };
    PDictionary.$metadata$ = {
        simpleName: "PDictionary",
        kind: "class",
        interfaces: [Indexable, NestableDebug, Containerable],
    };
    function PDouble$Companion$initializeDoubleProperties$lambda() {
        return function (it) {
            var tmp = Utils_getInstance();
            var tmp_0 = new PDouble(
                DoubleCompanionObject_getInstance()._get_MIN_VALUE__1378605517_mssatp_k$()
            );
            return tmp.toProperty$default_127ngr_k$(tmp_0, null, 1, null);
        };
    }
    function PDouble$Companion$initializeDoubleProperties$lambda_0() {
        return function (it) {
            var tmp = Utils_getInstance();
            var tmp_0 = new PDouble(
                DoubleCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$()
            );
            return tmp.toProperty$default_127ngr_k$(tmp_0, null, 1, null);
        };
    }
    function Companion_3() {
        Companion_instance_3 = this;
    }
    Companion_3.prototype.initializeDoubleProperties_h2jxrx_k$ = function () {
        var d = new PDouble(0.0);
        var tmp = Companion_getInstance_8();
        tmp.setProperty_o08ehl_k$(
            d,
            "MIN_VALUE",
            PDouble$Companion$initializeDoubleProperties$lambda()
        );
        var tmp_0 = Companion_getInstance_8();
        tmp_0.setProperty_o08ehl_k$(
            d,
            "MAX_VALUE",
            PDouble$Companion$initializeDoubleProperties$lambda_0()
        );
    };
    Companion_3.prototype.initializeEmbeddedDoubleFunctions_tdandr_k$ =
        function () {
            var d = new PDouble(0.0);
        };
    Companion_3.$metadata$ = {
        simpleName: "Companion",
        kind: "object",
        interfaces: [],
    };
    var Companion_instance_3;
    function Companion_getInstance_3() {
        if (Companion_instance_3 == null) new Companion_3();
        return Companion_instance_3;
    }
    function PDouble(value) {
        Companion_getInstance_3();
        PNumber.call(this, value);
    }
    PDouble.prototype.getIndex_wcnjmk_k$ = function () {
        return 3;
    };
    PDouble.prototype.getPValue_berniv_k$ = function () {
        var tmp = this._get_value__3683422336_a43j40_k$();
        return typeof tmp === "number" ? tmp : THROW_CCE();
    };
    PDouble.prototype.toDebugClass_dfj843_k$ = function (references, copying) {
        return new Pair("Double", this.getPValue_berniv_k$());
    };
    PDouble.prototype.plus_85cudg_k$ = function (number) {
        return new PDouble(
            this.getPValue_berniv_k$() +
                numberToDouble(number.getPValue_berniv_k$())
        );
    };
    PDouble.prototype.minus_x4b36i_k$ = function (number) {
        return new PDouble(
            this.getPValue_berniv_k$() -
                numberToDouble(number.getPValue_berniv_k$())
        );
    };
    PDouble.prototype.times_q0lma8_k$ = function (number) {
        return new PDouble(
            this.getPValue_berniv_k$() *
                numberToDouble(number.getPValue_berniv_k$())
        );
    };
    PDouble.prototype.rem_lfazes_k$ = function (number) {
        return new PDouble(
            this.getPValue_berniv_k$() %
                numberToDouble(number.getPValue_berniv_k$())
        );
    };
    PDouble.prototype.unaryMinus_6uz0qp_k$ = function () {
        return new PDouble(-this.getPValue_berniv_k$());
    };
    PDouble.$metadata$ = {
        simpleName: "PDouble",
        kind: "class",
        interfaces: [],
    };
    function PInt$Companion$initializeIntProperties$lambda() {
        return function (p) {
            var tmp = Utils_getInstance();
            var tmp_0 = new PInt(
                IntCompanionObject_getInstance()._get_MIN_VALUE__1378605517_mssatp_k$()
            );
            return tmp.toProperty$default_127ngr_k$(tmp_0, null, 1, null);
        };
    }
    function PInt$Companion$initializeIntProperties$lambda_0() {
        return function (p) {
            var tmp = Utils_getInstance();
            var tmp_0 = new PInt(
                IntCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$()
            );
            return tmp.toProperty$default_127ngr_k$(tmp_0, null, 1, null);
        };
    }
    function Companion_4() {
        Companion_instance_4 = this;
    }
    Companion_4.prototype.initializeIntProperties_l5apoh_k$ = function () {
        var i = new PInt(0);
        var tmp = Companion_getInstance_8();
        tmp.setProperty_o08ehl_k$(
            i,
            "MIN_VALUE",
            PInt$Companion$initializeIntProperties$lambda()
        );
        var tmp_0 = Companion_getInstance_8();
        tmp_0.setProperty_o08ehl_k$(
            i,
            "MAX_VALUE",
            PInt$Companion$initializeIntProperties$lambda_0()
        );
    };
    Companion_4.$metadata$ = {
        simpleName: "Companion",
        kind: "object",
        interfaces: [],
    };
    var Companion_instance_4;
    function Companion_getInstance_4() {
        if (Companion_instance_4 == null) new Companion_4();
        return Companion_instance_4;
    }
    function PInt(value) {
        Companion_getInstance_4();
        PNumber.call(this, value);
    }
    PInt.prototype.getIndex_wcnjmk_k$ = function () {
        return 2;
    };
    PInt.prototype.getPValue_berniv_k$ = function () {
        var tmp = this._get_value__3683422336_a43j40_k$();
        return typeof tmp === "number" ? tmp : THROW_CCE();
    };
    PInt.prototype.toDebugClass_dfj843_k$ = function (references, copying) {
        return new Pair("Int", this.getPValue_berniv_k$());
    };
    PInt.prototype.plus_85cudg_k$ = function (number) {
        if (number instanceof PDouble) {
            return number.plus_85cudg_k$(this);
        } else {
        }
        var tmp = this.getPValue_berniv_k$();
        var tmp_0 = number.getPValue_berniv_k$();
        return new PInt(
            (tmp + (typeof tmp_0 === "number" ? tmp_0 : THROW_CCE())) | 0
        );
    };
    PInt.prototype.minus_x4b36i_k$ = function (number) {
        if (number instanceof PDouble) {
            return new PDouble(
                this.getPValue_berniv_k$() - number.getPValue_berniv_k$()
            );
        } else {
        }
        var tmp = this.getPValue_berniv_k$();
        var tmp_0 = number.getPValue_berniv_k$();
        return new PInt(
            (tmp - (typeof tmp_0 === "number" ? tmp_0 : THROW_CCE())) | 0
        );
    };
    PInt.prototype.times_q0lma8_k$ = function (number) {
        if (number instanceof PDouble) {
            return number.times_q0lma8_k$(this);
        } else {
        }
        var tmp = this.getPValue_berniv_k$();
        var tmp_0 = number.getPValue_berniv_k$();
        return new PInt(
            imul(tmp, typeof tmp_0 === "number" ? tmp_0 : THROW_CCE())
        );
    };
    PInt.prototype.rem_lfazes_k$ = function (number) {
        if (number instanceof PDouble) {
            return new PDouble(
                this.getPValue_berniv_k$() % number.getPValue_berniv_k$()
            );
        } else {
        }
        var tmp = this.getPValue_berniv_k$();
        var tmp_0 = number.getPValue_berniv_k$();
        return new PInt(
            tmp % (typeof tmp_0 === "number" ? tmp_0 : THROW_CCE())
        );
    };
    PInt.prototype.unaryMinus_6uz0qp_k$ = function () {
        return new PInt(-this.getPValue_berniv_k$() | 0);
    };
    PInt.$metadata$ = {
        simpleName: "PInt",
        kind: "class",
        interfaces: [],
    };
    function compareVariables($this, a, b) {
        var tmp;
        if (a instanceof Type) {
            tmp = compareType($this, a, b);
        } else {
            {
                return comparePrimitive(
                    $this,
                    a instanceof Primitive ? a : THROW_CCE(),
                    b
                );
            }
        }
        return tmp;
    }
    function compareType($this, type, variable) {
        var tmp;
        if (type instanceof Object_0) {
            tmp = variable instanceof Object_0;
        } else {
            {
                tmp = false;
            }
        }
        if (tmp) {
            return compareValues(
                type._get_name__804168992_das4rk_k$(),
                variable._get_name__804168992_das4rk_k$()
            );
        } else {
        }
        var tmp0_subject = variable;
        var tmp_0;
        if (tmp0_subject instanceof Object_0) {
            tmp_0 = -1;
        } else {
            if (tmp0_subject instanceof Type) {
                tmp_0 = type.equalToType_r0ad0h_k$(variable)
                    ? 0
                    : compareValues(
                          type._get_name__804168992_das4rk_k$(),
                          variable._get_name__804168992_das4rk_k$()
                      );
            } else {
                {
                    tmp_0 = 1;
                }
            }
        }
        return tmp_0;
    }
    function comparePrimitive($this, primitive, variable) {
        if (variable instanceof Type) {
            return -1;
        } else {
        }
        var tmp;
        if (primitive instanceof PNumber) {
            tmp = variable instanceof PNumber;
        } else {
            {
                tmp = false;
            }
        }
        if (tmp) {
            return primitive.compareTo_hp6kpi_k$(variable);
        } else {
        }
        var tmp_0 = primitive.getIndex_wcnjmk_k$();
        if (
            !(
                tmp_0 ===
                (variable instanceof Primitive
                    ? variable
                    : THROW_CCE()
                ).getIndex_wcnjmk_k$()
            )
        ) {
            return compareValues(
                primitive.getIndex_wcnjmk_k$(),
                variable.getIndex_wcnjmk_k$()
            );
        } else {
        }
        var tmp0_subject = variable;
        var tmp_1;
        if (tmp0_subject instanceof PList) {
            tmp_1 = compareValues(
                (primitive instanceof PList ? primitive : THROW_CCE())
                    .getPValue_berniv_k$()
                    ._get_size__809037418_ddoh9m_k$(),
                variable.getPValue_berniv_k$()._get_size__809037418_ddoh9m_k$()
            );
        } else {
            if (tmp0_subject instanceof PDictionary) {
                tmp_1 = compareValues(
                    (primitive instanceof PDictionary ? primitive : THROW_CCE())
                        .getPValue_berniv_k$()
                        ._get_size__809037418_ddoh9m_k$(),
                    variable
                        .getPValue_berniv_k$()
                        ._get_size__809037418_ddoh9m_k$()
                );
            } else {
                if (tmp0_subject instanceof PString) {
                    tmp_1 = compareValues(
                        (primitive instanceof PString
                            ? primitive
                            : THROW_CCE()
                        ).getPValue_berniv_k$(),
                        variable.getPValue_berniv_k$()
                    );
                } else {
                    {
                        throw PositionalException_init_$Create$(
                            "Non-comparable primitive",
                            "",
                            null,
                            null,
                            0,
                            28,
                            null
                        );
                    }
                }
            }
        }
        return tmp_1;
    }
    function sam$kotlin_Comparator$0(function_0) {
        this.function_1 = function_0;
    }
    sam$kotlin_Comparator$0.prototype.compare_6tbigh_k$ = function (a, b) {
        return this.function_1(a, b);
    };
    sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
        return this.compare_6tbigh_k$(a, b);
    };
    sam$kotlin_Comparator$0.$metadata$ = {
        simpleName: "sam$kotlin_Comparator$0",
        kind: "class",
        interfaces: [Comparator],
    };
    function PList$Companion$initializeListProperties$lambda() {
        return function (pr) {
            var tmp = Utils_getInstance();
            var tmp_0 = new PInt(
                (pr instanceof PList ? pr : THROW_CCE())
                    .getPValue_berniv_k$()
                    ._get_size__809037418_ddoh9m_k$()
            );
            return tmp.toProperty$default_127ngr_k$(tmp_0, null, 1, null);
        };
    }
    function PList$Companion$initializeEmbeddedListFunctions$lambda() {
        return function (_anonymous_parameter_0__2695192052, args) {
            var list = Utils_getInstance().castToPList_kkl29i_k$(
                ensureNotNull(args.getPropertyOrNull_191djg_k$("this"))
            );
            Unit_getInstance();
            return toString_0(list.getPValue_berniv_k$());
        };
    }
    function PList$Companion$initializeEmbeddedListFunctions$lambda_0() {
        return function (token, args) {
            var list = Utils_getInstance().castToPList_kkl29i_k$(
                ensureNotNull(args.getPropertyOrNull_191djg_k$("this"))
            );
            Unit_getInstance();
            var argument = Utils_getInstance().getIdent_dfe2u9_k$(
                token,
                "element",
                args
            );
            Unit_getInstance();
            var index = Utils_getInstance().getPInt_2trvra_k$(
                args,
                token,
                "index"
            );
            Unit_getInstance();
            var tmp;
            if (
                index.getPValue_berniv_k$() < 0
                    ? true
                    : index.getPValue_berniv_k$() >
                      list
                          .getPValue_berniv_k$()
                          ._get_size__809037418_ddoh9m_k$()
            ) {
                var tmp_0 = args
                    .getFileTable_m3scuc_k$()
                    ._get_filePath__151144490_2hzju2_k$();
                var tmp_1 = token
                    ._get_children__1387553196_my42wc_k$()
                    .get_fkrdnv_k$(1);
                throw PositionalException_init_$Create$(
                    "Index out of bounds",
                    tmp_0,
                    tmp_1,
                    null,
                    0,
                    24,
                    null
                );
            }
            list.getPValue_berniv_k$().add_ydlf05_k$(
                index.getPValue_berniv_k$(),
                argument
            );
            return Utils_getInstance()._get_NULL__774226340_csycv8_k$();
        };
    }
    function PList$Companion$initializeEmbeddedListFunctions$lambda_1() {
        return function (token, args) {
            var list = Utils_getInstance().castToPList_kkl29i_k$(
                ensureNotNull(args.getPropertyOrNull_191djg_k$("this"))
            );
            Unit_getInstance();
            var argument = Utils_getInstance().getIdent_dfe2u9_k$(
                token,
                "element",
                args
            );
            Unit_getInstance();
            var tmp;
            if (argument instanceof Primitive) {
                var removedIndex = -1;
                var iterator = list.getPValue_berniv_k$().iterator_jk1svi_k$();
                var index = 0;
                $l$loop: while (iterator.hasNext_bitz1p_k$()) {
                    var i = index;
                    index = (index + 1) | 0;
                    var e = iterator.next_20eer_k$();
                    var tmp_0;
                    if (e instanceof Primitive) {
                        tmp_0 = equals(e, argument);
                    } else {
                        {
                            tmp_0 = false;
                        }
                    }
                    if (tmp_0) {
                        removedIndex = i;
                        list.getPValue_berniv_k$().remove_8hbkc6_k$(e);
                        Unit_getInstance();
                        break $l$loop;
                    } else {
                    }
                }
                tmp = new PInt(removedIndex);
            } else {
                {
                    var removedIndex_0 = list
                        .getPValue_berniv_k$()
                        .indexOf_dcv8dt_k$(argument);
                    if (!(removedIndex_0 === -1)) {
                        list.getPValue_berniv_k$().removeAt_qvpkxi_k$(
                            removedIndex_0
                        );
                        Unit_getInstance();
                    }
                    tmp = new PInt(removedIndex_0);
                }
            }
            return tmp;
        };
    }
    function PList$Companion$initializeEmbeddedListFunctions$lambda_2() {
        return function (token, args) {
            var list = Utils_getInstance().castToPList_kkl29i_k$(
                ensureNotNull(args.getPropertyOrNull_191djg_k$("this"))
            );
            Unit_getInstance();
            var index = Utils_getInstance().getPInt_2trvra_k$(
                args,
                token,
                "index"
            );
            Unit_getInstance();
            var res;
            Unit_getInstance();
            var tmp;
            try {
                res = list
                    .getPValue_berniv_k$()
                    .removeAt_qvpkxi_k$(index.getPValue_berniv_k$());
                tmp = Unit_getInstance();
            } catch ($p) {
                var tmp_0;
                if ($p instanceof IndexOutOfBoundsException) {
                    var tmp_1 =
                        "index " +
                        index.getPValue_berniv_k$() +
                        " out of bounds for length " +
                        list
                            .getPValue_berniv_k$()
                            ._get_size__809037418_ddoh9m_k$();
                    var tmp_2 = args
                        .getFileTable_m3scuc_k$()
                        ._get_filePath__151144490_2hzju2_k$();
                    throw PositionalException_init_$Create$(
                        tmp_1,
                        tmp_2,
                        null,
                        null,
                        0,
                        28,
                        null
                    );
                } else {
                    {
                        throw $p;
                    }
                }
                tmp = tmp_0;
            }
            return res;
        };
    }
    function PList$Companion$initializeEmbeddedListFunctions$lambda_3() {
        return function (token, args) {
            var list = Utils_getInstance().castToPList_kkl29i_k$(
                ensureNotNull(args.getPropertyOrNull_191djg_k$("this"))
            );
            Unit_getInstance();
            var element = Utils_getInstance().getIdent_dfe2u9_k$(
                token,
                "element",
                args
            );
            Unit_getInstance();
            var tmp = Utils_getInstance();
            var tmp$ret$0;
            $l$block_2: {
                var tmp0_any_0 = list.getPValue_berniv_k$();
                var tmp_0;
                if (isInterface(tmp0_any_0, Collection)) {
                    tmp_0 = tmp0_any_0.isEmpty_y1axqb_k$();
                } else {
                    {
                        tmp_0 = false;
                    }
                }
                if (tmp_0) {
                    tmp$ret$0 = false;
                    break $l$block_2;
                } else {
                }
                var tmp0_iterator_1 = tmp0_any_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
                    var element_2 = tmp0_iterator_1.next_20eer_k$();
                    var tmp$ret$1;
                    $l$block_0: {
                        var tmp_1;
                        if (element_2 instanceof Primitive) {
                            tmp_1 = equals(element_2, element);
                        } else {
                            {
                                tmp_1 = false;
                            }
                        }
                        tmp$ret$1 = tmp_1;
                        break $l$block_0;
                    }
                    if (tmp$ret$1) {
                        tmp$ret$0 = true;
                        break $l$block_2;
                    } else {
                    }
                }
                tmp$ret$0 = false;
                break $l$block_2;
            }
            return tmp.toPInt_yzud9u_k$(tmp$ret$0);
        };
    }
    function PList$Companion$initializeEmbeddedListFunctions$lambda_4() {
        return function (token, args) {
            var list = Utils_getInstance().castToPList_kkl29i_k$(
                ensureNotNull(args.getPropertyOrNull_191djg_k$("this"))
            );
            Unit_getInstance();
            var element = Utils_getInstance().getIdent_dfe2u9_k$(
                token,
                "element",
                args
            );
            Unit_getInstance();
            return new PInt(
                list.getPValue_berniv_k$().indexOf_dcv8dt_k$(element)
            );
        };
    }
    function PList$Companion$initializeEmbeddedListFunctions$lambda$lambda(
        $args
    ) {
        return function (it) {
            var tmp = Node_init_$Create$("()", null, null, null, 14, null);
            Unit_getInstance();
            tmp._get_children__1387553196_my42wc_k$().add_1j60pz_k$(
                Identifier_init_$Create$("toString")
            );
            Unit_getInstance();
            var functionNode = new Call(tmp);
            Unit_getInstance();
            var f = it.getFunctionOrNull_p690c9_k$(functionNode);
            Unit_getInstance();
            var tmp_0;
            if (!(f == null)) {
                var tmp_1;
                if (it instanceof Type) {
                    tmp_1 = it._get_fileTable__504497375_8cd4nz_k$();
                } else {
                    {
                        tmp_1 = $args.getFileTable_m3scuc_k$();
                    }
                }
                var tmp0_fileTable = tmp_1;
                var tmp1_resolvingType = ResolvingMode_FUNCTION_getInstance();
                var tableForEvaluation = SymbolTable_init_$Create$(
                    null,
                    it,
                    tmp0_fileTable,
                    tmp1_resolvingType,
                    1,
                    null
                );
                var functionResult = functionNode.evaluateFunction_gez3ba_k$(
                        tableForEvaluation,
                    f
                    );
                tmp_0 = toString_0(functionResult);
            } else {
                tmp_0 = toString_0(it);
            }
            return tmp_0;
        };
    }
    function PList$Companion$initializeEmbeddedListFunctions$lambda_5() {
        return function (token, args) {
            var list = Utils_getInstance().getPList_l8gx25_k$(
                args,
                token,
                "this"
            );
            Unit_getInstance();
            var separator = Utils_getInstance().getPString_ac00og_k$(
                args,
                token,
                "separator"
            );
            Unit_getInstance();
            var prefix = Utils_getInstance().getPString_ac00og_k$(
                args,
                token,
                "prefix"
            );
            Unit_getInstance();
            var postfix = Utils_getInstance().getPString_ac00og_k$(
                args,
                token,
                "postfix"
            );
            Unit_getInstance();
            var tmp = list.getPValue_berniv_k$();
            var tmp_0 = separator.getPValue_berniv_k$();
            var tmp_1 = prefix.getPValue_berniv_k$();
            var tmp_2 = postfix.getPValue_berniv_k$();
            return joinToString$default(
                tmp,
                tmp_0,
                tmp_1,
                tmp_2,
                0,
                null,
                PList$Companion$initializeEmbeddedListFunctions$lambda$lambda(
                    args
                ),
                24,
                null
            );
        };
    }
    function PList$Companion$initializeEmbeddedListFunctions$lambda_6() {
        return function (_anonymous_parameter_0__2695192052, args) {
            var list = Utils_getInstance().castToPList_kkl29i_k$(
                ensureNotNull(args.getPropertyOrNull_191djg_k$("this"))
            );
            Unit_getInstance();
            list.getPValue_berniv_k$().clear_j9y8zo_k$();
            return Utils_getInstance()._get_NULL__774226340_csycv8_k$();
        };
    }
    function PList$Companion$initializeEmbeddedListFunctions$lambda_7() {
        return function (token, args) {
            var list = Utils_getInstance().getPList_l8gx25_k$(
                args,
                token,
                "this"
            );
            Unit_getInstance();
            reverse(list.getPValue_berniv_k$());
            return Utils_getInstance()._get_NULL__774226340_csycv8_k$();
        };
    }
    function PList$Companion$initializeEmbeddedListFunctions$lambda_8() {
        return function (token, args) {
            var list = Utils_getInstance().getPList_l8gx25_k$(
                args,
                token,
                "this"
            );
            Unit_getInstance();
            return reversed(list.getPValue_berniv_k$());
        };
    }
    function PList$Companion$initializeEmbeddedListFunctions$lambda$lambda_0() {
        return function (a, b) {
            return compareVariables(Companion_getInstance_5(), a, b);
        };
    }
    function PList$Companion$initializeEmbeddedListFunctions$lambda_9() {
        return function (token, args) {
            var list = Utils_getInstance().getPList_l8gx25_k$(
                args,
                token,
                "this"
            );
            Unit_getInstance();
            var desc = Utils_getInstance().getPInt_2trvra_k$(
                args,
                token,
                "desc"
            );
            Unit_getInstance();
            var tmp =
                PList$Companion$initializeEmbeddedListFunctions$lambda$lambda_0();
            var comparator = new sam$kotlin_Comparator$0(tmp);
            Unit_getInstance();
            sortWith(list.getPValue_berniv_k$(), comparator);
            var tmp_0;
            if (!(desc.getPValue_berniv_k$() === 0)) {
                tmp_0 = reverse(list.getPValue_berniv_k$());
            }
            return Utils_getInstance()._get_NULL__774226340_csycv8_k$();
        };
    }
    function PList$Companion$initializeEmbeddedListFunctions$lambda$lambda_1() {
        return function (a, b) {
            return compareVariables(Companion_getInstance_5(), a, b);
        };
    }
    function PList$Companion$initializeEmbeddedListFunctions$lambda_10() {
        return function (token, args) {
            var list = Utils_getInstance().getPList_l8gx25_k$(
                args,
                token,
                "this"
            );
            Unit_getInstance();
            var desc = Utils_getInstance().getPInt_2trvra_k$(
                args,
                token,
                "desc"
            );
            Unit_getInstance();
            var tmp =
                PList$Companion$initializeEmbeddedListFunctions$lambda$lambda_1();
            var comparator = new sam$kotlin_Comparator$0(tmp);
            Unit_getInstance();
            var res = toMutableList(
                sortedWith(list.getPValue_berniv_k$(), comparator)
            );
            Unit_getInstance();
            return !(desc.getPValue_berniv_k$() === 0)
                ? toMutableList(reversed(res))
                : res;
        };
    }
    function Companion_5() {
        Companion_instance_5 = this;
    }
    Companion_5.prototype.initializeListProperties_205zxs_k$ = function () {
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = ArrayList_init_$Create$();
            break $l$block;
        }
        var tmp = tmp$ret$0;
        var tmp0_this = Companion_getInstance_8();
        var tmp1 = tmp0_this._get_listId__2467282898_u85mb2_k$();
        tmp0_this._set_listId__2378703070_pghfrm_k$((tmp1 + 1) | 0);
        var p = new PList(tmp, tmp1);
        var tmp_0 = Companion_getInstance_8();
        tmp_0.setProperty_o08ehl_k$(
            p,
            "size",
            PList$Companion$initializeListProperties$lambda()
        );
    };
    Companion_5.prototype.initializeEmbeddedListFunctions_8qp7m6_k$ =
        function () {
            var tmp$ret$0;
            $l$block: {
                tmp$ret$0 = ArrayList_init_$Create$();
                break $l$block;
            }
            var tmp = tmp$ret$0;
            var tmp0_this = Companion_getInstance_8();
            var tmp1 = tmp0_this._get_listId__2467282898_u85mb2_k$();
            tmp0_this._set_listId__2378703070_pghfrm_k$((tmp1 + 1) | 0);
            var p = new PList(tmp, tmp1);
            var tmp_0 = Companion_getInstance_8();
            tmp_0.setFunction_9hbg6v_k$(
                p,
                EmbeddedFunction_init_$Create$(
                    "toString",
                    null,
                    null,
                    PList$Companion$initializeEmbeddedListFunctions$lambda(),
                    6,
                    null
                )
            );
            var tmp_1 = Companion_getInstance_8();
            var tmp_2 = listOf("element");
            var tmp_3 = listOf("index = this.size");
            tmp_1.setFunction_9hbg6v_k$(
                p,
                new EmbeddedFunction(
                    "add",
                    tmp_2,
                    tmp_3,
                    PList$Companion$initializeEmbeddedListFunctions$lambda_0()
                )
            );
            var tmp_4 = Companion_getInstance_8();
            var tmp_5 = listOf("element");
            tmp_4.setFunction_9hbg6v_k$(
                p,
                EmbeddedFunction_init_$Create$(
                    "remove",
                    tmp_5,
                    null,
                    PList$Companion$initializeEmbeddedListFunctions$lambda_1(),
                    4,
                    null
                )
            );
            var tmp_6 = Companion_getInstance_8();
            var tmp_7 = listOf("index");
            tmp_6.setFunction_9hbg6v_k$(
                p,
                EmbeddedFunction_init_$Create$(
                    "removeAt",
                    tmp_7,
                    null,
                    PList$Companion$initializeEmbeddedListFunctions$lambda_2(),
                    4,
                    null
                )
            );
            var tmp_8 = Companion_getInstance_8();
            var tmp_9 = listOf("element");
            tmp_8.setFunction_9hbg6v_k$(
                p,
                EmbeddedFunction_init_$Create$(
                    "has",
                    tmp_9,
                    null,
                    PList$Companion$initializeEmbeddedListFunctions$lambda_3(),
                    4,
                    null
                )
            );
            var tmp_10 = Companion_getInstance_8();
            var tmp_11 = listOf("element");
            tmp_10.setFunction_9hbg6v_k$(
                p,
                EmbeddedFunction_init_$Create$(
                    "index",
                    tmp_11,
                    null,
                    PList$Companion$initializeEmbeddedListFunctions$lambda_4(),
                    4,
                    null
                )
            );
            var tmp_12 = Companion_getInstance_8();
            var tmp_13 = listOf_0([
                'separator = ", "',
                'prefix = ""',
                'postfix = ""',
            ]);
            tmp_12.setFunction_9hbg6v_k$(
                p,
                EmbeddedFunction_init_$Create$(
                    "joinToString",
                    null,
                    tmp_13,
                    PList$Companion$initializeEmbeddedListFunctions$lambda_5(),
                    2,
                    null
                )
            );
            var tmp_14 = Companion_getInstance_8();
            tmp_14.setFunction_9hbg6v_k$(
                p,
                EmbeddedFunction_init_$Create$(
                    "clear",
                    null,
                    null,
                    PList$Companion$initializeEmbeddedListFunctions$lambda_6(),
                    6,
                    null
                )
            );
            var tmp_15 = Companion_getInstance_8();
            tmp_15.setFunction_9hbg6v_k$(
                p,
                EmbeddedFunction_init_$Create$(
                    "reverse",
                    null,
                    null,
                    PList$Companion$initializeEmbeddedListFunctions$lambda_7(),
                    6,
                    null
                )
            );
            var tmp_16 = Companion_getInstance_8();
            tmp_16.setFunction_9hbg6v_k$(
                p,
                EmbeddedFunction_init_$Create$(
                    "reversed",
                    null,
                    null,
                    PList$Companion$initializeEmbeddedListFunctions$lambda_8(),
                    6,
                    null
                )
            );
            var tmp_17 = Companion_getInstance_8();
            var tmp$ret$1;
            $l$block_0: {
                tmp$ret$1 = emptyList();
                break $l$block_0;
            }
            var tmp_18 = tmp$ret$1;
            var tmp_19 = listOf("desc = false");
            tmp_17.setFunction_9hbg6v_k$(
                p,
                new EmbeddedFunction(
                    "sort",
                    tmp_18,
                    tmp_19,
                    PList$Companion$initializeEmbeddedListFunctions$lambda_9()
                )
            );
            var tmp_20 = Companion_getInstance_8();
            var tmp_21 = listOf("desc = false");
            tmp_20.setFunction_9hbg6v_k$(
                p,
                EmbeddedFunction_init_$Create$(
                    "sorted",
                    null,
                    tmp_21,
                    PList$Companion$initializeEmbeddedListFunctions$lambda_10(),
                    2,
                    null
                )
            );
        };
    Companion_5.$metadata$ = {
        simpleName: "Companion",
        kind: "object",
        interfaces: [],
    };
    var Companion_instance_5;
    function Companion_getInstance_5() {
        if (Companion_instance_5 == null) new Companion_5();
        return Companion_instance_5;
    }
    function PList(value, id) {
        Companion_getInstance_5();
        Primitive.call(this, value);
        this.id_1 = id;
    }
    PList.prototype.getIndex_wcnjmk_k$ = function () {
        return 5;
    };
    PList.prototype.getPValue_berniv_k$ = function () {
        var tmp = this._get_value__3683422336_a43j40_k$();
        return isInterface(tmp, MutableList) ? tmp : THROW_CCE();
    };
    PList.prototype.get_xyyy8m_k$ = function (index, node, fileTable) {
        if (!(index instanceof PInt)) {
            var tmp = fileTable._get_filePath__151144490_2hzju2_k$();
            throw PositionalException_init_$Create$(
                "Expected integer as index",
                tmp,
                node,
                null,
                0,
                24,
                null
            );
        } else {
        }
        if (
            index.getPValue_berniv_k$() < 0
                ? true
                : index.getPValue_berniv_k$() >=
                  this.getPValue_berniv_k$()._get_size__809037418_ddoh9m_k$()
        ) {
            var tmp_0 = fileTable._get_filePath__151144490_2hzju2_k$();
            throw PositionalException_init_$Create$(
                "Index out of bounds",
                tmp_0,
                node,
                null,
                0,
                24,
                null
            );
        }
        return this.getPValue_berniv_k$().get_fkrdnv_k$(
            index.getPValue_berniv_k$()
        );
    };
    PList.prototype.toDebugClass_dfj843_k$ = function (references, copying) {
        var id = this.getDebugId_sdwqy0_k$();
        references._get_queue__3558538464_c6g84g_k$().remove_8hbkc0_k$(id);
        Unit_getInstance();
        var tmp$ret$0;
        $l$block: {
            var tmp0_get_0 = references._get_lists__3404727004_eq0xt0_k$();
            var tmp1_get_0 = id._get_second__4255435031_njbah_k$();
            tmp$ret$0 = (
                isInterface(tmp0_get_0, Map) ? tmp0_get_0 : THROW_CCE()
            ).get_1mhr4y_k$(tmp1_get_0);
            break $l$block;
        }
        if (!(tmp$ret$0 == null)) {
            return id;
        } else {
        }
        var tmp$ret$3;
        $l$block_2: {
            var tmp2_map_0 = this.getPValue_berniv_k$();
            var tmp$ret$2;
            $l$block_1: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(tmp2_map_0, 10)
                );
                var tmp0_iterator_1_2 = tmp2_map_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$1;
                    $l$block_0: {
                        tmp$ret$1 = equals(item_2_3, this)
                            ? id
                            : elementToDebug(item_2_3, references);
                        break $l$block_0;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$1);
                    Unit_getInstance();
                }
                tmp$ret$2 = tmp0_mapTo_0_1;
                break $l$block_1;
            }
            tmp$ret$3 = tmp$ret$2;
            break $l$block_2;
        }
        var tmp = tmp$ret$3;
        var tmp_0;
        if (copying) {
            var tmp$ret$4;
            $l$block_3: {
                tmp$ret$4 = ArrayList_init_$Create$();
                break $l$block_3;
            }
            var tmp_1 = tmp$ret$4;
            var tmp0_this = Companion_getInstance_8();
            var tmp1 = tmp0_this._get_listId__2467282898_u85mb2_k$();
            tmp0_this._set_listId__2378703070_pghfrm_k$((tmp1 + 1) | 0);
            tmp_0 = new PList(tmp_1, tmp1);
        } else {
            tmp_0 = null;
        }
        var res = new DebugList(tmp, tmp_0);
        {
            var tmp3_set_0 = references._get_lists__3404727004_eq0xt0_k$();
            var tmp_2 = id._get_second__4255435031_njbah_k$();
            var tmp4_set_0 = typeof tmp_2 === "number" ? tmp_2 : THROW_CCE();
            tmp3_set_0.put_3mhbri_k$(tmp4_set_0, res);
            Unit_getInstance();
        }
        return id;
    };
    PList.prototype.getDebugId_sdwqy0_k$ = function () {
        return new Pair("List", this.id_1);
    };
    PList.prototype.set_g480bi_k$ = function (
        index,
        value,
        nodeIndex,
        nodeValue,
        fileTable
    ) {
        var tmp = this.getPValue_berniv_k$();
        tmp.set_meu351_k$(
            (index instanceof PInt ? index : THROW_CCE()).getPValue_berniv_k$(),
            Utils_getInstance().toVariable_abd9s8_k$(value, nodeIndex)
        );
        Unit_getInstance();
    };
    PList.prototype.toString = function () {
        var res = new StringBuilder("[");
        var tmp0_iterator = this.getPValue_berniv_k$().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var e = tmp0_iterator.next_20eer_k$();
            res.append_ssq29y_k$(
                (equals(e, this) ? "this" : toString_0(e)) + ", "
            );
            Unit_getInstance();
        }
        if (res.toString() === "[") {
            return "[]";
        }
        return (
            toString_0(
                removeRange(
                    res,
                    numberRangeToNumber(
                        (_get_lastIndex__339712501_0(res) - 1) | 0,
                        _get_lastIndex__339712501_0(res)
                    )
                )
            ) + new Char(_Char___init__impl__380027157(93))
        );
    };
    PList.prototype.equals = function (other) {
        if (!(other instanceof PList)) return false;
        else {
        }
        if (equals(this.getPValue_berniv_k$(), other.getPValue_berniv_k$())) {
            return true;
        }
        return false;
    };
    PList.prototype.hashCode = function () {
        return hashCode(this.getPValue_berniv_k$());
    };
    PList.prototype.checkIndexType_1ovz24_k$ = function (index) {
        return index instanceof PInt;
    };
    PList.prototype.getCollection_xq05f0_k$ = function () {
        return this.getPValue_berniv_k$();
    };
    PList.prototype.getContainerId_75kvy2_k$ = function () {
        return this.id_1;
    };
    PList.$metadata$ = {
        simpleName: "PList",
        kind: "class",
        interfaces: [Indexable, NestableDebug, Containerable],
    };
    function PNumber$Companion$initializeEmbeddedNumberFunctions$lambda() {
        return function (_anonymous_parameter_0__2695192052, args) {
            var number = Utils_getInstance().castToPNumber_nv35t_k$(
                ensureNotNull(args.getPropertyOrNull_191djg_k$("this"))
            );
            Unit_getInstance();
            return toString_0(number.getPValue_berniv_k$());
        };
    }
    function PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_0() {
        return function (_anonymous_parameter_0__2695192052, args) {
            var number = Utils_getInstance().castToPNumber_nv35t_k$(
                ensureNotNull(args.getPropertyOrNull_191djg_k$("this"))
            );
            Unit_getInstance();
            return numberToDouble(number.getPValue_berniv_k$()) < 0.0
                ? number.unaryMinus_6uz0qp_k$()
                : number;
        };
    }
    function PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_1() {
        return function (token, args) {
            var first = Utils_getInstance().castToPNumber_nv35t_k$(
                ensureNotNull(args.getPropertyOrNull_191djg_k$("this"))
            );
            Unit_getInstance();
            var second = Utils_getInstance().getPNumber_l7npfb_k$(
                args,
                token,
                "other"
            );
            Unit_getInstance();
            return numberToDouble(first.getPValue_berniv_k$()) >
                numberToDouble(second.getPValue_berniv_k$())
                ? second
                : first;
        };
    }
    function PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_2() {
        return function (token, args) {
            var first = Utils_getInstance().castToPNumber_nv35t_k$(
                ensureNotNull(args.getPropertyOrNull_191djg_k$("this"))
            );
            Unit_getInstance();
            var second = Utils_getInstance().getPNumber_l7npfb_k$(
                args,
                token,
                "other"
            );
            Unit_getInstance();
            return numberToDouble(first.getPValue_berniv_k$()) <
                numberToDouble(second.getPValue_berniv_k$())
                ? second
                : first;
        };
    }
    function PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_3() {
        return function (token, args) {
            var number = Utils_getInstance().castToPNumber_nv35t_k$(
                ensureNotNull(args.getPropertyOrNull_191djg_k$("this"))
            );
            Unit_getInstance();
            var deg = Utils_getInstance().getPNumber_l7npfb_k$(
                args,
                token,
                "deg"
            );
            Unit_getInstance();
            var tmp$ret$0;
            $l$block: {
                var tmp0_pow_0 = numberToDouble(number.getPValue_berniv_k$());
                var tmp1_pow_0 = numberToDouble(deg.getPValue_berniv_k$());
                tmp$ret$0 = Math.pow(tmp0_pow_0, tmp1_pow_0);
                break $l$block;
            }
            return new PDouble(tmp$ret$0);
        };
    }
    function PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_4() {
        return function (token, args) {
            var number = Utils_getInstance().getPNumber_l7npfb_k$(
                args,
                token,
                "this"
            );
            Unit_getInstance();
            var digits = Utils_getInstance().getPInt_2trvra_k$(
                args,
                token,
                "digits"
            );
            Unit_getInstance();
            var tmp;
            if (digits.getPValue_berniv_k$() < 0) {
                var tmp$ret$0;
                $l$block: {
                    var tmp0_pow_0 = -digits.getPValue_berniv_k$() | 0;
                    tmp$ret$0 = Math.pow(10.0, tmp0_pow_0);
                    break $l$block;
                }
                var divisor = tmp$ret$0;
                tmp = new PDouble(
                    roundToInt(
                        numberToDouble(number.getPValue_berniv_k$()) / divisor
                    ) * divisor
                );
            } else {
                tmp = new PDouble(
                    round(
                        numberToDouble(number.getPValue_berniv_k$()),
                        digits.getPValue_berniv_k$()
                    )
                );
            }
            return tmp;
        };
    }
    function PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_5() {
        return function (token, args) {
            var number = Utils_getInstance().getPNumber_l7npfb_k$(
                args,
                token,
                "this"
            );
            Unit_getInstance();
            var tmp$ret$0;
            $l$block: {
                var tmp0_floor_0 = numberToDouble(number.getPValue_berniv_k$());
                tmp$ret$0 = Math.floor(tmp0_floor_0);
                break $l$block;
            }
            return new PInt(numberToInt(tmp$ret$0));
        };
    }
    function PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_6() {
        return function (token, args) {
            var number = Utils_getInstance().getPNumber_l7npfb_k$(
                args,
                token,
                "this"
            );
            Unit_getInstance();
            var tmp$ret$0;
            $l$block: {
                var tmp0_ceil_0 = numberToDouble(number.getPValue_berniv_k$());
                tmp$ret$0 = Math.ceil(tmp0_ceil_0);
                break $l$block;
            }
            return new PInt(numberToInt(tmp$ret$0));
        };
    }
    function PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_7() {
        return function (token, args) {
            var number = Utils_getInstance().getPNumber_l7npfb_k$(
                args,
                token,
                "this"
            );
            Unit_getInstance();
            var divisor = Utils_getInstance().getPNumber_l7npfb_k$(
                args,
                token,
                "divisor"
            );
            Unit_getInstance();
            return (
                (numberToInt(number.getPValue_berniv_k$()) /
                    numberToInt(divisor.getPValue_berniv_k$())) |
                0
            );
        };
    }
    function PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_8() {
        return function (token, args) {
            var tmp$ret$0;
            $l$block: {
                var tmp0_sin_0 = numberToDouble(
                    Utils_getInstance()
                        .getPNumber_l7npfb_k$(args, token, "this")
                        .getPValue_berniv_k$()
                );
                tmp$ret$0 = Math.sin(tmp0_sin_0);
                break $l$block;
            }
            return new PDouble(tmp$ret$0);
        };
    }
    function PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_9() {
        return function (token, args) {
            var tmp$ret$0;
            $l$block: {
                var tmp0_cos_0 = numberToDouble(
                    Utils_getInstance()
                        .getPNumber_l7npfb_k$(args, token, "this")
                        .getPValue_berniv_k$()
                );
                tmp$ret$0 = Math.cos(tmp0_cos_0);
                break $l$block;
            }
            return new PDouble(tmp$ret$0);
        };
    }
    function PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_10() {
        return function (token, args) {
            var tmp$ret$0;
            $l$block: {
                var tmp0_sqrt_0 = numberToDouble(
                    Utils_getInstance()
                        .getPNumber_l7npfb_k$(args, token, "this")
                        .getPValue_berniv_k$()
                );
                tmp$ret$0 = Math.sqrt(tmp0_sqrt_0);
                break $l$block;
            }
            return new PDouble(tmp$ret$0);
        };
    }
    function PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_11() {
        return function (token, args) {
            var tmp$ret$0;
            $l$block: {
                var tmp0_asin_0 = numberToDouble(
                    Utils_getInstance()
                        .getPNumber_l7npfb_k$(args, token, "this")
                        .getPValue_berniv_k$()
                );
                tmp$ret$0 = Math.asin(tmp0_asin_0);
                break $l$block;
            }
            return new PDouble(tmp$ret$0);
        };
    }
    function PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_12() {
        return function (token, args) {
            var tmp$ret$0;
            $l$block: {
                var tmp0_acos_0 = numberToDouble(
                    Utils_getInstance()
                        .getPNumber_l7npfb_k$(args, token, "this")
                        .getPValue_berniv_k$()
                );
                tmp$ret$0 = Math.acos(tmp0_acos_0);
                break $l$block;
            }
            return new PDouble(tmp$ret$0);
        };
    }
    function PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_13() {
        return function (token, args) {
            var tmp$ret$0;
            $l$block: {
                var tmp0_tan_0 = numberToDouble(
                    Utils_getInstance()
                        .getPNumber_l7npfb_k$(args, token, "this")
                        .getPValue_berniv_k$()
                );
                tmp$ret$0 = Math.tan(tmp0_tan_0);
                break $l$block;
            }
            return new PDouble(tmp$ret$0);
        };
    }
    function PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_14() {
        return function (token, args) {
            var tmp$ret$0;
            $l$block: {
                var tmp0_atan_0 = numberToDouble(
                    Utils_getInstance()
                        .getPNumber_l7npfb_k$(args, token, "this")
                        .getPValue_berniv_k$()
                );
                tmp$ret$0 = Math.atan(tmp0_atan_0);
                break $l$block;
            }
            return new PDouble(tmp$ret$0);
        };
    }
    function PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_15() {
        return function (token, args) {
            var y = Utils_getInstance().getPNumber_l7npfb_k$(args, token, "x");
            Unit_getInstance();
            var tmp$ret$0;
            $l$block: {
                var tmp0_atan2_0 = numberToDouble(
                    Utils_getInstance()
                        .getPNumber_l7npfb_k$(args, token, "this")
                        .getPValue_berniv_k$()
                );
                var tmp1_atan2_0 = numberToDouble(y.getPValue_berniv_k$());
                tmp$ret$0 = Math.atan2(tmp0_atan2_0, tmp1_atan2_0);
                break $l$block;
            }
            return new PDouble(tmp$ret$0);
        };
    }
    function Companion_6() {
        Companion_instance_6 = this;
    }
    Companion_6.prototype.initializeEmbeddedNumberFunctions_y7q5if_k$ =
        function () {
            var n = new PNumber(0);
            var tmp = Companion_getInstance_8();
            tmp.setFunction_9hbg6v_k$(
                n,
                EmbeddedFunction_init_$Create$(
                    "toString",
                    null,
                    null,
                    PNumber$Companion$initializeEmbeddedNumberFunctions$lambda(),
                    6,
                    null
                )
            );
            var tmp_0 = Companion_getInstance_8();
            tmp_0.setFunction_9hbg6v_k$(
                n,
                EmbeddedFunction_init_$Create$(
                    "abs",
                    null,
                    null,
                    PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_0(),
                    6,
                    null
                )
            );
            var tmp_1 = Companion_getInstance_8();
            var tmp_2 = listOf("other");
            tmp_1.setFunction_9hbg6v_k$(
                n,
                EmbeddedFunction_init_$Create$(
                    "min",
                    tmp_2,
                    null,
                    PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_1(),
                    4,
                    null
                )
            );
            var tmp_3 = Companion_getInstance_8();
            var tmp_4 = listOf("other");
            tmp_3.setFunction_9hbg6v_k$(
                n,
                EmbeddedFunction_init_$Create$(
                    "max",
                    tmp_4,
                    null,
                    PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_2(),
                    4,
                    null
                )
            );
            var tmp_5 = Companion_getInstance_8();
            var tmp_6 = listOf("deg");
            tmp_5.setFunction_9hbg6v_k$(
                n,
                EmbeddedFunction_init_$Create$(
                    "pow",
                    tmp_6,
                    null,
                    PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_3(),
                    4,
                    null
                )
            );
            var tmp_7 = Companion_getInstance_8();
            var tmp_8 = listOf("digits = 0");
            tmp_7.setFunction_9hbg6v_k$(
                n,
                EmbeddedFunction_init_$Create$(
                    "round",
                    null,
                    tmp_8,
                    PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_4(),
                    2,
                    null
                )
            );
            var tmp_9 = Companion_getInstance_8();
            tmp_9.setFunction_9hbg6v_k$(
                n,
                EmbeddedFunction_init_$Create$(
                    "floor",
                    null,
                    null,
                    PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_5(),
                    6,
                    null
                )
            );
            var tmp_10 = Companion_getInstance_8();
            tmp_10.setFunction_9hbg6v_k$(
                n,
                EmbeddedFunction_init_$Create$(
                    "ceil",
                    null,
                    null,
                    PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_6(),
                    6,
                    null
                )
            );
            var tmp_11 = Companion_getInstance_8();
            var tmp_12 = listOf("divisor");
            tmp_11.setFunction_9hbg6v_k$(
                n,
                EmbeddedFunction_init_$Create$(
                    "intDiv",
                    tmp_12,
                    null,
                    PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_7(),
                    4,
                    null
                )
            );
            var tmp_13 = Companion_getInstance_8();
            tmp_13.setFunction_9hbg6v_k$(
                n,
                EmbeddedFunction_init_$Create$(
                    "sin",
                    null,
                    null,
                    PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_8(),
                    6,
                    null
                )
            );
            var tmp_14 = Companion_getInstance_8();
            tmp_14.setFunction_9hbg6v_k$(
                n,
                EmbeddedFunction_init_$Create$(
                    "cos",
                    null,
                    null,
                    PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_9(),
                    6,
                    null
                )
            );
            var tmp_15 = Companion_getInstance_8();
            tmp_15.setFunction_9hbg6v_k$(
                n,
                EmbeddedFunction_init_$Create$(
                    "sqrt",
                    null,
                    null,
                    PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_10(),
                    6,
                    null
                )
            );
            var tmp_16 = Companion_getInstance_8();
            tmp_16.setFunction_9hbg6v_k$(
                n,
                EmbeddedFunction_init_$Create$(
                    "asin",
                    null,
                    null,
                    PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_11(),
                    6,
                    null
                )
            );
            var tmp_17 = Companion_getInstance_8();
            tmp_17.setFunction_9hbg6v_k$(
                n,
                EmbeddedFunction_init_$Create$(
                    "acos",
                    null,
                    null,
                    PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_12(),
                    6,
                    null
                )
            );
            var tmp_18 = Companion_getInstance_8();
            tmp_18.setFunction_9hbg6v_k$(
                n,
                EmbeddedFunction_init_$Create$(
                    "tan",
                    null,
                    null,
                    PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_13(),
                    6,
                    null
                )
            );
            var tmp_19 = Companion_getInstance_8();
            tmp_19.setFunction_9hbg6v_k$(
                n,
                EmbeddedFunction_init_$Create$(
                    "atan",
                    null,
                    null,
                    PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_14(),
                    6,
                    null
                )
            );
            var tmp_20 = Companion_getInstance_8();
            var tmp_21 = listOf("x");
            tmp_20.setFunction_9hbg6v_k$(
                n,
                EmbeddedFunction_init_$Create$(
                    "atan2",
                    tmp_21,
                    null,
                    PNumber$Companion$initializeEmbeddedNumberFunctions$lambda_15(),
                    4,
                    null
                )
            );
        };
    Companion_6.$metadata$ = {
        simpleName: "Companion",
        kind: "object",
        interfaces: [],
    };
    var Companion_instance_6;
    function Companion_getInstance_6() {
        if (Companion_instance_6 == null) new Companion_6();
        return Companion_instance_6;
    }
    function PNumber(value) {
        Companion_getInstance_6();
        Primitive.call(this, value);
    }
    PNumber.prototype.getIndex_wcnjmk_k$ = function () {
        return 1;
    };
    PNumber.prototype.getPValue_berniv_k$ = function () {
        var tmp = this._get_value__3683422336_a43j40_k$();
        return isNumber(tmp) ? tmp : THROW_CCE();
    };
    PNumber.prototype.equals = function (other) {
        if (!(other instanceof PNumber)) {
            return false;
        } else {
        }
        return (
            numberToDouble(this.getPValue_berniv_k$()) ===
            numberToDouble(other.getPValue_berniv_k$())
        );
    };
    PNumber.prototype.toString = function () {
        return toString_0(this._get_value__3683422336_a43j40_k$());
    };
    PNumber.prototype.hashCode = function () {
        return hashCode(this.getPValue_berniv_k$());
    };
    PNumber.prototype.toDebugClass_dfj843_k$ = function (references, copying) {
        throw Exception_init_$Create$("class is not instantiable");
    };
    PNumber.prototype.compareTo_hp6kpi_k$ = function (number) {
        return compareTo(
            numberToDouble(this.getPValue_berniv_k$()),
            numberToDouble(number.getPValue_berniv_k$())
        );
    };
    PNumber.prototype.not_2cb7_k$ = function () {
        return Utils_getInstance().toPInt_yzud9u_k$(
            numberToDouble(this.getPValue_berniv_k$()) === 0.0
        );
    };
    PNumber.prototype.div_scc0gr_k$ = function (number) {
        return new PDouble(
            numberToDouble(this.getPValue_berniv_k$()) /
                numberToDouble(number.getPValue_berniv_k$())
        );
    };
    PNumber.prototype.plus_85cudg_k$ = function (number) {
        throw Exception_init_$Create$("overriden in inheritants");
    };
    PNumber.prototype.minus_x4b36i_k$ = function (number) {
        throw Exception_init_$Create$("overriden in inheritants");
    };
    PNumber.prototype.times_q0lma8_k$ = function (number) {
        throw Exception_init_$Create$("overriden in inheritants");
    };
    PNumber.prototype.rem_lfazes_k$ = function (number) {
        throw Exception_init_$Create$("overriden in inheritants");
    };
    PNumber.prototype.unaryMinus_6uz0qp_k$ = function () {
        throw Exception_init_$Create$("overriden in inheritants");
    };
    PNumber.$metadata$ = {
        simpleName: "PNumber",
        kind: "class",
        interfaces: [],
    };
    function PString$Companion$initializeStringProperties$lambda() {
        return function (p) {
            var tmp = Utils_getInstance();
            var tmp_0 = new PInt(
                (p instanceof PString
                    ? p
                    : THROW_CCE()
                ).getPValue_berniv_k$().length
            );
            return tmp.toProperty$default_127ngr_k$(tmp_0, null, 1, null);
        };
    }
    function PString$Companion$initializeEmbeddedStringFunctions$lambda() {
        return function (token, args) {
            var string = Utils_getInstance().castToPString_ne896x_k$(
                ensureNotNull(args.getPropertyOrNull_191djg_k$("this"))
            );
            Unit_getInstance();
            return string.getPValue_berniv_k$();
        };
    }
    function PString$Companion$initializeEmbeddedStringFunctions$lambda_0() {
        return function (token, args) {
            var string = Utils_getInstance().castToPString_ne896x_k$(
                ensureNotNull(args.getPropertyOrNull_191djg_k$("this"))
            );
            Unit_getInstance();
            var found = Utils_getInstance().getPString_ac00og_k$(
                args,
                token,
                "found"
            );
            Unit_getInstance();
            var tmp = string.getPValue_berniv_k$();
            var tmp_0 = found.getPValue_berniv_k$();
            return new PInt(indexOf$default(tmp, tmp_0, 0, false, 6, null));
        };
    }
    function PString$Companion$initializeEmbeddedStringFunctions$lambda_1() {
        return function (token, args) {
            var string = Utils_getInstance().castToPString_ne896x_k$(
                ensureNotNull(args.getPropertyOrNull_191djg_k$("this"))
            );
            Unit_getInstance();
            var found = Utils_getInstance().getPString_ac00og_k$(
                args,
                token,
                "found"
            );
            Unit_getInstance();
            var tmp = Utils_getInstance();
            var tmp_0 = string.getPValue_berniv_k$();
            var tmp_1 = found.getPValue_berniv_k$();
            return tmp.toPInt_yzud9u_k$(
                contains$default(tmp_0, tmp_1, false, 2, null)
            );
        };
    }
    function PString$Companion$initializeEmbeddedStringFunctions$lambda_2() {
        return function (token, args) {
            var string = Utils_getInstance().castToPString_ne896x_k$(
                ensureNotNull(args.getPropertyOrNull_191djg_k$("this"))
            );
            Unit_getInstance();
            var start = Utils_getInstance().getPInt_2trvra_k$(
                args,
                token,
                "start"
            );
            Unit_getInstance();
            var end = Utils_getInstance().getPInt_2trvra_k$(args, token, "end");
            Unit_getInstance();
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_substring_0 = string.getPValue_berniv_k$();
                var tmp1_substring_0 = start.getPValue_berniv_k$();
                var tmp2_substring_0 = end.getPValue_berniv_k$();
                var tmp$ret$0;
                $l$block: {
                    tmp$ret$0 = tmp0_substring_0;
                    break $l$block;
                }
                tmp$ret$1 = tmp$ret$0.substring(
                    tmp1_substring_0,
                    tmp2_substring_0
                );
                break $l$block_0;
            }
            return tmp$ret$1;
        };
    }
    function PString$Companion$initializeEmbeddedStringFunctions$lambda_3() {
        return function (token, args) {
            var string = Utils_getInstance().castToPString_ne896x_k$(
                ensureNotNull(args.getPropertyOrNull_191djg_k$("this"))
            );
            Unit_getInstance();
            var oldString = Utils_getInstance().getPString_ac00og_k$(
                args,
                token,
                "oldString"
            );
            Unit_getInstance();
            var newString = Utils_getInstance().getPString_ac00og_k$(
                args,
                token,
                "newString"
            );
            Unit_getInstance();
            var tmp = string.getPValue_berniv_k$();
            var tmp_0 = oldString.getPValue_berniv_k$();
            var tmp_1 = newString.getPValue_berniv_k$();
            return replace$default(tmp, tmp_0, tmp_1, false, 4, null);
        };
    }
    function PString$Companion$initializeEmbeddedStringFunctions$lambda_4() {
        return function (_anonymous_parameter_0__2695192052, args) {
            var string = Utils_getInstance().castToPString_ne896x_k$(
                ensureNotNull(args.getPropertyOrNull_191djg_k$("this"))
            );
            Unit_getInstance();
            var tmp$ret$0;
            $l$block: {
                var tmp0_reversed_0 = string.getPValue_berniv_k$();
                tmp$ret$0 = toString_0(
                    reversed_0(
                        isCharSequence(tmp0_reversed_0)
                            ? tmp0_reversed_0
                            : THROW_CCE()
                    )
                );
                break $l$block;
            }
            return tmp$ret$0;
        };
    }
    function PString$Companion$initializeEmbeddedStringFunctions$lambda_5() {
        return function (_anonymous_parameter_0__2695192052, args) {
            var string = Utils_getInstance().castToPString_ne896x_k$(
                ensureNotNull(args.getPropertyOrNull_191djg_k$("this"))
            );
            Unit_getInstance();
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_lowercase_0 = string.getPValue_berniv_k$();
                var tmp$ret$0;
                $l$block: {
                    tmp$ret$0 = tmp0_lowercase_0;
                    break $l$block;
                }
                tmp$ret$1 = tmp$ret$0.toLowerCase();
                break $l$block_0;
            }
            return tmp$ret$1;
        };
    }
    function PString$Companion$initializeEmbeddedStringFunctions$lambda_6() {
        return function (_anonymous_parameter_0__2695192052, args) {
            var string = Utils_getInstance().castToPString_ne896x_k$(
                ensureNotNull(args.getPropertyOrNull_191djg_k$("this"))
            );
            Unit_getInstance();
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_uppercase_0 = string.getPValue_berniv_k$();
                var tmp$ret$0;
                $l$block: {
                    tmp$ret$0 = tmp0_uppercase_0;
                    break $l$block;
                }
                tmp$ret$1 = tmp$ret$0.toUpperCase();
                break $l$block_0;
            }
            return tmp$ret$1;
        };
    }
    function Companion_7() {
        Companion_instance_7 = this;
    }
    Companion_7.prototype.initializeStringProperties_si2tfh_k$ = function () {
        var s = new PString("");
        var tmp = Companion_getInstance_8();
        tmp.setProperty_o08ehl_k$(
            s,
            "size",
            PString$Companion$initializeStringProperties$lambda()
        );
    };
    Companion_7.prototype.initializeEmbeddedStringFunctions_f93g67_k$ =
        function () {
            var s = new PString("");
            var tmp = Companion_getInstance_8();
            tmp.setFunction_9hbg6v_k$(
                s,
                EmbeddedFunction_init_$Create$(
                    "toString",
                    null,
                    null,
                    PString$Companion$initializeEmbeddedStringFunctions$lambda(),
                    6,
                    null
                )
            );
            var tmp_0 = Companion_getInstance_8();
            var tmp_1 = listOf("found");
            tmp_0.setFunction_9hbg6v_k$(
                s,
                EmbeddedFunction_init_$Create$(
                    "index",
                    tmp_1,
                    null,
                    PString$Companion$initializeEmbeddedStringFunctions$lambda_0(),
                    4,
                    null
                )
            );
            var tmp_2 = Companion_getInstance_8();
            var tmp_3 = listOf("found");
            tmp_2.setFunction_9hbg6v_k$(
                s,
                EmbeddedFunction_init_$Create$(
                    "has",
                    tmp_3,
                    null,
                    PString$Companion$initializeEmbeddedStringFunctions$lambda_1(),
                    4,
                    null
                )
            );
            var tmp_4 = Companion_getInstance_8();
            var tmp_5 = listOf("start");
            var tmp_6 = listOf("end = this.size");
            tmp_4.setFunction_9hbg6v_k$(
                s,
                new EmbeddedFunction(
                    "substring",
                    tmp_5,
                    tmp_6,
                    PString$Companion$initializeEmbeddedStringFunctions$lambda_2()
                )
            );
            var tmp_7 = Companion_getInstance_8();
            var tmp_8 = listOf_0(["oldString", "newString"]);
            tmp_7.setFunction_9hbg6v_k$(
                s,
                EmbeddedFunction_init_$Create$(
                    "replace",
                    tmp_8,
                    null,
                    PString$Companion$initializeEmbeddedStringFunctions$lambda_3(),
                    4,
                    null
                )
            );
            var tmp_9 = Companion_getInstance_8();
            tmp_9.setFunction_9hbg6v_k$(
                s,
                EmbeddedFunction_init_$Create$(
                    "reversed",
                    null,
                    null,
                    PString$Companion$initializeEmbeddedStringFunctions$lambda_4(),
                    6,
                    null
                )
            );
            var tmp_10 = Companion_getInstance_8();
            tmp_10.setFunction_9hbg6v_k$(
                s,
                EmbeddedFunction_init_$Create$(
                    "lowercase",
                    null,
                    null,
                    PString$Companion$initializeEmbeddedStringFunctions$lambda_5(),
                    6,
                    null
                )
            );
            var tmp_11 = Companion_getInstance_8();
            tmp_11.setFunction_9hbg6v_k$(
                s,
                EmbeddedFunction_init_$Create$(
                    "uppercase",
                    null,
                    null,
                    PString$Companion$initializeEmbeddedStringFunctions$lambda_6(),
                    6,
                    null
                )
            );
        };
    Companion_7.$metadata$ = {
        simpleName: "Companion",
        kind: "object",
        interfaces: [],
    };
    var Companion_instance_7;
    function Companion_getInstance_7() {
        if (Companion_instance_7 == null) new Companion_7();
        return Companion_instance_7;
    }
    function PString(value) {
        Companion_getInstance_7();
        Primitive.call(this, value);
    }
    PString.prototype.getIndex_wcnjmk_k$ = function () {
        return 4;
    };
    PString.prototype.getPValue_berniv_k$ = function () {
        var tmp = this._get_value__3683422336_a43j40_k$();
        return typeof tmp === "string" ? tmp : THROW_CCE();
    };
    PString.prototype.get_xyyy8m_k$ = function (index, node, fileTable) {
        if (!isInt(index)) {
            var tmp = fileTable._get_filePath__151144490_2hzju2_k$();
            throw PositionalException_init_$Create$(
                "Expected integer",
                tmp,
                node,
                null,
                0,
                24,
                null
            );
        }
        var tmp_0;
        if ((typeof index === "number" ? index : THROW_CCE()) < 0) {
            tmp_0 = true;
        } else {
            {
                tmp_0 = index >= this.getPValue_berniv_k$().length;
            }
        }
        if (tmp_0) {
            var tmp_1 = fileTable._get_filePath__151144490_2hzju2_k$();
            throw PositionalException_init_$Create$(
                "Index out of bounds",
                tmp_1,
                node,
                null,
                0,
                24,
                null
            );
        } else {
        }
        return new Char(charSequenceGet(this.getPValue_berniv_k$(), index));
    };
    PString.prototype.toDebugClass_dfj843_k$ = function (references, copying) {
        return new Pair("String", this.getPValue_berniv_k$());
    };
    PString.prototype.set_g480bi_k$ = function (
        index,
        value,
        nodeIndex,
        nodeValue,
        fileTable
    ) {
        var tmp = fileTable._get_filePath__151144490_2hzju2_k$();
        throw PositionalException_init_$Create$(
            "Set is not implemented for String",
            tmp,
            nodeValue,
            null,
            0,
            24,
            null
        );
    };
    PString.prototype.toString = function () {
        return toString_0(this._get_value__3683422336_a43j40_k$());
    };
    PString.prototype.checkIndexType_1ovz24_k$ = function (index) {
        return index instanceof PInt;
    };
    PString.$metadata$ = {
        simpleName: "PString",
        kind: "class",
        interfaces: [Indexable],
    };
    function formatClassName($this) {
        var tmp$ret$1;
        $l$block_0: {
            var tmp = toString_0(getKClassFromExpression($this));
            var tmp_0 = charArrayOf([_Char___init__impl__380027157(46)]);
            var tmp0_substring_0 = last_0(
                split$default_0(tmp, tmp_0, false, 0, 6, null)
            );
            var tmp$ret$0;
            $l$block: {
                tmp$ret$0 = tmp0_substring_0;
                break $l$block;
            }
            tmp$ret$1 = tmp$ret$0.substring(1);
            break $l$block_0;
        }
        return tmp$ret$1;
    }
    function Companion_8() {
        Companion_instance_8 = this;
        this.dictionaryId_1 = 0;
        this.listId_1 = 0;
        var tmp = this;
        var tmp$ret$3;
        $l$block_2: {
            var tmp$ret$2;
            $l$block_1: {
                var list_1_1 = ArrayList_init_$Create$_0(7);
                {
                    {
                    }
                    var inductionVariable = 0;
                    if (inductionVariable < 7)
                        do {
                            var index_3_3 = inductionVariable;
                            inductionVariable = (inductionVariable + 1) | 0;
                            {
                                var tmp$ret$1;
                                $l$block_0: {
                                    var tmp$ret$0;
                                    $l$block: {
                                        tmp$ret$0 =
                                            LinkedHashMap_init_$Create$();
                                        break $l$block;
                                    }
                                    tmp$ret$1 = tmp$ret$0;
                                    break $l$block_0;
                                }
                                list_1_1.add_1j60pz_k$(tmp$ret$1);
                                Unit_getInstance();
                            }
                        } while (inductionVariable < 7);
                }
                tmp$ret$2 = list_1_1;
                break $l$block_1;
            }
            tmp$ret$3 = tmp$ret$2;
            break $l$block_2;
        }
        tmp.properties_1 = tmp$ret$3;
        var tmp_0 = this;
        var tmp$ret$7;
        $l$block_6: {
            var tmp$ret$6;
            $l$block_5: {
                var list_1_1_0 = ArrayList_init_$Create$_0(7);
                {
                    {
                    }
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < 7)
                        do {
                            var index_3_3_0 = inductionVariable_0;
                            inductionVariable_0 = (inductionVariable_0 + 1) | 0;
                            {
                                var tmp$ret$5;
                                $l$block_4: {
                                    var tmp$ret$4;
                                    $l$block_3: {
                                        tmp$ret$4 =
                                            LinkedHashSet_init_$Create$();
                                        break $l$block_3;
                                    }
                                    tmp$ret$5 = tmp$ret$4;
                                    break $l$block_4;
                                }
                                list_1_1_0.add_1j60pz_k$(tmp$ret$5);
                                Unit_getInstance();
                            }
                        } while (inductionVariable_0 < 7);
                }
                tmp$ret$6 = list_1_1_0;
                break $l$block_5;
            }
            tmp$ret$7 = tmp$ret$6;
            break $l$block_6;
        }
        tmp_0.functions_1 = tmp$ret$7;
    }
    Companion_8.prototype._set_dictionaryId__2464069414_3w32dm_k$ = function (
        _set____804775014
    ) {
        this.dictionaryId_1 = _set____804775014;
    };
    Companion_8.prototype._get_dictionaryId__3404222234_eqbrae_k$ =
        function () {
            return this.dictionaryId_1;
        };
    Companion_8.prototype._set_listId__2378703070_pghfrm_k$ = function (
        _set____804775014
    ) {
        this.listId_1 = _set____804775014;
    };
    Companion_8.prototype._get_listId__2467282898_u85mb2_k$ = function () {
        return this.listId_1;
    };
    Companion_8.prototype.setProperty_o08ehl_k$ = function (
        primitive,
        name,
        property
    ) {
        {
            var tmp0_set_0 = this.properties_1.get_fkrdnv_k$(
                primitive.getIndex_wcnjmk_k$()
            );
            tmp0_set_0.put_3mhbri_k$(name, property);
            Unit_getInstance();
        }
    };
    Companion_8.prototype.setFunction_9hbg6v_k$ = function (
        primitive,
        embeddedFunction
    ) {
        this.functions_1
            .get_fkrdnv_k$(primitive.getIndex_wcnjmk_k$())
            .add_1j60pz_k$(embeddedFunction);
        Unit_getInstance();
    };
    Companion_8.prototype.getAllProperties_tzh4vy_k$ = function () {
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_map_0 = this.properties_1;
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(tmp0_map_0, 10)
                );
                var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = toMutableMap(item_2_3);
                        break $l$block;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
                    Unit_getInstance();
                }
                tmp$ret$1 = tmp0_mapTo_0_1;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        return tmp$ret$2;
    };
    Companion_8.prototype.createPrimitive_45m8ma_k$ = function (value, node) {
        var tmp0_subject = value;
        var tmp;
        if (typeof tmp0_subject === "string") {
            tmp = new PString(value);
        } else {
            if (isInterface(tmp0_subject, List)) {
                var tmp_0 = isInterface(value, MutableList)
                    ? value
                    : THROW_CCE();
                var tmp1_this = this;
                var tmp2 = tmp1_this.listId_1;
                tmp1_this.listId_1 = (tmp2 + 1) | 0;
                tmp = new PList(tmp_0, tmp2);
            } else {
                if (isInterface(tmp0_subject, MutableMap)) {
                    var tmp_1 = isInterface(value, MutableMap)
                        ? value
                        : THROW_CCE();
                    var tmp3_this = this;
                    var tmp4 = tmp3_this.dictionaryId_1;
                    tmp3_this.dictionaryId_1 = (tmp4 + 1) | 0;
                    tmp = new PDictionary(tmp_1, tmp4);
                } else {
                    {
                        var tmp_2 =
                            "Cannot create variable of type `" +
                            getKClassFromExpression(value) +
                            "`";
                        throw PositionalException_init_$Create$(
                            tmp_2,
                            "",
                            node,
                            null,
                            0,
                            24,
                            null
                        );
                    }
                }
            }
        }
        return tmp;
    };
    Companion_8.$metadata$ = {
        simpleName: "Companion",
        kind: "object",
        interfaces: [],
    };
    var Companion_instance_8;
    function Companion_getInstance_8() {
        if (Companion_instance_8 == null) new Companion_8();
        return Companion_instance_8;
    }
    function Primitive(value) {
        Companion_getInstance_8();
        Property.call(this);
        this.value_1 = value;
    }
    Primitive.prototype._get_value__3683422336_a43j40_k$ = function () {
        return this.value_1;
    };
    Primitive.prototype.getIndex_wcnjmk_k$ = function () {
        return 0;
    };
    Primitive.prototype.getPValue_berniv_k$ = function () {
        return this._get_value__3683422336_a43j40_k$();
    };
    Primitive.prototype.toString = function () {
        return toString_0(this._get_value__3683422336_a43j40_k$());
    };
    Primitive.prototype.equals = function (other) {
        if (this === other) return true;
        if (!(other instanceof Primitive)) return false;
        else {
        }
        if (
            !equals(
                this._get_value__3683422336_a43j40_k$(),
                other._get_value__3683422336_a43j40_k$()
            )
        )
            return false;
        return true;
    };
    Primitive.prototype.hashCode = function () {
        return hashCode(this._get_value__3683422336_a43j40_k$());
    };
    Primitive.prototype.getPropertyOrNull_191djg_k$ = function (name) {
        var tmp0_subject = name;
        var tmp;
        switch (tmp0_subject) {
            case "this":
                tmp = this;
                break;
            case "properties":
                tmp = this.getProperties_k8mbbr_k$();
                break;
            default:
                var tmp1_safe_receiver = Companion_getInstance_8()
                    .getAllProperties_tzh4vy_k$()
                    .get_fkrdnv_k$(this.getIndex_wcnjmk_k$())
                    .get_1mhr4y_k$(name);
                var tmp_0;
                if (tmp1_safe_receiver == null) {
                    tmp_0 = null;
                } else {
                    var tmp$ret$1;
                    $l$block_0: {
                        {
                        }
                        var tmp$ret$0;
                        $l$block: {
                            tmp$ret$0 = tmp1_safe_receiver(this);
                            break $l$block;
                        }
                        tmp$ret$1 = tmp$ret$0;
                        break $l$block_0;
                    }
                    tmp_0 = tmp$ret$1;
                }

                var tmp6_elvis_lhs = tmp_0;
                var tmp_1;
                if (tmp6_elvis_lhs == null) {
                    var tmp_2;
                    var containsArg = this.getIndex_wcnjmk_k$();
                    if (2 <= containsArg ? containsArg <= 3 : false) {
                        var tmp2_safe_receiver = Companion_getInstance_8()
                            .getAllProperties_tzh4vy_k$()
                            .get_fkrdnv_k$(1)
                            .get_1mhr4y_k$(name);
                        var tmp_3;
                        if (tmp2_safe_receiver == null) {
                            tmp_3 = null;
                        } else {
                            var tmp$ret$3;
                            $l$block_2: {
                                {
                                }
                                var tmp$ret$2;
                                $l$block_1: {
                                    tmp$ret$2 = tmp2_safe_receiver(this);
                                    break $l$block_1;
                                }
                                tmp$ret$3 = tmp$ret$2;
                                break $l$block_2;
                            }
                            tmp_3 = tmp$ret$3;
                        }
                        var tmp4_elvis_lhs = tmp_3;
                        var tmp_4;
                        if (tmp4_elvis_lhs == null) {
                            var tmp3_safe_receiver = Companion_getInstance_8()
                                .getAllProperties_tzh4vy_k$()
                                .get_fkrdnv_k$(0)
                                .get_1mhr4y_k$(name);
                            var tmp_5;
                            if (tmp3_safe_receiver == null) {
                                tmp_5 = null;
                            } else {
                                var tmp$ret$5;
                                $l$block_4: {
                                    {
                                    }
                                    var tmp$ret$4;
                                    $l$block_3: {
                                        tmp$ret$4 = tmp3_safe_receiver(this);
                                        break $l$block_3;
                                    }
                                    tmp$ret$5 = tmp$ret$4;
                                    break $l$block_4;
                                }
                                tmp_5 = tmp$ret$5;
                            }
                            tmp_4 = tmp_5;
                        } else {
                            tmp_4 = tmp4_elvis_lhs;
                        }
                        tmp_2 = tmp_4;
                    } else {
                        {
                            var tmp5_safe_receiver = Companion_getInstance_8()
                                .getAllProperties_tzh4vy_k$()
                                .get_fkrdnv_k$(0)
                                .get_1mhr4y_k$(name);
                            var tmp_6;
                            if (tmp5_safe_receiver == null) {
                                tmp_6 = null;
                            } else {
                                var tmp$ret$7;
                                $l$block_6: {
                                    {
                                    }
                                    var tmp$ret$6;
                                    $l$block_5: {
                                        tmp$ret$6 = tmp5_safe_receiver(this);
                                        break $l$block_5;
                                    }
                                    tmp$ret$7 = tmp$ret$6;
                                    break $l$block_6;
                                }
                                tmp_6 = tmp$ret$7;
                            }
                            tmp_2 = tmp_6;
                        }
                    }
                    tmp_1 = tmp_2;
                } else {
                    tmp_1 = tmp6_elvis_lhs;
                }

                tmp = tmp_1;
                break;
        }
        return tmp;
    };
    Primitive.prototype.getProperty_qi6v9p_k$ = function (node, fileTable) {
        var tmp0_subject = node._get_value__3683422336_a43j40_k$();
        var tmp;
        switch (tmp0_subject) {
            case "this":
                tmp = this;
                break;
            case "properties":
                tmp = this.getProperties_k8mbbr_k$();
                break;
            default:
                var tmp1_safe_receiver = Companion_getInstance_8()
                    .getAllProperties_tzh4vy_k$()
                    .get_fkrdnv_k$(this.getIndex_wcnjmk_k$())
                    .get_1mhr4y_k$(node._get_value__3683422336_a43j40_k$());
                var tmp_0;
                if (tmp1_safe_receiver == null) {
                    tmp_0 = null;
                } else {
                    var tmp$ret$1;
                    $l$block_0: {
                        {
                        }
                        var tmp$ret$0;
                        $l$block: {
                            tmp$ret$0 = tmp1_safe_receiver(this);
                            break $l$block;
                        }
                        tmp$ret$1 = tmp$ret$0;
                        break $l$block_0;
                    }
                    tmp_0 = tmp$ret$1;
                }

                var tmp6_elvis_lhs = tmp_0;
                var tmp_1;
                if (tmp6_elvis_lhs == null) {
                    var tmp_2;
                    var containsArg = this.getIndex_wcnjmk_k$();
                    if (2 <= containsArg ? containsArg <= 3 : false) {
                        var tmp2_safe_receiver = Companion_getInstance_8()
                            .getAllProperties_tzh4vy_k$()
                            .get_fkrdnv_k$(1)
                            .get_1mhr4y_k$(
                                node._get_value__3683422336_a43j40_k$()
                            );
                        var tmp_3;
                        if (tmp2_safe_receiver == null) {
                            tmp_3 = null;
                        } else {
                            var tmp$ret$3;
                            $l$block_2: {
                                {
                                }
                                var tmp$ret$2;
                                $l$block_1: {
                                    tmp$ret$2 = tmp2_safe_receiver(this);
                                    break $l$block_1;
                                }
                                tmp$ret$3 = tmp$ret$2;
                                break $l$block_2;
                            }
                            tmp_3 = tmp$ret$3;
                        }
                        var tmp4_elvis_lhs = tmp_3;
                        var tmp_4;
                        if (tmp4_elvis_lhs == null) {
                            var tmp3_safe_receiver = Companion_getInstance_8()
                                .getAllProperties_tzh4vy_k$()
                                .get_fkrdnv_k$(0)
                                .get_1mhr4y_k$(
                                    node._get_value__3683422336_a43j40_k$()
                                );
                            var tmp_5;
                            if (tmp3_safe_receiver == null) {
                                tmp_5 = null;
                            } else {
                                var tmp$ret$5;
                                $l$block_4: {
                                    {
                                    }
                                    var tmp$ret$4;
                                    $l$block_3: {
                                        tmp$ret$4 = tmp3_safe_receiver(this);
                                        break $l$block_3;
                                    }
                                    tmp$ret$5 = tmp$ret$4;
                                    break $l$block_4;
                                }
                                tmp_5 = tmp$ret$5;
                            }
                            tmp_4 = tmp_5;
                        } else {
                            tmp_4 = tmp4_elvis_lhs;
                        }
                        tmp_2 = tmp_4;
                    } else {
                        {
                            var tmp5_safe_receiver = Companion_getInstance_8()
                                .getAllProperties_tzh4vy_k$()
                                .get_fkrdnv_k$(0)
                                .get_1mhr4y_k$(
                                    node._get_value__3683422336_a43j40_k$()
                                );
                            var tmp_6;
                            if (tmp5_safe_receiver == null) {
                                tmp_6 = null;
                            } else {
                                var tmp$ret$7;
                                $l$block_6: {
                                    {
                                    }
                                    var tmp$ret$6;
                                    $l$block_5: {
                                        tmp$ret$6 = tmp5_safe_receiver(this);
                                        break $l$block_5;
                                    }
                                    tmp$ret$7 = tmp$ret$6;
                                    break $l$block_6;
                                }
                                tmp_6 = tmp$ret$7;
                            }
                            tmp_2 = tmp_6;
                        }
                    }
                    tmp_1 = tmp_2;
                } else {
                    tmp_1 = tmp6_elvis_lhs;
                }

                var tmp7_elvis_lhs = tmp_1;
                var tmp_7;
                if (tmp7_elvis_lhs == null) {
                    throw new NotFoundException(
                        node,
                        fileTable._get_filePath__151144490_2hzju2_k$(),
                        this
                    );
                } else {
                    tmp_7 = tmp7_elvis_lhs;
                }

                tmp = tmp_7;
                break;
        }
        return tmp;
    };
    Primitive.prototype.getProperties_k8mbbr_k$ = function () {
        var res = toMutableMap(
            Companion_getInstance_8()
                .getAllProperties_tzh4vy_k$()
                .get_fkrdnv_k$(0)
        );
        var containsArg = this.getIndex_wcnjmk_k$();
        if (2 <= containsArg ? containsArg <= 3 : false) {
            res.putAll_mee1c3_k$(
                Companion_getInstance_8()
                    .getAllProperties_tzh4vy_k$()
                    .get_fkrdnv_k$(1)
            );
        } else {
        }
        res.putAll_mee1c3_k$(
            Companion_getInstance_8()
                .getAllProperties_tzh4vy_k$()
                .get_fkrdnv_k$(this.getIndex_wcnjmk_k$())
        );
        var tmp$ret$4;
        $l$block_3: {
            var tmp$ret$3;
            $l$block_2: {
                var tmp1_mapValuesTo_0_1 = LinkedHashMap_init_$Create$_0(
                    mapCapacity(res._get_size__809037418_ddoh9m_k$())
                );
                var tmp$ret$2;
                $l$block_1: {
                    var tmp0_associateByTo_0_2 =
                        res._get_entries__31877249_iz8n5_k$();
                    var tmp0_iterator_1_3 =
                        tmp0_associateByTo_0_2.iterator_jk1svi_k$();
                    while (tmp0_iterator_1_3.hasNext_bitz1p_k$()) {
                        var element_2_4 = tmp0_iterator_1_3.next_20eer_k$();
                        var tmp$ret$0;
                        $l$block: {
                            tmp$ret$0 =
                                element_2_4._get_key__857139730_e6bh8y_k$();
                            break $l$block;
                        }
                        var tmp = tmp$ret$0;
                        var tmp$ret$1;
                        $l$block_0: {
                            tmp$ret$1 =
                                element_2_4._get_value__3683422336_a43j40_k$()(
                                    this
                                );
                            break $l$block_0;
                        }
                        tmp1_mapValuesTo_0_1.put_3mhbri_k$(tmp, tmp$ret$1);
                        Unit_getInstance();
                    }
                    tmp$ret$2 = tmp1_mapValuesTo_0_1;
                    break $l$block_1;
                }
                tmp$ret$3 = tmp$ret$2;
                break $l$block_2;
            }
            tmp$ret$4 = tmp$ret$3;
            break $l$block_3;
        }
        var tmp_0 = toMutableMap(tmp$ret$4);
        var tmp0_this = Companion_getInstance_8();
        var tmp1 = tmp0_this.dictionaryId_1;
        tmp0_this.dictionaryId_1 = (tmp1 + 1) | 0;
        return new PDictionary(tmp_0, tmp1);
    };
    Primitive.prototype.getFunction_ken7yo_k$ = function (node, fileTable) {
        var tmp0_elvis_lhs = this.getFunctionOrNull_p690c9_k$(node);
        var tmp;
        if (tmp0_elvis_lhs == null) {
            var tmp_0 = formatClassName(this) + " does not contain function";
            var tmp_1 = fileTable._get_filePath__151144490_2hzju2_k$();
            throw PositionalException_init_$Create$(
                tmp_0,
                tmp_1,
                node,
                null,
                0,
                24,
                null
            );
        } else {
            tmp = tmp0_elvis_lhs;
        }
        return tmp;
    };
    Primitive.prototype.getFunctionOrNull_p690c9_k$ = function (node) {
        var tmp = Companion_getInstance_0();
        var tmp_0 = node instanceof Call ? node : THROW_CCE();
        var tmp_1;
        var containsArg = this.getIndex_wcnjmk_k$();
        if (2 <= containsArg ? containsArg <= 3 : false) {
            tmp_1 = plus_0(
                plus_0(
                    Companion_getInstance_8().functions_1.get_fkrdnv_k$(
                        this.getIndex_wcnjmk_k$()
                    ),
                    Companion_getInstance_8().functions_1.get_fkrdnv_k$(1)
                ),
                Companion_getInstance_8().functions_1.get_fkrdnv_k$(0)
            );
        } else {
            {
                tmp_1 = Companion_getInstance_8().functions_1.get_fkrdnv_k$(
                    this.getIndex_wcnjmk_k$()
                );
            }
        }
        return tmp.getFunctionOrNull_p6a1z1_k$(tmp_0, tmp_1);
    };
    Primitive.$metadata$ = {
        simpleName: "Primitive",
        kind: "class",
        interfaces: [],
    };
    function createAssignmentsAndFunctions($this, node) {
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = LinkedHashSet_init_$Create$();
            break $l$block;
        }
        var res = tmp$ret$0;
        var tmp$ret$1;
        $l$block_0: {
            tmp$ret$1 = ArrayList_init_$Create$();
            break $l$block_0;
        }
        var functions = tmp$ret$1;
        var tmp0_iterator = node
            ._get_children__1387553196_my42wc_k$()
            .iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var a = tmp0_iterator.next_20eer_k$();
            if (a instanceof Assignment) {
                var tmp = a._get_right__3576132917_bvz45n_k$();
                if (tmp instanceof Assignment) {
                    throw PositionalException_init_$Create$(
                        "Double assignments are not allowed in class",
                        $this.filePath_1,
                        a,
                        null,
                        0,
                        24,
                        null
                    );
                } else {
                }
                if (!res.add_1j60pz_k$(a)) {
                    throw PositionalException_init_$Create$(
                        "Same property found above",
                        $this.filePath_1,
                        a,
                        null,
                        0,
                        24,
                        null
                    );
                }
                a._set_isProperty__3775228504_p44z1r_k$(true);
            } else {
                if (a._get_symbol__541899891_8ymsmr_k$() === "fun") {
                    functions.add_1j60pz_k$(
                        FunctionFactory_getInstance().createFunction_erlkja_k$(
                            a,
                            $this
                        )
                    );
                    Unit_getInstance();
                } else {
                    if (a instanceof Meta) {
                    } else {
                        {
                            var tmp_0 = listOf_0([
                                getKClass(Assignment),
                                getKClass(RFunction),
                            ]);
                            throw ExpectedTypeException_init_$Create$(
                                tmp_0,
                                $this.filePath_1,
                                a,
                                null,
                                false,
                                24,
                                null
                            );
                        }
                    }
                }
            }
        }
        return new Pair(res, functions);
    }
    function getFromFilesOrNull($this, getValue) {
        var valuesList = getListFromFiles($this, getValue);
        var tmp;
        if (valuesList._get_size__809037418_ddoh9m_k$() === 1) {
            tmp = first(valuesList);
        } else {
            tmp = null;
        }
        return tmp;
    }
    function getListFromFiles($this, getValue) {
        var fromCurrent = getValue($this);
        if (!(fromCurrent == null)) {
            return listOf(fromCurrent);
        }
        return checkImports($this, getValue);
    }
    function checkImports($this, check) {
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = ArrayList_init_$Create$();
            break $l$block;
        }
        var suitable = tmp$ret$0;
        var tmp0_iterator = $this.imports_1
            ._get_values__2516944425_tel787_k$()
            .iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var fileTable = tmp0_iterator.next_20eer_k$();
            var fromFile = check(fileTable);
            if (!(fromFile == null)) {
                suitable.add_1j60pz_k$(fromFile);
                Unit_getInstance();
            }
        }
        return suitable;
    }
    function FileTable$getTypeOrNull$lambda($name) {
        return function (it) {
            var tmp$ret$2;
            $l$block_2: {
                var tmp0_find_0 = it.types_1;
                var tmp$ret$1;
                $l$block_1: {
                    var tmp0_iterator_1_1 = tmp0_find_0.iterator_jk1svi_k$();
                    while (tmp0_iterator_1_1.hasNext_bitz1p_k$()) {
                        var element_2_2 = tmp0_iterator_1_1.next_20eer_k$();
                        var tmp$ret$0;
                        $l$block: {
                            tmp$ret$0 =
                                element_2_2._get_name__804168992_das4rk_k$() ===
                                $name;
                            break $l$block;
                        }
                        if (tmp$ret$0) {
                            tmp$ret$1 = element_2_2;
                            break $l$block_1;
                        } else {
                        }
                    }
                    tmp$ret$1 = null;
                    break $l$block_1;
                }
                tmp$ret$2 = tmp$ret$1;
                break $l$block_2;
            }
            var tmp0_safe_receiver = tmp$ret$2;
            return tmp0_safe_receiver == null
                ? null
                : tmp0_safe_receiver.copyRoot_8d9kp5_k$();
        };
    }
    function FileTable$getUncopiedType$lambda($node) {
        return function (it) {
            var tmp$ret$2;
            $l$block_2: {
                var tmp0_find_0 = it.types_1;
                var tmp$ret$1;
                $l$block_1: {
                    var tmp0_iterator_1_1 = tmp0_find_0.iterator_jk1svi_k$();
                    while (tmp0_iterator_1_1.hasNext_bitz1p_k$()) {
                        var element_2_2 = tmp0_iterator_1_1.next_20eer_k$();
                        var tmp$ret$0;
                        $l$block: {
                            tmp$ret$0 =
                                element_2_2._get_name__804168992_das4rk_k$() ===
                                $node._get_value__3683422336_a43j40_k$();
                            break $l$block;
                        }
                        if (tmp$ret$0) {
                            tmp$ret$1 = element_2_2;
                            break $l$block_1;
                        } else {
                        }
                    }
                    tmp$ret$1 = null;
                    break $l$block_1;
                }
                tmp$ret$2 = tmp$ret$1;
                break $l$block_2;
            }
            return tmp$ret$2;
        };
    }
    function FileTable$getObjectOrNull$lambda($name) {
        return function (it) {
            var tmp$ret$2;
            $l$block_2: {
                var tmp0_find_0 = it.objects_1;
                var tmp$ret$1;
                $l$block_1: {
                    var tmp0_iterator_1_1 = tmp0_find_0.iterator_jk1svi_k$();
                    while (tmp0_iterator_1_1.hasNext_bitz1p_k$()) {
                        var element_2_2 = tmp0_iterator_1_1.next_20eer_k$();
                        var tmp$ret$0;
                        $l$block: {
                            tmp$ret$0 =
                                element_2_2._get_name__804168992_das4rk_k$() ===
                                $name;
                            break $l$block;
                        }
                        if (tmp$ret$0) {
                            tmp$ret$1 = element_2_2;
                            break $l$block_1;
                        } else {
                        }
                    }
                    tmp$ret$1 = null;
                    break $l$block_1;
                }
                tmp$ret$2 = tmp$ret$1;
                break $l$block_2;
            }
            return tmp$ret$2;
        };
    }
    function FileTable$getFunctionOrNull$lambda($node) {
        return function (fileTable) {
            var tmp = Companion_getInstance_0();
            return tmp.getFunctionOrNull_p6a1z1_k$(
                $node instanceof Call ? $node : THROW_CCE(),
                fileTable.functions_1
            );
        };
    }
    function FileTable(filePath, index) {
        this.filePath_1 = filePath;
        this.index_1 = index;
        var tmp = this;
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = LinkedHashSet_init_$Create$();
            break $l$block;
        }
        tmp.types_1 = tmp$ret$0;
        var tmp_0 = this;
        var tmp$ret$1;
        $l$block_0: {
            tmp$ret$1 = LinkedHashSet_init_$Create$();
            break $l$block_0;
        }
        tmp_0.objects_1 = tmp$ret$1;
        var tmp_1 = this;
        var tmp$ret$2;
        $l$block_1: {
            tmp$ret$2 = LinkedHashSet_init_$Create$();
            break $l$block_1;
        }
        tmp_1.functions_1 = tmp$ret$2;
        var tmp_2 = this;
        var tmp$ret$3;
        $l$block_2: {
            tmp$ret$3 = LinkedHashMap_init_$Create$();
            break $l$block_2;
        }
        tmp_2.imports_1 = tmp$ret$3;
        this.numberInstances_1 = 0;
        {
            var tmp0_set_0 = this.imports_1;
            var tmp1_set_0 =
                Companion_getInstance_10()._get_globalFile__1543759020_pj4430_k$();
            tmp0_set_0.put_3mhbri_k$("Global", tmp1_set_0);
            Unit_getInstance();
        }
    }
    FileTable.prototype._get_filePath__151144490_2hzju2_k$ = function () {
        return this.filePath_1;
    };
    FileTable.prototype._get_index__3322996031_g2optt_k$ = function () {
        return this.index_1;
    };
    FileTable.prototype._set_numberInstances__3771442672_fzfgw0_k$ = function (
        _set____804775014
    ) {
        this.numberInstances_1 = _set____804775014;
    };
    FileTable.prototype._get_numberInstances__87398780_1g19bw_k$ = function () {
        return this.numberInstances_1;
    };
    FileTable.prototype.addType_ye6w96_k$ = function (node) {
        var name = node
            ._get_left__802434852_d9qyp0_k$()
            ._get_value__3683422336_a43j40_k$();
        var tmp0_container = createAssignmentsAndFunctions(
            this,
            node._get_children__1387553196_my42wc_k$().get_fkrdnv_k$(2)
        );
        var assignments = tmp0_container.component1_7eebsc_k$();
        var functions = tmp0_container.component2_7eebsb_k$();
        var added = Type_init_$Create$(
            name,
            assignments,
            this,
            0,
            null,
            null,
            48,
            null
        );
        added
            ._get_functions__2924404246_mnzx7u_k$()
            .addAll_oxxjjk_k$(functions);
        Unit_getInstance();
        var tmp$ret$2;
        $l$block_2: {
            var tmp0_find_0 = this.types_1;
            var tmp$ret$1;
            $l$block_1: {
                var tmp0_iterator_1_1 = tmp0_find_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_1.hasNext_bitz1p_k$()) {
                    var element_2_2 = tmp0_iterator_1_1.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 =
                            element_2_2._get_name__804168992_das4rk_k$() ===
                            name;
                        break $l$block;
                    }
                    if (tmp$ret$0) {
                        tmp$ret$1 = element_2_2;
                        break $l$block_1;
                    } else {
                    }
                }
                tmp$ret$1 = null;
                break $l$block_1;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_2;
        }
        if (!(tmp$ret$2 == null)) {
            var tmp = "Two classes with same name in `" + this.filePath_1 + "`";
            throw PositionalException_init_$Create$(
                tmp,
                this.filePath_1,
                node,
                null,
                0,
                24,
                null
            );
        } else {
        }
        this.types_1.add_1j60pz_k$(added);
        Unit_getInstance();
        var tmp1_iterator = added
            ._get_assignments__50188043_tvpcb_k$()
            .iterator_jk1svi_k$();
        while (tmp1_iterator.hasNext_bitz1p_k$()) {
            var assignment = tmp1_iterator.next_20eer_k$();
            assignment._set_parent__1403382957_83u8iz_k$(added);
        }
        return added;
    };
    FileTable.prototype.addObject_iiux36_k$ = function (node) {
        var tmp = node._get_left__802434852_d9qyp0_k$();
        if (!(tmp instanceof Identifier)) {
            throw PositionalException_init_$Create$(
                "Object cannot be inherited",
                this.filePath_1,
                node,
                null,
                0,
                24,
                null
            );
        } else {
        }
        var name = node
            ._get_left__802434852_d9qyp0_k$()
            ._get_value__3683422336_a43j40_k$();
        var tmp0_container = createAssignmentsAndFunctions(
            this,
            node._get_right__3576132917_bvz45n_k$()
        );
        var assignments = tmp0_container.component1_7eebsc_k$();
        var functions = tmp0_container.component2_7eebsb_k$();
        var tmp$ret$2;
        $l$block_2: {
            var tmp0_find_0 = this.objects_1;
            var tmp$ret$1;
            $l$block_1: {
                var tmp0_iterator_1_1 = tmp0_find_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_1.hasNext_bitz1p_k$()) {
                    var element_2_2 = tmp0_iterator_1_1.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 =
                            element_2_2._get_name__804168992_das4rk_k$() ===
                            name;
                        break $l$block;
                    }
                    if (tmp$ret$0) {
                        tmp$ret$1 = element_2_2;
                        break $l$block_1;
                    } else {
                    }
                }
                tmp$ret$1 = null;
                break $l$block_1;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_2;
        }
        if (!(tmp$ret$2 == null)) {
            throw PositionalException_init_$Create$(
                "Two objects with same name",
                this.filePath_1,
                node,
                null,
                0,
                24,
                null
            );
        } else {
        }
        this.objects_1.add_1j60pz_k$(new Object_0(name, assignments, this));
        Unit_getInstance();
        last(this.objects_1)
            ._get_functions__2924404246_mnzx7u_k$()
            .addAll_oxxjjk_k$(functions);
        Unit_getInstance();
    };
    FileTable.prototype.addFunction_5sy9lo_k$ = function (function_0) {
        var res = this.functions_1.add_1j60pz_k$(function_0);
        if (!res) {
            var tmp =
                "Two functions with same signature (name and number of non-default parameters) `" +
                function_0 +
                "` in " +
                this.filePath_1;
            throw PositionalException_init_$Create$(
                tmp,
                this.filePath_1,
                null,
                null,
                0,
                28,
                null
            );
        }
    };
    FileTable.prototype.addImport_wgtzok_k$ = function (importNode, fileTable) {
        var tmp$ret$4;
        $l$block_3: {
            var tmp$ret$3;
            $l$block_2: {
                var tmp0_filter_0 = this.imports_1;
                var tmp$ret$2;
                $l$block_1: {
                    var tmp0_filterTo_0_1 = LinkedHashMap_init_$Create$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = tmp0_filter_0
                            ._get_entries__31877249_iz8n5_k$()
                            .iterator_jk1svi_k$();
                        break $l$block;
                    }
                    var tmp0_iterator_1_2 = tmp$ret$0;
                    while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                        var element_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                        var tmp$ret$1;
                        $l$block_0: {
                            tmp$ret$1 = element_2_3
                                ._get_value__3683422336_a43j40_k$()
                                .equals(fileTable);
                            break $l$block_0;
                        }
                        if (tmp$ret$1) {
                            tmp0_filterTo_0_1.put_3mhbri_k$(
                                element_2_3._get_key__857139730_e6bh8y_k$(),
                                element_2_3._get_value__3683422336_a43j40_k$()
                            );
                            Unit_getInstance();
                        } else {
                        }
                    }
                    tmp$ret$2 = tmp0_filterTo_0_1;
                    break $l$block_1;
                }
                tmp$ret$3 = tmp$ret$2;
                break $l$block_2;
            }
            var tmp1_isNotEmpty_0 = tmp$ret$3;
            tmp$ret$4 = !tmp1_isNotEmpty_0.isEmpty_y1axqb_k$();
            break $l$block_3;
        }
        if (tmp$ret$4) {
            throw PositionalException_init_$Create$(
                "Same import found above",
                this.filePath_1,
                importNode,
                null,
                0,
                24,
                null
            );
        } else {
        }
        {
            var tmp2_set_0 = this.imports_1;
            var tmp3_set_0 = importNode._get_importName__3861398203_764w1x_k$();
            tmp2_set_0.put_3mhbri_k$(tmp3_set_0, fileTable);
            Unit_getInstance();
        }
    };
    FileTable.prototype.getTypeOrNull_4rmbrt_k$ = function (name) {
        var tmp = getFromFilesOrNull(
            this,
            FileTable$getTypeOrNull$lambda(name)
        );
        return (tmp == null ? true : tmp instanceof Type) ? tmp : THROW_CCE();
    };
    FileTable.prototype.getUncopiedType_3y44ec_k$ = function (node) {
        var tmp = getFromFilesOrNull(
            this,
            FileTable$getUncopiedType$lambda(node)
        );
        return (tmp == null ? true : tmp instanceof Type) ? tmp : THROW_CCE();
    };
    FileTable.prototype.getObjectOrNull_5h3942_k$ = function (name) {
        var tmp = getFromFilesOrNull(
            this,
            FileTable$getObjectOrNull$lambda(name)
        );
        return (tmp == null ? true : tmp instanceof Object_0)
            ? tmp
            : THROW_CCE();
    };
    FileTable.prototype.getFunctionOrNull_p690c9_k$ = function (node) {
        var tmp = getFromFilesOrNull(
            this,
            FileTable$getFunctionOrNull$lambda(node)
        );
        return (tmp == null ? true : tmp instanceof RFunction)
            ? tmp
            : THROW_CCE();
    };
    FileTable.prototype.getImportOrNull_hhw2v8_k$ = function (importName) {
        return this.imports_1.get_1mhr4y_k$(importName);
    };
    FileTable.prototype.getImport_m6etbe_k$ = function (node) {
        var tmp0_elvis_lhs = this.imports_1.get_1mhr4y_k$(
            node._get_value__3683422336_a43j40_k$()
        );
        var tmp;
        if (tmp0_elvis_lhs == null) {
            throw PositionalException_init_$Create$(
                "File not found",
                this.filePath_1,
                node,
                null,
                0,
                24,
                null
            );
        } else {
            tmp = tmp0_elvis_lhs;
        }
        return tmp;
    };
    FileTable.prototype.getMain_18urbl_k$ = function () {
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_filter_0 = this.functions_1;
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_filterTo_0_1 = ArrayList_init_$Create$();
                var tmp0_iterator_1_2 = tmp0_filter_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var element_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 =
                            element_2_3._get_name__804168992_das4rk_k$() ===
                            "main";
                        break $l$block;
                    }
                    if (tmp$ret$0) {
                        tmp0_filterTo_0_1.add_1j60pz_k$(element_2_3);
                        Unit_getInstance();
                    } else {
                    }
                }
                tmp$ret$1 = tmp0_filterTo_0_1;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        var mains = tmp$ret$2;
        if (mains.isEmpty_y1axqb_k$()) {
            var tmp = "main not found in `" + this.filePath_1 + "`";
            throw PositionalException_init_$Create$(
                tmp,
                this.filePath_1,
                null,
                null,
                0,
                28,
                null
            );
        }
        if (mains._get_size__809037418_ddoh9m_k$() > 1) {
            var tmp_0 =
                "Found 2 or more main functions in `" + this.filePath_1 + "`";
            throw PositionalException_init_$Create$(
                tmp_0,
                this.filePath_1,
                null,
                null,
                0,
                28,
                null
            );
        }
        return first(mains);
    };
    FileTable.prototype.equals = function (other) {
        if (this === other) return true;
        if (!(other instanceof FileTable)) return false;
        else {
        }
        if (!(this.filePath_1 === other.filePath_1)) return false;
        return true;
    };
    FileTable.prototype.hashCode = function () {
        return getStringHashCode(this.filePath_1);
    };
    FileTable.prototype.toString = function () {
        return this.filePath_1;
    };
    FileTable.prototype.stringNotation_2r8rar_k$ = function () {
        var res = new StringBuilder(this.filePath_1);
        var tmp$ret$0;
        $l$block: {
            var tmp0_isNotEmpty_0 = this.types_1;
            tmp$ret$0 = !tmp0_isNotEmpty_0.isEmpty_y1axqb_k$();
            break $l$block;
        }
        if (tmp$ret$0) {
            res.append_ssq29y_k$("\n");
            Unit_getInstance();
        } else {
        }
        var tmp0_iterator = this.types_1.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var type = tmp0_iterator.next_20eer_k$();
            res.append_ssq29y_k$("\t" + type + "\n");
            Unit_getInstance();
        }
        var tmp$ret$1;
        $l$block_0: {
            var tmp1_isNotEmpty_0 = this.functions_1;
            tmp$ret$1 = !tmp1_isNotEmpty_0.isEmpty_y1axqb_k$();
            break $l$block_0;
        }
        if (tmp$ret$1) {
            res.append_ssq29y_k$("\n");
            Unit_getInstance();
        } else {
        }
        var tmp1_iterator = this.functions_1.iterator_jk1svi_k$();
        while (tmp1_iterator.hasNext_bitz1p_k$()) {
            var func = tmp1_iterator.next_20eer_k$();
            res.append_ssq29y_k$("\t" + func + "\n");
            Unit_getInstance();
        }
        return res.toString();
    };
    FileTable.prototype.getTypes_wiwjwj_k$ = function () {
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_associateBy_0 = this.types_1;
            var capacity_1 = coerceAtLeast(
                mapCapacity(collectionSizeOrDefault(tmp0_associateBy_0, 10)),
                16
            );
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_associateByTo_0_2 =
                    LinkedHashMap_init_$Create$_0(capacity_1);
                var tmp0_iterator_1_3 = tmp0_associateBy_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_3.hasNext_bitz1p_k$()) {
                    var element_2_4 = tmp0_iterator_1_3.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 =
                            element_2_4._get_name__804168992_das4rk_k$();
                        break $l$block;
                    }
                    tmp0_associateByTo_0_2.put_3mhbri_k$(
                        tmp$ret$0,
                        element_2_4
                    );
                    Unit_getInstance();
                }
                tmp$ret$1 = tmp0_associateByTo_0_2;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        return toMutableMap(tmp$ret$2);
    };
    FileTable.prototype.getObjects_aasile_k$ = function () {
        return this.objects_1;
    };
    FileTable.prototype.getFunctions_2hetqz_k$ = function () {
        return this.functions_1;
    };
    FileTable.prototype.getFileOfFunction_iwsgea_k$ = function (
        node,
        function_0
    ) {
        var tmp$ret$2;
        $l$block_2: {
            var tmp0_find_0 = this.functions_1;
            var tmp$ret$1;
            $l$block_1: {
                var tmp0_iterator_1_1 = tmp0_find_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_1.hasNext_bitz1p_k$()) {
                    var element_2_2 = tmp0_iterator_1_1.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = element_2_2.equals(function_0);
                        break $l$block;
                    }
                    if (tmp$ret$0) {
                        tmp$ret$1 = element_2_2;
                        break $l$block_1;
                    } else {
                    }
                }
                tmp$ret$1 = null;
                break $l$block_1;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_2;
        }
        var inCurrent = tmp$ret$2;
        if (!(inCurrent == null)) {
            return this;
        }
        var tmp$ret$3;
        $l$block_3: {
            tmp$ret$3 = ArrayList_init_$Create$();
            break $l$block_3;
        }
        var suitable = tmp$ret$3;
        var tmp0_iterator = this.imports_1
            ._get_values__2516944425_tel787_k$()
            .iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var table = tmp0_iterator.next_20eer_k$();
            var tmp$ret$6;
            $l$block_7: {
                var tmp1_find_0 = table.functions_1;
                var tmp$ret$5;
                $l$block_6: {
                    var tmp0_iterator_1_1_0 = tmp1_find_0.iterator_jk1svi_k$();
                    while (tmp0_iterator_1_1_0.hasNext_bitz1p_k$()) {
                        var element_2_2_0 = tmp0_iterator_1_1_0.next_20eer_k$();
                        var tmp$ret$4;
                        $l$block_4: {
                            tmp$ret$4 = element_2_2_0.equals(function_0);
                            break $l$block_4;
                        }
                        if (tmp$ret$4) {
                            tmp$ret$5 = element_2_2_0;
                            break $l$block_6;
                        } else {
                        }
                    }
                    tmp$ret$5 = null;
                    break $l$block_6;
                }
                tmp$ret$6 = tmp$ret$5;
                break $l$block_7;
            }
            var fromFile = tmp$ret$6;
            if (!(fromFile == null)) {
                suitable.add_1j60pz_k$(table);
                Unit_getInstance();
            }
        }
        var tmp1_subject = suitable._get_size__809037418_ddoh9m_k$();
        var tmp;
        switch (tmp1_subject) {
            case 0:
                tmp = this;
                break;
            case 1:
                tmp = first(suitable);
                break;
            default:
                var tmp_0 =
                    "`" +
                    node +
                    "` is found in files: " +
                    suitable +
                    ". Specify file.";
                throw PositionalException_init_$Create$(
                    tmp_0,
                    this.filePath_1,
                    node,
                    null,
                    0,
                    24,
                    null
                );
        }
        return tmp;
    };
    FileTable.$metadata$ = {
        simpleName: "FileTable",
        kind: "class",
        interfaces: [],
    };
    function Companion_9() {
        Companion_instance_9 = this;
    }
    Companion_9.$metadata$ = {
        simpleName: "Companion",
        kind: "object",
        interfaces: [],
    };
    var Companion_instance_9;
    function Companion_getInstance_9() {
        if (Companion_instance_9 == null) new Companion_9();
        return Companion_instance_9;
    }
    function ScopeTable() {
        Companion_getInstance_9();
        var tmp = this;
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = LinkedHashMap_init_$Create$();
            break $l$block;
        }
        tmp.variables_1 = tmp$ret$0;
    }
    ScopeTable.prototype.addVariable_vmj31f_k$ = function (name, variable) {
        {
            var tmp0_set_0 = this.variables_1;
            tmp0_set_0.put_3mhbri_k$(name, variable);
            Unit_getInstance();
        }
    };
    ScopeTable.prototype.getVariables_1itnb3_k$ = function () {
        return toMutableMap(this.variables_1);
    };
    ScopeTable.prototype.getVariableOrNull_x0gevv_k$ = function (name) {
        return this.variables_1.get_1mhr4y_k$(name);
    };
    ScopeTable.prototype.copy_1tks5_k$ = function () {
        var res = new ScopeTable();
        res.variables_1.putAll_mee1c3_k$(toMutableMap(this.variables_1));
        return res;
    };
    ScopeTable.$metadata$ = {
        simpleName: "ScopeTable",
        kind: "class",
        interfaces: [],
    };
    function initializeGlobal($this) {
        var res = new FileTable("Global", 0);
        var tmp$ret$0;
        $l$block: {
            var tmp0_iterator_0 =
                FunctionFactory_getInstance().initializeEmbedded_2qlyva_k$();
            tmp$ret$0 = tmp0_iterator_0
                ._get_entries__31877249_iz8n5_k$()
                .iterator_jk1svi_k$();
            break $l$block;
        }
        var tmp0_iterator = tmp$ret$0;
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var i = tmp0_iterator.next_20eer_k$();
            res.addFunction_5sy9lo_k$(i._get_value__3683422336_a43j40_k$());
        }
        return res;
    }
    function SymbolTable_init_$Init$(
        scopeTable,
        variableTable,
        fileTable,
        resolvingType,
        $mask0,
        $marker,
        $this
    ) {
        if (!(($mask0 & 1) === 0)) scopeTable = new ScopeTable();
        if (!(($mask0 & 2) === 0)) variableTable = null;
        SymbolTable.call(
            $this,
            scopeTable,
            variableTable,
            fileTable,
            resolvingType
        );
        return $this;
    }
    function SymbolTable_init_$Create$(
        scopeTable,
        variableTable,
        fileTable,
        resolvingType,
        $mask0,
        $marker
    ) {
        return SymbolTable_init_$Init$(
            scopeTable,
            variableTable,
            fileTable,
            resolvingType,
            $mask0,
            $marker,
            Object.create(SymbolTable.prototype)
        );
    }
    function Companion_10() {
        Companion_instance_10 = this;
        var tmp = this;
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = LinkedHashMap_init_$Create$();
            break $l$block;
        }
        tmp.imports_1 = tmp$ret$0;
        this.globalFile_1 = initializeGlobal(this);
    }
    Companion_10.prototype._get_globalFile__1543759020_pj4430_k$ = function () {
        return this.globalFile_1;
    };
    Companion_10.$metadata$ = {
        simpleName: "Companion",
        kind: "object",
        interfaces: [],
    };
    var Companion_instance_10;
    function Companion_getInstance_10() {
        if (Companion_instance_10 == null) new Companion_10();
        return Companion_instance_10;
    }
    function SymbolTable(scopeTable, variableTable, fileTable, resolvingType) {
        Companion_getInstance_10();
        this.scopeTable_1 = scopeTable;
        this.variableTable_1 = variableTable;
        this.fileTable_1 = fileTable;
        this.resolvingType_1 = resolvingType;
    }
    SymbolTable.prototype._set_resolvingType__2046672930_ezepws_k$ = function (
        _set____804775014
    ) {
        this.resolvingType_1 = _set____804775014;
    };
    SymbolTable.prototype._get_resolvingType__1126639278_imrsfi_k$ =
        function () {
            return this.resolvingType_1;
        };
    SymbolTable.prototype.getFileOfFunction_iwsgea_k$ = function (
        node,
        function_0
    ) {
        return this.fileTable_1.getFileOfFunction_iwsgea_k$(node, function_0);
    };
    SymbolTable.prototype.getFileTable_m3scuc_k$ = function () {
        return this.fileTable_1;
    };
    SymbolTable.prototype.getCurrentType_n8a8z_k$ = function () {
        return this.variableTable_1;
    };
    SymbolTable.prototype.changeScope_rjxbi4_k$ = function () {
        return SymbolTable_init_$Create$(
            null,
            this.variableTable_1,
            this.fileTable_1,
            this.resolvingType_1,
            1,
            null
        );
    };
    SymbolTable.prototype.changeFile_n27o1t_k$ = function (fileTable) {
        var tmp0_safe_receiver = this.scopeTable_1;
        return new SymbolTable(
            tmp0_safe_receiver == null
                ? null
                : tmp0_safe_receiver.copy_1tks5_k$(),
            this.variableTable_1,
            fileTable,
            this.resolvingType_1
        );
    };
    SymbolTable.prototype.changeVariable_uoiydg_k$ = function (type) {
        var tmp0_safe_receiver = this.scopeTable_1;
        var tmp =
            tmp0_safe_receiver == null
                ? null
                : tmp0_safe_receiver.copy_1tks5_k$();
        var tmp_0;
        if (type instanceof Type) {
            tmp_0 = type._get_fileTable__504497375_8cd4nz_k$();
        } else {
            {
                tmp_0 = this.fileTable_1;
            }
        }
        return new SymbolTable(tmp, type, tmp_0, this.resolvingType_1);
    };
    SymbolTable.prototype.addVariable_vmj31f_k$ = function (name, value) {
        return ensureNotNull(this.scopeTable_1).addVariable_vmj31f_k$(
            name,
            value
        );
    };
    SymbolTable.prototype.getImportOrNull_hhw2v8_k$ = function (importName) {
        return this.fileTable_1.getImportOrNull_hhw2v8_k$(importName);
    };
    SymbolTable.prototype.getImport_m6etbe_k$ = function (node) {
        return this.fileTable_1.getImport_m6etbe_k$(node);
    };
    SymbolTable.prototype.getType_93e8u9_k$ = function (node) {
        var tmp0_elvis_lhs = this.fileTable_1.getTypeOrNull_4rmbrt_k$(
            node._get_value__3683422336_a43j40_k$()
        );
        var tmp;
        if (tmp0_elvis_lhs == null) {
            var tmp_0 =
                "Type `" +
                node._get_value__3683422336_a43j40_k$() +
                "` not found";
            var tmp_1 = this.fileTable_1._get_filePath__151144490_2hzju2_k$();
            throw PositionalException_init_$Create$(
                tmp_0,
                tmp_1,
                node,
                null,
                0,
                24,
                null
            );
        } else {
            tmp = tmp0_elvis_lhs;
        }
        return tmp;
    };
    SymbolTable.prototype.getFunction_cbvgm5_k$ = function (node) {
        var res = this.fileTable_1.getFunctionOrNull_p690c9_k$(node);
        if (res == null) {
            if (this.variableTable_1 == null) {
                var tmp =
                    "Function `" +
                    node
                        ._get_left__802434852_d9qyp0_k$()
                        ._get_value__3683422336_a43j40_k$() +
                    "` not found";
                var tmp_0 =
                    this.fileTable_1._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    tmp,
                    tmp_0,
                    node,
                    null,
                    0,
                    24,
                    null
                );
            }
            return ensureNotNull(this.variableTable_1).getFunction_ken7yo_k$(
                node,
                this.fileTable_1
            );
        }
        return res;
    };
    SymbolTable.prototype.getObjectOrNull_vkys4u_k$ = function (node) {
        return this.fileTable_1.getObjectOrNull_5h3942_k$(
            node._get_value__3683422336_a43j40_k$()
        );
    };
    SymbolTable.prototype.getTypeOrNull_4w5z87_k$ = function (node) {
        return this.fileTable_1.getTypeOrNull_4rmbrt_k$(
            node._get_value__3683422336_a43j40_k$()
        );
    };
    SymbolTable.prototype.getUncopiedTypeOrNull_j6ica_k$ = function (node) {
        return this.fileTable_1.getUncopiedType_3y44ec_k$(node);
    };
    SymbolTable.prototype.getFunctionOrNull_p690c9_k$ = function (node) {
        var tmp1_elvis_lhs = this.fileTable_1.getFunctionOrNull_p690c9_k$(node);
        var tmp;
        if (tmp1_elvis_lhs == null) {
            var tmp0_safe_receiver = this.variableTable_1;
            tmp =
                tmp0_safe_receiver == null
                    ? null
                    : tmp0_safe_receiver.getFunctionOrNull_p690c9_k$(node);
        } else {
            tmp = tmp1_elvis_lhs;
        }
        return tmp;
    };
    SymbolTable.prototype.getVariableOrNull_x0gevv_k$ = function (name) {
        var tmp0_safe_receiver = this.scopeTable_1;
        return tmp0_safe_receiver == null
            ? null
            : tmp0_safe_receiver.getVariableOrNull_x0gevv_k$(name);
    };
    SymbolTable.prototype.getIdentifier_f5yrxq_k$ = function (node) {
        var tmp0_elvis_lhs = this.getIdentifierOrNull_ua2gmg_k$(node);
        var tmp;
        if (tmp0_elvis_lhs == null) {
            var tmp_0 =
                "Identifier `" +
                node._get_value__3683422336_a43j40_k$() +
                "` not found in `" +
                this.fileTable_1 +
                "`";
            var tmp_1 = this.fileTable_1._get_filePath__151144490_2hzju2_k$();
            throw PositionalException_init_$Create$(
                tmp_0,
                tmp_1,
                node,
                null,
                0,
                24,
                null
            );
        } else {
            tmp = tmp0_elvis_lhs;
        }
        return tmp;
    };
    SymbolTable.prototype.getIdentifierOrNull_ua2gmg_k$ = function (node) {
        var variable = this.getVariableOrNull_x0gevv_k$(
            node._get_value__3683422336_a43j40_k$()
        );
        if (!(variable == null)) {
            return variable;
        }
        var tmp0_safe_receiver = this.variableTable_1;
        var property =
            tmp0_safe_receiver == null
                ? null
                : tmp0_safe_receiver.getPropertyOrNull_191djg_k$(
                      node._get_value__3683422336_a43j40_k$()
                  );
        if (!(property == null)) {
            return property;
        }
        return this.getObjectOrNull_vkys4u_k$(node);
    };
    SymbolTable.prototype.getPropertyOrNull_191djg_k$ = function (name) {
        var tmp0_safe_receiver = this.variableTable_1;
        return tmp0_safe_receiver == null
            ? null
            : tmp0_safe_receiver.getPropertyOrNull_191djg_k$(name);
    };
    SymbolTable.prototype.getAssignmentOrNull_mvuv6c_k$ = function (name) {
        var tmp = this.variableTable_1;
        if (tmp instanceof Type) {
            var tmp_0 = this.variableTable_1;
            return (
                tmp_0 instanceof Type ? tmp_0 : THROW_CCE()
            ).getAssignment_ghhhs2_k$(name);
        } else {
        }
        return null;
    };
    SymbolTable.prototype.copy_1tks5_k$ = function () {
        var tmp0_safe_receiver = this.scopeTable_1;
        var tmp1_elvis_lhs =
            tmp0_safe_receiver == null
                ? null
                : tmp0_safe_receiver.copy_1tks5_k$();
        return new SymbolTable(
            tmp1_elvis_lhs == null ? new ScopeTable() : tmp1_elvis_lhs,
            this.variableTable_1,
            this.fileTable_1,
            this.resolvingType_1
        );
    };
    SymbolTable.prototype.addVariableOrNot_1tmm82_k$ = function (node) {
        var tmp0_safe_receiver = this.scopeTable_1;
        var tmp;
        if (tmp0_safe_receiver == null) {
            tmp = null;
        } else {
            tmp0_safe_receiver.addVariable_vmj31f_k$(
                node._get_value__3683422336_a43j40_k$(),
                Utils_getInstance().toVariable_abd9s8_k$("", node)
            );
            tmp = Unit_getInstance();
        }
        return tmp;
    };
    SymbolTable.prototype.toString = function () {
        var res = StringBuilder_init_$Create$();
        res.append_ssq29y_k$(
            Companion_getInstance_10().globalFile_1.stringNotation_2r8rar_k$()
        );
        Unit_getInstance();
        var tmp0_iterator = Companion_getInstance_10()
            .imports_1._get_keys__801529559_d97k5z_k$()
            .iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var i = tmp0_iterator.next_20eer_k$();
            res.append_ssq29y_k$("\n");
            Unit_getInstance();
            res.append_ssq29y_k$(i.stringNotation_2r8rar_k$());
            Unit_getInstance();
            var tmp1_safe_receiver =
                Companion_getInstance_10().imports_1.get_1mhr4y_k$(i);
            var tmp;
            if (tmp1_safe_receiver == null) {
                tmp = null;
            } else {
                var tmp$ret$0;
                $l$block: {
                    tmp$ret$0 = !tmp1_safe_receiver.isEmpty_y1axqb_k$();
                    break $l$block;
                }
                tmp = tmp$ret$0;
            }
            if (tmp === true) {
                var tmp$ret$4;
                $l$block_3: {
                    var tmp0_map_0 = ensureNotNull(
                        Companion_getInstance_10().imports_1.get_1mhr4y_k$(i)
                    );
                    var tmp$ret$3;
                    $l$block_2: {
                        var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                            tmp0_map_0._get_size__809037418_ddoh9m_k$()
                        );
                        var tmp$ret$1;
                        $l$block_0: {
                            tmp$ret$1 = tmp0_map_0
                                ._get_entries__31877249_iz8n5_k$()
                                .iterator_jk1svi_k$();
                            break $l$block_0;
                        }
                        var tmp0_iterator_1_2 = tmp$ret$1;
                        while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                            var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                            var tmp$ret$2;
                            $l$block_1: {
                                tmp$ret$2 = new Pair(
                                    item_2_3._get_value__3683422336_a43j40_k$(),
                                    item_2_3._get_key__857139730_e6bh8y_k$()
                                );
                                break $l$block_1;
                            }
                            tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$2);
                            Unit_getInstance();
                        }
                        tmp$ret$3 = tmp0_mapTo_0_1;
                        break $l$block_2;
                    }
                    tmp$ret$4 = tmp$ret$3;
                    break $l$block_3;
                }
                var tmp_0 = tmp$ret$4;
                res.append_ssq29y_k$(
                    "\n\timports: " +
                        joinToString$default(
                            tmp_0,
                            ",",
                            null,
                            null,
                            0,
                            null,
                            null,
                            62,
                            null
                        ) +
                        "\n"
                );
                Unit_getInstance();
            } else {
            }
        }
        return res.toString();
    };
    SymbolTable.prototype.getDictionaryFromTable_awm3h4_k$ = function () {
        var references = References_init_$Create$(
            null,
            null,
            null,
            null,
            15,
            null
        );
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = LinkedHashMap_init_$Create$();
            break $l$block;
        }
        var res = tmp$ret$0;
        var tmp0_safe_receiver = this.scopeTable_1;
        var tmp1_safe_receiver =
            tmp0_safe_receiver == null
                ? null
                : tmp0_safe_receiver.getVariables_1itnb3_k$();
        if (tmp1_safe_receiver == null) null;
        else {
            {
                var tmp$ret$1;
                $l$block_0: {
                    tmp$ret$1 = tmp1_safe_receiver
                        ._get_entries__31877249_iz8n5_k$()
                        .iterator_jk1svi_k$();
                    break $l$block_0;
                }
                var tmp0_iterator_1 = tmp$ret$1;
                while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
                    var element_2 = tmp0_iterator_1.next_20eer_k$();
                    {
                        var tmp$ret$2;
                        $l$block_1: {
                            tmp$ret$2 =
                                element_2._get_key__857139730_e6bh8y_k$();
                            break $l$block_1;
                        }
                        var name_4 = tmp$ret$2;
                        var tmp$ret$3;
                        $l$block_2: {
                            tmp$ret$3 =
                                element_2._get_value__3683422336_a43j40_k$();
                            break $l$block_2;
                        }
                        var variable_5 = tmp$ret$3;
                        {
                            var tmp0_set_0_6 =
                                variable_5.toDebugClass$default_jlj1oy_k$(
                                    references,
                                    false,
                                    2,
                                    null
                                );
                            res.put_3mhbri_k$(name_4, tmp0_set_0_6);
                            Unit_getInstance();
                        }
                    }
                }
            }
            Unit_getInstance();
        }
        Unit_getInstance();
        var tmp = this.variableTable_1;
        if (tmp instanceof Type) {
            {
                var tmp_0 = ensureNotNull(this.variableTable_1);
                var tmp0_set_0 = tmp_0.toDebugClass$default_jlj1oy_k$(
                    references,
                    false,
                    2,
                    null
                );
                res.put_3mhbri_k$("@this", tmp0_set_0);
                Unit_getInstance();
            }
        } else {
        }
        $l$loop: while (true) {
            var tmp$ret$4;
            $l$block_3: {
                var tmp1_isNotEmpty_0 =
                    references._get_queue__3558538464_c6g84g_k$();
                tmp$ret$4 = !tmp1_isNotEmpty_0.isEmpty_y1axqb_k$();
                break $l$block_3;
            }
            if (!tmp$ret$4) {
                break $l$loop;
            }
            var tmp_1 = last(
                references
                    ._get_queue__3558538464_c6g84g_k$()
                    ._get_values__2516944425_tel787_k$()
            );
            tmp_1.toDebugClass$default_jlj1oy_k$(references, false, 2, null);
            Unit_getInstance();
        }
        {
            res.put_3mhbri_k$("@references", references);
            Unit_getInstance();
        }
        return res;
    };
    SymbolTable.$metadata$ = {
        simpleName: "SymbolTable",
        kind: "class",
        interfaces: [],
    };
    function ArithmeticOperator(
        symbol,
        value,
        position,
        bindingPower,
        nud,
        led,
        std
    ) {
        Operator_0.call(
            this,
            symbol,
            value,
            position,
            bindingPower,
            nud,
            led,
            std
        );
    }
    ArithmeticOperator.prototype.toNode_xahmvw_k$ = function (filePath) {
        var tmp = this._get_symbol__541899891_8ymsmr_k$();
        var tmp_0 = this._get_value__3683422336_a43j40_k$();
        var tmp_1 = this._get_position__3188952002_iahqv2_k$();
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_map_0 = this._get_children__1387553196_my42wc_k$();
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(tmp0_map_0, 10)
                );
                var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = item_2_3.toNode_xahmvw_k$(filePath);
                        break $l$block;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
                    Unit_getInstance();
                }
                tmp$ret$1 = tmp0_mapTo_0_1;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        return new NumberOperator(tmp, tmp_0, tmp_1, tmp$ret$2);
    };
    ArithmeticOperator.$metadata$ = {
        simpleName: "ArithmeticOperator",
        kind: "class",
        interfaces: [],
    };
    function Assignment_init_$Init$(
        symbol,
        value,
        position,
        bindingPower,
        nud,
        led,
        std,
        children,
        $mask0,
        $marker,
        $this
    ) {
        if (!(($mask0 & 1) === 0)) symbol = "";
        if (!(($mask0 & 4) === 0)) position = new Pair(0, 0);
        if (!(($mask0 & 8) === 0)) bindingPower = 0;
        if (!(($mask0 & 16) === 0)) nud = null;
        if (!(($mask0 & 32) === 0)) led = null;
        if (!(($mask0 & 64) === 0)) std = null;
        if (!(($mask0 & 128) === 0)) {
            var tmp$ret$0;
            var tmp$ret$0_0;
            $l$block: {
                tmp$ret$0 = ArrayList_init_$Create$();
                tmp$ret$0_0 = Unit_getInstance();
                break $l$block;
            }
            children = tmp$ret$0;
        }
        Assignment_0.call(
            $this,
            symbol,
            value,
            position,
            bindingPower,
            nud,
            led,
            std,
            children
        );
        return $this;
    }
    function Assignment_init_$Create$(
        symbol,
        value,
        position,
        bindingPower,
        nud,
        led,
        std,
        children,
        $mask0,
        $marker
    ) {
        return Assignment_init_$Init$(
            symbol,
            value,
            position,
            bindingPower,
            nud,
            led,
            std,
            children,
            $mask0,
            $marker,
            Object.create(Assignment_0.prototype)
        );
    }
    function Assignment_0(
        symbol,
        value,
        position,
        bindingPower,
        nud,
        led,
        std,
        children
    ) {
        Operator_0.call(
            this,
            symbol,
            value,
            position,
            bindingPower,
            nud,
            led,
            std
        );
        this._get_children__1387553196_my42wc_k$().clear_j9y8zo_k$();
        this._get_children__1387553196_my42wc_k$().addAll_oxxjjk_k$(children);
        Unit_getInstance();
    }
    Assignment_0.prototype.toNode_xahmvw_k$ = function (filePath) {
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_map_0 = this._get_children__1387553196_my42wc_k$();
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(tmp0_map_0, 10)
                );
                var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = item_2_3.toNode_xahmvw_k$(filePath);
                        break $l$block;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
                    Unit_getInstance();
                }
                tmp$ret$1 = tmp0_mapTo_0_1;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        var nodeChildren = toMutableList(tmp$ret$2);
        var tmp = first(nodeChildren);
        if (tmp instanceof Identifier) {
            if (
                first(nodeChildren)._get_value__3683422336_a43j40_k$() ===
                "this"
            ) {
                var tmp_0 = first(nodeChildren);
                throw PositionalException_init_$Create$(
                    "this is not assignable",
                    "",
                    tmp_0,
                    null,
                    0,
                    24,
                    null
                );
            }
        } else {
        }
        return new Assignment(
            this._get_symbol__541899891_8ymsmr_k$(),
            this._get_value__3683422336_a43j40_k$(),
            this._get_position__3188952002_iahqv2_k$(),
            nodeChildren
        );
    };
    Assignment_0.$metadata$ = {
        simpleName: "Assignment",
        kind: "class",
        interfaces: [],
    };
    function checkParamsOrArgsOrder($this, params, filePath) {
        var wasAssignment = false;
        var tmp0_iterator = params.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var param = tmp0_iterator.next_20eer_k$();
            var tmp1_subject = param;
            if (tmp1_subject instanceof Assignment_0) wasAssignment = true;
            else {
                if (tmp1_subject instanceof TokenIdentifier) {
                    if (wasAssignment) {
                        throw SyntaxException_init_$Create$(
                            "Default params should be after other",
                            filePath,
                            param,
                            null,
                            8,
                            null
                        );
                    }
                } else {
                    if (wasAssignment) {
                        throw SyntaxException_init_$Create$(
                            "Named args should be after other",
                            filePath,
                            param,
                            null,
                            8,
                            null
                        );
                    }
                }
            }
        }
    }
    function Invocation_0(
        symbol,
        value,
        position,
        bindingPower,
        nud,
        led,
        std
    ) {
        Token_init_$Init$(
            symbol,
            value,
            position,
            bindingPower,
            nud,
            led,
            std,
            null,
            128,
            null,
            this
        );
    }
    Invocation_0.prototype.toNode_xahmvw_k$ = function (filePath) {
        checkParamsOrArgsOrder(
            this,
            this._get_children__1387553196_my42wc_k$().subList_d153ha_k$(
                1,
                this._get_children__1387553196_my42wc_k$()._get_size__809037418_ddoh9m_k$()
            ),
            filePath
        );
        var tmp = this._get_symbol__541899891_8ymsmr_k$();
        var tmp_0 = this._get_value__3683422336_a43j40_k$();
        var tmp_1 = this._get_position__3188952002_iahqv2_k$();
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_map_0 = this._get_children__1387553196_my42wc_k$();
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(tmp0_map_0, 10)
                );
                var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = item_2_3.toNode_xahmvw_k$(filePath);
                        break $l$block;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
                    Unit_getInstance();
                }
                tmp$ret$1 = tmp0_mapTo_0_1;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        return new Invocation(tmp, tmp_0, tmp_1, tmp$ret$2);
    };
    Invocation_0.$metadata$ = {
        simpleName: "Invocation",
        kind: "class",
        interfaces: [Linkable],
    };
    function Link_init_$Init$(
        symbol,
        value,
        position,
        bindingPower,
        nud,
        led,
        std,
        children,
        $mask0,
        $marker,
        $this
    ) {
        if (!(($mask0 & 128) === 0)) {
            var tmp$ret$0;
            var tmp$ret$0_0;
            $l$block: {
                tmp$ret$0 = emptyList();
                tmp$ret$0_0 = Unit_getInstance();
                break $l$block;
            }
            children = tmp$ret$0;
        }
        Link_0.call(
            $this,
            symbol,
            value,
            position,
            bindingPower,
            nud,
            led,
            std,
            children
        );
        return $this;
    }
    function Link_init_$Create$(
        symbol,
        value,
        position,
        bindingPower,
        nud,
        led,
        std,
        children,
        $mask0,
        $marker
    ) {
        return Link_init_$Init$(
            symbol,
            value,
            position,
            bindingPower,
            nud,
            led,
            std,
            children,
            $mask0,
            $marker,
            Object.create(Link_0.prototype)
        );
    }
    function Link_0(
        symbol,
        value,
        position,
        bindingPower,
        nud,
        led,
        std,
        children
    ) {
        Token_init_$Init$(
            symbol,
            value,
            position,
            bindingPower,
            nud,
            led,
            std,
            null,
            128,
            null,
            this
        );
        var tmp = this;
        var tmp$ret$1;
        $l$block: {
            tmp$ret$1 = ArrayList_init_$Create$();
            break $l$block;
        }
        tmp.nullable_1 = tmp$ret$1;
        var tmp$ret$2;
        $l$block_0: {
            tmp$ret$2 = !children.isEmpty_y1axqb_k$();
            break $l$block_0;
        }
        if (tmp$ret$2) {
            this._get_children__1387553196_my42wc_k$().clear_j9y8zo_k$();
            this._get_children__1387553196_my42wc_k$().addAll_oxxjjk_k$(
                children
            );
            Unit_getInstance();
        } else {
        }
    }
    Link_0.prototype._get_nullable__2526391434_t8ypva_k$ = function () {
        return this.nullable_1;
    };
    Link_0.prototype.toNode_xahmvw_k$ = function (filePath) {
        var tmp = this._get_symbol__541899891_8ymsmr_k$();
        var tmp_0 = this._get_value__3683422336_a43j40_k$();
        var tmp_1 = this._get_position__3188952002_iahqv2_k$();
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_map_0 = this._get_children__1387553196_my42wc_k$();
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(tmp0_map_0, 10)
                );
                var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = item_2_3.toNode_xahmvw_k$(filePath);
                        break $l$block;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
                    Unit_getInstance();
                }
                tmp$ret$1 = tmp0_mapTo_0_1;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        return new Link(
            tmp,
            tmp_0,
            tmp_1,
            tmp$ret$2,
            toList_0(this.nullable_1)
        );
    };
    Link_0.$metadata$ = {
        simpleName: "Link",
        kind: "class",
        interfaces: [],
    };
    function MetaToken_init_$Init$(
        symbol,
        value,
        position,
        nud,
        $mask0,
        $marker,
        $this
    ) {
        if (!(($mask0 & 8) === 0)) {
            nud = MetaToken$_init_$lambda_1781794921();
        }
        MetaToken.call($this, symbol, value, position, nud);
        return $this;
    }
    function MetaToken_init_$Create$(
        symbol,
        value,
        position,
        nud,
        $mask0,
        $marker
    ) {
        return MetaToken_init_$Init$(
            symbol,
            value,
            position,
            nud,
            $mask0,
            $marker,
            Object.create(MetaToken.prototype)
        );
    }
    function MetaToken$_init_$lambda_1781794921() {
        return function (t, _anonymous_parameter_1__2695192083) {
            return t;
        };
    }
    function MetaToken(symbol, value, position, nud) {
        Token_init_$Init$(
            symbol,
            value,
            position,
            0,
            nud,
            null,
            null,
            null,
            232,
            null,
            this
        );
    }
    MetaToken.prototype.toNode_xahmvw_k$ = function (filePath) {
        return new Meta(
            this._get_symbol__541899891_8ymsmr_k$(),
            this._get_value__3683422336_a43j40_k$(),
            this._get_position__3188952002_iahqv2_k$()
        );
    };
    MetaToken.$metadata$ = {
        simpleName: "MetaToken",
        kind: "class",
        interfaces: [],
    };
    function Operator_0(symbol, value, position, bindingPower, nud, led, std) {
        Token_init_$Init$(
            symbol,
            value,
            position,
            bindingPower,
            nud,
            led,
            std,
            null,
            128,
            null,
            this
        );
    }
    Operator_0.prototype.toNode_xahmvw_k$ = function (filePath) {
        var tmp = this._get_symbol__541899891_8ymsmr_k$();
        var tmp_0 = this._get_value__3683422336_a43j40_k$();
        var tmp_1 = this._get_position__3188952002_iahqv2_k$();
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_map_0 = this._get_children__1387553196_my42wc_k$();
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(tmp0_map_0, 10)
                );
                var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = item_2_3.toNode_xahmvw_k$(filePath);
                        break $l$block;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
                    Unit_getInstance();
                }
                tmp$ret$1 = tmp0_mapTo_0_1;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        return new Operator(tmp, tmp_0, tmp_1, toMutableList(tmp$ret$2));
    };
    Operator_0.$metadata$ = {
        simpleName: "Operator",
        kind: "class",
        interfaces: [],
    };
    function Token_init_$Init$(
        symbol,
        value,
        position,
        bindingPower,
        nud,
        led,
        std,
        children,
        $mask0,
        $marker,
        $this
    ) {
        if (!(($mask0 & 1) === 0)) symbol = "";
        if (!(($mask0 & 2) === 0)) value = "";
        if (!(($mask0 & 4) === 0)) position = new Pair(0, 0);
        if (!(($mask0 & 8) === 0)) bindingPower = 0;
        if (!(($mask0 & 16) === 0)) nud = null;
        if (!(($mask0 & 32) === 0)) led = null;
        if (!(($mask0 & 64) === 0)) std = null;
        if (!(($mask0 & 128) === 0)) {
            var tmp$ret$0;
            var tmp$ret$0_0;
            $l$block: {
                tmp$ret$0 = ArrayList_init_$Create$();
                tmp$ret$0_0 = Unit_getInstance();
                break $l$block;
            }
            children = tmp$ret$0;
        }
        Token.call(
            $this,
            symbol,
            value,
            position,
            bindingPower,
            nud,
            led,
            std,
            children
        );
        return $this;
    }
    function Token_init_$Create$(
        symbol,
        value,
        position,
        bindingPower,
        nud,
        led,
        std,
        children,
        $mask0,
        $marker
    ) {
        return Token_init_$Init$(
            symbol,
            value,
            position,
            bindingPower,
            nud,
            led,
            std,
            children,
            $mask0,
            $marker,
            Object.create(Token.prototype)
        );
    }
    function Token(
        symbol,
        value,
        position,
        bindingPower,
        nud,
        led,
        std,
        children
    ) {
        this.symbol_1 = symbol;
        this.value_1 = value;
        this.position_1 = position;
        this.bindingPower_1 = bindingPower;
        this.nud_1 = nud;
        this.led_1 = led;
        this.std_1 = std;
        this.children_1 = children;
    }
    Token.prototype._set_symbol__453320063_q2hh9p_k$ = function (
        _set____804775014
    ) {
        this.symbol_1 = _set____804775014;
    };
    Token.prototype._get_symbol__541899891_8ymsmr_k$ = function () {
        return this.symbol_1;
    };
    Token.prototype._set_value__1325260276_wbpkyq_k$ = function (
        _set____804775014
    ) {
        this.value_1 = _set____804775014;
    };
    Token.prototype._get_value__3683422336_a43j40_k$ = function () {
        return this.value_1;
    };
    Token.prototype._get_position__3188952002_iahqv2_k$ = function () {
        return this.position_1;
    };
    Token.prototype._get_bindingPower__398781387_6lf9or_k$ = function () {
        return this.bindingPower_1;
    };
    Token.prototype._set_nud__296131368_4rdm8l_k$ = function (
        _set____804775014
    ) {
        this.nud_1 = _set____804775014;
    };
    Token.prototype._get_nud__857243828_e6dpkk_k$ = function () {
        return this.nud_1;
    };
    Token.prototype._set_led__296056410_ll7hoc_k$ = function (
        _set____804775014
    ) {
        this.led_1 = _set____804775014;
    };
    Token.prototype._get_led__857168870_e6c3qe_k$ = function () {
        return this.led_1;
    };
    Token.prototype._set_std__296279362_1k36f9_k$ = function (
        _set____804775014
    ) {
        this.std_1 = _set____804775014;
    };
    Token.prototype._get_std__857391822_e6gvri_k$ = function () {
        return this.std_1;
    };
    Token.prototype._get_children__1387553196_my42wc_k$ = function () {
        return this.children_1;
    };
    Token.prototype._get_left__802434852_d9qyp0_k$ = function () {
        return this.children_1.get_fkrdnv_k$(0);
    };
    Token.prototype._get_right__3576132917_bvz45n_k$ = function () {
        return this.children_1.get_fkrdnv_k$(1);
    };
    Token.prototype.toNode_xahmvw_k$ = function (filePath) {
        var tmp = this.symbol_1;
        var tmp_0 = this.value_1;
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_map_0 = this.children_1;
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(tmp0_map_0, 10)
                );
                var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = item_2_3.toNode_xahmvw_k$(filePath);
                        break $l$block;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
                    Unit_getInstance();
                }
                tmp$ret$1 = tmp0_mapTo_0_1;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        return Node_init_$Create$(
            tmp,
            tmp_0,
            null,
            toMutableList(tmp$ret$2),
            4,
            null
        );
    };
    Token.prototype.toString = function () {
        return this.symbol_1 + ":" + this.value_1;
    };
    Token.$metadata$ = {
        simpleName: "Token",
        kind: "class",
        interfaces: [],
    };
    function TokenBlock_init_$Init$(position, $this) {
        TokenBlock.call(
            $this,
            Token_init_$Create$(
                "{",
                "{",
                position,
                0,
                null,
                null,
                null,
                null,
                248,
                null
            )
        );
        return $this;
    }
    function TokenBlock_init_$Create$(position) {
        return TokenBlock_init_$Init$(
            position,
            Object.create(TokenBlock.prototype)
        );
    }
    function TokenBlock(token) {
        var tmp = token._get_symbol__541899891_8ymsmr_k$();
        var tmp_0 = token._get_value__3683422336_a43j40_k$();
        var tmp_1 = token._get_position__3188952002_iahqv2_k$();
        var tmp_2 = token._get_bindingPower__398781387_6lf9or_k$();
        var tmp_3 = token._get_nud__857243828_e6dpkk_k$();
        var tmp_4 = token._get_led__857168870_e6c3qe_k$();
        var tmp_5 = token._get_std__857391822_e6gvri_k$();
        Token_init_$Init$(
            tmp,
            tmp_0,
            tmp_1,
            tmp_2,
            tmp_3,
            tmp_4,
            tmp_5,
            null,
            128,
            null,
            this
        );
    }
    TokenBlock.prototype.toNode_xahmvw_k$ = function (filePath) {
        var tmp = this._get_symbol__541899891_8ymsmr_k$();
        var tmp_0 = this._get_value__3683422336_a43j40_k$();
        var tmp_1 = this._get_position__3188952002_iahqv2_k$();
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_map_0 = this._get_children__1387553196_my42wc_k$();
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(tmp0_map_0, 10)
                );
                var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = item_2_3.toNode_xahmvw_k$(filePath);
                        break $l$block;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
                    Unit_getInstance();
                }
                tmp$ret$1 = tmp0_mapTo_0_1;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        return new Block(new Node(tmp, tmp_0, tmp_1, toMutableList(tmp$ret$2)));
    };
    TokenBlock.$metadata$ = {
        simpleName: "TokenBlock",
        kind: "class",
        interfaces: [],
    };
    function TokenIdentifier(
        symbol,
        value,
        position,
        bindingPower,
        nud,
        led,
        std
    ) {
        Token_init_$Init$(
            symbol,
            value,
            position,
            bindingPower,
            nud,
            led,
            std,
            null,
            128,
            null,
            this
        );
    }
    TokenIdentifier.prototype.toNode_xahmvw_k$ = function (filePath) {
        return new Identifier(
            this._get_symbol__541899891_8ymsmr_k$(),
            this._get_value__3683422336_a43j40_k$(),
            this._get_position__3188952002_iahqv2_k$()
        );
    };
    TokenIdentifier.$metadata$ = {
        simpleName: "TokenIdentifier",
        kind: "class",
        interfaces: [Linkable],
    };
    function TokenIndex_init_$Init$(node, $this) {
        TokenIndex.call(
            $this,
            node._get_symbol__541899891_8ymsmr_k$(),
            node._get_value__3683422336_a43j40_k$(),
            node._get_position__3188952002_iahqv2_k$(),
            node._get_bindingPower__398781387_6lf9or_k$(),
            node._get_nud__857243828_e6dpkk_k$(),
            node._get_led__857168870_e6c3qe_k$(),
            node._get_std__857391822_e6gvri_k$(),
            node._get_children__1387553196_my42wc_k$()
        );
        return $this;
    }
    function TokenIndex_init_$Create$(node) {
        return TokenIndex_init_$Init$(
            node,
            Object.create(TokenIndex.prototype)
        );
    }
    function TokenIndex(
        symbol,
        value,
        position,
        bindingPower,
        nud,
        led,
        std,
        children
    ) {
        Token_init_$Init$(
            symbol,
            value,
            position,
            bindingPower,
            nud,
            led,
            std,
            null,
            128,
            null,
            this
        );
        this._get_children__1387553196_my42wc_k$().clear_j9y8zo_k$();
        this._get_children__1387553196_my42wc_k$().addAll_oxxjjk_k$(children);
        Unit_getInstance();
    }
    TokenIndex.prototype.toNode_xahmvw_k$ = function (filePath) {
        var tmp = this._get_symbol__541899891_8ymsmr_k$();
        var tmp_0 = this._get_value__3683422336_a43j40_k$();
        var tmp_1 = this._get_position__3188952002_iahqv2_k$();
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_map_0 = this._get_children__1387553196_my42wc_k$();
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(tmp0_map_0, 10)
                );
                var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = item_2_3.toNode_xahmvw_k$(filePath);
                        break $l$block;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
                    Unit_getInstance();
                }
                tmp$ret$1 = tmp0_mapTo_0_1;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        return new Index(tmp, tmp_0, tmp_1, tmp$ret$2);
    };
    TokenIndex.$metadata$ = {
        simpleName: "TokenIndex",
        kind: "class",
        interfaces: [Linkable],
    };
    function TokenTernary(node) {
        var tmp = node._get_symbol__541899891_8ymsmr_k$();
        var tmp_0 = node._get_value__3683422336_a43j40_k$();
        var tmp_1 = node._get_position__3188952002_iahqv2_k$();
        var tmp_2 = node._get_bindingPower__398781387_6lf9or_k$();
        var tmp_3 = node._get_nud__857243828_e6dpkk_k$();
        var tmp_4 = node._get_led__857168870_e6c3qe_k$();
        var tmp_5 = node._get_std__857391822_e6gvri_k$();
        Token_init_$Init$(
            tmp,
            tmp_0,
            tmp_1,
            tmp_2,
            tmp_3,
            tmp_4,
            tmp_5,
            null,
            128,
            null,
            this
        );
    }
    TokenTernary.prototype.toNode_xahmvw_k$ = function (filePath) {
        var tmp = this._get_symbol__541899891_8ymsmr_k$();
        var tmp_0 = this._get_value__3683422336_a43j40_k$();
        var tmp_1 = this._get_position__3188952002_iahqv2_k$();
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_map_0 = this._get_children__1387553196_my42wc_k$();
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(tmp0_map_0, 10)
                );
                var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = item_2_3.toNode_xahmvw_k$(filePath);
                        break $l$block;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
                    Unit_getInstance();
                }
                tmp$ret$1 = tmp0_mapTo_0_1;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        return new NodeTernary(
            new Node(tmp, tmp_0, tmp_1, toMutableList(tmp$ret$2))
        );
    };
    TokenTernary.$metadata$ = {
        simpleName: "TokenTernary",
        kind: "class",
        interfaces: [],
    };
    function TokenWordStatement(node) {
        var tmp = node._get_symbol__541899891_8ymsmr_k$();
        var tmp_0 = node._get_value__3683422336_a43j40_k$();
        var tmp_1 = node._get_position__3188952002_iahqv2_k$();
        var tmp_2 = node._get_bindingPower__398781387_6lf9or_k$();
        var tmp_3 = node._get_nud__857243828_e6dpkk_k$();
        var tmp_4 = node._get_led__857168870_e6c3qe_k$();
        var tmp_5 = node._get_std__857391822_e6gvri_k$();
        Token_init_$Init$(
            tmp,
            tmp_0,
            tmp_1,
            tmp_2,
            tmp_3,
            tmp_4,
            tmp_5,
            null,
            128,
            null,
            this
        );
    }
    TokenWordStatement.prototype.toNode_xahmvw_k$ = function (filePath) {
        var tmp = this._get_symbol__541899891_8ymsmr_k$();
        var tmp_0 = this._get_value__3683422336_a43j40_k$();
        var tmp_1 = this._get_position__3188952002_iahqv2_k$();
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_map_0 = this._get_children__1387553196_my42wc_k$();
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(tmp0_map_0, 10)
                );
                var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = item_2_3.toNode_xahmvw_k$(filePath);
                        break $l$block;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
                    Unit_getInstance();
                }
                tmp$ret$1 = tmp0_mapTo_0_1;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        return new WordStatement(
            new Node(tmp, tmp_0, tmp_1, toMutableList(tmp$ret$2))
        );
    };
    TokenWordStatement.$metadata$ = {
        simpleName: "TokenWordStatement",
        kind: "class",
        interfaces: [],
    };
    function TypeOperator_0(
        symbol,
        value,
        position,
        bindingPower,
        nud,
        led,
        std
    ) {
        Operator_0.call(
            this,
            symbol,
            value,
            position,
            bindingPower,
            nud,
            led,
            std
        );
    }
    TypeOperator_0.prototype.toNode_xahmvw_k$ = function (filePath) {
        var tmp = this._get_symbol__541899891_8ymsmr_k$();
        var tmp_0 = this._get_value__3683422336_a43j40_k$();
        var tmp_1 = this._get_position__3188952002_iahqv2_k$();
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_map_0 = this._get_children__1387553196_my42wc_k$();
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(tmp0_map_0, 10)
                );
                var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = item_2_3.toNode_xahmvw_k$(filePath);
                        break $l$block;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
                    Unit_getInstance();
                }
                tmp$ret$1 = tmp0_mapTo_0_1;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        return new TypeOperator(tmp, tmp_0, tmp_1, toMutableList(tmp$ret$2));
    };
    TypeOperator_0.$metadata$ = {
        simpleName: "TypeOperator",
        kind: "class",
        interfaces: [],
    };
    function TokenImport(token) {
        var tmp = token._get_symbol__541899891_8ymsmr_k$();
        var tmp_0 = token._get_value__3683422336_a43j40_k$();
        var tmp_1 = token._get_position__3188952002_iahqv2_k$();
        var tmp_2 = token._get_bindingPower__398781387_6lf9or_k$();
        var tmp_3 = token._get_nud__857243828_e6dpkk_k$();
        var tmp_4 = token._get_led__857168870_e6c3qe_k$();
        var tmp_5 = token._get_std__857391822_e6gvri_k$();
        Token_init_$Init$(
            tmp,
            tmp_0,
            tmp_1,
            tmp_2,
            tmp_3,
            tmp_4,
            tmp_5,
            null,
            128,
            null,
            this
        );
    }
    TokenImport.prototype.toNode_xahmvw_k$ = function (filePath) {
        var tmp = this._get_symbol__541899891_8ymsmr_k$();
        var tmp_0 = this._get_value__3683422336_a43j40_k$();
        var tmp_1 = this._get_position__3188952002_iahqv2_k$();
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_map_0 = this._get_children__1387553196_my42wc_k$();
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(tmp0_map_0, 10)
                );
                var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = item_2_3.toNode_xahmvw_k$(filePath);
                        break $l$block;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
                    Unit_getInstance();
                }
                tmp$ret$1 = tmp0_mapTo_0_1;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        return new ImportNode(tmp, tmp_0, tmp_1, tmp$ret$2);
    };
    TokenImport.$metadata$ = {
        simpleName: "TokenImport",
        kind: "class",
        interfaces: [],
    };
    function TokenType(token) {
        var tmp = token._get_symbol__541899891_8ymsmr_k$();
        var tmp_0 = token._get_value__3683422336_a43j40_k$();
        var tmp_1 = token._get_position__3188952002_iahqv2_k$();
        var tmp_2 = token._get_bindingPower__398781387_6lf9or_k$();
        var tmp_3 = token._get_nud__857243828_e6dpkk_k$();
        var tmp_4 = token._get_led__857168870_e6c3qe_k$();
        var tmp_5 = token._get_std__857391822_e6gvri_k$();
        Token_init_$Init$(
            tmp,
            tmp_0,
            tmp_1,
            tmp_2,
            tmp_3,
            tmp_4,
            tmp_5,
            null,
            128,
            null,
            this
        );
    }
    TokenType.prototype.toNode_xahmvw_k$ = function (filePath) {
        var tmp = this._get_symbol__541899891_8ymsmr_k$();
        var tmp_0 = this._get_value__3683422336_a43j40_k$();
        var tmp_1 = this._get_position__3188952002_iahqv2_k$();
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_map_0 = this._get_children__1387553196_my42wc_k$();
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(tmp0_map_0, 10)
                );
                var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = item_2_3.toNode_xahmvw_k$(filePath);
                        break $l$block;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
                    Unit_getInstance();
                }
                tmp$ret$1 = tmp0_mapTo_0_1;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        return new TypeNode(tmp, tmp_0, tmp_1, tmp$ret$2);
    };
    TokenType.$metadata$ = {
        simpleName: "TokenType",
        kind: "class",
        interfaces: [],
    };
    function TokenObject(token) {
        var tmp = token._get_symbol__541899891_8ymsmr_k$();
        var tmp_0 = token._get_value__3683422336_a43j40_k$();
        var tmp_1 = token._get_position__3188952002_iahqv2_k$();
        var tmp_2 = token._get_bindingPower__398781387_6lf9or_k$();
        var tmp_3 = token._get_nud__857243828_e6dpkk_k$();
        var tmp_4 = token._get_led__857168870_e6c3qe_k$();
        var tmp_5 = token._get_std__857391822_e6gvri_k$();
        Token_init_$Init$(
            tmp,
            tmp_0,
            tmp_1,
            tmp_2,
            tmp_3,
            tmp_4,
            tmp_5,
            null,
            128,
            null,
            this
        );
    }
    TokenObject.prototype.toNode_xahmvw_k$ = function (filePath) {
        var tmp = this._get_symbol__541899891_8ymsmr_k$();
        var tmp_0 = this._get_value__3683422336_a43j40_k$();
        var tmp_1 = this._get_position__3188952002_iahqv2_k$();
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_map_0 = this._get_children__1387553196_my42wc_k$();
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(tmp0_map_0, 10)
                );
                var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = item_2_3.toNode_xahmvw_k$(filePath);
                        break $l$block;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
                    Unit_getInstance();
                }
                tmp$ret$1 = tmp0_mapTo_0_1;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        return new ObjectNode(tmp, tmp_0, tmp_1, tmp$ret$2);
    };
    TokenObject.$metadata$ = {
        simpleName: "TokenObject",
        kind: "class",
        interfaces: [],
    };
    function checkParameters($this, parameters, filePath) {
        var tmp0_iterator = parameters.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var parameter = tmp0_iterator.next_20eer_k$();
            var tmp;
            if (!(parameter instanceof Assignment_0)) {
                tmp = !(parameter instanceof TokenIdentifier);
            } else {
                {
                    tmp = false;
                }
            }
            if (tmp) {
                throw SyntaxException_init_$Create$(
                    "Expected identifier or assignment as function parameter",
                    filePath,
                    $this,
                    null,
                    8,
                    null
                );
            } else {
            }
        }
    }
    function TokenFunction(token) {
        Token.call(
            this,
            token._get_symbol__541899891_8ymsmr_k$(),
            token._get_value__3683422336_a43j40_k$(),
            token._get_position__3188952002_iahqv2_k$(),
            token._get_bindingPower__398781387_6lf9or_k$(),
            token._get_nud__857243828_e6dpkk_k$(),
            token._get_led__857168870_e6c3qe_k$(),
            token._get_std__857391822_e6gvri_k$(),
            token._get_children__1387553196_my42wc_k$()
        );
    }
    TokenFunction.prototype.toNode_xahmvw_k$ = function (filePath) {
        checkParameters(
            this,
            this._get_children__1387553196_my42wc_k$()
                .get_fkrdnv_k$(0)
                ._get_children__1387553196_my42wc_k$()
                .subList_d153ha_k$(
                    1,
                    this._get_children__1387553196_my42wc_k$()
                        .get_fkrdnv_k$(0)
                        ._get_children__1387553196_my42wc_k$()
                        ._get_size__809037418_ddoh9m_k$()
                ),
            filePath
        );
        var tmp = this._get_symbol__541899891_8ymsmr_k$();
        var tmp_0 = this._get_value__3683422336_a43j40_k$();
        var tmp_1 = this._get_position__3188952002_iahqv2_k$();
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_map_0 = this._get_children__1387553196_my42wc_k$();
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(tmp0_map_0, 10)
                );
                var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = item_2_3.toNode_xahmvw_k$(filePath);
                        break $l$block;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
                    Unit_getInstance();
                }
                tmp$ret$1 = tmp0_mapTo_0_1;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        return new FunctionNode(tmp, tmp_0, tmp_1, tmp$ret$2);
    };
    TokenFunction.$metadata$ = {
        simpleName: "TokenFunction",
        kind: "class",
        interfaces: [],
    };
    function TokenDictionary(node) {
        Token.call(
            this,
            node._get_symbol__541899891_8ymsmr_k$(),
            node._get_value__3683422336_a43j40_k$(),
            node._get_position__3188952002_iahqv2_k$(),
            node._get_bindingPower__398781387_6lf9or_k$(),
            node._get_nud__857243828_e6dpkk_k$(),
            node._get_led__857168870_e6c3qe_k$(),
            node._get_std__857391822_e6gvri_k$(),
            node._get_children__1387553196_my42wc_k$()
        );
    }
    TokenDictionary.prototype.toNode_xahmvw_k$ = function (filePath) {
        var tmp = this._get_symbol__541899891_8ymsmr_k$();
        var tmp_0 = this._get_value__3683422336_a43j40_k$();
        var tmp_1 = this._get_position__3188952002_iahqv2_k$();
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_map_0 = this._get_children__1387553196_my42wc_k$();
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(tmp0_map_0, 10)
                );
                var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = item_2_3.toNode_xahmvw_k$(filePath);
                        break $l$block;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
                    Unit_getInstance();
                }
                tmp$ret$1 = tmp0_mapTo_0_1;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        return new NodeDictionary(
            new Node(tmp, tmp_0, tmp_1, toMutableList(tmp$ret$2))
        );
    };
    TokenDictionary.$metadata$ = {
        simpleName: "TokenDictionary",
        kind: "class",
        interfaces: [],
    };
    function TokenList(node) {
        Token.call(
            this,
            node._get_symbol__541899891_8ymsmr_k$(),
            node._get_value__3683422336_a43j40_k$(),
            node._get_position__3188952002_iahqv2_k$(),
            node._get_bindingPower__398781387_6lf9or_k$(),
            node._get_nud__857243828_e6dpkk_k$(),
            node._get_led__857168870_e6c3qe_k$(),
            node._get_std__857391822_e6gvri_k$(),
            node._get_children__1387553196_my42wc_k$()
        );
        this._get_children__1387553196_my42wc_k$().clear_j9y8zo_k$();
        this._get_children__1387553196_my42wc_k$().addAll_oxxjjk_k$(
            this._get_children__1387553196_my42wc_k$()
        );
        Unit_getInstance();
    }
    TokenList.prototype.toNode_xahmvw_k$ = function (filePath) {
        var tmp = this._get_symbol__541899891_8ymsmr_k$();
        var tmp_0 = this._get_value__3683422336_a43j40_k$();
        var tmp_1 = this._get_position__3188952002_iahqv2_k$();
        var tmp$ret$2;
        $l$block_1: {
            var tmp0_map_0 = this._get_children__1387553196_my42wc_k$();
            var tmp$ret$1;
            $l$block_0: {
                var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(
                    collectionSizeOrDefault(tmp0_map_0, 10)
                );
                var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
                    var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
                    var tmp$ret$0;
                    $l$block: {
                        tmp$ret$0 = item_2_3.toNode_xahmvw_k$(filePath);
                        break $l$block;
                    }
                    tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
                    Unit_getInstance();
                }
                tmp$ret$1 = tmp0_mapTo_0_1;
                break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
        }
        return new NodeList(
            new Node(tmp, tmp_0, tmp_1, toMutableList(tmp$ret$2))
        );
    };
    TokenList.$metadata$ = {
        simpleName: "TokenList",
        kind: "class",
        interfaces: [],
    };
    function TokenNull$_init_$lambda_173534101() {
        return function (t, _anonymous_parameter_1__2695192083) {
            return t;
        };
    }
    function TokenNull(position) {
        var tmp = TokenNull$_init_$lambda_173534101();
        Token_init_$Init$(
            "(NUMBER)",
            "null",
            position,
            0,
            tmp,
            null,
            null,
            null,
            128,
            null,
            this
        );
    }
    TokenNull.prototype.toNode_xahmvw_k$ = function (filePath) {
        return new NodeNull(this._get_position__3188952002_iahqv2_k$());
    };
    TokenNull.$metadata$ = {
        simpleName: "TokenNull",
        kind: "class",
        interfaces: [],
    };
    function isInteger($this) {
        var tmp = $this._get_value__3683422336_a43j40_k$();
        return !contains$default(tmp, ".", false, 2, null);
    }
    function TokenNumber$_init_$lambda_3476634519() {
        return function (t, _anonymous_parameter_1__2695192083) {
            return t;
        };
    }
    function TokenNumber(value, position) {
        var tmp = TokenNumber$_init_$lambda_3476634519();
        Token_init_$Init$(
            "(NUMBER)",
            value,
            position,
            0,
            tmp,
            null,
            null,
            null,
            128,
            null,
            this
        );
    }
    TokenNumber.prototype.toNode_xahmvw_k$ = function (filePath) {
        var tmp;
        if (isInteger(this)) {
            var parsedDouble = toDouble(
                this._get_value__3683422336_a43j40_k$()
            );
            if (
                parsedDouble <
                IntCompanionObject_getInstance()._get_MIN_VALUE__1378605517_mssatp_k$()
                    ? true
                    : parsedDouble >
                      IntCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$()
            ) {
                var tmp_0 =
                    "Integer can be in range [" +
                    IntCompanionObject_getInstance()._get_MIN_VALUE__1378605517_mssatp_k$() +
                    ", " +
                    IntCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$() +
                    "]";
                throw SyntaxException_init_$Create$(
                    tmp_0,
                    filePath,
                    this,
                    null,
                    8,
                    null
                );
            }
            tmp = toInt(this._get_value__3683422336_a43j40_k$());
        } else {
            tmp = toDouble(this._get_value__3683422336_a43j40_k$());
        }
        var number = tmp;
        return new NodeNumber(
            this._get_value__3683422336_a43j40_k$(),
            this._get_position__3188952002_iahqv2_k$(),
            number,
            !isInteger(this)
        );
    };
    TokenNumber.$metadata$ = {
        simpleName: "TokenNumber",
        kind: "class",
        interfaces: [],
    };
    function TokenString(symbol, value, position, bindingPower, nud, led, std) {
        Token_init_$Init$(
            symbol,
            value,
            position,
            bindingPower,
            nud,
            led,
            std,
            null,
            128,
            null,
            this
        );
    }
    TokenString.prototype.toNode_xahmvw_k$ = function (filePath) {
        return new NodeString(
            this._get_symbol__541899891_8ymsmr_k$(),
            this._get_value__3683422336_a43j40_k$(),
            this._get_position__3188952002_iahqv2_k$()
        );
    };
    TokenString.$metadata$ = {
        simpleName: "TokenString",
        kind: "class",
        interfaces: [],
    };
    function createIdent($this, node, name) {
        var tmp = node._get_position__3188952002_iahqv2_k$();
        return Node_init_$Create$(name, name, tmp, null, 8, null);
    }
    function Utils() {
        Utils_instance = this;
        this.NULL_1 = new Null();
        this.FALSE_1 = new PInt(0);
        this.TRUE_1 = new PInt(1);
        Companion_getInstance_5().initializeEmbeddedListFunctions_8qp7m6_k$();
        Companion_getInstance_7().initializeEmbeddedStringFunctions_f93g67_k$();
        Companion_getInstance_6().initializeEmbeddedNumberFunctions_y7q5if_k$();
        Companion_getInstance_3().initializeEmbeddedDoubleFunctions_tdandr_k$();
        Companion_getInstance_2().initializeDictionaryFunctions_qhpk64_k$();
        Companion_getInstance_4().initializeIntProperties_l5apoh_k$();
        Companion_getInstance_3().initializeDoubleProperties_h2jxrx_k$();
        Companion_getInstance_5().initializeListProperties_205zxs_k$();
        Companion_getInstance_7().initializeStringProperties_si2tfh_k$();
        Companion_getInstance_2().initializeDictionaryProperties_wmce6g_k$();
    }
    Utils.prototype._get_NULL__774226340_csycv8_k$ = function () {
        return this.NULL_1;
    };
    Utils.prototype._get_FALSE__2278683438_xcfyky_k$ = function () {
        return this.FALSE_1;
    };
    Utils.prototype._get_TRUE__779686525_cw7dz1_k$ = function () {
        return this.TRUE_1;
    };
    Utils.prototype.toPInt_yzud9u_k$ = function (_this__1828080292) {
        return _this__1828080292 ? this.TRUE_1 : this.FALSE_1;
    };
    Utils.prototype.toBoolean_n1sso5_k$ = function (
        _this__1828080292,
        node,
        fileTable
    ) {
        try {
            return !(toDouble(toString_0(_this__1828080292)) === 0.0);
        } catch ($p) {
            if ($p instanceof NumberFormatException) {
                var tmp = fileTable._get_filePath__151144490_2hzju2_k$();
                throw PositionalException_init_$Create$(
                    "expected numeric value",
                    tmp,
                    node,
                    null,
                    0,
                    24,
                    null
                );
            } else {
                {
                    throw $p;
                }
            }
        }
    };
    Utils.prototype.toVariable_abd9s8_k$ = function (_this__1828080292, node) {
        var tmp;
        if (_this__1828080292 instanceof Variable) {
            tmp = _this__1828080292;
        } else {
            {
                tmp = Companion_getInstance_8().createPrimitive_45m8ma_k$(
                    _this__1828080292,
                    node
                );
            }
        }
        return tmp;
    };
    Utils.prototype.toVariable$default_x99qtu_k$ = function (
        _this__1828080292,
        node,
        $mask0,
        $handler
    ) {
        if (!(($mask0 & 1) === 0)) {
            node = Node_init_$Create$(null, null, null, null, 15, null);
        }
        return this.toVariable_abd9s8_k$(_this__1828080292, node);
    };
    Utils.prototype.toProperty_q8fusx_k$ = function (_this__1828080292, node) {
        var tmp;
        if (_this__1828080292 instanceof Property) {
            tmp = _this__1828080292;
        } else {
            {
                tmp = Companion_getInstance_8().createPrimitive_45m8ma_k$(
                    _this__1828080292,
                    node
                );
            }
        }
        return tmp;
    };
    Utils.prototype.toProperty$default_127ngr_k$ = function (
        _this__1828080292,
        node,
        $mask0,
        $handler
    ) {
        if (!(($mask0 & 1) === 0)) {
            node = Node_init_$Create$(null, null, null, null, 15, null);
        }
        return this.toProperty_q8fusx_k$(_this__1828080292, node);
    };
    Utils.prototype.parseAssignment_qe0mu7_k$ = function (assignment) {
        var tmp = first(
            new Parser(assignment, "@NoFile").statements_3k22vw_k$()
        ).toNode_xahmvw_k$("@NoFile");
        return tmp instanceof Assignment ? tmp : THROW_CCE();
    };
    Utils.prototype.parseOneNode_tdccb8_k$ = function (node) {
        return first(
            new Parser(node, "@NoFile").statements_3k22vw_k$()
        ).toNode_xahmvw_k$("@NoFile");
    };
    Utils.prototype.getIdent_dfe2u9_k$ = function (node, name, args) {
        return args.getIdentifier_f5yrxq_k$(createIdent(this, node, name));
    };
    Utils.prototype.getPDictionary_ryhihh_k$ = function (args, node, name) {
        var dictionary = this.getIdent_dfe2u9_k$(node, name, args);
        if (!(dictionary instanceof PDictionary)) {
            var tmp = listOf(getKClass(PDictionary));
            var tmp_0 = args
                .getFileTable_m3scuc_k$()
                ._get_filePath__151144490_2hzju2_k$();
            throw ExpectedTypeException_init_$Create$(
                tmp,
                tmp_0,
                node,
                dictionary,
                false,
                16,
                null
            );
        } else {
        }
        return dictionary;
    };
    Utils.prototype.getPList_l8gx25_k$ = function (args, node, name) {
        var list = this.getIdent_dfe2u9_k$(node, name, args);
        if (!(list instanceof PList)) {
            var tmp = listOf(getKClass(PList));
            var tmp_0 = args
                .getFileTable_m3scuc_k$()
                ._get_filePath__151144490_2hzju2_k$();
            throw ExpectedTypeException_init_$Create$(
                tmp,
                tmp_0,
                node,
                list,
                false,
                16,
                null
            );
        } else {
        }
        return list;
    };
    Utils.prototype.getPString_ac00og_k$ = function (args, node, name) {
        var str = this.getIdent_dfe2u9_k$(node, name, args);
        if (!(str instanceof PString)) {
            var tmp = listOf(getKClass(PString));
            var tmp_0 = args
                .getFileTable_m3scuc_k$()
                ._get_filePath__151144490_2hzju2_k$();
            throw ExpectedTypeException_init_$Create$(
                tmp,
                tmp_0,
                node,
                str,
                false,
                16,
                null
            );
        } else {
        }
        return str;
    };
    Utils.prototype.getPNumber_l7npfb_k$ = function (args, node, name) {
        var num =
            name == null
                ? node.evaluate_hfj3qo_k$(args)
                : this.getIdent_dfe2u9_k$(node, name, args);
        if (!(num instanceof PNumber)) {
            var tmp = listOf(getKClass(PNumber));
            var tmp_0 = args
                .getFileTable_m3scuc_k$()
                ._get_filePath__151144490_2hzju2_k$();
            throw ExpectedTypeException_init_$Create$(
                tmp,
                tmp_0,
                node,
                num,
                false,
                16,
                null
            );
        } else {
        }
        return num;
    };
    Utils.prototype.getPNumber$default_9bpbi0_k$ = function (
        args,
        node,
        name,
        $mask0,
        $handler
    ) {
        if (!(($mask0 & 4) === 0)) name = null;
        return this.getPNumber_l7npfb_k$(args, node, name);
    };
    Utils.prototype.getPInt_2trvra_k$ = function (args, node, name) {
        var int = this.getIdent_dfe2u9_k$(node, name, args);
        if (!(int instanceof PInt)) {
            var tmp = listOf(getKClass(PInt));
            var tmp_0 = args
                .getFileTable_m3scuc_k$()
                ._get_filePath__151144490_2hzju2_k$();
            throw ExpectedTypeException_init_$Create$(
                tmp,
                tmp_0,
                node,
                int,
                false,
                16,
                null
            );
        } else {
        }
        return int;
    };
    Utils.prototype.subList_d3dljg_k$ = function (_this__1828080292, start) {
        return _this__1828080292.subList_d153ha_k$(
            start,
            _this__1828080292._get_size__809037418_ddoh9m_k$()
        );
    };
    Utils.prototype.castToPList_kkl29i_k$ = function (list) {
        return list instanceof PList ? list : THROW_CCE();
    };
    Utils.prototype.castToPString_ne896x_k$ = function (str) {
        return str instanceof PString ? str : THROW_CCE();
    };
    Utils.prototype.castToPNumber_nv35t_k$ = function (num) {
        return num instanceof PNumber ? num : THROW_CCE();
    };
    Utils.prototype.mapToString_hbz8o4_k$ = function (mapped) {
        var tmp0_subject = mapped;
        var tmp;
        if (tmp0_subject.equals(getKClass(RFunction))) {
            tmp = "Function";
        } else if (tmp0_subject.equals(getKClass(PInt))) {
            tmp = "Int";
        } else if (tmp0_subject.equals(getKClass(PDouble))) {
            tmp = "Double";
        } else if (tmp0_subject.equals(getKClass(PNumber))) {
            tmp = "Number";
        } else if (tmp0_subject.equals(getKClass(PString))) {
            tmp = "String";
        } else if (tmp0_subject.equals(getKClass(PList))) {
            tmp = "List";
        } else if (tmp0_subject.equals(getKClass(PDictionary))) {
            tmp = "Dictionary";
        } else if (tmp0_subject.equals(getKClass(Identifier))) {
            tmp = "Identifier";
        } else if (tmp0_subject.equals(getKClass(Invocation))) {
            tmp = "Invocation";
        } else if (tmp0_subject.equals(getKClass(Index))) {
            tmp = "Index";
        } else {
            var tmp_0 = toString_0(mapped);
            tmp = last_0(split$default(tmp_0, ["."], false, 0, 6, null));
        }
        return tmp;
    };
    Utils.$metadata$ = {
        simpleName: "Utils",
        kind: "object",
        interfaces: [],
    };
    var Utils_instance;
    function Utils_getInstance() {
        if (Utils_instance == null) new Utils();
        return Utils_instance;
    }
    function JSSetter() {
        JSSetter_instance = this;
        this.readLine_1 = null;
        this.readText_1 = null;
        this.writeText_1 = null;
        this.sendMessage_1 = null;
    }
    JSSetter.prototype._set_readLine__1124655213_6yadp3_k$ = function (
        _set____804775014
    ) {
        this.readLine_1 = _set____804775014;
    };
    JSSetter.prototype._get_readLine__350524001_5soy1t_k$ = function () {
        return this.readLine_1;
    };
    JSSetter.prototype._set_readText__1131934292_5ue04v_k$ = function (
        _set____804775014
    ) {
        this.readText_1 = _set____804775014;
    };
    JSSetter.prototype._get_readText__357803080_5x0ymg_k$ = function () {
        return this.readText_1;
    };
    JSSetter.prototype._set_writeText__568758681_m44ucl_k$ = function (
        _set____804775014
    ) {
        this.writeText_1 = _set____804775014;
    };
    JSSetter.prototype._get_writeText__2340494885_wbn4kb_k$ = function () {
        return this.writeText_1;
    };
    JSSetter.prototype._set_sendMessage__4077931654_vfpvyb_k$ = function (
        _set____804775014
    ) {
        this.sendMessage_1 = _set____804775014;
    };
    JSSetter.prototype._get_sendMessage__1614407186_qp6ck2_k$ = function () {
        return this.sendMessage_1;
    };
    JSSetter.$metadata$ = {
        simpleName: "JSSetter",
        kind: "object",
        interfaces: [],
    };
    Object.defineProperty(JSSetter.prototype, "readLine", {
        configurable: true,
        get: JSSetter.prototype._get_readLine__350524001_5soy1t_k$,
        set: JSSetter.prototype._set_readLine__1124655213_6yadp3_k$,
    });
    Object.defineProperty(JSSetter.prototype, "readText", {
        configurable: true,
        get: JSSetter.prototype._get_readText__357803080_5x0ymg_k$,
        set: JSSetter.prototype._set_readText__1131934292_5ue04v_k$,
    });
    Object.defineProperty(JSSetter.prototype, "writeText", {
        configurable: true,
        get: JSSetter.prototype._get_writeText__2340494885_wbn4kb_k$,
        set: JSSetter.prototype._set_writeText__568758681_m44ucl_k$,
    });
    Object.defineProperty(JSSetter.prototype, "sendMessage", {
        configurable: true,
        get: JSSetter.prototype._get_sendMessage__1614407186_qp6ck2_k$,
        set: JSSetter.prototype._set_sendMessage__4077931654_vfpvyb_k$,
    });
    var JSSetter_instance;
    function JSSetter_getInstance() {
        if (JSSetter_instance == null) new JSSetter();
        return JSSetter_instance;
    }
    function FileSystem() {
        FileSystem_instance = this;
        var tmp = this;
        var tmp$ret$0;
        $l$block: {
            tmp$ret$0 = LinkedHashMap_init_$Create$();
            break $l$block;
        }
        tmp.fileSystem_1 = tmp$ret$0;
    }
    FileSystem.prototype.read_bwmtyj_k$ = function (path) {
        var tmp0_elvis_lhs = this.fileSystem_1.get_1mhr4y_k$(path);
        var tmp;
        if (tmp0_elvis_lhs == null) {
            var tmp_0 = "File not found " + path;
            throw PositionalException_init_$Create$(
                tmp_0,
                "",
                null,
                null,
                0,
                28,
                null
            );
        } else {
            tmp = tmp0_elvis_lhs;
        }
        return tmp;
    };
    FileSystem.prototype.write_kwtaoc_k$ = function (
        path,
        content,
        written = false
    ) {
        if (!written)
            sendMessage(new Message("write", new Pair(path, content)));
        {
            var tmp0_set_0 = this.fileSystem_1;
            tmp0_set_0.put_3mhbri_k$(path, content);
            Unit_getInstance();
        }
    };
    FileSystem.prototype.exists_9c3km3_k$ = function (path) {
        return !(this.fileSystem_1.get_1mhr4y_k$(path) == null);
    };
    FileSystem.prototype.delete_47x42e_k$ = function (path) {
        this.fileSystem_1.remove_8hbkc0_k$(path);
        Unit_getInstance();
        return true;
    };
    FileSystem.$metadata$ = {
        simpleName: "FileSystem",
        kind: "object",
        interfaces: [],
    };
    var FileSystem_instance;
    function FileSystem_getInstance() {
        if (FileSystem_instance == null) new FileSystem();
        return FileSystem_instance;
    }
    function readLine() {
        return "";
    }
    function round(num, digits) {
        var tmp = round$outlinedJsCode$(num, digits);
        return (!(tmp == null) ? typeof tmp === "number" : false)
            ? tmp
            : THROW_CCE();
    }
    function isInt(num) {
        var tmp = isInt$outlinedJsCode$(num);
        return (!(tmp == null) ? typeof tmp === "boolean" : false)
            ? tmp
            : THROW_CCE();
    }
    function sendMessage(m) {
        postMessage({ type: m.type, content: m.content });
        Unit_getInstance();
    }

    function round$outlinedJsCode$(num, digits) {
        var nnum = num < 0 ? -num : num;
        var p = Math.pow(10, digits);
        var n = (nnum * p).toPrecision(15);
        return num < 0 ? -Math.round(n) / p : Math.round(n) / p;
    }
    function isInt$outlinedJsCode$(num) {
        return Number.isInteger(num);
    }
    //region block: exports
    function $jsExportAll$(_) {
        _.Message = Message;
        Object.defineProperty(_, "JSSetter", {
            configurable: true,
            get: JSSetter_getInstance,
        });
    }
    $jsExportAll$(_);
    //endregion
    main([]);
    return _;
});

onmessage = (e) => {
    try {
    switch (e.data.data) {
        case "write":
            writeFromMainWorker(e.data.content.path, e.data.content.content);

            addImport(e.data.content.path);
            break;
        case "start":
            writeFromMainWorker(e.data.content.path, e.data.content.content);
            startImport(e.data.content.path);
            break;
    }
    } catch (exception) {
        if (exception.token_1 != null) exception.node_1 = exception.token_1;
        postMessage({
            type: "exception",
            content: createCloneableException(exception),
        });
    }
};

function createCloneableException(exception) {
    let length;
    let position;
    console.log(exception);
    for (let entry of Object.entries(exception)) {
        console.log(entry);
    }
    if (exception.node_1 != null && exception.node_1.symbol_1 != "") {
        length = exception.node_1.value_1.length;
        position = exception.node_1.position_1;
    } else {
        length = exception.length_1;
        position = exception.position_1;
    }
    let message =
        exception.name == "NotFoundException"
            ? exception.node_1.value_1 + " not found"
            : exception.errorMessage_1 == ""
            ? "ABC"
            : exception.errorMessage_1;
    return {
        message: message,
        position: {
            x: parseInt(position.first_1) + 1,
            y: parseInt(position.second_1) + 1,
        },
        length: length,
        path: exception.fileName_1,
    };
}

//# sourceMappingURL=regina_interpreter.js.map
