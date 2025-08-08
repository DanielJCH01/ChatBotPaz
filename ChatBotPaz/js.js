const responses = {
            "cultura de paz": "La cultura de paz es un conjunto de valores, actitudes, tradiciones y comportamientos que rechazan la violencia y previenen conflictos. Se basa en el respeto, la tolerancia, la solidaridad y la cooperación entre las personas.",
            
            "resolver conflictos": "Para resolver conflictos puedes: 1) Escuchar activamente a todas las partes, 2) Mantener la calma y respeto, 3) Identificar los intereses comunes, 4) Buscar soluciones ganar-ganar, 5) Mediar cuando sea necesario, 6) Comprometerse con los acuerdos alcanzados.",
            
            "derechos humanos": "Los derechos humanos son derechos inherentes a todos los seres humanos, sin distinción alguna. Incluyen derechos civiles, políticos, económicos, sociales y culturales. Son universales, indivisibles e inalienables.",
            
            "no violencia": "La no violencia es una filosofía y estrategia que rechaza el uso de la violencia física, y promueve el cambio social a través de métodos pacíficos como el diálogo, la resistencia civil y la cooperación.",
            
            "educación para la paz": "La educación para la paz desarrolla conocimientos, habilidades y actitudes que permiten construir un mundo más justo y pacífico. Incluye educación en derechos humanos, resolución de conflictos y ciudadanía global.",
            
            "tolerancia": "La tolerancia es el respeto y aceptación de la diversidad. Implica reconocer el derecho de otros a tener opiniones, creencias y estilos de vida diferentes, siempre que no dañen a terceros.",
            
            "mediación": "La mediación es un proceso donde una tercera persona neutral ayuda a las partes en conflicto a encontrar una solución mutuamente aceptable. El mediador facilita la comunicación sin imponer decisiones.",
            
            "violencia": "La violencia puede ser física, psicológica, económica o estructural. Prevenirla requiere abordar sus causas: desigualdad, injusticia, falta de educación y ausencia de canales de diálogo.",
            
            "justicia": "La justicia implica dar a cada persona lo que le corresponde según principios de equidad, respeto a derechos y dignidad humana. Es fundamental para una sociedad pacífica.",
            
            "convivencia": "La convivencia pacífica se logra mediante el respeto mutuo, la comunicación efectiva, la empatía, la inclusión y el compromiso compartido con valores democráticos.",
            
            "bullying": "El bullying es acoso repetitivo que causa daño. Para prevenirlo: crear ambientes de respeto, educar sobre empatía, establecer protocolos claros y promover la denuncia responsable.",
            
            "prejuicios": "Los prejuicios son ideas preconcebidas sobre grupos de personas. Se combaten con educación, contacto intercultural, reflexión crítica y promoción de la diversidad.",
            
            "discriminación": "La discriminación es el trato desigual por características como raza, género, religión o orientación sexual. Se previene con leyes, educación y promoción de la inclusión.",
            
            "paz": "La paz no es solo ausencia de guerra, sino presencia de justicia, respeto a derechos humanos, equidad social y resolución pacífica de conflictos. Es un proceso activo de construcción.",
            
            "diálogo": "El diálogo es una conversación donde se escucha activamente, se respetan diferentes puntos de vista y se buscan entendimientos comunes. Es esencial para resolver diferencias pacíficamente."
        };

        const chatMessages = document.getElementById('chatMessages');
        const messageInput = document.getElementById('messageInput');
        const typingIndicator = document.getElementById('typingIndicator');

        function addMessage(text, isUser = false) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
            messageDiv.textContent = text;
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function findResponse(userMessage) {
            const message = userMessage.toLowerCase();
            
            // Buscar coincidencias exactas o parciales
            for (let key in responses) {
                if (message.includes(key)) {
                    return responses[key];
                }
            }
            
            // Respuestas para preguntas comunes
            if (message.includes('hola') || message.includes('saludos')) {
                return "¡Hola! Me alegra que estés aquí. Estoy aquí para hablar sobre cultura de paz. ¿Qué te gustaría saber?";
            }
            
            if (message.includes('ayuda') || message.includes('ayudar')) {
                return "Puedo ayudarte con temas sobre: cultura de paz, resolución de conflictos, derechos humanos, no violencia, educación para la paz, tolerancia, mediación y convivencia pacífica. ¿Sobre qué tema te gustaría saber más?";
            }
            
            if (message.includes('gracias')) {
                return "¡De nada! Es un placer compartir conocimientos sobre cultura de paz. Si tienes más preguntas, estaré aquí para ayudarte.";
            }
            
            // Respuesta por defecto
            return "Esa es una pregunta interesante. Aunque no tengo información específica sobre eso, puedo ayudarte con temas como cultura de paz, resolución de conflictos, derechos humanos, no violencia y educación para la paz. ¿Te gustaría conocer sobre alguno de estos temas?";
        }

        function showTyping() {
            typingIndicator.style.display = 'block';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function hideTyping() {
            typingIndicator.style.display = 'none';
        }

        function sendMessage() {
            const message = messageInput.value.trim();
            if (message === '') return;

            addMessage(message, true);
            messageInput.value = '';

            showTyping();
            
            setTimeout(() => {
                hideTyping();
                const response = findResponse(message);
                addMessage(response);
            }, 1500);
        }

        function sendQuickQuestion(question) {
            messageInput.value = question;
            sendMessage();
        }

        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });