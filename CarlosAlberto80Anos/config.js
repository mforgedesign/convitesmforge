window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Carlos Alberto",
    "idade": 80,
    "data": "2026-08-21",
    "hora": "20:00",
    "horaTermino": "",
    "endereco": "",
    "frase1": "",
    "frase2": "",
    "frase3": ""
  },
  "convite": {
    "paletaCores": "",
    "tema": "",
    "musica": "assets/music_1782248271468.mp3",
    "tipoAbertura": "curta",
    "particulasAbertura": true,
    "slug": "CarlosAlberto80Anos",
    "seo": {
      "pageTitle": "Você recebeu um convite especial!",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1782248271468.png",
    "cartao": "",
    "aberturaSlides": [
      "assets/slide1_1782248271468.mp4"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1782248271468.mp4",
        "label": "Slide 1",
        "type": "video"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1782248271468.png",
    "folhaPreenchida": "assets/folha_1782248271468.png",
    "musica": "assets/music_1782248271468.mp3",
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/KrvVdYfpqSoenY1u5"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<style>\n  @keyframes shimmerSilver {\n    0%{background-position:200% center}\n    100%{background-position:-200% center}\n  }\n  @keyframes fadeUp {\n    from{opacity:0;transform:translateY(8px)}\n    to{opacity:1;transform:translateY(0)}\n  }\n  @keyframes floatIcon {\n    0%,100%{transform:translateY(0)}\n    50%{transform:translateY(-4px)}\n  }\n  @keyframes particleDrift {\n    0%{transform:translateY(0) translateX(0) scale(1);opacity:.4}\n    40%{transform:translateY(-14px) translateX(6px) scale(1.3);opacity:.8}\n    70%{transform:translateY(-6px) translateX(-4px) scale(.7);opacity:.2}\n    100%{transform:translateY(0) translateX(0) scale(1);opacity:.4}\n  }\n\n  .wrap {\n    background: linear-gradient(160deg, #04080f 0%, #070d1e 55%, #050810 100%);\n    border-radius: 24px;\n    padding: 38px 22px 36px;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n    position: relative;\n    overflow: hidden;\n    text-align: center;\n  }\n\n  .wrap::before {\n    content:'';\n    position:absolute;top:0;left:0;right:0;height:1px;\n    background: linear-gradient(90deg, transparent, #9ab0cc, #dce8f5, #9ab0cc, transparent);\n    animation: shimmerSilver 4s linear infinite;\n    background-size: 200% auto;\n  }\n  .wrap::after {\n    content:'';\n    position:absolute;bottom:0;left:0;right:0;height:1px;\n    background: linear-gradient(90deg, transparent, #7090b033, transparent);\n  }\n\n  .particle {\n    position:absolute;border-radius:50%;pointer-events:none;\n    animation:particleDrift linear infinite;\n  }\n\n  .eyebrow {\n    font-size: 9px;\n    letter-spacing: 6px;\n    text-transform: uppercase;\n    color: #3a5070;\n    margin: 0 0 12px;\n    animation: fadeUp .5s ease both;\n    position: relative; z-index: 1;\n  }\n\n  .title {\n    font-size: 20px;\n    font-weight: 300;\n    letter-spacing: 4px;\n    text-transform: uppercase;\n    background: linear-gradient(90deg, #7090b0 0%, #c8dced 30%, #eaf3fa 50%, #b0cce0 70%, #7090b0 100%);\n    background-size: 200% auto;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    animation: shimmerSilver 5s linear infinite, fadeUp .5s ease .1s both;\n    margin: 0 0 6px;\n    position: relative; z-index: 1;\n  }\n\n  .subtitle {\n    font-size: 10px;\n    color: #2a4060;\n    letter-spacing: 3px;\n    margin: 0 0 28px;\n    animation: fadeUp .5s ease .15s both;\n    position: relative; z-index: 1;\n  }\n\n  .divider {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin: 0 0 24px;\n    opacity: .35;\n    position: relative; z-index: 1;\n  }\n  .divider-line {\n    flex:1; height:.5px;\n    background: linear-gradient(to right, transparent, #9ab0cc, transparent);\n  }\n  .divider-dot { width:3px;height:3px;border-radius:50%;background:#9ab0cc; }\n\n  .items-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    position: relative; z-index: 1;\n  }\n\n  .item-card {\n    display: flex;\n    align-items: center;\n    gap: 14px;\n    text-align: left;\n    padding: 16px 18px;\n    border-radius: 16px;\n    border: .5px solid rgba(154,176,204,.12);\n    background: rgba(255,255,255,.018);\n    animation: fadeUp .5s ease both;\n  }\n  .item-card:nth-child(1){animation-delay:.2s}\n  .item-card:nth-child(2){animation-delay:.28s}\n  .item-card:nth-child(3){animation-delay:.36s}\n  .item-card:nth-child(4){animation-delay:.44s}\n\n  .item-icon {\n    font-size: 22px;\n    flex-shrink: 0;\n    animation: floatIcon 4s ease-in-out infinite;\n  }\n  .item-card:nth-child(2) .item-icon{animation-delay:.5s}\n  .item-card:nth-child(3) .item-icon{animation-delay:1s}\n  .item-card:nth-child(4) .item-icon{animation-delay:1.5s}\n\n  .item-name {\n    font-size: 13.5px;\n    font-weight: 500;\n    color: #dce8f5;\n    letter-spacing: .4px;\n    margin: 0 0 3px;\n  }\n\n  .item-detail {\n    font-size: 11px;\n    color: #3a6080;\n    letter-spacing: .5px;\n    margin: 0;\n  }\n</style>\n\n<div class=\"wrap\">\n\n  <div style=\"position:absolute;inset:0;pointer-events:none;overflow:hidden;\">\n    <div class=\"particle\" style=\"width:2px;height:2px;background:rgba(154,176,204,.55);left:8%;top:8%;animation-duration:7s;\"></div>\n    <div class=\"particle\" style=\"width:3px;height:3px;background:rgba(154,176,204,.3);left:90%;top:14%;animation-duration:8.4s;animation-delay:1s;\"></div>\n    <div class=\"particle\" style=\"width:2px;height:2px;background:rgba(200,220,240,.4);left:52%;top:4%;animation-duration:6.6s;animation-delay:2.2s;\"></div>\n    <div class=\"particle\" style=\"width:3px;height:3px;background:rgba(154,176,204,.28);left:20%;top:90%;animation-duration:9.1s;animation-delay:1.6s;\"></div>\n    <div class=\"particle\" style=\"width:2px;height:2px;background:rgba(154,176,204,.4);left:80%;top:78%;animation-duration:7.8s;animation-delay:3.4s;\"></div>\n  </div>\n\n  <p class=\"eyebrow\">o que me faria feliz receber</p>\n  <h2 class=\"title\">Sugestões de Presentes</h2>\n  <p class=\"subtitle\">✦ com carinho ✦</p>\n\n  <div class=\"divider\">\n    <div class=\"divider-line\"></div>\n    <div class=\"divider-dot\"></div>\n    <div class=\"divider-dot\" style=\"opacity:.5\"></div>\n    <div class=\"divider-dot\"></div>\n    <div class=\"divider-line\"></div>\n  </div>\n\n  <div class=\"items-list\">\n\n    <div class=\"item-card\">\n      <div class=\"item-icon\">👕</div>\n      <div>\n        <p class=\"item-name\">Camisa</p>\n        <p class=\"item-detail\">Tamanho G</p>\n      </div>\n    </div>\n\n    <div class=\"item-card\">\n      <div class=\"item-icon\">🩳</div>\n      <div>\n        <p class=\"item-name\">Short</p>\n        <p class=\"item-detail\">Tamanho GG</p>\n      </div>\n    </div>\n\n    <div class=\"item-card\">\n      <div class=\"item-icon\">🩲</div>\n      <div>\n        <p class=\"item-name\">Cueca Box</p>\n        <p class=\"item-detail\">Tamanho GG</p>\n      </div>\n    </div>\n\n    <div class=\"item-card\">\n      <div class=\"item-icon\">🩴</div>\n      <div>\n        <p class=\"item-name\">Sandália Masculina</p>\n        <p class=\"item-detail\">Número 38 / 39</p>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<style>\n  @keyframes shimmerSilver {\n    0%{background-position:200% center}\n    100%{background-position:-200% center}\n  }\n  @keyframes fadeUp {\n    from{opacity:0;transform:translateY(8px)}\n    to{opacity:1;transform:translateY(0)}\n  }\n  @keyframes floatIcon {\n    0%,100%{transform:translateY(0)}\n    50%{transform:translateY(-4px)}\n  }\n  @keyframes particleDrift {\n    0%{transform:translateY(0) translateX(0) scale(1);opacity:.4}\n    40%{transform:translateY(-14px) translateX(6px) scale(1.3);opacity:.8}\n    70%{transform:translateY(-6px) translateX(-4px) scale(.7);opacity:.2}\n    100%{transform:translateY(0) translateX(0) scale(1);opacity:.4}\n  }\n  @keyframes pulseBorder {\n    0%,100%{border-color:rgba(154,176,204,.2)}\n    50%{border-color:rgba(154,176,204,.5)}\n  }\n\n  .wrap {\n    background: linear-gradient(160deg, #04080f 0%, #070d1e 55%, #050810 100%);\n    border-radius: 24px;\n    padding: 38px 22px 36px;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n    position: relative;\n    overflow: hidden;\n    text-align: center;\n  }\n\n  .wrap::before {\n    content:'';position:absolute;top:0;left:0;right:0;height:1px;\n    background: linear-gradient(90deg, transparent, #9ab0cc, #dce8f5, #9ab0cc, transparent);\n    animation: shimmerSilver 4s linear infinite;\n    background-size: 200% auto;\n  }\n  .wrap::after {\n    content:'';position:absolute;bottom:0;left:0;right:0;height:1px;\n    background: linear-gradient(90deg, transparent, #7090b033, transparent);\n  }\n\n  .particle {\n    position:absolute;border-radius:50%;pointer-events:none;\n    animation:particleDrift linear infinite;\n  }\n\n  .eyebrow {\n    font-size: 9px;letter-spacing: 6px;text-transform: uppercase;\n    color: #3a5070;margin: 0 0 12px;\n    animation: fadeUp .5s ease both;position: relative; z-index: 1;\n  }\n\n  .title {\n    font-size: 20px;font-weight: 300;letter-spacing: 4px;text-transform: uppercase;\n    background: linear-gradient(90deg, #7090b0 0%, #c8dced 30%, #eaf3fa 50%, #b0cce0 70%, #7090b0 100%);\n    background-size: 200% auto;\n    -webkit-background-clip: text;-webkit-text-fill-color: transparent;background-clip: text;\n    animation: shimmerSilver 5s linear infinite, fadeUp .5s ease .1s both;\n    margin: 0 0 28px;position: relative; z-index: 1;\n  }\n\n  .divider {\n    display: flex;align-items: center;gap: 10px;\n    margin: 0 0 24px;opacity: .35;position: relative; z-index: 1;\n  }\n  .divider-line { flex:1;height:.5px;background: linear-gradient(to right, transparent, #9ab0cc, transparent); }\n  .divider-dot { width:3px;height:3px;border-radius:50%;background:#9ab0cc; }\n\n  .info-list {\n    display: flex;flex-direction: column;gap: 10px;\n    position: relative; z-index: 1;\n  }\n\n  .info-card {\n    display: flex;align-items: flex-start;gap: 14px;text-align: left;\n    padding: 16px 18px;border-radius: 16px;\n    border: .5px solid rgba(154,176,204,.12);\n    background: rgba(255,255,255,.018);\n    animation: fadeUp .5s ease both;\n  }\n  .info-card:nth-child(1){animation-delay:.2s}\n  .info-card:nth-child(2){animation-delay:.28s}\n  .info-card:nth-child(3){animation-delay:.36s}\n  .info-card:nth-child(4){animation-delay:.44s}\n  .info-card:nth-child(5){animation-delay:.52s}\n  .info-card:nth-child(6){animation-delay:.60s}\n\n  .info-icon {\n    font-size: 20px;flex-shrink: 0;margin-top: 2px;\n    animation: floatIcon 4s ease-in-out infinite;\n  }\n  .info-card:nth-child(2) .info-icon{animation-delay:.5s}\n  .info-card:nth-child(3) .info-icon{animation-delay:1s}\n  .info-card:nth-child(4) .info-icon{animation-delay:1.5s}\n  .info-card:nth-child(5) .info-icon{animation-delay:2s}\n  .info-card:nth-child(6) .info-icon{animation-delay:2.5s}\n\n  .info-label {\n    font-size: 9px;letter-spacing: 3px;text-transform: uppercase;\n    color: #3a5878;margin: 0 0 5px;\n  }\n\n  .info-title {\n    font-size: 13.5px;font-weight: 500;color: #dce8f5;\n    letter-spacing: .3px;margin: 0 0 4px;\n  }\n\n  .info-desc {\n    font-size: 11.5px;color: #4a6a8a;letter-spacing: .3px;line-height: 1.7;margin: 0;\n  }\n\n  .silver-text {\n    background: linear-gradient(90deg, #7090b0 0%, #c8dced 40%, #eaf3fa 50%, #b0cce0 70%, #7090b0 100%);\n    background-size: 200% auto;\n    -webkit-background-clip: text;-webkit-text-fill-color: transparent;background-clip: text;\n    animation: shimmerSilver 5s linear infinite;font-weight: 600;\n  }\n\n  .highlight-card {\n    border-color: rgba(154,176,204,.28) !important;\n    background: rgba(154,176,204,.05) !important;\n  }\n\n  .surprise-card {\n    border-color: rgba(154,176,204,.35) !important;\n    background: rgba(154,176,204,.07) !important;\n    animation: fadeUp .5s ease .6s both, pulseBorder 3s ease-in-out infinite !important;\n  }\n\n  .time-row {\n    display: flex;gap: 10px;margin-top: 7px;\n  }\n  .time-pill {\n    flex: 1;text-align: center;\n    padding: 8px 10px;border-radius: 10px;\n    border: .5px solid rgba(154,176,204,.18);\n    background: rgba(154,176,204,.05);\n  }\n  .time-pill-label {\n    font-size: 9px;letter-spacing: 2px;text-transform: uppercase;\n    color: #3a5878;margin: 0 0 3px;\n  }\n  .time-pill-value {\n    font-size: 14px;font-weight: 500;\n    background: linear-gradient(90deg, #7090b0 0%, #c8dced 40%, #eaf3fa 50%, #b0cce0 70%, #7090b0 100%);\n    background-size: 200% auto;\n    -webkit-background-clip: text;-webkit-text-fill-color: transparent;background-clip: text;\n    animation: shimmerSilver 5s linear infinite;\n    margin: 0;\n  }\n</style>\n\n<div class=\"wrap\">\n\n  <div style=\"position:absolute;inset:0;pointer-events:none;overflow:hidden;\">\n    <div class=\"particle\" style=\"width:2px;height:2px;background:rgba(154,176,204,.55);left:8%;top:8%;animation-duration:7s;\"></div>\n    <div class=\"particle\" style=\"width:3px;height:3px;background:rgba(154,176,204,.3);left:90%;top:14%;animation-duration:8.4s;animation-delay:1s;\"></div>\n    <div class=\"particle\" style=\"width:2px;height:2px;background:rgba(200,220,240,.4);left:52%;top:4%;animation-duration:6.6s;animation-delay:2.2s;\"></div>\n    <div class=\"particle\" style=\"width:3px;height:3px;background:rgba(154,176,204,.28);left:20%;top:90%;animation-duration:9.1s;animation-delay:1.6s;\"></div>\n    <div class=\"particle\" style=\"width:2px;height:2px;background:rgba(154,176,204,.4);left:80%;top:78%;animation-duration:7.8s;animation-delay:3.4s;\"></div>\n    <div class=\"particle\" style=\"width:2px;height:2px;background:rgba(200,220,240,.3);left:65%;top:50%;animation-duration:8s;animation-delay:2.8s;\"></div>\n  </div>\n\n  <p class=\"eyebrow\">manual do convidado</p>\n  <h2 class=\"title\">Informações Importantes</h2>\n\n  <div class=\"divider\">\n    <div class=\"divider-line\"></div>\n    <div class=\"divider-dot\"></div>\n    <div class=\"divider-dot\" style=\"opacity:.5\"></div>\n    <div class=\"divider-dot\"></div>\n    <div class=\"divider-line\"></div>\n  </div>\n\n  <div class=\"info-list\">\n\n    <div class=\"info-card surprise-card\">\n      <div class=\"info-icon\">🤫</div>\n      <div>\n        <p class=\"info-label\">Atenção — segredo!</p>\n        <p class=\"info-title\"><span class=\"silver-text\">É uma festa surpresa!</span></p>\n        <p class=\"info-desc\">Por favor, não comente nada com ele. Queremos que esse momento seja inesquecível — e a surpresa faz parte da magia! 🎊</p>\n      </div>\n    </div>\n\n    <div class=\"info-card\">\n      <div class=\"info-icon\">🕐</div>\n      <div style=\"flex:1;\">\n        <p class=\"info-label\">Pontualidade</p>\n        <p class=\"info-title\">Chegue no horário</p>\n        <p class=\"info-desc\">Sua presença pontual é muito importante para nós.</p>\n        <div class=\"time-row\">\n          <div class=\"time-pill\">\n            <p class=\"time-pill-label\">Chegada</p>\n            <p class=\"time-pill-value\">19h45</p>\n          </div>\n          <div class=\"time-pill\">\n            <p class=\"time-pill-label\">Início da festa</p>\n            <p class=\"time-pill-value\">20h00</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"info-card\">\n      <div class=\"info-icon\">💌</div>\n      <div>\n        <p class=\"info-label\">RSVP</p>\n        <p class=\"info-title\">Confirme sua presença</p>\n        <p class=\"info-desc\">Por favor, confirme presença pelo menos <span style=\"color:#9ab0cc;\">15 dias</span> antes do evento.</p>\n      </div>\n    </div>\n\n    <div class=\"info-card highlight-card\">\n      <div class=\"info-icon\">🚫</div>\n      <div>\n        <p class=\"info-label\">Importante</p>\n        <p class=\"info-title\"><span class=\"silver-text\">Convidado não convida!</span></p>\n      </div>\n    </div>\n\n    <div class=\"info-card\">\n      <div class=\"info-icon\">🎉</div>\n      <div>\n        <p class=\"info-label\">Celebração</p>\n        <p class=\"info-title\">Divirta-se bastante!</p>\n        <p class=\"info-desc\">Estamos ansiosos para celebrar este momento especial com você.</p>\n      </div>\n    </div>\n\n    <div class=\"info-card\">\n      <div class=\"info-icon\">🎂</div>\n      <div>\n        <p class=\"info-label\">Antes de ir embora</p>\n        <p class=\"info-title\">Não vá sem me dar um abraço e comer um pedaço do bolo!</p>\n        <p class=\"info-desc\">Queremos compartilhar cada instante com você.</p>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"
    },
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "conteudo": "https://docs.google.com/forms/d/e/1FAIpQLScrWnYQYjz9ER2US8gZZs-bij330GAKMT64y4WlhmfKLxfn_A/viewform?usp=header"
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
