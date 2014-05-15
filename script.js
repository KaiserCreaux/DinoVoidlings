$(document).ready(function() {
    $tabs = $(".tabs li");
    
    $tabs.click(function() {
        if($(this)){
            $tabs.removeClass("selected");
        $(this).addClass("selected");}
        
        selectionId = $(this).attr('id');
        
        $seg = $(".seg#"+selectionId);
    $(".mContent").fadeOut("fast", function(){
        $(".seg").css("display", "none");
        $(".seg#"+selectionId).css("display", "block");
        $(".mContent").fadeIn("slow");
    });
    
    });
    $tabsPlayers = $(".tabsPlayers li");
    
    $tabsPlayers.click(function() {
        if($(this)){
            $tabsPlayers.removeClass("selectedTeam");
        $(this).addClass("selectedTeam");}
        
        selectionIdTeam = $(this).attr('id');
        
        $pagesTeam = $(".pageTeam#"+selectionIdTeam);
    $(".content").fadeOut("fast", function(){
        $(".pageTeam").css("display", "none");
        $(".pageTeam#"+selectionIdTeam).css("display", "block");
        $(".content").fadeIn("slow");
    });
    });
});
