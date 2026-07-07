window.config = {
  "evento": {
    "tipo": "Debutante",
    "nome": "Maria Clara",
    "idade": 15,
    "data": "2026-08-29",
    "hora": "18:00",
    "horaTermino": "00:30",
    "endereco": "Rua Izidoro Luiz Crispim, 812 - Sertão do Trombudo, Itapema - SC, 88220-000",
    "frase1": "",
    "frase2": "",
    "frase3": ""
  },
  "convite": {
    "paletaCores": "Verde com Dourado",
    "tema": "Princesa",
    "musica": "assets/music_1783462463166.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "MariaClara15Anos",
    "seo": {
      "pageTitle": "Convite Especial",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1783462463166.jpg",
    "cartao": "assets/cartao_gen_1783462463166.jpg",
    "aberturaSlides": [
      "assets/slide1_1783462463166.mp4",
      "assets/slide2_1783462463166.jpg",
      "assets/slide3_1783462463166.mp4",
      "assets/slide4_1783462463166.jpg"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1783462463166.mp4",
        "label": "Abertura (Vídeo)",
        "type": "video"
      },
      {
        "filePath": "assets/slide2_1783462463166.jpg",
        "label": "Convite Especial",
        "type": "image"
      },
      {
        "filePath": "assets/slide3_1783462463166.mp4",
        "label": "Cena Temática",
        "type": "video"
      },
      {
        "filePath": "assets/slide4_1783462463166.jpg",
        "label": "Prepare-se",
        "type": "image"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1783462463166.png",
    "folhaPreenchida": "assets/folha_1783462463166.jpg",
    "musica": "assets/music_1783462463166.mp3",
    "fabric": {
      "saveTheDate": {
        "referencia": "assets/fabric_save_the_date_ref_1783462463166.jpg",
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
      "conteudo": "https://maps.app.goo.gl/LQZ84jPNw2GjGUiX8"
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
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\"> <style>\n*{box-sizing:border-box;margin:0;padding:0}\n.mc-wrap{\n  position:relative;padding:32px 18px 36px;overflow:hidden;\n  font-family:'Cormorant Garamond',serif;\n  background:linear-gradient(160deg,hsl(142, 20%, 98%) 0%,hsl(142, 25%, 95%) 40%,hsl(142, 20%, 98%) 100%);\n}\n.mc-header{position:relative;z-index:2;text-align:center;margin-bottom:10px;}\n.mc-crown{font-size:26px;margin-bottom:6px;display:block;animation:crownFloat 4s ease-in-out infinite;}\n@keyframes crownFloat{0%,100%{transform:translateY(0);}50%{transform:translateY(-5px);}}\n.mc-header h2{font-family:'Cinzel',serif;font-size:22px;color:hsl(142, 71%, 21%);letter-spacing:.15em;margin-bottom:5px;}\n.mc-header p{color:hsl(142, 81%, 70%);font-size:14.5px;font-style:italic;}\n.mc-sub{\n  position:relative;z-index:2;text-align:center;margin-bottom:24px;\n  font-size:13px;color:hsl(142, 81%, 70%);font-family:'Cinzel',serif;letter-spacing:.12em;text-transform:uppercase;\n}\n.mc-sub::before,.mc-sub::after{\n  content:'';display:inline-block;width:40px;height:.5px;\n  background:linear-gradient(to right,transparent,rgba(100,160,220,.40));\n  vertical-align:middle;margin:0 10px;\n}\n.mc-sub::after{background:linear-gradient(to left,transparent,rgba(100,160,220,.40));}\n.mc-grid{display:grid;gap:12px;position:relative;z-index:2;}\n.mc-card{\n  border-radius:20px;background:rgba(255,255,255,.82);\n  border:1px solid rgba(100,160,220,.20);\n  box-shadow:0 2px 16px rgba(60,120,200,.07);\n  overflow:hidden;animation:mcFade .6s ease both;\n}\n@keyframes mcFade{from{opacity:0;transform:translateY(11px);}to{opacity:1;transform:translateY(0);}}\n.mc-top{display:flex;align-items:center;gap:13px;padding:15px 15px 13px;}\n.mc-icon{\n  width:46px;height:46px;border-radius:14px;flex-shrink:0;\n  display:flex;align-items:center;justify-content:center;\n  background:linear-gradient(145deg,hsl(142, 81%, 70%),hsl(142, 81%, 70%));\n  color:#fff;font-size:18px;box-shadow:0 2px 10px rgba(80,140,220,.22);\n}\n.mc-title{font-family:'Cinzel',serif;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:hsl(142, 81%, 70%);margin-bottom:3px;}\n.mc-text{font-size:15px;line-height:1.6;color:hsl(142, 61%, 12%);}\n.mc-divider{height:.5px;margin:0 15px;background:linear-gradient(to right,transparent,rgba(100,160,220,.22),transparent);}\n.mc-body{padding:11px 15px 15px;}\n.mc-highlight{color:hsl(142, 71%, 21%);font-weight:600;}\n.mc-tag-row{display:flex;flex-wrap:wrap;gap:7px;margin-top:9px;}\n.mc-tag{display:inline-flex;align-items:center;gap:5px;padding:4px 11px;border-radius:30px;font-size:12.5px;font-style:italic;}\n.mc-tag-ok{background:rgba(200,230,255,.55);border:1px solid rgba(80,150,220,.22);color:hsl(142, 71%, 21%);}\n.mc-tag-no{background:rgba(220,238,255,.55);border:1px solid rgba(80,140,210,.25);color:hsl(142, 71%, 21%);}\n.mc-tag-white{background:rgba(235,235,240,.70);border:1px solid rgba(160,170,190,.30);color:#3a4a5a;}\n.mc-section-label{\n  font-family:'Cinzel',serif;font-size:10.5px;letter-spacing:.12em;\n  text-transform:uppercase;color:hsl(142, 81%, 70%);margin:12px 0 6px;\n}\n.mc-note{\n  margin-top:11px;padding:10px 13px;border-radius:14px;\n  background:rgba(180,215,250,.18);border:1px solid rgba(100,160,220,.22);\n  font-size:13.5px;color:hsl(142, 71%, 21%);font-style:italic;line-height:1.55;\n}\n.mc-confirm{\n  position:relative;z-index:2;margin-top:14px;\n  border-radius:20px;\n  background:linear-gradient(145deg,rgba(255,255,255,.90),rgba(210,235,255,.55));\n  border:1px solid rgba(100,160,220,.28);\n  padding:16px 16px 15px;\n  box-shadow:0 2px 18px rgba(60,120,200,.10);\n  animation:mcFade .6s .38s ease both;\n}\n.mc-confirm-top{display:flex;align-items:center;gap:12px;margin-bottom:11px;}\n.mc-confirm-icon{\n  width:46px;height:46px;border-radius:14px;flex-shrink:0;\n  display:flex;align-items:center;justify-content:center;\n  background:linear-gradient(145deg,hsl(142, 81%, 70%),hsl(142, 71%, 21%));\n  color:#fff;font-size:18px;box-shadow:0 2px 12px rgba(30,90,180,.28);\n}\n.mc-confirm-title{font-family:'Cinzel',serif;font-size:12px;letter-spacing:.13em;text-transform:uppercase;color:hsl(142, 71%, 21%);margin-bottom:2px;}\n.mc-confirm-sub{font-size:13px;color:hsl(142, 81%, 70%);font-style:italic;}\n.mc-date-badge{\n  display:flex;align-items:center;justify-content:center;gap:10px;\n  background:linear-gradient(145deg,hsl(142, 25%, 95%),hsl(142, 81%, 70%));\n  border:1px solid rgba(100,160,220,.30);\n  border-radius:14px;padding:11px 14px;\n  font-family:'Cinzel',serif;font-size:15px;\n  color:hsl(142, 71%, 21%);letter-spacing:.10em;\n  box-shadow:inset 0 0 10px rgba(255,255,255,.40);\n}\n.mc-date-badge i{color:hsl(142, 81%, 70%);font-size:16px;}\n.mc-confirm-note{\n  margin-top:10px;font-size:13.5px;color:hsl(142, 61%, 12%);\n  font-style:italic;line-height:1.55;text-align:center;\n}\n.lp-star{position:absolute;color:rgba(120,170,230,.50);font-size:11px;animation:starAnim 3s ease-in-out infinite;pointer-events:none;}\n@keyframes starAnim{0%,100%{opacity:0;transform:scale(0);}50%{opacity:1;transform:scale(1);}}\n</style> <svg style=\"position:absolute;top:-14px;left:-14px;width:168px;height:168px;opacity:.13;pointer-events:none;z-index:1;\" viewBox=\"0 0 168 168\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(142, 81%, 70%)\" transform=\"rotate(0 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(142, 81%, 70%)\" transform=\"rotate(45 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(142, 81%, 70%)\" transform=\"rotate(90 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(142, 81%, 70%)\" transform=\"rotate(135 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(142, 81%, 70%)\" transform=\"rotate(180 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(142, 81%, 70%)\" transform=\"rotate(225 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(142, 81%, 70%)\" transform=\"rotate(270 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(142, 81%, 70%)\" transform=\"rotate(315 84 84)\"/>\n    <circle cx=\"84\" cy=\"84\" r=\"13\" fill=\"hsl(142, 25%, 95%)\"/>\n  </g>\n</svg> <svg style=\"position:absolute;bottom:-10px;right:-10px;width:128px;height:128px;opacity:.11;pointer-events:none;z-index:1;\" viewBox=\"0 0 128 128\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(142, 81%, 70%)\" transform=\"rotate(0 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(142, 25%, 95%)\" transform=\"rotate(60 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(142, 81%, 70%)\" transform=\"rotate(120 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(142, 25%, 95%)\" transform=\"rotate(180 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(142, 81%, 70%)\" transform=\"rotate(240 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(142, 25%, 95%)\" transform=\"rotate(300 64 64)\"/>\n    <circle cx=\"64\" cy=\"64\" r=\"10\" fill=\"hsl(142, 20%, 98%)\"/>\n  </g>\n</svg> <svg style=\"position:absolute;top:44%;left:-6px;width:70px;height:70px;opacity:.10;pointer-events:none;z-index:1;\" viewBox=\"0 0 70 70\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(142, 81%, 70%)\" transform=\"rotate(0 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(142, 81%, 70%)\" transform=\"rotate(72 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(142, 81%, 70%)\" transform=\"rotate(144 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(142, 81%, 70%)\" transform=\"rotate(216 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(142, 81%, 70%)\" transform=\"rotate(288 35 35)\"/>\n    <circle cx=\"35\" cy=\"35\" r=\"6\" fill=\"hsl(142, 25%, 95%)\"/>\n  </g>\n</svg> <i class=\"lp-star\" style=\"top:9%;left:8%;animation-delay:0s;\">✦</i> <i class=\"lp-star\" style=\"top:17%;right:13%;animation-delay:1.1s;\">✧</i> <i class=\"lp-star\" style=\"bottom:14%;left:14%;animation-delay:2s;\">✦</i> <i class=\"lp-star\" style=\"bottom:7%;right:11%;animation-delay:.6s;\">✧</i> <i class=\"lp-star\" style=\"top:38%;right:7%;animation-delay:1.6s;\">✦</i> <div class=\"mc-wrap\"> <div class=\"mc-header\"> <span class=\"mc-crown\">👑</span> <h2>Manual do Convidado</h2> <p>Celebre conosco os 15 anos de Maria Clara</p> </div> <div class=\"mc-sub\">✦   com amor   ✦</div> <div class=\"mc-grid\"> <div class=\"mc-card\" style=\"animation-delay:.04s\"> <div class=\"mc-top\"> <div class=\"mc-icon\"><i class=\"fa-solid fa-heart\"></i></div> <div> <div class=\"mc-title\">Bem-vindo(a)</div> <div class=\"mc-text\">Cada detalhe desta noite foi pensado com muito <span class=\"mc-highlight\">carinho e encanto</span> para que você viva momentos inesquecíveis ao lado de Maria Clara.</div> </div> </div> </div> <div class=\"mc-card\" style=\"animation-delay:.09s\"> <div class=\"mc-top\"> <div class=\"mc-icon\" style=\"background:linear-gradient(145deg,#d8c06a,#8f6f1f);\"><i class=\"fa-solid fa-user-tie\"></i></div> <div> <div class=\"mc-title\">Traje</div> <div class=\"mc-text\"><span class=\"mc-highlight\">Esporte Fino</span></div> </div> </div> <div class=\"mc-divider\"></div> <div class=\"mc-body\"> <div class=\"mc-text\">Vista-se com elegância para honrar este dia tão especial.</div> <div class=\"mc-tag-row\"> <span class=\"mc-tag mc-tag-ok\"><i class=\"fa-solid fa-check\" style=\"font-size:10px;\"></i> Blazer</span> <span class=\"mc-tag mc-tag-ok\"><i class=\"fa-solid fa-check\" style=\"font-size:10px;\"></i> Vestido midi</span> <span class=\"mc-tag mc-tag-ok\"><i class=\"fa-solid fa-check\" style=\"font-size:10px;\"></i> Calça social</span> <span class=\"mc-tag mc-tag-ok\"><i class=\"fa-solid fa-check\" style=\"font-size:10px;\"></i> Terninho</span> <span class=\"mc-tag mc-tag-ok\"><i class=\"fa-solid fa-check\" style=\"font-size:10px;\"></i> Jumpsuit</span> </div> </div> </div> <div class=\"mc-card\" style=\"animation-delay:.14s\"> <div class=\"mc-top\"> <div class=\"mc-icon\" style=\"background:linear-gradient(145deg,#7fbf7a,#2f6f3a);\"><i class=\"fa-solid fa-palette\"></i></div> <div> <div class=\"mc-title\">Cores Exclusivas da Debutante</div> <div class=\"mc-text\">O <span class=\"mc-highlight\">verde</span> e o <span class=\"mc-highlight\">dourado</span> são a paleta da debutante ✨</div> </div> </div> <div class=\"mc-divider\"></div> <div class=\"mc-body\"> <div class=\"mc-text\">Pedimos gentilmente que evitem todos os tons abaixo:</div> <div class=\"mc-section-label\">— Tons de Verde</div> <div class=\"mc-tag-row\"> <span class=\"mc-tag mc-tag-no\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i> Verde bebê</span> <span class=\"mc-tag mc-tag-no\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i> Verde claro</span> <span class=\"mc-tag mc-tag-no\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i> Verde esmeralda</span> <span class=\"mc-tag mc-tag-no\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i> Verde musgo</span> <span class=\"mc-tag mc-tag-no\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i> Verde oliva</span> <span class=\"mc-tag mc-tag-no\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i> Verde menta</span> </div> <div class=\"mc-section-label\" style=\"margin-top:10px;\">— Tons de Dourado</div> <div class=\"mc-tag-row\"> <span class=\"mc-tag mc-tag-white\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i> Dourado claro</span> <span class=\"mc-tag mc-tag-white\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i> Ouro velho</span> <span class=\"mc-tag mc-tag-white\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i> Champagne dourado</span> <span class=\"mc-tag mc-tag-white\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i> Amarelo ouro</span> <span class=\"mc-tag mc-tag-white\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i> Bronze</span> </div> <div class=\"mc-note\" style=\"margin-top:12px;\"> Estas cores foram escolhidas com carinho para compor o visual da debutante neste dia único. Agradecemos imensamente a compreensão e o carinho de cada um ✨ </div> </div> </div> <div class=\"mc-card\" style=\"animation-delay:.19s\"> <div class=\"mc-top\"> <div class=\"mc-icon\" style=\"background:linear-gradient(145deg,#d8c06a,#7fbf7a);\"><i class=\"fa-solid fa-clock\"></i></div> <div> <div class=\"mc-title\">Pontualidade</div> <div class=\"mc-text\">Sua chegada no horário é muito importante ✨</div> </div> </div> <div class=\"mc-divider\"></div> <div class=\"mc-body\"> <div class=\"mc-text\">Para não perder nenhum dos <span class=\"mc-highlight\">momentos mágicos</span> desta celebração, pedimos que você esteja presente desde o início da cerimônia.</div> </div> </div> </div> <div class=\"mc-confirm\"> <div class=\"mc-confirm-top\"> <div class=\"mc-confirm-icon\"><i class=\"fa-solid fa-calendar-check\"></i></div> <div> <div class=\"mc-confirm-title\">Confirme sua Presença</div> <div class=\"mc-confirm-sub\">Aguardamos o seu retorno com carinho ✨</div> </div> </div> <div class=\"mc-date-badge\"> <i class=\"fa-solid fa-calendar-days\"></i> Até o dia <strong>15 dias antes do evento</strong> </div> <div class=\"mc-confirm-note\"> Sua confirmação é essencial para que possamos preparar tudo com carinho e garantir o seu lugar nesta celebração. </div> </div> </div>"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Lista de Presentes",
      "icone": "fa-solid fa-gift",
      "conteudo": "Aguardando cliente enviar fotos dos presentes."
    }
  ],
  "upsell": {
    "galeriaFotos": false,
    "saveTheDate": true,
    "lembrete": false
  },
  "config": {
    "exibirMarcaDagua": false,
    "cronometro": true,
    "buttonColor": "#0f5a2a",
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
