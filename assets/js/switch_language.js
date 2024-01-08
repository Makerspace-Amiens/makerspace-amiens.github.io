var switchLang = document.getElementById('switchLang');
var englishDiv = document.getElementById('english');
var frenchDiv = document.getElementById('french');

// Vérifiez l'état initial du commutateur et affichez la bonne langue
if (switchLang.checked) {
    englishDiv.style.display = 'block';
    frenchDiv.style.display = 'none';
} else {
    englishDiv.style.display = 'none';
    frenchDiv.style.display = 'block';
}

// Écoutez les changements sur le commutateur
switchLang.addEventListener('change', function() {
  if (this.checked) {
    // code pour passer à la langue anglaise
    englishDiv.style.display = 'block';
    frenchDiv.style.display = 'none';
  } else {
    // code pour passer à la langue française
    englishDiv.style.display = 'none';
    frenchDiv.style.display = 'block';
  }
});