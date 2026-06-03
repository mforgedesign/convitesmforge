window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Maryanna",
    "idade": 15,
    "data": "",
    "hora": "18:00",
    "endereco": " Av Robert Kennedy 1750 Planalto"
  },
  "convite": {
    "paletaCores": "",
    "tema": "",
    "musica": "assets/music_1780517970219.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Maryanna15Anos",
    "seo": {
      "pageTitle": "Maryanna - 15 Anos",
      "ogTitle": "Você está convidado para os 15 anos da Maryanna!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1780517970219.jpg",
    "aberturaSlides": [
      "assets/slide1_1780517970219.mp4",
      "assets/slide2_1780517970219.mp4",
      "assets/slide3_1780517970219.png",
      "assets/slide4_1780517970219.mp4",
      "assets/slide5_1780517970219.png"
    ],
    "folhaVazia": "assets/folha_1780517970219.jpg",
    "folhaPreenchida": "assets/folha_1780517970219.jpg",
    "musica": "assets/music_1780517970219.mp3",
    "fotos": [],
    "popupImagensPorBotao": {
      "1": "assets/Maryanna  Convite Azul Serenity (3)_1780517970219.jpg"
    }
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/yPE2dFKt6qLRLA9L6"
    },
    {
      "tipoAcao": "PopupImagem",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "assets/Maryanna  Convite Azul Serenity (3)_1780517970219.jpg"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Cinzel:wght@400;500&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n:root{\n  --serenity:#a9c7e8;\n  --silver:#dfe6ee;\n  --ink:#2f3e4d;\n}\n\n*{box-sizing:border-box;margin:0;padding:0}\n\n.serenity-wrap{\n  position:relative;\n  display:flex;\n  justify-content:center;\n  padding:36px 14px;\n  overflow:hidden;\n  background:\n    radial-gradient(circle at top, rgba(169,199,232,.25), transparent 40%),\n    linear-gradient(180deg,#ffffff,#f5f9fc);\n  font-family:\"Playfair Display\",serif;\n}\n\n/* PETALS */\n.petal{\n  position:absolute;\n  width:10px;height:10px;\n  background:radial-gradient(circle,#fff,rgba(169,199,232,.6));\n  border-radius:50%;\n  opacity:.7;\n  animation:fall linear infinite;\n}\n\n@keyframes fall{\n  0%{transform:translateY(-20px) translateX(0);opacity:0}\n  15%{opacity:.8}\n  50%{transform:translateY(50vh) translateX(20px)}\n  100%{transform:translateY(110vh) translateX(-20px);opacity:0}\n}\n\n/* BUTTERFLY */\n.butterfly{\n  position:absolute;\n  width:26px;\n  opacity:.75;\n  animation:fly 18s linear infinite;\n}\n\n@keyframes fly{\n  0%{transform:translate(-10vw,60vh)}\n  50%{transform:translate(60vw,30vh)}\n  100%{transform:translate(110vw,50vh)}\n}\n\n/* CARD */\n.serenity-card{\n  width:100%;\n  max-width:440px;\n  padding:32px 24px;\n  border-radius:28px;\n  background:rgba(255,255,255,.75);\n  backdrop-filter:blur(18px);\n  border:1px solid rgba(207,214,223,.4);\n  box-shadow:0 25px 60px rgba(47,62,77,.12);\n  position:relative;\n  z-index:2;\n}\n\n/* TITLE */\n.serenity-title{\n  font-family:\"Cinzel\",serif;\n  font-size:26px;\n  text-align:center;\n  margin-bottom:14px;\n  background:linear-gradient(120deg,#2f3e4d,#a9c7e8,#cfd6df);\n  -webkit-background-clip:text;\n  -webkit-text-fill-color:transparent;\n}\n\n/* INTRO */\n.serenity-intro{\n  text-align:center;\n  font-size:15.5px;\n  line-height:1.7;\n  color:#4a5a6a;\n  margin-bottom:24px;\n}\n\n/* LIST */\n.serenity-list{\n  display:flex;\n  flex-direction:column;\n  gap:16px;\n}\n\n.serenity-item{\n  display:flex;\n  gap:14px;\n  padding:16px 18px;\n  border-radius:18px;\n  background:linear-gradient(140deg, rgba(169,199,232,.15), rgba(207,214,223,.15));\n  border:1px solid rgba(207,214,223,.35);\n  animation:fadeUp .7s ease both;\n}\n\n.serenity-item:nth-child(1){animation-delay:.1s}\n.serenity-item:nth-child(2){animation-delay:.2s}\n.serenity-item:nth-child(3){animation-delay:.3s}\n.serenity-item:nth-child(4){animation-delay:.4s}\n\n@keyframes fadeUp{\n  from{opacity:0;transform:translateY(15px)}\n  to{opacity:1;transform:translateY(0)}\n}\n\n.serenity-icon{\n  width:40px;height:40px;\n  border-radius:12px;\n  background:linear-gradient(135deg,var(--serenity),var(--silver));\n  display:flex;align-items:center;justify-content:center;\n  color:#fff;\n  flex-shrink:0;\n}\n\n.serenity-text{\n  font-size:15px;\n  line-height:1.6;\n  color:var(--ink);\n}\n\n/* FOOT */\n.serenity-foot{\n  margin-top:24px;\n  text-align:center;\n  font-size:15.5px;\n  line-height:1.7;\n  color:#4a5a6a;\n}\n</style>\n\n<div class=\"serenity-wrap\">\n\n  <!-- PETALS -->\n  <div class=\"petal\" style=\"left:12%;animation-duration:10s\"></div>\n  <div class=\"petal\" style=\"left:28%;animation-duration:13s\"></div>\n  <div class=\"petal\" style=\"left:55%;animation-duration:11s\"></div>\n  <div class=\"petal\" style=\"left:80%;animation-duration:15s\"></div>\n\n  <!-- BUTTERFLY -->\n  <svg class=\"butterfly\" viewBox=\"0 0 24 24\">\n    <path d=\"M12 12C8 2 2 6 6 12C2 18 8 22 12 12Z\" fill=\"#a9c7e8\"/>\n    <path d=\"M12 12C16 2 22 6 18 12C22 18 16 22 12 12Z\" fill=\"#dfe6ee\"/>\n  </svg>\n\n  <div class=\"serenity-card\">\n\n    <div class=\"serenity-title\">Manual do Convidado</div>\n\n    <div class=\"serenity-intro\">\n      Seja muito bem-vindo(a)!<br>\n      É uma alegria imensa contar com a sua presença.<br>\n      Preparamos este manual para que você se sinta confortável, bem informado(a) e aproveite cada momento do nosso evento.\n    </div>\n\n    <div class=\"serenity-list\">\n\n      <div class=\"serenity-item\">\n        <div class=\"serenity-icon\"><i class=\"fa-solid fa-user-group\"></i></div>\n        <div class=\"serenity-text\">Convidado não convida!</div>\n      </div>\n\n      <div class=\"serenity-item\">\n        <div class=\"serenity-icon\"><i class=\"fa-solid fa-shirt\"></i></div>\n        <div class=\"serenity-text\">\n          <strong>Traje:</strong> Para manter a harmonia visual do evento, não será permitido o uso da cor azul (em nenhuma tonalidade). Agradecemos a compreensão e colaboração de todos.\n        </div>\n      </div>\n\n      <div class=\"serenity-item\">\n        <div class=\"serenity-icon\"><i class=\"fa-solid fa-clock\"></i></div>\n        <div class=\"serenity-text\">\n          <strong>Pontualidade:</strong> A programação foi pensada com carinho e seguirá os horários previstos. Sua pontualidade é muito importante. Chegue com antecedência para aproveitar tudo com tranquilidade.\n        </div>\n      </div>\n\n      <div class=\"serenity-item\">\n        <div class=\"serenity-icon\"><i class=\"fa-solid fa-envelope\"></i></div>\n        <div class=\"serenity-text\">\n          <strong>Confirme sua presença!</strong> Por favor, confirme presença pelo menos 15 dias antes do evento. Confirmação deve ser enviada para Soares Cerimonial.\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"serenity-foot\">\n      Agradecemos por fazer parte deste momento tão especial. Esperamos que sua experiência seja leve, marcante e inesquecível! ✨💙.\n    </div>\n\n  </div>\n</div>"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5511953314247",
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
    "buttonColor": "#45aad7",
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
