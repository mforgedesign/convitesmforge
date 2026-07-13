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
    "musica": "assets/music_1783946580145.mp3",
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
    "capa": "assets/cover_1783946580145.jpg",
    "cartao": "assets/cartao_chatgpt_1783946580145.jpg",
    "aberturaSlides": [
      "assets/slide1_1783946580145.mp4",
      "assets/slide2_1783946580145.mp4",
      "assets/slide3_1783946580145.mp4",
      "",
      ""
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1783946580145.mp4",
        "label": "Slide 1",
        "type": "video"
      },
      {
        "filePath": "assets/slide2_1783946580145.mp4",
        "label": "Slide 1",
        "type": "video"
      },
      {
        "filePath": "assets/slide3_1783946580145.mp4",
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
    "folhaVazia": "assets/folha_vazia_1783946580145.jpg",
    "folhaPreenchida": "assets/folha_1783946580145.png",
    "musica": "assets/music_1783946580145.mp3",
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
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n.lp-root,\n.lp-root *,\n.lp-root *::before,\n.lp-root *::after {\n  color-scheme: light only;\n  forced-color-adjust: none;\n  -webkit-font-smoothing: antialiased;\n  box-sizing: border-box;\n}\n\n.lp-root {\n  background: hsl(345, 35%, 98%);\n  color: hsl(340, 32%, 38%);\n  margin: 0;\n  padding: 0;\n}\n\n.lp-wrap {\n  position: relative;\n  padding: 30px 18px 36px;\n  overflow: hidden;\n  font-family: 'Cormorant Garamond', serif;\n  background: linear-gradient(\n    160deg,\n    hsl(345, 35%, 98%) 0%,\n    hsl(350, 28%, 95%) 50%,\n    hsl(345, 35%, 98%) 100%\n  );\n}\n\n.snow {\n  position: absolute;\n  pointer-events: none;\n  z-index: 1;\n  color: rgba(214, 168, 186, .55);\n  font-size: 13px;\n  animation: snowfall linear infinite;\n}\n\n@keyframes snowfall {\n  0% {\n    transform: translateY(-20px) rotate(0deg);\n    opacity: 0;\n  }\n\n  10% {\n    opacity: 1;\n  }\n\n  90% {\n    opacity: .6;\n  }\n\n  100% {\n    transform: translateY(700px) rotate(360deg);\n    opacity: 0;\n  }\n}\n\n.lp-header {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  margin-bottom: 22px;\n}\n\n.lp-header h2 {\n  font-family: 'Cinzel', serif;\n  font-size: 22px;\n  color: hsl(340, 32%, 38%);\n  letter-spacing: .13em;\n  margin-bottom: 4px;\n}\n\n.lp-header .sub {\n  color: hsl(342, 45%, 73%);\n  font-size: 14px;\n  font-style: italic;\n  margin-bottom: 2px;\n}\n\n.lp-header .badge {\n  display: inline-block;\n  margin-top: 6px;\n  font-family: 'Cinzel', serif;\n  font-size: 10px;\n  letter-spacing: .18em;\n  text-transform: uppercase;\n  background: linear-gradient(135deg, #f3d8df, #f9ebef);\n  border: 1px solid rgba(160, 190, 230, .5);\n  border-radius: 30px;\n  padding: 3px 14px;\n  color: #9b5c74;\n}\n\n.lp-grid {\n  display: grid;\n  gap: 10px;\n  position: relative;\n  z-index: 2;\n}\n\n.lp-card {\n  display: flex;\n  gap: 13px;\n  align-items: center;\n  padding: 13px 15px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, .95);\n  border: 1px solid rgba(220, 190, 201, .45);\n  box-shadow: 0 2px 14px rgba(184, 120, 146, .10);\n  animation: lpFade .5s ease both;\n}\n\n@keyframes lpFade {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.lp-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 17px;\n  color: #fff;\n  background: hsl(342, 45%, 73%);\n  box-shadow: 0 2px 10px rgba(188, 120, 146, .22);\n}\n\n.icon-blue {\n  background: linear-gradient(\n    145deg,\n    hsl(342, 45%, 73%),\n    hsl(340, 32%, 38%)\n  );\n}\n\n.icon-silver {\n  background: linear-gradient(145deg, #d9b4c1, #b98595);\n}\n\n.icon-light {\n  background: linear-gradient(\n    145deg,\n    hsl(342, 45%, 73%),\n    hsl(342, 45%, 73%)\n  );\n}\n\n.icon-deep {\n  background: linear-gradient(\n    145deg,\n    hsl(340, 32%, 38%),\n    hsl(340, 18%, 22%)\n  );\n}\n\n.icon-ice {\n  background: linear-gradient(\n    145deg,\n    hsl(342, 45%, 73%),\n    hsl(342, 45%, 73%)\n  );\n}\n\n.lp-title {\n  font-family: 'Cinzel', serif;\n  font-size: 11px;\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: hsl(342, 45%, 73%);\n  margin-bottom: 2px;\n}\n\n.lp-name {\n  font-size: 15.5px;\n  font-weight: 600;\n  color: hsl(340, 32%, 38%);\n  line-height: 1.3;\n}\n\n.lp-tip {\n  display: inline-block;\n  margin-top: 4px;\n  font-size: 12px;\n  color: #a05f78;\n  background: rgba(160, 190, 240, .22);\n  border: 1px solid rgba(205, 155, 175, .30);\n  border-radius: 30px;\n  padding: 2px 10px;\n  font-style: italic;\n}\n\n.lp-footer {\n  position: relative;\n  z-index: 2;\n  margin-top: 18px;\n  border-radius: 20px;\n  background: linear-gradient(\n    145deg,\n    rgba(255, 255, 255, .95),\n    rgba(245, 228, 234, .85)\n  );\n  border: 1px solid rgba(205, 162, 177, .35);\n  padding: 16px;\n  text-align: center;\n}\n\n.lp-footer-text {\n  font-size: 15px;\n  color: hsl(340, 18%, 22%);\n  line-height: 1.7;\n  font-style: italic;\n}\n\n.lp-footer-accent {\n  color: hsl(340, 32%, 38%);\n  font-weight: 600;\n  font-family: 'Cinzel', serif;\n  font-size: 12px;\n  letter-spacing: .08em;\n  display: block;\n  margin-top: 6px;\n}\n\n.lp-star {\n  position: absolute;\n  color: rgba(196, 145, 165, .50);\n  font-size: 11px;\n  animation: lsStar 3s ease-in-out infinite;\n  z-index: 1;\n}\n\n@keyframes lsStar {\n  0%,\n  100% {\n    opacity: 0;\n    transform: scale(0);\n  }\n\n  50% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n</style>\n\n<div class=\"lp-root\">\n\n  <span\n    class=\"snow\"\n    style=\"left:8%;animation-duration:6s;animation-delay:0s;\"\n  >❄</span>\n\n  <span\n    class=\"snow\"\n    style=\"left:22%;animation-duration:8s;animation-delay:1.2s;font-size:9px;\"\n  >❅</span>\n\n  <span\n    class=\"snow\"\n    style=\"left:38%;animation-duration:7s;animation-delay:2.5s;\"\n  >❆</span>\n\n  <span\n    class=\"snow\"\n    style=\"left:55%;animation-duration:9s;animation-delay:.8s;font-size:9px;\"\n  >❄</span>\n\n  <span\n    class=\"snow\"\n    style=\"left:70%;animation-duration:6.5s;animation-delay:3s;\"\n  >❅</span>\n\n  <span\n    class=\"snow\"\n    style=\"left:85%;animation-duration:8.5s;animation-delay:1.8s;font-size:10px;\"\n  >❆</span>\n\n  <svg\n    style=\"position:absolute;top:-14px;left:-14px;width:150px;height:150px;opacity:.10;pointer-events:none;z-index:1;\"\n    viewBox=\"0 0 160 160\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <g>\n      <ellipse\n        cx=\"80\"\n        cy=\"24\"\n        rx=\"15\"\n        ry=\"29\"\n        fill=\"hsl(342, 45%, 73%)\"\n        transform=\"rotate(0 80 80)\"\n      />\n\n      <ellipse\n        cx=\"80\"\n        cy=\"24\"\n        rx=\"15\"\n        ry=\"29\"\n        fill=\"hsl(342, 45%, 73%)\"\n        transform=\"rotate(45 80 80)\"\n      />\n\n      <ellipse\n        cx=\"80\"\n        cy=\"24\"\n        rx=\"15\"\n        ry=\"29\"\n        fill=\"hsl(342, 45%, 73%)\"\n        transform=\"rotate(90 80 80)\"\n      />\n\n      <ellipse\n        cx=\"80\"\n        cy=\"24\"\n        rx=\"15\"\n        ry=\"29\"\n        fill=\"hsl(342, 45%, 73%)\"\n        transform=\"rotate(135 80 80)\"\n      />\n\n      <ellipse\n        cx=\"80\"\n        cy=\"24\"\n        rx=\"15\"\n        ry=\"29\"\n        fill=\"hsl(342, 45%, 73%)\"\n        transform=\"rotate(180 80 80)\"\n      />\n\n      <ellipse\n        cx=\"80\"\n        cy=\"24\"\n        rx=\"15\"\n        ry=\"29\"\n        fill=\"hsl(342, 45%, 73%)\"\n        transform=\"rotate(225 80 80)\"\n      />\n\n      <ellipse\n        cx=\"80\"\n        cy=\"24\"\n        rx=\"15\"\n        ry=\"29\"\n        fill=\"hsl(342, 45%, 73%)\"\n        transform=\"rotate(270 80 80)\"\n      />\n\n      <ellipse\n        cx=\"80\"\n        cy=\"24\"\n        rx=\"15\"\n        ry=\"29\"\n        fill=\"hsl(342, 45%, 73%)\"\n        transform=\"rotate(315 80 80)\"\n      />\n\n      <circle\n        cx=\"80\"\n        cy=\"80\"\n        r=\"12\"\n        fill=\"#f2dbe2\"\n      />\n    </g>\n  </svg>\n\n  <svg\n    style=\"position:absolute;bottom:-8px;right:-8px;width:115px;height:115px;opacity:.10;pointer-events:none;z-index:1;\"\n    viewBox=\"0 0 120 120\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <g>\n      <ellipse\n        cx=\"60\"\n        cy=\"16\"\n        rx=\"11\"\n        ry=\"22\"\n        fill=\"#e1bcc8\"\n        transform=\"rotate(0 60 60)\"\n      />\n\n      <ellipse\n        cx=\"60\"\n        cy=\"16\"\n        rx=\"11\"\n        ry=\"22\"\n        fill=\"#f3dbe3\"\n        transform=\"rotate(60 60 60)\"\n      />\n\n      <ellipse\n        cx=\"60\"\n        cy=\"16\"\n        rx=\"11\"\n        ry=\"22\"\n        fill=\"#e1bcc8\"\n        transform=\"rotate(120 60 60)\"\n      />\n\n      <ellipse\n        cx=\"60\"\n        cy=\"16\"\n        rx=\"11\"\n        ry=\"22\"\n        fill=\"#f3dbe3\"\n        transform=\"rotate(180 60 60)\"\n      />\n\n      <ellipse\n        cx=\"60\"\n        cy=\"16\"\n        rx=\"11\"\n        ry=\"22\"\n        fill=\"#e1bcc8\"\n        transform=\"rotate(240 60 60)\"\n      />\n\n      <ellipse\n        cx=\"60\"\n        cy=\"16\"\n        rx=\"11\"\n        ry=\"22\"\n        fill=\"#f3dbe3\"\n        transform=\"rotate(300 60 60)\"\n      />\n\n      <circle\n        cx=\"60\"\n        cy=\"60\"\n        r=\"9\"\n        fill=\"#faeef2\"\n      />\n    </g>\n  </svg>\n\n  <i\n    class=\"lp-star\"\n    style=\"top:9%;left:7%;animation-delay:0s;\"\n  >✦</i>\n\n  <i\n    class=\"lp-star\"\n    style=\"top:20%;right:13%;animation-delay:1s;\"\n  >✧</i>\n\n  <i\n    class=\"lp-star\"\n    style=\"bottom:22%;left:12%;animation-delay:2s;\"\n  >✦</i>\n\n  <i\n    class=\"lp-star\"\n    style=\"bottom:10%;right:9%;animation-delay:.5s;\"\n  >✧</i>\n\n  <div class=\"lp-wrap\">\n\n    <div class=\"lp-header\">\n      <h2>Lista de Presentes</h2>\n\n      <p class=\"sub\">\n        Com muito carinho e gratidão ✨\n      </p>\n\n      <span class=\"badge\">\n        ❄ Jardim Encantado ❄\n      </span>\n    </div>\n\n    <div class=\"lp-grid\">\n\n      <div\n        class=\"lp-card\"\n        style=\"animation-delay:.05s\"\n      >\n        <div class=\"lp-icon icon-blue\">\n          <i class=\"fa-solid fa-shirt\"></i>\n        </div>\n\n        <div>\n          <div class=\"lp-title\">\n            Presente\n          </div>\n\n          <div class=\"lp-name\">\n            Roupa\n          </div>\n\n          <span class=\"lp-tip\">\n            ✦ Tamanho 2 anos\n          </span>\n        </div>\n      </div>\n\n      <div\n        class=\"lp-card\"\n        style=\"animation-delay:.10s\"\n      >\n        <div class=\"lp-icon icon-silver\">\n          <i class=\"fa-solid fa-shoe-prints\"></i>\n        </div>\n\n        <div>\n          <div class=\"lp-title\">\n            Presente\n          </div>\n\n          <div class=\"lp-name\">\n            Sapato\n          </div>\n\n          <span class=\"lp-tip\">\n            ✦ Tamanho 20 ou 21\n          </span>\n        </div>\n      </div>\n\n      <div\n        class=\"lp-card\"\n        style=\"animation-delay:.15s\"\n      >\n        <div class=\"lp-icon icon-light\">\n          <i class=\"fa-solid fa-puzzle-piece\"></i>\n        </div>\n\n        <div>\n          <div class=\"lp-title\">\n            Presente\n          </div>\n\n          <div class=\"lp-name\">\n            Brinquedo interativo\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"lp-footer\">\n      <div class=\"lp-footer-text\">\n        Sua presença já é o maior presente desta noite especial.\n      </div>\n\n      <span class=\"lp-footer-accent\">\n        Obrigada por fazer parte desse momento ❄✨\n      </span>\n    </div>\n\n  </div>\n</div>"
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
