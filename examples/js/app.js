function compile() {

	var html = document.getElementById("html");
	var css = document.getElementById("css");
	var js = document.getElementById("js");
	var code = document.getElementById("code").contentWindow.document;

	 document.body.onkeyup = function(){
	    code.open();
    code.writeln(html.innerText+"<style>"+css.innerText+"</style>"+"<script>" + js.innerText + "</script>");
		code.close();
      };
    };

compile();
