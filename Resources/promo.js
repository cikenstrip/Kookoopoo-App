var promoWin = Titanium.UI.createWindow({
	title:'Promo',
	backgroundColor:'#fff'
});

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
promoWin.add(btnPhoto);

var btnSend = Titanium.UI.createButton({
	title:'Kirim',
	top:'58%', height:'12%', left:5, right:5, width:'95%',
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
promoWin.add(btnSend);

var lblDemo = Titanium.UI.createLabel({
	text:'For Demo Only' + '\n' + 'Developed By PT. Jerbee Indonesia',
	top:'88%', height:'15%', width:'95%',
	textAlign:'center'
});
promoWin.add(lblDemo);

promoWin.open();