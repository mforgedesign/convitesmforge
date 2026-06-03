window.config = {
  "evento": {
    "tipo": "Formatura",
    "nome": "Wellington Lima",
    "idade": 0,
    "data": "2026-08-22",
    "hora": "22:00",
    "endereco": ""
  },
  "convite": {
    "paletaCores": "",
    "tema": "",
    "musica": "assets/music_1780517844795.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Formatura-WellingtonLima",
    "seo": {
      "pageTitle": "Você recebeu um convite especial!",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1780517844795.jpg",
    "aberturaSlides": [
      "assets/slide1_1780517844795.mp4",
      "assets/slide2_1780517844795.mp4",
      "assets/slide3_1780517844795.mp4",
      "assets/slide4_1780517844795.mp4",
      "assets/slide5_1780517844795.mp4"
    ],
    "folhaVazia": "assets/folha_1780517844795.jpg",
    "folhaPreenchida": "assets/folha_1780517844795.jpg",
    "musica": "assets/music_1780517844795.mp3",
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
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:wght@300;400;500;600&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n\n.gm-wrap{\n  position:relative;\n  padding:30px 20px 26px;\n  overflow:hidden;\n  font-family:'Cormorant Garamond',serif;\n}\n\n.gm-glow{\n  position:absolute;\n  inset:-40%;\n  background:\n    radial-gradient(circle at center,\n    rgba(250,204,21,.10),\n    transparent 65%);\n  animation:gmGlow 8s ease-in-out infinite;\n  pointer-events:none;\n}\n\n@keyframes gmGlow{\n  0%,100%{opacity:.4;transform:scale(1);}\n  50%{opacity:.9;transform:scale(1.12);}\n}\n\n.gm-particle{\n  position:absolute;\n  width:4px;\n  height:4px;\n  border-radius:50%;\n  background:#fde68a;\n  box-shadow:0 0 12px rgba(255,255,255,.45);\n  animation:gmFloat linear infinite;\n}\n\n@keyframes gmFloat{\n  0%{transform:translateY(0) scale(.3);opacity:0;}\n  20%{opacity:1}\n  100%{transform:translateY(-120px) scale(1);opacity:0;}\n}\n\n.gm-header{\n  position:relative;\n  z-index:2;\n  text-align:center;\n  margin-bottom:20px;\n}\n\n.gm-header h2{\n  font-family:'Cinzel',serif;\n  font-size:24px;\n  color:#fffbea;\n  letter-spacing:.12em;\n  margin-bottom:6px;\n}\n\n.gm-header p{\n  color:#fef3c7;\n  font-size:15px;\n}\n\n.gm-grid{\n  display:grid;\n  gap:12px;\n  position:relative;\n  z-index:2;\n}\n\n.gm-card{\n  display:flex;\n  gap:14px;\n  padding:17px;\n  border-radius:22px;\n  background:linear-gradient(145deg,rgba(255,255,255,.06),rgba(250,204,21,.06));\n  border:1px solid rgba(255,255,255,.10);\n  backdrop-filter:blur(8px);\n  -webkit-backdrop-filter:blur(8px);\n  animation:gmFade .6s ease both;\n  box-shadow:inset 0 0 12px rgba(255,255,255,.03),0 0 18px rgba(250,204,21,.08);\n}\n\n@keyframes gmFade{\n  from{opacity:0;transform:translateY(12px);}\n  to{opacity:1;transform:translateY(0);}\n}\n\n.gm-icon{\n  width:48px;\n  height:48px;\n  border-radius:16px;\n  flex-shrink:0;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  background:linear-gradient(145deg,rgba(250,204,21,.22),rgba(255,255,255,.08));\n  color:#fff8dc;\n  font-size:18px;\n  box-shadow:0 0 18px rgba(250,204,21,.12);\n}\n\n.gm-title{\n  font-family:'Cinzel',serif;\n  font-size:12px;\n  letter-spacing:.14em;\n  text-transform:uppercase;\n  color:#fde68a;\n  margin-bottom:5px;\n}\n\n.gm-text{\n  font-size:15px;\n  line-height:1.6;\n  color:#f9fafb;\n}\n\n.gm-highlight{\n  color:#fde68a;\n  font-weight:600;\n}\n\n.gm-badge{\n  display:inline-flex;\n  align-items:center;\n  gap:5px;\n  margin-top:8px;\n  padding:4px 10px;\n  border-radius:30px;\n  background:rgba(250,204,21,.13);\n  border:1px solid rgba(250,204,21,.30);\n  color:#fde68a;\n  font-size:12px;\n  font-family:'Cinzel',serif;\n  letter-spacing:.08em;\n}\n\n.gm-star{\n  position:absolute;\n  color:rgba(250,204,21,.45);\n  font-size:10px;\n  animation:gmStar 3s ease-in-out infinite;\n}\n\n@keyframes gmStar{\n  0%,100%{opacity:0;transform:scale(0);}\n  50%{opacity:1;transform:scale(1);}\n}\n</style>\n\n<div class=\"gm-wrap\">\n\n  <div class=\"gm-glow\"></div>\n\n  <i class=\"gm-star\" style=\"top:8%;left:6%;\">✦</i>\n  <i class=\"gm-star\" style=\"top:16%;right:9%;\">✧</i>\n  <i class=\"gm-star\" style=\"bottom:15%;left:12%;\">✦</i>\n  <i class=\"gm-star\" style=\"bottom:8%;right:15%;\">✧</i>\n\n  <div class=\"gm-header\">\n    <h2>Manual do Convidado</h2>\n    <p>Algumas orientações especiais para esta noite inesquecível ✨</p>\n  </div>\n\n  <div class=\"gm-grid\">\n\n    <div class=\"gm-card\">\n      <div class=\"gm-icon\">\n        <i class=\"fa-solid fa-ticket\"></i>\n      </div>\n      <div>\n        <div class=\"gm-title\">Sobre a Senha</div>\n        <div class=\"gm-text\">\n          A senha é <span class=\"gm-highlight\">individual</span> e indispensável para a entrada no evento.\n        </div>\n        <span class=\"gm-badge\"><i class=\"fa-solid fa-lock\" style=\"font-size:10px;\"></i> Convite individual e intransferível</span>\n      </div>\n    </div>\n\n    <div class=\"gm-card\">\n      <div class=\"gm-icon\">\n        <i class=\"fa-solid fa-calendar-check\"></i>\n      </div>\n      <div>\n        <div class=\"gm-title\">Confirmação</div>\n        <div class=\"gm-text\">\n          Peço, com carinho, que a confirmação seja realizada até\n          <span class=\"gm-highlight\">20 dias antes do baile</span>,\n          para organização das mesas e recepção dos convidados.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"gm-card\">\n      <div class=\"gm-icon\">\n        <i class=\"fa-solid fa-chair\"></i>\n      </div>\n      <div>\n        <div class=\"gm-title\">Lugares nas Mesas</div>\n        <div class=\"gm-text\">\n          Seu lugar será identificado com seu nome, preparado especialmente para recebê-lo(a) da melhor forma.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"gm-card\">\n      <div class=\"gm-icon\">\n        <i class=\"fa-solid fa-camera-retro\"></i>\n      </div>\n      <div>\n        <div class=\"gm-title\">Não Esqueça da Foto</div>\n        <div class=\"gm-text\">\n          Esperei 5 anos por esse momento… então não vá embora sem tirar uma foto comigo para registrar essa noite tão especial 📸\n        </div>\n      </div>\n    </div>\n\n    <div class=\"gm-card\">\n      <div class=\"gm-icon\">\n        <i class=\"fa-solid fa-user-tie\"></i>\n      </div>\n      <div>\n        <div class=\"gm-title\">Traje</div>\n        <div class=\"gm-text\">\n          Esporte fino / Social.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"gm-card\">\n      <div class=\"gm-icon\">\n        <i class=\"fa-solid fa-heart\"></i>\n      </div>\n      <div>\n        <div class=\"gm-title\">Agradecimento</div>\n        <div class=\"gm-text\">\n          Obrigada por fazer parte desse sonho e dividir comigo um dos momentos mais importantes da minha vida.\n          <br><br>\n          Sua presença significa muito ✨\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<script>\n(function(){\n  const wrap=document.querySelector('.gm-wrap');\n  for(let i=0;i<14;i++){\n    const p=document.createElement('div');\n    p.className='gm-particle';\n    const size=2+Math.random()*4;\n    p.style.width=size+'px';\n    p.style.height=size+'px';\n    p.style.left=(Math.random()*100)+'%';\n    p.style.bottom=(Math.random()*20)+'%';\n    p.style.animationDuration=(4+Math.random()*6)+'s';\n    p.style.animationDelay=(Math.random()*5)+'s';\n    wrap.appendChild(p);\n  }\n})();\n</script>"
    },
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "conteudo": "https://docs.google.com/forms/d/e/1FAIpQLSc613wD4-zq76Ubd5P_6SkZt9P6mLoBQUv5Xq_O9Bt2BPq9Gg/viewform?usp=publish-editor"
    },
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Galeria de Fotos",
      "icone": "fa-solid fa-camera",
      "conteudo": "https://effortless-wisp-db77da.netlify.app/"
    }
  ],
  "upsell": {
    "galeriaFotos": false,
    "saveTheDate": false,
    "lembrete": false
  },
  "config": {
    "exibirMarcaDagua": false,
    "cronometro": true,
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
