function startGame() {
  const usernameInput = document.getElementById("username");
  const username = usernameInput.value.trim();

  if (username === "") {
    alert("Lütfen kullanıcı adınızı girin.");
    return;
  }

  document.getElementById("player-name").textContent = username;
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");

  // Buraya oyunu başlatma kodları eklenecek
}
