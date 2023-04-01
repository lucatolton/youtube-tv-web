const agent = `Mozilla/5.0 (SMART-TV; LINUX; Tizen 5.5) AppleWebKit/537.36 (KHTML, like Gecko) 69.0.3497.106.1/5.5 TV Safari/537.36`;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    chrome.webRequest.onBeforeSendHeaders.addListener((details) => {
        /*for (var i = 0; i < details.requestHeaders.length; i++) {
            if (details.requestHeaders[i].name === 'User-Agent') {
                details.requestHeaders[i].value = agent;
                break;
            }
        }*/
        details.requestHeaders.forEach((header) => {
            if (header.name === 'User-Agent') {
                header.value = agent;
            }
        });
        return { requestHeaders: details.requestHeaders };
    }, { urls: ['*://*.youtube.com/*'] }, ['blocking', 'requestHeaders']);

    if (changeInfo.status == 'complete' && tab.url.includes('youtube') && tab.url.includes('watch?v=')) {
        chrome.tabs.executeScript(tabId, { file: '/scripts/hdQuality.js'});
    }
});