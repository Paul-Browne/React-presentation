function insertHTML(element, url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = xhr.responseText;
            element.outerHTML = response;
            var scripts = new DOMParser().parseFromString(response, 'text/html').querySelectorAll("SCRIPT");
            var i = 0;
            var j = scripts.length;
            while (i < j) {
                var newScript = document.createElement("SCRIPT");
                scripts[i].src ? newScript.src = scripts[i].src : newScript.innerHTML = scripts[i].innerHTML;
                document.head.appendChild(newScript);
                i++;
            }
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}
