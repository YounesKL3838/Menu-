const $=id=>document.getElementById(id),E=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const ST={new:"جديد",preparing:"قيد التحضير",ready:"جاهز",out_for_delivery:"خرج للتوصيل",completed:"مكتمل",cancelled:"ملغى"},TY={delivery:"توصيل",pickup:"استلام",dine_in:"داخل المطعم"};
const fmt=n=>new Intl.NumberFormat("fr-DZ").format(n)+" دج",ok=r=>{if(r.error)throw r.error;return r.data};
let orders=[],seen=null,open=new Set(),cats=[],prods=[],ch=null;
$("fs").innerHTML+=Object.entries(ST).map(([k,v])=>`<option value="${k}">${v}</option>`).join("");
async function isAdmin(){const r=await sb.from("admins").select("user_id").maybeSingle();return !r.error&&!!r.data}
async function start(){if(!window.sb){$("lm").textContent="js/supabase-config.js غير مضبوط";return}
 const {data}=await sb.auth.getSession();if(data.session&&await isAdmin())enter();}
$("lg").onclick=async()=>{$("lm").textContent="";const r=await sb.auth.signInWithPassword({email:$("em").value.trim(),password:$("pw").value});
 if(r.error){$("lm").textContent="بيانات الدخول غير صحيحة";return}
 if(!await isAdmin()){await sb.auth.signOut();$("lm").textContent="هذا الحساب غير مصرّح له بالدخول";return}enter()};
$("lo").onclick=async()=>{await sb.auth.signOut();location.reload()};
function enter(){$("login").hidden=true;$("app").hidden=false;loadOrders();
 ch=sb.channel("orders").on("postgres_changes",{event:"*",schema:"public",table:"orders"},()=>loadOrders()).subscribe();setInterval(loadOrders,30000)}
const TABS=["orders","prods","cats","zones","sets"];
document.querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>{TABS.forEach(t=>$(t).hidden=t!==b.dataset.t);const f={prods:loadProds,cats:()=>loadRows("cats"),zones:()=>loadRows("zones"),sets:loadSets}[b.dataset.t];if(f)f()});
function beep(){try{const c=new AudioContext(),o=c.createOscillator();o.connect(c.destination);o.frequency.value=880;o.start();setTimeout(()=>{o.stop();c.close()},350)}catch(e){}}
async function loadOrders(){try{orders=ok(await sb.from("orders").select("*").order("created_at",{ascending:false}).limit(300))}catch(x){console.error(x);return}
 const fresh=orders.filter(o=>o.status==="new"&&seen&&!seen.has(o.id));
 if(fresh.length){$("toast").textContent="🔔 طلب جديد: "+fresh.map(o=>o.order_number).join("، ");$("toast").hidden=false;beep();setTimeout(()=>$("toast").hidden=true,8000)}
 seen=new Set(orders.map(o=>o.id));renderOrders()}
