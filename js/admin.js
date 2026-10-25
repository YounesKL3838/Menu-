
const T={ar:{
title:"لوحة التحكم",setup:"ربط Supabase",url:"رابط المشروع (Project URL)",key:"المفتاح العام (anon key)",save:"حفظ",
email:"البريد الإلكتروني",pass:"كلمة المرور",login:"دخول",logout:"خروج",noadmin:"هذا الحساب ليس مسؤولًا.",
dash:"الرئيسية",prods:"المنتجات",orders:"الطلبات",cats:"التصنيفات",
sales:"إجمالي المبيعات",ordersN:"الطلبات",prodsN:"المنتجات",custN:"العملاء",low:"مخزون منخفض",recent:"أحدث الطلبات",top:"الأكثر مبيعًا",
day:"يومي",week:"أسبوعي",month:"شهري",year:"سنوي",none:"لا توجد بيانات بعد.",
add:"إضافة",edit:"تعديل",del:"حذف",cancel:"إلغاء",close:"إغلاق",search:"بحث…",all:"الكل",
nameAr:"الاسم بالعربية",nameFr:"الاسم بالفرنسية",shAr:"وصف مختصر (عربي)",shFr:"وصف مختصر (فرنسي)",dsAr:"الوصف (عربي)",dsFr:"الوصف (فرنسي)",
price:"السعر",sale:"سعر التخفيض",sku:"رمز SKU",cat:"التصنيف",status:"الحالة",isNew:"جديد",feat:"مميز",best:"الأكثر مبيعًا",
variants:"المقاسات والألوان والمخزون",size:"المقاس",color:"اللون",stock:"الكمية",addVar:"إضافة متغير",
images:"الصور",pick:"اختيار صور",primary:"رئيسية",up:"أعلى",down:"أسفل",uploading:"جارٍ الرفع…",failed:"فشل الرفع، احفظ مرة أخرى للمحاولة",ready:"جاهزة للرفع",
saved:"تم الحفظ",deleted:"تم الحذف",confirmDel:"هل أنت متأكد من الحذف؟ لا يمكن التراجع.",req:"أكمل الحقول المطلوبة (الاسمان، السعر، SKU).",dup:"قيمة مكررة (SKU أو متغير).",
draft:"مسودة",published:"منشور",archived:"مؤرشف",
new:"جديد",confirmed:"مؤكد",processing:"قيد التجهيز",shipped:"تم الشحن",delivered:"تم التسليم",cancelled:"ملغى",
tracking:"رقم التتبع",customer:"العميل",phone:"الهاتف",addr:"العنوان",items:"المنتجات",history:"السجل",total:"الإجمالي",update:"تحديث",
slug:"المعرّف (slug)",order:"الترتيب",active:"مفعّل",image:"الصورة",cur:"د.ج",lang:"Français",noList:"لا توجد عناصر."},
fr:{
title:"Tableau de bord",setup:"Connexion à Supabase",url:"URL du projet",key:"Clé publique (anon key)",save:"Enregistrer",
email:"E-mail",pass:"Mot de passe",login:"Connexion",logout:"Déconnexion",noadmin:"Ce compte n’est pas administrateur.",
dash:"Accueil",prods:"Produits",orders:"Commandes",cats:"Catégories",
sales:"Ventes totales",ordersN:"Commandes",prodsN:"Produits",custN:"Clients",low:"Stock faible",recent:"Dernières commandes",top:"Meilleures ventes",
day:"Jour",week:"Semaine",month:"Mois",year:"Année",none:"Aucune donnée pour l’instant.",
add:"Ajouter",edit:"Modifier",del:"Supprimer",cancel:"Annuler",close:"Fermer",search:"Rechercher…",all:"Tous",
nameAr:"Nom en arabe",nameFr:"Nom en français",shAr:"Description courte (arabe)",shFr:"Description courte (français)",dsAr:"Description (arabe)",dsFr:"Description (français)",
price:"Prix",sale:"Prix promo",sku:"Référence SKU",cat:"Catégorie",status:"Statut",isNew:"Nouveau",feat:"Mis en avant",best:"Meilleure vente",
variants:"Tailles, couleurs et stock",size:"Taille",color:"Couleur",stock:"Quantité",addVar:"Ajouter une variante",
images:"Images",pick:"Choisir des images",primary:"Principale",up:"Monter",down:"Descendre",uploading:"Envoi en cours…",failed:"Échec de l’envoi, enregistrez à nouveau pour réessayer",ready:"Prête à envoyer",
saved:"Enregistré",deleted:"Supprimé",confirmDel:"Confirmer la suppression ? Action irréversible.",req:"Complétez les champs requis (deux noms, prix, SKU).",dup:"Valeur en double (SKU ou variante).",
draft:"Brouillon",published:"Publié",archived:"Archivé",
new:"Nouvelle",confirmed:"Confirmée",processing:"En préparation",shipped:"Expédiée",delivered:"Livrée",cancelled:"Annulée",
tracking:"N° de suivi",customer:"Client",phone:"Téléphone",addr:"Adresse",items:"Articles",history:"Historique",total:"Total",update:"Mettre à jour",
slug:"Identifiant (slug)",order:"Ordre",active:"Actif",image:"Image",cur:"DA",lang:"العربية",noList:"Aucun élément."}};

