    const navButtons = document.querySelectorAll('nav button');
    const sections = document.querySelectorAll('main section');

    function deactivateAll() {
      navButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      sections.forEach(sec => {
        sec.classList.remove('active');
        sec.setAttribute('hidden', '');
      });
    }

    function activateTab(targetId, button) {
      deactivateAll();
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
      const targetSection = document.getElementById(targetId);
      targetSection.classList.add('active');
      targetSection.removeAttribute('hidden');
      targetSection.focus();
    }

    navButtons.forEach(button => {
      button.addEventListener('click', () => {
        activateTab(button.dataset.target, button);
      });
      button.addEventListener('keydown', (e) => {
        let index = Array.from(navButtons).indexOf(e.target);
        if(e.key === 'ArrowRight') {
          index = (index + 1) % navButtons.length;
          navButtons[index].focus();
        } else if(e.key === 'ArrowLeft') {
          index = (index - 1 + navButtons.length) % navButtons.length;
          navButtons[index].focus();
        }
      });
    });

    // Initialize ARIA hidden attributes according to active section
    sections.forEach(section => {
      if (!section.classList.contains('active')) {
        section.setAttribute('hidden', '');
      }
    })