const slideContainer = document.getElementById('slideContainer');
const slides = slideContainer.querySelectorAll('img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const totalSlides = slides.length / 2;
let currentIndex = 0;
let interval;

function goToSlide(index) {
  slideContainer.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

function nextSlide() {
  const newIndex = (currentIndex + 1) % totalSlides;
  goToSlide(newIndex);
}

function prevSlide() {
  const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  goToSlide(newIndex);
}

function startAutoSlide() {
  interval = setInterval(nextSlide, 10000);
}

function stopAutoSlide() {
  clearInterval(interval);
}

// Event listeners
nextBtn.addEventListener('click', () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide();
});

prevBtn.addEventListener('click', () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide();
});

const carouselMobile = document.getElementById('mobileCaroselContainer');

if(carouselMobile.style.display == 'none')
{
  // Start autoplay
  startAutoSlide();
}



const translations = {
  bg: {
    "register": "Регистрирай се",
    "title-one": "Развий потенциала си. Открий нова перспектива.",
    "text-one": "<strong>Elevate</strong> е вътрешната менторска програма на Publicis Groupe Bulgaria — създадена за хора с хъс, които искат не просто да вървят напред, а да го правят с ясна посока и смисъл. Това не е още една програма за развитие, а пространство за идеи, обмяна на опит и вдъхновение, където опитни лидери и нови таланти се срещат, за да градят заедно бъдещето на креативността, стратегията и лидерството.",
    "title-two": "Защо да се включиш?",
    "text-two": "<ul><li><strong>Ще работиш рамо до рамо с вдъхновяващи ментори:</strong> От Publicis и отвъд. Хора с визия, които ще ти помогнат да откриеш твоята</li><li><strong>Гъвкав формат:</strong> Програмата включва 5 индивидуални срещи в рамките на 4 месеца, изцяло съобразени с твоите цели и амбиции</li><li><strong>Тук няма общи съвети:</strong> Ще получиш насока, която ти носи реална стойност и развитие със смисъл</li><li><strong>Местата са ограничени:</strong> Само 12 участници ще станат част от програмата</li></ul>",
    "title-three": "Запознай се с менторите",
    "text-three": "Избрахме ментори, които познават пътя ни отвътре – професионалисти, които и днес вървят рамо до рамо с нас и са били до нас в ключови моменти през годините. Общото между всички е вярата им в силата на споделения опит – с уважение, човечност и стремеж към развитие.",
    "title-four": "Как протича програмата?",
    "text-four": "<ol><li><strong>Кандидатствай до 17 август -</strong> Изпращаш мотивацията си. Ние търсим смелите, търсещите и любопитните</li><li><strong>Свързваме те с правилния ментор -</strong> Селектираме всяка двойка така, че да има истинска химия между вашите цели и посоки</li><li><strong>Официален старт –</strong> На откриващата среща залагаме основите и планираме хода на програмата.</li><li><strong>Менторство в действие –</strong> Очакват те 5 персонални сесии за 4 месеца – фокусирани, адаптирани към теб, с реална стойност и обратна връзка</li><li><strong>Заключителна среща –</strong> На последната среща обсъждаме резултатите и планираме бъдещето</li></ol>",
    "text-five": "Означава учене от реалния свят, менторство от лидери в индустрията и подготовка на лидери. Но този път – вътрешно. Създадено от и за хората на Publicis Groupe Bulgaria.",
    "sports-message": "Само 12 свободни места!",
  },
  en: {
    "register": "Register",
    "title-one": "Unlock your potential. Discover a new perspective.",
    "text-one": "<strong>Elevate</strong> is the internal mentoring program of Publicis Groupe Bulgaria — designed for ambitious individuals who not only want to move forward but want to do it with clear direction and purpose. This is not just another development program, but a space for ideas, shared experience, and inspiration, where experienced leaders and new talents meet to shape the future of creativity, strategy, and leadership together.",
    "title-two": "Why join?",
    "text-two": "<ul><li><strong>You'll work side by side with inspiring mentors:</strong> From Publicis and beyond. People with vision who will help you discover yours.</li><li><strong>Flexible format:</strong> The program includes 5 individual sessions over 4 months, fully aligned with your goals and ambitions.</li><li><strong>No generic advice here:</strong> You will receive guidance that brings real value and meaningful development.</li><li><strong>Limited spots:</strong> Only 12 participants will join the program.</li></ul>",
    "title-three": "Meet the Mentors",
    "text-three": "We’ve selected mentors who know our journey from within — professionals who still walk alongside us and have been there for us during key moments over the years. What unites them is their belief in the power of shared experience — with respect, humanity, and a desire for continuous growth.",
    "title-four": "How does the program work?",
    "text-four": "<ol><li><strong>Apply by August 17 –</strong> Send us your motivation. We are looking for the bold, curious, and eager to grow.</li><li><strong>We match you with the right mentor –</strong> We carefully select each pair to ensure a real connection between your goals and directions.</li><li><strong>Official start –</strong> At the kick-off meeting, we lay the foundations and plan the program journey.</li><li><strong>Mentorship in action –</strong> You'll have 5 personal sessions over 4 months — focused, tailored to you, with real value and feedback.</li><li><strong>Closing meeting –</strong> In the final session, we’ll discuss the results and plan for the future.</li></ol>",
    "text-five": "It means learning from the real world, mentorship from industry leaders, and developing future leaders. But this time — from within. Created by and for the people of Publicis Groupe Bulgaria.",
    "sports-message": "Only 12 spots available!"
  }
};

