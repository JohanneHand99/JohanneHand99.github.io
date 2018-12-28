var count=0;
var nudi_top=50;
var nudi_left=50;
var nCount = 0;
var fade_started=0;
var imgDelay ;
var selectedImage;

var iTimerID = 0;
function fnFadeImagesAfterLoading() 
{		
	imgDelay = getDelay();
	window.clearInterval(iTimerID);

	iTimerID = window.setInterval("changeImage()", imgDelay);
}

function getDelay()
{
	var imageDelayArray = document.getElementsByName("RotatingImageDelay") ;
    
    selectedImage = parseInt(document.getElementById("hdnSelectedTombstoneId").getAttribute("position"));

    if(selectedImage < 0 )
    	selectedImage = imageDelayArray.length - 1 ;
	imgDelay = imageDelayArray[selectedImage].value ;

	return imgDelay;
}

function changeImage()
{	
	var imagesArray = document.getElementsByName("hdnTombstoneName");
	selectedImage = parseInt(document.getElementById("hdnSelectedTombstoneId").getAttribute("position"));

	if (imagesArray != null && imagesArray.length > 1)
	{ 
		document.getElementById("imgHidden").src = imagesArray[selectedImage+1].value + "";
		
		if(document.getElementById("imgFadingTime") != null && document.getElementById("imgFadingTime").value != "") {
			var fadingTime = parseInt(document.getElementById("imgFadingTime").value);
			// fading time is halved as half time is taken by fade in and half by fade out.
			if (fadingTime!=null && fadingTime > -1) {
				fadeTrans("RotatingImageId","imgHidden", fadingTime/2 ,selectedImage+1 );
			}
		}
	}
	else
	{   
		window.clearInterval(iTimerID);
		return;
	}

	if (imagesArray.length != selectedImage+2)
	{   
		document.getElementById("hdnSelectedTombstoneId").setAttribute("position", selectedImage+1);
		fnFadeImagesAfterLoading();
	}
	else
	{
		document.getElementById("hdnSelectedTombstoneId").setAttribute("position", -1);
		fnFadeImagesAfterLoading();
	}
}

function fadeTrans(id1, id2, t1 , idtoBeAppended)
{   
	if(fade_started==0)
	{
		fade_started=1;
		opacity(id1,100,0,t1);
		setTimeout("fadeTrans('"+id1+"', '"+id2+"', "+t1+" ,"+idtoBeAppended+" )",t1);
	}
	else
	{
	
		document.getElementById(id1).src = document.getElementById(id2).src;
		if(document.getElementById("AltText"+idtoBeAppended) != null ){
			document.getElementById(id1).alt=document.getElementById("AltText"+idtoBeAppended).value;
		}
		
		if(document.getElementById("linkURL"+idtoBeAppended) != null ){
			var linkURLStr = document.getElementById("linkURL"+idtoBeAppended).value;
			var imageElement = document.getElementById(id1);
			if(linkURLStr!='') {
				if(document.getElementById("target"+idtoBeAppended) != null ){
					var targetStr =document.getElementById("target"+idtoBeAppended).value;
					if(targetStr=='Y' || targetStr=='y') {
						targetStr = '_blank';
					} else {
						targetStr = '_self';
					}
					imageElement.onclick=function() {openLink(linkURLStr,targetStr);};
					imageElement.setAttribute("onmouseover","this.style.cursor='pointer'");
					imageElement.style.cursor = 'pointer';
					
				}
				
			} else {
				imageElement.onclick=function() {};
				imageElement.setAttribute("onmouseover","this.style.cursor='default'");
				imageElement.style.cursor = 'default';
			}
			
		}
		opacity(id1, 0, 100, t1);
		setTimeout("fadeTransComplete()",t1);
	}
}
function fadeTransComplete()
{
	fade_started=0;
}

function opacity(id,opacStart,opacEnd,millisec)
{ 
	//speed for each frame
	var speed = Math.round(millisec / 100);		
	var timer = 0;
	
	//determine the direction for the blending, if start and end are the same nothing happens
	if(opacStart > opacEnd)
	{
		for(i = opacStart; i >= opacEnd; i--)
		{
		setTimeout("changeOpac(" + i + ",'" + id + "')",(timer * speed));
		timer++;
		}
	}
	else if(opacStart < opacEnd)
	{
		for(i = opacStart; i < opacEnd; i++)
		{
			setTimeout("changeOpac(" + i + ",'" + id + "')",(timer * speed));
			timer++;
		}
	}
}
//change the opacity for different browsers
function changeOpac(opacity,id)
{
	var object = document.getElementById(id).style; 
	object.opacity = (opacity / 100);
	object.MozOpacity = (opacity / 100);
	object.filter = "alpha(opacity=" + opacity + ")";
}

function openLink(url,target) {
var win = open(url,target);
}