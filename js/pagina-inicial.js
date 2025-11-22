const menuMobile = document.getElementById('menu-mobile');
const nav = document.getElementById('nav-barra');
const btnFechar = document.getElementById('btn-fechar');

function toggleMenu() {
    nav.classList.toggle('ativo');
}

menuMobile.addEventListener('click', toggleMenu);
btnFechar.addEventListener('click', toggleMenu);

(function() {
    emailjs.init("2H7tcY9u0HvS3--1Q"); 
})();

const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
    event.preventDefault();

    const serviceID = "service_6p06p22";
    const templateCliente = "template_lvzh1o9";
    const templateInovatech = "template_c6hbx6j";

    
    emailjs.sendForm(serviceID, templateCliente, this)
        .then(() => {
            console.log("E-mail enviado ao cliente com sucesso!");
        
        
            return emailjs.sendForm(serviceID, templateInovatech, form);
        })
        .then(() => {
            console.log("Notificação enviada à Inovatech com sucesso!");

            window.location.href = "agradecimento.html";
        })
        .catch((error) => {
            console.error("Erro ao enviar:", error);
            alert("Ocorreu um erro ao enviar. Tente novamente.");
        });
    });