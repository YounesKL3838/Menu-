/* Maison Noor storefront, connected to Supabase (see js/config.js) */
var T={
ar:{h1:"أناقتك تبدأ من هنا",sub:"قطع رجالية مفصّلة بعناية من أقمشة مختارة، بتصاميم هادئة تدوم موسمًا بعد موسم.",shop:"تسوّق الآن",explore:"استكشف المجموعة الجديدة",nNew:"وصل حديثًا",nCats:"التصنيفات",nBest:"الأكثر مبيعًا",nAbout:"من نحن",search:"ابحث عن قطعة…",newT:"وصل حديثًا",all:"عرض الكل",catT:"تسوّق حسب التصنيف",bestT:"الأكثر مبيعًا",banT:"مجموعة الخريف والشتاء",banP:"معاطف وبدلات وقمصان بألوان ترابية دافئة، متوفرة الآن.",banB:"اكتشف المجموعة",abT:"عن العلامة",abP:"بدأنا من فكرة بسيطة: ملابس رجالية متقنة الخياطة، بقصّات واضحة وألوان هادئة، تُلبس كل يوم وتبقى أنيقة.",qT:"آراء العملاء",nlT:"اشترك في نشرتنا",nlP:"كن أول من يعرف بالمجموعات الجديدة والعروض.",sub2:"اشتراك",email:"بريدك الإلكتروني",fAbout:"أزياء رجالية فاخرة بتفاصيل هادئة.",fShop:"المتجر",fHelp:"المساعدة",fShip:"الشحن",fRet:"الاستبدال والإرجاع",fFaq:"الأسئلة الشائعة",fContact:"تواصل معنا",bHome:"الرئيسية",bSearch:"بحث",bFav:"المفضلة",
cur:"د.ج",lang:"Français",clear:"إلغاء التصفية",
tNew:"جديد",tBest:"الأكثر مبيعًا",soldOut:"نفد",results:"نتائج البحث",favT:"المفضلة",allT:"كل المنتجات",
noData:"لا توجد منتجات منشورة بعد.",noConf:"لم يتم ربط Supabase بعد: عدّل الملف js/config.js.",loadErr:"تعذّر تحميل البيانات، حاول مرة أخرى.",
color:"اللون",size:"المقاس",qty:"الكمية",inStock:"متوفر:",pick:"اختر اللون والمقاس",addCart:"أضف إلى السلة",added:"أُضيف إلى السلة",
cart:"السلة",cartEmpty:"السلة فارغة.",sub3:"المجموع الفرعي",ship:"التوصيل (تقديري)",total:"الإجمالي التقديري",finalNote:"السعر النهائي يُحسب عند تأكيد الطلب. الدفع عند الاستلام.",
fName:"الاسم الكامل",fPhone:"الهاتف",fWil:"الولاية",fAddr:"العنوان",fCode:"كود الخصم (اختياري)",place:"تأكيد الطلب",
thanks:"شكرًا لك!",orderNo:"رقم طلبك:",orderTot:"الإجمالي:",willCall:"سنتصل بك لتأكيد الطلب.",
eStock:"إحدى القطع لم تعد متوفرة بالكمية المطلوبة. راجع السلة.",eCode:"كود الخصم غير صالح.",eCust:"تحقق من الاسم والهاتف والولاية والعنوان.",eGen:"تعذّر إرسال الطلب، حاول مرة أخرى.",
subbed:"تم الاشتراك بنجاح",rem:"حذف",
q:[["جودة الخياطة تفوق توقعاتي، والمقاس مضبوط تمامًا.","كريم، المدية"],["وصلني الطلب في أيام قليلة والتغليف أنيق.","يوسف، الجزائر"],["ألوان هادئة وقماش مريح، سأطلب مجددًا.","أمين، وهران"]]},
fr:{h1:"Votre élégance commence ici",sub:"Des pièces masculines coupées avec soin dans des matières choisies, aux lignes sobres qui durent saison après saison.",shop:"Acheter maintenant",explore:"Découvrir la nouvelle collection",nNew:"Nouveautés",nCats:"Catégories",nBest:"Meilleures ventes",nAbout:"À propos",search:"Rechercher une pièce…",newT:"Nouveautés",all:"Tout voir",catT:"Acheter par catégorie",bestT:"Meilleures ventes",banT:"Collection automne-hiver",banP:"Manteaux, costumes et chemises dans des tons terre chaleureux, disponibles dès maintenant.",banB:"Découvrir la collection",abT:"La marque",abP:"Tout est parti d’une idée simple : des vêtements masculins bien coupés, aux lignes nettes et aux couleurs calmes, à porter chaque jour avec élégance.",qT:"Avis clients",nlT:"Abonnez-vous à la newsletter",nlP:"Soyez les premiers informés des nouvelles collections et des offres.",sub2:"S’abonner",email:"Votre adresse e-mail",fAbout:"Mode masculine haut de gamme, aux détails sobres.",fShop:"Boutique",fHelp:"Aide",fShip:"Livraison",fRet:"Échanges et retours",fFaq:"Questions fréquentes",fContact:"Contact",bHome:"Accueil",bSearch:"Recherche",bFav:"Favoris",
cur:"DA",lang:"العربية",clear:"Effacer le filtre",
tNew:"Nouveau",tBest:"Meilleure vente",soldOut:"Épuisé",results:"Résultats de recherche",favT:"Favoris",allT:"Tous les produits",
noData:"Aucun produit publié pour l’instant.",noConf:"Supabase n’est pas encore connecté : modifiez le fichier js/config.js.",loadErr:"Impossible de charger les données, réessayez.",
color:"Couleur",size:"Taille",qty:"Quantité",inStock:"En stock :",pick:"Choisissez la couleur et la taille",addCart:"Ajouter au panier",added:"Ajouté au panier",
cart:"Panier",cartEmpty:"Votre panier est vide.",sub3:"Sous-total",ship:"Livraison (estimée)",total:"Total estimé",finalNote:"Le prix final est calculé à la validation. Paiement à la livraison.",
fName:"Nom complet",fPhone:"Téléphone",fWil:"Wilaya",fAddr:"Adresse",fCode:"Code promo (facultatif)",place:"Valider la commande",
thanks:"Merci !",orderNo:"Votre numéro de commande :",orderTot:"Total :",willCall:"Nous vous appellerons pour confirmer la commande.",
eStock:"Un article n’est plus disponible en quantité suffisante. Vérifiez le panier.",eCode:"Code promo invalide.",eCust:"Vérifiez le nom, le téléphone, la wilaya et l’adresse.",eGen:"Impossible d’envoyer la commande, réessayez.",
subbed:"Inscription réussie",rem:"Supprimer",
q:[["La qualité de coupe dépasse mes attentes, la taille est parfaite.","Karim, Médéa"],["Commande reçue en quelques jours, emballage soigné.","Youssef, Alger"],["Couleurs sobres et tissu confortable, je recommande.","Amine, Oran"]]}
};
var WA="الشلف|الأغواط|أم البواقي|باتنة|بجاية|بسكرة|بشار|البليدة|البويرة|تمنراست|تبسة|تلمسان|تيارت|تيزي وزو|الجزائر|الجلفة|جيجل|سطيف|سعيدة|سكيكدة|سيدي بلعباس|عنابة|قالمة|قسنطينة|المدية|مستغانم|المسيلة|معسكر|ورقلة|وهران|البيض|إليزي|برج بوعريريج|بومرداس|الطارف|تندوف|تيسمسيلت|الوادي|خنشلة|سوق أهراس|تيبازة|ميلة|عين الدفلى|النعامة|عين تموشنت|غرداية|غليزان|تيميمون|برج باجي مختار|أولاد جلال|بني عباس|عين صالح|عين قزام|تقرت|جانت|المغير|المنيعة".split("|");WA.unshift("أدرار");
var WF="Adrar|Chlef|Laghouat|Oum El Bouaghi|Batna|Béjaïa|Biskra|Béchar|Blida|Bouira|Tamanrasset|Tébessa|Tlemcen|Tiaret|Tizi Ouzou|Alger|Djelfa|Jijel|Sétif|Saïda|Skikda|Sidi Bel Abbès|Annaba|Guelma|Constantine|Médéa|Mostaganem|M’Sila|Mascara|Ouargla|Oran|El Bayadh|Illizi|Bordj Bou Arréridj|Boumerdès|El Tarf|Tindouf|Tissemsilt|El Oued|Khenchela|Souk Ahras|Tipaza|Mila|Aïn Defla|Naâma|Aïn Témouchent|Ghardaïa|Relizane|Timimoun|Bordj Badji Mokhtar|Ouled Djellal|Béni Abbès|In Salah|In Guezzam|Touggourt|Djanet|El M’Ghair|El Menia".split("|");

