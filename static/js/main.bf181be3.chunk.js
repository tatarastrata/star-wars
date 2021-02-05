(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],{46:function(e,t,n){},47:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(15),s=n.n(a),i=(n(46),n(25)),o=n(10),u=(n(47),n(55)),l=n(56),j=n(5),h=n.n(j),d=(h.a.shape({director:h.a.string.isRequired,producer:h.a.string.isRequired,pening_crawl:h.a.string.isRequired,episode_id:h.a.number.isRequired}),h.a.shape({model:h.a.string.isRequired,manufacturer:h.a.string.isRequired,url:h.a.string.isRequired}),h.a.shape({url:h.a.string.isRequired,name:h.a.string.isRequired,terrain:h.a.string.isRequired,climate:h.a.string.isRequired}),n(39)),b=n(59),O=n(60),p=n(3),f=function(e){var t=e.movie,n=e.handleShow;return Object(p.jsx)(d.a,{children:Object(p.jsx)(b.a,{style:{width:"25rem",marginBottom:"25px"},className:"MoviesList__item",children:Object(p.jsxs)(b.a.Body,{children:[Object(p.jsx)(b.a.Title,{children:t.title}),Object(p.jsx)(b.a.Text,{children:t.opening_crawl}),Object(p.jsx)(O.a,{onClick:function(){return n(t)},variant:"primary",children:"Learn more"})]})},t.created)})},m=function(e){var t=e.handleShow,n=e.movies;return Object(p.jsx)(u.a,{fluid:!0,className:"MoviesList",children:Object(p.jsx)(l.a,{children:n.map((function(e){return Object(p.jsx)(f,{movie:e,handleShow:t},e.episode_id)}))})})},v=n(36),x=n(57),g=n(58),w=n(40),S=n.p+"static/media/Star_Wars_Logo.dba53346.svg",y=function(e){var t,n=e.value,r=e.onChange;return Object(p.jsxs)(x.a,{bg:"light",expand:"lg",style:{marginBottom:"24px",display:"flexbox",justifyContent:"space-around"},children:[Object(p.jsx)(g.a,{inline:!0,children:Object(p.jsx)(w.a,(t={type:"text",value:n,placeholder:"Search a movie...",onChange:r},Object(v.a)(t,"placeholder","Search"),Object(v.a)(t,"className","mr-sm-2"),t))}),Object(p.jsx)("img",{src:S,width:"100px"})]})};y.defaultProps={value:""};var _=function(){return e="films/",fetch("".concat("https://swapi.dev/api/").concat(e),t).then((function(e){if(!e.ok)throw new Error("no response");return e.json()})).then((function(e){return e.results}));var e,t},M=(n(38),n(26)),C=n.n(M),N=n(37),k=n(21),q=function(e){var t=e.starships;return Object(p.jsx)("ul",{style:{color:"black"},children:t.map((function(e){return Object(p.jsxs)("li",{children:[e.model," by ",e.manufacturer]},e.url)}))})},P=function(e){var t=e.planets;return Object(p.jsx)("ul",{style:{color:"black"},children:t.map((function(e){return Object(p.jsxs)("li",{children:["Planet ",e.name,Object(p.jsx)("br",{}),e.terrain," terrain; ",e.climate," climate"]},e.url)}))})},R=function(e){var t=e.show,n=e.movie,c=e.handleClose,a=Object(r.useState)([]),s=Object(o.a)(a,2),u=s[0],l=s[1],j=Object(r.useState)([]),h=Object(o.a)(j,2),d=h[0],b=h[1],f=Object(r.useState)(!1),m=Object(o.a)(f,2),v=m[0],x=m[1],g=Object(r.useState)(!1),w=Object(o.a)(g,2),S=w[0],y=w[1],_=Object(r.useState)(!1),M=Object(o.a)(_,2),R=M[0],D=M[1],L=Object(r.useState)(!1),B=Object(o.a)(L,2),T=B[0],E=B[1],A=function(){var e=Object(N.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.starships.map((function(e){return e.replace("http","https")})),Promise.all(t.map((function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){return l((function(t){return[].concat(Object(i.a)(t),[e])}))}))})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(N.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.planets.map((function(e){return e.replace("http","https")})),Promise.all(t.map((function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){return b((function(t){return[].concat(Object(i.a)(t),[e])}))}))})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){x((function(e){return!e}))},J=function(){y((function(e){return!e}))},I=function(e){switch(e.preventDefault(),e.target.className){case"Starships":return D(!0),R;case"Planets":return E(!0),T;default:return D(!1),void E(!1)}},W=function(e){switch(e.preventDefault(),e.target.className){case"Starships":return D(!1),R;case"Planets":return E(!1),T;default:return D(!1),void E(!1)}};return Object(r.useEffect)((function(){A(),F()}),[n.episode_id]),Object(p.jsxs)(k.a,{show:t,className:"MovieDetails",onHide:c,children:[Object(p.jsx)(k.a.Header,{closeButton:!0,className:"MovieDetails__header",children:Object(p.jsx)(k.a.Title,{className:"title",children:n.title})}),Object(p.jsxs)(k.a.Body,{className:"MovieDetails__body",children:[Object(p.jsxs)("div",{className:"MovieDetails__creators",children:[Object(p.jsx)("h6",{children:"Director:"}),Object(p.jsx)("p",{children:n.director}),Object(p.jsx)("h6",{children:"Producers: "}),Object(p.jsx)("p",{children:n.producer})]}),Object(p.jsxs)("div",{className:"MovieDetails__plot",children:[Object(p.jsx)("h6",{children:"Opening Crawl:"}),Object(p.jsx)("p",{children:n.opening_crawl})]}),Object(p.jsxs)("ul",{className:"MovieDetails__list",children:[R?Object(p.jsxs)("li",{style:{color:"blue",cursor:"pointer"},className:"Starships",onClick:J,onMouseOver:function(e){return I(e)},onMouseLeave:function(e){return W(e)},children:["Starships",S&&Object(p.jsx)(q,{starships:u})]}):Object(p.jsxs)("li",{style:{color:"black"},className:"Starships",onClick:J,onMouseOver:function(e){return I(e)},onMouseLeave:function(e){return W(e)},children:["Starships",S&&Object(p.jsx)(q,{starships:u})]}),T?Object(p.jsxs)("li",{style:{color:"blue",cursor:"pointer"},className:"Planets",onClick:H,onMouseOver:function(e){return I(e)},onMouseLeave:function(e){return W(e)},children:["Planets",v&&Object(p.jsx)(P,{planets:d})]}):Object(p.jsxs)("li",{className:"Planets",onClick:H,onMouseOver:function(e){return I(e)},onMouseLeave:function(e){return W(e)},children:["Planets",v&&Object(p.jsx)(P,{planets:d})]})]})]}),Object(p.jsx)(k.a.Footer,{children:Object(p.jsx)(O.a,{variant:"secondary",onClick:c,children:"Close"})})]})};var D=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(o.a)(a,2),l=s[0],j=s[1],h=Object(r.useState)(""),d=Object(o.a)(h,2),b=d[0],O=d[1],f=Object(r.useState)(!1),v=Object(o.a)(f,2),x=v[0],g=v[1],w=Object(r.useState)({}),S=Object(o.a)(w,2),M=S[0],C=S[1];Object(r.useEffect)((function(){_().then((function(e){c(e)}))}),[]);var N=Object(r.useMemo)((function(){return b?n.filter((function(e){return e.title.includes(b)||e.opening_crawl.includes(b)})).sort((function(e,t){return e.title.localeCompare(t.title)})):Object(i.a)(n).sort((function(e,t){return e.title.localeCompare(t.title)}))}),[b,n]),k=Object(r.useCallback)(function(e,t){var n;return function(){clearTimeout(n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];n=setTimeout.apply(void 0,[e,t].concat(c))}}(O,1e3),[]);return Object(p.jsxs)(p.Fragment,{children:[x&&Object(p.jsx)(R,{show:x,handleClose:function(){C({}),g(!1)},movie:M}),Object(p.jsx)("header",{children:Object(p.jsx)(y,{value:l,onChange:function(e){j(e.target.value),k(e.target.value)}})}),Object(p.jsx)(u.a,{className:"App",children:Object(p.jsx)("main",{children:Object(p.jsx)(m,{handleShow:function(e){C(e),g(!0)},movies:N})})})]})};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.bf181be3.chunk.js.map