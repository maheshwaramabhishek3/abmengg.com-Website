// Injects the common header and footer into the page
function injectHeaderFooter(headerId, footerId) {
  // Header HTML (copied exactly from index.html)
  const headerHTML = `
    <div>
      <header style="width:100vw; margin-left:calc(-50vw + 50%); margin-right:calc(-50vw + 50%); background:transparent; padding:1.5em 0 0 0; box-shadow:0 2px 8px rgba(0,0,0,0.15);">
        <div style="display: flex; align-items: center; justify-content: center; gap: 1em;">
          <img src="Images/ABMENGG LOGO 092025.jpg" alt="ABM Logo" style="height: 150px; width: 300px; object-fit: cover; object-position: center; clip-path: inset(2% 0); border-radius: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.07);" />
          <div style="display: flex; flex-direction: column; justify-content: center;">
            <h1 style="margin: 0; line-height: 1.0; color: #ffffff; font-size: 3.5em;">ABM</h1>
            <h2 style="margin: 0; line-height: 1.0; font-size: 1.5em; color: #ffffff;">ENGINEERING GROUP</h2>
            <p style="margin: 0.2em 0 0 0; line-height: 1.0; font-size: 1.0em; color: #6b9ac0ff; opacity: 0.9; font-family: 'Times New Roman', Times, serif; font-weight: bold;">Since 2021</p>
          </div>
        </div>
        <div class="tagline" style="margin-top:0.5em;"><span class="tagline-text">|| Building the Future, Restoring the Past ||</span></div>
      </header>
      <nav style="position: sticky; top: 0; left: 0; right: 0; z-index: 1000; background: #001c38ff; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
        <div style="display: flex; justify-content: left; gap: 1em;">
          <a href="index.html" id="nav-home" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'">Home</a>
          <a href="gallery.html" id="nav-gallery" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'">Gallery</a>
          <a href="projects.html" id="nav-projects" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'">Project Works</a>
          <a href="milestone.html" id="nav-milestone" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'">Milestone</a>
          <a href="contact.html" id="nav-contact" style="color: #fff; text-decoration: none; font-weight: bold; padding: 0.5em 1em; border-radius: 4px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.15)'" onmouseout="this.style.backgroundColor=this.classList.contains('active') ? '#004d99' : 'transparent'">Contact Us</a>
        </div>
      </nav>
    </div>
    <script>
      // Highlight current page in navigation
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      const navLinks = document.querySelectorAll('nav a');
      navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
          link.classList.add('active');
          link.style.backgroundColor = '#004d99';
        }
      });
    </script>
  `;
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
