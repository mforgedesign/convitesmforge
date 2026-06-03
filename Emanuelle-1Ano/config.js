window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Emanuelle",
    "idade": 1,
    "data": "",
    "hora": "18:00",
    "endereco": ""
  },
  "convite": {
    "paletaCores": "",
    "tema": "",
    "musica": "assets/music_1780517820806.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Emanuelle-1Ano",
    "seo": {
      "pageTitle": "Você recebeu um convite especial!",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1780517820806.jpg",
    "aberturaSlides": [
      "assets/slide1_1780517820806.mp4",
      "assets/slide2_1780517820806.mp4",
      "assets/slide3_1780517820806.jpg",
      "assets/slide4_1780517820806.mp4",
      "assets/slide5_1780517820806.jpg"
    ],
    "folhaVazia": "assets/folha_1780517820806.jpg",
    "folhaPreenchida": "assets/folha_1780517820806.jpg",
    "musica": "assets/music_1780517820806.mp3",
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/6peQaLVUK1LcAdKQA"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:wght@300;400;500;600&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n*{\n  margin:0;\n  padding:0;\n  box-sizing:border-box;\n}\n\n.lp-wrap{\n  position:relative;\n  overflow:hidden;\n  padding:28px 18px 30px;\n  border-radius:28px;\n  background:\n  linear-gradient(160deg,#fefefe 0%,#f5f8ff 30%,#ffeef5 65%,#ffffff 100%);\n  font-family:'Cormorant Garamond',serif;\n}\n\n/* decoração */\n.lp-circle{\n  position:absolute;\n  border-radius:50%;\n  filter:blur(2px);\n  opacity:.18;\n  pointer-events:none;\n}\n\n.lp-circle.one{\n  width:180px;\n  height:180px;\n  background:#8fc7ff;\n  top:-70px;\n  left:-60px;\n}\n\n.lp-circle.two{\n  width:160px;\n  height:160px;\n  background:#ffb8d2;\n  bottom:-60px;\n  right:-50px;\n}\n\n.lp-circle.three{\n  width:100px;\n  height:100px;\n  background:#b8e1ff;\n  top:45%;\n  right:-25px;\n}\n\n.lp-header{\n  position:relative;\n  z-index:2;\n  text-align:center;\n  margin-bottom:24px;\n}\n\n.lp-header h2{\n  font-family:'Cinzel',serif;\n  font-size:24px;\n  color:#5d7fb7;\n  letter-spacing:.12em;\n  margin-bottom:6px;\n}\n\n.lp-header p{\n  color:#d87da0;\n  font-size:15px;\n  font-style:italic;\n}\n\n.lp-grid{\n  display:grid;\n  gap:12px;\n  position:relative;\n  z-index:2;\n}\n\n.lp-card{\n  display:flex;\n  align-items:flex-start;\n  gap:14px;\n  padding:16px;\n  border-radius:22px;\n  background:rgba(255,255,255,.75);\n  border:1px solid rgba(160,190,255,.18);\n  box-shadow:0 4px 18px rgba(130,150,200,.08);\n  backdrop-filter:blur(5px);\n  animation:fadeUp .45s ease both;\n}\n\n@keyframes fadeUp{\n  from{\n    opacity:0;\n    transform:translateY(12px);\n  }\n  to{\n    opacity:1;\n    transform:translateY(0);\n  }\n}\n\n.lp-icon{\n  width:48px;\n  height:48px;\n  border-radius:16px;\n  flex-shrink:0;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  background:linear-gradient(145deg,#8fc7ff,#ffb8d2);\n  color:#fff;\n  font-size:18px;\n  box-shadow:0 4px 12px rgba(150,170,220,.22);\n}\n\n.lp-title{\n  font-family:'Cinzel',serif;\n  font-size:11px;\n  text-transform:uppercase;\n  letter-spacing:.14em;\n  color:#7a97c7;\n  margin-bottom:4px;\n}\n\n.lp-text{\n  font-size:16px;\n  line-height:1.5;\n  color:#5b5b6d;\n}\n\n.lp-tip{\n  display:inline-block;\n  margin-top:6px;\n  padding:3px 11px;\n  border-radius:30px;\n  background:rgba(255,184,210,.18);\n  border:1px solid rgba(255,184,210,.25);\n  color:#c46f96;\n  font-size:13px;\n  font-style:italic;\n}\n\n/* estrelas */\n.lp-star{\n  position:absolute;\n  color:#ffd36b;\n  opacity:.7;\n  animation:twinkle 3s ease-in-out infinite;\n  z-index:1;\n}\n\n@keyframes twinkle{\n  0%,100%{opacity:.35;transform:scale(.9);}\n  50%{opacity:1;transform:scale(1.15);}\n}\n</style>\n\n<div class=\"lp-wrap\">\n\n  <div class=\"lp-circle one\"></div>\n  <div class=\"lp-circle two\"></div>\n  <div class=\"lp-circle three\"></div>\n\n  <i class=\"fa-solid fa-star lp-star\" style=\"top:22px;right:28px;font-size:14px;\"></i>\n  <i class=\"fa-solid fa-star lp-star\" style=\"bottom:30px;left:24px;font-size:12px;animation-delay:1s;\"></i>\n  <i class=\"fa-solid fa-star lp-star\" style=\"top:48%;left:10px;font-size:10px;animation-delay:2s;\"></i>\n\n  <div class=\"lp-header\">\n    <h2>Lista de Presentes</h2>\n    <p>Seu carinho fará parte desse momento tão especial 🩵🩷</p>\n  </div>\n\n  <div class=\"lp-grid\">\n\n    <div class=\"lp-card\" style=\"animation-delay:.05s\">\n      <div class=\"lp-icon\">\n        <i class=\"fa-solid fa-puzzle-piece\"></i>\n      </div>\n\n      <div>\n        <div class=\"lp-title\">Brinquedos</div>\n\n        <div class=\"lp-text\">\n          Brinquedos educativos, criativos e cheios de diversão ✨\n        </div>\n\n        <span class=\"lp-tip\">\n          ✦ Estímulo e aprendizado\n        </span>\n      </div>\n    </div>\n\n    <div class=\"lp-card\" style=\"animation-delay:.10s\">\n      <div class=\"lp-icon\">\n        <i class=\"fa-solid fa-shirt\"></i>\n      </div>\n\n      <div>\n        <div class=\"lp-title\">Roupinhas</div>\n\n        <div class=\"lp-text\">\n          Conjuntinhos, pijamas, vestidos e roupas confortáveis 🩷\n        </div>\n\n        <span class=\"lp-tip\">\n          ✦ Tamanho 2/3 anos\n        </span>\n      </div>\n    </div>\n\n    <div class=\"lp-card\" style=\"animation-delay:.15s\">\n      <div class=\"lp-icon\">\n        <i class=\"fa-solid fa-shoe-prints\"></i>\n      </div>\n\n      <div>\n        <div class=\"lp-title\">Calçados</div>\n\n        <div class=\"lp-text\">\n          Tênis, sandalinhas ou sapatinhos delicados 🩵\n        </div>\n\n        <span class=\"lp-tip\">\n          ✦ Número 22/23\n        </span>\n      </div>\n    </div>\n\n  </div>\n\n</div>"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:wght@300;400;500;600&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n*{\n  margin:0;\n  padding:0;\n  box-sizing:border-box;\n}\n\n.mg-wrap{\n  position:relative;\n  overflow:hidden;\n  padding:30px 20px;\n  border-radius:30px;\n  background:\n  linear-gradient(160deg,#ffffff 0%,#f4f8ff 35%,#ffeef6 70%,#ffffff 100%);\n  font-family:'Cormorant Garamond',serif;\n}\n\n/* círculos decorativos */\n.mg-circle{\n  position:absolute;\n  border-radius:50%;\n  opacity:.16;\n  filter:blur(3px);\n  pointer-events:none;\n}\n\n.mg-circle.one{\n  width:180px;\n  height:180px;\n  background:#8fc8ff;\n  top:-70px;\n  left:-70px;\n}\n\n.mg-circle.two{\n  width:150px;\n  height:150px;\n  background:#ffbdd5;\n  right:-50px;\n  bottom:-50px;\n}\n\n.mg-circle.three{\n  width:90px;\n  height:90px;\n  background:#c7e4ff;\n  top:45%;\n  right:-25px;\n}\n\n.mg-header{\n  position:relative;\n  z-index:2;\n  text-align:center;\n  margin-bottom:24px;\n}\n\n.mg-header h2{\n  font-family:'Cinzel',serif;\n  font-size:24px;\n  letter-spacing:.13em;\n  color:#6b8fc9;\n  margin-bottom:6px;\n}\n\n.mg-header p{\n  color:#d37fa0;\n  font-size:15px;\n  font-style:italic;\n}\n\n.mg-grid{\n  display:grid;\n  gap:14px;\n  position:relative;\n  z-index:2;\n}\n\n.mg-card{\n  display:flex;\n  align-items:flex-start;\n  gap:14px;\n  padding:18px;\n  border-radius:24px;\n  background:rgba(255,255,255,.76);\n  border:1px solid rgba(180,210,255,.20);\n  box-shadow:0 4px 18px rgba(120,150,210,.08);\n  backdrop-filter:blur(4px);\n  animation:fadeUp .45s ease both;\n}\n\n@keyframes fadeUp{\n  from{\n    opacity:0;\n    transform:translateY(12px);\n  }\n  to{\n    opacity:1;\n    transform:translateY(0);\n  }\n}\n\n.mg-icon{\n  width:50px;\n  height:50px;\n  border-radius:16px;\n  flex-shrink:0;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  background:linear-gradient(145deg,#8fc8ff,#ffbdd5);\n  color:#fff;\n  font-size:19px;\n  box-shadow:0 4px 14px rgba(150,170,220,.22);\n}\n\n.mg-title{\n  font-family:'Cinzel',serif;\n  font-size:12px;\n  text-transform:uppercase;\n  letter-spacing:.13em;\n  color:#7293c9;\n  margin-bottom:5px;\n}\n\n.mg-text{\n  font-size:17px;\n  line-height:1.65;\n  color:#5d5d6f;\n}\n\n/* estrelinhas */\n.mg-star{\n  position:absolute;\n  color:#ffd76e;\n  opacity:.75;\n  z-index:1;\n  animation:twinkle 3s ease-in-out infinite;\n}\n\n@keyframes twinkle{\n  0%,100%{\n    opacity:.35;\n    transform:scale(.9);\n  }\n  50%{\n    opacity:1;\n    transform:scale(1.12);\n  }\n}\n</style>\n\n<div class=\"mg-wrap\">\n\n  <div class=\"mg-circle one\"></div>\n  <div class=\"mg-circle two\"></div>\n  <div class=\"mg-circle three\"></div>\n\n  <i class=\"fa-solid fa-star mg-star\" style=\"top:20px;right:28px;font-size:13px;\"></i>\n  <i class=\"fa-solid fa-star mg-star\" style=\"bottom:30px;left:25px;font-size:11px;animation-delay:1s;\"></i>\n  <i class=\"fa-solid fa-star mg-star\" style=\"top:48%;left:8px;font-size:10px;animation-delay:2s;\"></i>\n\n  <div class=\"mg-header\">\n    <h2>Manual do Convidado</h2>\n    <p>Alguns detalhes especiais para aproveitarmos esse dia mágico juntos 🩵🩷</p>\n  </div>\n\n  <div class=\"mg-grid\">\n\n    <div class=\"mg-card\" style=\"animation-delay:.05s\">\n      <div class=\"mg-icon\">\n        <i class=\"fa-solid fa-clock\"></i>\n      </div>\n\n      <div>\n        <div class=\"mg-title\">Pontualidade</div>\n\n        <div class=\"mg-text\">\n          Sua presença desde o primeiro instante é fundamental para que não perca nenhum detalhe da nossa história. Por favor, chegue no horário combinado ⏰\n        </div>\n      </div>\n    </div>\n\n    <div class=\"mg-card\" style=\"animation-delay:.10s\">\n      <div class=\"mg-icon\">\n        <i class=\"fa-solid fa-calendar-check\"></i>\n      </div>\n\n      <div>\n        <div class=\"mg-title\">Confirmação</div>\n\n        <div class=\"mg-text\">\n          Para que possamos preparar tudo com perfeição e amor, pedimos a gentileza de confirmar sua presença até 15 dias antes do evento 📅\n        </div>\n      </div>\n    </div>\n\n    <div class=\"mg-card\" style=\"animation-delay:.15s\">\n      <div class=\"mg-icon\">\n        <i class=\"fa-solid fa-heart\"></i>\n      </div>\n\n      <div>\n        <div class=\"mg-title\">Celebre Conosco</div>\n\n        <div class=\"mg-text\">\n          Deixe a alegria guiar a sua noite! Estamos ansiosos para criar memórias inesquecíveis e celebrar este capítulo tão especial ao seu lado 💖\n        </div>\n      </div>\n    </div>\n\n    <div class=\"mg-card\" style=\"animation-delay:.20s\">\n      <div class=\"mg-icon\">\n        <i class=\"fa-solid fa-cake-candles\"></i>\n      </div>\n\n      <div>\n        <div class=\"mg-title\">Um Doce Encontro</div>\n\n        <div class=\"mg-text\">\n          Não se despeça sem nos presentear com um abraço apertado e saborear uma fatia do nosso bolo. Queremos compartilhar cada segundo de felicidade com você 🎂\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5521999461678",
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
    "buttonColor": "#559dfe",
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
