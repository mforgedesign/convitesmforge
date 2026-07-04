window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Anthony Caleb",
    "idade": 1,
    "data": "2026-08-16",
    "hora": "11:00",
    "horaTermino": "",
    "endereco": "Chácara Ismael - lazer e festas\nSitio da Pitombeira, 538 - Águas Compridas, Olinda",
    "frase1": "",
    "frase2": "",
    "frase3": ""
  },
  "convite": {
    "paletaCores": "❤️ Vermelho ferrari. 🔵 Azul petróleo. 💛 Amarelo mostarda. 🤍 Off-white (creme). 🩶 Cinza claro. 🤎 Bege areia. 🌿 Verde sálvia (para um toque delicado).",
    "tema": "Carros",
    "musica": "assets/music_1783128707415.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Anthony-Caleb-1Ano",
    "seo": {
      "pageTitle": "Convite Especial",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1783128707415.png",
    "cartao": "",
    "aberturaSlides": [
      "assets/slide1_1783128707415.mp4",
      "assets/slide2_1783128707415.mp4"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1783128707415.mp4",
        "label": "Slide 1",
        "type": "video"
      },
      {
        "filePath": "assets/slide2_1783128707415.mp4",
        "label": "Slide 2",
        "type": "video"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1783128707415.jpg",
    "folhaPreenchida": "assets/folha_1783128707415.jpg",
    "musica": "assets/music_1783128707415.mp3",
    "fabric": {
      "saveTheDate": {
        "referencia": "",
        "resultado": "",
        "musicStartSec": 0
      },
      "lembrete": {
        "referencia": "",
        "resultado": "",
        "musicStartSec": 0
      }
    },
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/Thu8kT6o7zeT3cJx9"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "\n<style>\n  @keyframes shimmerGold {\n    0%{background-position:200% center}\n    100%{background-position:-200% center}\n  }\n  @keyframes fadeUp {\n    from{opacity:0;transform:translateY(8px)}\n    to{opacity:1;transform:translateY(0)}\n  }\n  @keyframes floatIcon {\n    0%,100%{transform:translateY(0)}\n    50%{transform:translateY(-4px)}\n  }\n  @keyframes particleDrift {\n    0%{transform:translateY(0) translateX(0) scale(1);opacity:.4}\n    40%{transform:translateY(-14px) translateX(6px) scale(1.3);opacity:.8}\n    70%{transform:translateY(-6px) translateX(-4px) scale(.7);opacity:.2}\n    100%{transform:translateY(0) translateX(0) scale(1);opacity:.4}\n  }\n  @keyframes borderPulse {\n    0%,100%{border-color:rgba(201,168,76,.14)}\n    50%{border-color:rgba(201,168,76,.32)}\n  }\n\n  .wrap {\n    background: linear-gradient(160deg, #0a0a0a 0%, #111111 55%, #0d0d0d 100%);\n    border-radius: 24px;\n    padding: 38px 22px 36px;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n    position: relative;\n    overflow: hidden;\n    text-align: center;\n  }\n\n  .wrap::before {\n    content:'';position:absolute;top:0;left:0;right:0;height:1.5px;\n    background: linear-gradient(90deg, transparent, #8b0000, #c9a84c, #f0dba0, #c9a84c, #8b0000, transparent);\n    animation: shimmerGold 4s linear infinite;\n    background-size: 200% auto;\n  }\n  .wrap::after {\n    content:'';position:absolute;bottom:0;left:0;right:0;height:1px;\n    background: linear-gradient(90deg, transparent, #8b000044, #c9a84c33, transparent);\n  }\n\n  .particle { position:absolute;border-radius:50%;pointer-events:none;animation:particleDrift linear infinite; }\n\n  .eyebrow {\n    font-size: 9px;letter-spacing: 6px;text-transform: uppercase;\n    color: #5a5a5a;margin: 0 0 12px;\n    animation: fadeUp .5s ease both;position: relative; z-index: 1;\n  }\n\n  .title {\n    font-size: 21px;font-weight: 300;letter-spacing: 4px;text-transform: uppercase;\n    background: linear-gradient(90deg, #a07830 0%, #e8d080 25%, #fff6d0 50%, #e8d080 75%, #a07830 100%);\n    background-size: 200% auto;\n    -webkit-background-clip: text;-webkit-text-fill-color: transparent;background-clip: text;\n    animation: shimmerGold 4s linear infinite, fadeUp .5s ease .1s both;\n    margin: 0 0 6px;position: relative; z-index: 1;\n  }\n\n  .subtitle {\n    font-size: 10px;color: #4a2a2a;letter-spacing: 3px;\n    margin: 0 0 28px;\n    animation: fadeUp .5s ease .15s both;position: relative; z-index: 1;\n  }\n\n  .divider {\n    display: flex;align-items: center;gap: 10px;\n    margin: 0 0 22px;position: relative; z-index: 1;\n  }\n  .divider-line { flex:1;height:.5px;background: linear-gradient(to right, transparent, #c9a84c55, transparent); }\n  .divider-dot-gold { width:4px;height:4px;border-radius:50%;background:#c9a84c;opacity:.7; }\n  .divider-dot-red  { width:4px;height:4px;border-radius:50%;background:#8b0000;opacity:.7; }\n\n  .items-list {\n    display: flex;flex-direction: column;gap: 10px;\n    position: relative; z-index: 1;\n  }\n\n  .item-card {\n    display: flex;align-items: flex-start;gap: 14px;text-align: left;\n    padding: 16px 18px;border-radius: 16px;\n    border: .5px solid rgba(201,168,76,.14);\n    background: rgba(255,255,255,.025);\n    animation: fadeUp .5s ease both, borderPulse 5s ease-in-out infinite;\n    position:relative;overflow:hidden;\n  }\n  .item-card:nth-child(1){animation-delay:.20s}\n  .item-card:nth-child(2){animation-delay:.27s}\n  .item-card:nth-child(3){animation-delay:.34s}\n  .item-card:nth-child(4){animation-delay:.41s}\n  .item-card:nth-child(5){animation-delay:.48s}\n  .item-card:nth-child(6){animation-delay:.55s}\n\n  .red-stripe {\n    position:absolute;left:0;top:0;bottom:0;width:3px;\n    background: linear-gradient(180deg, #8b0000, #c0392b, #8b0000);\n    border-radius: 16px 0 0 16px;\n  }\n\n  .item-icon {\n    font-size: 22px;flex-shrink: 0;margin-top: 1px;\n    animation: floatIcon 4s ease-in-out infinite;\n  }\n  .item-card:nth-child(2) .item-icon{animation-delay:.4s}\n  .item-card:nth-child(3) .item-icon{animation-delay:.8s}\n  .item-card:nth-child(4) .item-icon{animation-delay:1.2s}\n  .item-card:nth-child(5) .item-icon{animation-delay:1.6s}\n  .item-card:nth-child(6) .item-icon{animation-delay:2s}\n\n  .item-name {\n    font-size: 13px;font-weight: 600;\n    color: #f0f0f0;letter-spacing: .5px;margin: 0 0 4px;\n  }\n\n  .item-detail {\n    font-size: 11.5px;color: #555555;letter-spacing: .3px;line-height: 1.7;margin: 0;\n  }\n\n  .gold-val {\n    background: linear-gradient(90deg, #a07830 0%, #e8d080 40%, #fff6d0 50%, #d4b060 70%, #a07830 100%);\n    background-size: 200% auto;\n    -webkit-background-clip: text;-webkit-text-fill-color: transparent;background-clip: text;\n    animation: shimmerGold 4s linear infinite;\n    font-weight: 600;\n  }\n\n  .tags { display: flex;flex-wrap: wrap;gap: 5px;margin-top: 6px; }\n  .tag {\n    font-size: 10px;letter-spacing: .5px;color: #d4b060;\n    border: .5px solid rgba(201,168,76,.3);border-radius: 20px;padding: 3px 10px;\n    background: rgba(201,168,76,.05);\n  }\n  .tag-red {\n    font-size: 10px;letter-spacing: .5px;color: #c0392b;\n    border: .5px solid rgba(139,0,0,.35);border-radius: 20px;padding: 3px 10px;\n    background: rgba(139,0,0,.06);\n  }\n</style>\n\n<div class=\"wrap\">\n\n  <div style=\"position:absolute;inset:0;pointer-events:none;overflow:hidden;\">\n    <div class=\"particle\" style=\"width:2px;height:2px;background:rgba(201,168,76,.55);left:8%;top:8%;animation-duration:7s;\"></div>\n    <div class=\"particle\" style=\"width:2px;height:2px;background:rgba(180,20,20,.45);left:90%;top:14%;animation-duration:8.4s;animation-delay:1s;\"></div>\n    <div class=\"particle\" style=\"width:2px;height:2px;background:rgba(240,240,240,.2);left:52%;top:4%;animation-duration:6.6s;animation-delay:2.2s;\"></div>\n    <div class=\"particle\" style=\"width:3px;height:3px;background:rgba(201,168,76,.3);left:20%;top:90%;animation-duration:9.1s;animation-delay:1.6s;\"></div>\n    <div class=\"particle\" style=\"width:2px;height:2px;background:rgba(180,20,20,.35);left:80%;top:78%;animation-duration:7.8s;animation-delay:3.4s;\"></div>\n    <div class=\"particle\" style=\"width:2px;height:2px;background:rgba(201,168,76,.35);left:65%;top:50%;animation-duration:8s;animation-delay:2.8s;\"></div>\n  </div>\n\n  <p class=\"eyebrow\">o que me faria feliz receber</p>\n  <h2 class=\"title\">Sugestões de Presentes</h2>\n  <p class=\"subtitle\">✦ com muito amor ✦</p>\n\n  <div class=\"divider\">\n    <div class=\"divider-line\"></div>\n    <div class=\"divider-dot-red\"></div>\n    <div class=\"divider-dot-gold\"></div>\n    <div class=\"divider-dot-red\"></div>\n    <div class=\"divider-line\"></div>\n  </div>\n\n  <div class=\"items-list\">\n\n    <div class=\"item-card\">\n      <div class=\"red-stripe\"></div>\n      <div class=\"item-icon\">👕</div>\n      <div>\n        <p class=\"item-name\">Roupas</p>\n        <p class=\"item-detail\">Tamanho <span class=\"gold-val\">2 a 3 anos</span></p>\n      </div>\n    </div>\n\n    <div class=\"item-card\">\n      <div class=\"red-stripe\"></div>\n      <div class=\"item-icon\">👟</div>\n      <div>\n        <p class=\"item-name\">Calçados</p>\n        <p class=\"item-detail\">Número <span class=\"gold-val\">20 / 21</span></p>\n      </div>\n    </div>\n\n    <div class=\"item-card\">\n      <div class=\"red-stripe\"></div>\n      <div class=\"item-icon\">🧩</div>\n      <div>\n        <p class=\"item-name\">Brinquedos</p>\n        <div class=\"tags\">\n          <span class=\"tag\">Educativos</span>\n          <span class=\"tag\">Diversos</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"item-card\">\n      <div class=\"red-stripe\"></div>\n      <div class=\"item-icon\">📚</div>\n      <div>\n        <p class=\"item-name\">Livros</p>\n        <div class=\"tags\">\n          <span class=\"tag\">Musicais</span>\n          <span class=\"tag\">Sensoriais</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"item-card\">\n      <div class=\"red-stripe\"></div>\n      <div class=\"item-icon\">🧴</div>\n      <div>\n        <p class=\"item-name\">Kit Higiene Infantil</p>\n        <p class=\"item-detail\">Perfume e produtos de higiene para bebê</p>\n      </div>\n    </div>\n\n    <div class=\"item-card\">\n      <div class=\"red-stripe\"></div>\n      <div class=\"item-icon\">🏊</div>\n      <div>\n        <p class=\"item-name\">Itens para Piscina</p>\n        <div class=\"tags\">\n          <span class=\"tag\">Boia</span>\n          <span class=\"tag\">Roupão</span>\n          <span class=\"tag-red\">e outros</span>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "558183032177",
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
    "cronometro": false,
    "buttonColor": "#242424",
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
