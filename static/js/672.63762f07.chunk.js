(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[672],{5233:(n,e,t)=>{"use strict";t.d(e,{Z:()=>rn});var o=t(5893),r=t(1508),i=t(2747),a=t(4970),s=t(1307),c=t(2084),l=function(){return(0,c.useDispatch)()},u=c.useSelector,d=function(){return d=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},d.apply(this,arguments)},f=function(){var n=l();return{clearAuthInfo:function(){n((0,s.G)())},getTokenInfo:function(){n((0,a.z)())},addToken:function(e,t){return n((0,a.Z)({client_id:e,client_secret:t}))}}},p=function(){var n=u((function(n){return n})).auth;return d({},n)},h=t(9397),g=t(9809),v=t(847),y=t(3972),x=t(1934),k=t(6508),b=t(6807),m=function(){return m=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},m.apply(this,arguments)},j=function(){var n=u((function(n){return n})).addressBook;return m({},n)},S=t(2623),I=t(4486),w=t(3931),A=function(){return A=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},A.apply(this,arguments)};const B=function(n){var e=n.id,t=n.anchorEl,r=n.open,i=n.handleClose,a=n.handleChange,s=n.options;return(0,o.jsx)(I.Z,{anchorEl:t,open:r,onClose:i,anchorOrigin:{vertical:"bottom",horizontal:"center"},sx:{"& .MuiPaper-root":{width:"unset"}},children:null==s?void 0:s.map((function(n){return(0,o.jsx)(w.Z,{onClick:function(e){return function(n,e){a(e.id),i(n)}(e,n)},sx:A({display:"flex",alignItems:"center",gap:2},e===n.id&&{color:function(n){return n.palette.primary.main}}),children:(0,o.jsx)(y.Z,{children:n.name})},n.id)}))})};var Z=t(6489),T=t(948),P=(0,T.ZP)(r.Z)((function(){return{display:"flex",justifyContent:"center",alignItems:"center",background:"transparent !important",height:"100%"}})),E=function(){return E=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},E.apply(this,arguments)};const O=function(n){var e=n.style,t=n.size,r=void 0===t?50:t;return(0,o.jsx)(P,{sx:E({alignSelf:"center"},e),children:(0,o.jsx)(Z.Z,{size:r})})};var L=function(n,e,t){if(t||2===arguments.length)for(var o,r=0,i=e.length;r<i;r++)!o&&r in e||(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return n.concat(o||Array.prototype.slice.call(e))};const F=function(n){var e=n.entityName,t=n.addressBookId,a=n.onChangeAddressBookId,s=(0,S.useTheme)(),c=(0,x.useTranslation)().t,l=(0,i.useState)(null),u=l[0],d=l[1],f=j(),p=f.addressBooks,h=f.loadingAddressBooks,g=f.loadingAddressBooksForEntity,v=(0,i.useState)(t),k=v[0],b=v[1],m=(0,i.useMemo)((function(){var n;return null===(n=L([{id:0,name:c("notSelected")}],p,!0))||void 0===n?void 0:n.find((function(n){return(null==n?void 0:n.id)===k}))}),[p,k]),I=(0,i.useMemo)((function(){return h||g}),[h,g]),w=Boolean(u);return(0,i.useEffect)((function(){b(t)}),[t]),(0,o.jsxs)(r.Z,{sx:{background:s.palette.background.paper,color:s.palette.text.primary,padding:"7px 15px",borderRadius:"6px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[(0,o.jsx)(y.Z,{sx:{width:"100px",fontSize:"16px",color:s.palette.text.primary},children:c(e)}),I?(0,o.jsx)(O,{size:25}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y.Z,{sx:{fontSize:"16px",color:w?s.palette.primary.main:s.palette.text.primary,letterSpacing:"0.15px",cursor:"pointer","&:hover":{color:s.palette.primary.main}},onClick:function(n){d(n.currentTarget)},children:null==m?void 0:m.name}),(0,o.jsx)(B,{id:k,options:Array.from(new Set(L([{id:0,name:c("notSelected")}],null==p?void 0:p.map((function(n){return{id:n.id,name:n.name}})),!0))),anchorEl:u,handleClose:function(n){d(null)},handleChange:function(n){b(n),a(n)},open:w})]}),(0,o.jsx)(S.Button,{disabled:I||!k,sx:{textTransform:"initial",fontSize:"14px"},onClick:function(){b(0),a(0)},children:c("cancel")})]})};var M=function(){return M=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},M.apply(this,arguments)};const C=function(){var n,e=(0,x.useTranslation)().t,t=j(),a=t.addressBooksForEntity,s=t.addressBooks,c=t.dealsStatus,u=(n=l(),{clearAddressBooksInfo:function(){n((0,b.g)())},getAddressBooks:function(){n((0,k.$k)())},getAddressBookEntities:function(){n((0,k.sb)())},addAddressBookForEntity:function(e){n((0,k.h6)(e))},getDealsStatus:function(){n((0,k.fi)())},handleDealsStatus:function(e){n((0,k.wN)(e))}}),d=u.getAddressBooks,p=u.getAddressBookEntities,m=u.addAddressBookForEntity,S=u.clearAddressBooksInfo,I=u.getDealsStatus,w=u.handleDealsStatus,A=f().addToken,B=["leads","contacts","companies"],Z=(0,i.useState)(null==a?void 0:a.entities),T=Z[0],P=Z[1],E=(0,i.useState)(!1),O=E[0],L=E[1],C=(0,i.useState)(["enabled","success"].includes(null==c?void 0:c.message)),z=C[0],D=C[1];return(0,i.useEffect)((function(){D(["enabled","success"].includes(null==c?void 0:c.message))}),[null==c?void 0:c.message]),(0,i.useEffect)((function(){P(null==a?void 0:a.entities)}),[null==a?void 0:a.entities]),(0,i.useEffect)((function(){var n;!(null==s?void 0:s.length)&&d(),!(null===(n=Object.keys(null==a?void 0:a.entities))||void 0===n?void 0:n.length)&&p(),I()}),[]),(0,i.useEffect)((function(){L((null==a?void 0:a.entities.leads)!==(null==T?void 0:T.leads)||(null==a?void 0:a.entities.contacts)!==(null==T?void 0:T.contacts)||(null==a?void 0:a.entities.companies)!==(null==T?void 0:T.companies))}),[null==a?void 0:a.entities,T]),(0,o.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column",gap:"15px",padding:"10px 30px"},children:[null==B?void 0:B.map((function(n){return(0,o.jsx)(F,{entityName:n,addressBookId:T[n]||0,onChangeAddressBookId:(e=n,function(n){P((function(t){var o;return M(M({},t),((o={})[e]=n,o))}))})},n);var e})),(0,o.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"row"},children:[(0,o.jsx)(v.Z,{sx:{fontSize:"14px",marginLeft:"5px"},control:(0,o.jsx)(g.Z,{checked:z,onChange:function(n){w(n.target.checked),D(n.target.checked)}}),label:(0,o.jsx)(y.Z,{component:"span",sx:{color:function(n){return n.palette.text.primary},fontSize:"14px"},children:e("createAgreement")})}),(0,o.jsx)(h.Z,{sx:{marginLeft:"auto",textTransform:"initial",marginRight:"15px"},onClick:function(){A("0","0").then(S)},children:e("goOut")})]}),(0,o.jsx)(r.Z,{sx:{display:"flex",flexDirection:"row"},children:O&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.Z,{sx:{textTransform:"initial",marginLeft:"5px"},onClick:function(){m(Object.entries(T).filter((function(n){return 0!==n[1]})).reduce((function(n,e){var t,o=e[0],r=e[1];return M(M({},n),((t={})[o]=r,t))}),{}))},children:e("save")}),(0,o.jsx)(h.Z,{sx:{textTransform:"initial"},onClick:function(){P(null==a?void 0:a.entities)},children:e("cancel")})]})})]})};var z=t(3366),D=t(7462),$=t(8216),N=t(7909),W=t(4780),_=t(1657),R=t(4867);function G(n){return(0,R.Z)("MuiLoadingButton",n)}const U=(0,t(1588).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),V=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],J=(0,T.ZP)(h.Z,{shouldForwardProp:n=>(n=>"ownerState"!==n&&"theme"!==n&&"sx"!==n&&"as"!==n&&"classes"!==n)(n)||"classes"===n,name:"MuiLoadingButton",slot:"Root",overridesResolver:(n,e)=>[e.root,e.startIconLoadingStart&&{[`& .${U.startIconLoadingStart}`]:e.startIconLoadingStart},e.endIconLoadingEnd&&{[`& .${U.endIconLoadingEnd}`]:e.endIconLoadingEnd}]})((({ownerState:n,theme:e})=>(0,D.Z)({[`& .${U.startIconLoadingStart}, & .${U.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0}},"center"===n.loadingPosition&&{transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),[`&.${U.loading}`]:{color:"transparent"}},"start"===n.loadingPosition&&n.fullWidth&&{[`& .${U.startIconLoadingStart}, & .${U.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===n.loadingPosition&&n.fullWidth&&{[`& .${U.startIconLoadingStart}, & .${U.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginLeft:-8}}))),K=(0,T.ZP)("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.loadingIndicator,e[`loadingIndicator${(0,$.Z)(t.loadingPosition)}`]]}})((({theme:n,ownerState:e})=>(0,D.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===e.loadingPosition&&("outlined"===e.variant||"contained"===e.variant)&&{left:"small"===e.size?10:14},"start"===e.loadingPosition&&"text"===e.variant&&{left:6},"center"===e.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(n.vars||n).palette.action.disabled},"end"===e.loadingPosition&&("outlined"===e.variant||"contained"===e.variant)&&{right:"small"===e.size?10:14},"end"===e.loadingPosition&&"text"===e.variant&&{right:6},"start"===e.loadingPosition&&e.fullWidth&&{position:"relative",left:-10},"end"===e.loadingPosition&&e.fullWidth&&{position:"relative",right:-10}))),q=i.forwardRef((function(n,e){const t=(0,_.Z)({props:n,name:"MuiLoadingButton"}),{children:r,disabled:i=!1,id:a,loading:s=!1,loadingIndicator:c,loadingPosition:l="center",variant:u="text"}=t,d=(0,z.Z)(t,V),f=(0,N.Z)(a),p=null!=c?c:(0,o.jsx)(Z.Z,{"aria-labelledby":f,color:"inherit",size:16}),h=(0,D.Z)({},t,{disabled:i,loading:s,loadingIndicator:p,loadingPosition:l,variant:u}),g=(n=>{const{loading:e,loadingPosition:t,classes:o}=n,r={root:["root",e&&"loading"],startIcon:[e&&`startIconLoading${(0,$.Z)(t)}`],endIcon:[e&&`endIconLoading${(0,$.Z)(t)}`],loadingIndicator:["loadingIndicator",e&&`loadingIndicator${(0,$.Z)(t)}`]},i=(0,W.Z)(r,G,o);return(0,D.Z)({},o,i)})(h),v=s?(0,o.jsx)(K,{className:g.loadingIndicator,ownerState:h,children:p}):null;return(0,o.jsxs)(J,(0,D.Z)({disabled:i||s,id:f,ref:e},d,{variant:u,classes:g,ownerState:h,children:["end"===h.loadingPosition?r:v,"end"===h.loadingPosition?v:r]}))}));var H=t(8535),Q=t(8492),X=t(2715),Y=t(2670),nn=function(){return nn=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},nn.apply(this,arguments)},en=(0,T.ZP)(H.Z)((function(n){var e;return(e={})[n.theme.breakpoints.up("sm")]={width:"28rem"},e})),tn=(0,T.ZP)(X.Z)((function(){return{width:"100%",letterSpacing:"0.15px","& .MuiOutlinedInput-notchedOutline":{border:"1px solid rgba(58, 53, 65, 0.23)"},"& .MuiFormHelperText-root.Mui-error":{position:"absolute",bottom:"-20px",fontSize:"12px"},marginTop:"20px"}}));const on=function(){var n,e=(0,x.useTranslation)().t,t=(0,S.useTheme)(),a=f().addToken,s=p(),c=s.loadingAddToken,l=s.authInfo,u=(n=(0,Y.useSnackbar)().enqueueSnackbar,{errorNotification:function(e){n(e||"Помилка виконання запиту",{variant:"error",anchorOrigin:{vertical:"top",horizontal:"right"}})}}).errorNotification,d=(0,i.useState)(!1),h=d[0],g=d[1],v=(0,i.useState)({clientId:"",clientSecret:""}),k=v[0],b=v[1];(0,i.useEffect)((function(){l.has_token&&b({clientId:l.client_id,clientSecret:l.client_secret})}),[l]);var m=(0,i.useState)({clientId:!1,clientSecret:!1}),j=m[0],I=m[1],w=["clientId","clientSecret"],A=(0,i.useMemo)((function(){return Object.values(j).some((function(n){return n}))}),[j]),B=function(n){return function(e){I((function(t){var o;return nn(nn({},t),((o={})[n]=e,o))}))}},Z=function(n){return function(e){var t;b(nn(nn({},k),((t={})[n]=e.target.value,t))),B(n)(!e.target.value.trim())}},T=function(n){g(!1),B(n)(!1)},P=function(n,e){B(e)(!n.target.value.trim())},E=function(){g(!1);var n=Object.entries(k).filter((function(n){var e=n[0];return w.includes(e)})).some((function(n){return!n[1].trim().length}));if(A||n){I(Object.entries(k).filter((function(n){var e=n[0];return w.includes(e)})).reduce((function(n,e){var t,o=e[0],r=e[1];return nn(nn({},n),((t={})[o]=!r.trim().length,t))}),{}));var t=Object.entries(k).filter((function(n){var e=n[0];return w.includes(e)})).some((function(n){return!n[1].trim().length}));t&&u(e("fieldsNotFilled"))}else a(k.clientId,k.clientSecret).then((function(n){g(!n.payload.has_token)}))},O=function(n){n.stopPropagation(),"Enter"===n.key&&E()};return(0,o.jsx)(r.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",padding:t.spacing(5)},children:(0,o.jsx)(en,{sx:{zIndex:1},children:(0,o.jsxs)(Q.Z,{sx:{p:function(n){return"".concat(n.spacing(12,9,7)," !important")},position:"relative"},children:[(0,o.jsxs)(r.Z,{sx:{mb:"10px"},children:[(0,o.jsx)(y.Z,{variant:"h5",sx:{fontWeight:600,mb:1.5},children:"Sendpulse"}),(0,o.jsx)(y.Z,{variant:"body2",children:e("copyDataPersonalAccountForLog")})]}),(0,o.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(n){return n.preventDefault()},children:[(0,o.jsx)(tn,{autoFocus:!0,fullWidth:!0,label:"ID",error:j.clientId,helperText:j.clientId&&"Введіть client ID",onKeyDown:O,onFocus:function(){return T("clientId")},onBlur:function(n){return P(n,"clientId")},name:"clientId",value:k.clientId,onChange:Z("clientId"),type:"text"}),(0,o.jsx)(tn,{fullWidth:!0,error:j.clientSecret,helperText:j.clientSecret&&"Введіть client secret",name:"clientSecret",label:e("secret"),value:k.clientSecret,onKeyDown:O,onFocus:function(){return T("clientSecret")},onBlur:function(n){return P(n,"clientSecret")},id:"clientSecret",onChange:Z("clientSecret"),type:"text"}),(0,o.jsx)(q,{fullWidth:!0,loading:c,onClick:E,size:"large",type:"submit",variant:"contained",sx:{mt:"20px",background:t.palette.primary.main},children:e("login")})]}),!c&&!l.has_token&&h&&(0,o.jsxs)(y.Z,{sx:{marginTop:"10px",fontSize:"12px",color:t.palette.error.main},children:[e("incorrectCredentials")," ",(0,o.jsx)("br",{}),e("pleaseCheckAndTryAgain")]})]})})})},rn=function(){var n=f().getTokenInfo,e=p(),t=e.loadingGetTokenInfo,a=e.authInfo;return(0,i.useEffect)((function(){n()}),[]),t?(0,o.jsx)(r.Z,{sx:{height:"500px"},children:(0,o.jsx)(O,{size:100})}):(null==a?void 0:a.has_token)?(0,o.jsx)(C,{}):(0,o.jsx)(on,{})}},7868:(n,e,t)=>{"use strict";t.d(e,{x:()=>o});var o=["https://stage3.staging.uspacy.tech","http://localhost:8080"].includes(window.location.origin)?"https://test-sendpulse.alterego.biz.ua/sendpulse/v1":"https://sendpulse.alterego.digital/sendpulse/v1"},1116:(n,e,t)=>{"use strict";t.d(e,{ZP:()=>i});var o=t(5893),r=(0,t(2747).createContext)({});const i=function(n){var e=n.children,t=n.userSettings;return(0,o.jsx)(r.Provider,{value:{userSettings:t},children:e})}},970:(n,e,t)=>{"use strict";t.d(e,{LP:()=>i});var o=t(5762),r=("tokens",t.n(o)().createInstance({name:"Uspacy",storeName:"tokens"})),i=function(){return r.getItem("token")}},9517:(n,e,t)=>{"use strict";t.d(e,{Z:()=>c});var o=t(5146),r=t.n(o),i=t(4929),a=t.n(i),s=t(1934);r().use(s.initReactI18next).use(a()((function(n,e,o){t(7535)("./".concat(n,"/").concat(e,".json")).then((function(n){o(null,n)})).catch((function(n){o(n,null)}))}))).init({fallbackLng:"uk"});const c=r()},4534:(n,e,t)=>{"use strict";t.d(e,{z:()=>s});var o=t(5552),r=t(6807),i=t(1307),a=(0,o.combineReducers)({auth:i.Z,addressBook:r.Z}),s=function(){return(0,o.configureStore)({reducer:a,middleware:function(n){return n()}})}},6508:(n,e,t)=>{"use strict";t.d(e,{$k:()=>c,fi:()=>d,h6:()=>u,sb:()=>l,wN:()=>f});var o=t(5552),r=t(7868),i=t(970),a=function(n,e,t,o){return new(t||(t=Promise))((function(r,i){function a(n){try{c(o.next(n))}catch(n){i(n)}}function s(n){try{c(o.throw(n))}catch(n){i(n)}}function c(n){var e;n.done?r(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,s)}c((o=o.apply(n,e||[])).next())}))},s=function(n,e){var t,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(t=1,o&&(r=2&s[0]?o.return:s[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,s[1])).done)return r;switch(o=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,o=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){a.label=s[1];break}if(6===s[0]&&a.label<r[1]){a.label=r[1],r=s;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(s);break}r[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(n,a)}catch(n){s=[6,n],o=0}finally{t=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},c=(0,o.createAsyncThunk)("addressBook/getAddressBooks",(function(n,e){return a(void 0,void 0,void 0,(function(){var n;return s(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,(0,i.LP)()];case 1:return n=t.sent(),[4,fetch("".concat(r.x,"/addressbooks/getAddressbooks"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(n){return a(void 0,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return[4,n.json()];case 1:return[2,e.sent()]}}))}))}))];case 2:return[2,t.sent()];case 3:return t.sent(),[2,e.rejectWithValue("Failure")];case 4:return[2]}}))}))})),l=(0,o.createAsyncThunk)("addressBook/getAddressBookEntities",(function(n,e){return a(void 0,void 0,void 0,(function(){var n;return s(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,(0,i.LP)()];case 1:return n=t.sent(),[4,fetch("".concat(r.x,"/addressbooks/getAddressbookEntities"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(n){return a(void 0,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return[4,n.json()];case 1:return[2,e.sent()]}}))}))}))];case 2:return[2,t.sent()];case 3:return t.sent(),[2,e.rejectWithValue("Failure")];case 4:return[2]}}))}))})),u=(0,o.createAsyncThunk)("addressBook/addAddressBookForEntity",(function(n,e){return a(void 0,void 0,void 0,(function(){var t;return s(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),[4,(0,i.LP)()];case 1:return t=o.sent(),[4,fetch("".concat(r.x,"/addressbooks/addAddressbookForEntity"),{method:"POST",body:JSON.stringify({entities:n}),headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(n){return a(void 0,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return[4,n.json()];case 1:return[2,e.sent()]}}))}))}))];case 2:return[2,o.sent()];case 3:return o.sent(),[2,e.rejectWithValue("Failure")];case 4:return[2]}}))}))})),d=(0,o.createAsyncThunk)("addressBook/getDealsStatus",(function(n,e){return a(void 0,void 0,void 0,(function(){var n;return s(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,(0,i.LP)()];case 1:return n=t.sent(),[4,fetch("".concat(r.x,"/deals/settingStatus"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(n){return a(void 0,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return[4,n.json()];case 1:return[2,e.sent()]}}))}))}))];case 2:return[2,t.sent()];case 3:return t.sent(),[2,e.rejectWithValue("Failure")];case 4:return[2]}}))}))})),f=(0,o.createAsyncThunk)("addressBook/handleDealsStatus",(function(n,e){return a(void 0,void 0,void 0,(function(){var t;return s(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),[4,(0,i.LP)()];case 1:return t=o.sent(),[4,fetch("".concat(r.x,"/deals/").concat(n?"enable":"disable"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(n){return a(void 0,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return[4,n.json()];case 1:return[2,e.sent()]}}))}))}))];case 2:return[2,o.sent()];case 3:return o.sent(),[2,e.rejectWithValue("Failure")];case 4:return[2]}}))}))}))},6807:(n,e,t)=>{"use strict";t.d(e,{Z:()=>l,g:()=>c});var o,r=t(5552),i=t(6508),a={addressBooks:[],addressBooksForEntity:{entities:{}},dealsStatus:{status:!1,message:""},errorMessage:"",loadingAddressBooks:!0,loadingAddressBooksForEntity:!0,loadingUpdateAddressBooksForEntity:!1,loadingDealStatus:!0},s=(0,r.createSlice)({name:"addressBook",initialState:a,reducers:{clearAddressBooksInfo:function(n){n.addressBooks=a.addressBooks,n.addressBooksForEntity=a.addressBooksForEntity}},extraReducers:(o={},o[i.$k.fulfilled.type]=function(n,e){n.loadingAddressBooks=!1,n.errorMessage="",n.addressBooks=e.payload},o[i.$k.pending.type]=function(n){n.loadingAddressBooks=!0,n.errorMessage=""},o[i.$k.rejected.type]=function(n,e){n.loadingAddressBooks=!1,n.errorMessage=e.payload},o[i.sb.fulfilled.type]=function(n,e){n.loadingAddressBooksForEntity=!1,n.errorMessage="",n.addressBooksForEntity=e.payload},o[i.sb.pending.type]=function(n){n.loadingAddressBooksForEntity=!0,n.errorMessage=""},o[i.sb.rejected.type]=function(n,e){n.loadingAddressBooksForEntity=!1,n.errorMessage=e.payload},o[i.h6.fulfilled.type]=function(n,e){n.loadingUpdateAddressBooksForEntity=!1,n.errorMessage="",n.addressBooksForEntity=e.payload},o[i.h6.pending.type]=function(n){n.loadingUpdateAddressBooksForEntity=!0,n.errorMessage=""},o[i.h6.rejected.type]=function(n,e){n.loadingUpdateAddressBooksForEntity=!1,n.errorMessage=e.payload},o[i.fi.fulfilled.type]=function(n,e){n.loadingDealStatus=!1,n.errorMessage="",n.dealsStatus=e.payload},o[i.fi.pending.type]=function(n){n.loadingDealStatus=!0,n.errorMessage=""},o[i.fi.rejected.type]=function(n,e){n.loadingDealStatus=!1,n.errorMessage=e.payload},o[i.wN.fulfilled.type]=function(n,e){n.errorMessage="",n.dealsStatus=e.payload},o[i.wN.pending.type]=function(n){n.errorMessage=""},o[i.wN.rejected.type]=function(n,e){n.errorMessage=e.payload},o)}),c=s.actions.clearAddressBooksInfo;const l=s.reducer},4970:(n,e,t)=>{"use strict";t.d(e,{Z:()=>l,z:()=>c});var o=t(5552),r=t(7868),i=t(970),a=function(n,e,t,o){return new(t||(t=Promise))((function(r,i){function a(n){try{c(o.next(n))}catch(n){i(n)}}function s(n){try{c(o.throw(n))}catch(n){i(n)}}function c(n){var e;n.done?r(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,s)}c((o=o.apply(n,e||[])).next())}))},s=function(n,e){var t,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(t=1,o&&(r=2&s[0]?o.return:s[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,s[1])).done)return r;switch(o=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,o=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){a.label=s[1];break}if(6===s[0]&&a.label<r[1]){a.label=r[1],r=s;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(s);break}r[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(n,a)}catch(n){s=[6,n],o=0}finally{t=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},c=(0,o.createAsyncThunk)("apps/getTokenInfo",(function(n,e){return a(void 0,void 0,void 0,(function(){var n;return s(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,(0,i.LP)()];case 1:return n=t.sent(),[4,fetch("".concat(r.x,"/tokens/getTokenInfo"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(n){return a(void 0,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return[4,n.json()];case 1:return[2,e.sent()]}}))}))}))];case 2:return[2,t.sent()];case 3:return t.sent(),[2,e.rejectWithValue("Failure")];case 4:return[2]}}))}))})),l=(0,o.createAsyncThunk)("apps/addToken",(function(n,e){return a(void 0,void 0,void 0,(function(){var t;return s(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),[4,(0,i.LP)()];case 1:return t=o.sent(),[4,fetch("".concat(r.x,"/tokens/addToken"),{method:"POST",body:JSON.stringify(n),headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(n){return a(void 0,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return[4,n.json()];case 1:return[2,e.sent()]}}))}))}))];case 2:return[2,o.sent()];case 3:return o.sent(),[2,e.rejectWithValue("Failure")];case 4:return[2]}}))}))}))},1307:(n,e,t)=>{"use strict";t.d(e,{G:()=>c,Z:()=>l});var o,r=t(5552),i=t(4970),a={authInfo:{client_id:"",client_secret:"",status:!1,message:"",has_token:!1},errorMessage:"",loadingGetTokenInfo:!0,loadingAddToken:!1},s=(0,r.createSlice)({name:"auth",initialState:a,reducers:{clearAuthInfo:function(n){n.authInfo=a.authInfo}},extraReducers:(o={},o[i.z.fulfilled.type]=function(n,e){n.loadingGetTokenInfo=!1,n.errorMessage="",n.authInfo=e.payload},o[i.z.pending.type]=function(n){n.loadingGetTokenInfo=!0,n.errorMessage=""},o[i.z.rejected.type]=function(n,e){n.loadingGetTokenInfo=!1,n.errorMessage=e.payload},o[i.Z.fulfilled.type]=function(n,e){n.loadingAddToken=!1,n.errorMessage="",n.authInfo=e.payload},o[i.Z.pending.type]=function(n){n.loadingAddToken=!0,n.errorMessage=""},o[i.Z.rejected.type]=function(n,e){n.loadingAddToken=!1,n.errorMessage=e.payload},o)}),c=s.actions.clearAuthInfo;const l=s.reducer},7535:(n,e,t)=>{var o={"./en-US/translation.json":[5315,567],"./pl/translation.json":[450,450],"./pt-BR/translation.json":[9536,536],"./uk/translation.json":[2978,978]};function r(n){if(!t.o(o,n))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[n],r=e[0];return t.e(e[1]).then((()=>t.t(r,19)))}r.keys=()=>Object.keys(o),r.id=7535,n.exports=r}}]);
//# sourceMappingURL=672.63762f07.chunk.js.map