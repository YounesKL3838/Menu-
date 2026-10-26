
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

Object.assign(T.ar,{looks:"الإطلالات",ttlAr:"العنوان بالعربية",ttlFr:"العنوان بالفرنسية",addProd:"أضف منتجًا إلى الإطلالة",lookNeedImg:"أضف صورة للإطلالة.",lookNeedProds:"أضف منتجًا واحدًا على الأقل.",lookImg:"صورة الإطلالة (رجل يرتدي القطع)",lookProds:"المنتجات في الإطلالة"});
Object.assign(T.fr,{looks:"Looks",ttlAr:"Titre en arabe",ttlFr:"Titre en français",addProd:"Ajouter un produit au look",lookNeedImg:"Ajoutez l’image du look.",lookNeedProds:"Ajoutez au moins un produit.",lookImg:"Image du look (homme portant les pièces)",lookProds:"Produits du look"});
Object.assign(T.ar,{catalog:"المنتجات والتصنيفات",subcat:"التصنيف الفرعي",addColor:"لون",addSize:"إضافة مقاس",addCat:"تصنيف",uncat:"بدون تصنيف",parent:"التصنيف الأب (اختياري)",lookImgs:"صور الإطلالة (يمكن رفع عدة صور)"});
Object.assign(T.fr,{catalog:"Produits et catégories",subcat:"Sous-catégorie",addColor:"couleur",addSize:"Ajouter une taille",addCat:"Catégorie",uncat:"Sans catégorie",parent:"Catégorie parente (facultatif)",lookImgs:"Photos du look (plusieurs possibles)"});
Object.assign(T.ar,{landings:"صفحات الهبوط",landing:"صفحة هبوط",lpType:"النوع",lpProduct:"منتج",lpLook:"إطلالة",lpTarget:"المنتج أو الإطلالة",lpSlug:"الرابط (إنجليزي وأرقام و -)",lpHead:"العنوان الرئيسي",lpSub:"عنوان فرعي",lpBen:"المزايا (كل ميزة في سطر)",lpCta:"نص زر الطلب",lpForm:"إظهار نموذج الطلب",lpLink:"رابط الصفحة",lpCopy:"نسخ الرابط",lpCopied:"تم نسخ الرابط",lpOpen:"فتح",lpSlugBad:"الرابط غير صالح: 3 إلى 60 حرفًا إنجليزيًا صغيرًا أو أرقامًا أو -"});
Object.assign(T.fr,{landings:"Pages de vente",landing:"Page de vente",lpType:"Type",lpProduct:"Produit",lpLook:"Look",lpTarget:"Produit ou look",lpSlug:"Lien (a-z, chiffres et -)",lpHead:"Titre principal",lpSub:"Sous-titre",lpBen:"Avantages (un par ligne)",lpCta:"Texte du bouton",lpForm:"Afficher le formulaire de commande",lpLink:"Lien de la page",lpCopy:"Copier le lien",lpCopied:"Lien copié",lpOpen:"Ouvrir",lpSlugBad:"Lien invalide : 3 à 60 caractères a-z, chiffres ou -"});
Object.assign(T.ar,{site:"الموقع",sNote:"قسم المالك: يظهر بالضغط على عنوان اللوحة 5 مرات متتالية. التعديل مسموح للمسؤولين فقط.",sBrand:"الهوية",sName:"اسم المتجر",sLogo:"الشعار (لوغو)",sHero:"صورة الواجهة الرئيسية",sAboutImg:"صورة قسم «من نحن»",sTexts:"النصوص والعناوين",sBlank:"اترك الحقل فارغًا لاستخدام النص الافتراضي.",sH1:"العنوان الرئيسي",sSub:"الوصف تحت العنوان",sShop:"زر التسوق",sExplore:"زر المجموعة الجديدة",sBanT:"عنوان البانر",sBanP:"نص البانر",sBanB:"زر البانر",sAbT:"عنوان «من نحن»",sAbP:"نص «من نحن»",sFAbout:"نص التذييل",sCopy:"حقوق الطبع والنشر",sContact:"التواصل ومواقع التواصل الاجتماعي",sPhone:"رقم الهاتف",sWa:"رقم واتساب",sDev:"المطوّر",sDevName:"اسم المطوّر",sDevUrl:"رابط المطوّر (اختياري)",sUrlBad:"الروابط يجب أن تبدأ بـ https://"});
Object.assign(T.fr,{site:"Site",sNote:"Espace propriétaire : s’affiche en touchant 5 fois le titre du tableau de bord. Réservé aux administrateurs.",sBrand:"Identité",sName:"Nom de la boutique",sLogo:"Logo",sHero:"Image de la page d’accueil",sAboutImg:"Image de la section À propos",sTexts:"Textes et titres",sBlank:"Laissez vide pour garder le texte par défaut.",sH1:"Titre principal",sSub:"Texte sous le titre",sShop:"Bouton d’achat",sExplore:"Bouton nouvelle collection",sBanT:"Titre de la bannière",sBanP:"Texte de la bannière",sBanB:"Bouton de la bannière",sAbT:"Titre À propos",sAbP:"Texte À propos",sFAbout:"Texte du pied de page",sCopy:"Droits d’auteur",sContact:"Contact et réseaux sociaux",sPhone:"Téléphone",sWa:"Numéro WhatsApp",sDev:"Développeur",sDevName:"Nom du développeur",sDevUrl:"Lien du développeur (facultatif)",sUrlBad:"Les liens doivent commencer par https://"});
Object.assign(T.ar,{imgHint:"تُقصّ الصور تلقائيًا من الوسط إلى مقاس إنستغرام العمودي 4:5 (حتى 1440×1800) بجودة عالية وحجم أصغر."});
Object.assign(T.fr,{imgHint:"Les images sont recadrées automatiquement au centre au format portrait Instagram 4:5 (jusqu’à 1440×1800), en haute qualité et poids réduit."});
Object.assign(T.ar,{sHTitle:"عنوان الشريط العلوي (اتركه فارغًا لاسم المتجر)"});
Object.assign(T.fr,{sHTitle:"Titre de la barre supérieure (vide = nom de la boutique)"});
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
async function logout(){try{sessionStorage.removeItem('owner')}catch(e){}await sb.auth.signOut();boot()}
function shell(){$('#app').innerHTML=`<div class="top"><div class="row"><b class="sp" id="ttl" onclick="ownerTap()" style="user-select:none;cursor:default">${t('title')}</b>${langBtn()}<button class="btn sm" onclick="logout()">${t('logout')}</button></div>
 <div class="tabs">${tabsList().map(k=>`<button data-t="${k}" class="${k===tab?'on':''}" onclick="go('${k}')">${t(k)}</button>`).join('')}</div></div><main id="main"></main>`}
