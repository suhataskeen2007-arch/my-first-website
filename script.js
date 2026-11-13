function showMessage() {
    alert("Hello!");
}
function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("themeButton");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "☀️ Light Mode";
    } else {
        button.textContent = "🌙 Dark Mode";
    }
}
const message = "Welcome to My Website";
let index = 0;

function typeText() {
    const heading = document.getElementById("typingText");

    if (heading && index < message.length) {
        heading.textContent += message.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

typeText();

function searchTopics() {
    const input = document.getElementById("searchBox");
    const filter = input.value.toLowerCase();
    const topics = document.querySelectorAll("#topicList li");

    topics.forEach(function(topic) {
        if (topic.textContent.toLowerCase().includes(filter)) {
            topic.style.display = "list-item";
        } else {
            topic.style.display = "none";
        }
    });
}
function showSummary(topic) {

    const summaries = {
        "HTML": "HTML stands for HyperText Markup Language. It is used to create the basic structure of a webpage using headings, paragraphs, images and links.",

        "CSS": "CSS stands for Cascading Style Sheets. It is used to style webpages by adding colours, fonts, spacing and layouts.",

        "JavaScript": "JavaScript is a programming language used to make webpages interactive. It helps create buttons, animations and dynamic content.",

        "Web Design": "Web Design is the process of creating the appearance and layout of a website. It includes colours, fonts, images and navigation.",

        "Responsive Website": "A Responsive Website automatically adjusts its layout to fit different screen sizes, such as laptops, tablets and mobile phones."
    };

    const summaryBox = document.getElementById("topicSummary");

    summaryBox.innerHTML =
        "<h3>" + topic + "</h3>" +
        "<p>" + summaries[topic] + "</p>";
}