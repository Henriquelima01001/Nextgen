// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os itens do portfólio
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Adiciona um listener de clique a cada item do portfólio
    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            // Verifica se o item clicado já está ativo
            const isActive = item.classList.contains('active');

            // Remove 'active' de todos os itens
            portfolioItems.forEach(i => {
                i.classList.remove('active');
            });

            // Se não estiver ativo, adiciona 'active'
            if (!isActive) {
                item.classList.add('active');
            } // Caso contrário, nada mais precisa ser feito.
        });
    });
});

// Função para alternar o menu responsivo
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active'); // Adiciona ou remove a classe 'active' do menu
});

// Função para enviar e-mail usando "mailto"
function sendEmail(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos do formulário
    const name = encodeURIComponent(document.getElementById('name').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const details = encodeURIComponent(document.getElementById('details').value);

    // Verifique se todos os campos foram preenchidos
    if (!name || !email || !details) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Cria o link mailto para envio
    const mailtoLink = `mailto:nextgencode32@gmail.com?subject=Novo orçamento de ${name}&body=Nome: ${name}%0AEmail: ${email}%0ADetalhes do projeto: ${details}`;
    window.location.href = mailtoLink;
}

// Função para alternar o menu em dispositivos móveis
document.getElementById('mobile-menu').onclick = function () {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
};
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os itens da vitrine
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const infoExemplosDiv = document.getElementById('info-exemplos');
    const infoText = document.getElementById('info-text');

    // Adiciona o evento de clique a cada item
    portfolioItems.forEach(item => {
        item.addEventListener('click', function () {
            const info = item.getAttribute('data-info'); // Obtém a informação do atributo data-info
            
            // Atualiza o texto com a informação
            infoText.textContent = info;

            // Remove a classe 'hidden' para exibir a área de informações
            infoExemplosDiv.classList.remove('hidden');
        });
    });
});
