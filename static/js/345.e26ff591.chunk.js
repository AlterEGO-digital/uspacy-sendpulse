"use strict";(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[345],{5233:function(n,t,e){e.d(t,{Z:function(){return tn}});var o=e(5893),r=e(1508),i=e(2747),a=e(4970),s=e(1307),c=e(2084),u=function(){return(0,c.useDispatch)()},d=c.useSelector,l=function(){return l=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},l.apply(this,arguments)},f=function(){var n=u();return{clearAuthInfo:function(){n((0,s.G)())},getTokenInfo:function(){n((0,a.z)())},addToken:function(t,e){return n((0,a.Z)({client_id:t,client_secret:e}))}}},p=function(){var n=d((function(n){return n})).auth;return l({},n)},h=e(9397),g=e(6508),v=e(6807),y=function(){return y=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},y.apply(this,arguments)},x=function(){var n=d((function(n){return n})).addressBook;return y({},n)},k=e(2623),b=e(3972),m=e(4486),j=e(3931),I=function(){return I=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},I.apply(this,arguments)},S=function(n){var t=n.id,e=n.anchorEl,r=n.open,i=n.handleClose,a=n.handleChange,s=n.options;return(0,o.jsx)(m.Z,{anchorEl:e,open:r,onClose:i,anchorOrigin:{vertical:"bottom",horizontal:"center"},sx:{"& .MuiPaper-root":{width:"unset"}},children:s.map((function(n){return(0,o.jsx)(j.Z,{onClick:function(t){return function(n,t){a(t.id),i(n)}(t,n)},sx:I({display:"flex",alignItems:"center",gap:2},t===n.id&&{color:function(n){return n.palette.primary.main}}),children:(0,o.jsx)(b.Z,{children:n.name})},n.id)}))})},B=e(6489),w=e(948),A=(0,w.ZP)(r.Z)((function(){return{display:"flex",justifyContent:"center",alignItems:"center",background:"transparent !important",height:"100%"}})),Z=function(){return Z=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},Z.apply(this,arguments)},T=function(n){var t=n.style,e=n.size,r=void 0===e?50:e;return(0,o.jsx)(A,{sx:Z({alignSelf:"center"},t),children:(0,o.jsx)(B.Z,{size:r})})},E=function(n,t,e){if(e||2===arguments.length)for(var o,r=0,i=t.length;r<i;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return n.concat(o||Array.prototype.slice.call(t))},P=function(n){var t=n.entityName,e=n.addressBookId,a=n.onChangeAddressBookId,s=(0,k.useTheme)(),c=(0,i.useState)(null),u=c[0],d=c[1],l=x(),f=l.addressBooks,p=l.loadingAddressBooks,h=l.loadingAddressBooksForEntity,g=(0,i.useState)(e),v=g[0],y=g[1],m=(0,i.useMemo)((function(){var n;return null===(n=E([{id:0,name:"Не обрано"}],f,!0))||void 0===n?void 0:n.find((function(n){return(null==n?void 0:n.id)===v}))}),[f,v]),j=(0,i.useMemo)((function(){return p||h}),[p,h]),I=Boolean(u);return(0,i.useEffect)((function(){y(e)}),[e]),(0,o.jsxs)(r.Z,{sx:{background:s.palette.background.paper,color:s.palette.text.primary,padding:"7px 15px",borderRadius:"6px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[(0,o.jsx)(b.Z,{sx:{width:"100px",fontSize:"16px",color:s.palette.text.primary},children:function(n){switch(n){case"leads":return"Лід";case"contacts":return"Контакт";case"companies":return"Компанія";default:return""}}(t)}),j?(0,o.jsx)(T,{size:25}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b.Z,{sx:{fontSize:"16px",color:I?s.palette.primary.main:s.palette.text.primary,letterSpacing:"0.15px",cursor:"pointer","&:hover":{color:s.palette.primary.main}},onClick:function(n){d(n.currentTarget)},children:null==m?void 0:m.name}),(0,o.jsx)(S,{id:v,options:Array.from(new Set(E([{id:0,name:"Не обрано"}],null==f?void 0:f.map((function(n){return{id:n.id,name:n.name}})),!0))),anchorEl:u,handleClose:function(n){d(null)},handleChange:function(n){y(n),a(n)},open:I})]}),(0,o.jsx)(k.Button,{disabled:j||!v,sx:{textTransform:"initial",fontSize:"14px"},onClick:function(){y(0),a(0)},children:"Скасувати"})]})},L=function(){return L=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},L.apply(this,arguments)},O=function(){var n,t=x(),e=t.addressBooksForEntity,a=t.addressBooks,s=(n=u(),{clearAddressBooksInfo:function(){n((0,v.g)())},getAddressBooks:function(){n((0,g.$k)())},getAddressBookEntities:function(){n((0,g.sb)())},addAddressBookForEntity:function(t){n((0,g.h6)(t))}}),c=s.getAddressBooks,d=s.getAddressBookEntities,l=s.addAddressBookForEntity,p=s.clearAddressBooksInfo,y=f().addToken,k=["leads","contacts","companies"],b=(0,i.useState)(null==e?void 0:e.entities),m=b[0],j=b[1],I=(0,i.useState)(!1),S=I[0],B=I[1];return(0,i.useEffect)((function(){j(null==e?void 0:e.entities)}),[null==e?void 0:e.entities]),(0,i.useEffect)((function(){var n;!(null==a?void 0:a.length)&&c(),!(null===(n=Object.keys(null==e?void 0:e.entities))||void 0===n?void 0:n.length)&&d()}),[]),(0,i.useEffect)((function(){B((null==e?void 0:e.entities.leads)!==(null==m?void 0:m.leads)||(null==e?void 0:e.entities.contacts)!==(null==m?void 0:m.contacts)||(null==e?void 0:e.entities.companies)!==(null==m?void 0:m.companies))}),[null==e?void 0:e.entities,m]),(0,o.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column",gap:"15px",padding:"10px 30px"},children:[null==k?void 0:k.map((function(n){return(0,o.jsx)(P,{entityName:n,addressBookId:m[n]||0,onChangeAddressBookId:(t=n,function(n){j((function(e){var o;return L(L({},e),((o={})[t]=n,o))}))})},n);var t})),(0,o.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"row"},children:[S&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.Z,{sx:{textTransform:"initial",marginLeft:"5px"},onClick:function(){l(Object.entries(m).filter((function(n){return 0!==n[1]})).reduce((function(n,t){var e,o=t[0],r=t[1];return L(L({},n),((e={})[o]=r,e))}),{}))},children:"Зберегти"}),(0,o.jsx)(h.Z,{sx:{textTransform:"initial"},onClick:function(){j(null==e?void 0:e.entities)},children:"Скасувати"})]}),(0,o.jsx)(h.Z,{sx:{marginLeft:"auto",textTransform:"initial",marginRight:"15px"},onClick:function(){y("0","0").then(p)},children:"Вийти"})]})]})},F=e(3366),C=e(7462),M=e(8216),z=e(7909),$=e(4780),W=e(1657),_=e(4867);function R(n){return(0,_.Z)("MuiLoadingButton",n)}var D=(0,e(1588).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);const G=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],N=(0,w.ZP)(h.Z,{shouldForwardProp:n=>(n=>"ownerState"!==n&&"theme"!==n&&"sx"!==n&&"as"!==n&&"classes"!==n)(n)||"classes"===n,name:"MuiLoadingButton",slot:"Root",overridesResolver:(n,t)=>[t.root,t.startIconLoadingStart&&{[`& .${D.startIconLoadingStart}`]:t.startIconLoadingStart},t.endIconLoadingEnd&&{[`& .${D.endIconLoadingEnd}`]:t.endIconLoadingEnd}]})((({ownerState:n,theme:t})=>(0,C.Z)({[`& .${D.startIconLoadingStart}, & .${D.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}},"center"===n.loadingPosition&&{transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),[`&.${D.loading}`]:{color:"transparent"}},"start"===n.loadingPosition&&n.fullWidth&&{[`& .${D.startIconLoadingStart}, & .${D.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===n.loadingPosition&&n.fullWidth&&{[`& .${D.startIconLoadingStart}, & .${D.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginLeft:-8}}))),V=(0,w.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.loadingIndicator,t[`loadingIndicator${(0,M.Z)(e.loadingPosition)}`]]}})((({theme:n,ownerState:t})=>(0,C.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{left:"small"===t.size?10:14},"start"===t.loadingPosition&&"text"===t.variant&&{left:6},"center"===t.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(n.vars||n).palette.action.disabled},"end"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{right:"small"===t.size?10:14},"end"===t.loadingPosition&&"text"===t.variant&&{right:6},"start"===t.loadingPosition&&t.fullWidth&&{position:"relative",left:-10},"end"===t.loadingPosition&&t.fullWidth&&{position:"relative",right:-10})));var U=i.forwardRef((function(n,t){const e=(0,W.Z)({props:n,name:"MuiLoadingButton"}),{children:r,disabled:i=!1,id:a,loading:s=!1,loadingIndicator:c,loadingPosition:u="center",variant:d="text"}=e,l=(0,F.Z)(e,G),f=(0,z.Z)(a),p=null!=c?c:(0,o.jsx)(B.Z,{"aria-labelledby":f,color:"inherit",size:16}),h=(0,C.Z)({},e,{disabled:i,loading:s,loadingIndicator:p,loadingPosition:u,variant:d}),g=(n=>{const{loading:t,loadingPosition:e,classes:o}=n,r={root:["root",t&&"loading"],startIcon:[t&&`startIconLoading${(0,M.Z)(e)}`],endIcon:[t&&`endIconLoading${(0,M.Z)(e)}`],loadingIndicator:["loadingIndicator",t&&`loadingIndicator${(0,M.Z)(e)}`]},i=(0,$.Z)(r,R,o);return(0,C.Z)({},o,i)})(h),v=s?(0,o.jsx)(V,{className:g.loadingIndicator,ownerState:h,children:p}):null;return(0,o.jsxs)(N,(0,C.Z)({disabled:i||s,id:f,ref:t},l,{variant:d,classes:g,ownerState:h,children:["end"===h.loadingPosition?r:v,"end"===h.loadingPosition?v:r]}))})),J=e(8535),K=e(8492),q=e(2715),H=e(2670),Q=function(){return Q=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},Q.apply(this,arguments)},X=(0,w.ZP)(J.Z)((function(n){var t;return(t={})[n.theme.breakpoints.up("sm")]={width:"28rem"},t})),Y=(0,w.ZP)(q.Z)((function(){return{width:"100%",letterSpacing:"0.15px","& .MuiOutlinedInput-notchedOutline":{border:"1px solid rgba(58, 53, 65, 0.23)"},"& .MuiFormHelperText-root.Mui-error":{position:"absolute",bottom:"-20px",fontSize:"12px"},marginTop:"20px"}})),nn=function(){var n,t=(0,k.useTheme)(),e=f().addToken,a=p(),s=a.loadingAddToken,c=a.authInfo,u=(n=(0,H.useSnackbar)().enqueueSnackbar,{errorNotification:function(t){n(t||"Помилка виконання запиту",{variant:"error",anchorOrigin:{vertical:"top",horizontal:"right"}})}}).errorNotification,d=(0,i.useState)(!1),l=d[0],h=d[1],g=(0,i.useState)({clientId:"",clientSecret:""}),v=g[0],y=g[1];(0,i.useEffect)((function(){c.has_token&&y({clientId:c.client_id,clientSecret:c.client_secret})}),[c]);var x=(0,i.useState)({clientId:!1,clientSecret:!1}),m=x[0],j=x[1],I=["clientId","clientSecret"],S=(0,i.useMemo)((function(){return Object.values(m).some((function(n){return n}))}),[m]),B=function(n){return function(t){j((function(e){var o;return Q(Q({},e),((o={})[n]=t,o))}))}},w=function(n){return function(t){var e;y(Q(Q({},v),((e={})[n]=t.target.value,e))),B(n)(!t.target.value.trim())}},A=function(n){h(!1),B(n)(!1)},Z=function(n,t){B(t)(!n.target.value.trim())},T=function(){h(!1);var n=Object.entries(v).filter((function(n){var t=n[0];return I.includes(t)})).some((function(n){return!n[1].trim().length}));if(S||n){j(Object.entries(v).filter((function(n){var t=n[0];return I.includes(t)})).reduce((function(n,t){var e,o=t[0],r=t[1];return Q(Q({},n),((e={})[o]=!r.trim().length,e))}),{}));var t=Object.entries(v).filter((function(n){var t=n[0];return I.includes(t)})).some((function(n){return!n[1].trim().length}));t&&u("Незаповнені необхідні поля")}else e(v.clientId,v.clientSecret).then((function(n){h(!n.payload.has_token)}))},E=function(n){n.stopPropagation(),"Enter"===n.key&&T()};return(0,o.jsx)(r.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",padding:t.spacing(5)},children:(0,o.jsx)(X,{sx:{zIndex:1},children:(0,o.jsxs)(K.Z,{sx:{p:function(n){return"".concat(n.spacing(12,9,7)," !important")},position:"relative"},children:[(0,o.jsxs)(r.Z,{sx:{mb:"10px"},children:[(0,o.jsx)(b.Z,{variant:"h5",sx:{fontWeight:600,mb:1.5},children:"Sendpulse"}),(0,o.jsx)(b.Z,{variant:"body2",children:"Скопіюйте, будь ласка, client id та client secret в особистому кабінеті Sendpulse та авторизуйтесь в системі"})]}),(0,o.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(n){return n.preventDefault()},children:[(0,o.jsx)(Y,{autoFocus:!0,fullWidth:!0,label:"ID",error:m.clientId,helperText:m.clientId&&"Введіть client ID",onKeyDown:E,onFocus:function(){return A("clientId")},onBlur:function(n){return Z(n,"clientId")},name:"clientId",value:v.clientId,onChange:w("clientId"),type:"text"}),(0,o.jsx)(Y,{fullWidth:!0,error:m.clientSecret,helperText:m.clientSecret&&"Введіть client secret",name:"clientSecret",label:"Secret",value:v.clientSecret,onKeyDown:E,onFocus:function(){return A("clientSecret")},onBlur:function(n){return Z(n,"clientSecret")},id:"clientSecret",onChange:w("clientSecret"),type:"text"}),(0,o.jsx)(U,{fullWidth:!0,loading:s,onClick:T,size:"large",type:"submit",variant:"contained",sx:{mt:"20px",background:t.palette.primary.main},children:"Login"})]}),!s&&!c.has_token&&l&&(0,o.jsxs)(b.Z,{sx:{fontSize:"12px",color:t.palette.error.main,position:"absolute",bottom:"11px"},children:["Ви ввели неправильні авторизаційні дані! ",(0,o.jsx)("br",{}),"Будь ласка, перевірте та повторіть спробу"]})]})})})},tn=function(){var n=f().getTokenInfo,t=p(),e=t.loadingGetTokenInfo,a=t.authInfo;return(0,i.useEffect)((function(){n()}),[]),e?(0,o.jsx)(r.Z,{sx:{height:"500px"},children:(0,o.jsx)(T,{size:100})}):(null==a?void 0:a.has_token)?(0,o.jsx)(O,{}):(0,o.jsx)(nn,{})}},7868:function(n,t,e){e.d(t,{x:function(){return o}});var o="https://sendpulse.alterego.digital/sendpulse/v1"},1116:function(n,t,e){var o=e(5893),r=(0,e(2747).createContext)({});t.ZP=function(n){var t=n.children,e=n.userSettings;return(0,o.jsx)(r.Provider,{value:{userSettings:e},children:t})}},970:function(n,t,e){e.d(t,{LP:function(){return i}});var o=e(5762),r=("tokens",e.n(o)().createInstance({name:"Uspacy",storeName:"tokens"})),i=function(){return r.getItem("token")}},4534:function(n,t,e){e.d(t,{z:function(){return s}});var o=e(5552),r=e(6807),i=e(1307),a=(0,o.combineReducers)({auth:i.Z,addressBook:r.Z}),s=function(){return(0,o.configureStore)({reducer:a,middleware:function(n){return n()}})}},6508:function(n,t,e){e.d(t,{$k:function(){return c},h6:function(){return d},sb:function(){return u}});var o=e(5552),r=e(7868),i=e(970),a=function(n,t,e,o){return new(e||(e=Promise))((function(r,i){function a(n){try{c(o.next(n))}catch(n){i(n)}}function s(n){try{c(o.throw(n))}catch(n){i(n)}}function c(n){var t;n.done?r(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,s)}c((o=o.apply(n,t||[])).next())}))},s=function(n,t){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(e)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(e=1,o&&(r=2&s[0]?o.return:s[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,s[1])).done)return r;switch(o=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,o=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){a.label=s[1];break}if(6===s[0]&&a.label<r[1]){a.label=r[1],r=s;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(s);break}r[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(n,a)}catch(n){s=[6,n],o=0}finally{e=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},c=(0,o.createAsyncThunk)("addressBook/getAddressBooks",(function(n,t){return a(void 0,void 0,void 0,(function(){var n;return s(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),[4,(0,i.LP)()];case 1:return n=e.sent(),[4,fetch("".concat(r.x,"/addressbooks/getAddressbooks"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(n){return a(void 0,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,n.json()];case 1:return[2,t.sent()]}}))}))}))];case 2:return[2,e.sent()];case 3:return e.sent(),[2,t.rejectWithValue("Failure")];case 4:return[2]}}))}))})),u=(0,o.createAsyncThunk)("addressBook/getAddressBookEntities",(function(n,t){return a(void 0,void 0,void 0,(function(){var n;return s(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),[4,(0,i.LP)()];case 1:return n=e.sent(),[4,fetch("".concat(r.x,"/addressbooks/getAddressbookEntities"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(n){return a(void 0,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,n.json()];case 1:return[2,t.sent()]}}))}))}))];case 2:return[2,e.sent()];case 3:return e.sent(),[2,t.rejectWithValue("Failure")];case 4:return[2]}}))}))})),d=(0,o.createAsyncThunk)("addressBook/addAddressBookForEntity",(function(n,t){return a(void 0,void 0,void 0,(function(){var e;return s(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),[4,(0,i.LP)()];case 1:return e=o.sent(),[4,fetch("".concat(r.x,"/addressbooks/addAddressbookForEntity"),{method:"POST",body:JSON.stringify({entities:n}),headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(n){return a(void 0,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,n.json()];case 1:return[2,t.sent()]}}))}))}))];case 2:return[2,o.sent()];case 3:return o.sent(),[2,t.rejectWithValue("Failure")];case 4:return[2]}}))}))}))},6807:function(n,t,e){e.d(t,{g:function(){return c}});var o,r=e(5552),i=e(6508),a={addressBooks:[],addressBooksForEntity:{entities:{}},errorMessage:"",loadingAddressBooks:!0,loadingAddressBooksForEntity:!0,loadingUpdateAddressBooksForEntity:!1},s=(0,r.createSlice)({name:"addressBook",initialState:a,reducers:{clearAddressBooksInfo:function(n){n.addressBooks=a.addressBooks,n.addressBooksForEntity=a.addressBooksForEntity}},extraReducers:(o={},o[i.$k.fulfilled.type]=function(n,t){n.loadingAddressBooks=!1,n.errorMessage="",n.addressBooks=t.payload},o[i.$k.pending.type]=function(n){n.loadingAddressBooks=!0,n.errorMessage=""},o[i.$k.rejected.type]=function(n,t){n.loadingAddressBooks=!1,n.errorMessage=t.payload},o[i.sb.fulfilled.type]=function(n,t){n.loadingAddressBooksForEntity=!1,n.errorMessage="",n.addressBooksForEntity=t.payload},o[i.sb.pending.type]=function(n){n.loadingAddressBooksForEntity=!0,n.errorMessage=""},o[i.sb.rejected.type]=function(n,t){n.loadingAddressBooksForEntity=!1,n.errorMessage=t.payload},o[i.h6.fulfilled.type]=function(n,t){n.loadingUpdateAddressBooksForEntity=!1,n.errorMessage="",n.addressBooksForEntity=t.payload},o[i.h6.pending.type]=function(n){n.loadingUpdateAddressBooksForEntity=!0,n.errorMessage=""},o[i.h6.rejected.type]=function(n,t){n.loadingUpdateAddressBooksForEntity=!1,n.errorMessage=t.payload},o)}),c=s.actions.clearAddressBooksInfo;t.Z=s.reducer},4970:function(n,t,e){e.d(t,{Z:function(){return u},z:function(){return c}});var o=e(5552),r=e(7868),i=e(970),a=function(n,t,e,o){return new(e||(e=Promise))((function(r,i){function a(n){try{c(o.next(n))}catch(n){i(n)}}function s(n){try{c(o.throw(n))}catch(n){i(n)}}function c(n){var t;n.done?r(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,s)}c((o=o.apply(n,t||[])).next())}))},s=function(n,t){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(e)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(e=1,o&&(r=2&s[0]?o.return:s[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,s[1])).done)return r;switch(o=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,o=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){a.label=s[1];break}if(6===s[0]&&a.label<r[1]){a.label=r[1],r=s;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(s);break}r[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(n,a)}catch(n){s=[6,n],o=0}finally{e=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},c=(0,o.createAsyncThunk)("apps/getTokenInfo",(function(n,t){return a(void 0,void 0,void 0,(function(){var n;return s(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),[4,(0,i.LP)()];case 1:return n=e.sent(),[4,fetch("".concat(r.x,"/tokens/getTokenInfo"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(n){return a(void 0,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,n.json()];case 1:return[2,t.sent()]}}))}))}))];case 2:return[2,e.sent()];case 3:return e.sent(),[2,t.rejectWithValue("Failure")];case 4:return[2]}}))}))})),u=(0,o.createAsyncThunk)("apps/addToken",(function(n,t){return a(void 0,void 0,void 0,(function(){var e;return s(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),[4,(0,i.LP)()];case 1:return e=o.sent(),[4,fetch("".concat(r.x,"/tokens/addToken"),{method:"POST",body:JSON.stringify(n),headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(n){return a(void 0,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,n.json()];case 1:return[2,t.sent()]}}))}))}))];case 2:return[2,o.sent()];case 3:return o.sent(),[2,t.rejectWithValue("Failure")];case 4:return[2]}}))}))}))},1307:function(n,t,e){e.d(t,{G:function(){return c}});var o,r=e(5552),i=e(4970),a={authInfo:{client_id:"",client_secret:"",status:!1,message:"",has_token:!1},errorMessage:"",loadingGetTokenInfo:!0,loadingAddToken:!1},s=(0,r.createSlice)({name:"auth",initialState:a,reducers:{clearAuthInfo:function(n){n.authInfo=a.authInfo}},extraReducers:(o={},o[i.z.fulfilled.type]=function(n,t){n.loadingGetTokenInfo=!1,n.errorMessage="",n.authInfo=t.payload},o[i.z.pending.type]=function(n){n.loadingGetTokenInfo=!0,n.errorMessage=""},o[i.z.rejected.type]=function(n,t){n.loadingGetTokenInfo=!1,n.errorMessage=t.payload},o[i.Z.fulfilled.type]=function(n,t){n.loadingAddToken=!1,n.errorMessage="",n.authInfo=t.payload},o[i.Z.pending.type]=function(n){n.loadingAddToken=!0,n.errorMessage=""},o[i.Z.rejected.type]=function(n,t){n.loadingAddToken=!1,n.errorMessage=t.payload},o)}),c=s.actions.clearAuthInfo;t.Z=s.reducer}}]);
//# sourceMappingURL=345.e26ff591.chunk.js.map