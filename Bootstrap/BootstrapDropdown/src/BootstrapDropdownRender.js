/*  BootstrapDropdown

	Apresenta um botão dropdown

    --------------------------------------------------------------
	User Control: Desenvolvendo controles com GeneXus
	15/08/2016, Douglas Hamilton de Oliveira

*/
function BootstrapDropdown($)
{
	this.SetDropDownData = function(data)
	{
		this.DropDownData = data;
	}
	this.GetDropDownData = function()
	{
		return this.DropDownData;
	}

	this.show = function()
	{
		var html      = '';
		html+='<div class="btn-group">';
		html+=' <button id="bt'+ this.DropDownData.id+ '" type="button" class="btn '+ this.Size+ ' '+ this.Style+' dropdown-toggle" data-toggle="dropdown">';

		if (this.Glyphicon!='')
		{
			html+='<span class="glyphicon '+ this.Glyphicon+ '"></span>';
		}
		html+=this.DropDownData.caption;
		if (this.Badge!=0)
		{
			html+='&nbsp;<span class="badge">'+ this.Badge+ '</span>';
		}
		html+=' <span class="caret"></span>';
		html+=' </button>';
		html+=' <ul class="dropdown-menu" role="menu">';

		for(var a=0;a<this.DropDownData.dropdowngroup.length;a++)
		{
			var dropdown = this.DropDownData.dropdowngroup[a];
			var flag=false;
			if (dropdown.header==true)
			{
				html+='<li class="dropdown-header">';
				flag=true;
			}
			if(dropdown.divider==true)
			{
				html+='<li class="divider">';
				flag=true;
			}
			if(!flag)
			{
				html+='<li>';
			}
			if (!dropdown.header)
			{
				if (!dropdown.link)
				{
					html+='<a href="#">';
				}
				else {
					var linktarget='';
					if (dropdown.linktarget){
						linktarget = 'target="_blank"';
					}
					html+='<a href="'+ dropdown.link+ '" '+ linktarget+ '>';
				}
			}
			if (dropdown.glyphicon!='')
			{
				html+='<span class="glyphicon '+ dropdown.glyphicon+ '"></span>&nbsp;';
			}
			html+=dropdown.caption;
			if (dropdown.badge!=0)
			{
				html+='&nbsp;<span class="badge">'+ dropdown.badge+ '</span>';
			}
			if (!dropdown.header)
			{
				html+='</a>';
			}
			html+='</li>';
		}
		html+='</ul>';
		html+='</div>';

		this.setHtml(html);
	}
}
