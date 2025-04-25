document.getElementById("binary_code").innerHTML = "101010111";

function convert(){
    const x = new String(document.getElementById("binary_code").value);

    let col = Math.ceil(Math.sqrt(x.length));

    document.getElementById("image").innerHTML = "";

    document.getElementById("image").style.width = 10 * col + "px";

    document.getElementById("width").value = col;
    document.getElementById("height").value = col;

    for (let i = 0; i < x.length; i++){
        let div = document.createElement("div");
        if (x[i] == '1')
            div.classList.add("black", "box");
        else{
            div.classList.add("white", "box");
        }
        document.getElementById("image").appendChild(div);
    }

    // console.log(col * col, x.length);

    for (let i = x.length; i < col * col; i++){
        let div = document.createElement("div");
        div.classList.add("red", "box");
        document.getElementById("image").appendChild(div);
    }

    // alert(document.getElementById("binary_code").value);
    // alert(document.getElementById("height").value);
    // alert(document.getElementById("height").value);
}

document.addEventListener("DOMContentLoaded", () => {
    const sendBtn = document.getElementById("convertBtn");
  
    sendBtn.addEventListener("click", () => {
        convert();
    });
});