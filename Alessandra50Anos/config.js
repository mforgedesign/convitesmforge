window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Alessandra",
    "idade": 40,
    "data": "",
    "hora": "18:00",
    "endereco": ""
  },
  "convite": {
    "paletaCores": "",
    "tema": "",
    "musica": "assets/music_1781892485583.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Alessandra50Anos",
    "seo": {
      "pageTitle": "Você recebeu um convite especial!",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1781892485583.png",
    "aberturaSlides": [
      "assets/slide1_1781892485583.mp4",
      "assets/slide2_1781892485583.mp4",
      "assets/slide3_1781892485583.mp4",
      "assets/slide4_1781892485583.mp4",
      "assets/slide5_1781892485583.mp4"
    ],
    "folhaVazia": "assets/folha_1781892485583.jpg",
    "folhaPreenchida": "assets/folha_1781892485583.jpg",
    "musica": "assets/music_1781892485583.mp3",
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/P425bRZppknh3rS7A"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dica de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<style>\n  @keyframes shimmerGold {\n    0%{background-position:200% center}\n    100%{background-position:-200% center}\n  }\n  @keyframes fadeUp {\n    from{opacity:0;transform:translateY(8px)}\n    to{opacity:1;transform:translateY(0)}\n  }\n\n  .wrap {\n    background: #0e0c0a;\n    border-radius: 24px;\n    padding: 40px 24px 36px;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n    position: relative;\n    overflow: hidden;\n    text-align: center;\n  }\n\n  .wrap::before {\n    content:'';\n    position:absolute;top:0;left:0;right:0;height:1px;\n    background: linear-gradient(90deg, transparent, #c9a84c, #e8d5a0, #c9a84c, transparent);\n    animation: shimmerGold 4s linear infinite;\n    background-size: 200% auto;\n  }\n\n  .wrap::after {\n    content:'';\n    position:absolute;bottom:0;left:0;right:0;height:1px;\n    background: linear-gradient(90deg, transparent, #c9a84c44, transparent);\n  }\n\n  .eyebrow {\n    font-size: 9px;\n    letter-spacing: 5px;\n    text-transform: uppercase;\n    color: #6b5e44;\n    margin: 0 0 18px;\n    animation: fadeUp .5s ease both;\n  }\n\n  .message {\n    font-size: 15px;\n    font-weight: 300;\n    color: #c8bfa8;\n    letter-spacing: .4px;\n    line-height: 1.9;\n    margin: 0 0 30px;\n    animation: fadeUp .5s ease .1s both;\n  }\n\n  .divider {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin: 0 0 24px;\n    opacity: .4;\n    animation: fadeUp .5s ease .2s both;\n  }\n  .divider-line {\n    flex:1; height:.5px;\n    background: linear-gradient(to right, transparent, #c9a84c, transparent);\n  }\n  .divider-dot {\n    width:3px;height:3px;border-radius:50%;background:#c9a84c;\n  }\n\n  .pix-number {\n    font-size: 26px;\n    font-weight: 400;\n    letter-spacing: 4px;\n    background: linear-gradient(90deg, #a07830 0%, #e8d5a0 35%, #f5ead0 50%, #d4b870 70%, #a07830 100%);\n    background-size: 200% auto;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    animation: shimmerGold 4s linear infinite, fadeUp .5s ease .3s both;\n    margin: 0 0 8px;\n  }\n\n  .pix-hint {\n    font-size: 10px;\n    color: #4a4030;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n    margin: 0 0 28px;\n    animation: fadeUp .5s ease .35s both;\n  }\n\n  .copy-btn {\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    background: transparent;\n    border: .5px solid #4a3c20;\n    border-radius: 30px;\n    padding: 12px 28px;\n    color: #c9a84c;\n    font-size: 10px;\n    font-weight: 500;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n    cursor: pointer;\n    transition: border-color .3s, background .3s;\n    animation: fadeUp .5s ease .4s both;\n  }\n  .copy-btn:hover {\n    border-color: #c9a84c;\n    background: rgba(201,168,76,.06);\n  }\n\n  #pix-fb {\n    font-size: 10px;\n    color: #8a9a6a;\n    letter-spacing: 2px;\n    margin-top: 12px;\n    min-height: 14px;\n    transition: opacity .3s;\n  }\n</style>\n\n<div class=\"wrap\">\n  <p class=\"eyebrow\">presente</p>\n\n  <p class=\"message\">\n    Se quiser me presentear,<br>\n    contribuições pelo Pix são muito bem-vindas<br>\n    e recebidas com muito carinho 🤍\n  </p>\n\n  <div class=\"divider\">\n    <div class=\"divider-line\"></div>\n    <div class=\"divider-dot\"></div>\n    <div class=\"divider-dot\" style=\"opacity:.5\"></div>\n    <div class=\"divider-dot\"></div>\n    <div class=\"divider-line\"></div>\n  </div>\n\n  <p class=\"pix-number\">(51) 8166-9016</p>\n  <p class=\"pix-hint\">Chave Pix · Celular</p>\n\n  <button class=\"copy-btn\" onclick=\"\n    navigator.clipboard.writeText('51981669016').then(()=>{\n      const fb = document.getElementById('pix-fb');\n      fb.textContent = '✦ Número copiado com sucesso';\n      fb.style.opacity='1';\n      setTimeout(()=>{ fb.style.opacity='0'; setTimeout(()=>{ fb.textContent=''; },400); }, 2500);\n    }).catch(()=>{\n      const fb = document.getElementById('pix-fb');\n      fb.textContent = '(51) 8166-9016';\n      fb.style.opacity='1';\n    });\n  \">\n    ✦   Copiar número\n  </button>\n  <div id=\"pix-fb\"></div>\n</div>\n"
    },
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "conteudo": "https://docs.google.com/forms/d/e/1FAIpQLSf4l6c0RszDw5znMnjuHhfuFtHWMqIl8Y09UWj7GDrnQdNEkA/viewform?usp=publish-editor"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dress Code",
      "icone": "fa-solid fa-shirt",
      "conteudo": "<style>\n  @keyframes shimmerGold {\n    0%{background-position:200% center}\n    100%{background-position:-200% center}\n  }\n  @keyframes fadeUp {\n    from{opacity:0;transform:translateY(8px)}\n    to{opacity:1;transform:translateY(0)}\n  }\n\n  .wrap {\n    background: #0e0c0a;\n    border-radius: 24px;\n    padding: 44px 28px 40px;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n    position: relative;\n    overflow: hidden;\n    text-align: center;\n  }\n\n  .wrap::before {\n    content:'';\n    position:absolute;top:0;left:0;right:0;height:1px;\n    background: linear-gradient(90deg, transparent, #c9a84c, #e8d5a0, #c9a84c, transparent);\n    animation: shimmerGold 4s linear infinite;\n    background-size: 200% auto;\n  }\n  .wrap::after {\n    content:'';\n    position:absolute;bottom:0;left:0;right:0;height:1px;\n    background: linear-gradient(90deg, transparent, #c9a84c44, transparent);\n  }\n\n  .eyebrow {\n    font-size: 9px;\n    letter-spacing: 6px;\n    text-transform: uppercase;\n    color: #6b5e44;\n    margin: 0 0 12px;\n    animation: fadeUp .5s ease both;\n  }\n\n  .title {\n    font-size: 22px;\n    font-weight: 300;\n    letter-spacing: 5px;\n    text-transform: uppercase;\n    background: linear-gradient(90deg, #a07830 0%, #e8d5a0 35%, #f5ead0 50%, #d4b870 70%, #a07830 100%);\n    background-size: 200% auto;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    animation: shimmerGold 5s linear infinite, fadeUp .5s ease .1s both;\n    margin: 0 0 6px;\n  }\n\n  .subtitle {\n    font-size: 10px;\n    color: #4a4030;\n    letter-spacing: 3px;\n    margin: 0 0 32px;\n    animation: fadeUp .5s ease .15s both;\n  }\n\n  .divider {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin: 0 0 28px;\n    opacity: .4;\n    animation: fadeUp .5s ease .2s both;\n  }\n  .divider-line {\n    flex:1; height:.5px;\n    background: linear-gradient(to right, transparent, #c9a84c, transparent);\n  }\n  .divider-dot { width:3px;height:3px;border-radius:50%;background:#c9a84c; }\n\n  .dc-label {\n    font-size: 9px;\n    letter-spacing: 5px;\n    text-transform: uppercase;\n    color: #6b5e44;\n    margin: 0 0 22px;\n    animation: fadeUp .5s ease .25s both;\n  }\n\n  .palette-row {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    margin: 0 0 28px;\n    animation: fadeUp .5s ease .3s both;\n  }\n\n  .palette-item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n  }\n\n  .swatch {\n    width: 56px;\n    height: 56px;\n    border-radius: 50%;\n    border: .5px solid #2e2618;\n  }\n\n  .swatch-preto { background: #111010; border-color: #3a3030; }\n  .swatch-bege  { background: #d6c9b0; border-color: #b8a888; }\n\n  .swatch-label {\n    font-size: 10px;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n    color: #6b5e44;\n  }\n\n  .divider2 {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin: 0 0 24px;\n    opacity: .25;\n    animation: fadeUp .5s ease .35s both;\n  }\n  .divider2-line {\n    flex:1; height:.5px;\n    background: linear-gradient(to right, transparent, #c9a84c, transparent);\n  }\n\n  .message {\n    font-size: 13px;\n    font-weight: 300;\n    color: #a89880;\n    letter-spacing: .4px;\n    line-height: 2;\n    margin: 0 0 10px;\n    animation: fadeUp .5s ease .4s both;\n  }\n\n  .avoid {\n    font-size: 11px;\n    color: #3e3428;\n    letter-spacing: 1px;\n    line-height: 1.9;\n    margin: 20px 0 0;\n    animation: fadeUp .5s ease .45s both;\n    padding: 14px 18px;\n    border: .5px solid #1e1a12;\n    border-radius: 14px;\n    background: #0a0905;\n  }\n\n  .avoid-label {\n    font-size: 9px;\n    letter-spacing: 4px;\n    text-transform: uppercase;\n    color: #5a4e38;\n    margin: 0 0 8px;\n  }\n</style>\n\n<div class=\"wrap\">\n\n  <p class=\"eyebrow\">manual do convidado</p>\n  <h2 class=\"title\">Dress Code</h2>\n  <p class=\"subtitle\">✦ vista-se com elegância ✦</p>\n\n  <div class=\"divider\">\n    <div class=\"divider-line\"></div>\n    <div class=\"divider-dot\"></div>\n    <div class=\"divider-dot\" style=\"opacity:.5\"></div>\n    <div class=\"divider-dot\"></div>\n    <div class=\"divider-line\"></div>\n  </div>\n\n  <p class=\"dc-label\">Paleta de cores</p>\n\n  <div class=\"palette-row\">\n    <div class=\"palette-item\">\n      <div class=\"swatch swatch-preto\"></div>\n      <span class=\"swatch-label\">Preto</span>\n    </div>\n    <div class=\"palette-item\">\n      <div class=\"swatch swatch-bege\"></div>\n      <span class=\"swatch-label\">Bege</span>\n    </div>\n  </div>\n\n  <div class=\"divider2\">\n    <div class=\"divider2-line\"></div>\n    <div class=\"divider-dot\" style=\"opacity:.3\"></div>\n    <div class=\"divider2-line\"></div>\n  </div>\n\n  <p class=\"message\">\n    Para celebrar esse momento com toda a elegância<br>\n    que ele merece, pedimos que os convidados<br>\n    vistam-se nas cores <span style=\"color:#c8bfa8;font-weight:400;\">preto</span> e <span style=\"color:#c8bfa8;font-weight:400;\">bege</span>.<br>\n    Combinações entre as duas tonalidades<br>\n    são muito bem-vindas. 🤍\n  </p>\n\n  <div class=\"avoid\">\n    <p class=\"avoid-label\">Por favor, evite</p>\n    <p style=\"margin:0;font-size:12px;color:#4a4030;line-height:1.9;letter-spacing:.3px;\">\n      Estampas coloridas · Tons vibrantes<br>\n      Branco puro · Cores fora da paleta\n    </p>\n  </div>\n\n</div>\n"
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
    "buttonColor": "#121212",
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
