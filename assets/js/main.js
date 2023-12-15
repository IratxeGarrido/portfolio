/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* Menu Show */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/* Menu Hide */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const scrollHeader = () => {
  const header =  document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('shadow-header')
                      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()

  // serviceID - templateID - #form - publicKey
  emailjs.sendForm('service_3foc2ym','template_slznptu','#contact-form','Eu0Au_gmY0AuzfxWx')
  .then(() => {
    // Show sent message
    contactMessage.textContent = 'Message sent successfully 🎉'

    // Remove message after 5s
    setTimeout(() => {
      contactMessage.textContent = ''
    }, 5000);

    // Clear input fields
    contactForm.reset()
  }, () => {
    // Show error message
    contactMessage.textContent = 'Message not sent (service error) ❌'
  })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
