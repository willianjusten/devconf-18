/*
/ Method that gets the values from the textareas
/ and insert to an iframe
*/
function render() {
  const html = document.getElementById("html");
	const css = document.getElementById("css");
	const js = document.getElementById("js");
	const code = document.getElementById("code").contentWindow.document;

  code.open();
  code.writeln(`${html.innerText}<style>${css.innerText}</style><script>${js.innerText}</script>`);
  code.close();
}

/*
/ Create listener to call the render
/ always after a keypress.
*/
function compile() {
	 document.body.onkeyup = function(){
    render();
  };
};

/*
/ Create the listener
/ and render the first values
*/
compile();
render();
