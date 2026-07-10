export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-copy">
          © {year} <span>Ney<em className="accent">Visuals</em></span> — ALL RIGHTS RESERVED
        </div>

        <div className="footer-socials">
          <a href="https://www.instagram.com/___neyvaan.santos/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://drive.google.com/drive/folders/19duiUy_v5Zg3aWqtyKjE0wgcGWWSsVXq?usp=drive_link" target="_blank" rel="noopener noreferrer">
            Drive
          </a>
        </div>
      </div>
    </footer>
  );
}
