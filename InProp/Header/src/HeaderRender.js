function Header($)
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
var html = '';
html  = '<h2>';
html += this.Attribute;
html += '</h2>';
this.setHtml(html);
}

this.destroy = function()
{
}
}
