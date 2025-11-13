// Destinations Data
const destinations = [
  {
    name: 'Marrakech',
    description: 'The Red City with vibrant souks and historic palaces',
    image: 'https://images.unsplash.com/photo-1592839710218-8c85bf4b53f6?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Fes',
    description: 'Ancient medina and spiritual heart of Morocco',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Chefchaouen',
    description: 'The Blue Pearl nestled in the Rif Mountains',
    image: 'https://images.unsplash.com/photo-1548783307-f63adc8f6e1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sahara Desert',
    description: 'Endless dunes and starlit nights in the desert',
    image: 'https://images.unsplash.com/photo-1548783223-dc03c0b8f6b4?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Casablanca',
    description: 'Modern metropolis with Art Deco architecture',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Atlas Mountains',
    description: 'Majestic peaks and traditional Berber villages',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
  },
];

// Tours Data
const tours = [
  {
    title: 'Sahara Desert Adventure',
    category: 'desert',
    price: '7,800 MAD',
    duration: '4 Days',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1548783223-dc03c0b8f6b4?auto=format&fit=crop&w=800&q=80',
    badge: 'Popular',
  },
  {
    title: 'Imperial Cities Tour',
    category: 'cities',
    price: '10,950 MAD',
    duration: '7 Days',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Atlas Mountains Trek',
    category: 'mountains',
    price: '5,200 MAD',
    duration: '3 Days',
    rating: '5.0',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    badge: 'New',
  },
  {
    title: 'Coastal Paradise',
    category: 'coast',
    price: '6,200 MAD',
    duration: '5 Days',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Marrakech Express',
    category: 'cities',
    price: '5,200 MAD',
    duration: '3 Days',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1592839710218-8c85bf4b53f6?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Desert & Mountains',
    category: 'desert',
    price: '11,900 MAD',
    duration: '8 Days',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Value',
  },
  {
    title: 'Blue City Discovery',
    category: 'cities',
    price: '4,500 MAD',
    duration: '2 Days',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Luxury Desert Camp',
    category: 'desert',
    price: '12,500 MAD',
    duration: '3 Days',
    rating: '5.0',
    image: 'https://images.unsplash.com/photo-1548783223-dc03c0b8f6b4?auto=format&fit=crop&w=800&q=80',
    badge: 'Luxury',
  },
  {
    title: 'Mountain Villages',
    category: 'mountains',
    price: '6,800 MAD',
    duration: '4 Days',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=800&q=80',
  },
];

// Testimonials Data
const testimonials = [
  {
    quote: 'An absolutely incredible experience! The desert camp was magical, and our guide made every moment special.',
    author: 'Sarah Johnson',
    location: 'United States',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote: 'The best trip of our lives! Morocco exceeded all expectations. The food, culture, and people were amazing.',
    author: 'Michael Chen',
    location: 'Canada',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote: 'From the Atlas Mountains to the Sahara, every day was a new adventure. Highly recommend!',
    author: 'Emma Williams',
    location: 'United Kingdom',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
  },
];

// Render Destinations
function renderDestinations() {
  const container = document.getElementById('destinationsGrid');
  if (!container) return;

  container.innerHTML = destinations
    .map(
      (dest) => `
    <div class="destination-card">
      <div class="destination-image">
        <img src="${dest.image}" alt="${dest.name}" loading="lazy" />
        <div class="destination-overlay"></div>
      </div>
      <div class="destination-info">
        <h3 class="destination-name">${dest.name}</h3>
        <p class="destination-description">${dest.description}</p>
        <a href="#" class="destination-link">
          Explore <span>→</span>
        </a>
      </div>
    </div>
  `,
    )
    .join('');
}

// Render Tours
function renderTours(filter = 'all') {
  const container = document.getElementById('toursGrid');
  if (!container) return;

  const filteredTours =
    filter === 'all'
      ? tours
      : tours.filter((tour) => tour.category === filter);

  container.innerHTML = filteredTours
    .map(
      (tour) => `
    <div class="tour-card">
      <div class="tour-image">
        <img src="${tour.image}" alt="${tour.title}" loading="lazy" />
        ${tour.badge ? `<div class="tour-badge">${tour.badge}</div>` : ''}
      </div>
      <div class="tour-content">
        <div class="tour-category">${tour.category}</div>
        <h3 class="tour-title">${tour.title}</h3>
        <div class="tour-meta">
          <span>⭐ ${tour.rating}</span>
          <span>⏱️ ${tour.duration}</span>
        </div>
        <div class="tour-price">${tour.price}</div>
        <button class="tour-btn">Book Now</button>
      </div>
    </div>
  `,
    )
    .join('');
}

// Render Testimonials
function renderTestimonials() {
  const container = document.getElementById('testimonialsSlider');
  if (!container) return;

  container.innerHTML = testimonials
    .map(
      (testimonial) => `
    <div class="testimonial-card">
      <p class="testimonial-quote">"${testimonial.quote}"</p>
      <div class="testimonial-author">
        <img src="${testimonial.avatar}" alt="${testimonial.author}" class="testimonial-avatar" />
        <div class="testimonial-info">
          <h4>${testimonial.author}</h4>
          <p>${testimonial.location}</p>
        </div>
      </div>
    </div>
  `,
    )
    .join('');
}

// Hero Slideshow
function initHeroSlideshow() {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 5000);
}

// Animate Stats
function animateStats() {
  const stats = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-target'));
          animateValue(entry.target, 0, target, 2000);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  stats.forEach((stat) => observer.observe(stat));
}

function animateValue(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    element.textContent = value.toLocaleString();
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.textContent = end.toLocaleString();
    }
  };
  window.requestAnimationFrame(step);
}

// Scroll Animations
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
  );

  document.querySelectorAll('.destination-card, .tour-card, .testimonial-card').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
}

// Navbar Scroll Effect
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });
}

// Active Nav Link
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#home') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          });
        }
      }
    });
  });
}

// Mobile Menu
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuBtn.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuBtn.classList.remove('active');
      });
    });
  }
}

// Tour Filter
function initTourFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderTours(filter);
      setTimeout(initScrollAnimations, 100);
    });
  });
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
  renderDestinations();
  renderTours();
  renderTestimonials();
  initHeroSlideshow();
  animateStats();
  initScrollAnimations();
  initNavbarScroll();
  initActiveNav();
  initSmoothScroll();
  initMobileMenu();
  initTourFilter();

  // Tour card buttons
  document.addEventListener('click', (e) => {
    if (e.target.closest('.tour-btn')) {
      const card = e.target.closest('.tour-card');
      const title = card.querySelector('.tour-title').textContent;
      alert(`Booking: ${title}\n\nThis would open a booking form.`);
    }
  });

  // CTA buttons
  document.querySelectorAll('.btn-primary, .btn-outline').forEach((btn) => {
    if (btn.textContent.includes('Get Started') || btn.textContent.includes('Contact')) {
      btn.addEventListener('click', () => {
        alert('This would open a contact/booking form.');
      });
    }
  });
});
