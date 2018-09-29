var currentTab
var add

browser.browserAction.onClicked.addListener(updateActiveTab);

function updateActiveTab(tabs) {
  function geturl(tabs) {
    currentTab = tabs[0];
	add = currentTab.url;
	console.log("add");
  }
  var activetab = browser.tabs.query({active: true, currentWindow: true});
  activetab.then(geturl);
}

  