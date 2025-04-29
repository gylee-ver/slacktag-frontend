// 상단 카드: 모두 태그
document.getElementById("submit").addEventListener("click", async () => {
    const messageLink = document.getElementById("messageLink").value;
    
    if (!messageLink) {
        alert("메시지 링크를 입력해주세요.");
        return;
    }

    const response = await fetch("https://slacktag-backend.onrender.com/tag-all-members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messageLink })
    });

    const result = await response.json();
    document.getElementById("response").innerText = result.message;
});

// 하단 카드: 이모지 반응 안 한 사람 태그
document.getElementById("submitUnreacted").addEventListener("click", async () => {
    const messageLink = document.getElementById("messageLinkUnreacted").value;
    
    if (!messageLink) {
        alert("메시지 링크를 입력해주세요.");
        return;
    }

    const response = await fetch("https://slacktag-backend.onrender.com/tag-unreacted-members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messageLink })
    });

    const result = await response.json();
    document.getElementById("responseUnreacted").innerText = result.message;
});