const lineTxt=l=>`${l.qty}× ${E(l.name)}${l.size?" ("+E(l.size)+")":""} — ${fmt(l.line_total)}<small>${[...(l.choices||[]).map(c=>E(c.group)+": "+E(c.name)),(l.extras||[]).length?"إضافات: "+l.extras.map(e=>E(e.name)).join("، "):"",(l.removed||[]).length?"بدون: "+l.removed.map(e=>E(e.name)).join("، "):"",l.note?"ملاحظة: "+E(l.note):""].filter(Boolean).join(" • ")}</small>`;
function renderOrders(){const s=$("fs").value,d=$("fd").value;
 const L=orders.filter(o=>(!s||o.status===s)&&(!d||new Date(o.created_at).toLocaleDateString("sv")===d));
 $("ol").innerHTML=L.map(o=>`<div class="o ${o.status==="new"?"new":""}"><div class="row" data-id="${o.id}" style="cursor:pointer"><b dir="ltr">${E(o.order_number)}</b><span class="tag">${ST[o.status]}</span><span>${TY[o.order_type]}</span><b>${fmt(o.total)}${o.delivery_fee_pending?" + توصيل":""}</b><small>${new Date(o.created_at).toLocaleString("fr-DZ")}</small></div>
 ${open.has(o.id)?`<div class="det"><div>${E(o.customer_name||"—")} ${o.phone?`<a href="tel:${E(o.phone)}" style="color:#ff8087">${E(o.phone)}</a>`:""}</div>${o.zone_name?`<div>📍 ${E(o.zone_name)} ${E(o.address||"")}</div>`:""}${o.table_number?`<div>🍽️ طاولة ${E(o.table_number)}</div>`:""}${o.notes?`<div>📝 ${E(o.notes)}</div>`:""}
 ${o.items.map(l=>`<div style="margin:6px 0">${lineTxt(l)}</div>`).join("")}<div>المجموع الفرعي: ${fmt(o.subtotal)} • التوصيل: ${o.delivery_fee==null?(o.delivery_fee_pending?"يُحدد لاحقًا":"—"):fmt(o.delivery_fee)}</div>
 <select data-st="${o.id}">${Object.entries(ST).map(([k,v])=>`<option value="${k}" ${k===o.status?"selected":""}>${v}</option>`).join("")}</select></div>`:""}</div>`).join("")||"<p>لا توجد طلبات.</p>"}
$("ol").onclick=e=>{const r=e.target.closest("[data-id]");if(r){open.has(r.dataset.id)?open.delete(r.dataset.id):open.add(r.dataset.id);renderOrders()}};
$("ol").onchange=async e=>{const id=e.target.dataset.st;if(!id)return;const r=await sb.from("orders").update({status:e.target.value}).eq("id",id);if(r.error)alert("تعذّر حفظ الحالة: "+r.error.message);loadOrders()};
$("fs").onchange=$("fd").onchange=renderOrders;$("rf").onclick=loadOrders;
/* ===== المنتجات ===== */
async function loadProds(){try{cats=ok(await sb.from("categories").select("*").order("sort_order"));
 prods=ok(await sb.from("products").select("*,product_sizes(*),product_extras(*),product_removables(*),option_groups(*,group_options(*))").order("sort_order"))}catch(x){alert(x.message);return}
 const td=new Date().toLocaleDateString("sv");
 $("pl").innerHTML=cats.map(c=>`<h3>${E(c.emoji)} ${E(c.name_ar)}</h3>`+prods.filter(p=>p.category_id===c.id).map(p=>`<div class="p row ${p.is_hidden||!p.is_available?"off":""}"><span class="row">${p.image_url?`<img src="${E(p.image_url)}" alt="">`:""}<b>${E(p.name_ar)}</b></span>
 <span class="row"><button class="b s" data-a="e" data-i="${p.id}">تعديل</button><button class="b s" data-a="h" data-i="${p.id}">${p.is_hidden?"إظهار":"إخفاء"}</button><button class="b s" data-a="v" data-i="${p.id}">${p.is_available?"غير متوفر":"متوفر"}</button><button class="b s" data-a="s" data-i="${p.id}">${p.sold_out_date===td?"إلغاء نفد اليوم":"نفد اليوم"}</button><button class="b s d" data-a="x" data-i="${p.id}">حذف</button></span></div>`).join("")).join("")}
$("pl").onclick=async e=>{const b=e.target.closest("[data-a]");if(!b)return;const p=prods.find(x=>x.id===b.dataset.i),a=b.dataset.a,td=new Date().toLocaleDateString("sv");let u=null;
 if(a==="e")return form(p);if(a==="h")u={is_hidden:!p.is_hidden};if(a==="v")u={is_available:!p.is_available};if(a==="s")u={sold_out_date:p.sold_out_date===td?null:td};
 if(a==="x"){if(!confirm("حذف «"+p.name_ar+"» نهائيًا؟"))return;const r=await sb.from("products").delete().eq("id",p.id);if(r.error)alert(r.error.message);return loadProds()}
 const r=await sb.from("products").update(u).eq("id",p.id);if(r.error)alert(r.error.message);loadProds()};
