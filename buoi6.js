hienthi = () =>
{
    let x = document.getElementById("noidung").value;
    let b = x.length;
    document.getElementById("sokitu").value = x;
    
    if (b < 10)
    {
        alert("ok");
    }
    else {
        alert("qua ki tu");
    }
}