document.addEventListener('DOMContentLoaded', function() {
    // --- Google Ads Conversion Tracking (Exemplo) ---
    // Você pode usar este script para disparar eventos de conversão
    // caso tenha um formulário de contato mais complexo ou queira rastrear
    // cliques específicos em botões que não redirecionam para o WhatsApp.

    // Para o botão de WhatsApp (que já é um link direto), o Google Ads pode rastrear
    // o clique no botão. A conversão mais precisa seria se eles preenchessem
    // um formulário e você tivesse uma página de "Obrigado" separada.
    // Como estamos simplificando, o foco principal é o contato inicial.

    const whatsappButtons = document.querySelectorAll('.cta-button');

    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Disparar um evento para o Google Ads quando o botão do WhatsApp é clicado
            // Isso indica um "Lead" ou "Contato Iniciado"
            if (typeof gtag === 'function') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-XXXXXXXXX/YYYYYYYYY_CONVERSION_ID', // Substitua pelo seu ID de conversão real do Google Ads
                    'event_category': 'Contact',
                    'event_label': 'WhatsApp Click',
                    'value': 0.0 // Não há valor financeiro direto no clique, mas pode ser configurado.
                });
                console.log('Google Ads: WhatsApp Click event fired.');
            } else {
                console.warn('Google Ads: gtag not loaded. Conversion tracking might not work.');
            }
        });
    });

    // --- Outras funcionalidades JavaScript (se precisar no futuro) ---
    // Exemplo:
    // const lazyLoadImages = () => {
    //     const images = document.querySelectorAll('img[data-src]');
    //     const observer = new IntersectionObserver((entries, observer) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 const img = entry.target;
    //                 img.src = img.dataset.src;
    //                 img.removeAttribute('data-src');
    //                 observer.unobserve(img);
    //             }
    //         });
    //     });
    //     images.forEach(img => {
    //         observer.observe(img);
    //     });
    // };
    // lazyLoadImages();
});