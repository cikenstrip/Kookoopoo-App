var deliveryWin = Titanium.UI.createWindow({
	title:'Delivery Order',
	backgroundColor:'#fff'
});

var label = Titanium.UI.createLabel();
label.text = 'Dalam Perbaikan!'+'\n'+'Klik untuk kembali!';
deliveryWin.addEventListener('click',function(){
	Titanium.include('app.js');
	deliveryWin.close();
});
deliveryWin.add(label);

var lblDemo = Titanium.UI.createLabel({
	text:'For Demo Only' + '\n' + 'Developed By PT. Jerbee Indonesia',
	top:'88%', height:'15%', width:'95%',
	textAlign:'center'
});
deliveryWin.add(lblDemo);

deliveryWin.open();