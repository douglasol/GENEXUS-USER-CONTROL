function BootstrapAlert($)
{
	this.show = function()
	{
	}

	this.ShowAlert = function(message)
	{
		message.type = (message.type=="") ? "alert-success" : message.type;

		html  = '<div id="al1" class="alert '+message.type+' fade in">';
		html += ' <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>';
		html += ' <strong>'+message.title+'</strong>&nbsp;'+message.text;
		html += '</div>';

		$(this.getContainerControl()).html(html);

		if (message.time > 0) {
		   $("#al1").fadeTo(2000, 500).slideUp(500, function(){
			   $("#al1").slideUp(message.time);
		   });
		 }
	}

	this.destroy = function()
	{

	}
}