var $=function(s){return document.querySelector(s)};
var esc=function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})};
function load(k,d){try{var v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}}
function save(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
var sb=null;
if(typeof supabase!=="undefined"&&typeof SUPABASE_URL!=="undefined"&&SUPABASE_URL&&SUPABASE_ANON_KEY){sb=supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY)}
var lang=load("lang","ar"),PRODS=[],CATS=[],FEES={"default":0},dstate="loading";
var st={cat:null,q:"",fav:false,all:false},favs=load("favs",{}),cart=load("cart",[]);

function t(k){return T[lang][k]}
function nm(a,l){var x=(a||[]).filter(function(r){return r.lang===l})[0];return x?x.name:""}
function pname(p){return nm(p.product_translations,lang)||nm(p.product_translations,"ar")||p.sku}
function pdesc(p){var x=(p.product_translations||[]).filter(function(r){return r.lang===lang})[0]||(p.product_translations||[])[0]||{};return x.description||x.short_description||""}
function url(path){return sb.storage.from("product-images").getPublicUrl(path).data.publicUrl}
function imgs(p){return(p.product_images||[]).slice().sort(function(a,b){return(b.is_primary-a.is_primary)||(a.sort_order-b.sort_order)})}
function fmt(v){return Number(v||0).toLocaleString(lang==="ar"?"ar-DZ":"fr-FR")+" "+t("cur")}
function cur(p){return p.sale_price!=null?Number(p.sale_price):Number(p.price)}
function stock(p){return(p.product_variants||[]).reduce(function(a,v){return a+v.stock},0)}
function toast(m){var e=$("#toast");e.textContent=m;e.classList.add("on");clearTimeout(toast.t);toast.t=setTimeout(function(){e.classList.remove("on")},2000)}
function cartCount(){return cart.reduce(function(a,i){return a+i.q},0)}
function setBadge(bump){var c=$("#count");if(bump){var cb=$("#cart");cb.classList.remove("wig");void cb.offsetWidth;cb.classList.add("wig")}c.textContent=cartCount();if(bump){c.classList.remove("bump");void c.offsetWidth;c.classList.add("bump")}}

