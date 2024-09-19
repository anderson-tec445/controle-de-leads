// Referenciando o formulário e a tabela
const leadForm = document.getElementById('leadForm');
const leadsTable = document.querySelector('#leadsTable tbody');

// Armazenamento temporário dos leads
let leads = [];

// Função para adicionar um lead à tabela
function addLeadToTable(lead) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${lead.name}</td>
        <td>${lead.email}</td>
        <td>${lead.phone}</td>
        <td><button onclick="deleteLead('${lead.email}')">Excluir</button></td>
    `;
    leadsTable.appendChild(row);
}

// Função para excluir um lead
function deleteLead(email) {
    leads = leads.filter(lead => lead.email !== email);
    renderLeads();
}

// Função para renderizar os leads na tabela
function renderLeads() {
    leadsTable.innerHTML = '';
    leads.forEach(lead => {
        addLeadToTable(lead);
    });
}

// Evento de submissão do formulário
leadForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Criando um novo lead
    const newLead = { name, email, phone };
    leads.push(newLead);

    // Renderizando o lead na tabela
    addLeadToTable(newLead);

    // Limpando o formulário
    leadForm.reset();
});