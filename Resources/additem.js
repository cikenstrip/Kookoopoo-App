var itemWin = Titanium.UI.createWindow({
	title:'Tambah Barang',
	backgroundColor:'#fff'
});

function itemLoad()
{
	var rowData = [];
//	var rowData2 = [];
	var itemListLoad = Titanium.Network.createHTTPClient();
	itemListLoad.timeout = 10000;
	itemListLoad.onerror = function() {
	    alert('Error Getting List ...');
	};
	itemListLoad.open('GET','http://www.repostro.com:7000/items.json');
	itemListLoad.onload = function() 
	{
		var itemList = JSON.parse(this.responseText);
		for (var i = 0; i < itemList.length; i++)
		{
			var rowItem = Titanium.UI.createPickerRow({title:itemList[i].name});
			rowData[i] = rowItem;

//			var rowPrice = Titanium.UI.createPickerRow({title:itemList[i].price});
//			rowData2[i] = rowPrice;
		}
		var items = Titanium.UI.createPicker({height:'12%', top:'2%', left:5, right:5, width:'95%'});
		items.add(rowData);
		
		items.selectionIndicator = true;
		items.addEventListener('change',function(e) {
			price.value = e.selectedValue[0];
		});
		itemWin.add(items);
	};
	itemListLoad.send();
}
itemLoad();

var qty = Titanium.UI.createTextField({
	color:'#336699',
	height:'12%', top:'14%', left:5, width:'47%',
	hintText:'Jumlah', value:'',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
itemWin.add(qty);

var unit = Titanium.UI.createPicker({
	height:'12%', top:'14%', left:'48%', right:5, width:'47%'
});
var unit_data = [];
unit_data[0] = Titanium.UI.createPickerRow({title:'Bungkus'});
unit_data[1] = Titanium.UI.createPickerRow({title:'Botol'});
unit_data[2] = Titanium.UI.createPickerRow({title:'Kaleng'});
unit_data[3] = Titanium.UI.createPickerRow({title:'Dus'});
unit.add(unit_data);
unit.setSelectedRow(0,0);
itemWin.add(unit);

var unitString = "";
unit.addEventListener('change',function(e) {
    unitString = e.rowIndex + '';
});

var price = Titanium.UI.createTextField({
	color:'#336699',
	height:'12%', top:'26%', left:5, right:5, width:'95%',
	hintText:'Harga', value:'',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
price.enabled = false;
itemWin.add(price);

var btnCancel = Titanium.UI.createButton({
	title:'Batal',
	top:'38%', height:'12%', left:5, right:5, width:'95%',
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
itemWin.add(btnCancel);

var btnSave = Titanium.UI.createButton({
	title:'Simpan & Kembali ke PO',
	top:'50%', height:'12%', left:5, right:5, width:'95%',
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
btnSave.addEventListener('click',function(){
});
itemWin.add(btnSave);

var btnAdd = Titanium.UI.createButton({
	title:'Tambah Barang Lain',
	top:'62%', height:'12%', left:5, right:5, width:'95%',
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
btnAdd.addEventListener('click',function(){

});
itemWin.add(btnAdd);

itemWin.open();