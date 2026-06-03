window.config = {
  "evento": {
    "tipo": "Formatura",
    "nome": "Enf. Bruna Eduarda",
    "idade": 0,
    "data": "2026-08-22",
    "hora": "22:00",
    "endereco": ""
  },
  "convite": {
    "paletaCores": "",
    "tema": "",
    "musica": "assets/music_1780517830017.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Enf-BrunaEduarda-Formatura",
    "seo": {
      "pageTitle": "Enfª. Bruna Eduarda | Formatura",
      "ogTitle": "Você está convidado para a festa de formatura da Bruna Eduarda!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1780517830017.jpg",
    "aberturaSlides": [
      "assets/slide1_1780517830017.mp4",
      "assets/slide2_1780517830017.mp4",
      "assets/slide3_1780517830017.mp4",
      "assets/slide4_1780517830017.mp4",
      "assets/slide5_1780517830017.mp4",
      "assets/slide6_1780517830017.mp4"
    ],
    "folhaVazia": "assets/folha_1780517830017.jpg",
    "folhaPreenchida": "assets/folha_1780517830017.jpg",
    "musica": "assets/music_1780517830017.mp3",
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/MTys5YayhnDzamHM8?g_st=iw"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:wght@300;400;500;600&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n* { box-sizing: border-box; margin: 0; padding: 0; }\n\n.ng-wrap {\n  position: relative;\n  padding: 30px 20px 24px;\n  overflow: hidden;\n  font-family: 'Cormorant Garamond', serif;\n}\n\n/* brilho dourado */\n.ng-glow {\n  position: absolute;\n  inset: -40%;\n  background: radial-gradient(circle at center, rgba(250,204,21,.14), transparent 65%);\n  animation: ngGlow 8s ease-in-out infinite;\n  pointer-events: none;\n}\n\n@keyframes ngGlow {\n  0%, 100% {\n    opacity: .45;\n    transform: scale(1);\n  }\n  50% {\n    opacity: .9;\n    transform: scale(1.12);\n  }\n}\n\n/* partículas */\n.ng-particle {\n  position: absolute;\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: #fde68a;\n  box-shadow: 0 0 10px rgba(255,255,255,.4);\n  animation: ngFloat linear infinite;\n}\n\n@keyframes ngFloat {\n  0% {\n    transform: translateY(0) scale(.3);\n    opacity: 0;\n  }\n  20% { opacity: 1; }\n  100% {\n    transform: translateY(-120px) scale(1);\n    opacity: 0;\n  }\n}\n\n/* cabeçalho */\n.ng-header {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  margin-bottom: 18px;\n}\n\n.ng-header h2 {\n  font-family: 'Cinzel', serif;\n  font-size: 22px;\n  color: #fefce8;\n  letter-spacing: .08em;\n  margin-bottom: 6px;\n}\n\n.ng-header p {\n  color: #dcfce7;\n  font-size: 15px;\n}\n\n/* grid */\n.ng-grid {\n  display: grid;\n  gap: 12px;\n  position: relative;\n  z-index: 2;\n}\n\n/* card */\n.ng-card {\n  display: flex;\n  gap: 14px;\n  padding: 16px;\n  border-radius: 22px;\n  background: linear-gradient(145deg, rgba(22,101,52,.28), rgba(255,255,255,.08));\n  border: 1px solid rgba(250,204,21,.18);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  animation: ngFade .6s ease both;\n  box-shadow: inset 0 0 15px rgba(255,255,255,.03), 0 0 22px rgba(34,197,94,.08);\n}\n\n@keyframes ngFade {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/* ícone */\n.ng-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 16px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(145deg, rgba(250,204,21,.30), rgba(22,163,74,.35));\n  color: #fefce8;\n  font-size: 18px;\n  box-shadow: 0 0 18px rgba(250,204,21,.15);\n}\n\n/* textos */\n.ng-title {\n  font-family: 'Cinzel', serif;\n  font-size: 12px;\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: #fde68a;\n  margin-bottom: 4px;\n}\n\n.ng-text {\n  font-size: 15px;\n  line-height: 1.55;\n  color: #f8fff8;\n}\n\n/* pix */\n.ng-pix {\n  margin-top: 8px;\n  padding: 12px;\n  border-radius: 14px;\n  background: rgba(255,255,255,.05);\n  border: 1px solid rgba(250,204,21,.14);\n  color: #ffffff;\n  font-size: 14px;\n  word-break: break-word;\n}\n\n/* botão */\n.ng-btn {\n  margin-top: 12px;\n  width: 100%;\n  border: none;\n  border-radius: 14px;\n  padding: 13px;\n  background: linear-gradient(135deg, #16a34a, #facc15);\n  color: #052e16;\n  font-family: 'Cinzel', serif;\n  font-size: 11px;\n  letter-spacing: .16em;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: .2s;\n  box-shadow: 0 0 18px rgba(250,204,21,.18);\n}\n\n.ng-btn:active {\n  transform: scale(.97);\n}\n\n/* estrelas */\n.ng-star {\n  position: absolute;\n  color: rgba(250,204,21,.5);\n  font-size: 10px;\n  animation: ngStar 3s ease-in-out infinite;\n}\n\n@keyframes ngStar {\n  0%, 100% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n</style>\n\n<div class=\"ng-wrap\">\n\n  <div class=\"ng-glow\"></div>\n\n  <!-- estrelas -->\n  <i class=\"ng-star\" style=\"top:8%;left:6%;\">✦</i>\n  <i class=\"ng-star\" style=\"top:18%;right:8%;\">✧</i>\n  <i class=\"ng-star\" style=\"bottom:16%;left:10%;\">✦</i>\n  <i class=\"ng-star\" style=\"bottom:8%;right:14%;\">✧</i>\n\n  <!-- título -->\n  <div class=\"ng-header\">\n    <h2>Sugestão de Presentes</h2>\n    <p>Com carinho para essa nova jornada ✨</p>\n  </div>\n\n  <div class=\"ng-grid\">\n\n    <div class=\"ng-card\">\n      <div class=\"ng-icon\">\n        <i class=\"fa-solid fa-shoe-prints\"></i>\n      </div>\n      <div>\n        <div class=\"ng-title\">Calçados</div>\n        <div class=\"ng-text\">\n          Sandálias: tam. 37<br>\n          Sapatos e tênis: tam. 38\n        </div>\n      </div>\n    </div>\n\n    <div class=\"ng-card\">\n      <div class=\"ng-icon\">\n        <i class=\"fa-solid fa-shirt\"></i>\n      </div>\n      <div>\n        <div class=\"ng-title\">Roupas</div>\n        <div class=\"ng-text\">\n          Tamanho G.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"ng-card\">\n      <div class=\"ng-icon\">\n        <i class=\"fa-solid fa-spray-can-sparkles\"></i>\n      </div>\n      <div>\n        <div class=\"ng-title\">Perfume Feminino</div>\n        <div class=\"ng-text\">\n          Fragrâncias doces, como Una Blush.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"ng-card\">\n      <div class=\"ng-icon\">\n        <i class=\"fa-solid fa-fire-flame-curved\"></i>\n      </div>\n      <div>\n        <div class=\"ng-title\">Perfume Masculino</div>\n        <div class=\"ng-text\">\n          Fragrâncias amadeiradas, como Malbec.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"ng-card\">\n      <div class=\"ng-icon\">\n        <i class=\"fa-solid fa-briefcase\"></i>\n      </div>\n      <div>\n        <div class=\"ng-title\">Bolsas Personalizadas</div>\n        <div class=\"ng-text\">\n          Bolsas Gocase personalizadas “Enfermeira Bruna”.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"ng-card\">\n      <div class=\"ng-icon\">\n        <i class=\"fa-solid fa-bag-shopping\"></i>\n      </div>\n      <div>\n        <div class=\"ng-title\">Bolsa Térmica</div>\n        <div class=\"ng-text\">\n          Bolsa térmica personalizada Gocase.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"ng-card\">\n      <div class=\"ng-icon\">\n        <i class=\"fa-solid fa-bottle-water\"></i>\n      </div>\n      <div>\n        <div class=\"ng-title\">Garrafa Térmica</div>\n        <div class=\"ng-text\">\n          Garrafa térmica personalizada Gocase.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"ng-card\">\n      <div class=\"ng-icon\">\n        <i class=\"fa-solid fa-stethoscope\"></i>\n      </div>\n      <div>\n        <div class=\"ng-title\">Jaleco</div>\n        <div class=\"ng-text\">\n          Jaleco personalizado.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"ng-card\">\n      <div class=\"ng-icon\">\n        <i class=\"fa-solid fa-user-doctor\"></i>\n      </div>\n      <div>\n        <div class=\"ng-title\">Scrub</div>\n        <div class=\"ng-text\">\n          Tamanho G.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"ng-card\">\n      <div class=\"ng-icon\">\n        <i class=\"fa-solid fa-book-medical\"></i>\n      </div>\n      <div>\n        <div class=\"ng-title\">Livros</div>\n        <div class=\"ng-text\">\n          Livros voltados para Enfermagem.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"ng-card\">\n      <div class=\"ng-icon\">\n        <i class=\"fa-solid fa-images\"></i>\n      </div>\n      <div>\n        <div class=\"ng-title\">Álbum</div>\n        <div class=\"ng-text\">\n          Álbum de formatura.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"ng-card\">\n      <div class=\"ng-icon\">\n        <i class=\"fa-solid fa-pencil\"></i>\n      </div>\n      <div>\n        <div class=\"ng-title\">Papelaria</div>\n        <div class=\"ng-text\">\n          Itens de papelaria e organização.\n        </div>\n      </div>\n    </div>\n\n    <!-- PIX -->\n    <div class=\"ng-card\">\n      <div class=\"ng-icon\">\n        <i class=\"fa-solid fa-gift\"></i>\n      </div>\n      <div style=\"width:100%;\">\n        <div class=\"ng-title\">Presente em Pix</div>\n        <div class=\"ng-pix\">\n          82981374223\n        </div>\n        <button class=\"ng-btn\" onclick=\"copyNursingPix()\">\n          Copiar Chave Pix\n          <i class=\"fa-regular fa-copy\"></i>\n        </button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<script>\n(function(){\n  const wrap = document.querySelector('.ng-wrap');\n  for(let i=0; i<14; i++){\n    const p = document.createElement('div');\n    p.className = 'ng-particle';\n    const size = 2 + Math.random() * 4;\n    p.style.width = size + 'px';\n    p.style.height = size + 'px';\n    p.style.left = (Math.random() * 100) + '%';\n    p.style.bottom = (Math.random() * 20) + '%';\n    p.style.animationDuration = (4 + Math.random() * 6) + 's';\n    p.style.animationDelay = (Math.random() * 5) + 's';\n    wrap.appendChild(p);\n  }\n})();\n\nfunction copyNursingPix(){\n  navigator.clipboard.writeText('82981374223');\n  alert('Chave Pix copiada!');\n}\n</script>"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:wght@300;400;500;600&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n\n.gm-wrap{\n  position:relative;\n  padding:30px 20px 26px;\n  overflow:hidden;\n  font-family:'Cormorant Garamond',serif;\n}\n\n/* brilho */\n.gm-glow{\n  position:absolute;\n  inset:-40%;\n  background:\n    radial-gradient(circle at center,\n    rgba(250,204,21,.10),\n    transparent 65%);\n  animation:gmGlow 8s ease-in-out infinite;\n  pointer-events:none;\n}\n\n@keyframes gmGlow{\n  0%,100%{\n    opacity:.4;\n    transform:scale(1);\n  }\n  50%{\n    opacity:.9;\n    transform:scale(1.12);\n  }\n}\n\n/* partículas */\n.gm-particle{\n  position:absolute;\n  width:4px;\n  height:4px;\n  border-radius:50%;\n  background:#fde68a;\n  box-shadow:0 0 12px rgba(255,255,255,.45);\n  animation:gmFloat linear infinite;\n}\n\n@keyframes gmFloat{\n  0%{\n    transform:translateY(0) scale(.3);\n    opacity:0;\n  }\n  20%{opacity:1}\n  100%{\n    transform:translateY(-120px) scale(1);\n    opacity:0;\n  }\n}\n\n/* cabeçalho */\n.gm-header{\n  position:relative;\n  z-index:2;\n  text-align:center;\n  margin-bottom:20px;\n}\n\n.gm-header h2{\n  font-family:'Cinzel',serif;\n  font-size:24px;\n  color:#fffbea;\n  letter-spacing:.12em;\n  margin-bottom:6px;\n}\n\n.gm-header p{\n  color:#fef3c7;\n  font-size:15px;\n}\n\n/* grid */\n.gm-grid{\n  display:grid;\n  gap:12px;\n  position:relative;\n  z-index:2;\n}\n\n/* cards */\n.gm-card{\n  display:flex;\n  gap:14px;\n  padding:17px;\n  border-radius:22px;\n\n  background:\n    linear-gradient(\n      145deg,\n      rgba(255,255,255,.06),\n      rgba(250,204,21,.06)\n    );\n\n  border:1px solid rgba(255,255,255,.10);\n\n  backdrop-filter:blur(8px);\n  -webkit-backdrop-filter:blur(8px);\n\n  animation:gmFade .6s ease both;\n\n  box-shadow:\n    inset 0 0 12px rgba(255,255,255,.03),\n    0 0 18px rgba(250,204,21,.08);\n}\n\n@keyframes gmFade{\n  from{\n    opacity:0;\n    transform:translateY(12px);\n  }\n  to{\n    opacity:1;\n    transform:translateY(0);\n  }\n}\n\n/* ícone */\n.gm-icon{\n  width:48px;\n  height:48px;\n  border-radius:16px;\n  flex-shrink:0;\n\n  display:flex;\n  align-items:center;\n  justify-content:center;\n\n  background:\n    linear-gradient(\n      145deg,\n      rgba(250,204,21,.22),\n      rgba(255,255,255,.08)\n    );\n\n  color:#fff8dc;\n  font-size:18px;\n\n  box-shadow:\n    0 0 18px rgba(250,204,21,.12);\n}\n\n/* textos */\n.gm-title{\n  font-family:'Cinzel',serif;\n  font-size:12px;\n  letter-spacing:.14em;\n  text-transform:uppercase;\n  color:#fde68a;\n  margin-bottom:5px;\n}\n\n.gm-text{\n  font-size:15px;\n  line-height:1.6;\n  color:#f9fafb;\n}\n\n/* destaque */\n.gm-highlight{\n  color:#fde68a;\n  font-weight:600;\n}\n\n/* estrelas */\n.gm-star{\n  position:absolute;\n  color:rgba(250,204,21,.45);\n  font-size:10px;\n  animation:gmStar 3s ease-in-out infinite;\n}\n\n@keyframes gmStar{\n  0%,100%{\n    opacity:0;\n    transform:scale(0);\n  }\n  50%{\n    opacity:1;\n    transform:scale(1);\n  }\n}\n</style>\n\n<div class=\"gm-wrap\">\n\n  <div class=\"gm-glow\"></div>\n\n  <!-- estrelas -->\n  <i class=\"gm-star\" style=\"top:8%;left:6%;\">✦</i>\n  <i class=\"gm-star\" style=\"top:16%;right:9%;\">✧</i>\n  <i class=\"gm-star\" style=\"bottom:15%;left:12%;\">✦</i>\n  <i class=\"gm-star\" style=\"bottom:8%;right:15%;\">✧</i>\n\n  <!-- cabeçalho -->\n  <div class=\"gm-header\">\n    <h2>Manual do Convidado</h2>\n    <p>Algumas orientações especiais para esta noite inesquecível ✨</p>\n  </div>\n\n  <!-- cards -->\n  <div class=\"gm-grid\">\n\n    <div class=\"gm-card\">\n      <div class=\"gm-icon\">\n        <i class=\"fa-solid fa-ticket\"></i>\n      </div>\n\n      <div>\n        <div class=\"gm-title\">Sobre a Senha</div>\n\n        <div class=\"gm-text\">\n          A senha é <span class=\"gm-highlight\">individual</span> e indispensável para a entrada no evento.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"gm-card\">\n      <div class=\"gm-icon\">\n        <i class=\"fa-solid fa-calendar-check\"></i>\n      </div>\n\n      <div>\n        <div class=\"gm-title\">Confirmação</div>\n\n        <div class=\"gm-text\">\n          Peço, com carinho, que a confirmação seja realizada até\n          <span class=\"gm-highlight\">20 dias antes do baile</span>,\n          para organização das mesas e recepção dos convidados.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"gm-card\">\n      <div class=\"gm-icon\">\n        <i class=\"fa-solid fa-chair\"></i>\n      </div>\n\n      <div>\n        <div class=\"gm-title\">Lugares nas Mesas</div>\n\n        <div class=\"gm-text\">\n          Seu lugar será identificado com seu nome, preparado especialmente para recebê-lo(a) da melhor forma.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"gm-card\">\n      <div class=\"gm-icon\">\n        <i class=\"fa-solid fa-camera-retro\"></i>\n      </div>\n\n      <div>\n        <div class=\"gm-title\">Não Esqueça da Foto</div>\n\n        <div class=\"gm-text\">\n          Esperei 5 anos por esse momento… então não vá embora sem tirar uma foto comigo para registrar essa noite tão especial 📸\n        </div>\n      </div>\n    </div>\n\n    <div class=\"gm-card\">\n      <div class=\"gm-icon\">\n        <i class=\"fa-solid fa-user-tie\"></i>\n      </div>\n\n      <div>\n        <div class=\"gm-title\">Traje</div>\n\n        <div class=\"gm-text\">\n          Esporte fino / Social.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"gm-card\">\n      <div class=\"gm-icon\">\n        <i class=\"fa-solid fa-heart\"></i>\n      </div>\n\n      <div>\n        <div class=\"gm-title\">Agradecimento</div>\n\n        <div class=\"gm-text\">\n          Obrigada por fazer parte desse sonho e dividir comigo um dos momentos mais importantes da minha vida.\n          <br><br>\n          Sua presença significa muito ✨\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<script>\n(function(){\n\n  const wrap=document.querySelector('.gm-wrap');\n\n  for(let i=0;i<14;i++){\n\n    const p=document.createElement('div');\n\n    p.className='gm-particle';\n\n    const size=2+Math.random()*4;\n\n    p.style.width=size+'px';\n    p.style.height=size+'px';\n\n    p.style.left=(Math.random()*100)+'%';\n    p.style.bottom=(Math.random()*20)+'%';\n\n    p.style.animationDuration=(4+Math.random()*6)+'s';\n    p.style.animationDelay=(Math.random()*5)+'s';\n\n    wrap.appendChild(p);\n  }\n\n})();\n</script>"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5582981374223",
      "rsvpConfig": {
        "exibirNome": true,
        "exibirWhatsapp": false,
        "exibirAcompanhantes": false
      }
    },
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Galeria de Fotos",
      "icone": "fa-solid fa-camera",
      "conteudo": "https://curious-selkie-7df57c.netlify.app/"
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
    "buttonColor": "#1c341b",
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
