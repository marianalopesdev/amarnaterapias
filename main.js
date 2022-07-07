window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll();
    showBackTopScrollButton();
    activateHighlitedMenu(home);
    activateHighlitedMenu(services);
    activateHighlitedMenu(about);
    activateHighlitedMenu(contact);
}

function activateHighlitedMenu(section) {
    //linh alvo que calcula a metade da página - innerheight pega a altura do viewport 
    const targetLine = scrollY + innerHeight / 2;

    //valor scrolly começo da seção
    const sectionTop = section.offsetTop;

    //altura total da seção
    const sectionHeight = section.offsetHeight;

    // vê se topo chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

    //valor scrolly de onde a seção termina
    const sectionEndsAt = sectionTop + sectionHeight;

    //vê se o final da seção passou a linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

    //limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

    const sectionId = section.getAttribute('id');

    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')

    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }

    console.log(sectionId);

}

function showNavOnScroll() {

    if (scrollY > 0) {
        document.getElementById('navigation').classList.add('scroll');
    }
    else {
        document.getElementById('navigation').classList.remove('scroll');
    }
}

function showBackTopScrollButton() {

    if (scrollY > 400) {
        document.getElementById('backTop').classList.add('show');
    }
    else {
        document.getElementById('backTop').classList.remove('show');
    }
}

function openMenu() {
    document.body.classList.add('expanded-menu');
}

function closeMenu() {
    document.body.classList.remove('expanded-menu');
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`#home, #home img, #home .statistics, #services, #services header, #services .card, #about, #about header, #about content`);