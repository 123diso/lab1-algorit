function loadFooterStyles() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'src/components/footer/Footer.css'; // Ajusta si cambia la ruta
    document.head.appendChild(link);
}

function createFooter() {
    if (document.querySelector('footer.footer')) return;

    loadFooterStyles();

    const footer = document.createElement('footer');
    footer.className = 'footer';

    footer.innerHTML = `
        <div class="footer-main-container">
            
            <div class="footer-info">
                <div class="footer-logo-section">
                    <h2 class="footer-logo">Sitemark</h2>
                </div>
                <div class="footer-newsletter">
                    <h3>Join the newsletter</h3>
                    <p>Subscribe for weekly updates. No spams ever!</p>
                    <div class="newsletter-form">
                        <input type="email" placeholder="Your email address" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

            <div class="footer-links-section">
                <div class="footer-links-column">
                    <h4>Product</h4>
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Highlights</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>
                <div class="footer-links-column">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                    </ul>
                </div>
                <div class="footer-links-column">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>

        </div>

    
        <div class="footer-bottom">
            <div class="footer-legal">
                <a href="#">Privacy Policy</a> • <a href="#">Terms of Service</a>
            </div>
            <p>© Sitemark 2025</p>
            <div class="footer-socials">
                <a href="#">GitHub</a>
                <a href="#">X</a>
                <a href="#">LinkedIn</a>
            </div>
        </div>
    `;

    document.body.appendChild(footer);
}

document.addEventListener('DOMContentLoaded', createFooter);