/* ---------- data ---------- */
async function loadData(){
  if(!sb){dstate="noconf";return}
  try{
    var r=await Promise.all([
      sb.from("categories").select("id,parent_id,slug,image_path,sort_order,category_translations(lang,name)").order("sort_order"),
      sb.from("products").select("id,sku,price,sale_price,is_new,is_featured,is_bestseller,category_id,subcategory_id,product_translations(lang,name,short_description,description),product_images(path,is_primary,sort_order),product_variants(id,size,color,stock)").order("created_at",{ascending:false}),
      sb.from("store_settings").select("key,value").eq("key","shipping_fees")]);
    if(r[0].error)throw r[0].error;if(r[1].error)throw r[1].error;
    CATS=r[0].data||[];PRODS=r[1].data||[];
    if(r[2].data&&r[2].data[0])FEES=r[2].data[0].value;
    dstate="ok"
  }catch(e){console.error(e);dstate="error"}
}

/* ---------- rendering ---------- */
function card(p){
  var im=imgs(p)[0],out=stock(p)<=0,tag=p.is_new?t("tNew"):p.is_bestseller?t("tBest"):"";
  return '<article class="card" data-p="'+p.id+'"><div class="ph" style="background:var(--beige)">'+(im?'<img class="pimg" loading="lazy" alt="" src="'+esc(url(im.path))+'">':"")+
  (tag?'<span class="tag">'+tag+"</span>":"")+(out?'<span class="sold">'+t("soldOut")+"</span>":"")+
  '<button class="fav" type="button" aria-pressed="'+!!favs[p.id]+'" data-f="'+p.id+'" aria-label="fav"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z"/></svg></button></div>'+
  '<div class="info"><h3>'+esc(pname(p))+'</h3><div class="price">'+fmt(cur(p))+(p.sale_price!=null?"<s>"+fmt(p.price)+"</s>":"")+"</div></div></article>"
}
function msg(k){return '<p class="empty">'+t(k)+"</p>"}
function filtered(){
  var q=st.q.toLowerCase();
  return PRODS.filter(function(p){
    if(st.fav&&!favs[p.id])return false;
    if(st.cat&&p.category_id!==st.cat&&p.subcategory_id!==st.cat)return false;
    if(q){var s=(p.sku+" "+nm(p.product_translations,"ar")+" "+nm(p.product_translations,"fr")).toLowerCase();if(s.indexOf(q)<0)return false}
    return true})
}
function renderDataInner(){
  var active=st.cat||st.q||st.fav||st.all;
  $("#res").hidden=!active;$("#new").hidden=!!active;$("#best").hidden=!!active;
  var top=CATS.filter(function(c){return!c.parent_id});
  $("#cats").hidden=!top.length&&dstate==="ok";
  $("#cg").innerHTML=top.map(function(c){
    var n=esc(nm(c.category_translations,lang)||nm(c.category_translations,"ar")||c.slug);
    return '<a class="cat'+(c.image_path&&sb?" has-img":"")+(st.cat===c.id?" on":"")+'" href="#res" data-c="'+c.id+'"'+(c.image_path&&sb?' style="background-image:url('+esc(url(c.image_path))+')"':"")+"><span>"+n+"</span></a>"}).join("");
  if(dstate==="loading"){$("#g1").innerHTML=new Array(5).join('<div class="card sk"><div class="ph"></div><div class="info"><i></i><i></i></div></div>');$("#g3").innerHTML="";return}
  if(dstate!=="ok"){var m=msg(dstate==="noconf"?"noConf":dstate==="error"?"loadErr":"noData");$("#g1").innerHTML=m;$("#g3").innerHTML=m;$("#best").hidden=true;return}
  if(active){
    var list=filtered();
    $("#resT").textContent=st.cat?nm((CATS.filter(function(c){return c.id===st.cat})[0]||{}).category_translations,lang):st.q?t("results"):st.fav?t("favT"):t("allT");
    $("#g3").innerHTML=list.length?list.map(card).join(""):msg("noData")
  }else{
    var nw=PRODS.filter(function(p){return p.is_new}).slice(0,8);if(!nw.length)nw=PRODS.slice(0,4);
    var bs=PRODS.filter(function(p){return p.is_bestseller}).slice(0,8);
    $("#g1").innerHTML=nw.length?nw.map(card).join(""):msg("noData");
    $("#best").hidden=!bs.length;$("#g2").innerHTML=bs.map(card).join("")
  }
}
function renderData(){renderDataInner();reveal(document)}
function render(){
  var h=document.documentElement;h.lang=lang;h.dir=lang==="ar"?"rtl":"ltr";
  document.querySelectorAll("[data-i]").forEach(function(e){e.textContent=t(e.dataset.i)});
  document.querySelectorAll("[data-ip]").forEach(function(e){e.placeholder=t(e.dataset.ip)});
  $("#lang").textContent=t("lang");
  splitH1();
  $("#qs").innerHTML=t("q").map(function(q){return '<div class="q"><p>«'+q[0]+"»</p><b>"+q[1]+"</b></div>"}).join("");
  document.title="Maison Noor | "+(lang==="ar"?"متجر أزياء رجالية":"Mode masculine");
  setBadge();renderData()
}

