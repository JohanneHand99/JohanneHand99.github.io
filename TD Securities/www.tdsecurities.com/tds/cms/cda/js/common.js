<!--//

//this is called onload 
$(function () {
	
	/*if (document.documentElement.clientWidth > 970)
	{
		mainContainerWidth = (972 / document.documentElement.clientWidth) * 100;
	}
	else
	{
		mainContainerWidth = 100;
	}*/
	//alert(document.documentElement.clientWidth);
	$("table.mainContainer").css('width','100%');
	$("td.rightNavContainer").css('width','215px');
	$("td.leftNavContainer").css('width','191px');
	$("td.contentContainer").css('width','100%');
	
	//The following piece of code adds an invisible table to the output stream that disables the user to shrink the window size below 970px without seeing a horizontal scrollbar on the browser.
	var horzLimitShort = '<table class="horzLimitShort"><tr><td></td></tr></table>';

	if (!$("td.contentContainer > table.horzLimit").css("width") && !$("td.contentContainer > table.horzLimitShort").css("width"))
	{
		//alert("inside");
		$("td.contentContainer").append(horzLimitShort);
	}
	
	//The following code is for deciding & setting the width of the buttonContainerShort div when it exists.
	
	if ($("div.buttonContainerShort").css("width"))
	{
		setButtonWidth();
	}

	//The following code checks if "businessAreas" element exists. If it does, then it stores its height into a variable. This value is then used for drawing vertical dividers for the cols5 div.
	if (document.getElementById("businessAreas")) {
		var bizAreas = document.getElementById("businessAreas").clientHeight;
		$("#businessAreas .vertDivider").css("height", (bizAreas - 15) + "px");
	}
	else
	{
			bizAreas = 0;		
	}
	
	/*var picWidth = $("div.topBannerWrapper > img").attr("width");
	var entireWidth = ($("div.contentSection").css("width"));
	entireWidth = getWidth(entireWidth);
	$("div.topBannerWrapper > div.bannerContentWrapper").css("width",(entireWidth - picWidth - 1) + "px");*/
	
	//The following lines are for setting the padding-right values of the title, description and link classes when the image is shorter than 265px.
	//$("div.bannerContentWrapper > div.title").css("paddingRight",(entireWidth - picWidth) / 6 + "px");
	//$("div.bannerContentWrapper > div.description").css("paddingRight",(entireWidth - picWidth) / 6 + "px");
	//$("div.bannerContentWrapper > div.link").css("paddingRight",(entireWidth - picWidth) / 6 + "px");
	
	//The following portion is for animating the agenda page's columns where there are portions that need to be expanded when the user clicks on the more/hide links.
	var linkContainer = $("td.hasData > div > span.linkContainer");
	var moreContainer = $("td.hasData > div.initial > span.linkContainer");
	var hideContainer = $("td.hasData > div.full > span.linkContainer");
	
	linkContainer.mouseover
	(
		function()
		{
			$(this).css("cursor","pointer");
			$(this).children("a").css("text-decoration","underline");
		}
	);
	
	linkContainer.mouseout
	( 
		function()
		{
			$(this).children("a").css("text-decoration","none");
		}
	);
	
	moreContainer.mousedown
	(
		function()
		{
			$(this).parent().css("display","none");
			$(this).parent().siblings("div.full").css("height","15px");
			$(this).parent().siblings("div.full").css("overflow","hidden");
			$(this).parent().siblings("div.full").css("display","block");
			var targetHeight = $(this).parent().siblings("div.full").children("span.text")[0].clientHeight + $(this).parent().siblings("div.full").children("span.linkContainer")[0].clientHeight;
			$(this).parent().siblings("div.full").animate({height: targetHeight}, 100);
		}
	);
	
	hideContainer.mousedown
	(
		function()
		{
			$(this).parent().animate({height: 15}, 100, function()
			{
				$(this).css("display", "none");
				var initialDiv = $(this).siblings("div.initial");
				initialDiv.css("display", "block");
			});
		}
	 );
	
	//The following piece of code is for animating the world map that's on the Contact Us page. The appearance/disappearance times are customizable.
	var origWidth;
	$("div.worldMap > img").each(
	
	function(i)
	{
			//if ($(this).attr("id") != "tokyo" && $(this).attr("id") != "seoul")
			//{
		$(this).mousedown( function() 
		{
					gotoAnchor('#' + $(this).attr("id") + 'Anchor');
		});
		$(this).hover(function() 
		{ 
			$("#infoBox").css("display","none");
			createBox(this);
			$("#infoBox").fadeIn(500,function()
				{
					//document.getElementById('infoBox').style.width = origWidth;
				});
		},function()
		{
			$("#infoBox").fadeOut(500,function()
				{
					document.getElementById('infoBox').style.display = 'none';
				});
			//resetBox(this);
		});
			//}
	});
	
	//The following piece of code is for setting the correct border-line of all the cols2TextOnly divs based on the tallest column.
	$("div.cols2TextOnly > div.leftElement").each(
	function(i)
	{
		var rightElement = $(this).siblings("div.rightElement")[0];
		var leftElement = $(this)[0];
		var leftHeight = leftElement.clientHeight;
		var rightHeight = rightElement.clientHeight;
		if (rightHeight > leftHeight)
		{
			$(this)[0].style.borderRight = 'none';
			rightElement.style.borderLeft = '1px solid #d6e4d9';
		}
	});
		
	//The following piece of code is for setting the height of each column in the cols3HasImage based on the tallest column's height.
	$("div.cols3HasImage").each(
	function(i)
	{
		var leftCol = $(this).children("div.colContainer")[0];
		var middleCol = $(this).children("div.colContainer")[1];
		var rightCol = $(this).children("div.colContainer")[2];

		// return if any of these elements are not defined
		if(!rightCol || !middleCol || !rightCol)
		{
			return;
		}
		
		var leftHeight = leftCol.clientHeight;
		var middleHeight = middleCol.clientHeight;
		var rightHeight = rightCol.clientHeight;
		
		var maxHeight = Math.max(leftHeight,middleHeight);
		maxHeight = Math.max(maxHeight,rightHeight);
		
		leftCol.style.height = maxHeight;
		middleCol.style.height = maxHeight;
		rightCol.style.height = maxHeight;
	});
})
//-->

