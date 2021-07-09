(this["webpackJsonpcapture-portfolio"]=this["webpackJsonpcapture-portfolio"]||[]).push([[0],{41:function(n,e,t){"use strict";t.r(e);var i,r,a,c,s,o,d,l,h,m,b,j,p,u,x,f,O,g,v,w,y,k,I,z,N,C,L,A,S,T,q,D=t(0),E=t(21),F=t.n(E),M=t(5),W=t(4),B=t(2),G=t(6),H=t(3),J=t(8),P=t(1),Q=H.b.div(i||(i=Object(B.a)(['\n  background-color: #282828;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30rem;\n  z-index: 20;\n  transform: translatex(-120vw);\n  transition: transform 0.5s ease;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);\n  .side-header {\n    display: flex;\n    justify-content: space-between;\n    padding: 2rem;\n    #logo {\n      color: #fff;\n      font-size: 1.5rem;\n      font-family: "Lobster", cursive;\n      font-weight: lighter;\n    }\n    .close-btn {\n      cursor: pointer;\n      border-radius: 0.5rem;\n      padding: 1rem 0.5rem;\n      border: 0.1rem solid #fff;\n      width: 3.2rem;\n      div {\n        background-color: #fff;\n        width: 2rem;\n        height: 0.2rem;\n        &:first-child {\n          transform: rotate(45deg);\n        }\n        &:last-child {\n          transform: rotate(-45deg);\n          position: relative;\n          top: -0.2rem;\n        }\n      }\n    }\n  }\n  ul {\n    display: flex;\n    flex-direction: column;\n    list-style: none;\n    li {\n      padding-top: 1rem;\n      padding-left: 2rem;\n      position: relative;\n      font-size: 2rem;\n      a {\n        color: #fff;\n        text-decoration: none;\n      }\n    }\n  }\n  @media (max-width: 575px) {\n    width: 100vw;\n  }\n']))),R=Object(H.b)(W.c.div)(r||(r=Object(B.a)(["\n  height: 0.3rem;\n  background-color: #23d997;\n  width: 0%;\n  position: absolute;\n  bottom: -10%;\n  left: 5%;\n  @media (max-width: 900px) {\n    left: 2%;\n  }\n"]))),U=function(n){var e=n.isOpen,t=n.setIsOpen,i=Object(M.g)().pathname,r=function(){setTimeout((function(){t(!1)}),600)};return Object(P.jsxs)(Q,{style:{transform:"translateX(".concat(e?"0vw":"-120vw",")")},children:[Object(P.jsxs)("div",{className:"side-header",children:[Object(P.jsx)("h1",{id:"logo",children:"Capture"}),Object(P.jsxs)("div",{className:"close-btn",onClick:function(){return t(!1)},children:[Object(P.jsx)("div",{}),Object(P.jsx)("div",{})]})]}),Object(P.jsxs)("ul",{children:[Object(P.jsxs)("li",{children:[Object(P.jsx)(J.b,{onClick:r,to:"/",children:"1. About us"}),Object(P.jsx)(R,{transition:{duration:.75},initial:{width:"0%"},animate:{width:"/"===i?"50%":"0%"}})]}),Object(P.jsxs)("li",{children:[Object(P.jsx)(J.b,{onClick:r,to:"/work",children:"2. Our work"}),Object(P.jsx)(R,{transition:{duration:.75},initial:{width:"0%"},animate:{width:"/work"===i?"50%":"0%"}})]}),Object(P.jsxs)("li",{children:[Object(P.jsx)(J.b,{onClick:r,to:"/contact",children:"3. Contact us"}),Object(P.jsx)(R,{transition:{duration:.75},initial:{width:"0%"},animate:{width:"/contact"===i?"50%":"0%"}})]})]})]})},X=H.b.div(a||(a=Object(B.a)(["\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n"]))),Y=function(n){var e=n.setIsOpen;return Object(P.jsx)(X,{onClick:function(){return e(!1)}})},K=H.b.div(c||(c=Object(B.a)(['\n  position: sticky;\n  top: 0;\n  min-height: 10vh;\n  display: flex;\n  margin: auto;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 10rem;\n  background-color: #282828;\n  z-index: 10;\n  #logo {\n    font-size: 1.5rem;\n    font-family: "Lobster", cursive;\n    font-weight: lighter;\n  }\n  .toggle-btn {\n    border-radius: 0.3rem;\n    border: 0.1rem solid #fff;\n    padding: 0.4rem;\n    cursor: pointer;\n    div {\n      background-color: #fff;\n      width: 2rem;\n      height: 0.3rem;\n      &:not(:last-of-type) {\n        margin-bottom: 2px;\n      }\n    }\n  }\n  a {\n    color: #fff;\n    text-decoration: none;\n  }\n  @media (max-width: 900px) {\n    padding: 1rem 2rem;\n  }\n']))),V=function(){var n=Object(D.useState)(!1),e=Object(G.a)(n,2),t=e[0],i=e[1];return Object(P.jsxs)(K,{children:[Object(P.jsxs)("div",{className:"toggle-btn",onClick:function(){return i(!0)},children:[Object(P.jsx)("div",{}),Object(P.jsx)("div",{}),Object(P.jsx)("div",{})]}),Object(P.jsx)("h1",{children:Object(P.jsx)(J.b,{id:"logo",to:"/",children:"Capture"})}),t&&Object(P.jsx)(Y,{setIsOpen:i}),Object(P.jsx)(U,{isOpen:t,setIsOpen:i})]})},Z=Object(H.a)(s||(s=Object(B.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n    * {\n        scrollbar-width: thin;\n        scrollbar-color: rgba(155, 155, 155, 0.5) transparent;\n    }\n    *::-webkit-scrollbar {\n        width: 10px;\n    }\n    *::-webkit-scrollbar-track {\n        background: #111;\n    }\n    *::-webkit-scrollbar-thumb {\n        background-color: rgba(155, 155, 155, 0.5);\n        border-radius: 20px;\n        border: transparent;\n    }\n    html {\n        @media (max-width: 1700px) {\n            font-size: 75%;\n        }\n        overflow-x: hidden;\n    }\n    body {\n        background: #1b1b1b;\n        font-family: 'Inter', sans-serif;\n        overflow-x: hidden;\n    }\n    button {\n        font-weight: bold;\n        font-size: 1rem;\n        cursor: pointer;\n        padding: 1rem 2rem;\n        border: 3px solid #23d997;\n        background: transparent;\n        color: #fff;\n        transition: all 0.5s ease;\n        font-family: 'Inter', sans-serif;\n        &:hover{\n            background-color: #23d997;\n            color: #fff;\n        }\n    }\n    h2 {\n        font-weight: lighter;\n        font-size: 3.4rem;\n    }\n    h3 {\n        color: #fff;\n    }\n    h4 {\n        font-weight: bold;\n        font-size: 2rem;\n    }\n    span {\n        font-weight: bold;\n        color: #23d997;\n    }\n    a {\n        font-size: 1.1.rem;\n    }\n    p {\n        padding: 3rem 0rem;\n        color: #ccc;\n        font-size: 1.3rem;\n        line-height: 150%;\n    }\n"]))),$=t.p+"static/media/home1.9836de69.png",_=Object(H.b)(W.c.div)(o||(o=Object(B.a)(["\n  min-height: 90vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5rem 10rem;\n  color: #fff;\n  @media (max-width: 1300px) {\n    display: block;\n    padding: 2rem 2rem;\n    text-align: center;\n  }\n"]))),nn=H.b.div(d||(d=Object(B.a)(["\n  flex: 1;\n  padding-right: 5rem;\n  z-index: 2;\n  h2 {\n    font-weight: lighter;\n  }\n  @media (max-width: 1300px) {\n    padding: 0;\n    button {\n      margin: 2rem 0rem 5rem 0rem;\n    }\n  }\n"]))),en=H.b.div(l||(l=Object(B.a)(["\n  flex: 1;\n  overflow: hidden;\n  z-index: 2;\n  img {\n    width: 100%;\n    height: 80vh;\n    object-fit: cover;\n  }\n"]))),tn=H.b.div(h||(h=Object(B.a)(["\n  overflow: hidden;\n"]))),rn={hidden:{opacity:0,y:300},show:{opacity:1,y:0,transition:{duration:.5,when:"beforeChildren",staggerChildren:.25}},exit:{opacity:0,transition:{duration:.5}}},an={hidden:{y:200},show:{y:0,transition:{duration:.75,ease:"easeOut"}}},cn={hidden:{opacity:0},show:{opacity:1,transition:{ease:"easeOut",duration:.75}}},sn={hidden:{scale:1.5,opacity:0,transition:{ease:"easeOut",duration:1}},show:{scale:1,opacity:1,transition:{ease:"easeOut",duration:1}}},on={hidden:{width:"0%",transition:{duration:1}},show:{width:"100%",transition:{duration:1}}},dn={hidden:{x:"-130%",skew:"45deg"},show:{x:"100%",skew:"0deg",transition:{ease:"easeOut",duration:1}}},ln={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.15,ease:"easeOut"}}},hn={hidden:{opacity:0,scale:1.2,transition:{duration:.5}},show:{opacity:1,scale:1,transition:{duration:.5}}},mn=H.b.svg(m||(m=Object(B.a)(["\n  position: absolute;\n  left: 0;\n  z-index: 1;\n"]))),bn=function(){return Object(P.jsx)(mn,{viewBox:"0 0 1440 363",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(P.jsx)(W.c.path,{initial:{pathLength:0,pathOffset:1},animate:{pathLength:1,pathOffset:0},transition:{duration:1},d:"M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5",stroke:"#D96ED4",strokeOpacity:"0.5",strokeWidth:"10"})})},jn=function(){return Object(P.jsxs)(_,{children:[Object(P.jsxs)(nn,{className:"description",children:[Object(P.jsxs)(W.c.div,{className:"title",children:[Object(P.jsx)(tn,{className:"hide",children:Object(P.jsx)(W.c.h2,{variants:an,children:"We Work To Make"})}),Object(P.jsx)(tn,{className:"hide",children:Object(P.jsxs)(W.c.h2,{variants:an,children:["your ",Object(P.jsx)("span",{children:"dreames"})," come"]})}),Object(P.jsx)(tn,{className:"hide",children:Object(P.jsx)(W.c.h2,{variants:an,children:"true."})})]}),Object(P.jsx)(W.c.p,{variants:cn,children:"Contact us for any photogrophy or videography ideas that you have. we have professionals with amazing skills."}),Object(P.jsx)(W.c.button,{variants:cn,children:"Contact us"})]}),Object(P.jsx)(en,{className:"image",children:Object(P.jsx)(W.c.img,{variants:sn,src:$,alt:"guy with a camera"})}),Object(P.jsx)(bn,{})]})},pn=function(n){return Object(P.jsxs)(W.c.div,{layout:!0,className:"question",onClick:n.click,children:[Object(P.jsx)(W.c.h4,{layout:!0,children:n.children}),n.faqInfo.open&&Object(P.jsxs)("div",{className:"answer",children:[Object(P.jsx)("p",{children:"Lorem ipsum dolor sit amet."}),Object(P.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, delectus!"}),Object(P.jsx)("div",{className:"faq-line"})]})]})},un=t(25),xn=function(){var n=Object(W.d)(),e=Object(un.a)({threshold:.4}),t=Object(G.a)(e,2),i=t[0];return t[1]?n.start("show"):n.start("hidden"),[i,n]},fn=Object(H.b)(_)(b||(b=Object(B.a)(["\n  display: block;\n  span {\n    display: block;\n  }\n  h2 {\n    padding-bottom: 2rem;\n    font-weight: lighter;\n  }\n  .question {\n    padding: 3rem 1rem;\n    margin-bottom: 1rem;\n    border-radius: 10px;\n    cursor: pointer;\n    background-color: #3b3b3b;\n    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);\n  }\n  .answer {\n    padding-top: 2rem;\n    p {\n      padding: 1rem 0rem;\n    }\n    .faq-line {\n      background: #ccc;\n      height: 0.2rem;\n      margin: 2rem 0rem;\n      width: 100%;\n    }\n  }\n"]))),On=function(){var n=Object(D.useState)([{title:"How Do I Start?",open:!1},{title:"Daily Schedule",open:!1},{title:"Diferrent Payment Methods",open:!1},{title:"What Products Do You Offer?",open:!1}]),e=Object(G.a)(n,2),t=e[0],i=e[1],r=xn(),a=Object(G.a)(r,2),c=a[0],s=a[1];return Object(P.jsx)(fn,{className:"faq",variants:hn,animate:s,initial:"hidden",ref:c,children:Object(P.jsxs)("h2",{children:["Any Questions ",Object(P.jsx)("span",{children:"FAQ"}),Object(P.jsx)(W.b,{children:t.map((function(n,e){return Object(P.jsx)(pn,{click:function(){return function(n){i(t.map((function(e,t){return e.open=t===n&&!e.open,e})))}(e)},faqInfo:n,children:n.title},e)}))})]})})},gn=t.p+"static/media/clock.4b7cde7e.svg",vn=t.p+"static/media/diaphragm.db801491.svg",wn=t.p+"static/media/money.72da7c48.svg",yn=t.p+"static/media/teamwork.aa71db2e.svg",kn=t.p+"static/media/home2.a65a4256.png",In=H.b.div(j||(j=Object(B.a)(["\n  //flex-basis: 20rem;\n  .icon {\n    display: flex;\n    align-items: center;\n    h3 {\n      margin-left: 1rem;\n      background: #fff;\n      color: #000;\n      padding: 1rem;\n    }\n  }\n"]))),zn=function(n){return Object(P.jsxs)(In,{className:"card",children:[Object(P.jsxs)("div",{className:"icon",children:[Object(P.jsx)("img",{src:n.src,alt:n.alt}),Object(P.jsx)("h3",{children:n.title})]}),Object(P.jsx)("p",{children:"Lorem ipsum dolor sit amet."})]})},Nn=Object(H.b)(_)(p||(p=Object(B.a)(["\n  h2 {\n    padding-bottom: 5rem;\n  }\n  p {\n    width: 70%;\n    padding: 2rem 0rem 4rem 0rem;\n  }\n"]))),Cn=H.b.div(u||(u=Object(B.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  @media (max-width: 1300px) {\n    justify-content: center;\n    z-index: 100;\n  }\n"]))),Ln=function(){var n=xn(),e=Object(G.a)(n,2),t=e[0],i=e[1],r=Object(D.useState)([{src:gn,title:"Efficient"},{src:yn,title:"Teamwork"},{src:vn,title:"Diaphragam"},{src:wn,title:"Affordable"}]),a=Object(G.a)(r,1)[0];return Object(P.jsxs)(Nn,{className:"services",variants:hn,ref:t,animate:i,initial:"hidden",children:[Object(P.jsxs)(nn,{className:"description",children:[Object(P.jsxs)("h2",{children:["High ",Object(P.jsx)("span",{children:"quality"})," services"]}),Object(P.jsx)(Cn,{className:"cards",children:a.map((function(n,e){return Object(P.jsx)(zn,{src:n.src,title:n.title,alt:"icon"},e)}))})]}),Object(P.jsx)(en,{className:"image",children:Object(P.jsx)(W.c.img,{src:kn,alt:"camera",variants:sn,ref:t,animate:i,initial:"hidden"})})]})},An=function(){var n=Object(M.g)().pathname;return Object(D.useEffect)((function(){window.scroll({top:0,left:0})}),[n]),null},Sn=function(){return Object(P.jsxs)(W.c.div,{exit:"exit",variants:rn,initial:"hidden",animate:"show",children:[Object(P.jsx)(jn,{}),Object(P.jsx)(Ln,{}),Object(P.jsx)(On,{}),Object(P.jsx)(An,{})]})},Tn=Object(H.b)(W.c.div)(x||(x=Object(B.a)(["\n  padding: 5rem 10rem;\n  color: #353535;\n  min-height: 90vh;\n  @media (max-width: 660px) {\n    padding: 2rem 2rem;\n  }\n"]))),qn=H.b.div(f||(f=Object(B.a)(["\n  margin-bottom: 4rem;\n  color: #000;\n  @media (max-width: 660px) {\n    margin-top: 5rem;\n  }\n"]))),Dn=H.b.div(O||(O=Object(B.a)(["\n  overflow: hidden;\n  h2 {\n    @media (max-width: 660px) {\n      font-size: 2rem;\n    }\n  }\n"]))),En=H.b.div(g||(g=Object(B.a)(["\n  border-radius: 50%;\n  width: 3rem;\n  height: 3rem;\n  background-color: #353535;\n  @media (max-width: 660px) {\n    width: 2rem;\n    height: 2rem;\n  }\n"]))),Fn=Object(H.b)(W.c.div)(v||(v=Object(B.a)(["\n  display: flex;\n  align-items: center;\n  h2 {\n    margin: 2rem;\n    @media (max-width: 660px) {\n      font-size: 2rem;\n    }\n  }\n"]))),Mn=function(){var n=Object(D.useState)([{title:"Send Us A Message"},{title:"Send An Email"},{title:"Social Media"}]),e=Object(G.a)(n,1)[0];return Object(P.jsxs)(Tn,{exit:"exit",variants:rn,initial:"hidden",animate:"show",style:{background:"#fff"},children:[Object(P.jsx)(qn,{children:Object(P.jsx)(Dn,{children:Object(P.jsx)(W.c.h2,{variants:an,children:"Get in touch"})})}),Object(P.jsx)("div",{children:e.map((function(n,e){return Object(P.jsx)(Dn,{children:Object(P.jsxs)(Fn,{variants:an,children:[Object(P.jsx)(En,{}),Object(P.jsx)("h2",{children:n.title})]})},e)}))})]})},Wn=t.p+"static/media/athlete-small.9c7a85d4.png",Bn=t.p+"static/media/goodtimes-small.94ab060d.png",Gn=t.p+"static/media/theracer-small.51874213.png",Hn=t.p+"static/media/athlete2.b216a5ad.png",Jn=t.p+"static/media/good-times2.4ea1be17.jpg",Pn=t.p+"static/media/the-racer2.580f15cd.jpg",Qn=function(){return[{title:"The Athlete",mainImg:Wn,secondaryImg:Hn,url:"/work/the-athlete",awards:[{title:"Truly A masterpiece",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"},{title:"Fresh look on a brutal sport.",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"},{title:"It\u2019s okay lmao.",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"}]},{title:"Good Times",mainImg:Bn,url:"/work/good-times",secondaryImg:Jn,awards:[{title:"Truly A masterpiece",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"},{title:"Fresh look on a brutal sport.",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"},{title:"It\u2019s okay lmao.",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"}]},{title:"The Racer",mainImg:Gn,url:"/work/the-racer",secondaryImg:Pn,awards:[{title:"Truly A masterpiece",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"},{title:"Fresh look on a brutal sport.",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"},{title:"It\u2019s okay lmao.",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"}]}]},Rn=H.b.div(w||(w=Object(B.a)(["\n  padding: 5rem;\n  h3 {\n    font-size: 1.3rem;\n  }\n  .line {\n    width: 100%;\n    background: #23d997;\n    height: 0.3rem;\n    margin: 1rem 0rem;\n  }\n  p {\n    padding: 2rem 0rem;\n    font-size: 1rem;\n  }\n"]))),Un=function(n){return Object(P.jsxs)(Rn,{children:[Object(P.jsx)("h3",{children:n.title}),Object(P.jsx)("div",{className:"line"}),Object(P.jsx)("p",{children:n.description})]})},Xn=Object(H.b)(W.c.div)(y||(y=Object(B.a)(["\n  color: #fff;\n"]))),Yn=H.b.div(k||(k=Object(B.a)(["\n  min-height: 90vh;\n  padding-top: 20vh;\n  position: relative;\n  h2 {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, -10%);\n    @media (max-width: 575px) {\n      font-size: 2.5rem;\n    }\n  }\n  img {\n    width: 100%;\n    height: 70vh;\n    object-fit: cover;\n  }\n"]))),Kn=H.b.div(I||(I=Object(B.a)(["\n  min-height: 80vh;\n  display: flex;\n  margin: 5rem 10rem;\n  align-items: center;\n  justify-content: space-around;\n  @media (max-width: 1500px) {\n    display: block;\n    margin: 2rem 2rem;\n  }\n"]))),Vn=H.b.div(z||(z=Object(B.a)(["\n  min-height: 50vh;\n  overflow: hidden;\n  img {\n    width: 100vw;\n    height: 100vh;\n    object-fit: cover;\n  }\n"]))),Zn=function(){var n=Object(D.useState)(Qn),e=Object(G.a)(n,1)[0],t=Object(D.useState)(null),i=Object(G.a)(t,2),r=i[0],a=i[1],c=Object(M.f)().location.pathname;return Object(D.useEffect)((function(){var n=e.filter((function(n){return n.url===c}));a(n[0])}),[e,c]),Object(P.jsx)(D.Fragment,{children:r&&Object(P.jsxs)(Xn,{exit:"exit",variants:rn,initial:"hidden",animate:"show",children:[Object(P.jsxs)(Yn,{children:[Object(P.jsx)("h2",{children:r.title}),Object(P.jsx)("img",{src:r.mainImg,alt:"movie"})]}),Object(P.jsx)(Kn,{children:r.awards.map((function(n,e){return Object(P.jsx)(Un,{title:n.title,description:n.description},e)}))}),Object(P.jsx)(Vn,{children:Object(P.jsx)("img",{src:r.secondaryImg,alt:"movie"})})]})})},$n=Object(H.b)(W.c.div)(N||(N=Object(B.a)(["\n  padding-bottom: 10rem;\n  .line {\n    height: 0.5rem;\n    background-color: #23d997;\n    margin-bottom: 3rem;\n  }\n  img {\n    width: 100%;\n    height: 70vh;\n    object-fit: cover;\n  }\n"]))),_n=H.b.div(C||(C=Object(B.a)(["\n  overflow: hidden;\n"]))),ne=function(n){var e=xn(),t=Object(G.a)(e,2),i=t[0],r=t[1];return Object(P.jsxs)($n,{ref:i,variants:cn,animate:r,initial:"hidden",children:[Object(P.jsx)(W.c.h2,{variants:cn,children:n.title}),Object(P.jsx)(W.c.div,{variants:on,className:"line"}),Object(P.jsx)(J.b,{to:n.url,children:Object(P.jsx)(_n,{children:Object(P.jsx)(W.c.img,{variants:sn,src:n.src,alt:n.alt})})})]})},ee=Object(H.b)(W.c.div)(L||(L=Object(B.a)(["\n  min-height: 100vh;\n  overflow: hidden;\n  padding: 5rem 10rem;\n  h2 {\n    padding: 1rem 0rem;\n  }\n  @media (max-width: 1300px) {\n    padding: 2rem 2rem;\n  }\n"]))),te=Object(H.b)(W.c.div)(A||(A=Object(B.a)(["\n  position: fixed;\n  left: 0;\n  top: 10%;\n  width: 100vw;\n  height: 100vh;\n  background: #fffebf;\n  z-index: 2;\n"]))),ie=Object(H.b)(te)(S||(S=Object(B.a)(["\n  background: #ff8efb;\n"]))),re=Object(H.b)(te)(T||(T=Object(B.a)(["\n  background: #8ed2ff;\n"]))),ae=Object(H.b)(te)(q||(q=Object(B.a)(["\n  background: #8effa0;\n"]))),ce=function(){var n=Object(D.useState)([{title:"The Athlete",src:Wn,alt:"athlete",url:"the-athlete"},{title:"The Racer",src:Gn,alt:"theracer",url:"the-racer"},{title:"Good Times",src:Bn,aly:"goodtimes",url:"good-times"}]),e=Object(G.a)(n,1)[0];return Object(P.jsxs)(ee,{exit:"exit",variants:rn,initial:"hidden",animate:"show",style:{background:"#fff"},children:[Object(P.jsxs)(W.c.div,{variants:ln,children:[Object(P.jsx)(te,{variants:dn}),Object(P.jsx)(ie,{variants:dn}),Object(P.jsx)(re,{variants:dn}),Object(P.jsx)(ae,{variants:dn})]}),e.map((function(n,e){return Object(P.jsx)(ne,{title:n.title,src:n.src,alt:n.alt,url:"/work/".concat(n.url)},e)})),Object(P.jsx)(An,{})]})},se=function(){var n=Object(M.g)();return Object(P.jsxs)("div",{className:"App",children:[Object(P.jsx)(Z,{}),Object(P.jsx)(V,{}),Object(P.jsx)(W.a,{exitBeforeEnter:!0,children:Object(P.jsxs)(M.c,{location:n,children:[Object(P.jsx)(M.a,{exact:!0,path:"/",children:Object(P.jsx)(Sn,{})}),Object(P.jsx)(M.a,{path:"/work",exact:!0,children:Object(P.jsx)(ce,{})}),Object(P.jsx)(M.a,{path:"/work/:id",children:Object(P.jsx)(Zn,{})}),Object(P.jsx)(M.a,{path:"/contact",children:Object(P.jsx)(Mn,{})})]},n.pathname)})]})},oe=Object(P.jsx)(J.a,{children:Object(P.jsx)(se,{})});F.a.render(oe,document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.7359d0ed.chunk.js.map