async function go(k){tab=k;document.querySelectorAll('.tabs button').forEach(b=>b.classList.toggle('on',b.dataset.t===k));$('#main').innerHTML='…';
  try{await({dash:vDash,catalog:vCatalog,orders:vOrders,looks:vLooks,landings:vLandings,site:vSite}[k])()}catch(e){fail(e)}}
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

/* ---------- catalog: categories with their products ---------- */
let CQ='',CS='';
async function loadCats(){const {data}=await sb.from('categories').select('*,category_translations(lang,name)').order('sort_order');cats=data||[]}
const cname=c=>esc(nm(c.category_translations,lang)||nm(c.category_translations,'ar')||c.slug);
async function vCatalog(){
  await loadCats();
  const {data,error}=await sb.from('products').select('id,sku,price,sale_price,status,category_id,subcategory_id,product_translations(lang,name),product_images(path,is_primary,sort_order),product_variants(stock)').order('created_at',{ascending:false});
  if(error)throw error;
  const q=CQ.toLowerCase();
  const rows=data.filter(p=>(!CS||p.status===CS)&&(!q||(p.sku+nm(p.product_translations,'ar')+nm(p.product_translations,'fr')).toLowerCase().includes(q)));
  const card=p=>{const im=(p.product_images||[]).find(i=>i.is_primary)||(p.product_images||[])[0];const st=p.product_variants.reduce((a,v)=>a+v.stock,0);
    return `<div class="card"><div class="pc">${im?`<img src="${esc(pub(im.path))}" alt="" loading="lazy">`:'<div class="thumb"></div>'}<div class="sp"><h4>${esc(nm(p.product_translations,lang)||nm(p.product_translations,'ar')||p.sku)}</h4>
    <div class="muted">${esc(p.sku)} · ${money(p.sale_price||p.price)}</div><div class="muted">${t('stock')}: ${st}</div><span class="pill ${p.status}">${t(p.status)}</span></div></div>
    <div class="row" style="margin-top:10px"><button class="btn sm" onclick="openProduct('${p.id}')">${t('edit')}</button><button class="btn sm" onclick="openLanding(null,'product','${p.id}')">${t('landing')}</button><button class="btn sm red" onclick="delProduct('${p.id}')">${t('del')}</button></div></div>`};
  const grid=a=>a.length?`<div class="grid">${a.map(card).join('')}</div>`:`<p class="muted">${t('noList')}</p>`;
  const kids=id=>cats.filter(k=>k.parent_id===id);
  const sub=k=>{const ps=rows.filter(p=>p.subcategory_id===k.id);return `<div class="sub"><div class="row"><b class="sp">${cname(k)} <span class="muted">(${ps.length})</span></b>
    <button class="btn sm" onclick="openProduct(null,'${k.id}')">+ ${t('prods')}</button><button class="btn sm" onclick="openCat('${k.id}')">${t('edit')}</button><button class="btn sm red" onclick="delCat('${k.id}')">${t('del')}</button></div>${grid(ps)}</div>`};
  const sec=c=>{const ks=kids(c.id);const mine=rows.filter(p=>p.category_id===c.id);const direct=mine.filter(p=>!ks.some(k=>k.id===p.subcategory_id));
    return `<details class="cg" open><summary><b class="sp">${cname(c)} <span class="muted">(${mine.length})</span></b>
    <button class="btn sm" onclick="event.preventDefault();openProduct(null,'${c.id}')">+ ${t('prods')}</button><button class="btn sm" onclick="event.preventDefault();openCat('${c.id}')">${t('edit')}</button><button class="btn sm red" onclick="event.preventDefault();delCat('${c.id}')">${t('del')}</button></summary>
    ${grid(direct)}${ks.map(sub).join('')}<p><button class="btn sm" onclick="openCat(null,'${c.id}')">+ ${t('subcat')}</button></p></details>`};
  const un=rows.filter(p=>!p.category_id);
  $('#main').innerHTML=`<div class="row"><input style="flex:1;min-width:140px" placeholder="${t('search')}" value="${esc(CQ)}" oninput="CQ=this.value;clearTimeout(window._d);window._d=setTimeout(vCatalog,300)">
   <select style="width:auto" onchange="CS=this.value;vCatalog()"><option value="">${t('all')}</option>${['draft','published','archived'].map(s=>`<option value="${s}" ${s===CS?'selected':''}>${t(s)}</option>`).join('')}</select>
   <button class="btn" onclick="openCat()">+ ${t('addCat')}</button><button class="btn pri" onclick="openProduct()">+ ${t('add')} ${t('prods')}</button></div>
   ${cats.filter(c=>!c.parent_id).map(sec).join('')}
   ${un.length?`<details class="cg" open><summary><b class="sp">${t('uncat')} <span class="muted">(${un.length})</span></b></summary>${grid(un)}</details>`:''}
   ${!cats.length&&!un.length?`<p class="muted">${t('noList')}</p>`:''}`}

