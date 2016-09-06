function BootstrapPanel($)
{
	this.show = function()
	{
		var estilo = (this.Style=='') ?'panel-default':this.Style;
		var html='';
		html += '<div class="panel '+estilo+'">';
		html += ' <div class="panel-heading">'+this.Title+'</div>';
		html += ' <div class="panel-body">';
		html += this.Text;
		html += ' </div>';
		html += '</div>';
		this.setHtml(html);
	}

	this.destroy = function() 
	{
 	}
}