/* ---------- product sheet ---------- */
var SEL=null;
function sheet(html){$("#modal").innerHTML='<div class="overlay" id="ov"><div class="sheet" role="dialog" aria-modal="true"><button class="xbtn" type="button" id="xb" aria-label="close">×</button>'+html+"</div></div>"}
function closeSheet(){$("#modal").innerHTML="";SEL=null}
function openProduct(id){
  var p=PRODS.filter(function(x){return x.id===id})[0];if(!p)return;
  var vs=p.product_variants||[],first=vs.filter(function(v){return v.stock>0})[0]||vs[0]||{};
  SEL={p:p,color:first.color||null,size:null,qty:1};
  var im=imgs(p);
  sheet('<div class="pd"><div><div class="gal" id="gal">'+(im.length?im.map(function(i){return'<img alt="" src="'+esc(url(i.path))+'">'}).join(""):'<div class="noimg"></div>')+'</div>'+
    (im.length>1?'<div class="thumbs">'+im.map(function(i,k){return'<img alt="" data-t="'+k+'" class="'+(k?"":"on")+'" src="'+esc(url(i.path))+'">'}).join("")+"</div>":"")+
    '</div><div><h3>'+esc(pname(p))+'</h3><div class="price" style="font-size:18px">'+fmt(cur(p))+(p.sale_price!=null?"<s>"+fmt(p.price)+"</s>":"")+'</div><p class="note">'+esc(pdesc(p))+'</p><div id="opts"></div></div></div>');
  optsRender()
}
function optsRender(){
  var p=SEL.p,vs=p.product_variants||[],colors=[],sizes=[];
  vs.forEach(function(v){if(colors.indexOf(v.color)<0)colors.push(v.color)});
  vs.filter(function(v){return v.color===SEL.color}).forEach(function(v){if(sizes.indexOf(v.size)<0)sizes.push(v.size)});
  var v=SEL.size?vs.filter(function(x){return x.color===SEL.color&&x.size===SEL.size})[0]:null;
  if(v&&SEL.qty>v.stock)SEL.qty=Math.max(1,v.stock);
  var ok=v&&v.stock>0;
  $("#opts").innerHTML='<div class="lbl">'+t("color")+'</div><div class="chips">'+colors.map(function(c){return'<button class="chip'+(c===SEL.color?" on":"")+'" type="button" data-col="'+esc(c)+'">'+esc(c)+"</button>"}).join("")+"</div>"+
   '<div class="lbl">'+t("size")+'</div><div class="chips">'+sizes.map(function(s){var vv=vs.filter(function(x){return x.color===SEL.color&&x.size===s})[0];return'<button class="chip'+(s===SEL.size?" on":"")+'" type="button" data-siz="'+esc(s)+'"'+(vv.stock<=0?" disabled":"")+">"+esc(s)+"</button>"}).join("")+"</div>"+
   '<div class="note" style="margin-top:8px">'+(v?t("inStock")+" "+v.stock:t("pick"))+"</div>"+
   '<div class="lbl">'+t("qty")+'</div><div class="qty"><button type="button" data-q="-1" aria-label="-">−</button><b>'+SEL.qty+'</b><button type="button" data-q="1" aria-label="+">+</button></div>'+
   '<p><button class="btn pri" type="button" id="addc" style="width:100%"'+(ok?"":" disabled")+">"+t("addCart")+"</button></p>"
}
function addToCart(){
  var p=SEL.p,v=(p.product_variants||[]).filter(function(x){return x.color===SEL.color&&x.size===SEL.size})[0];if(!v||v.stock<1)return;
  var im=imgs(p)[0],it=cart.filter(function(i){return i.v===v.id})[0];
  if(it){it.q=Math.min(v.stock,it.q+SEL.qty)}
  else cart.push({v:v.id,p:p.id,q:Math.min(v.stock,SEL.qty),size:v.size,color:v.color,price:cur(p),name_ar:nm(p.product_translations,"ar")||p.sku,name_fr:nm(p.product_translations,"fr")||p.sku,img:im?im.path:null,max:v.stock});
  save("cart",cart);setBadge(true);toast(t("added"));closeSheet()
}

