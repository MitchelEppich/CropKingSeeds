<?PHP
include_once("../API/config.php");
include_once("includes/session.check.php");

if (($staff_create_commission == 'off') && (!isset($_SESSION[$install_directory_name.'_idev_AdminAccount']))) { header("Location: staff_notice.php"); exit(); }

function idev_strtotime($date, $end = false) {
list($month, $day, $year) = explode("-",$date);
if($end == false) {
return(mktime( 0,0,0,$month, $day, $year));
} else {
return(mktime( 23,59,59,$month, $day, $year));
} }

$da1 = (date ("Y"));
$da2 = (date ("m"));
$da3 = (date ("d"));

if (isset($_POST['affiliate_id'])) {
if ((isset($_POST['payout'])) && ($_POST['payout'] > 0)) {
$sale_str = $_POST['month'] . "-" .  $_POST['day'] . "-" . $_POST['year'];
$comm_date = idev_strtotime($sale_str);

$tracking_method_used = "N/A - Manually Created";

$st=$db->prepare("insert into idevaff_sales (id, payment, code, tracking, currency, amount, tracking_method) values (?, ?, ?, ?, ?, ?, ?)");
$st->execute(array($_POST['affiliate_id'],$_POST['payout'],$comm_date,$_POST['track_name'],$currency,$_POST['sale_amount'],$tracking_method_used));
$success_message = "<strong>Success!</strong> Commission created.";
$warning_message = "<strong>Notice!</strong> This new commission is now pending approval. Go to your <a href=\"commissions_pending.php\"><strong>Pending Commissions</strong></a> page to view and approve this commission.";

// --------------------------------------------
// DEFINE POST BACK AND WEBHOOK VALUES
// --------------------------------------------

	$event = "commission_created";
	$data_affiliate_id = $_POST['affiliate_id'];
	$data_order_number = $_POST['track_name'];
	$data_commission = number_format($_POST['payout'],$decimal_symbols);
	$data_sale_amount = number_format($_POST['sale_amount'],$decimal_symbols);
	$data_date = date($dateformat, $comm_date);
	$data_time = date($timeformat, $comm_date);
	$data_timestamp = $comm_date;
	$data_sub_id = null;
	$data_tid1 = null;
	$data_tid2 = null;
	$data_tid3 = null;
	$data_tid4 = null;
	$data_currency = $currency;
	$data_cart_profile = null;
	
// --------------------------------------------
// START WEBHOOK CALL
// --------------------------------------------

	include($path."/API/webhooks/webhook.php");
	
} else {
$fail_message = "<strong>Error!</strong> You must enter a positive commission amount.";
} }

$leftSubActiveMenu = 'commissions';
require("templates/header.php");

$prependfield = null;
if ($cur_sym_location == 1) { $prependfield = $cur_sym; $appendfield = $currency; } elseif ($cur_sym_location == 2) { $appendfield = $cur_sym . " " . $currency; }
$zero_dollars = number_format(0, $decimal_symbols);

?>

<div class="crumbs">
<ul id="breadcrumbs" class="breadcrumb">
<li><i class="icon-home"></i> <a href="dashboard.php">Dashboard</a></li>
<li> Commissions</li>
<li class="current"> <a href="create_commission.php" title="">Create A Commission</a></li>
</ul>
<?PHP include("templates/crumb_right.php"); ?>
</div>

<div class="page-header">
<div class="page-title"><h3>Create A Commission</h3><span>Create bonuses, enter in offline commissions, etc.</span></div>
<?PHP include("templates/stats.php"); ?>
</div>

<?PHP include("includes/notifications.php"); ?>

