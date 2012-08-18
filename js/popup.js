request(function(notifications){
    var result_container = $("#remind");

    $("#loading").hide();

    if(!notifications.length){
        result_container.append('<p>没有新消息</p>');
        return;
    }

    var template = new t($("#noty-tmpl").html());
    $.each(notifications, function(index, notification){
        var html = template.render(notification)
        $(html).on("click", ".remove", function(){
            var self = $(this);
            $.get(self.attr("callback"), function(){
                self.parent(".clearfix").remove();
                if(!result_container.find(".clearfix").length){
                    result_container.append('<p>没有新消息</p>');
                }
            });
        }).appendTo(result_container).find("a[source]").click(function(){
            // remove this notification
            $.get(notification.rmessagecallback);
        });
        
    });
});
