/**
 * ============================================================================
 * BÁRBARA MAGLIA - APOIO PARENTAL & PSICOTERAPIA
 * Interactivity & UI Logic
 * ============================================================================
 */

// --------------------------------------------------------------------------
// Blog Articles Database (Conteúdo autêntico e educativo)
// --------------------------------------------------------------------------
const BLOG_POSTS = {
  1: {
    category: "Apoio Parental & Neurociência",
    title: "Birra não é manipulação: o que a neurociência ensina sobre a raiva infantil",
    readTime: "5 min de leitura",
    content: `
      <p>Quantas vezes você já ouviu conselhos como: <em>"Deixa chorar que é manha"</em> ou <em>"Se você ceder agora, ele vai mandar em você para sempre"</em>? Na rotina de pais e mães de crianças de 1 a 6 anos, as explosões emocionais — popularmente chamadas de birras — são fonte constante de angústia, vergonha e esgotamento.</p>
      
      <h3>A imaturidade do cérebro infantil</h3>
      <p>A neurociência do desenvolvimento nos mostra algo libertador: o cérebro de uma criança pequena está em plena formação. O córtex pré-frontal, região responsável pela autorregulação, pela lógica, pelo freio inibitório e pelo controle de impulsos, só atinge a maturação completa por volta dos 24 aos 25 anos de idade!</p>
      
      <p>Quando uma criança tem uma crise no supermercado porque não pôde levar um doce, ou quando se joga no chão porque é hora de guardar os brinquedos, não há ali uma estratégia maquiavélica para testar os pais. Há um <strong>sequestro emocional do sistema límbico</strong>. A frustração é sentida no corpo como uma dor real, e a criança simplesmente não possui as ferramentas biológicas para lidar com essa onda sozinha.</p>

      <blockquote>
        “A criança não faz a birra contra você; ela está sofrendo com uma tempestade química dentro de si e precisa de você como âncora, não como outro furacão.”
      </blockquote>

      <h3>Acolher a dor sem ceder ao limite</h3>
      <p>O maior mal-entendido na parentalidade contemporânea é confundir acolhimento com permissividade:</p>
      <ul>
        <li><strong>Permissividade:</strong> A criança chora porque quer o doce antes do almoço, e os pais entregam o doce para fazê-la parar de chorar.</li>
        <li><strong>Acolhimento com Limite:</strong> Os pais sustentam o "não" com calma (o doce não será dado), mas não punem nem rejeitam a criança por estar triste ou brava com essa decisão.</li>
      </ul>
      <p>Você pode dizer com firmeza e afeto: <em>"Eu entendo que você queria muito o doce agora e que é chato esperar. O doce fica para depois do almoço. Eu estou aqui com você enquanto você se acalma."</em> O limite protege a saúde; a sua presença protege o vínculo.</p>
    `
  },
  2: {
    category: "Limites e Conexão",
    title: "Como colocar limites firmes sem gritar e sem perder a doçura",
    readTime: "4 min de leitura",
    content: `
      <p>Gritar não ensina respeito; ensina medo. E o medo gera duas respostas na infância: submissão cega ou revolta disfarçada. Mas como estabelecer autoridade de forma saudável quando parece que a criança só ouve se você elevar a voz?</p>

      <h3>Mão estendida em vez de dedo apontado</h3>
      <p>Uma das bases do meu trabalho no <strong>Apoio Parental</strong> é mudar a postura física e psicológica com que nos dirigimos aos nossos filhos. Quando apontamos o dedo e gritamos do outro lado da sala, ativamos imediatamente o sistema de defesa da criança.</p>

      <p>Experimente estes 3 movimentos na sua rotina:</p>
      <ol>
        <li><strong>Abaixe-se até a altura dos olhos dela:</strong> Não dê instruções de pé ou de costas enquanto faz outra coisa. Olhe nos olhos com serenidade.</li>
        <li><strong>Faça contato físico gentil antes de falar:</strong> Uma mão pousada no ombro ou segurar a mão da criança conecta o cérebro dela ao seu antes que as palavras sejam emitidas.</li>
        <li><strong>Diga o que ela DEVE fazer, não o que NÃO deve:</strong> O cérebro infantil processa melhor comandos afirmativos. Em vez de "Não corre no corredor!", prefira: "Aqui no corredor nós andamos com passos de tartaruga."</li>
      </ol>

      <blockquote>
        “Limites não são grades para aprisionar; são muros seguros que impedem a criança de cair no abismo.”
      </blockquote>

      <p>Quando aquilo que você decidiu é inegociável (como usar a cadeirinha no carro ou escovar os dentes), comunique com firmeza tranquila. Você não precisa pedir autorização à criança, nem precisa entrar em debate. A firmeza gentil transmite segurança.</p>
    `
  },
  3: {
    category: "Matrescência e Saúde Mental",
    title: "A solidão da matrescência: a culpa que nenhuma mãe deveria carregar",
    readTime: "6 min de leitura",
    content: `
      <p>Assim como a adolescência é a transição da infância para a fase adulta, a <strong>matrescência</strong> é o nascimento da mãe. É um período de profunda convulsão biológica, psicológica e social que dura anos, e não apenas o puerpério imediato.</p>

      <h3>O luto da mulher que você era</h3>
      <p>Na sociedade atual, espera-se que a mulher continue performando como se não tivesse filhos e crie seus filhos como se não tivesse outro trabalho. Essa expectativa sobre-humana gera uma sensação permanente de inadequação: ou você sente que está devendo na profissão, ou sente que está negligenciando os filhos.</p>

      <p>É profundamente comum sentir saudade da sua liberdade anterior, do silêncio, do sono ininterrupto e da autonomia sobre o próprio tempo. <strong>Sentir isso não faz de você uma mãe ruim ou ingrata; faz de você humana.</strong></p>

      <blockquote>
        “Para cuidar de uma criança, é preciso cuidar primeiro de quem cuida. Uma mãe exausta e sobrecarregada não consegue ser o porto seguro que ela mesma gostaria de ser.”
      </blockquote>

      <p>Na psicoterapia com foco em matrescência e saúde mental da mulher, abrimos espaço para acolher essas dores sem julgamento. Desmontamos o mito da "mãe perfeita" e construímos a paz com a mãe real e potente que você é.</p>
    `
  },
  4: {
    category: "Gestalt-Terapia",
    title: "O poder do \"Aqui e Agora\": o que a Gestalt-Terapia traz para os seus dias",
    readTime: "4 min de leitura",
    content: `
      <p>A Gestalt-terapia é uma abordagem psicológica humanista e fenomenológica criada por Fritz Perls e Laura Perls. Ao contrário de modelos que buscam rotular as pessoas em categorias rígidas, a Gestalt enxerga o ser humano como um todo indissociável (corpo, mente e emoções) em constante relação com o seu meio.</p>

      <h3>Por que o presente cura?</h3>
      <p>Grande parte do sofrimento humano está ancorado em dois tempos inexistentes: o <em>passado</em> (onde moram a culpa, a mágoa e o remorso) ou o <em>futuro</em> (onde proliferam a ansiedade, a catastrofização e o medo do descontrole).</p>

      <p>No processo psicoterapêutico baseado na Gestalt, nós treinamos a <strong>Awareness (Consciência do Presente)</strong>:</p>
      <ul>
        <li>O que o seu corpo está sentindo neste exato momento?</li>
        <li>Quais tensões musculares você carrega nos ombros enquanto fala sobre sua rotina?</li>
        <li>Quais necessidades autênticas suas foram engolidas para agradar o entorno?</li>
      </ul>

      <blockquote>
        “Nada existe exceto o aqui e o agora. Ao assumir a responsabilidade pela sua experiência presente, você reencontra sua capacidade genuína de escolher o seu destino.”
      </blockquote>

      <p>Na vida diária, a presença consciente nos permite responder às situações reais em vez de reagir automaticamente a traumas antigos. Isso muda a relação com nós mesmos, com nossos parceiros e com nossos filhos.</p>
    `
  }
};

