(this["webpackJsonpSearch-Github-User"]=this["webpackJsonpSearch-Github-User"]||[]).push([[0],{112:function(e,t,s){},113:function(e,t,s){"use strict";s.r(t);var n=s(2),a=s(0),c=s.n(a),i=s(10),r=s.n(i),o=(s(88),s(25)),l=s(26),j=s(29),u=s(28),m=s(148),d=s(151),f=s(152),x=s(117),b=s(74),h=s(154),O=s(147),p=s(68),N=s.n(p);function g(e){var t=Object(a.useState)(""),s=Object(b.a)(t,2),c=s[0],i=s[1];return Object(n.jsx)("form",{noValidate:!0,onSubmit:function(t){t.preventDefault(),e.submitAction(c)},className:"form-search",children:Object(n.jsx)(h.a,{id:"outlined-basic",color:"secondary",label:"Search",variant:"outlined",fullWidth:!0,value:c,placeholder:"Enter GitHub User",onChange:function(e){i(e.target.value)},size:"small",InputProps:{startAdornment:Object(n.jsx)(O.a,{position:"start",children:Object(n.jsx)(N.a,{})})}})})}var v=s(39),S=s.n(v),y=s(69),R=s.n(y),k=s(70),w=s.n(k),U=s(48),C=s.n(U);function A(e){return Object(n.jsx)(m.a,{item:!0,xs:12,md:4,children:Object(n.jsx)("div",{className:"info-icon-box",children:Object(n.jsxs)("div",{className:"info-info",children:["Repos"===e.name?Object(n.jsx)(R.a,{className:"info-icon",fontSize:"large"}):"Followers"===e.name?Object(n.jsx)(C.a,{className:"info-icon",fontSize:"large"}):Object(n.jsx)(w.a,{className:"info-icon",fontSize:"large"}),Object(n.jsxs)("div",{className:"icon-text-box",children:[Object(n.jsx)(x.a,{className:"info-icon-number",children:e.currentUser}),Object(n.jsx)(x.a,{className:"info-icon-text",children:e.name})]})]})})})}var _=s(149);s(112);function z(e){return Object(n.jsx)(m.a,{item:!0,container:!0,xs:12,className:"userinfo-container",children:Object(n.jsxs)(m.a,{item:!0,xs:12,container:!0,className:"userinfo-box",children:[Object(n.jsx)(m.a,{item:!0,xs:12,className:"userinfo-upper",children:Object(n.jsx)(x.a,{className:"userinfo-upper-text",children:"User Info"})}),Object(n.jsxs)(m.a,{item:!0,xs:12,container:!0,className:"userinfo-bottom",children:[Object(n.jsxs)(m.a,{item:!0,xs:12,container:!0,className:"userinfo-info",children:[Object(n.jsxs)(m.a,{item:!0,xs:12,sm:6,className:"userinfo-info-top",children:[Object(n.jsx)("img",{src:e.avatar,className:"userinfo-avatar",alt:e.name}),Object(n.jsxs)("div",{className:"userinfo-info-texts",children:[Object(n.jsx)(x.a,{className:"userinfo-info-name",children:e.name}),Object(n.jsxs)(x.a,{className:"userinfo-info-id",children:["@",e.username]})]})]}),Object(n.jsx)(m.a,{item:!0,xs:12,sm:6,className:"userinfo-info-bottom",children:Object(n.jsx)(_.a,{className:"userinfo-info-button",variant:"contained",color:"primary",href:e.url,target:"_blank",startIcon:Object(n.jsx)(C.a,{}),children:"Follow"})})]}),Object(n.jsx)(m.a,{item:!0,xs:12,className:"userinfo-desc",children:Object(n.jsx)(x.a,{children:e.desc})})]})]})})}var I=s(71),M=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"getColor",value:function(){for(var e="#"+Math.floor(16777215*Math.random()).toString(16);e.length<=6;)e="#"+Math.floor(16777215*Math.random()).toString(16);return e}},{key:"render",value:function(){var e,t=this;return Object(n.jsx)("div",{className:"piechart-container",children:Object(n.jsx)(I.PieChart,{className:"piechart",labelPosition:"60",labelStyle:{fontSize:"5px",fontWeight:"500"},lengthAngle:360,lineWidth:15,paddingAngle:0,radius:50,rounded:!0,startAngle:270,viewBoxSize:[100,100],label:function(e){var t=e.dataEntry;return"".concat(t.title,", ").concat(Math.round(t.percentage),"%")},animate:!0,animationDuration:1e3,animationEasing:"ease-out",data:null===(e=this.props)||void 0===e?void 0:e.languages.map((function(e,s){return{key:s,title:e[0],value:e[1],color:t.getColor()}}))})})}}]),s}(a.Component),T=s(150),B=s(72),E=s.n(B);function F(e){return Object(n.jsx)(m.a,{container:!0,item:!0,xs:12,children:Object(n.jsxs)(m.a,{item:!0,xs:12,container:!0,children:[Object(n.jsx)(m.a,{item:!0,xs:12,className:"userinfo-upper",children:Object(n.jsx)(x.a,{className:"userinfo-upper-text",children:"User Repositories"})}),Object(n.jsxs)(m.a,{item:!0,xs:12,container:!0,className:"userinfo-bottom repodisplay",children:[Object(n.jsx)(m.a,{item:!0,xs:12,className:"repoinfo-desc",children:"Click on a repo to see it's stats"}),Object(n.jsx)(m.a,{item:!0,xs:12,container:!0,className:"repo-info",children:e.repos.map((function(t,s){return Object(n.jsxs)(m.a,{item:!0,xs:4,sm:3,className:"repo-info-top",children:[Object(n.jsx)(T.a,{onClick:function(){return e.stats(t)},children:Object(n.jsx)(E.a,{className:"repo-info-icon",fontSize:"large",color:"secondary"})}),Object(n.jsx)(x.a,{className:"repo-info-text",children:t.name})]},s)}))})]})]})})}var G=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e,t,s,a,c;return Object(n.jsx)(m.a,{item:!0,container:!0,xs:12,className:"userinfo-container ",children:Object(n.jsxs)(m.a,{item:!0,xs:12,container:!0,className:"userinfo-box ",children:[Object(n.jsx)(m.a,{item:!0,xs:12,className:"userinfo-upper",children:Object(n.jsx)(x.a,{className:"userinfo-upper-text",children:"Repo Info"})}),Object(n.jsxs)(m.a,{item:!0,xs:12,container:!0,className:"userinfo-bottom",children:[Object(n.jsxs)(m.a,{item:!0,xs:12,container:!0,className:"userinfo-info",children:[Object(n.jsx)(m.a,{item:!0,xs:6,className:"userinfo-info-top",children:Object(n.jsxs)("div",{className:"userinfo-info-texts",children:[Object(n.jsx)(x.a,{className:"userinfo-info-id",children:"Repository Name"}),Object(n.jsx)(x.a,{className:"repoinfotext",children:null===(e=this.props.currentRepo)||void 0===e?void 0:e.name})]})}),Object(n.jsx)(m.a,{item:!0,xs:6,className:"userinfo-info-bottom linkxd",children:Object(n.jsxs)("div",{className:"userinfo-info-texts",children:[Object(n.jsx)(x.a,{className:"userinfo-info-id",children:"Total commits made"}),Object(n.jsx)(x.a,{className:" repoinfotext",children:null===(t=this.props)||void 0===t?void 0:t.commits})]})})]}),Object(n.jsxs)(m.a,{item:!0,xs:12,container:!0,className:"userinfo-info",children:[Object(n.jsx)(m.a,{item:!0,xs:6,className:"userinfo-info-top",children:Object(n.jsxs)("div",{className:"userinfo-info-texts",children:[Object(n.jsx)(x.a,{className:"userinfo-info-id",children:"Creation Date"}),Object(n.jsx)(x.a,{className:"userinfo-info-name repoinfotext",children:null===(s=this.props.currentRepo.created_at)||void 0===s?void 0:s.substring(0,10)})]})}),Object(n.jsx)(m.a,{item:!0,xs:6,className:"userinfo-info-bottom linkxd",children:Object(n.jsxs)("div",{className:"userinfo-info-texts",children:[Object(n.jsx)(x.a,{className:"userinfo-info-id",children:"Owner"}),Object(n.jsx)(x.a,{className:"repoinfotext",children:Object(n.jsx)("a",{target:"_blank",href:null===(a=this.props.currentRepo.owner)||void 0===a?void 0:a.html_url,children:null===(c=this.props.currentRepo.owner)||void 0===c?void 0:c.login})})]})})]})]})]})})}}]),s}(a.Component),D=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={currentUser:{},found:!1,userRepos:[],languages:[],commits:0,currentRepo:{}},e.getRepos=function(t){S.a.get("https://api.github.com/users/".concat(t,"/repos")).then((function(t){e.setState({userRepos:t.data})})).catch((function(e){console.log("Could not find it")}))},e.statstwo=function(t){S.a.get("".concat(t.url,"/commits")).then((function(s){e.setState({commits:s.data.length,currentRepo:t})})).catch((function(e){console.log("could not find")}))},e.stats=function(t){S.a.get("".concat(t.languages_url)).then((function(t){e.setState({languages:Object.entries(t.data)})})).catch((function(e){console.log("could not find")})),e.statstwo(t)},e.submitAction=function(t){e.setState({found:!1,languages:[]}),S.a.get("https://api.github.com/users/".concat(t)).then((function(t){e.setState({currentUser:t.data,found:!0})})).catch((function(t){console.log("Could not find"),e.setState({found:!1})})),e.getRepos(t)},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this.state.currentUser;return Object(n.jsx)("div",{children:Object(n.jsxs)(m.a,{container:!0,className:"lol",children:[Object(n.jsx)(m.a,{item:!0,xs:12,className:"searchBarTop",children:Object(n.jsx)(d.a,{color:"primary",position:"static",children:Object(n.jsx)(f.a,{className:"topTitleBar",children:Object(n.jsx)(x.a,{variant:"h6",children:"Search Github User"})})})}),Object(n.jsxs)(m.a,{item:!0,xs:12,container:!0,className:"rest",children:[Object(n.jsx)(m.a,{item:!0,md:2}),Object(n.jsxs)(m.a,{item:!0,xs:12,sm:8,spacing:2,container:!0,className:"issue",children:[Object(n.jsx)(m.a,{item:!0,className:"SearchContainer",xs:12,children:Object(n.jsx)(g,{submitAction:this.submitAction})}),this.state.found&&Object(n.jsxs)("div",{className:"no",children:[Object(n.jsxs)(m.a,{item:!0,container:!0,xs:12,className:"info-box-box",children:[Object(n.jsx)(A,{currentUser:e.public_repos,name:"Repos"}),Object(n.jsx)(A,{currentUser:e.following,name:"Following"}),Object(n.jsx)(A,{currentUser:e.followers,name:"Followers"})]}),Object(n.jsx)(z,{avatar:e.avatar_url,name:e.name,url:e.html_url,username:e.login,desc:e.bio}),Object(n.jsx)(m.a,{item:!0,container:!0,xs:12,children:Object(n.jsx)(F,{repos:this.state.userRepos,stats:this.stats})}),0!==this.state.languages.length&&Object(n.jsxs)(m.a,{item:!0,container:!0,xs:12,spacing:2,children:[Object(n.jsxs)(m.a,{item:!0,xs:12,md:6,className:"nono",children:[Object(n.jsx)(x.a,{variant:"h5",className:"userinfo-upper-text",children:"Languages Used"}),Object(n.jsx)(M,{languages:this.state.languages})]}),Object(n.jsx)(m.a,{item:!0,xs:12,md:6,className:"nono xtc",children:Object(n.jsx)(G,{commits:this.state.commits,currentRepo:this.state.currentRepo})})]})]})]}),Object(n.jsx)(m.a,{item:!0,md:2})]})]})})}}]),s}(c.a.Component),P=s(73),W=Object(P.a)({palette:{primary:{light:"#484848",main:"#212121",dark:"#000000",contrastText:"#ffffff"},secondary:{light:"#ff79ff",main:"#e040fb",dark:"#aa00c7",contrastText:"#ffffff"}}}),J=s(153);r.a.render(Object(n.jsx)(J.a,{theme:W,children:Object(n.jsx)(D,{className:"App"})}),document.getElementById("root"))},88:function(e,t,s){}},[[113,1,2]]]);
//# sourceMappingURL=main.917ec78f.chunk.js.map