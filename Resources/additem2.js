var itemWin = Titanium.UI.createWindow({
	title:'Tambah Barang',
	backgroundColor:'#fff'
});

var name = Titanium.UI.createTextField({
	color:'#336699',
	height:'12%', top:'2%', left:5, right:5, width:'95%',
	hintText:'Nama Barang', value:'',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
itemWin.add(name);

var cat = Titanium.UI.createTextField({
	color:'#336699',
	height:'12%', top:'14%', left:5, right:5, width:'95%',
	hintText:'Category', value:'',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
itemWin.add(cat);

var unit = Titanium.UI.createTextField({
	color:'#336699',
	height:'12%', top:'26%', left:5, right:5, width:'95%',
	hintText:'Unit', value:'',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
itemWin.add(unit);

var price = Titanium.UI.createTextField({
	color:'#336699',
	height:'12%', top:'38%', left:5, right:5, width:'95%',
	hintText:'Harga', value:'',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
itemWin.add(price);

var code = Titanium.UI.createTextField({
	color:'#336699',
	height:'12%', top:'50%', left:5, right:5, width:'95%',
	hintText:'Kode Barang', value:'',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
itemWin.add(code);

var btnSave = Titanium.UI.createButton({
	title:'Simpan Barang',
	top:'62%', height:'12%', left:5, right:5, width:'95%',
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
btnSave.addEventListener('click',function()
{
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onerror = function() {
		var alert = Titanium.UI.createAlertDialog({
		  title: 'Status',
		  message: ' ',
		  buttonNames: ['OK']
		});
		alert.show();
		Titanium.include('purchasedetail.js');
		itemWin.close();
	};
	xhr.onload = function() {
		var alert = Titanium.UI.createAlertDialog({
		  title: 'Status',
		  message: 'Terkirim !',
		  buttonNames: ['OK']
		});
		alert.show();
		Titanium.include('purchasedetail.js');
	};
	xhr.onsendstream = function(e) {
		Ti.API.info('Progress: ' + e.progress);
	};	
	xhr.setTimeout = 10000;
	var xhrURL = "http://www.repostro.com:7000/items";
	xhr.open("POST", xhrURL);	
	xhr.setRequestHeader("enctype", "multipart/form-data");
	var param={
		"item[name]":name.value,
		"item[category]":cat.value,
		"item[unit]":unit.value,
		"item[price]":price.value,
		"item[code]":code.value
		};
	xhr.send(param);
});
itemWin.add(btnSave);

var lblDemo = Titanium.UI.createLabel({
	text:'For Demo Only' + '\n' + 'Developed By PT. Jerbee Indonesia',
	top:'88%', height:'15%', width:'95%',
	textAlign:'center'
});
itemWin.add(lblDemo);


itemWin.open();