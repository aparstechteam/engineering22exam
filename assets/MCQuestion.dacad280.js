var C=Object.defineProperty,M=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var T=(a,s,d)=>s in a?C(a,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):a[s]=d,y=(a,s)=>{for(var d in s||(s={}))D.call(s,d)&&T(a,d,s[d]);if(w)for(var d of w(s))I.call(s,d)&&T(a,d,s[d]);return a},p=(a,s)=>M(a,H(s));import{M as N,P as A,s as O,a as S,o,b as n,d as r,j as l,N as R,w as J,t as h,f as L,F as x,h as v,p as j,i as B,n as g,O as f}from"./index.825ad7b4.js";import{_ as Q}from"./plugin-vue_export-helper.21dcd24c.js";const V={data(){return{timing:null,solutionv:!1,retake:!1,questions:[],solution:[],result:[],unknown:!1,loading:!0,eload:!1,minute:0,second:0,end:Date.now()+12e6,show:!1,url:"",solutionpdf:"",starttime:Date.now(),ended:null,inttime:109090,immediate:!0,viewDetails:!1,score:null,status:{Correct:0,Wrong:0,Not_Answered:0}}},beforeRouteEnter(a,s,d){var t;if((t=JSON.parse(localStorage.getItem("ac_private22")))==null?void 0:t.reg){d();return}d({path:"/login"})},methods:{optionSelected(a,s){this.questions[a].selected=s,localStorage.setItem(`acquestions${this.$route.params.id}`,JSON.stringify(this.questions))},endalert(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},getQuestionLink(){this.loading=!0;let a=null;fetch(N+"?type=examlist&id="+this.$route.params.id).then(s=>s.json()).then(s=>{if(new Date(s.exam.start_time).getTime()>Date.now()){this.$router.push("/");return}this.url="https://script.google.com/macros/s/AKfycbz9OmMxzknSGJ96kpT8vuatKAxa2BLJ6qnC-fsCufUkeiSymRniQAs4OFTiHY8lQ3zZ1Q/exec?sheet="+s.exam.exam.substr(39,44),this.ended=new Date(s.exam.end_time).getTime(),this.timelimit=s.exam.timelimit*6e4,this.immediate=!s.exam.special,this.solutionpdf=s.exam.solve_sheet,a=s.exam.time;let d=JSON.parse(localStorage.getItem("ac_private22")).uid;fetch(this.url+"&type=check&phone="+d).then(m=>m.json()).then(m=>{m.message=="exists"?(this.ended<Date.now()?(this.result=m.result?m.result:["","Time's up"],fetch(this.url+"&type=question").then(t=>t.json()).then(t=>{this.solution=t;let i=a;this.inttime=i*6e4,this.end=i*6e4})):this.result=m.result?m.result:["","Check After The Time Ends"],this.loading=!1):(this.unknown=!0,fetch(this.url+"&type=question").then(t=>t.json()).then(t=>{let i=localStorage.getItem(`attempt${this.$route.params.id}`);i?localStorage.setItem(`attempt${this.$route.params.id}`,Number(i)+1):localStorage.setItem(`attempt${this.$route.params.id}`,1);let c=localStorage.getItem(`acquestions${this.$route.params.id}`);c?this.questions=JSON.parse(c):(this.questions=t.map(e=>p(y({},e),{selected:""})),this.questions=this.questions.sort(()=>Math.random()-.5));let b=localStorage.getItem(`actime${this.$route.params.id}`)||JSON.stringify({start:new Date().getTime(),end:new Date().getTime()+a*6e4});if(localStorage.setItem(`actime${this.$route.params.id}`,b),b){b=JSON.parse(b);let e=b.end-Date.now();this.inttime=e,this.end=e}this.loading=!1,this.showRemaining(this.end+Date.now()),this.autoSubmit()}))})})},startRetake(){this.retake=!0,this.showRemaining(Date.now()+this.end)},retakeResult(){let a=this.solution.reduce((s,d)=>(d.correct==d.selected?(s+=1,this.status.Correct+=1):d.selected?(s-=.25,this.status.Wrong+=1):this.status.Not_Answered+=1,s),0);this.$swal({icon:"success",title:"Success",text:`You Scored ${a}`}).then(()=>{this.retake=!1,this.show=!1,this.questions=this.solution,this.viewDetails=!this.viewDetails,this.inttime=this.solution.length,this.score=a,this.solution=this.solution.map(s=>p(y({},s),{selected:""})),window.scroll(0,0)})},submitAns(){let a=Date.now()-this.starttime;this.eload=!0,this.questions=JSON.parse(localStorage.getItem(`acquestions${this.$route.params.id}`));let s=this.questions.reduce((c,b)=>(b.correct==b.selected?(c+=10,this.status.Correct+=1):b.selected?(c-=2.5,this.status.Wrong+=1):this.status.Not_Answered+=1,c),0);clearTimeout(this.timing);let{uid:d,name:m,college:t}=JSON.parse(localStorage.getItem("ac_private22")),i=this.questions.map((c,b)=>{let u=[c.a,c.b,c.c,c.d].indexOf(c.selected);return{id:b,s:u}}).filter(c=>c.s>-1);fetch(this.url,{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify({roll:d,name:m,attempt:localStorage.getItem(`attempt${this.$route.params.id}`)||1,score:s,college:t,duration:a,submission:JSON.stringify(i)})}).then(()=>{clearTimeout(this.timing),this.$swal({icon:"success",title:"Success",text:"Score will be published soon"}).then(()=>{localStorage.removeItem(`attempt${this.$route.params.id}`),localStorage.removeItem(`acquestions${this.$route.params.id}`),localStorage.removeItem(`actime${this.$route.params.id}`),this.gotoLeaderboard(),window.scroll(0,0)})})},gotoLeaderboard(){this.$router.replace("/")},autoSubmit(){this.timing=setTimeout(()=>{this.show=!1,this.submitAns()},this.inttime)},showRemaining(a){this.show=!0;const s=setInterval(()=>{const d=a-Date.now();if(d<0){clearInterval(s);return}const m=Math.floor(d/this._days),t=Math.floor(d%this._days/this._hours),i=Math.floor(d%this._hours/this._minutes),c=Math.floor(d%this._minutes/this._seconds);this.second=c<10?"0"+c:c,this.minute=i<10?"0"+i:i,this.hours=t<10?"0"+t:t,this.days=m<10?"0"+m:m},1e3)}},created(){this.getQuestionLink(),window.scrollTo(0,0)},computed:p(y({},A(["user"])),{_seconds:()=>1e3,_minutes(){return this._seconds*60},_hours(){return this._minutes*60},_days(){return this._hours*24},currentTime:()=>O.state.currentTime})},k=a=>(j("data-v-c7844ebc"),a=a(),B(),a),W={key:0,class:"py-5 mx-auto mt-5 rounded bg-gray-50 md:w-2/3"},E={class:"py-3 text-center"},z={key:0,class:"my-4 text-2xl font-bold text-gray-900 ma-auto"},Y={key:0},$={key:1,class:"text-center text-gray-900"},F={class:"py-5"},K=f(" View Solution "),P=["textContent"],G={key:0,class:"my-5 text-center"},U={key:1,class:"text-center"},Z=["textContent"],X={key:2,class:"text-center"},q=k(()=>r("button",{class:"btn loading btn-circle"},null,-1)),ee=[q],te={key:3,class:"my-4 font-semibold text-center text-gray-900"},se={key:1,class:"pb-10"},re={class:"py-4 text-center"},oe={class:"text-2xl font-bold text-gray-900 dark:text-white"},ne=k(()=>r("p",{class:"text-center dark:text-white"}," \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09A4\u09C1\u09AE\u09BF \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09B0\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u09AC\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BE\u0987\u0964 ",-1)),ie={class:"mx-2 text-gray-900 md:w-2/3 md:mx-auto"},le=["innerHTML"],ae={class:"mt-3"},de=["innerHTML","onClick"],ce=["innerHTML","onClick"],ue=["innerHTML","onClick"],he=["innerHTML","onClick"],me={class:"mb-10 text-center"},ge={key:2,class:"pb-10"},be={class:"py-4 text-center"},_e={class:"text-2xl font-bold text-gray-900 dark:text-white"},ye=k(()=>r("p",{class:"text-center dark:text-white"}," \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09A4\u09C1\u09AE\u09BF \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09B0\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u09AC\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BE\u0987\u0964 ",-1)),pe={key:0,class:"mx-2 md:w-2/3 md:mx-auto noselect"},xe=["innerHTML"],ke={class:"mt-3"},ve=["innerHTML","onClick"],fe=["innerHTML","onClick"],we=["innerHTML","onClick"],Te=["innerHTML","onClick"],Se={key:0,class:"my-2 text-center"},Le={key:1,class:"mb-10 text-center"},Ce=["disabled"],Me={key:1,class:"mx-2 md:w-2/3 md:mx-auto"},He={class:"flex flex-wrap justify-center"},De={class:"w-full p-3 md:w-1/2"},Ie={class:"text-center"},Ne={class:"text-lg font-semibold text-gray-900 dark:text-white"},Ae={class:"text-gray-600 dark:text-white"},Oe={class:"flex flex-wrap items-center justify-center gap-3 p-3 rounded bg-gray-50"},Re={class:"text-gray-900"},Je={class:"text-lg font-bold"},je={class:"text-lg font-bold"},Be={class:"text-lg font-bold"},Qe={class:"text-lg font-bold"},Ve=["innerHTML"],We={class:"mt-3"},Ee=["innerHTML"],ze=["innerHTML"],Ye=["innerHTML"],$e=["innerHTML"],Fe={key:0,class:"my-2 poppins"},Ke=["innerHTML"],Pe={class:"material-icons"},Ge={key:0,class:"my-2 text-center"},Ue={key:1,class:"mb-10 text-center"},Ze=["disabled"],Xe={key:3,class:"white--text fixed__timer"},qe={class:"text-white bg-blue-500 border border-white shadow"},et={key:1,class:"flex items-center justify-center w-full h-screen"},tt=k(()=>r("div",{class:"flex items-center justify-center -mt-24 space-x-1 text-sm text-gray-700"},[r("svg",{fill:"none",class:"w-10 h-10 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[r("path",{"clip-rule":"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor","fill-rule":"evenodd"})]),r("div",{class:"text-lg dark:text-white"},"Loading ...")],-1)),st=[tt];function rt(a,s,d,m,t,i){const c=S("router-link"),b=S("pie-chart");return t.loading?(o(),n("div",et,st)):(o(),n("div",{key:0,onContextmenu:e=>!1},[!t.unknown&&!t.loading&&!t.retake?(o(),n("div",W,[r("div",E,[t.result[1]?(o(),n("h2",z,[t.result[1]!=="Time's up"?(o(),n("span",Y,"Wait for result")):l("",!0)])):l("",!0),t.result[1]=="Time's up"?(o(),n("p",$,"But you can still give the exam. Click 'Test yourself again'.")):l("",!0),r("div",F,[this.ended<i.currentTime?(o(),R(c,{key:0,to:`/solution/${this.$route.params.id}`,class:"my-2 btn btn-primary"},{default:J(()=>[K]),_:1},8,["to"])):(o(),n("button",{key:1,class:"btn btn-primary",onClick:s[0]||(s[0]=(...e)=>i.endalert&&i.endalert(...e)),textContent:h("View Solution")},null,8,P))])]),this.ended<i.currentTime&&!t.retake&&t.solution.length>0?(o(),n("div",G,[L(c,{to:`/ranking/${this.$route.params.id}`,class:"mx-auto my-2 btn btn-primary",text:"View Your Rank"},null,8,["to"])])):l("",!0),this.ended<i.currentTime&&!t.retake&&t.solution.length>0?(o(),n("div",U,[r("button",{class:"mx-auto btn btn-primary",onClick:s[1]||(s[1]=(...e)=>i.startRetake&&i.startRetake(...e)),textContent:h("Test Yourself Again")},null,8,Z)])):this.ended<i.currentTime?(o(),n("div",X,ee)):l("",!0),!t.retake&&t.solution.length>0?(o(),n("div",te," Retake exam score will not be recorded ")):l("",!0)])):l("",!0),t.retake?(o(),n("div",se,[r("div",re,[r("h1",oe," Retake Exam - "+h(this.$route.params.id),1),ne]),r("div",ie,[(o(!0),n(x,null,v(t.solution,(e,u)=>(o(),n("div",{key:u,class:g(["p-5 mx-auto my-3 text-lg text-gray-900 border border-gray-300 rounded-md shadow-lg bg-gray-50 kalpurush",{"stop-events":t.solution[u].selected}])},[r("div",{class:"inline-flex",innerHTML:`<span class='mr-2'>${u+1})</span>`+e.question},null,8,le),r("div",ae,[e.a?(o(),n("div",{key:0,innerHTML:e.a,onClick:_=>t.solution[u].selected=e.a,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold text-black  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-green-300 dark:bg-indigo-400 dark:border-indigo-500 ":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,de)):l("",!0),e.b?(o(),n("div",{key:1,innerHTML:e.b,onClick:_=>t.solution[u].selected=e.b,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-green-300 dark:bg-indigo-400 dark:border-indigo-500 ":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,ce)):l("",!0),e.c?(o(),n("div",{key:2,innerHTML:e.c,onClick:_=>t.solution[u].selected=e.c,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-green-300 dark:bg-indigo-400 dark:border-indigo-500 ":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,ue)):l("",!0),e.d?(o(),n("div",{key:3,innerHTML:e.d,onClick:_=>t.solution[u].selected=e.d,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-green-300 dark:bg-indigo-400 dark:border-indigo-500 ":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,he)):l("",!0)])],2))),128)),r("div",me,[r("button",{onClick:s[2]||(s[2]=(...e)=>i.retakeResult&&i.retakeResult(...e)),class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"}," Submit ")])])])):l("",!0),t.questions.length>0?(o(),n("div",ge,[r("div",be,[r("h1",_e," Exam - "+h(this.$route.params.id),1),ye]),t.viewDetails?(o(),n("div",Me,[r("div",null,[r("div",He,[r("div",De,[r("div",Ie,[r("h3",Ne," You Scored: "+h(t.score),1),r("p",Ae," out of "+h(t.questions.length),1)])])])]),r("div",null,[r("div",Oe,[r("div",null,[L(b,{data:t.status},null,8,["data"])]),r("div",Re,[r("p",Je," Total: "+h(t.questions.length),1),r("p",je," Correct: "+h(t.status.Correct),1),r("p",Be," Incorrect: "+h(t.status.Wrong),1),r("p",Qe," Not Answered: "+h(t.status.Not_Answered),1)])])]),(o(!0),n(x,null,v(t.questions,(e,u)=>(o(),n("div",{key:u,class:"p-5 mx-auto my-3 text-lg border border-gray-300 rounded-md shadow-lg bg-gray-50 dark:bg-black dark:text-white kalpurush"},[r("div",{class:"inline-flex mb-2 text-lg font-semibold",innerHTML:`<span class='mr-2'>${u+1})</span>`+e.question},null,8,Ve),r("div",We,[e.a?(o(),n("div",{key:0,innerHTML:e.a,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold text-black  my-3 p-3 rounded   ${e.a==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"} ${e.a==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,Ee)):l("",!0),e.b?(o(),n("div",{key:1,innerHTML:e.b,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.b==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"} ${e.b==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,ze)):l("",!0),e.c?(o(),n("div",{key:2,innerHTML:e.c,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.c==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"} ${e.c==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,Ye)):l("",!0),e.d?(o(),n("div",{key:3,innerHTML:e.d,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded   ${e.d==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"} ${e.d==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,$e)):l("",!0)]),e.explain?(o(),n("h2",Fe,"Explain:")):l("",!0),e.explain?(o(),n("div",{key:1,class:"p-3 my-3 bg-gray-200 border border-green-500 rounded dark:bg-gray-600",innerHTML:e.explain},null,8,Ke)):l("",!0),r("div",{class:g(["flex gap-2 my-2 text-xl font-semibold",{"text-red-500":e.correct!=e.selected,"text-green-500":e.correct==e.selected}])},[r("span",Pe,h(e.correct==e.selected?"done":"close"),1),e.selected?(o(),n(x,{key:0},[f(h(e.correct==e.selected?"Correct":"Wrong"),1)],64)):l("",!0),f(" "+h(e.selected?"":"Not answered"),1)],2)]))),128)),t.viewDetails?(o(),n("div",Ge,[r("button",{onClick:s[5]||(s[5]=(...e)=>i.gotoLeaderboard&&i.gotoLeaderboard(...e)),class:"btn btn-large btn-primary"}," Leaderboard ")])):l("",!0),t.viewDetails?l("",!0):(o(),n("div",Ue,[r("button",{onClick:s[6]||(s[6]=(...e)=>i.submitAns&&i.submitAns(...e)),disabled:t.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},h(t.eload?"Loading...":"Submit"),9,Ze)]))])):(o(),n("div",pe,[(o(!0),n(x,null,v(t.questions,(e,u)=>(o(),n("div",{key:u,class:g(["p-5 mx-auto my-3 text-lg border border-gray-300 rounded-md shadow-lg bg-gray-50 kalpurush",{"stop-events":t.questions[u].selected}])},[r("div",{class:"inline-flex mb-2 text-lg font-semibold text-gray-900",innerHTML:`<span class='mr-2'>${u+1})</span>`+e.question},null,8,xe),r("div",ke,[e.a?(o(),n("div",{key:0,innerHTML:e.a,onClick:_=>i.optionSelected(u,e.a),class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,ve)):l("",!0),e.b?(o(),n("div",{key:1,innerHTML:e.b,onClick:_=>i.optionSelected(u,e.b),class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,fe)):l("",!0),e.c?(o(),n("div",{key:2,innerHTML:e.c,onClick:_=>i.optionSelected(u,e.c),class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,we)):l("",!0),e.d?(o(),n("div",{key:3,innerHTML:e.d,onClick:_=>i.optionSelected(u,e.d),class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,Te)):l("",!0)])],2))),128)),t.viewDetails?(o(),n("div",Se,[r("button",{onClick:s[3]||(s[3]=(...e)=>i.gotoLeaderboard&&i.gotoLeaderboard(...e)),class:"btn btn-large btn-primary"}," Leaderboard ")])):l("",!0),t.viewDetails?l("",!0):(o(),n("div",Le,[r("button",{onClick:s[4]||(s[4]=(...e)=>i.submitAns&&i.submitAns(...e)),disabled:t.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},h(t.eload?"Loading...":"Submit"),9,Ce)]))]))])):l("",!0),t.show?(o(),n("div",Xe,[r("div",qe,h(t.minute)+" : "+h(t.second),1)])):l("",!0)],32))}var lt=Q(V,[["render",rt],["__scopeId","data-v-c7844ebc"]]);export{lt as default};
