(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(22),l=a.n(r),c=a(25),o=a(7),s=a(8),u=a(11),m=a(9),h=a(12),v=a(30),p=(a(82),a(83),a(72)),d=a(114),b=a(115),E=a(67),y=a(68),M=a(31),f=a(120),j=a(118),O=a(117),g=a(116),k=function(e){function t(e,a){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e,a))).handleChange=n.handleChange.bind(Object(v.a)(Object(v.a)(n))),n.state={value:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value.toLowerCase().trim()})}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.style,n=(e.className,e["aria-labelledby"]),r=this.state.value;return i.a.createElement("div",{style:a,"aria-labelledby":n},i.a.createElement(d.a,null,i.a.createElement(b.a,null,i.a.createElement(E.a,{className:"mx-3 my-2 w-auto align-self-center",placeholder:"Type to filter...",onChange:this.handleChange,value:r})),i.a.createElement(b.a,null,i.a.createElement(y.a,null,i.a.createElement("ul",{className:"list-unstyled"},i.a.Children.toArray(t).slice(0,6).filter(function(e){return!r||e.props.children.toLowerCase().startsWith(r)}))),i.a.createElement(y.a,null,i.a.createElement("ul",{className:"list-unstyled"},i.a.Children.toArray(t).slice(6,12).filter(function(e){return!r||e.props.children.toLowerCase().startsWith(r)}))),i.a.createElement(y.a,null,i.a.createElement("ul",{className:"list-unstyled"},i.a.Children.toArray(t).slice(12,18).filter(function(e){return!r||e.props.children.toLowerCase().startsWith(r)}))),i.a.createElement(y.a,null,i.a.createElement("ul",{className:"list-unstyled"},i.a.Children.toArray(t).slice(18,24).filter(function(e){return!r||e.props.children.toLowerCase().startsWith(r)}))))))}}]),t}(i.a.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(M.a.Menu,{as:k},S.map(function(t,a){return i.a.createElement(M.a.Item,{key:t,eventKey:t,as:c.b,to:"/Movie-Website/"+t,onClick:function(){return e.props.onClick()}},t)}))}}]),t}(i.a.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(f.a.Item,null,i.a.createElement(f.a.Link,{active:!!this.props.isActive,className:"nav-link",as:c.b,to:this.props.path,onClick:function(){return e.props.onClick()}},this.props.text))}}]),t}(i.a.Component),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={links:[{path:"/Movie-Website/",text:"Home",isActive:!0},{path:"/Movie-Website/1",text:"Page1",isActive:!1},{path:"/Movie-Website/2",text:"Page2",isActive:!1}]},a.handleClick=a.handleClick.bind(Object(v.a)(Object(v.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=this.state.links.slice();for(var a in t)t[a].isActive=e==a;this.setState({links:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(j.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",fixed:"top"},i.a.createElement(j.a.Brand,{as:c.b,to:"/Movie-Website/"},"SayYourMovie"),i.a.createElement(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),i.a.createElement(j.a.Collapse,{id:"responsive-navbar-nav"},i.a.createElement(O.a,{inline:!0},i.a.createElement(E.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),i.a.createElement(p.a,{variant:"outline-info"},"Search")),i.a.createElement(f.a,{fill:!0,className:"mr-auto",style:{width:"20%"}},this.state.links.map(function(t,a){return i.a.createElement(w,{key:t.text,path:t.path,text:t.text,isActive:t.isActive,onClick:function(){return e.handleClick(a)}})}),i.a.createElement(f.a.Item,null,i.a.createElement(g.a,{title:"Movies",className:"dropdown full-width",id:"dropdown-menu"},i.a.createElement(C,{onClick:function(){return e.handleClick(-1)}})))),i.a.createElement(f.a,null,i.a.createElement(j.a.Text,null,"Hi"),i.a.createElement(f.a.Link,{className:"nav-link text-white",href:"#"},"Signin / Signup")))))}}]),t}(i.a.Component),S=["Action Movies","Adventure Movies","Animation Movies","Biography Movies","Comedy Movies","Crime Movies","Documentary Movies","Drama Movies","Family Movies","Fantasy Movies","Film Noir Movies","History Movies","Horror Movies","Music Movies","Musical Movies","Mystery Movies","Romance Movies","Sci-Fi Movies","Short Movies","Sport Movies","Superhero Movies","Thriller Movies","War Movies","Western Movies"],W=x,A=a(29),N=a(119),T=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(N.a,{interval:3e3},i.a.createElement(N.a.Item,null,i.a.createElement("img",{style:{width:"100%",height:"auto",maxWidth:"100%",maxHeight:"50%",display:"block"},src:"https://ws3.sinaimg.cn/large/006tKfTcly1g1bzxnru3zj30vo0akta0.jpg",alt:"First slide"}),i.a.createElement(N.a.Caption,null,i.a.createElement("h3",null,"First slide label"),i.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),i.a.createElement(N.a.Item,null,i.a.createElement("img",{style:{width:"100%",height:"auto",maxWidth:"100%",display:"block"},src:"https://ws4.sinaimg.cn/large/006tKfTcly1g1c01564jsj30vo0akwky.jpg",alt:"Third slide"}),i.a.createElement(N.a.Caption,null,i.a.createElement("h3",null,"Third slide label"),i.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur."))),i.a.createElement(N.a.Item,null,i.a.createElement("img",{style:{width:"100%",height:"auto"},src:"https://ws1.sinaimg.cn/large/006tKfTcly1g1c03v221yj30vo0aktcq.jpg",alt:"Third slide"}),i.a.createElement(N.a.Caption,null,i.a.createElement("h3",null,"Second slide label"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))))}}]),t}(i.a.Component),F=(a(112),a(121)),H=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(y.a,{md:2},i.a.createElement("figure",{className:"figure"},i.a.createElement("img",{src:"https://tupian.tupianzy.com/pic/upload/vod/2019-01-16/201901161547644844.jpg",className:"figure-img img-fluid rounded",alt:"..."}),i.a.createElement("figcaption",{className:"figure-caption text-right"},"Spider Man")))}}]),t}(i.a.Component),I=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(b.a,null,i.a.createElement(H,null),i.a.createElement(H,null),i.a.createElement(H,null),i.a.createElement(H,null),i.a.createElement(H,null),i.a.createElement(H,null))}}]),t}(i.a.Component),B=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(N.a,{indicators:!1,interval:999999},i.a.createElement(N.a.Item,null,i.a.createElement(I,null)),i.a.createElement(N.a.Item,null,i.a.createElement(I,null)))}}]),t}(i.a.Component),L=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(F.a,null,i.a.createElement(F.a.Header,{className:"shadow-lg bg-light"},i.a.createElement(j.a.Brand,{as:c.b,to:"/"+this.props.series},this.props.series)),i.a.createElement(F.a.Body,null,i.a.createElement(B,null)))}}]),t}(i.a.Component),D=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,{style:{maxWidth:1500}},i.a.createElement(b.a,{className:"shadow-lg"},i.a.createElement(L,{series:"Recommend Movies"})),P.map(function(e){return i.a.createElement(b.a,{key:e,className:"shadow-lg",style:{marginTop:10}},i.a.createElement(L,{series:e}))}))}}]),t}(i.a.Component),P=["Action Movies","Adventure Movies","Animation Movies","Biography Movies","Comedy Movies","Crime Movies","Documentary Movies","Drama Movies","Family Movies","Fantasy Movies","Film Noir Movies","History Movies","Horror Movies","Music Movies","Musical Movies","Mystery Movies","Romance Movies","Sci-Fi Movies","Short Movies","Sport Movies","Superhero Movies","Thriller Movies","War Movies","Western Movies"],z=D,K=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{style:{width:"100%",height:"auto"}},i.a.createElement(T,null)),i.a.createElement("div",{style:{marginTop:20}},i.a.createElement(z,null)))}}]),t}(i.a.Component),R=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,this.props.type),i.a.createElement(b.a,null,Array.apply(null,{length:10}).map(function(e){return i.a.createElement(F.a,{style:{width:"15rem"}},i.a.createElement(F.a.Img,{variant:"top",src:"https://tupian.tupianzy.com/pic/upload/vod/2019-01-16/201901161547644844.jpg"}),i.a.createElement(F.a.Body,null,i.a.createElement(F.a.Title,null,"Card Title"),i.a.createElement(F.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),i.a.createElement(p.a,{variant:"primary"},"Go somewhere")))})))}}]),t}(i.a.Component),q=function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Page1"))},J=function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Page2"))},G=K,Y=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("main",{style:{marginTop:50}},i.a.createElement(A.c,null,i.a.createElement(A.a,{exact:!0,path:"/Movie-Website/",component:G}),i.a.createElement(A.a,{path:"/Movie-Website/1",component:q}),i.a.createElement(A.a,{path:"/Movie-Website/2",component:J}),Q.map(function(e){return i.a.createElement(A.a,{key:e,path:"/Movie-Website/"+e,render:function(){return i.a.createElement(R,{type:e})}})})))}}]),t}(i.a.Component),Q=["Action Movies","Adventure Movies","Animation Movies","Biography Movies","Comedy Movies","Crime Movies","Documentary Movies","Drama Movies","Family Movies","Fantasy Movies","Film Noir Movies","History Movies","Horror Movies","Music Movies","Musical Movies","Mystery Movies","Romance Movies","Sci-Fi Movies","Short Movies","Sport Movies","Superhero Movies","Thriller Movies","War Movies","Western Movies"],U=Y,V=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(W,null),i.a.createElement(U,null))}}]),t}(i.a.Component);l.a.render(i.a.createElement(c.a,null,i.a.createElement(V,null)),document.getElementById("root"))},77:function(e,t,a){e.exports=a(113)},83:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.5cc114aa.chunk.js.map