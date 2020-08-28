/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clientes/Clientes.js":
/*!**********************************!*\
  !*** ./src/clientes/Clientes.js ***!
  \**********************************/
/*! exports provided: clientes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clientes\", function() { return clientes; });\nvar clientes = [{\n  clienteID: \"asd23423-sad3211-ssd546ad\",\n  clienteNome: \"João Faria\",\n  clienteEmail: \"joao@mail.com\",\n  clienteCPF: \"222.222.222-22\",\n  contaPoupanca: 1500.00,\n  contaCorrente: {\n    id: \"2h3i12uh-0ggh0d9h-93hb9fh\",\n    saldo: 253.22,\n    movimentacao: [{\n      operacao: \"Pizza Express\",\n      custo: 120.22,\n      action: \"remove\"\n    }, {\n      operacao: \"O Rei Merlin\",\n      custo: 40.22,\n      action: \"remove\"\n    }, {\n      operacao: \"Deposito Cliente\",\n      custo: 120.22,\n      action: \"add\"\n    }]\n  }\n}, {\n  clienteID: \"aasd3f54ndc-09n5058376-29385029v8n\",\n  clienteNome: \"Pedro Faria\",\n  clienteEmail: \"pedro@mail.com\",\n  clienteCPF: \"333.333.333-22\",\n  contaPoupanca: 200.00,\n  contaCorrente: {\n    id: \"2sadas12-123adhsadh-93hb23ra\",\n    saldo: 2253.22,\n    movimentacao: [{\n      operacao: \"Autoposto SuperGas\",\n      custo: 30.22,\n      action: \"remove\"\n    }, {\n      operacao: \"Restaurante BoFood\",\n      custo: 230.22,\n      action: \"remove\"\n    }, {\n      operacao: \"Fast soup\",\n      custo: 80.22,\n      action: \"remove\"\n    }]\n  }\n}, {\n  clienteID: \"bhj3b1pk2-hhad43287-8h9h9g873g94\",\n  clienteNome: \"João Rubens de Souza\",\n  clienteEmail: \"joao@mail.com\",\n  clienteCPF: \"132.321.456-22\",\n  contaPoupanca: 1500.00,\n  contaCorrente: {\n    id: \"2saasd12-asdsad2312dh-45sdhb2ra\",\n    saldo: 253.22,\n    movimentacao: [{\n      operacao: \"Deposito Luiz da Silva\",\n      custo: 998.44,\n      action: \"add\"\n    }, {\n      operacao: \"Deposito Mapple LTDA\",\n      custo: 575.89,\n      action: \"add\"\n    }, {\n      operacao: \"Compra BestBuyer\",\n      custo: 1320.22,\n      action: \"remove\"\n    }]\n  }\n}];\n\n//# sourceURL=webpack:///./src/clientes/Clientes.js?");

/***/ }),

/***/ "./src/conta/ContaCorrente.js":
/*!************************************!*\
  !*** ./src/conta/ContaCorrente.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContaCorrente; });\n/* harmony import */ var _dados_DadosClientes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dados/DadosClientes */ \"./src/dados/DadosClientes.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar ContaCorrente = /*#__PURE__*/function (_DadosClientes) {\n  _inherits(ContaCorrente, _DadosClientes);\n\n  var _super = _createSuper(ContaCorrente);\n\n  function ContaCorrente(clienteId, clienteNome, clienteEmail, clienteCPF, contaPoupanca, ContaCorrenteId, saldo, movimentacao) {\n    var _this;\n\n    _classCallCheck(this, ContaCorrente);\n\n    _this = _super.call(this, clienteId, clienteNome, clienteEmail, clienteCPF, contaPoupanca);\n    _this.ContaCorrenteId = ContaCorrenteId;\n    _this.saldo = saldo;\n    _this.movimentacao = movimentacao;\n    return _this;\n  }\n\n  _createClass(ContaCorrente, [{\n    key: \"movimentacoes\",\n    value: function movimentacoes() {\n      var movimentosCliente = this.movimentacao.map(function (_ref) {\n        var operacao = _ref.operacao,\n            custo = _ref.custo;\n        var transacoes = {\n          operacao: operacao,\n          custo: custo\n        };\n        return transacoes;\n      });\n      return movimentosCliente;\n    }\n  }, {\n    key: \"balance\",\n    get: function get() {\n      return this.saldo;\n    }\n  }]);\n\n  return ContaCorrente;\n}(_dados_DadosClientes__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/conta/ContaCorrente.js?");

/***/ }),

/***/ "./src/dados/DadosClientes.js":
/*!************************************!*\
  !*** ./src/dados/DadosClientes.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DadosCliente; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar DadosCliente = /*#__PURE__*/function () {\n  function DadosCliente(clienteId, clienteNome, clienteEmail, clienteCPF, contaPoupanca, teste) {\n    _classCallCheck(this, DadosCliente);\n\n    this.clienteID = clienteId, this.clienteNome = clienteNome, this.clienteEmail = clienteEmail, this.clienteCPF = clienteCPF, this.contaPoupanca = contaPoupanca;\n    this.teste = teste;\n  }\n\n  _createClass(DadosCliente, [{\n    key: \"testando\",\n    value: function testando() {\n      console.log(\"Dentro da classe Dados cliente\");\n    }\n  }, {\n    key: \"dadosCliente\",\n    value: function dadosCliente() {\n      var dadosCliente = {\n        id: this.clienteID,\n        nome: this.clienteNome,\n        email: this.clienteEmail,\n        cpf: this.clienteCPF\n      };\n      return dadosCliente;\n    }\n  }, {\n    key: \"poupanca\",\n    get: function get() {\n      return this.contaPoupanca;\n    }\n  }]);\n\n  return DadosCliente;\n}();\n\n\n\n//# sourceURL=webpack:///./src/dados/DadosClientes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _conta_ContaCorrente__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conta/ContaCorrente */ \"./src/conta/ContaCorrente.js\");\nvar Clientes = __webpack_require__(/*! ./clientes/Clientes */ \"./src/clientes/Clientes.js\");\n\n\nvar dados = Clientes.clientes;\nconsole.log('Dados iniciais: ', dados);\nvar mostrarClientes = dados.map(function (_ref) {\n  var clienteID = _ref.clienteID,\n      clienteNome = _ref.clienteNome,\n      clienteEmail = _ref.clienteEmail,\n      clienteCPF = _ref.clienteCPF,\n      contaPoupanca = _ref.contaPoupanca,\n      _ref$contaCorrente = _ref.contaCorrente,\n      id = _ref$contaCorrente.id,\n      saldo = _ref$contaCorrente.saldo,\n      movimentacao = _ref$contaCorrente.movimentacao;\n  var contaCliente = new _conta_ContaCorrente__WEBPACK_IMPORTED_MODULE_0__[\"default\"](clienteID, clienteNome, clienteEmail, clienteCPF, contaPoupanca, id, saldo, movimentacao);\n  var extrato = {\n    dados_cliente: contaCliente.dadosCliente(),\n    saldo_poupança: contaCliente.poupanca,\n    saldo_conta_corrente: contaCliente.saldo,\n    transacoes: contaCliente.movimentacoes()\n  };\n  return extrato;\n});\nconsole.log(\"Dados organizados: \", mostrarClientes);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });