jQuery(function($){
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    function getParameterByNamew(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^?#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    
    if($('#dyntable_commission_list').length > 0) {
        $('#dyntable_commission_list').dataTable({
            "bProcessing"	: true,
            "bServerSide"	: true,
            "sAjaxSource"	: "templates/internals/core_ajax_report.php?report=" + getParameterByName('report'), 
            "aoColumnDefs": [ { "bSortable": false, "aTargets": [ 3 ]}], 
	   		"aaSorting"     : [[ 0, "desc" ]],
            "bFilter"           : true,
            "oLanguage": {
			  	"sEmptyTable":     langDataTable["sEmptyTable"],
				"sInfo":           langDataTable["sInfo"],
				"sInfoEmpty":      langDataTable["sInfoEmpty"],
				"sInfoFiltered":   langDataTable["sInfoFiltered"],
				"sInfoPostFix":    "",
				"sInfoThousands":  ",",
				"sLengthMenu":     langDataTable["sLengthMenu"],
				"sLoadingRecords": langDataTable["sLoadingRecords"],
				"sProcessing":     langDataTable["sProcessing"],
				"sSearch":         langDataTable["sSearch"],
				"sZeroRecords":    langDataTable["sZeroRecords"],
				"oPaginate": {
					"sFirst":    langDataTable["sFirst"],
					"sLast":     langDataTable["sLast"],
					"sNext":     langDataTable["sNext"],
					"sPrevious": langDataTable["sPrevious"]
				},
				"oAria": {
					"sSortAscending":  langDataTable["sSortAscending"],
					"sSortDescending": langDataTable["sSortDescending"]
				}
			}
        });
    }
    if($('#dyntable_commission_list_subs').length > 0) {
        $('#dyntable_commission_list_subs').dataTable({
            "bProcessing"	: true,
            "bServerSide"	: true,
            "sAjaxSource"	: "templates/internals/core_ajax_report.php?report=" + getParameterByName('report'),  
            "aoColumnDefs": [ { "bSortable": false, "aTargets": [ 4 ]}],
	   		"aaSorting"     : [[ 0, "desc" ]],
            "bFilter"           : true,
	   		"oLanguage": {
			  	"sEmptyTable":     langDataTable["sEmptyTable"],
				"sInfo":           langDataTable["sInfo"],
				"sInfoEmpty":      langDataTable["sInfoEmpty"],
				"sInfoFiltered":   langDataTable["sInfoFiltered"],
				"sInfoPostFix":    "",
				"sInfoThousands":  ",",
				"sLengthMenu":     langDataTable["sLengthMenu"],
				"sLoadingRecords": langDataTable["sLoadingRecords"],
				"sProcessing":     langDataTable["sProcessing"],
				"sSearch":         langDataTable["sSearch"],
				"sZeroRecords":    langDataTable["sZeroRecords"],
				"oPaginate": {
					"sFirst":    langDataTable["sFirst"],
					"sLast":     langDataTable["sLast"],
					"sNext":     langDataTable["sNext"],
					"sPrevious": langDataTable["sPrevious"]
				},
				"oAria": {
					"sSortAscending":  langDataTable["sSortAscending"],
					"sSortDescending": langDataTable["sSortDescending"]
				}
			}
            
        });
    }
	if($('#dyntable_payment_history').length > 0) {
        $('#dyntable_payment_history').dataTable({
            "bProcessing"	: true,
            "bServerSide"	: true,
            "sAjaxSource"	: "templates/internals/core_ajax_history.php?report=" + getParameterByNamew('page'),
            "aoColumnDefs": [ { "bSortable": false, "aTargets": [ dyntable_payment_history_col ]}],
			"aaSorting"     : [[ 0, "desc" ]],
 			"bFilter"           : true,
 			"oLanguage": {
			  	"sEmptyTable":     langDataTable["sEmptyTable"],
				"sInfo":           langDataTable["sInfo"],
				"sInfoEmpty":      langDataTable["sInfoEmpty"],
				"sInfoFiltered":   langDataTable["sInfoFiltered"],
				"sInfoPostFix":    "",
				"sInfoThousands":  ",",
				"sLengthMenu":     langDataTable["sLengthMenu"],
				"sLoadingRecords": langDataTable["sLoadingRecords"],
				"sProcessing":     langDataTable["sProcessing"],
				"sSearch":         langDataTable["sSearch"],
				"sZeroRecords":    langDataTable["sZeroRecords"],
				"oPaginate": {
					"sFirst":    langDataTable["sFirst"],
					"sLast":     langDataTable["sLast"],
					"sNext":     langDataTable["sNext"],
					"sPrevious": langDataTable["sPrevious"]
				},
				"oAria": {
					"sSortAscending":  langDataTable["sSortAscending"],
					"sSortDescending": langDataTable["sSortDescending"]
				}
			}
       
        });
    }
if($('#dyntable_payment_Traffic').length > 0) {
        $('#dyntable_payment_Traffic').dataTable({
            "bProcessing"	: true,
            "bServerSide"	: true,
            "sAjaxSource"	: "templates/internals/core_ajax_traffic.php?report=" + getParameterByNamew('page'),
			"aaSorting"     : [[ 0, "desc" ]],
 	   		"bFilter"           : true,
 	   		"oLanguage": {
			  	"sEmptyTable":     langDataTable["sEmptyTable"],
				"sInfo":           langDataTable["sInfo"],
				"sInfoEmpty":      langDataTable["sInfoEmpty"],
				"sInfoFiltered":   langDataTable["sInfoFiltered"],
				"sInfoPostFix":    "",
				"sInfoThousands":  ",",
				"sLengthMenu":     langDataTable["sLengthMenu"],
				"sLoadingRecords": langDataTable["sLoadingRecords"],
				"sProcessing":     langDataTable["sProcessing"],
				"sSearch":         langDataTable["sSearch"],
				"sZeroRecords":    langDataTable["sZeroRecords"],
				"oPaginate": {
					"sFirst":    langDataTable["sFirst"],
					"sLast":     langDataTable["sLast"],
					"sNext":     langDataTable["sNext"],
					"sPrevious": langDataTable["sPrevious"]
				},
				"oAria": {
					"sSortAscending":  langDataTable["sSortAscending"],
					"sSortDescending": langDataTable["sSortDescending"]
				}
			}
	
        });
    }
    
	if($('#dyntable_payment_Tier').length > 0) {
        $('#dyntable_payment_Tier').dataTable({
            "bProcessing"	: true,
            "bServerSide"	: true,
            "sAjaxSource"	: "templates/internals/core_ajax_tier.php?report=" + getParameterByNamew('page'),
			"aaSorting"     : [[ 0, "desc" ]],
			"bFilter"           : false,
			"oLanguage": {
			  	"sEmptyTable":     langDataTable["sEmptyTable"],
				"sInfo":           langDataTable["sInfo"],
				"sInfoEmpty":      langDataTable["sInfoEmpty"],
				"sInfoFiltered":   langDataTable["sInfoFiltered"],
				"sInfoPostFix":    "",
				"sInfoThousands":  ",",
				"sLengthMenu":     langDataTable["sLengthMenu"],
				"sLoadingRecords": langDataTable["sLoadingRecords"],
				"sProcessing":     langDataTable["sProcessing"],
				"sSearch":         langDataTable["sSearch"],
				"sZeroRecords":    langDataTable["sZeroRecords"],
				"oPaginate": {
					"sFirst":    langDataTable["sFirst"],
					"sLast":     langDataTable["sLast"],
					"sNext":     langDataTable["sNext"],
					"sPrevious": langDataTable["sPrevious"]
				},
				"oAria": {
					"sSortAscending":  langDataTable["sSortAscending"],
					"sSortDescending": langDataTable["sSortDescending"]
				}
			}
       
        });

		$('#dyntable_payment_Tier').on('click', '.load_more', function(){
			var th = $(this);
			var space = th.data('space');
			var parent = th.data('parent');
			var page_now = th.data('page_now');
			var token = th.data('token');
			//var str = 'Space: ' + space + ', Parent: ' + parent + ', Page Now: ' + page_now;
			//console.log(str);
			var data = {
				'space': space,
				'parent': parent,
				'page_now': page_now,
				'csrf_token': token
			};
			th.html('<i class="fa fa-spinner" aria-hidden="true"></i>');
			//call ajax
			$.ajax({
				url: "templates/internals/core_tier_getchild.php",
				data: data,
				method: "POST",
				dataType: "json"
			}).error(function (err) {
				console.log(err);

			}).done(function () {
				th.html('<i class="fa fa-plus" aria-hidden="true"></i>');
			}).success(function (response) {

				if (response.success) {
					if ( response.output && response.output != '' ) {
						th.closest( "tr" ).after( response.output );
					}
				}

				if (response.end && response.end == 1) {
					th.hide();
				} else {

					if ( response.page_now ) {
						th.data('page_now', response.page_now);
					}

					if ( response.space ) {
						th.data('space', response.space);
					}
				}

			}, 'json');


		});

    }
if($('#dyntable_Pending_Debits').length > 0) {
        $('#dyntable_Pending_Debits').dataTable({
            "bProcessing"	: true,
            "bServerSide"	: true,
            "sAjaxSource"	: "templates/internals/core_ajax_Pending_Debit.php?report=" + getParameterByNamew('page'),
			"aaSorting"     : [[ 0, "desc" ]],
 			"bFilter"           : true,
 			"oLanguage": {
			  	"sEmptyTable":     langDataTable["sEmptyTable"],
				"sInfo":           langDataTable["sInfo"],
				"sInfoEmpty":      langDataTable["sInfoEmpty"],
				"sInfoFiltered":   langDataTable["sInfoFiltered"],
				"sInfoPostFix":    "",
				"sInfoThousands":  ",",
				"sLengthMenu":     langDataTable["sLengthMenu"],
				"sLoadingRecords": langDataTable["sLoadingRecords"],
				"sProcessing":     langDataTable["sProcessing"],
				"sSearch":         langDataTable["sSearch"],
				"sZeroRecords":    langDataTable["sZeroRecords"],
				"oPaginate": {
					"sFirst":    langDataTable["sFirst"],
					"sLast":     langDataTable["sLast"],
					"sNext":     langDataTable["sNext"],
					"sPrevious": langDataTable["sPrevious"]
				},
				"oAria": {
					"sSortAscending":  langDataTable["sSortAscending"],
					"sSortDescending": langDataTable["sSortDescending"]
				}
			}
       
        });
    }
});   
