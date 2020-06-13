list = [];

function checkCookie() {
    list = document.cookie.split(";")[0].split("&");
    // list = document.cookie;
    console.log(list);
    for (elem in Object.keys(list)) {
        createElem(list[elem]);
    }
}

function addTask(text) {
    list.push(text);
    document.cookie = list.join("&");
    console.log(document.cookie);
    createElem(text);
    // console.log(document.cookie);
}

function createElem(text) {
    if (!text || text == "&") {
        return;
    }
    var elem = document.createElement("div");
    elem.classList.add("elem");
    elem.innerHTML = text;
    elem.addEventListener("click", delTask);
    document.querySelector("#ft_list").appendChild(elem);
}

function delTask() {
    if (confirm("Do you want to delete this task?")) {
        list.splice(list.indexOf(this.innerHTML), 1);
        console.log(list);
        if (list.length) {
            document.cookie = list.join("&");
        } else {
            console.log("here");
            document.cookie = "&";
        }
        console.log(document.cookie);
        this.parentElement.removeChild(this);
    }
}
