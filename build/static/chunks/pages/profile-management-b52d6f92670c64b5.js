(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5],{3951:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile-management",function(){return n(5320)}])},5320:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return X}});var a=n(5893),l=n(5988),t=n.n(l),s=n(6223),r=n.n(s),o=n(2914),c=n(1608),u=n(1555),d=n(5005),v=n(3522),p=n.n(v),m=n(7294),f=[{name:"Edit Profile",link:"/edit-profile",disabled:!1},{name:"Account Settings",link:"/account-settings"},{name:"Billing",link:"/billing",disabled:!0},{name:"Social Profiles",link:"/social-profiles",disabled:!1},{name:"Listings",link:"/listings",disabled:!0},{name:"Saved Searches",link:"/saved-searches",disabled:!0},{name:"Notifications",link:"/notifications",disabled:!0}],h=function(e){var i=e.currentStep,n=e.goToNextStep,l=(0,m.useState)(0),t=l[0],s=l[1];(0,m.useEffect)((function(){s(i)}),[i]);return(0,a.jsx)(a.Fragment,{children:f.map((function(e,i){return(0,a.jsx)("div",{className:p()["profile-setting-side-nav"].concat(e.disabled?" disabled":""),onClick:function(){var e;n(e=i),s(e)},children:(0,a.jsx)("p",{className:p()["nav-text"].concat(i===t?" "+p()["active-link"]:t>i?" "+p().completed:""),children:e.name})},i)}))})},g=n(9409),x=n.n(g),b=n(2150),j=n(9570),y=n(5675),N=n(6099),_=n(3707),k=n(782),I=n(5617),S=n(6487),w=n(5072),T=n(6594),P=n(4149),Z=n.n(P);n(3421),n(1919);function C(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function O(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(i){C(e,i,n[i])}))}return e}var L=function(e){return O({},e,{borderRadius:7,opacity:"0.25%",spacing:O({},e.spacing,{controlHeight:44}),colors:O({},e.colors,{primary:"#0d6efd40"})})},F=function(e){e.goToNextStep;var i=(0,I.I0)(),n=(0,m.useState)([]),l=n[0],t=n[1],s=(0,m.useState)(N.Z),r=s[0],v=s[1],p=(0,m.useState)(),f=p[0],h=p[1],g=(0,m.useState)(null),P=g[0],C=g[1],F=(0,m.useState)([]),E=F[0],A=F[1],J=(0,m.useState)({isInvalid:!1,value:"",err:""}),z=J[0],R=J[1],W=(0,m.useState)({isInvalid:!1,value:"",err:""}),Y=W[0],q=W[1],D=(0,m.useState)({isInvalid:!1,value:"",err:""}),B=D[0],H=D[1],Q=(0,m.useState)({isInvalid:!1,value:"",err:""}),G=Q[0],K=Q[1],U=(0,m.useState)({isInvalid:!1,value:"",err:""}),X=U[0],M=U[1],V=(0,m.useState)({isInvalid:!1,value:"",err:""}),$=V[0],ee=V[1],ie=(0,m.useState)({isInvalid:!1,value:"",err:""}),ne=ie[0],ae=ie[1],le=(0,m.useState)({isInvalid:!1,label:"",value:"",err:""}),te=le[0],se=le[1];(0,m.useEffect)((function(){if(0===l.length){var e=[];b.a.forEach((function(i){e.push({label:i,value:i})})),t(e)}}),[l]),(0,m.useEffect)((function(){var e=JSON.parse(localStorage.getItem("user")||"");re(e),C(e)}),[]);var re=function(e){q({isInvalid:!1,value:null===e||void 0===e?void 0:e.company,err:""}),se({isInvalid:!1,value:null===e||void 0===e?void 0:e.location,label:null===e||void 0===e?void 0:e.location,err:""}),v((null===e||void 0===e?void 0:e.picture)?e.picture:N.Z),(null===e||void 0===e?void 0:e.tags)&&A(e.tags.split(",")),R({isInvalid:!1,value:null===e||void 0===e?void 0:e.phone_number,err:""}),"null"!=(null===e||void 0===e?void 0:e.job_title)&&H({isInvalid:!1,value:null===e||void 0===e?void 0:e.job_title,err:""}),"null"!=(null===e||void 0===e?void 0:e.bio)&&K({isInvalid:!1,value:null===e||void 0===e?void 0:e.bio,err:""}),"null"!=(null===e||void 0===e?void 0:e.site_username)&&M({isInvalid:!1,value:null===e||void 0===e?void 0:e.site_username,err:""}),"null"!=(null===e||void 0===e?void 0:e.first_name)&&ee({isInvalid:!1,value:null===e||void 0===e?void 0:e.first_name,err:""}),"null"!=(null===e||void 0===e?void 0:e.last_name)&&ae({isInvalid:!1,value:null===e||void 0===e?void 0:e.last_name,err:""})},oe=function(e){"firstName"===e.target.name?ee({isInvalid:!1,value:e.currentTarget.value,err:""}):"lastName"===e.target.name&&ae({isInvalid:!1,value:e.currentTarget.value,err:""})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:x()["profile-top-section"]+" px-3",children:[(0,a.jsx)(y.default,{className:x()["profile-pic"],src:r,width:"95px",height:"95px",alt:"profile picture"}),(0,a.jsxs)("div",{className:x()["user-info"],children:[(0,a.jsxs)("p",{className:x()["user-name"],children:[null===P||void 0===P?void 0:P.first_name," ",null===P||void 0===P?void 0:P.last_name," \xb7"," ",null===P||void 0===P?void 0:P.license_number]}),(0,a.jsx)("p",{className:x()["user-email"],children:null===P||void 0===P?void 0:P.email})]})]}),(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsxs)("p",{className:x()["helper-text"],children:[(0,a.jsx)("label",{htmlFor:"uploadImage",children:"Upload Photo"}),(0,a.jsx)("input",{accept:"image/png, image/jpeg",type:"file",className:"form-control-file d-none",id:"uploadImage",onChange:function(e){if(e.target.files[0]){var i=new FileReader;i.addEventListener("load",(function(){v(i.result)})),h(e.target.files[0]),i.readAsDataURL(e.target.files[0])}}})]})})}),(0,a.jsxs)(o.Z,{className:x().profile,children:[(0,a.jsxs)(c.Z,{children:[(0,a.jsxs)(u.Z,{xs:12,md:6,lg:6,children:[(0,a.jsx)(o.Z.Label,{className:x()["profile-input-label"]+" mt-4",children:"First Name"}),(0,a.jsx)(o.Z.Control,{value:$.value,name:"firstName",onChange:oe,className:x()["profile-input"],type:"text",placeholder:"First Name"}),$.isInvalid&&(0,a.jsx)("div",{style:{color:"red",fontSize:"12px",marginTop:"5px"},children:$.err})]}),(0,a.jsxs)(u.Z,{xs:12,md:6,lg:6,children:[(0,a.jsx)(o.Z.Label,{className:x()["profile-input-label"]+" mt-4",children:"Last Name"}),(0,a.jsx)(o.Z.Control,{value:ne.value,name:"lastName",onChange:oe,className:x()["profile-input"],type:"text",placeholder:"Last Name"}),ne.isInvalid&&(0,a.jsx)("div",{style:{color:"red",fontSize:"12px",marginTop:"5px"},children:ne.err})]})]}),(0,a.jsx)(o.Z.Label,{style:{fontSize:"16px"},className:x()["profile-input-label"]+" mt-2",children:"Personalize Your Profile With Tags (ex: #veteran #ALC #CRS #tulanealum #gardendistrict)"}),(0,a.jsx)(Z(),{className:x()["profile-input-label"]+" form-control",value:E,onChange:function(e){A(e)}}),(0,a.jsx)(o.Z.Label,{className:x()["profile-input-label"]+" mt-2",children:"Location"}),(0,a.jsx)(T.ZP,{selectProps:{isClearable:!0,placeholder:"Select your location",styles:{control:function(e,i){return O({},e,{border:"1px solid #888C94"})}},filterOption:(0,j.c)({ignoreCase:!0}),theme:L,value:te.value&&{value:te.value,label:te.value},onChange:function(e){se({isInvalid:!1,value:null===e||void 0===e?void 0:e.value.description,label:null===e||void 0===e?void 0:e.value,err:""})}},autocompletionRequest:{componentRestrictions:{country:["us"]},types:["(regions)"]},debounce:300,apiKey:"AIzaSyD6tHqQ-zN2Jfb_5W631kRV1lWFL-8OKqc"}),te.isInvalid&&(0,a.jsx)("div",{style:{color:"red",fontSize:"12px",marginTop:"5px"},children:te.err}),(0,a.jsx)(o.Z.Label,{className:x()["profile-input-label"]+" mt-4",children:"Phone#"}),(0,a.jsx)(o.Z.Control,{value:z.value,onChange:function(e){var i=function(e){if(!e)return e;var i=e.replace(/[^\d]/g,""),n=i.length;return n<4?i:n<7?"(".concat(i.slice(0,3),") ").concat(i.slice(3)):"(".concat(i.slice(0,3),") ").concat(i.slice(3,6),"-").concat(i.slice(6,10))}(e.currentTarget.value);R({isInvalid:!1,value:i,err:""})},className:x()["profile-input"],type:"tel",placeholder:"Phone number (123)123-1234"}),z.isInvalid&&(0,a.jsx)("div",{style:{color:"red",fontSize:"12px",marginTop:"5px"},children:z.err}),(0,a.jsx)(o.Z.Label,{className:x()["profile-input-label"]+" mt-4",children:"Company"}),(0,a.jsx)(o.Z.Control,{value:Y.value,onChange:function(e){q({isInvalid:!1,value:e.currentTarget.value,err:""})},className:x()["profile-input"],type:"text",placeholder:"Company"}),Y.isInvalid&&(0,a.jsx)("div",{style:{color:"red",fontSize:"12px",marginTop:"5px"},children:Y.err}),(0,a.jsx)(o.Z.Label,{className:x()["profile-input-label"]+" mt-4",children:"Job Title (Optional)"}),(0,a.jsx)(o.Z.Control,{value:B.value,onChange:function(e){H({isInvalid:!1,value:e.currentTarget.value,err:""})},className:x()["profile-input"],type:"text",placeholder:"Job title"}),B.isInvalid&&(0,a.jsx)("div",{style:{color:"red",fontSize:"12px",marginTop:"5px"},children:B.err}),(0,a.jsx)(o.Z.Label,{className:x()["profile-input-label"]+" mt-4",children:"Bio (Optional)"}),(0,a.jsx)(o.Z.Control,{value:G.value,onChange:function(e){K({isInvalid:!1,value:e.currentTarget.value,err:""})},as:"textarea",rows:4,className:x()["profile-input"]+" resize-none",type:"text",placeholder:"Describe yourself..."}),G.isInvalid&&(0,a.jsx)("div",{style:{color:"red",fontSize:"12px",marginTop:"5px"},children:G.err}),(0,a.jsx)(o.Z.Label,{className:x()["profile-input-label"]+" mt-4",children:"Username (Optional)"}),(0,a.jsx)(o.Z.Control,{value:X.value,onChange:function(e){M({isInvalid:!1,value:e.currentTarget.value,err:""})},className:x()["profile-input"],type:"text",placeholder:"@username"}),X.isInvalid&&(0,a.jsx)("div",{style:{color:"red",fontSize:"12px",marginTop:"5px"},children:X.err}),(0,a.jsx)("p",{className:x()["helper-text"]+" border-0 p-0",children:"This is how you can be found in the platform. You\u2019ll be found by your name and email as well."}),(0,a.jsx)(d.Z,{className:x()["submit-btn"]+" mb-3",onClick:function(){var e=new FormData;(function(){var e=!0;te.value||(se({isInvalid:!0,value:te.value,label:te.value,err:"Location is required !"}),e=!1);$.value||(ee({isInvalid:!0,value:$.value,err:"First Name is required !"}),e=!1);ne.value||(ae({isInvalid:!0,value:ne.value,err:"Last Name is required !"}),e=!1);Y.value||(q({isInvalid:!0,value:Y.value,err:"Company title is required !"}),e=!1);z.value?/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/.test(z.value)||(R({isInvalid:!0,value:z.value,err:"Wrong Phone Format (e.g. (123) 123-1234 )"}),e=!1):(R({isInvalid:!0,value:z.value,err:"Phone number is required !"}),e=!1);return e})()&&(f&&e.append("picture",f),e.append("location",te.value),e.append("first_name",$.value),e.append("last_name",ne.value),e.append("company",Y.value),e.append("phone_number",z.value),e.append("bio",G.value),e.append("job_title",B.value),e.append("site_username",X.value),e.append("tags",E.join(",")),i((0,S.QP)()),_.K.updateProfile(e).then((function(e){setTimeout((function(){i((0,S.Zk)())}),1e3),i((0,w.av)(e)),localStorage.setItem("user",JSON.stringify(e)),k.Am.success("Profile updated successfully",{position:k.Am.POSITION.TOP_RIGHT})})).catch((function(e){setTimeout((function(){i((0,S.Zk)())}),1e3)})))},children:"Continue"})]})]})},E=n(1968),A=n.n(E),J=function(e){var i=e.name,n=e.image,l=e.description,t=(0,m.useState)(null),s=t[0],r=t[1];(0,m.useEffect)((function(){var e=JSON.parse(localStorage.getItem("user")||"");r(e)}),[s]);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:A()["social-card"],children:[(0,a.jsxs)("div",{className:"d-flex justify-content-between align-items-center px-4",children:[(0,a.jsxs)("div",{className:"d-flex align-items-center",children:[(0,a.jsx)("div",{className:A()["social-icon"],children:(0,a.jsx)(y.default,{src:n,width:"22px",height:"22px",alt:"card image"})}),(0,a.jsx)("h5",{className:"m-0 px-3 font-bold",children:(0,a.jsx)("b",{children:i})})]}),(null===s||void 0===s?void 0:s.instagram_data)&&"Facebook/Instagram"===i?(0,a.jsx)("a",{onClick:function(){},className:A()["connect-btn"]+" "+A().connected,children:"Connected"}):(0,a.jsx)("a",{onClick:function(){return function(e){if("Facebook/Instagram"===e)window.location.href="https://www.instagram.com/oauth/authorize?client_id=488762142642853&redirect_uri=https://staging.wickyick.com/settings/&scope=user_profile,user_media&response_type=code";else if("Tiktok"==e){var i=Math.random().toString(36).substring(2);window.location.href="https://open-api.tiktok.com/platform/oauth/connect/?client_key=awnsq0gmo2w3yjed&scope=user.info.basic,video.list&response_type=code&redirect_uri=www.staging.wickyick.com&state=".concat(i)}}(i)},className:A()["connect-btn"],children:"Connect"})]}),(0,a.jsx)("div",{className:A()["vertical-line"]}),(0,a.jsx)("div",{className:"py-3 px-4",children:(0,a.jsx)("p",{className:A()["social-description"],children:l})})]})})},z=n(8293),R=n(1691),W=n(3372),Y=n(1163),q=n(1602),D=n(5169),B=n(7329),H=function(e){e.goToNextStep;var i=(0,I.I0)(),n=(0,m.useState)(null),l=(n[0],n[1]),t=(0,m.useState)({isInvalid:!1,value:"",err:""}),s=t[0],r=t[1],c=(0,m.useState)(!1),u=c[0],v=c[1],f=(0,m.useState)({isInvalid:!1,value:"",err:""}),h=f[0],g=f[1],x=(0,m.useState)({isInvalid:!1,value:"",err:""}),b=x[0],j=x[1];(0,m.useEffect)((function(){var e=JSON.parse(localStorage.getItem("user")||"");y(e),l(e)}),[]);var y=function(e){"null"!=(null===e||void 0===e?void 0:e.email)&&r({isInvalid:!1,value:null===e||void 0===e?void 0:e.email,err:""})},N=function(){var e=new FormData;(function(){var e=!0;if(""===s.value)r({isInvalid:!0,value:s.value,err:"Email is required"}),e=!1;else{var i=(0,D.J)(s.value,{email:!0});i.length&&(r({isInvalid:!0,value:s.value,err:i[0]}),e=!1)}return e})()&&(e.append("email",s.value),i((0,S.QP)()),B.J.changeEmail(e).then((function(e){i((0,w.av)(e.user)),localStorage.setItem("user",JSON.stringify(e.user)),v(!1),setTimeout((function(){i((0,S.Zk)())}),1e3),k.Am.success(e.message,{position:k.Am.POSITION.TOP_RIGHT})})).catch((function(e){k.Am.error(null===e||void 0===e?void 0:e.email,{position:k.Am.POSITION.TOP_RIGHT}),setTimeout((function(){i((0,S.Zk)())}),1e3)})))};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:p()["subscription-box"],children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:p()["plan-title"],children:"Current subscription: Starter plan (Free)"}),(0,a.jsx)("p",{className:p()["plan-description"],children:"Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie,"})]}),(0,a.jsx)("div",{children:(0,a.jsx)(d.Z,{className:p()["upgrade-btn"],children:"Upgrade"})})]}),(0,a.jsx)("p",{className:p()["login-details"],children:"Login Details"}),(0,a.jsxs)(o.Z,{className:p()["profile-details"],children:[(0,a.jsx)(o.Z.Label,{className:p()["profile-input-label"]+" mt-1",children:"Email"}),(0,a.jsx)(o.Z.Control,{value:s.value,onChange:function(e){r({isInvalid:!1,value:e.currentTarget.value,err:""})},className:p()["profile-input"],type:"text",placeholder:"Email",disabled:!u}),s.isInvalid&&(0,a.jsx)("div",{style:{color:"red",fontSize:"12px",marginTop:"5px"},children:s.err}),(0,a.jsxs)("div",{className:"d-flex justify-content-between mt-3",children:[!u&&(0,a.jsx)("p",{onClick:function(){v(!0)},className:p()["change-email"],children:"Change your email"}),u&&(0,a.jsx)("div",{children:(0,a.jsx)(d.Z,{onClick:function(){N()},className:p()["upgrade-btn"]+" "+p()["update-email"],children:"Save"})})]}),(0,a.jsx)("p",{className:p()["login-details"],children:"Change Password"}),(0,a.jsx)(o.Z.Label,{className:p()["profile-input-label"]+" mt-3",children:"Current Password"}),(0,a.jsx)(o.Z.Control,{value:h.value,onChange:function(e){g({isInvalid:!1,value:e.currentTarget.value,err:""})},className:p()["profile-input"],type:"password",placeholder:"Current Password"}),h.isInvalid&&(0,a.jsx)("div",{style:{color:"red",fontSize:"12px",marginTop:"5px"},children:h.err}),(0,a.jsx)(o.Z.Label,{className:p()["profile-input-label"]+" mt-4",children:"New Password"}),(0,a.jsx)(o.Z.Control,{value:b.value,onChange:function(e){j({isInvalid:!1,value:e.currentTarget.value,err:""})},className:p()["profile-input"],type:"password",placeholder:"New Password"}),b.isInvalid&&(0,a.jsx)("div",{style:{color:"red",fontSize:"12px",marginTop:"5px"},children:b.err}),(0,a.jsx)(d.Z,{className:p()["submit-btn"]+" my-5",onClick:function(){var e=new FormData;(function(){var e=!0;b.value.length<8&&(j({isInvalid:!0,value:b.value,err:"Password must contain atleast eight characters!"}),e=!1);var i=(0,D.J)(b.value,{password:!0});return i.length&&(j({isInvalid:!0,value:b.value,err:i[0]}),e=!1),e})()&&(e.append("old_password",h.value),e.append("new_password",b.value),i((0,S.QP)()),B.J.changePassword(e).then((function(e){setTimeout((function(){i((0,S.Zk)())}),1e3),k.Am.success("Password updated successfully",{position:k.Am.POSITION.TOP_RIGHT})})).catch((function(e){k.Am.error(null===e||void 0===e?void 0:e.old_password,{position:k.Am.POSITION.TOP_RIGHT}),setTimeout((function(){i((0,S.Zk)())}),1e3)})))},children:"Save Changes"}),(0,a.jsx)("div",{className:p()["line-break"]+" mb-4"}),(0,a.jsxs)("div",{className:"align-items-center d-flex justify-content-between w-100",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:p()["login-details"],children:"Close your account"}),(0,a.jsx)("p",{className:p()["login-description"],children:"Delete your account and account data"})]}),(0,a.jsx)("div",{children:(0,a.jsx)("p",{className:p()["close-account"],children:"Close Account"})})]})]})]})},Q=[{name:"Facebook/Instagram",image:R.Z,description:"By connecting your account with your Facebook/Instagram account, you acknowledge and agree that information you choose to share will be uploaded to WickYick and may be viewed by WickYick and other WickYick\u2019s users. Also, your Facebook/Instagram account information may be used by WickYick. If you no longer want to share this information, please disconnect your Facebook/Instagram account."},{name:"Tiktok",image:z.Z,description:"By connecting your account with your Tiktok account, you acknowledge and agree that information you choose to share will be uploaded to WickYick and may be viewed by WickYick and other WickYick\u2019s users. Also, your Tiktok account information may be used by WickYick. If you no longer want to share this information, please disconnect your Tiktok account."},{name:"LinkedIn",image:W.Z,description:"By connecting your account with your LinkedIn account, you acknowledge and agree that information you choose to share will be uploaded to WickYick and may be viewed by WickYick and other WickYick\u2019s users. Also, your LinkedIn account information may be used by WickYick. If you no longer want to share this information, please disconnect your LinkedIn account."}],G=function(){var e=(0,Y.useRouter)(),i=(0,q.PR)(),n=e.query.code,l=(0,Y.useRouter)(),t=(0,I.I0)(),s=(0,m.useState)(0),v=s[0],p=s[1];return(0,m.useEffect)((function(){if(n&&(null===n||void 0===n?void 0:n.length)>0){p(2);var e={code:n};t((0,S.QP)()),_.K.sendInstagramCode(e).then((function(e){setTimeout((function(){t((0,S.Zk)())}),1e3),localStorage.setItem("user",JSON.stringify(e.user))})).catch((function(e){setTimeout((function(){t((0,S.Zk)())}),1e3)}))}}),[t,n]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:r()["setting-form"],children:(0,a.jsx)(o.Z,{children:(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(u.Z,{xs:12,md:3,children:(0,a.jsx)(h,{goToNextStep:function(e){return p(e)},currentStep:v})}),(0,a.jsx)(u.Z,{xs:12,md:9,children:0===v?(0,a.jsx)("div",{children:(0,a.jsx)(c.Z,{children:(0,a.jsx)(u.Z,{xs:12,md:11,children:(0,a.jsx)(F,{goToNextStep:function(e){return p(e)}})})})}):1===v?(0,a.jsx)("div",{children:(0,a.jsx)(c.Z,{children:(0,a.jsx)(u.Z,{xs:12,md:11,children:(0,a.jsx)(H,{goToNextStep:function(e){return p(e)}})})})}):3===v?(0,a.jsxs)(a.Fragment,{children:[Q.map((function(e,i){return(0,a.jsx)(J,{name:e.name,image:e.image,description:e.description},i)})),(0,a.jsx)(d.Z,{className:r()["continue-btn"]+" mt-3",onClick:function(e){e.preventDefault(),l.push("agent-profile/".concat(i.pk))},children:"Finish"})]}):null})]})})})})},K=n(3099),U=n(6923),X=(0,K.Z)((function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t(),{id:"c84e424fcecaf415",children:"body{background-color:#eef0f3}"}),(0,a.jsx)("div",{style:{background:"#EEF0F3",minHeight:"110vh",height:"auto",width:"100%",paddingBottom:"10%"},className:"jsx-c84e424fcecaf415",children:(0,a.jsx)("div",{className:"jsx-c84e424fcecaf415 "+(r()["header-wick-yick"]+" d-flex align-items-center"||0),children:(0,a.jsx)(G,{})})}),(0,a.jsx)(U.Z,{})]})}))},3522:function(e){e.exports={"profile-setting-side-nav":"Profile-Settings_profile-setting-side-nav__6tjfd","nav-text":"Profile-Settings_nav-text__h_JBJ","active-link":"Profile-Settings_active-link__ioJPB","subscription-box":"Profile-Settings_subscription-box__YnOFK","plan-title":"Profile-Settings_plan-title__ovs80","plan-description":"Profile-Settings_plan-description__3hJfF","login-details":"Profile-Settings_login-details__bmvdv","upgrade-btn":"Profile-Settings_upgrade-btn__QT4ZR","update-email":"Profile-Settings_update-email__2JrPl","profile-details":"Profile-Settings_profile-details__eBk7S","profile-input":"Profile-Settings_profile-input__UTC_v","profile-input-label":"Profile-Settings_profile-input-label__yDQJa","submit-btn":"Profile-Settings_submit-btn__Zcpiq","line-break":"Profile-Settings_line-break__mwlXL","close-account":"Profile-Settings_close-account__SARXG","change-email":"Profile-Settings_change-email__lE8YO"}}},function(e){e.O(0,[37,579,479,923,374,774,888,179],(function(){return i=3951,e(e.s=i);var i}));var i=e.O();_N_E=i}]);