import './CTA.css';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-content">
                    <div className="cta-text">
                        <h2>
                            Embarque nessa jornada <span className="text-primary">junto com a gente!</span>
                        </h2>
                        <p>
                            A Nexus é especialista em facilitação de crédito.
                            Revolucionamos a forma como você conquista seus objetivos financeiros.
                            Junte-se a centenas de clientes que já descobriram a maneira mais
                            inteligente de obter crédito!
                        </p>
                        <div className="cta-badges">
                            <span className="cta-badge">
                                <span>🎯</span>
                                Estratégia Personalizada
                            </span>
                            <span className="cta-badge">
                                <span>💡</span>
                                Análise Especializada
                            </span>
                        </div>
                    </div>

                    <div className="cta-action">
                        <div className="cta-card">
                            <h3>Ficou com alguma dúvida?</h3>
                            <p>Clique no botão abaixo para falar conosco no WhatsApp!</p>

                            <a
                                href="https://wa.me/5562981311881?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Nexus"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary cta-btn"
                            >
                                <span className="btn-icon">💬</span>
                                Falar com a Nexus
                            </a>

                            <span className="response-time">
                                ⚡ Resposta garantida em até 5 minutos
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
