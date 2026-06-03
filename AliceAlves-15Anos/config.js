window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Alice Alves",
    "idade": 15,
    "data": "2026-09-05",
    "hora": "19:00",
    "endereco": "Av. Dr. Eduardo Cotching, 658 - Jardim Analia Franco, São Paulo - SP, 03356-000"
  },
  "convite": {
    "paletaCores": "Rosa pink deep, prata, rosa bebê",
    "tema": "Jardim Encantado",
    "musica": "assets/music_1780517666783.mp3",
    "tipoAbertura": "curta",
    "particulasAbertura": true,
    "slug": "AliceAlves-15Anos",
    "seo": {
      "pageTitle": "Convite: Aniversario 15 anos - Alice Alves",
      "ogTitle": "Você está convidado para o evento de Alice Alves!",
      "ogDescription": "Embarque nessa experiência mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1780517666783.jpg",
    "aberturaSlides": [
      "assets/slide1_1780517666783.mp4"
    ],
    "folhaVazia": "assets/folha_1780517666783.jpg",
    "folhaPreenchida": "assets/folha_1780517666783.jpg",
    "musica": "assets/music_1780517666783.mp3",
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://www.google.com/maps/search/?api=1&query=Av.%20Dr.%20Eduardo%20Cotching%2C%20658%20-%20Jardim%20Analia%20Franco%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003356-000"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<div class=\"relative text-white\">\n\n  <style>\n    .gift-wrapper {\n      padding: 20px;\n      border-radius: 26px;\n      background: linear-gradient(135deg, #2a0f1c, #4a1f35, #2e1324);\n      box-shadow: inset 0 0 40px rgba(255,192,203,0.08),\n                  0 12px 45px rgba(0,0,0,0.5);\n    }\n\n    .gift-grid {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 12px;\n      margin-bottom: 24px;\n    }\n\n    .gift-item {\n      background: rgba(255,255,255,0.04);\n      padding: 12px;\n      border-radius: 14px;\n      border: 1px solid rgba(220,220,220,0.2);\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      transition: 0.3s ease;\n    }\n\n    .gift-item:hover {\n      background: rgba(255,192,203,0.08);\n      transform: translateY(-2px);\n    }\n\n    .gift-icon {\n      font-size: 20px;\n      background: linear-gradient(135deg, #f8c8dc, #c0c0c0);\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n    }\n\n    .gift-text {\n      font-size: 11px;\n      line-height: 1.3;\n      font-weight: 500;\n      color: #f5f5f5;\n    }\n\n    .pix-box {\n      background: linear-gradient(135deg, rgba(255,192,203,0.15), rgba(192,192,192,0.08));\n      padding: 16px;\n      border-radius: 16px;\n      border: 1px solid rgba(220,220,220,0.3);\n      margin-bottom: 16px;\n      text-align: center;\n      position: relative;\n      overflow: hidden;\n    }\n\n    .pix-label {\n      font-size: 10px;\n      color: #e5e5e5;\n      margin-bottom: 4px;\n      text-transform: uppercase;\n      letter-spacing: 2px;\n    }\n\n    .pix-key {\n      font-weight: bold;\n      font-size: 20px;\n      letter-spacing: 2px;\n      background: linear-gradient(135deg, #f8c8dc, #ffffff);\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n    }\n\n    .pix-button {\n      width: 100%;\n      background: linear-gradient(135deg, #f8c8dc, #c0c0c0);\n      color: #2a0f1c;\n      font-weight: bold;\n      padding: 14px;\n      border-radius: 14px;\n      border: none;\n      cursor: pointer;\n      text-transform: uppercase;\n      font-size: 12px;\n      letter-spacing: 2px;\n      transition: 0.3s ease;\n    }\n\n    .pix-button:hover {\n      transform: translateY(-2px);\n      filter: brightness(1.05);\n    }\n  </style>\n\n  <div class=\"gift-wrapper\">\n\n    <div class=\"gift-grid\">\n      <div class=\"gift-item\">\n        <i class=\"fa-solid fa-spray-can-sparkles gift-icon\"></i>\n        <span class=\"gift-text\">Perfume ou Body Splash (doce e suave)</span>\n      </div>\n\n      <div class=\"gift-item\">\n        <i class=\"fa-solid fa-spa gift-icon\"></i>\n        <span class=\"gift-text\">Maquiagens</span>\n      </div>\n\n      <div class=\"gift-item\">\n        <i class=\"fa-regular fa-gem gift-icon\"></i>\n        <span class=\"gift-text\">Joias em prata</span>\n      </div>\n\n      <div class=\"gift-item\">\n        <i class=\"fa-solid fa-shoe-prints gift-icon\"></i>\n        <span class=\"gift-text\">Calçados (tamanho 36)</span>\n      </div>\n\n      <div class=\"gift-item\">\n        <i class=\"fa-solid fa-shirt gift-icon\"></i>\n        <span class=\"gift-text\">Roupas (tamanho M)</span>\n      </div>\n\n      <div class=\"gift-item\">\n        <i class=\"fa-solid fa-heart gift-icon\"></i>\n        <span class=\"gift-text\">Itens de autocuidado</span>\n      </div>\n    </div>\n\n    <div class=\"pix-box\">\n      <p class=\"pix-label\">Chave PIX</p>\n      <p class=\"pix-key\">+55 11 93747-3910</p>\n    </div>\n\n    <button \n      onclick=\"navigator.clipboard.writeText('+55 11 93747-3910'); alert('Chave Pix copiada');\" \n      class=\"pix-button\">\n      Copiar Chave Pix <i class=\"fa-regular fa-copy\"></i>\n    </button>\n\n  </div>\n\n</div>"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5511937473910",
      "rsvpConfig": {
        "exibirNome": true,
        "exibirWhatsapp": false,
        "exibirAcompanhantes": false
      }
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<div class=\"relative text-white\">\n\n  <style>\n    .manual-wrapper {\n      padding: 24px;\n      border-radius: 26px;\n      background: linear-gradient(135deg, #2a0f1c, #4a1f35, #2e1324);\n      box-shadow: inset 0 0 40px rgba(255,192,203,0.08),\n                  0 12px 45px rgba(0,0,0,0.5);\n      line-height: 1.6;\n    }\n\n    .ornament {\n      text-align: center;\n      font-size: 10px;\n      letter-spacing: 3px;\n      color: rgba(220,220,220,0.7);\n      margin: 14px 0;\n    }\n\n    .intro, .closing {\n      font-size: 13px;\n      text-align: center;\n      opacity: 0.9;\n    }\n\n    .highlight {\n      padding: 14px;\n      border-radius: 16px;\n      text-align: center;\n      font-weight: 600;\n      background: linear-gradient(135deg, rgba(255,182,193,0.25), rgba(192,192,192,0.1));\n      border: 1px solid rgba(220,220,220,0.35);\n      color: #f8c8dc;\n    }\n\n    .section {\n      padding: 14px;\n      border-radius: 18px;\n      background: rgba(255,255,255,0.04);\n      border: 1px solid rgba(220,220,220,0.2);\n      position: relative;\n      margin-top: 8px;\n    }\n\n    .section::before {\n      content: \"\";\n      position: absolute;\n      left: 0;\n      top: 20%;\n      bottom: 20%;\n      width: 3px;\n      background: linear-gradient(#f8c8dc, #c0c0c0);\n      border-radius: 2px;\n    }\n\n    .section-title {\n      font-size: 14px;\n      font-weight: 600;\n      margin-bottom: 4px;\n      color: #ffd9ec;\n    }\n\n    .section-text {\n      font-size: 12px;\n      opacity: 0.85;\n    }\n\n    .simple-text {\n      font-size: 12px;\n      text-align: center;\n      opacity: 0.85;\n      margin-top: 6px;\n    }\n  </style>\n\n  <div class=\"manual-wrapper space-y-3\">\n\n    <div class=\"intro\">\n      Seja muito bem-vindo(a)!<br>\n      É uma alegria imensa contar com a sua presença. Preparamos este manual para que você se sinta confortável, bem informado(a) e aproveite cada momento do nosso evento.\n    </div>\n\n    <div class=\"ornament\">✦ ✧ ✦</div>\n\n    <div class=\"highlight\">\n      Convidado não convida!\n    </div>\n\n    <div class=\"section\">\n      <div class=\"section-title\">Traje:</div>\n      <div class=\"section-text\">\n        Para uma noite de glamour esporte fino ou social. Evite o rosa (reservado para estrela da noite)\n      </div>\n    </div>\n\n    <div class=\"simple-text\">\n      Agradecemos a compreensão e colaboração de todos.\n    </div>\n\n    <div class=\"section\">\n      <div class=\"section-title\">Pontualidade:</div>\n      <div class=\"section-text\">\n        A programação foi pensada com carinho e seguirá os horários previstos. Sua pontualidade é muito importante. Chegue com antecedência para aproveitar tudo com tranquilidade.\n      </div>\n    </div>\n\n    <div class=\"section\">\n      <div class=\"section-title\">Confirme sua presença!</div>\n      <div class=\"section-text\">\n        Por favor, confirme presença pelo menos 15 dias antes do evento.\n      </div>\n    </div>\n\n    <div class=\"ornament\">✦ ✧ ✦</div>\n\n    <div class=\"closing\">\n      Agradecemos por fazer parte deste momento tão especial. Esperamos que sua experiência seja leve, marcante e inesquecível! 🩷\n    </div>\n\n  </div>\n\n</div>"
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
    "buttonColor": "#e576c7",
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
