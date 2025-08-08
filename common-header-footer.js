// Injects the common header and footer into the page
function injectHeaderFooter(headerId, footerId) {
  // Header HTML (copied exactly from index.html)
  const headerHTML = `
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
        display: none;
        background: #001c38ff;
        border: 2px solid #fff;
        border-radius: 8px;
        font-size: 1.5em;
        color: #fff;
        cursor: pointer;
        margin: 0.5em 0.5em 0.5em auto;
        z-index: 1100;
        padding: 0.2em 0.6em;
        box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        transition: background 0.2s, border 0.2s;
      }
      @media (max-width: 700px) {
        .abm-header {
          flex-direction: column;
          align-items: center;
        }
        .abm-navbar {
          display: flex;
          align-items: center;
          flex-direction: row;
          justify-content: flex-start;
        }
          .abm-navbar-current-page {
            display: block;
            color: #fff;
            font-weight: bold;
            font-size: 1em;
            margin-left: 1em;
            margin-right: 0.5em;
            letter-spacing: 0.5px;
            flex: 0 0 auto;
            order: 0;
          }
          .abm-navbar-hamburger {
            display: block;
            margin-left: 0.5em;
            order: 1;
          }
        .abm-navbar-links {
          flex-direction: column;
          gap: 0.5em;
          max-height: 0;
          overflow: hidden;
          background: #001c38ff;
          width: 100%;
        }
        .abm-navbar-links.open {
          max-height: 500px;
          padding-bottom: 1em;
        }
        .abm-navbar a {
          width: 100%;
          box-sizing: border-box;
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
    <nav class="abm-navbar" style="display: flex; align-items: center; flex-direction: row; justify-content: flex-start;">
      <span class="abm-navbar-current-page"></span>
      <button class="abm-navbar-hamburger" aria-label="Open menu">
        &#9776;
      </button>
      <div class="abm-navbar-links">
        <a href="index.html" id="nav-home" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'">Home</a>
        <a href="about.html" id="nav-about" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'">About Us</a>
        <a href="services.html" id="nav-services" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'">Services</a>
        <a href="gallery.html" id="nav-gallery" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'">Gallery</a>
        <a href="projects.html" id="nav-projects" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'">Project Works</a>
        <a href="milestone.html" id="nav-milestone" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'">Milestone</a>
        <a href="contact.html" id="nav-contact" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'">Contact Us</a>
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
    </footer>
  `;
  // Insert header and footer into specified placeholders
  if (headerId && document.getElementById(headerId)) {
    document.getElementById(headerId).innerHTML = headerHTML;
  }
  if (footerId && document.getElementById(footerId)) {
    document.getElementById(footerId).innerHTML = footerHTML;
  }
}
