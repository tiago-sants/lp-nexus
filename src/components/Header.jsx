import { useState, useEffect } from 'react';
import './Header.css';
import logoNexus from '../assets/logo-nexus.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <img src={logoNexus} alt="Nexus" className="logo-image" />
                    <div className="logo-content">
                        <span className="logo-text">NEXUS</span>
                        <span className="logo-subtitle">Soluções Financeiras</span>
                    </div>
                </div>

                <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-list">
                        <li><a onClick={() => scrollToSection('como-funciona')}>Como Funciona</a></li>
                        <li><a onClick={() => scrollToSection('servicos')}>Serviços</a></li>
                        <li><a onClick={() => scrollToSection('depoimentos')}>Depoimentos</a></li>
                        <li><a onClick={() => scrollToSection('faq')}>FAQ</a></li>
                    </ul>
                </nav>

                <a
                    href="https://wa.me/5562981311881?text=Olá!%20Quero%20analisar%20meu%20crédito"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary header-cta"
                >
                    Falar com Especialista
                </a>

                <button
                    className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
