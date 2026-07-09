window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Giovanna Accioly",
    "idade": 8,
    "data": "2026-09-26",
    "hora": "19:30",
    "horaTermino": "",
    "endereco": "Local: Salão Brinke Mais\nEstrada Guandu do Sapé, 34 \nCampo Grande - RJ",
    "frase1": "",
    "frase2": "",
    "frase3": ""
  },
  "convite": {
    "paletaCores": "Rosa bebê",
    "tema": "Borboletas",
    "musica": "assets/music_1783617982421.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "GiovannaAccioly",
    "seo": {
      "pageTitle": "Convite Especial",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1783617982421.png",
    "cartao": "",
    "aberturaSlides": [
      "assets/slide1_1783617982421.mp4",
      "assets/slide2_1783617982421.mp4",
      "assets/slide3_1783617982421.jpg",
      "assets/slide4_1783617982421.jpg"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1783617982421.mp4",
        "label": "Abertura (Vídeo)",
        "type": "video"
      },
      {
        "filePath": "assets/slide2_1783617982421.mp4",
        "label": "Slide 2",
        "type": "video"
      },
      {
        "filePath": "assets/slide3_1783617982421.jpg",
        "label": "Slide 3",
        "type": "video"
      },
      {
        "filePath": "assets/slide4_1783617982421.jpg",
        "label": "Slide 4",
        "type": "video"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1783617982421.jpg",
    "folhaPreenchida": "assets/folha_1783617982421.jpg",
    "musica": "assets/music_1783617982421.mp3",
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
      "conteudo": "https://maps.app.goo.gl/XBUxfFktV4JH8mfs5"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5521988259209",
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
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Cinzel:wght@400;500;600&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n<style>\n.lp-root, .lp-root *, .lp-root *::before, .lp-root *::after {\n  color-scheme: light only; forced-color-adjust: none;\n  -webkit-font-smoothing: antialiased; box-sizing: border-box;\n}\n.lp-root {\n  --ivory: #FDF7F5;\n  --blush-mist: #FBEAEA;\n  --rose: #C98A94;\n  --rose-deep: #7E4652;\n  --rose-soft: #B98E93;\n  --gold: #C6A15B;\n  --gold-light: #EEDFC0;\n  --gold-deep: #9A7A3E;\n  --silver: #C9CDD3;\n  --silver-light: #EEF0F3;\n  --silver-deep: #8B919B;\n  --ink: #4A3436;\n  --line: rgba(126, 70, 82, 0.16);\n  background: var(--ivory);\n  color: var(--ink);\n  margin: 0;\n  padding: 0;\n}\n\n.lp-wrap {\n  position: relative;\n  overflow: hidden;\n  font-family: 'Cormorant Garamond', serif;\n  padding: 46px 20px 40px;\n  background:\n    radial-gradient(120% 70% at 50% -10%, rgba(201,138,148,0.18) 0%, rgba(201,138,148,0) 60%),\n    radial-gradient(90% 60% at 8% 100%, rgba(198,161,91,0.10) 0%, rgba(198,161,91,0) 55%),\n    linear-gradient(165deg, var(--ivory) 0%, var(--blush-mist) 55%, var(--ivory) 100%);\n}\n\n.lp-grain {\n  position: absolute; inset: 0; z-index: 1; pointer-events: none;\n  opacity: .45; mix-blend-mode: multiply;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\");\n}\n\n.lp-bloom {\n  position: absolute; z-index: 1; pointer-events: none;\n  animation: driftGlow 9s ease-in-out infinite;\n  filter: blur(0.2px);\n}\n@keyframes driftGlow { 0%,100%{opacity:.35; transform:translateY(0) scale(1);} 50%{opacity:.65; transform:translateY(-5px) scale(1.04);} }\n\n.lp-firefly {\n  position: absolute; z-index: 2; pointer-events: none;\n  width: 4px; height: 4px; border-radius: 50%;\n  background: radial-gradient(circle, #f6d3d8 0%, rgba(246,211,216,0) 70%);\n  box-shadow: 0 0 6px 2px rgba(246,211,216,.6);\n  animation: fireflyFloat linear infinite;\n}\n@keyframes fireflyFloat {\n  0%   { transform: translate(0,0); opacity: 0; }\n  8%   { opacity: .9; }\n  50%  { transform: translate(6px,-90px); opacity: .5; }\n  92%  { opacity: .8; }\n  100% { transform: translate(-4px,-190px); opacity: 0; }\n}\n\n.lp-petal {\n  position: absolute; z-index: 2; pointer-events: none;\n  animation: petalFall linear infinite;\n  opacity: .7;\n}\n@keyframes petalFall {\n  0%   { transform: translateY(-10px) translateX(0) rotate(0deg); opacity: 0; }\n  10%  { opacity: .7; }\n  90%  { opacity: .5; }\n  100% { transform: translateY(420px) translateX(14px) rotate(200deg); opacity: 0; }\n}\n\n.lp-header { position: relative; z-index: 3; text-align: center; margin-bottom: 30px; }\n.lp-wreath { display: block; margin: 0 auto 6px; width: 210px; height: auto; }\n\n.lp-eyebrow {\n  font-family: 'Cinzel', serif; font-size: 9.5px; letter-spacing: .32em;\n  text-transform: uppercase; color: var(--rose-deep); margin-bottom: 9px;\n}\n\n.lp-header h2 {\n  font-family: 'Cormorant Garamond', serif; font-style: italic; font-weight: 500;\n  font-size: 30px; color: var(--rose-deep); letter-spacing: .01em;\n  margin: 0 0 8px; line-height: 1.15;\n}\n\n.lp-header .sub {\n  color: var(--rose-soft); font-size: 14.5px; font-style: italic; margin: 0 0 12px;\n  letter-spacing: .01em;\n}\n\n.lp-header .badge {\n  display: inline-flex; align-items: center; gap: 7px;\n  font-family: 'Cinzel', serif; font-size: 9.5px; letter-spacing: .2em;\n  text-transform: uppercase; color: var(--rose-deep);\n  background: linear-gradient(135deg, #fffdfb, var(--gold-light) 140%);\n  border: 1px solid var(--line);\n  border-radius: 30px; padding: 6px 18px;\n  box-shadow: 0 1px 0 rgba(255,255,255,.7) inset, 0 3px 10px rgba(126,70,82,.14);\n}\n.lp-header .badge i { font-size: 8px; color: var(--gold); }\n\n.lp-section-label {\n  position: relative; z-index: 3; text-align: center;\n  font-family: 'Cinzel', serif; font-size: 10px; letter-spacing: .28em;\n  text-transform: uppercase; color: var(--rose-deep);\n  margin: 4px 0 16px;\n}\n.lp-section-label::before, .lp-section-label::after {\n  content: ''; display: inline-block; width: 30px; height: 1px;\n  background: linear-gradient(to right, transparent, var(--gold));\n  vertical-align: middle; margin: 0 10px;\n}\n.lp-section-label::after { background: linear-gradient(to left, transparent, var(--gold)); }\n\n.lp-grid { display: grid; gap: 11px; position: relative; z-index: 3; margin-bottom: 8px; }\n\n.lp-card {\n  position: relative;\n  display: flex; gap: 15px; align-items: center;\n  padding: 15px 17px; border-radius: 16px;\n  background: linear-gradient(180deg, #ffffff 0%, #fdf6f5 100%);\n  border: 1px solid rgba(126,70,82,.12);\n  box-shadow: 0 1px 0 rgba(255,255,255,.8) inset, 0 6px 18px -10px rgba(74,52,54,.22);\n  animation: lpRise .6s cubic-bezier(.2,.7,.3,1) both;\n  transition: transform .25s ease, box-shadow .25s ease;\n}\n.lp-card::before {\n  content: ''; position: absolute; left: 0; top: 12%; bottom: 12%; width: 2px;\n  background: linear-gradient(180deg, transparent, var(--rose), transparent);\n  opacity: .5; border-radius: 2px;\n}\n@keyframes lpRise { from{opacity:0; transform:translateY(9px);} to{opacity:1; transform:translateY(0);} }\n\n.lp-icon-ring {\n  position: relative; flex-shrink: 0; width: 46px; height: 46px;\n  border-radius: 50%;\n  display: flex; align-items: center; justify-content: center;\n  background: linear-gradient(145deg, #E7A9B2 0%, var(--rose-deep) 100%);\n  box-shadow: 0 3px 10px rgba(126,70,82,.28);\n}\n.lp-icon-ring::after {\n  content: ''; position: absolute; inset: -3px; border-radius: 50%;\n  border: 1px solid var(--gold); opacity: .5;\n}\n.lp-icon-ring i { color: #fff; font-size: 15px; }\n\n/* dual-tone ring for the jewelry card (silver + gold) */\n.lp-icon-ring.dual {\n  background: linear-gradient(145deg, var(--silver-light) 0%, var(--silver-deep) 48%, var(--gold-light) 52%, var(--gold-deep) 100%);\n}\n.lp-icon-ring.dual i { color: var(--ink); }\n.lp-icon-ring.dual::after { border-color: var(--rose); opacity: .6; }\n\n.lp-title {\n  font-family: 'Cinzel', serif; font-size: 9.5px; letter-spacing: .18em;\n  text-transform: uppercase; color: var(--rose-deep); margin-bottom: 3px;\n}\n.lp-name { font-size: 16.5px; font-weight: 500; color: var(--rose-deep); line-height: 1.3; }\n.lp-tip {\n  display: inline-block; margin-top: 5px; font-size: 12px; font-style: italic;\n  color: var(--rose-deep); background: rgba(201,138,148,.10);\n  border: 1px solid rgba(201,138,148,.22);\n  border-radius: 30px; padding: 2px 11px;\n  margin-right: 5px;\n}\n\n.lp-divider {\n  text-align: center; position: relative; z-index: 3; margin: 26px 0 16px;\n  font-family: 'Cinzel', serif; font-size: 10px; letter-spacing: .3em;\n  text-transform: uppercase; color: var(--rose-deep);\n}\n.lp-divider::before, .lp-divider::after {\n  content: ''; display: inline-block; width: 52px; height: 1px;\n  background: linear-gradient(to right, transparent, var(--gold));\n  vertical-align: middle; margin: 0 12px;\n}\n.lp-divider::after { background: linear-gradient(to left, transparent, var(--gold)); }\n\n.pix-box {\n  position: relative; z-index: 3; border-radius: 20px;\n  background: linear-gradient(175deg, #ffffff 0%, #fdf5f4 100%);\n  border: 1px solid rgba(126,70,82,.16);\n  padding: 20px 18px 17px;\n  box-shadow: 0 1px 0 rgba(255,255,255,.85) inset, 0 10px 24px -14px rgba(74,52,54,.30);\n}\n.pix-row { display: flex; align-items: center; gap: 13px; margin-bottom: 15px; }\n.pix-icon-wrap {\n  width: 46px; height: 46px; border-radius: 14px; flex-shrink: 0;\n  display: flex; align-items: center; justify-content: center;\n  background: linear-gradient(145deg, var(--gold-light), var(--gold) 60%, var(--gold-deep));\n  color: var(--rose-deep); font-size: 18px;\n  box-shadow: 0 3px 12px rgba(154,122,62,.30);\n}\n.pix-label {\n  font-family: 'Cinzel', serif; font-size: 11px; letter-spacing: .16em;\n  text-transform: uppercase; color: var(--rose-deep); margin-bottom: 2px;\n}\n.pix-sub { font-size: 13.5px; color: var(--rose-soft); font-style: italic; }\n\n.pix-key-wrap {\n  display: flex; align-items: center; gap: 10px;\n  background: var(--blush-mist);\n  border: 1px solid rgba(126,70,82,.10); border-radius: 14px;\n  padding: 11px 14px; margin-bottom: 10px;\n}\n.pix-key {\n  flex: 1; font-family: 'Cinzel', serif; font-size: 12.5px;\n  color: var(--rose-deep); letter-spacing: .03em; word-break: break-all;\n}\n.pix-copy-btn {\n  flex-shrink: 0; cursor: pointer; border: none; outline: none;\n  border-radius: 10px; padding: 8px 15px;\n  background: linear-gradient(145deg, #E7A9B2, var(--rose-deep));\n  color: #fff; font-family: 'Cinzel', serif;\n  font-size: 10.5px; letter-spacing: .12em;\n  box-shadow: 0 3px 10px rgba(126,70,82,.30);\n  transition: transform .15s ease, box-shadow .15s ease;\n  display: flex; align-items: center; gap: 6px;\n}\n.pix-copy-btn:hover  { transform: scale(1.04); box-shadow: 0 4px 14px rgba(126,70,82,.36); }\n.pix-copy-btn:active { transform: scale(.97); }\n.pix-copied {\n  text-align: center; font-size: 13px; color: var(--rose-deep);\n  font-style: italic; height: 20px; transition: opacity .3s ease;\n}\n\n.lp-footer {\n  position: relative; z-index: 3; margin-top: 24px; border-radius: 18px;\n  background: linear-gradient(160deg, rgba(255,255,255,.9), rgba(238,223,192,.30));\n  border: 1px solid rgba(126,70,82,.16);\n  padding: 20px 18px;\n  text-align: center;\n}\n.lp-footer-text {\n  font-size: 15.5px; color: var(--rose-deep); line-height: 1.7;\n  font-style: italic; letter-spacing: .01em;\n}\n.lp-footer-accent {\n  color: var(--gold-deep); font-weight: 600; font-family: 'Cinzel', serif;\n  font-size: 11px; letter-spacing: .14em; display: block; margin-top: 9px;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .lp-bloom, .lp-firefly, .lp-petal, .lp-card { animation: none !important; }\n}\n</style>\n\n<div class=\"lp-root\">\n  <div class=\"lp-wrap\">\n    <div class=\"lp-grain\"></div>\n\n    <svg class=\"lp-bloom\" style=\"top:-30px; left:-34px; width:150px; height:150px; animation-delay:.2s;\" viewBox=\"0 0 150 150\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g fill=\"none\" stroke=\"url(#lpRoseA)\" stroke-width=\"1.1\" opacity=\".6\">\n        <path d=\"M75 75 C 40 60, 20 30, 30 5\" />\n        <path d=\"M75 75 C 55 45, 45 20, 55 -2\" />\n        <ellipse cx=\"30\" cy=\"5\" rx=\"9\" ry=\"5\" transform=\"rotate(-30 30 5)\" fill=\"url(#lpRoseA)\" stroke=\"none\" opacity=\".55\"/>\n        <ellipse cx=\"55\" cy=\"-2\" rx=\"7\" ry=\"4\" transform=\"rotate(-10 55 -2)\" fill=\"url(#lpRoseA)\" stroke=\"none\" opacity=\".45\"/>\n        <circle cx=\"75\" cy=\"75\" r=\"2\" fill=\"url(#lpRoseA)\" stroke=\"none\"/>\n      </g>\n      <defs>\n        <linearGradient id=\"lpRoseA\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n          <stop offset=\"0%\" stop-color=\"#F3CBD1\"/>\n          <stop offset=\"100%\" stop-color=\"#9A5F6A\"/>\n        </linearGradient>\n      </defs>\n    </svg>\n\n    <svg class=\"lp-bloom\" style=\"bottom:-26px; right:-30px; width:135px; height:135px; animation-delay:1.6s;\" viewBox=\"0 0 150 150\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g fill=\"none\" stroke=\"url(#lpRoseB)\" stroke-width=\"1.1\" opacity=\".55\" transform=\"rotate(180 75 75)\">\n        <path d=\"M75 75 C 40 60, 20 30, 30 5\" />\n        <path d=\"M75 75 C 55 45, 45 20, 55 -2\" />\n        <ellipse cx=\"30\" cy=\"5\" rx=\"9\" ry=\"5\" transform=\"rotate(-30 30 5)\" fill=\"url(#lpRoseB)\" stroke=\"none\" opacity=\".5\"/>\n        <ellipse cx=\"55\" cy=\"-2\" rx=\"7\" ry=\"4\" transform=\"rotate(-10 55 -2)\" fill=\"url(#lpRoseB)\" stroke=\"none\" opacity=\".4\"/>\n      </g>\n      <defs>\n        <linearGradient id=\"lpRoseB\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n          <stop offset=\"0%\" stop-color=\"#F3CBD1\"/>\n          <stop offset=\"100%\" stop-color=\"#9A5F6A\"/>\n        </linearGradient>\n      </defs>\n    </svg>\n\n    <span class=\"lp-firefly\" style=\"left:12%; top:78%; animation-duration:7s; animation-delay:.2s;\"></span>\n    <span class=\"lp-firefly\" style=\"left:27%; top:85%; animation-duration:8.5s; animation-delay:2s;\"></span>\n    <span class=\"lp-firefly\" style=\"left:63%; top:80%; animation-duration:7.8s; animation-delay:1.1s;\"></span>\n    <span class=\"lp-firefly\" style=\"left:81%; top:88%; animation-duration:9s; animation-delay:3.2s;\"></span>\n    <span class=\"lp-firefly\" style=\"left:46%; top:6%; animation-duration:8s; animation-delay:.8s;\"></span>\n\n    <i class=\"fa-solid fa-leaf lp-petal\" style=\"left:16%; top:-10px; font-size:10px; color:#E7A9B2; animation-duration:11s; animation-delay:.5s;\"></i>\n    <i class=\"fa-solid fa-leaf lp-petal\" style=\"left:58%; top:-10px; font-size:8px; color:#D8B98F; animation-duration:13s; animation-delay:3s;\"></i>\n    <i class=\"fa-solid fa-leaf lp-petal\" style=\"left:78%; top:-10px; font-size:9px; color:#E7A9B2; animation-duration:12s; animation-delay:6s;\"></i>\n\n    <div class=\"lp-header\">\n      <svg class=\"lp-wreath\" viewBox=\"0 0 210 60\" xmlns=\"http://www.w3.org/2000/svg\">\n        <defs>\n          <linearGradient id=\"lpWreathRose\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n            <stop offset=\"0%\" stop-color=\"#9A5F6A\"/>\n            <stop offset=\"50%\" stop-color=\"#F3CBD1\"/>\n            <stop offset=\"100%\" stop-color=\"#9A5F6A\"/>\n          </linearGradient>\n        </defs>\n        <g fill=\"none\" stroke=\"url(#lpWreathRose)\" stroke-width=\"1\" opacity=\".9\">\n          <path d=\"M6 30 C 40 4, 80 4, 100 22\" />\n          <path d=\"M204 30 C 170 4, 130 4, 110 22\" />\n          <ellipse cx=\"22\" cy=\"16\" rx=\"6\" ry=\"3.2\" transform=\"rotate(-28 22 16)\" fill=\"url(#lpWreathRose)\" stroke=\"none\" opacity=\".75\"/>\n          <ellipse cx=\"40\" cy=\"7\" rx=\"6\" ry=\"3.2\" transform=\"rotate(-14 40 7)\" fill=\"url(#lpWreathRose)\" stroke=\"none\" opacity=\".75\"/>\n          <ellipse cx=\"62\" cy=\"4\" rx=\"6\" ry=\"3.2\" fill=\"url(#lpWreathRose)\" stroke=\"none\" opacity=\".75\"/>\n          <ellipse cx=\"188\" cy=\"16\" rx=\"6\" ry=\"3.2\" transform=\"rotate(28 188 16)\" fill=\"url(#lpWreathRose)\" stroke=\"none\" opacity=\".75\"/>\n          <ellipse cx=\"170\" cy=\"7\" rx=\"6\" ry=\"3.2\" transform=\"rotate(14 170 7)\" fill=\"url(#lpWreathRose)\" stroke=\"none\" opacity=\".75\"/>\n          <ellipse cx=\"148\" cy=\"4\" rx=\"6\" ry=\"3.2\" fill=\"url(#lpWreathRose)\" stroke=\"none\" opacity=\".75\"/>\n        </g>\n        <circle cx=\"105\" cy=\"30\" r=\"2\" fill=\"#9A5F6A\" opacity=\".6\"/>\n      </svg>\n\n      <p class=\"lp-eyebrow\">Com carinho</p>\n      <h2>Lista de Presentes</h2>\n      <p class=\"sub\">Sua presença já enche este dia de significado</p>\n      <span class=\"badge\"><i class=\"fa-solid fa-leaf\"></i>Jardim Encantado<i class=\"fa-solid fa-leaf\"></i></span>\n    </div>\n\n    <div class=\"lp-section-label\">Sugestões</div>\n\n    <div class=\"lp-grid\">\n      <div class=\"lp-card\" style=\"animation-delay:.05s\">\n        <div class=\"lp-icon-ring\"><i class=\"fa-solid fa-shirt\"></i></div>\n        <div>\n          <div class=\"lp-title\">Presente</div>\n          <div class=\"lp-name\">Roupas</div>\n          <span class=\"lp-tip\">Tamanho 12 anos</span>\n        </div>\n      </div>\n\n      <div class=\"lp-card\" style=\"animation-delay:.10s\">\n        <div class=\"lp-icon-ring\"><i class=\"fa-solid fa-shoe-prints\"></i></div>\n        <div>\n          <div class=\"lp-title\">Presente</div>\n          <div class=\"lp-name\">Calçados</div>\n          <span class=\"lp-tip\">Tamanho 35</span>\n        </div>\n      </div>\n\n      <div class=\"lp-card\" style=\"animation-delay:.15s\">\n        <div class=\"lp-icon-ring dual\"><i class=\"fa-solid fa-gem\"></i></div>\n        <div>\n          <div class=\"lp-title\">Presente</div>\n          <div class=\"lp-name\">Jóias</div>\n          <span class=\"lp-tip\">Prata</span><span class=\"lp-tip\">Dourado</span>\n        </div>\n      </div>\n\n      <div class=\"lp-card\" style=\"animation-delay:.20s\">\n        <div class=\"lp-icon-ring\"><i class=\"fa-solid fa-gift\"></i></div>\n        <div>\n          <div class=\"lp-title\">Presente</div>\n          <div class=\"lp-name\">Outras lembranças</div>\n          <span class=\"lp-tip\">Escolha do coração</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"lp-divider\">Pix</div>\n\n    <div class=\"pix-box\">\n      <div class=\"pix-row\">\n        <div class=\"pix-icon-wrap\"><i class=\"fa-solid fa-qrcode\"></i></div>\n        <div>\n          <div class=\"pix-label\">Chave Pix</div>\n          <div class=\"pix-sub\">Copie e cole com carinho</div>\n        </div>\n      </div>\n      <div class=\"pix-key-wrap\">\n        <span class=\"pix-key\" id=\"pixKey\">12464116793</span>\n        <button class=\"pix-copy-btn\" onclick=\"lpCopyPix()\">\n          <i class=\"fa-solid fa-copy\" style=\"font-size:11px;\"></i> Copiar\n        </button>\n      </div>\n      <div class=\"pix-copied\" id=\"copiedMsg\" style=\"opacity:0;\">Chave copiada ✦</div>\n    </div>\n\n    <div class=\"lp-footer\">\n      <div class=\"lp-footer-text\">Sua presença já é o maior presente desta noite especial.</div>\n      <span class=\"lp-footer-accent\">OBRIGADA POR FAZER PARTE DESSE MOMENTO</span>\n    </div>\n  </div>\n</div>\n\n<script>\nfunction lpCopyPix() {\n  var key = document.getElementById('pixKey').textContent.trim();\n  var el = document.getElementById('copiedMsg');\n  function show() {\n    el.style.opacity = '1';\n    setTimeout(function(){ el.style.opacity = '0'; }, 2200);\n  }\n  if (navigator.clipboard) {\n    navigator.clipboard.writeText(key).then(show);\n  } else {\n    var ta = document.createElement('textarea');\n    ta.value = key; document.body.appendChild(ta);\n    ta.select(); document.execCommand('copy');\n    document.body.removeChild(ta); show();\n  }\n}\n</script>"
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
    "buttonColor": "#d96fb3",
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
