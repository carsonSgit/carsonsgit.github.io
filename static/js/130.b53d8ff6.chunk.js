"use strict";(self.webpackChunkcarsonsgit_github_io=self.webpackChunkcarsonsgit_github_io||[]).push([[130],{3130:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var i=r(5043),n=Object.defineProperty,a=(e,t,r)=>((e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r)(e,"symbol"!==typeof t?t+"":t,r),o=new Map,s=new WeakMap,c=0,l=void 0;function h(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(r=e.root,r?(s.has(r)||(c+=1,s.set(r,c.toString())),s.get(r)):"0"):e[t]}`;var r})).toString()}function d(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:l;if("undefined"===typeof window.IntersectionObserver&&void 0!==i){const n=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"===typeof r.threshold?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:a,elements:s}=function(e){const t=h(e);let r=o.get(t);if(!r){const i=new Map;let n;const a=new IntersectionObserver((t=>{t.forEach((t=>{var r;const a=t.isIntersecting&&n.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=a),null==(r=i.get(t.target))||r.forEach((e=>{e(a,t)}))}))}),e);n=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:a,elements:i},o.set(t,r)}return r}(r),c=s.get(e)||[];return s.has(e)||s.set(e,c),c.push(t),a.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(s.delete(e),a.unobserve(e)),0===s.size&&(a.disconnect(),o.delete(n))}}i.Component;var g=r(184),u=r(9075),p=r(579);const b=e=>{let{project:t}=e;const[r,n]=function(){let{threshold:e,delay:t,trackVisibility:r,rootMargin:n,root:a,triggerOnce:o,skip:s,initialInView:c,fallbackInView:l,onChange:h}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var g;const[u,p]=i.useState(null),b=i.useRef(),[m,f]=i.useState({inView:!!c,entry:void 0});b.current=h,i.useEffect((()=>{if(s||!u)return;let i;return i=d(u,((e,t)=>{f({inView:e,entry:t}),b.current&&b.current(e,t),t.isIntersecting&&o&&i&&(i(),i=void 0)}),{root:a,rootMargin:n,threshold:e,trackVisibility:r,delay:t},l),()=>{i&&i()}}),[Array.isArray(e)?e.toString():e,u,a,n,o,s,r,l,t]);const y=null==(g=m.entry)?void 0:g.target,w=i.useRef();u||!y||o||s||w.current===y||(w.current=y,f({inView:!!c,entry:void 0}));const j=[p,m.inView,m.entry];return j.ref=j[0],j.inView=j[1],j.entry=j[2],j}({triggerOnce:!0,threshold:.1});return(0,p.jsx)(u.P.div,{className:"ProjectItem",style:{backgroundImage:`url(/${t.image})`},initial:{opacity:0},animate:{opacity:n?1:0,scale:n?1:.99},transition:{duration:.8},ref:r,role:"region","aria-labelledby":"project-title",children:(0,p.jsxs)("div",{className:"ProjectContent",children:[(0,p.jsx)("h2",{className:"ProjectTitle",children:t.title}),(0,p.jsx)("p",{className:"ProjectLanguages",children:t.languages}),(0,p.jsx)("p",{className:"ProjectDescription",dangerouslySetInnerHTML:{__html:t.description}}),(0,p.jsxs)("div",{className:"ProjectLinks",children:[t.github&&(0,p.jsxs)("a",{href:t.github,className:"ProjectLink",target:"_blank",rel:"noopener noreferrer","aria-label":`View ${t.title} on GitHub`,children:[(0,p.jsx)(g.hL4,{})," GitHub"]}),t.website&&(0,p.jsxs)("a",{href:t.website,className:"ProjectLink",target:"_blank",rel:"noopener noreferrer","aria-label":`Visit the website for ${t.title}`,children:[(0,p.jsx)(g.EQc,{})," Website"]})]})]})})},m=[{image:"cropcare.webp",title:"CropCare",languages:"Python, .NET MAUI, Raspberry Pi, IoT",description:"Developed an IoT container farm with leveraging Python, .NET MAUI, a Raspberry Pi, and Azure IoT hub for mobile monitoring and control. Our project was recognized as the top Capstone project in the history of my schools Application Development III & Connected Objects courses.",github:"https://github.com/carsonSgit/CropCare",website:"https://carsonsgit.github.io/cropcare-3d/"},{image:"linky.webp",title:"Linky",languages:"Mantine, TypeScript, RAG AI, Vector DB",description:'Linky is a hackathon winning project made for <a href="https://www.marihacks.com/" target="_blank" rel="noopener noreferrer">MariHacks 2024</a> in under 24hrs. It is a web app that uses a RAG AI & a Vector DB to turn your links into your own chatbot letting you interact with your URLs!',github:"https://github.com/carsonSgit/Linky",website:"https://www.linky.im/"},{image:"trademind.webp",title:"TradeMind",languages:"React, Python, Machine Learning",description:'TradeMind is a project developed for <a href="https://launchlab.ai/" target="_blank" rel="noopener noreferrer">AI Launch Lab</a>\'s <a href="https://launchlab.ai/rd-program/" target="_blank" rel="noopener noreferrer">R&D Program</a>. It is a web app that uses machine learning to predict stock prices and provide insights to users.',github:"https://github.com/carsonSgit/TradeMind",website:"https://trademind.pages.dev/"},{image:"pharmahacks2024.webp",title:"Mice Neural Decoding",languages:"Python, Jupyter Notebook, Machine Learning",description:'Mice Neural Decoding was a challenge at the <a href="https://pharmahacks.com/#welcome" target="_blank" rel="noopener noreferrer">PharmaHacks 2024</a> event. My group and I decoded mouse navigation decisions by analyzing L2/3 neuron activity in the retrosplenial cortex, following the findings of Tseng et al. (2022) in their Neuron Paper. Please read the README.md on the GitHub repo!',github:"https://github.com/carsonSgit/Mice-Neural-Decoding-ML",website:"https://github.com/carsonSgit/Mice-Neural-Decoding-ML/blob/main/PharmaHacks%202024%20Neural%20Decoding%20Single%20File.ipynb"}],f=()=>(0,p.jsxs)("div",{role:"region","aria-labelledby":"projects-title",children:[(0,p.jsxs)("h1",{id:"projects-title",className:"ProjectsTitle",children:[(0,p.jsx)("span",{className:"ProjectsTitleAnimated",children:"Notable"})," projects"]}),(0,p.jsx)("div",{className:"ProjectsContainer","aria-label":"List of notable projects",children:m.map(((e,t)=>(0,p.jsx)(b,{project:e},t)))})]})}}]);
//# sourceMappingURL=130.b53d8ff6.chunk.js.map