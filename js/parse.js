<script type="text/javascript">
		function ngopi(value){			
			var isi = document.getElementById('bdkode');
			bdkode.select();
			if(value == 'copy'){
				document.getElementById("copy");					
				}
			}
</script>

<script type="text/javascript">
function cdClear() {
    var wtarea = document.getElementById('bdkode');
    wtarea.value = '';
    wtarea.focus();
    document.getElementById('bdclear').disabled = false;
}
function convert(){var ele1 = document.getElementById("bdkode");var replaced;replaced = ele1.value;replaced = replaced.replace(/&/ig, "&amp;");replaced = replaced.replace(/</ig, "&lt;");replaced = replaced.replace(/>/ig, "&gt;");replaced = replaced.replace(/"/ig, "&quot;");replaced = replaced.replace(/&#177;/ig, "&plusmn;");replaced = replaced.replace(/&#169;/ig, "&copy;");replaced = replaced.replace(/&#174;/ig, "&reg;");replaced = replaced.replace(/ya'll/ig, "ya'll");ele1.value = replaced;}
</script>