//This function returns a numerical value of the location of a text inside the "navigator.userAgent" text string. 
function checkBrowser(name)
{
	var place = navigator.userAgent.toLowerCase().indexOf(name) + 1;
	return place;
}
function mouseOverRightNav(obj)
{
	obj.style.backgroundColor='#CDDCE5';
	obj.style.textDecoration='none';
}
function mouseOutRightNav(obj)
{
	obj.style.backgroundColor='#fff';
}
//The following function must be modified if it's to be used. A call to the server needs to be made and the dynamic values should be inserted into the table creator section.
function reloadTable()
{
	document.getElementById("tableHolder").innerHTML="<table class=\"cols2Transactions\" cellspacing=\"0\" cellpadding=\"0\">\
							<thead>\
								<tr>\
									<th>Modified Heading</th>\
									<th class=\"last\">Modified Heading</th>\
								</tr>\
							</thead>\
							<tbody>\
								<tr>\
									<td>\
										<div class=\"date\">modified date</div>\
										<div class=\"client\">Modified Client Name</div>\
										<div class=\"sellingPrice\">Modified Price</div>\
									</td>\
									<td class=\"last\">\
										<div class=\"assetName\">Modified asset name</div>\
										<div class=\"description\">Modified description.</div>\
										<div class=\"location\">Modified location.</div>\
									</td>\
								</tr>\
								<tr>\
									<td class=\"darkGreen\">\
										<div class=\"date\">modified date</div>\
										<div class=\"client\">Modified Client Name</div>\
										<div class=\"sellingPrice\">Modified Price</div>\
									</td>\
									<td class=\"darkGreen last\">\
										<div class=\"assetName\">Modified asset name</div>\
										<div class=\"description\">Modified description.</div>\
										<div class=\"location\">Modified location.</div>\
									</td>\
								</tr>\
							</tbody>\
						</table>";
}

function fnCreateTitle(title)
{
	var titleToShow = null;
	if ((null != title) && ("" != title))
	{
		titleToShow = title.substring(title.lastIndexOf("/") + 1, title.length);
	}
	else 
	{
		titleToShow = "Home Page";
	}
	document.title = "TD Securities - " + titleToShow;
}

