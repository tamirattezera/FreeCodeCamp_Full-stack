function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h2>Product</h2>

          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Integrations</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h2>Company</h2>

          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h2>Resources</h2>

          <ul>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h2>Connect</h2>

          <div className="social-links">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">X</a>
          </div>
        </div>
      </div>

      <p className="copyright">
        © 2026 Reusable Footer. All rights reserved.
      </p>
    </footer>
  );
}

export { Footer };
