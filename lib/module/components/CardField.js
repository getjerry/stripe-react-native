var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.CardField=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _helpers=require("../helpers");var _excluded=["onCardChange","onFocus","onBlur","cardStyle","placeholders","postalCodeEnabled"];var _this=this,_jsxFileName="/Users/zhangruiwu/Desktop/work/stripe-react-native/src/components/CardField.tsx";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var CardFieldNative=(0,_reactNative.requireNativeComponent)('CardField');var CardField=(0,_react.forwardRef)(function(_ref,ref){var onCardChange=_ref.onCardChange,onFocus=_ref.onFocus,onBlur=_ref.onBlur,cardStyle=_ref.cardStyle,placeholders=_ref.placeholders,postalCodeEnabled=_ref.postalCodeEnabled,props=(0,_objectWithoutProperties2.default)(_ref,_excluded);var inputRef=(0,_react.useRef)(null);var onCardChangeHandler=(0,_react.useCallback)(function(event){var card=event.nativeEvent;var data={last4:card.last4,expiryMonth:card.expiryMonth,expiryYear:card.expiryYear,complete:card.complete,brand:card.brand,cvc:card.cvc,validExpiryDate:card.validExpiryDate,validNumber:card.validNumber,validCVC:card.validCVC};if(card.hasOwnProperty('postalCode')){data.postalCode=card.postalCode||'';}if(card.hasOwnProperty('number')){data.number=card.number||'';if(__DEV__&&onCardChange&&card.complete){console.warn("[stripe-react-native] \u26A0\uFE0F WARNING: You've enabled `dangerouslyGetFullCardDetails`, meaning full card details are being returned. Only do this if you're certain that you fulfill the necessary PCI compliance requirements. Make sure that you're not mistakenly logging or storing full card details! See the docs for details: https://stripe.com/docs/security/guide#validating-pci-compliance");}}onCardChange==null?void 0:onCardChange(data);},[onCardChange]);var onFocusHandler=(0,_react.useCallback)(function(event){var focusedField=event.nativeEvent.focusedField;if(focusedField){(0,_helpers.focusInput)(inputRef.current);onFocus==null?void 0:onFocus(focusedField);}else{onBlur==null?void 0:onBlur();}},[onFocus,onBlur]);var focus=function focus(){_reactNative.UIManager.dispatchViewManagerCommand((0,_reactNative.findNodeHandle)(inputRef.current),'focus',[]);};var blur=function blur(){_reactNative.UIManager.dispatchViewManagerCommand((0,_reactNative.findNodeHandle)(inputRef.current),'blur',[]);};var clear=function clear(){_reactNative.UIManager.dispatchViewManagerCommand((0,_reactNative.findNodeHandle)(inputRef.current),'clear',[]);};(0,_react.useImperativeHandle)(ref,function(){return{focus:focus,blur:blur,clear:clear};});(0,_react.useLayoutEffect)(function(){var inputRefValue=inputRef.current;if(inputRefValue!==null){(0,_helpers.registerInput)(inputRefValue);return function(){(0,_helpers.unregisterInput)(inputRefValue);if((0,_helpers.currentlyFocusedInput)()===inputRefValue){inputRefValue.blur();}};}return function(){};},[inputRef]);return _react.default.createElement(CardFieldNative,(0,_extends2.default)({ref:inputRef,onCardChange:onCardChangeHandler,onFocusChange:onFocusHandler,postalCodeEnabled:postalCodeEnabled!=null?postalCodeEnabled:true,cardStyle:{backgroundColor:cardStyle==null?void 0:cardStyle.backgroundColor,borderColor:cardStyle==null?void 0:cardStyle.borderColor,borderWidth:cardStyle==null?void 0:cardStyle.borderWidth,borderRadius:cardStyle==null?void 0:cardStyle.borderRadius,cursorColor:cardStyle==null?void 0:cardStyle.cursorColor,fontSize:cardStyle==null?void 0:cardStyle.fontSize,placeholderColor:cardStyle==null?void 0:cardStyle.placeholderColor,textColor:cardStyle==null?void 0:cardStyle.textColor,textErrorColor:cardStyle==null?void 0:cardStyle.textErrorColor,fontFamily:cardStyle==null?void 0:cardStyle.fontFamily},placeholders:{number:placeholders==null?void 0:placeholders.number,expiration:placeholders==null?void 0:placeholders.expiration,cvc:placeholders==null?void 0:placeholders.cvc,postalCode:placeholders==null?void 0:placeholders.postalCode}},props,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:173,columnNumber:7}}));});exports.CardField=CardField;
//# sourceMappingURL=CardField.js.map