function openURL(url)
{
	window.open(url);
}

function submitFooterDropdown(varField, varEvent, url)
{
	
	var keycode;
	keycode = captureKeyCode(varField, varEvent);
	if (keycode == 13) {
	   openURL(url);
	} else {
	   return true;
    }	
}

function submitTransForm()
{
	document.transForm.submit();
}

//This function calculate the current date.
function getCurrentDate()
{
	//var dayarray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
	var montharray = new Array("January","February","March","April","May","June","July","August","September","October","November","December")
	var mydate = new Date();
	var year = mydate.getYear();
	if (year < 1000)
		year += 1900;
	var day = mydate.getDay();
	var month = mydate.getMonth();
	var daym = mydate.getDate();
	if (daym<10)
		daym = "0" + daym;
	var hours = mydate.getHours();
	var minutes = mydate.getMinutes();
	var seconds = mydate.getSeconds();
	var dn = "AM";
	if (hours >= 12)
		dn = "PM";
	if (hours > 12)
		hours = hours - 12;
	if (hours == 0)
		hours = 12;
	if (minutes <= 9)
		minutes = "0" + minutes;
	if (seconds <= 9)
		seconds = "0" + seconds;
	
	var cdate = montharray[month]+" "+daym+", "+year;	//Removed dayarray[day]+" "+ from start

	if (document.all)
	{
		document.all.clock.innerHTML = cdate;
	}
	else if (document.getElementById)
	{
		document.getElementById("clock").innerHTML = cdate;
	}
	else
	{
		document.write(cdate)
	}
}
	if (!document.all && !document.getElementById)
		getCurrentDate();

function getDate(){
if (document.all || document.getElementById)
	getCurrentDate();
}

// To get links on click.
function fnHandleClick(obj)
{
	var i=-1;
	var len = document.getElementsByName("HidingLI").length;

	for (i = 0; i <len; i++)
	{
		document.getElementsByName("HidingLI")[i].className = "liTextNoDisplay";
	}													
	/////////////
	len = document.getElementsByName("HidingLIParent").length;
		for (i = 0; i <len; i++)
		{
			if (obj == document.getElementsByName("HidingLIParent")[i] )
				{
					break;
				}
		}											
		document.getElementsByName("HidingLI")[i].className = "liText";
}

function fnPerformSearch(validationMesssage, p_locale)
{
	var strQuery = document.searchForm.searchVal.value;
	if (strQuery != "")
	{			
		strQuery = encodeURIComponent(strQuery);
		document.searchForm.action = "?command=doSearch&q="+strQuery+"" +"&language="+p_locale;
		document.searchForm.submit();			
	}
	else
	{
		alert(validationMesssage);
		document.searchForm.searchVal.focus();
	}
}

function replaceAll(str, search, replacement) {
	var temp;
   while(str.indexOf(search) >= 0) {	
      temp = str;
      str = temp.replace(search, replacement);	
   }
   return str;
}



function showSelectedProperty()
{
	document.transForm.submitAction.value = document.transForm.TransactionType.value + document.transForm.submitAction.value

	document.transForm.action = document.transForm.submitAction.value;
	document.transForm.submit();
}

function showSelectedPropertyEnter(varField, varEvent)
{
	var keycode;
	keycode = captureKeyCode(varField, varEvent);
	if (keycode == 13) {
	   showSelectedProperty();
	   return false;
	} 
}

function submitSearchBoxEnterKey(varField, varEvent ,validationMesssage)
{
	var keycode;
	keycode = captureKeyCode(varField, varEvent);
	if (keycode == 13) {
	   fnPerformSearch(validationMesssage);
	   return false;
	} else {
	   return true;
    }	
}

function submitSearchBoxEnterKey(varField, varEvent ,validationMesssage, p_localeID)
{
	var keycode;
	keycode = captureKeyCode(varField, varEvent);
	if (keycode == 13) {
	   fnPerformSearch(validationMesssage, p_localeID);
	   return false;
	} else {
	   return true;
    }	
}

