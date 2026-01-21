// Injects the common header and footer into the page
function injectHeaderFooter(headerId, footerId) {
  // Header HTML (copied exactly from index.html)
  const headerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
      /* Responsive header and navbar styles */
      .language-bar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #001c38;
        padding: 8px 0;
        text-align: center;
        z-index: 1001;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      .abm-header {
        width: 100%;
        background: transparent;
        padding: 1.5em 0 0 0;
        margin-top: 2em;
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
      .abm-navbar a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        padding: 0.5em 1em;
        border-radius: 4px;
        transition: all 0.3s ease;
      }
      .abm-navbar a i {
        color: #4fc3f7;
        margin-right: 6px;
        transition: color 0.3s ease;
      }
      .abm-navbar a:hover i {
        color: #81d4fa;
      }
      .abm-navbar a.active i {
        color: #29b6f6;
      }
      @media (min-width: 701px) {
          .abm-navbar {
            background: #001c38 !important;
        }
      }
      .abm-navbar-links {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2em;
        transition: max-height 0.3s ease;
        background: #001c38 !important;
        padding: 0 20px;
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
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
          max-width: 100vw;
          overflow-x: hidden;
        }
        .abm-navbar-links {
          display: flex !important;
          flex-wrap: wrap;
          flex-direction: row;
          gap: 0.3em;
          width: 100vw;
          max-height: none !important;
          overflow: visible !important;
          background: #001c38ff;
          justify-content: flex-start;
        }
        .abm-navbar a {
          min-width: 100px;
          flex: 1 1 100px;
          box-sizing: border-box;
          margin-bottom: 0.2em;
          font-size: 0.95em;
          padding: 0.35em 0.7em;
        }
      }
      body {
        overflow-x: hidden;
      }
      /* Contact Popup Styles */
      #contact-popup {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1100;
        font-family: Arial, sans-serif;
      }
      #popup-minimized {
        background: #004d99ff;
        color: white;
        padding: 12px 24px;
        border-radius: 50px;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 10px;
        transition: transform 0.3s ease;
      }
      #popup-minimized:hover {
        transform: scale(1.05);
      }
      #popup-expanded {
        display: none;
        background: white;
        width: 300px;
        border-radius: 10px;
        box-shadow: 0 2px 15px rgba(0,0,0,0.2);
      }
      .contact-popup-header {
        background: #004d99;
        color: white;
        padding: 15px;
        border-radius: 10px 10px 0 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .contact-popup-content {
        padding: 15px;
      }
      .contact-popup-link {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #333;
        text-decoration: none;
        padding: 8px;
        border-radius: 5px;
        margin-bottom: 10px;
        transition: background 0.3s;
      }
      .contact-popup-link:hover {
        background: #f0f0f0;
      }
    </style>
    <div>
      <header class="abm-header" style="position:relative;">
  <div style="position:absolute; top:-18px; right:20px; z-index:1100; display:flex; align-items:center; gap:8px;">
          <span style="font-size:0.85em; color:#fff; background:#001c38; padding:2px 8px; border-radius:6px; margin-right:6px;">Choose Language:</span>
          <span id="abm-lang-en" style="font-size:0.85em; color:#fff; background:#1976d2; padding:2px 8px; border-radius:6px; cursor:pointer;">English</span>
          <span id="abm-lang-te" style="font-size:0.85em; color:#fff; background:#1976d2; padding:2px 8px; border-radius:6px; cursor:pointer;">తెలుగు</span>
          <span id="abm-lang-hi" style="font-size:0.85em; color:#fff; background:#1976d2; padding:2px 8px; border-radius:6px; cursor:pointer;">हिन्दी</span>
        </div>
        <div style="display: flex; align-items: center; justify-content: center; gap: 0.3em; flex-wrap: wrap; flex-direction: column;">
          <img src="Images/ABMENGG LOGO 092025.jpg" alt="ABM Logo" style="height: 150px; width: 300px; object-fit: cover; object-position: center; clip-path: inset(2% 0); border-radius: 30px; box-shadow: 0 2px 8px rgba(0,0,0,0.07);" />
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; margin-top: -0.3em;">
            <p style="margin: 0; line-height: 1.0; font-size: 1.1em; color: #e0e0e0ff; opacity: 0.9; font-family: 'Times New Roman', Times, serif; font-weight: bold;">Since 2021</p>
          </div>
        </div>
        <div class="tagline" style="margin-top:0.5em;"><span class="tagline-text">|| Building the Future, Restoring the Past ||</span></div>
      </header>
  </div>
    <nav class="abm-navbar" style="display: flex; align-items: center; flex-direction: row; justify-content: flex-start; flex-wrap: wrap;">
  <!-- Removed abm-navbar-current-page span to eliminate black 'Home' text above navbar -->
  <!-- Quick navigation buttons removed as requested -->
      <div class="abm-navbar-links">
        <a href="index.html" id="nav-home" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'"><i class="fas fa-home"></i> Home</a>
        <a href="about.html" id="nav-about" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'"><i class="fas fa-info-circle"></i> About Us</a>
        <a href="services.html" id="nav-services" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'"><i class="fas fa-hard-hat"></i> Services</a>
        <a href="milestone.html" id="nav-milestone" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'"><i class="fas fa-flag-checkered"></i> Milestones</a>
        <a href="gallery.html" id="nav-gallery" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'"><i class="fas fa-images"></i> Gallery</a>
        <a href="updates.html" id="nav-updates" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'"><i class="fas fa-bullhorn"></i> Updates</a>
        <a href="career.html" id="nav-career" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'"><i class="fas fa-briefcase"></i> Career</a>
        <a href="contact.html" id="nav-contact" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'"><i class="fas fa-envelope"></i> Contact</a>
      </div>
    </nav>
    </div>
  <!-- Script moved outside injected HTML for reliable execution -->
  `;
  // Google Translate logic for language selection
  setTimeout(function () {
    // Make English, Telugu, Hindi options functional
    var langMap = {
      'abm-lang-en': 'en',
      'abm-lang-te': 'te',
      'abm-lang-hi': 'hi'
    };
    Object.keys(langMap).forEach(function(id) {
      var el = document.getElementById(id);
      if (el) {
        el.addEventListener('click', function() {
          var lang = langMap[id];
          var gtUrl = 'https://translate.google.com/translate?hl=' + lang + '&sl=auto&tl=' + lang + '&u=' + encodeURIComponent(window.location.href);
          window.open(gtUrl, '_blank');
        });
      }
    });
  function updateCurrentPageLabelAndNav() {
      console.log('[ABM] updateCurrentPageLabelAndNav running');
      var currentPage = window.location.pathname.split('/').pop() || 'index.html';
      var pageMap = {
        'index.html': 'Home',
        'about.html': 'About Us',
        'services.html': 'Services',
        'gallery.html': 'Gallery',
        'projects.html': 'Project Works',
        'updates.html': 'Updates',
        'milestone.html': 'Milestone',
        'career.html': 'Career',
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
      <h3 style="margin-bottom: 0.3em;">Vishwakarma ABM Engineering Group</h3>
            <p style="margin-top: 0.0em;">
      <br>
        Reg. No.: UDYAM-TS-09-0106608<br>  
        Email: vishwakarmaabmgroups@gmail.com<br>
        Phone: +91 8074395383, +91 8121333023<br>
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
          <div style="font-size:0.85em; color:#b2b2b2; background:#fff; max-width:1200px; margin:1em auto 0 auto; text-align:left; padding:0.2em 2em; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
            <span style='display:inline-block;'>All rights reserved</span>
            <span style='float:right;'><a href='#' id='abm-scroll-top' style='color:#1976d2; text-decoration:underline; cursor:pointer; font-size:0.95em; font-weight:bold;'>Scroll to Top</a></span>
          </div>
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
  // Website visits count logic removed as requested
  }
}
