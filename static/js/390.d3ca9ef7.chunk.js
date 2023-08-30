"use strict";(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[390],{3390:function(d,s,e){e.r(s);var o=e(5893),i=e(745),l=e(2084),n=e(1508),t=e(2747),a=e(970),Z=e(6243),r=e(9332),m=e(4813),c=e(2188),u=e(5552),b=e(6807),I=e(1307),G=(0,u.combineReducers)({auth:I.Z,addressBook:b.Z}),k=(0,u.configureStore)({reducer:G,middleware:function(d){return d()}}),y=document.getElementById("root");(0,i.s)(y).render((0,o.jsx)(l.Provider,{store:k,children:(0,o.jsx)((function(){var d=(0,Z.a)().getTokenInfo,s=(0,Z.q)(),e=s.loadingGetTokenInfo,i=s.authInfo;return(0,t.useEffect)((function(){(0,a.o4)("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXV0aC1zZXJ2aWNlL2ludGVybmFsL2F1dGgvdjEvcmVmcmVzaF90b2tlbiIsImlhdCI6MTY5MjAxNzg2NywiZXhwIjoxNjkyOTY4MDQ2LCJuYmYiOjE2OTI5NjQ0NDYsImp0aSI6InFGTmZ6VWZ0blhnRldHamgiLCJpZCI6MTM1NiwiZW1haWwiOiJlYmlyeXVrb2ZmQGdtYWlsLmNvbSIsInN1YiI6IjEzNTYiLCJhdXRoVXNlcklkIjo3MjksImZpcnN0TmFtZSI6IkV2Z2VuaXkiLCJsYXN0TmFtZSI6IkJpcnl1a29mZiIsIndvcmtzcGFjZUlkIjoic3RhZ2UzIiwiZG9tYWluIjoic3RhZ2UzLnN0YWdpbmcudXNwYWN5LnRlY2giLCJyb2xlcyI6WyJBRE1JTiJdLCJkZXBhcnRtZW50cyI6WzFdLCJwZXJtaXNzaW9ucyI6eyJjcmVhdGUiOlsiY3JtLmxlYWRzLmNyZWF0ZS5hbGxvd2VkIiwiY3JtLmNvbnRhY3RzLmNyZWF0ZS5hbGxvd2VkIiwiY3JtLmNvbXBhbmllcy5jcmVhdGUuYWxsb3dlZCIsImNybS5kZWFscy5jcmVhdGUuYWxsb3dlZCIsImNybS5pbnZvaWNlLmNyZWF0ZS5hbGxvd2VkIiwiY3JtLnByb2R1Y3QuY3JlYXRlLmFsbG93ZWQiLCJjcm0uYWN0aXZpdHkuY3JlYXRlLmFsbG93ZWQiLCJocm0uaGlyaW5nLmNyZWF0ZS5hbGxvd2VkIiwiaHJtLmNhbmRpZGF0ZS5jcmVhdGUuYWxsb3dlZCIsImhybS5kZXBhcnRtZW50LmNyZWF0ZS5hbGxvd2VkIiwiaHJtLmVtcGxveWVlLmNyZWF0ZS5hbGxvd2VkIiwidGFza3MudGFzay5jcmVhdGUuYWxsb3dlZCIsInRhc2tzLmJvYXJkLmNyZWF0ZS5hbGxvd2VkIiwidGFza3MudGVtcGxhdGUuY3JlYXRlLmFsbG93ZWQiXSwidmlldyI6WyJjcm0ubGVhZHMudmlldy5hbGxvd2VkIiwiY3JtLmNvbnRhY3RzLnZpZXcuYWxsb3dlZCIsImNybS5jb21wYW5pZXMudmlldy5hbGxvd2VkIiwiY3JtLmRlYWxzLnZpZXcuYWxsb3dlZCIsImNybS5pbnZvaWNlLnZpZXcuYWxsb3dlZCIsImNybS5wcm9kdWN0LnZpZXcuYWxsb3dlZCIsImNybS5hY3Rpdml0eS52aWV3LmFsbG93ZWQiLCJocm0uaGlyaW5nLnZpZXcuYWxsb3dlZCIsImhybS5jYW5kaWRhdGUudmlldy5hbGxvd2VkIiwiaHJtLmRlcGFydG1lbnQudmlldy5hbGxvd2VkIiwiaHJtLmVtcGxveWVlLnZpZXcuYWxsb3dlZCIsInRhc2tzLnRhc2sudmlldy5hbGxvd2VkIiwidGFza3MuYm9hcmQudmlldy5hbGxvd2VkIiwidGFza3MudGVtcGxhdGUudmlldy5hbGxvd2VkIl0sImVkaXQiOlsiY3JtLmxlYWRzLmVkaXQuYWxsb3dlZCIsImNybS5jb250YWN0cy5lZGl0LmFsbG93ZWQiLCJjcm0uY29tcGFuaWVzLmVkaXQuYWxsb3dlZCIsImNybS5kZWFscy5lZGl0LmFsbG93ZWQiLCJjcm0uaW52b2ljZS5lZGl0LmFsbG93ZWQiLCJjcm0ucHJvZHVjdC5lZGl0LmFsbG93ZWQiLCJjcm0uYWN0aXZpdHkuZWRpdC5hbGxvd2VkIiwiaHJtLmhpcmluZy5lZGl0LmFsbG93ZWQiLCJocm0uY2FuZGlkYXRlLmVkaXQuYWxsb3dlZCIsImhybS5kZXBhcnRtZW50LmVkaXQuYWxsb3dlZCIsImhybS5lbXBsb3llZS5lZGl0LmFsbG93ZWQiLCJ0YXNrcy50YXNrLmVkaXQuYWxsb3dlZCIsInRhc2tzLmJvYXJkLmVkaXQuYWxsb3dlZCIsInRhc2tzLnRlbXBsYXRlLmVkaXQuYWxsb3dlZCIsIm5ld3NfZmVlZC5uZXdzLmVkaXQuYWxsb3dlZCJdLCJkZWxldGUiOlsiY3JtLmxlYWRzLmRlbGV0ZS5hbGxvd2VkIiwiY3JtLmNvbnRhY3RzLmRlbGV0ZS5hbGxvd2VkIiwiY3JtLmNvbXBhbmllcy5kZWxldGUuYWxsb3dlZCIsImNybS5kZWFscy5kZWxldGUuYWxsb3dlZCIsImNybS5pbnZvaWNlLmRlbGV0ZS5hbGxvd2VkIiwiY3JtLnByb2R1Y3QuZGVsZXRlLmFsbG93ZWQiLCJjcm0uYWN0aXZpdHkuZGVsZXRlLmFsbG93ZWQiLCJocm0uaGlyaW5nLmRlbGV0ZS5hbGxvd2VkIiwiaHJtLmNhbmRpZGF0ZS5kZWxldGUuYWxsb3dlZCIsImhybS5kZXBhcnRtZW50LmRlbGV0ZS5hbGxvd2VkIiwiaHJtLmVtcGxveWVlLmRlbGV0ZS5hbGxvd2VkIiwidGFza3MudGFzay5kZWxldGUuYWxsb3dlZCIsInRhc2tzLmJvYXJkLmRlbGV0ZS5hbGxvd2VkIiwidGFza3MudGVtcGxhdGUuZGVsZXRlLmFsbG93ZWQiLCJuZXdzX2ZlZWQubmV3cy5kZWxldGUuYWxsb3dlZCJdfSwidGFyaWZmSWQiOjN9.KI-hu-RTmUiHaI7Dd9i70T39XSBK45r_mksNbLZEtvs"),d()}),[]),e?(0,o.jsx)(n.Z,{sx:{height:"500px"},children:(0,o.jsx)(c.Z,{size:100})}):i.has_token?(0,o.jsx)(r.Z,{}):(0,o.jsx)(m.Z,{})}),{})}))},6807:function(d,s,e){e.d(s,{g:function(){return a}});var o,i=e(5552),l=e(6508),n={addressBooks:[],addressBooksForEntity:{entities:{}},errorMessage:"",loadingAddressBooks:!0,loadingAddressBooksForEntity:!0,loadingUpdateAddressBooksForEntity:!1},t=(0,i.createSlice)({name:"addressBook",initialState:n,reducers:{clearAddressBooksInfo:function(d){d.addressBooks=n.addressBooks,d.addressBooksForEntity=n.addressBooksForEntity}},extraReducers:(o={},o[l.$k.fulfilled.type]=function(d,s){d.loadingAddressBooks=!1,d.errorMessage="",d.addressBooks=s.payload},o[l.$k.pending.type]=function(d){d.loadingAddressBooks=!0,d.errorMessage=""},o[l.$k.rejected.type]=function(d,s){d.loadingAddressBooks=!1,d.errorMessage=s.payload},o[l.sb.fulfilled.type]=function(d,s){d.loadingAddressBooksForEntity=!1,d.errorMessage="",d.addressBooksForEntity=s.payload},o[l.sb.pending.type]=function(d){d.loadingAddressBooksForEntity=!0,d.errorMessage=""},o[l.sb.rejected.type]=function(d,s){d.loadingAddressBooksForEntity=!1,d.errorMessage=s.payload},o[l.h6.fulfilled.type]=function(d,s){d.loadingUpdateAddressBooksForEntity=!1,d.errorMessage="",d.addressBooksForEntity=s.payload},o[l.h6.pending.type]=function(d){d.loadingUpdateAddressBooksForEntity=!0,d.errorMessage=""},o[l.h6.rejected.type]=function(d,s){d.loadingUpdateAddressBooksForEntity=!1,d.errorMessage=s.payload},o)}),a=t.actions.clearAddressBooksInfo;s.Z=t.reducer},1307:function(d,s,e){e.d(s,{G:function(){return a}});var o,i=e(5552),l=e(4970),n={authInfo:{client_id:"",client_secret:"",status:!1,message:"",has_token:!1},errorMessage:"",loadingGetTokenInfo:!0,loadingAddToken:!1},t=(0,i.createSlice)({name:"auth",initialState:n,reducers:{clearAuthInfo:function(d){d.authInfo=n.authInfo}},extraReducers:(o={},o[l.z.fulfilled.type]=function(d,s){d.loadingGetTokenInfo=!1,d.errorMessage="",d.authInfo=s.payload},o[l.z.pending.type]=function(d){d.loadingGetTokenInfo=!0,d.errorMessage=""},o[l.z.rejected.type]=function(d,s){d.loadingGetTokenInfo=!1,d.errorMessage=s.payload},o[l.Z.fulfilled.type]=function(d,s){d.loadingAddToken=!1,d.errorMessage="",d.authInfo=s.payload},o[l.Z.pending.type]=function(d){d.loadingAddToken=!0,d.errorMessage=""},o[l.Z.rejected.type]=function(d,s){d.loadingAddToken=!1,d.errorMessage=s.payload},o)}),a=t.actions.clearAuthInfo;s.Z=t.reducer},745:function(d,s,e){var o=e(56);s.s=o.createRoot,o.hydrateRoot}}]);
//# sourceMappingURL=390.d3ca9ef7.chunk.js.map