document.getElementById("submit").addEventListener("click", async () => {
    const messageLink = document.getElementById("messageLink").value;
    
    if (!messageLink) {
        alert("메시지 링크를 입력해주세요.");
        return;
    }

    const response = await fetch("https://slacktag-backend.onrender.com/tag-members", {  // 백엔드 URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messageLink })
    });

    const result = await response.json();
    document.getElementById("response").innerText = result.message;
});