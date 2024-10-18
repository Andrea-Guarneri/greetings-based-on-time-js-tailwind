// Our code will ask the user if it is day, afternoon, or night (possible answers: "dia", "tarde", "noite")

// If the answer is "day", it will show a picture of a sunny morning, a yellow background, and a text (for example: Have a great morning)
// Otherwise, it will check if it is afternoon:
//    if true, it will show a picture of the sunset, an orange background, and a text (Have a great afternoon, enjoy the sunset)
//    Else, it will show a picture of the moon, a blue 900 background, and a text (Good night, enjoy the stars)

// =================================================================================================================================
// Important: If none of the previous conditions are true: show an error message, error image, red background
// =================================================================================================================================

// Tip:
/**
 * if () {
 * 
 *  
 *    
 * } else {
 *    
 *    if () {
 *    } else {
 *       if () {
 *       } else {
 *       }
 *    }
 * 
 * }
 * 
 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ask the user via prompt for the part of the day
var timeOfDay = prompt("Which part of the day are you in? (Type in lowercase: day, afternoon, night)"); // store the user's response using the prompt() command
var outputDiv = document.getElementById('output'); // to get HTML page elements: to display text
var body = document.getElementById('body'); // to get HTML page elements: to change the background
var greetingText = document.getElementById('greeting-text'); // to get HTML page elements: to write your welcome message
var timeImg = document.getElementById('time-img'); // to get HTML page elements: to display an image representing the part of the day

// Variables to store the images
var morningImage = "assets/sunny-morning.jpg";
var afternoonImage = "assets/sunset.jpg";
var nightImage = "assets/night-sky.jpg";
var errorImage = "assets/error.webp";

var bgDay = "bg-yellow-400";
var bgAfternoon = "bg-orange-600";
var bgNight = "bg-blue-950";
var bgError = "bg-red-500";
var bgTimeOfDay = " ";

// If, else structure
if (timeOfDay === "day") {
    // If it's "day", set the background to yellow and display the morning message
    bgTimeOfDay += bgDay;
    greetingText.textContent = "Have a great morning, enjoy the sun!";
    timeImg.setAttribute("src", morningImage); // Set the image directly
    timeImg.setAttribute("alt", "Sunny morning");
} else {
    // If it's not "day", check if it's "afternoon"
    if (timeOfDay === "afternoon") {
        // If it's "afternoon", set the background to orange and display the afternoon message
        bgTimeOfDay += bgAfternoon;
        greetingText.textContent = "Have a great afternoon, enjoy the sunset!";
        timeImg.setAttribute("src", afternoonImage); // Set the image directly
        timeImg.setAttribute("alt", "Sunset");
    } else {
        // If it's not "afternoon", check if it's "night"
        if (timeOfDay === "night") {
            // If it's "night", set the background to dark blue and display the night message
            bgTimeOfDay += bgNight;
            greetingText.textContent = "Good night, enjoy the stars and the moon!";
            timeImg.setAttribute("src", nightImage); // Set the image directly
            timeImg.setAttribute("alt", "Night sky with moon");
        } else {
            // If it's none of the previous options, display an error
            bgTimeOfDay += bgError;
            greetingText.textContent = "Error! You entered something incorrectly.";
            timeImg.setAttribute("src", errorImage); // Set the image directly
            timeImg.setAttribute("alt", "Typing error");
        }
    }
}

body.className += bgTimeOfDay;
