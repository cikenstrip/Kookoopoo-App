var routelistWin = Titanium.UI.createWindow({
	title:'Route List',
	backgroundColor:'#fff'
});

var search = Titanium.UI.createSearchBar({
  hintText:'Search for market ...',
  barColor:'#678e00',
  showCancel: false,
  height:'12%',
  top:0
});
routelistWin.add(search);

function load()
{
	var rowData = [];
	var routeListLoad = Titanium.Network.createHTTPClient();
	routeListLoad.timeout = 10000;
	routeListLoad.onerror = function() {
	    alert('Error Getting List ...');
	};
	routeListLoad.open("GET","http://www.repostro.com:7000/routelist.json?salesman_id=1");
	routeListLoad.onload = function() 
	{
		var routeList = JSON.parse(this.responseText);
		for (var i = 0; i < routeList.length; i++)
		{
			var row = Titanium.UI.createTableViewRow({sales_id:routeList[i].salesman_id, cust_id:routeList[i].customer_id, title:routeList[i].id+'. '+routeList[i].customer_name, link:'purchase.js', height:'auto', rightImage:'order.png'});
			rowData[i] = row;
		}
		var tableView = Titanium.UI.createTableView({top:'14%', data:rowData});
		tableView.addEventListener('click', function(e){
			if (e.rowData.link)
			{
				Titanium.App.Properties.setString('customerID', e.row.cust_id);
				Titanium.App.Properties.setString('salesmanID', e.row.sales_id);
				Titanium.include(e.rowData.link);
			}
		});
		routelistWin.add(tableView);

//		var other = Titanium.UI.createTextField({
//			color:'#336699',
//			height:40, left:5, width:160,
//			hintText:'Other', value:'',
//			keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
//			returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
//			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
//		});
//		other.top = tableView.height;
//		routelistWin.add(other);
	};
	routeListLoad.send();
}
load();

routelistWin.open();