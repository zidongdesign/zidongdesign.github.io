(function(t){function e(e){for(var n,r,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);h&&h(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,o=1;o<i.length;o++){var c=i[o];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var h=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"00b2":function(t,e,i){},"034f":function(t,e,i){"use strict";i("85ec")},"0566":function(t,e,i){"use strict";i("0bd0")},"057e":function(t,e,i){t.exports=i.p+"img/details6.f734d0e0.png"},"06fc":function(t,e,i){t.exports=i.p+"img/preview.cd43fd8b.png"},"0866":function(t,e,i){},"0bd0":function(t,e,i){},"16bf":function(t,e,i){t.exports=i.p+"img/details2.a73efb0c.png"},1971:function(t,e,i){},"300f":function(t,e,i){t.exports=i.p+"img/details1.0f566a63.png"},"365b":function(t,e,i){t.exports=i.p+"img/details8.138cdd79.png"},4711:function(t,e,i){t.exports=i.p+"img/details5.cd56de96.png"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("MyCursor"),i("Header",{on:{"change-intro":function(e){return t.changeIntro(e)}}}),i("Main"),i("WEBGL",{ref:"webgl"})],1)},a=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"cursor-mask"}})},o=[],c=(i("cb29"),i("d81d"),i("1157")),u=i.n(c),h=i("3425"),l=i.n(h);i("8cd8");var d={name:"MyCursor",mounted:function(){var t=this,e=function(e){for(var i,n,s=32,a=16,r=32,o=16,c=-90,u=0,h=0,l=0,d=0,f=.1,p=.5,g=100,m=[],v=[],w=[],b=[],y=[],E=[],j=1,x=0;x<g;x++)m[x]=0,v[x]=0,w[x]=0,b[x]=0,y[x]=0;for(var C=0;C<g;C++)E[C]=e.random(5,20);e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),e.rectMode(e.CENTER),e.noStroke(),i=e.mouseX,n=e.mouseY},e.draw=function(){e.clear(),t.isHover?(i+=(t.hoveringObject.getBoundingClientRect().x+t.hoveringObject.offsetWidth/2-i)*p,n+=(t.hoveringObject.getBoundingClientRect().y+t.hoveringObject.offsetHeight/2-n)*p,r=s,e.fill(255,255,255,128),t.isLargeTarget?(l=e.map(e.mouseX-i,-300,300,-20,20),d=e.map(e.mouseY-n,-300,300,-30,30)):(l=e.mouseX-i,d=e.mouseY-n)):(r=a,e.fill(255),l=e.mouseX-i,d=e.mouseY-n),o+=(r-o)*p;for(var x=0;x<g;x++)m[x]=i+e.cos(e.radians(c))*o,v[x]=n+e.sin(e.radians(c))*o,c+=360/g;e.curveTightness(j),e.beginShape();for(var C=0;C<g;C++)e.curveVertex(w[C],b[C]);for(var O=0;O<g-1;O++)e.curveVertex(w[O],b[O]);e.endShape(e.CLOSE),l*=f,d*=f,u+=l,h+=d,i+=u,n+=h,u*=p,h*=p,j=1-.1*(e.abs(u)+e.abs(h));for(var k=0;k<g;k++)w[k]=m[k]+e.sin(e.radians(y[k]))*(2*u),b[k]=v[k]+e.sin(e.radians(y[k]))*(2*h),y[k]+=E[k]},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)}};new l.a(e,"cursor-mask"),this.blindListener()},data:function(){return{isHover:!1,isLargeTarget:!1,hoveringObject:null}},methods:{blindListener:function(){var t=this;u()(document).on("mouseover",".interactive-l",(function(e){t.hoveringObject=e.target,t.isHover=!0,t.isLargeTarget=!0})).on("mouseout",".interactive-l",(function(){t.hoveringObject=null,t.isHover=!1,t.isLargeTarget=!1})).on("click",".interactive-l",(function(){t.isHover=!1,t.isLargeTarget=!1})),u()(document).on("mouseover",".interactive-s",(function(e){t.hoveringObject=e.target,t.isHover=!0,t.isLargeTarget=!1})).on("mouseout",".interactive-s",(function(){t.hoveringObject=null,t.isHover=!1,t.isLargeTarget=!1})).on("click",".interactive-s",(function(){t.isHover=!1,t.isLargeTarget=!1}))}}},f=d,p=(i("93fd"),i("2877")),g=Object(p["a"])(f,r,o,!1,null,"25dabf48",null),m=g.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",{staticClass:"logo"},[i("svg",{attrs:{width:"56",height:"32",viewBox:"0 0 56 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{attrs:{x:"8",y:"6",width:"48",height:"18",fill:"url(#paint0_linear)"}}),i("rect",{attrs:{x:"8",y:"2",width:"14",height:"2",fill:"#E0E0E8"}}),i("rect",{attrs:{x:"14",width:"2",height:"6",fill:"#E0E0E8"}}),i("rect",{attrs:{x:"14",y:"24",width:"2",height:"8",fill:"#E0E0E8"}}),i("path",{attrs:{d:"M8 26H10V30C10 31.1046 9.10457 32 8 32V32V26Z",fill:"#E0E0E8"}}),i("path",{attrs:{d:"M20 26H22V32V32C20.8954 32 20 31.1046 20 30V26Z",fill:"#E0E0E8"}}),i("rect",{attrs:{y:"2",width:"2",height:"30",fill:"#E0E0E8"}}),i("path",{attrs:{d:"M4 2H6V19C6 20.1046 5.10457 21 4 21V21V2Z",fill:"#E0E0E8"}}),i("path",{attrs:{d:"M25 2H39V2C39 3.10457 38.1046 4 37 4H25V2Z",fill:"#E0E0E8"}}),i("rect",{attrs:{x:"42",y:"2",width:"14",height:"2",fill:"#E0E0E8"}}),i("rect",{attrs:{x:"48",width:"2",height:"6",fill:"#E0E0E8"}}),i("rect",{attrs:{x:"48",y:"24",width:"2",height:"8",fill:"#E0E0E8"}}),i("path",{attrs:{d:"M42 26H44V30C44 31.1046 43.1046 32 42 32V32V26Z",fill:"#E0E0E8"}}),i("path",{attrs:{d:"M54 26H56V32V32C54.8954 32 54 31.1046 54 30V26Z",fill:"#E0E0E8"}}),i("path",{attrs:{d:"M31 24H33V30C33 31.1046 32.1046 32 31 32V32V24Z",fill:"#E0E0E8"}}),i("path",{attrs:{d:"M37 2L33 6H35L37.2111 4.89443C38.3075 4.34626 39 3.22573 39 2H37Z",fill:"#E0E0E8"}}),i("defs",[i("linearGradient",{attrs:{id:"paint0_linear",x1:"32",y1:"6",x2:"32",y2:"24",gradientUnits:"userSpaceOnUse"}},[i("stop",{attrs:{"stop-color":"#505160"}}),i("stop",{attrs:{offset:"1","stop-opacity":"0"}})],1)],1)])]),i("Navigation",{on:{"change-intro":function(e){return t.changeIntro(e)}}})],1)},w=[],b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navigation"},[i("router-link",{staticClass:"interactive-s",attrs:{to:"/home"},nativeOn:{click:function(e){return t.changeIntro("home")}}},[t._v("首页")]),i("router-link",{staticClass:"interactive-s",attrs:{to:"/works"},nativeOn:{click:function(e){return t.changeIntro("works")}}},[t._v("作品")]),i("router-link",{staticClass:"interactive-s",attrs:{to:"/contact"},nativeOn:{click:function(e){return t.changeIntro("contact")}}},[t._v("联系我")])],1)},y=[],E={name:"Navigation",methods:{changeIntro:function(t){this.$emit("change-intro",t)}}},j=E,x=(i("eade"),Object(p["a"])(j,b,y,!1,null,"58650477",null)),C=x.exports,O={name:"Header",components:{Navigation:C},methods:{changeIntro:function(t){this.$emit("change-intro",t)}}},k=O,_=(i("f640"),Object(p["a"])(k,v,w,!1,null,"3685fd7a",null)),P=_.exports,H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("Introduction"),i("Showcase"),i("ProjectContainer")],1)},z=[],L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"introduction",attrs:{id:"introduction"}},[i("h1",{domProps:{innerHTML:t._s(t.content)}})])},M=[],T=i("cffa"),V=i("a5cf"),S={name:"Introduction",data:function(){return{home:"我是一名设计师，这里是我的数字媒体实验室",works:" 产品/交互/媒体/品牌<br>设计多面手",contact:'我在<a href="https://www.racefitlab.com" class="interactive-s">RaceFit</a>担任设计组长，并且联合创立了<a href="#" class="interactive-s">随异设计</a>，你可以通过微信与我联系',content:""}},mounted:function(){this.pickContent(this.status)},watch:{status:function(){var t=this;T["a"].to(u()("#introduction"),{duration:.5,y:-32,opacity:0,ease:V["b"].easeOut}),setTimeout((function(){t.pickContent(t.status),window.scrollTo(0,0)}),500),T["a"].to(u()("#introduction"),{delay:.5,duration:.5,y:32,opacity:1,ease:V["b"].easeOut})}},methods:{pickContent:function(t){switch(t){case"home":this.content=this.home,T["a"].to(u()("#introduction"),{duration:.5,height:"100vh",opacity:1,ease:V["b"].easeOut});break;case"works":this.content=this.works,T["a"].to(u()("#introduction"),{duration:.5,height:"100vh",opacity:1,ease:V["b"].easeOut});break;case"contact":this.content=this.contact,T["a"].to(u()("#introduction"),{duration:.5,height:"100vh",opacity:1,ease:V["b"].easeOut});break;default:this.content="",T["a"].to(u()("#introduction"),{duration:.5,height:0,opacity:0,ease:V["b"].easeOut})}}},computed:{status:function(){return this.$route.params.status}}},$=S,W=(i("8caa"),Object(p["a"])($,L,M,!1,null,"241b1633",null)),I=W.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ProjectList",{attrs:{showcase:t.showcase,id:"showcase"}})},B=[],R=(i("4de4"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade-up"}},[i("div",{staticClass:"showcase"},t._l(t.showcase,(function(e){return i("div",{key:e.id,staticClass:"project",class:e.projectWidth},[i("router-link",{staticClass:"preview interactive-l",attrs:{to:e.projectPath}},[i("img",{attrs:{src:e.picUrl,alt:""}})]),i("div",{staticClass:"content"},[i("h4",[t._v(t._s(e.title))]),i("p",[t._v(t._s(e.desc))])])],1)})),0)])}),Z=[],U={name:"ProjectList",mounted:function(){},data:function(){return{projectData:[{id:1,projectPath:"/project/1",title:"写实图标习作",desc:"2016",picUrl:i("af20"),isShowcases:!1,projectWidth:"cl-6",detailsPage:[i("88f1"),i("16bf"),i("dcef")]},{id:2,projectPath:"/project/2",title:"三维创意习作",desc:"2017",picUrl:i("8684"),isShowcases:!1,projectWidth:"cl-6",detailsPage:[i("300f"),i("f679"),i("659d"),i("c34a"),i("4711"),i("057e"),i("6d42"),i("365b")]},{id:3,projectPath:"/",title:"我的新识别",desc:"2021",picUrl:i("06fc"),isShowcases:!0,projectWidth:"cl-8"},{id:4,projectPath:"/",title:"易启动AI健身教练",desc:"2020 - 2021",picUrl:i("9864"),isShowcases:!0,projectWidth:"cl-12"}]}},props:["showcase"]},D=U,A=(i("5f64"),Object(p["a"])(D,R,Z,!1,null,"c3d885ca",null)),N=A.exports,X={name:"Showcase",data:function(){return{showcase:[]}},mounted:function(){this.pickContent(this.status)},watch:{status:function(){var t=this;T["a"].to(u()("#showcase"),{duration:.5,y:-32,opacity:0,ease:V["b"].easeOut}),setTimeout((function(){t.pickContent(t.status)}),500),T["a"].to(u()("#showcase"),{delay:.5,duration:.5,y:32,opacity:1,ease:V["b"].easeOut})}},computed:{status:function(){return this.$route.params.status}},methods:{pickContent:function(t){switch(t){case"home":this.showcase=N.data().projectData.reverse().filter((function(t){return t.isShowcases}));break;case"works":this.showcase=N.data().projectData.reverse();break;case"contact":this.showcase=[];break;default:this.showcase=[];break}}},components:{ProjectList:N}},Y=X,F=Object(p["a"])(Y,G,B,!1,null,"963c816a",null),J=F.exports,q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade-up",mode:"out-in"}},[i("router-view",{staticClass:"project-page-container",attrs:{name:"page"}})],1)},K=[],Q={name:"ProjectContainer"},tt=Q,et=(i("bc02"),Object(p["a"])(tt,q,K,!1,null,"6edb0679",null)),it=et.exports,nt={name:"Main",components:{Introduction:I,Showcase:J,ProjectContainer:it}},st=nt,at=(i("0566"),Object(p["a"])(st,H,z,!1,null,"6c355bf8",null)),rt=at.exports,ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"webgl"}})},ct=[],ut=i("7fed"),ht={name:"WebGL",data:function(){return{camera:null,scene:null,renderer:null,mesh1:null,mesh2:null,mesh3:null,controls:null,sizes:{width:0,height:0},canvas:null,geometry1:null,geometry2:null,geometry3:null}},mounted:function(){this.init(),this.animate(),this.switchWEBGL(this.status)},methods:{init:function(){var t=this;this.canvas=document.getElementById("webgl"),this.scene=new ut["Scene"]({}),this.geometry1=new ut["CylinderGeometry"](.25,.25,.6,64),this.geometry2=new ut["BoxGeometry"](.5,.5,.5),this.geometry3=new ut["TorusGeometry"](.25,.1,64,64);var e=new ut["MeshPhysicalMaterial"]({morphTargets:!0,color:2105378,metalness:.4,roughness:.6,reflectivity:.8});this.mesh1=new ut["Mesh"](this.geometry1,e),this.scene.add(this.mesh1),this.mesh1.rotation.x=.6,this.mesh1.rotation.z=.6;var i=new ut["PointLight"](13421823,1);i.position.x=-3,i.position.y=5,i.position.z=0,i.intensity=1,this.scene.add(i);var n=new ut["PointLight"](16777215,1);n.position.x=3,n.position.y=5,n.position.z=0,n.intensity=1,this.scene.add(n);var s=new ut["PointLight"](16777215,1);s.position.x=0,s.position.y=-5,s.position.z=1,s.intensity=.2,this.scene.add(s),this.sizes={width:this.canvas.clientWidth,height:this.canvas.clientHeight},window.addEventListener("resize",(function(){t.sizes.width=t.canvas.clientWidth,t.sizes.height=t.canvas.clientHeight,t.resize()})),this.camera=new ut["PerspectiveCamera"](75,this.sizes.width/this.sizes.Height,.1,100),this.camera.position.x=0,this.camera.position.y=0,this.camera.position.z=1,this.scene.add(this.camera),this.renderer=new ut["WebGLRenderer"]({alpha:!0}),this.canvas.appendChild(this.renderer.domElement),this.resize()},resize:function(){this.camera.aspect=this.sizes.width/this.sizes.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))},animate:function(){requestAnimationFrame(this.animate),this.mesh1.rotation.x+=.001,this.mesh1.rotation.z+=.001,this.renderer.render(this.scene,this.camera)},switchWEBGL:function(t){switch(t){case"home":this.mesh1.geometry=this.geometry1,this.sizes.height=this.canvas.clientHeight,this.resize();break;case"works":this.mesh1.geometry=this.geometry2,this.sizes.height=this.canvas.clientHeight,this.resize();break;case"contact":this.mesh1.geometry=this.geometry3,this.sizes.height=this.canvas.clientHeight,this.resize();break;case"project":this.mesh1.geometry=this.geometry3,this.sizes.height=this.canvas.clientHeight,this.resize();break}}},watch:{status:function(){this.switchWEBGL(this.status),this.changeMesh(this.status)}},computed:{status:function(){return this.$route.params.status}}},lt=ht,dt=(i("f46d"),Object(p["a"])(lt,ot,ct,!1,null,"201d4c6e",null)),ft=dt.exports,pt={name:"App",components:{MyCursor:m,Header:P,Main:rt,WEBGL:ft},methods:{changeIntro:function(){}}},gt=pt,mt=(i("034f"),Object(p["a"])(gt,s,a,!1,null,null,null)),vt=mt.exports,wt=i("8c4f"),bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"project-content"},[i("h2",[t._v(t._s(t.projectTitle))]),t._l(t.detailsPage,(function(t){return i("img",{key:t,attrs:{src:t,alt:""}})}))],2)},yt=[],Et={name:"ProjectDetailsPage",data:function(){return{pTitle:this.projectTitle,dPage:this.detailsPage}},computed:{id:function(){return this.$route.params.id},projectTitle:function(){return N.data().projectData[this.id-1].title},detailsPage:function(){return N.data().projectData[this.id-1].detailsPage}}},jt=Et,xt=(i("a4b6"),Object(p["a"])(jt,bt,yt,!1,null,"e8de1356",null)),Ct=xt.exports;n["a"].use(wt["a"]);var Ot=[{path:"/",redirect:"home",params:{status:"home"}},{path:"/:status",beforeEnter:function(t,e,i){i()}},{path:"/:status/:id",components:{page:Ct},params:{status:"project"},beforeEnter:function(t,e,i){i()}}],kt=new wt["a"]({routes:Ot,mode:"history",linkActiveClass:"active"}),_t=kt;i("f33e"),n["a"].config.productionTip=!1,new n["a"]({el:"#app",router:_t,render:function(t){return t(vt)}}).$mount("#app")},"5f64":function(t,e,i){"use strict";i("adbe")},"659d":function(t,e,i){t.exports=i.p+"img/details3.f125ce0b.png"},"6d42":function(t,e,i){t.exports=i.p+"img/details7.cf2307d2.png"},"7f0b":function(t,e,i){},"85ec":function(t,e,i){},8684:function(t,e,i){t.exports=i.p+"img/preview.138cdd79.png"},"88f1":function(t,e,i){t.exports=i.p+"img/details1.4ad24cc4.png"},"8caa":function(t,e,i){"use strict";i("0866")},"8cd8":function(t,e,i){t.exports=i.p+"img/eye-white.41272006.png"},"93fd":function(t,e,i){"use strict";i("7f0b")},9783:function(t,e,i){},9864:function(t,e,i){t.exports=i.p+"img/preview.50acc4a0.png"},a4b6:function(t,e,i){"use strict";i("9783")},a4ee:function(t,e,i){},adbe:function(t,e,i){},af20:function(t,e,i){t.exports=i.p+"img/preview.55226c10.png"},bc02:function(t,e,i){"use strict";i("00b2")},c34a:function(t,e,i){t.exports=i.p+"img/details4.f69fbc08.png"},d027:function(t,e,i){},dcef:function(t,e,i){t.exports=i.p+"img/details3.bb48aaf5.png"},eade:function(t,e,i){"use strict";i("1971")},f33e:function(t,e,i){},f46d:function(t,e,i){"use strict";i("a4ee")},f640:function(t,e,i){"use strict";i("d027")},f679:function(t,e,i){t.exports=i.p+"img/details2.430778b9.png"}});
//# sourceMappingURL=app.73d3dee8.js.map