function setLanguage(lang)
{
  const elements = document.querySelectorAll('[data-key]');
  elements.forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang');
  if (savedLang) {
    setLanguage(savedLang);
  }
});
//Mobile Slider
function getScrollContainer() {
  return window.innerWidth <= 600 ? 
      document.querySelector('.carousel') : 
      document.getElementById('mobileCarouselContainer');
}

function getSlides() {
  return window.innerWidth <= 600 ? 
      document.querySelectorAll('.carousel-mobile .carousel-item') : 
      document.querySelectorAll('.carousel-item');
}

const dots = document.querySelectorAll('.nav-mobile button');
let isScrolling = false;

function setActiveDot(index) {
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
}

function getCurrentSlideIndex() {
  const carousel = getScrollContainer();
  const slides = getSlides();
  if (!carousel || !slides.length) return 0;
  
  const scrollLeft = carousel.scrollLeft;
  const slideWidth = slides[0].offsetWidth;
  return Math.round(scrollLeft / slideWidth);
}

function setupCarousel() {
  const carousel = getScrollContainer();
  const slides = getSlides();
  
  if (!carousel || !slides.length) return;

  // Dot click navigation
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          const slideWidth = slides[0].offsetWidth;
          carousel.scrollTo({
              left: slideWidth * index,
              behavior: 'smooth'
          });
      });
  });

  // Initialize
  setActiveDot(0);

  // Throttle scroll events for better performance
  function throttle(func, wait) {
      let timeout;
      return function executedFunction(...args) {
          const later = () => {
              clearTimeout(timeout);
              func(...args);
          };
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
      };
  }

  // Update dot on scroll/swipe with throttling
  const handleScroll = throttle(() => {
      if (!isScrolling) {
          const currentIndex = getCurrentSlideIndex();
          setActiveDot(currentIndex);
      }
  }, 100);

  carousel.addEventListener('scroll', handleScroll);

  // Handle smooth scrolling state
  carousel.addEventListener('scrollstart', () => {
      isScrolling = true;
  });

  carousel.addEventListener('scrollend', () => {
      isScrolling = false;
      const currentIndex = getCurrentSlideIndex();
      setActiveDot(currentIndex);
  });

  // Fallback for browsers that don't support scrollend
  let scrollTimeout;
  carousel.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
          isScrolling = false;
          const currentIndex = getCurrentSlideIndex();
          setActiveDot(currentIndex);
      }, 150);
  });
}

// Initialize carousel
setupCarousel();

// Reinitialize on window resize to handle responsive changes
window.addEventListener('resize', () => {
  setTimeout(setupCarousel, 100);
});