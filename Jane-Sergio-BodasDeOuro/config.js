window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Jane e Sérgio",
    "idade": 15,
    "data": "2026-07-24",
    "hora": "19:00",
    "endereco": ""
  },
  "convite": {
    "paletaCores": "",
    "tema": "",
    "musica": "assets/music_1780517887548.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Jane-Sergio-BodasDeOuro",
    "seo": {
      "pageTitle": "Bodas de Ouro | Jane e Sérgio",
      "ogTitle": "Você está convidado para celebrar nossas Bodas de Ouro!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1780517887548.jpg",
    "aberturaSlides": [
      "assets/slide1_1780517887548.mp4"
    ],
    "folhaVazia": "assets/folha_1780517887548.jpg",
    "folhaPreenchida": "assets/folha_1780517887548.jpg",
    "musica": "assets/music_1780517887548.mp3",
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/9uG8U2fJRYSwNKon8"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:wght@300;400;500;600&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n*{\n  box-sizing:border-box;\n  margin:0;\n  padding:0;\n}\n\n.gw-wrap{\n  position:relative;\n  padding:24px 18px;\n  font-family:'Cormorant Garamond',serif;\n}\n\n/* fundo elegante */\n.gw-card{\n  position:relative;\n  overflow:hidden;\n\n  background:\n    linear-gradient(\n      145deg,\n      #fffdf8,\n      #f8f4ea\n    );\n\n  border:1px solid rgba(212,175,55,.22);\n\n  border-radius:28px;\n\n  padding:28px 22px;\n\n  box-shadow:\n    0 10px 35px rgba(212,175,55,.08),\n    inset 0 1px 0 rgba(255,255,255,.8);\n\n  backdrop-filter:blur(8px);\n}\n\n/* brilho */\n.gw-card::before{\n  content:'';\n  position:absolute;\n  inset:0;\n\n  background:\n    radial-gradient(circle at top right,\n    rgba(212,175,55,.10),\n    transparent 45%);\n\n  pointer-events:none;\n}\n\n/* ornamentos */\n.gw-leaf{\n  position:absolute;\n  color:rgba(212,175,55,.16);\n  font-size:22px;\n}\n\n.gw-leaf.top{\n  top:16px;\n  right:18px;\n}\n\n.gw-leaf.bottom{\n  bottom:16px;\n  left:18px;\n  transform:rotate(180deg);\n}\n\n/* título */\n.gw-header{\n  position:relative;\n  z-index:2;\n  text-align:center;\n  margin-bottom:24px;\n}\n\n.gw-header span{\n  display:block;\n  font-size:12px;\n  letter-spacing:.25em;\n  text-transform:uppercase;\n  color:#bfa15b;\n  margin-bottom:8px;\n}\n\n.gw-header h2{\n  font-family:'Cinzel',serif;\n  font-size:25px;\n  color:#8b6b2e;\n  line-height:1.4;\n  letter-spacing:.06em;\n}\n\n.gw-header p{\n  margin-top:10px;\n  color:#8b7355;\n  font-size:16px;\n  line-height:1.6;\n}\n\n/* lista */\n.gw-list{\n  position:relative;\n  z-index:2;\n\n  display:grid;\n  gap:14px;\n}\n\n/* item */\n.gw-item{\n  display:flex;\n  align-items:center;\n  gap:14px;\n\n  padding:16px 18px;\n\n  border-radius:18px;\n\n  background:\n    linear-gradient(\n      145deg,\n      rgba(255,255,255,.92),\n      rgba(248,244,234,.85)\n    );\n\n  border:1px solid rgba(212,175,55,.12);\n\n  box-shadow:\n    0 4px 14px rgba(0,0,0,.03);\n\n  transition:.25s ease;\n}\n\n.gw-item:active{\n  transform:scale(.98);\n}\n\n/* ícone */\n.gw-icon{\n  width:46px;\n  height:46px;\n  border-radius:14px;\n\n  display:flex;\n  align-items:center;\n  justify-content:center;\n\n  background:\n    linear-gradient(\n      145deg,\n      rgba(212,175,55,.20),\n      rgba(255,255,255,.9)\n    );\n\n  color:#b8913f;\n  font-size:18px;\n\n  flex-shrink:0;\n}\n\n/* textos */\n.gw-title{\n  font-family:'Cinzel',serif;\n  font-size:13px;\n  letter-spacing:.12em;\n  text-transform:uppercase;\n  color:#9c7a36;\n  margin-bottom:3px;\n}\n\n.gw-text{\n  color:#7a6a4d;\n  font-size:16px;\n  line-height:1.5;\n}\n\n/* rodapé */\n.gw-footer{\n  position:relative;\n  z-index:2;\n\n  margin-top:24px;\n\n  text-align:center;\n\n  color:#9b8662;\n  font-size:16px;\n  line-height:1.7;\n  font-style:italic;\n}\n</style>\n\n<div class=\"gw-wrap\">\n\n  <div class=\"gw-card\">\n\n    <!-- ornamentos -->\n    <i class=\"fa-solid fa-leaf gw-leaf top\"></i>\n    <i class=\"fa-solid fa-leaf gw-leaf bottom\"></i>\n\n    <!-- cabeçalho -->\n    <div class=\"gw-header\">\n\n      <span>Bodas de Ouro</span>\n\n      <h2>\n        Lista de Presentes\n      </h2>\n\n      <p>\n        Para aqueles que desejarem nos presentear,<br>\n        deixamos abaixo algumas sugestões especiais ✨\n      </p>\n\n    </div>\n\n    <!-- lista -->\n    <div class=\"gw-list\">\n\n      <div class=\"gw-item\">\n\n        <div class=\"gw-icon\">\n          <i class=\"fa-solid fa-gift\"></i>\n        </div>\n\n        <div>\n          <div class=\"gw-title\">Riachuelo Home</div>\n\n          <div class=\"gw-text\">\n            Itens de casa, decoração e utilidades para o lar.\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"gw-item\">\n\n        <div class=\"gw-icon\">\n          <i class=\"fa-solid fa-champagne-glasses\"></i>\n        </div>\n\n        <div>\n          <div class=\"gw-title\">Camicado</div>\n\n          <div class=\"gw-text\">\n            Utensílios, mesa posta, decoração e presentes sofisticados.\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n    <!-- rodapé -->\n    <div class=\"gw-footer\">\n      O maior presente será celebrar este momento especial ao lado de vocês 💛\n    </div>\n\n  </div>\n\n</div>"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n\n.gw-wrap{\n  position:relative;\n  padding:28px 20px 24px;\n  overflow:hidden;\n  font-family:'Cormorant Garamond',Georgia,serif;\n}\n\n/* partículas douradas */\n.gw-spark{\n  position:absolute;\n  width:3px;height:3px;\n  border-radius:50%;\n  background:rgba(212,175,55,0.7);\n  animation:gwRise linear infinite;\n}\n@keyframes gwRise{\n  0%{transform:translateY(0);opacity:0}\n  20%{opacity:1}\n  100%{transform:translateY(-100px);opacity:0}\n}\n\n/* grid */\n.gw-grid{\n  display:grid;\n  gap:12px;\n  position:relative;\n  z-index:2;\n}\n\n/* card */\n.gw-card{\n  background:linear-gradient(140deg,rgba(212,175,55,.18),rgba(255,255,255,.08));\n  border:1px solid rgba(212,175,55,.35);\n  border-radius:18px;\n  padding:16px;\n  display:flex;\n  gap:14px;\n  backdrop-filter:blur(6px);\n  animation:gwFade .6s ease both;\n}\n\n@keyframes gwFade{\n  from{opacity:0;transform:translateY(12px)}\n  to{opacity:1;transform:translateY(0)}\n}\n\n/* icon */\n.gw-icon{\n  width:44px;height:44px;\n  border-radius:12px;\n  background:linear-gradient(145deg,rgba(212,175,55,.35),rgba(255,255,255,.2));\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  color:#fff;\n  font-size:16px;\n  flex-shrink:0;\n  box-shadow:0 0 12px rgba(212,175,55,.4);\n}\n\n/* textos */\n.gw-title{\n  font-family:'Cinzel',serif;\n  font-size:12px;\n  letter-spacing:.12em;\n  color:#f5d27a;\n  margin-bottom:4px;\n}\n\n.gw-text{\n  font-size:14px;\n  color:#fffaf0;\n  line-height:1.5;\n}\n\n.gw-text strong{\n  color:#fde68a;\n}\n\n/* estrelas */\n.gw-star{\n  position:absolute;\n  color:rgba(212,175,55,.6);\n  font-size:10px;\n  animation:gwStar 2.5s infinite;\n}\n@keyframes gwStar{\n  0%,100%{opacity:0;transform:scale(0)}\n  50%{opacity:1;transform:scale(1)}\n}\n</style>\n\n<div class=\"gw-wrap\">\n\n  <!-- estrelas -->\n  <i class=\"gw-star\" style=\"top:8%;left:6%;\">✦</i>\n  <i class=\"gw-star\" style=\"top:22%;right:10%;\">✧</i>\n  <i class=\"gw-star\" style=\"bottom:18%;left:10%;\">✦</i>\n  <i class=\"gw-star\" style=\"bottom:6%;right:14%;\">✧</i>\n\n  <div class=\"gw-grid\">\n\n    <div class=\"gw-card\">\n      <div class=\"gw-icon\"><i class=\"fa-solid fa-clock\"></i></div>\n      <div>\n        <div class=\"gw-title\">Pontualidade</div>\n        <div class=\"gw-text\">\n          Sua presença desde o início tornará este momento ainda mais especial.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"gw-card\">\n      <div class=\"gw-icon\"><i class=\"fa-solid fa-user-tie\"></i></div>\n      <div>\n        <div class=\"gw-title\">Traje</div>\n        <div class=\"gw-text\">\n          <strong>Esporte fino.</strong>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"gw-card\">\n      <div class=\"gw-icon\"><i class=\"fa-solid fa-calendar-check\"></i></div>\n      <div>\n        <div class=\"gw-title\">Confirmação</div>\n        <div class=\"gw-text\">\n          Caso não possa comparecer, pedimos a gentileza de avisar com antecedência.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"gw-card\">\n      <div class=\"gw-icon\"><i class=\"fa-solid fa-heart\"></i></div>\n      <div>\n        <div class=\"gw-title\">Celebração</div>\n        <div class=\"gw-text\">\n          Este é um momento de amor e gratidão. Celebre conosco com alegria e leveza.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"gw-card\">\n      <div class=\"gw-icon\"><i class=\"fa-solid fa-camera\"></i></div>\n      <div>\n        <div class=\"gw-title\">Registros</div>\n        <div class=\"gw-text\">\n          Aproveite para registrar momentos, sempre respeitando o trabalho dos fotógrafos.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"gw-card\">\n      <div class=\"gw-icon\"><i class=\"fa-solid fa-cake-candles\"></i></div>\n      <div>\n        <div class=\"gw-title\">Antes de partir</div>\n        <div class=\"gw-text\">\n          Não vá embora sem se despedir e compartilhar um momento à mesa conosco.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"gw-card\">\n      <div class=\"gw-icon\"><i class=\"fa-solid fa-star\"></i></div>\n      <div>\n        <div class=\"gw-title\">Gratidão</div>\n        <div class=\"gw-text\">\n          Sua presença é o maior presente para celebrar esta história de 50 anos.\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<script>\n(function(){\n  var wrap = document.querySelector('.gw-wrap');\n\n  for(var i=0;i<10;i++){\n    var s=document.createElement('div');\n    s.className='gw-spark';\n    s.style.left=(Math.random()*90)+'%';\n    s.style.bottom=(Math.random()*20)+'%';\n    s.style.animationDuration=(3+Math.random()*4)+'s';\n    s.style.animationDelay=(Math.random()*4)+'s';\n    wrap.appendChild(s);\n  }\n})();\n</script>"
    },
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "conteudo": "https://jovial-phoenix-a733a7.netlify.app/"
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
    "buttonColor": "#c99350",
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
