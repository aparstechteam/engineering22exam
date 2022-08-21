import{A as v,by as h,r as d,o as m,b as _,d as e,C as n,J as r,D as g,E as f,bv as b,g as S,ar as y}from"./index.ca46bc10.js";import{a as p}from"./api.c5a084e8.js";const x={class:"container px-2 py-20 mx-auto"},C=["onSubmit"],N={class:"form-control"},V=e("label",{for:"name"},"Name",-1),q={class:"form-control"},U=e("label",{for:"phone"},"Phone",-1),j=e("p",{class:"text-sm"}," \u098F\u0987 \u09A8\u09BE\u09AE\u09CD\u09AC\u09BE\u09B0\u09C7 \u09A4\u09CB\u09AE\u09BE\u09B0 \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE\u09B0 \u09AE\u09BE\u09B0\u09CD\u0995\u09CD\u09B8 \u098F\u09B8\u098F\u09AE\u098F\u09B8 \u0995\u09B0\u09C7 \u09AA\u09BE\u09A0\u09BF\u09DF\u09C7 \u09A6\u09C7\u0993\u09DF\u09BE \u09B9\u09AC\u09C7\u0964 \u09A4\u09BE\u0987 \u09B8\u09BE\u09AC\u09A7\u09BE\u09A8\u09C7 \u09AA\u09C2\u09B0\u09A3 \u0995\u09B0\u09AC\u09C7\u0964 ",-1),B={class:"form-control"},M=e("label",{for:"reg"},"SSC roll",-1),k={class:"form-control"},D=e("label",{for:"reg"},"SSc/HSC registration No.",-1),J=e("p",{class:"text-sm"},"\u098F\u099F\u09BF \u09A6\u09BF\u09DF\u09C7\u0987 \u09A4\u09CB\u09AE\u09BE\u09B0 \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE\u09B0 \u09B8\u0995\u09B2 \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09CD\u09B0\u09AE \u09B0\u09C7\u0995\u09B0\u09CD\u09A1 \u09B9\u09AC\u09C7\u0964 \u09A4\u09BE\u0987 \u09B8\u09BE\u09AC\u09A7\u09BE\u09A8\u09C7 \u09AA\u09C2\u09B0\u09A3 \u0995\u09B0\u09AC\u09C7\u0964",-1),w={class:"form-control"},H=e("label",{for:"reg"},"Board",-1),O=y('<option value="" selected disabled>Select board</option><option value="barisal">Barisal</option><option value="chittagong">Chittagong</option><option value="comilla">Comilla</option><option value="dhaka">Dhaka</option><option value="dinajpur">Dinajpur</option><option value="jessore">Jessore</option><option value="madrasah">Madrasah</option><option value="rajshahi">Rajshahi</option><option value="sylhet">Sylhet</option><option value="mymensingh">Mymensingh</option><option value="tec">Technical</option>',12),R=[O],T={class:"form-control"},E=e("label",{for:"college"},"Institution",-1),I={class:"text-center"},z={setup(P){const i=v(),u=h(),o=d({ttrx:"",name:"",phone:"+8801",reg:"",college:"",board:"",roll:""});u.query.ttrx?o.value.ttrx=u.query.ttrx:i.replace("/login");const s=d(!1),c=()=>{s.value=!0,fetch(p,{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify(o.value)}).then(()=>{S.get(`${p}?ttrx=${o.value.ttrx}`).then(a=>{if(a.data){localStorage.setItem("ac_private22",JSON.stringify(a.data)),i.push("/"),s.value=!1;return}else alert("\u09B8\u09A0\u09BF\u0995 \u0997\u09CD\u09B0\u09C1\u09AA \u099C\u09DF\u09C7\u09A8\u09BF\u0982 \u0986\u0987\u09A1\u09BF \u09A6\u09BF\u09DF\u09C7 \u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8\u0964"),s.value=!1}).catch(a=>{alert("Something Went Wrong"),console.log(a),s.value=!1})}).catch(a=>{console.log(a),s.value=!1})};return(a,t)=>(m(),_("div",x,[e("form",{onSubmit:b(c,["prevent"]),class:"space-y-3"},[e("div",N,[V,n(e("input",{type:"text",required:"","onUpdate:modelValue":t[0]||(t[0]=l=>o.value.name=l),class:"input input-bordered"},null,512),[[r,o.value.name]])]),e("div",q,[U,j,n(e("input",{type:"tel",required:"","onUpdate:modelValue":t[1]||(t[1]=l=>o.value.phone=l),class:"input input-bordered"},null,512),[[r,o.value.phone]])]),e("div",B,[M,n(e("input",{type:"tel","onUpdate:modelValue":t[2]||(t[2]=l=>o.value.roll=l),class:"input input-bordered",placeholder:"HSC roll"},null,512),[[r,o.value.roll]])]),e("div",k,[D,J,n(e("input",{type:"tel",required:"","onUpdate:modelValue":t[3]||(t[3]=l=>o.value.reg=l),class:"input input-bordered",placeholder:"SSC/HSC registration No"},null,512),[[r,o.value.reg]])]),e("div",w,[H,n(e("select",{class:"select select-bordered",required:"","onUpdate:modelValue":t[4]||(t[4]=l=>o.value.board=l)},R,512),[[g,o.value.board]])]),e("div",T,[E,n(e("input",{type:"text",required:"","onUpdate:modelValue":t[5]||(t[5]=l=>o.value.college=l),placeholder:"College Name",class:"input input-bordered"},null,512),[[r,o.value.college]])]),e("div",I,[e("button",{type:"submit",class:f(["btn btn-primary",{loading:s.value}])},"Submit",2)])],40,C)]))}};export{z as default};
