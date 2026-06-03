window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Giovana",
    "idade": 15,
    "data": "2026-08-07",
    "hora": "20:30",
    "endereco": ""
  },
  "convite": {
    "paletaCores": "",
    "tema": "",
    "musica": "assets/music_1780517857029.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Giovana15Anos",
    "seo": {
      "pageTitle": "Giovana | 15 Anos",
      "ogTitle": "Você está convidado para os 15 anos da Giovana!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1780517857029.jpg",
    "aberturaSlides": [
      "assets/slide1_1780517857029.mp4",
      "assets/slide2_1780517857029.mp4",
      "assets/slide3_1780517857029.jpg",
      "assets/slide4_1780517857029.mp4",
      "assets/slide5_1780517857029.jpg"
    ],
    "folhaVazia": "assets/folha_1780517857029.jpg",
    "folhaPreenchida": "assets/folha_1780517857029.jpg",
    "musica": "assets/music_1780517857029.mp3",
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/hw8S9nav1A3miwDv6"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<div class=\"text-left px-1\">\n\n  <!-- ✦ GRID PRESENTES ✦ -->\n  <div class=\"grid grid-cols-2 gap-3 mb-6\">\n\n    <!-- CARD -->\n    <div class=\"card\">\n      <i class=\"fa-solid fa-ring\"></i>\n      <span>Anel<br>Tamanho 18</span>\n    </div>\n\n    <div class=\"card\">\n      <i class=\"fa-solid fa-shirt\"></i>\n      <span>Roupa<br>Tamanho P</span>\n    </div>\n\n    <div class=\"card\">\n      <i class=\"fa-solid fa-wand-magic-sparkles\"></i>\n      <span>Maquiagem<br>& Acessórios</span>\n    </div>\n\n    <div class=\"card\">\n      <i class=\"fa-solid fa-gift\"></i>\n      <span>O que seu<br>coração desejar</span>\n    </div>\n\n  </div>\n\n  <!-- ✦ PIX CARD PREMIUM ✦ -->\n  <div class=\"pix-card\">\n\n    <div class=\"shine\"></div>\n\n    <p class=\"pix-label\">Chave Pix</p>\n\n    <p class=\"pix-key\">cpf 44816198806</p>\n    <p class=\"pix-name\">Giovana David Santos</p>\n\n  </div>\n\n  <!-- ✦ BOTÃO ✦ -->\n  <button onclick=\"navigator.clipboard.writeText('cpf 44816198806'); alert('Chave Pix copiada!');\" class=\"pix-btn\">\n    Copiar chave pix\n    <i class=\"fa-regular fa-copy\"></i>\n  </button>\n\n</div>\n\n<style>\n/* ✦ BASE ✦ */\n:root{\n  --blue-deep:#0b1f3a;\n  --blue-main:#1e3a8a;\n  --blue-soft:#3b82f6;\n  --silver:#cbd5e1;\n  --glass:rgba(255,255,255,0.08);\n}\n\n/* ✦ CARDS ✦ */\n.card{\n  background: linear-gradient(145deg, rgba(30,58,138,0.25), rgba(255,255,255,0.05));\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255,255,255,0.15);\n  border-radius: 18px;\n  padding: 14px;\n  display:flex;\n  align-items:center;\n  gap:10px;\n  position:relative;\n  overflow:hidden;\n  animation: float 6s ease-in-out infinite;\n}\n\n.card:nth-child(2){animation-delay:1s}\n.card:nth-child(3){animation-delay:2s}\n.card:nth-child(4){animation-delay:3s}\n\n.card i{\n  color: var(--silver);\n  font-size: 18px;\n  text-shadow: 0 0 10px rgba(255,255,255,0.4);\n}\n\n.card span{\n  font-size:11px;\n  color:#e5e7eb;\n  line-height:1.2;\n  font-weight:500;\n}\n\n/* brilho interno */\n.card::after{\n  content:\"\";\n  position:absolute;\n  inset:0;\n  background:linear-gradient(120deg, transparent, rgba(255,255,255,0.15), transparent);\n  opacity:0;\n  animation: shineMove 5s infinite;\n}\n\n/* ✦ PIX CARD ✦ */\n.pix-card{\n  position:relative;\n  padding:20px;\n  border-radius:20px;\n  background: linear-gradient(160deg, rgba(15,23,42,0.9), rgba(30,58,138,0.5));\n  border:1px solid rgba(255,255,255,0.2);\n  text-align:center;\n  overflow:hidden;\n  margin-bottom:14px;\n}\n\n/* brilho animado */\n.shine{\n  position:absolute;\n  inset:-100%;\n  background: radial-gradient(circle, rgba(255,255,255,0.25), transparent 60%);\n  animation: pulseLight 6s infinite;\n}\n\n/* textos */\n.pix-label{\n  font-size:10px;\n  letter-spacing:2px;\n  color:#cbd5e1;\n  margin-bottom:6px;\n  text-transform:uppercase;\n}\n\n.pix-key{\n  font-size:16px;\n  font-weight:700;\n  color:white;\n  letter-spacing:1px;\n}\n\n.pix-name{\n  font-size:11px;\n  color:#cbd5e1;\n  margin-top:4px;\n}\n\n/* ✦ BOTÃO ✦ */\n.pix-btn{\n  width:100%;\n  background: linear-gradient(90deg, var(--blue-main), var(--blue-soft));\n  color:white;\n  font-weight:600;\n  padding:14px;\n  border-radius:16px;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  gap:8px;\n  font-size:11px;\n  letter-spacing:2px;\n  text-transform:uppercase;\n  position:relative;\n  overflow:hidden;\n  box-shadow:0 0 20px rgba(59,130,246,0.4);\n}\n\n/* efeito de luz passando */\n.pix-btn::after{\n  content:\"\";\n  position:absolute;\n  top:0;\n  left:-100%;\n  width:100%;\n  height:100%;\n  background:linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent);\n  animation: btnShine 4s infinite;\n}\n\n/* ✦ ANIMAÇÕES ✦ */\n@keyframes float{\n  0%,100%{transform:translateY(0)}\n  50%{transform:translateY(-6px)}\n}\n\n@keyframes shineMove{\n  0%{transform:translateX(-100%);opacity:0}\n  50%{opacity:1}\n  100%{transform:translateX(100%);opacity:0}\n}\n\n@keyframes pulseLight{\n  0%,100%{opacity:0.3}\n  50%{opacity:0.6}\n}\n\n@keyframes btnShine{\n  0%{left:-100%}\n  100%{left:100%}\n}\n</style>"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<div class=\"space-y-3 px-1\">\n\n  <!-- ✦ ITEM ✦ -->\n  <div class=\"item\">\n    <div class=\"icon\"><i class=\"fa-regular fa-clock\"></i></div>\n    <div>\n      <h3>A Pontualidade é um Carinho</h3>\n      <p>Chegue no horário combinado para não perder nenhum detalhe deste momento especial.</p>\n    </div>\n  </div>\n\n  <div class=\"item\">\n    <div class=\"icon\"><i class=\"fa-regular fa-calendar-check\"></i></div>\n    <div>\n      <h3>Confirmação de Presença</h3>\n      <p>Gentileza confirmar sua presença até o dia <strong>17 de julho de 2026</strong>.</p>\n    </div>\n  </div>\n\n  <div class=\"item\">\n    <div class=\"icon heart\"><i class=\"fa-solid fa-heart\"></i></div>\n    <div>\n      <h3>Celebre Conosco</h3>\n      <p>Permita-se viver cada instante com leveza e alegria ao nosso lado.</p>\n    </div>\n  </div>\n\n  <div class=\"item\">\n    <div class=\"icon\"><i class=\"fa-solid fa-cake-candles\"></i></div>\n    <div>\n      <h3>Um Doce Encontro</h3>\n      <p>Antes de partir, compartilhe conosco um abraço e um momento à mesa.</p>\n    </div>\n  </div>\n\n  <!-- ✦ DRESS CODE PREMIUM ✦ -->\n  <div class=\"dress\">\n    <div class=\"glow\"></div>\n    <h3>Dress Code</h3>\n    <p>\n      Traje esporte fino.<br><br>\n      <span class=\"alert-blue\">NÃO UTILIZAR ROUPA AZUL</span><br><br>\n      Para preservar a harmonia estética da celebração, contamos com sua colaboração.\n    </p>\n  </div>\n\n</div>\n\n<style>\n:root{\n  --blue-deep:#0b1f3a;\n  --blue-main:#1e3a8a;\n  --blue-soft:#3b82f6;\n  --silver:#cbd5e1;\n}\n\n/* ✦ ITEM ✦ */\n.item{\n  display:flex;\n  gap:14px;\n  align-items:center;\n  padding:16px;\n  border-radius:18px;\n  background:linear-gradient(145deg, rgba(30,58,138,0.18), rgba(255,255,255,0.04));\n  border:1px solid rgba(255,255,255,0.15);\n  backdrop-filter: blur(10px);\n  position:relative;\n  overflow:hidden;\n  animation: floatSoft 7s ease-in-out infinite;\n}\n\n.item:nth-child(2){animation-delay:1s}\n.item:nth-child(3){animation-delay:2s}\n.item:nth-child(4){animation-delay:3s}\n\n.item::after{\n  content:\"\";\n  position:absolute;\n  inset:0;\n  background:linear-gradient(120deg, transparent, rgba(255,255,255,0.12), transparent);\n  animation: shine 6s infinite;\n}\n\n/* ✦ ICON ✦ */\n.icon{\n  width:46px;\n  height:46px;\n  border-radius:50%;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  background:rgba(255,255,255,0.08);\n  border:1px solid rgba(255,255,255,0.2);\n  box-shadow:0 0 12px rgba(255,255,255,0.15);\n}\n\n.icon i{\n  color:var(--silver);\n  font-size:18px;\n}\n\n.heart{\n  animation: pulseHeart 2.5s infinite;\n}\n\n/* ✦ TEXT ✦ */\n.item h3{\n  font-size:13px;\n  color:white;\n  font-weight:600;\n  margin-bottom:2px;\n  letter-spacing:.5px;\n}\n\n.item p{\n  font-size:11px;\n  color:#cbd5e1;\n  line-height:1.4;\n}\n\n/* ✦ DRESS CODE ✦ */\n.dress{\n  margin-top:10px;\n  padding:18px;\n  border-radius:20px;\n  text-align:center;\n  background:linear-gradient(160deg, rgba(15,23,42,0.95), rgba(30,58,138,0.5));\n  border:1px solid rgba(255,255,255,0.25);\n  position:relative;\n  overflow:hidden;\n}\n\n.glow{\n  position:absolute;\n  inset:-120%;\n  background:radial-gradient(circle, rgba(255,255,255,0.25), transparent 60%);\n  animation: ambient 7s infinite;\n}\n\n.dress h3{\n  color:white;\n  font-size:14px;\n  letter-spacing:2px;\n  text-transform:uppercase;\n  margin-bottom:8px;\n}\n\n.dress p{\n  font-size:11px;\n  color:#e2e8f0;\n  line-height:1.5;\n}\n\n/* ✦ ALERTA AZUL ✦ */\n.alert-blue{\n  display:inline-block;\n  padding:6px 12px;\n  border-radius:10px;\n  font-weight:700;\n  letter-spacing:1px;\n  color:#fff;\n  background:linear-gradient(135deg, #1e3a8a, #3b82f6);\n  box-shadow:0 0 12px rgba(59,130,246,0.6);\n  animation: pulseAlert 2s infinite;\n}\n\n/* ✦ ANIMAÇÕES ✦ */\n@keyframes floatSoft{\n  0%,100%{transform:translateY(0)}\n  50%{transform:translateY(-5px)}\n}\n\n@keyframes shine{\n  0%{transform:translateX(-100%);opacity:0}\n  50%{opacity:1}\n  100%{transform:translateX(100%);opacity:0}\n}\n\n@keyframes ambient{\n  0%,100%{opacity:0.3}\n  50%{opacity:0.6}\n}\n\n@keyframes pulseHeart{\n  0%,100%{transform:scale(1)}\n  50%{transform:scale(1.15)}\n}\n\n@keyframes pulseAlert{\n  0%,100%{transform:scale(1); box-shadow:0 0 10px rgba(59,130,246,0.5)}\n  50%{transform:scale(1.05); box-shadow:0 0 18px rgba(59,130,246,0.9)}\n}\n</style>"
    },
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "conteudo": "https://docs.google.com/forms/d/e/1FAIpQLSedYYfOT1fPNndRF7RpDWV7SeZmWi42riAUQOhhuv6RAtxevg/viewform?usp=publish-editor"
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