async function openProduct(id,catId){
  await loadCats();
  EDIT={id:id||null,imgs:[],delImgs:[],origVars:[]};let p={status:'draft'},tr=[],vars=[];
  if(id){const {data,error}=await sb.from('products').select('*,product_translations(*),product_images(*),product_variants(*)').eq('id',id).single();if(error)return fail(error);
    p=data;tr=data.product_translations;vars=data.product_variants;EDIT.origVars=vars.map(v=>v.id);
    EDIT.imgs=[...data.product_images].sort((a,b)=>a.sort_order-b.sort_order).map(i=>({id:i.id,path:i.path,primary:i.is_primary}))}
  else if(catId){const c=cats.find(x=>x.id===catId);if(c){if(c.parent_id){p.category_id=c.parent_id;p.subcategory_id=c.id}else p.category_id=c.id}}
  const g=l=>tr.find(x=>x.lang===l)||{};
  const bySize={};vars.forEach(v=>{(bySize[v.size]=bySize[v.size]||[]).push(v)});
  const sizes=Object.keys(bySize);
  modal(`<div class="row"><h3 class="sp">${id?t('edit'):t('add')}</h3><button class="btn sm" onclick="closeM()">${t('close')}</button></div>
  <div class="two"><div><label>${t('nameAr')} *</label><input id="p_na" value="${esc(g('ar').name)}"></div><div><label>${t('nameFr')} *</label><input id="p_nf" value="${esc(g('fr').name)}"></div></div>
  <div class="two"><div><label>${t('shAr')}</label><textarea id="p_sa">${esc(g('ar').short_description)}</textarea></div><div><label>${t('shFr')}</label><textarea id="p_sf">${esc(g('fr').short_description)}</textarea></div></div>
  <div class="two"><div><label>${t('dsAr')}</label><textarea id="p_da">${esc(g('ar').description)}</textarea></div><div><label>${t('dsFr')}</label><textarea id="p_df">${esc(g('fr').description)}</textarea></div></div>
  <div class="two"><div><label>${t('price')} *</label><input id="p_pr" type="number" min="0" step="1" inputmode="decimal" value="${p.price??''}"></div><div><label>${t('sale')}</label><input id="p_sp" type="number" min="0" step="1" inputmode="decimal" value="${p.sale_price??''}"></div></div>
  <div class="two"><div><label>${t('sku')} *</label><input id="p_sku" dir="ltr" value="${esc(p.sku)}"></div><div><label>${t('status')}</label><select id="p_st">${['draft','published','archived'].map(s=>`<option value="${s}" ${s===p.status?'selected':''}>${t(s)}</option>`).join('')}</select></div></div>
  <div class="two"><div><label>${t('cat')}</label><select id="p_ct" onchange="fillSub()"><option value="">—</option>${cats.filter(c=>!c.parent_id).map(c=>`<option value="${c.id}" ${c.id===p.category_id?'selected':''}>${cname(c)}</option>`).join('')}</select></div><div><label>${t('subcat')}</label><select id="p_sc"></select></div></div>
  <div class="chk"><label><input type="checkbox" id="p_new" ${p.is_new?'checked':''}>${t('isNew')}</label><label><input type="checkbox" id="p_ft" ${p.is_featured?'checked':''}>${t('feat')}</label><label><input type="checkbox" id="p_bs" ${p.is_bestseller?'checked':''}>${t('best')}</label></div>
  <label>${t('variants')}</label><div id="vars">${(sizes.length?sizes:['']).map(s=>vgroup(s,bySize[s]||[{stock:0}])).join('')}</div><button class="btn sm" type="button" onclick="addSize()">+ ${t('addSize')}</button>
  <label>${t('images')}</label><p class="muted">${t('imgHint')}</p><div id="imgs"></div><input type="file" id="p_files" accept="image/*" multiple hidden onchange="addFiles(this.files)"><button class="btn sm" type="button" onclick="$('#p_files').click()">+ ${t('pick')}</button>
  <p style="margin-top:20px"><button class="btn pri" id="p_save" onclick="saveProduct()">${t('save')}</button></p>`);
  fillSub(p.subcategory_id);renderImgs()}
function fillSub(sel){const pid=$('#p_ct').value;$('#p_sc').innerHTML=`<option value="">—</option>`+cats.filter(c=>pid&&c.parent_id===pid).map(c=>`<option value="${c.id}" ${c.id===sel?'selected':''}>${cname(c)}</option>`).join('')}
/* one size, several colors: size is typed once, each color has its own stock */
const vcrow=v=>`<div class="vr" data-id="${v.id||''}"><input class="vc" placeholder="${t('color')}" value="${esc(v.color)}"><input class="vt" type="number" min="0" inputmode="numeric" placeholder="${t('stock')}" value="${v.stock??0}"><button class="btn sm red" type="button" onclick="this.parentNode.remove()">×</button></div>`;
const vgroup=(size,rows)=>`<div class="vg"><div class="row"><input class="vs" dir="ltr" placeholder="${t('size')}" value="${esc(size)}" style="flex:1"><button class="btn sm red" type="button" onclick="this.closest('.vg').remove()">× ${t('size')}</button></div><div class="vcs">${rows.map(vcrow).join('')}</div><button class="btn sm" type="button" onclick="addColor(this)">+ ${t('addColor')}</button></div>`;
function addColor(b){b.previousElementSibling.insertAdjacentHTML('beforeend',vcrow({stock:0}))}
function addSize(){$('#vars').insertAdjacentHTML('beforeend',vgroup('',[{stock:0}]))}
/* images (shared by products and looks) */
function addFiles(fl){[...fl].forEach(f=>EDIT.imgs.push({file:f,url:URL.createObjectURL(f),primary:false,state:'ready'}));if(!EDIT.imgs.some(i=>i.primary))EDIT.imgs[0].primary=true;renderImgs()}
function renderImgs(){const box=$('#imgs');if(!box)return;box.innerHTML=EDIT.imgs.map((m,i)=>`<div class="im ${m.state==='fail'?'fail':''}"><img class="thumb" src="${esc(m.url||pub(m.path))}" alt="">
 <div class="sp">${m.primary?'★ '+t('primary'):''}${m.state==='up'?' '+t('uploading'):m.state==='fail'?' '+t('failed'):m.state==='ready'?' '+t('ready'):''}</div>
 <button type="button" title="${t('primary')}" onclick="setPrimary(${i})">★</button><button type="button" title="${t('up')}" onclick="moveImg(${i},-1)">↑</button><button type="button" title="${t('down')}" onclick="moveImg(${i},1)">↓</button><button type="button" title="${t('del')}" onclick="rmImg(${i})">×</button></div>`).join('')}
