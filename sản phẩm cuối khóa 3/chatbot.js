// Lấy các phần tử HTML
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// --- THAY THẾ BẰNG KHÓA API CỦA BẠN ---
const API_KEY = 'AIzaSyBOAcOqiunU17hBey8eNM9jT7lox-z83XI'; 
// DÒNG MỚI ĐỂ THAY THẾ:
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

// Mảng để lưu trữ lịch sử cuộc trò chuyện
let conversationHistory = [];

// Hàm thêm tin nhắn vào giao diện
const addMessage = (sender, message) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    
    const pElement = document.createElement('p');
    pElement.textContent = message;
    messageElement.appendChild(pElement);
    
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Tự động cuộn xuống cuối
};

// Hàm gửi tin nhắn đến API của Gemini
const getGeminiResponse = async () => {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    // Hiển thị tin nhắn của người dùng
    addMessage('user', userMessage);
    userInput.value = '';

    // Hiển thị chỉ báo "Bot đang nhập..."
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('message', 'bot-message');
    typingIndicator.innerHTML = '<p><em>Bot đang nhập...</em></p>';
    chatBox.appendChild(typingIndicator);
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        // Cập nhật lịch sử với tin nhắn mới của người dùng
        conversationHistory.push({ role: "user", parts: [{ text: userMessage }] });

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: conversationHistory,
                 // Cài đặt an toàn (tùy chọn)
                safetySettings: [
                    { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                    { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                    { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                    { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                ],
            }),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        // Xóa chỉ báo "Bot đang nhập..."
        chatBox.removeChild(typingIndicator);

        // Lấy và hiển thị câu trả lời của bot
        const botMessage = data.candidates[0].content.parts[0].text;
        addMessage('bot', botMessage);

        // Cập nhật lịch sử với câu trả lời của bot
        conversationHistory.push({ role: "model", parts: [{ text: botMessage }] });

    } catch (error) {
        console.error('Lỗi:', error);
        chatBox.removeChild(typingIndicator); // Xóa chỉ báo nếu có lỗi
        addMessage('bot', 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại.');
    }
};

// Lắng nghe sự kiện nhấn nút "Gửi"
sendBtn.addEventListener('click', getGeminiResponse);

// Lắng nghe sự kiện nhấn phím "Enter"
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getGeminiResponse();
    }
});