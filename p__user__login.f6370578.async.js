(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{"3T1H":function(e,a,t){"use strict";t.r(a);t("sRBo");var n=t("kaz8"),r=t("k1fw"),c=t("tJVT"),o=(t("fOrg"),t("+KLJ")),s=t("Y0UT"),l=t("80zm"),i=t("CZrw"),u=t("q1tI"),m=t.n(u),p=t("55Ip"),d=t("9kvl"),g=t("CyIy"),b=t.n(g),f=(t("y8nQ"),t("Vl3Y")),h=(t("Znn+"),t("ZTPi")),E=t("oBTY"),v=t("yUgw"),O=t("TSYQ"),j=t.n(O),C=Object(u["createContext"])({}),y=C,w=(t("14J3"),t("BMrR")),x=(t("+L6B"),t("2/Rp")),N=(t("jCWc"),t("kPKH")),T=(t("5NDa"),t("5rEg")),P=t("0Owb"),k=t("WmNS"),I=t.n(k),S=(t("miYZ"),t("tsqr")),U=t("9og8"),q=t("PpiC"),A=t("BGR+"),B=t("cJ7L"),z=t("MGYb"),Y=t("FQ2w"),D=t("cGnJ"),J=t("DdhY"),V=t.n(J),M={UserName:{props:{size:"large",id:"userName",prefix:m.a.createElement(B["a"],{style:{color:"#1890ff"},className:V.a.prefixIcon}),placeholder:"admin"},rules:[{required:!0,message:"Please enter username!"}]},Password:{props:{size:"large",prefix:m.a.createElement(z["a"],{className:V.a.prefixIcon}),type:"password",id:"password",placeholder:"888888"},rules:[{required:!0,message:"Please enter password!"}]},Mobile:{props:{size:"large",prefix:m.a.createElement(Y["a"],{className:V.a.prefixIcon}),placeholder:"mobile number"},rules:[{required:!0,message:"Please enter mobile number!"},{pattern:/^1\d{10}$/,message:"Wrong mobile number format!"}]},Captcha:{props:{size:"large",prefix:m.a.createElement(D["a"],{className:V.a.prefixIcon}),placeholder:"captcha"},rules:[{required:!0,message:"Please enter Captcha!"}]}},K=t("WHbk"),L=f["a"].Item,F=function(e){var a=e.onChange,t=e.defaultValue,n=e.customProps,r=void 0===n?{}:n,c=e.rules,o={rules:c||r.rules};return a&&(o.onChange=a),t&&(o.initialValue=t),o},G=function(e){var a=Object(u["useState"])(e.countDown||0),t=Object(c["a"])(a,2),n=t[0],r=t[1],o=Object(u["useState"])(!1),s=Object(c["a"])(o,2),l=s[0],i=s[1],p=(e.onChange,e.customProps),d=(e.defaultValue,e.rules,e.name),g=(e.getCaptchaButtonText,e.getCaptchaSecondText,e.updateActive,e.type),b=(e.tabUtil,Object(q["a"])(e,["onChange","customProps","defaultValue","rules","name","getCaptchaButtonText","getCaptchaSecondText","updateActive","type","tabUtil"])),f=Object(u["useCallback"])(function(){var e=Object(U["a"])(I.a.mark((function e(a){var t;return I.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(K["b"])(a);case 2:if(t=e.sent,!1!==t){e.next=5;break}return e.abrupt("return");case 5:S["a"].success("\u83b7\u53d6\u9a8c\u8bc1\u7801\u6210\u529f\uff01\u9a8c\u8bc1\u7801\u4e3a\uff1a1234"),i(!0);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),[]);if(Object(u["useEffect"])((function(){var a=0,t=e.countDown;return l&&(a=window.setInterval((function(){r((function(e){return e<=1?(i(!1),clearInterval(a),t||60):e-1}))}),1e3)),function(){return clearInterval(a)}}),[l]),!d)return null;var h=F(e),E=b||{};if("Captcha"===g){var v=Object(A["a"])(E,["onGetCaptcha","countDown"]);return m.a.createElement(L,{shouldUpdate:!0},(function(e){var a=e.getFieldValue;return m.a.createElement(w["a"],{gutter:8},m.a.createElement(N["a"],{span:16},m.a.createElement(L,Object(P["a"])({name:d},h),m.a.createElement(T["a"],Object(P["a"])({},p,v)))),m.a.createElement(N["a"],{span:8},m.a.createElement(x["a"],{disabled:l,className:V.a.getCaptcha,size:"large",onClick:function(){var e=a("mobile");f(e)}},l?"".concat(n," \u79d2"):"\u83b7\u53d6\u9a8c\u8bc1\u7801")))}))}return m.a.createElement(L,Object(P["a"])({name:d},h),m.a.createElement(T["a"],Object(P["a"])({},p,E)))},R={};Object.keys(M).forEach((function(e){var a=M[e];R[e]=function(t){return m.a.createElement(y.Consumer,null,(function(n){return m.a.createElement(G,Object(P["a"])({customProps:a.props,rules:a.rules},t,{type:e},n,{updateActive:n.updateActive}))}))}}));var W=R,Z=f["a"].Item,H=function(e){var a=e.className,t=Object(q["a"])(e,["className"]),n=j()(V.a.submit,a);return m.a.createElement(Z,null,m.a.createElement(x["a"],Object(P["a"])({size:"large",className:n,type:"primary",htmlType:"submit"},t)))},Q=H,$=h["a"].TabPane,X=function(){var e=0;return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+=1,"".concat(a).concat(e)}}(),_=function(e){Object(u["useEffect"])((function(){var a=X("login-tab-"),t=e.tabUtil;t&&t.addTab(a)}),[]);var a=e.children;return m.a.createElement($,e,e.active&&a)},ee=function(e){return m.a.createElement(y.Consumer,null,(function(a){return m.a.createElement(_,Object(P["a"])({tabUtil:a.tabUtil},e))}))};ee.typeName="LoginTab";var ae=ee,te=function(e){var a=e.className,t=Object(u["useState"])([]),n=Object(c["a"])(t,2),r=n[0],o=n[1],s=Object(u["useState"])(),l=Object(c["a"])(s,2),i=l[0],p=l[1],d=Object(v["a"])("",{value:e.activeKey,onChange:e.onTabChange}),g=Object(c["a"])(d,2),b=g[0],O=g[1],C=[],w=[];return m.a.Children.forEach(e.children,(function(e){e&&("LoginTab"===e.type.typeName?C.push(e):w.push(e))})),m.a.createElement(y.Provider,{value:{tabUtil:{addTab:function(e){o([].concat(Object(E["a"])(r),[e]))},removeTab:function(e){o(r.filter((function(a){return a!==e})))}},updateActive:function(e){i[b]?i[b].push(e):i[b]=[e],p(i)}}},m.a.createElement("div",{className:j()(a,V.a.login)},m.a.createElement(f["a"],{form:e.form,onFinish:function(a){e.onSubmit&&e.onSubmit(a)}},r.length?m.a.createElement(m.a.Fragment,null,m.a.createElement(h["a"],{animated:!1,className:V.a.tabs,activeKey:b,onChange:function(e){O(e)}},C),w):e.children)))};te.Tab=ae,te.Submit=Q,te.UserName=W.UserName,te.Password=W.Password,te.Mobile=W.Mobile,te.Captcha=W.Captcha;var ne=te,re=ne.Tab,ce=ne.UserName,oe=ne.Password,se=ne.Mobile,le=ne.Captcha,ie=ne.Submit,ue=function(e){var a=e.content;return m.a.createElement(o["a"],{style:{marginBottom:24},message:a,type:"error",showIcon:!0})},me=function(e){var a=e.userAndlogin,t=void 0===a?{}:a,o=e.submitting,d=t.status,g=t.type,f=Object(u["useState"])(!0),h=Object(c["a"])(f,2),E=h[0],v=h[1],O=Object(u["useState"])("account"),j=Object(c["a"])(O,2),C=j[0],y=j[1],w=function(a){var t=e.dispatch;t({type:"userAndlogin/login",payload:Object(r["a"])(Object(r["a"])({},a),{},{type:C})})};return m.a.createElement("div",{className:b.a.main},m.a.createElement(ne,{activeKey:C,onTabChange:y,onSubmit:w},m.a.createElement(re,{key:"account",tab:"\u8d26\u6237\u5bc6\u7801\u767b\u5f55"},"error"===d&&"account"===g&&!o&&m.a.createElement(ue,{content:"\u8d26\u6237\u6216\u5bc6\u7801\u9519\u8bef\uff08admin/ant.design\uff09"}),m.a.createElement(ce,{name:"userName",placeholder:"\u7528\u6237\u540d: admin or user",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d!"}]}),m.a.createElement(oe,{name:"password",placeholder:"\u5bc6\u7801: ant.design",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801\uff01"}]})),m.a.createElement(re,{key:"mobile",tab:"\u624b\u673a\u53f7\u767b\u5f55"},"error"===d&&"mobile"===g&&!o&&m.a.createElement(ue,{content:"\u9a8c\u8bc1\u7801\u9519\u8bef"}),m.a.createElement(se,{name:"mobile",placeholder:"\u624b\u673a\u53f7",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\uff01"},{pattern:/^1\d{10}$/,message:"\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef\uff01"}]}),m.a.createElement(le,{name:"captcha",placeholder:"\u9a8c\u8bc1\u7801",countDown:120,getCaptchaButtonText:"",getCaptchaSecondText:"\u79d2",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801\uff01"}]})),m.a.createElement("div",null,m.a.createElement(n["a"],{checked:E,onChange:function(e){return v(e.target.checked)}},"\u81ea\u52a8\u767b\u5f55"),m.a.createElement("a",{style:{float:"right"}},"\u5fd8\u8bb0\u5bc6\u7801")),m.a.createElement(ie,{loading:o},"\u767b\u5f55"),m.a.createElement("div",{className:b.a.other},"\u5176\u4ed6\u767b\u5f55\u65b9\u5f0f",m.a.createElement(s["a"],{className:b.a.icon}),m.a.createElement(l["a"],{className:b.a.icon}),m.a.createElement(i["a"],{className:b.a.icon}),m.a.createElement(p["a"],{className:b.a.register,to:"/user/register"},"\u6ce8\u518c\u8d26\u6237"))))};a["default"]=Object(d["b"])((function(e){var a=e.userAndlogin,t=e.loading;return{userAndlogin:a,submitting:t.effects["userAndlogin/login"]}}))(me)},CyIy:function(e,a,t){e.exports={main:"antd-pro-pages-user-login-style-main",icon:"antd-pro-pages-user-login-style-icon",other:"antd-pro-pages-user-login-style-other",register:"antd-pro-pages-user-login-style-register"}},DdhY:function(e,a,t){e.exports={login:"antd-pro-pages-user-login-components-login-index-login",getCaptcha:"antd-pro-pages-user-login-components-login-index-getCaptcha",icon:"antd-pro-pages-user-login-components-login-index-icon",other:"antd-pro-pages-user-login-components-login-index-other",register:"antd-pro-pages-user-login-components-login-index-register",prefixIcon:"antd-pro-pages-user-login-components-login-index-prefixIcon",submit:"antd-pro-pages-user-login-components-login-index-submit"}}}]);