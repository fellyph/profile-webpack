if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });

  let myPrompt;
  const pwaAlert = document.querySelector('.pwaBanner');
  const btnPWA = document.querySelector('.pwaBanner__btn');

  if (pwaAlert) {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      myPrompt = e;

      pwaAlert.style.display = 'block';
    });

    btnPWA.addEventListener('click', () => {
      pwaAlert.style.display = 'none';
      myPrompt.prompt();
    });
  }
}
