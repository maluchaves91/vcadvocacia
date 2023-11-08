function scrollToSection(area) {
    const section = document.getElementById(area);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


function redirecionarParaIndex() {
    window.location.href = "index.html#area";
}

var nav = document.querySelector('nav');

var nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    if (window.pageYOffset > 200) {
        nav.classList.add('bg-dark', 'shadow');
        var textElements = nav.querySelectorAll('.colornav'); // Substitua 'colornav' pela classe real dos elementos de texto
        textElements.forEach(function(element) {
            element.style.color = 'white';
        });
    } else {
        nav.classList.remove('bg-dark', 'shadow');
        var textElements = nav.querySelectorAll('.colornav'); // Substitua 'colornav' pela classe real dos elementos de texto
        textElements.forEach(function(element) {
            element.style.color = ''; // Isso remove a cor definida, voltando ao estilo padrão
        });
    }
});




//Icones das áreas de atuação//

// Função para lidar com o redirecionamento para uma seção e ajustar o scroll
function goToSection(sectionId) {
    const sectionTitulo = document.getElementById(sectionId + "Titulo");
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    
    // Calcula o valor de deslocamento com base na altura da barra de navegação
    const offset = sectionTitulo.getBoundingClientRect().top - navbarHeight;
  
    // Ajusta o scroll para posicionar o título abaixo da barra de navegação
    window.scrollTo({
      top: window.scrollY + offset,
      behavior: "smooth"
    });
  }
  
  // Função para lidar com o redirecionamento para a seção 'Civil'
  function goToCivilSection() {
    goToSection("civil");
  }
  
  // Função para lidar com o redirecionamento para a seção 'Consumidor'
  function goToConsumidorSection() {
    goToSection("consumidor");
  }

  function goToEmpresarialSection() {
    goToSection("empresarial");
  }

  function goToTrabalhistaSection() {
    goToSection("trabalhista");
  }



//script para justar a exibição de todos os ícones da área de atuação, que estava cortada ao clicar no navBar na opção "Para empresas"//
  document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os links com a classe "scroll-link"
    const scrollLinks = document.querySelectorAll(".scroll-link");

    // Adiciona um ouvinte de evento de clique a cada link
    scrollLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        const targetId = link.getAttribute("href"); // Obtém o ID da seção alvo
        const targetSection = document.querySelector(targetId); // Seleciona a seção alvo

        if (targetSection) {
          // Se a seção alvo for encontrada
          targetSection.scrollIntoView({ behavior: "smooth" }); // Rola até a seção alvo suavemente
        }
      });
    });
  });


 
  // Função para redirecionar para a página "novidades1.html"
  function redirecionarParaNovidades1() {
    window.open('novidades1.html', '_blank');
  }

  // Adicione um evento de clique para cada div de notícia
  document.getElementById('noticia1').addEventListener('click', redirecionarParaNovidades1);
  // Repita isso para cada div de notícia conforme necessário

  // Função para redirecionar para a página "novidades1.html"
  function redirecionarParaNovidades1() {
    window.open('novidades2.html', '_blank');
  }

  // Adicione um evento de clique para cada div de notícia
  document.getElementById('noticia2').addEventListener('click', redirecionarParaNovidades1);
  // Repita isso para cada div de notícia conforme necessário

  // Função para redirecionar para a página "novidades1.html"
  function redirecionarParaNovidades1() {
    window.open('novidades3.html', '_blank');
  }

  // Adicione um evento de clique para cada div de notícia
  document.getElementById('noticia3').addEventListener('click', redirecionarParaNovidades1);
  // Repita isso para cada div de notícia conforme necessário

  // Função para redirecionar para a página "novidades1.html"
  function redirecionarParaNovidades1() {
    window.open('novidades4.html', '_blank');
  }

  // Adicione um evento de clique para cada div de notícia
  document.getElementById('noticia4').addEventListener('click', redirecionarParaNovidades1);
  // Repita isso para cada div de notícia conforme necessário

  //Troca de imagem automatica
  const imagens = [
    'areas-de-atuacao/imagens/novidades1.jpg',
    'areas-de-atuacao/imagens/novIgrejas.jpg',
    'areas-de-atuacao/imagens/trabalhista.png',
    'areas-de-atuacao/imagens/previdenciario.png'
  ];
  
  let indiceAtual = 0;
  
  function alterarImagem() {
    const imagemDestaque = document.getElementById('imagemDestaque');
    imagemDestaque.src = imagens[indiceAtual];
  }
  
  function mudarImagem(direcao) {
    // Avança ou retrocede no índice, considerando o limite das imagens
    indiceAtual = (indiceAtual + direcao + imagens.length) % imagens.length;
    alterarImagem();
  }