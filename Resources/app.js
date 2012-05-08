var mainWin = Titanium.UI.createWindow({
	title:'Main Menu',
	fullscreen:true,  
    navBarHidden:true,
	backgroundImage:'./k2bg.png'
});

var viewNavheader = Titanium.UI.createImageView({
	height:50, width:'100%', top:0,
	backgroundImage:'./k2navbar.png'
});
var btnSync = Titanium.UI.createButton({
	title:'Sync',
	top:2, right:5, width:60, height: 40, borderRadius:1, zIndex:4,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:10}
});
btnSync.addEventListener('click',function(){
	Titanium.include('routelist.js');
});
mainWin.add(btnSync);
mainWin.add(viewNavheader);

var btnCallPlan = Titanium.UI.createButton({
	title:'Call Plan',
	top:'20%', height:'12%', left:5, right:5, width:'95%',
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
btnCallPlan.addEventListener('click',function(){
	Titanium.include('routelist.js');
});
mainWin.add(btnCallPlan);

var btnPromo = Titanium.UI.createButton({
	title:'Promo',
	top:'32%', height:'12%', left:5, right:5, width:'95%',
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
btnPromo.addEventListener('click',function(){
	Titanium.include('promo.js');
});
mainWin.add(btnPromo);

var btnDelivery = Titanium.UI.createButton({
	title:'Delivery',
	top:'44%', height:'12%', left:5, right:5, width:'95%',
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
btnDelivery.addEventListener('click',function(){
	Titanium.include('delivery.js');
});
mainWin.add(btnDelivery);

var lblDemo = Titanium.UI.createLabel({
	text:'For Demo Only' + '\n' + 'Developed By PT. Jerbee Indonesia',
	top:'88%', height:'15%', width:'95%',
	textAlign:'center'
});
mainWin.add(lblDemo);

//var btnAdd = Titanium.UI.createButton({
//	title:'Tambah Barang',
//	top:'56%', height:'12%', left:5, right:5, width:'95%',
//	borderRadius:1,
//	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
//});
//btnAdd.addEventListener('click',function(){
//	Titanium.include('purchasedetail.js');
//});
//mainWin.add(btnAdd);

mainWin.open();