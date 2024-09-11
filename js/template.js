// Função principal que inicializa a aplicação
function runApp() {
    // Esconde o menu e o elemento com id 'fumaca' ao carregar a página
    $('#wrap>nav').hide();
    $('#cortina').hide();

    // Adiciona um listener de clique ao botão de id 'toggleMenu'
    $('#toggleMenu').click(controlaMenu);
}

// Função para controlar a exibição do menu e do elemento 'fumaca'
function controlaMenu() {
    // Alterna a visibilidade do menu e do elemento 'fumaca'
    if ($('#wrap>nav').is(':visible')) {
        // Se o menu está visível, esconde-o e também o 'fumaca'
        $('#wrap>nav, #cortina').hide('fast');
        // Restaura o scroll do corpo
        $('body').css('overflow', 'auto');
    } else {
        // Caso contrário, mostra o menu e o 'fumaca'
        $('#wrap>nav, #cortina').show('fast');
        // Remove o scroll do corpo para evitar rolagem quando o menu está aberto
        $('body').css('overflow', 'hidden');
    }

    // Evita que o clique no botão de toggleMenu cause o comportamento padrão do link
    return false;
}

// Inicializa a aplicação quando o documento estiver completamente carregado
$(document).ready(runApp);