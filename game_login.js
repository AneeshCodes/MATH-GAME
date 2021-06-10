function addUser()
{
    var playerName1 = document.getElementById('playerName1Input').value;
    var playerName2 = document.getElementById('playerName2Input').value;
    localStorage.setItem("Name1", playerName1);
    localStorage.setItem("Name2", playerName2);
    window.location = "game_page.html"
}