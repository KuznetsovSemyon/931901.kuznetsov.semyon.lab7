function DrawRectangle() {
    var input = document.getElementById('amount').value;
    var size, x, y, object;
    for (let i = 0; i < input; i++) {
        object = document.createElement("div");
        object.className = 'rectangle';
        size = Math.random() * 100 + 50;
        x = Math.random() * 870 + 70;
        y = Math.random() * 370 + 70;
        object.style.top = y + "px";
        object.style.left = x + "px";
        object.style.width = size + "px";
        object.style.height = size + "px";
        object.addEventListener("click", Highlight);
        object.addEventListener("dblclick", Delete);
        document.body.append(object);
    }
}

function DrawTriangle() {
    var input = document.getElementById('amount').value;
    var size, x, y, object;
    for (let i = 0; i < input; i++) {
        object = document.createElement("div");
        object.className = 'triangle';
        size = Math.random() * 100 + 50;
        x = Math.random() * 870 + 70;
        y = Math.random() * 370 + 70;
        object.style.top = y + "px";
        object.style.left = x + "px";
        object.style.borderLeft = size + "px solid transparent";
        object.style.borderRight = size + "px solid transparent";
        object.style.borderBottom = size + "px solid rgba(0, 0, 235, 0.8)";
        object.addEventListener("click", Highlight);
        object.addEventListener("dblclick", Delete);
        document.body.append(object);
    }
}

function DrawCircle() {
    var input = document.getElementById('amount').value;
    var size, x, y;
    for (let i = 0; i < input; i++) {
        object = document.createElement("div");
        object.className = 'circle';
        size = Math.random() * 100 + 50;
        x = Math.random() * 870 + 70;
        y = Math.random() * 370 + 70;
        object.style.top = y + "px";
        object.style.left = x + "px";
        object.style.width = size + "px";
        object.style.height = size + "px";
        object.addEventListener("click", Highlight);
        object.addEventListener("dblclick", Delete);
        document.body.append(object);
    }
}

function Highlight(event) {
    if (event.target.className == "triangle") {
        event.target.style.borderBottomColor = "rgba(235, 235, 0, 0.8)";
    } else {
        event.target.style.backgroundColor = "rgba(235, 235, 0, 0.8)";
    }
}

function Delete(event) {
    event.target.style.display = "none";
}