//generic toggle show/hide
function toggleItemDisplay(id1,id2){
	document.getElementById(id1).style.display='none';
	document.getElementById(id2).style.display='block';
}
//function for drawing out the rectangle nearby a particular city's circle
function createBox(obj)
{
	leftVal = obj.offsetLeft;
	topVal = obj.offsetTop;
	//alert(leftVal +'  '+topVal);
	//alert(document.getElementById('contentContainer').clientWidth);
	//alert(self.screen.width);
	//alert(document.documentElement.clientWidth);
	//alert(obj.offsetLeft);
	//alert(obj.offsetTop);
	

	//document.getElementById('infoBox').style.display='block';
	
	var cityName = "";
	var cityAnchorId = "";
	if (obj != null)
	{
		cityAnchorId = obj.id;		
		if(document.getElementById(cityAnchorId+'Label')!=null){
			cityName = document.getElementById(cityAnchorId+'Label').value;
		}
	}
		
	document.getElementById('infoBox').innerHTML = '<strong>' + cityName + '</strong><br />';
	document.getElementById('infoBox').style.width = cityName.length * 10 + 'px';
	
	leftVal = setLeftVal(leftVal,obj.style.left,cityName.length * 10);
	topVal = setTopVal(topVal);
	
	document.getElementById('infoBox').style.left=leftVal;
	document.getElementById('infoBox').style.top=topVal;
	//document.getElementById('infoBox').style.display='block';
}

function setLeftVal(leftPos,leftStyleVal,textLength)
{
	pPos = leftStyleVal.indexOf('p');
	if (eval(leftStyleVal.substring(0,pPos)) <= 242)
	{
		leftVal = leftPos + 10;
	}
	else
	{
		leftVal = leftPos - textLength - 30;
	}
	leftVal = leftVal + "px";
	return leftVal;
}
function setTopVal(topPos)
{
	topVal = topPos - 12 + "px";
	return topVal;
}
function getWidth(val)
{
	var pPos = val.indexOf('p');
	var width = val.substring(0,pPos);
	return width;
}
//The following function is for taking the user to the desired anchor on a page when a value from a dropdown is selected and a button is clicked on.
function gotoAnchor(whichAnchor){
	var curURL = document.location.href;
	/*remove any previous anchors from curURL if they exist*/
	var oldAnchorLoc = curURL.indexOf("#");
	if (oldAnchorLoc != -1){
		curURL = curURL.substring(0,oldAnchorLoc);
	}
	var anchorURL = curURL + whichAnchor;
	document.location.href = anchorURL;
}

function findOfficeInfo(){

	var countryField = document.countrySelection.country;
	var selectedCountry = '';
	
	if(countryField!=null){
		selectedCountry = countryField.options[countryField.options.selectedIndex].value;
		gotoAnchor(selectedCountry);
	}
}

function submitCountryDropdown(varField, varEvent)
{
	
	var keycode;
	keycode = captureKeyCode(varField, varEvent);
	if (keycode == 13) {
	   findOfficeInfo();
	   return false;
	} else {
	   return true;
    }	
}

function ShowHideRFE(moreText, closeText, locale , displayMoreTextEditLink , displayCloseTextEditLink)
{

			if ($("div.contactsContainer > div.linkContainer").text() == moreText)
			{
				$("div.contactsContainer > div.hidden").slideDown(500, function() { $("div.contactsContainer > div.linkContainer").html('<span style="color:#0086AC;">' + closeText + '</span>');});
				
				if(document.getElementById('contactLinksPreview')!=null && displayCloseTextEditLink == 'true' ){
				
					document.getElementById('contactLinksPreview').innerHTML = '<img  title="Edit Label" alt="Edit Label" onclick="javascript:openRBWidgetDialog(\'XSL_Label_Close\',\''+ locale + '\')" onmouseover="this.style.cursor=\'pointer\'" src="../cms/cma/images/edit.gif"/>'
				}
				
				return false;
			}
			else
			{
				$("div.contactsContainer > div.hidden").slideUp(500, function() { $("div.contactsContainer > div.linkContainer").html('<span style="color:#0086AC;">' + moreText + '</span>');});
				
				if(document.getElementById('contactLinksPreview')!=null && displayMoreTextEditLink == 'true'){
				
					document.getElementById('contactLinksPreview').innerHTML = '<img  title="Edit Label" alt="Edit Label" onclick="javascript:openRBWidgetDialog(\'XSL_Label_More\',\''+ locale + '\')" onmouseover="this.style.cursor=\'pointer\'" src="../cms/cma/images/edit.gif"/>'
				}
				
				return false;
			}
}

