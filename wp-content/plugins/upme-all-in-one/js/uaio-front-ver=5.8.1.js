jQuery(document).ready(function() {

    /**
     * Enable datepickers on UPME date fields
     *
     */
	if (jQuery.fn.datepicker) {
	    jQuery( ".uaio_past_date" ).datepicker({ minDate: "-50Y", maxDate: 0 });
		jQuery( ".uaio_future_date" ).datepicker({ minDate: 0, maxDate: "+50Y" });
	}

    /**
     * Reset values of date fields
     */
    jQuery(".uaio_past_date_reset").click(function(){
        var picker = jQuery(this).parent().find('.uaio_past_date');
        jQuery.datepicker._clearDate(picker);
    });

    jQuery(".uaio_future_date_reset").click(function(){
        var picker = jQuery(this).parent().find('.uaio_future_date');
        jQuery.datepicker._clearDate(picker);
    });

    jQuery(".upme-wrap").on('click','.uaio_mailchimp_btn',function(){
        var user_id = jQuery(this).attr('data-user');
        var meta = jQuery(this).attr('data-meta');
        var subscribe_btn = jQuery(this);
        
        subscribe_btn.val(UAIOFront.Messages.Processing);
        
        jQuery.post(
                UAIOFront.AdminAjax,
                {
                    'action': 'uaio_process_mailchimp_subscription',
                    'user_id':   user_id,
                    'meta':   meta,
                },
                function(response){
                     if(response.status == 'success'){
                        if(response.type == 'subscribe'){
                            subscribe_btn.val(UAIOFront.Messages.ClickToUnsubscribe);
                        }else{
                            subscribe_btn.val(UAIOFront.Messages.ClickToSubscribe);
                        }
                        
                    }else{
                        if(response.type == 'subscribe'){
                            subscribe_btn.val(UAIOFront.Messages.ClickToSubscribe);
                        }else{
                            subscribe_btn.val(UAIOFront.Messages.ClickToUnsubscribe);
                        }
                    }
                }
                    

                ,"json");
    });
    
    
    jQuery(".upme-profile-tab").click(function(){
        
        var current_panel = jQuery(this).attr("data-tab-id");
        var tab_panel_container = jQuery(this).parent().parent().parent();
        if(current_panel != 'upme-profile-panel'){
            tab_panel_container.find('.upme-field.upme-view').show();
        }
    });
});