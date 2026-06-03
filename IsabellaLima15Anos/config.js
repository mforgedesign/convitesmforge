window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Isabella Lima",
    "idade": 15,
    "data": "2026-06-28",
    "hora": "16:00",
    "endereco": "Av Gumercindo Barranqueiros, 2000 Jundiaí"
  },
  "convite": {
    "paletaCores": "Verde e Rose ",
    "tema": "Floresta encantada",
    "musica": "assets/music_1780517876072.mp3",
    "tipoAbertura": "curta",
    "particulasAbertura": true,
    "slug": "IsabellaLima15Anos",
    "seo": {
      "pageTitle": "Isabella Lima - 15 Anos",
      "ogTitle": "Você está convidado para os 15 anos da Isabella Lima!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1780517876072.png",
    "aberturaSlides": [
      "assets/slide1_1780517876072.mp4"
    ],
    "folhaVazia": "assets/folha_1780517876072.jpg",
    "folhaPreenchida": "assets/folha_1780517876072.jpg",
    "musica": "assets/music_1780517876072.mp3",
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/XHZYd3AimUyTJyZY9"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n\n.gf-wrap{\n  width:100%;\n  max-width:420px;\n  margin:0 auto;\n  padding:16px;\n  font-family:Georgia,serif;\n}\n\n/* GRID */\n.gf-grid{\n  display:grid;\n  grid-template-columns:1fr 1fr;\n  gap:10px;\n  margin-bottom:14px;\n}\n\n/* CARDS */\n.gf-card{\n  background:rgba(255,255,255,.85);\n  border-radius:16px;\n  padding:12px;\n  display:flex;\n  align-items:center;\n  gap:10px;\n}\n\n.gf-wide{\n  grid-column:1 / -1;\n}\n\n/* ICON (CORRIGIDO AQUI) */\n.gf-icon{\n  width:38px;\n  height:38px;\n  border-radius:10px;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  font-size:14px;\n  background:linear-gradient(135deg,#e8f5e9,#fce4ec);\n  color:#2b2b2b; /* cinza escuro visível */\n}\n\n/* TEXT */\n.gf-label{\n  font-size:8px;\n  letter-spacing:.15em;\n  text-transform:uppercase;\n  color:#666;\n}\n\n.gf-value{\n  font-size:13px;\n  font-weight:500;\n  background:linear-gradient(125deg,#2e7d32,#c2185b);\n  -webkit-background-clip:text;\n  -webkit-text-fill-color:transparent;\n}\n\n/* PIX */\n.gf-pix{\n  background:rgba(255,255,255,.9);\n  border-radius:16px;\n  padding:14px;\n  text-align:center;\n  margin-bottom:10px;\n}\n\n.gf-pix-lbl{\n  font-size:8px;\n  letter-spacing:.2em;\n  color:#666;\n  margin-bottom:6px;\n}\n\n.gf-pix-key{\n  font-size:16px;\n  word-break:break-all;\n  background:linear-gradient(125deg,#2e7d32,#c2185b);\n  -webkit-background-clip:text;\n  -webkit-text-fill-color:transparent;\n}\n\n/* BOTÃO */\n.gf-btn{\n  width:100%;\n  border:none;\n  border-radius:14px;\n  padding:12px;\n  font-size:10px;\n  letter-spacing:.15em;\n  color:#fff;\n  background:linear-gradient(130deg,#2e7d32,#c2185b);\n  cursor:pointer;\n}\n\n/* RESPONSIVO EXTRA */\n@media (max-width:360px){\n  .gf-grid{\n    grid-template-columns:1fr;\n  }\n}\n</style>\n\n<div class=\"gf-wrap\">\n\n  <div class=\"gf-grid\">\n\n    <div class=\"gf-card\">\n      <div class=\"gf-icon\"><i class=\"fa-solid fa-shirt\"></i></div>\n      <div>\n        <div class=\"gf-label\">Roupas</div>\n        <div class=\"gf-value\">Blusas M</div>\n      </div>\n    </div>\n\n    <div class=\"gf-card\">\n      <div class=\"gf-icon\"><i class=\"fa-solid fa-user\"></i></div>\n      <div>\n        <div class=\"gf-label\">Calça</div>\n        <div class=\"gf-value\">Tam. 40</div>\n      </div>\n    </div>\n\n    <div class=\"gf-card\">\n      <div class=\"gf-icon\"><i class=\"fa-solid fa-shoe-prints\"></i></div>\n      <div>\n        <div class=\"gf-label\">Calçados</div>\n        <div class=\"gf-value\">Nº 40</div>\n      </div>\n    </div>\n\n    <div class=\"gf-card\">\n      <div class=\"gf-icon\"><i class=\"fa-solid fa-gem\"></i></div>\n      <div>\n        <div class=\"gf-label\">Acessórios</div>\n        <div class=\"gf-value\">Semijoias</div>\n      </div>\n    </div>\n\n    <div class=\"gf-card gf-wide\">\n      <div class=\"gf-icon\"><i class=\"fa-solid fa-spray-can-sparkles\"></i></div>\n      <div>\n        <div class=\"gf-label\">Presente ou contribuição</div>\n        <div class=\"gf-value\">Perfumes ou Pix</div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"gf-pix\">\n    <div class=\"gf-pix-lbl\">Chave Pix · Celular</div>\n    <div class=\"gf-pix-key\">(11) 98350-1930</div>\n  </div>\n\n  <button class=\"gf-btn\" onclick=\"gfCopyPix()\">\n    <i class=\"fa-regular fa-copy\"></i> Copiar Chave Pix\n  </button>\n\n</div>\n\n<script>\nfunction gfCopyPix(){\n  navigator.clipboard.writeText('11983501930').then(function(){\n    alert('Chave Pix copiada!');\n  });\n}\n</script>"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n\n.manual-traje-wrap{\n  min-height:100%;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  padding:24px 14px;\n  background:\n    radial-gradient(circle at top, rgba(203,44,146,.15), transparent 40%),\n    radial-gradient(circle at bottom, rgba(90,140,110,.18), transparent 45%),\n    linear-gradient(160deg, #fdf7fb 0%, #eef6f1 100%);\n  font-family:'Cormorant Garamond', Georgia, serif;\n}\n\n.manual-traje-card{\n  width:100%;\n  max-width:420px;\n  position:relative;\n  overflow:hidden;\n  border-radius:30px;\n  padding:30px 22px 26px;\n  text-align:center;\n  background:linear-gradient(145deg, rgba(255,255,255,.75), rgba(255,255,255,.55));\n  border:1px solid rgba(203,44,146,.18);\n  box-shadow:\n    0 20px 60px rgba(90,140,110,.18),\n    0 10px 30px rgba(203,44,146,.12),\n    inset 0 1px 0 rgba(255,255,255,.8);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n}\n\n.manual-traje-card::before{\n  content:'';\n  position:absolute;\n  inset:0;\n  background:\n    linear-gradient(135deg, rgba(90,140,110,.08), transparent 35%),\n    linear-gradient(315deg, rgba(203,44,146,.10), transparent 45%);\n  pointer-events:none;\n}\n\n.manual-badge{\n  width:76px;\n  height:76px;\n  margin:0 auto 20px;\n  border-radius:50%;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  background:\n    linear-gradient(135deg, rgba(90,140,110,.25), rgba(203,44,146,.22));\n  border:1px solid rgba(203,44,146,.25);\n  box-shadow:\n    0 12px 30px rgba(203,44,146,.25),\n    0 6px 18px rgba(90,140,110,.2);\n}\n\n.manual-badge i{\n  font-size:30px;\n  color:#cb2c92;\n}\n\n.manual-kicker{\n  font-family:'Cinzel', serif;\n  font-size:11px;\n  letter-spacing:.30em;\n  text-transform:uppercase;\n  color:#cb2c92;\n  margin-bottom:12px;\n}\n\n.manual-title{\n  font-family:'Cinzel', serif;\n  font-size:26px;\n  line-height:1.1;\n  font-weight:600;\n  margin-bottom:16px;\n  background:linear-gradient(120deg, #3a5f4b, #cb2c92);\n  -webkit-background-clip:text;\n  -webkit-text-fill-color:transparent;\n}\n\n.manual-line{\n  width:80px;\n  height:2px;\n  margin:0 auto 18px;\n  border-radius:999px;\n  background:linear-gradient(90deg, #3a5f4b, #cb2c92);\n}\n\n.manual-info{\n  font-size:24px;\n  line-height:1.4;\n  letter-spacing:.04em;\n  font-weight:500;\n  background:linear-gradient(120deg, #2f4b39, #cb2c92 70%);\n  -webkit-background-clip:text;\n  -webkit-text-fill-color:transparent;\n}\n\n.manual-info strong{\n  font-weight:600;\n}\n\n.manual-foot{\n  margin-top:20px;\n  font-size:15px;\n  line-height:1.5;\n  color:#4d6257;\n}\n\n.manual-glow{\n  position:absolute;\n  width:200px;\n  height:200px;\n  border-radius:50%;\n  background:radial-gradient(circle, rgba(203,44,146,.18), transparent 65%);\n  top:-80px;\n  right:-60px;\n}\n\n.manual-leaf{\n  position:absolute;\n  width:160px;\n  height:160px;\n  border-radius:50%;\n  background:radial-gradient(circle, rgba(90,140,110,.16), transparent 70%);\n  bottom:-60px;\n  left:-60px;\n}\n</style>\n\n<div class=\"manual-traje-wrap\">\n  <div class=\"manual-traje-card\">\n    <div class=\"manual-glow\"></div>\n    <div class=\"manual-leaf\"></div>\n\n    <div class=\"manual-badge\">\n      <i class=\"fa-solid fa-gem\"></i>\n    </div>\n\n    <div class=\"manual-kicker\">Manual do Convidado</div>\n\n    <div class=\"manual-title\">\n      Traje da Noite\n    </div>\n\n    <div class=\"manual-line\"></div>\n\n    <div class=\"manual-info\">\n      <strong>Esporte Fino</strong><br>\n      ALL BLACK\n    </div>\n\n    <div class=\"manual-foot\">\n      Elegância, sofisticação e harmonia em cada detalhe.\n    </div>\n  </div>\n</div>"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5511995648703",
      "rsvpConfig": {
        "exibirNome": true,
        "exibirWhatsapp": false,
        "exibirAcompanhantes": false
      }
    }
  ],
  "upsell": {
    "galeriaFotos": false,
    "saveTheDate": false,
    "lembrete": false
  },
  "config": {
    "exibirMarcaDagua": false,
    "cronometro": false,
    "buttonColor": "#cb2c92",
    "buttonSize": 1,
    "isButtonFilled": true,
    "shadowStyle": "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
    "brilhos": {
      "esquerdo": true,
      "direito": true,
      "centro": true
    }
  }
};
