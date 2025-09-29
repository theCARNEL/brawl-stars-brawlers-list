const Footer = () => {
  return (
    <footer>
      <div className="footer-download-bar">
        <p>Download Brawl Stars:</p>
        <a href="APP_STORE_LINK" target="_blank" className="download-link">
          <img src="/assets/icons/app_store_icon.png" alt="App Store" />
        </a>
        <a href="PLAY_STORE_LINK" target="_blank" className="download-link">
          <img src="/assets/icons/play_store_icon.png" alt="Google Play" />
        </a>
      </div>

      <div className="footer-separator"></div>

      <div className="footer-main-content">
        <div className="footer-socials">
          <p>Connect with the Developer:</p>
          <a
            href="https://www.linkedin.com/in/neil-abednego-hutagalung-5ab901386/"
            target="_blank"
          >
            <img src="/assets/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/abneil/" target="_blank">
            <img src="/assets/instagram.png" alt="Instagram" />
          </a>
          <a href="https://github.com/theCARNEL" target="_blank">
            <img src="/assets/github.png" alt="GitHub" />
          </a>
        </div>

        <div className="footer-references">
          <p>REFERENCES & DATA SOURCES:</p>
          <ul>
            <li>Supercell Developer API (Official Data)</li>
            <li>Supercell Fan Kit (Official Assets)</li>
            <li>Brawl Stars Wiki - Fandom</li>
            <li>BrawlHub</li>
          </ul>
        </div>
      </div>
      <p className="copyright">
        &copy; 2025 Brawlers List Unofficial Fan Site.
      </p>
    </footer>
  );
};

export default Footer;
