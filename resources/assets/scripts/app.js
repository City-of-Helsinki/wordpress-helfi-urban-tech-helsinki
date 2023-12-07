import debounce from 'lodash-es/debounce';

setAppHeight()
window.addEventListener('resize', debounce(setAppHeight, 150));

addToggleListener(document.querySelector('.site-hamburger-button'))

const submenuTriggers = document.querySelectorAll('.site-navigation__submenu-trigger');
for (let i = 0; i < submenuTriggers.length; i++) {
  const trigger = submenuTriggers[i];
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const item = e.target.closest('[aria-haspopup]');
    toggle(item);
  })
}

if (document.querySelector('.site-navigation')) {
  menu(document.querySelector('.site-navigation'));
}

function setAppHeight () {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}

function addToggleListener (el) {
  if (!el) {
    console.warn('Trying to add toggle listener to element that does not exist')
    return
  }
  el.addEventListener('click', () => requestAnimationFrame(() => toggleAriaExpanded(el)))
}

function toggleAriaExpanded (el) {
  const isExpanded = el.getAttribute('aria-expanded') === 'true'
  el.setAttribute('aria-expanded', !isExpanded)

  const controlsStr = el.getAttribute('aria-controls')
  if (controlsStr) {
    controlsStr.split(' ').forEach((selector => {
      const el = document.getElementById(selector)
      if (el) {
        el.classList[isExpanded ? 'remove' : 'add']('is-expanded')
      }
    }))
  }
}

function toggle(el) {
  const isExpanded = el.getAttribute('aria-expanded') === 'true';
  if (isExpanded) {
    close(el);
  } else {
    open(el);
  }

  const controls = el.getAttribute('aria-controls');
  if (controls) {
    controls.split(' ').forEach((selector) => {
      const el  = document.getElementById(selector);
      if (isExpanded) {
        el.classList.remove('is-active');
      }
      else {
        el.classList.add('is-active');
      }
    });
  }

  function open(el) {
    el.setAttribute('aria-expanded', true);
  }

  function close(el) {
    el.setAttribute('aria-expanded', false);
  }
}

function openItem (itemEl) {
  if (!itemEl) return
  const controlEl = itemEl.querySelector('[aria-haspopup="true"]')
  const controlsEl = controlEl && controlEl.getAttribute('aria-controls')
    ? document.getElementById(controlEl.getAttribute('aria-controls'))
    : undefined
  if (controlEl) {
    controlEl.setAttribute('aria-expanded', true);
  }
  if (controlsEl) {
    controlsEl.classList.add('is-active')
  }
}

function closeItem (itemEl) {
  if (!itemEl) return
  const controlEl = itemEl.querySelector('[aria-haspopup="true"]')
  const controlsEl = controlEl && controlEl.getAttribute('aria-controls')
    ? document.getElementById(controlEl.getAttribute('aria-controls'))
    : undefined
  if (controlEl) {
    controlEl.setAttribute('aria-expanded', false);
  }
  if (controlsEl) {
    controlsEl.classList.remove('is-active')
  }
}

export function menu(menu) {
  const itemsWithSubmenu = menu.querySelectorAll('.has-children')

  for (let i = 0; i < itemsWithSubmenu.length; i++) {
    const itemWithSubmenu = itemsWithSubmenu[i]

    itemWithSubmenu.addEventListener('mouseover', () => requestAnimationFrame(() => {
      if (!matchMedia('(min-width: 1024px)').matches) return
      // Close other submenus
      Array.from(itemsWithSubmenu).forEach(closeItem)
      openItem(itemWithSubmenu)
    }))

    itemWithSubmenu.addEventListener('mouseout', () => requestAnimationFrame(() => {
      if (!matchMedia('(min-width: 1024px)').matches) return
      closeItem(itemWithSubmenu)
    }))
  }
}