/* ---------- cart + checkout ---------- */
function syncCart(){
  cart=cart.filter(function(i){
    var p=PRODS.filter(function(x){return x.id===i.p})[0],v=p&&(p.product_variants||[]).filter(function(x){return x.id===i.v})[0];
    if(!v||v.stock<1)return false;i.price=cur(p);i.max=v.stock;if(i.q>v.stock)i.q=v.stock;return true});
  save("cart",cart);setBadge()
}
function fee(w){var f=FEES[w];if(f==null)f=FEES["default"];return Number(f)||0}
function openCart(){
  syncCart();
  if(!cart.length){sheet('<h3>'+t("cart")+'</h3><p class="note">'+t("cartEmpty")+"</p>");return}
  var sub=cart.reduce(function(a,i){return a+i.price*i.q},0),wl=lang==="ar"?WA:WF;
  sheet('<h3>'+t("cart")+'</h3><div id="ci">'+cart.map(function(i){return'<div class="ci">'+(i.img?'<img alt="" src="'+esc(url(i.img))+'">':'<div class="nb"></div>')+'<div class="sp"><b>'+esc(lang==="ar"?i.name_ar:i.name_fr)+"</b><br>"+esc(i.size)+" / "+esc(i.color)+"<br>"+fmt(i.price)+
    '</div><div class="qty"><button type="button" data-cq="'+i.v+'|-1">−</button><b>'+i.q+'</b><button type="button" data-cq="'+i.v+'|1">+</button></div><button class="xbtn" style="float:none" type="button" data-cr="'+i.v+'" aria-label="'+t("rem")+'">×</button></div>'}).join("")+"</div>"+
    '<form id="co" novalidate><label class="fld">'+t("fName")+'</label><input id="o_n" autocomplete="name" required><label class="fld">'+t("fPhone")+'</label><input id="o_p" type="tel" dir="ltr" autocomplete="tel" required>'+
    '<label class="fld">'+t("fWil")+'</label><select id="o_w" required><option value="">—</option>'+wl.map(function(n,k){return'<option value="'+(k+1)+'">'+(k+1)+" - "+n+"</option>"}).join("")+"</select>"+
    '<label class="fld">'+t("fAddr")+'</label><input id="o_a" autocomplete="street-address" required><label class="fld">'+t("fCode")+'</label><input id="o_c" dir="ltr">'+
    '<div style="margin-top:14px"><div class="tot"><span>'+t("sub3")+'</span><span>'+fmt(sub)+'</span></div><div class="tot"><span>'+t("ship")+'</span><span id="o_f"></span></div><div class="tot"><b>'+t("total")+'</b><b id="o_t"></b></div></div>'+
    '<p class="note">'+t("finalNote")+'</p><p class="err" id="o_e"></p><button class="btn pri" id="o_b" style="width:100%">'+t("place")+"</button></form>");
  var upd=function(){var f=fee($("#o_w").value);$("#o_f").textContent=fmt(f);$("#o_t").textContent=fmt(sub+f)};$("#o_w").onchange=upd;upd();
  $("#co").onsubmit=placeOrder
}
async function placeOrder(e){
  e.preventDefault();var err=$("#o_e"),b=$("#o_b");err.textContent="";
  var cust={name:$("#o_n").value.trim(),phone:$("#o_p").value.trim(),wilaya:$("#o_w").value,address:$("#o_a").value.trim()};
  if(cust.name.length<2||cust.phone.length<8||cust.address.length<4||!cust.wilaya){err.textContent=t("eCust");return}
  b.disabled=true;
  var r=await sb.rpc("create_order",{p_items:cart.map(function(i){return{variant_id:i.v,qty:i.q}}),p_customer:cust,p_code:$("#o_c").value.trim()||null});
  if(r.error){var m=r.error.message||"";err.textContent=m.indexOf("out_of_stock")>=0||m.indexOf("product_unavailable")>=0||m.indexOf("variant_not_found")>=0?t("eStock"):m.indexOf("invalid_discount")>=0?t("eCode"):m.indexOf("invalid_customer")>=0?t("eCust"):t("eGen");b.disabled=false;
    if(m.indexOf("stock")>=0||m.indexOf("unavailable")>=0||m.indexOf("not_found")>=0){await loadData();renderData();syncCart()}return}
  var o=r.data;cart=[];save("cart",cart);setBadge();
  sheet('<div class="ok"><h3>'+t("thanks")+'</h3><p>'+t("orderNo")+' <b dir="ltr">'+esc(o.order_number)+'</b></p><p>'+t("orderTot")+" <b>"+fmt(o.total)+"</b></p><p class=\"note\">"+t("willCall")+"</p></div>");
  loadData().then(renderData)
}

