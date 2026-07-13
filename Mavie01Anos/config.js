window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Mavie",
    "idade": 1,
    "data": "2026-08-23",
    "hora": "18:00",
    "horaTermino": "",
    "endereco": "Av. Francisco de Angelis, 216 - Vila Joaquim Inacio, Campinas - SP, 13043-030, Brasil",
    "frase1": "",
    "frase2": "",
    "frase3": ""
  },
  "convite": {
    "paletaCores": "Rosa e Rosé Gold",
    "tema": "Jardim Encantado",
    "musica": "assets/music_1783906364383.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Mavie01Anos",
    "seo": {
      "pageTitle": "Convite Especial",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1783906364383.jpg",
    "cartao": "assets/cartao_chatgpt_1783906364383.jpg",
    "aberturaSlides": [
      "assets/slide1_1783906364383.mp4",
      "assets/slide2_1783906364383.mp4",
      "assets/slide3_1783906364383.mp4",
      "",
      ""
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1783906364383.mp4",
        "label": "Slide 1",
        "type": "video"
      },
      {
        "filePath": "assets/slide2_1783906364383.mp4",
        "label": "Slide 1",
        "type": "video"
      },
      {
        "filePath": "assets/slide3_1783906364383.mp4",
        "label": "Slide 2",
        "type": "video"
      },
      {
        "filePath": "",
        "label": "Slide 3",
        "type": "video"
      },
      {
        "filePath": "",
        "label": "Slide 4",
        "type": "video"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1783906364383.jpg",
    "folhaPreenchida": "assets/folha_1783906364383.png",
    "musica": "assets/music_1783906364383.mp3",
    "fabric": {
      "saveTheDate": {
        "referencia": "",
        "resultado": "",
        "musicStartSec": 0,
        "durationSec": 20
      },
      "lembrete": {
        "referencia": "",
        "resultado": "",
        "musicStartSec": 0,
        "durationSec": 20
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
      "conteudo": "https://maps.app.goo.gl/ouomibMLSqDcbVbC7"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5519991322768",
      "rsvpConfig": {
        "exibirNome": true,
        "exibirWhatsapp": false,
        "exibirAcompanhantes": false
      }
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\"> <style>\n.lp-root, .lp-root *, .lp-root *::before, .lp-root *::after {\n  color-scheme: light only; forced-color-adjust: none;\n  -webkit-font-smoothing: antialiased; box-sizing: border-box;\n}\n.lp-root { background: hsl(345, 35%, 98%); color: hsl(340, 32%, 38%); margin: 0; padding: 0; }\n.lp-wrap {\n  position: relative; padding: 30px 18px 36px; overflow: hidden;\n  font-family: 'Cormorant Garamond', serif;\n  background: linear-gradient(160deg, hsl(345, 35%, 98%) 0%, hsl(350, 28%, 95%) 50%, hsl(345, 35%, 98%) 100%);\n}\n\n.snow { position: absolute; pointer-events: none; z-index: 1; color: rgba(214, 168, 186, .55); font-size: 13px; animation: snowfall linear infinite; }\n@keyframes snowfall { 0%{transform:translateY(-20px) rotate(0deg);opacity:0;} 10%{opacity:1;} 90%{opacity:.6;} 100%{transform:translateY(700px) rotate(360deg);opacity:0;} }\n\n.lp-header { position: relative; z-index: 2; text-align: center; margin-bottom: 22px; }\n.lp-header h2 { font-family: 'Cinzel', serif; font-size: 22px; color: hsl(340, 32%, 38%); letter-spacing: .13em; margin-bottom: 4px; }\n.lp-header .sub { color: hsl(342, 45%, 73%); font-size: 14px; font-style: italic; margin-bottom: 2px; }\n.lp-header .badge {\n  display: inline-block; margin-top: 6px; font-family: 'Cinzel', serif;\n  font-size: 10px; letter-spacing: .18em; text-transform: uppercase;\n  background: linear-gradient(135deg, #f3d8df, #f9ebef);\n  border: 1px solid rgba(160,190,230,.5); border-radius: 30px;\n  padding: 3px 14px; color: #9b5c74;\n}\n\n.lp-grid { display: grid; gap: 10px; position: relative; z-index: 2; }\n.lp-card {\n  display: flex; gap: 13px; align-items: center;\n  padding: 13px 15px; border-radius: 20px;\n  background: rgba(255,255,255,.95);\n  border: 1px solid rgba(220, 190, 201, .45);\n  box-shadow: 0 2px 14px rgba(184, 120, 146, .10);\n  animation: lpFade .5s ease both;\n}\n@keyframes lpFade { from{opacity:0;transform:translateY(10px);} to{opacity:1;transform:translateY(0);} }\n\n.lp-icon {\n  width: 44px; height: 44px; border-radius: 14px; flex-shrink: 0;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 17px; color: #fff;\n  background: hsl(342, 45%, 73%); /* fallback background if specific color class is missing */\n  box-shadow: 0 2px 10px rgba(188, 120, 146, .22);\n}\n.icon-blue   { background: linear-gradient(145deg, hsl(342, 45%, 73%), hsl(340, 32%, 38%)); }\n.icon-silver { background: linear-gradient(145deg, #d9b4c1, #b98595); }\n.icon-light  { background: linear-gradient(145deg, hsl(342, 45%, 73%), hsl(342, 45%, 73%)); }\n.icon-deep   { background: linear-gradient(145deg, hsl(340, 32%, 38%), hsl(340, 18%, 22%)); }\n.icon-ice    { background: linear-gradient(145deg, hsl(342, 45%, 73%), hsl(342, 45%, 73%)); }\n\n.lp-title { font-family: 'Cinzel', serif; font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: hsl(342, 45%, 73%); margin-bottom: 2px; }\n.lp-name  { font-size: 15.5px; font-weight: 600; color: hsl(340, 32%, 38%); line-height: 1.3; }\n.lp-tip {\n  display: inline-block; margin-top: 4px; font-size: 12px; color: #a05f78;\n  background: rgba(160,190,240,.22); border: 1px solid rgba(205, 155, 175, .30);\n  border-radius: 30px; padding: 2px 10px; font-style: italic;\n}\n\n.lp-divider {\n  text-align: center; position: relative; z-index: 2; margin: 20px 0 14px;\n  font-family: 'Cinzel', serif; font-size: 10px; letter-spacing: .22em; color: hsl(342, 45%, 73%);\n}\n.lp-divider::before, .lp-divider::after {\n  content: ''; display: inline-block; width: 44px; height: 0.5px;\n  background: linear-gradient(to right, transparent, rgba(196, 145, 165, .45));\n  vertical-align: middle; margin: 0 10px;\n}\n.lp-divider::after { background: linear-gradient(to left, transparent, rgba(196, 145, 165, .45)); }\n\n.pix-box {\n  position: relative; z-index: 2; border-radius: 20px;\n  background: rgba(255,255,255,.95);\n  border: 1px solid rgba(205, 162, 177, .30);\n  padding: 16px 15px 14px;\n  box-shadow: 0 2px 16px rgba(184, 120, 146, .10);\n}\n.pix-row { display: flex; align-items: center; gap: 10px; margin-bottom: 11px; }\n.pix-icon-wrap {\n  width: 44px; height: 44px; border-radius: 14px; flex-shrink: 0;\n  display: flex; align-items: center; justify-content: center;\n  background: linear-gradient(145deg, hsl(342, 45%, 73%), hsl(340, 32%, 38%));\n  color: #fff; font-size: 19px; box-shadow: 0 2px 12px rgba(188, 120, 146, .28);\n}\n.pix-label { font-family: 'Cinzel', serif; font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: hsl(340, 32%, 38%); margin-bottom: 2px; }\n.pix-sub   { font-size: 13px; color: hsl(342, 45%, 73%); font-style: italic; }\n.pix-key-wrap {\n  display: flex; align-items: center; gap: 10px;\n  background: rgba(250, 239, 243, .92);\n  border: 1px solid rgba(214, 170, 185, .30); border-radius: 14px;\n  padding: 10px 13px; margin-bottom: 9px;\n}\n.pix-key {\n  flex: 1; font-family: 'Cinzel', serif; font-size: 12px;\n  color: hsl(340, 32%, 38%); letter-spacing: .02em; word-break: break-all;\n}\n.pix-copy-btn {\n  flex-shrink: 0; cursor: pointer; border: none; outline: none;\n  border-radius: 10px; padding: 7px 13px;\n  background: linear-gradient(145deg, hsl(342, 45%, 73%), hsl(340, 32%, 38%));\n  color: #fff; font-family: 'Cinzel', serif;\n  font-size: 11px; letter-spacing: .10em;\n  box-shadow: 0 2px 10px rgba(188, 120, 146, .28);\n  transition: transform .15s; display: flex; align-items: center; gap: 5px;\n}\n.pix-copy-btn:hover  { transform: scale(1.04); }\n.pix-copy-btn:active { transform: scale(.97); }\n.pix-copied { text-align: center; font-size: 13px; color: hsl(340, 32%, 38%); font-style: italic; height: 20px; transition: opacity .3s; }\n\n.lp-footer {\n  position: relative; z-index: 2; margin-top: 18px; border-radius: 20px;\n  background: linear-gradient(145deg, rgba(255,255,255,.95), rgba(245, 228, 234, .85));\n  border: 1px solid rgba(205, 162, 177, .35); padding: 16px;\n  text-align: center;\n}\n.lp-footer-text   { font-size: 15px; color: hsl(340, 18%, 22%); line-height: 1.7; font-style: italic; }\n.lp-footer-accent { color: hsl(340, 32%, 38%); font-weight: 600; font-family: 'Cinzel', serif; font-size: 12px; letter-spacing: .08em; display: block; margin-top: 6px; }\n\n.lp-star { position: absolute; color: rgba(196, 145, 165, .50); font-size: 11px; animation: lsStar 3s ease-in-out infinite; z-index: 1; }\n@keyframes lsStar { 0%,100%{opacity:0;transform:scale(0);}50%{opacity:1;transform:scale(1);} }\n</style> <div class=\"lp-root\"> <span class=\"snow\" style=\"left:8%;animation-duration:6s;animation-delay:0s;\">❄</span> <span class=\"snow\" style=\"left:22%;animation-duration:8s;animation-delay:1.2s;font-size:9px;\">❅</span> <span class=\"snow\" style=\"left:38%;animation-duration:7s;animation-delay:2.5s;\">❆</span> <span class=\"snow\" style=\"left:55%;animation-duration:9s;animation-delay:.8s;font-size:9px;\">❄</span> <span class=\"snow\" style=\"left:70%;animation-duration:6.5s;animation-delay:3s;\">❅</span> <span class=\"snow\" style=\"left:85%;animation-duration:8.5s;animation-delay:1.8s;font-size:10px;\">❆</span> <svg style=\"position:absolute;top:-14px;left:-14px;width:150px;height:150px;opacity:.10;pointer-events:none;z-index:1;\" viewBox=\"0 0 160 160\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(342, 45%, 73%)\" transform=\"rotate(0 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(342, 45%, 73%)\" transform=\"rotate(45 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(342, 45%, 73%)\" transform=\"rotate(90 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(342, 45%, 73%)\" transform=\"rotate(135 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(342, 45%, 73%)\" transform=\"rotate(180 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(342, 45%, 73%)\" transform=\"rotate(225 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(342, 45%, 73%)\" transform=\"rotate(270 80 80)\"/>\n    <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"hsl(342, 45%, 73%)\" transform=\"rotate(315 80 80)\"/>\n    <circle cx=\"80\" cy=\"80\" r=\"12\" fill=\"#f2dbe2\"/>\n  </g>\n</svg> <svg style=\"position:absolute;bottom:-8px;right:-8px;width:115px;height:115px;opacity:.10;pointer-events:none;z-index:1;\" viewBox=\"0 0 120 120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#e1bcc8\" transform=\"rotate(0 60 60)\"/>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#f3dbe3\" transform=\"rotate(60 60 60)\"/>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#e1bcc8\" transform=\"rotate(120 60 60)\"/>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#f3dbe3\" transform=\"rotate(180 60 60)\"/>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#e1bcc8\" transform=\"rotate(240 60 60)\"/>\n    <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#f3dbe3\" transform=\"rotate(300 60 60)\"/>\n    <circle cx=\"60\" cy=\"60\" r=\"9\" fill=\"#faeef2\"/>\n  </g>\n</svg> <i class=\"lp-star\" style=\"top:9%;left:7%;animation-delay:0s;\">✦</i> <i class=\"lp-star\" style=\"top:20%;right:13%;animation-delay:1s;\">✧</i> <i class=\"lp-star\" style=\"bottom:22%;left:12%;animation-delay:2s;\">✦</i> <i class=\"lp-star\" style=\"bottom:10%;right:9%;animation-delay:.5s;\">✧</i> <div class=\"lp-wrap\"> <div class=\"lp-header\"> <h2>Lista de Presentes</h2> <p class=\"sub\">Com muito carinho e gratidão ✨</p> <span class=\"badge\">❄ Jardim Encantado ❄</span> </div> <div class=\"lp-grid\"> <div class=\"lp-card\" style=\"animation-delay:.05s\"> <div class=\"lp-icon icon-blue\"><i class=\"fa-solid fa-shirt\"></i></div> <div> <div class=\"lp-title\">Presente</div> <div class=\"lp-name\">Roupa</div> <span class=\"lp-tip\">✦ Tamanho 2 anos</span> </div> </div> <div class=\"lp-card\" style=\"animation-delay:.10s\"> <div class=\"lp-icon icon-silver\"><i class=\"fa-solid fa-shoe-prints\"></i></div> <div> <div class=\"lp-title\">Presente</div> <div class=\"lp-name\">Sapato</div> <span class=\"lp-tip\">✦ Tamanho 20 ou 21</span> </div> </div> <div class=\"lp-card\" style=\"animation-delay:.15s\"> <div class=\"lp-icon icon-light\"><i class=\"fa-solid fa-puzzle-piece\"></i></div> <div> <div class=\"lp-title\">Presente</div> <div class=\"lp-name\">Brinquedo interativo</div> </div> </div>    </div> <div class=\"lp-divider\">✦ pix ✦</div> <div class=\"pix-box\"> <div class=\"pix-row\"> <div class=\"pix-icon-wrap\"><i class=\"fa-solid fa-qrcode\"></i></div> <div> <div class=\"pix-label\">Chave Pix</div> <div class=\"pix-sub\">E-mail · copia e cola abaixo 💗</div> </div> </div> <div class=\"pix-key-wrap\"> <span class=\"pix-key\" id=\"pixKey\">19 99132-2768</span> <button class=\"pix-copy-btn\" onclick=\"var key = document.getElementById('pixKey').textContent.trim(); if (navigator.clipboard) { navigator.clipboard.writeText(key).then(function() { var el = document.getElementById('copiedMsg'); el.style.opacity = '1'; setTimeout(function(){ el.style.opacity = '0'; }, 2000); }); } else { var ta = document.createElement('textarea'); ta.value = key; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); var el = document.getElementById('copiedMsg'); el.style.opacity = '1'; setTimeout(function(){ el.style.opacity = '0'; }, 2000); }\"> <i class=\"fa-solid fa-copy\" style=\"font-size:12px;\"></i> Copiar </button> </div> <div class=\"pix-copied\" id=\"copiedMsg\" style=\"opacity:0;\">Chave copiada! 💗</div> </div> <div class=\"lp-footer\"> <div class=\"lp-footer-text\">Sua presença já é o maior presente desta noite especial.</div> <span class=\"lp-footer-accent\">Obrigada por fazer parte desse momento ❄✨</span> </div> </div> </div> <script>\nfunction copyPix() {\n  var key = document.getElementById('pixKey').textContent.trim();\n  if (navigator.clipboard) {\n    navigator.clipboard.writeText(key).then(showCopied);\n  } else {\n    var ta = document.createElement('textarea');\n    ta.value = key; document.body.appendChild(ta);\n    ta.select(); document.execCommand('copy');\n    document.body.removeChild(ta); showCopied();\n  }\n}\nfunction showCopied() {\n  var el = document.getElementById('copiedMsg');\n  el.style.opacity = '1';\n  setTimeout(function(){ el.style.opacity = '0'; }, 2500);\n}\n</script>"
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
    "buttonColor": "#f9a4c6",
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
