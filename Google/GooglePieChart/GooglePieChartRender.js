/*  GooglePieChart

	Apresenta o grafico do tipo Pizza provido pelo Google chart
	Para funcionar corretamente é necessário apontar o https://www.gstatic.com/charts/loader.js, realizado pelo próprio UC

    --------------------------------------------------------------
	Guia Prático User Control com GeneXus
	13/08/2016, Douglas Hamilton de Oliveira

*/
function GooglePieChart($)
{
	this.GetData = function()
	{
		return this.Data;
	}

	this.SetData = function(data)
	{
		 this.Data=data;
	}

	this.show = function()
	{
		var html = '<div id="chart"></div>';
		$(this.getContainerControl()).html(html);

		google.charts.load(
			'current',
			{
				'packages':['corechart']
			}
		);
		
		var mythis=this;
		google.charts.setOnLoadCallback(function(){

			var data = new google.visualization.DataTable();
			data.addColumn('string', mythis.ColumnTitle);
			data.addColumn('number', mythis.ColumnNumberTitle);

			var dados = mythis.Data;
			for(i=0;i<dados.length;i++){
				data.addRow([dados[i].Caption, dados[i].Value]);
			}

			var options = {'title':mythis.Title,
						   'width':mythis.Width,
						   'height':mythis.Height
					   };

			var chart = new google.visualization.PieChart(document.getElementById('chart'));
			chart.draw(data, options);
		 });
 	}
}
