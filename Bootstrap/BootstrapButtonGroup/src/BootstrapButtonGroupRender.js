function BootstrapButtonGroup($)
{
	this.SetData = function(data)
	{
		this.Data = data;
	}

	this.GetData = function()
	{
		return this.Data;
	}

	this.SetButtonClicked = function(data)
	{
		this.ButtonClicked = data;
	}

	this.GetButtonClicked = function()
	{
		return this.ButtonClicked;
	}

	this.show = function()
	{

		var outerMe 	= this.me();
		this.Orientation = (this.Orientation=='') ? 'btn-group' : this.Orientation;

		var html = '<h1>teste</h1><div class="'+this.Orientation+'">';
		for (var i=0; i<this.Data.length; i++)
		{
			var button = this.Data[i];
			this.default(button);

			var click = 'onclick="' + outerMe + '.clicked(' + button.id + ');"';
			html += '<button id="bt'+button.id+'" type="button" alt="'+button.tooltiptext+'"  class="btn ' + button.style + button.outline + ' ' +  button.active + ' ' + button.size +'" '+ button.disabled+' '+click+'>';

			var spc='';
			if (button.glyphicon!='')	{
	           html += '<span class="glyphicon '+button.glyphicon+'"></span>';
               spc   = '&nbsp;';
		    }

		    html += spc + button.caption;

	        if (button.badge!=0){
		       html += '&nbsp;<span class="badge">'+button.badge+'</span>';
			}

			html += '</button>';

			if (i==1){
			html += '<button type = "button" class = "btn ' + button.style + ' ' +button.size +' dropdown-toggle" data-toggle = "dropdown">';
			html += '	  <span class = "caret"></span>';
			html += '	  <span class = "sr-only">Toggle Dropdown</span>';
			html += '   </button>';

			html += '  <ul class = "dropdown-menu" role = "menu">';
			html += '	  <li><a href = "#">Action</a></li>';
			html += '	  <li><a href = "#">Another action</a></li>';
			html += '	  <li><a href = "#">Something else here</a></li>';
			html += '	  <li class = "divider"></li>';
			html += '	  <li><a href = "#">Separated link</a></li>';
			html += '   </ul>';

			}
		}

		html += '</div>';

		$(this.getContainerControl()).html(html);
	}

	this.default = function(button)
	{
		button.style = (button.style=='') ? "btn-primary" : button.style;
		button.size = (button.size=='') ? "btn-sm" : button.size;
		button.disabled = (button.disabled) ? "disabled" : "";
		button.active = (button.active) ? "active" : "";
		button.outline = (button.outline) ? "-outline":"";
	}

	this.clicked = function(id)
	{
		this.ButtonClicked = id;
		this.Click();
	}

	this.destroy = function()
	{
    	// Add your cleanup code here. This method will be called when the control is destroyed.
	}
}
