import './Benefits.css';

const Benefits = () => {
    const benefits = [
        {
            icon: '🔒',
            title: 'Atendimento Personalizado',
            description: 'Cada caso é único. Analisamos individualmente e criamos estratégias personalizadas.'
        },
        {
            icon: '⚖️',
            title: 'Transparência Total',
            description: 'Sem taxas ocultas, sem promessas falsas. Você sabe exatamente o que esperar.'
        },
        {
            icon: '💰',
            title: 'Sem Custo Antecipado',
            description: 'Análise inicial gratuita. Você só paga pelo serviço se decidir continuar.'
        }
    ];

    return (
        <section className="benefits">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Trabalhe com <span className="text-primary">total segurança</span>
                    </h2>
                    <p className="section-subtitle">
                        Mais que facilitação de crédito, oferecemos tranquilidade completa
                    </p>
                </div>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="benefit-card">
                            <div className="benefit-icon">{benefit.icon}</div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>

                <div className="benefits-banner">
                    <span className="banner-icon">✨</span>
                    <span className="banner-text">Transparência Total - Sem Taxas Ocultas</span>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
