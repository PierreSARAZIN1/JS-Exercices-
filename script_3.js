// EXO 3 pyramide ;)

var nombreEtages = "";
while(nombreEtages === "") {
    nombreEtages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
  } 

  var e =  Number(nombreEtages);
  console.log(e)

  function build(e){
      let i = 0;

      while (e >= 0){
      i = i + 1;
      e = e - 1;

      let space = ' '.repeat(e);
      let briques = '#'.repeat(i);
      console.log(space + briques);
    }
}
build(e)