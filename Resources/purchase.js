var poWin = Titanium.UI.createWindow({
	title:'Purchase Order',
	backgroundColor:'#fff'
});

var salesmanID = Titanium.UI.createLabel();
	
var customerID = Titanium.UI.createLabel();

var timeCurrent = Titanium.UI.createLabel({  
    text:'',  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14},  
    color:'#000',  
	height:'10%', top:'2%', left:5, right:5, width:'95%'
});

function getFormattedTime()  
{
	var currentTime = new Date()
	var hr = currentTime.getHours()
	var min = currentTime.getMinutes()
	var sec = currentTime.getSeconds()
	if (hr < 10){
	hr = ' ' + hr
	}
	if (min < 10){
	min = '0' + min
	}
	if (sec < 10){
	sec = '0' + sec
	}

	// Tanggal
	var currentDate = new Date();
	var month = currentDate.getMonth() + 1;
	var day = currentDate.getDate();
	var year = currentDate.getFullYear();

	timeCurrent.text = year + '/' + month + '/' + day;
}  
var clockInterval = setInterval(getFormattedTime,10000);
getFormattedTime();  
poWin.add(timeCurrent); 

var noPO = Titanium.UI.createTextField({
	color:'#336699',
	height:'12%', top:'12%', left:5, right:5, width:'95%',
	hintText:'Nomor PO', value:'',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
poWin.add(noPO);

var btnPO = Titanium.UI.createButton({
	title:'Simpan PO',
	top:'24%', height:'12%', left:5, right:5, width:'95%',
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
btnPO.addEventListener('click',function()
{
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onerror = function() {
		var alert = Titanium.UI.createAlertDialog({
		  title: 'Status',
		  message: 'Terkirim !',
		  buttonNames: ['OK']
		});
		alert.show();
		Titanium.include('purchaselist.js');
		poWin.close();
	};
	xhr.onload = function() {
		var alert = Titanium.UI.createAlertDialog({
		  title: 'Status',
		  message: 'Terkirim !',
		  buttonNames: ['OK']
		});
		alert.show();
		Titanium.include('purchaselist.js');
	};
	xhr.onsendstream = function(e) {
		Ti.API.info('Progress: ' + e.progress);
	};	
	xhr.setTimeout = 10000;
	var xhrURL = "http://www.repostro.com:7000/purchaseorders";
	xhr.open("POST", xhrURL);	
	xhr.setRequestHeader("enctype", "multipart/form-data");
	var param={
		"purchaseorder[customer_id]":1,
		"purchaseorder[purchasedate]":timeCurrent.text,
		"purchaseorder[purchasenumber]":noPO.value,
		"purchaseorder[salesmen_id]":1
		};
	xhr.send(param);
});
poWin.add(btnPO);

var btnCancel = Titanium.UI.createButton({
	title:'Batal & Lihat List PO',
	top:'36%', height:'12%', left:5, right:5, width:'95%',
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
btnCancel.addEventListener('click',function(){
	Titanium.include('purchaselist.js');
});
poWin.add(btnCancel);

var lblDemo = Titanium.UI.createLabel({
	text:'For Demo Only' + '\n' + 'Developed By PT. Jerbee Indonesia',
	top:'88%', height:'15%', width:'95%',
	textAlign:'center'
});
poWin.add(lblDemo);

poWin.open();