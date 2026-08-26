const fs = require('fs');
let content = fs.readFileSync('src/VistomioLandingPage.tsx', 'utf8');

// Update regionalPrices
const oldRegionalPrices = `const regionalPrices = {
    EU: {
      hotel: [260, 440, 890],
      addon: 190,
      chatbot: [129, 170, 380],
      hotelSetup: [715, 975, 1430]
    },
    US: {
      hotel: [339, 579, 1199],
      addon: 230,
      chatbot: [169, 219, 499],
      hotelSetup: [660, 910, 1460]
    },
    LATAM: {
      hotel: [182, 374, 756],
      addon: 155,
      chatbot: [89, 145, 329],
      hotelSetup: [350, 590, 855]
    }
  };`;

const newRegionalPrices = `const regionalPrices = {
    EU: {
      hotel: [260, 440, 890],
      addon: 190,
      chatbot: [129, 170, 380],
      chatbotSetup: [120, 450, 690],
      hotelSetup: [715, 975, 1430]
    },
    US: {
      hotel: [339, 579, 1199],
      addon: 230,
      chatbot: [169, 219, 499],
      chatbotSetup: [150, 490, 750],
      hotelSetup: [660, 910, 1460]
    },
    LATAM: {
      hotel: [182, 374, 756],
      addon: 155,
      chatbot: [89, 145, 329],
      chatbotSetup: [100, 400, 670],
      hotelSetup: [350, 590, 855]
    }
  };`;

content = content.replace(oldRegionalPrices, () => newRegionalPrices);

// Update getPriceInfo
const oldGetPriceInfo = `let baseSetup = type === 'hotel' ? regionalPrices[region].hotelSetup[idx] : 0;`;
const newGetPriceInfo = `let baseSetup = type === 'hotel' ? regionalPrices[region].hotelSetup[idx] : type === 'chatbot' ? regionalPrices[region].chatbotSetup[idx] : 0;`;
content = content.replace(oldGetPriceInfo, () => newGetPriceInfo);

// Update JSX for setupPrice
const oldSetupJSX = `<span className="text-base font-bold text-boutique-navy">{convertPrice(plan.setupPrice)}{currency === 'EUR' ? '€' : '$'}</span>`;
const newSetupJSX = `<span className="text-base font-bold text-boutique-navy">{getPriceInfo('chatbot', idx).setup}{currency === 'EUR' ? '€' : '$'}</span>`;

// Replace all occurrences of oldSetupJSX
let occurrences = 0;
while(content.includes(oldSetupJSX)) {
  content = content.replace(oldSetupJSX, () => newSetupJSX);
  occurrences++;
}

console.log("Replaced occurrences of JSX:", occurrences);

fs.writeFileSync('src/VistomioLandingPage.tsx', content);
