chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'meetings.cvm.it'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'meetings.livemeeting.tech'},
          })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });