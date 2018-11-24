
function toggleUnderlined(){
    let textDecoration = $("#paragraph").css("textDecoration")
    if (textDecoration=="none solide rgb(0,0,0)"){
    $("#paragraph").css("textDecoration","underline"); 
    }else{
        $("#paragraph").css("textDecoration","none solid rgb(0,0,0)")}
    }


function changeSize()
{ let size=$("#size").val();
$("#paragraph").css("fontSize",size+"px");
}

function toggleItalic()
{let fontStyle=$("#paragraph").css("fontWeight")
 if (fontStyle=="normal")
 {$("#paragraph").css("fontStyle","italic");
 }else
    {$("#paragraph").css("fontStyle","normal")
    }
}

function toggleBold(){
    let fontWeight=$("#paragraph").css("fontWeight")
 if (fontWeight=="normal" || fontWeight=="400")
 {$("#paragraph").css("fontWeight","bold");
 }else
    {$("#paragraph").css("fontWeight","normal")
    }
}
function changeFont()
{ let font=$("#font").val();
$("#paragraph").css("fontFamily",font);
}

$("#U").click(underline)
$("#B").click(bold)
$("#I").click(italic)
$("#font").change(changeFont)
$("#size").change(changeSize)

 
 /*$(".bold").click(function()
    {
    $("#paragraph").css("font-weight","bold")
    });

 $(".underline").click(function()
    {
    $("#paragraph").css("textDecoration","underline")
    });

 $(".italic").click(function()
    {
    $("#paragraph").css("fontStyle","italic")
    });

 $(".change").click(function()
    {
    $("#paragraph").css("fontSize","Size")
    });
    /*/

        


/*//  function makebold(p) {
//     p.style.fontWeight = "bold";


// }
// function init(p) {
//     p.style.fontWeight = "100";
// }

// var isBold = false
// var para = document.getElementsByClassName("para")[0]

// function toggleBold() {
//     if (isBold) {
//         init(para)

//     }
//     else {
//         makebold(para)
//     }
//     isBold = !isBold
// }

// var isItalic = false
// var par = document.getElementsByClassName("par")[0]
// function makeitalic(h) { h.style.fontStyle = "italic"; }
// function ints(h) {
//     h.style.fontStyle = "normal";
// }

// function toggleItalic() {
//     if (isItalic) {
//         ints(par)
//     }
//     else {
//         makeitalic(par)
//     }
//     isItalic = !isItalic
// }
// var underlined = false
// var pars = document.getElementsByClassName("pars")[0]
// function isUnderlined(f) {
//     f.style.textDecoration = "underline";
// }
// function intss(f) { f.style.textDecoration = "none"; }
// function toggleUnderlined() {
//     if (underlined) {
//         intss(pars);
//     }
//     else {
//         isUnderlined(pars);
//     }
//     underlined = !(underlined)
// }

// function changeFont() {
//     var fontSelection = document.getElementById("Font").value;

//     document.getElementById("paragraph").style.fontFamily = fontSelection;

// }
// function changeSize() {
//     var sizeSelection = document.getElementById("Size");
//     var size = sizeSelection.options[sizeSelection.selectedIndex].value;
//     document.getElementById("paragraph").style.fontSize = size + "px";
// 
*/