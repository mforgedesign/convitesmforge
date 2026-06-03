window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Isadora",
    "idade": 15,
    "data": "2026-08-16",
    "hora": "11:30",
    "endereco": ""
  },
  "convite": {
    "paletaCores": "",
    "tema": "",
    "musica": "assets/music_1780517881170.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Isadora15Anos",
    "seo": {
      "pageTitle": "Isadora | 15 Anos",
      "ogTitle": "Você está convidado para os 15 anos da Isadora!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1780517881170.jpg",
    "aberturaSlides": [
      "assets/slide1_1780517881170.mp4",
      "assets/slide2_1780517881170.mp4",
      "assets/slide3_1780517881170.jpg",
      "assets/slide4_1780517881170.mp4",
      "assets/slide5_1780517881170.jpg"
    ],
    "folhaVazia": "assets/folha_1780517881170.jpg",
    "folhaPreenchida": "assets/folha_1780517881170.jpg",
    "musica": "assets/music_1780517881170.mp3",
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/aoau5ka6sk5b8qxK9"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:wght@300;400;500;600&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n\n.bs-wrap{\n  position:relative;\n  padding:28px 20px 24px;\n  overflow:hidden;\n  font-family:'Cormorant Garamond',serif;\n}\n\n/* brilho ambiente */\n.bs-glow{\n  position:absolute;\n  inset:-40%;\n  background:\n    radial-gradient(circle at center,\n    rgba(191,219,254,.18),\n    transparent 65%);\n  animation:bsGlow 8s ease-in-out infinite;\n  pointer-events:none;\n}\n\n@keyframes bsGlow{\n  0%,100%{\n    opacity:.45;\n    transform:scale(1);\n  }\n  50%{\n    opacity:.9;\n    transform:scale(1.12);\n  }\n}\n\n/* partículas */\n.bs-particle{\n  position:absolute;\n  width:4px;\n  height:4px;\n  border-radius:50%;\n  background:rgba(219,234,254,.9);\n  box-shadow:0 0 10px rgba(255,255,255,.4);\n  animation:bsFloat linear infinite;\n}\n\n@keyframes bsFloat{\n  0%{\n    transform:translateY(0) scale(.3);\n    opacity:0;\n  }\n  20%{opacity:1}\n  100%{\n    transform:translateY(-120px) scale(1);\n    opacity:0;\n  }\n}\n\n/* grid */\n.bs-grid{\n  display:grid;\n  gap:12px;\n  position:relative;\n  z-index:2;\n}\n\n/* card */\n.bs-card{\n  display:flex;\n  gap:14px;\n  padding:16px;\n  border-radius:20px;\n\n  background:\n    linear-gradient(\n      145deg,\n      rgba(37,99,235,.20),\n      rgba(255,255,255,.08)\n    );\n\n  border:1px solid rgba(191,219,254,.28);\n\n  backdrop-filter:blur(8px);\n  -webkit-backdrop-filter:blur(8px);\n\n  animation:bsFade .6s ease both;\n\n  box-shadow:\n    inset 0 0 15px rgba(255,255,255,.03),\n    0 0 22px rgba(59,130,246,.08);\n}\n\n@keyframes bsFade{\n  from{\n    opacity:0;\n    transform:translateY(12px);\n  }\n  to{\n    opacity:1;\n    transform:translateY(0);\n  }\n}\n\n/* ícone */\n.bs-icon{\n  width:48px;\n  height:48px;\n  border-radius:15px;\n  flex-shrink:0;\n\n  display:flex;\n  align-items:center;\n  justify-content:center;\n\n  background:\n    linear-gradient(\n      145deg,\n      rgba(219,234,254,.35),\n      rgba(148,163,184,.35)\n    );\n\n  color:#eff6ff;\n  font-size:18px;\n\n  box-shadow:\n    0 0 18px rgba(191,219,254,.18);\n}\n\n/* textos */\n.bs-title{\n  font-family:'Cinzel',serif;\n  font-size:12px;\n  letter-spacing:.14em;\n  text-transform:uppercase;\n  color:#dbeafe;\n  margin-bottom:4px;\n}\n\n.bs-text{\n  font-size:15px;\n  line-height:1.55;\n  color:#f8fbff;\n  word-break:break-word;\n}\n\n/* pix box */\n.bs-pix{\n  margin-top:8px;\n  padding:12px;\n  border-radius:14px;\n  background:rgba(255,255,255,.06);\n  border:1px solid rgba(219,234,254,.18);\n  font-size:14px;\n  color:#ffffff;\n}\n\n/* botão */\n.bs-btn{\n  margin-top:12px;\n  width:100%;\n  border:none;\n  border-radius:14px;\n  padding:13px;\n\n  background:\n    linear-gradient(\n      135deg,\n      #60a5fa,\n      #cbd5e1\n    );\n\n  color:#0f172a;\n\n  font-family:'Cinzel',serif;\n  font-size:11px;\n  letter-spacing:.16em;\n  text-transform:uppercase;\n\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  gap:8px;\n\n  cursor:pointer;\n  transition:.2s;\n\n  box-shadow:\n    0 0 18px rgba(191,219,254,.22);\n}\n\n.bs-btn:active{\n  transform:scale(.97);\n}\n\n/* estrelas */\n.bs-star{\n  position:absolute;\n  color:rgba(219,234,254,.55);\n  font-size:10px;\n  animation:bsStar 3s ease-in-out infinite;\n}\n\n@keyframes bsStar{\n  0%,100%{\n    opacity:0;\n    transform:scale(0);\n  }\n  50%{\n    opacity:1;\n    transform:scale(1);\n  }\n}\n</style>\n\n<div class=\"bs-wrap\">\n\n  <div class=\"bs-glow\"></div>\n\n  <!-- estrelas -->\n  <i class=\"bs-star\" style=\"top:8%;left:6%;\">✦</i>\n  <i class=\"bs-star\" style=\"top:18%;right:8%;\">✧</i>\n  <i class=\"bs-star\" style=\"bottom:16%;left:10%;\">✦</i>\n  <i class=\"bs-star\" style=\"bottom:8%;right:14%;\">✧</i>\n\n  <div class=\"bs-grid\">\n\n    <div class=\"bs-card\">\n      <div class=\"bs-icon\">\n        <i class=\"fa-regular fa-gem\"></i>\n      </div>\n\n      <div>\n        <div class=\"bs-title\">Joias</div>\n\n        <div class=\"bs-text\">\n          Joias delicadas em prata ou detalhes sofisticados.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"bs-card\">\n      <div class=\"bs-icon\">\n        <i class=\"fa-solid fa-spray-can-sparkles\"></i>\n      </div>\n\n      <div>\n        <div class=\"bs-title\">Perfumes</div>\n\n        <div class=\"bs-text\">\n          Fragrâncias doces e marcantes.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"bs-card\">\n      <div class=\"bs-icon\">\n        <i class=\"fa-solid fa-wand-magic-sparkles\"></i>\n      </div>\n\n      <div>\n        <div class=\"bs-title\">Maquiagem</div>\n\n        <div class=\"bs-text\">\n          Itens de maquiagem e beleza.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"bs-card\">\n      <div class=\"bs-icon\">\n        <i class=\"fa-solid fa-spa\"></i>\n      </div>\n\n      <div>\n        <div class=\"bs-title\">Autocuidado</div>\n\n        <div class=\"bs-text\">\n          Kits de skincare e momentos de cuidado pessoal.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"bs-card\">\n      <div class=\"bs-icon\">\n        <i class=\"fa-solid fa-shirt\"></i>\n      </div>\n\n      <div>\n        <div class=\"bs-title\">Roupas</div>\n\n        <div class=\"bs-text\">\n          Tamanho G — estilo moderno e swag.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"bs-card\">\n      <div class=\"bs-icon\">\n        <i class=\"fa-solid fa-shoe-prints\"></i>\n      </div>\n\n      <div>\n        <div class=\"bs-title\">Calçados</div>\n\n        <div class=\"bs-text\">\n          Numeração 37/38.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"bs-card\">\n      <div class=\"bs-icon\">\n        <i class=\"fa-solid fa-book-open\"></i>\n      </div>\n\n      <div>\n        <div class=\"bs-title\">Livros</div>\n\n        <div class=\"bs-text\">\n          Histórias inspiradoras, romances ou aventuras encantadoras.\n        </div>\n      </div>\n    </div>\n\n    <!-- PIX -->\n    <div class=\"bs-card\">\n      <div class=\"bs-icon\">\n        <i class=\"fa-solid fa-gift\"></i>\n      </div>\n\n      <div style=\"width:100%;\">\n        <div class=\"bs-title\">Presente em Pix</div>\n\n        <div class=\"bs-text\">\n          Isadora\n        </div>\n\n        <div class=\"bs-pix\">\n          11982492142\n        </div>\n\n        <button class=\"bs-btn\" onclick=\"copyBluePix()\">\n          Copiar Chave Pix\n          <i class=\"fa-regular fa-copy\"></i>\n        </button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<script>\n(function(){\n\n  const wrap=document.querySelector('.bs-wrap');\n\n  for(let i=0;i<14;i++){\n\n    const p=document.createElement('div');\n\n    p.className='bs-particle';\n\n    const size=2+Math.random()*4;\n\n    p.style.width=size+'px';\n    p.style.height=size+'px';\n\n    p.style.left=(Math.random()*100)+'%';\n    p.style.bottom=(Math.random()*20)+'%';\n\n    p.style.animationDuration=(4+Math.random()*6)+'s';\n    p.style.animationDelay=(Math.random()*5)+'s';\n\n    wrap.appendChild(p);\n  }\n\n})();\n\nfunction copyBluePix(){\n\n  navigator.clipboard.writeText('11982492142');\n\n  alert('Chave Pix copiada!');\n}\n</script>"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<div class=\"space-y-3\">\n\n  <div class=\"flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group\">\n    <div class=\"w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:bg-white/20 transition-colors\">\n      <i class=\"fa-regular fa-clock text-white text-xl\"></i>\n    </div>\n    <div>\n      <h3 class=\"font-bold text-white text-sm mb-0.5 tracking-wide\">\n        A Pontualidade é um Carinho\n      </h3>\n      <p class=\"text-xs text-stone-300 leading-relaxed\">\n        Chegue no horário combinado para não perder nenhum detalhe da nossa mágica história.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group\">\n    <div class=\"w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:bg-white/20 transition-colors\">\n      <i class=\"fa-regular fa-calendar-check text-white text-xl\"></i>\n    </div>\n    <div>\n      <h3 class=\"font-bold text-white text-sm mb-0.5 tracking-wide\">\n        Confirmação de Presença até 16/07/26\n      </h3>\n      <p class=\"text-xs text-stone-300 leading-relaxed\">\n        Confirme sua vinda até 16/07/26, para que possamos preparar tudo com muito amor.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group\">\n    <div class=\"w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:bg-white/20 transition-colors\">\n      <i class=\"fa-solid fa-user-group text-white text-xl\"></i>\n    </div>\n    <div>\n      <h3 class=\"font-bold text-white text-sm mb-0.5 tracking-wide\">\n        Convidado Não Convida\n      </h3>\n      <p class=\"text-xs text-stone-300 leading-relaxed\">\n        Cada convite foi preparado com muito carinho e é pessoal e intransferível.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group\">\n    <div class=\"w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:bg-white/20 transition-colors\">\n      <i class=\"fa-solid fa-shirt text-white text-xl\"></i>\n    </div>\n    <div>\n      <h3 class=\"font-bold text-white text-sm mb-0.5 tracking-wide\">\n        Dress Code: Esporte Fino\n      </h3>\n      <p class=\"text-xs text-stone-300 leading-relaxed\">\n        Pedimos gentilmente que utilizem traje esporte fino e evitem trajes no tom azul marinho, reservado para a debutante.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group\">\n    <div class=\"w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:bg-white/20 transition-colors\">\n      <i class=\"fa-solid fa-heart text-white text-xl animate-pulse\"></i>\n    </div>\n    <div>\n      <h3 class=\"font-bold text-white text-sm mb-0.5 tracking-wide\">\n        Celebre Conosco\n      </h3>\n      <p class=\"text-xs text-stone-300 leading-relaxed\">\n        Deixe a alegria guiar a sua noite! Estamos ansiosos para criar memórias inesquecíveis.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group\">\n    <div class=\"w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:bg-white/20 transition-colors\">\n      <i class=\"fa-solid fa-cake-candles text-white text-xl\"></i>\n    </div>\n    <div>\n      <h3 class=\"font-bold text-white text-sm mb-0.5 tracking-wide\">\n        Um Doce Encontro\n      </h3>\n      <p class=\"text-xs text-stone-300 leading-relaxed\">\n        Não se despeça sem nos presentear com um abraço e saborear uma fatia do nosso bolo.\n      </p>\n    </div>\n  </div>\n\n</div>"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5511989165233",
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
    "lembrete": true
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
