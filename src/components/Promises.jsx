import './Promises.css';

const Promises = () => {
    const promises = [
        {
            title: 'Crédito negado não é o fim.',
            subtitle: 'É o começo de uma nova estratégia.',
            icon: '🔄'
        },
        {
            title: 'Você pode estar mais perto da aprovação do que imagina.',
            subtitle: 'Às vezes, falta apenas um ajuste.',
            icon: '🎯'
        },
        {
            title: 'O problema não é você. É a estratégia.',
            subtitle: 'Com a abordagem certa, tudo muda.',
            icon: '💡'
        }
    ];

    return (
        <section className="promises">
            <div className="container">
                <div className="promises-header">
                    <h2 className="section-title text-white">
                        Promessas que <span className="text-primary">cumprimos</span>
                    </h2>
                </div>

                <div className="promises-grid">
                    {promises.map((promise, index) => (
                        <div key={index} className="promise-card">
                            <div className="promise-icon">{promise.icon}</div>
                            <h3>{promise.title}</h3>
                            <p>{promise.subtitle}</p>
                        </div>
                    ))}
                </div>

                <div className="promises-cta">
                    <p>Pronto para tentar novamente com estratégia?</p>
                    <a
                        href="https://wa.me/5562981311881?text=Quero%20tentar%20novamente%20com%20estratégia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Quero Minha Análise
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Promises;
