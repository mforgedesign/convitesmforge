window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Amanda Santana",
    "idade": 15,
    "data": "2026-05-30",
    "hora": "18:00",
    "endereco": ""
  },
  "convite": {
    "paletaCores": "",
    "tema": "",
    "musica": "assets/music_1780517672400.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Amanda15Anos",
    "seo": {
      "pageTitle": "Amanda Santana | 15 Anos",
      "ogTitle": "Você está convidado para os 15 anos da Amanda!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1780517672400.jpg",
    "aberturaSlides": [
      "assets/slide1_1780517672400.mp4"
    ],
    "folhaVazia": "assets/folha_1780517672400.jpg",
    "folhaPreenchida": "assets/folha_1780517672400.jpg",
    "musica": "assets/music_1780517672400.mp3",
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/P1XAYorSQ6X8rVBk7"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n\n.ag-wrap{\n  position:relative;\n  padding:28px 20px 24px;\n  overflow:hidden;\n  font-family:'Cormorant Garamond',Georgia,serif;\n}\n\n/* partículas lúdicas */\n.ag-spark{\n  position:absolute;\n  width:4px;height:4px;\n  border-radius:50%;\n  background:radial-gradient(circle,#93c5fd,#f9a8d4,#fde68a);\n  animation:agFloat linear infinite;\n}\n@keyframes agFloat{\n  0%{transform:translateY(0);opacity:0}\n  20%{opacity:1}\n  100%{transform:translateY(-110px);opacity:0}\n}\n\n/* grid */\n.ag-grid{\n  display:grid;\n  gap:12px;\n  position:relative;\n  z-index:2;\n}\n\n/* card */\n.ag-card{\n  background:linear-gradient(140deg,rgba(37,99,235,.28),rgba(255,255,255,.08));\n  border:1px solid rgba(147,197,253,.35);\n  border-radius:18px;\n  padding:16px;\n  display:flex;\n  gap:14px;\n  backdrop-filter:blur(6px);\n  animation:agFade .6s ease both;\n}\n\n@keyframes agFade{\n  from{opacity:0;transform:translateY(12px)}\n  to{opacity:1;transform:translateY(0)}\n}\n\n/* icon */\n.ag-icon{\n  width:44px;height:44px;\n  border-radius:12px;\n  background:linear-gradient(145deg,rgba(147,197,253,.4),rgba(236,72,153,.3));\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  color:#fff;\n  font-size:16px;\n  flex-shrink:0;\n  box-shadow:0 0 10px rgba(147,197,253,.4);\n}\n\n/* textos */\n.ag-title{\n  font-family:'Cinzel',serif;\n  font-size:12px;\n  letter-spacing:.12em;\n  color:#bfdbfe;\n  margin-bottom:4px;\n}\n\n.ag-text{\n  font-size:14px;\n  color:#eef2ff;\n  line-height:1.45;\n  word-break:break-word;\n}\n\n/* botão copiar */\n.ag-copy{\n  margin-top:8px;\n  display:inline-flex;\n  align-items:center;\n  gap:6px;\n  font-size:11px;\n  letter-spacing:.1em;\n  text-transform:uppercase;\n  color:#e0f2fe;\n  background:rgba(255,255,255,0.08);\n  border:1px solid rgba(147,197,253,.3);\n  padding:6px 10px;\n  border-radius:10px;\n  cursor:pointer;\n}\n\n.ag-copy:active{\n  transform:scale(.95);\n  background:rgba(255,255,255,0.18);\n}\n\n/* estrelas */\n.ag-star{\n  position:absolute;\n  font-size:10px;\n  color:#93c5fd;\n  animation:agStar 2.5s infinite;\n}\n@keyframes agStar{\n  0%,100%{opacity:0;transform:scale(0)}\n  50%{opacity:1;transform:scale(1)}\n}\n</style>\n\n<div class=\"ag-wrap\">\n\n  <!-- elementos decorativos -->\n  <i class=\"ag-star\" style=\"top:10%;left:6%;\">♣</i>\n  <i class=\"ag-star\" style=\"top:22%;right:10%;\">♦</i>\n  <i class=\"ag-star\" style=\"bottom:18%;left:10%;\">♥</i>\n  <i class=\"ag-star\" style=\"bottom:6%;right:14%;\">♠</i>\n\n  <div class=\"ag-grid\">\n\n    <div class=\"ag-card\">\n      <div class=\"ag-icon\"><i class=\"fa-solid fa-shoe-prints\"></i></div>\n      <div>\n        <div class=\"ag-title\">Calçados</div>\n        <div class=\"ag-text\">Numeração 36/37</div>\n      </div>\n    </div>\n\n    <div class=\"ag-card\">\n      <div class=\"ag-icon\"><i class=\"fa-solid fa-wand-magic-sparkles\"></i></div>\n      <div>\n        <div class=\"ag-title\">Maquiagem</div>\n        <div class=\"ag-text\">Itens diversos</div>\n      </div>\n    </div>\n\n    <div class=\"ag-card\">\n      <div class=\"ag-icon\"><i class=\"fa-regular fa-gem\"></i></div>\n      <div>\n        <div class=\"ag-title\">Joias</div>\n        <div class=\"ag-text\">Prata ou dourado, com estilo delicado</div>\n      </div>\n    </div>\n\n    <!-- PIX -->\n    <div class=\"ag-card\">\n      <div class=\"ag-icon\"><i class=\"fa-solid fa-qrcode\"></i></div>\n      <div>\n        <div class=\"ag-title\">Presente em Pix</div>\n        <div class=\"ag-text\">\n00020101021126330014br.gov.bcb.pix0111131745656425204000053039865802BR5921AMANDA SANTANA COELHO6008CONTAGEM62070503***63043031\n        </div>\n\n        <div class=\"ag-copy\" onclick=\"copyPixAlice()\">\n          Copiar código Pix <i class=\"fa-regular fa-copy\"></i>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<script>\n(function(){\n  var wrap = document.querySelector('.ag-wrap');\n\n  for(var i=0;i<12;i++){\n    var s=document.createElement('div');\n    s.className='ag-spark';\n    s.style.left=(Math.random()*90)+'%';\n    s.style.bottom=(Math.random()*20)+'%';\n    s.style.animationDuration=(3+Math.random()*4)+'s';\n    s.style.animationDelay=(Math.random()*4)+'s';\n    wrap.appendChild(s);\n  }\n})();\n\nfunction copyPixAlice(){\n  navigator.clipboard.writeText(`00020101021126330014br.gov.bcb.pix0111131745656425204000053039865802BR5921AMANDA SANTANA COELHO6008CONTAGEM62070503***63043031`);\n  alert('Código Pix copiado!');\n}\n</script>"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n\n.am-wrap{\n  position:relative;\n  padding:28px 20px 24px;\n  overflow:hidden;\n  font-family:'Cormorant Garamond',Georgia,serif;\n}\n\n/* partículas mágicas */\n.am-spark{\n  position:absolute;\n  width:4px;height:4px;\n  border-radius:50%;\n  background:radial-gradient(circle,#93c5fd,#f9a8d4,#fde68a);\n  animation:amFloat linear infinite;\n}\n@keyframes amFloat{\n  0%{transform:translateY(0);opacity:0}\n  20%{opacity:1}\n  100%{transform:translateY(-110px);opacity:0}\n}\n\n/* grid */\n.am-grid{\n  display:grid;\n  gap:12px;\n  position:relative;\n  z-index:2;\n}\n\n/* card */\n.am-card{\n  background:linear-gradient(140deg,rgba(37,99,235,.28),rgba(255,255,255,.08));\n  border:1px solid rgba(147,197,253,.35);\n  border-radius:18px;\n  padding:16px;\n  display:flex;\n  gap:14px;\n  backdrop-filter:blur(6px);\n  animation:amFade .6s ease both;\n}\n\n@keyframes amFade{\n  from{opacity:0;transform:translateY(12px)}\n  to{opacity:1;transform:translateY(0)}\n}\n\n/* icon */\n.am-icon{\n  width:44px;height:44px;\n  border-radius:12px;\n  background:linear-gradient(145deg,rgba(147,197,253,.4),rgba(236,72,153,.3));\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  color:#fff;\n  font-size:16px;\n  flex-shrink:0;\n  box-shadow:0 0 10px rgba(147,197,253,.4);\n}\n\n/* textos */\n.am-title{\n  font-family:'Cinzel',serif;\n  font-size:12px;\n  letter-spacing:.12em;\n  color:#bfdbfe;\n  margin-bottom:4px;\n}\n\n.am-text{\n  font-size:14px;\n  color:#eef2ff;\n  line-height:1.45;\n}\n\n/* elementos temáticos */\n.am-star{\n  position:absolute;\n  font-size:10px;\n  color:#93c5fd;\n  animation:amStar 2.5s infinite;\n}\n@keyframes amStar{\n  0%,100%{opacity:0;transform:scale(0)}\n  50%{opacity:1;transform:scale(1)}\n}\n</style>\n\n<div class=\"am-wrap\">\n\n  <!-- símbolos alice -->\n  <i class=\"am-star\" style=\"top:10%;left:6%;\">♣</i>\n  <i class=\"am-star\" style=\"top:22%;right:10%;\">♦</i>\n  <i class=\"am-star\" style=\"bottom:18%;left:10%;\">♥</i>\n  <i class=\"am-star\" style=\"bottom:6%;right:14%;\">♠</i>\n\n  <div class=\"am-grid\">\n\n    <div class=\"am-card\">\n      <div class=\"am-icon\"><i class=\"fa-solid fa-clock\"></i></div>\n      <div>\n        <div class=\"am-title\">Chegue no horário</div>\n        <div class=\"am-text\">\n          Sua presença pontual é muito importante para nós.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"am-card\">\n      <div class=\"am-icon\"><i class=\"fa-solid fa-calendar-check\"></i></div>\n      <div>\n        <div class=\"am-title\">Confirmação de presença</div>\n        <div class=\"am-text\">\n          Por favor, confirme sua presença com pelo menos 15 dias de antecedência.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"am-card\">\n      <div class=\"am-icon\"><i class=\"fa-solid fa-champagne-glasses\"></i></div>\n      <div>\n        <div class=\"am-title\">Celebre intensamente</div>\n        <div class=\"am-text\">\n          Divirta-se bastante. Estamos ansiosos para celebrar este momento especial com você.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"am-card\">\n      <div class=\"am-icon\"><i class=\"fa-solid fa-cake-candles\"></i></div>\n      <div>\n        <div class=\"am-title\">Antes de partir</div>\n        <div class=\"am-text\">\n          Não vá embora sem nos dar um abraço e saborear um pedaço do bolo. \n          Queremos compartilhar cada instante com você.\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<script>\n(function(){\n  var wrap = document.querySelector('.am-wrap');\n\n  for(var i=0;i<12;i++){\n    var s=document.createElement('div');\n    s.className='am-spark';\n    s.style.left=(Math.random()*90)+'%';\n    s.style.bottom=(Math.random()*20)+'%';\n    s.style.animationDuration=(3+Math.random()*4)+'s';\n    s.style.animationDelay=(Math.random()*4)+'s';\n    wrap.appendChild(s);\n  }\n})();\n</script>"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5531994693224",
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
    "buttonColor": "#0c2b71",
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
