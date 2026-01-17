import './PainPoints.css';

const PainPoints = () => {
    const painPoints = [
        {
            icon: '❌',
            title: 'Crédito Negado',
            description: 'Você foi ao banco, fez toda a papelada, esperou dias... e recebeu um "NÃO" sem explicação clara.'
        },
        {
            icon: '😕',
            title: 'Sem Saber o Motivo',
            description: 'Os bancos não explicam por que negaram. Você fica no escuro, sem saber o que fazer.'
        },
        {
            icon: '📋',
            title: 'Burocracia Infinita',
            description: 'Documentos, filas, espera... e no final, a frustração de não conseguir o que precisa.'
        },
        {
            icon: '💸',
            title: 'Oportunidades Perdidas',
            description: 'Aquele imóvel, carro ou investimento que você queria passou. O tempo não espera.'
        }
    ];

    return (
        <section className="pain-points" id="dor">
            <div className="container">
                <div className="pain-header">
                    <h2 className="section-title">
                        Por que os bancos <span className="text-primary">dizem não?</span>
                    </h2>
                    <p className="section-subtitle">
                        A maioria das pessoas não sabe o real motivo da negativa.
                        E sem orientação, continuam tentando da mesma forma errada.
                    </p>
                </div>

                <div className="pain-grid">
                    {painPoints.map((point, index) => (
                        <div key={index} className="pain-card">
                            <div className="pain-icon">{point.icon}</div>
                            <h3>{point.title}</h3>
                            <p>{point.description}</p>
                        </div>
                    ))}
                </div>

                <div className="pain-highlight">
                    <div className="highlight-content">
                        <h3>O problema não é você.</h3>
                        <p>É a falta de estratégia certa para apresentar seu perfil ao banco.</p>
                    </div>
                    <a
                        href="https://wa.me/5562981311881?text=Quero%20saber%20por%20que%20meu%20crédito%20foi%20negado"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Quero Entender Minha Negativa
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PainPoints;
