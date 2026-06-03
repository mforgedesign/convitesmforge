window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Bella",
    "idade": 5,
    "data": "2026-06-07",
    "hora": "18:30",
    "endereco": ""
  },
  "convite": {
    "paletaCores": "",
    "tema": "",
    "musica": "assets/music_1780517778594.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Bella5Anos",
    "seo": {
      "pageTitle": "Bella | 5 Anos",
      "ogTitle": "Você está convidado para os 15 anos da Bella!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1780517778594.png",
    "aberturaSlides": [
      "assets/slide1_1780517778594.mp4"
    ],
    "folhaVazia": "assets/folha_1780517778594.jpg",
    "folhaPreenchida": "assets/folha_1780517778594.jpg",
    "musica": "assets/music_1780517778594.mp3",
    "fotos": [],
    "popupImagensPorBotao": {
      "1": "assets/Bella 5 Anos Princesa Tiana (4)_1780517778594.jpg"
    }
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/sCj5wJj3vzVoC14o8"
    },
    {
      "tipoAcao": "PopupImagem",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "assets/Bella 5 Anos Princesa Tiana (4)_1780517778594.jpg"
    },
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "conteudo": "https://forms.gle/7xoiVuF43VBiZVtK6"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:wght@300;400;500;600&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n* { box-sizing: border-box; margin: 0; padding: 0; }\n\n.tm-wrap {\n  position: relative;\n  padding: 30px 20px 26px;\n  overflow: hidden;\n  font-family: 'Cormorant Garamond', serif;\n}\n\n/* brilho ambiente */\n.tm-glow {\n  position: absolute;\n  inset: -40%;\n  background: radial-gradient(circle at center, rgba(212,175,55,.12), transparent 65%);\n  animation: tmGlow 8s ease-in-out infinite;\n  pointer-events: none;\n}\n\n@keyframes tmGlow {\n  0%, 100% { opacity: .4; transform: scale(1); }\n  50% { opacity: .8; transform: scale(1.12); }\n}\n\n/* vagalumes */\n.tm-firefly {\n  position: absolute;\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: #facc15;\n  box-shadow: 0 0 12px rgba(250,204,21,.8);\n  animation: tmFly linear infinite;\n}\n\n@keyframes tmFly {\n  0% { transform: translateY(0) scale(.3); opacity: 0; }\n  20% { opacity: 1; }\n  100% { transform: translateY(-120px) translateX(12px) scale(1); opacity: 0; }\n}\n\n/* título */\n.tm-header {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  margin-bottom: 22px;\n}\n\n.tm-crown {\n  font-size: 24px;\n  margin-bottom: 8px;\n  color: #f5d27a;\n  text-shadow: 0 0 12px rgba(212,175,55,.4);\n}\n\n.tm-title {\n  font-family: 'Cinzel', serif;\n  font-size: 22px;\n  line-height: 1.4;\n  color: #fff8dc;\n  letter-spacing: .08em;\n}\n\n.tm-sub {\n  margin-top: 8px;\n  font-size: 15px;\n  color: #d6f5d0;\n}\n\n/* cards */\n.tm-grid {\n  display: grid;\n  gap: 12px;\n  position: relative;\n  z-index: 2;\n}\n\n.tm-card {\n  display: flex;\n  gap: 14px;\n  padding: 16px;\n  border-radius: 20px;\n  background: linear-gradient(145deg, rgba(22,101,52,.32), rgba(255,248,220,.08));\n  border: 1px solid rgba(212,175,55,.28);\n  backdrop-filter: blur(7px);\n  -webkit-backdrop-filter: blur(7px);\n  animation: tmFade .6s ease both;\n  box-shadow: inset 0 0 12px rgba(255,255,255,.03), 0 0 20px rgba(0,0,0,.08);\n}\n\n@keyframes tmFade {\n  from { opacity: 0; transform: translateY(14px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n/* ícone */\n.tm-icon {\n  width: 46px;\n  height: 46px;\n  border-radius: 14px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(145deg, rgba(212,175,55,.35), rgba(22,101,52,.4));\n  color: #fff6cf;\n  font-size: 17px;\n  box-shadow: 0 0 15px rgba(212,175,55,.18);\n}\n\n/* textos */\n.tm-card-title {\n  font-family: 'Cinzel', serif;\n  font-size: 12px;\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: #f5d27a;\n  margin-bottom: 4px;\n}\n\n.tm-card-text {\n  font-size: 15px;\n  line-height: 1.55;\n  color: #f8faf5;\n}\n\n.tm-card-text strong {\n  color: #fde68a;\n}\n\n/* versículo */\n.tm-verse {\n  position: relative;\n  z-index: 2;\n  margin-top: 18px;\n  padding: 18px;\n  border-radius: 22px;\n  text-align: center;\n  background: linear-gradient(145deg, rgba(255,248,220,.08), rgba(22,101,52,.22));\n  border: 1px solid rgba(212,175,55,.24);\n}\n\n.tm-verse p {\n  color: #fff8dc;\n  font-size: 16px;\n  line-height: 1.7;\n  font-style: italic;\n}\n\n.tm-sign {\n  margin-top: 12px;\n  color: #f5d27a;\n  font-size: 15px;\n}\n\n/* estrelas */\n.tm-star {\n  position: absolute;\n  color: rgba(250,204,21,.5);\n  font-size: 10px;\n  animation: tmStar 3s ease-in-out infinite;\n}\n\n@keyframes tmStar {\n  0%, 100% { opacity: 0; transform: scale(0); }\n  50% { opacity: 1; transform: scale(1); }\n}\n</style>\n\n<div class=\"tm-wrap\">\n\n  <div class=\"tm-glow\"></div>\n\n  <!-- estrelas -->\n  <i class=\"tm-star\" style=\"top:8%;left:6%;\">✦</i>\n  <i class=\"tm-star\" style=\"top:18%;right:8%;\">✧</i>\n  <i class=\"tm-star\" style=\"bottom:16%;left:12%;\">✦</i>\n  <i class=\"tm-star\" style=\"bottom:8%;right:14%;\">✧</i>\n\n  <!-- cabeçalho -->\n  <div class=\"tm-header\">\n    <div class=\"tm-crown\">👑🐸</div>\n\n    <div class=\"tm-title\">\n      Manual Real da<br>\n      Princesa Bella\n    </div>\n\n    <div class=\"tm-sub\">\n      Uma noite encantada espera por você ✨\n    </div>\n  </div>\n\n  <!-- cards -->\n  <div class=\"tm-grid\">\n\n    <div class=\"tm-card\">\n      <div class=\"tm-icon\">\n        <i class=\"fa-solid fa-calendar-check\"></i>\n      </div>\n\n      <div>\n        <div class=\"tm-card-title\">Confirmação</div>\n\n        <div class=\"tm-card-text\">\n          Confirme sua presença até o dia\n          <strong>16/05/2026</strong>.\n          O acesso ao evento será realizado mediante lista de confirmação dos convidados.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"tm-card\">\n      <div class=\"tm-icon\">\n        <i class=\"fa-solid fa-crown\"></i>\n      </div>\n\n      <div>\n        <div class=\"tm-card-title\">Celebração</div>\n\n        <div class=\"tm-card-text\">\n          Nossa celebração foi preparada com muito carinho para cada convidado especial.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"tm-card\">\n      <div class=\"tm-icon\">\n        <i class=\"fa-solid fa-wand-magic-sparkles\"></i>\n      </div>\n\n      <div>\n        <div class=\"tm-card-title\">Encanto</div>\n\n        <div class=\"tm-card-text\">\n          Vista seu melhor sorriso e prepare-se para uma noite cheia de encanto e momentos inesquecíveis.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"tm-card\">\n      <div class=\"tm-icon\">\n        <i class=\"fa-solid fa-camera\"></i>\n      </div>\n\n      <div>\n        <div class=\"tm-card-title\">Registros</div>\n\n        <div class=\"tm-card-text\">\n          Faça muitos registros deste dia encantado e compartilhe nossos momentos especiais.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"tm-card\">\n      <div class=\"tm-icon\">\n        <i class=\"fa-solid fa-champagne-glasses\"></i>\n      </div>\n\n      <div>\n        <div class=\"tm-card-title\">Divirta-se</div>\n\n        <div class=\"tm-card-text\">\n          Aproveite cada instante e celebre conosco esta noite tão especial.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"tm-card\">\n      <div class=\"tm-icon\">\n        <i class=\"fa-solid fa-gift\"></i>\n      </div>\n\n      <div>\n        <div class=\"tm-card-title\">Presença</div>\n\n        <div class=\"tm-card-text\">\n          Sua presença já é o maior presente para a Bella 💖\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <!-- versículo -->\n  <div class=\"tm-verse\">\n    <p>\n      “Grandes coisas fez o Senhor por nós,\n      e por isso estamos alegres.”\n      <br>\n      Salmos 126:3\n    </p>\n\n    <div class=\"tm-sign\">\n      Com carinho,<br>\n      Princesa Bella e sua família 👑\n    </div>\n  </div>\n\n</div>\n\n<script>\n(function(){\n  const wrap = document.querySelector('.tm-wrap');\n\n  for(let i=0; i<14; i++){\n    const fire = document.createElement('div');\n    fire.className = 'tm-firefly';\n\n    const size = 2 + Math.random() * 4;\n    fire.style.width = size + 'px';\n    fire.style.height = size + 'px';\n\n    fire.style.left = (Math.random() * 100) + '%';\n    fire.style.bottom = (Math.random() * 25) + '%';\n\n    fire.style.animationDuration = (4 + Math.random() * 6) + 's';\n    fire.style.animationDelay = (Math.random() * 5) + 's';\n\n    wrap.appendChild(fire);\n  }\n})();\n</script>"
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
    "buttonColor": "#a1c9b2",
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