function checkDate(obj)
{
	var formpath=document.forms[obj];
	//formpath.viewAll.value = "false";
	//checking if the checkbox exists & is checked , if yes then returning true as no validations are then required
	var selectedFromYear;
	var selectedFromMonth="00";
	var selectedFromDay="00";
	
	var selectedToYear;
	var selectedToMonth="00";
	var	selectedToDay="00";

	//checking if the DOM elements for 'fromMonth' and 'toMonth' exists, if they exist then process them
	if(formpath.fromYear && formpath.toYear)
	{
		selectedFromYear=formpath.fromYear.value;
		selectedToYear = formpath.toYear.value;
	}
	
	//checking if the DOM elements for 'fromMonth' and 'toMonth' exists, if they exist then process them
	if(formpath.toMonth && formpath.fromMonth)
	{
		selectedToMonth=optimizeLength(formpath.toMonth.value);
		selectedFromMonth=optimizeLength(formpath.fromMonth.value);
	}
	
	//checking if the DOM elements for 'fromDay' and 'toDay' exists, if they exist then process them
	if(formpath.toDay && formpath.fromDay)
	{
		selectedToDay=optimizeLength(formpath.toDay.value);
		selectedFromDay=optimizeLength(formpath.fromDay.value);
	}
	

	var fromDate = selectedFromYear + selectedFromMonth + selectedFromDay;
	var toDate = selectedToYear + selectedToMonth + selectedToDay;
	
	if(toDate >= fromDate)
	{	
		if (obj == 'shareInfoForm')
		{
			var pathInfo = document.searchForm.hdnPathInfo.value;			
			if (null != pathInfo)
			{
				pathInfo = pathInfo.substring(pathInfo.lastIndexOf("\\")+1);
			}
			formpath.hdnPathInfoTruncated.value = pathInfo;
		}
		formpath.submit();
	}
	else
	{

		alert(formpath.invalidDateErrorMessage.value);
		formpath.fromMonth.focus();
	}	

}

function submitDateFormEnter(varField, varEvent, varFormName)
{	
	var keycode;
	keycode = captureKeyCode(varField, varEvent);
	if (keycode == 13) {
	   checkDate(varFormName);
	   return false;
	} else {
	   return true;
    }	
}

function optimizeLength(obj)
{
	if (obj.length<2)
	{
		obj="0"+obj;
	}
	return obj;
}
//The following is for setting the width of the buttonContainerShort div's width based on client width & user resize.
	
function setButtonWidth()
{	
	var firstWidth = 0;
	if ($("div.buttonContainerShort").css("width"))
	{		
		var buttonContainer = $("div.buttonContainerShort");		
		if (buttonContainer.siblings("div.textTextAreaPair").children("div.short").length > 0)
			firstWidth = buttonContainer.siblings("div.textTextAreaPair").children("div.short")[0].clientWidth;
		secondWidth = buttonContainer.siblings("div.textTextAreaPair").children("textarea")[0].clientWidth;
		if (checkBrowser('ie') > 0)
		{
			var additionalWidth = 33;	
		}
		else if (checkBrowser('mozilla') > 0)
		{
			var additionalWidth = 20;
		}
		else
		{
			var additionalWidth = 20;
		}		
		buttonContainer.css("width", firstWidth + secondWidth + additionalWidth + 'px');
			
		return true;
	}
}


function checkCorrectEmail(emailAdd){
	var re=new RegExp("^[a-zA-Z0-9_.-]{1,}@[a-zA-Z0-9_-]{1,}(\\.\\w{2,4})+$");
	if (!re.test(emailAdd)){		
		return false;
	}
	else{
		return true;
	}
}


