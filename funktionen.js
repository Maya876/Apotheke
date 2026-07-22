function toggleSidebar() {
  var sidebar = document.getElementById("mySidebar");
  var content = document.getElementById("mainContent");
  
  sidebar.classList.toggle("active");
  content.classList.toggle("active");
  
  // Verschiebt den Inhalt um 250px nach rechts, wenn Sidebar offen
  if (sidebar.classList.contains("active")) {
    content.style.marginLeft = "250px";
  } else {
    content.style.marginLeft = "0";
  }
}