function setPrimary(i){EDIT.imgs.forEach((m,j)=>m.primary=i===j);renderImgs()}
function moveImg(i,d){const j=i+d;if(j<0||j>=EDIT.imgs.length)return;[EDIT.imgs[i],EDIT.imgs[j]]=[EDIT.imgs[j],EDIT.imgs[i]];renderImgs()}
function rmImg(i){const [m]=EDIT.imgs.splice(i,1);if(m.id)EDIT.delImgs.push(m);if(m.primary&&EDIT.imgs[0])EDIT.imgs[0].primary=true;renderImgs()}
async function shrink(f,ratio){
  const bm=await createImageBitmap(f);let sx=0,sy=0,sw=bm.width,sh=bm.height;
  if(ratio){if(sw/sh>ratio){sw=Math.round(sh*ratio);sx=Math.round((bm.width-sw)/2)}else{sh=Math.round(sw/ratio);sy=Math.round((bm.height-sh)/2)}}
  const k=ratio?Math.min(1,1440/sw):Math.min(1,2000/Math.max(sw,sh));   // never upscale
  const c=document.createElement('canvas');c.width=Math.round(sw*k);c.height=Math.round(sh*k);
  const g=c.getContext('2d');g.imageSmoothingEnabled=true;g.imageSmoothingQuality='high';
  g.drawImage(bm,sx,sy,sw,sh,0,0,c.width,c.height);
  return new Promise((r,x)=>c.toBlob(b=>b?r(b):x(new Error('image')),'image/webp',.92))}
const num=v=>v===''||v==null?null:Number(v);
/* uploads new files, saves order/primary, deletes removed ones. Returns the number of failed uploads. */
async function syncImages(table,fk,id,folder){
  for(const m of EDIT.delImgs){await sb.from(table).delete().eq('id',m.id);await cleanFile(m.path)}EDIT.delImgs=[];
  await sb.from(table).update({is_primary:false}).eq(fk,id);
  const pi=Math.max(0,EDIT.imgs.findIndex(m=>m.primary));let failed=0;
  for(let i=0;i<EDIT.imgs.length;i++){const m=EDIT.imgs[i];
    if(m.id){await sb.from(table).update({sort_order:i,is_primary:i===pi}).eq('id',m.id);continue}
    m.state='up';renderImgs();let path;
    try{const blob=await shrink(m.file,4/5);path=`${folder}/${id}/${crypto.randomUUID()}.webp`;
      const e=(await sb.storage.from('product-images').upload(path,blob,{contentType:'image/webp'})).error;if(e)throw e;
      const q=await sb.from(table).insert({[fk]:id,path,sort_order:i,is_primary:i===pi}).select('id').single();
      if(q.error){await sb.storage.from('product-images').remove([path]);throw q.error}
      m.id=q.data.id;m.path=path;m.file=null;m.url=null;m.state=null}
    catch(e){console.error(e);m.state='fail';failed++}
    renderImgs()}
  return failed}
async function saveProduct(){
  const v=id=>$('#'+id).value.trim();
  if(!v('p_na')||!v('p_nf')||!v('p_sku')||v('p_pr')==='')return toast(t('req'),true);
  const rows=[],seen=new Set();let dupv=false;
  document.querySelectorAll('#vars .vg').forEach(g=>{const size=g.querySelector('.vs').value.trim();
    g.querySelectorAll('.vr').forEach(r=>{const color=r.querySelector('.vc').value.trim();if(!size||!color)return;
      const k=size.toLowerCase()+'|'+color.toLowerCase();if(seen.has(k))dupv=true;seen.add(k);
      rows.push({id:r.dataset.id,size,color,stock:Math.max(0,parseInt(r.querySelector('.vt').value)||0)})})});
  if(dupv)return toast(t('dup'),true);
  const btn=$('#p_save');btn.disabled=true;
  try{
    const row={sku:v('p_sku'),slug:v('p_sku').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||crypto.randomUUID(),category_id:$('#p_ct').value||null,subcategory_id:$('#p_sc').value||null,price:num(v('p_pr')),sale_price:num(v('p_sp')),status:$('#p_st').value,is_new:$('#p_new').checked,is_featured:$('#p_ft').checked,is_bestseller:$('#p_bs').checked};
    let pid=EDIT.id;
    if(pid){const {error}=await sb.from('products').update(row).eq('id',pid);if(error)throw error}
    else{const {data,error}=await sb.from('products').insert(row).select('id').single();if(error)throw error;pid=EDIT.id=data.id}
    const trs=[['ar','p_na','p_sa','p_da'],['fr','p_nf','p_sf','p_df']].map(([l,n,s,d])=>({product_id:pid,lang:l,name:v(n),short_description:v(s)||null,description:v(d)||null}));
    let r=await sb.from('product_translations').upsert(trs,{onConflict:'product_id,lang'});if(r.error)throw r.error;
    const keep=rows.filter(x=>x.id).map(x=>x.id),gone=EDIT.origVars.filter(i=>!keep.includes(i));
    if(gone.length){r=await sb.from('product_variants').delete().in('id',gone);if(r.error)throw r.error}
    for(const x of rows.filter(x=>x.id)){r=await sb.from('product_variants').update({size:x.size,color:x.color,stock:x.stock}).eq('id',x.id);if(r.error)throw r.error}
    const ins=rows.filter(x=>!x.id).map(x=>({product_id:pid,size:x.size,color:x.color,stock:x.stock}));
    if(ins.length){r=await sb.from('product_variants').insert(ins);if(r.error)throw r.error}
    EDIT.origVars=(await sb.from('product_variants').select('id').eq('product_id',pid)).data.map(x=>x.id);
    const failed=await syncImages('product_images','product_id',pid,'products');
    if(failed){toast(t('failed'),true);btn.disabled=false;return}
    toast(t('saved'));closeM();go(tab)
  }catch(e){fail(e);btn.disabled=false}}
async function cleanFile(path){
  for(const tb of ['product_images','outfit_images']){const {count}=await sb.from(tb).select('id',{count:'exact',head:true}).eq('path',path);if(count)return}
  for(const [tb,col] of [['categories','image_path'],['outfits','image_path']]){const {count}=await sb.from(tb).select('id',{count:'exact',head:true}).eq(col,path);if(count)return}
  await sb.storage.from('product-images').remove([path])}
