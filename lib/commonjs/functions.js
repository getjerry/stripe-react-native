var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.verifyMicrodepositsForSetup=exports.verifyMicrodepositsForPayment=exports.updateApplePaySummaryItems=exports.retrieveSetupIntent=exports.retrievePaymentIntent=exports.presentPaymentSheet=exports.presentGooglePay=exports.presentApplePay=exports.openApplePaySetup=exports.isGooglePaySupported=exports.isCardInWallet=exports.isApplePaySupported=exports.initPaymentSheet=exports.initGooglePay=exports.handleURLCallback=exports.handleNextAction=exports.createTokenForCVCUpdate=exports.createToken=exports.createPaymentMethod=exports.createGooglePayPaymentMethod=exports.confirmSetupIntent=exports.confirmPaymentSheetPayment=exports.confirmPayment=exports.confirmApplePayPayment=exports.collectBankAccountForSetup=exports.collectBankAccountForPayment=exports.Constants=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _helpers=require("./helpers");var _Errors=require("./types/Errors");var _NativeStripeSdk=_interopRequireDefault(require("./NativeStripeSdk"));var _types=require("./types");var APPLE_PAY_NOT_SUPPORTED_MESSAGE='Apple pay is not supported on this device';var createPaymentMethod=function _callee(params){var options,_await$NativeStripeSd,paymentMethod,error,_args=arguments;return _regenerator.default.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:options=_args.length>1&&_args[1]!==undefined?_args[1]:{};_context.prev=1;_context.next=4;return _regenerator.default.awrap(_NativeStripeSdk.default.createPaymentMethod(params,options));case 4:_await$NativeStripeSd=_context.sent;paymentMethod=_await$NativeStripeSd.paymentMethod;error=_await$NativeStripeSd.error;if(!error){_context.next=9;break;}return _context.abrupt("return",{error:error});case 9:return _context.abrupt("return",{paymentMethod:paymentMethod});case 12:_context.prev=12;_context.t0=_context["catch"](1);return _context.abrupt("return",{error:_context.t0});case 15:case"end":return _context.stop();}}},null,null,[[1,12]],Promise);};exports.createPaymentMethod=createPaymentMethod;var createToken=function _callee2(params){var _params$country;var _await$NativeStripeSd2,token,error;return _regenerator.default.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(!(params.type==='BankAccount'&&((_params$country=params.country)==null?void 0:_params$country.toLowerCase())==='us'&&!params.routingNumber)){_context2.next=2;break;}return _context2.abrupt("return",{error:_Errors.MissingRoutingNumber});case 2:_context2.prev=2;_context2.next=5;return _regenerator.default.awrap(_NativeStripeSdk.default.createToken(params));case 5:_await$NativeStripeSd2=_context2.sent;token=_await$NativeStripeSd2.token;error=_await$NativeStripeSd2.error;if(!error){_context2.next=10;break;}return _context2.abrupt("return",{error:error});case 10:return _context2.abrupt("return",{token:token});case 13:_context2.prev=13;_context2.t0=_context2["catch"](2);return _context2.abrupt("return",{error:_context2.t0});case 16:case"end":return _context2.stop();}}},null,null,[[2,13]],Promise);};exports.createToken=createToken;var retrievePaymentIntent=function _callee3(clientSecret){var _await$NativeStripeSd3,paymentIntent,error;return _regenerator.default.async(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.prev=0;_context3.next=3;return _regenerator.default.awrap(_NativeStripeSdk.default.retrievePaymentIntent(clientSecret));case 3:_await$NativeStripeSd3=_context3.sent;paymentIntent=_await$NativeStripeSd3.paymentIntent;error=_await$NativeStripeSd3.error;if(!error){_context3.next=8;break;}return _context3.abrupt("return",{error:error});case 8:return _context3.abrupt("return",{paymentIntent:paymentIntent});case 11:_context3.prev=11;_context3.t0=_context3["catch"](0);return _context3.abrupt("return",{error:_context3.t0});case 14:case"end":return _context3.stop();}}},null,null,[[0,11]],Promise);};exports.retrievePaymentIntent=retrievePaymentIntent;var retrieveSetupIntent=function _callee4(clientSecret){var _await$NativeStripeSd4,setupIntent,error;return _regenerator.default.async(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.prev=0;_context4.next=3;return _regenerator.default.awrap(_NativeStripeSdk.default.retrieveSetupIntent(clientSecret));case 3:_await$NativeStripeSd4=_context4.sent;setupIntent=_await$NativeStripeSd4.setupIntent;error=_await$NativeStripeSd4.error;if(!error){_context4.next=8;break;}return _context4.abrupt("return",{error:error});case 8:return _context4.abrupt("return",{setupIntent:setupIntent});case 11:_context4.prev=11;_context4.t0=_context4["catch"](0);return _context4.abrupt("return",{error:_context4.t0});case 14:case"end":return _context4.stop();}}},null,null,[[0,11]],Promise);};exports.retrieveSetupIntent=retrieveSetupIntent;var confirmPayment=function _callee5(paymentIntentClientSecret,params){var options,_await$NativeStripeSd5,paymentIntent,error,_args5=arguments;return _regenerator.default.async(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:options=_args5.length>2&&_args5[2]!==undefined?_args5[2]:{};_context5.prev=1;_context5.next=4;return _regenerator.default.awrap(_NativeStripeSdk.default.confirmPayment(paymentIntentClientSecret,params,options));case 4:_await$NativeStripeSd5=_context5.sent;paymentIntent=_await$NativeStripeSd5.paymentIntent;error=_await$NativeStripeSd5.error;if(!error){_context5.next=9;break;}return _context5.abrupt("return",{error:error});case 9:return _context5.abrupt("return",{paymentIntent:paymentIntent});case 12:_context5.prev=12;_context5.t0=_context5["catch"](1);return _context5.abrupt("return",{error:_context5.t0});case 15:case"end":return _context5.stop();}}},null,null,[[1,12]],Promise);};exports.confirmPayment=confirmPayment;var isApplePaySupported=function _callee6(){return _regenerator.default.async(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:_context6.t0=_helpers.isiOS;if(!_context6.t0){_context6.next=5;break;}_context6.next=4;return _regenerator.default.awrap(_NativeStripeSdk.default.isApplePaySupported());case 4:_context6.t0=_context6.sent;case 5:return _context6.abrupt("return",_context6.t0);case 6:case"end":return _context6.stop();}}},null,null,null,Promise);};exports.isApplePaySupported=isApplePaySupported;var presentApplePay=function _callee7(params){var _await$NativeStripeSd6,paymentMethod,error;return _regenerator.default.async(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:_context7.next=2;return _regenerator.default.awrap(_NativeStripeSdk.default.isApplePaySupported());case 2:if(_context7.sent){_context7.next=4;break;}return _context7.abrupt("return",{error:{code:_types.ApplePayError.Canceled,message:APPLE_PAY_NOT_SUPPORTED_MESSAGE}});case 4:_context7.prev=4;_context7.next=7;return _regenerator.default.awrap(_NativeStripeSdk.default.presentApplePay(params));case 7:_await$NativeStripeSd6=_context7.sent;paymentMethod=_await$NativeStripeSd6.paymentMethod;error=_await$NativeStripeSd6.error;if(!error){_context7.next=12;break;}return _context7.abrupt("return",{error:error});case 12:return _context7.abrupt("return",{paymentMethod:paymentMethod});case 15:_context7.prev=15;_context7.t0=_context7["catch"](4);return _context7.abrupt("return",{error:_context7.t0});case 18:case"end":return _context7.stop();}}},null,null,[[4,15]],Promise);};exports.presentApplePay=presentApplePay;var updateApplePaySummaryItems=function _callee8(summaryItems){var errorAddressFields,_args8=arguments;return _regenerator.default.async(function _callee8$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:errorAddressFields=_args8.length>1&&_args8[1]!==undefined?_args8[1]:[];_context8.next=3;return _regenerator.default.awrap(_NativeStripeSdk.default.isApplePaySupported());case 3:if(_context8.sent){_context8.next=5;break;}return _context8.abrupt("return",{error:{code:_types.ApplePayError.Canceled,message:APPLE_PAY_NOT_SUPPORTED_MESSAGE}});case 5:_context8.prev=5;_context8.next=8;return _regenerator.default.awrap(_NativeStripeSdk.default.updateApplePaySummaryItems(summaryItems,errorAddressFields));case 8:return _context8.abrupt("return",{});case 11:_context8.prev=11;_context8.t0=_context8["catch"](5);return _context8.abrupt("return",{error:_context8.t0});case 14:case"end":return _context8.stop();}}},null,null,[[5,11]],Promise);};exports.updateApplePaySummaryItems=updateApplePaySummaryItems;var confirmApplePayPayment=function _callee9(clientSecret){return _regenerator.default.async(function _callee9$(_context9){while(1){switch(_context9.prev=_context9.next){case 0:_context9.next=2;return _regenerator.default.awrap(_NativeStripeSdk.default.isApplePaySupported());case 2:if(_context9.sent){_context9.next=4;break;}return _context9.abrupt("return",{error:{code:_types.ApplePayError.Canceled,message:APPLE_PAY_NOT_SUPPORTED_MESSAGE}});case 4:_context9.prev=4;_context9.next=7;return _regenerator.default.awrap(_NativeStripeSdk.default.confirmApplePayPayment(clientSecret));case 7:return _context9.abrupt("return",{});case 10:_context9.prev=10;_context9.t0=_context9["catch"](4);return _context9.abrupt("return",{error:_context9.t0});case 13:case"end":return _context9.stop();}}},null,null,[[4,10]],Promise);};exports.confirmApplePayPayment=confirmApplePayPayment;var handleNextAction=function _callee10(paymentIntentClientSecret){var _await$NativeStripeSd7,paymentIntent,error;return _regenerator.default.async(function _callee10$(_context10){while(1){switch(_context10.prev=_context10.next){case 0:_context10.prev=0;_context10.next=3;return _regenerator.default.awrap(_NativeStripeSdk.default.handleNextAction(paymentIntentClientSecret));case 3:_await$NativeStripeSd7=_context10.sent;paymentIntent=_await$NativeStripeSd7.paymentIntent;error=_await$NativeStripeSd7.error;if(!error){_context10.next=8;break;}return _context10.abrupt("return",{error:error});case 8:return _context10.abrupt("return",{paymentIntent:paymentIntent});case 11:_context10.prev=11;_context10.t0=_context10["catch"](0);return _context10.abrupt("return",{error:(0,_helpers.createError)(_context10.t0)});case 14:case"end":return _context10.stop();}}},null,null,[[0,11]],Promise);};exports.handleNextAction=handleNextAction;var confirmSetupIntent=function _callee11(paymentIntentClientSecret,params){var options,_await$NativeStripeSd8,setupIntent,error,_args11=arguments;return _regenerator.default.async(function _callee11$(_context11){while(1){switch(_context11.prev=_context11.next){case 0:options=_args11.length>2&&_args11[2]!==undefined?_args11[2]:{};_context11.prev=1;_context11.next=4;return _regenerator.default.awrap(_NativeStripeSdk.default.confirmSetupIntent(paymentIntentClientSecret,params,options));case 4:_await$NativeStripeSd8=_context11.sent;setupIntent=_await$NativeStripeSd8.setupIntent;error=_await$NativeStripeSd8.error;if(!error){_context11.next=9;break;}return _context11.abrupt("return",{error:error});case 9:return _context11.abrupt("return",{setupIntent:setupIntent});case 12:_context11.prev=12;_context11.t0=_context11["catch"](1);return _context11.abrupt("return",{error:_context11.t0});case 15:case"end":return _context11.stop();}}},null,null,[[1,12]],Promise);};exports.confirmSetupIntent=confirmSetupIntent;var createTokenForCVCUpdate=function _callee12(cvc){var _await$NativeStripeSd9,tokenId,error;return _regenerator.default.async(function _callee12$(_context12){while(1){switch(_context12.prev=_context12.next){case 0:_context12.prev=0;_context12.next=3;return _regenerator.default.awrap(_NativeStripeSdk.default.createTokenForCVCUpdate(cvc));case 3:_await$NativeStripeSd9=_context12.sent;tokenId=_await$NativeStripeSd9.tokenId;error=_await$NativeStripeSd9.error;if(!error){_context12.next=8;break;}return _context12.abrupt("return",{error:error});case 8:return _context12.abrupt("return",{tokenId:tokenId});case 11:_context12.prev=11;_context12.t0=_context12["catch"](0);return _context12.abrupt("return",{error:_context12.t0});case 14:case"end":return _context12.stop();}}},null,null,[[0,11]],Promise);};exports.createTokenForCVCUpdate=createTokenForCVCUpdate;var handleURLCallback=function _callee13(url){var stripeHandled;return _regenerator.default.async(function _callee13$(_context13){while(1){switch(_context13.prev=_context13.next){case 0:_context13.next=2;return _regenerator.default.awrap(_NativeStripeSdk.default.handleURLCallback(url));case 2:stripeHandled=_context13.sent;return _context13.abrupt("return",stripeHandled);case 4:case"end":return _context13.stop();}}},null,null,null,Promise);};exports.handleURLCallback=handleURLCallback;var verifyMicrodepositsForPayment=function _callee14(clientSecret,params){var _ref,paymentIntent,error;return _regenerator.default.async(function _callee14$(_context14){while(1){switch(_context14.prev=_context14.next){case 0:_context14.prev=0;_context14.next=3;return _regenerator.default.awrap(_NativeStripeSdk.default.verifyMicrodeposits(true,clientSecret,params));case 3:_ref=_context14.sent;paymentIntent=_ref.paymentIntent;error=_ref.error;if(!error){_context14.next=8;break;}return _context14.abrupt("return",{error:error});case 8:return _context14.abrupt("return",{paymentIntent:paymentIntent});case 11:_context14.prev=11;_context14.t0=_context14["catch"](0);return _context14.abrupt("return",{error:(0,_helpers.createError)(_context14.t0)});case 14:case"end":return _context14.stop();}}},null,null,[[0,11]],Promise);};exports.verifyMicrodepositsForPayment=verifyMicrodepositsForPayment;var verifyMicrodepositsForSetup=function _callee15(clientSecret,params){var _ref2,setupIntent,error;return _regenerator.default.async(function _callee15$(_context15){while(1){switch(_context15.prev=_context15.next){case 0:_context15.prev=0;_context15.next=3;return _regenerator.default.awrap(_NativeStripeSdk.default.verifyMicrodeposits(false,clientSecret,params));case 3:_ref2=_context15.sent;setupIntent=_ref2.setupIntent;error=_ref2.error;if(!error){_context15.next=8;break;}return _context15.abrupt("return",{error:error});case 8:return _context15.abrupt("return",{setupIntent:setupIntent});case 11:_context15.prev=11;_context15.t0=_context15["catch"](0);return _context15.abrupt("return",{error:(0,_helpers.createError)(_context15.t0)});case 14:case"end":return _context15.stop();}}},null,null,[[0,11]],Promise);};exports.verifyMicrodepositsForSetup=verifyMicrodepositsForSetup;var initPaymentSheet=function _callee16(params){var _await$NativeStripeSd10,paymentOption,error;return _regenerator.default.async(function _callee16$(_context16){while(1){switch(_context16.prev=_context16.next){case 0:_context16.prev=0;_context16.next=3;return _regenerator.default.awrap(_NativeStripeSdk.default.initPaymentSheet(params));case 3:_await$NativeStripeSd10=_context16.sent;paymentOption=_await$NativeStripeSd10.paymentOption;error=_await$NativeStripeSd10.error;if(!error){_context16.next=8;break;}return _context16.abrupt("return",{error:error});case 8:return _context16.abrupt("return",{paymentOption:paymentOption});case 11:_context16.prev=11;_context16.t0=_context16["catch"](0);return _context16.abrupt("return",{error:_context16.t0});case 14:case"end":return _context16.stop();}}},null,null,[[0,11]],Promise);};exports.initPaymentSheet=initPaymentSheet;var presentPaymentSheet=function _callee17(){var _await$NativeStripeSd11,paymentOption,error;return _regenerator.default.async(function _callee17$(_context17){while(1){switch(_context17.prev=_context17.next){case 0:_context17.prev=0;_context17.next=3;return _regenerator.default.awrap(_NativeStripeSdk.default.presentPaymentSheet());case 3:_await$NativeStripeSd11=_context17.sent;paymentOption=_await$NativeStripeSd11.paymentOption;error=_await$NativeStripeSd11.error;if(!error){_context17.next=8;break;}return _context17.abrupt("return",{error:error});case 8:return _context17.abrupt("return",{paymentOption:paymentOption});case 11:_context17.prev=11;_context17.t0=_context17["catch"](0);return _context17.abrupt("return",{error:_context17.t0});case 14:case"end":return _context17.stop();}}},null,null,[[0,11]],Promise);};exports.presentPaymentSheet=presentPaymentSheet;var confirmPaymentSheetPayment=function _callee18(){var _await$NativeStripeSd12,error;return _regenerator.default.async(function _callee18$(_context18){while(1){switch(_context18.prev=_context18.next){case 0:_context18.prev=0;_context18.next=3;return _regenerator.default.awrap(_NativeStripeSdk.default.confirmPaymentSheetPayment());case 3:_await$NativeStripeSd12=_context18.sent;error=_await$NativeStripeSd12.error;if(!error){_context18.next=7;break;}return _context18.abrupt("return",{error:error});case 7:return _context18.abrupt("return",{});case 10:_context18.prev=10;_context18.t0=_context18["catch"](0);return _context18.abrupt("return",{error:_context18.t0});case 13:case"end":return _context18.stop();}}},null,null,[[0,10]],Promise);};exports.confirmPaymentSheetPayment=confirmPaymentSheetPayment;var isGooglePaySupported=function _callee19(params){return _regenerator.default.async(function _callee19$(_context19){while(1){switch(_context19.prev=_context19.next){case 0:_context19.t0=_helpers.isAndroid;if(!_context19.t0){_context19.next=5;break;}_context19.next=4;return _regenerator.default.awrap(_NativeStripeSdk.default.isGooglePaySupported(params!=null?params:{}));case 4:_context19.t0=_context19.sent;case 5:return _context19.abrupt("return",_context19.t0);case 6:case"end":return _context19.stop();}}},null,null,null,Promise);};exports.isGooglePaySupported=isGooglePaySupported;var initGooglePay=function _callee20(params){var _await$NativeStripeSd13,error;return _regenerator.default.async(function _callee20$(_context20){while(1){switch(_context20.prev=_context20.next){case 0:_context20.prev=0;_context20.next=3;return _regenerator.default.awrap(_NativeStripeSdk.default.initGooglePay(params));case 3:_await$NativeStripeSd13=_context20.sent;error=_await$NativeStripeSd13.error;if(!error){_context20.next=7;break;}return _context20.abrupt("return",{error:error});case 7:return _context20.abrupt("return",{});case 10:_context20.prev=10;_context20.t0=_context20["catch"](0);return _context20.abrupt("return",{error:_context20.t0});case 13:case"end":return _context20.stop();}}},null,null,[[0,10]],Promise);};exports.initGooglePay=initGooglePay;var presentGooglePay=function _callee21(params){var _await$NativeStripeSd14,error;return _regenerator.default.async(function _callee21$(_context21){while(1){switch(_context21.prev=_context21.next){case 0:_context21.prev=0;_context21.next=3;return _regenerator.default.awrap(_NativeStripeSdk.default.presentGooglePay(params));case 3:_await$NativeStripeSd14=_context21.sent;error=_await$NativeStripeSd14.error;if(!error){_context21.next=7;break;}return _context21.abrupt("return",{error:error});case 7:return _context21.abrupt("return",{});case 10:_context21.prev=10;_context21.t0=_context21["catch"](0);return _context21.abrupt("return",{error:_context21.t0});case 13:case"end":return _context21.stop();}}},null,null,[[0,10]],Promise);};exports.presentGooglePay=presentGooglePay;var createGooglePayPaymentMethod=function _callee22(params){var _await$NativeStripeSd15,error,paymentMethod;return _regenerator.default.async(function _callee22$(_context22){while(1){switch(_context22.prev=_context22.next){case 0:_context22.prev=0;_context22.next=3;return _regenerator.default.awrap(_NativeStripeSdk.default.createGooglePayPaymentMethod(params));case 3:_await$NativeStripeSd15=_context22.sent;error=_await$NativeStripeSd15.error;paymentMethod=_await$NativeStripeSd15.paymentMethod;if(!error){_context22.next=8;break;}return _context22.abrupt("return",{error:error});case 8:return _context22.abrupt("return",{paymentMethod:paymentMethod});case 11:_context22.prev=11;_context22.t0=_context22["catch"](0);return _context22.abrupt("return",{error:_context22.t0});case 14:case"end":return _context22.stop();}}},null,null,[[0,11]],Promise);};exports.createGooglePayPaymentMethod=createGooglePayPaymentMethod;var openApplePaySetup=function _callee23(){var _await$NativeStripeSd16,error;return _regenerator.default.async(function _callee23$(_context23){while(1){switch(_context23.prev=_context23.next){case 0:_context23.prev=0;_context23.next=3;return _regenerator.default.awrap(_NativeStripeSdk.default.openApplePaySetup());case 3:_await$NativeStripeSd16=_context23.sent;error=_await$NativeStripeSd16.error;if(!error){_context23.next=7;break;}return _context23.abrupt("return",{error:error});case 7:return _context23.abrupt("return",{});case 10:_context23.prev=10;_context23.t0=_context23["catch"](0);return _context23.abrupt("return",{error:_context23.t0});case 13:case"end":return _context23.stop();}}},null,null,[[0,10]],Promise);};exports.openApplePaySetup=openApplePaySetup;var collectBankAccountForPayment=function _callee24(clientSecret,params){var _ref3,paymentIntent,error;return _regenerator.default.async(function _callee24$(_context24){while(1){switch(_context24.prev=_context24.next){case 0:_context24.prev=0;_context24.next=3;return _regenerator.default.awrap(_NativeStripeSdk.default.collectBankAccount(true,clientSecret,params));case 3:_ref3=_context24.sent;paymentIntent=_ref3.paymentIntent;error=_ref3.error;if(!error){_context24.next=8;break;}return _context24.abrupt("return",{error:error});case 8:return _context24.abrupt("return",{paymentIntent:paymentIntent});case 11:_context24.prev=11;_context24.t0=_context24["catch"](0);return _context24.abrupt("return",{error:(0,_helpers.createError)(_context24.t0)});case 14:case"end":return _context24.stop();}}},null,null,[[0,11]],Promise);};exports.collectBankAccountForPayment=collectBankAccountForPayment;var collectBankAccountForSetup=function _callee25(clientSecret,params){var _ref4,setupIntent,error;return _regenerator.default.async(function _callee25$(_context25){while(1){switch(_context25.prev=_context25.next){case 0:_context25.prev=0;_context25.next=3;return _regenerator.default.awrap(_NativeStripeSdk.default.collectBankAccount(false,clientSecret,params));case 3:_ref4=_context25.sent;setupIntent=_ref4.setupIntent;error=_ref4.error;if(!error){_context25.next=8;break;}return _context25.abrupt("return",{error:error});case 8:return _context25.abrupt("return",{setupIntent:setupIntent});case 11:_context25.prev=11;_context25.t0=_context25["catch"](0);return _context25.abrupt("return",{error:(0,_helpers.createError)(_context25.t0)});case 14:case"end":return _context25.stop();}}},null,null,[[0,11]],Promise);};exports.collectBankAccountForSetup=collectBankAccountForSetup;var isCardInWallet=function _callee26(params){var _await$NativeStripeSd17,isInWallet,token,error;return _regenerator.default.async(function _callee26$(_context26){while(1){switch(_context26.prev=_context26.next){case 0:_context26.prev=0;_context26.next=3;return _regenerator.default.awrap(_NativeStripeSdk.default.isCardInWallet(params));case 3:_await$NativeStripeSd17=_context26.sent;isInWallet=_await$NativeStripeSd17.isInWallet;token=_await$NativeStripeSd17.token;error=_await$NativeStripeSd17.error;if(!error){_context26.next=9;break;}return _context26.abrupt("return",{error:error});case 9:return _context26.abrupt("return",{isInWallet:isInWallet,token:token});case 12:_context26.prev=12;_context26.t0=_context26["catch"](0);return _context26.abrupt("return",{error:(0,_helpers.createError)(_context26.t0)});case 15:case"end":return _context26.stop();}}},null,null,[[0,12]],Promise);};exports.isCardInWallet=isCardInWallet;var Constants=_NativeStripeSdk.default.getConstants();exports.Constants=Constants;
//# sourceMappingURL=functions.js.map