/* ---------- events ---------- */
document.addEventListener("click",function(e){
  var el=e.target;
  var f=el.closest("[data-f]");if(f){e.stopPropagation();favs[f.dataset.f]=!favs[f.dataset.f];if(!favs[f.dataset.f])delete favs[f.dataset.f];save("favs",favs);f.setAttribute("aria-pressed",!!favs[f.dataset.f]);if(st.fav)renderData();return}
  var c=el.closest("[data-c]");if(c){e.preventDefault();st.cat=st.cat===c.dataset.c?null:c.dataset.c;st.fav=false;st.all=false;renderData();var r=$("#res");if(!r.hidden)r.scrollIntoView({behavior:"smooth"});return}
  var pc=el.closest("[data-p]");if(pc){openProduct(pc.dataset.p);return}
  if(el.id==="ov"||el.id==="xb"){closeSheet();return}
  var th=el.closest("[data-t]");if(th&&SEL){var g=$("#gal");g.scrollTo({left:(document.documentElement.dir==="rtl"?-1:1)*g.clientWidth*Number(th.dataset.t),behavior:"smooth"});document.querySelectorAll(".thumbs img").forEach(function(x){x.classList.toggle("on",x===th)});return}
  var col=el.closest("[data-col]");if(col&&SEL){SEL.color=col.dataset.col;SEL.size=null;SEL.qty=1;optsRender();return}
  var sz=el.closest("[data-siz]");if(sz&&SEL){SEL.size=sz.dataset.siz;optsRender();return}
  var q=el.closest("[data-q]");if(q&&SEL){var v=(SEL.p.product_variants||[]).filter(function(x){return x.color===SEL.color&&x.size===SEL.size})[0],mx=v?v.stock:20;SEL.qty=Math.min(mx,Math.max(1,SEL.qty+Number(q.dataset.q)));optsRender();return}
  if(el.id==="addc"){addToCart();return}
  var cq=el.closest("[data-cq]");if(cq){var a=cq.dataset.cq.split("|"),it=cart.filter(function(i){return i.v===a[0]})[0];if(it){it.q=Math.min(it.max,Math.max(1,it.q+Number(a[1])));save("cart",cart);openCart()}return}
  var cr=el.closest("[data-cr]");if(cr){cart=cart.filter(function(i){return i.v!==cr.dataset.cr});save("cart",cart);openCart();return}
  if(el.closest("[data-i=all]")){e.preventDefault();st={cat:null,q:"",fav:false,all:true};renderData();$("#res").scrollIntoView({behavior:"smooth"});return}
});
document.addEventListener("keydown",function(e){if(e.key==="Escape")closeSheet()});
$("#clr").onclick=function(){st={cat:null,q:"",fav:false,all:false};document.querySelectorAll(".qin").forEach(function(i){i.value=""});renderData()};
var qt;document.querySelectorAll(".qin").forEach(function(i){i.addEventListener("input",function(){var v=i.value;document.querySelectorAll(".qin").forEach(function(o){if(o!==i)o.value=v});clearTimeout(qt);qt=setTimeout(function(){st.q=v.trim();renderData()},250)})});
$("#bs").onclick=function(e){e.preventDefault();window.scrollTo({top:0,behavior:"smooth"});var i=document.querySelector(".msearch .qin");if(i)i.focus()};
$("#bf").onclick=function(e){e.preventDefault();st.fav=!st.fav;st.cat=null;renderData();if(st.fav)$("#res").scrollIntoView({behavior:"smooth"})};
$("#cart").onclick=openCart;
$("#lang").onclick=function(){lang=lang==="ar"?"fr":"ar";save("lang",lang);render();if(SEL)closeSheet()};
$("#nl").onsubmit=async function(e){e.preventDefault();var em=e.target.querySelector("input").value.trim();
  if(sb){var r=await sb.from("newsletter_subscribers").insert({email:em,lang:lang});if(r.error&&r.error.code!=="23505"){toast(t("eGen"));return}}
  toast(t("subbed"));e.target.reset()};

