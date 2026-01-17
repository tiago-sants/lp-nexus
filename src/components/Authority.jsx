import './Authority.css';

const Authority = () => {
    const reasons = [
        {
            title: 'Orientação faz diferença',
            description: 'Duas pessoas com o mesmo perfil podem receber respostas diferentes do mesmo banco. A diferença? Como o crédito foi apresentado.',
            icon: '📊'
        },
        {
            title: 'Conhecimento do sistema',
            description: 'Entendemos como os bancos analisam crédito. Sabemos quais pontos valorizar e quais ajustar no seu perfil.',
            icon: '🏦'
        },
        {
            title: 'Estratégia muda o jogo',
            description: 'Não tentamos de novo da mesma forma. Criamos um plano de ação específico para cada situação.',
            icon: '🎯'
        }
    ];

    const highlights = [
        { number: '500+', label: 'Análises realizadas' },
        { number: '85%', label: 'Taxa de sucesso' },
        { number: '24h', label: 'Tempo médio de resposta' }
    ];

    return (
        <section className="authority" id="autoridade">
            <div className="container">
                <div className="authority-content">
                    <div className="authority-text">
                        <h2 className="section-title">
                            A diferença está na <span className="text-primary">estratégia</span>
                        </h2>
                        <p className="authority-intro">
                            Você já se perguntou por que algumas pessoas conseguem crédito e outras não,
                            mesmo com situações parecidas? A resposta está na forma como o perfil é apresentado.
                        </p>

                        <div className="reasons-list">
                            {reasons.map((reason, index) => (
                                <div key={index} className="reason-item">
                                    <div className="reason-icon">{reason.icon}</div>
                                    <div className="reason-content">
                                        <h4>{reason.title}</h4>
                                        <p>{reason.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="authority-visual">
                        <div className="authority-card">
                            <h3>Nossa <span className="text-primary">trajetória</span></h3>
                            <p>Construímos nossa expertise ajudando pessoas como você a conquistar seus objetivos.</p>

                            <div className="highlights-grid">
                                {highlights.map((highlight, index) => (
                                    <div key={index} className="highlight-item">
                                        <span className="highlight-number">{highlight.number}</span>
                                        <span className="highlight-label">{highlight.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="authority-badge">
                                <span>🏆</span>
                                <span>Especialistas em Crédito</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Authority;
