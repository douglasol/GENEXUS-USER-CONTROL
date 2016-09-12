/*  BootstrapCarousel

	Apresenta um agrupamento de imagens

    --------------------------------------------------------------
	User Control: Desenvolvendo controles com GeneXus
	15/08/2016, Douglas Hamilton de Oliveira

*/
function BootstrapCarousel($)
{
	this.SetCarouselData = function(data)
	{
		this.CarouselData = data;
	}
	this.GetCarouselData = function()
	{
		return this.CarouselData;
	}

	this.show = function()
	{
		var html = ''

		html+='<div class="row">';
		html+='<div id="transition-timer-carousel" class="carousel slide transition-timer-carousel" data-ride="carousel">';

		// indicators
		if (this.CarouselData.images.length>1) {
			html+='<ol class="carousel-indicators">';
			var active = 'class="active"';
			for (var i = 0; i<this.CarouselData.images.length;i++)
			{
				html+='<li data-target="#myCarousel" data-slide-to="'
				 + i
				 + '" '
				 + active
				 + '></li>';
				active = '';
			}
			html+='</ol>';
		}

		html+='<div class="carousel-inner">';

		var active = 'active';
		for (var i = 0; i<this.CarouselData.images.length;i++)
		{
			var image = this.CarouselData.images[i];

			html+='<div class="item '
			+ active
			+ '">';

			// conteudo
			if (image.image!=''){

				html+='<img src="'
				+ image.image
				+ '" style="display: block; margin-left: auto;margin-right: auto " />';

			}
			else{
				html+='<img src="http://placehold.it/1200x400" />';
			}

			html+='<div class="carousel-caption">';
			html+='<h1 class="carousel-caption-header">Slide 1</h1>';
			html+='<p class="carousel-caption-text hidden-sm hidden-xs">';
			html+='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim aliquet rutrum. Praesent vitae ante in nisi condimentum egestas. Aliquam.';
			html+='</p>';
			html+='</div>';
			html+='</div>';
			active = '';
		}

		html+='</div>';

		html+='<!-- Controls -->';
		html+='	<a class="left carousel-control" href="#transition-timer-carousel" data-slide="prev">';
		html+='<span class="glyphicon glyphicon-chevron-left"></span>';
		html+='	</a>';
		html+='	<a class="right carousel-control" href="#transition-timer-carousel" data-slide="next">';
		html+='<span class="glyphicon glyphicon-chevron-right"></span>';
		html+='	</a>';
		html+='<!-- Timer "progress bar" -->';
		html+='<hr class="transition-timer-carousel-progress-bar animate" />';

		html+='</div>';
		html+='</div>';

		this.setHtml(html);

		$(document).ready(function() {
			$("#transition-timer-carousel").on("slide.bs.carousel", function(event) {
				$(".transition-timer-carousel-progress-bar", this)
					.removeClass("animate").css("width", "0%");
				}).on("slid.bs.carousel", function(event) {
				$(".transition-timer-carousel-progress-bar", this)
					.addClass("animate").css("width", "100%");
				});
				$(".transition-timer-carousel-progress-bar", "#transition-timer-carousel")
					.css("width", "100%");
		});
	}
}