function viewAllDistData()
{
	var pathInfo = document.searchForm.hdnPathInfo.value;			
	if (null != pathInfo)
	{
		pathInfo = pathInfo.substring(pathInfo.lastIndexOf("\\")+1);
	}
	document.shareInfoForm.hdnPathInfoTruncated.value = pathInfo;
	document.shareInfoForm.viewAll.value = 'true'; 
	document.shareInfoForm.submit();
}

function openTDFxDemo(form) {   

   var url = "http://www.tdsecurities2.com/web/TDwebFXDemo2007.nsf/tdfx_public.swf";
   window.open(url, "TDFXDemo", "height=600,width=1050,screenX=100, screenY=100,alwaysRaised=true,scrollbars=no,resizable=no");   
}


function openTDFx (url) { 

  window.open(url,"tdfx",  "height=620,width=894,screenX=5, screenY=5,alwaysRaised=true,scrollbars=no,resizable=no");
  
}

function launchCalendar () {
     remote  = window.open("http://www.tdsecurities2.com/home.nsf/vrtf/NewCareer/$file/CareersCal_fin10.html", 
     "Calendar",
	"menubar=no,toolbar=no,location=no,directories=no,status=no,scrollbars=no,resizable=no,dependent,width=645,height=425,left=0,top=0")
}

function openLoginPage(url)
{	
	if (url.lastIndexOf("(") > -1)
	{		
		setTimeout(url.substring(url.indexOf(":")+1), 10);
	}
	else
	{
		window.open(url);
	}
}

function submitGuideFormEnter(varField, varEvent, url)
{
	
	var keycode;
	keycode = captureKeyCode(varField, varEvent);
	if (keycode == 13) {
	   openLoginPage(url);
	} else {
	   return true;
    }	
}

function playFlashMovie(objId, fileName)
{	
	var html = "<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0\" width=\"455\" height=\"256\" id=\"flashObject\" align=\"middle\">\
						<param name=\"allowScriptAccess\" value=\"sameDomain\" />\
						<param name=\"movie\" value=\""+fileName+"\" />\
						<param name=\"quality\" value=\"high\" />\
						<param name=\"bgcolor\" value=\"#ffffff\" />\
						<embed src=\""+fileName+"\" swliveconnect=\"true\" quality=\"high\" bgcolor=\"#ffffff\" width=\"455\" height=\"256\" name=\"flashObject\" align=\"middle\" allowScriptAccess=\"sameDomain\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" />\
					</object>";
	document.getElementById(objId).innerHTML = html;	
}

   
// Disable form elements and links in all frames.
function disableAllLinks() {
    var linkClicks = new Array();
    for (var i = 0; i < document.forms.length; i++) {
        for (var j = 0; j < document.forms[i].elements.length; j++) {
            document.forms[i].elements[j].disabled = true;
        }
    }
       for (i = 0; i < document.links.length; i++) {
        linkClicks[i] = {click:document.links[i].onclick, up:null};
        linkClicks[i].up = document.links[i].onmouseup;
        document.links[i].onclick=function(){return false;};
    } 
}

function enableAllLinks() {
    var linkClicks = new Array();
    for (var i = 0; i < document.forms.length; i++) {
        for (var j = 0; j < document.forms[i].elements.length; j++) {
            document.forms[i].elements[j].disabled = false;
        }
    }
       for (i = 0; i < document.links.length; i++) {
        linkClicks[i] = {click:document.links[i].onclick, up:null};
        linkClicks[i].up = document.links[i].onmouseup;
        document.links[i].onclick=function(){return true;};
        document.links[i].style.cursor="pointer";
    } 
}

function submitDynamicForm(){
	if(validateAllFieldsOfDynamicForm()){	
		encodeDynamicForm();	
		document.dynamicForm.submit();	
	}
}

function validateAllFieldsOfDynamicForm(){
	var hiddenDiv = document.getElementById('validationMessageDiv');
	hiddenDiv.innerHTML = "";
	var allValidationFields = getElementsByClassName('validation');
	return(doValidation(allValidationFields, null));
}

