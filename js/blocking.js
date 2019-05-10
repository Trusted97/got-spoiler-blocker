var dictionary = [ 'salvini', 'di maio', 'matteo salvini', 'luigi di maio', 'lega', 'lega salvini', 'padania', '5 stelle', 'm5s', 'casapound'  ];

function replace() {
	tags = document.getElementsByTagName('*');

	for ( var i = 0; i < tags.length; i++) {
		var element = tags[i];

		for ( var j = 0; j < element.childNodes.length; j++) {
			var node = element.childNodes[j];

			if ( node.nodeType === 3 ) {
				var text = node.nodeValue;
				text = text.toLowerCase();
				dictionary.forEach( function( dictionaryItem ) {
					var newText = text.includes( dictionaryItem );
					if ( newText ) {
						element.style.backgroundColor = 'black';
						element.style.color = 'black';
					}
				});
			}
		}
	}
}

replace();
