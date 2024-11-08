const boutons = document.querySelectorAll('.ajouter-panier');
const messagePanier = document.getElementById('message-panier');

boutons.forEach(bouton => {
  bouton.addEventListener('click', () => {
    messagePanier.style.display = 'block';
    setTimeout(() => {
      messagePanier.style.display = 'none';
    }, 2000);
  });
});