import './WhatsAppButton.css';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/5562981311881?text=Olá!%20Quero%20analisar%20meu%20crédito"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Fale conosco no WhatsApp"
        >
            <span className="whatsapp-icon">💬</span>
            <span className="whatsapp-text">Fale Conosco</span>
        </a>
    );
};

export default WhatsAppButton;