<?PHP
$chkaffs = $db->query("select id from idevaff_affiliates where approved = '1'"); 
if ($chkaffs->rowCount()) {
?>

<div class="widget box">
<div class="widget-header"><h4><i class="icon-reorder"></i> Enter Commission Details</h4></div>
<div class="widget-content">
<form class="form-horizontal row-border" method="post" action="create_commission.php">
<input name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>" type="hidden" />
<div class="well">Here you can manually enter a commission. This is great for adding bonuses, offline commissions, etc. The sale amount is optional. However, if you are using the tier system and are setup to pay tier commissions based on the sale amount, you'll need to enter a sale amount otherwise the tier accounts won't get a commission as there will be no sale amount to calculate the tier commission amount.</div>
<div class="form-group">
<label class="col-md-3 control-label">Commission Date</label>
<div class="col-md-9"><select class="form-control input-width-small" name="month" style="display: inline-block">
<option value="01"<?PHP if ((isset($_POST['month'])) && ($_POST['month'] == '01')) { print " selected"; } elseif ((!isset($_POST['month'])) && ($da2 == '01')) { print " selected"; } ?>>Jan</option>
<option value="02"<?PHP if ((isset($_POST['month'])) && ($_POST['month'] == '02')) { print " selected"; } elseif ((!isset($_POST['month'])) && ($da2 == '02')) { print " selected"; } ?>>Feb</option>
<option value="03"<?PHP if ((isset($_POST['month'])) && ($_POST['month'] == '03')) { print " selected"; } elseif ((!isset($_POST['month'])) && ($da2 == '03')) { print " selected"; } ?>>Mar</option>
<option value="04"<?PHP if ((isset($_POST['month'])) && ($_POST['month'] == '04')) { print " selected"; } elseif ((!isset($_POST['month'])) && ($da2 == '04')) { print " selected"; } ?>>Apr</option>
<option value="05"<?PHP if ((isset($_POST['month'])) && ($_POST['month'] == '05')) { print " selected"; } elseif ((!isset($_POST['month'])) && ($da2 == '05')) { print " selected"; } ?>>May</option>
<option value="06"<?PHP if ((isset($_POST['month'])) && ($_POST['month'] == '06')) { print " selected"; } elseif ((!isset($_POST['month'])) && ($da2 == '06')) { print " selected"; } ?>>Jun</option>
<option value="07"<?PHP if ((isset($_POST['month'])) && ($_POST['month'] == '07')) { print " selected"; } elseif ((!isset($_POST['month'])) && ($da2 == '07')) { print " selected"; } ?>>Jul</option>
<option value="08"<?PHP if ((isset($_POST['month'])) && ($_POST['month'] == '08')) { print " selected"; } elseif ((!isset($_POST['month'])) && ($da2 == '08')) { print " selected"; } ?>>Aug</option>
<option value="09"<?PHP if ((isset($_POST['month'])) && ($_POST['month'] == '09')) { print " selected"; } elseif ((!isset($_POST['month'])) && ($da2 == '09')) { print " selected"; } ?>>Sep</option>
<option value="10"<?PHP if ((isset($_POST['month'])) && ($_POST['month'] == '10')) { print " selected"; } elseif ((!isset($_POST['month'])) && ($da2 == '10')) { print " selected"; } ?>>Oct</option>
<option value="11"<?PHP if ((isset($_POST['month'])) && ($_POST['month'] == '11')) { print " selected"; } elseif ((!isset($_POST['month'])) && ($da2 == '11')) { print " selected"; } ?>>Nov</option>
<option value="12"<?PHP if ((isset($_POST['month'])) && ($_POST['month'] == '12')) { print " selected"; } elseif ((!isset($_POST['month'])) && ($da2 == '12')) { print " selected"; } ?>>Dec</option>
</select> 
<select class="form-control input-width-small" name="day" style="display: inline-block">
<option value="01"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '01')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '01')) { print " selected"; } ?>>01</option>
<option value="02"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '02')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '02')) { print " selected"; } ?>>02</option>
<option value="03"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '03')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '03')) { print " selected"; } ?>>03</option>
<option value="04"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '04')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '04')) { print " selected"; } ?>>04</option>
<option value="05"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '05')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '05')) { print " selected"; } ?>>05</option>
<option value="06"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '06')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '06')) { print " selected"; } ?>>06</option>
<option value="07"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '07')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '07')) { print " selected"; } ?>>07</option>
<option value="08"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '08')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '08')) { print " selected"; } ?>>08</option>
<option value="09"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '09')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '09')) { print " selected"; } ?>>09</option>
<option value="10"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '10')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '10')) { print " selected"; } ?>>10</option>
<option value="11"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '11')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '11')) { print " selected"; } ?>>11</option>
<option value="12"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '12')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '12')) { print " selected"; } ?>>12</option>
<option value="13"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '13')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '13')) { print " selected"; } ?>>13</option>
<option value="14"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '14')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '14')) { print " selected"; } ?>>14</option>
<option value="15"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '15')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '15')) { print " selected"; } ?>>15</option>
<option value="16"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '16')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '16')) { print " selected"; } ?>>16</option>
<option value="17"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '17')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '17')) { print " selected"; } ?>>17</option>
<option value="18"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '18')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '18')) { print " selected"; } ?>>18</option>
<option value="19"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '19')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '19')) { print " selected"; } ?>>19</option>
<option value="20"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '20')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '20')) { print " selected"; } ?>>20</option>
<option value="21"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '21')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '21')) { print " selected"; } ?>>21</option>
<option value="22"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '22')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '22')) { print " selected"; } ?>>22</option>
<option value="23"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '23')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '23')) { print " selected"; } ?>>23</option>
<option value="24"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '24')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '24')) { print " selected"; } ?>>24</option>
<option value="25"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '25')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '25')) { print " selected"; } ?>>25</option>
<option value="26"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '26')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '26')) { print " selected"; } ?>>26</option>
<option value="27"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '27')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '27')) { print " selected"; } ?>>27</option>
<option value="28"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '28')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '28')) { print " selected"; } ?>>28</option>
<option value="29"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '29')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '29')) { print " selected"; } ?>>29</option>
<option value="30"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '30')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '30')) { print " selected"; } ?>>30</option>
<option value="31"<?PHP if ((isset($_POST['day'])) && ($_POST['day'] == '31')) { print " selected"; } elseif ((!isset($_POST['day'])) && ($da3 == '31')) { print " selected"; } ?>>31</option>
</select> 
<select class="form-control input-width-small" name="year" style="display: inline-block">
<option value="2003" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2003')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2003')) { print "selected"; } ?>>2003</option>
<option value="2004" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2004')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2004')) { print "selected"; } ?>>2004</option>
<option value="2005" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2005')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2005')) { print "selected"; } ?>>2005</option>
<option value="2006" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2006')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2006')) { print "selected"; } ?>>2006</option>
<option value="2007" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2007')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2007')) { print "selected"; } ?>>2007</option>
<option value="2008" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2008')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2008')) { print "selected"; } ?>>2008</option>
<option value="2009" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2009')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2009')) { print "selected"; } ?>>2009</option>
<option value="2010" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2010')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2010')) { print "selected"; } ?>>2010</option>
<option value="2011" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2011')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2011')) { print "selected"; } ?>>2011</option>
<option value="2012" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2012')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2012')) { print "selected"; } ?>>2012</option>
<option value="2013" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2013')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2013')) { print "selected"; } ?>>2013</option>
<option value="2014" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2014')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2014')) { print "selected"; } ?>>2014</option>
<option value="2015" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2015')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2015')) { print "selected"; } ?>>2015</option>
<option value="2016" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2016')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2016')) { print "selected"; } ?>>2016</option>
<option value="2017" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2017')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2017')) { print "selected"; } ?>>2017</option>
<option value="2018" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2018')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2018')) { print "selected"; } ?>>2018</option>
<option value="2019" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2019')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2019')) { print "selected"; } ?>>2019</option>
<option value="2020" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2020')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2020')) { print "selected"; } ?>>2020</option>
<option value="2021" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2021')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2021')) { print "selected"; } ?>>2021</option>
<option value="2022" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2022')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2022')) { print "selected"; } ?>>2022</option>
<option value="2023" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2023')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2023')) { print "selected"; } ?>>2023</option>
<option value="2024" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2024')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2024')) { print "selected"; } ?>>2024</option>
<option value="2025" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2025')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2025')) { print "selected"; } ?>>2025</option>
<option value="2026" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2026')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2026')) { print "selected"; } ?>>2026</option>
<option value="2027" <?PHP if ((isset($_POST['year'])) && ($_POST['year'] == '2027')) { print " selected"; } elseif ((!isset($_POST['year'])) && ($da1 == '2027')) { print "selected"; } ?>>2027</option>
</select></div>
</div>
<div class="form-group">
<label class="col-md-3 control-label">Choose An Affiliate</label>
<div class="col-md-9"><select class="form-control input-width-xxlarge" name="affiliate_id">
<?PHP
$getnames = $db->query("select id, username from idevaff_affiliates order by id"); 
if ($getnames->rowCount()) {
while ($qry = $getnames->fetch()) {
$chid=$qry['id'];
$chuser=$qry['username'];
print "<option value='$chid'";
if ((isset($_POST['affiliate_id'])) && ($chid == $_POST['affiliate_id'])) { print ' selected'; }
print ">ID: " . $chid . " - Username: " . $chuser . "</option>\n"; } }
?>
</select></div>
</div>

