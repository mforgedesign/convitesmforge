window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Irla Renaty",
    "idade": 15,
    "data": "2026-06-20",
    "hora": "21:00",
    "endereco": ""
  },
  "convite": {
    "paletaCores": "",
    "tema": "",
    "musica": "assets/music_1780517868202.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Irla-Renaty-15Anos",
    "seo": {
      "pageTitle": "Você recebeu um convite especial!",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1780517868202.png",
    "aberturaSlides": [
      "assets/slide1_1780517868202.mp4",
      "assets/slide2_1780517868202.jpg",
      "assets/slide3_1780517868202.mp4",
      "assets/slide4_1780517868202.mp4",
      "assets/slide5_1780517868202.jpg"
    ],
    "folhaVazia": "assets/folha_1780517868202.jpg",
    "folhaPreenchida": "assets/folha_1780517868202.jpg",
    "musica": "assets/music_1780517868202.mp3",
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/BoNpvbwP9dc77jag9"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "\n<style>\n  @keyframes float {\n    0%,100%{transform:translateY(0px)}\n    50%{transform:translateY(-6px)}\n  }\n  @keyframes shimmer {\n    0%{background-position:200% center}\n    100%{background-position:-200% center}\n  }\n  @keyframes particleDrift {\n    0%{transform:translateY(0) translateX(0) scale(1);opacity:.7}\n    33%{transform:translateY(-18px) translateX(8px) scale(1.2);opacity:1}\n    66%{transform:translateY(-8px) translateX(-6px) scale(.8);opacity:.5}\n    100%{transform:translateY(0) translateX(0) scale(1);opacity:.7}\n  }\n  @keyframes softPulse {\n    0%,100%{opacity:.3}\n    50%{opacity:.8}\n  }\n  @keyframes cardGlow {\n    0%,100%{box-shadow:0 0 0 0 rgba(180,140,255,.0)}\n    50%{box-shadow:0 0 18px 2px rgba(180,140,255,.18)}\n  }\n  .wish-card {\n    background: rgba(255,255,255,.06);\n    border: .5px solid rgba(200,170,255,.22);\n    border-radius: 18px;\n    padding: 14px 12px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 8px;\n    position: relative;\n    overflow: hidden;\n    transition: transform .3s ease, background .3s ease;\n    cursor: default;\n    animation: cardGlow 4s ease-in-out infinite;\n  }\n  .wish-card:nth-child(2){animation-delay:.6s}\n  .wish-card:nth-child(3){animation-delay:1.2s}\n  .wish-card:nth-child(4){animation-delay:1.8s}\n  .wish-card:nth-child(5){animation-delay:2.4s}\n  .wish-card:nth-child(6){animation-delay:3s}\n  .wish-card::before {\n    content:'';\n    position:absolute;\n    inset:0;\n    background: linear-gradient(135deg,rgba(200,170,255,.08),rgba(170,220,255,.05),transparent 60%);\n    pointer-events:none;\n  }\n  .wish-icon {\n    font-size: 26px;\n    animation: float 3s ease-in-out infinite;\n    filter: drop-shadow(0 0 8px rgba(200,170,255,.5));\n  }\n  .wish-card:nth-child(2) .wish-icon{animation-delay:.4s}\n  .wish-card:nth-child(3) .wish-icon{animation-delay:.8s}\n  .wish-card:nth-child(4) .wish-icon{animation-delay:1.2s}\n  .wish-card:nth-child(5) .wish-icon{animation-delay:1.6s}\n  .wish-card:nth-child(6) .wish-icon{animation-delay:2s}\n  .wish-label {\n    font-size: 11px;\n    font-weight: 500;\n    text-align: center;\n    line-height: 1.4;\n    color: rgba(230,215,255,.95);\n    letter-spacing: .3px;\n  }\n  .wish-sub {\n    font-size: 10px;\n    color: rgba(190,175,230,.65);\n    text-align: center;\n    letter-spacing: .5px;\n  }\n  .particle {\n    position:absolute;\n    border-radius:50%;\n    pointer-events:none;\n    animation: particleDrift linear infinite;\n  }\n  .shimmer-title {\n    background: linear-gradient(90deg, rgba(220,200,255,.9) 0%, rgba(255,230,200,.95) 30%, rgba(200,230,255,.9) 60%, rgba(220,200,255,.9) 100%);\n    background-size: 200% auto;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    animation: shimmer 4s linear infinite;\n    font-size: 13px;\n    font-weight: 500;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n    text-align: center;\n    margin-bottom: 4px;\n  }\n  .star-line {\n    display:flex;\n    align-items:center;\n    gap:8px;\n    justify-content:center;\n    margin-bottom:18px;\n  }\n  .star-line span {\n    font-size:10px;\n    color:rgba(200,180,255,.4);\n    letter-spacing:4px;\n  }\n  .star-dot {\n    width:3px;height:3px;border-radius:50%;\n    background:rgba(200,180,255,.5);\n    animation:softPulse 2s ease-in-out infinite;\n  }\n</style>\n\n<div style=\"position:relative;padding:20px 16px 24px;overflow:hidden;min-height:400px;\">\n\n  <div style=\"position:absolute;inset:0;pointer-events:none;overflow:hidden;\">\n    <div class=\"particle\" style=\"width:3px;height:3px;background:rgba(200,170,255,.6);left:8%;top:15%;animation-duration:5.2s;animation-delay:0s;\"></div>\n    <div class=\"particle\" style=\"width:2px;height:2px;background:rgba(170,210,255,.5);left:22%;top:72%;animation-duration:6.8s;animation-delay:.7s;\"></div>\n    <div class=\"particle\" style=\"width:4px;height:4px;background:rgba(255,200,220,.4);left:78%;top:20%;animation-duration:7.1s;animation-delay:1.2s;\"></div>\n    <div class=\"particle\" style=\"width:2px;height:2px;background:rgba(200,235,200,.5);left:85%;top:60%;animation-duration:5.6s;animation-delay:2.1s;\"></div>\n    <div class=\"particle\" style=\"width:3px;height:3px;background:rgba(255,220,170,.5);left:55%;top:85%;animation-duration:6.3s;animation-delay:.3s;\"></div>\n    <div class=\"particle\" style=\"width:2px;height:2px;background:rgba(200,170,255,.7);left:40%;top:8%;animation-duration:8s;animation-delay:1.8s;\"></div>\n    <div class=\"particle\" style=\"width:3px;height:3px;background:rgba(170,230,255,.4);left:62%;top:45%;animation-duration:5.9s;animation-delay:3.2s;\"></div>\n    <div class=\"particle\" style=\"width:2px;height:2px;background:rgba(255,190,220,.6);left:15%;top:50%;animation-duration:7.4s;animation-delay:.9s;\"></div>\n    <div class=\"particle\" style=\"width:4px;height:4px;background:rgba(210,195,255,.35);left:92%;top:38%;animation-duration:6.1s;animation-delay:4s;\"></div>\n    <div class=\"particle\" style=\"width:2px;height:2px;background:rgba(200,240,210,.45);left:32%;top:90%;animation-duration:8.2s;animation-delay:2.6s;\"></div>\n  </div>\n\n  <div style=\"text-align:center;margin-bottom:20px;position:relative;\">\n    <div class=\"shimmer-title\">Lista de Desejos</div>\n    <div class=\"star-line\">\n      <div class=\"star-dot\"></div>\n      <span>✦ ✦ ✦</span>\n      <div class=\"star-dot\" style=\"animation-delay:.5s\"></div>\n    </div>\n  </div>\n\n  <div style=\"display:grid;grid-template-columns:repeat(2,1fr);gap:10px;position:relative;z-index:1;\">\n\n    <div class=\"wish-card\">\n      <div class=\"wish-icon\">👗</div>\n      <div class=\"wish-label\">Roupas</div>\n      <div class=\"wish-sub\">Tamanho G</div>\n    </div>\n\n    <div class=\"wish-card\">\n      <div class=\"wish-icon\">👠</div>\n      <div class=\"wish-label\">Calçados</div>\n      <div class=\"wish-sub\">Nº 39</div>\n    </div>\n\n    <div class=\"wish-card\">\n      <div class=\"wish-icon\">💎</div>\n      <div class=\"wish-label\">Joias</div>\n      <div class=\"wish-sub\">Peças especiais</div>\n    </div>\n\n    <div class=\"wish-card\">\n      <div class=\"wish-icon\">📚</div>\n      <div class=\"wish-label\">Livros</div>\n      <div class=\"wish-sub\">Romantasia · HP · Mangás</div>\n    </div>\n\n    <div class=\"wish-card\">\n      <div class=\"wish-icon\">🌸</div>\n      <div class=\"wish-label\">Perfumes</div>\n      <div class=\"wish-sub\">Fragrâncias encantadas</div>\n    </div>\n\n    <div class=\"wish-card\">\n      <div class=\"wish-icon\">💄</div>\n      <div class=\"wish-label\">Maquiagem</div>\n      <div class=\"wish-sub\">Make & beleza</div>\n    </div>\n\n  </div>\n\n  <div style=\"margin-top:20px;text-align:center;position:relative;z-index:1;\">\n    <div style=\"display:flex;align-items:center;justify-content:center;gap:8px;opacity:.45;\">\n      <div style=\"height:.5px;flex:1;background:linear-gradient(to right,transparent,rgba(200,180,255,.5))\"></div>\n      <span style=\"font-size:14px;color:rgba(210,195,255,.8);\">✦</span>\n      <div style=\"height:.5px;flex:1;background:linear-gradient(to left,transparent,rgba(200,180,255,.5))\"></div>\n    </div>\n  </div>\n\n</div>\n"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "\n<style>\n  @keyframes floatIcon {\n    0%,100%{transform:translateY(0)}\n    50%{transform:translateY(-5px)}\n  }\n  @keyframes particleDrift {\n    0%{transform:translateY(0) translateX(0) scale(1);opacity:.6}\n    40%{transform:translateY(-14px) translateX(6px) scale(1.3);opacity:1}\n    70%{transform:translateY(-6px) translateX(-4px) scale(.7);opacity:.4}\n    100%{transform:translateY(0) translateX(0) scale(1);opacity:.6}\n  }\n  @keyframes shimmerLine {\n    0%{background-position:200% center}\n    100%{background-position:-200% center}\n  }\n  @keyframes heartbeat {\n    0%,100%{transform:scale(1)}\n    15%{transform:scale(1.25)}\n    30%{transform:scale(1)}\n    45%{transform:scale(1.1)}\n    60%{transform:scale(1)}\n  }\n  @keyframes softGlow {\n    0%,100%{box-shadow:0 0 0 0 rgba(200,170,255,0),0 2px 16px rgba(0,0,0,.18)}\n    50%{box-shadow:0 0 18px 3px rgba(200,160,255,.15),0 2px 16px rgba(0,0,0,.18)}\n  }\n  @keyframes borderShimmer {\n    0%,100%{border-color:rgba(200,170,255,.18)}\n    50%{border-color:rgba(200,170,255,.38)}\n  }\n  .magic-card {\n    display:flex;\n    gap:16px;\n    align-items:flex-start;\n    background:rgba(255,255,255,.045);\n    border:.5px solid rgba(200,170,255,.2);\n    border-radius:20px;\n    padding:16px 14px;\n    position:relative;\n    overflow:hidden;\n    animation:softGlow 5s ease-in-out infinite, borderShimmer 5s ease-in-out infinite;\n  }\n  .magic-card:nth-child(2){animation-delay:1.2s}\n  .magic-card:nth-child(3){animation-delay:2.4s}\n  .magic-card:nth-child(4){animation-delay:3.6s}\n  .magic-card::before {\n    content:'';\n    position:absolute;\n    top:0;left:0;right:0;\n    height:1px;\n    background:linear-gradient(90deg,transparent,rgba(210,185,255,.35),transparent);\n    animation:shimmerLine 4s linear infinite;\n    background-size:200% auto;\n  }\n  .magic-card::after {\n    content:'';\n    position:absolute;\n    inset:0;\n    background:linear-gradient(135deg,rgba(200,170,255,.06) 0%,transparent 55%,rgba(170,210,255,.04) 100%);\n    pointer-events:none;\n  }\n  .icon-orb {\n    width:48px;height:48px;\n    border-radius:50%;\n    background:rgba(200,170,255,.1);\n    border:.5px solid rgba(200,170,255,.28);\n    display:flex;align-items:center;justify-content:center;\n    shrink:0;flex-shrink:0;\n    position:relative;\n    z-index:1;\n  }\n  .icon-orb i {\n    font-size:20px;\n    color:rgba(225,210,255,.9);\n    filter:drop-shadow(0 0 6px rgba(200,170,255,.55));\n  }\n  .icon-orb .float-icon {\n    animation:floatIcon 3.5s ease-in-out infinite;\n  }\n  .icon-orb .heart-icon {\n    animation:heartbeat 2.4s ease-in-out infinite;\n    color:rgba(255,190,220,.9);\n    filter:drop-shadow(0 0 7px rgba(255,160,200,.5));\n  }\n  .magic-card:nth-child(2) .float-icon{animation-delay:.5s}\n  .magic-card:nth-child(4) .float-icon{animation-delay:1.1s}\n  .card-title {\n    font-size:12.5px;\n    font-weight:500;\n    color:rgba(230,215,255,.95);\n    letter-spacing:.4px;\n    margin:0 0 5px;\n    line-height:1.3;\n  }\n  .card-text {\n    font-size:11px;\n    color:rgba(195,182,225,.72);\n    line-height:1.65;\n    margin:0;\n  }\n  .particle {\n    position:absolute;\n    border-radius:50%;\n    pointer-events:none;\n    animation:particleDrift linear infinite;\n  }\n  .divider-star {\n    display:flex;align-items:center;justify-content:center;gap:8px;\n    margin:6px 0;\n    opacity:.35;\n  }\n  .divider-line {\n    height:.5px;flex:1;\n    background:linear-gradient(to right,transparent,rgba(200,180,255,.4),transparent);\n  }\n</style>\n\n<div style=\"position:relative;padding:18px 16px 22px;overflow:hidden;\">\n\n  <div style=\"position:absolute;inset:0;pointer-events:none;overflow:hidden;\">\n    <div class=\"particle\" style=\"width:3px;height:3px;background:rgba(200,170,255,.55);left:6%;top:12%;animation-duration:6s;\"></div>\n    <div class=\"particle\" style=\"width:2px;height:2px;background:rgba(255,200,220,.5);left:88%;top:22%;animation-duration:7.4s;animation-delay:.8s;\"></div>\n    <div class=\"particle\" style=\"width:3px;height:3px;background:rgba(170,215,255,.4);left:75%;top:55%;animation-duration:5.8s;animation-delay:2s;\"></div>\n    <div class=\"particle\" style=\"width:2px;height:2px;background:rgba(210,255,200,.45);left:18%;top:78%;animation-duration:8.1s;animation-delay:1.3s;\"></div>\n    <div class=\"particle\" style=\"width:4px;height:4px;background:rgba(255,220,170,.35);left:50%;top:5%;animation-duration:6.6s;animation-delay:3s;\"></div>\n    <div class=\"particle\" style=\"width:2px;height:2px;background:rgba(200,170,255,.6);left:93%;top:80%;animation-duration:7s;animation-delay:.4s;\"></div>\n    <div class=\"particle\" style=\"width:3px;height:3px;background:rgba(255,190,210,.4);left:35%;top:95%;animation-duration:5.4s;animation-delay:2.5s;\"></div>\n  </div>\n\n  <div style=\"display:flex;flex-direction:column;gap:10px;position:relative;z-index:1;\">\n\n    <div class=\"magic-card\">\n      <div class=\"icon-orb\"><i class=\"fa-regular fa-clock float-icon\"></i></div>\n      <div>\n        <h3 class=\"card-title\">A Pontualidade é um Carinho</h3>\n        <p class=\"card-text\">Chegue no horário combinado para não perder nenhum detalhe da nossa mágica história.</p>\n      </div>\n    </div>\n\n    <div class=\"divider-star\">\n      <div class=\"divider-line\"></div>\n      <span style=\"font-size:9px;color:rgba(210,195,255,.6);letter-spacing:3px;\">✦</span>\n      <div class=\"divider-line\"></div>\n    </div>\n\n    <div class=\"magic-card\">\n      <div class=\"icon-orb\"><i class=\"fa-regular fa-calendar-check float-icon\"></i></div>\n      <div>\n        <h3 class=\"card-title\">Confirmação de Presença</h3>\n        <p class=\"card-text\">Confirme sua vinda até 15 dias antes, para que possamos preparar tudo com muito amor.</p>\n      </div>\n    </div>\n\n    <div class=\"divider-star\">\n      <div class=\"divider-line\"></div>\n      <span style=\"font-size:9px;color:rgba(210,195,255,.6);letter-spacing:3px;\">✦</span>\n      <div class=\"divider-line\"></div>\n    </div>\n\n    <div class=\"magic-card\">\n      <div class=\"icon-orb\"><i class=\"fa-solid fa-heart heart-icon\"></i></div>\n      <div>\n        <h3 class=\"card-title\">Celebre Conosco</h3>\n        <p class=\"card-text\">Deixe a alegria guiar a sua noite! Estamos ansiosos para criar memórias inesquecíveis.</p>\n      </div>\n    </div>\n\n    <div class=\"divider-star\">\n      <div class=\"divider-line\"></div>\n      <span style=\"font-size:9px;color:rgba(210,195,255,.6);letter-spacing:3px;\">✦</span>\n      <div class=\"divider-line\"></div>\n    </div>\n\n    <div class=\"magic-card\">\n      <div class=\"icon-orb\"><i class=\"fa-solid fa-cake-candles float-icon\"></i></div>\n      <div>\n        <h3 class=\"card-title\">Um Doce Encontro</h3>\n        <p class=\"card-text\">Não se despeça sem nos presentear com um abraço e saborear uma fatia do nosso bolo.</p>\n      </div>\n    </div>\n\n  </div>\n</div>\n"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5581984771565",
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
    "lembrete": false
  },
  "config": {
    "exibirMarcaDagua": false,
    "cronometro": true,
    "buttonColor": "#455940",
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
