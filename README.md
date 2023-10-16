# phonie-DTCP-Group-C-

**Group C: Phone Carrier Assignment**

This project, "phonie-DTCP-Group-C," is a web-based tool that allows users to determine the carrier of a phone number in Nigeria. 
Users can input a phone number, and the tool will provide information about the carrier associated with that number.
Also If HTML Phone Number input attribute is set to a specific carrier then the user can input can only be valid if the number entered is of the specified carrier.
## Table of Contents
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Contributors](#contributors)

## Getting Started

To use this tool, you can simply open the `index.html` file in a web browser. Here's how to get started:

1. Download the project files.
2. Open the `index.html` file in your web browser.

## Usage

1. Visit the webpage by opening the `index.html` file in a web browser.

2. You will see a "Phone Number Carrier Checker" heading.

3. In the text box, enter a phone number in the format "+234XXXXXXXXXX" or "0806XXXXXXX" (e.g., "+2348061234567" or "08061234567").

4. As you type or change the input, the tool will automatically determine the carrier associated with the phone number.

5. The carrier's logo or an "Invalid Carrier" message will be displayed based on the detected carrier.

6. To validate a specific carrier, change the value of the input pattern attribute to the specific carrier in lower case (e.g pattern="mtn")

## Code Structure

### HTML (`index.html`)

The HTML file provides the structure of the web page and includes necessary CSS styles and JavaScript files.

### JavaScript (`script.js`)

The JavaScript file contains the functionality for determining the carrier based on user input. Here are the key components:

- **Event Listeners**: The script listens for changes in the input field and invokes the `checkNumInputStyle` function.

- **checkNumInputStyle**: The script checks the phone number's input style if it start with zero (0) or +234 and it also check if the length of the phone number is a valid one.

- **Carrier Detection**: The script checks the phone number's prefix to determine the associated carrier. It can handle both specific patterns and prefixes to detect the carrier.

- **Update Carrier Icon**: The tool updates the carrier icon based on the detected carrier. If the carrier is not recognized, it displays an "Invalid Carrier" message.

### CSS (`styles.css`)

The CSS file provides the styling for the web page, including the appearance of the input box and carrier icons.

## Contributors
##### 1. Simeon A. Mustapha: Github - https://github.com/Donsimeone2206 Slack - @simeon -Team lead
##### 2. Oluwakemi Akindele: GitHub: https://github.com/theyinda Slack: @theyinda
##### 3. Tamuno-Emi Inko-Tariah: GitHub: https://github.com/t-emi-inko-t Slack: @Tamuno Inko-Tariah
##### 4. Amoo Esther Oluwatoyin: Github: https://github.com/amooesther slack: @esthyqueen
##### 5. Aishat Adeladun Adewoyin: Github: https://github.com/Aishat452 slack: @Aisha
##### 6. Aremu Japheth GitHub:https://github.com/Airydev001 slack: @aremu japheth
##### 7. Maryann uba: https://github.com/Ebymaryann Slack:@Maryann uba
##### 8. Ayodele Alayemi: GitHub:https://gitHub.com/dorteks Slack: @Dorteks
##### 9. Abah Grace Ojochenemi: GitHub - https://github.com/Grace-Abah Slack: @Grace
##### 10. Ferdinard James: https://github.com/Ferdinard01 Slack: @Ferdinard
