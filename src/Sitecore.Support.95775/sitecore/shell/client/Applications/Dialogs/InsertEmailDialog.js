define(["sitecore"], function (Sitecore) {
  var myapp = Sitecore.Definitions.App.extend({
      initialized: function() {
          var text = this.DisplayedText.get("text");

          var flag = (text != null && text != "");
          if (flag) {
              this.InsertEmailLink.set("isEnabled", "true");
          }

          var $el = $("footer");
          if ($el && $el.length > 0) {
              $el.css("z-index", "4");
          }
      }
  });

  return myapp;
});