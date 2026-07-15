window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Gabriella",
    "idade": 15,
    "data": "2027-02-20",
    "hora": "20:30",
    "horaTermino": "01:30",
    "endereco": "Espaço imperial, SHVP rua12 chacara146/1 lote33, Taguatinga",
    "frase1": "Você está convidado para celebrar",
    "frase2": "",
    "frase3": ""
  },
  "convite": {
    "paletaCores": "Marsala",
    "tema": "Floral",
    "musica": "assets/music_1784138771160.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Gabriella15Anos",
    "seo": {
      "pageTitle": "Convite Especial",
      "ogTitle": "",
      "ogDescription": ""
    }
  },
  "assets": {
    "capa": "assets/cover_1784138771160.jpg",
    "cartao": "assets/cartao_gen_1784138771160.jpg",
    "aberturaSlides": [
      "assets/slide1_1784138771160.mp4",
      "assets/slide2_1784138771160.jpg",
      "assets/slide3_1784138771160.mp4",
      "assets/slide4_1784138771160.jpg"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1784138771160.mp4",
        "label": "Abertura (Vídeo)",
        "type": "video"
      },
      {
        "filePath": "assets/slide2_1784138771160.jpg",
        "label": "Slide 2",
        "type": "video"
      },
      {
        "filePath": "assets/slide3_1784138771160.mp4",
        "label": "Slide 3",
        "type": "video"
      },
      {
        "filePath": "assets/slide4_1784138771160.jpg",
        "label": "Slide 4",
        "type": "video"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1784138771160.jpg",
    "folhaPreenchida": "assets/folha_1784138771160.jpg",
    "musica": "assets/music_1784138771160.mp3",
    "fabric": {
      "saveTheDate": {
        "referencia": "",
        "resultado": "",
        "musicaPersonalizada": "",
        "musicSource": "convite",
        "hasMusic": true,
        "musicStartSec": 0,
        "durationSec": 20
      },
      "lembrete": {
        "referencia": "",
        "resultado": "",
        "musicaPersonalizada": "",
        "musicSource": "convite",
        "hasMusic": true,
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
      "conteudo": "https://maps.app.goo.gl/fiUxLNsuauu13jhr5"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5521965874882",
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
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n.lp-root, .lp-root *, .lp-root *::before, .lp-root *::after {\n  color-scheme: light only;\n  forced-color-adjust: none;\n  -webkit-font-smoothing: antialiased;\n  box-sizing: border-box;\n}\n.lp-root {\n  background: hsl(340, 20%, 98%);\n  color: hsl(340, 59%, 30%);\n  margin: 0;\n  padding: 0;\n}\n.lp-wrap {\n  position: relative;\n  padding: 30px 18px 36px;\n  overflow: hidden;\n  font-family: 'Cormorant Garamond', serif;\n  background: linear-gradient(160deg, hsl(340, 20%, 98%) 0%, hsl(340, 25%, 95%) 50%, hsl(340, 20%, 98%) 100%);\n}\n\n.snow {\n  position: absolute;\n  pointer-events: none;\n  z-index: 1;\n  color: rgba(160,190,240,.55);\n  font-size: 13px;\n  animation: snowfall linear infinite;\n}\n@keyframes snowfall {\n  0%{transform:translateY(-20px) rotate(0deg);opacity:0;}\n  10%{opacity:1;}\n  90%{opacity:.6;}\n  100%{transform:translateY(700px) rotate(360deg);opacity:0;}\n}\n\n.lp-header {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  margin-bottom: 22px;\n}\n.lp-header h2 {\n  font-family: 'Cinzel', serif;\n  font-size: 22px;\n  color: hsl(340, 59%, 30%);\n  letter-spacing: .13em;\n  margin-bottom: 4px;\n}\n.lp-header .sub {\n  color: hsl(340, 69%, 70%);\n  font-size: 14px;\n  font-style: italic;\n  margin-bottom: 2px;\n}\n.lp-header .badge {\n  display: inline-block;\n  margin-top: 6px;\n  font-family: 'Cinzel', serif;\n  font-size: 10px;\n  letter-spacing: .18em;\n  text-transform: uppercase;\n  background: linear-gradient(135deg, #c8d8f0, #e8eef8);\n  border: 1px solid rgba(160,190,230,.5);\n  border-radius: 30px;\n  padding: 3px 14px;\n  color: #3a5a90;\n}\n\n.lp-grid {\n  display: grid;\n  gap: 10px;\n  position: relative;\n  z-index: 2;\n}\n\n.lp-card {\n  display: flex;\n  gap: 13px;\n  align-items: center;\n  padding: 13px 15px;\n  border-radius: 20px;\n  background: rgba(255,255,255,.93);\n  border: 1px solid rgba(180,210,240,.35);\n  box-shadow: 0 2px 14px rgba(60,100,200,.07);\n  animation: lpFade .5s ease both;\n}\n\n@keyframes lpFade {\n  from{opacity:0;transform:translateY(10px);}\n  to{opacity:1;transform:translateY(0);}\n}\n\n.lp-icon{\n  width:44px;\n  height:44px;\n  border-radius:14px;\n  flex-shrink:0;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  font-size:17px;\n  color:#fff;\n  background:hsl(340,69%,70%);\n  box-shadow:0 2px 10px rgba(80,120,220,.22);\n}\n\n.icon-blue{background:linear-gradient(145deg,hsl(340,69%,70%),hsl(340,59%,30%));}\n.icon-silver{background:linear-gradient(145deg,#b0c4e0,#7090b8);}\n.icon-light{background:linear-gradient(145deg,hsl(340,69%,70%),hsl(340,69%,70%));}\n.icon-deep{background:linear-gradient(145deg,hsl(340,59%,30%),hsl(340,49%,12%));}\n.icon-ice{background:linear-gradient(145deg,hsl(340,69%,70%),hsl(340,69%,70%));}\n\n.lp-title{\n  font-family:'Cinzel',serif;\n  font-size:11px;\n  letter-spacing:.14em;\n  text-transform:uppercase;\n  color:hsl(340,69%,70%);\n  margin-bottom:2px;\n}\n\n.lp-name{\n  font-size:15.5px;\n  font-weight:600;\n  color:hsl(340,59%,30%);\n  line-height:1.3;\n}\n\n.lp-tip{\n  display:inline-block;\n  margin-top:4px;\n  font-size:12px;\n  color:#3a5a9a;\n  background:rgba(160,190,240,.22);\n  border:1px solid rgba(120,160,230,.28);\n  border-radius:30px;\n  padding:2px 10px;\n  font-style:italic;\n}\n\n.lp-divider{\n  text-align:center;\n  position:relative;\n  z-index:2;\n  margin:20px 0 14px;\n  font-family:'Cinzel',serif;\n  font-size:10px;\n  letter-spacing:.22em;\n  color:hsl(340,69%,70%);\n}\n\n.lp-divider::before,\n.lp-divider::after{\n  content:'';\n  display:inline-block;\n  width:44px;\n  height:.5px;\n  background:linear-gradient(to right,transparent,rgba(100,150,210,.4));\n  vertical-align:middle;\n  margin:0 10px;\n}\n\n.lp-divider::after{\n  background:linear-gradient(to left,transparent,rgba(100,150,210,.4));\n}\n\n.pix-box{\n  position:relative;\n  z-index:2;\n  border-radius:20px;\n  background:rgba(255,255,255,.94);\n  border:1px solid rgba(140,180,230,.30);\n  padding:16px 15px 14px;\n  box-shadow:0 2px 16px rgba(60,100,200,.08);\n}\n\n.pix-row{display:flex;align-items:center;gap:10px;margin-bottom:11px;}\n\n.pix-icon-wrap{\n  width:44px;\n  height:44px;\n  border-radius:14px;\n  flex-shrink:0;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  background:linear-gradient(145deg,hsl(340,69%,70%),hsl(340,59%,30%));\n  color:#fff;\n  font-size:19px;\n  box-shadow:0 2px 12px rgba(60,100,200,.28);\n}\n\n.pix-label{\n  font-family:'Cinzel',serif;\n  font-size:12px;\n  letter-spacing:.12em;\n  text-transform:uppercase;\n  color:hsl(340,59%,30%);\n  margin-bottom:2px;\n}\n\n.pix-sub{\n  font-size:13px;\n  color:hsl(340,69%,70%);\n  font-style:italic;\n}\n\n.pix-key-wrap{\n  display:flex;\n  align-items:center;\n  gap:10px;\n  background:rgba(235,242,255,.90);\n  border:1px solid rgba(140,180,230,.28);\n  border-radius:14px;\n  padding:10px 13px;\n  margin-bottom:9px;\n}\n\n.pix-key{\n  flex:1;\n  font-family:'Cinzel',serif;\n  font-size:12px;\n  color:hsl(340,59%,30%);\n  letter-spacing:.02em;\n  word-break:break-all;\n}\n\n.pix-copy-btn{\n  flex-shrink:0;\n  cursor:pointer;\n  border:none;\n  outline:none;\n  border-radius:10px;\n  padding:7px 13px;\n  background:linear-gradient(145deg,hsl(340,69%,70%),hsl(340,59%,30%));\n  color:#fff;\n  font-family:'Cinzel',serif;\n  font-size:11px;\n  letter-spacing:.10em;\n  box-shadow:0 2px 10px rgba(60,100,200,.28);\n  transition:transform .15s;\n  display:flex;\n  align-items:center;\n  gap:5px;\n}\n\n.pix-copy-btn:hover{transform:scale(1.04);}\n.pix-copy-btn:active{transform:scale(.97);}\n\n.pix-copied{\n  text-align:center;\n  font-size:13px;\n  color:hsl(340,59%,30%);\n  font-style:italic;\n  height:20px;\n  transition:opacity .3s;\n}\n\n.lp-footer{\n  position:relative;\n  z-index:2;\n  margin-top:18px;\n  border-radius:20px;\n  background:linear-gradient(145deg,rgba(255,255,255,.95),rgba(220,235,255,.75));\n  border:1px solid rgba(120,170,230,.30);\n  padding:16px;\n  text-align:center;\n}\n\n.lp-footer-text{\n  font-size:15px;\n  color:hsl(340,49%,12%);\n  line-height:1.7;\n  font-style:italic;\n}\n\n.lp-footer-accent{\n  color:hsl(340,59%,30%);\n  font-weight:600;\n  font-family:'Cinzel',serif;\n  font-size:12px;\n  letter-spacing:.08em;\n  display:block;\n  margin-top:6px;\n}\n\n.lp-star{\n  position:absolute;\n  color:rgba(140,170,230,.5);\n  font-size:11px;\n  animation:lsStar 3s ease-in-out infinite;\n  z-index:1;\n}\n\n@keyframes lsStar{\n  0%,100%{opacity:0;transform:scale(0);}\n  50%{opacity:1;transform:scale(1);}\n}\n</style>\n\n<div class=\"lp-root\">\n<div class=\"lp-wrap\">\n\n<div class=\"lp-header\">\n<h2>Lista de Presentes</h2>\n<p class=\"sub\">Com muito carinho e gratidão ✨</p>\n<span class=\"badge\">Marsala Floral</span>\n</div>\n\n<div class=\"lp-grid\">\n\n<div class=\"lp-card\">\n<div class=\"lp-icon icon-blue\">\n<i class=\"fa-solid fa-gem\"></i>\n</div>\n<div>\n<div class=\"lp-title\">Presente</div>\n<div class=\"lp-name\">\nJoias na cor prata\n<br>\n<span class=\"lp-tip\">Loja: Bem Lindinha - Sudoeste</span>\n</div>\n</div>\n</div>\n\n<div class=\"lp-card\">\n<div class=\"lp-icon icon-silver\">\n<i class=\"fa-solid fa-spray-can-sparkles\"></i>\n</div>\n<div>\n<div class=\"lp-title\">Presente</div>\n<div class=\"lp-name\">Perfume</div>\n</div>\n</div>\n\n<div class=\"lp-card\">\n<div class=\"lp-icon icon-light\">\n<i class=\"fa-solid fa-qrcode\"></i>\n</div>\n<div>\n<div class=\"lp-title\">Presente</div>\n<div class=\"lp-name\">Chave Pix</div>\n<span class=\"lp-tip\">✦ Mínimo R$ 100,00</span>\n</div>\n</div>\n\n</div>\n\n<div class=\"lp-divider\">✦ pix ✦</div>\n\n<div class=\"pix-box\">\n\n<div class=\"pix-row\">\n<div class=\"pix-icon-wrap\">\n<i class=\"fa-solid fa-qrcode\"></i>\n</div>\n<div>\n<div class=\"pix-label\">Chave Pix</div>\n<div class=\"pix-sub\">Copia e cola abaixo 💙</div>\n</div>\n</div>\n\n<div class=\"pix-key-wrap\">\n<span class=\"pix-key\" id=\"pixKey\">09626081770</span>\n\n<button class=\"pix-copy-btn\" onclick=\"copyPix()\">\n<i class=\"fa-solid fa-copy\"></i>\nCopiar\n</button>\n</div>\n\n<div class=\"pix-copied\" id=\"copiedMsg\" style=\"opacity:0\">\nChave copiada! 💙\n</div>\n\n</div>\n\n<div class=\"lp-footer\">\n<div class=\"lp-footer-text\">\nSua presença já é o maior presente desta noite especial.\n</div>\n\n<span class=\"lp-footer-accent\">\nObrigada por fazer parte desse momento ❄✨\n</span>\n</div>\n\n</div>\n</div>\n\n<script>\nfunction copyPix(){\n    var key=document.getElementById(\"pixKey\").textContent.trim();\n\n    if(navigator.clipboard){\n        navigator.clipboard.writeText(key).then(showCopied);\n    }else{\n        var ta=document.createElement(\"textarea\");\n        ta.value=key;\n        document.body.appendChild(ta);\n        ta.select();\n        document.execCommand(\"copy\");\n        document.body.removeChild(ta);\n        showCopied();\n    }\n}\n\nfunction showCopied(){\n    var el=document.getElementById(\"copiedMsg\");\n    el.style.opacity=\"1\";\n    setTimeout(function(){\n        el.style.opacity=\"0\";\n    },2500);\n}\n</script>"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\"> <style>\n*{box-sizing:border-box;margin:0;padding:0}\n.mc-wrap{\n  position:relative;padding:32px 18px 36px;overflow:hidden;\n  font-family:'Cormorant Garamond',serif;\n  background:linear-gradient(160deg,hsl(340, 20%, 98%) 0%,hsl(340, 25%, 95%) 40%,hsl(340, 20%, 98%) 100%);\n}\n.mc-header{position:relative;z-index:2;text-align:center;margin-bottom:10px;}\n.mc-crown{font-size:26px;margin-bottom:6px;display:block;animation:crownFloat 4s ease-in-out infinite;}\n@keyframes crownFloat{0%,100%{transform:translateY(0);}50%{transform:translateY(-5px);}}\n.mc-header h2{font-family:'Cinzel',serif;font-size:22px;color:hsl(340, 59%, 30%);letter-spacing:.15em;margin-bottom:5px;}\n.mc-header p{color:hsl(340, 69%, 70%);font-size:14.5px;font-style:italic;}\n.mc-sub{\n  position:relative;z-index:2;text-align:center;margin-bottom:24px;\n  font-size:13px;color:hsl(340, 69%, 70%);font-family:'Cinzel',serif;letter-spacing:.12em;text-transform:uppercase;\n}\n.mc-sub::before,.mc-sub::after{\n  content:'';display:inline-block;width:40px;height:.5px;\n  background:linear-gradient(to right,transparent,rgba(100,160,220,.40));\n  vertical-align:middle;margin:0 10px;\n}\n.mc-sub::after{background:linear-gradient(to left,transparent,rgba(100,160,220,.40));}\n.mc-grid{display:grid;gap:12px;position:relative;z-index:2;}\n.mc-card{\n  border-radius:20px;background:rgba(255,255,255,.82);\n  border:1px solid rgba(100,160,220,.20);\n  box-shadow:0 2px 16px rgba(60,120,200,.07);\n  overflow:hidden;animation:mcFade .6s ease both;\n}\n@keyframes mcFade{from{opacity:0;transform:translateY(11px);}to{opacity:1;transform:translateY(0);}}\n.mc-top{display:flex;align-items:center;gap:13px;padding:15px 15px 13px;}\n.mc-icon{\n  width:46px;height:46px;border-radius:14px;flex-shrink:0;\n  display:flex;align-items:center;justify-content:center;\n  background:linear-gradient(145deg,hsl(340, 69%, 70%),hsl(340, 69%, 70%));\n  color:#fff;font-size:18px;box-shadow:0 2px 10px rgba(80,140,220,.22);\n}\n.mc-title{font-family:'Cinzel',serif;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:hsl(340, 69%, 70%);margin-bottom:3px;}\n.mc-text{font-size:15px;line-height:1.6;color:hsl(340, 49%, 12%);}\n.mc-divider{height:.5px;margin:0 15px;background:linear-gradient(to right,transparent,rgba(100,160,220,.22),transparent);}\n.mc-body{padding:11px 15px 15px;}\n.mc-highlight{color:hsl(340, 59%, 30%);font-weight:600;}\n.mc-tag-row{display:flex;flex-wrap:wrap;gap:7px;margin-top:9px;}\n.mc-tag{display:inline-flex;align-items:center;gap:5px;padding:4px 11px;border-radius:30px;font-size:12.5px;font-style:italic;}\n.mc-tag-ok{background:rgba(200,230,255,.55);border:1px solid rgba(80,150,220,.22);color:hsl(340, 59%, 30%);}\n.mc-tag-no{background:rgba(220,238,255,.55);border:1px solid rgba(80,140,210,.25);color:hsl(340, 59%, 30%);}\n.mc-tag-white{background:rgba(235,235,240,.70);border:1px solid rgba(160,170,190,.30);color:#3a4a5a;}\n.mc-section-label{\n  font-family:'Cinzel',serif;font-size:10.5px;letter-spacing:.12em;\n  text-transform:uppercase;color:hsl(340, 69%, 70%);margin:12px 0 6px;\n}\n.mc-note{\n  margin-top:11px;padding:10px 13px;border-radius:14px;\n  background:rgba(180,215,250,.18);border:1px solid rgba(100,160,220,.22);\n  font-size:13.5px;color:hsl(340, 59%, 30%);font-style:italic;line-height:1.55;\n}\n.mc-confirm{\n  position:relative;z-index:2;margin-top:14px;\n  border-radius:20px;\n  background:linear-gradient(145deg,rgba(255,255,255,.90),rgba(210,235,255,.55));\n  border:1px solid rgba(100,160,220,.28);\n  padding:16px 16px 15px;\n  box-shadow:0 2px 18px rgba(60,120,200,.10);\n  animation:mcFade .6s .38s ease both;\n}\n.mc-confirm-top{display:flex;align-items:center;gap:12px;margin-bottom:11px;}\n.mc-confirm-icon{\n  width:46px;height:46px;border-radius:14px;flex-shrink:0;\n  display:flex;align-items:center;justify-content:center;\n  background:linear-gradient(145deg,hsl(340, 69%, 70%),hsl(340, 59%, 30%));\n  color:#fff;font-size:18px;box-shadow:0 2px 12px rgba(30,90,180,.28);\n}\n.mc-confirm-title{font-family:'Cinzel',serif;font-size:12px;letter-spacing:.13em;text-transform:uppercase;color:hsl(340, 59%, 30%);margin-bottom:2px;}\n.mc-confirm-sub{font-size:13px;color:hsl(340, 69%, 70%);font-style:italic;}\n.mc-date-badge{\n  display:flex;align-items:center;justify-content:center;gap:10px;\n  background:linear-gradient(145deg,hsl(340, 25%, 95%),hsl(340, 69%, 70%));\n  border:1px solid rgba(100,160,220,.30);\n  border-radius:14px;padding:11px 14px;\n  font-family:'Cinzel',serif;font-size:15px;\n  color:hsl(340, 59%, 30%);letter-spacing:.10em;\n  box-shadow:inset 0 0 10px rgba(255,255,255,.40);\n}\n.mc-date-badge i{color:hsl(340, 69%, 70%);font-size:16px;}\n.mc-confirm-note{\n  margin-top:10px;font-size:13.5px;color:hsl(340, 49%, 12%);\n  font-style:italic;line-height:1.55;text-align:center;\n}\n.lp-star{position:absolute;color:rgba(120,170,230,.50);font-size:11px;animation:starAnim 3s ease-in-out infinite;pointer-events:none;}\n@keyframes starAnim{0%,100%{opacity:0;transform:scale(0);}50%{opacity:1;transform:scale(1);}}\n</style> <svg style=\"position:absolute;top:-14px;left:-14px;width:168px;height:168px;opacity:.13;pointer-events:none;z-index:1;\" viewBox=\"0 0 168 168\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(340, 69%, 70%)\" transform=\"rotate(0 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(340, 69%, 70%)\" transform=\"rotate(45 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(340, 69%, 70%)\" transform=\"rotate(90 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(340, 69%, 70%)\" transform=\"rotate(135 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(340, 69%, 70%)\" transform=\"rotate(180 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(340, 69%, 70%)\" transform=\"rotate(225 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(340, 69%, 70%)\" transform=\"rotate(270 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"hsl(340, 69%, 70%)\" transform=\"rotate(315 84 84)\"/>\n    <circle cx=\"84\" cy=\"84\" r=\"13\" fill=\"hsl(340, 25%, 95%)\"/>\n  </g>\n</svg> <svg style=\"position:absolute;bottom:-10px;right:-10px;width:128px;height:128px;opacity:.11;pointer-events:none;z-index:1;\" viewBox=\"0 0 128 128\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(340, 69%, 70%)\" transform=\"rotate(0 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(340, 25%, 95%)\" transform=\"rotate(60 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(340, 69%, 70%)\" transform=\"rotate(120 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(340, 25%, 95%)\" transform=\"rotate(180 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(340, 69%, 70%)\" transform=\"rotate(240 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"hsl(340, 25%, 95%)\" transform=\"rotate(300 64 64)\"/>\n    <circle cx=\"64\" cy=\"64\" r=\"10\" fill=\"hsl(340, 20%, 98%)\"/>\n  </g>\n</svg> <svg style=\"position:absolute;top:44%;left:-6px;width:70px;height:70px;opacity:.10;pointer-events:none;z-index:1;\" viewBox=\"0 0 70 70\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(340, 69%, 70%)\" transform=\"rotate(0 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(340, 69%, 70%)\" transform=\"rotate(72 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(340, 69%, 70%)\" transform=\"rotate(144 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(340, 69%, 70%)\" transform=\"rotate(216 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"hsl(340, 69%, 70%)\" transform=\"rotate(288 35 35)\"/>\n    <circle cx=\"35\" cy=\"35\" r=\"6\" fill=\"hsl(340, 25%, 95%)\"/>\n  </g>\n</svg> <i class=\"lp-star\" style=\"top:9%;left:8%;animation-delay:0s;\">✦</i> <i class=\"lp-star\" style=\"top:17%;right:13%;animation-delay:1.1s;\">✧</i> <i class=\"lp-star\" style=\"bottom:14%;left:14%;animation-delay:2s;\">✦</i> <i class=\"lp-star\" style=\"bottom:7%;right:11%;animation-delay:.6s;\">✧</i> <i class=\"lp-star\" style=\"top:38%;right:7%;animation-delay:1.6s;\">✦</i> <div class=\"mc-wrap\"> <div class=\"mc-header\"> <span class=\"mc-crown\">🎉</span> <h2>Manual do Convidado</h2> <p>Celebre conosco este momento único e eterno</p> </div> <div class=\"mc-sub\">✦   com amor   ✦</div> <div class=\"mc-grid\"> <div class=\"mc-card\" style=\"animation-delay:.04s\"> <div class=\"mc-top\"> <div class=\"mc-icon\"><i class=\"fa-solid fa-heart\"></i></div> <div> <div class=\"mc-title\">Bem-vindo(a)</div> <div class=\"mc-text\">Cada detalhe desta festa foi pensado com muito <span class=\"mc-highlight\">carinho e elegância</span> para que você viva momentos inesquecíveis ao lado de Gabriella.</div> </div> </div> </div> <div class=\"mc-card\" style=\"animation-delay:.09s\"> <div class=\"mc-top\"> <div class=\"mc-icon\" style=\"background:linear-gradient(145deg,#d8b2b2,#7a2d3a);\"><i class=\"fa-solid fa-user-tie\"></i></div> <div> <div class=\"mc-title\">Traje</div> <div class=\"mc-text\"><span class=\"mc-highlight\">Social</span></div> </div> </div> <div class=\"mc-divider\"></div> <div class=\"mc-body\"> <div class=\"mc-text\">Vista-se com elegância para celebrar este dia tão especial.</div> <div class=\"mc-tag-row\"> <span class=\"mc-tag mc-tag-ok\"><i class=\"fa-solid fa-check\" style=\"font-size:10px;\"></i> Blazer</span> <span class=\"mc-tag mc-tag-ok\"><i class=\"fa-solid fa-check\" style=\"font-size:10px;\"></i> Camisa social</span> <span class=\"mc-tag mc-tag-ok\"><i class=\"fa-solid fa-check\" style=\"font-size:10px;\"></i> Calça social</span> <span class=\"mc-tag mc-tag-ok\"><i class=\"fa-solid fa-check\" style=\"font-size:10px;\"></i> Vestido elegante</span> <span class=\"mc-tag mc-tag-ok\"><i class=\"fa-solid fa-check\" style=\"font-size:10px;\"></i> Terninho</span> </div> </div> </div> <div class=\"mc-card\" style=\"animation-delay:.14s\"> <div class=\"mc-top\"> <div class=\"mc-icon\" style=\"background:linear-gradient(145deg,#b56b78,#6f1f2d);\"><i class=\"fa-solid fa-palette\"></i></div> <div> <div class=\"mc-title\">Cores Exclusivas da Aniversariante</div> <div class=\"mc-text\">O <span class=\"mc-highlight\">marsala</span> e o <span class=\"mc-highlight\">dourado</span> são reservados para a aniversariante ✨</div> </div> </div> <div class=\"mc-divider\"></div> <div class=\"mc-body\"> <div class=\"mc-text\">Pedimos gentilmente que evitem todos os tons abaixo:</div> <div class=\"mc-section-label\">— Tons de Marsala</div> <div class=\"mc-tag-row\"> <span class=\"mc-tag mc-tag-no\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i> Marsala claro</span> <span class=\"mc-tag mc-tag-no\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i> Bordô</span> <span class=\"mc-tag mc-tag-no\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i> Vinho</span> <span class=\"mc-tag mc-tag-no\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i> Ameixa</span> <span class=\"mc-tag mc-tag-no\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i> Rosé escuro</span> <span class=\"mc-tag mc-tag-no\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i> Terracota escura</span> </div> <div class=\"mc-section-label\" style=\"margin-top:10px;\">— Tons de Dourado</div> <div class=\"mc-tag-row\"> <span class=\"mc-tag mc-tag-white\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i> Dourado</span> <span class=\"mc-tag mc-tag-white\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i> Ouro velho</span> <span class=\"mc-tag mc-tag-white\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i> Champagne</span> <span class=\"mc-tag mc-tag-white\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i> Bronze</span> <span class=\"mc-tag mc-tag-white\"><i class=\"fa-solid fa-xmark\" style=\"font-size:10px;\"></i> Amarelo metalizado</span> </div> <div class=\"mc-note\" style=\"margin-top:12px;\"> Estas cores foram escolhidas com carinho para compor o visual da aniversariante neste dia único. Agradecemos imensamente a compreensão e o carinho de cada um ✨ </div> </div> </div> <div class=\"mc-card\" style=\"animation-delay:.19s\"> <div class=\"mc-top\"> <div class=\"mc-icon\" style=\"background:linear-gradient(145deg,#d8b2b2,#b56b78);\"><i class=\"fa-solid fa-clock\"></i></div> <div> <div class=\"mc-title\">Pontualidade</div> <div class=\"mc-text\">Sua chegada no horário é muito importante ✨</div> </div> </div> <div class=\"mc-divider\"></div> <div class=\"mc-body\"> <div class=\"mc-text\">Para não perder nenhum dos <span class=\"mc-highlight\">momentos especiais</span> desta celebração, pedimos que você esteja presente desde o início da festa.</div> </div> </div> </div> <div class=\"mc-confirm\"> <div class=\"mc-confirm-top\"> <div class=\"mc-confirm-icon\"><i class=\"fa-solid fa-calendar-check\"></i></div> <div> <div class=\"mc-confirm-title\">Confirme sua Presença</div> <div class=\"mc-confirm-sub\">Aguardamos o seu retorno com carinho ✨</div> </div> </div> <div class=\"mc-date-badge\"> <i class=\"fa-solid fa-calendar-days\"></i> Até o dia <strong>20 de janeiro de 2027</strong> </div> <div class=\"mc-confirm-note\"> Sua confirmação é essencial para que possamos preparar tudo com carinho e garantir o seu lugar nesta celebração. </div> </div> </div>"
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
    "buttonColor": "#7a1f3d",
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
