function GregorianToHijriah($GYear, $GMonth, $GDay) {
$y = $GYear;
$m = $GMonth;
$d = $GDay;
$jd = GregoriantoJD($m, $d, $y);
$l = $jd - 1948440 + 10632;
$n = (int) (( $l - 1 ) / 10631);
$l = $l - 10631 * $n + 354;
$j = ( (int) (( 10985 - $l ) / 5316)) * ( (int) (( 50 * $l) / 17719)) + (
(int) ( $l / 5670 )) * ( (int) (( 43 * $l ) / 15238 ));
$l = $l - ( (int) (( 30 - $j ) / 15 )) * ( (int) (( 17719 * $j ) / 50)) - (
(int) ( $j / 16 )) * ( (int) (( 15238 * $j ) / 43 )) + 29;
$m = (int) (( 24 * $l ) / 709 );
$d = $l - (int) (( 709 * $m ) / 24);
$y = 30 * $n + $j - 30;
 
$Hijriah['year'] = $y;
$Hijriah['month'] = $m;
$Hijriah['day'] = $d;
 
return $Hijriah;
}
 
$GYear = $_POST['thnMasehi'];
$GMonth = $_POST['blnMasehi'];
$GDay = $_POST['tglMasehi'];
 
$bulanHijriah = array(1 => "Muharram", "Shofar", "Robi'ul Awwal", "Robi'uts Tsani",
"Jumadil Ula", "Jumadil Akhiroh", "Rojab", "Sya'ban",
"Romadhon", "Syawwal", "Dzulqo'dah", "Dzulhijjah");
 
$Hijriah = GregorianToHijriah($GYear, $GMonth, $GDay);
 
$hasil = array("tanggal" => $Hijriah['day'],
"bulan" => $bulanHijriah[$Hijriah['month']],
"tahun" => $Hijriah['year']);
 
echo json_encode($hasil);
