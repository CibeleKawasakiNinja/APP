// script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('helpForm');
    const submitButton = document.getElementById('submitButton');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const contact = document.getElementById('contact').value;
        const situation = document.getElementById('situation').value;

        // Aqui você pode adicionar a lógica para processar os dados, como enviar para um servidor ou exibir uma mensagem de confirmação.
        console.log('Nome:', name);
        console.log('idade:', idade);
        console.log('endereço',endereço);
        console.log('sexo',sexo);
        console.log('Contato:', contact);
        console.log('Situação:', situation);

        // Exemplo: Exibir uma mensagem de confirmação
        alert('Sua solicitação foi enviada com sucesso. Entraremos em contato em breve.');
    });
});