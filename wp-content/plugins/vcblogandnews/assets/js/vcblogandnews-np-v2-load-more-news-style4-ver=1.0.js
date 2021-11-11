jQuery(document).ready(function($) {
	
	var pageNum = parseInt(fnwp_.startPage) + 1;
	var max = parseInt(fnwp_.maxPages);
	var nextLink = fnwp_.nextLink;
	var readmore = fnwp_.readtext;
	var loading = fnwp_.loading;
	var nomoreposts = fnwp_.nomoreposts;
	var cssLink = fnwp_.cssLink;
	
	if(pageNum <= max) {
		$('.vcblogandnews-np-v2-load-more-news-style4 .vcblogandnews-np-v2-vc-element-news-article-container')
			.append('<div class="vcblogandnews-np-v2-load-more-container vcblogandnews-np-v2-placeholder-'+ pageNum +'-style4"></div><div class="vcblogandnews-clear"></div>')
			.append('<div id="vcblogandnews-np-v2-load-news" class="vcblogandnews-np-v2-load-news-style4"><a href="#" '+ cssLink +'>'+ readmore + '</a></div>');
	}
	
	$('.vcblogandnews-np-v2-load-news-style4 a').click(function() {	
		if(pageNum <= max) {		
			$(this).text(loading);			
			$('.vcblogandnews-np-v2-placeholder-'+ pageNum +'-style4').load(nextLink + ' .vcblogandnews-np-v2-item-load-more-style4',
				function() {
					pageNum++;
					nextLink = nextLink.replace(/\/page\/[0-9]?/, '/page/'+ pageNum);
					$('.vcblogandnews-np-v2-load-more-news-style4')
						.before('<div class="vcblogandnews-np-v2-load-more-container vcblogandnews-np-v2-placeholder-'+ pageNum +'-style4"></div><div class="vcblogandnews-clear"></div>')
					if(pageNum <= max) {
						$('.vcblogandnews-np-v2-load-news-style4 a').text(readmore);
					} else {
						$('.vcblogandnews-np-v2-load-news-style4 a').text(nomoreposts);
					}
				}
			);
		} else {
			$('.vcblogandnews-np-v2-load-news-style4 a').append('.');
		}	
		
		return false;
	});
	
});