const fs = require('fs');
let content = fs.readFileSync('src/VistomioLandingPage.tsx', 'utf8');

// Use regex to insert chatbotSetup
content = content.replace(/chatbot: \[129, 170, 380\],\s*hotelSetup: \[715, 975, 1430\]/, 
  'chatbot: [129, 170, 380],\n      chatbotSetup: [120, 450, 690],\n      hotelSetup: [715, 975, 1430]');

content = content.replace(/chatbot: \[169, 219, 499\],\s*hotelSetup: \[660, 910, 1460\]/, 
  'chatbot: [169, 219, 499],\n      chatbotSetup: [150, 490, 750],\n      hotelSetup: [660, 910, 1460]');

content = content.replace(/chatbot: \[89, 145, 329\],\s*hotelSetup: \[350, 590, 855\]/, 
  'chatbot: [89, 145, 329],\n      chatbotSetup: [100, 400, 670],\n      hotelSetup: [350, 590, 855]');

fs.writeFileSync('src/VistomioLandingPage.tsx', content);
