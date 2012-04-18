var polistWin = Titanium.UI.createWindow({
	title:'Purchase Order List',
	backgroundColor:'#fff'
});

var search = Titanium.UI.createSearchBar({
  hintText:'Search for PO ...',
  barColor:'#678e00',
  showCancel: false,
  height:'12%',
  top:0
});
polistWin.add(search);

function load()
{
	var rowData = [];
	var purchaseListLoad = Titanium.Network.createHTTPClient();
	purchaseListLoad.timeout = 10000;
	purchaseListLoad.onerror = function() {
	    alert('Error Getting List ...');
	};
	purchaseListLoad.open('GET','http://www.repostro.com:7000/purchaseorders.json');
	purchaseListLoad.onload = function() 
	{
		var purchaseList = JSON.parse(this.responseText);
		for (var i = 0; i < purchaseList.length; i++)
		{
			var row = Titanium.UI.createTableViewRow({po_id:purchaseList[i].id, title:purchaseList[i].purchasenumber, link:'purchasedetail.js', height:'auto', rightImage:'detail.png'});
			rowData[i] = row;
		}
		var tableView = Titanium.UI.createTableView({top:'12%', bottom:'15%', data:rowData});
		tableView.addEventListener('click', function(e){
			Titanium.App.Properties.setString('purchaseID', e.row.po_id);
			Titanium.include(e.rowData.link);
		});
		polistWin.add(tableView);
	};
	purchaseListLoad.send();
}
load();

var btnAdd = Titanium.UI.createButton({
	title:'Tambah PO',
	top:'87%', height:'12%', left:5, right:5, width:'95%',
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
btnAdd.addEventListener('click',function(){
	Titanium.include('purchase.js');
});
polistWin.add(btnAdd);

polistWin.open();