$("np").onclick=()=>form(null);
const srt=a=>[...(a||[])].sort((x,y)=>x.sort_order-y.sort_order);
function form(p){p=p||{};const sz=srt(p.product_sizes),ids=sz.map(s=>s.id);
 $("box").innerHTML=`<h3>${p.id?"تعديل منتج":"منتج جديد"}</h3><label>التصنيف</label><select id="fC">${cats.map(c=>`<option value="${c.id}" ${c.id===p.category_id?"selected":""}>${E(c.name_ar)}</option>`).join("")}</select>
 <label>الاسم بالعربية *</label><input id="fN" value="${E(p.name_ar)}"><label>الاسم بالفرنسية</label><input id="fF" value="${E(p.name_fr)}"><label>الوصف (عربي)</label><input id="fD" value="${E(p.desc_ar)}"><label>الوصف (فرنسي)</label><input id="fDF" value="${E(p.desc_fr)}">
 <label>إيموجي</label><input id="fE" value="${E(p.emoji||"🍽️")}"><label>السعر (يُتجاهل إن وُجدت أحجام)</label><input id="fP" type="number" min="0" value="${p.base_price??""}">
 <label>الأحجام — سطر لكل حجم: عربي|Français|السعر</label><textarea id="fS">${sz.map(s=>[s.name_ar,s.name_fr||"",s.price].join("|")).join("\n")}</textarea>
 <label>الإضافات — عربي|Français|السعر (أو أسعار الأحجام مفصولة بـ / بترتيبها)</label><textarea id="fX">${srt(p.product_extras).map(x=>[x.name_ar,x.name_fr||"",x.size_prices&&Object.keys(x.size_prices).length?ids.map(i=>x.size_prices[i]||0).join("/"):x.price].join("|")).join("\n")}</textarea>
 <label>مكونات يمكن حذفها — عربي|Français</label><textarea id="fR">${srt(p.product_removables).map(x=>x.name_ar+"|"+(x.name_fr||"")).join("\n")}</textarea>
 <label>خيار إلزامي «النوع» (اختياري) — السطر الأول: العنوان عربي|Français ثم خيار في كل سطر: عربي|Français|السعر</label><textarea id="fG2">${gTxt(p,"ch2",ids)}</textarea>
 <label>خيار إلزامي «الصلصة» (اختياري) — نفس الصيغة</label><textarea id="fG1">${gTxt(p,"ch",ids)}</textarea><label>صورة (من الجهاز)</label><input id="fI" type="file" accept="image/jpeg,image/png,image/webp"><label><input id="fNew" type="checkbox" style="width:auto" ${p.is_new?"checked":""}> علامة «جديد»</label>
 <p class="err" id="fm"></p><div class="row"><button class="b" id="fs2">حفظ</button><button class="b s" id="fc">إلغاء</button></div>`;
 $("modal").hidden=false;$("fc").onclick=()=>$("modal").hidden=true;$("fs2").onclick=()=>save(p)}