function splitH1(){var h=document.querySelector(".hero h1");if(!h)return;h.innerHTML=h.textContent.trim().split(/\s+/).map(function(w,i){return'<span class="w" style="--i:'+i+'">'+esc(w)+"</span>"}).join(" ")}
var io=null;
function reveal(root){
  var els=root.querySelectorAll(".card,.cat,.q,.head,.banner,.about>*,.news,.fcols>*");
  if(!("IntersectionObserver" in window)){els.forEach(function(e){e.classList.add("in")});return}
  if(!io)io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.12,rootMargin:"0px 0px -6% 0px"});
  els.forEach(function(e){if(e.classList.contains("rv"))return;e.classList.add("rv");var i=Array.prototype.indexOf.call(e.parentNode.children,e);e.style.setProperty("--d",Math.min(i,5)*70+"ms");io.observe(e)})
}
var hd=document.querySelector("header"),bar=document.createElement("div");bar.id="bar";document.body.appendChild(bar);
function onScroll(){var y=window.scrollY,h=document.documentElement.scrollHeight-window.innerHeight;hd.classList.toggle("scrolled",y>8);bar.style.transform="scaleX("+(h>0?Math.min(1,y/h):0)+")"}
window.addEventListener("scroll",onScroll,{passive:true});onScroll();

render();
loadData().then(function(){syncCart();renderData()});
