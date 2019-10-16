function clique_resolver(){
    window.alert('Vamos resolver!!');
    let a = document.querySelector('#coeficiente-a').value;
    let b = document.querySelector('#coeficiente-b').value;
    let c = document.querySelector('#coeficiente-c').value;

  if(a==0){
    window.alert('A equação informada não é de 2° grau! O coeficiente "a" deve ser diferente de 0.');
    return;
  }

  if (a!==0){
    let delta = b*b-4*a*c;
    document.querySelector('#resultado-delta').value = delta;

    if (delta>=0){
      let raiz_delta = Math.sqrt(delta);

      document.querySelector('#resultado-x1').value= (-b + raiz_delta)/2*a;
      document.querySelector('#resultado-x2').value= (-b - raiz_delta)/2*a;
      document.querySelector('#qtdraizes').value= 2;
      document.querySelector('#xv').value= (-b)/(2*a);
      document.querySelector('#yv').value= (-delta)/(4*a);
    }

    if (delta<0){
      document.querySelector('#resultado-x1').value= ' ';
      document.querySelector('#resultado-x2').value= ' ';
      document.querySelector('#qtdraizes').value= 0;
      return;
    }
  }

  if (delta=0){document.querySelector('#qtdraizes').value= 1;}

  if (a<0){document.querySelector('#parabola').value='Baixo'}
  else {document.querySelector('#parabola').value='Cima'}
}

let botao = document.querySelector("#resolver");
botao.addEventListener('click', clique_resolver);
