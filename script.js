// ============================================================
// AyitiGo — landing page script
// TO CAPTURE REAL WAITLIST SIGNUPS:
// 1. Create a free form at https://formspree.io (takes 2 min)
// 2. Paste your endpoint below, e.g. "https://formspree.io/f/abcdwxyz"
// Submissions will arrive in your Formspree inbox / email.
// Leave empty ("") to run in demo mode (shows success, saves nothing).
// ============================================================
const FORM_ENDPOINT = "";

const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".main-nav");
const languageButton = document.querySelector(".language-button");
const form = document.querySelector("#signup-form");
const roleSelect = document.querySelector("#role-select");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".service-card").forEach(item => item.classList.remove("selected"));
    card.classList.add("selected");
    document.querySelector("#waitlist").scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".partner-button").forEach(button => {
  button.addEventListener("click", () => {
    roleSelect.value = button.dataset.role;
  });
});

const languages = ["EN", "FR", "HT"];
let currentLanguage = "EN";

const translations = {
  FR: {
    "AyitiGo | Everything You Need, Delivered": "AyitiGo | Tout ce dont vous avez besoin, livré",
    "Services": "Services",
    "How It Works": "Comment ça marche",
    "What's Next": "À venir",
    "Investors": "Investisseurs",
    "Partners": "Partenaires",
    "Join Waitlist": "Rejoindre la liste",
    "Launching soon in Port-de-Paix": "Bientôt disponible à Port-de-Paix",
    "Everything you need,": "Tout ce qu'il vous faut,",
    "delivered.": "livré.",
    "From your favorite meal to everyday essentials, AyitiGo brings Port-de-Paix to your doorstep.": "De votre repas préféré aux produits essentiels, AyitiGo livre Port-de-Paix à votre porte.",
    "Join the Waitlist": "Rejoindre la liste",
    "Order on WhatsApp": "Commander sur WhatsApp",
    "Join the movement": "Rejoignez le mouvement",
    "Built for Haiti, by Haitians": "Créé pour Haïti, par des Haïtiens",
    "Delivery location": "Lieu de livraison",
    "What do you need?": "De quoi avez-vous besoin ?",
    "WELCOME OFFER": "OFFRE DE BIENVENUE",
    "First delivery": "La première livraison",
    "is on us.": "est offerte.",
    "Order now": "Commander",
    "Categories": "Catégories",
    "See all": "Voir tout",
    "Food": "Repas",
    "Market": "Marché",
    "Health": "Santé",
    "Water": "Eau",
    "Popular near you": "Populaires près de vous",
    "Home": "Accueil",
    "Search": "Recherche",
    "Orders": "Commandes",
    "Profile": "Profil",
    "Your order is on the way": "Votre commande est en route",
    "Arriving in 12 minutes": "Arrivée dans 12 minutes",
    "ONE APP, EVERYDAY ESSENTIALS": "UNE APP POUR VOS BESOINS QUOTIDIENS",
    "What can we deliver?": "Que pouvons-nous livrer ?",
    "Whatever your day needs, AyitiGo helps you get it without the extra trip.": "Pour tous vos besoins quotidiens, AyitiGo vous évite un déplacement.",
    "Local favorites, delivered hot": "Vos plats préférés, livrés chauds",
    "Groceries": "Épicerie",
    "Fresh produce and essentials": "Produits frais et essentiels",
    "Pharmacy": "Pharmacie",
    "Health products when needed": "Produits de santé quand nécessaire",
    "Clean water to your door": "Eau propre livrée à votre porte",
    "Gas": "Gaz",
    "Reliable household delivery": "Livraison fiable à domicile",
    "Express": "Express",
    "Send packages across the city": "Envoyez des colis dans toute la ville",
    "SIMPLE FROM START TO FINISH": "SIMPLE DU DÉBUT À LA FIN",
    "Delivery made easy": "La livraison simplifiée",
    "Four simple steps between you and what you need.": "Quatre étapes simples pour recevoir ce dont vous avez besoin.",
    "Choose a store": "Choisissez un magasin",
    "Explore trusted local restaurants and shops.": "Découvrez des restaurants et magasins locaux fiables.",
    "Place your order": "Passez votre commande",
    "Add what you need and confirm your address.": "Ajoutez vos articles et confirmez votre adresse.",
    "Track delivery": "Suivez la livraison",
    "Follow your order from the store to your door.": "Suivez votre commande du magasin à votre porte.",
    "Pay on delivery": "Payez à la livraison",
    "Receive your order and pay securely in cash.": "Recevez votre commande et payez en espèces.",
    "FOR LOCAL BUSINESSES": "POUR LES ENTREPRISES LOCALES",
    "Grow your business with AyitiGo": "Développez votre entreprise avec AyitiGo",
    "Reach more customers, receive more orders, and manage delivery without the extra work.": "Touchez plus de clients, recevez plus de commandes et simplifiez vos livraisons.",
    "Become a merchant": "Devenir marchand",
    "FOR DELIVERY PARTNERS": "POUR LES PARTENAIRES LIVREURS",
    "Earn on your schedule": "Gagnez selon votre horaire",
    "Make deliveries, support your community, and build a reliable source of income.": "Effectuez des livraisons, soutenez votre communauté et créez un revenu fiable.",
    "Become a driver": "Devenir livreur",
    "BEYOND DELIVERY": "AU-DELÀ DE LA LIVRAISON",
    "One app for everyday Haiti": "Une seule app pour le quotidien en Haïti",
    "Delivery is only the beginning. AyitiGo is building the digital backbone of Haiti's local economy.": "La livraison n'est que le début. AyitiGo construit l'infrastructure numérique de l'économie locale haïtienne.",
    "Launching first": "Lancé en premier",
    "Coming next": "Prochainement",
    "On the horizon": "À l'horizon",
    "AyitiGo Delivery": "AyitiGo Livraison",
    "Food, groceries, pharmacy, water, gas, and express packages across Port-de-Paix.": "Repas, épicerie, pharmacie, eau, gaz et colis express à Port-de-Paix.",
    "A digital marketplace giving every local merchant a modern storefront.": "Un marché numérique offrant à chaque commerçant local une vitrine moderne.",
    "A digital wallet built for how Haiti actually pays, from cash to mobile money.": "Un portefeuille numérique adapté aux paiements en Haïti, du cash au mobile money.",
    "Safe, reliable rides and transportation across the city.": "Des trajets sûrs et fiables à travers la ville.",
    "Pay utilities and everyday bills in a few taps, without the lines.": "Payez vos factures en quelques clics, sans faire la file.",
    "Bus and travel ticket booking connecting cities across Haiti.": "Réservation de billets de bus et de voyage entre les villes d'Haïti.",
    "FOR INVESTORS": "POUR LES INVESTISSEURS",
    "Invest in Haiti's digital future": "Investissez dans l'avenir numérique d'Haïti",
    "AyitiGo is digitizing a delivery business that already runs today, serving real customers in Port-de-Paix. We are building the platform that connects merchants, drivers, and customers across the country.": "AyitiGo numérise un service de livraison déjà en activité, au service de vrais clients à Port-de-Paix. Nous construisons la plateforme qui connecte commerçants, livreurs et clients à travers le pays.",
    "Proven demand: an operating delivery service, now going digital": "Demande prouvée : un service de livraison actif qui passe au numérique",
    "Underserved market with minimal structured competition": "Marché sous-desservi avec peu de concurrence structurée",
    "Clear revenue model: delivery fees, merchant commissions, and subscriptions": "Modèle de revenus clair : frais de livraison, commissions et abonnements",
    "Super app roadmap: delivery, marketplace, payments, rides, and more": "Vision super app : livraison, marché, paiements, transport et plus",
    "Request the investor deck": "Demander le dossier investisseur",
    "Restaurant partners targeted at launch": "Restaurants partenaires visés au lancement",
    "Delivery partners in Phase 1": "Livreurs partenaires en phase 1",
    "Cities in the regional expansion plan": "Villes dans le plan d'expansion régionale",
    "Delivery categories from day one": "Catégories de livraison dès le premier jour",
    "Cash on delivery": "Paiement à la livraison",
    "Simple and convenient": "Simple et pratique",
    "Local support": "Assistance locale",
    "Here when you need us": "Disponible quand vous en avez besoin",
    "Reliable delivery": "Livraison fiable",
    "Trusted local partners": "Partenaires locaux fiables",
    "Three languages": "Trois langues",
    "BE FIRST IN LINE": "SOYEZ PARMI LES PREMIERS",
    "Ready for a simpler day?": "Prêt pour une journée plus simple ?",
    "Join the AyitiGo community and be among the first to know when we launch in Port-de-Paix.": "Rejoignez la communauté AyitiGo et soyez informé de notre lancement à Port-de-Paix.",
    "Early members receive a free first delivery.": "Les premiers membres reçoivent une première livraison gratuite.",
    "Full name": "Nom complet",
    "Phone number": "Numéro de téléphone",
    "Email (optional)": "Courriel (facultatif)",
    "I want to join as": "Je souhaite m'inscrire comme",
    "Customer": "Client",
    "Merchant": "Marchand",
    "Driver": "Livreur",
    "Investor": "Investisseur",
    "By joining, you agree to receive AyitiGo launch updates.": "En vous inscrivant, vous acceptez de recevoir les nouvelles d'AyitiGo.",
    "Moving Haiti Forward,": "Faire avancer Haïti,",
    "One Delivery at a Time.": "une livraison à la fois.",
    "Company": "Entreprise",
    "Join AyitiGo": "Rejoindre AyitiGo",
    "Customer waitlist": "Liste d'attente client",
    "Stay connected": "Restez connecté",
    "All rights reserved.": "Tous droits réservés.",
    "Built with pride in Haiti": "Créé avec fierté en Haïti",
    "Your name": "Votre nom"
  },
  HT: {
    "AyitiGo | Everything You Need, Delivered": "AyitiGo | Tout sa ou bezwen, livre",
    "Services": "Sèvis",
    "How It Works": "Kijan li mache",
    "What's Next": "Sa k ap vini",
    "Investors": "Envestisè",
    "Partners": "Patnè",
    "Join Waitlist": "Antre nan lis la",
    "Launching soon in Port-de-Paix": "N ap lanse byento Pòdepè",
    "Everything you need,": "Tout sa ou bezwen,",
    "delivered.": "livre.",
    "From your favorite meal to everyday essentials, AyitiGo brings Port-de-Paix to your doorstep.": "Soti nan manje ou renmen rive nan bagay esansyèl, AyitiGo pote Pòdepè devan pòt ou.",
    "Join the Waitlist": "Antre nan lis la",
    "Order on WhatsApp": "Kòmande sou WhatsApp",
    "Join the movement": "Antre nan mouvman an",
    "Built for Haiti, by Haitians": "Fèt pou Ayiti, pa Ayisyen",
    "Delivery location": "Kote pou livre",
    "What do you need?": "Kisa ou bezwen?",
    "WELCOME OFFER": "ÒF BYENVENI",
    "First delivery": "Premye livrezon",
    "is on us.": "gratis.",
    "Order now": "Kòmande",
    "Categories": "Kategori",
    "See all": "Gade tout",
    "Food": "Manje",
    "Market": "Mache",
    "Health": "Sante",
    "Water": "Dlo",
    "Popular near you": "Popilè toupre ou",
    "Home": "Akèy",
    "Search": "Chèche",
    "Orders": "Kòmand",
    "Profile": "Pwofil",
    "Your order is on the way": "Kòmand ou sou wout",
    "Arriving in 12 minutes": "L ap rive nan 12 minit",
    "ONE APP, EVERYDAY ESSENTIALS": "YON APLIKASYON POU BEZWEN CHAK JOU",
    "What can we deliver?": "Kisa nou ka livre?",
    "Whatever your day needs, AyitiGo helps you get it without the extra trip.": "Kèlkeswa sa ou bezwen, AyitiGo ede ou jwenn li san deplase.",
    "Local favorites, delivered hot": "Manje lokal ou renmen, livre cho",
    "Groceries": "Pwovizyon",
    "Fresh produce and essentials": "Pwodui fre ak bagay esansyèl",
    "Pharmacy": "Famasi",
    "Health products when needed": "Pwodui sante lè ou bezwen yo",
    "Clean water to your door": "Dlo pwòp devan pòt ou",
    "Gas": "Gaz",
    "Reliable household delivery": "Livrezon serye pou lakay",
    "Express": "Eksprès",
    "Send packages across the city": "Voye pakè nan tout vil la",
    "SIMPLE FROM START TO FINISH": "SENP DEPI NAN KÒMANSMAN RIVE NAN FEN",
    "Delivery made easy": "Livrezon vin fasil",
    "Four simple steps between you and what you need.": "Kat etap senp pou jwenn sa ou bezwen.",
    "Choose a store": "Chwazi yon magazen",
    "Explore trusted local restaurants and shops.": "Dekouvri restoran ak magazen lokal ou ka fè konfyans.",
    "Place your order": "Fè kòmand ou",
    "Add what you need and confirm your address.": "Ajoute sa ou bezwen epi konfime adrès ou.",
    "Track delivery": "Swiv livrezon an",
    "Follow your order from the store to your door.": "Swiv kòmand ou soti nan magazen an rive devan pòt ou.",
    "Pay on delivery": "Peye lè yo livre",
    "Receive your order and pay securely in cash.": "Resevwa kòmand ou epi peye an kach.",
    "FOR LOCAL BUSINESSES": "POU BIZNIS LOKAL",
    "Grow your business with AyitiGo": "Devlope biznis ou ak AyitiGo",
    "Reach more customers, receive more orders, and manage delivery without the extra work.": "Jwenn plis kliyan, plis kòmand, epi jere livrezon pi fasil.",
    "Become a merchant": "Vin yon machann",
    "FOR DELIVERY PARTNERS": "POU PATNÈ LIVREZON",
    "Earn on your schedule": "Fè lajan nan lè pa ou",
    "Make deliveries, support your community, and build a reliable source of income.": "Fè livrezon, ede kominote ou, epi bati yon revni serye.",
    "Become a driver": "Vin yon chofè",
    "BEYOND DELIVERY": "PI LWEN PASE LIVREZON",
    "One app for everyday Haiti": "Yon sèl aplikasyon pou lavi chak jou ann Ayiti",
    "Delivery is only the beginning. AyitiGo is building the digital backbone of Haiti's local economy.": "Livrezon se sèlman kòmansman. AyitiGo ap bati baz dijital ekonomi lokal Ayiti a.",
    "Launching first": "K ap lanse an premye",
    "Coming next": "K ap vini apre",
    "On the horizon": "Sou wout",
    "AyitiGo Delivery": "AyitiGo Livrezon",
    "Food, groceries, pharmacy, water, gas, and express packages across Port-de-Paix.": "Manje, pwovizyon, famasi, dlo, gaz ak pakè eksprès nan tout Pòdepè.",
    "A digital marketplace giving every local merchant a modern storefront.": "Yon mache dijital ki bay chak machann lokal yon vitrin modèn.",
    "A digital wallet built for how Haiti actually pays, from cash to mobile money.": "Yon bous dijital fèt pou fason Ayiti peye toutbon, soti nan kach rive nan mobile money.",
    "Safe, reliable rides and transportation across the city.": "Transpò ki an sekirite e serye nan tout vil la.",
    "Pay utilities and everyday bills in a few taps, without the lines.": "Peye bòdwo ou yo fasil, san fè liy.",
    "Bus and travel ticket booking connecting cities across Haiti.": "Rezève tikè bis ak vwayaj k ap konekte vil yo ann Ayiti.",
    "FOR INVESTORS": "POU ENVESTISÈ",
    "Invest in Haiti's digital future": "Envesti nan avni dijital Ayiti",
    "AyitiGo is digitizing a delivery business that already runs today, serving real customers in Port-de-Paix. We are building the platform that connects merchants, drivers, and customers across the country.": "AyitiGo ap dijitalize yon biznis livrezon k ap fonksyone deja, k ap sèvi vrè kliyan Pòdepè. N ap bati platfòm ki konekte machann, chofè ak kliyan nan tout peyi a.",
    "Proven demand: an operating delivery service, now going digital": "Demann pwouve: yon sèvis livrezon aktif k ap vin dijital",
    "Underserved market with minimal structured competition": "Yon mache ki manke sèvis, ak kèk grenn konpetisyon òganize",
    "Clear revenue model: delivery fees, merchant commissions, and subscriptions": "Modèl revni klè: frè livrezon, komisyon machann ak abònman",
    "Super app roadmap: delivery, marketplace, payments, rides, and more": "Vizyon super app: livrezon, mache, peman, transpò ak plis ankò",
    "Request the investor deck": "Mande dosye envestisè a",
    "Restaurant partners targeted at launch": "Restoran patnè nou vize pou lansman an",
    "Delivery partners in Phase 1": "Patnè livrezon nan Faz 1",
    "Cities in the regional expansion plan": "Vil nan plan ekspansyon rejyonal la",
    "Delivery categories from day one": "Kategori livrezon depi premye jou a",
    "Cash on delivery": "Peye lè yo livre",
    "Simple and convenient": "Senp epi pratik",
    "Local support": "Sipò lokal",
    "Here when you need us": "La lè ou bezwen nou",
    "Reliable delivery": "Livrezon serye",
    "Trusted local partners": "Patnè lokal ou ka fè konfyans",
    "Three languages": "Twa lang",
    "BE FIRST IN LINE": "SE PAMI PREMYE YO",
    "Ready for a simpler day?": "Pare pou yon jounen pi fasil?",
    "Join the AyitiGo community and be among the first to know when we launch in Port-de-Paix.": "Antre nan kominote AyitiGo epi se pami premye moun ki konnen lè nou lanse Pòdepè.",
    "Early members receive a free first delivery.": "Premye manm yo jwenn premye livrezon gratis.",
    "Full name": "Non konplè",
    "Phone number": "Nimewo telefòn",
    "Email (optional)": "Imèl (si ou vle)",
    "I want to join as": "Mwen vle antre kòm",
    "Customer": "Kliyan",
    "Merchant": "Machann",
    "Driver": "Chofè",
    "Investor": "Envestisè",
    "By joining, you agree to receive AyitiGo launch updates.": "Lè ou antre, ou dakò resevwa nouvèl sou lansman AyitiGo.",
    "Moving Haiti Forward,": "Fè Ayiti vanse,",
    "One Delivery at a Time.": "yon livrezon alafwa.",
    "Company": "Konpayi",
    "Join AyitiGo": "Antre nan AyitiGo",
    "Customer waitlist": "Lis datant kliyan",
    "Stay connected": "Rete konekte",
    "All rights reserved.": "Tout dwa rezève.",
    "Built with pride in Haiti": "Fèt ak fyète ann Ayiti",
    "Your name": "Non ou"
  }
};

