// main.js
// Preparado para futuras funcionalidades

// Exemplo: destacar tema clicado (sem impacto real aqui pois tema1 usa link)
document.querySelectorAll('.theme-box').forEach(box => {
    box.addEventListener('click', () => {
        document.querySelectorAll('.theme-box').forEach(b => b.classList.remove('active'));
        box.classList.add('active');
    });
});