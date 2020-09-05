<div class="container">
  <div class="browser">
    <div class="mantap">
      <div class="controls">
        <button class="btn close"></button>
        <button class="btn minimize"></button>
        <button class="btn fullscreen"></button>
      </div>
    </div>
    <div class="viewport">
     <p style="text-align: center;padding:12px;">
<textarea cols="50" rows="15" class="boxarea_BD" id="bdkode" placeholder="/*---Masukan Kode HTML yang mau di Konversi disini---*/" spellcheck="false" wrap="virtual">
</textarea>
<br>
<span>
<button class="tombol-konversi" id="bdclear" onclick="convert();this.disabled = true;" title="Konversi">Convert</button>
<button class="tombol-konversi" id="copy" onclick="ngopi('copy')" title="Bersihkan">Copy</button>
<button class="tombol-konversi" onclick="cdClear();" title="Bersihkan">Refresh</button>
</span>

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
</p><div style="clear: both;"><p></p>
       </div></div>
  </div>
</div>
<style type='text/css'>
  .container {
}
.browser {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  align-items: center;
}
.browser .mantap{
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px   6px rgba(0,0,0,0.23);
  background-color: #d9d9d9;
  border-radius: 5px 5px 0 0;
  height: 2.5em;
  width: 50%;
}
button, button[disabled]:active {
    background-color: #464646;
    font: bold 11px Tahoma,Verdana,Arial,sans-serif;
    color: #FFF;
    border: medium none;
    border-radius: 3px;
    cursor: pointer;
    padding: 5px 10px;
}
.browser .mantap .controls {
  line-height: 1.25em;
  padding: 0.625em 0;
}
.browser .mantap .controls .btn {
    border: medium none;
    border-radius: 100%;
    display: block;
    float: left;
    height: auto;
    margin-left: 0.5em;
    outline: medium none;
    width: 0px;
    padding: 7px;
}
.browser .mantap .controls .btn.close {
  background-color: #e74c3c;
}
.browser .mantap .controls .btn.minimize {
  background-color: #f1c40f;
}
.browser .mantap .controls .btn.fullscreen {
  background-color: #2ecc71;
}
.browser .viewport {
  width:50%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px   6px rgba(0,0,0,0.23);
  background-color: #f5f5f5;
  border-radius: 0 0 5px 5px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
}
.tombol-konversi {
cursor: pointer;
    text-align: center;
    display: inline-block;
    color: #fff;
    font-size: 12px;
    margin: 5px;
    padding: 12px;
    background-color: #0091ea;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.26);
    border-radius: 3px;
    border: 0;
}
.pageform {
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
}
  </style>
</p><div style="clear: both;"><p></p>
       </div></div>
  </div>
</div>