const originalText = new Map();
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let textNode;

while ((textNode = textWalker.nextNode())) {
  if (textNode.textContent.trim()) originalText.set(textNode, textNode.textContent);
}

document.querySelectorAll("[placeholder]").forEach(element => {
  element.dataset.originalPlaceholder = element.placeholder;
});

function translatePage(language) {
  const dictionary = translations[language] || {};

  originalText.forEach((original, node) => {
    const key = original.trim();
    const translated = dictionary[key] || key;
    node.textContent = original.replace(key, translated);
  });

  document.querySelectorAll("[data-original-placeholder]").forEach(element => {
    const original = element.dataset.originalPlaceholder;
    element.placeholder = dictionary[original] || original;
  });

  document.documentElement.lang = language === "FR" ? "fr" : language === "HT" ? "ht" : "en";
  document.title = dictionary["AyitiGo | Everything You Need, Delivered"] || "AyitiGo | Everything You Need, Delivered";
  languageButton.textContent = language;
  try { localStorage.setItem("ayitigo-language", language); } catch (e) {}
}

languageButton.addEventListener("click", () => {
  const current = languages.indexOf(currentLanguage);
  currentLanguage = languages[(current + 1) % languages.length];
  translatePage(currentLanguage);
});

let savedLanguage = null;
try { savedLanguage = localStorage.getItem("ayitigo-language"); } catch (e) {}
if (languages.includes(savedLanguage)) {
  currentLanguage = savedLanguage;
  translatePage(currentLanguage);
}

