window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Jorgelina e Evandro",
    "idade": 15,
    "data": "2026-10-03",
    "hora": "20:00",
    "endereco": ""
  },
  "convite": {
    "paletaCores": "",
    "tema": "",
    "musica": "assets/music_1780517891747.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Jorgelina-e-Evandro",
    "seo": {
      "pageTitle": "Casamento | Jorgelina e Evandro",
      "ogTitle": "Você está convidado para o casamento de Jorgelina e Evandro!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1780517891747.png",
    "aberturaSlides": [
      "assets/slide1_1780517891747.mp4",
      "assets/slide2_1780517891747.mp4",
      "assets/slide3_1780517891747.mp4"
    ],
    "folhaVazia": "assets/folha_1780517891747.jpg",
    "folhaPreenchida": "assets/folha_1780517891747.jpg",
    "musica": "assets/music_1780517891747.mp3",
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/LWfhCMRhmQwGUgZCA"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dica de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:wght@300;400;500;600&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n\n.gp-wrap{\n  position:relative;\n  padding:36px 22px;\n  overflow:hidden;\n  text-align:center;\n  font-family:'Cormorant Garamond',serif;\n}\n\n/* brilho ambiente */\n.gp-glow{\n  position:absolute;\n  inset:-40%;\n  background:\n    radial-gradient(circle at center,\n    rgba(212,175,55,.18),\n    transparent 60%);\n  animation:gpGlow 8s ease-in-out infinite;\n  pointer-events:none;\n}\n\n@keyframes gpGlow{\n  0%,100%{transform:scale(1);opacity:.5}\n  50%{transform:scale(1.15);opacity:.9}\n}\n\n/* partículas */\n.gp-spark{\n  position:absolute;\n  width:3px;\n  height:3px;\n  border-radius:50%;\n  background:#facc15;\n  animation:gpFloat linear infinite;\n  pointer-events:none;\n}\n\n@keyframes gpFloat{\n  0%{\n    transform:translateY(0) scale(0);\n    opacity:0;\n  }\n  20%{opacity:1}\n  100%{\n    transform:translateY(-120px) scale(1);\n    opacity:0;\n  }\n}\n\n/* card */\n.gp-card{\n  position:relative;\n  z-index:2;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(120,10,10,.35),\n      rgba(255,255,255,.08)\n    );\n  border:1px solid rgba(212,175,55,.35);\n  border-radius:28px;\n  padding:34px 22px;\n  backdrop-filter:blur(8px);\n  -webkit-backdrop-filter:blur(8px);\n  box-shadow:\n    0 0 30px rgba(212,175,55,.12),\n    inset 0 0 20px rgba(255,255,255,.03);\n}\n\n/* ícone */\n.gp-icon{\n  width:72px;\n  height:72px;\n  margin:0 auto 18px;\n  border-radius:22px;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(212,175,55,.35),\n      rgba(180,20,20,.35)\n    );\n  border:1px solid rgba(255,255,255,.15);\n  color:#fff7d6;\n  font-size:28px;\n  box-shadow:0 0 25px rgba(212,175,55,.25);\n}\n\n/* títulos */\n.gp-sub{\n  font-family:'Cinzel',serif;\n  font-size:11px;\n  letter-spacing:.35em;\n  text-transform:uppercase;\n  color:#f8d67a;\n  margin-bottom:8px;\n}\n\n.gp-title{\n  font-family:'Cinzel',serif;\n  font-size:24px;\n  color:#fff8ef;\n  margin-bottom:10px;\n}\n\n/* textos */\n.gp-text{\n  font-size:16px;\n  line-height:1.6;\n  color:#fff5f5;\n}\n\n.gp-key{\n  margin-top:16px;\n  padding:14px 12px;\n  border-radius:16px;\n  background:rgba(255,255,255,.06);\n  border:1px solid rgba(255,255,255,.12);\n  font-size:15px;\n  color:#fff;\n  word-break:break-word;\n}\n\n/* botão */\n.gp-btn{\n  margin-top:18px;\n  width:100%;\n  border:none;\n  border-radius:16px;\n  padding:14px;\n  background:\n    linear-gradient(\n      135deg,\n      #d4af37,\n      #b91c1c\n    );\n  color:white;\n  font-family:'Cinzel',serif;\n  font-size:12px;\n  letter-spacing:.18em;\n  text-transform:uppercase;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  gap:8px;\n  cursor:pointer;\n  box-shadow:0 0 20px rgba(212,175,55,.25);\n  transition:.2s;\n}\n\n.gp-btn:active{\n  transform:scale(.97);\n}\n\n/* estrelas */\n.gp-star{\n  position:absolute;\n  color:rgba(255,215,120,.55);\n  font-size:11px;\n  animation:gpStar 3s ease-in-out infinite;\n}\n\n@keyframes gpStar{\n  0%,100%{\n    opacity:0;\n    transform:scale(0);\n  }\n  50%{\n    opacity:1;\n    transform:scale(1);\n  }\n}\n</style>\n\n<div class=\"gp-wrap\">\n\n  <div class=\"gp-glow\"></div>\n\n  <!-- estrelas -->\n  <i class=\"gp-star\" style=\"top:8%;left:8%;\">✦</i>\n  <i class=\"gp-star\" style=\"top:18%;right:10%;\">✧</i>\n  <i class=\"gp-star\" style=\"bottom:12%;left:12%;\">✦</i>\n  <i class=\"gp-star\" style=\"bottom:8%;right:14%;\">✧</i>\n\n  <div class=\"gp-card\">\n\n    <div class=\"gp-icon\">\n      <i class=\"fa-solid fa-gift\"></i>\n    </div>\n\n    <div class=\"gp-sub\">Presente</div>\n\n    <div class=\"gp-title\">Chave Pix</div>\n\n    <div class=\"gp-text\">\n      Jorgelina Rodrigues Mota<br>\n      Banco Mercado Pago\n    </div>\n\n    <div class=\"gp-key\">\n      85994155809\n    </div>\n\n    <button class=\"gp-btn\" onclick=\"copyGoldenPix()\">\n      Copiar Chave Pix\n      <i class=\"fa-regular fa-copy\"></i>\n    </button>\n\n  </div>\n</div>\n\n<script>\n(function(){\n  var wrap=document.querySelector('.gp-wrap');\n\n  for(var i=0;i<14;i++){\n    var s=document.createElement('div');\n    s.className='gp-spark';\n\n    var size=1.5+Math.random()*3;\n\n    s.style.width=size+'px';\n    s.style.height=size+'px';\n    s.style.left=(Math.random()*100)+'%';\n    s.style.bottom=(Math.random()*20)+'%';\n    s.style.animationDuration=(4+Math.random()*5)+'s';\n    s.style.animationDelay=(Math.random()*5)+'s';\n\n    wrap.appendChild(s);\n  }\n})();\n\nfunction copyGoldenPix(){\n  navigator.clipboard.writeText('85994155809');\n  alert('Chave Pix copiada!');\n}\n</script>"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<div class=\"space-y-3\">\n\n  <div class=\"flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group\">\n    <div class=\"w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:bg-white/20 transition-colors\">\n      <i class=\"fa-regular fa-clock text-white text-xl\"></i>\n    </div>\n    <div>\n      <h3 class=\"font-bold text-white text-sm mb-0.5 tracking-wide\">A Pontualidade é um Carinho</h3>\n      <p class=\"text-xs text-stone-300 leading-relaxed\">\n        Chegue no horário combinado para não perder nenhum detalhe da nossa mágica história.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group\">\n    <div class=\"w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:bg-white/20 transition-colors\">\n      <i class=\"fa-regular fa-calendar-check text-white text-xl\"></i>\n    </div>\n    <div>\n      <h3 class=\"font-bold text-white text-sm mb-0.5 tracking-wide\">Confirmação de Presença</h3>\n      <p class=\"text-xs text-stone-300 leading-relaxed\">\n        Confirme sua vinda até 15 dias antes, para que possamos preparar tudo com muito amor.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group\">\n    <div class=\"w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:bg-white/20 transition-colors\">\n      <i class=\"fa-solid fa-user-tie text-white text-xl\"></i>\n    </div>\n    <div>\n      <h3 class=\"font-bold text-white text-sm mb-0.5 tracking-wide\">Traje</h3>\n      <p class=\"text-xs text-stone-300 leading-relaxed\">\n        Traje: Esporte Fino.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-red-400/20 hover:bg-white/10 transition-colors group\">\n    <div class=\"w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-300/20 shadow-[0_0_10px_rgba(255,80,80,0.15)] group-hover:bg-red-500/20 transition-colors\">\n      <i class=\"fa-solid fa-ban text-red-300 text-xl\"></i>\n    </div>\n    <div>\n      <h3 class=\"font-bold text-red-200 text-sm mb-0.5 tracking-wide\">Dress Code</h3>\n      <p class=\"text-xs text-stone-300 leading-relaxed\">\n        Não usar cor vermelha.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group\">\n    <div class=\"w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:bg-white/20 transition-colors\">\n      <i class=\"fa-solid fa-heart text-white text-xl animate-pulse\"></i>\n    </div>\n    <div>\n      <h3 class=\"font-bold text-white text-sm mb-0.5 tracking-wide\">Celebre Conosco</h3>\n      <p class=\"text-xs text-stone-300 leading-relaxed\">\n        Deixe a alegria guiar a sua noite! Estamos ansiosos para criar memórias inesquecíveis.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group\">\n    <div class=\"w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:bg-white/20 transition-colors\">\n      <i class=\"fa-solid fa-cake-candles text-white text-xl\"></i>\n    </div>\n    <div>\n      <h3 class=\"font-bold text-white text-sm mb-0.5 tracking-wide\">Um Doce Encontro</h3>\n      <p class=\"text-xs text-stone-300 leading-relaxed\">\n        Não se despeça sem nos presentear com um abraço e saborear uma fatia do nosso bolo.\n      </p>\n    </div>\n  </div>\n\n</div>"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5585994155809",
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
    "buttonColor": "#791a1a",
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
