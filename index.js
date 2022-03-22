var faq = document.getElementsByClassName("faq-page");
var faqBody = document.getElementsByClassName("faq-body");
var x;
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        for (x = 0; x < faq.length; x++) {
				faq.classList.toggle("active");
		}
		this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
			for (x = 0; x < faqBody.length; x++) {
				faqBody[x].style.display = "none";
			}
            body.style.display = "block";
        }
    });
}