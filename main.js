// Script para links clicáveis que direcionem a outras seções (exemplo smooth scroll)

document.querySelectorAll('.button-panel a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Se não existir o ID, redirecione para outra URL
            // Exemplo: window.location.href = 'pagina.html';
            console.log(`Seção "${targetId}" não encontrada.`);
        }
    });
});