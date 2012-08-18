function setBadgeColor(color){
    chrome.browserAction.setBadgeBackgroundColor({
        color: color
    });
}

function updateCount(count) {
    chrome.browserAction.setBadgeText({
        text: "" + count
    });
    if(count === 0){
        setBadgeColor("#309637");
    } else {
        setBadgeColor("#DB2323");
    }
}

function getNoty(){
    request(function(data){
        var count = data.length;
        updateCount(count);
        setTimeout(getNoty, 2000);
    });
}

updateCount("...");
getNoty();
