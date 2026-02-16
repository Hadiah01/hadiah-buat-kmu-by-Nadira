let userName = "";
let musicStarted = false;
let typingSpeed = 120;

/* POPUP */
function showPopup(id) {
  document.getElementById(id).classList.remove("hidden");
}

function closePopup(id) {
  document.getElementById(id).classList.add("hidden");
}

/* TYPING */
function startTyping(id) {
  return new Promise(resolve => {
    const el = document.getElementById(id);
    let text = el.dataset.text.replace(/{nama}/g, userName);
    el.textContent = "";
    let i = 0;

    function type() {
      if (i < text.length) {
        el.textContent += text[i];
        i++;
        setTimeout(type, typingSpeed);
      } else {
        resolve();
      }
    }
    type();
  });
}

/* SAVE NAME */
function saveName() {
  const input = document.getElementById("nameInput").value.trim();
  if (!input) {
    alert("Namata isi dolo yaa 😊");
    return;
  }

  userName = input;
  closePopup("popup0");
  showPopup("popup1");
  startTyping("typing-text");
}

/* START */
function startStory() {
  const btn = document.getElementById("show-popup-btn");
  const loading = document.getElementById("loading");

  btn.style.opacity = "0";
  btn.style.pointerEvents = "none";

  loading.classList.remove("hidden");

  setTimeout(() => {
    loading.classList.add("hidden");
    showPopup("popup0");
  }, 3000);
}

/* BUTTON BELUM SIAP */
let noClickCount = 0;
let noUnlocked = false;

function handleNoClick() {
  const btn = document.getElementById("btnNo");

  if (!noUnlocked) {
    noClickCount++;
    btn.textContent = `Belum siapka (${noClickCount}/10)`;

    if (noClickCount >= 10) {
      noUnlocked = true;
      btn.textContent = "Ya sudahka, menyerah ji 😔";
      btn.style.background = "#ff6f91";
      btn.style.color = "white";
    }
    return;
  }

  closePopup("popup3");
  showPopup("popup6");
  startTyping("typing-text-8");
}

/* NEXT POPUP */
async function showNextPopup(current, next, ...typingIds) {
  closePopup(current);
  showPopup(next);

  for (const id of typingIds) {
    await startTyping(id);
  }
}

/* WHATSAPP */
function openWhatsApp() {
  const phoneNumber = "628xxxxxxxxxx";
  const message = `Iyo, mauka serius sama ki 🤍`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
}

function openWhatsAppCode() {
  const phoneNumber = "628xxxxxxxxxx";
  const message = `Tarima kasi sudah buka pesanta 🤍`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
}