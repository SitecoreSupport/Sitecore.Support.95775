define(["sitecore"], function(Sitecore) {
    var InsertAnchorDialog = Sitecore.Definitions.App.extend({
        initialized: function () {

            this.updateOkButton();

            this.Text.on("change", function () {
                this.updateOkButton();
            }, this);

        },

        updateOkButton: function () {

            var text = this.Text.get("text");

            if (text)
                this.InsetAnchor.set("isEnabled", true);
            else
                this.InsetAnchor.set("isEnabled", false);
        }

    });
    var footer = $("footer");
    console.log("Break footer");
    if (footer && footer.length > 0) {
        footer.css("z-index", "4");
    }
    return InsertAnchorDialog;
});