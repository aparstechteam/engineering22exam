var k=Object.defineProperty,w=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var x=(n,s,o)=>s in n?k(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,_=(n,s)=>{for(var o in s||(s={}))C.call(s,o)&&x(n,o,s[o]);if(f)for(var o of f(s))S.call(s,o)&&x(n,o,s[o]);return n},b=(n,s)=>w(n,T(s));import{E as M,O as L,J as H,j as i,k as r,l,y as c,m as g,F as v,x as y,L as D,M as A,G as m}from"./index.599ac3b1.js";import{_ as I}from"./plugin-vue_export-helper.21dcd24c.js";const N={data(){return{timing:null,solutionv:!1,retake:!1,questions:[],solution:[],result:[],unknown:!1,loading:!0,eload:!1,hours:0,minute:0,second:0,end:Date.now()+12e6,show:!1,url:"",solutionpdf:"",starttime:Date.now(),ended:null,inttime:109090,immediate:!0,viewDetails:!1,score:null,status:{Correct:0,Wrong:0,Not_Answered:0}}},beforeRouteEnter(n,s,o){var t;if((t=JSON.parse(localStorage.getItem("engineeringad_22")))==null?void 0:t.roll){o();return}o({path:"/login"})},methods:{endalert(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},getQuestionLink(){this.loading=!0;let n=null;fetch(M+"?type=examlist&id="+this.$route.params.id).then(s=>s.json()).then(s=>{if(new Date(s.exam.start_time).getTime()>Date.now()){this.$router.push("/");return}this.url="https://script.google.com/macros/s/AKfycbz9OmMxzknSGJ96kpT8vuatKAxa2BLJ6qnC-fsCufUkeiSymRniQAs4OFTiHY8lQ3zZ1Q/exec?sheet="+s.exam.exam.substr(39,44),this.ended=new Date(s.exam.end_time).getTime(),this.timelimit=s.exam.timelimit*6e4,this.immediate=!s.exam.special,this.solutionpdf=s.exam.solve_sheet,n=s.exam.time;let o=JSON.parse(localStorage.getItem("engineeringad_22")).roll;fetch(this.url+"&type=check&phone="+o).then(u=>u.json()).then(u=>{this.ended<Date.now()?(this.result=u.result?u.result:["","Time's up"],fetch(this.url+"&type=question").then(t=>t.json()).then(t=>{this.solution=t;let a=n;this.inttime=a*6e4,this.end=a*6e4}),this.unknown=!1,this.loading=!1):u.message!="exists"?(this.unknown=!0,fetch(this.url+"&type=question").then(t=>t.json()).then(t=>{let a=localStorage.getItem(`attempt${this.$route.params.id}`);a?localStorage.setItem(`attempt${this.$route.params.id}`,Number(a)+1):localStorage.setItem(`attempt${this.$route.params.id}`,1),this.questions=t.map((d,h)=>b(_({},d),{selected:"",id:h})),this.questions=this.questions.sort(()=>Math.random()-.5);let e=n;this.inttime=e*6e4,this.end=e*6e4,this.loading=!1,this.showRemaining(this.end+Date.now()),this.autoSubmit()})):this.$router.replace("/end")})})},startRetake(){this.retake=!0,this.showRemaining(Date.now()+this.end)},retakeResult(){let n=this.solution.reduce((s,o)=>(o.correct==o.selected?(s+=10,this.status.Correct+=1):o.selected?(s-=2.5,this.status.Wrong+=1):this.status.Not_Answered+=1,s),0);this.$swal({icon:"success",title:"Success",text:`You Scored ${n}, Correct ${this.status.Correct} Wrong ${this.status.Wrong} Not Answered ${this.status.Not_Answered}`}).then(()=>{this.retake=!1,this.show=!1,this.questions=this.solution,this.viewDetails=!this.viewDetails,this.inttime=this.solution.length,this.score=n,this.solution=this.solution.map(s=>b(_({},s),{selected:""})),window.scroll(0,0)})},submitAns(){let n=Date.now()-this.starttime;this.eload=!0;let s=this.questions.reduce((e,d)=>(d.correct==d.selected?(e+=10,this.status.Correct+=1):d.selected?(e-=2.5,this.status.Wrong+=1):this.status.Not_Answered+=1,e),0);clearTimeout(this.timing);let{roll:o,name:u,college:t}=JSON.parse(localStorage.getItem("engineeringad_22")),a=this.questions.map(e=>{let h=[e.a,e.b,e.c,e.d].indexOf(e.selected);return{id:e.id,s:h}}).filter(e=>e.s>-1);fetch(this.url,{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify({roll:o,name:u,attempt:localStorage.getItem(`attempt${this.$route.params.id}`)||1,score:s,college:t,duration:n,submission:JSON.stringify(a)})}).then(()=>{clearTimeout(this.timing),this.$swal({icon:"success",title:"Successfully Submitted",text:"Score will be published soon"}).then(()=>{localStorage.removeItem(`attempt${this.$route.params.id}`),this.$router.push("/"),this.score=s,window.scroll(0,0)})})},gotoLeaderboard(){this.$router.replace(`/ranking/${this.$route.params.id}`)},autoSubmit(){this.timing=setTimeout(()=>{this.show=!1,this.submitAns()},this.inttime)},showRemaining(n){this.show=!0;const s=setInterval(()=>{const o=n-Date.now();if(o<0){clearInterval(s);return}const u=Math.floor(o/this._days),t=Math.floor(o%this._days/this._hours),a=Math.floor(o%this._hours/this._minutes),e=Math.floor(o%this._minutes/this._seconds);this.second=e<10?"0"+e:e,this.minute=a<10?"0"+a:a,this.hours=t<10?"0"+t:t,this.days=u<10?"0"+u:u},1e3)}},created(){this.getQuestionLink(),window.scrollTo(0,0)},computed:b(_({},L(["user"])),{_seconds:()=>1e3,_minutes(){return this._seconds*60},_hours(){return this._minutes*60},_days(){return this._hours*24},currentTime:()=>H.state.currentTime})},p=n=>(D("data-v-09bc1a78"),n=n(),A(),n),R={key:0,class:"py-5 mx-auto mt-5 bg-white rounded md:w-2/3"},O={class:"py-3 text-center"},J={key:0,class:"my-4 text-2xl font-bold text-gray-900 ma-auto"},Q={key:0},$={key:1,class:"text-center text-gray-900"},j={key:0,class:"text-center"},B=["textContent"],W={key:1,class:"text-center"},z=p(()=>l("button",{class:"btn loading btn-circle"},null,-1)),E=[z],F={key:2,class:"my-4 font-semibold text-center text-gray-900"},Y={key:1,class:"pb-10"},G={class:"py-4 text-center"},K={class:"text-2xl font-bold text-gray-900"},V=p(()=>l("p",{class:"text-center"}," \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09A4\u09C1\u09AE\u09BF \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09B0\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u09AC\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BE\u0987\u0964 ",-1)),P={class:"mx-2 text-gray-900 md:w-2/3 md:mx-auto"},U=["innerHTML"],Z={class:"mt-3"},X=["innerHTML","onClick"],q=["innerHTML","onClick"],ee=["innerHTML","onClick"],te=["innerHTML","onClick"],se={class:"mb-10 text-center"},oe={key:2,class:"pb-10"},ne={class:"py-4 text-center"},ie={class:"text-2xl font-bold text-gray-900"},re=p(()=>l("p",{class:"text-center"}," \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09A4\u09C1\u09AE\u09BF \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09B0\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u09AC\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BE\u0987\u0964 ",-1)),le={key:0,class:"mx-2 md:w-2/3 md:mx-auto"},de=["innerHTML"],ae={class:"btn btn-sm"},ce={class:"mt-3"},ue=["innerHTML","onClick"],he=["innerHTML","onClick"],me=["innerHTML","onClick"],ge=["innerHTML","onClick"],_e={key:0,class:"mb-10 text-center"},be=["disabled"],pe={key:3,class:"white--text fixed__timer"},fe={class:"text-white bg-blue-500 border border-white shadow"},xe={key:1,class:"flex items-center justify-center w-full h-screen"},ve=p(()=>l("div",{class:"flex items-center justify-center -mt-24 space-x-1 text-sm text-gray-700"},[l("svg",{fill:"none",class:"w-10 h-10 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[l("path",{"clip-rule":"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor","fill-rule":"evenodd"})]),l("div",{class:"text-lg"},"Loading ...")],-1)),ye=[ve];function ke(n,s,o,u,t,a){return t.loading?(i(),r("div",xe,ye)):(i(),r("div",{key:0,onContextmenu:e=>!1},[!t.unknown&&!t.loading&&!t.retake?(i(),r("div",R,[l("div",O,[t.result[1]?(i(),r("h2",J,[t.result[1]!=="Time's up"?(i(),r("span",Q,"Score will be available on leaderboard")):c("",!0)])):c("",!0),t.result[1]=="Time's up"?(i(),r("p",$,"But you can still give the exam. Click 'Test yourself again'.")):c("",!0)]),!t.retake&&t.solution.length>0?(i(),r("div",j,[l("button",{class:"mx-auto btn btn-primary",onClick:s[0]||(s[0]=(...e)=>a.startRetake&&a.startRetake(...e)),textContent:g("Test Yourself Again")},null,8,B)])):(i(),r("div",W,E)),!t.retake&&t.solution.length>0?(i(),r("div",F," Retake exam score will not be recorded ")):c("",!0)])):c("",!0),t.retake?(i(),r("div",Y,[l("div",G,[l("h1",K," Retake Exam - "+g(this.$route.params.id),1),V]),l("div",P,[(i(!0),r(v,null,y(t.solution,(e,d)=>(i(),r("div",{key:d,class:m(["p-5 mx-auto my-3 text-lg text-gray-900 bg-white border border-gray-300 rounded-md shadow-lg kalpurush",{"stop-events":t.solution[d].selected}])},[l("div",{class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,U),l("div",Z,[e.a?(i(),r("div",{key:0,innerHTML:e.a,onClick:h=>t.solution[d].selected=e.a,class:m(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold text-black  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-green-300  ":"border"}`)},null,10,X)):c("",!0),e.b?(i(),r("div",{key:1,innerHTML:e.b,onClick:h=>t.solution[d].selected=e.b,class:m(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-green-300  ":"border"}`)},null,10,q)):c("",!0),e.c?(i(),r("div",{key:2,innerHTML:e.c,onClick:h=>t.solution[d].selected=e.c,class:m(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-green-300  ":"border"}`)},null,10,ee)):c("",!0),e.d?(i(),r("div",{key:3,innerHTML:e.d,onClick:h=>t.solution[d].selected=e.d,class:m(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-green-300  ":"border"}`)},null,10,te)):c("",!0)])],2))),128)),l("div",se,[l("button",{onClick:s[1]||(s[1]=(...e)=>a.retakeResult&&a.retakeResult(...e)),class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"}," Submit ")])])])):c("",!0),t.questions.length>0?(i(),r("div",oe,[l("div",ne,[l("h1",ie," Exam - "+g(this.$route.params.id),1),re]),t.viewDetails?c("",!0):(i(),r("div",le,[(i(!0),r(v,null,y(t.questions,(e,d)=>(i(),r("div",{key:d,class:m(["p-5 mx-auto my-3 text-lg bg-white border border-gray-300 rounded-md shadow-lg kalpurush",{"stop-events":t.questions[d].selected}])},[l("div",{class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,de),l("button",ae,"Q. No. "+g(d+1),1),l("div",ce,[e.a?(i(),r("div",{key:0,innerHTML:e.a,onClick:h=>t.questions[d].selected=e.a,class:m(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-green-300  ":"border"}`)},null,10,ue)):c("",!0),e.b?(i(),r("div",{key:1,innerHTML:e.b,onClick:h=>t.questions[d].selected=e.b,class:m(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-green-300  ":"border"}`)},null,10,he)):c("",!0),e.c?(i(),r("div",{key:2,innerHTML:e.c,onClick:h=>t.questions[d].selected=e.c,class:m(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-green-300  ":"border"}`)},null,10,me)):c("",!0),e.d?(i(),r("div",{key:3,innerHTML:e.d,onClick:h=>t.questions[d].selected=e.d,class:m(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-green-300  ":"border"}`)},null,10,ge)):c("",!0)])],2))),128)),t.viewDetails?c("",!0):(i(),r("div",_e,[l("button",{onClick:s[2]||(s[2]=(...e)=>a.submitAns&&a.submitAns(...e)),disabled:t.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},g(t.eload?"Loading...":"Submit"),9,be)]))]))])):c("",!0),t.show?(i(),r("div",pe,[l("div",fe,g(t.hours)+" : "+g(t.minute)+" : "+g(t.second),1)])):c("",!0)],32))}var Se=I(N,[["render",ke],["__scopeId","data-v-09bc1a78"]]);export{Se as default};
