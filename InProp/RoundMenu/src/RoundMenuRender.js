function RoundMenu($)
{
this.SetAttribute = function(data)
{
this.Attribute = data;
}

this.GetAttribute = function()
{
return this.ClickedValue;
}

	this.show = function()
	{
		var myUC = this.me();
		html ='<nav class="circular-menu">';
		html+='<div class="circle">';
		html+='<a href="" onclick="'+myUC+'.Clicked(1);" class="fa fa-home fa-2x"></a>';
		html+='<a href="" onclick="'+myUC+'.Clicked(2);" class="fa fa-facebook fa-2x"></a>';
		html+='<a href="" onclick="'+myUC+'.Clicked(3);" class="fa fa-twitter fa-2x"></a>';
		html+='<a href="" onclick="'+myUC+'.Clicked(4);" class="fa fa-linkedin fa-2x"></a>';
		html+='<a href="" onclick="'+myUC+'.Clicked(5);" class="fa fa-github fa-2x"></a>';
		html+='<a href="" onclick="'+myUC+'.Clicked(6);" class="fa fa-rss fa-2x"></a>';
		html+='<a href="" onclick="'+myUC+'.Clicked(7);" class="fa fa-pinterest fa-2x"></a>';
		html+='<a href="" onclick="'+myUC+'.Clicked(8);" class="fa fa-asterisk fa-2x"></a>';
		html+='</div>';
		html+='<a href="" class="menu-button fa fa-bars fa-2x"></a>';
		html+='</nav>';
		this.setHtml(html);

		var items = document.querySelectorAll('.circle a');
		for(var i = 0, l = items.length; i < l; i++) {
	  	items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
	  	items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
		}
		document.querySelector('.menu-button').onclick = function(e) {
	  		e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
		}
	}

	this.Clicked = function(id){
		this.ClickedValue = id;
		this.Click();
	}

	this.destroy = function()
	{
    	// Add your cleanup code here. This method will be called when the control is destroyed.
	}
}
