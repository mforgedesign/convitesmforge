window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Antonella",
    "idade": 1,
    "data": "2026-06-20",
    "hora": "18:00",
    "endereco": ""
  },
  "convite": {
    "paletaCores": "",
    "tema": "",
    "musica": "assets/music_1780517759365.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Antonella1Ano",
    "seo": {
      "pageTitle": "Antonella | 1 Ano",
      "ogTitle": "Você está convidado para o 1 aninho da Antonella!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1780517759365.jpg",
    "aberturaSlides": [
      "assets/slide1_1780517759365.mp4"
    ],
    "folhaVazia": "assets/folha_1780517759365.jpg",
    "folhaPreenchida": "assets/folha_1780517759365.jpg",
    "musica": "assets/music_1780517759365.mp3",
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/JSDt6ZcbyWMZVwZ7A"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:wght@300;400;500;600&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n\n.rk-wrap{\n  position:relative;\n  padding:30px 20px 24px;\n  overflow:hidden;\n  font-family:'Cormorant Garamond',serif;\n}\n\n/* brilho suave */\n.rk-glow{\n  position:absolute;\n  inset:-40%;\n  background:\n    radial-gradient(circle at center,\n    rgba(251,182,206,.18),\n    transparent 65%);\n  animation:rkGlow 8s ease-in-out infinite;\n  pointer-events:none;\n}\n\n@keyframes rkGlow{\n  0%,100%{\n    opacity:.45;\n    transform:scale(1);\n  }\n  50%{\n    opacity:.9;\n    transform:scale(1.12);\n  }\n}\n\n/* partículas */\n.rk-particle{\n  position:absolute;\n  width:4px;\n  height:4px;\n  border-radius:50%;\n  background:#fde68a;\n  box-shadow:0 0 10px rgba(255,255,255,.45);\n  animation:rkFloat linear infinite;\n}\n\n@keyframes rkFloat{\n  0%{\n    transform:translateY(0) scale(.3);\n    opacity:0;\n  }\n  20%{opacity:1}\n  100%{\n    transform:translateY(-120px) scale(1);\n    opacity:0;\n  }\n}\n\n/* grid */\n.rk-grid{\n  display:grid;\n  gap:12px;\n  position:relative;\n  z-index:2;\n}\n\n/* card */\n.rk-card{\n  display:flex;\n  gap:14px;\n  padding:16px;\n  border-radius:22px;\n\n  background:\n    linear-gradient(\n      145deg,\n      rgba(251,182,206,.22),\n      rgba(255,255,255,.08)\n    );\n\n  border:1px solid rgba(255,228,230,.28);\n\n  backdrop-filter:blur(8px);\n  -webkit-backdrop-filter:blur(8px);\n\n  animation:rkFade .6s ease both;\n\n  box-shadow:\n    inset 0 0 15px rgba(255,255,255,.03),\n    0 0 22px rgba(251,182,206,.10);\n}\n\n@keyframes rkFade{\n  from{\n    opacity:0;\n    transform:translateY(12px);\n  }\n  to{\n    opacity:1;\n    transform:translateY(0);\n  }\n}\n\n/* ícone */\n.rk-icon{\n  width:48px;\n  height:48px;\n  border-radius:16px;\n  flex-shrink:0;\n\n  display:flex;\n  align-items:center;\n  justify-content:center;\n\n  background:\n    linear-gradient(\n      145deg,\n      rgba(251,182,206,.35),\n      rgba(212,175,55,.30)\n    );\n\n  color:#fff8f5;\n  font-size:18px;\n\n  box-shadow:\n    0 0 18px rgba(251,182,206,.20);\n}\n\n/* textos */\n.rk-title{\n  font-family:'Cinzel',serif;\n  font-size:12px;\n  letter-spacing:.14em;\n  text-transform:uppercase;\n  color:#ffe4e6;\n  margin-bottom:4px;\n}\n\n.rk-text{\n  font-size:15px;\n  line-height:1.55;\n  color:#fff7f7;\n}\n\n/* cabeçalho */\n.rk-header{\n  position:relative;\n  z-index:2;\n  text-align:center;\n  margin-bottom:18px;\n}\n\n.rk-header h2{\n  font-family:'Cinzel',serif;\n  font-size:22px;\n  color:#fff1f2;\n  letter-spacing:.08em;\n  margin-bottom:6px;\n}\n\n.rk-header p{\n  color:#ffe4e6;\n  font-size:15px;\n}\n\n/* estrelas */\n.rk-star{\n  position:absolute;\n  color:rgba(253,224,71,.55);\n  font-size:10px;\n  animation:rkStar 3s ease-in-out infinite;\n}\n\n@keyframes rkStar{\n  0%,100%{\n    opacity:0;\n    transform:scale(0);\n  }\n  50%{\n    opacity:1;\n    transform:scale(1);\n  }\n}\n</style>\n\n<div class=\"rk-wrap\">\n\n  <div class=\"rk-glow\"></div>\n\n  <!-- estrelas -->\n  <i class=\"rk-star\" style=\"top:8%;left:6%;\">✦</i>\n  <i class=\"rk-star\" style=\"top:18%;right:8%;\">✧</i>\n  <i class=\"rk-star\" style=\"bottom:16%;left:10%;\">✦</i>\n  <i class=\"rk-star\" style=\"bottom:8%;right:14%;\">✧</i>\n\n  <!-- título -->\n  <div class=\"rk-header\">\n    <h2>Sugestão de Presentes</h2>\n    <p>Escolhidos com carinho 💖</p>\n  </div>\n\n  <div class=\"rk-grid\">\n\n    <div class=\"rk-card\">\n      <div class=\"rk-icon\">\n        <i class=\"fa-solid fa-shirt\"></i>\n      </div>\n\n      <div>\n        <div class=\"rk-title\">Roupinhas</div>\n\n        <div class=\"rk-text\">\n          Tamanho 2 anos.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"rk-card\">\n      <div class=\"rk-icon\">\n        <i class=\"fa-solid fa-shoe-prints\"></i>\n      </div>\n\n      <div>\n        <div class=\"rk-title\">Calçados</div>\n\n        <div class=\"rk-text\">\n          Numeração 18, 19 ou 20.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"rk-card\">\n      <div class=\"rk-icon\">\n        <i class=\"fa-solid fa-puzzle-piece\"></i>\n      </div>\n\n      <div>\n        <div class=\"rk-title\">Brinquedos</div>\n\n        <div class=\"rk-text\">\n          Brinquedos didáticos, com luzes ou bonecas encantadoras.\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<script>\n(function(){\n\n  const wrap=document.querySelector('.rk-wrap');\n\n  for(let i=0;i<14;i++){\n\n    const p=document.createElement('div');\n\n    p.className='rk-particle';\n\n    const size=2+Math.random()*4;\n\n    p.style.width=size+'px';\n    p.style.height=size+'px';\n\n    p.style.left=(Math.random()*100)+'%';\n    p.style.bottom=(Math.random()*20)+'%';\n\n    p.style.animationDuration=(4+Math.random()*6)+'s';\n    p.style.animationDelay=(Math.random()*5)+'s';\n\n    wrap.appendChild(p);\n  }\n\n})();\n</script>"
    },
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "conteudo": "https://docs.google.com/forms/d/e/1FAIpQLScR2pNyC9tTepm9sap3msic9u13vslSWDlSw7Txlz3xLfNnyQ/viewform?usp=publish-editor"
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
    "buttonColor": "#940627",
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