<div class="form-group">
<label class="col-md-3 control-label">Commission Amount</label>
<div class="col-md-2">
<div class="input-group">
<?PHP if (isset($prependfield)) { ?><span class="input-group-addon"><?PHP echo html_output($prependfield); ?></span><?PHP } ?>
<input type="text" name="payout" value="<?PHP if (isset($_POST['payout'])) { echo html_output($_POST['payout']); } else { echo $zero_dollars; } ?>" class="form-control" placeholder=".input-group">
<span class="input-group-addon"><?PHP echo html_output($appendfield); ?></span>
</div>
</div>
</div>

<div class="form-group">
<label class="col-md-3 control-label">Sale Amount<!--<br /><small>Optional</small>--></label>
<div class="col-md-2">
<div class="input-group">
<?PHP if (isset($prependfield)) { ?><span class="input-group-addon"><?PHP echo html_output($prependfield); ?></span><?PHP } ?>
<input type="text" name="sale_amount" value="<?PHP if (isset($_POST['sale_amount'])) { echo html_output($_POST['sale_amount']); } else { echo $zero_dollars; } ?>" class="form-control" placeholder=".input-group">
<span class="input-group-addon"><?PHP echo html_output($appendfield); ?></span>
</div>
</div>
</div>

<div class="form-group">
<label class="col-md-3 control-label">Order Number<!--<br /><small>Optional</small>--></label>
<div class="col-md-9"><input type="text" name="track_name" value="<?PHP if (isset($_POST['track_name'])) { echo html_output($_POST['track_name']); } ?>" class="form-control input-width-xxlarge"></div>
</div>
<div class="form-actions">
<input type="submit" value="Create Commission" class="btn btn-primary">
</div>
</form>
</div>
<?PHP } else { ?>

<div class="col-md-12">
<div class="widget box" style="margin-top:20px;">
<div class="widget-header"><h4><i class="icon-reorder"></i> Commission Creation Error</h4></div>
<div class="widget-content">
No approved affiliate exist.
</div>
</div>
</div>

<?PHP } ?>
</div>


<?PHP include("templates/footer.php"); ?>