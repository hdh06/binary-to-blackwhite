function convert(){
    const x = document.getElementById("binary_code").value;
    let div = document.createElement("div");
    if (Math.floor(Math.random() * 2) == 0)
        div.classList.add("black", "box");
    else{
        div.classList.add("white", "box");
    }
    document.getElementById("image").appendChild(div);
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