/*  BootstrapButton

	Apresenta um botão com recursos do Bootstrap.

    --------------------------------------------------------------
	Guia Prático User Control com GeneXus
	15/08/2016, Douglas Hamilton de Oliveira

*/

function BootstrapButton($)
{
  this.show = function()
	{
        var html = '';
        var spc  = '';
		    var btn  = 'bt'+Math.floor((Math.random() * 100) + 1);

        this.default();
 	      html = '<button id="'
          + btn
          + '" type="button" alt="'
          + this.Tooltiptext
          + '" class="btn '
          + this.Style
          + this.Outline
          + ' '
          +  this.Active
          + ' '
          + this.Size
          + ' '
          + this.Block
          + '" '
          + this.Disabled+'>';

		    if (this.Glyphicon!='')	{
	         html += '<span class="glyphicon '
			        + this.Glyphicon
			        + '">'
			        + '</span>';
			     spc   = '&nbsp;';
		    }

		    html += spc + this.Caption;

	      if (this.Badge!=0){
		      html += '&nbsp;<span class="badge">'
			    + this.Badge
				+ '</span>';
	      }
	      html += '</button>';

	     this.setHml(html);

		var myThis(html);
		$('#'+btn).click(function (){
		     myThis.Click();
		});
   }

	this.default = function()
	{
		this.Style = (this.Style=='') ? "btn-primary" : this.Style;
		this.Size = (this.Size=='') ? "btn-sm" : this.Size;
		this.Disabled = (this.Disabled) ? "disabled" : "";
		this.Active = (this.Active) ? "active" : "";
		this.Block = (this.Block) ? "btn-block" : "";
		this.Outline = (this.Outline) ? "-outline":"";
	}

	this.destroy = function()
	{

	}
}
