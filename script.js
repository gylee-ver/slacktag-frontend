// 상단 카드: 모두 태그
document.getElementById("submit").addEventListener("click", async () => {
    const messageLink = document.getElementById("messageLink").value;
    const responseElement = document.getElementById("response");
    const submitButton = document.getElementById("submit");
    
    if (!messageLink) {
        alert("메시지 링크를 입력해주세요.");
        return;
    }

    try {
        // 로딩 상태 표시
        submitButton.disabled = true;
        responseElement.innerText = "처리 중...";
        
        const response = await fetch("https://slacktag-backend.onrender.com/tag-all-members", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messageLink })
        });

        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.error || "알 수 없는 오류가 발생했습니다.");
        }
        
        responseElement.innerText = result.message;
    } catch (error) {
        console.error("오류 발생:", error);
        responseElement.innerText = `오류: ${error.message}`;
    } finally {
        submitButton.disabled = false;
    }
});

// 하단 카드: 이모지 반응 안 한 사람 태그
document.getElementById("submitUnreacted").addEventListener("click", async () => {
    const messageLink = document.getElementById("messageLinkUnreacted").value;
    const responseElement = document.getElementById("responseUnreacted");
    const submitButton = document.getElementById("submitUnreacted");
    
    if (!messageLink) {
        alert("메시지 링크를 입력해주세요.");
        return;
    }

    try {
        // 로딩 상태 표시
        submitButton.disabled = true;
        responseElement.innerText = "처리 중...";
        
        const response = await fetch("https://slacktag-backend.onrender.com/tag-unreacted-members", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messageLink })
        });

        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.error || "알 수 없는 오류가 발생했습니다.");
        }
        
        responseElement.innerText = result.message;
    } catch (error) {
        console.error("오류 발생:", error);
        responseElement.innerText = `오류: ${error.message}`;
    } finally {
        submitButton.disabled = false;
    }
});