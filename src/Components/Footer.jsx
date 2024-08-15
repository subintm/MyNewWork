import React from 'react';


function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 text-center">
      <div className="flex justify-center gap-8 mb-6">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl"
        >
          <i className="fa-brands fa-instagram fa-2x text-white"></i>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://wa.me"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      <p className="mb-0">© 2024 MyShop. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
