// Função para alternar o menu
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active'); // Adiciona ou remove a classe 'active' do menu
});

// Função para enviar e-mail
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

    // Enviar e-mail (substitua pela sua lógica de envio)
    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, details }),
    })
        .then(response => response.json())
        .then(data => {
            // Exibe a mensagem de resposta
            document.getElementById('response-message').textContent = data.message;
            document.getElementById('response-message').classList.remove('hidden');
        })
        .catch(error => {
            console.error('Erro ao enviar o e-mail:', error);
            document.getElementById('response-message').textContent = 'Erro ao enviar o e-mail.';
            document.getElementById('response-message').classList.remove('hidden');
        });
}
