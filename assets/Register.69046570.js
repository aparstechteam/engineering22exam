var g=Object.defineProperty,f=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var c=(n,t,s)=>t in n?g(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,v=(n,t)=>{for(var s in t||(t={}))S.call(t,s)&&c(n,s,t[s]);if(p)for(var s of p(t))x.call(t,s)&&c(n,s,t[s]);return n},m=(n,t)=>f(n,y(t));import{s as C,bA as q,q as V,r as b,j as k,k as N,l as e,y as r,I as i,z as j,E as U,bw as w,as as B}from"./index.85d35ef8.js";const M={class:"container px-2 py-20 mx-auto md:w-1/2"},D=["onSubmit"],H={class:"form-control"},R=e("label",{class:"label",for:"name"},"Name",-1),z={class:"form-control"},E=e("label",{class:"label",for:"phone"},"Phone",-1),I=e("p",{class:"text-sm"}," \u098F\u0987 \u09A8\u09BE\u09AE\u09CD\u09AC\u09BE\u09B0\u09C7 \u09A4\u09CB\u09AE\u09BE\u09B0 \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE\u09B0 \u09AE\u09BE\u09B0\u09CD\u0995\u09CD\u09B8 \u098F\u09B8\u098F\u09AE\u098F\u09B8 \u0995\u09B0\u09C7 \u09AA\u09BE\u09A0\u09BF\u09DF\u09C7 \u09A6\u09C7\u0993\u09DF\u09BE \u09B9\u09AC\u09C7\u0964 \u09A4\u09BE\u0987 \u09B8\u09BE\u09AC\u09A7\u09BE\u09A8\u09C7 \u09AA\u09C2\u09B0\u09A3 \u0995\u09B0\u09AC\u09C7\u0964 ",-1),J={class:"form-control"},T=e("label",{class:"label",for:"reg"},"SSC roll",-1),A={class:"form-control"},O=e("label",{class:"label",for:"reg"},"SSC/HSC registration No.",-1),P=e("p",{class:"text-sm"},"\u098F\u099F\u09BF \u09A6\u09BF\u09DF\u09C7\u0987 \u09A4\u09CB\u09AE\u09BE\u09B0 \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE\u09B0 \u09B8\u0995\u09B2 \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09CD\u09B0\u09AE \u09B0\u09C7\u0995\u09B0\u09CD\u09A1 \u09B9\u09AC\u09C7\u0964 \u09A4\u09BE\u0987 \u09B8\u09BE\u09AC\u09A7\u09BE\u09A8\u09C7 \u09AA\u09C2\u09B0\u09A3 \u0995\u09B0\u09AC\u09C7\u0964",-1),F={class:"form-control"},G=e("label",{class:"label",for:"reg"},"Board",-1),K=B('<option value="" selected disabled>Select board</option><option value="barisal">Barisal</option><option value="chittagong">Chittagong</option><option value="comilla">Comilla</option><option value="dhaka">Dhaka</option><option value="dinajpur">Dinajpur</option><option value="jessore">Jessore</option><option value="madrasah">Madrasah</option><option value="rajshahi">Rajshahi</option><option value="sylhet">Sylhet</option><option value="mymensingh">Mymensingh</option><option value="tec">Technical</option>',12),L=[K],Q={class:"form-control"},W=e("label",{class:"label",for:"college"},"Institution",-1),X={class:"text-center"},$={setup(n){const t=C(),s=q(),h=V(),o=b({ttrx:"",name:"",phone:"+880",reg:"",college:"",board:"",roll:""});s.query.ttrx?o.value.ttrx=s.query.ttrx:t.replace("/login");const d=b(!1),_=()=>{d.value=!0;let u=o.value.phone.length,l=o.value.phone.substring(u-10,u);h.dispatch("register",{body:JSON.stringify(m(v({},o.value),{phone:l,ssc_board:o.value.board,ssc_roll:o.value.roll,ssc_reg:o.value.reg,facebook_link:"",why_buet:"",batch:"",email:"email"})),router:t,phone:l})};return(u,l)=>(k(),N("div",M,[e("form",{onSubmit:w(_,["prevent"]),class:"space-y-3"},[e("div",H,[R,r(e("input",{type:"text",required:"","onUpdate:modelValue":l[0]||(l[0]=a=>o.value.name=a),class:"input input-bordered"},null,512),[[i,o.value.name]])]),e("div",z,[E,I,r(e("input",{type:"tel",required:"","onUpdate:modelValue":l[1]||(l[1]=a=>o.value.phone=a),class:"input input-bordered"},null,512),[[i,o.value.phone]])]),e("div",J,[T,r(e("input",{type:"tel","onUpdate:modelValue":l[2]||(l[2]=a=>o.value.roll=a),class:"input input-bordered",placeholder:"HSC roll"},null,512),[[i,o.value.roll]])]),e("div",A,[O,P,r(e("input",{type:"tel",required:"","onUpdate:modelValue":l[3]||(l[3]=a=>o.value.reg=a),class:"input input-bordered",placeholder:"SSC/HSC registration No"},null,512),[[i,o.value.reg]])]),e("div",F,[G,r(e("select",{class:"select select-bordered",required:"","onUpdate:modelValue":l[4]||(l[4]=a=>o.value.board=a)},L,512),[[j,o.value.board]])]),e("div",Q,[W,r(e("input",{type:"text",required:"","onUpdate:modelValue":l[5]||(l[5]=a=>o.value.college=a),placeholder:"College Name",class:"input input-bordered"},null,512),[[i,o.value.college]])]),e("div",X,[e("button",{type:"submit",class:U(["btn btn-primary",{loading:d.value}])},"Submit",2)])],40,D)]))}};export{$ as default};
