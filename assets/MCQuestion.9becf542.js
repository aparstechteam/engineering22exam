var M=Object.defineProperty,H=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var T=(a,s,i)=>s in a?M(a,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[s]=i,y=(a,s)=>{for(var i in s||(s={}))A.call(s,i)&&T(a,i,s[i]);if(w)for(var i of w(s))D.call(s,i)&&T(a,i,s[i]);return a},x=(a,s)=>H(a,S(s));import{E as N,O as I,J as R,v as C,j as o,k as n,l as r,y as l,I as p,m as u,H as W,C as O,B as L,F as k,x as f,L as j,M as B,G as g}from"./index.904c28c8.js";import{_ as J}from"./plugin-vue_export-helper.21dcd24c.js";const Y={data(){return{timing:null,solutionv:!1,retake:!1,questions:[],solution:[],result:[],unknown:!1,loading:!0,eload:!1,hours:0,minute:0,second:0,end:Date.now()+12e6,show:!1,url:"",solutionpdf:"",starttime:Date.now(),ended:null,inttime:109090,immediate:!0,viewDetails:!1,score:null,status:{Correct:0,Wrong:0,Not_Answered:0}}},beforeRouteEnter(a,s,i){var t;if((t=JSON.parse(localStorage.getItem("engineeringad_22")))==null?void 0:t.roll){i();return}i({path:"/login"})},methods:{endalert(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},getQuestionLink(){this.loading=!0;let a=null;fetch(N+"?type=examlist&id="+this.$route.params.id).then(s=>s.json()).then(s=>{if(new Date(s.exam.start_time).getTime()>Date.now()){this.$router.push("/");return}this.url="https://script.google.com/macros/s/AKfycbz9OmMxzknSGJ96kpT8vuatKAxa2BLJ6qnC-fsCufUkeiSymRniQAs4OFTiHY8lQ3zZ1Q/exec?sheet="+s.exam.exam.substr(39,44),this.ended=new Date(s.exam.end_time).getTime(),this.timelimit=s.exam.timelimit*6e4,this.immediate=!s.exam.special,this.solutionpdf=s.exam.solve_sheet,a=s.exam.time;let i=JSON.parse(localStorage.getItem("engineeringad_22")).roll;fetch(this.url+"&type=check&phone="+i).then(m=>m.json()).then(m=>{m.message=="exists"||this.ended<Date.now()?(this.result=m.result?m.result:["","Time's up"],fetch(this.url+"&type=question").then(t=>t.json()).then(t=>{this.solution=t;let d=a;this.inttime=d*6e4,this.end=d*6e4}),this.unknown=!1,this.loading=!1):(this.unknown=!0,fetch(this.url+"&type=question").then(t=>t.json()).then(t=>{let d=localStorage.getItem(`attempt${this.$route.params.id}`);d?localStorage.setItem(`attempt${this.$route.params.id}`,Number(d)+1):localStorage.setItem(`attempt${this.$route.params.id}`,1),this.questions=t.map(b=>x(y({},b),{selected:""})),this.questions=this.questions.sort(()=>Math.random()-.5);let c=a;this.inttime=c*6e4,this.end=c*6e4,this.loading=!1,this.showRemaining(this.end+Date.now()),this.autoSubmit()}))})})},startRetake(){this.retake=!0,this.showRemaining(Date.now()+this.end)},retakeResult(){let a=this.solution.reduce((s,i)=>(i.correct==i.selected?(s+=1,this.status.Correct+=1):i.selected?(s-=.25,this.status.Wrong+=1):this.status.Not_Answered+=1,s),0);this.$swal({icon:"success",title:"Success",text:`You Scored ${a}, Correct ${this.status.Correct} Wrong ${this.status.Wrong} Not Answered ${this.status.Not_Answered}`}).then(()=>{this.retake=!1,this.show=!1,this.questions=this.solution,this.viewDetails=!this.viewDetails,this.inttime=this.solution.length,this.score=a,this.solution=this.solution.map(s=>x(y({},s),{selected:""})),window.scroll(0,0)})},submitAns(){let a=Date.now()-this.starttime;this.eload=!0;let s=this.questions.reduce((c,b)=>(b.correct==b.selected?(c+=1,this.status.Correct+=1):b.selected?(c-=.25,this.status.Wrong+=1):this.status.Not_Answered+=1,c),0);clearTimeout(this.timing);let{roll:i,name:m,college:t}=JSON.parse(localStorage.getItem("engineeringad_22")),d=this.questions.map((c,b)=>{let h=[c.a,c.b,c.c,c.d].indexOf(c.selected);return{id:b,s:h}}).filter(c=>c.s>-1);fetch(this.url,{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify({roll:i,name:m,attempt:localStorage.getItem(`attempt${this.$route.params.id}`)||1,score:s,college:t,duration:a,submission:JSON.stringify(d)})}).then(()=>{clearTimeout(this.timing);let c=s>=this.questions.length;this.$swal({icon:c?"success":"error",title:c?"Well done!":"Sorry! You failed!",text:`You Scored ${s}, Correct: ${this.status.Correct}, Wrong: ${this.status.Wrong}, Not Answered: ${this.status.Not_Answered}`}).then(()=>{localStorage.removeItem(`attempt${this.$route.params.id}`),this.viewDetails=!0,this.show=!1,this.score=s,window.scroll(0,0)})})},gotoLeaderboard(){this.$router.replace(`/ranking/${this.$route.params.id}`)},autoSubmit(){this.timing=setTimeout(()=>{this.show=!1,this.submitAns()},this.inttime)},showRemaining(a){this.show=!0;const s=setInterval(()=>{const i=a-Date.now();if(i<0){clearInterval(s);return}const m=Math.floor(i/this._days),t=Math.floor(i%this._days/this._hours),d=Math.floor(i%this._hours/this._minutes),c=Math.floor(i%this._minutes/this._seconds);this.second=c<10?"0"+c:c,this.minute=d<10?"0"+d:d,this.hours=t<10?"0"+t:t,this.days=m<10?"0"+m:m},1e3)}},created(){this.getQuestionLink(),window.scrollTo(0,0)},computed:x(y({},I(["user"])),{_seconds:()=>1e3,_minutes(){return this._seconds*60},_hours(){return this._minutes*60},_days(){return this._hours*24},currentTime:()=>R.state.currentTime})},v=a=>(j("data-v-63315265"),a=a(),B(),a),Q={key:0,class:"py-5 mx-auto mt-5 rounded bg-gray-50 md:w-2/3"},V={class:"py-3 text-center"},E={key:0,class:"my-4 text-2xl font-bold text-gray-900 ma-auto"},z={key:0},F={key:1,class:"text-center text-gray-900"},G={class:"py-5"},K=p(" View Solution "),P=["textContent"],U={key:0,class:"my-5 text-center"},Z={key:1,class:"text-center"},X=["textContent"],$={key:2,class:"text-center"},q=v(()=>r("button",{class:"btn loading btn-circle"},null,-1)),ee=[q],te={key:3,class:"my-4 font-semibold text-center text-gray-900"},se={key:1,class:"pb-10"},re={class:"py-4 text-center"},oe={class:"text-2xl font-bold text-gray-900 dark:text-white"},ne=v(()=>r("p",{class:"text-center dark:text-white"}," \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09A4\u09C1\u09AE\u09BF \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09B0\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u09AC\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BE\u0987\u0964 ",-1)),ie={class:"mx-2 text-gray-900 md:w-2/3 md:mx-auto"},le=["innerHTML"],de={class:"mt-3"},ae=["innerHTML","onClick"],ce=["innerHTML","onClick"],ue=["innerHTML","onClick"],he=["innerHTML","onClick"],ge={class:"mb-10 text-center"},me={key:2,class:"pb-10"},be={class:"py-4 text-center"},_e={class:"text-2xl font-bold text-gray-900 dark:text-white"},ye=v(()=>r("p",{class:"text-center dark:text-white"}," \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09A4\u09C1\u09AE\u09BF \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09B0\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u09AC\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BE\u0987\u0964 ",-1)),xe={key:0,class:"mx-2 md:w-2/3 md:mx-auto"},ke=["innerHTML"],pe={class:"mt-3"},ve=["innerHTML","onClick"],fe=["innerHTML","onClick"],we=["innerHTML","onClick"],Te=["innerHTML","onClick"],Ce={key:0,class:"my-2 text-center"},Le={key:1,class:"mb-10 text-center"},Me=["disabled"],He={key:1,class:"mx-2 md:w-2/3 md:mx-auto"},Se={class:"flex flex-wrap justify-center"},Ae={class:"w-full p-3 md:w-1/2"},De={class:"text-center"},Ne={class:"text-lg font-semibold text-gray-900 dark:text-white"},Ie={class:"text-gray-600 dark:text-white"},Re={class:"flex flex-wrap items-center justify-center gap-3 p-3 rounded bg-gray-50"},We={class:"text-gray-900"},Oe={class:"text-lg font-bold"},je={class:"text-lg font-bold"},Be={class:"text-lg font-bold"},Je={class:"text-lg font-bold"},Ye=["innerHTML"],Qe={class:"mt-3"},Ve=["innerHTML"],Ee=["innerHTML"],ze=["innerHTML"],Fe=["innerHTML"],Ge={key:0,class:"my-2 poppins"},Ke=["innerHTML"],Pe={class:"material-icons"},Ue={key:0,class:"my-2 text-center"},Ze={key:1,class:"mb-10 text-center"},Xe=["disabled"],$e={key:3,class:"white--text fixed__timer"},qe={class:"text-white bg-blue-500 border border-white shadow"},et={key:1,class:"flex items-center justify-center w-full h-screen"},tt=v(()=>r("div",{class:"flex items-center justify-center -mt-24 space-x-1 text-sm text-gray-700"},[r("svg",{fill:"none",class:"w-10 h-10 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[r("path",{"clip-rule":"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor","fill-rule":"evenodd"})]),r("div",{class:"text-lg dark:text-white"},"Loading ...")],-1)),st=[tt];function rt(a,s,i,m,t,d){const c=C("router-link"),b=C("pie-chart");return t.loading?(o(),n("div",et,st)):(o(),n("div",{key:0,onContextmenu:e=>!1},[!t.unknown&&!t.loading&&!t.retake?(o(),n("div",Q,[r("div",V,[t.result[1]?(o(),n("h2",E,[t.result[1]!=="Time's up"?(o(),n("span",z,"You Scored:")):l("",!0),p(" "+u(t.result[1]),1)])):l("",!0),t.result[1]=="Time's up"?(o(),n("p",F,"But you can still give the exam. Click 'Test yourself again'.")):l("",!0),r("div",G,[this.ended<d.currentTime||t.immediate?(o(),W(c,{key:0,to:`/solution/${this.$route.params.id}`,class:"my-2 btn btn-primary"},{default:O(()=>[K]),_:1},8,["to"])):(o(),n("button",{key:1,class:"btn btn-primary",onClick:s[0]||(s[0]=(...e)=>d.endalert&&d.endalert(...e)),textContent:u("View Solution")},null,8,P))])]),!t.retake&&t.solution.length>0?(o(),n("div",U,[L(c,{to:`/ranking/${this.$route.params.id}`,class:"mx-auto my-2 btn btn-primary",text:"View Your Rank"},null,8,["to"])])):l("",!0),!t.retake&&t.solution.length>0?(o(),n("div",Z,[r("button",{class:"mx-auto btn btn-primary",onClick:s[1]||(s[1]=(...e)=>d.startRetake&&d.startRetake(...e)),textContent:u("Test Yourself Again")},null,8,X)])):(o(),n("div",$,ee)),!t.retake&&t.solution.length>0?(o(),n("div",te," Retake exam score will not be recorded ")):l("",!0)])):l("",!0),t.retake?(o(),n("div",se,[r("div",re,[r("h1",oe," Retake Exam - "+u(this.$route.params.id),1),ne]),r("div",ie,[(o(!0),n(k,null,f(t.solution,(e,h)=>(o(),n("div",{key:h,class:g(["p-5 mx-auto my-3 text-lg text-gray-900 border border-gray-300 rounded-md shadow-lg bg-gray-50 kalpurush",{"stop-events":t.solution[h].selected}])},[r("div",{class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,le),r("div",de,[e.a?(o(),n("div",{key:0,innerHTML:e.a,onClick:_=>t.solution[h].selected=e.a,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold text-black  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-green-300 dark:bg-indigo-400 dark:border-indigo-500 ":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,ae)):l("",!0),e.b?(o(),n("div",{key:1,innerHTML:e.b,onClick:_=>t.solution[h].selected=e.b,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-green-300 dark:bg-indigo-400 dark:border-indigo-500 ":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,ce)):l("",!0),e.c?(o(),n("div",{key:2,innerHTML:e.c,onClick:_=>t.solution[h].selected=e.c,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-green-300 dark:bg-indigo-400 dark:border-indigo-500 ":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,ue)):l("",!0),e.d?(o(),n("div",{key:3,innerHTML:e.d,onClick:_=>t.solution[h].selected=e.d,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-green-300 dark:bg-indigo-400 dark:border-indigo-500 ":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,he)):l("",!0)])],2))),128)),r("div",ge,[r("button",{onClick:s[2]||(s[2]=(...e)=>d.retakeResult&&d.retakeResult(...e)),class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"}," Submit ")])])])):l("",!0),t.questions.length>0?(o(),n("div",me,[r("div",be,[r("h1",_e," Exam - "+u(this.$route.params.id),1),ye]),t.viewDetails?(o(),n("div",He,[r("div",null,[r("div",Se,[r("div",Ae,[r("div",De,[r("h3",Ne," You Scored: "+u(t.score),1),r("p",Ie," out of "+u(t.questions.length),1)])])])]),r("div",null,[r("div",Re,[r("div",null,[L(b,{data:t.status},null,8,["data"])]),r("div",We,[r("p",Oe," Total: "+u(t.questions.length),1),r("p",je," Correct: "+u(t.status.Correct),1),r("p",Be," Incorrect: "+u(t.status.Wrong),1),r("p",Je," Not Answered: "+u(t.status.Not_Answered),1)])])]),(o(!0),n(k,null,f(t.questions,(e,h)=>(o(),n("div",{key:h,class:"p-5 mx-auto my-3 text-lg border border-gray-300 rounded-md shadow-lg bg-gray-50 dark:bg-black dark:text-white kalpurush"},[r("div",{class:"inline-flex mb-2 text-lg font-semibold",innerHTML:`<span class='mr-2'>${h+1})</span>`+e.question},null,8,Ye),r("div",Qe,[e.a?(o(),n("div",{key:0,innerHTML:e.a,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold text-black  my-3 p-3 rounded   ${e.a==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"} ${e.a==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,Ve)):l("",!0),e.b?(o(),n("div",{key:1,innerHTML:e.b,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.b==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"} ${e.b==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,Ee)):l("",!0),e.c?(o(),n("div",{key:2,innerHTML:e.c,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.c==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"} ${e.c==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,ze)):l("",!0),e.d?(o(),n("div",{key:3,innerHTML:e.d,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded   ${e.d==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"} ${e.d==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,Fe)):l("",!0)]),e.explain?(o(),n("h2",Ge,"Explain:")):l("",!0),e.explain?(o(),n("div",{key:1,class:"p-3 my-3 bg-gray-200 border border-green-500 rounded dark:bg-gray-600",innerHTML:e.explain},null,8,Ke)):l("",!0),r("div",{class:g(["flex gap-2 my-2 text-xl font-semibold",{"text-red-500":e.correct!=e.selected,"text-green-500":e.correct==e.selected}])},[r("span",Pe,u(e.correct==e.selected?"done":"close"),1),e.selected?(o(),n(k,{key:0},[p(u(e.correct==e.selected?"Correct":"Wrong"),1)],64)):l("",!0),p(" "+u(e.selected?"":"Not answered"),1)],2)]))),128)),t.viewDetails?(o(),n("div",Ue,[r("button",{onClick:s[5]||(s[5]=(...e)=>d.gotoLeaderboard&&d.gotoLeaderboard(...e)),class:"btn btn-large btn-primary"}," Leaderboard ")])):l("",!0),t.viewDetails?l("",!0):(o(),n("div",Ze,[r("button",{onClick:s[6]||(s[6]=(...e)=>d.submitAns&&d.submitAns(...e)),disabled:t.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},u(t.eload?"Loading...":"Submit"),9,Xe)]))])):(o(),n("div",xe,[(o(!0),n(k,null,f(t.questions,(e,h)=>(o(),n("div",{key:h,class:g(["p-5 mx-auto my-3 text-lg border border-gray-300 rounded-md shadow-lg bg-gray-50 kalpurush",{"stop-events":t.questions[h].selected}])},[r("div",{class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,ke),r("div",pe,[e.a?(o(),n("div",{key:0,innerHTML:e.a,onClick:_=>t.questions[h].selected=e.a,class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,ve)):l("",!0),e.b?(o(),n("div",{key:1,innerHTML:e.b,onClick:_=>t.questions[h].selected=e.b,class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,fe)):l("",!0),e.c?(o(),n("div",{key:2,innerHTML:e.c,onClick:_=>t.questions[h].selected=e.c,class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,we)):l("",!0),e.d?(o(),n("div",{key:3,innerHTML:e.d,onClick:_=>t.questions[h].selected=e.d,class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,Te)):l("",!0)])],2))),128)),t.viewDetails?(o(),n("div",Ce,[r("button",{onClick:s[3]||(s[3]=(...e)=>d.gotoLeaderboard&&d.gotoLeaderboard(...e)),class:"btn btn-large btn-primary"}," Leaderboard ")])):l("",!0),t.viewDetails?l("",!0):(o(),n("div",Le,[r("button",{onClick:s[4]||(s[4]=(...e)=>d.submitAns&&d.submitAns(...e)),disabled:t.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},u(t.eload?"Loading...":"Submit"),9,Me)]))]))])):l("",!0),t.show?(o(),n("div",$e,[r("div",qe,u(t.hours)+" : "+u(t.minute)+" : "+u(t.second),1)])):l("",!0)],32))}var lt=J(Y,[["render",rt],["__scopeId","data-v-63315265"]]);export{lt as default};
