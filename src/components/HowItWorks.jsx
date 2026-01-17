import './HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            number: '1',
            title: 'Entre em Contato',
            description: 'Comece uma conversa conosco pelo WhatsApp. Sem burocracia, sem formulários gigantes.',
            image: '💬'
        },
        {
            number: '2',
            title: 'Análise do Perfil',
            description: 'Nossa equipe analisa sua situação financeira e identifica os pontos de melhoria.',
            image: '🔍'
        },
        {
            number: '3',
            title: 'Estratégia Personalizada',
            description: 'Criamos um plano de ação específico para aumentar suas chances de aprovação.',
            image: '📋'
        },
        {
            number: '4',
            title: 'Acompanhamento Completo',
            description: 'Organizamos sua documentação e acompanhamos todo o processo até a resposta final.',
            image: '✅'
        }
    ];

    return (
        <section className="how-it-works" id="como-funciona">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Como fazemos <span className="text-primary">essa mágica</span>
                    </h2>
                    <p className="section-subtitle">
                        Em 4 passos simples, transformamos sua busca por crédito em uma experiência
                        tranquila. Tudo na palma da sua mão, pelo WhatsApp.
                    </p>
                </div>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step-item">
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <div className="step-image">{step.image}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                            {index < steps.length - 1 && <div className="step-connector"></div>}
                        </div>
                    ))}
                </div>

                <div className="cta-center">
                    <a
                        href="https://wa.me/5562981311881?text=Olá!%20Quero%20começar%20minha%20análise"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        <span>💬</span>
                        Começar Minha Análise
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