const lines=id=>$(id).value.split("\n").map(l=>l.trim()).filter(Boolean).map(l=>l.split("|").map(x=>x.trim()));
const num=v=>{const n=Number(v);if(!Number.isInteger(n)||n<0)throw new Error("سعر غير صحيح: "+v);return n};
async function save(p){const b=$("fs2");b.disabled=true;$("fm").textContent="";
 try{const name=$("fN").value.trim();if(!name)throw new Error("أدخل اسم المنتج");
  const S=lines("fS").map(a=>({n:a[0],f:a[1]||null,p:num(a[2])}));if(S.some(s=>!s.n))throw new Error("اسم حجم فارغ");
  const X=lines("fX").map(a=>({n:a[0],f:a[1]||null,v:(a[2]||"0").split("/").map(num)}));
  if(X.some(x=>!x.n||(x.v.length>1&&x.v.length!==S.length)))throw new Error("الإضافات: الاسم مطلوب وعدد الأسعار المفصولة بـ / يجب أن يساوي عدد الأحجام");
  if(X.some(x=>x.v.length>1&&!S.length))throw new Error("لا أحجام لتسعير الإضافات");
  const G=[["ch2","fG2",0],["ch","fG1",1]].map(([slot,tid,ord])=>{const L=lines(tid);if(!L.length)return{slot,del:true};const O=L.slice(1).map(a=>({n:a[0],f:a[1]||null,v:(a[2]||"0").split("/").map(num)}));
   if(!L[0][0]||!O.length||O.some(o=>!o.n||(o.v.length>1&&o.v.length!==S.length)))throw new Error("الخيار الإلزامي: عنوان وخيار واحد على الأقل، وعدد أسعار الأحجام يطابق الأحجام");return{slot,ord,t:L[0],O}});
  let img=p.image_url||null;const f=$("fI").files[0];
  if(f){if(f.size>5e6)throw new Error("الصورة أكبر من 5MB");const path="products/"+Date.now()+"-"+Math.random().toString(36).slice(2,8)+"."+(f.type.split("/")[1]||"jpg").replace("jpeg","jpg");
   ok(await sb.storage.from("product-images").upload(path,f,{contentType:f.type}));img=sb.storage.from("product-images").getPublicUrl(path).data.publicUrl}
  const row={category_id:$("fC").value,name_ar:name,name_fr:$("fF").value.trim()||null,desc_ar:$("fD").value.trim()||null,desc_fr:$("fDF").value.trim()||null,emoji:$("fE").value.trim()||"🍽️",is_new:$("fNew").checked,image_url:img,base_price:S.length?null:num($("fP").value||"x")};
  let id=p.id;if(id)ok(await sb.from("products").update(row).eq("id",id));else id=ok(await sb.from("products").insert(row).select("id").single()).id;
  const old=srt(p.product_sizes),sid=[];
  for(let i=0;i<S.length;i++){const r={product_id:id,name_ar:S[i].n,name_fr:S[i].f,price:S[i].p,sort_order:i};
   if(old[i]){ok(await sb.from("product_sizes").update(r).eq("id",old[i].id));sid.push(old[i].id)}else sid.push(ok(await sb.from("product_sizes").insert(r).select("id").single()).id)}
  if(old.length>S.length)ok(await sb.from("product_sizes").delete().in("id",old.slice(S.length).map(s=>s.id)));
  ok(await sb.from("product_extras").delete().eq("product_id",id));
  if(X.length)ok(await sb.from("product_extras").insert(X.map((x,i)=>({product_id:id,name_ar:x.n,name_fr:x.f,price:x.v.length>1?0:x.v[0],size_prices:x.v.length>1?Object.fromEntries(x.v.map((v,j)=>[sid[j],v])):null,sort_order:i}))));
  ok(await sb.from("product_removables").delete().eq("product_id",id));const R=lines("fR").filter(a=>a[0]);
  if(R.length)ok(await sb.from("product_removables").insert(R.map((a,i)=>({product_id:id,name_ar:a[0],name_fr:a[1]||null,sort_order:i}))));
  for(const g of G){const old=(p.option_groups||[]).find(x=>x.slot===g.slot);
   if(g.del){if(old)ok(await sb.from("option_groups").delete().eq("id",old.id));continue}
   const gr={product_id:id,slot:g.slot,title_ar:g.t[0],title_fr:g.t[1]||null,sort_order:g.ord};let gid=old?old.id:null;
   if(gid)ok(await sb.from("option_groups").update(gr).eq("id",gid));else gid=ok(await sb.from("option_groups").insert(gr).select("id").single()).id;
   ok(await sb.from("group_options").delete().eq("group_id",gid));
   ok(await sb.from("group_options").insert(g.O.map((x,i)=>({group_id:gid,name_ar:x.n,name_fr:x.f,price:x.v.length>1?0:x.v[0],size_prices:x.v.length>1?Object.fromEntries(x.v.map((v,k)=>[sid[k],v])):null,sort_order:i}))))}
  $("modal").hidden=true;loadProds()}
 catch(x){$("fm").textContent=x.message||String(x)}finally{b.disabled=false}}

