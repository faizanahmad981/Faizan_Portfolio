document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("chat-toggle");
  const chatBox = document.getElementById("chat-box");
  const closeChat = document.getElementById("close-chat");
  const sendBtn = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");
  const chatMessages = document.getElementById("chat-messages");

  toggleBtn.onclick = () => chatBox.classList.toggle("d-none");
  closeChat.onclick = () => chatBox.classList.add("d-none");

  sendBtn.onclick = async () => {
    const question = userInput.value.trim();
    if (!question) return;

    chatMessages.innerHTML += `<div class="user-msg">${question}</div>`;
    userInput.value = "";

    const aiReply = await getAIResponse(question);
    chatMessages.innerHTML += `<div class="ai-msg">${aiReply}</div>`;
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };
});

async function getAIResponse(question) {
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: question }),
    });

    const data = await res.json();
    return data.reply || "AI is unavailable.";
  } catch {
    return "AI is currently unavailable.";
  }
}
