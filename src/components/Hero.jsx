import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="hero-gradient"></div>
                <div className="hero-pattern"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">

                    <h1 className="hero-title">
                        Seu crédito facilitado
                        <span className="title-highlight">na palma da mão</span>
                    </h1>

                    <p className="hero-subtitle">
                        Quando o banco diz não, a Nexus entra com estratégia.
                        Facilitamos a aprovação do seu crédito com análise especializada.
                    </p>

                    <ul className="hero-bullets">
                        <li>
                            <span className="bullet-icon">✓</span>
                            Crédito negado? Podemos reverter
                        </li>
                        <li>
                            <span className="bullet-icon">✓</span>
                            Financiamento imobiliário e de veículos
                        </li>
                        <li>
                            <span className="bullet-icon">✓</span>
                            Análise gratuita do seu perfil
                        </li>
                    </ul>

                    <div className="hero-cta-group">
                        <a
                            href="https://wa.me/5562981311881?text=Olá!%20Quero%20analisar%20meu%20crédito"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary hero-btn"
                        >
                            <span className="btn-icon">💬</span>
                            Analisar Meu Crédito Agora
                        </a>
                        <p className="hero-cta-info">
                            Resposta garantida em até 5 minutos
                        </p>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="hero-phone">
                        <div className="phone-screen">
                            <div className="chat-bubble chat-received">
                                Olá! Tive meu crédito negado, vocês podem me ajudar? 😔
                            </div>
                            <div className="chat-bubble chat-sent">
                                Com certeza! Vamos analisar seu perfil e encontrar a melhor estratégia para aprovação. Qual tipo de crédito você precisa? 🎯
                            </div>
                            <div className="chat-bubble chat-received">
                                Financiamento de veículo! 🚗
                            </div>
                            <div className="chat-bubble chat-sent">
                                Perfeito! Em 3 passos simples vamos estruturar sua aprovação. Me conta mais sobre sua situação... ✨
                            </div>
                        </div>
                    </div>
                    <div className="hero-floating-card card-1">
                        <span className="floating-icon">🏠</span>
                        <span>Imobiliário</span>
                    </div>
                    <div className="hero-floating-card card-2">
                        <span className="floating-icon">🚗</span>
                        <span>Veículos</span>
                    </div>
                    <div className="hero-floating-card card-3">
                        <span className="floating-icon">💰</span>
                        <span>Crédito Pessoal</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
