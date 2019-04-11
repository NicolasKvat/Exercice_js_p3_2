// Je prends l'id 'on' et je lui donne une fonction quand on clique dessus
document.getElementById('on').addEventListener('click', function() {
  //Pour afficher la div :
  document.getElementById('text').style.display = 'block';
});
// Je prends l'id 'off' et je lui donne une fonction quand on clique dessus
document.getElementById('off').addEventListener('click', function() {
  //Pour masquer la div :
  document.getElementById('text').style.display = 'none';
});