async function delProduct(id){if(!confirm(t('confirmDel')))return;
  const {data:im}=await sb.from('product_images').select('path').eq('product_id',id);
  const {error}=await sb.from('products').delete().eq('id',id);if(error)return fail(error);
  for(const i of im||[])await cleanFile(i.path);toast(t('deleted'));go(tab)}

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
async function openCat(id,parentId){await loadCats();const c=cats.find(x=>x.id===id)||{sort_order:0,is_active:true,category_translations:[],parent_id:parentId||null};
  const {data:tr}=id?await sb.from('category_translations').select('*').eq('category_id',id):{data:[]};const g=l=>(tr||[]).find(x=>x.lang===l)||{};
  EDIT={id:id||null,path:c.image_path||null};
  modal(`<div class="row"><h3 class="sp">${id?t('edit'):t('addCat')}</h3><button class="btn sm" onclick="closeM()">${t('close')}</button></div>
  <div class="two"><div><label>${t('nameAr')} *</label><input id="c_na" value="${esc(g('ar').name)}"></div><div><label>${t('nameFr')} *</label><input id="c_nf" value="${esc(g('fr').name)}"></div></div>
  <div class="two"><div><label>${t('dsAr')}</label><textarea id="c_da">${esc(g('ar').description)}</textarea></div><div><label>${t('dsFr')}</label><textarea id="c_df">${esc(g('fr').description)}</textarea></div></div>
  <label>${t('parent')}</label><select id="c_pa"><option value="">—</option>${cats.filter(x=>!x.parent_id&&x.id!==id).map(x=>`<option value="${x.id}" ${x.id===c.parent_id?'selected':''}>${cname(x)}</option>`).join('')}</select>
  <div class="two"><div><label>${t('slug')} *</label><input id="c_sl" dir="ltr" value="${esc(c.slug)}"></div><div><label>${t('order')}</label><input id="c_so" type="number" value="${c.sort_order}"></div></div>
  <div class="chk"><label><input type="checkbox" id="c_ac" ${c.is_active?'checked':''}>${t('active')}</label></div>
  <p style="margin-top:20px"><button class="btn pri" id="c_save" onclick="saveCat()">${t('save')}</button></p>`)}
async function saveCat(){const v=i=>$('#'+i).value.trim();if(!v('c_na')||!v('c_nf')||!v('c_sl'))return toast(t('req'),true);
  const btn=$('#c_save');btn.disabled=true;let up=null;
  try{let path=EDIT.path;const f=null;
    if(f){const blob=await shrink(f);up=`categories/${crypto.randomUUID()}.webp`;const e=(await sb.storage.from('product-images').upload(up,blob,{contentType:'image/webp'})).error;if(e)throw e;path=up}
    const row={slug:v('c_sl').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''),sort_order:parseInt(v('c_so'))||0,is_active:$('#c_ac').checked,image_path:path,parent_id:$('#c_pa').value||null};
    let id=EDIT.id;
    if(id){const {error}=await sb.from('categories').update(row).eq('id',id);if(error)throw error}
    else{const {data,error}=await sb.from('categories').insert(row).select('id').single();if(error)throw error;id=data.id}
    const r=await sb.from('category_translations').upsert([{category_id:id,lang:'ar',name:v('c_na'),description:v('c_da')||null},{category_id:id,lang:'fr',name:v('c_nf'),description:v('c_df')||null}],{onConflict:'category_id,lang'});if(r.error)throw r.error;
    toast(t('saved'));closeM();go(tab)}
  catch(e){if(up)await sb.storage.from('product-images').remove([up]);fail(e);btn.disabled=false}}
async function delCat(id){if(!confirm(t('confirmDel')))return;const {error}=await sb.from('categories').delete().eq('id',id);if(error)return fail(error);toast(t('deleted'));go(tab)}

/* ---------- looks (outfits shown as a product with several photos) ---------- */
const lt=(arr,l)=>((arr||[]).find(x=>x.lang===l)||{}).title||'';
const pn=p=>nm(p.product_translations,lang)||nm(p.product_translations,'ar')||p.sku;
async function vLooks(){
  const {data,error}=await sb.from('outfits').select('*,outfit_translations(lang,title),outfit_items(product_id)').order('sort_order');if(error)throw error;
  $('#main').innerHTML=`<div class="row"><span class="sp"></span><button class="btn pri" onclick="openLook()">+ ${t('add')}</button></div><div class="grid" style="margin-top:12px">${data.map(o=>`<div class="card"><div class="pc">${o.image_path?`<img src="${esc(pub(o.image_path))}" alt="" loading="lazy">`:'<div class="thumb"></div>'}<div class="sp"><h4>${esc(lt(o.outfit_translations,lang)||lt(o.outfit_translations,'ar')||o.slug)}</h4><div class="muted">${o.outfit_items.length} ${t('prods')}</div><span class="pill ${o.status}">${t(o.status)}</span></div></div>
  <div class="row" style="margin-top:10px"><button class="btn sm" onclick="openLook('${o.id}')">${t('edit')}</button><button class="btn sm" onclick="openLanding(null,'outfit','${o.id}')">${t('landing')}</button><button class="btn sm red" onclick="delLook('${o.id}')">${t('del')}</button></div></div>`).join('')||`<p class="muted">${t('noList')}</p>`}</div>`}
async function openLook(id){
  const {data:ps,error:pe}=await sb.from('products').select('id,sku,product_translations(lang,name)').order('created_at',{ascending:false});if(pe)return fail(pe);
  EDIT={id:id||null,slug:null,items:[],ps:ps,imgs:[],delImgs:[]};let o={status:'draft',sort_order:0},tr=[];
  if(id){const {data,error}=await sb.from('outfits').select('*,outfit_translations(*),outfit_items(*),outfit_images(*)').eq('id',id).single();if(error)return fail(error);
    o=data;tr=data.outfit_translations;EDIT.slug=data.slug;EDIT.items=[...data.outfit_items].sort((a,b)=>a.sort_order-b.sort_order).map(i=>i.product_id);
    EDIT.imgs=[...data.outfit_images].sort((a,b)=>a.sort_order-b.sort_order).map(i=>({id:i.id,path:i.path,primary:i.is_primary}))}
  const g=l=>tr.find(x=>x.lang===l)||{};
  modal(`<div class="row"><h3 class="sp">${id?t('edit'):t('add')}</h3><button class="btn sm" onclick="closeM()">${t('close')}</button></div>
  <div class="two"><div><label>${t('ttlAr')} *</label><input id="l_ta" value="${esc(g('ar').title)}"></div><div><label>${t('ttlFr')} *</label><input id="l_tf" value="${esc(g('fr').title)}"></div></div>
  <div class="two"><div><label>${t('dsAr')}</label><textarea id="l_da">${esc(g('ar').description)}</textarea></div><div><label>${t('dsFr')}</label><textarea id="l_df">${esc(g('fr').description)}</textarea></div></div>
  <div class="two"><div><label>${t('status')}</label><select id="l_st">${['draft','published','archived'].map(s=>`<option value="${s}" ${s===o.status?'selected':''}>${t(s)}</option>`).join('')}</select></div><div><label>${t('order')}</label><input id="l_so" type="number" value="${o.sort_order}"></div></div>
  <label>${t('lookImgs')} *</label><p class="muted">${t('imgHint')}</p><div id="imgs"></div><input type="file" id="p_files" accept="image/*" multiple hidden onchange="addFiles(this.files)"><button class="btn sm" type="button" onclick="$('#p_files').click()">+ ${t('pick')}</button>
  <label>${t('lookProds')} *</label><div id="l_items"></div><select id="l_add" onchange="lookAdd(this.value)"></select>
  <p style="margin-top:20px"><button class="btn pri" id="l_save" onclick="saveLook()">${t('save')}</button></p>`);
  renderLookItems();renderImgs()}
