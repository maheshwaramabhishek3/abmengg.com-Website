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
        <div id="popup-minimized" style="background: linear-gradient(135deg, #004d99 0%, #0066cc 100%); color: white; padding: 12px 28px; border-radius: 50px; cursor: pointer; box-shadow: 0 4px 15px rgba(0,77,153,0.3), 0 0 20px rgba(0,77,153,0.2); display: flex; align-items: center; gap: 12px; transform-origin: right bottom; animation: pulse 2s infinite; transition: all 0.3s ease;">
            <i class="fas fa-comments" style="font-size: 1.2em; text-shadow: 0 1px 2px rgba(0,0,0,0.2);"></i>
            <span style="font-weight: 500; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.2);">Contact Us</span>
        </div>
        <style>
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
            #popup-minimized:hover {
                transform: scale(1.05) translateY(-2px);
                box-shadow: 0 6px 20px rgba(0,77,153,0.4);
            }
        </style>
        <div id="popup-expanded" style="display: none; background: white; width: 320px; border-radius: 15px; box-shadow: 0 8px 30px rgba(0,0,0,0.15); transform-origin: right bottom; animation: slideIn 0.3s ease-out;">
            <div style="background: linear-gradient(135deg, #004d99 0%, #0066cc 100%); color: white; padding: 20px; border-radius: 15px 15px 0 0; display: flex; justify-content: space-between; align-items: center;">
                <h3 style="margin: 0; font-weight: 500; letter-spacing: 0.5px;">Quick Contact</h3>
                <i class="fas fa-times" style="cursor: pointer; padding: 8px; border-radius: 50%; transition: all 0.3s ease;" onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='transparent'" onclick="toggleContactPopup()"></i>
            </div>
            <style>
                @keyframes slideIn {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            </style>
            <div style="padding: 15px;">
                <a href="tel:+918074395383" class="contact-option" style="display: flex; align-items: center; gap: 12px; color: #333; text-decoration: none; padding: 14px; border-radius: 10px; margin-bottom: 8px; transition: all 0.3s ease; background: #f8f9fa;">
                    <div style="background: #004d99; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-phone" style="color: white; font-size: 18px;"></i>
                    </div>
                    <div style="flex: 1;">
                        <div style="font-weight: 500; margin-bottom: 2px;">Call Us</div>
                        <div style="font-size: 0.9em; color: #666;">+91 8074395383</div>
                    </div>
                </a>
                <a href="https://wa.me/918074395383" target="_blank" class="contact-option" style="display: flex; align-items: center; gap: 12px; color: #333; text-decoration: none; padding: 14px; border-radius: 10px; margin-bottom: 8px; transition: all 0.3s ease; background: #f8f9fa;">
                    <div style="background: #25D366; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <i class="fab fa-whatsapp" style="color: white; font-size: 22px;"></i>
                    </div>
                    <div style="flex: 1;">
                        <div style="font-weight: 500; margin-bottom: 2px;">WhatsApp</div>
                        <div style="font-size: 0.9em; color: #666;">Chat with us</div>
                    </div>
                </a>
                <a href="mailto:vishwakarmaabmgroups@gmail.com" class="contact-option" style="display: flex; align-items: center; gap: 12px; color: #333; text-decoration: none; padding: 14px; border-radius: 10px; margin-bottom: 8px; transition: all 0.3s ease; background: #f8f9fa;">
                    <div style="background: #004d99; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-envelope" style="color: white; font-size: 18px;"></i>
                    </div>
                    <div style="flex: 1;">
                        <div style="font-weight: 500; margin-bottom: 2px;">Email</div>
                        <div style="font-size: 0.9em; color: #666;">Send us a message</div>
                    </div>
                </a>
                <a href="contact.html" style="display: block; text-align: center; background: linear-gradient(135deg, #004d99 0%, #0066cc 100%); color: white; text-decoration: none; padding: 14px; border-radius: 10px; margin-top: 12px; font-weight: 500; letter-spacing: 0.5px; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(0,77,153,0.2);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(0,77,153,0.3)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,77,153,0.2)'">View All Contact Options</a>
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