// --------------------------------------------------------------------------
// DOM Initialization & Event Binding
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
  initMobileNav();
  initFAQAccordion();
  initQuiz();
  initClientPortalModal();
  initBlogReaderModal();
  initYear();
});

// --------------------------------------------------------------------------
// 1. Header Scroll Effect
// --------------------------------------------------------------------------
function initHeaderScroll() {
  const header = document.getElementById("header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

// --------------------------------------------------------------------------
// 2. Mobile Navigation Toggle
// --------------------------------------------------------------------------
function initMobileNav() {
  const toggleBtn = document.getElementById("navToggle");
  const navMobile = document.getElementById("navMobile");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (!toggleBtn || !navMobile) return;

  const toggleMenu = () => {
    const isOpen = navMobile.classList.toggle("open");
    toggleBtn.classList.toggle("open", isOpen);
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
    navMobile.setAttribute("aria-hidden", String(!isOpen));
  };

  const closeMenu = () => {
    navMobile.classList.remove("open");
    toggleBtn.classList.remove("open");
    toggleBtn.setAttribute("aria-expanded", "false");
    navMobile.setAttribute("aria-hidden", "true");
  };

  toggleBtn.addEventListener("click", toggleMenu);

  mobileLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });
}

// --------------------------------------------------------------------------
// 3. FAQ Accordion
// --------------------------------------------------------------------------
function initFAQAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (!questionBtn || !answer) return;

    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close other accordion items
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove("active");
          const otherQuestion = other.querySelector(".faq-question");
          const otherAnswer = other.querySelector(".faq-answer");
          if (otherQuestion) otherQuestion.setAttribute("aria-expanded", "false");
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      // Toggle current
      if (isActive) {
        item.classList.remove("active");
        questionBtn.setAttribute("aria-expanded", "false");
        answer.style.maxHeight = null;
      } else {
        item.classList.add("active");
        questionBtn.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = `${answer.scrollHeight + 30}px`;
      }
    });
  });
}