function renderLookItems(){
  const by=Object.fromEntries(EDIT.ps.map(p=>[p.id,p]));
  $('#l_items').innerHTML=EDIT.items.map((pid,i)=>`<div class="im"><div class="sp">${esc(by[pid]?pn(by[pid]):pid)}</div><button type="button" onclick="lookMove(${i},-1)">↑</button><button type="button" onclick="lookMove(${i},1)">↓</button><button type="button" onclick="lookRm(${i})">×</button></div>`).join('');
  $('#l_add').innerHTML=`<option value="">+ ${t('addProd')}</option>`+EDIT.ps.filter(p=>!EDIT.items.includes(p.id)).map(p=>`<option value="${p.id}">${esc(pn(p))} (${esc(p.sku)})</option>`).join('')}
function lookAdd(v){if(v){EDIT.items.push(v);renderLookItems()}}
function lookRm(i){EDIT.items.splice(i,1);renderLookItems()}
function lookMove(i,d){const j=i+d;if(j<0||j>=EDIT.items.length)return;[EDIT.items[i],EDIT.items[j]]=[EDIT.items[j],EDIT.items[i]];renderLookItems()}
async function saveLook(){
  const v=i=>$('#'+i).value.trim();
  if(!v('l_ta')||!v('l_tf'))return toast(t('req'),true);
  if(!EDIT.imgs.length)return toast(t('lookNeedImg'),true);
  if(!EDIT.items.length)return toast(t('lookNeedProds'),true);
  const btn=$('#l_save');btn.disabled=true;
  try{
    const row={slug:EDIT.slug||('look-'+crypto.randomUUID().slice(0,8)),status:$('#l_st').value,sort_order:parseInt(v('l_so'))||0};
    let id=EDIT.id;
    if(id){const {error}=await sb.from('outfits').update(row).eq('id',id);if(error)throw error}
    else{const {data,error}=await sb.from('outfits').insert(row).select('id').single();if(error)throw error;id=EDIT.id=data.id;EDIT.slug=row.slug}
    let r=await sb.from('outfit_translations').upsert([{outfit_id:id,lang:'ar',title:v('l_ta'),description:v('l_da')||null},{outfit_id:id,lang:'fr',title:v('l_tf'),description:v('l_df')||null}],{onConflict:'outfit_id,lang'});if(r.error)throw r.error;
    r=await sb.from('outfit_items').delete().eq('outfit_id',id);if(r.error)throw r.error;
    r=await sb.from('outfit_items').insert(EDIT.items.map((pid,i)=>({outfit_id:id,product_id:pid,sort_order:i})));if(r.error)throw r.error;
    const failed=await syncImages('outfit_images','outfit_id',id,'outfits');
    const main=(EDIT.imgs.find(m=>m.primary&&m.path)||EDIT.imgs.find(m=>m.path)||{}).path||null;
    await sb.from('outfits').update({image_path:main}).eq('id',id);
    if(failed){toast(t('failed'),true);btn.disabled=false;return}
    toast(t('saved'));closeM();vLooks()
  }catch(e){fail(e);btn.disabled=false}}
async function delLook(id){if(!confirm(t('confirmDel')))return;
  const {data:im}=await sb.from('outfit_images').select('path').eq('outfit_id',id);
  const {data:o}=await sb.from('outfits').select('image_path').eq('id',id).single();
  const {error}=await sb.from('outfits').delete().eq('id',id);if(error)return fail(error);
  for(const i of im||[])await cleanFile(i.path);if(o&&o.image_path)await cleanFile(o.image_path);
  toast(t('deleted'));vLooks()}

/* ---------- landing pages ---------- */
const lpUrl=slug=>new URL('landing.html?s='+encodeURIComponent(slug),location.href).href;
const slugify=s=>String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
async function vLandings(){
  const {data,error}=await sb.from('landing_pages').select('*,products(sku,product_translations(lang,name)),outfits(slug,outfit_translations(lang,title))').order('created_at',{ascending:false});if(error)throw error;
  const title=l=>{const c=(l.content||{})[lang]||(l.content||{}).ar||{};return c.headline||(l.products?nm(l.products.product_translations,lang)||nm(l.products.product_translations,'ar')||l.products.sku:l.outfits?lt(l.outfits.outfit_translations,lang)||lt(l.outfits.outfit_translations,'ar')||l.outfits.slug:l.slug)};
  $('#main').innerHTML=`<div class="row"><span class="sp"></span><button class="btn pri" onclick="openLanding()">+ ${t('add')}</button></div><div class="grid" style="margin-top:12px">${data.map(l=>`<div class="card"><h4 style="margin:0">${esc(title(l))}</h4>
   <div class="muted">${l.target_type==='product'?t('lpProduct'):t('lpLook')} · <span dir="ltr">${esc(l.slug)}</span></div><span class="pill ${l.status}">${t(l.status)}</span>
   <div class="row" style="margin-top:10px"><a class="btn sm" href="${esc(lpUrl(l.slug))}" target="_blank" rel="noopener">${t('lpOpen')}</a><button class="btn sm" onclick="copyLp('${esc(l.slug)}')">${t('lpCopy')}</button><button class="btn sm" onclick="openLanding('${l.id}')">${t('edit')}</button><button class="btn sm red" onclick="delLanding('${l.id}')">${t('del')}</button></div></div>`).join('')||`<p class="muted">${t('noList')}</p>`}</div>`}
