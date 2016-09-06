function BootstrapForm($)
{
	this.SetFormData = function(data)
	{
		this.FormData = data;
	}
	this.GetFormData = function()
	{
		return this.FormData;
	}

	this.show = function()
	{
		var html = '<form>';

		for(var i=0; i< this.FormData.controls.length ;i++){
			var control = this.FormData.controls[i];
			if (control.control=='textarea' || control.control=='input')
			{
				html += '<div class="form-group">';
				if (control.caption!=''){
					html += '<label for="'
					 + control.name
					 + '" class="control-label">';
					html += control.caption;
					html += '</label>';
				}
				html += '<'+control.control
				 + ' type="'
				 + control.type
				 + '" class="form-control" id="'
				 + control.name
				 + '" placeholder="'
				 + control.invitemessage
				 + '">';

				if (control.control=='textarea'){
					html += '</textarea>';
				}
				html += '</div>';
			}

			// checkbox
			else if(control.control=='checkbox')
			{
				html += '<div class="form-group">';
				if (control.caption!=''){
					html += '  <label for="'
					 + control.name
					 + '" class="control-label">'
					 + control.caption
					 + '</label>';
				}
				if (control.inline==true){
					html += '<div class="'
					 + control.control
					 + '">';
					for (var a=0; a<control.options.length; a++)
					{
						control.options[a].checked = false;
						var option = control.options[a];
						var disabled = option.disabled? 'disabled':'';
						html += '<label class="'
						 + control.control
						 + '-inline">';

						html += '<input type="checkbox" value="'
						 + option.value
						 + '" name="'
						 + control.name
						 + '" '
						 + disabled
						 + '>';

						html += option.caption;
						html += '</label>';
					}
					html += '</div>';
				}
				else
				{
					for (var a=0; a<control.options.length; a++)
					{
						control.options[a].checked = false;
						var option = control.options[a];
						var disabled = option.disabled? 'disabled':'';
						html += '<div class="'
						 + control.control
						 + ' '
						 + disabled
						 + '">';

						html += ' <label>';
						html += ' <input type="checkbox" value="'
						 + option.value
						 + '" name="'
						 + control.name
						 + '" '
						 + disabled
						 + '>';

						html +=   option.caption;
						html +=   '</label>';
						html += '</div>';
					}
				}
				html += '</div>';
			}

			// radio
			else if(control.control=='radio')
			{
				html += '<div class="form-group">';
				if (control.caption!=''){
					html += '<label for="'
					 + control.name
					 + '" class="control-label">';

					html += control.caption;
					html += '</label>';
				}

				if (control.inline==true){
					html += '<div class="'+control.control+'">';
					for (var a=0; a<control.options.length; a++)
					{
						control.options[a].checked = false;
						var option = control.options[a];
						var disabled = option.disabled? 'disabled' :'';
						html += '<label class="'
						 + control.control
						 + '-inline">';
						html += '<input type="radio" value="'
						 + option.value
						 + '" name="'
						 + control.name
						 + '" '
						 + disabled
						 + '>';

						html += option.caption;
						html += '</label>';
					}
					html += '</div>';
				}

				else
				{
					for (var a=0; a<control.options.length; a++)
					{
						control.options[a].checked = false;
						var option = control.options[a];
						var disabled = option.disabled? 'disabled':'';
						html += '<div class="'
						 + control.control
						 + ' '
						 + disabled+'">';

						html += ' <label>';
						html += ' <input type="'
						 + control.control
						 + '" value="'
						 + option.value
						 + '" name="'
						 + control.name
						 + '" '
						 + disabled
						 + '>';

						html +=   option.caption;
						html += ' </label>';
						html += '</div>';
					}
				}
				html += '</div>';
			}

			// select
			else{
				var multiple = control.multiple? 'multiple' :'';
				html += '<div class="form-group">';
				if (control.caption!=''){
					html += '<label for="'
					 + control.name
					 + '" class="control-label">';
					html += control.caption;
					html += '</label>';
				}
				html += '<'
				 + control.control
				 + ' '+multiple
				 + ' class="form-control" id="'
				 + control.name
				 + '">';

				for (var a=0; a<control.options.length; a++)
				{
						var option = control.options[a];
						html += '<option>'
						 + option.caption
						 + '</option>';
				}
				html += '  </'+control.control+'>';
				html += '</div>';
			}
		}
		html += '<div>';

		var confirm = 'onclick="' + this.me() + '.setConfirmReturn();"';
		html += '<button id="bt1" '
		 + confirm
		 + ' type="button" class="btn '
		 + this.ConfirmStyle
		 + '">';
		html += this.ConfirmCaption;
		html += '</button>';

		var cancel = 'onclick="'
		 + this.me()
		 + '.setCancelReturn();"';

		html += '<button id="bt1" '
		 + cancel
		 + ' type="button" class="btn '
		 + this.CancelStyle
		 + '">';

		html += this.CancelCaption;
		html += '</button>';

		html += '</div>';
		html += '</form>';

		this.setHtml(html);
	}

	this.setConfirmReturn = function()
	{
		for(var i=0; i<this.FormData.controls.length ;i++){

			var control = this.FormData.controls[i];
			switch(control.control)
			{
				case 'checkbox':
					$.each($("input[name='"+control.name+"']:checked"), function()
					{
						for(var a=0; a<control.options.length; a++)
						{
							if ($(this).val()==control.options[a].value)
							{
								control.options[a].checked = true;
							}
						}
					});
					break;

				case 'radio':
					var valor = $('input[name='+control.name+']:checked').val();
					for(var a=0; a<control.options.length; a++)
					{
						if (valor==control.options[a].value)
						{
							control.options[a].checked = true;
						}
					}
					break;

				default:
					control.value = $('#'+control.name).val();
					break;
			}
		}
		this.Confirm();
	}

	this.setCancelReturn = function()
	{
		this.Cancel();
	}		
}
