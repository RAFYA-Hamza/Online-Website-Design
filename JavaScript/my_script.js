var compteurImage=1;
var totalImage=5;

function slider(x)
{
    var image=document.getElementById('img');
    compteurImage=compteurImage+x;
    image.src="images/nano"+compteurImage+".jpg";
    
    if(compteurImage>=totalImage)
    {
        compteurImage=1; 
    }
    if(compteurImage<1)
    {
        compteurImage=totalImage; 
    }
}
function sliderauto()
{
    var image=document.getElementById('img');
    compteurImage=compteurImage+1;
    image.src="images/nano"+compteurImage+".jpg";
    
    if(compteurImage>=totalImage)
    {
        compteurImage=1; 
    }
    if(compteurImage<1)
    {
        compteurImage=totalImage; 
    }
}
window.setInterval(sliderauto,2000);