function copyLp(slug){const u=lpUrl(slug);(navigator.clipboard?navigator.clipboard.writeText(u):Promise.reject()).then(()=>toast(t('lpCopied'))).catch(()=>prompt(t('lpLink'),u))}
async function openLanding(id,type,targetId){
  const [pr,ol]=await Promise.all([sb.from('products').select('id,sku,product_translations(lang,name)').order('created_at',{ascending:false}),sb.from('outfits').select('id,slug,outfit_translations(lang,title)').order('sort_order')]);
  if(pr.error)return fail(pr.error);const looks=ol.error?[]:ol.data;
  let lp={status:'draft',target_type:type||'product',content:{form:true}};
  if(id){const {data,error}=await sb.from('landing_pages').select('*').eq('id',id).single();if(error)return fail(error);lp=data}
  else if(targetId){const col=type==='outfit'?'outfit_id':'product_id';const {data}=await sb.from('landing_pages').select('*').eq(col,targetId).maybeSingle();
    if(data){lp=data;id=data.id}else{lp[col]=targetId}}
  EDIT={id:id||null,prods:pr.data,looks,lp};
  const c=lp.content||{},g=l=>c[l]||{};
  modal(`<div class="row"><h3 class="sp">${id?t('edit'):t('add')} · ${t('landing')}</h3><button class="btn sm" onclick="closeM()">${t('close')}</button></div>
  <div class="two"><div><label>${t('lpType')}</label><select id="lp_ty" onchange="fillLpTarget()"><option value="product" ${lp.target_type==='product'?'selected':''}>${t('lpProduct')}</option><option value="outfit" ${lp.target_type==='outfit'?'selected':''}>${t('lpLook')}</option></select></div>
  <div><label>${t('lpTarget')} *</label><select id="lp_tg" onchange="lpAutoSlug()"></select></div></div>
  <div class="two"><div><label>${t('lpSlug')} *</label><input id="lp_sl" dir="ltr" value="${esc(lp.slug)}"></div><div><label>${t('status')}</label><select id="lp_st">${['draft','published','archived'].map(s=>`<option value="${s}" ${s===lp.status?'selected':''}>${t(s)}</option>`).join('')}</select></div></div>
  <div class="two"><div><label>${t('lpHead')} (ar)</label><input id="lp_ha" value="${esc(g('ar').headline)}"></div><div><label>${t('lpHead')} (fr)</label><input id="lp_hf" value="${esc(g('fr').headline)}"></div></div>
  <div class="two"><div><label>${t('lpSub')} (ar)</label><textarea id="lp_sa">${esc(g('ar').sub)}</textarea></div><div><label>${t('lpSub')} (fr)</label><textarea id="lp_sf">${esc(g('fr').sub)}</textarea></div></div>
  <div class="two"><div><label>${t('lpBen')} (ar)</label><textarea id="lp_ba">${esc((g('ar').benefits||[]).join('\n'))}</textarea></div><div><label>${t('lpBen')} (fr)</label><textarea id="lp_bf">${esc((g('fr').benefits||[]).join('\n'))}</textarea></div></div>
  <div class="two"><div><label>${t('lpCta')} (ar)</label><input id="lp_ca" value="${esc(g('ar').cta)}"></div><div><label>${t('lpCta')} (fr)</label><input id="lp_cf" value="${esc(g('fr').cta)}"></div></div>
  <div class="chk"><label><input type="checkbox" id="lp_fm" ${c.form!==false?'checked':''}>${t('lpForm')}</label></div>
  ${lp.slug?`<p class="muted" dir="ltr">${esc(lpUrl(lp.slug))}</p>`:''}
  <p style="margin-top:20px"><button class="btn pri" id="lp_save" onclick="saveLanding()">${t('save')}</button></p>`);
  fillLpTarget(lp.target_type==='outfit'?lp.outfit_id:lp.product_id)}
function fillLpTarget(sel){
  const ty=$('#lp_ty').value;
  $('#lp_tg').innerHTML=`<option value="">—</option>`+(ty==='product'?EDIT.prods.map(p=>`<option value="${p.id}" ${p.id===sel?'selected':''}>${esc(pn(p))} (${esc(p.sku)})</option>`):EDIT.looks.map(o=>`<option value="${o.id}" ${o.id===sel?'selected':''}>${esc(lt(o.outfit_translations,lang)||lt(o.outfit_translations,'ar')||o.slug)}</option>`)).join('');
  if(!sel)$('#lp_tg').value=''}
function lpAutoSlug(){const f=$('#lp_sl');if(f.value.trim())return;const ty=$('#lp_ty').value,id=$('#lp_tg').value;
  const x=ty==='product'?EDIT.prods.find(p=>p.id===id):EDIT.looks.find(o=>o.id===id);if(x)f.value=slugify(ty==='product'?x.sku:x.slug)}
async function saveLanding(){
  const v=i=>$('#'+i).value.trim();
  const type=v('lp_ty'),target=v('lp_tg'),slug=v('lp_sl').toLowerCase();
  if(!target)return toast(t('req'),true);
  if(!/^[a-z0-9-]{3,60}$/.test(slug))return toast(t('lpSlugBad'),true);
  const ben=id=>v(id).split('\n').map(x=>x.trim()).filter(Boolean);
  const content={ar:{headline:v('lp_ha'),sub:v('lp_sa'),cta:v('lp_ca'),benefits:ben('lp_ba')},fr:{headline:v('lp_hf'),sub:v('lp_sf'),cta:v('lp_cf'),benefits:ben('lp_bf')},form:$('#lp_fm').checked};
  const row={slug,target_type:type,product_id:type==='product'?target:null,outfit_id:type==='outfit'?target:null,status:$('#lp_st').value,content};
  const btn=$('#lp_save');btn.disabled=true;
  try{
    const r=EDIT.id?await sb.from('landing_pages').update(row).eq('id',EDIT.id):await sb.from('landing_pages').insert(row);
    if(r.error)throw r.error;
    toast(t('saved'));closeM();go(tab)
  }catch(e){fail(e);btn.disabled=false}}
async function delLanding(id){if(!confirm(t('confirmDel')))return;const {error}=await sb.from('landing_pages').delete().eq('id',id);if(error)return fail(error);toast(t('deleted'));vLandings()}

