//Populate with example code
var example = 'body\n div.someClass\n  a:first-child';
$('#inss').text(example);
writeCSS(example);

$('#inss').on('keyup',writeCSS);

function writeCSS(inss){
	//Detect if content comes from example string or textarea content
	if(typeof inss != 'string'){
		var inss = inss.target.value;
	}
	var lines = inss.split(/\n/);
	var css = $.map(lines, function(line, index) {
		return processLine(index, line);
	}).join("");
	$('#css').val(css);

	function processLine(index, line){
		var spaces = countSpaces(line);
		var lineText = line.slice(spaces);
		var prevSelectors = lookPrevSelectors(spaces,index).join(" ");
		if(prevSelectors==[]){
			var selector = lineText + ' {\n\n}\n';
		}
		else{
			var selector = prevSelectors + ' ' + lineText + ' {\n\n}\n';
		}
		return selector;
	}

	function countSpaces(line){
		var character = 0;
		var isSpace = true;
		while(isSpace == true){
			if(line.charCodeAt(character) == 32){
				character +=1;
			}
			else {
				isSpace = false;
			}
		}
		return character;
	}

	function lookPrevSelectors (spaces, index){
		var prevSelectors = [];
		spaces--;
		while(spaces >= 0){
			for(; index >= 0; index--){
				if(countSpaces(lines[index]) == spaces){
					prevSelectors.unshift(lines[index].slice(spaces));
					spaces--;
				}
			}
		}
		return prevSelectors;
	}
}