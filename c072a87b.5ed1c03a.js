(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{156:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return b}));var n=a(2),o=a(9),i=(a(0),a(181)),c=a(176),s=a(177),r={id:"client-side-apps",title:"Client-side applications",image:"/img/client-scheme.png"},l={id:"advanced/client-side-apps",isDocsHomePage:!1,title:"Client-side applications",description:"The access token you get from your account page allow you to makes queries on the Trefle API, but your token needs to be kept secret, so you can't make queries from the browser as the user on your website will see the access token, and could use it for their personal needs. Additionally this is not a good practice in developing software.",source:"@site/docs/advanced/client-side-apps.md",permalink:"/docs/advanced/client-side-apps",editUrl:"https://github.com/treflehq/documentation/edit/master/docs/advanced/client-side-apps.md",lastUpdatedBy:"Michaellis",lastUpdatedAt:1597106932,sidebar:"someSidebar",previous:{title:"Plants fields",permalink:"/docs/advanced/plants-fields"},next:{title:"Complete our data",permalink:"/docs/advanced/complete-data"}},d=[],u={rightToc:d};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The access token you get from ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://trefle.io/profile"}),"your account page")," allow you to makes queries on the Trefle API, but your token needs to be kept secret, so ",Object(i.b)("strong",{parentName:"p"},"you can't make queries from the browser as the user on your website will see the access token"),", and could use it for their personal needs. Additionally this is not a good practice in developing software."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/client-scheme.png",alt:"client workflow"}))),Object(i.b)("p",null,"If you need to perform client-side requests you will have to request a client-side token from your own backend and get a JWT token in return. This token will be usable on the client side. This call needs your secret access token and the url of the website that the client side requests will come from."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Because this is a ",Object(i.b)("strong",{parentName:"p"},"POST")," request it can't be done directly from the browser."))),Object(i.b)(c.a,{groupId:"supports",defaultValue:"browser",values:[{label:"CURL",value:"curl"},{label:"NodeJS",value:"node"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"curl",mdxType:"TabItem"},Object(i.b)("p",null,"In your terminal:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl -X POST 'https://trefle.io/api/auth/claim?token=YOUR_TREFLE_TOKEN&origin=YOUR-WEBSITE-URL&ip=12.34.56.78\"'\n"))),Object(i.b)(s.a,{value:"node",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const fetch = require('node-fetch');\n\n// The parameters for our POST request\nconst params = {\n  origin: 'YOUR-WEBSITE-URL',\n  ip: 'THE-WEBSITE-USER-IP',\n  token: 'YOUR_TREFLE_TOKEN'\n}\n\n(async () => {\n  const response = await fetch(\n    'https://trefle.io/api/auth/claim', {\n      method: 'post',\n      body: JSON.stringify(params),\n      headers: { 'Content-Type': 'application/json' }\n    });\n  const json = await response.json();\n  console.log(json);\n})();\n")))),Object(i.b)("p",null,"And we get:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMDYsIm9yaWdpbiI6IllPVVItV0VCU0lURS1VUkwiLCJpcCI6IlRIRS1XRUJTSVRFLVVTRVItSVAiLCJleHAiOjE1OTQ2NDIxNDh9.Vd2d3UK7zdNWZLBOn8y50NcUKuF8xFZgh6p7EB4fhVw",\n  "expiration": "07-13-2020 14:09"\n}\n')),Object(i.b)("p",null,"You can then use this token directly from the browser. It can't be used from another origin, will expire and only works for your website."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"About the user IP")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Putting the user remote IP in the claim API call is optionnal, but it provides an additional security layer. We don't keep or store this information."))))}b.isMDXComponent=!0},176:function(e,t,a){"use strict";a(25),a(21),a(20);var n=a(0),o=a.n(n),i=a(184),c=a(172),s=a(130),r=a.n(s),l=37,d=39;t.a=function(e){var t=e.block,a=e.children,s=e.defaultValue,u=e.values,b=e.groupId,p=Object(i.a)(),m=p.tabGroupChoices,h=p.setTabGroupChoices,f=Object(n.useState)(s),O=f[0],j=f[1];if(null!=b){var v=m[b];null!=v&&v!==O&&u.some((function(e){return e.value===v}))&&j(v)}var g=function(e){j(e),null!=b&&h(b,e)},w=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},u.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":O===t,className:Object(c.a)("tabs__item",r.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){return function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return g(t)},onClick:function(){return g(t)}},a)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===O}))[0]))}},177:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);