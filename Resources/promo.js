var promoWin = Titanium.UI.createWindow({
	title:'Promo',
	backgroundColor:'#fff'
});

//var form1View = Titanium.UI.createScrollView({
//	left:10, right:10, top:10, bottom:10,
//	contentHeight:300, width: '100%',
//	textAlign:'center',
//	exitOnClose: false
//});
//promoWin.add(form1View);
//
//var photoView = Ti.UI.createImageView({
//	width:'95%', height:180, top:5, left:5,
//	backgroundColor:'#bbbbbb',
//	borderColor:'#ffffff', borderWidth:5
//});
//form1View.add(photoView);
//
//var okPhoto = Titanium.UI.createButton({
//	title: 'OK',
//	width: '45%', height:40, top: 200, left: 5,
//	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
//});
//form1View.add(okPhoto);
//
//var cancelPhoto = Titanium.UI.createButton({
//	title: 'Cancel',
//	width: '45%', height:40, top: 200, left: '50%',
//	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
//});
//form1View.add(cancelPhoto);
//
//okPhoto.addEventListener('click',function(){
////	entryWindow.close();
////	lblTime.text = timeSend.text;
////	lblNoSL.text = noSL.value;
////	lblStandMeter.text = standMeter.value;
////	lblKondisiLingkungan.text = kondisiLingkunganString;
////	lblKondisiWM.text = kondisiWMString;
////	Titanium.include('preview.js');
//});
//
//cancelPhoto.addEventListener('click',function(){
////	Titanium.include('camera.js');
//});

var placeName = Titanium.UI.createTextField({
	color:'#336699',
	height:'12%', top:'2%', left:5, right:5, width:'95%',
	hintText:'Nama Tempat', value:'',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
promoWin.add(placeName);

var address = Titanium.UI.createTextField({
	color:'#336699',
	height:'12%', top:'14%', left:5, right:5, width:'95%',
	hintText:'Alamat', value:'',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
promoWin.add(address);

var note = Titanium.UI.createTextArea({
	color:'#336699',
	height:'20%', top:'26%', left:5, right:5, width:'95%',
	hintText:'Catatan', value:'',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
promoWin.add(note);

var btnPhoto = Titanium.UI.createButton({
	title:'Photo',
	top:'46%', height:'12%', left:5, right:5, width:'95%',
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
btnPhoto.addEventListener('click',function(){
	Titanium.include('camera.js');
});
promoWin.add(btnPhoto);

var btnSend = Titanium.UI.createButton({
	title:'Kirim',
	top:'58%', height:'12%', left:5, right:5, width:'95%',
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
btnSend.addEventListener('click',function(){
//	var imagePath = Titanium.App.Properties.getString('imagePath');
//	var imageSent = Ti.Filesystem.getFile(imagePath);

	var xhr = Titanium.Network.createHTTPClient();
	xhr.onerror = function() {
		var alert = Titanium.UI.createAlertDialog({
		  title: 'Status',
		  message: 'Terkirim !',
		  buttonNames: ['OK']
		});
		alert.show();
		Titanium.include('promo.js');
		promoWin.close();
	};
	xhr.onload = function() {
		var alert = Titanium.UI.createAlertDialog({
		  title: 'Status',
		  message: 'Terkirim !',
		  buttonNames: ['OK']
		});
		alert.show();
		//Titanium.include('purchaselist.js');
	};
	xhr.onsendstream = function(e) {
		Ti.API.info('Progress: ' + e.progress);
	};	
	xhr.setTimeout = 10000;
	var xhrURL = "http://www.repostro.com:7000/booths";
	xhr.open("POST", xhrURL);	
	xhr.setRequestHeader("enctype", "multipart/form-data");
	var param={
		"booth[name]":placeName.value,
		"booth[address]":address.value,
		"booth[description]":note.value/*,
		"booth[photo]":imageSent.read()*/
		};
	xhr.send(param);
});
promoWin.add(btnSend);

var btnBack = Titanium.UI.createButton({
	title:'Kembali',
	top:'70%', height:'12%', left:5, right:5, width:'95%',
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
promoWin.add(btnBack);
btnBack.addEventListener('click',function(){
	promoWin.close();
	Titanium.include('app.js');
});

var lblDemo = Titanium.UI.createLabel({
	text:'For Demo Only' + '\n' + 'Developed By PT. Jerbee Indonesia',
	top:'88%', height:'15%', width:'95%',
	textAlign:'center'
});
promoWin.add(lblDemo);

promoWin.open();