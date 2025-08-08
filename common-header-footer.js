// Injects the common header and footer into the page
function injectHeaderFooter(headerId, footerId) {
  // Header HTML (copied exactly from index.html)
  const headerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
      /* Responsive header and navbar styles */
      .abm-header {
        width: 100%;
        background: transparent;
        padding: 1.5em 0 0 0;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      }
      .abm-navbar {
          position: sticky;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          background: #001c38 !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          width: 100%;
          overflow-x: auto;
      }
      @media (min-width: 701px) {
          .abm-navbar {
            background: #001c38 !important;
        }
      }
      .abm-navbar-links {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        gap: 1em;
        transition: max-height 0.3s ease;
        background: #001c38 !important;
      }
      .abm-navbar-hamburger {
        display: none !important;
      }
      @media (max-width: 700px) {
        .abm-navbar-quicknav {
          display: block;
          width: 100vw;
          background: #001c38ff;
          color: #fff;
          border: none;
          font-size: 1.1em;
          padding: 0.7em 1em;
          margin-bottom: 0.5em;
        }
        .abm-header {
          flex-direction: column;
          align-items: center;
        }
        .abm-navbar {
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          width: 100vw;
          overflow-x: auto;
        }
        .abm-navbar-links {
          display: flex !important;
          flex-wrap: wrap;
          flex-direction: row;
          gap: 0.5em;
          width: 100vw;
          max-height: none !important;
          overflow: visible !important;
          background: #001c38ff;
          justify-content: flex-start;
        }
        .abm-navbar a {
          min-width: 120px;
          flex: 1 1 120px;
          box-sizing: border-box;
          margin-bottom: 0.5em;
        }
      }
      body {
        overflow-x: hidden;
      }
    </style>
    <div>
      <header class="abm-header">
        <div style="display: flex; align-items: center; justify-content: center; gap: 1em; flex-wrap: wrap;">
          <img src="Images/ABMENGG LOGO 092025.jpg" alt="ABM Logo" style="height: 150px; width: 300px; object-fit: cover; object-position: center; clip-path: inset(2% 0); border-radius: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.07);" />
          <div style="display: flex; flex-direction: column; justify-content: center;">
            <h1 style="margin: 0; line-height: 1.0; color: #ffffff; font-size: 3.5em;">ABM</h1>
            <h2 style="margin: 0; line-height: 1.0; font-size: 1.5em; color: #ffffff;">ENGINEERING GROUP</h2>
            <p style="margin: 0.2em 0 0 0; line-height: 1.0; font-size: 1.0em; color: #6b9ac0ff; opacity: 0.9; font-family: 'Times New Roman', Times, serif; font-weight: bold;">Since 2021</p>
          </div>
        </div>
        <div class="tagline" style="margin-top:0.5em;"><span class="tagline-text">|| Building the Future, Restoring the Past ||</span></div>
      </header>
    <nav class="abm-navbar" style="display: flex; align-items: center; flex-direction: row; justify-content: flex-start; flex-wrap: wrap;">
  <!-- Removed abm-navbar-current-page span to eliminate black 'Home' text above navbar -->
  <!-- Quick navigation buttons removed as requested -->
      <div class="abm-navbar-links">
        <a href="index.html" id="nav-home" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'">Home</a>
        <a href="about.html" id="nav-about" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'">About Us</a>
        <a href="services.html" id="nav-services" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'">Services</a>
        <a href="gallery.html" id="nav-gallery" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'">Gallery</a>
        <a href="projects.html" id="nav-projects" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'">Project Works</a>
        <a href="milestone.html" id="nav-milestone" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'">Milestone</a>
        <a href="contact.html" id="nav-contact" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'">Contact</a>
      </div>
    </nav>
    </div>
  <!-- Script moved outside injected HTML for reliable execution -->
  `;
  // Run navbar and current page label logic after header is inserted
  setTimeout(function () {
    function updateCurrentPageLabelAndNav() {
      console.log('[ABM] updateCurrentPageLabelAndNav running');
      var currentPage = window.location.pathname.split('/').pop() || 'index.html';
      var pageMap = {
        'index.html': 'Home',
        'about.html': 'About Us',
        'services.html': 'Services',
        'gallery.html': 'Gallery',
        'projects.html': 'Project Works',
        'milestone.html': 'Milestone',
        'contact.html': 'Contact Us'
      };
      var label = pageMap[currentPage] || '';
      var el = document.querySelector('.abm-navbar-current-page');
      if (el) {
        if (window.innerWidth <= 700 && label) {
          el.textContent = label;
          el.style.display = 'block';
          console.log('[ABM] Set current page name:', label);
        } else {
          el.textContent = '';
          el.style.display = 'none';
          console.log('[ABM] Hide current page name');
        }
      } else {
        console.warn('[ABM] .abm-navbar-current-page element not found');
      }
      // Highlight nav link
      var navLinks = document.querySelectorAll('nav .abm-navbar-links a');
      navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
          link.classList.add('active');
          link.style.backgroundColor = '#004d99';
        } else {
          link.classList.remove('active');
          link.style.backgroundColor = 'transparent';
        }
      });
    }
    window.addEventListener('resize', updateCurrentPageLabelAndNav);
    updateCurrentPageLabelAndNav();
    // Hamburger menu toggle for mobile
    function setupHamburger() {
      const hamburger = document.querySelector('.abm-navbar-hamburger');
      const links = document.querySelector('.abm-navbar-links');
      const currentPageLabel = document.querySelector('.abm-navbar-current-page');
      if (!hamburger || !links) return;
      hamburger.addEventListener('click', function () {
        links.classList.toggle('open');
        if (window.innerWidth <= 700 && currentPageLabel) {
          if (links.classList.contains('open')) {
            currentPageLabel.style.display = 'none';
          } else {
            currentPageLabel.style.display = 'block';
          }
        }
      });
      // Close menu when clicking outside (mobile only)
      document.addEventListener('click', function (e) {
        if (window.innerWidth > 700) return;
        if (!links.classList.contains('open')) return;
        if (!links.contains(e.target) && !hamburger.contains(e.target)) {
          links.classList.remove('open');
          if (currentPageLabel) currentPageLabel.style.display = 'block';
        }
      });
    }
    setupHamburger();
  }, 150);
  // Footer HTML (copied exactly from index.html)
  const footerHTML = `
    <footer class="about" style="margin-top:3em; width:100vw; margin-left:calc(-50vw + 50%); margin-right:calc(-50vw + 50%); background:#000000; padding:2em 0; border-radius:0; box-shadow:0 2px 8px rgba(0,0,0,0.07); color:#948787;">
      <h3 style="margin-bottom: 0.3em;">About Us</h3>
      <p style="margin-top: 0.1em; margin-bottom: 1.2em;">
        ABM Engineering Group is a leading construction company<br> specializing in residential, commercial, and industrial projects.<br> 
        We deliver quality, safety, and innovation in every build.
      </p>
      <h3 style="margin-bottom: 0.3em;">Contact</h3>
      <p style="margin-top: 0.1em;">
        ABM Engineering Group<br>
        Reg. No.: UDYAM-TS-09-0106608<br>
        Email: vishwakarmaabmgroups@gmail.com<br>
        Phone: +91 8074395382, +91 8121333023<br>
        <a href="https://wa.me/c/918074395383" target="_blank" style="color: #25D366; text-decoration: underline; font-weight: bold;">View Catalogue</a>
      </p>
  <!-- Removed duplicate visit count div above social icons -->
      <style>
        .abm-social-flat {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          margin: 0 5px;
          font-size: 1.3em;
          background: var(--abm-social-bg, #222);
          transition: background 0.2s, transform 0.2s;
        }
        .abm-social-flat:hover {
          background: var(--abm-social-hover, #444);
          transform: scale(1.12);
        }
        .abm-social-flat.instagram { --abm-social-bg: #e4405f; --abm-social-hover: #c13584; }
        .abm-social-flat.whatsapp { --abm-social-bg: #25d366; --abm-social-hover: #128c7e; }
        .abm-social-flat.linkedin { --abm-social-bg: #0077b5; --abm-social-hover: #005983; }
        .abm-social-flat.facebook { --abm-social-bg: #3b5998; --abm-social-hover: #2d4373; }
      </style>
  <div style="margin: 1.5em 0 0 0; text-align: center;">
        <span style="font-size: 1.1em; color: #fff; margin-right: 0.7em;">Connect with us:</span>
  <a href="https://www.instagram.com/abm_surveyors/#" target="_blank" class="abm-social-flat instagram" title="ABM Surveyors Instagram"><i class="fab fa-instagram"></i></a>
  <a href="https://www.instagram.com/abm_architects_and_engineers/" target="_blank" class="abm-social-flat instagram" title="ABM Architects & Engineers Instagram"><i class="fab fa-instagram"></i></a>
  <a href="https://www.instagram.com/structural_engineering_india/#" target="_blank" class="abm-social-flat instagram" title="ABM Education Instagram"><i class="fab fa-instagram"></i></a>
  <a href="https://wa.me/c/918074395383" target="_blank" class="abm-social-flat whatsapp" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
  <a href="https://in.linkedin.com/company/abm-groups" target="_blank" class="abm-social-flat linkedin" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://www.facebook.com/vishwakarmaabmgroups/" target="_blank" class="abm-social-flat facebook" title="Facebook"><i class="fab fa-facebook-f"></i></a>
  <div id="abm-visit-count" style="font-size:0.95em; color:#b2b2b2; margin-top:0.5em;"></div>
      </div>
    </footer>
  `;
  // Insert header and footer into specified placeholders
  if (headerId && document.getElementById(headerId)) {
    document.getElementById(headerId).innerHTML = headerHTML;
    // Show quicknav dropdown only on mobile
  // Quick navigation buttons removed as requested
  }
  if (footerId && document.getElementById(footerId)) {
    document.getElementById(footerId).innerHTML = footerHTML;
    // Website visit count logic
    try {
      var count = localStorage.getItem('abmVisitCount');
      count = count ? parseInt(count) + 1 : 1;
      localStorage.setItem('abmVisitCount', count);
      var countDiv = document.getElementById('abm-visit-count');
  if (countDiv) countDiv.textContent = `Website visits: ${count}`;
    } catch(e) {}
  }
}
