/**
 * Created by SUN on 2016/4/4 0004.
 */
;(function ($) {
    var filterbox = function (id) {
        var self = this;

        if($('#'+ id).attr('class') == 's-filter'){

        }


       /* //渲染剩余的DOM，并且插入到Body
        this.renderDOM();
        this.picViewArea = this.popupWin.find("div.lightbox-pic-view");  //图片预览区域
        this.popupPic = this.popupWin.find("img.lightbox-image");  //图片
        this.captionArea = this.popupWin.find("div.lightbox-caption-area");  //图片描述区域
        this.nextBtn = this.popupWin.find("span.lightbox-next-btn");
        this.prevBtn = this.popupWin.find("span.lightbox-prev-btn");
        this.captionText = this.popupWin.find("p.lightbox-pic-desc");  //图片描述
        this.currentIndex = this.popupWin.find("p.lightbox-of-index");//图片当前所以
        this.closetBtn = this.popupWin.find("span.lightbox-close-btn");

        //准备开发事件委托，获取组数据
        this.groupName = null;
        this.groupData = [];

        this.bodyNode.delegate(".js-lightbox,*[data-role=lightbox]", "click", function (event) {
            //组织事件冒泡
            event.stopPropagation();
            var currentGroupName = $(this).attr("data-group");

            if (currentGroupName != self.groupName) {
                self.groupName = currentGroupName;
                //根据当前组名获取同一组数据
                self.getGroup();
            }
            self.initPopup($(this));
        });*/
    };

    filterbox.prototype = {

        renderDOM: function () {
            var strDom = '<div class="date-section">'
                + '<div class="date-section-start">'
                + '<p>起始时间</p>'
                + '<input type="date" class="start-time">'
                + '</div>'

                + '<div class="date-section-end">'
                + ' <p>截止时间</p>'
                + '<input type="date" class="end-time">'
                + '</div>'

                + '<button id="startStatic">'
                + ' 开始统计'
                + ' </button>'
                + '</div>'
                + '<div class="region-section">'
                + ' <div class="region-select">'
                + '<select name="region" id="region">'
                + '<option value="1">选择统计地区</option>'
                + '</select>'
                + ' </div>'

                + '<div class="selected-container">'
                + '</div>';

            //插入到this.popWIN
            this.filterCon.html(strDom);
        }
    };

    window["filterbox"] = filterbox;

})(jQuery);