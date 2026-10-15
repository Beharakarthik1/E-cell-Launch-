/* AITAM E-CELL interactions — plain JavaScript, no framework required */
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      mobileNav.hidden = isOpen;
      toggle.setAttribute(
        "aria-label",
        isOpen ? "Open navigation menu" : "Close navigation menu",
      );
    });
    mobileNav.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => {
        mobileNav.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
      }),
    );
  }

  document.querySelectorAll(".about-card").forEach((card) => {
    const flip = () => card.classList.toggle("is-flipped");
    card.addEventListener("click", flip);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        flip();
      }
    });
  });

  const domains = [
    {
      title: "Corporate Relations and Outreach",
      tagline: "Expand beyond origin",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
      color: "var(--primary)",
      desc: "Building meaningful connections between innovators, industry leaders, and organizations to foster collaborations and create opportunities that turn ideas into impact.",
      role: "We connect innovators with the right people, build valuable partnerships, and create opportunities that turn ideas into impact.",
    },
    {
      title: "MEDIA",
      tagline: "Create Capture Inspire",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg>',
      color: "var(--secondary)",
      desc: "Capturing our moments, sharing our stories, and showcasing E-Cell activities.",
      role: "Our role is to capture special moments, create engaging content, share our journey on social media, and make every E-Cell event memorable.",
    },
    {
      title: "Innovation & Tech - Electronics",
      tagline: "Learn, Improve, Build",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
      color: "var(--accent)",
      desc: "Helping students with technically connecting them with experts in creating and innovating solutions for the real world problems we improve ourselves in the process.",
      role: "Help students technically in improving and learning by developing and build products.",
    },
    {
      title: "Innovation & Tech (Mechanical)",
      tagline: "Innovate engineer transform",
      icon: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924-1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z\"/></svg>",
      color: "var(--primary)",
      desc: "Transforming innovative ideas into impactful technologies for a smarter, sustainable future.",
      role: "We transform ideas into tangible solutions, empower others to build and innovate, and develop impactful technologies that shape a smarter, more sustainable future.",
    },
    {
      title: "Innovation & Tech - Software",
      tagline: "Build the Future, Be the Future",
      icon: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4\"/></svg>",
      color: "var(--secondary)",
      desc: "Developing technology-based solutions and transforming innovative ideas into practical products. It provides technical support, helps build prototype.",
      role: "Encourages creative problem-solving to turn ideas into reality.",
    },
    {
      title: "Events and PR",
      tagline: "Explore. Connect. Develop",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
      color: "var(--accent)",
      desc: "Creating impactful events and building powerful connections.",
      role: "We organize engaging events, build strong relationships, promote E-Cell activities, and create opportunities for students to connect, collaborate, and innovate.",
    },
    {
      title: "Web & Design",
      tagline: "Design, build and maintain",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>',
      color: "var(--primary)",
      desc: "Creating a digital platform to showcase ideas, share updates, and promote E-Cell initiatives.",
      role: "Design, build and maintain digital platforms.",
    },
    {
      title: "Curriculum Integration",
      tagline: "Academics meets innovation",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>',
      color: "var(--secondary)",
      desc: "Connecting classroom learning with entrepreneurship, innovation, and practical problem-solving so students can apply academic concepts to real-world challenges.",
      role: "We integrate entrepreneurial thinking and hands-on projects with academic learning, helping students connect curriculum concepts to industry needs, develop practical skills, and turn classroom knowledge into meaningful solutions.",
    },
  ];
  const carousel = document.querySelector(".domain-carousel");
  const scene = document.querySelector(".carousel-scene");
  const position = document.querySelector(".carousel-position");
  const prev = document.querySelector(".carousel-prev");
  const next = document.querySelector(".carousel-next");
  if (!carousel || !scene) return;

  let angle = 0;
  let activeIndex = 0;
  let flippedIndex = -1;
  let dragging = false;
  let didDrag = false;
  let suppressClick = false;
  let startX = 0;
  let startY = 0;
  let startAngle = 0;
  const radius = 350;
  const step = 360 / domains.length;
  const cells = [];

  domains.forEach((domain, index) => {
    const cell = document.createElement("article");
    cell.className = "carousel-cell";
    cell.dataset.index = String(index);
    cell.innerHTML = `
      <div class="domain-card-inner">
        <div class="domain-front">
          <div class="domain-icon" style="color:${domain.color}">${domain.icon}</div>
          <h3>${domain.title}</h3>
          <p class="domain-tagline" style="color:${domain.color}">${domain.tagline}</p>
        </div>
        <div class="domain-back">
          <h4>${domain.title}</h4>
          <span class="mini-label">Description</span><p>${domain.desc}</p>
          <span class="mini-label role-label">Our Role</span><p class="role-text">${domain.role}</p>
        </div>
      </div>`;
    cell.addEventListener("click", (event) => {
      if (suppressClick) {
        suppressClick = false;
        event.preventDefault();
        return;
      }
      if (index !== activeIndex) {
        activeIndex = index;
        angle = -index * step;
        flippedIndex = -1;
        render();
        return;
      }
      flippedIndex = flippedIndex === index ? -1 : index;
      render();
    });
    carousel.appendChild(cell);
    cells.push(cell);
  });

  function render() {
    carousel.style.transform = `translateZ(${-radius}px) rotateY(${angle}deg)`;
    const normalized = ((-angle % 360) + 360) % 360;
    activeIndex = Math.round(normalized / step) % domains.length;
    cells.forEach((cell, index) => {
      const cardAngle = index * step;
      let distance = Math.abs(normalized - cardAngle);
      if (distance > 180) distance = 360 - distance;
      const isFront = distance < step / 2;
      cell.style.transform = `rotateY(${cardAngle}deg) translateZ(${radius}px)`;
      cell.style.opacity = isFront ? "1" : ".3";
      cell.style.pointerEvents = isFront ? "auto" : "none";
      cell.classList.toggle("is-flipped", flippedIndex === index);
    });
    if (position)
      position.textContent = `${activeIndex + 1} / ${domains.length}`;
  }
  function rotate(direction) {
    angle += direction * step;
    flippedIndex = -1;
    render();
  }
  if (prev) prev.addEventListener("click", () => rotate(1));
  if (next) next.addEventListener("click", () => rotate(-1));

  scene.addEventListener("pointerdown", (event) => {
    dragging = false;
    didDrag = false;
    startX = event.clientX;
    startY = event.clientY;
    startAngle = angle;
  });
  scene.addEventListener("pointermove", (event) => {
    if (event.buttons !== 1) return;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
      dragging = true;
      didDrag = true;
    }
    if (dragging) {
      angle = startAngle + dx * 0.45;
      flippedIndex = -1;
      render();
    }
  });
  scene.addEventListener("pointerup", () => {
    if (didDrag) {
      angle = Math.round(angle / step) * step;
      render();
      suppressClick = true;
      setTimeout(() => {
        suppressClick = false;
      }, 120);
    }
    dragging = false;
  });
  scene.addEventListener("pointercancel", () => {
    dragging = false;
    didDrag = false;
  });
  render();
});
