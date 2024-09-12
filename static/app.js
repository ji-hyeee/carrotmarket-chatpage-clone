// Read
function displayChat(chat) {
  const ul = document.querySelector(".chat-user");
  const li = document.createElement("li");
  // li.innerText = `[id:${chat.id}] ${chat.content}`;
  li.innerText = `${chat.content}`;
  ul.appendChild(li);
}

async function readChat() {
  const res = await fetch("/chats")
  const jsonRes = await res.json();
  const ul = document.querySelector(".chat-user");
  ul.innerHTML = '';
  jsonRes.forEach(displayChat);
}

// Create
async function createChat(value) {
  const res = await fetch("/chats", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: new Date(),
      content: value,
    }),
  });
  readChat();
}


function handleSubmit(event) {
  event.preventDefault();
  const input = document.querySelector('#chat-input');
  createChat(input.value);
  input.value = '';
}

readChat();

const form = document.querySelector('#chat-form')
form.addEventListener('submit', handleSubmit);