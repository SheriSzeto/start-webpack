/**
 * Created by went on 2017-4-21.
 */
(function($){
    const shade = "#556b2f";
    $.fn.greenify = function(){
        this.css("color",shade);
        return this;
    }
})(jQuery);