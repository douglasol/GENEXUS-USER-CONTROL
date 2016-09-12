/*  BootstrapAlert

	Apresenta uma mensagem na interface

    --------------------------------------------------------------
	User Control: Desenvolvendo controles com GeneXus
	15/08/2016, Douglas Hamilton de Oliveira

*/
function Bootstrap($)
{
	this.Type;

	this.show = function()
	{
	}
	this.ShowAlert = function(title, msg) 
	{	
		var type 	= (typeof (this.Type) =='undefined' || this.Type=='') ? "alert-success" : this.Type;		
		var html	= ''
		
		html += '<div class="alert '+type+' fade in">';
		html += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>';
    	html += '<strong>'+title+'</strong>&nbsp;'+msg);		
 		html += '</div>';
		
		this.setHtml(buffer.toString());
	}
}
