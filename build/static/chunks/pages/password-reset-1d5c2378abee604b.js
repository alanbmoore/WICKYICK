(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[935],{4910:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/password-reset",function(){return n(8056)}])},8056:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(5893),i=n(5988),a=n.n(i),s=n(9086),u=n(4051),o=n.n(u),c=n(5675),p=n(6119),l=n(2914),d=n(1608),f=n(1555),h=n(5005),v=n(1163),m=n(5617),g=n(782),_=n(1436),w=n.n(_),x=n(7294),b=n(5169),y=n(6487),S=n(7329);function j(e,t,n,r,i,a,s){try{var u=e[a](s),o=u.value}catch(c){return void n(c)}u.done?t(o):Promise.resolve(o).then(r,i)}var Z=function(){var e=(0,m.I0)(),t=(0,x.useState)({isInvalid:!1,value:"",err:""}),n=t[0],i=t[1],a=function(){var e=!0;if(""===n.value){i({isInvalid:!0,value:n.value,err:"Email is required !"}),e=!1}else{var t=(0,b.J)(n.value,{email:!0});t.length&&(i({isInvalid:!0,value:n.value,err:t[0]}),e=!1)}return e},s=function(){var t,r=(t=o().mark((function t(r){var i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.preventDefault(),a()&&(i={email:n.value},e((0,y.QP)()),S.J.resetPassword(i).then((function(t){g.Am.success("Password reset e-mail has been sent.",{position:g.Am.POSITION.TOP_RIGHT}),setTimeout((function(){e((0,y.Zk)())}),1e3)})).catch((function(t){setTimeout((function(){e((0,y.Zk)())}),1e3)})));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function s(e){j(a,r,i,s,u,"next",e)}function u(e){j(a,r,i,s,u,"throw",e)}s(void 0)}))});return function(e){return r.apply(this,arguments)}}();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:w()["signup-form"]+" mx-auto my-5 py-5",children:(0,r.jsxs)(l.Z,{className:"my-5",onSubmit:s,children:[(0,r.jsxs)("div",{className:"d-flex",children:[(0,r.jsx)(c.default,{className:"logo",onClick:function(){return v.default.push("/")},src:p.Z,width:"55.38px",height:"55.38p ",alt:"logo image"}),(0,r.jsx)("p",{className:w().title+" mx-5",children:"Password Reset"})]}),(0,r.jsx)(d.Z,{style:{marginTop:"7%"},children:(0,r.jsx)(f.Z,{children:(0,r.jsxs)("div",{className:w()["form-input"],children:[(0,r.jsx)(l.Z.Label,{children:"Email Address"}),(0,r.jsx)(l.Z.Control,{value:n.value,onChange:function(e){i({isInvalid:!1,value:e.currentTarget.value,err:""})},type:"text"}),n.isInvalid&&(0,r.jsx)("div",{style:{color:"red",fontSize:"12px",marginTop:"5px"},children:n.err})]})})}),(0,r.jsx)(h.Z,{className:w()["submit-btn"],type:"submit",children:"Submit"})]})})})},k=(0,s.Z)((function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{id:"c84e424fcecaf415",children:"body{background-color:#eef0f3}"}),(0,r.jsx)("div",{style:{background:"#EEF0F3",height:"110vh",width:"100%",display:"flex"},className:"jsx-c84e424fcecaf415",children:(0,r.jsx)(Z,{})})]})}))},7329:function(e,t,n){"use strict";n.d(t,{J:function(){return o}});var r=n(4051),i=n.n(r),a=n(1844);function s(e,t,n,r,i,a,s){try{var u=e[a](s),o=u.value}catch(c){return void n(c)}u.done?t(o):Promise.resolve(o).then(r,i)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function u(e){s(a,r,i,u,o,"next",e)}function o(e){s(a,r,i,u,o,"throw",e)}u(void 0)}))}}var o={resetPassword:function(){var e=u(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"api/user/send-password-reset-email/",e.next=4,(0,a.$)("api/user/send-password-reset-email/","post",{},t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:throw e.prev=8,e.t0=e.catch(0),null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r?void 0:r.data;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),setPassword:function(){var e=u(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"api/user/password-reset/",e.next=4,(0,a.$)("api/user/password-reset/","patch",{},t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:throw e.prev=8,e.t0=e.catch(0),null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r?void 0:r.data;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),login:function(){var e=u(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"api/rest-auth/login/",e.next=4,(0,a.$)("api/rest-auth/login/","post",{},t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:throw e.prev=8,e.t0=e.catch(0),null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r?void 0:r.data;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),signup:function(){var e=u(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"api/user/signup/",e.next=4,(0,a.$)("api/user/signup/","post",{},t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:throw e.prev=8,e.t0=e.catch(0),null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r?void 0:r.data;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),sign:function(){var e=u(i().mark((function e(t,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),submitSocialLogin:function(){var e=u(i().mark((function e(t,n){var r,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,a.$)(n,"post",{},t);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),null===(s=e.t0.response)||void 0===s?void 0:s.data;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()}},5169:function(e,t,n){"use strict";n.d(t,{J:function(){return d}});var r=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,i=/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,a=/[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,s=/^[0-9]{5}(?:-[0-9]{4})?$/,u=/^[0-9]{5}(?:-[0-9]{4})?$/,o=/^[0-9]{5}(?:-[0-9]{4})?$/,c=/^@(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/,p=/^\d+$/,l=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,d=function(e,t){var n=[];return t?(t.required&&!e.trim()&&n.push("Value is required"),t.minLength&&e.length<t.minLength&&n.push("Minimum length required is ".concat(t.minLength)),t.maxLength&&e.length>t.maxLength&&n.push("Maximum length required is ".concat(t.maxLength)),t.email&&!r.test(e)&&n.push("Please enter valid email !"),t.phoneNumber&&!i.test(e)&&n.push("Invalid phone number !"),t.url&&!a.test(e)&&n.push("Invalid Url (e.g: http://www.facebook.com)"),t.zipCode&&!o.test(e)&&n.push("Invalid  Zip Code"),t.shippingZipCode&&!s.test(e)&&n.push("Invalid Shipping Zip Code"),t.billingZipCode&&!u.test(e)&&n.push("Invalid Billing Zip Code"),t.instagramUsername&&!c.test(e)&&n.push("Invalid Username (e.g: @instagram)"),t.numeric&&!p.test(e)&&n.push("Only numeric input is allowed!"),t.password&&!l.test(e)&&n.push("Password must contain at least eight characters, one letter, one special character and one number"),n):n}},9086:function(e,t,n){"use strict";var r=n(5893),i=n(1163);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.Z=function(e){return function(t){var n=(0,i.useRouter)();return localStorage.getItem("id_token")?(n.back(),null):(0,r.jsx)(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},t))}}},1436:function(e){e.exports={"form-control":"SignUp_form-control__xLaMf",btn:"SignUp_btn__3Lpes","signup-form":"SignUp_signup-form__NK0j8","form-input":"SignUp_form-input___qhtB","forgot-password-text":"SignUp_forgot-password-text__R7p7u","submit-btn":"SignUp_submit-btn__VJ_ED","agreement-text":"SignUp_agreement-text__6bmJE","sub-agreement-text":"SignUp_sub-agreement-text__nWRb_","hint-text":"SignUp_hint-text__3hpUM","do-link":"SignUp_do-link__RhJFY","social-btn":"SignUp_social-btn__9pY4P",title:"SignUp_title__nHr_V","form-heading":"SignUp_form-heading__DYr3O","form-group":"SignUp_form-group__GulE5",row:"SignUp_row__Doq9M","or-seperator":"SignUp_or-seperator__AoI30"}}},function(e){e.O(0,[37,774,888,179],(function(){return t=4910,e(e.s=t);var t}));var t=e.O();_N_E=t}]);