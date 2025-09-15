// Create and initialize contact popup
function initContactPopup() {
    // First remove any existing popup
    const existingPopup = document.getElementById('contact-popup');
    if (existingPopup) {
        existingPopup.remove();
    }

    // Create popup element
    const popupDiv = document.createElement('div');
    popupDiv.id = 'contact-popup';
    popupDiv.style.position = 'fixed';
    popupDiv.style.bottom = '20px';
    popupDiv.style.right = '20px';
    popupDiv.style.zIndex = '99999';
    
    popupDiv.innerHTML = `
        <div id="popup-minimized" style="background: #004d99; color: white; padding: 12px 24px; border-radius: 50px; cursor: pointer; box-shadow: 0 2px 10px rgba(0,0,0,0.2); display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-comment"></i>
            <span>Contact Us</span>
        </div>
        <div id="popup-expanded" style="display: none; background: white; width: 300px; border-radius: 10px; box-shadow: 0 2px 15px rgba(0,0,0,0.2);">
            <div style="background: #004d99; color: white; padding: 15px; border-radius: 10px 10px 0 0; display: flex; justify-content: space-between; align-items: center;">
                <h3 style="margin: 0;">Quick Contact</h3>
                <i class="fas fa-times" style="cursor: pointer;" onclick="toggleContactPopup()"></i>
            </div>
            <div style="padding: 15px;">
                <a href="tel:+918074395383" style="display: flex; align-items: center; gap: 10px; color: #333; text-decoration: none; padding: 12px; border-radius: 5px; margin-bottom: 10px; transition: all 0.3s ease;" onmouseover="this.style.background='#f0f0f0'" onmouseout="this.style.background='transparent'">
                    <i class="fas fa-phone" style="color: #004d99; font-size: 20px;"></i>
                    <span>+91 8074395383</span>
                </a>
                <a href="https://wa.me/918074395383" target="_blank" style="display: flex; align-items: center; gap: 10px; color: #333; text-decoration: none; padding: 12px; border-radius: 5px; margin-bottom: 10px; transition: all 0.3s ease;" onmouseover="this.style.background='#f0f0f0'" onmouseout="this.style.background='transparent'">
                    <i class="fab fa-whatsapp" style="color: #25D366; font-size: 20px;"></i>
                    <span>WhatsApp Chat</span>
                </a>
                <a href="mailto:vishwakarmaabmgroups@gmail.com" style="display: flex; align-items: center; gap: 10px; color: #333; text-decoration: none; padding: 12px; border-radius: 5px; margin-bottom: 10px; transition: all 0.3s ease;" onmouseover="this.style.background='#f0f0f0'" onmouseout="this.style.background='transparent'">
                    <i class="fas fa-envelope" style="color: #004d99; font-size: 20px;"></i>
                    <span>Send Email</span>
                </a>
                <a href="contact.html" style="display: block; text-align: center; background: #004d99; color: white; text-decoration: none; padding: 10px; border-radius: 5px; margin-top: 10px;">Contact Page</a>
            </div>
        </div>
    `;

    // Add to document
    document.body.appendChild(popupDiv);

    // Add click event listener
    document.getElementById('popup-minimized').addEventListener('click', toggleContactPopup);
}

// Toggle contact popup visibility
function toggleContactPopup() {
    const minimized = document.getElementById('popup-minimized');
    const expanded = document.getElementById('popup-expanded');
    
    if (expanded.style.display === 'none' || expanded.style.display === '') {
        minimized.style.display = 'none';
        expanded.style.display = 'block';
    } else {
        minimized.style.display = 'flex';
        expanded.style.display = 'none';
    }
}

// Initialize when the document is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactPopup);
} else {
    initContactPopup();
}

// Also initialize when the window is fully loaded (backup)
window.addEventListener('load', initContactPopup);