const chatContainer = document.getElementById('chat-container');
        const messageInput = document.getElementById('message');
        const usernameInput = document.getElementById('username');

        function sendMessage() {
            const username = usernameInput.value.trim();
            const message = messageInput.value.trim();

            if (username && message) {
                const messageElement = document.createElement('div');
                messageElement.classList.add('message');

                const usernameElement = document.createElement('span');
                usernameElement.classList.add('username');
                usernameElement.textContent = username + ':';

                const textElement = document.createElement('span');
                textElement.classList.add('text');
                textElement.textContent = message;

                messageElement.appendChild(usernameElement);
                messageElement.appendChild(textElement);

                chatContainer.appendChild(messageElement);
                chatContainer.scrollTop = chatContainer.scrollHeight;

                messageInput.value = '';
            }
        }

        messageInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });