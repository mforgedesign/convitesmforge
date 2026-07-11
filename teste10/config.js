window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Sarah Evelen",
    "idade": 15,
    "data": "2026-09-05",
    "hora": "18:00",
    "horaTermino": "",
    "endereco": "",
    "frase1": "",
    "frase2": "",
    "frase3": ""
  },
  "convite": {
    "paletaCores": "Rosa-Quartzo, Lilás, Verde-Sálvia, Azul-Serenity, Rosé e Branco off-white",
    "tema": "Floral",
    "musica": "assets/music_1783798717642.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "teste10",
    "seo": {
      "pageTitle": "Convite Especial",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1783798717642.png",
    "cartao": "",
    "aberturaSlides": [
      "assets/slide1_1783798717642.mp4",
      "assets/slide2_1783798717642.jpg",
      "assets/slide3_1783798717642.jpg"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1783798717642.mp4",
        "label": "Abertura (Video)",
        "type": "video"
      },
      {
        "filePath": "assets/slide2_1783798717642.jpg",
        "label": "Convite Especial",
        "type": "image"
      },
      {
        "filePath": "assets/slide3_1783798717642.jpg",
        "label": "Prepare-se",
        "type": "image"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1783798717642.png",
    "folhaPreenchida": "assets/folha_1783798717642.jpg",
    "musica": "assets/music_1783798717642.mp3",
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
    "fotos": [
      "assets/foto1_1783798717642.png",
      "assets/foto2_1783798717642.png",
      "assets/foto3_1783798717642.png"
    ],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/apshuicUt4GEB1UW7"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\"> <style>\n.lp-root, .lp-root *, .lp-root *::before, .lp-root *::after {\n  color-scheme: light only; forced-color-adjust: none;\n  -webkit-font-smoothing: antialiased; box-sizing: border-box;\n}\n.lp-root { background: hsl(222, 20%, 98%); color: hsl(222, 81%, 25%); margin: 0; padding: 0; }\n.lp-wrap {\n  position: relative; padding: 30px 18px 36px; overflow: hidden;\n  font-family: 'Cormorant Garamond', serif;\n  background: linear-gradient(160deg, hsl(222, 20%, 98%) 0%, hsl(222, 25%, 95%) 50%, hsl(222, 20%, 98%) 100%);\n}\n\n.snow { position: absolute; pointer-events: none; z-index: 1; color: rgba(160,190,240,.55); font-size: 13px; animation: snowfall linear infinite; }\n@keyframes snowfall { 0%{transform:translateY(-20px) rotate(0deg);opacity:0;}"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\"> <style>\n*{box-sizing:border-box;margin:0;padding:0}\n.mc-wrap{\n  position:relative;padding:32px 18px 36px;overflow:hidden;\n  font-family:'Cormorant Garamond',serif;\n  background:linear-gradient(160deg,hsl(222, 20%, 98%) 0%,hsl(222, 25%, 95%) 40%,hsl(222, 20%, 98%) 100%);\n}\n.mc-header{position:relative;z-index:2;text-align:center;margin-bottom:10px;}\n.mc-crown{font-size:26px;margin-bottom:6px;display:block;animation:crownFloat 4s ease-in-out infinite;}\n@keyframes crownFloat{0%,100%{transform:translateY(0);}50%{transform:translateY(-5px);}}\n.mc-header h2{font-family:'Cinzel',serif;font-size:22px;color:hsl(222, 81%, 25%);letter-spacing:.15em;margin-bottom:5px;}\n.mc-header p{color:hsl(222, 91%, 70%);font-size:14.5px;font-style:italic;}\n.mc-sub{\n  position:relative;z-index:2;text-align:center;margin-bottom:24px;\n  font-size:13px;color:hsl(222, 91%, 70%);font-family:'Cinzel',serif;letter-spacing:.12em;text-transform:uppercase;\n}\n.mc-sub::before,.mc-sub::after{\n  content:'';display:inline-block;width:40px;height:.5px;\n  background:linear-gradient(to right,transparent,rgba(100,160,220,.40));\n  vertical-align:middle;margin:0 10px;\n}\n.mc-sub::after{background:linear-gradient(to left,transparent,rgba(100,160,220,.40));}\n.mc-grid{display:grid;gap:12px;position:relative;z-index:2;}\n.mc-card{\n  border-radius:20px;background:rgba(255,255,255,.82);\n  border:1px solid rgba(100,160,220,.20);\n  box-shadow:0 2px 16px rgba(60,120,200,.07);\n  overflow:hidden;animation:mcFade .6s ease both;\n}\n@keyframes mcFade{from{opacity:0;transform:translateY(11px);}to{opacity:1;transform:translateY(0);}}\n.mc-top{display:flex;align-items:center;gap:13px;padding:15px 15px 13px;}\n.mc-icon{\n  width:46px;height:46px;border-radius:14px;flex-shrink:0;\n  display:flex;align-items:center;justify-content:center;\n  background:linear-gradient(145deg,hsl(222, 91%, 70%),hsl(222, 91%, 70%));\n  color:#fff;font-size:18px;box-shadow:0 2px 10px rgba(80,140,220,.22);\n}\n.mc-title{font-family:'Cinzel',serif;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:hsl(222, 91%, 70%);margin-bottom:3px;}\n.mc-text{font-size:15px;line-height:1.6;color:hsl(222, 71%, 12%);}\n.mc-divider{height:.5px;margin:0 15px;background:linear-gradient(to right,transparent,rgba(100,160,220,.22),transparent);}\n.mc-body{padding:11px 15px 15px;}\n.mc-highlight{color:hsl(222, 81%, 25%);font-weight:600;}\n.mc-tag-row{display:flex;flex-wrap:wrap;gap:7px;margin-top:9px;}\n.mc-tag{display:inline-flex;align-items:center;gap:5px;padding:4px 11px;border-radius:30px;font-size:12.5px;font-style:italic;}\n.mc-tag-ok{background:rgba(200,230,255,.55);border:1px solid rgba(80,150,220,.22);color:hsl(222, 81%, 25%);}\n.mc-tag-no{background:rgba(220,238,255,.55);border:1px solid rgba(80,140,210,.25);color:hsl(222, 81%, 25%);}\n.mc-tag-white{background:rgba(235,235,240,.70);border:1px solid rgba(160,170,190,.30);color:#3a4a5a;}\n.mc-section-label{\n  font-family:'Cinzel',serif;font-size:10.5px;letter-spacing:.12em;\n  text-transform:uppercase;color:hsl(222, 91%, 70%);margin:12px 0 6px;\n}\n.mc-note{\n  margin-top:11px;padding:10px 13px;border-radius:14px;\n  background:rgba(180,215,250,.18);border:1px solid rgba(100,160,220,.22);\n  font-size:13.5px;color:hsl(222, 81%, 25%);font-style:italic;line-height:1.55;\n}\n.mc-confirm{\n  position:relative;z-index:2;margin-top:14px;\n  border-radius:20px;\n  background:linear-gradient(145deg,rgba(255,255,255,.90),rgba(210,235,255,.55));\n  border:1px solid rgba(100,160,220,.28);\n  padding:16px 16px 15px;\n  box-shadow:0 2px 18px rgba(60,120,200,.10);\n  animation:mcFade .6s .38s ease both;\n}\n.mc-confirm-top{display:flex;align-items:center;gap:12px;margin-bottom:11px;}\n.mc-confirm-icon{\n  width:46px;height:46px;border-radius:14px;flex-shrink:0;\n  display:flex;align-items:center;justify-content:center;\n  background:linear-gradient(145deg,hsl(222, 91%, 70%),hsl(222, 81%, 25%));\n  color:#fff;font-size:18px;box-shadow:0 2px 12px rgba(30,90,180,.28);\n}\n.mc-confirm-title{font-family:'Cinzel',serif;font-size:12px;letter-spacing:.13em;text-transform:uppercase;color:hsl(222, 81%, 25%);margin-bottom:2px;}\n.mc-confirm-sub{font-size:13px;color:hsl(222, 91%, 70%);font-style:italic;}\n.mc-date-badge{\n  display:flex;align-items:center;justify-content:center;gap:10px;\n  background:linear-gradient(145deg,hsl(222, 25%, 95%),hsl(222, 91%, 70%));\n  border:1px solid rgba(100,160,220,.30);\n  border-radius:14px;padding:11px 14px;\n  font-family:'Cinzel',serif;font-size:15px;\n  color:hsl(222, 81%, 25%);letter-spacing:.10em;\n  box-shadow:inset 0 0 10px rgba(255,255,255,.40);\n}\n.mc-date-badge i{color:hsl(222, 91%, 70%);font-size:16px;}\n.mc-confirm-note{\n  margin-top:10px;font-size:13.5px;color:hsl(222, 71%, 12%);\n  font-style:italic;line-height:1.55;text-align:center;\n}\n.lp-star{position:absolute;color:rgba(120,170,230,.50);font-size:11px;animation:starAnim 3s ease-in-out infinite;pointer-events:none;}\n@keyframes starAnim{0%,100%{opacity:0;transform:scale(0);}50%{opacity:1;transform:scale(1);}}\n</style> <svg style=\"position:absolute;top:-14px;left:-14px;width:168px;height:168px;opacity:.13;pointer-events:none;z-index:1;\" viewBox=\"0 0 168 168\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(0 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(45 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(90 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(135 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(180 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(225 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(270 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(315 84 84)\"/>\n    <circle cx=\"84\" cy=\"84\" r=\"13\" fill=\"hsl(222, 25%, 95%)\"/>\n  </g>\n</svg> <svg style=\"position:absolute;bottom:-10px;right:-10px;width:128px;height:128px;opacity:.11;pointer-events:none;z-index:1;\" viewBox=\"0 0 128 128\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(0 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(222, 25%, 95%)\" transform=\"rotate(60 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(120 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(222, 25%, 95%)\" transform=\"rotate(180 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(240 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(222, 25%, 95%)\" transform=\"rotate(300 64 64)\"/>\n    <circle cx=\"64\" cy=\"64\" r=\"10\" fill=\"hsl(222, 20%, 98%)\"/>\n  </g>\n</svg> <svg style=\"position:absolute;top:44%;left:-6px;width:70px;height:70px;opacity:.10;pointer-events:none;z-index:1;\" viewBox=\"0 0 70 70\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(0 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(72 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(144 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(216 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(222, 91%, 70%)\" transform=\"rotate(288 35 35)\"/>\n    <circle cx=\"35\" cy=\"35\" r=\"6\" fill=\"hsl(222, 25%, 95%)\"/>\n  </g>\n</svg> <i class=\"lp-star\" style=\"top:9%;left:8%;animation-delay:0s;\">✦</i> <i class=\"lp-star\" style=\"top:17%;right:13%;animation-delay:1.1s;\">✧</i> <i class=\"lp-star\" style=\"bottom:14%;left:14%;animation-delay:2s;\">✦</i> <i class=\"lp-star\" style=\"bottom:7%;right:11%;animation-delay:.6s;\">✧</i> <i class=\"lp-star\" style=\"top:38%;right:7%;animation-delay:1.6s;\">✦</i> <div class=\"mc-wrap\"> <div class=\"mc-header\"> <span class=\"mc-crown\">•</span> <h2>Manual do Convidado</h2> <p>Orientações para aproveitar a celebração com conforto e carinho</p> </div> <div class=\"mc-sub\">• informações importantes •</div> <div class=\"mc-grid\"> <div class=\"mc-card\" style=\"animation-delay:.04s\"> <div class=\"mc-top\"> <div class=\"mc-icon\"><i class=\"fa-solid fa-heart\"></i></div> <div> <div class=\"mc-title\">Boas-vindas</div> <div class=\"mc-text\">Sua presença torna este momento ainda mais especial. Cada detalhe foi preparado para receber você com carinho.</div> </div> </div> </div> <div class=\"mc-card\" style=\"animation-delay:.09s\"> <div class=\"mc-top\"> <div class=\"mc-icon\" style=\"background:linear-gradient(145deg,hsl(222, 25%, 95%),hsl(222, 91%, 70%));\"><i class=\"fa-solid fa-user-check\"></i></div> <div> <div class=\"mc-title\">Traje</div> <div class=\"mc-text\"><span class=\"mc-highlight\">Escolha algo confortável e adequado ao clima da celebração.</span></div> </div> </div> <div class=\"mc-divider\"></div> <div class=\"mc-body\"> <div class=\"mc-text\">Quando houver uma orientação específica de traje ou paleta, considere-a como parte do cuidado com a experiência do evento.</div> </div> </div> <div class=\"mc-card\" style=\"animation-delay:.14s\"> <div class=\"mc-top\"> <div class=\"mc-icon\" style=\"background:linear-gradient(145deg,hsl(222, 91%, 70%),hsl(222, 81%, 25%));\"><i class=\"fa-solid fa-clock\"></i></div> <div> <div class=\"mc-title\">Chegada</div> <div class=\"mc-text\">Chegar com tranquilidade ajuda você a aproveitar todos os momentos importantes.</div> </div> </div> <div class=\"mc-divider\"></div> <div class=\"mc-body\"> <div class=\"mc-text\">Planeje seu deslocamento com antecedência e, se possível, reserve alguns minutos extras para entrada, cumprimentos e acomodação.</div> </div> </div> <div class=\"mc-card\" style=\"animation-delay:.19s\"> <div class=\"mc-top\"> <div class=\"mc-icon\" style=\"background:linear-gradient(145deg,hsl(222, 20%, 98%),hsl(222, 25%, 95%));\"><i class=\"fa-solid fa-camera-retro\"></i></div> <div> <div class=\"mc-title\">Registros</div> <div class=\"mc-text\">Fotos e vídeos são bem-vindos quando feitos com cuidado e sem atrapalhar os momentos principais.</div> </div> </div> <div class=\"mc-divider\"></div> <div class=\"mc-body\"> <div class=\"mc-text\">Aproveite a celebração, compartilhe bons registros e preserve a leveza do encontro.</div> </div> </div> </div> <div class=\"mc-confirm\"> <div class=\"mc-confirm-top\"> <div class=\"mc-confirm-icon\"><i class=\"fa-solid fa-calendar-check\"></i></div> <div> <div class=\"mc-confirm-title\">Confirmação</div> <div class=\"mc-confirm-sub\">Sua resposta ajuda na organização do evento</div> </div> </div> <div class=\"mc-date-badge\"> <i class=\"fa-solid fa-circle-check\"></i> Confirme sua presença quando solicitado </div> <div class=\"mc-confirm-note\">Se houver confirmação de presença, responda dentro do prazo indicado no convite para que tudo seja preparado da melhor forma. </div> </div> </div>"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5511988509403",
      "rsvpConfig": {
        "exibirNome": true,
        "exibirWhatsapp": false,
        "exibirAcompanhantes": false
      }
    },
    {
      "tipoAcao": "Galeria",
      "tipoVisual": "css",
      "titulo": "Galeria de Fotos",
      "icone": "fa-solid fa-camera",
      "conteudo": [
        "assets/foto1_1783798717642.png",
        "assets/foto2_1783798717642.png",
        "assets/foto3_1783798717642.png"
      ]
    }
  ],
  "upsell": {
    "galeriaFotos": true,
    "saveTheDate": false,
    "lembrete": false
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
