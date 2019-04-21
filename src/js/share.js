const shareButton = document.querySelector('.social__shareButton');

if (('share' in navigator) && shareButton) {
  shareButton.style.display = 'inline-block';

  shareButton.addEventListener('click', () => {
    navigator.share({
      title: 'Fellyph Cintra Front-end',
      text: 'Fellyph Cintra, Brazilian front-end engineer based in Dublin, Ireland.',
      url: 'https://fellyph.com.br',
    });
  });
}