// --------------------------------------------------------------------------
// 4. Interactive Quiz ("Qual o meu momento?")
// --------------------------------------------------------------------------
function initQuiz() {
  const quizOptions = document.getElementById("quizOptions");
  const quizResult = document.getElementById("quizResult");
  const btnRestart = document.getElementById("btnRestartQuiz");
  const resultIcon = document.getElementById("resultIcon");
  const resultTitle = document.getElementById("resultTitle");
  const resultDesc = document.getElementById("resultDesc");
  const resultCta = document.getElementById("resultCta");

  if (!quizOptions || !quizResult) return;

  const resultsData = {
    parental: {
      icon: "🌱",
      title: "Indicação Principal: Apoio Parental",
      desc: "Seu maior ponto de estresse hoje está na dinâmica com seu filho (birras, rotina, limites, sono). O Apoio Parental trará clareza prática e devolverá a tranquilidade aos seus dias em poucas sessões estruturadas.",
      msg: "Ol%C3%A1%20B%C3%A1rbara!%20Fiz%20o%20teste%20no%20site%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20Apoio%20Parental%20para%20desafios%20com%20meu%20filho."
    },
    psico: {
      icon: "🛋️",
      title: "Indicação Principal: Psicoterapia Individual",
      desc: "Você está vivendo um momento de exaustão, ansiedade ou sobrecarga interna. A Psicoterapia (Gestalt-terapia) oferecerá um refúgio acolhedor e confidencial para você se escutar, respirar e cuidar de si com compaixão.",
      msg: "Ol%C3%A1%20B%C3%A1rbara!%20Fiz%20o%20teste%20no%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20para%20iniciar%20minha%20Psicoterapia%20Individual."
    },
    ambos: {
      icon: "✨",
      title: "Indicação: Cuidado Integrado (Parentalidade & Autocuidado)",
      desc: "Os desafios da criação estão tocando em feridas e gatilhos emocionais seus. É muito comum! Podemos iniciar alinhando a rotina com o Apoio Parental e, em seguida, aprofundar seu acolhimento na Psicoterapia.",
      msg: "Ol%C3%A1%20B%C3%A1rbara!%20Fiz%20o%20teste%20no%20site%20e%20percebi%20que%20preciso%20de%20apoio%20tanto%20com%20meu%20filho%20quanto%20para%20mim.%20Como%20podemos%20estruturar?"
    }
  };

  quizOptions.addEventListener("click", (e) => {
    const btn = e.target.closest(".quiz-btn");
    if (!btn) return;

    const type = btn.getAttribute("data-type");
    const data = resultsData[type] || resultsData.parental;

    resultIcon.textContent = data.icon;
    resultTitle.textContent = data.title;
    resultDesc.textContent = data.desc;
    resultCta.href = `https://wa.me/5554994179770?text=${data.msg}`;

    quizOptions.classList.add("hidden");
    quizResult.classList.remove("hidden");
  });

  if (btnRestart) {
    btnRestart.addEventListener("click", () => {
      quizResult.classList.add("hidden");
      quizOptions.classList.remove("hidden");
    });
  }
}

