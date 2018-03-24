function Button(text) {
	this.text = text || 'Hello!'; //daje możkiwość utworzenia obiektu bez podawania argumentu
}

Button.prototype = {
	create: function(){
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
		$('body').append(this.$element);
	}
};

var button = new Button('Hello');
button.create();