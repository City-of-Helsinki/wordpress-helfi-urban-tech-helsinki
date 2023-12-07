var initAccordions = (function () {
  const accordions = document.querySelectorAll('.accordion-button')

  accordions.forEach(function(accordion) {
    accordion.addEventListener('click', (event) => {
      const currentHeader = event.target
      const panelId = currentHeader.dataset.target
      const currentPanel = document.querySelector(panelId)
      const isActive = currentHeader.classList.contains('active')

      accordions.forEach(function(accordion) {
        const header = accordion
        const panelId = header.dataset.target
        const content = document.querySelector(panelId)
        header.classList.remove('active')
        content.classList.add('collapse')
        header.setAttribute('aria-expanded', false)
        content.setAttribute('aria-hidden', true)
      });

      if (!isActive) {
        currentHeader.classList.add('active')
        currentHeader.setAttribute('aria-expanded', true)
        currentPanel.classList.remove('collapse')
        currentPanel.setAttribute('aria-hidden', false)
      } else {
        currentHeader.classList.remove('active')
        currentHeader.setAttribute('aria-expanded', false)
        currentPanel.classList.add('collapse')
        currentPanel.setAttribute('aria-hidden', true)
      }
    })
  })
});

document.addEventListener("DOMContentLoaded", function() {
  initAccordions()
});
