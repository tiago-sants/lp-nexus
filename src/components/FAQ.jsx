import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'Meu crédito já foi negado, ainda dá para tentar?',
            answer: 'Com certeza! Essa é justamente nossa especialidade. Analisamos o motivo da negativa e criamos uma nova estratégia para apresentar seu perfil ao banco de forma mais favorável. Muitos dos nossos clientes conseguiram aprovação após terem sido negados.'
        },
        {
            question: 'Vocês garantem a aprovação do crédito?',
            answer: 'Não prometemos milagres. O que oferecemos é a melhor estratégia possível para aumentar suas chances de aprovação. Trabalhamos com transparência: analisamos seu perfil e dizemos honestamente quais são suas possibilidades.'
        },
        {
            question: 'Quanto tempo leva o processo?',
            answer: 'A análise inicial é feita em até 24 horas. Após isso, o tempo varia de acordo com cada caso e com o banco escolhido. Em média, nossos clientes recebem uma resposta entre 7 e 15 dias úteis.'
        },
        {
            question: 'Preciso pagar algo antes de começar?',
            answer: 'A análise inicial do seu perfil é gratuita. Você só investe no serviço se decidir seguir em frente com nossa assessoria após conhecer nossa avaliação e estratégia.'
        },
        {
            question: 'A Nexus vende imóveis ou carros?',
            answer: 'Não! A Nexus não vende imóveis nem veículos. Nosso trabalho é facilitar, organizar e estruturar seu crédito junto aos bancos. Somos a ponte entre você e a instituição financeira.'
        },
        {
            question: 'Como funciona o atendimento?',
            answer: 'Todo o atendimento é feito pelo WhatsApp, de forma prática e sem burocracia. Você entra em contato, conta sua situação, e nossa equipe especializada cuida de tudo para você.'
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq" id="faq">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Perguntas <span className="text-primary">frequentes</span>
                    </h2>
                    <p className="section-subtitle">
                        Tire suas dúvidas sobre nossos serviços
                    </p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{faq.question}</span>
                                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                            </button>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="faq-cta">
                    <p>Ainda tem dúvidas? Fale conosco!</p>
                    <a
                        href="https://wa.me/5562981311881?text=Olá!%20Tenho%20uma%20dúvida"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        <span>💬</span>
                        Falar com Especialista
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
