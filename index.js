function scrollToSection(sectionId) {
    var element = document.getElementById(sectionId);
    if (element) {
      var position = element.offsetTop - 100; // Ajuste o valor 100 para a quantidade de pixels acima do elemento desejado
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    }
  }

  function sobremimPagina(){
    window.location.href = "sobremimPagina/sobremim.html";
  }

  
  function paginaProjetos(){
    window.location.href = "projetosPagina/projetosP.html";
  }

  function voltarInicio(){
    window.location.href = "../index.html";
  }

  function projetosEscola(){
    window.location.href = "escolaPagina/escola.html"
  }

  function voltarPagina(){
    history.back();
  }