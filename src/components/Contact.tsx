import React from 'react';

const Contact: React.FC = () => (
    <section id="contact">
        <h2>Contact</h2>
        <div className="social-links">
            <a id="gh-link" href="https://github.com/secretanry" target="_blank" rel="noopener noreferrer">
                <img src="/src/pngwing.com-3.png" alt="GitHub" />
            </a>
            <a id="tg-link" href="https://t.me/secretanry" target="_blank" rel="noopener noreferrer">
                <img src="/src/pngwing.com-2.png" alt="Telegram" />
            </a>
            <a id="email" href="mailto:secret.anry@gmail.com">
                <img src="/src/pngwing.com.png" alt="Email" />
            </a>
        </div>
    </section>
);

export default Contact;
