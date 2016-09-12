/*  BootstrapButtonBar

	Apresenta uma barra de botoes

    --------------------------------------------------------------
	User Control: Desenvolvendo controles com GeneXus
	15/08/2016, Douglas Hamilton de Oliveira

*/
function BootstrapButtonBar($)
{
	this.GetAttribute = function(){
		return this.Attribute;
	}
	
	this.show = function()
	{
		this.Style = (this.Style=='') ? "btn-primary" : this.Style;
		this.Size = (this.Size=='') ? "btn-sm" : this.Size;
		var round = '';//(this.Round) ? "fa-circle":"";
		//var squareborder = (this.SquareBorder) ? "fa-square-o":"";		

		switch (this.Size) {
		case 'btn-xs':
			size='';
			break;
		case 'btn-sm':
			size='fa-lg';
			break;
		case 'btn-md':
			size='fa-2x';
			break;
		case 'btn-lg':
			size='fa-3x';
			break;
		}
		
		var html='';
		html += '<div class="container">';
		html += ' <div class="row">';
		html += '  <div class="'+this.Orientation+'" role="group" aria-label="Default button group">';

		// edição
		html += (this.Insert)  ? '<button type="button" onclick="'+ this.me() +'.Clicked(\'insert\');" class="btn '+this.Size+' '+this.Style+'"><i class="fa fa-file-o  '+size+' '+round+'" ></i></button>' : '';
		html += (this.Edit)    ? '<button type="button" onclick="'+ this.me() +'.Clicked(\'edit\');" class="btn '+this.Size+' '+this.Style+'"><i class="fa fa-pencil  '+size+' '+round+'" ></i></button>': '';
		html += (this.Delete)  ? '<button type="button" onclick="'+ this.me() +'.Clicked(\'delete\');" class="btn '+this.Size+' '+this.Style+'"><i class="fa fa-trash  '+size+' '+round+'" ></i></button>': '';
		
		// navegacao
		var flag = (this.First || this.Before  || this.Next || this.Last || this.Refresh || this.Filter || this.Search)? true: false; 
		if (this.SeparateGroups && this.Orientation=='btn-group' && flag) {
 		 html += '  </div>';
		 if (this.Style=='btn-link'){ 
			html += '&nbsp;|&nbsp;';
		 }
		 html += '  <div class="'+this.Orientation+'" role="group" aria-label="Default button group">';
		}
		html += (this.First)   ? '<button type="button" onclick="'+ this.me() +'.Clicked(\'first\');" class="btn '+this.Size+' '+this.Style+'"><i class="fa fa-angle-double-left   '+size+' '+round+'" ></i></button>': '';
		html += (this.Before)  ? '<button type="button" onclick="'+ this.me() +'.Clicked(\'before\');" class="btn '+this.Size+' '+this.Style+'"><i class="fa fa-angle-left    '+size+' '+round+'" ></i></button>': '';
		html += (this.Next)    ? '<button type="button" onclick="'+ this.me() +'.Clicked(\'next\');" class="btn '+this.Size+' '+this.Style+'"><i class="fa fa-angle-right  '+size+' '+round+'" ></i></button>': '';
		html += (this.Last)    ? '<button type="button" onclick="'+ this.me() +'.Clicked(\'last\');" class="btn '+this.Size+' '+this.Style+'"><i class="fa fa-angle-double-right  '+size+' '+round+'" ></i></button>': '' ;
		html += (this.Refresh) ? '<button type="button" onclick="'+ this.me() +'.Clicked(\'refresh\');" class="btn '+this.Size+' '+this.Style+'"><i class="fa fa-refresh  '+size+' '+round+'" ></i></button>': '';
		html += (this.Filter)  ? '<button type="button" onclick="'+ this.me() +'.Clicked(\'filter\');" class="btn '+this.Size+' '+this.Style+'"><i class="fa fa-filter  '+size+' '+round+'" ></i></button>': '';
		html += (this.Search)  ? '<button type="button" onclick="'+ this.me() +'.Clicked(\'search\');" class="btn '+this.Size+' '+this.Style+'"><i class="fa fa-search  '+size+' '+round+'" ></i></button>': '';

		// exportacao
		flag = (this.Print || this.Excel  || this.Next || this.Pdf || this.Chart)? true: false; 
		if (this.SeparateGroups && this.Orientation=='btn-group' && flag) {
 		 html += '  </div>';
		 if (this.Style=='btn-link'){ 
			html += '&nbsp;|&nbsp;';
		 }
		 html += '  <div class="'+this.Orientation+'" role="group" aria-label="Default button group">';
		}	
		html += (this.Print)   ? '<button type="button" onclick="'+ this.me() +'.Clicked(\'print\');" class="btn '+this.Size+' '+this.Style+'"><i class="fa fa-print  '+size+' '+round+'" ></i></button>': '';
		html += (this.Excel)   ? '<button type="button" onclick="'+ this.me() +'.Clicked(\'excel\');" class="btn '+this.Size+' '+this.Style+'"><i class="fa fa-file-excel-o  '+size+' '+round+'" ></i></button>' : '';
		html += (this.Pdf)     ? '<button type="button" onclick="'+ this.me() +'.Clicked(\'pdf\');" class="btn '+this.Size+' '+this.Style+'"><i class="fa fa-file-pdf-o  '+size+' '+round+'" ></i></button>': '';
		html += (this.Chart)   ? '<button type="button" onclick="'+ this.me() +'.Clicked(\'chart\');" class="btn '+this.Size+' '+this.Style+'"><i class="fa fa-bar-chart  '+size+' '+round+'" ></i></button>': '';

		// configuracao
		flag = (this.Config)? true: false; 
		if (this.SeparateGroups && this.Orientation=='btn-group' && flag) {
 		 html += '  </div>';
		 if (this.Style=='btn-link'){ 
			html += '&nbsp;|&nbsp;';
		 }
		 html += '  <div class="'+this.Orientation+'" role="group" aria-label="Default button group">';
		}	
		html += (this.Config)   ? '<button type="button" onclick="'+ this.me() +'.Clicked(\'config\');" class="btn '+this.Size+' '+this.Style+'"><i class="fa fa-cogs  '+size+' '+round+'" ></i></button>': '';
		
		// ajuda
		flag = (this.Help || this.Chat)? true: false; 
		if (this.SeparateGroups && this.Orientation=='btn-group' && flag) {
 		 html += '  </div>';
		 if (this.Style=='btn-link'){ 
			html += '&nbsp;|&nbsp;';
		 }
		 html += '  <div class="'+this.Orientation+'" role="group" aria-label="Default button group">';
		}
		html += (this.Help)    ? '<button type="button" onclick="'+ this.me() +'.Clicked(\'help\');" class="btn '+this.Size+' '+this.Style+'"><i class="fa fa-question-circle-o  '+size+' '+round+'" ></i></button>': '' ;
		html += (this.Chat)    ? '<button type="button" onclick="'+ this.me() +'.Clicked(\'chat\');" class="btn '+this.Size+' '+this.Style+'"><i class="fa fa-weixin  '+size+' '+round+'" ></i></button>': '' ;
		
		html += '  </div>';
		html += ' </div>';
		html += '</div>';

		this.setHtml(html);
	}

	this.Clicked = function(bt){
		this.Attribute = bt;
		this.Click();
	}
}
