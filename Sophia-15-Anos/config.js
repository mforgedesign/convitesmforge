window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Sophia",
    "idade": 15,
    "data": "2026-08-28",
    "hora": "18:40",
    "endereco": ""
  },
  "convite": {
    "paletaCores": "Pink, Rosé e Prata",
    "tema": "Floral",
    "musica": "assets/music_1780518009803.mp3",
    "tipoAbertura": "curta",
    "particulasAbertura": true,
    "slug": "Sophia-15-Anos",
    "seo": {
      "pageTitle": "Sophia | 15 Anos",
      "ogTitle": "Você está convidado para os 15 anos da Sophia!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1780518009803.png",
    "aberturaSlides": [
      "assets/slide1_1780518009803.mp4"
    ],
    "folhaVazia": "assets/folha_1780518009803.jpg",
    "folhaPreenchida": "assets/folha_1780518009803.jpg",
    "musica": "assets/music_1780518009803.mp3",
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/khPuoMNesbWPnERv8"
    },
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Lista de Presentes",
      "icone": "fa-solid fa-gift",
      "conteudo": "https://presentes.mforge.com.br/sophia15anos"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.rm-wrap {\n  position: relative;\n  padding: 28px 20px 24px;\n  overflow: hidden;\n  font-family: 'Cormorant Garamond', Georgia, serif;\n}\n\n/* partículas */\n.rm-spark {\n  position: absolute;\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: rgba(255, 182, 193, 0.7);\n  animation: rmRise linear infinite;\n}\n\n@keyframes rmRise {\n  0% { transform: translateY(0); opacity: 0; }\n  20% { opacity: 1; }\n  100% { transform: translateY(-100px); opacity: 0; }\n}\n\n/* grid */\n.rm-grid {\n  display: grid;\n  gap: 12px;\n  position: relative;\n  z-index: 2;\n}\n\n/* card */\n.rm-card {\n  background: linear-gradient(140deg, rgba(255, 182, 193, .25), rgba(255, 255, 255, .1));\n  border: 1px solid rgba(255, 192, 203, .35);\n  border-radius: 18px;\n  padding: 16px;\n  display: flex;\n  gap: 14px;\n  backdrop-filter: blur(6px);\n  animation: rmFade .6s ease both;\n}\n\n@keyframes rmFade {\n  from { opacity: 0; transform: translateY(12px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n/* icon */\n.rm-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: linear-gradient(145deg, rgba(255, 105, 180, .3), rgba(192, 192, 192, .3));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 16px;\n  flex-shrink: 0;\n  box-shadow: 0 0 10px rgba(255, 105, 180, .3);\n}\n\n/* textos */\n.rm-title {\n  font-family: 'Cinzel', serif;\n  font-size: 12px;\n  letter-spacing: .12em;\n  color: #f9a8d4;\n  margin-bottom: 4px;\n}\n\n.rm-text {\n  font-size: 14px;\n  color: #fff1f2;\n  line-height: 1.45;\n}\n\n.rm-text strong {\n  color: #ffe4e6;\n}\n\n/* estrelas */\n.rm-star {\n  position: absolute;\n  color: rgba(255, 192, 203, .6);\n  font-size: 10px;\n  animation: rmStar 2.5s infinite;\n}\n\n@keyframes rmStar {\n  0%, 100% { opacity: 0; transform: scale(0); }\n  50% { opacity: 1; transform: scale(1); }\n}\n</style>\n\n<div class=\"rm-wrap\">\n\n  <!-- estrelas -->\n  <i class=\"rm-star\" style=\"top:8%; left:6%;\">✦</i>\n  <i class=\"rm-star\" style=\"top:20%; right:10%;\">✧</i>\n  <i class=\"rm-star\" style=\"bottom:18%; left:10%;\">✦</i>\n  <i class=\"rm-star\" style=\"bottom:6%; right:14%;\">✧</i>\n\n  <div class=\"rm-grid\">\n\n    <div class=\"rm-card\">\n      <div class=\"rm-icon\"><i class=\"fa-solid fa-clock\"></i></div>\n      <div>\n        <div class=\"rm-title\">Chegue no horário</div>\n        <div class=\"rm-text\">Sua presença pontual é muito importante para nós.</div>\n      </div>\n    </div>\n\n    <div class=\"rm-card\">\n      <div class=\"rm-icon\"><i class=\"fa-solid fa-calendar-check\"></i></div>\n      <div>\n        <div class=\"rm-title\">Confirmação de presença</div>\n        <div class=\"rm-text\">\n          Confirme sua presença até o dia <strong>15/07</strong>.<br>\n          <strong>A confirmação é obrigatória para acesso à festa.</strong>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"rm-card\">\n      <div class=\"rm-icon\"><i class=\"fa-solid fa-ban\"></i></div>\n      <div>\n        <div class=\"rm-title\">Cores reservadas</div>\n        <div class=\"rm-text\">\n          Para manter a harmonia da celebração, pedimos que não utilize\n          <strong>rosa ou prata</strong> em seu traje.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"rm-card\">\n      <div class=\"rm-icon\"><i class=\"fa-solid fa-user-tie\"></i></div>\n      <div>\n        <div class=\"rm-title\">Traje</div>\n        <div class=\"rm-text\">Esporte fino.</div>\n      </div>\n    </div>\n\n    <div class=\"rm-card\">\n      <div class=\"rm-icon\"><i class=\"fa-solid fa-champagne-glasses\"></i></div>\n      <div>\n        <div class=\"rm-title\">Celebre intensamente</div>\n        <div class=\"rm-text\">\n          Divirta-se ao máximo. Estamos ansiosos para celebrar este momento especial com você.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"rm-card\">\n      <div class=\"rm-icon\"><i class=\"fa-solid fa-cake-candles\"></i></div>\n      <div>\n        <div class=\"rm-title\">Antes de ir</div>\n        <div class=\"rm-text\">\n          Não vá embora sem nos dar um abraço e saborear um pedaço do bolo.\n          Queremos compartilhar cada instante com você.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"rm-card\">\n      <div class=\"rm-icon\"><i class=\"fa-solid fa-user-group\"></i></div>\n      <div>\n        <div class=\"rm-title\">Observação</div>\n        <div class=\"rm-text\">\n          <strong>O convite é pessoal e intransferível.</strong>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<script>\n(function(){\n  var wrap = document.querySelector('.rm-wrap');\n\n  for(var i = 0; i < 10; i++) {\n    var s = document.createElement('div');\n    s.className = 'rm-spark';\n    s.style.left = (Math.random() * 90) + '%';\n    s.style.bottom = (Math.random() * 20) + '%';\n    s.style.animationDuration = (3 + Math.random() * 4) + 's';\n    s.style.animationDelay = (Math.random() * 4) + 's';\n    wrap.appendChild(s);\n  }\n})();\n</script>"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5511990244780",
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
    "cronometro": true,
    "buttonColor": "#8c2c48",
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
