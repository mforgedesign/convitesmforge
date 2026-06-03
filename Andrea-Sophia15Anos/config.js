window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Andrea Sophia",
    "idade": 15,
    "data": "2026-08-08",
    "hora": "20:00",
    "endereco": ""
  },
  "convite": {
    "paletaCores": "",
    "tema": "",
    "musica": "assets/music_1780517717526.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Andrea-Sophia15Anos",
    "seo": {
      "pageTitle": "Andrea Sophia | 15 Anos",
      "ogTitle": "Você está convidado para os 15 anos da Andrea Sophia!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1780517717526.jpg",
    "aberturaSlides": [
      "assets/slide1_1780517717526.mp4",
      "assets/slide2_1780517717526.mp4",
      "assets/slide3_1780517717526.mp4",
      "assets/slide4_1780517717526.mp4",
      "assets/slide5_1780517717526.mp4"
    ],
    "folhaVazia": "assets/folha_1780517717526.jpg",
    "folhaPreenchida": "assets/folha_1780517717526.jpg",
    "musica": "assets/music_1780517717526.mp3",
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/YnVR7MhheQVNzxaXA"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<style>\n:root{\n  --azul:#0c1b3a;\n  --azul-escuro:#070f22;\n  --dourado:#d4af37;\n  --vermelho:#7a0f1a;\n}\n\n.gift-section{\n  background: radial-gradient(circle at top, rgba(212,175,55,0.15), transparent 60%),\n              linear-gradient(180deg, var(--azul) 0%, var(--azul-escuro) 100%);\n  padding:16px;\n  border-radius:20px;\n  position:relative;\n  overflow:hidden;\n}\n\n/* brilho animado */\n.gift-section::before{\n  content:\"\";\n  position:absolute;\n  inset:0;\n  background:linear-gradient(120deg, transparent, rgba(212,175,55,0.25), transparent);\n  animation:shine 6s linear infinite;\n}\n\n@keyframes shine{\n  0%{transform:translateX(-100%)}\n  100%{transform:translateX(100%)}\n}\n\n/* grid */\n.gift-grid{\n  display:grid;\n  grid-template-columns:1fr 1fr;\n  gap:12px;\n  position:relative;\n  z-index:2;\n}\n\n/* cards */\n.gift-card{\n  background:rgba(255,255,255,0.05);\n  border:1px solid rgba(212,175,55,0.25);\n  border-radius:18px;\n  padding:14px;\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  justify-content:center;\n  text-align:center;\n  backdrop-filter: blur(10px);\n  box-shadow:0 8px 25px rgba(0,0,0,0.4);\n  transition: all .4s ease;\n  animation:fadeUp .8s ease forwards;\n  opacity:0;\n}\n\n/* animação em sequência */\n.gift-card:nth-child(1){animation-delay:.2s}\n.gift-card:nth-child(2){animation-delay:.4s}\n.gift-card:nth-child(3){animation-delay:.6s}\n.gift-card:nth-child(4){animation-delay:.8s}\n\n@keyframes fadeUp{\n  from{opacity:0; transform:translateY(20px) scale(.95)}\n  to{opacity:1; transform:translateY(0) scale(1)}\n}\n\n/* ícones */\n.gift-card i{\n  font-size:22px;\n  margin-bottom:8px;\n  color:var(--dourado);\n  text-shadow:0 0 10px rgba(212,175,55,0.6);\n}\n\n/* texto */\n.gift-card span{\n  font-size:11px;\n  font-weight:500;\n  color:#f1f1f1;\n  letter-spacing:.5px;\n}\n\n/* detalhe vermelho elegante */\n.gift-card::after{\n  content:\"\";\n  position:absolute;\n  bottom:0;\n  left:0;\n  width:100%;\n  height:2px;\n  background:linear-gradient(90deg, transparent, var(--vermelho), transparent);\n  opacity:.6;\n}\n</style>\n\n<div class=\"gift-section\">\n  <div class=\"gift-grid\">\n\n    <div class=\"gift-card\">\n      <i class=\"fa-solid fa-shoe-prints\"></i>\n      <span>Calçados<br>37/38</span>\n    </div>\n\n    <div class=\"gift-card\">\n      <i class=\"fa-solid fa-shirt\"></i>\n      <span>Roupas<br>M/G 40/42</span>\n    </div>\n\n    <div class=\"gift-card\">\n      <i class=\"fa-solid fa-spray-can-sparkles\"></i>\n      <span>Maquiagens /<br>Perfumaria</span>\n    </div>\n\n    <div class=\"gift-card\">\n      <i class=\"fa-regular fa-gem\"></i>\n      <span>Joias /<br>Acessórios</span>\n    </div>\n\n  </div>\n</div>"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<style>\n:root{\n  --azul:#0c1b3a;\n  --azul-escuro:#070f22;\n  --dourado:#d4af37;\n  --vermelho:#7a0f1a;\n}\n\n/* container */\n.manual-section{\n  background: radial-gradient(circle at top, rgba(212,175,55,0.12), transparent 60%),\n              linear-gradient(180deg, var(--azul) 0%, var(--azul-escuro) 100%);\n  padding:18px;\n  border-radius:22px;\n  position:relative;\n  overflow:hidden;\n}\n\n/* brilho suave animado */\n.manual-section::before{\n  content:\"\";\n  position:absolute;\n  inset:0;\n  background:linear-gradient(120deg, transparent, rgba(212,175,55,0.2), transparent);\n  animation:shine 7s linear infinite;\n}\n\n@keyframes shine{\n  0%{transform:translateX(-100%)}\n  100%{transform:translateX(100%)}\n}\n\n/* título */\n.manual-title{\n  text-align:center;\n  font-size:14px;\n  letter-spacing:2px;\n  color:var(--dourado);\n  margin-bottom:12px;\n  position:relative;\n  z-index:2;\n  text-transform:uppercase;\n}\n\n/* intro */\n.manual-intro{\n  font-size:12px;\n  color:#eaeaea;\n  text-align:center;\n  line-height:1.6;\n  margin-bottom:16px;\n  opacity:.9;\n  position:relative;\n  z-index:2;\n}\n\n/* lista */\n.manual-list{\n  display:flex;\n  flex-direction:column;\n  gap:12px;\n  position:relative;\n  z-index:2;\n}\n\n/* card */\n.manual-card{\n  display:flex;\n  gap:12px;\n  align-items:flex-start;\n  background:rgba(255,255,255,0.05);\n  border:1px solid rgba(212,175,55,0.25);\n  border-radius:18px;\n  padding:14px;\n  backdrop-filter:blur(10px);\n  box-shadow:0 10px 25px rgba(0,0,0,0.45);\n  animation:fadeUp .8s ease forwards;\n  opacity:0;\n}\n\n/* delays */\n.manual-card:nth-child(1){animation-delay:.2s}\n.manual-card:nth-child(2){animation-delay:.4s}\n.manual-card:nth-child(3){animation-delay:.6s}\n.manual-card:nth-child(4){animation-delay:.8s}\n.manual-card:nth-child(5){animation-delay:1s}\n\n@keyframes fadeUp{\n  from{opacity:0; transform:translateY(20px) scale(.96)}\n  to{opacity:1; transform:translateY(0) scale(1)}\n}\n\n/* ícone */\n.manual-icon{\n  width:42px;\n  height:42px;\n  border-radius:50%;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  background:rgba(212,175,55,0.1);\n  border:1px solid rgba(212,175,55,0.3);\n  flex-shrink:0;\n  box-shadow:0 0 12px rgba(212,175,55,0.4);\n}\n\n.manual-icon i{\n  color:var(--dourado);\n  font-size:18px;\n}\n\n/* conteúdo */\n.manual-content h3{\n  font-size:12px;\n  font-weight:600;\n  color:#fff;\n  margin-bottom:4px;\n  letter-spacing:.5px;\n}\n\n.manual-content p{\n  font-size:11px;\n  color:#d6d6d6;\n  line-height:1.5;\n}\n\n/* detalhe vermelho */\n.manual-card::after{\n  content:\"\";\n  position:absolute;\n  bottom:0;\n  left:0;\n  width:100%;\n  height:2px;\n  background:linear-gradient(90deg, transparent, var(--vermelho), transparent);\n  opacity:.5;\n}\n</style>\n\n<div class=\"manual-section\">\n\n  <div class=\"manual-title\">Manual do Convidado</div>\n\n  <div class=\"manual-intro\">\n    É uma imensa alegria contar com sua presença. Preparamos este manual para que você se sinta confortável, bem informado(a) e aproveite cada momento do meu aniversário.\n  </div>\n\n  <div class=\"manual-list\">\n\n    <div class=\"manual-card\">\n      <div class=\"manual-icon\">\n        <i class=\"fa-regular fa-calendar-check\"></i>\n      </div>\n      <div class=\"manual-content\">\n        <h3>Confirme sua presença</h3>\n        <p>Por favor, confirme sua presença até o dia 05/07/2026 no link descrito para que o cerimonial reserve seu lugar especial.</p>\n      </div>\n    </div>\n\n    <div class=\"manual-card\">\n      <div class=\"manual-icon\">\n        <i class=\"fa-regular fa-clock\"></i>\n      </div>\n      <div class=\"manual-content\">\n        <h3>Pontualidade</h3>\n        <p>A programação foi pensada com carinho e seguirá os horários previstos. Sua pontualidade é muito importante. Chegue com antecedência para aproveitar tudo com tranquilidade.</p>\n      </div>\n    </div>\n\n    <div class=\"manual-card\">\n      <div class=\"manual-icon\">\n        <i class=\"fa-solid fa-user-tie\"></i>\n      </div>\n      <div class=\"manual-content\">\n        <h3>Traje: Esporte Fino</h3>\n        <p>Para manter a harmonia visual do evento, não será permitido o uso das cores dourado, amarelo, vermelho e azul. Agradecemos a compreensão e colaboração.</p>\n      </div>\n    </div>\n\n    <div class=\"manual-card\">\n      <div class=\"manual-icon\">\n        <i class=\"fa-solid fa-triangle-exclamation\"></i>\n      </div>\n      <div class=\"manual-content\">\n        <h3>Convidado não convida</h3>\n        <p>O convite é pessoal e intransferível. Contamos com sua compreensão para manter a organização do evento.</p>\n      </div>\n    </div>\n\n  </div>\n\n</div>"
    },
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "conteudo": "https://docs.google.com/forms/d/e/1FAIpQLSeVSQXzf_55KIbRwpVn2Y06BJIGoJk-WrIiVxqKoXSp7SP21Q/viewform?usp=publish-editor"
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
