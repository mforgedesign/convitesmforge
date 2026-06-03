window.config = {
  "evento": {
    "tipo": "Casamento",
    "nome": "Anderson e Aline",
    "idade": 0,
    "data": "2026-09-12",
    "hora": "16:00",
    "endereco": ""
  },
  "convite": {
    "paletaCores": "Branco e Dourado",
    "tema": "Salão Elegante",
    "musica": "assets/music_1780517709235.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Anderson-e-Aline",
    "seo": {
      "pageTitle": "Anderson e Aline | Casamento",
      "ogTitle": "Você está convidado para o casamento de Anderson e Aline!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1780517709235.png",
    "aberturaSlides": [
      "assets/slide1_1780517709235.mp4",
      "assets/slide2_1780517709235.mp4",
      "assets/slide3_1780517709235.mp4"
    ],
    "folhaVazia": "assets/folha_1780517709235.jpg",
    "folhaPreenchida": "assets/folha_1780517709235.jpg",
    "musica": "assets/music_1780517709235.mp3",
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/LgCivnmN4QhPkSDt6"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<style>\n@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&display=swap');\n\n.wg-wrap {\n  font-family: 'Jost', sans-serif;\n  color: #2e1f08;\n  position: relative;\n  padding: 4px 0;\n}\n\n/* ── Divisor dourado ── */\n.wg-divider {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 24px;\n  animation: wg-rise 0.6s cubic-bezier(0.22,1,0.36,1) both;\n}\n.wg-divider::before,\n.wg-divider::after {\n  content: '';\n  flex: 1;\n  height: 1px;\n  background: linear-gradient(to right, transparent, #c9973a, transparent);\n  animation: wg-shimmer-line 3s ease-in-out infinite;\n}\n.wg-divider::after { animation-delay: 1.5s; }\n@keyframes wg-shimmer-line {\n  0%,100% { opacity: 0.4; }\n  50%      { opacity: 1; }\n}\n.wg-divider-label {\n  font-family: 'Cormorant Garamond', serif;\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.32em;\n  color: #c9973a;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n\n/* ── Cards ── */\n.wg-card {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n  background: rgba(255,255,255,0.7);\n  border: 1px solid rgba(201,151,58,0.3);\n  border-radius: 16px;\n  padding: 18px 16px;\n  margin-bottom: 10px;\n  animation: wg-rise 0.65s cubic-bezier(0.22,1,0.36,1) both;\n  animation-delay: var(--d, 0s);\n  transition: background 0.25s, border-color 0.25s, box-shadow 0.25s;\n}\n.wg-card:hover {\n  background: rgba(255,255,255,0.95);\n  border-color: rgba(201,151,58,0.6);\n  box-shadow: 0 4px 20px rgba(201,151,58,0.1);\n}\n@keyframes wg-rise {\n  from { opacity: 0; transform: translateY(16px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n/* ── Ícone ── */\n.wg-icon {\n  width: 46px; height: 46px;\n  border-radius: 12px;\n  background: linear-gradient(135deg, #fdf6e3, #f5e6b8);\n  border: 1px solid rgba(201,151,58,0.35);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  animation: wg-glow 4s ease-in-out infinite;\n  animation-delay: var(--d, 0s);\n}\n.wg-icon i { font-size: 17px; color: #b8832a; }\n@keyframes wg-glow {\n  0%,100% { box-shadow: 0 0 0 0 rgba(201,151,58,0); }\n  50%      { box-shadow: 0 0 10px 2px rgba(201,151,58,0.2); }\n}\n\n/* ── Texto ── */\n.wg-card-body { flex: 1; min-width: 0; }\n.wg-card-title {\n  font-family: 'Cormorant Garamond', serif;\n  font-size: 16px;\n  font-weight: 600;\n  color: #7a4f10;\n  margin-bottom: 4px;\n  line-height: 1.25;\n  letter-spacing: 0.02em;\n}\n.wg-card-text {\n  font-family: 'Jost', sans-serif;\n  font-size: 13px;\n  font-weight: 300;\n  color: #5a4020;\n  line-height: 1.6;\n  letter-spacing: 0.01em;\n}\n\n/* ── Ornamento entre cards ── */\n.wg-ornament {\n  text-align: center;\n  color: rgba(201,151,58,0.4);\n  font-size: 10px;\n  letter-spacing: 0.3em;\n  margin: 2px 0;\n  animation: wg-rise 0.65s cubic-bezier(0.22,1,0.36,1) both;\n  animation-delay: var(--d, 0s);\n}\n</style>\n\n<div class=\"wg-wrap\">\n\n  <div class=\"wg-divider\">\n    <div class=\"wg-divider-label\">Manual do Convidado</div>\n  </div>\n\n  <div class=\"wg-card\" style=\"--d:.08s\">\n    <div class=\"wg-icon\" style=\"--d:.08s\">\n      <i class=\"fa-regular fa-clock\"></i>\n    </div>\n    <div class=\"wg-card-body\">\n      <p class=\"wg-card-title\">Chegue no Horário</p>\n      <p class=\"wg-card-text\">Sua presença pontual é muito importante para nós.</p>\n    </div>\n  </div>\n\n  <div class=\"wg-ornament\" style=\"--d:.16s\">✦   ✦   ✦</div>\n\n  <div class=\"wg-card\" style=\"--d:.22s\">\n    <div class=\"wg-icon\" style=\"--d:.22s\">\n      <i class=\"fa-regular fa-calendar-check\"></i>\n    </div>\n    <div class=\"wg-card-body\">\n      <p class=\"wg-card-title\">Confirme sua Presença</p>\n      <p class=\"wg-card-text\">Por favor, confirme presença pelo menos 15 dias antes do evento.</p>\n    </div>\n  </div>\n\n  <div class=\"wg-ornament\" style=\"--d:.30s\">✦   ✦   ✦</div>\n\n  <div class=\"wg-card\" style=\"--d:.36s\">\n    <div class=\"wg-icon\" style=\"--d:.36s\">\n      <i class=\"fa-solid fa-champagne-glasses\"></i>\n    </div>\n    <div class=\"wg-card-body\">\n      <p class=\"wg-card-title\">Divirta-se Bastante!</p>\n      <p class=\"wg-card-text\">Estamos ansiosos para celebrar este momento especial com você.</p>\n    </div>\n  </div>\n\n  <div class=\"wg-ornament\" style=\"--d:.44s\">✦   ✦   ✦</div>\n\n  <div class=\"wg-card\" style=\"--d:.50s\">\n    <div class=\"wg-icon\" style=\"--d:.50s\">\n      <i class=\"fa-solid fa-cake-candles\"></i>\n    </div>\n    <div class=\"wg-card-body\">\n      <p class=\"wg-card-title\">Não Vá sem um Abraço e um Pedaço de Bolo</p>\n      <p class=\"wg-card-text\">Queremos compartilhar cada instante com você.</p>\n    </div>\n  </div>\n\n</div>"
    },
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "conteudo": "https://sites.wedy.com/casamento-lwxt/confirmacao-de-presenca"
    },
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Lista de Presentes",
      "icone": "fa-solid fa-gift",
      "conteudo": "https://sites.wedy.com/casamento-lwxt/lista-de-presentes"
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
    "buttonColor": "#9d6729",
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