const gTxt=(p,slot,ids)=>{const g=(p.option_groups||[]).find(x=>x.slot===slot);return g?E([g.title_ar+"|"+(g.title_fr||""),...srt(g.group_options).map(o=>[o.name_ar,o.name_fr||"",o.size_prices&&Object.keys(o.size_prices).length?ids.map(i=>o.size_prices[i]||0).join("/"):o.price].join("|"))].join("\n")):""};
/* ===== التصنيفات والمناطق ===== */
const ROW={cats:{t:"categories",f:[["emoji","إيموجي","t"],["name_ar","عربي","t"],["name_fr","Français","t"],["sort_order","الترتيب","n"],["is_active","ظاهر","c"]],blank:{name_ar:"تصنيف جديد",emoji:"🍽️"}},
 zones:{t:"delivery_zones",f:[["name_ar","عربي","t"],["name_fr","Français","t"],["fee","الرسوم دج (فارغ = يؤكدها المطعم)","n"],["sort_order","الترتيب","n"],["is_active","فعّال","c"]],blank:{name_ar:"منطقة جديدة",fee:100}}};
async function loadRows(k){const c=ROW[k];let d;try{d=ok(await sb.from(c.t).select("*").order("sort_order"))}catch(x){return alert(x.message)}
 $(k).innerHTML=`<button class="b" data-add="${k}">+ إضافة</button>`+d.map(r=>`<div class="p" data-k="${k}" data-id="${r.id}"><div class="grid">${c.f.map(([n,l,t])=>`<label>${l}${t==="c"?`<input type="checkbox" data-f="${n}" ${r[n]?"checked":""} style="width:auto">`:`<input data-f="${n}" ${t==="n"?'type="number" min="0"':""} value="${E(r[n])}">`}</label>`).join("")}</div><div class="row"><button class="b s" data-sv>حفظ</button><button class="b s d" data-del>حذف</button></div></div>`).join("")}
document.addEventListener("click",async e=>{const a=e.target.closest("[data-add]"),s=e.target.closest("[data-sv]"),d=e.target.closest("[data-del]");
 try{if(a){const k=a.dataset.add;ok(await sb.from(ROW[k].t).insert({...ROW[k].blank,sort_order:999}));return loadRows(k)}
 const r=(s||d)&&(s||d).closest("[data-k]");if(!r)return;const k=r.dataset.k,c=ROW[k];
 if(d){if(!confirm("حذف هذا العنصر؟"))return;ok(await sb.from(c.t).delete().eq("id",r.dataset.id));return loadRows(k)}
 const u={};r.querySelectorAll("[data-f]").forEach(i=>{const n=i.dataset.f;u[n]=i.type==="checkbox"?i.checked:i.type==="number"?(i.value===""?null:num(i.value)):i.value.trim()});
 if(!u.name_ar)throw new Error("الاسم العربي مطلوب");if(u.sort_order==null)u.sort_order=0;
 ok(await sb.from(c.t).update(u).eq("id",r.dataset.id));s.textContent="تم ✓";setTimeout(()=>s.textContent="حفظ",1500)}
 catch(x){alert(k_err(x))}});
