window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Nicolly Meiriane",
    "idade": 15,
    "data": "2026-06-13",
    "hora": "20:00",
    "endereco": ""
  },
  "convite": {
    "paletaCores": "Vermelho ,branco e dourado",
    "tema": "",
    "musica": "assets/music_1780517982964.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Nicolly-15Anos",
    "seo": {
      "pageTitle": "Nicolly | 15 Anos",
      "ogTitle": "Você está convidado para os 15 anos da Nicolly!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1780517982964.jpg",
    "aberturaSlides": [
      "assets/slide1_1780517982964.mp4",
      "assets/slide2_1780517982964.mp4",
      "assets/slide3_1780517982964.jpg",
      "assets/slide4_1780517982964.mp4",
      "assets/slide5_1780517982964.jpg"
    ],
    "folhaVazia": "assets/folha_1780517982964.jpg",
    "folhaPreenchida": "assets/folha_1780517982964.jpg",
    "musica": "assets/music_1780517982964.mp3",
    "fotos": [],
    "popupImagensPorBotao": {
      "1": "assets/aa_1780517982964.jpg"
    }
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/6xgXeah72hKqQCdY6"
    },
    {
      "tipoAcao": "PopupImagem",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "assets/aa_1780517982964.jpg"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Playfair+Display:wght@400;500;600&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n:root{\n  --red:#7a0f1d;\n  --gold:#d4af37;\n  --light:#fffdf9;\n  --ink:#3a0c14;\n}\n\n*{box-sizing:border-box;margin:0;padding:0}\n\n/* BACKGROUND */\n.royal-wrap{\n  position:relative;\n  display:flex;\n  justify-content:center;\n  padding:40px 16px;\n  overflow:hidden;\n  background:\n    radial-gradient(circle at top, rgba(212,175,55,.25), transparent 40%),\n    radial-gradient(circle at bottom, rgba(122,15,29,.25), transparent 50%),\n    linear-gradient(180deg,#fffdf9,#f8f1ea);\n  font-family:\"Playfair Display\",serif;\n}\n\n/* PETALS */\n.petal{\n  position:absolute;\n  width:10px;height:10px;\n  border-radius:50%;\n  background:radial-gradient(circle,#fff,rgba(212,175,55,.6));\n  opacity:.7;\n  animation:fall linear infinite;\n}\n\n@keyframes fall{\n  0%{transform:translateY(-20px) translateX(0);opacity:0}\n  20%{opacity:.8}\n  50%{transform:translateY(50vh) translateX(25px)}\n  100%{transform:translateY(110vh) translateX(-20px);opacity:0}\n}\n\n/* CARD */\n.royal-card{\n  width:100%;\n  max-width:440px;\n  padding:34px 26px 30px;\n  border-radius:28px;\n  background:linear-gradient(160deg, rgba(255,255,255,.92), rgba(255,255,255,.75));\n  border:1px solid rgba(212,175,55,.35);\n  backdrop-filter:blur(14px);\n  box-shadow:\n    0 25px 70px rgba(122,15,29,.18),\n    inset 0 1px 0 rgba(255,255,255,.9);\n  position:relative;\n  z-index:2;\n  overflow:hidden;\n}\n\n/* GOLD SHINE */\n.royal-card::before{\n  content:\"\";\n  position:absolute;\n  top:0;left:-100%;\n  width:100%;height:100%;\n  background:linear-gradient(120deg,transparent,rgba(212,175,55,.25),transparent);\n  animation:shine 6s infinite;\n}\n\n@keyframes shine{\n  0%{left:-100%}\n  60%{left:100%}\n  100%{left:100%}\n}\n\n/* TITLE */\n.royal-title{\n  font-family:\"Cinzel\",serif;\n  font-size:28px;\n  text-align:center;\n  margin-bottom:14px;\n  background:linear-gradient(120deg,var(--red),var(--gold),#fff);\n  -webkit-background-clip:text;\n  -webkit-text-fill-color:transparent;\n}\n\n/* DIVIDER */\n.royal-divider{\n  width:90px;\n  height:2px;\n  margin:0 auto 26px;\n  background:linear-gradient(90deg,var(--red),var(--gold));\n  border-radius:999px;\n}\n\n/* LIST */\n.royal-list{\n  display:flex;\n  flex-direction:column;\n  gap:16px;\n}\n\n.royal-item{\n  display:flex;\n  gap:14px;\n  padding:16px 18px;\n  border-radius:18px;\n  background:linear-gradient(140deg, rgba(212,175,55,.15), rgba(122,15,29,.08));\n  border:1px solid rgba(212,175,55,.25);\n  animation:fadeUp .7s ease both;\n}\n\n.royal-item:nth-child(1){animation-delay:.1s}\n.royal-item:nth-child(2){animation-delay:.2s}\n.royal-item:nth-child(3){animation-delay:.3s}\n.royal-item:nth-child(4){animation-delay:.4s}\n.royal-item:nth-child(5){animation-delay:.5s}\n\n@keyframes fadeUp{\n  from{opacity:0;transform:translateY(18px)}\n  to{opacity:1;transform:translateY(0)}\n}\n\n.royal-icon{\n  width:42px;height:42px;\n  border-radius:12px;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  background:linear-gradient(135deg,var(--gold),#fff);\n  color:var(--red);\n  font-size:16px;\n  flex-shrink:0;\n  box-shadow:0 6px 18px rgba(212,175,55,.35);\n}\n\n.royal-text{\n  font-size:15.5px;\n  line-height:1.6;\n  color:var(--ink);\n}\n\n/* FOOT */\n.royal-foot{\n  margin-top:26px;\n  text-align:center;\n  font-size:15.5px;\n  color:#5a1a24;\n}\n</style>\n\n<div class=\"royal-wrap\">\n\n  <!-- PETALS -->\n  <div class=\"petal\" style=\"left:12%;animation-duration:10s\"></div>\n  <div class=\"petal\" style=\"left:28%;animation-duration:13s\"></div>\n  <div class=\"petal\" style=\"left:55%;animation-duration:11s\"></div>\n  <div class=\"petal\" style=\"left:80%;animation-duration:15s\"></div>\n\n  <div class=\"royal-card\">\n\n    <div class=\"royal-title\">Manual do Convidado</div>\n    <div class=\"royal-divider\"></div>\n\n    <div class=\"royal-list\">\n\n      <div class=\"royal-item\">\n        <div class=\"royal-icon\"><i class=\"fa-solid fa-shirt\"></i></div>\n        <div class=\"royal-text\">Usar traje esporte fino!</div>\n      </div>\n\n      <div class=\"royal-item\">\n        <div class=\"royal-icon\"><i class=\"fa-solid fa-calendar-check\"></i></div>\n        <div class=\"royal-text\">Confirmar até dia 15/05/26!</div>\n      </div>\n\n      <div class=\"royal-item\">\n        <div class=\"royal-icon\"><i class=\"fa-solid fa-user-group\"></i></div>\n        <div class=\"royal-text\">Convidado não convida !</div>\n      </div>\n\n      <div class=\"royal-item\">\n        <div class=\"royal-icon\"><i class=\"fa-solid fa-crown\"></i></div>\n        <div class=\"royal-text\">Cores da aniversariante!</div>\n      </div>\n\n      <div class=\"royal-item\">\n        <div class=\"royal-icon\"><i class=\"fa-solid fa-palette\"></i></div>\n        <div class=\"royal-text\">Não usar vermelho e dourado!</div>\n      </div>\n\n    </div>\n\n    <div class=\"royal-foot\">\n      Uma celebração digna da realeza ✨\n    </div>\n\n  </div>\n</div>"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5551998349704",
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
    "lembrete": true
  },
  "config": {
    "exibirMarcaDagua": false,
    "cronometro": false,
    "buttonColor": "#340b0c",
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