// --- Waitlist form submission ---
const successMessages = {
  EN: name => `Thank you, ${name}! You are on the AyitiGo waitlist.`,
  FR: name => `Merci, ${name} ! Vous êtes sur la liste d'attente AyitiGo.`,
  HT: name => `Mèsi, ${name}! Ou antre nan lis datant AyitiGo a.`
};
const errorMessages = {
  EN: "Something went wrong. Please try again or message us on WhatsApp.",
  FR: "Une erreur est survenue. Réessayez ou écrivez-nous sur WhatsApp.",
  HT: "Gen yon pwoblèm. Eseye ankò oswa ekri nou sou WhatsApp."
};

form.addEventListener("submit", async event => {
  event.preventDefault();
  const success = form.querySelector(".form-success");
  const submitButton = form.querySelector("button[type=submit]");
  const formData = new FormData(form);
  const name = (formData.get("name") || "").trim().split(" ")[0];

  success.classList.remove("show", "error");

  if (FORM_ENDPOINT) {
    submitButton.disabled = true;
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData
      });
      if (!response.ok) throw new Error("Submission failed");
      success.textContent = successMessages[currentLanguage](name);
      success.classList.add("show");
      form.reset();
    } catch (err) {
      success.textContent = errorMessages[currentLanguage];
      success.classList.add("show", "error");
    } finally {
      submitButton.disabled = false;
    }
  } else {
    // Demo mode — no endpoint configured yet
    success.textContent = successMessages[currentLanguage](name);
    success.classList.add("show");
    form.reset();
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
