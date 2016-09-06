function Soma10($)
{
	this.SetAttribute = function(data)
{
	this.Attribute = data;
}

this.GetAttribute = function()
{
	return this.ClickedValue;
}

	this.show = function()
	{
		this.Attribute = this.Attribute + 10;
		var html = '';
		
		html  = '<h2>';
		html += this.Attribute;
		html += '</h2>';
		this.setHtml(html);
	}

	this.destroy = function()
	{
    	// Add your cleanup code here. This method will be called when the control is destroyed.
	}
}
