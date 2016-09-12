/*  BootstrapPanel

	Apresenta um painel

    --------------------------------------------------------------
	User Control: Desenvolvendo controles com GeneXus
	15/08/2016, Douglas Hamilton de Oliveira

*/
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

}
