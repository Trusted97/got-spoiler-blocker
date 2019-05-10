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

	images = document.getElementsByTagName('img');

	for ( var k = 0; k < images.length; k++) {

		var element = images[k];

		if (element.alt != null || element.alt != ''){
			var alt = element.alt;

			console.log(element.alt);

			alt = alt.toLowerCase();

			dictionary.forEach( function( dictionaryItem ) {
				var newAlt = alt.includes( dictionaryItem );
				if ( newAlt ) {
					element.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/VSymbol1.png/200px-VSymbol1.png';
				}
			});
		}


	}



}

replace();
