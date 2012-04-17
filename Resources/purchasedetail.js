var podetailWin = Titanium.UI.createWindow({
	title:'Purchase Order Detail',
	backgroundColor:'#fff'
});

function loadPO()
{	
	var rowData = [];
	var lblID = Titanium.UI.createLabel();
	var purchaseListLoad = Titanium.Network.createHTTPClient();
	purchaseListLoad.timeout = 10000;
	purchaseListLoad.onerror = function() {
	    alert('Error Getting List ...');
	};
	purchaseListLoad.open('GET','http://www.repostro.com:7000/purchaseorders/1.json');
	purchaseListLoad.onload = function() 
	{
		var purchaseList = JSON.parse(this.responseText);
		var detailPO = Titanium.UI.createLabel({
			font:{fontFamily:'Arial',fontWeight:'bold',fontSize:'20%'},  
			color:'#000',  
			height:'auto', top:'1%', left:5, right:5, width:'95%',
			text:'Nomor PO : ' + purchaseList.purchasenumber + '\n'+
				 'Tanggal : ' + purchaseList.purchasedate + '\n'+
				 'Customer : ' + purchaseList.customer_id
		});
		podetailWin.add(detailPO);
	};
	purchaseListLoad.send();
}
loadPO();

function loadItem()
{
	var rowData = [];
	var itemListLoad = Titanium.Network.createHTTPClient();
	itemListLoad.timeout = 10000;
	itemListLoad.onerror = function() {
	    alert('Error Getting List ...');
	};
	//itemListLoad.open('GET','http://www.repostro.com:7000/purchase_order_items.json');
	itemListLoad.open('GET','http://www.repostro.com:7000/purchase_order_items.json');
	itemListLoad.onload = function() 
	{
		var itemList = JSON.parse(this.responseText);
		for (var i = 0; i < itemList.length; i++)
		{
			var row = Titanium.UI.createTableViewRow({title:itemList[i].code+' '+itemList[i].name, height:'auto'});
			rowData[i] = row;
		}
		var tableView = Titanium.UI.createTableView({height:'88%', top:'20%', bottom:'30%', data:rowData});
//		tableView.addEventListener('click', function(e){
//			Titanium.include(e.rowData.link);
//		});
		podetailWin.add(tableView);
	};
	itemListLoad.send();
}
loadItem();

var btnAddItem = Titanium.UI.createButton({
	title:'Tambah Barang',
	top:'75%', height:'12%', left:5, right:5, width:'95%',
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
btnAddItem.addEventListener('click',function(){
	Titanium.include('additem.js');
});
podetailWin.add(btnAddItem);

var btnSave = Titanium.UI.createButton({
	title:'Simpan PO',
	top:'87%', height:'12%', left:5, right:5, width:'95%',
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
btnSave.addEventListener('click',function(){
//	Titanium.include('additem.js');
});
podetailWin.add(btnSave);

podetailWin.open();