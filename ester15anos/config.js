window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Ester",
    "idade": 15,
    "data": "2026-08-28",
    "hora": "18:00",
    "endereco": "Avenida Ulisses Guimarães \n3609- Iparana Caucaia "
  },
  "convite": {
    "paletaCores": "Azul com Prata",
    "tema": "15 Anos",
    "musica": "assets/music_1780517838527.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "ester15anos",
    "seo": {
      "pageTitle": "Convite: 15 Anos - Alice",
      "ogTitle": "Você está convidado para os 15 anos da Alice!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1780517838527.jpg",
    "aberturaSlides": [
      "assets/slide1_1780517838527.mp4",
      "assets/slide2_1780517838527.mp4",
      "assets/slide3_1780517838527.mp4",
      "assets/slide4_1780517838527.mp4",
      "assets/slide5_1780517838527.mp4"
    ],
    "folhaVazia": "assets/folha_1780517838527.jpg",
    "folhaPreenchida": "assets/folha_1780517838527.jpg",
    "musica": "assets/music_1780517838527.mp3",
    "fotos": []
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/sXU3ifR9SxvUQctC6"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<div class=\"relative text-white\">\n\n  <style>\n    .gift-wrapper {\n      position: relative;\n      padding: 20px;\n      border-radius: 26px;\n      overflow: hidden;\n      background: linear-gradient(135deg, #3b2a4a, #2e3f38, #4a2c3a);\n      box-shadow: inset 0 0 40px rgba(255,255,255,0.05),\n                  0 10px 40px rgba(0,0,0,0.4);\n    }\n\n    /* textura leve */\n    .gift-wrapper::after {\n      content: \"\";\n      position: absolute;\n      inset: 0;\n      background: url('https://www.transparenttextures.com/patterns/noise.png');\n      opacity: 0.15;\n      pointer-events: none;\n    }\n\n    /* linha ornamental */\n    .ornament {\n      text-align: center;\n      font-size: 10px;\n      letter-spacing: 3px;\n      opacity: 0.6;\n      margin: 10px 0;\n    }\n\n    .gift-block {\n      padding: 16px;\n      border-radius: 18px;\n      background: rgba(255,255,255,0.06);\n      border: 1px solid rgba(255,255,255,0.12);\n      backdrop-filter: blur(10px);\n      position: relative;\n      transition: 0.4s;\n    }\n\n    .gift-block:hover {\n      transform: scale(1.02);\n      background: rgba(255,255,255,0.1);\n    }\n\n    .gift-row {\n      display: flex;\n      align-items: center;\n      gap: 14px;\n    }\n\n    .gift-icon {\n      width: 48px;\n      height: 48px;\n      border-radius: 50%;\n      background: linear-gradient(135deg,#f9a8d4,#c084fc,#86efac);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      box-shadow: 0 6px 18px rgba(0,0,0,0.3);\n      position: relative;\n    }\n\n    .gift-icon::after {\n      content: \"\";\n      position: absolute;\n      inset: 0;\n      border-radius: 50%;\n      background: radial-gradient(circle, rgba(255,255,255,0.4), transparent);\n      opacity: 0.6;\n    }\n\n    .gift-title {\n      font-size: 15px;\n      font-weight: 600;\n    }\n\n    .gift-desc {\n      font-size: 12px;\n      opacity: 0.7;\n    }\n\n    /* detalhe decorativo lateral */\n    .gift-block::before {\n      content: \"\";\n      position: absolute;\n      left: 0;\n      top: 20%;\n      bottom: 20%;\n      width: 3px;\n      border-radius: 2px;\n      background: linear-gradient(#f9a8d4,#c084fc,#86efac);\n      opacity: 0.6;\n    }\n  </style>\n\n  <div class=\"gift-wrapper space-y-3\">\n\n    <div class=\"ornament\">✦ ✧ ✦</div>\n\n    <!-- Calçados -->\n    <div class=\"gift-block\">\n      <div class=\"gift-row\">\n        <div class=\"gift-icon\">\n          <i class=\"fa-solid fa-socks text-white\"></i>\n        </div>\n        <div>\n          <div class=\"gift-title\">Calçados</div>\n          <div class=\"gift-desc\">Tamanho 38</div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Roupas -->\n    <div class=\"gift-block\">\n      <div class=\"gift-row\">\n        <div class=\"gift-icon\">\n          <i class=\"fa-solid fa-shirt text-white\"></i>\n        </div>\n        <div>\n          <div class=\"gift-title\">Roupas</div>\n          <div class=\"gift-desc\">Tamanho P</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"ornament\">✦ ✧ ✦</div>\n\n    <!-- Joias -->\n    <div class=\"gift-block\">\n      <div class=\"gift-row\">\n        <div class=\"gift-icon\">\n          <i class=\"fa-regular fa-gem text-white\"></i>\n        </div>\n        <div>\n          <div class=\"gift-title\">Joias</div>\n          <div class=\"gift-desc\">Prata</div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Perfumes -->\n    <div class=\"gift-block\">\n      <div class=\"gift-row\">\n        <div class=\"gift-icon\">\n          <i class=\"fa-solid fa-spray-can-sparkles text-white\"></i>\n        </div>\n        <div>\n          <div class=\"gift-title\">Perfumes</div>\n          <div class=\"gift-desc\">Fragrâncias delicadas</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"ornament\">✦ ✧ ✦</div>\n\n  </div>\n\n</div>"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<div class=\"relative text-white\">\n\n  <style>\n    .etiquette-wrapper {\n      position: relative;\n      padding: 20px;\n      border-radius: 26px;\n      overflow: hidden;\n      background: linear-gradient(135deg, #2e3f38, #3b2a4a, #4a2c3a);\n      box-shadow: inset 0 0 40px rgba(255,255,255,0.05),\n                  0 10px 40px rgba(0,0,0,0.4);\n    }\n\n    /* textura suave */\n    .etiquette-wrapper::after {\n      content: \"\";\n      position: absolute;\n      inset: 0;\n      background: url('https://www.transparenttextures.com/patterns/noise.png');\n      opacity: 0.12;\n      pointer-events: none;\n    }\n\n    /* ornamento */\n    .ornament {\n      text-align: center;\n      font-size: 10px;\n      letter-spacing: 3px;\n      opacity: 0.6;\n      margin: 12px 0;\n    }\n\n    .etiquette-item {\n      position: relative;\n      display: flex;\n      gap: 14px;\n      padding: 16px;\n      border-radius: 18px;\n      background: rgba(255,255,255,0.05);\n      border: 1px solid rgba(255,255,255,0.12);\n      backdrop-filter: blur(10px);\n      transition: all .35s ease;\n    }\n\n    .etiquette-item:hover {\n      transform: scale(1.02);\n      background: rgba(255,255,255,0.1);\n    }\n\n    /* barra lateral elegante */\n    .etiquette-item::before {\n      content: \"\";\n      position: absolute;\n      left: 0;\n      top: 20%;\n      bottom: 20%;\n      width: 3px;\n      border-radius: 2px;\n      background: linear-gradient(#86efac,#f9a8d4,#c084fc);\n      opacity: 0.7;\n    }\n\n    .etiquette-icon {\n      width: 44px;\n      height: 44px;\n      border-radius: 50%;\n      background: linear-gradient(135deg,#86efac,#f9a8d4,#c084fc);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      box-shadow: 0 6px 18px rgba(0,0,0,0.3);\n      flex-shrink: 0;\n      position: relative;\n    }\n\n    .etiquette-icon::after {\n      content: \"\";\n      position: absolute;\n      inset: 0;\n      border-radius: 50%;\n      background: radial-gradient(circle, rgba(255,255,255,0.4), transparent);\n      opacity: 0.5;\n    }\n\n    .etiquette-title {\n      font-size: 14px;\n      font-weight: 600;\n      letter-spacing: 0.3px;\n    }\n\n    .etiquette-desc {\n      font-size: 12px;\n      opacity: 0.75;\n      line-height: 1.4;\n    }\n\n    /* destaque do traje */\n    .highlight {\n      margin-top: 10px;\n      padding: 14px;\n      border-radius: 16px;\n      text-align: center;\n      font-size: 13px;\n      font-weight: 500;\n      background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03));\n      border: 1px solid rgba(255,255,255,0.15);\n      letter-spacing: 1px;\n    }\n  </style>\n\n  <div class=\"etiquette-wrapper space-y-3\">\n\n    <div class=\"ornament\">✦ ✧ ✦</div>\n\n    <!-- Traje -->\n    <div class=\"etiquette-item\">\n      <div class=\"etiquette-icon\">\n        <i class=\"fa-solid fa-user-tie text-white\"></i>\n      </div>\n      <div>\n        <div class=\"etiquette-title\">Traje Social</div>\n        <div class=\"etiquette-desc\">\n          Sugerimos traje social para a ocasião, mantendo a elegância e harmonia com o ambiente do evento.\n        </div>\n      </div>\n    </div>\n\n    <!-- Destaque -->\n    <div class=\"highlight\">\n      ✧ Elegância e sofisticação tornam este momento ainda mais especial ✧\n    </div>\n\n    <div class=\"ornament\">✦ ✧ ✦</div>\n\n  </div>\n\n</div>"
    },
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "ConfirmarPresença",
      "icone": "fa-solid fa-check",
      "conteudo": "https://docs.google.com/forms/d/e/1FAIpQLScDaH9OLiRZAS_Fqpe2lMqfEJG_Qk_w3WtZftWz5uLN7MAtIw/viewform?usp=publish-editor"
    }
  ],
  "upsell": {
    "galeriaFotos": false,
    "saveTheDate": false,
    "lembrete": true
  },
  "config": {
    "exibirMarcaDagua": false,
    "buttonColor": "#305f49",
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
