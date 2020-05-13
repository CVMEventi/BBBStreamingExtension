let onlyPresentation = document.getElementById('onlyPresentation');
let onlyPresentationCode = `
function addGlobalStyle(css) {
    try {
      var elmHead, elmStyle;
      elmHead = document.getElementsByTagName('head')[0];
      elmStyle = document.createElement('style');
      elmStyle.type = 'text/css';
      elmHead.appendChild(elmStyle);
      elmStyle.innerHTML = css;
    }
    catch (e) {
      if (!document.styleSheets.length) {
        document.createStyleSheet();
      }
      document.styleSheets[0].cssText += css;
    }
  };

document.querySelector("[accesskey^='U']").click();
document.querySelector("#container").querySelector("[class^='content']").style.maxHeight = '100%'
document.querySelector("[class^='overlay']").style.display = 'none'
document.querySelector("[class^='svgContainer']").querySelector("button").style.display = 'none'
document.querySelector("[class^='navbar']").style.display = 'none'
document.querySelector("[class^='actionsbar']").style.display = 'none';
document.querySelector("body").style.background = '#000000';
addGlobalStyle('[class*="fullScreenButton"] { display: none; }');
`

onlyPresentation.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: onlyPresentationCode});
    });
};

let onlyWebcam = document.getElementById('onlyWebcam');
let onlyWebcamCode = `
function addGlobalStyle(css) {
    try {
      var elmHead, elmStyle;
      elmHead = document.getElementsByTagName('head')[0];
      elmStyle = document.createElement('style');
      elmStyle.type = 'text/css';
      elmHead.appendChild(elmStyle);
      elmStyle.innerHTML = css;
    }
    catch (e) {
      if (!document.styleSheets.length) {
        document.createStyleSheet();
      }
      document.styleSheets[0].cssText += css;
    }
  };

document.querySelector("[accesskey^='U']").click();
document.querySelector("[class^='navbar']").style.display = 'none'
document.querySelector("[class^='actionsbar']").style.display = 'none';
document.querySelector("body").style.background = '#000000';
document.querySelector("[class^='svgContainer']").querySelector("button").click()
addGlobalStyle('[class^="videoListItem"] [class^="info"] { display: none; }');
addGlobalStyle('[class*="fullScreenButton"] { display: none; }');
`

onlyWebcam.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: onlyWebcamCode});
    });
};

let invertDimensions = document.getElementById('invertDimensions');
let invertDimensionsCode = `

document.querySelector("[class^='container'] [class^='content'").style.maxHeight = "20%";
document.querySelector("[class^='overlay']").style.width = null;
document.querySelector("[class^='overlay']").style.height = null;
document.querySelector("[class^='videoList']").style.width = null;
document.querySelector("[class^='videoList']").style.height = null;
`

invertDimensions.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: invertDimensionsCode});
    });
};

let webcam5050 = document.getElementById('5050');
let webcam5050Code = `

function addGlobalStyle(css) {
  try {
    var elmHead, elmStyle;
    elmHead = document.getElementsByTagName('head')[0];
    elmStyle = document.createElement('style');
    elmStyle.type = 'text/css';
    elmHead.appendChild(elmStyle);
    elmStyle.innerHTML = css;
  }
  catch (e) {
    if (!document.styleSheets.length) {
      document.createStyleSheet();
    }
    document.styleSheets[0].cssText += css;
  }
};

document.querySelector("[class^='container'] [class^='content'").style.maxHeight = "65%";
document.querySelector("[class^='overlay']").style.width = null;
document.querySelector("[class^='overlay']").style.height = null;
document.querySelector("[class^='overlay']").style.maxHeight = "35%";
document.querySelector("[class^='videoList']").style.width = null;
document.querySelector("[class^='videoList']").style.height = null;
document.querySelector("[class^='videoList']").style.maxHeight = "100%";
addGlobalStyle('[class^="videoListItem"] [class^="info"] { display: none; }');
addGlobalStyle('[class^="videoListItem"] [class^="wrapper"] { display: none; }');
`

webcam5050.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: webcam5050Code});
    });
};