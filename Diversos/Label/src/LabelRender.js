function Label($)
{
	this.show = function()
	{
		var html = '';
		html += '<span>';
		html += this.Caption;
		html += '</span>';

		this.setHtml(html);
	}

	this.destroy = function()
	{
    	// Add your cleanup code here. This method will be called when the control is destroyed.
	}
}
