function BootstrapThumbnail($)
{
	this.SetThumbnailData = function(data)
	{
		this.ThumbnailData = data;
	}
	this.GetThumbnailData = function()
	{
		return this.ThumbnailData;
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
		var html = '';
		var height = '';
		var width = '';
		if (this.Height>0) {height = ' height:'+this.Height+'px;';}
		if (this.Width>0)  {width = ' width:'+this.Width+'px;';}

		html+= '<div class="thumbnail" style="'
		 + height
		 + ' '
		 + width
		 + ';">';

		if (this.ThumbnailData.image!='') {
        	var tooltiptext='';
			if (this.ThumbnailData.tooltiptext!=''){
			   tooltiptext = 'alt="'+this.ThumbnailData.tooltiptext+'"';
			}
			html+= '<img class="image" hspace="0" '
			 + tooltiptext
			 + ' src="'
			 + this.ThumbnailData.image
			 + '"/>';
		}

		html+='<div class="caption">';

		// titulo e subtitulo
		var title = this.ThumbnailData.title;
		var subtitle = this.ThumbnailData.subtitle;
		if (title!=''){html+='<h3>'+title+'</h3>';}
		if (subtitle!=''){html+='<h4>'+subtitle+'</h4>';}

		// descrição
		var description     = this.ThumbnailData.description;
		if(description!=''){html+='<p class"description">'+description+'</p>';}

		// botões
		if(this.ThumbnailData.buttongroup){
			var style   = (this.Style=='') ? "btn-default" : this.Style;
			var size    = (this.Size=='') ? "btn-md" : this.Size;

			html += this.ButtonGroup(this.ThumbnailData.buttongroup, style, size);
		}

		html+='</div>';
		html+='</div>';
  		this.setHtml(html);

	}
	this.ButtonGroup = function(buttons, style, size)
	{
		var outerMe = this.me();
		var botoes='';

		if (buttons.length>0){
			botoes+='<div class="btn-group">';
			for (var i=0; i<buttons.length ;i++) {

				var button  = buttons[i];
				var onclick = 'onclick="'
				 + outerMe
				 + '.Clicked('
				 + button.id
				 + ');"'

				// botão com dropdown
				if (button.dropdown==true)
				{
					var caret = '&nbsp;<span class="caret"></span>';
					botoes+='<div class="btn-group">';
					botoes+=' <button id="'
					 + button.id
					 + '" type="button" '
					 + onclick
					 + ' class="btn '
					 + size
					 + ' '
					 + style
					 + ' dropdown-toggle" data-toggle="dropdown">'
					 + button.caption
					 + caret
					 + '</button>';
					botoes+=' <ul class="dropdown-menu" role="menu">';

					for(var a=0;a<button.dropdowngroup.length;a++) {
						var dropdown = button.dropdowngroup[a];
						var flag=false;
						if (dropdown.header==true) {
							botoes+='<li class="dropdown-header">';
							flag=true;
						}
						if(dropdown.divider==true) {
							botoes+='<li class="divider">';
							flag=true;
						}
						if(!flag) {
							botoes+='<li>';
						}
						if (!dropdown.header) {
							if (!dropdown.action) {
								botoes+='<a href="#">';
							}
							else {
								var target='';
								if (dropdown.target) {
									target = 'target="_blank"';
								}
								botoes+='<a href="'
								 + dropdown.action
								 + '" '
								 + target
								 + '>';
							}
						}
						if (dropdown.glyphicon!='') {
							botoes+='<span class="glyphicon '
							 + dropdown.glyphicon
							 + '"></span>&nbsp;';
						}
						botoes+=dropdown.caption;
						if (dropdown.badge!=0) {
							botoes+='&nbsp;<span class="badge">'
							 + dropdown.badge
							 + '</span>';
						}
						if (!dropdown.header) {
							botoes+='</a>';
						}
						botoes+='</li>';
					}
					botoes+='   </ul>';
					botoes+='</div>';
				}

				// botão normal
				else
				{
					botoes+='<button id="'
					 + button.id
					 + '" type="button" '
					 + onclick
					 + '  class="btn '
					 + size
					 + ' '
					 + style
					 + ' ">';
					if (button.glyphicon!='') {
						botoes+='<span class="glyphicon '
						 + button.glyphicon
						 + '"></span>&nbsp;';
					}
					botoes+=button.caption;
					if (button.badge!=0) {
						botoes+='&nbsp;<span class="badge">'
						 + button.badge
						 + '</span>';
					}
					botoes+='</button>';
				}
			}
			botoes+='</div>';
		}
		return botoes;
	}
	this.Clicked = function(index)
	{
		this.ButtonClicked = index;
		this.Click();
	}
}