function doValidation(allValidationFields, otherFieldsPresent) {	
	var hiddenDiv = document.getElementById('validationMessageDiv');	
	var regEx;
	var regExList;
	var valMsgList;
	var regExCSV;
	var valMsgCSV;
	var validationMessages = "";
	var validationPassed = true;
	var formFieldLabelId;
	var formFieldLabel;
	var formFieldId;
	var formFieldValMsg;
	var replaceToken = "#fieldlabel#";
	for(var i=0;i<allValidationFields.length;i++) {
		formFieldId = allValidationFields[i].id;
		formFieldLabelId = formFieldId.substring(0,formFieldId.length-6)+'.label'; 
		formFieldLabel = document.getElementsByName(formFieldLabelId).item(0).value;
		regExCSV = allValidationFields[i].getAttribute('regex');
		valMsgCSV = allValidationFields[i].getAttribute('validationMessages');
		formFieldTagname = allValidationFields[i].tagName;
		if(regExCSV!=null && regExCSV!=';' && valMsgCSV!=null && valMsgCSV!=';') 
		{
			if(formFieldTagname.toLowerCase() == 'input'||formFieldTagname.toLowerCase() == 'textarea'||formFieldTagname.toLowerCase() == 'select') {
				var lastComma = regExCSV.lastIndexOf(';');
				regExCSV = regExCSV.substring(0,lastComma);
				regExList = regExCSV.split(';');
				
				lastComma = valMsgCSV.lastIndexOf(';');
				valMsgCSV = valMsgCSV.substring(0,lastComma);
				valMsgList = valMsgCSV.split(';');
				formFieldType = allValidationFields[i].type;
				var formValue = allValidationFields[i].value;
				formValue = formValue.replace(/^\s+|\s+$/g,'');
				for(var j=0;j<regExList.length;j++) {
				
						if(regExList[j]!='Custom Expression') {
							regEx = RegExp(regExList[j]);
							
							if(formFieldType == 'select-multiple') {
								var multiValue = allValidationFields[i].options;
								if(regExList[j] == '.+') {
									var selectvalidationPassed =  false;
									for(var z=0;z<multiValue.length;z++)
									{
										if (multiValue[z].selected){
											if(multiValue[z].value != '') {
												selectvalidationPassed =  true;
												break;
											}
										}
									}
									if(!selectvalidationPassed)
									{
										formFieldValMsg = valMsgList[j];
										validationMessages = validationMessages + replaceAll(formFieldValMsg,replaceToken,formFieldLabel) + "<br/>";
										validationPassed =  false;
									}
								} else {
									var selectvalidationPassed =  true;
									for(var z=0;z<multiValue.length;z++)
									{
										if (multiValue[z].selected){
											if(!multiValue[z].value.match(regEx)) {
												selectvalidationPassed =  false;
												break;
											}
										}
									}
									if(!selectvalidationPassed)
									{
										validationPassed =  false;
										formFieldValMsg = valMsgList[j];
										validationMessages = validationMessages + replaceAll(formFieldValMsg,replaceToken,formFieldLabel) + "<br/>";
									}
								}
							}
							else if(!formValue.match(regEx)) {
								formFieldValMsg = valMsgList[j];
								validationMessages = validationMessages + replaceAll(formFieldValMsg,replaceToken,formFieldLabel) + "<br/>";
								validationPassed =  false;
							} 
						}	
				}
			}
	
	else if(formFieldTagname.toLowerCase() == 'div'){
	 
		 var lastCommaValMsg = valMsgCSV.lastIndexOf(';');
		 valMsgCSV = valMsgCSV.substring(0,lastCommaValMsg);
		 var lastCommaRegEx = regExCSV.lastIndexOf(';');
		 regExCSV = regExCSV.substring(0,lastCommaRegEx);
		 
		 if(regExCSV == '.+' && valMsgCSV!=';')
			{
				var childFields = allValidationFields[i].getElementsByTagName('input');
				var isChecked = false;
				for(var k=0;k<childFields.length;k++)
				{
					if(childFields[k].checked == true)
					{
						isChecked = true;
						break;
					}
				}
				if(!isChecked)
				{	
					formFieldValMsg = valMsgCSV;
					validationMessages = validationMessages + replaceAll(formFieldValMsg,replaceToken,formFieldLabel) + "<br/>";
					validationPassed =  false;
				}
			
			}
	
		}
	}
	}
	if(!validationPassed){
		var html = "<b>";
		html = html + validationMessages;
		html = html+"</b>";

		hiddenDiv.style.display = "block";
		hiddenDiv.innerHTML=hiddenDiv.innerHTML + html;
		return false;
	}
	if(otherFieldsPresent!= null && otherFieldsPresent && hiddenDiv.innerHTML == "") {
		hiddenDiv.style.display = "none";
	}	
	return true;
}


