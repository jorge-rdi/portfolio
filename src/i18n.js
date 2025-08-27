import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      name: 'Jorge Rodriguez',
      projects: 'Projects',
      skills: 'Skills',
      translate: 'Translate',
      theme: 'Toggle theme',
      greeting: "Hi I'm",
      description: "A passionate full-stack developer crafting beautiful and functional web experiences. I love turning ideas into reality through clean code and thoughtful design.",
      download: 'Download CV',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      // New translations
      skillsTitle: 'Skills & Technologies',
      contactTitle: 'Get In Touch',
      contactSubtitle: "Have a project in mind? Let's work together to bring your ideas to life.",
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      sendMessage: 'Send Message',
      messagePlaceholder: 'Your Message',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      projectsTitle: 'Featured Projects',
      liveDemo: 'Live',
      viewCode: 'Code'
    }
  },
  es: {
    translation: {
      name: 'Jorge Rodriguez',
      projects: 'Proyectos',
      skills: 'Habilidades',
      translate: 'Traducir',
      theme: 'Cambiar tema',
      greeting: 'Hola soy',
      description: "Un desarrollador full-stack apasionado creando experiencias web hermosas y funcionales. Me encanta convertir ideas en realidad a través de código limpio y diseño cuidadoso.",
      download: 'Descargar CV',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      // New translations
      skillsTitle: 'Habilidades y Tecnologías',
      contactTitle: 'Contáctame',
      contactSubtitle: '¿Tienes un proyecto en mente? Trabajemos juntos para darle vida a tus ideas.',
      email: 'Correo',
      phone: 'Teléfono',
      location: 'Ubicación',
      sendMessage: 'Enviar Mensaje',
      messagePlaceholder: 'Tu Mensaje',
      namePlaceholder: '  Tu Nombre',
      emailPlaceholder: 'Tu Correo',
      projectsTitle: 'Proyectos Destacados',
      liveDemo: 'Demo',
      viewCode: 'Código'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
