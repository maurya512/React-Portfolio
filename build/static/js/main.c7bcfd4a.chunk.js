(this["webpackJsonpreact-portfolio-template-v2"]=this["webpackJsonpreact-portfolio-template-v2"]||[]).push([[0],{18:function(e,a,t){e.exports=t(30)},23:function(e,a,t){},24:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(15),c=t.n(r),o=(t(23),t(24),t(8)),i=t(5),m=function(e){var a=e.name,t=e.contactEmail;return l.a.createElement("div",null,l.a.createElement("div",{className:"header_container"},l.a.createElement(o.b,{to:"/"},l.a.createElement("h1",null,a,".")),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/about"},"about")),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:".concat(t)},"contact"))))))},s=t(9),u=function(e){var a=e.contactEmail,t=e.contactPara,n=e.socialLinks;return l.a.createElement("div",{className:"contact_container"},l.a.createElement("h1",null,"Get in touch."),l.a.createElement("p",null,t),l.a.createElement("br",null),l.a.createElement("a",{className:"email_link",href:"mailto:".concat(a)},a),l.a.createElement("div",{className:"social_links"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:".concat(a)},l.a.createElement(s.a,null))),l.a.createElement("li",null,l.a.createElement("a",{href:n[0].url},l.a.createElement(s.c,null))),l.a.createElement("li",null,l.a.createElement("a",{href:n[1].url},l.a.createElement(s.b,null))))))},p={name:"MP",contactEmail:"mauryapatel12@gmail.com",landingPageName:"Maurya Patel",landingPagePara:"Full Stack Web Developer with an expertise in the MERN stack.",landingPageImage:"assets/mp1.jpg",projects:[{id:1,title:"Stock Watch",imageSrc:"assets/sw.png",url:"https://misterjaykay.github.io/Project-1/",description:"This project was created with an incredible team to let a common working Joe get basic knowledge of the Stock Market and financial news around the world."},{id:2,title:"Space Saverr",imageSrc:"assets/ss.png",url:"https://github.com/ElhamFabe/Space-Saverr",description:"Online Shopping made simple with an easy to use comparison tool where you get the best deals from 2 of your major online retailers in 1 location."},{id:3,title:"Fitness Tracker(Using Remote Database)",imageSrc:"assets/ft1.png",url:"https://fitness-trackerr.herokuapp.com/?id=5f5da1ec7054cb0017bec71e",description:"A Simple fitness tracker app that tracks all your workouts helping you stay on track for your fitness goals."},{id:4,title:"Online and Offline Expense Tracker",imageSrc:"assets/bt1.png",url:"https://agile-springs-64212.herokuapp.com/",description:"An Online and Offline Expense Tracker that tracks your deposits and expenses whether you're connected to the internet or not"},{id:5,title:"Coffee App",imageSrc:"https://via.placeholder.com/300",url:"https://github.com/Carlo-Defilippis/Coffee_App",description:"An app template for a local Coffee Shop"},{id:6,title:"Maurya's Ecomm-Store(Work in progress)",imageSrc:"https://via.placeholder.com/300",url:"https://github.com/maurya512/ecomm-store",description:"A dummy ecommerce store to brush up my skills."}],contactPara:"Web Developing is more as a team. If you are looking for someone who brings great interpersonal skills as well as solid Full Stack Development knowledge let's get in touch.",social:[{name:"LinkedIn",url:"https://www.linkedin.com/in/maurya-patel-1696a91b2/"},{name:"Github",url:"https://www.github.com/maurya512"}],aboutTitle:"I try to build something impactful for the community and am constantly evolving my skill set in order to do so!",aboutPara:"A Full Stack Web Developer who graduated from an intense Coding Bootcamp eager to get involved with real world projects. I bring high energy, time punctuality and out of the box thinking to the table. I am thorough team player but can also be a self-starter. I plan to improve my current skill set with more real world projects and connecting with people highly respected in this field."},h=function(){return l.a.createElement("div",null,l.a.createElement(m,{name:p.name,contactEmail:p.contactEmail}),l.a.createElement("div",{className:"about_container"},l.a.createElement("h1",null,p.aboutTitle),l.a.createElement("p",null,p.aboutPara),l.a.createElement("div",{className:"about_contact"},l.a.createElement(u,{contactEmail:p.contactEmail,contactPara:p.contactPara,socialLinks:p.social}))))},d=function(e){var a=e.name,t=e.paragraph,n=e.authorImage;return l.a.createElement("div",null,l.a.createElement("div",{className:"home_container"},l.a.createElement("div",{className:"home_head_wrapper"},l.a.createElement("h1",null," Hello I 'm ",l.a.createElement("br",null)," ",l.a.createElement("span",null,a)),l.a.createElement("p",null,t)),l.a.createElement("div",{className:"image_container"},l.a.createElement("img",{src:n,alt:"Author"}),l.a.createElement("div",{className:"bg"}))))},E=function(e){var a=e.projects;return l.a.createElement("div",{className:"work_container"},l.a.createElement("h1",null,"Projects."),l.a.createElement("div",{className:"projects_container"},a.map((function(e){return l.a.createElement("div",{key:e.id,className:"project"},l.a.createElement("div",{className:"image"},l.a.createElement("a",{href:e.url},l.a.createElement("img",{src:e.imageSrc,alt:e.title}))),l.a.createElement("div",{className:"title"},e.title),l.a.createElement("div",{className:"description"},e.description))}))))},g=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m,{name:p.name,contactEmail:p.contactEmail}),l.a.createElement(d,{name:p.landingPageName,paragraph:p.landingPagePara,authorImage:p.landingPageImage}),l.a.createElement(E,{projects:p.projects}),l.a.createElement(u,{contactEmail:p.contactEmail,contactPara:p.contactPara,socialLinks:p.social}))};var f=function(){return l.a.createElement(o.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/about"},l.a.createElement(h,null)),l.a.createElement(i.a,{path:"/",exact:!0},l.a.createElement(g,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.c7bcfd4a.chunk.js.map