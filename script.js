// Bilder-Wechsel

  const bilder = ["header.jpg", "bild1.jpg", "bild2.jpg"];
  let index = 0;

  function wechselBild() {
    index = (index + 1) % bilder.length;
    document.getElementById("headerBild").src = bilder[index];
  }

  setInterval(wechselBild, 2000); // alle 2 Sekunden
  
  
  
  // Textarea einblenden
    document.getElementById("kommentarLink").addEventListener("click", function(e){
      e.preventDefault();
      document.getElementById("kommentarFeld").style.display = "block";
    });

    // Zeichen-Zähler
    const textarea = document.getElementById("kommentarTextarea");
    const rest = document.getElementById("zeichenRest");


    textarea.addEventListener("input", function() {
      const max = 500;
      rest.textContent = max - this.value.length;
    });
	



// ==========================
// AJAX-FUNKTION
// ==========================

function ladeDaten() {
  fetch("daten.json")
    .then(response => response.json())
    .then(data => {
      let html = "<h2>" + data.titel + "</h2>";
      html += "<p>" + data.text + "</p>";
      html += "<h3>Literatur</h3><ul>";

      data.literatur.forEach(eintrag => {
        html += "<li><strong>" + eintrag.titel + "</strong>: " + eintrag.beschreibung;
        html += " <a href='" + eintrag.link + "' target='_blank'>[Link]</a></li>";
      });

      html += "</ul>";
      document.getElementById("ajaxAusgabe").innerHTML = html;
    })
    .catch(error => console.error("Ajax-Fehler:", error));
}