/* ---------- site content (owner only, unlocked by tapping the title 5 times) ---------- */
let _ot=[];
function tabsList(){let o=false;try{o=sessionStorage.getItem('owner')==='1'}catch(e){}return ['dash','catalog','orders','looks','landings'].concat(o?['site']:[])}
function ownerTap(){const n=Date.now();_ot=_ot.filter(x=>n-x<4000);_ot.push(n);if(_ot.length>=5){_ot=[];try{sessionStorage.setItem('owner','1')}catch(e){}shell();go('site')}}
const SITE_FIELDS=[['hTitle','sHTitle'],['h1','sH1'],['sub','sSub'],['shop','sShop'],['explore','sExplore'],['banT','sBanT'],['banP','sBanP'],['banB','sBanB'],['abT','sAbT'],['abP','sAbP'],['fAbout','sFAbout'],['copy','sCopy']];
const SITE_IMG=[['logo','sLogo'],['hero','sHero'],['about_img','sAboutImg']];
async function vSite(){
  const {data,error}=await sb.from('store_settings').select('value').eq('key','site').maybeSingle();if(error)throw error;
  const S=data?data.value:{};
  EDIT={site:{logo:S.logo||null,hero:S.hero||null,about_img:S.about_img||null},orig:{logo:S.logo||null,hero:S.hero||null,about_img:S.about_img||null},files:{}};
  const tx=(l,k)=>((S.t||{})[l]||{})[k]||'',c=S.contact||{},d=S.dev||{};
  const long=k=>['sub','banP','abP'].includes(k);
  $('#main').innerHTML=`<p class="muted">${t('sNote')}</p>
  <div class="card"><b>${t('sBrand')}</b><label>${t('sName')}</label><input id="s_name" value="${esc(S.name)}" placeholder="Maison Noor">
   ${SITE_IMG.map(([k,lb])=>`<label>${t(lb)}</label><div class="row"><img class="thumb" id="si_${k}" style="width:90px;height:90px;object-fit:contain;${S[k]?'':'display:none'}" src="${S[k]?esc(pub(S[k])):''}" alt=""><input type="file" accept="image/*" style="flex:1" onchange="sitePrev(this,'${k}')"><button class="btn sm red" type="button" onclick="siteClear('${k}')">×</button></div>`).join('')}</div>
  <div class="card" style="margin-top:12px"><b>${t('sTexts')}</b><p class="muted">${t('sBlank')}</p>
   ${SITE_FIELDS.map(([k,lb])=>`<div class="two"><div><label>${t(lb)} (ar)</label>${long(k)?`<textarea id="s_${k}_ar">${esc(tx('ar',k))}</textarea>`:`<input id="s_${k}_ar" value="${esc(tx('ar',k))}">`}</div><div><label>${t(lb)} (fr)</label>${long(k)?`<textarea id="s_${k}_fr">${esc(tx('fr',k))}</textarea>`:`<input id="s_${k}_fr" value="${esc(tx('fr',k))}">`}</div></div>`).join('')}</div>
  <div class="card" style="margin-top:12px"><b>${t('sContact')}</b>
   <div class="two"><div><label>${t('sPhone')}</label><input id="s_ph" dir="ltr" placeholder="0555 00 00 00" value="${esc(c.phone)}"></div><div><label>${t('sWa')}</label><input id="s_wa" dir="ltr" placeholder="0555 00 00 00" value="${esc(c.whatsapp)}"></div></div>
   <div class="two"><div><label>Facebook (URL)</label><input id="s_fb" dir="ltr" placeholder="https://" value="${esc(c.facebook)}"></div><div><label>Instagram (URL)</label><input id="s_ig" dir="ltr" placeholder="https://" value="${esc(c.instagram)}"></div></div>
   <div class="two"><div><label>TikTok (URL)</label><input id="s_tt" dir="ltr" placeholder="https://" value="${esc(c.tiktok)}"></div><div><label>YouTube (URL)</label><input id="s_yt" dir="ltr" placeholder="https://" value="${esc(c.youtube)}"></div></div></div>
  <div class="card" style="margin-top:12px"><b>${t('sDev')}</b><div class="two"><div><label>${t('sDevName')}</label><input id="s_dn" value="${esc(d.name)}"></div><div><label>${t('sDevUrl')}</label><input id="s_du" dir="ltr" placeholder="https://" value="${esc(d.url)}"></div></div></div>
  <p style="margin-top:16px"><button class="btn pri" id="s_save" onclick="saveSite()">${t('save')}</button></p>`}
function sitePrev(inp,k){const f=inp.files[0];if(!f)return;EDIT.files[k]=f;const i=$('#si_'+k);i.src=URL.createObjectURL(f);i.style.display=''}
function siteClear(k){EDIT.site[k]=null;delete EDIT.files[k];const i=$('#si_'+k);i.removeAttribute('src');i.style.display='none'}
async function saveSite(){
  const v=i=>$('#'+i).value.trim(),okUrl=u=>!u||/^https?:\/\//i.test(u);
  const value={name:v('s_name'),logo:EDIT.site.logo,hero:EDIT.site.hero,about_img:EDIT.site.about_img,t:{ar:{},fr:{}},
    contact:{phone:v('s_ph'),whatsapp:v('s_wa'),facebook:v('s_fb'),instagram:v('s_ig'),tiktok:v('s_tt'),youtube:v('s_yt')},dev:{name:v('s_dn'),url:v('s_du')}};
  if(![value.contact.facebook,value.contact.instagram,value.contact.tiktok,value.contact.youtube,value.dev.url].every(okUrl))return toast(t('sUrlBad'),true);
  SITE_FIELDS.forEach(([k])=>['ar','fr'].forEach(l=>{const x=v(`s_${k}_${l}`);if(x)value.t[l][k]=x}));
  const btn=$('#s_save');btn.disabled=true;const up=[];
  try{
    for(const [k] of SITE_IMG){const f=EDIT.files[k];if(!f)continue;const blob=await shrink(f);const path=`site/${crypto.randomUUID()}.webp`;
      const e=(await sb.storage.from('product-images').upload(path,blob,{contentType:'image/webp'})).error;if(e)throw e;up.push(path);value[k]=path}
    const r=await sb.from('store_settings').upsert({key:'site',value},{onConflict:'key'});if(r.error)throw r.error;
    const gone=SITE_IMG.map(([k])=>EDIT.orig[k]).filter((p,i)=>p&&p!==value[SITE_IMG[i][0]]);
    if(gone.length)await sb.storage.from('product-images').remove(gone);
    toast(t('saved'));vSite()
  }catch(e){if(up.length)await sb.storage.from('product-images').remove(up);fail(e);btn.disabled=false}}


boot();
