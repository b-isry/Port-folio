(function(){"use strict";var e={891:function(e,t,s){var a=s(751),i=s(641);const r={id:"app",class:"bg-black text-white"},o={class:"min-h-screen bg-black"};function n(e,t,s,n,l,c){const d=(0,i.g2)("Navbar"),u=(0,i.g2)("router-view"),f=(0,i.g2)("CustomCursor");return(0,i.uX)(),(0,i.CE)("div",r,[(0,i.bF)(d),(0,i.Lk)("div",o,[(0,i.bF)(a.eB,{name:"fade",mode:"out-in"},{default:(0,i.k6)((()=>[(0,i.bF)(u)])),_:1})]),(0,i.bF)(f)])}var l=s(33);function c(e,t,s,r,o,n){return(0,i.bo)(((0,i.uX)(),(0,i.CE)("div",{class:(0,l.C4)(["custom-cursor",{"cursor-hover":r.isHovering}]),style:(0,l.Tr)({top:`${r.y}px`,left:`${r.x}px`})},null,6)),[[a.aG,!r.isMobile&&r.isVisible]])}var d=s(953),u={setup(){const e=(0,d.KR)(0),t=(0,d.KR)(0),s=(0,d.KR)(!1),a=(0,d.KR)(!1),r=(0,d.KR)(!0);let o;const n=s=>{e.value=s.clientX,t.value=s.clientY,l()},l=()=>{r.value=!0,clearTimeout(o),o=setTimeout((()=>{r.value=!1}),2e3)},c=()=>{a.value=window.innerWidth<=768},u=()=>{const e=document.querySelectorAll("a, button, input, textarea, [role='button']");e.forEach((e=>{e.addEventListener("mouseenter",(()=>s.value=!0)),e.addEventListener("mouseleave",(()=>s.value=!1))}))};return(0,i.sV)((()=>{window.addEventListener("mousemove",n),window.addEventListener("resize",c),c(),u()})),(0,i.hi)((()=>{window.removeEventListener("mousemove",n),window.removeEventListener("resize",c),clearTimeout(o)})),{x:e,y:t,isHovering:s,isMobile:a,isVisible:r}}},f=s(262);const v=(0,f.A)(u,[["render",c]]);var m=v;const p={class:"fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md"},g={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"},x={class:"hidden md:flex space-x-8"},h={class:"md:hidden flex items-center"},b={class:"md:hidden bg-black text-white space-y-4 px-4 py-6"};function w(e,t,s,r,o,n){const l=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("nav",p,[(0,i.Lk)("div",g,[t[17]||(t[17]=(0,i.Lk)("div",{class:"text-2xl font-bold cursor-pointer"},"b_isry",-1)),(0,i.Lk)("div",x,[(0,i.bF)(l,{to:"/",class:"hover:text-gray-300 transition duration-300",onMouseenter:t[0]||(t[0]=e=>r.isHovering=!0),onMouseleave:t[1]||(t[1]=e=>r.isHovering=!1)},{default:(0,i.k6)((()=>t[11]||(t[11]=[(0,i.eW)(" Home ")]))),_:1}),(0,i.bF)(l,{to:"/aboutme",class:"hover:text-gray-300 transition duration-300",onMouseenter:t[2]||(t[2]=e=>r.isHovering=!0),onMouseleave:t[3]||(t[3]=e=>r.isHovering=!1)},{default:(0,i.k6)((()=>t[12]||(t[12]=[(0,i.eW)(" About ")]))),_:1}),(0,i.bF)(l,{to:"/projects",class:"hover:text-gray-300 transition duration-300",onMouseenter:t[4]||(t[4]=e=>r.isHovering=!0),onMouseleave:t[5]||(t[5]=e=>r.isHovering=!1)},{default:(0,i.k6)((()=>t[13]||(t[13]=[(0,i.eW)(" Projects ")]))),_:1}),(0,i.bF)(l,{to:"/contact",class:"hover:text-gray-300 transition duration-300",onMouseenter:t[6]||(t[6]=e=>r.isHovering=!0),onMouseleave:t[7]||(t[7]=e=>r.isHovering=!1)},{default:(0,i.k6)((()=>t[14]||(t[14]=[(0,i.eW)(" Contact ")]))),_:1})]),(0,i.bF)(l,{to:"/contact",class:"hidden md:block bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300",onMouseenter:t[8]||(t[8]=e=>r.isHovering=!0),onMouseleave:t[9]||(t[9]=e=>r.isHovering=!1)},{default:(0,i.k6)((()=>t[15]||(t[15]=[(0,i.eW)(" Work With Me ")]))),_:1}),(0,i.Lk)("div",h,[(0,i.Lk)("button",{onClick:t[10]||(t[10]=(...e)=>r.toggleMenu&&r.toggleMenu(...e)),class:"focus:outline-none"},t[16]||(t[16]=[(0,i.Lk)("svg",{class:"w-6 h-6 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,i.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"})],-1)]))])]),(0,i.bo)((0,i.Lk)("div",b,[(0,i.bF)(l,{to:"/",class:"block hover:text-gray-300"},{default:(0,i.k6)((()=>t[18]||(t[18]=[(0,i.eW)("Home")]))),_:1}),(0,i.bF)(l,{to:"/about",class:"block hover:text-gray-300"},{default:(0,i.k6)((()=>t[19]||(t[19]=[(0,i.eW)("About")]))),_:1}),(0,i.bF)(l,{to:"/projects",class:"block hover:text-gray-300"},{default:(0,i.k6)((()=>t[20]||(t[20]=[(0,i.eW)("Projects")]))),_:1}),(0,i.bF)(l,{to:"/contact",class:"block hover:text-gray-300"},{default:(0,i.k6)((()=>t[21]||(t[21]=[(0,i.eW)("Contact")]))),_:1}),(0,i.bF)(l,{to:"/contact",class:"w-full bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300"},{default:(0,i.k6)((()=>t[22]||(t[22]=[(0,i.eW)(" Work With Me ")]))),_:1})],512),[[a.aG,r.menuOpen]])])}var k={setup(){const e=(0,d.KR)(!1),t=(0,d.KR)(!1),s=()=>{e.value=!e.value};return{menuOpen:e,toggleMenu:s,isHovering:t}}};const y=(0,f.A)(k,[["render",w],["__scopeId","data-v-700255aa"]]);var j=y,C={name:"App",components:{CustomCursor:m,Navbar:j}};const L=(0,f.A)(C,[["render",n],["__scopeId","data-v-22f31999"]]);var S=L,E=s(220);const M={class:"bg-black bg-texture min-h-screen flex px-6 py-12"},A={class:"max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center"},_={class:"flex flex-col space-y-6 text-white"};function F(e,t,s,a,r,o){return(0,i.uX)(),(0,i.CE)("section",M,[(0,i.Lk)("div",A,[t[6]||(t[6]=(0,i.Fv)('<div class="flex flex-col space-y-6 items-center justify-center" data-v-f38645ee><h1 class="text-4xl md:text-6xl text-white" style="font-family:&#39;Space Grotesk&#39;, sans-serif;" data-v-f38645ee>PORTFOLIO</h1><div class="flex space-x-6 mt-4" data-v-f38645ee><a href="https://instagram.com/b_isry" target="_blank" class="text-white hover:text-gray-400" data-v-f38645ee><i class="fab fa-instagram text-2xl" data-v-f38645ee></i></a><a href="https://www.linkedin.com/in/bisrat-teshome-6182632b4/" target="_blank" class="text-white hover:text-gray-400" data-v-f38645ee><i class="fab fa-linkedin text-2xl" data-v-f38645ee></i></a><a href="https://github.com/b-isry" target="_blank" class="text-white hover:text-gray-400" data-v-f38645ee><i class="fab fa-github text-2xl" data-v-f38645ee></i></a><a href="https://t.me/b_isry" target="_blank" class="text-white hover:text-gray-400" data-v-f38645ee><i class="fab fa-telegram text-2xl" data-v-f38645ee></i></a></div></div>',1)),(0,i.Lk)("div",_,[(0,i.Lk)("div",{onClick:t[0]||(t[0]=(...e)=>o.navigateToAboutMe&&o.navigateToAboutMe(...e)),class:"flex items-center justify-between bg-neutral-900 p-8 max-w-md rounded-tr-2xl rounded-bl-2xl shadow-lg border border-white-700 transition-transform hover:scale-105 cursor-pointer"},t[3]||(t[3]=[(0,i.Fv)('<div class="flex items-center" style="font-family:&#39;Space Grotesk&#39;, sans-serif;" data-v-f38645ee><span class="text-xl md:text-2xl font-semibold" data-v-f38645ee>01 </span><span class="text-lg md:text-xl ml-4" data-v-f38645ee>ABOUT ME</span></div><div class="w-6 h-6 flex items-center justify-center" data-v-f38645ee><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-f38645ee><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" data-v-f38645ee></path></svg></div>',2)])),(0,i.Lk)("div",{onClick:t[1]||(t[1]=(...e)=>o.navigateToProjects&&o.navigateToProjects(...e)),class:"flex items-center justify-between bg-neutral-900 p-8 max-w-md rounded-tr-2xl rounded-bl-2xl shadow-lg border border-white-700 transition-transform hover:scale-105 cursor-pointer"},t[4]||(t[4]=[(0,i.Fv)('<div class="flex items-center" style="font-family:&#39;Space Grotesk&#39;, sans-serif;" data-v-f38645ee><span class="text-xl md:text-2xl font-semibold" data-v-f38645ee>02 </span><span class="text-lg md:text-xl ml-4" data-v-f38645ee>PROJECTS</span></div><div class="w-6 h-6 flex items-center justify-center" data-v-f38645ee><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-f38645ee><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" data-v-f38645ee></path></svg></div>',2)])),(0,i.Lk)("div",{onClick:t[2]||(t[2]=(...e)=>o.navigateToCertificates&&o.navigateToCertificates(...e)),class:"flex items-center justify-between bg-neutral-900 p-8 max-w-md rounded-tr-2xl rounded-bl-2xl shadow-lg border border-white-700 transition-transform hover:scale-105 cursor-pointer"},t[5]||(t[5]=[(0,i.Fv)('<div class="flex items-center" style="font-family:&#39;Space Grotesk&#39;, sans-serif;" data-v-f38645ee><span class="text-xl md:text-2xl font-semibold" data-v-f38645ee>03 </span><span class="text-lg md:text-xl ml-4" data-v-f38645ee>CERTIFICATES</span></div><div class="w-6 h-6 flex items-center justify-center" data-v-f38645ee><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-f38645ee><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" data-v-f38645ee></path></svg></div>',2)]))])])])}var X={methods:{navigateToAboutMe(){this.$router.push("/aboutme")},navigateToProjects(){this.$router.push("/projects")},navigateToCertificates(){this.$router.push("/certificates")}}};const T=(0,f.A)(X,[["render",F],["__scopeId","data-v-f38645ee"]]);var P=T,I=s.p+"img/me.eddaced2.jpg";const W={class:"bg-black min-h-screen flex flex-col items-center justify-center px-12 text-white snap-y snap-mandatory overflow-y-scroll"};function O(e,t,s,a,r,o){return(0,i.uX)(),(0,i.CE)("section",W,t[0]||(t[0]=[(0,i.Fv)('<div class="snap-start min-h-screen flex flex-col items-start justify-center w-full" data-v-f1f6e552><h1 class="text-4xl font-bold mb-12" data-v-f1f6e552>About Me</h1><div class="grid grid-cols-2 gap-16 items-start" data-v-f1f6e552><div data-v-f1f6e552><p class="text-lg mb-4 leading-relaxed" data-v-f1f6e552> Hello! I&#39;m Bisrat Teshome, a software engineer operating from Dessie, Ethiopia. My passion lies in the backend – architecting and developing reliable, scalable solutions. I&#39;m constantly learning and refining my skills, grounding my practical abilities in solid academic understanding and direct project experience. This curiosity extends into the realm of Artificial Intelligence, an area I keenly follow and explore. This blend allows me to approach development thoughtfully and effectively. </p></div><div class="relative flex items-center" data-v-f1f6e552><div class="w-48 h-60 border-4 border-white overflow-hidden mx-6" data-v-f1f6e552><img src="'+I+'" alt="Your Picture" class="w-full h-full object-cover" data-v-f1f6e552></div></div></div></div><div class="snap-start min-h-screen flex flex-col items-start justify-center w-full" data-v-f1f6e552><h2 class="text-4xl font-bold mb-8" data-v-f1f6e552>Education &amp; Experience</h2><div class="grid grid-cols-2 gap-16 w-full max-w-5xl" data-v-f1f6e552><div data-v-f1f6e552><h3 class="text-2xl font-semibold mb-4" data-v-f1f6e552>Education</h3><p class="text-lg leading-relaxed" data-v-f1f6e552>Bachelor&#39;s Degree in Software Engineering, BahirDar University</p><p class="text-lg leading-relaxed" data-v-f1f6e552>Graduation: 2026</p><hr class="my-6 border-gray-500" data-v-f1f6e552><p class="text-lg leading-relaxed" data-v-f1f6e552>Bachelor&#39;s Degree in Management, St. Mary University</p><p class="text-lg leading-relaxed" data-v-f1f6e552>Graduation: 2026</p><hr class="my-6 border-gray-500" data-v-f1f6e552><p class="text-lg leading-relaxed" data-v-f1f6e552>A2SV Remote Education</p><p class="text-lg leading-relaxed" data-v-f1f6e552>Graduation: 2025</p></div><div data-v-f1f6e552><h3 class="text-2xl font-semibold mb-4" data-v-f1f6e552>Experience</h3><p class="text-lg leading-relaxed" data-v-f1f6e552>Python Programmer at Oasis InfoByte</p><p class="text-lg leading-relaxed" data-v-f1f6e552>October, 2024 - November, 2024</p><hr class="my-6 border-gray-500" data-v-f1f6e552><p class="text-lg leading-relaxed" data-v-f1f6e552>Backend Developer at A2SV</p><p class="text-lg leading-relaxed" data-v-f1f6e552>March, 2024 - Present</p></div></div></div>',2)]))}var B={name:"AboutMe"};const R=(0,f.A)(B,[["render",O],["__scopeId","data-v-f1f6e552"]]);var H=R;const K={class:"bg-black bg-texture min-h-screen flex px-6 py-12 mt-16"},G={class:"max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center"},U={class:"flex flex-col space-y-6 text-white"};function V(e,t){return(0,i.uX)(),(0,i.CE)("section",K,[(0,i.Lk)("div",G,[t[8]||(t[8]=(0,i.Lk)("div",{class:"flex flex-col space-y-6 items-center justify-center"},[(0,i.Lk)("h1",{class:"text-4xl md:text-6xl text-white",style:{"font-family":"'Space Grotesk', sans-serif"}},"PROJECTS")],-1)),(0,i.Lk)("div",U,[(0,i.Lk)("div",{onClick:t[0]||(t[0]=t=>e.$router.push("/frontend")),class:"flex items-center justify-between bg-neutral-900 p-8 max-w-md rounded-tr-2xl rounded-bl-2xl shadow-lg border border-white-700 transition-transform hover:scale-105 cursor-pointer"},t[4]||(t[4]=[(0,i.Fv)('<div class="flex items-center" style="font-family:&#39;Space Grotesk&#39;, sans-serif;"><span class="text-xl md:text-2xl font-semibold">01 </span><span class="text-lg md:text-xl ml-4">Frontend</span></div><div class="w-6 h-6 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg></div>',2)])),(0,i.Lk)("div",{onClick:t[1]||(t[1]=t=>e.$router.push("/backend")),class:"flex items-center justify-between bg-neutral-900 p-8 max-w-md rounded-tr-2xl rounded-bl-2xl shadow-lg border border-white-700 transition-transform hover:scale-105 cursor-pointer"},t[5]||(t[5]=[(0,i.Fv)('<div class="flex items-center" style="font-family:&#39;Space Grotesk&#39;, sans-serif;"><span class="text-xl md:text-2xl font-semibold">02 </span><span class="text-lg md:text-xl ml-4">Backend</span></div><div class="w-6 h-6 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg></div>',2)])),(0,i.Lk)("div",{onClick:t[2]||(t[2]=t=>e.$router.push("/mobile")),class:"flex items-center justify-between bg-neutral-900 p-8 max-w-md rounded-tr-2xl rounded-bl-2xl shadow-lg border border-white-700 transition-transform hover:scale-105 cursor-pointer"},t[6]||(t[6]=[(0,i.Fv)('<div class="flex items-center" style="font-family:&#39;Space Grotesk&#39;, sans-serif;"><span class="text-xl md:text-2xl font-semibold">03 </span><span class="text-lg md:text-xl ml-4">Mobile Apps</span></div><div class="w-6 h-6 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg></div>',2)])),(0,i.Lk)("div",{onClick:t[3]||(t[3]=t=>e.$router.push("/uiux")),class:"flex items-center justify-between bg-neutral-900 p-8 max-w-md rounded-tr-2xl rounded-bl-2xl shadow-lg border border-white-700 transition-transform hover:scale-105 cursor-pointer"},t[7]||(t[7]=[(0,i.Fv)('<div class="flex items-center" style="font-family:&#39;Space Grotesk&#39;, sans-serif;"><span class="text-xl md:text-2xl font-semibold">04 </span><span class="text-lg md:text-xl ml-4">UI/UX Design</span></div><div class="w-6 h-6 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg></div>',2)]))])])])}const $={},D=(0,f.A)($,[["render",V]]);var J=D;const N={class:"p-6 bg-black"},Q={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"},q=["src","alt"],z={class:"absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"},Y={class:"text-white text-lg font-semibold"};function Z(e,t,s,a,r,o){return(0,i.uX)(),(0,i.CE)("section",N,[t[0]||(t[0]=(0,i.Lk)("h1",{class:"text-2xl font-bold text-white mb-8"},"Certificates",-1)),(0,i.Lk)("div",Q,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(r.certificates,((e,t)=>((0,i.uX)(),(0,i.CE)("div",{key:t,class:"relative group border border-gray-700 rounded-lg overflow-hidden shadow-lg"},[(0,i.Lk)("img",{src:e.image,alt:e.title,class:"w-full h-48 object-cover"},null,8,q),(0,i.Lk)("div",z,[(0,i.Lk)("p",Y,(0,l.v_)(e.title),1)])])))),128))])])}var ee={name:"Certificates",data(){return{certificates:[{image:"path/to/certificate1.jpg",title:"Certificate 1"},{image:"path/to/certificate2.jpg",title:"Certificate 2"},{image:"path/to/certificate3.jpg",title:"Certificate 3"},{image:"path/to/certificate1.jpg",title:"Certificate 1"},{image:"path/to/certificate2.jpg",title:"Certificate 2"},{image:"path/to/certificate3.jpg",title:"Certificate 3"},{image:"path/to/certificate1.jpg",title:"Certificate 1"},{image:"path/to/certificate2.jpg",title:"Certificate 2"},{image:"path/to/certificate3.jpg",title:"Certificate 3"}]}}};const te=(0,f.A)(ee,[["render",Z],["__scopeId","data-v-1230dc19"]]);var se=te;const ae={class:"min-h-screen bg-black text-white flex items-center justify-center px-4"},ie={class:"max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8"},re={key:0,class:"text-red-500 text-sm mt-1"},oe={key:0,class:"text-red-500 text-sm mt-1"},ne={key:0,class:"text-red-500 text-sm mt-1"},le={key:0,class:"text-green-500 text-sm mt-4"};function ce(e,t,s,r,o,n){return(0,i.uX)(),(0,i.CE)("div",ae,[(0,i.Lk)("div",ie,[(0,i.Lk)("form",{onSubmit:t[11]||(t[11]=(0,a.D$)(((...e)=>r.handleSubmit&&r.handleSubmit(...e)),["prevent"])),class:"space-y-6 bg-black border p-8 mt-12 rounded-lg shadow-lg backdrop-blur-md"},[t[15]||(t[15]=(0,i.Lk)("h2",{class:"text-2xl font-bold"},"Contact Me",-1)),(0,i.Lk)("div",null,[t[12]||(t[12]=(0,i.Lk)("label",{for:"name",class:"block text-sm font-medium"},"Name",-1)),(0,i.bo)((0,i.Lk)("input",{id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>r.form.name=e),type:"text",class:"mt-1 block w-full bg-black text-white border border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white",onMouseenter:t[1]||(t[1]=e=>r.isWriting=!0),onMouseleave:t[2]||(t[2]=e=>r.isWriting=!1)},null,544),[[a.Jo,r.form.name]]),r.errors.name?((0,i.uX)(),(0,i.CE)("p",re,(0,l.v_)(r.errors.name),1)):(0,i.Q3)("",!0)]),(0,i.Lk)("div",null,[t[13]||(t[13]=(0,i.Lk)("label",{for:"email",class:"block text-sm font-medium"},"Email",-1)),(0,i.bo)((0,i.Lk)("input",{id:"email","onUpdate:modelValue":t[3]||(t[3]=e=>r.form.email=e),type:"email",class:"mt-1 block w-full bg-black text-white border border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white",onMouseenter:t[4]||(t[4]=e=>r.isWriting=!0),onMouseleave:t[5]||(t[5]=e=>r.isWriting=!1)},null,544),[[a.Jo,r.form.email]]),r.errors.email?((0,i.uX)(),(0,i.CE)("p",oe,(0,l.v_)(r.errors.email),1)):(0,i.Q3)("",!0)]),(0,i.Lk)("div",null,[t[14]||(t[14]=(0,i.Lk)("label",{for:"message",class:"block text-sm font-medium"},"Message",-1)),(0,i.bo)((0,i.Lk)("textarea",{id:"message","onUpdate:modelValue":t[6]||(t[6]=e=>r.form.message=e),rows:"4",class:"mt-1 block w-full bg-black text-white border border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white",onMouseenter:t[7]||(t[7]=e=>r.isWriting=!0),onMouseleave:t[8]||(t[8]=e=>r.isWriting=!1)},null,544),[[a.Jo,r.form.message]]),r.errors.message?((0,i.uX)(),(0,i.CE)("p",ne,(0,l.v_)(r.errors.message),1)):(0,i.Q3)("",!0)]),(0,i.Lk)("button",{type:"submit",class:"w-full bg-black text-white py-2 border rounded-md hover:bg-black-200 transition duration-300",onMouseenter:t[9]||(t[9]=e=>r.isHovering=!0),onMouseleave:t[10]||(t[10]=e=>r.isHovering=!1)}," Send ",32),r.successMessage?((0,i.uX)(),(0,i.CE)("p",le,(0,l.v_)(r.successMessage),1)):(0,i.Q3)("",!0)],32),t[16]||(t[16]=(0,i.Lk)("div",{class:"flex items-center justify-center text-center"},[(0,i.Lk)("p",{class:"text-lg"}," Got any idea? I’d love to collaborate! ")],-1))])])}var de={setup(){const e=(0,d.KR)({name:"",email:"",message:""}),t=(0,d.KR)({}),s=(0,d.KR)(""),a=(0,d.KR)(!1),i=(0,d.KR)(!1),r=()=>(t.value={},e.value.name||(t.value.name="Name is required."),e.value.email?/\S+@\S+\.\S+/.test(e.value.email)||(t.value.email="Email is invalid."):t.value.email="Email is required.",e.value.message||(t.value.message="Message is required."),0===Object.keys(t.value).length),o=()=>{r()&&(s.value="Thank you for reaching out! I’ll get back to you soon.",e.value={name:"",email:"",message:""},setTimeout((()=>s.value=""),5e3))};return{form:e,errors:t,successMessage:s,isHovering:a,isWriting:i,handleSubmit:o}}};const ue=(0,f.A)(de,[["render",ce],["__scopeId","data-v-237484e7"]]);var fe=ue;const ve={class:"min-h-screen bg-black text-white px-4 py-12"},me={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"};function pe(e,t,s,a,r,o){const n=(0,i.g2)("ProjectCard");return(0,i.uX)(),(0,i.CE)("div",ve,[t[0]||(t[0]=(0,i.Lk)("div",{class:"text-center mb-12"},[(0,i.Lk)("h1",{class:"text-4xl font-bold"},"Frontend Projects"),(0,i.Lk)("p",{class:"text-gray-400 mt-4"},"Showcasing modern frontend development.")],-1)),(0,i.Lk)("div",me,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(r.projects,(e=>((0,i.uX)(),(0,i.Wv)(n,{key:e.id,title:e.title,description:e.description,technologies:e.technologies},null,8,["title","description","technologies"])))),128))])])}const ge={class:"text-xl font-bold bg-black bg-opacity-50 p-2 rounded"},xe={class:"text-sm mt-2 bg-black bg-opacity-50 p-2 rounded"},he={class:"flex flex-wrap gap-2 mt-4"};function be(e,t,s,a,r,o){return(0,i.uX)(),(0,i.CE)("div",{class:"bg-cover bg-center text-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300",style:(0,l.Tr)({backgroundImage:`url(${s.thumbnail})`})},[(0,i.Lk)("h3",ge,(0,l.v_)(s.title),1),(0,i.Lk)("p",xe,(0,l.v_)(s.description),1),(0,i.Lk)("div",he,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.technologies,(e=>((0,i.uX)(),(0,i.CE)("span",{key:e,class:"bg-neutral-700 text-xs px-2 py-1 rounded-full"},(0,l.v_)(e),1)))),128))]),t[0]||(t[0]=(0,i.Lk)("button",{class:"mt-4 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300"}," View Project ",-1))],4)}var we={props:{title:String,description:String,technologies:Array,thumbnail:String}};const ke=(0,f.A)(we,[["render",be]]);var ye=ke,je={components:{ProjectCard:ye},data(){return{projects:[{id:1,title:"Portfolio Website",description:"A modern portfolio built with Vue.js and Tailwind CSS.",technologies:["Vue.js","Tailwind CSS","JavaScript"]},{id:2,title:"E-commerce Store",description:"A responsive e-commerce website with dynamic features.",technologies:["React","CSS","Firebase"]}]}}};const Ce=(0,f.A)(je,[["render",pe]]);var Le=Ce;const Se={class:"min-h-screen bg-black text-white px-4 py-12"},Ee={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"};function Me(e,t,s,a,r,o){const n=(0,i.g2)("ProjectCard");return(0,i.uX)(),(0,i.CE)("div",Se,[t[0]||(t[0]=(0,i.Lk)("div",{class:"text-center mb-12"},[(0,i.Lk)("h1",{class:"text-4xl font-bold"},"Backend Projects"),(0,i.Lk)("p",{class:"text-gray-400 mt-4"},"Showcasing robust backend development.")],-1)),(0,i.Lk)("div",Ee,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(r.projects,(e=>((0,i.uX)(),(0,i.Wv)(n,{key:e.id,title:e.title,description:e.description,technologies:e.technologies},null,8,["title","description","technologies"])))),128))])])}var Ae={components:{ProjectCard:ye},data(){return{projects:[{id:1,title:"API Service",description:"A RESTful API built with Node.js and Express.",technologies:["Node.js","Express","MongoDB"]},{id:2,title:"Authentication System",description:"A secure authentication system with JWT.",technologies:["Node.js","JWT","PostgreSQL"]}]}}};const _e=(0,f.A)(Ae,[["render",Me]]);var Fe=_e;const Xe={class:"min-h-screen bg-black text-white px-4 py-12"},Te={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"};function Pe(e,t,s,a,r,o){const n=(0,i.g2)("ProjectCard");return(0,i.uX)(),(0,i.CE)("div",Xe,[t[0]||(t[0]=(0,i.Lk)("div",{class:"text-center mb-12"},[(0,i.Lk)("h1",{class:"text-4xl font-bold"},"Frontend Projects"),(0,i.Lk)("p",{class:"text-gray-400 mt-4"},"Showcasing modern frontend development.")],-1)),(0,i.Lk)("div",Te,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(r.projects,(e=>((0,i.uX)(),(0,i.Wv)(n,{key:e.id,title:e.title,description:e.description,technologies:e.technologies},null,8,["title","description","technologies"])))),128))])])}var Ie={components:{ProjectCard:ye},data(){return{projects:[{id:1,title:"Portfolio Website",description:"A modern portfolio built with Vue.js and Tailwind CSS.",technologies:["Vue.js","Tailwind CSS","JavaScript"]},{id:2,title:"E-commerce Store",description:"A responsive e-commerce website with dynamic features.",technologies:["React","CSS","Firebase"]}]}}};const We=(0,f.A)(Ie,[["render",Pe]]);var Oe=We;const Be={class:"min-h-screen bg-black text-white px-4 py-12"},Re={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"};function He(e,t,s,r,o,n){const l=(0,i.g2)("ProjectCard");return(0,i.uX)(),(0,i.Wv)(a.eB,{name:"fade",mode:"out-in"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",Be,[t[0]||(t[0]=(0,i.Lk)("div",{class:"text-center mb-12"},[(0,i.Lk)("h1",{class:"text-4xl font-bold"},"UI/UX Projects"),(0,i.Lk)("p",{class:"text-gray-400 mt-4"},"Showcasing creative UI/UX designs.")],-1)),(0,i.Lk)("div",Re,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(o.projects,(e=>((0,i.uX)(),(0,i.Wv)(l,{key:e.id,title:e.title,description:e.description,technologies:e.technologies},null,8,["title","description","technologies"])))),128))])])])),_:1})}var Ke={components:{ProjectCard:ye},data(){return{projects:[{id:1,title:"Landing Page Design",description:"A clean and modern landing page for a SaaS product.",technologies:["Figma","Adobe XD","CSS"]},{id:2,title:"Mobile App UI",description:"A user-friendly mobile app interface for e-commerce.",technologies:["Sketch","InVision","React Native"]}]}}};const Ge=(0,f.A)(Ke,[["render",He]]);var Ue=Ge;const Ve=[{path:"/",component:P},{path:"/aboutme",component:H},{path:"/projects",component:J},{path:"/certificates",component:se},{path:"/contact",name:"Contact",component:fe},{path:"/frontend",name:"Frontend",component:Le},{path:"/backend",name:"Backend",component:Fe},{path:"/mobile",name:"Mobile",component:Oe},{path:"/uiux",name:"UIUX",component:Ue}],$e=(0,E.aE)({history:(0,E.LA)("/"),routes:Ve});var De=$e;(0,a.Ef)(S).use(De).mount("#app")}},t={};function s(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,s),r.exports}s.m=e,function(){var e=[];s.O=function(t,a,i,r){if(!a){var o=1/0;for(d=0;d<e.length;d++){a=e[d][0],i=e[d][1],r=e[d][2];for(var n=!0,l=0;l<a.length;l++)(!1&r||o>=r)&&Object.keys(s.O).every((function(e){return s.O[e](a[l])}))?a.splice(l--,1):(n=!1,r<o&&(o=r));if(n){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,i,r]}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.p="/"}(),function(){var e={524:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,r,o=a[0],n=a[1],l=a[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in n)s.o(n,i)&&(s.m[i]=n[i]);if(l)var d=l(s)}for(t&&t(a);c<o.length;c++)r=o[c],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(d)},a=self["webpackChunkmy_vue_project"]=self["webpackChunkmy_vue_project"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[504],(function(){return s(891)}));a=s.O(a)})();
//# sourceMappingURL=app.3d9db3b7.js.map