const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let lang=(()=>{try{return localStorage.getItem('alang')||'ar'}catch(e){return 'ar'}})();
const t=k=>T[lang][k]||k;
const money=v=>Number(v||0).toLocaleString(lang==='ar'?'ar-DZ':'fr-FR')+' '+t('cur');
const date=d=>new Date(d).toLocaleDateString(lang==='ar'?'ar-DZ':'fr-FR');
const STAT=['new','confirmed','processing','shipped','delivered','cancelled'];
let sb=null,tab='dash',cats=[],EDIT=null;

function toast(m,err){const e=document.createElement('div');e.className='toast'+(err?' err':'');e.textContent=m;document.body.append(e);setTimeout(()=>e.remove(),2600)}
function fail(e){console.error(e);toast(e&&e.code==='23505'?t('dup'):(e&&e.message)||String(e),true)}
function setLang(l){lang=l;try{localStorage.setItem('alang',l)}catch(e){}document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr';document.title=t('title');sb&&sb.auth&&boot()}
const cfg=()=>{try{const c=JSON.parse(localStorage.getItem('sbcfg')||'null');if(c)return c}catch(e){}return SUPABASE_URL?{url:SUPABASE_URL,key:SUPABASE_ANON_KEY}:null};
const pub=p=>p?sb.storage.from('product-images').getPublicUrl(p).data.publicUrl:'';
const nm=(arr,l)=>((arr||[]).find(x=>x.lang===l)||{}).name||'';
const langBtn=()=>`<button class="btn sm" onclick="setLang('${lang==='ar'?'fr':'ar'}')">${t('lang')}</button>`;

/* ---------- boot / auth ---------- */
async function boot(){
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.documentElement.lang=lang;document.title=t('title');
  const c=cfg();
  if(!c){$('#app').innerHTML=`<div class="login"><div class="row"><h2 class="sp">${t('setup')}</h2>${langBtn()}</div>
   <label>${t('url')}</label><input id="cu" dir="ltr" placeholder="https://xxxx.supabase.co"><label>${t('key')}</label><input id="ck" dir="ltr">
   <p><button class="btn pri" onclick="saveCfg()">${t('save')}</button></p></div>`;return}
  if(!sb)sb=supabase.createClient(c.url,c.key);
  const {data:{session}}=await sb.auth.getSession();
  if(!session)return loginView();
  if(!(await isAdmin(session.user.id))){await sb.auth.signOut();return loginView(t('noadmin'))}
  shell();go(tab)
}
function saveCfg(){const url=$('#cu').value.trim(),key=$('#ck').value.trim();if(!url||!key)return;localStorage.setItem('sbcfg',JSON.stringify({url,key}));boot()}
async function isAdmin(id){const {data}=await sb.from('user_roles').select('role').eq('user_id',id).eq('role','admin');return !!(data&&data.length)}
function loginView(msg){$('#app').innerHTML=`<div class="login"><div class="row"><h2 class="sp">${t('title')}</h2>${langBtn()}</div>
 <form onsubmit="doLogin(event)"><label>${t('email')}</label><input id="le" type="email" dir="ltr" required autocomplete="username">
 <label>${t('pass')}</label><input id="lp" type="password" dir="ltr" required autocomplete="current-password">
 <p style="color:var(--red)">${esc(msg||'')}</p><button class="btn pri">${t('login')}</button></form></div>`}
async function doLogin(e){e.preventDefault();const {error}=await sb.auth.signInWithPassword({email:$('#le').value.trim(),password:$('#lp').value});if(error)return loginView(error.message);boot()}
async function logout(){await sb.auth.signOut();boot()}
function shell(){$('#app').innerHTML=`<div class="top"><div class="row"><b class="sp">${t('title')}</b>${langBtn()}<button class="btn sm" onclick="logout()">${t('logout')}</button></div>
 <div class="tabs">${['dash','prods','orders','cats'].map(k=>`<button data-t="${k}" class="${k===tab?'on':''}" onclick="go('${k}')">${t(k)}</button>`).join('')}</div></div><main id="main"></main>`}
async function go(k){tab=k;document.querySelectorAll('.tabs button').forEach(b=>b.classList.toggle('on',b.dataset.t===k));$('#main').innerHTML='…';
  try{await({dash:vDash,prods:vProds,orders:vOrders,cats:vCats}[k])()}catch(e){fail(e)}}
function modal(h){$('#modal').innerHTML=`<div class="overlay" onclick="if(event.target===this)closeM()"><div class="sheet">${h}</div></div>`}
function closeM(){$('#modal').innerHTML='';EDIT=null}

/* ---------- dashboard ---------- */
let unit='day';
async function vDash(){
  const {data:s,error}=await sb.rpc('admin_dashboard_stats');if(error)throw error;
  const from={day:30*864e5,week:84*864e5,month:365*864e5,year:1826*864e5}[unit];
  const {data:ser}=await sb.rpc('admin_sales_series',{p_unit:unit,p_from:new Date(Date.now()-from).toISOString()});
  const mx=Math.max(1,...(ser||[]).map(x=>+x.sales));
  const list=(a,f)=>a.length?a.map(f).join(''):`<p class="muted">${t('none')}</p>`;
  $('#main').innerHTML=`<div class="grid">
   <div class="card stat"><b>${money(s.total_sales)}</b><span>${t('sales')}</span></div>
   <div class="card stat"><b>${s.orders_count}</b><span>${t('ordersN')}</span></div>
   <div class="card stat"><b>${s.products_count}</b><span>${t('prodsN')}</span></div>
   <div class="card stat"><b>${s.customers_count}</b><span>${t('custN')}</span></div></div>
  <div class="card" style="margin-top:12px"><div class="row"><b class="sp">${t('sales')}</b>
   <select style="width:auto" onchange="unit=this.value;vDash()">${['day','week','month','year'].map(u=>`<option value="${u}" ${u===unit?'selected':''}>${t(u)}</option>`).join('')}</select></div>
   ${ser&&ser.length?`<div class="bars">${ser.map(x=>`<div style="height:${Math.max(2,x.sales/mx*100)}%" title="${date(x.bucket)}: ${money(x.sales)}"></div>`).join('')}</div>`:`<p class="muted">${t('none')}</p>`}</div>
  <div class="grid" style="margin-top:12px">
   <div class="card"><b>${t('low')}</b>${list(s.low_stock,x=>`<p class="muted">${esc(x.size)} / ${esc(x.color)} — <b>${x.stock}</b></p>`)}</div>
   <div class="card"><b>${t('recent')}</b>${list(s.recent_orders,x=>`<p class="muted">${esc(x.order_number)} · ${esc(x.customer_name)} · ${money(x.total)}</p>`)}</div>
   <div class="card"><b>${t('top')}</b>${list(s.top_products,x=>`<p class="muted">${esc(lang==='ar'?x.name_ar:x.name_fr)} — <b>${x.sold}</b></p>`)}</div></div>`}

/* ---------- products ---------- */
let PQ='',PS='';
async function loadCats(){const {data}=await sb.from('categories').select('*,category_translations(lang,name)').order('sort_order');cats=data||[]}
async function vProds(){
  await loadCats();
  const {data,error}=await sb.from('products').select('id,sku,price,sale_price,status,is_new,is_featured,is_bestseller,product_translations(lang,name),product_images(path,is_primary,sort_order),product_variants(stock)').order('created_at',{ascending:false});
  if(error)throw error;
  const q=PQ.toLowerCase();
  const rows=data.filter(p=>(!PS||p.status===PS)&&(!q||(p.sku+nm(p.product_translations,'ar')+nm(p.product_translations,'fr')).toLowerCase().includes(q)));
  $('#main').innerHTML=`<div class="row"><input style="flex:1;min-width:140px" placeholder="${t('search')}" value="${esc(PQ)}" oninput="PQ=this.value;clearTimeout(window._d);window._d=setTimeout(vProds,300)">
   <select style="width:auto" onchange="PS=this.value;vProds()"><option value="">${t('all')}</option>${['draft','published','archived'].map(s=>`<option value="${s}" ${s===PS?'selected':''}>${t(s)}</option>`).join('')}</select>
   <button class="btn pri" onclick="openProduct()">+ ${t('add')}</button></div>
   <div class="grid" style="margin-top:12px">${rows.map(p=>{const im=(p.product_images||[]).find(i=>i.is_primary)||(p.product_images||[])[0];const st=p.product_variants.reduce((a,v)=>a+v.stock,0);
   return `<div class="card"><div class="pc">${im?`<img src="${esc(pub(im.path))}" alt="" loading="lazy">`:'<div class="thumb"></div>'}<div class="sp"><h4>${esc(nm(p.product_translations,lang)||nm(p.product_translations,'ar')||p.sku)}</h4>
   <div class="muted">${esc(p.sku)} · ${money(p.sale_price||p.price)}</div><div class="muted">${t('stock')}: ${st}</div><span class="pill ${p.status}">${t(p.status)}</span></div></div>
   <div class="row" style="margin-top:10px"><button class="btn sm" onclick="openProduct('${p.id}')">${t('edit')}</button><button class="btn sm red" onclick="delProduct('${p.id}')">${t('del')}</button></div></div>`}).join('')||`<p class="muted">${t('noList')}</p>`}</div>`}

async function openProduct(id){
  await loadCats();
  EDIT={id:id||null,imgs:[],delImgs:[],origVars:[]};let p={status:'draft'},tr=[],vars=[];
  if(id){const {data,error}=await sb.from('products').select('*,product_translations(*),product_images(*),product_variants(*)').eq('id',id).single();if(error)return fail(error);
    p=data;tr=data.product_translations;vars=data.product_variants;EDIT.origVars=vars.map(v=>v.id);
    EDIT.imgs=[...data.product_images].sort((a,b)=>a.sort_order-b.sort_order).map(i=>({id:i.id,path:i.path,primary:i.is_primary}))}
  const g=l=>tr.find(x=>x.lang===l)||{};
  modal(`<div class="row"><h3 class="sp">${id?t('edit'):t('add')}</h3><button class="btn sm" onclick="closeM()">${t('close')}</button></div>
  <div class="two"><div><label>${t('nameAr')} *</label><input id="p_na" value="${esc(g('ar').name)}"></div><div><label>${t('nameFr')} *</label><input id="p_nf" value="${esc(g('fr').name)}"></div></div>
  <div class="two"><div><label>${t('shAr')}</label><textarea id="p_sa">${esc(g('ar').short_description)}</textarea></div><div><label>${t('shFr')}</label><textarea id="p_sf">${esc(g('fr').short_description)}</textarea></div></div>
  <div class="two"><div><label>${t('dsAr')}</label><textarea id="p_da">${esc(g('ar').description)}</textarea></div><div><label>${t('dsFr')}</label><textarea id="p_df">${esc(g('fr').description)}</textarea></div></div>
  <div class="two"><div><label>${t('price')} *</label><input id="p_pr" type="number" min="0" step="1" inputmode="decimal" value="${p.price??''}"></div><div><label>${t('sale')}</label><input id="p_sp" type="number" min="0" step="1" inputmode="decimal" value="${p.sale_price??''}"></div></div>
  <div class="two"><div><label>${t('sku')} *</label><input id="p_sku" dir="ltr" value="${esc(p.sku)}"></div><div><label>${t('status')}</label><select id="p_st">${['draft','published','archived'].map(s=>`<option value="${s}" ${s===p.status?'selected':''}>${t(s)}</option>`).join('')}</select></div></div>
  <label>${t('cat')}</label><select id="p_ct"><option value="">—</option>${cats.map(c=>`<option value="${c.id}" ${c.id===p.category_id?'selected':''}>${esc(nm(c.category_translations,lang)||c.slug)}</option>`).join('')}</select>
  <div class="chk"><label><input type="checkbox" id="p_new" ${p.is_new?'checked':''}>${t('isNew')}</label><label><input type="checkbox" id="p_ft" ${p.is_featured?'checked':''}>${t('feat')}</label><label><input type="checkbox" id="p_bs" ${p.is_bestseller?'checked':''}>${t('best')}</label></div>
  <label>${t('variants')}</label><div id="vars">${vars.map(vrow).join('')}</div><button class="btn sm" onclick="addVar()">+ ${t('addVar')}</button>
  <label>${t('images')}</label><div id="imgs"></div><input type="file" id="p_files" accept="image/*" multiple hidden onchange="addFiles(this.files)"><button class="btn sm" onclick="$('#p_files').click()">+ ${t('pick')}</button>
  <p style="margin-top:20px"><button class="btn pri" id="p_save" onclick="saveProduct()">${t('save')}</button></p>`);
  renderImgs()}
const vrow=v=>`<div class="vr" data-id="${v.id||''}"><input placeholder="${t('size')}" value="${esc(v.size)}" dir="ltr"><input placeholder="${t('color')}" value="${esc(v.color)}"><input type="number" min="0" inputmode="numeric" placeholder="${t('stock')}" value="${v.stock??0}"><button class="btn sm red" onclick="this.parentNode.remove()">×</button></div>`;
function addVar(){$('#vars').insertAdjacentHTML('beforeend',vrow({stock:0}))}
function addFiles(fl){[...fl].forEach(f=>EDIT.imgs.push({file:f,url:URL.createObjectURL(f),primary:false,state:'ready'}));if(!EDIT.imgs.some(i=>i.primary))EDIT.imgs[0].primary=true;renderImgs()}
function renderImgs(){const box=$('#imgs');if(!box)return;box.innerHTML=EDIT.imgs.map((m,i)=>`<div class="im ${m.state==='fail'?'fail':''}"><img class="thumb" src="${esc(m.url||pub(m.path))}" alt="">
 <div class="sp">${m.primary?'★ '+t('primary'):''}${m.state==='up'?' '+t('uploading'):m.state==='fail'?' '+t('failed'):m.state==='ready'?' '+t('ready'):''}</div>
 <button title="${t('primary')}" onclick="setPrimary(${i})">★</button><button title="${t('up')}" onclick="moveImg(${i},-1)">↑</button><button title="${t('down')}" onclick="moveImg(${i},1)">↓</button><button title="${t('del')}" onclick="rmImg(${i})">×</button></div>`).join('')}
function setPrimary(i){EDIT.imgs.forEach((m,j)=>m.primary=i===j);renderImgs()}
function moveImg(i,d){const j=i+d;if(j<0||j>=EDIT.imgs.length)return;[EDIT.imgs[i],EDIT.imgs[j]]=[EDIT.imgs[j],EDIT.imgs[i]];renderImgs()}
function rmImg(i){const [m]=EDIT.imgs.splice(i,1);if(m.id)EDIT.delImgs.push(m);if(m.primary&&EDIT.imgs[0])EDIT.imgs[0].primary=true;renderImgs()}
async function shrink(f){const bm=await createImageBitmap(f);const k=Math.min(1,1600/Math.max(bm.width,bm.height));const c=document.createElement('canvas');c.width=Math.round(bm.width*k);c.height=Math.round(bm.height*k);c.getContext('2d').drawImage(bm,0,0,c.width,c.height);return new Promise((r,x)=>c.toBlob(b=>b?r(b):x(new Error('image')),'image/webp',.85))}
const num=v=>v===''||v==null?null:Number(v);
async function saveProduct(){
  const v=id=>$('#'+id).value.trim();
  if(!v('p_na')||!v('p_nf')||!v('p_sku')||v('p_pr')==='')return toast(t('req'),true);
  const btn=$('#p_save');btn.disabled=true;
  try{
    const row={sku:v('p_sku'),slug:v('p_sku').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||crypto.randomUUID(),category_id:$('#p_ct').value||null,price:num(v('p_pr')),sale_price:num(v('p_sp')),status:$('#p_st').value,is_new:$('#p_new').checked,is_featured:$('#p_ft').checked,is_bestseller:$('#p_bs').checked};
    let pid=EDIT.id;
    if(pid){const {error}=await sb.from('products').update(row).eq('id',pid);if(error)throw error}
    else{const {data,error}=await sb.from('products').insert(row).select('id').single();if(error)throw error;pid=EDIT.id=data.id}
    const trs=[['ar','p_na','p_sa','p_da'],['fr','p_nf','p_sf','p_df']].map(([l,n,s,d])=>({product_id:pid,lang:l,name:v(n),short_description:v(s)||null,description:v(d)||null}));
    let r=await sb.from('product_translations').upsert(trs,{onConflict:'product_id,lang'});if(r.error)throw r.error;
    /* variants */
    const rows=[...document.querySelectorAll('#vars .vr')].map(e=>{const i=e.querySelectorAll('input');return{id:e.dataset.id,size:i[0].value.trim(),color:i[1].value.trim(),stock:Math.max(0,parseInt(i[2].value)||0)}}).filter(x=>x.size&&x.color);
    const keep=rows.filter(x=>x.id).map(x=>x.id),gone=EDIT.origVars.filter(i=>!keep.includes(i));
    if(gone.length){r=await sb.from('product_variants').delete().in('id',gone);if(r.error)throw r.error}
    for(const x of rows.filter(x=>x.id)){r=await sb.from('product_variants').update({size:x.size,color:x.color,stock:x.stock}).eq('id',x.id);if(r.error)throw r.error}
    const ins=rows.filter(x=>!x.id).map(x=>({product_id:pid,size:x.size,color:x.color,stock:x.stock}));
    if(ins.length){r=await sb.from('product_variants').insert(ins);if(r.error)throw r.error}
    EDIT.origVars=(await sb.from('product_variants').select('id').eq('product_id',pid)).data.map(x=>x.id);
    /* images */
    for(const m of EDIT.delImgs){await sb.from('product_images').delete().eq('id',m.id);await cleanFile(m.path)}EDIT.delImgs=[];
    await sb.from('product_images').update({is_primary:false}).eq('product_id',pid);
    const pi=Math.max(0,EDIT.imgs.findIndex(m=>m.primary));let failed=0;
    for(let i=0;i<EDIT.imgs.length;i++){const m=EDIT.imgs[i];
      if(m.id){await sb.from('product_images').update({sort_order:i,is_primary:i===pi}).eq('id',m.id);continue}
      m.state='up';renderImgs();let path;
      try{const blob=await shrink(m.file);path=`products/${pid}/${crypto.randomUUID()}.webp`;
        let e=(await sb.storage.from('product-images').upload(path,blob,{contentType:'image/webp'})).error;if(e)throw e;
        const q=await sb.from('product_images').insert({product_id:pid,path,sort_order:i,is_primary:i===pi}).select('id').single();
        if(q.error){await sb.storage.from('product-images').remove([path]);throw q.error}
        m.id=q.data.id;m.path=path;m.file=null;m.url=null;m.state=null}
      catch(e){console.error(e);m.state='fail';failed++}
      renderImgs()}
    if(failed){toast(t('failed'),true);btn.disabled=false;return}
    toast(t('saved'));closeM();vProds()
  }catch(e){fail(e);btn.disabled=false}}
async function cleanFile(path){const {count}=await sb.from('product_images').select('id',{count:'exact',head:true}).eq('path',path);if(!count)await sb.storage.from('product-images').remove([path])}
async function delProduct(id){if(!confirm(t('confirmDel')))return;
  const {data:im}=await sb.from('product_images').select('path').eq('product_id',id);
  const {error}=await sb.from('products').delete().eq('id',id);if(error)return fail(error);
  for(const i of im||[])await cleanFile(i.path);toast(t('deleted'));vProds()}

/* ---------- orders ---------- */
let OQ='',OS='';
async function vOrders(){
  let q=sb.from('orders').select('*,order_items(*)').order('created_at',{ascending:false}).limit(100);
  if(OS)q=q.eq('status',OS);if(OQ)q=q.or(`order_number.ilike.%${OQ.replace(/[%,()]/g,'')}%,customer_name.ilike.%${OQ.replace(/[%,()]/g,'')}%`);
  const {data,error}=await q;if(error)throw error;
  $('#main').innerHTML=`<div class="row"><input style="flex:1;min-width:140px" placeholder="${t('search')}" value="${esc(OQ)}" oninput="OQ=this.value;clearTimeout(window._d);window._d=setTimeout(vOrders,300)">
  <select style="width:auto" onchange="OS=this.value;vOrders()"><option value="">${t('all')}</option>${STAT.map(s=>`<option value="${s}" ${s===OS?'selected':''}>${t(s)}</option>`).join('')}</select></div>
  <div class="grid" style="margin-top:12px">${data.map(o=>`<div class="card"><div class="row"><b class="sp">${esc(o.order_number)}</b><span class="pill ${o.status}">${t(o.status)}</span></div>
   <div class="muted">${esc(o.customer_name)} · ${date(o.created_at)}</div><div><b>${money(o.total)}</b></div>
   <p><button class="btn sm" onclick="openOrder('${o.id}')">${t('edit')}</button></p></div>`).join('')||`<p class="muted">${t('noList')}</p>`}</div>`}
async function openOrder(id){
  const {data:o,error}=await sb.from('orders').select('*,order_items(*),order_status_history(*)').eq('id',id).single();if(error)return fail(error);
  const h=[...o.order_status_history].sort((a,b)=>new Date(a.created_at)-new Date(b.created_at));
  modal(`<div class="row"><h3 class="sp">${esc(o.order_number)}</h3><button class="btn sm" onclick="closeM()">${t('close')}</button></div>
  <p><b>${t('customer')}:</b> ${esc(o.customer_name)}<br><b>${t('phone')}:</b> <span dir="ltr">${esc(o.customer_phone)}</span><br><b>${t('addr')}:</b> ${esc(o.wilaya)} ${esc(o.city||'')} — ${esc(o.address_line)}</p>
  <b>${t('items')}</b>${o.order_items.map(i=>`<p class="muted">${esc(lang==='ar'?i.name_ar:i.name_fr)} (${esc(i.size)}/${esc(i.color)}) × ${i.quantity} — ${money(i.unit_price*i.quantity)}</p>`).join('')}
  <p><b>${t('total')}:</b> ${money(o.total)}</p>
  <label>${t('status')}</label><select id="o_st">${STAT.map(s=>`<option value="${s}" ${s===o.status?'selected':''}>${t(s)}</option>`).join('')}</select>
  <label>${t('tracking')}</label><input id="o_tr" dir="ltr" value="${esc(o.tracking_number)}">
  <p><button class="btn pri" onclick="saveOrder('${o.id}')">${t('update')}</button></p>
  <b>${t('history')}</b>${h.map(x=>`<p class="muted">${date(x.created_at)} — ${t(x.status)}</p>`).join('')}`)}
async function saveOrder(id){const {error}=await sb.rpc('admin_set_order_status',{p_order:id,p_status:$('#o_st').value,p_tracking:$('#o_tr').value.trim()||null});if(error)return fail(error);toast(t('saved'));closeM();vOrders()}

/* ---------- categories ---------- */
async function vCats(){await loadCats();
  $('#main').innerHTML=`<div class="row"><span class="sp"></span><button class="btn pri" onclick="openCat()">+ ${t('add')}</button></div><div class="grid" style="margin-top:12px">${cats.map(c=>`<div class="card"><div class="pc">${c.image_path?`<img src="${esc(pub(c.image_path))}" alt="" loading="lazy">`:'<div class="thumb"></div>'}<div class="sp"><h4>${esc(nm(c.category_translations,lang)||c.slug)}</h4><div class="muted">${esc(c.slug)} · #${c.sort_order}</div><span class="pill ${c.is_active?'published':'archived'}">${c.is_active?t('active'):'—'}</span></div></div>
  <div class="row" style="margin-top:10px"><button class="btn sm" onclick="openCat('${c.id}')">${t('edit')}</button><button class="btn sm red" onclick="delCat('${c.id}')">${t('del')}</button></div></div>`).join('')||`<p class="muted">${t('noList')}</p>`}</div>`}
async function openCat(id){await loadCats();const c=cats.find(x=>x.id===id)||{sort_order:0,is_active:true,category_translations:[]};
  const {data:tr}=id?await sb.from('category_translations').select('*').eq('category_id',id):{data:[]};const g=l=>(tr||[]).find(x=>x.lang===l)||{};
  EDIT={id:id||null,path:c.image_path||null};
  modal(`<div class="row"><h3 class="sp">${id?t('edit'):t('add')}</h3><button class="btn sm" onclick="closeM()">${t('close')}</button></div>
  <div class="two"><div><label>${t('nameAr')} *</label><input id="c_na" value="${esc(g('ar').name)}"></div><div><label>${t('nameFr')} *</label><input id="c_nf" value="${esc(g('fr').name)}"></div></div>
  <div class="two"><div><label>${t('dsAr')}</label><textarea id="c_da">${esc(g('ar').description)}</textarea></div><div><label>${t('dsFr')}</label><textarea id="c_df">${esc(g('fr').description)}</textarea></div></div>
  <div class="two"><div><label>${t('slug')} *</label><input id="c_sl" dir="ltr" value="${esc(c.slug)}"></div><div><label>${t('order')}</label><input id="c_so" type="number" value="${c.sort_order}"></div></div>
  <label>${t('image')}</label>${c.image_path?`<img class="thumb" src="${esc(pub(c.image_path))}" alt="">`:''}<input type="file" id="c_f" accept="image/*">
  <div class="chk"><label><input type="checkbox" id="c_ac" ${c.is_active?'checked':''}>${t('active')}</label></div>
  <p style="margin-top:20px"><button class="btn pri" id="c_save" onclick="saveCat()">${t('save')}</button></p>`)}
async function saveCat(){const v=i=>$('#'+i).value.trim();if(!v('c_na')||!v('c_nf')||!v('c_sl'))return toast(t('req'),true);
  const btn=$('#c_save');btn.disabled=true;let up=null;
  try{let path=EDIT.path;const f=$('#c_f').files[0];
    if(f){const blob=await shrink(f);up=`categories/${crypto.randomUUID()}.webp`;const e=(await sb.storage.from('product-images').upload(up,blob,{contentType:'image/webp'})).error;if(e)throw e;path=up}
    const row={slug:v('c_sl').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''),sort_order:parseInt(v('c_so'))||0,is_active:$('#c_ac').checked,image_path:path};
    let id=EDIT.id;
    if(id){const {error}=await sb.from('categories').update(row).eq('id',id);if(error)throw error}
    else{const {data,error}=await sb.from('categories').insert(row).select('id').single();if(error)throw error;id=data.id}
    const r=await sb.from('category_translations').upsert([{category_id:id,lang:'ar',name:v('c_na'),description:v('c_da')||null},{category_id:id,lang:'fr',name:v('c_nf'),description:v('c_df')||null}],{onConflict:'category_id,lang'});if(r.error)throw r.error;
    toast(t('saved'));closeM();vCats()}
  catch(e){if(up)await sb.storage.from('product-images').remove([up]);fail(e);btn.disabled=false}}
async function delCat(id){if(!confirm(t('confirmDel')))return;const {error}=await sb.from('categories').delete().eq('id',id);if(error)return fail(error);toast(t('deleted'));vCats()}

boot();
