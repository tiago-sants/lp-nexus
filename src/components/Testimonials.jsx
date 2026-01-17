import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Carlos Silva',
            role: 'Empresário',
            image: '👨‍💼',
            text: 'Meu crédito para veículo foi negado 3 vezes. A Nexus analisou minha situação e em 2 semanas consegui a aprovação. Recomendo demais!',
            rating: 5
        },
        {
            name: 'Maria Santos',
            role: 'Professora',
            image: '👩‍🏫',
            text: 'Sonhava com a casa própria há anos. Depois de duas negativas, a Nexus reestruturou minha proposta e consegui o financiamento. Melhor decisão!',
            rating: 5
        },
        {
            name: 'João Oliveira',
            role: 'Autônomo',
            image: '👨‍🔧',
            text: 'Como autônomo, sempre tive dificuldade com crédito. A equipe da Nexus organizou toda minha documentação e consegui meu crédito pessoal.',
            rating: 5
        }
    ];

    const renderStars = (rating) => {
        return '⭐'.repeat(rating);
    };

    return (
        <section className="testimonials" id="depoimentos">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Quem usa <span className="text-primary">não vive sem</span>
                    </h2>
                    <p className="section-subtitle">
                        Histórias reais de pessoas que transformaram suas chances de crédito com a Nexus
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-rating">
                                {renderStars(testimonial.rating)}
                            </div>
                            <blockquote className="testimonial-text">
                                "{testimonial.text}"
                            </blockquote>
                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.image}</div>
                                <div className="author-info">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
