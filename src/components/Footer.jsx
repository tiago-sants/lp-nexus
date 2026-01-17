import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="logo-text">NEXUS</span>
                            <span className="logo-subtitle">Soluções Financeiras</span>
                        </div>
                        <p className="footer-description">
                            Facilitamos sua jornada de crédito com estratégia e transparência.
                            Quando o banco diz não, a Nexus entra com solução.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Serviços</h4>
                            <ul>
                                <li><a href="#servicos">Financiamento Imobiliário</a></li>
                                <li><a href="#servicos">Financiamento de Veículos</a></li>
                                <li><a href="#servicos">Crédito Pessoal</a></li>
                                <li><a href="#servicos">Consórcio</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Empresa</h4>
                            <ul>
                                <li><a href="#como-funciona">Como Funciona</a></li>
                                <li><a href="#depoimentos">Depoimentos</a></li>
                                <li><a href="#faq">FAQ</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Contato</h4>
                            <ul>
                                <li>
                                    <a
                                        href="https://wa.me/5562981311881"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        WhatsApp
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:contato@nexusfinanceira.com.br">
                                        contato@nexusfinanceira.com.br
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {currentYear} Nexus Soluções Financeiras. Todos os direitos reservados.</p>
                    <div className="footer-legal">
                        <a href="#">Política de Privacidade</a>
                        <a href="#">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
