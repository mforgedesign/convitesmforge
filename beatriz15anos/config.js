window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Beatriz",
    "idade": 15,
    "data": "2026-05-30",
    "hora": "21:00",
    "endereco": " Buffet Pavanelli Butantã"
  },
  "convite": {
    "paletaCores": "Vermelho/Dourado",
    "tema": "15 Anos",
    "musica": "assets/music_1780517767658.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "beatriz15anos",
    "seo": {
      "pageTitle": "Convite: 15 Anos - Beatriz",
      "ogTitle": "Você está convidado para os 15 anos da Beatriz!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1780517767658.jpg",
    "aberturaSlides": [
      "assets/slide1_1780517767658.mp4",
      "assets/slide2_1780517767658.mp4",
      "assets/slide3_1780517767658.mp4",
      "assets/slide4_1780517767658.mp4"
    ],
    "folhaVazia": "assets/folha_1780517767658.jpg",
    "folhaPreenchida": "assets/folha_1780517767658.jpg",
    "musica": "assets/music_1780517767658.mp3",
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/tnU7BXBieHrhY9XK6"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<div class=\"relative text-white\">\n\n  <style>\n    .gift-wrapper {\n      position: relative;\n      padding: 20px;\n      border-radius: 26px;\n      overflow: hidden;\n      background: linear-gradient(135deg, #3a0d0d, #5a1a1a, #2b0a0a);\n      box-shadow: inset 0 0 40px rgba(255,215,0,0.05),\n                  0 10px 40px rgba(0,0,0,0.5);\n    }\n\n    .gift-wrapper::after {\n      content: \"\";\n      position: absolute;\n      inset: 0;\n      background: radial-gradient(circle at 20% 30%, rgba(255,215,0,0.08), transparent 40%);\n      pointer-events: none;\n    }\n\n    .ornament {\n      text-align: center;\n      font-size: 10px;\n      letter-spacing: 3px;\n      color: rgba(255,215,0,0.7);\n      margin: 12px 0;\n    }\n\n    .gift-block {\n      padding: 14px 16px;\n      border-radius: 18px;\n      background: rgba(255,255,255,0.04);\n      border: 1px solid rgba(255,215,0,0.2);\n      backdrop-filter: blur(10px);\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      transition: 0.35s;\n      position: relative;\n    }\n\n    .gift-block:hover {\n      transform: scale(1.02);\n      background: rgba(255,215,0,0.08);\n      box-shadow: 0 8px 25px rgba(0,0,0,0.4);\n    }\n\n    .gift-block::before {\n      content: \"\";\n      position: absolute;\n      left: 0;\n      top: 20%;\n      bottom: 20%;\n      width: 3px;\n      border-radius: 2px;\n      background: linear-gradient(#ffd700,#ffb347);\n      opacity: 0.8;\n    }\n\n    .gift-icon {\n      width: 44px;\n      height: 44px;\n      border-radius: 50%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: linear-gradient(135deg,#ffd700,#ffb347);\n      color: #3a0d0d;\n      box-shadow: 0 6px 18px rgba(0,0,0,0.4);\n      position: relative;\n    }\n\n    .gift-title {\n      font-size: 14px;\n      font-weight: 600;\n    }\n\n    .gift-desc {\n      font-size: 11px;\n      opacity: 0.75;\n    }\n\n    .pix-box {\n      margin-top: 10px;\n      padding: 16px;\n      border-radius: 18px;\n      text-align: center;\n      background: linear-gradient(135deg, rgba(255,215,0,0.2), rgba(255,255,255,0.05));\n      border: 1px solid rgba(255,215,0,0.3);\n    }\n\n    .pix-key {\n      font-size: 14px;\n      font-weight: 600;\n      letter-spacing: 1px;\n      margin-top: 4px;\n      color: #ffd700;\n    }\n\n    .pix-btn {\n      margin-top: 10px;\n      width: 100%;\n      padding: 12px;\n      border-radius: 14px;\n      font-size: 11px;\n      font-weight: 600;\n      letter-spacing: 1px;\n      background: linear-gradient(135deg,#ffd700,#ffb347);\n      color: #3a0d0d;\n      border: none;\n      transition: 0.3s;\n    }\n\n    .pix-btn:hover {\n      transform: scale(1.03);\n      filter: brightness(1.1);\n    }\n  </style>\n\n  <div class=\"gift-wrapper space-y-2\">\n\n    <div class=\"ornament\">✦ ✧ ✦</div>\n\n    <div class=\"gift-block\">\n      <div class=\"gift-icon\"><i class=\"fa-solid fa-palette\"></i></div>\n      <div><div class=\"gift-title\">Maquiagem</div></div>\n    </div>\n\n    <div class=\"gift-block\">\n      <div class=\"gift-icon\"><i class=\"fa-regular fa-gem\"></i></div>\n      <div>\n        <div class=\"gift-title\">Joias / Acessórios</div>\n        <div class=\"gift-desc\">Preferência dourado</div>\n      </div>\n    </div>\n\n    <div class=\"gift-block\">\n      <div class=\"gift-icon\"><i class=\"fa-solid fa-ring\"></i></div>\n      <div>\n        <div class=\"gift-title\">Anel</div>\n        <div class=\"gift-desc\">Tamanho 18</div>\n      </div>\n    </div>\n\n    <div class=\"gift-block\">\n      <div class=\"gift-icon\"><i class=\"fa-solid fa-shirt\"></i></div>\n      <div>\n        <div class=\"gift-title\">Pijamas de frio</div>\n        <div class=\"gift-desc\">Tamanho G</div>\n      </div>\n    </div>\n\n    <div class=\"gift-block\">\n      <div class=\"gift-icon\"><i class=\"fa-solid fa-spray-can-sparkles\"></i></div>\n      <div><div class=\"gift-title\">Body Splash / Perfumes</div></div>\n    </div>\n\n    <div class=\"gift-block\">\n      <div class=\"gift-icon\"><i class=\"fa-solid fa-socks\"></i></div>\n      <div>\n        <div class=\"gift-title\">Calçados</div>\n        <div class=\"gift-desc\">39 / 40</div>\n      </div>\n    </div>\n\n    <div class=\"ornament\">✦ ✧ ✦</div>\n\n    <div class=\"pix-box\">\n      <div class=\"gift-desc\">Caso prefira presentear em valor</div>\n      <div class=\"pix-key\">443.233.318-94</div>\n\n      <button class=\"pix-btn\"\n        onclick=\"navigator.clipboard.writeText('443.233.318-94'); alert('Chave PIX copiada!');\">\n        Copiar chave PIX\n      </button>\n    </div>\n\n  </div>\n\n</div>"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<div class=\"relative text-white\">\n\n  <style>\n    .manual-wrapper {\n      padding: 24px;\n      border-radius: 26px;\n      background: linear-gradient(135deg, #2b0a0a, #5a1a1a, #3a0d0d);\n      box-shadow: inset 0 0 40px rgba(255,215,0,0.05),\n                  0 12px 45px rgba(0,0,0,0.5);\n      line-height: 1.6;\n    }\n\n    .ornament {\n      text-align: center;\n      font-size: 10px;\n      letter-spacing: 3px;\n      color: rgba(255,215,0,0.7);\n      margin: 14px 0;\n    }\n\n    .intro, .closing {\n      font-size: 13px;\n      text-align: center;\n      opacity: 0.9;\n    }\n\n    .highlight {\n      padding: 14px;\n      border-radius: 16px;\n      text-align: center;\n      font-weight: 600;\n      background: linear-gradient(135deg, rgba(255,215,0,0.25), rgba(255,255,255,0.05));\n      border: 1px solid rgba(255,215,0,0.35);\n      color: #ffd700;\n    }\n\n    .section {\n      padding: 14px;\n      border-radius: 18px;\n      background: rgba(255,255,255,0.04);\n      border: 1px solid rgba(255,215,0,0.2);\n      position: relative;\n      margin-top: 8px;\n    }\n\n    .section::before {\n      content: \"\";\n      position: absolute;\n      left: 0;\n      top: 20%;\n      bottom: 20%;\n      width: 3px;\n      background: linear-gradient(#ffd700,#ffb347);\n      border-radius: 2px;\n    }\n\n    .section-title {\n      font-size: 14px;\n      font-weight: 600;\n      margin-bottom: 4px;\n    }\n\n    .section-text {\n      font-size: 12px;\n      opacity: 0.85;\n    }\n\n    .simple-text {\n      font-size: 12px;\n      text-align: center;\n      opacity: 0.85;\n      margin-top: 6px;\n    }\n  </style>\n\n  <div class=\"manual-wrapper space-y-3\">\n\n    <div class=\"intro\">\n      Seja muito bem-vindo(a)!<br>\n      É uma alegria imensa contar com a sua presença. Preparamos este manual para que você se sinta confortável, bem informado(a) e aproveite cada momento do nosso evento.\n    </div>\n\n    <div class=\"ornament\">✦ ✧ ✦</div>\n\n    <div class=\"highlight\">\n      Convidado não convida!\n    </div>\n\n    <div class=\"section\">\n      <div class=\"section-title\">Traje:</div>\n      <div class=\"section-text\">\n        Para uma noite de glamour esporte fino ou social. Evite o vermelho (reservado para estrela da noite)\n      </div>\n    </div>\n\n    <div class=\"simple-text\">\n      Agradecemos a compreensão e colaboração de todos.\n    </div>\n\n    <div class=\"section\">\n      <div class=\"section-title\">Pontualidade:</div>\n      <div class=\"section-text\">\n        A programação foi pensada com carinho e seguirá os horários previstos. Sua pontualidade é muito importante. Chegue com antecedência para aproveitar tudo com tranquilidade.\n      </div>\n    </div>\n\n    <div class=\"section\">\n      <div class=\"section-title\">Confirme sua presença!</div>\n      <div class=\"section-text\">\n        Por favor, confirme presença pelo menos 15 dias antes do evento.\n      </div>\n    </div>\n\n    <div class=\"ornament\">✦ ✧ ✦</div>\n\n    <div class=\"closing\">\n      Agradecemos por fazer parte deste momento tão especial. Esperamos que sua experiência seja leve, marcante e inesquecível! ✨\n    </div>\n\n  </div>\n\n</div>"
    },
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "ConfirmarPresença",
      "icone": "fa-solid fa-check",
      "conteudo": "https://docs.google.com/forms/d/e/1FAIpQLSd6YTaqZYNnoEXWJyJRmbERzk67e40KyNTRpL0ji0tjXZQHsQ/viewform?usp=publish-editor"
    }
  ],
  "upsell": {
    "galeriaFotos": false,
    "saveTheDate": false,
    "lembrete": true
  },
  "config": {
    "exibirMarcaDagua": false,
    "buttonColor": "#8f1a2d",
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
