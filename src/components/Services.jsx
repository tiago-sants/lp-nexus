import './Services.css';

const Services = () => {
    const services = [
        {
            icon: '🏠',
            title: 'Financiamento Imobiliário',
            description: 'Realize o sonho da casa própria. Analisamos seu perfil e encontramos as melhores condições para você.',
            features: ['Análise de perfil', 'Comparativo de taxas', 'Acompanhamento completo']
        },
        {
            icon: '🚗',
            title: 'Financiamento de Veículos',
            description: 'Seu carro novo ou seminovo com as melhores condições. Facilitamos toda a negociação.',
            features: ['Taxa reduzida', 'Entrada facilitada', 'Aprovação rápida']
        },
        {
            icon: '💰',
            title: 'Crédito Pessoal',
            description: 'Precisa de dinheiro rápido? Encontramos as melhores opções de crédito pessoal para você.',
            features: ['Sem burocracia', 'Taxas competitivas', 'Análise expressa']
        },
        {
            icon: '📊',
            title: 'Consórcio',
            description: 'Planejamento inteligente para conquistar seus objetivos. Sem juros, apenas taxa de administração.',
            features: ['Sem juros', 'Parcelas que cabem no bolso', 'Contemplação planejada']
        },
        {
            icon: '🔄',
            title: 'Reestruturação de Crédito',
            description: 'Crédito foi negado? Reestruturamos sua proposta para aumentar suas chances de aprovação.',
            features: ['Análise de negativa', 'Plano de ação', 'Nova submissão']
        },
        {
            icon: '📋',
            title: 'Consultoria Financeira',
            description: 'Orientação completa para organizar suas finanças e preparar seu perfil para aprovação.',
            features: ['Score de crédito', 'Organização financeira', 'Preparação bancária']
        }
    ];

    return (
        <section className="services" id="servicos">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        O que a Nexus <span className="text-primary">faz por você</span>
                    </h2>
                    <p className="section-subtitle">
                        Não vendemos imóveis ou carros. Facilitamos, organizamos e estruturamos
                        seu crédito junto aos bancos.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <ul className="service-features">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <span className="feature-check">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
