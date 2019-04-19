if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

let myPrompt;
const pwaAlert = document.querySelector('.pwa__alert');
const btnPWA = document.querySelector('.pwa__alert__btn');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  myPrompt = e;

  pwaAlert.style.display = 'block';
});

btnPWA.addEventListener('click', () => {
  pwaAlert.style.display = 'none';
  myPrompt.prompt();
});