const k_err=x=>/foreign key|violates/i.test(x.message||"")?"لا يمكن الحذف: توجد منتجات في هذا التصنيف. انقلها أو احذفها أولًا.":(x.message||String(x));
/* ===== الإعدادات ===== */
const DAYS=["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],TX=[["tagline","العبارة (عربي)"],["taglineF","Slogan (FR)"],["welcome","الترحيب (عربي)"],["welcomeF","Bienvenue (FR)"],["hours","أوقات العمل (نص)"],["hoursF","Horaires (FR)"],["addr","العنوان (عربي)"],["addrF","Adresse (FR)"],["about","نبذة (عربي)"],["aboutF","À propos (FR)"]];
let SET=null;
async function loadSets(){try{SET=ok(await sb.from("restaurant_settings").select("*").eq("id",1).single())}catch(x){return alert(x.message)}
 const s=SET,c=s.content||{},so=s.social||{},sc=s.schedule||DAYS.map(()=>({open:"11:30",close:"23:30",closed:false}));
 $("sets").innerHTML=`<div class="p"><h3>التواصل</h3><label>الهاتف</label><input id="sP" value="${E(s.phone)}"><label>رابط الخريطة</label><input id="sM" value="${E(s.map_url)}"><label>Facebook</label><input id="sFb" value="${E(so.fb)}"><label>Instagram</label><input id="sIg" value="${E(so.ig)}"><label>TikTok</label><input id="sTt" value="${E(so.tt)}"></div>
 <div class="p"><h3>الطلبات</h3><label><input type="checkbox" id="sEn" style="width:auto" ${s.enforce_hours?"checked":""}> رفض الطلبات خارج أوقات العمل</label><label><input type="checkbox" id="sDn" style="width:auto" ${s.dine_enabled?"checked":""}> تفعيل الأكل داخل المطعم</label><label>أرقام الطاولات (مثل 1-17 أو 1-10, 15)</label><input id="sTb" value="${E(s.tables_list)}"></div>
 <div class="p"><h3>الأوقات الأسبوعية</h3>${DAYS.map((d,i)=>`<div class="row"><span>${d}</span><input type="time" id="sO${i}" value="${E(sc[i].open)}" style="width:auto"><input type="time" id="sC${i}" value="${E(sc[i].close)}" style="width:auto"><label><input type="checkbox" id="sX${i}" style="width:auto" ${sc[i].closed?"checked":""}> مغلق</label></div>`).join("")}</div>
 <div class="p"><h3>النصوص</h3>${TX.map(([k,l])=>`<label>${l}</label>${k.startsWith("about")?`<textarea id="t_${k}">${E(c[k])}</textarea>`:`<input id="t_${k}" value="${E(c[k])}">`}`).join("")}</div>
 <div class="p"><h3>الصور</h3>${[["logo","الشعار"],["cover","الغلاف"],["hero","خلفية البداية"]].map(([k,l])=>`<label>${l}</label><input type="file" id="i_${k}" accept="image/jpeg,image/png,image/webp">`).join("")}</div>
 <p class="err" id="sm"></p><button class="b" id="ss">حفظ الإعدادات</button>`;$("ss").onclick=saveSets}
async function saveSets(){const b=$("ss");b.disabled=true;$("sm").textContent="";
 try{const tm=/^([01]\d|2[0-3]):[0-5]\d$/,sch=DAYS.map((_,i)=>({open:$("sO"+i).value,close:$("sC"+i).value,closed:$("sX"+i).checked}));
  if(sch.some(d=>!d.closed&&(!tm.test(d.open)||!tm.test(d.close))))throw new Error("أدخل أوقات فتح وإغلاق صحيحة لكل يوم غير مغلق");
  const tb=$("sTb").value.trim();if(!tb)throw new Error("أدخل أرقام الطاولات");
  const content={...(SET.content||{})};TX.forEach(([k])=>content[k]=$("t_"+k).value.trim());
  const row={phone:$("sP").value.trim()||null,map_url:$("sM").value.trim()||null,social:{fb:$("sFb").value.trim(),ig:$("sIg").value.trim(),tt:$("sTt").value.trim()},enforce_hours:$("sEn").checked,dine_enabled:$("sDn").checked,tables_list:tb,schedule:sch,content};
  for(const [k,col] of [["logo","logo_url"],["cover","cover_url"],["hero","hero_url"]]){const f=$("i_"+k).files[0];if(!f)continue;if(f.size>5e6)throw new Error("الصورة أكبر من 5MB");
   const p="site/"+k+"-"+Date.now()+"."+(f.type.split("/")[1]||"jpg").replace("jpeg","jpg");ok(await sb.storage.from("product-images").upload(p,f,{contentType:f.type}));row[col]=sb.storage.from("product-images").getPublicUrl(p).data.publicUrl}
  ok(await sb.from("restaurant_settings").update(row).eq("id",1));$("sm").style.color="#4cc38a";$("sm").textContent="تم الحفظ ✓";SET=null;setTimeout(loadSets,900)}
 catch(x){$("sm").style.color="";$("sm").textContent=x.message||String(x)}finally{b.disabled=false}}
start();