// --------------------------------------------------------------------------
// 5. Modal: Acesso Clientes (Portal do Paciente)
// --------------------------------------------------------------------------
function initClientPortalModal() {
  const modal = document.getElementById("modalClientPortal");
  const openBtn = document.getElementById("btnOpenClientPortal");
  const openBtnMobile = document.getElementById("btnOpenClientPortalMobile");
  const openLinkFooter = document.querySelector(".open-client-portal-link");
  const closeBtn = document.getElementById("btnCloseClientPortal");

  if (!modal) return;

  const openModal = (e) => {
    if (e) e.preventDefault();
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  if (openBtn) openBtn.addEventListener("click", openModal);
  if (openBtnMobile) openBtnMobile.addEventListener("click", openModal);
  if (openLinkFooter) openLinkFooter.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  // Close on outside click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });

  // Modal Tabs switching
  const tabBtns = modal.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab");
      switchModalTab(targetId);
    });
  });
}

window.switchModalTab = function(targetId) {
  const modal = document.getElementById("modalClientPortal");
  if (!modal) return;

  const tabBtns = modal.querySelectorAll(".tab-btn");
  const tabContents = modal.querySelectorAll(".tab-content");

  tabBtns.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === targetId);
  });

  tabContents.forEach(content => {
    content.classList.toggle("hidden", content.id !== targetId);
  });
};

// Client form actions
window.handleClientLogin = function() {
  const emailInput = document.getElementById("clientEmail");
  const email = emailInput ? emailInput.value : "";
  alert(`Autenticando portal para: ${email}\n\nVocê será redirecionado para o ambiente seguro de prontuário e materiais em instantes.`);
};

window.handleFirstAccess = function() {
  const emailInput = document.getElementById("firstAccessEmail");
  const email = emailInput ? emailInput.value : "";
  alert(`Link de ativação de primeiro acesso enviado com sucesso para: ${email}!\nVerifique sua caixa de entrada e spam.`);
  switchModalTab("tabLogin");
};

window.handleRecoverPassword = function() {
  const emailInput = document.getElementById("recoverEmail");
  const email = emailInput ? emailInput.value : "";
  alert(`Instruções de redefinição de senha enviadas para: ${email}.`);
  switchModalTab("tabLogin");
};

// --------------------------------------------------------------------------
// 6. Modal: Leitor do Blog
// --------------------------------------------------------------------------
function initBlogReaderModal() {
  const modal = document.getElementById("modalBlogReader");
  const closeBtn = document.getElementById("btnCloseBlogReader");
  const readBtns = document.querySelectorAll(".btn-read-post");

  const titleEl = document.getElementById("blogArticleTitle");
  const categoryEl = document.getElementById("blogArticleCategory");
  const readTimeEl = document.getElementById("blogArticleReadTime");
  const bodyEl = document.getElementById("blogArticleBody");

  if (!modal) return;

  const openArticle = (postId) => {
    const post = BLOG_POSTS[postId];
    if (!post) return;

    categoryEl.textContent = post.category;
    titleEl.textContent = post.title;
    readTimeEl.textContent = post.readTime;
    bodyEl.innerHTML = post.content;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeArticle = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  readBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const postId = btn.getAttribute("data-post");
      openArticle(postId);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeArticle);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeArticle();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeArticle();
    }
  });
}

// --------------------------------------------------------------------------
// 7. Auto-update Current Year
// --------------------------------------------------------------------------
function initYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
