/*  BootstrapLabel

	Apresenta uma mensagem destacada

    --------------------------------------------------------------
	User Control: Desenvolvendo controles com GeneXus
	15/08/2016, Douglas Hamilton de Oliveira

*/
function BootstrapLabel($)
{
	this.show = function()
	{
		var html = '';
		html += '<span class="label '+this.Type+'">';
		html += this.Caption;
		html += '</span>';

		this.setHtml(html);
	}
}