function encodeDynamicForm() 
{

	var textBoxArray = document.getElementsByTagName('input');
	
	for (i = 0; i < textBoxArray.length; i++) {

		var formFieldId = textBoxArray[i].id;
			if(formFieldId != null && formFieldId != 'null' && formFieldId != '' ){

				var formFieldValue = textBoxArray[i].value;
			    if(formFieldValue != 'null' 
			     		&&  formFieldValue != null 
			     			&&  formFieldValue != ''){	 
			    formFieldValue = replaceAll(formFieldValue, '<', '');
				formFieldValue = replaceAll(formFieldValue, '>', '')
				formFieldValue = replaceAll(formFieldValue, '"', '&quot;')
				document.getElementById(formFieldId).value= formFieldValue;	
			}

	    } 
	}
	
	var textAreaArray = document.getElementsByTagName('textarea');
	
	for (i = 0; i < textAreaArray.length; i++) {
		var formFieldId = textAreaArray[i].id;
		if(formFieldId != null && formFieldId != 'null' && formFieldId != '' ){

			var formFieldValue = textAreaArray[i].value;
		    if(formFieldValue != 'null' 
		     		&&  formFieldValue != null 
		     			&&  formFieldValue != ''){	 
		    formFieldValue = replaceAll(formFieldValue, '<', '');
			formFieldValue = replaceAll(formFieldValue, '>', '')
			formFieldValue = replaceAll(formFieldValue, '"', '&quot;')	
			document.getElementById(formFieldId).value= formFieldValue;		
		    } 
	    }
	}
	

}


//Get all the elements of the given classname of the given tag.
function getElementsByClassName(classname,tag) {
	 if(!tag) tag = "*";
	 var anchs =  document.getElementsByTagName(tag);
	 var total_anchs = anchs.length;
	 var regexp = new RegExp('\\b' + classname + '\\b');
	 var class_items = new Array()
	 
	 for(var i=0;i<total_anchs;i++) { //Go thru all the links seaching for the class name
	  var this_item = anchs[i];
	  if(regexp.test(this_item.className)) {
	   class_items.push(this_item);
	  }
	 }
	 return class_items;
}

function submitDynamicFormEnter(varField, varEvent)
{
	
	var keycode;
	keycode = captureKeyCode(varField, varEvent);

	if (keycode == 13 ) {
		if(validateAllFieldsOfDynamicForm()){
		encodeDynamicForm();
		varField.form.submit();
		}
		else{
		return false;
		}
	   
	} else {
		return true;	
    }
}

function resetDynamicForm(){
var url = window.location.href;
window.location.href= window.location.href;
	
}

function addLoadEvent(func) { 
 var oldonload = window.onload; 
  if (typeof window.onload != 'function') { 
    window.onload = func; 
 	  } else { 
  		 window.onload = function() { 
    	if (oldonload) { 
       oldonload(); 
    	 } 
	   	 func(); 
	    } 
 	} 
} 

function searchOnLoad() {
	var searchElement = document.getElementById('searchValue');
	var searchValue;
	if(searchElement != '' && searchElement != null){
		searchValue = searchElement.value;
		if(searchValue == null || searchValue == "") {
			document.getElementById('searchName').value = document.getElementById('searchText').value;
		} else {
			document.getElementById('searchName').value = searchValue
		}
	}
}

function toggleSearchBox() {

	if(document.getElementById('searchValue').value == "" && (document.getElementById('searchName').value == document.getElementById('searchText').value)) {
		document.getElementById('searchName').value = ""
	}
}

function refillSearchBox() {

	if((document.getElementById('searchValue').value == "") && (document.getElementById('searchName').value == "")) {
		document.getElementById('searchName').value =  document.getElementById('searchText').value;
	}
}
