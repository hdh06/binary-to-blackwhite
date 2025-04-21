function convert(){
    const x = document.getElementById("binary_code").value;
    let div = document.createElement("div");
    div.classList.add("black", "box");
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