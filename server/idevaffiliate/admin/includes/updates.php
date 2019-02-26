<?PHP
if (!defined('idev_admin_updates')) { die(); }
include("session.check.php");

$fail_message = null;
$fail = 0;
$staff_config= $db->query("select staff from idevaff_config");
$staff_config=$staff_config->fetch();
$staff_vars = $staff_config['staff'];
$staff_data = explode("-", $staff_vars);
$staff_create_commission = $staff_data[8];

if ((isset($_REQUEST['cfg'])) || (isset($_POST['cfg']))) {

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 1)) {
$st = $db->prepare("update idevaff_config set sitename = ?, siteurl = ?, base_url = ?, default_destination = ?, cookie_url = ?");
$st->execute(array($_POST['sitename'],$_POST['siteurl'],$_POST['base_url'],$_POST['base_url_two'],$_POST['cookie_url']));
$success_message = "<strong>Success!</strong> Settings saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 2)) {
$pic_upload = $_POST['pic_upload'];
if ((!is_writable("../assets/pictures/")) && ($pic_upload == '1')) {
$pic_upload = '0';
$warning_message = "<strong>Notice!</strong> In order to allow picture uploads, the <strong>/assets/pictures</strong> folder requires <u>WRITE</u> permissions. If you'd like to use this feature, please issue <u>write</u> permissions to the <strong>/assets/pictures</strong> folder and submit this form again.";
}
$st = $db->prepare("update idevaff_config set gdpr_hide_ip = ?, emails_allowed = ?, pic_upload = ?, account_approval = ?, startnumber = ?, initialbalance = ?, balance = ?, com_show = ?, com_show_add = ?, pend_show = ?, use_security = ?, deb_show = ?");
$st->execute(array($_POST['gdpr_hide_ip'],$_POST['emails_allowed'],$pic_upload,$_POST['account_approval'],$_POST['startnumber'],$_POST['initialbalance'],$_POST['balance'],$_POST['com_show'],$_POST['com_show_add'],$_POST['pend_show'],$_POST['use_security'],$_POST['deb_show']));

$success_message = "<strong>Success!</strong> Settings saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 3)) {
if ((!isset($_POST['ap_1'])) && (!isset($_POST['ap_2'])) && (!isset($_POST['ap_3']))) {
$fail_message = "<strong>Error!</strong> You must activate a payout type.";
$fail = 1; }
$active_count = 0;
if (isset($_POST['ap_1'])) { $active_count = 1; }
if (isset($_POST['ap_2'])) { $active_count = $active_count + 1; }
if (isset($_POST['ap_3'])) { $active_count = $active_count + 1; }
if (($_POST['paytype'] == 1) && ($active_count < 2)) {
$fail_message = "<strong>Error!</strong> You're allowing affiliates to choose their commission type. Please activate multiple commission types.";
$fail = 1; }
if ((!isset($_POST['ap_1'])) && (!isset($_POST['ap_2'])) && (!isset($_POST['ap_3']))) {
$fail_message = "<strong>Error!</strong> You must offer at least 1 payment type.";
$fail == 1; }
if ((isset($_POST['val_1'])) && (!isset($_POST['ap_1']))) {
$chka1 = $db->query("select id from idevaff_affiliates where type = '1'");
if ($chka1->rowCount()) {
$fail_message = "<strong>Error!</strong> Can not remove commission type. Percentage payout is in use by current affiliates.";
$fail = 1; } }
if ((isset($_POST['val_2'])) && (!isset($_POST['ap_2']))) {
$chka2 = $db->query("select id from idevaff_affiliates where type = '2'");
if ($chka2->rowCount()) {
$fail_message = "<strong>Error!</strong> Can not remove commission type. Flat rate payout is in use by current affiliates.";
$fail = 1; } }
if ((isset($_POST['val_3'])) && (!isset($_POST['ap_3']))) {
$chka3 = $db->query("select id from idevaff_affiliates where type = '3'");
if ($chka3->rowCount()) {
$fail_message = "<strong>Error!</strong> Can not remove commission type. Pay-Per-Click payout is in use by current affiliates.";
$fail = 1; } }
if ($fail != 1) {
if (isset($_POST['ap_1'])) { $ap_1 = 1; } else { $ap_1 = 0; }
if (isset($_POST['ap_2'])) { $ap_2 = 1; } else { $ap_2 = 0; }
if (isset($_POST['ap_3'])) { $ap_3 = 1; } else { $ap_3 = 0; }
$st = $db->prepare("update idevaff_config set paytype = ?, ap_1 = ?, ap_2 = ?, ap_3 = ?");
$st->execute(array($_POST['paytype'],$ap_1,$ap_2,$ap_3));
if (isset($_POST['ap_1'])) { $def = 1;
} elseif (isset($_POST['ap_2'])) { $def = 2;
} elseif (isset($_POST['ap_3'])) { $def = 3; }
$st = $db->prepare("update idevaff_config set def_pay = ?");
$st->execute(array($def));
$success_message = "<strong>Success!</strong> Commission settings saved.";
if ($active_count > 1) {
$warning_message = "<strong>Notice!</strong> You have a commission options modifier setting below."; } } }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 4)) {
$st = $db->prepare("update idevaff_cp_settings set background = ?, header_background = ?, top_menu_background = ?, top_menu_text = ?, heading_text = ?, heading_back = ?, portlet_1 = ?, portlet_2 = ?, portlet_3 = ?, portlet_4 = ?, portlet_5 = ?, portlet_6 = ?, portlet_text_1 = ?, portlet_text_2 = ?, portlet_text_3 = ?, portlet_text_4 = ?, portlet_text_5 = ?, portlet_text_6 = ?, box_tt_back = ?, box_tt_text = ?, box_ce_back = ?, box_ce_text = ?, box_te_back = ?, box_te_text = ?, box_uv_back = ?, box_uv_text = ?, cp_main_menu_color = ?, cp_main_menu_text = ?");
$st->execute(array($_POST['cp_background'],$_POST['cp_header_background'],$_POST['cp_top_menu_background'],$_POST['cp_top_menu_text'],$_POST['cp_heading_text'],$_POST['cp_heading_back'],$_POST['cp_portlet_1'],$_POST['cp_portlet_2'],$_POST['cp_portlet_3'],$_POST['cp_portlet_4'],$_POST['cp_portlet_5'],$_POST['cp_portlet_6'],$_POST['cp_portlet_text_1'],$_POST['cp_portlet_text_2'],$_POST['cp_portlet_text_3'],$_POST['cp_portlet_text_4'],$_POST['cp_portlet_text_5'],$_POST['cp_portlet_text_6'],$_POST['cp_box_tt_back'],$_POST['cp_box_tt_text'],$_POST['cp_box_ce_back'],$_POST['cp_box_ce_text'],$_POST['cp_box_te_back'],$_POST['cp_box_te_text'],$_POST['cp_box_uv_back'],$_POST['cp_box_uv_text'],$_POST['cp_main_menu_color'],$_POST['cp_main_menu_text']));
$success_message = "<strong>Success!</strong> Settings saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 5)) {
$st = $db->prepare("update idevaff_config set account_notify_affiliate_approved = ?, notify = ?, welcome_email = ?, sale_notify_affiliate = ?, sale_notify_affiliate_ppc = ?, rew_notify = ?, affiliate_notify_logo = ?, affiliate_notify_unapproved = ?, affiliate_approved_testimonial = ?, sale_generated_notify_affiliate = ?, affiliate_notify_declined = ?");
$st->execute(array($_POST['account_notify_affiliate_approved'],$_POST['notify'],$_POST['we'],$_POST['sale_notify_affiliate'],$_POST['sale_notify_affiliate_ppc'],$_POST['rew_notify'],$_POST['affiliate_notify_logo'],$_POST['affiliate_notify_unapproved'],$_POST['affiliate_approved_testimonial'],$_POST['sale_generated_notify_affiliate'],$_POST['affiliate_notify_declined']));
$success_message = "<strong>Success!</strong> Affiliate email notifications saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == '5.1')) {
$st = $db->prepare("update idevaff_config set mailadmin = ?, sale_notify = ?, sale_notify_ppc = ?, rew_admin_notify = ?, admin_notify_logo = ?, admin_notify_testimonial = ?, admin_notify_api_delayed = ?");
$st->execute(array($_POST['mailadmin'],$_POST['sale_notify'],$_POST['sale_notify_ppc'],$_POST['rew_admin_notify'],$_POST['admin_notify_logo'],$_POST['admin_notify_testimonial'],$_POST['admin_notify_api_delayed']));
$success_message = "<strong>Success!</strong> Admin email notifications saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 6)) {
if (($_POST['offline'] == 1) && (!$_POST['offline_loc'])) {
$fail_message = "<strong>Error!</strong> You must enter the offline marketing box location.";
} elseif (($_POST['offline'] == 1) && (!$_POST['offline_loc_send'])) {
$fail_message = "<strong>Error!</strong> You must enter a return URL.";
} else {
$st = $db->prepare("update idevaff_config set offline = ?, offline_loc = ?, offline_send = ?");
$st->execute(array($_POST['offline'],$_POST['offline_loc'],$_POST['offline_loc_send']));

$success_message = "<strong>Success!</strong> Settings saved."; } }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 7)) {
$chka2 = $db->prepare("select type from idevaff_integration where type = ?");
$chka2->execute(array($_POST['int_type']));
if (!$chka2->rowCount()) {
$st = $db->prepare("insert into idevaff_integration (type, auto, manual, idev_vartotal, idev_order, idev_var1, cart_var1, use_var1, tag_var1, idev_var2, cart_var2, use_var2, tag_var2, idev_var3, cart_var3, use_var3, tag_var3) VALUES (?, '1', '0', 'idev_saleamt', 'idev_ordernum', 'idev_option_1', 'customer_name', 0, 'Customer Name','idev_option_2', 'customer_email', 0, 'Customer Email', 'idev_option_3', 'items_purchased', 0, 'Products Purchased')");
$st->execute(array($_POST['int_type']));
if ($_POST['int_type'] == 6) {
$db->query("update idevaff_integration set use_var1 = 1, tag_var1 = 'Client Name', idev_var1 = 'idev_option_1', cart_var1 = 'idev_name', use_var2 = 1, tag_var2 = 'Domain Name', idev_var2 = 'idev_option_2', cart_var2 = 'idev_domain_name', use_var3 = 1, tag_var3 = 'Product ID', idev_var3 = 'idev_option_3', cart_var3 = 'idev_productid' where type = '6'"); }
if ($_POST['int_type'] == 1) {
$db->query("update idevaff_integration set use_var1 = 1, tag_var1 = 'Customer Name', idev_var1 = 'idev_option_1', cart_var1 = 'idev_option_1', use_var2 = 1, tag_var2 = 'Customer Email', idev_var2 = 'idev_option_2', cart_var2 = 'idev_option_2', use_var3 = 1, tag_var3 = 'Type of Commission', idev_var3 = 'idev_option_3', cart_var3 = 'idev_option_3' where type = '1'"); }
if ($_POST['int_type'] == 49) {
$db->query("update idevaff_integration set use_var1 = 1, tag_var1 = 'Customer Name', idev_var1 = 'idev_option_1', cart_var1 = 'idev_option_1', use_var2 = 1, tag_var2 = 'Customer Email', idev_var2 = 'idev_option_2', cart_var2 = 'idev_option_2', use_var3 = 1, tag_var3 = 'Type of Commission', idev_var3 = 'idev_option_3', cart_var3 = 'idev_option_3' where type = '49'"); }
if ($_POST['int_type'] == 100) {
$db->query("update idevaff_integration set use_var1 = 1, tag_var1 = 'Customer Email', idev_var1 = 'idev_option_1', cart_var1 = 'customer_email', use_var2 = 1, tag_var2 = 'Products Purchased', idev_var2 = 'idev_option_2', cart_var2 = 'products_purchased', use_var3 = 0, tag_var3 = 'Product ID', idev_var3 = 'idev_option_3', cart_var3 = 'idev_productid' where type = '100'"); }
if ($_POST['int_type'] == 104) {
$db->query("update idevaff_integration set use_var1 = 1, tag_var1 = 'Customer Name', idev_var1 = 'idev_option_1', cart_var1 = 'idev_option_1', use_var2 = 1, tag_var2 = 'Customer Email', idev_var2 = 'idev_option_2', cart_var2 = 'idev_option_2', use_var3 = 1, tag_var3 = 'Product ID Purchased', idev_var3 = 'idev_option_3', cart_var3 = 'idev_option_3' where type = '104'"); }
include("activation.php");
} }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 8)) {
$st = $db->prepare("update idevaff_terms set display = ?, forced = ?, re_forced = ?");
$st->execute(array($_POST['terms_on'],$_POST['terms_acc'],$_POST['terms_reacc']));
$success_message = "<strong>Success!</strong> Settings saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == '8.1')) {
$newterms = $_POST['terms_display'];
$st = $db->prepare("update idevaff_terms set terms = ?");
$st->execute(array($newterms));
$db->query("update idevaff_affiliates set tc_status = '0'");
$timenow = time();
$st1 = $db->prepare("insert into idevaff_tc_updates (stamp, terms) VALUES (?,?)");
$st1->execute(array($timenow,$newterms));
$success_message = "<strong>Success!</strong> Terms and Conditions updated."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 9)) {
if ($_POST['exp2'] == 1) { $estamp = $_POST['exp1'] * 60; }
if ($_POST['exp2'] == 2) { $estamp = $_POST['exp1'] * 60 * 60; }
if ($_POST['exp2'] == 3) { $estamp = $_POST['exp1'] * 60 * 60 * 24; }
if ($_POST['exp2'] == 4) { $estamp = $_POST['exp1'] * 60 * 60 * 24 * 365; }
$st = $db->prepare("update idevaff_config set use_cookies = ?, expire = ?, expire_type = ?, expire_stamp = ?, aff_lock = ?");
$st->execute(array($_POST['use_cookies'],$_POST['exp1'],$_POST['exp2'],$estamp,$_POST['aff_lock']));

$success_message = "<strong>Success!</strong> Settings saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 10)) {
}


if ((isset($_REQUEST['cfg'])) && ($_REQUEST['cfg'] == 11)) {
}


if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 12)) {
$st = $db->prepare("update idevaff_config set def_pay = ?");
$st->execute(array($_POST['def_pay']));
$success_message = "<strong>Success!</strong> Default commission type saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 13)) {
$level = $_POST['lev1'];
$amount = $_POST['am1'];
$ck = $db->prepare("select COUNT(*) from idevaff_paylevels where type = '1' and level = ?");
$ck->execute(array($level));
$ck = $ck->fetchColumn();
if ($ck > 0) { $fail_message = "<strong>Error!</strong> Percentage payout level " . html_output($level) . " already exists."; }
if ($amount <= 0) { $fail_message = "<strong>Error!</strong> Enter a positive percentage payout amount for your new level."; }
if (!$fail_message) {
$st = $db->prepare("insert into idevaff_paylevels (type, level, amt) values ('1', ?, ?)");
$st->execute(array($level,$amount));

            // create sliding payout level 1
            $st = $db->prepare("insert into idevaff_paylevels_sliding (type, paylevel, slidinglevel, min_amount, max_amount, amt, amt_alt) VALUES (1,?,1,0,0,0,0)");
            $st->execute(array($level));

$success_message = "<strong>Success!</strong> Payout level added.";

} }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 14)) {
$level = $_POST['lev2'];
$amount = $_POST['pps_fr'];
$ck = $db->prepare("select COUNT(*) from idevaff_paylevels where type = '2' and level = ?");
$ck->execute(array($level));
$ck = $ck->fetchColumn();
if ($ck > 0) { $fail_message = "<strong>Error!</strong> Flat rate payout level " . html_output($level) . " already exists."; }
if ($amount <= 0) { $fail_message = "<strong>Error!</strong> Enter a positive flat rate payout amount for your new level."; }
if (!$fail_message) {
$st = $db->prepare("insert into idevaff_paylevels (type, level, amt) values ('2', ?, ?)");
$st->execute(array($level,$amount));

            // create sliding payout level 1
            $st = $db->prepare("insert into idevaff_paylevels_sliding (type, paylevel, slidinglevel, min_amount, max_amount, amt, amt_alt) VALUES (2,?,1,0,0,0,0)");
            $st->execute(array($level));
			
$success_message = "<strong>Success!</strong> Payout level added.";

} }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 15)) {
$level = $_POST['lev3'];
$amount = $_POST['ppc'];
$ck = $db->prepare("select COUNT(*) from idevaff_paylevels where type = '3' and level = ?");
$ck->execute(array($level));
$ck = $ck->fetchColumn();
if ($ck > 0) { $fail_message = "<strong>Error!</strong> Pay-Per-Click payout level " . html_output($level) . " already exists."; }
if ($amount <= 0) { $fail_message = "<strong>Error!</strong> Enter a positive Pay-Per-Click payout amount for your new level."; }
if (!$fail_message) {
$st = $db->prepare("insert into idevaff_paylevels (type, level, amt) values ('3', ?,?)");
$st->execute(array($level,$amount));
$success_message = "<strong>Success!</strong> Payout level added."; } }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 16)) {
	
	$newpay_alt = '0.00';
	
if ($_POST['newpay'] == 0) {
$fail_message = "<strong>Error!</strong> Commission payout amount must be positive. It cannot be zero.";
$fail = 1; }
if ((isset($_POST['newpay_alt'])) && ($_POST['newpay_alt'] < 0)) {
$fail_message = "<strong>Error!</strong> Repeat/Recurring payout amount must be positive. It cannot be zero.";
$fail = 1; }

if (isset($_POST['percupdate'])) { $newpay = $_POST['newpay'] / 100; } else { $newpay = $_POST['newpay']; }

if (isset($_POST['newpay_alt'])) {
if (isset($_POST['percupdate'])) { $newpay_alt = $_POST['newpay_alt'] / 100; } else { $newpay_alt = $_POST['newpay_alt']; }
}

if (isset($_POST['percupdate'])) { $current = $_POST['current'] / 100; } else { $current = $_POST['current']; }
if ($fail != 1) {
	
//if ( $newpay_alt == '' ) {
//$newpay_alt = '0.00';
//}
	
$st = $db->prepare("update idevaff_paylevels set amt = ?, amt_alt = ? where id = ?");
$st->execute(array($newpay,$newpay_alt,$_POST['change']));
$success_message = "<strong>Success!</strong> Payout level updated."; } }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 17)) {
	
        // remove sliding scales for this payout level
        $getscaledeets = $db->prepare("select type, level from idevaff_paylevels where id = ?");
        $getscaledeets->execute(array($_POST['delete']));
        $getscaledeets = $getscaledeets->fetch();
        $deet_type = $getscaledeets['type'];
        $deet_level = $getscaledeets['level'];

        $st = $db->prepare("delete from idevaff_paylevels_sliding where type = ? and paylevel = ?");
        $st->execute(array($deet_type, $deet_level));
		
$st = $db->prepare("delete from idevaff_paylevels where id = ?");
$st->execute(array($_POST['delete']));
$success_message = "<strong>Success!</strong> Payout level removed."; }


if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 18)) {
if (($_POST['rewards'] == 1) && (!$_POST['rew_1'])) {
$fail_message = "<strong>Error!</strong> Enter advancement criteria.";
$fail = 1; }
if (!$fail) {
$st = $db->prepare("update idevaff_rewards set rewards = ?, rew_1 = ?, rew_2 = ?, rew_app = ?");
$st->execute(array($_POST['rewards'],$_POST['rew_1'],$_POST['rew_2'],$_POST['rew_app']));
$success_message = "<strong>Success!</strong> Performance reward settings saved."; } }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == '18.1')) {
$st = $db->prepare("update idevaff_rewards set rew_ceiling_pps_perc = ?, rew_ceiling_pps_flat = ?, rew_ceiling_ppc = ?");

$st->execute(array($_POST['rew_ceiling_pps_perc'],$_POST['rew_ceiling_pps_flat'],$_POST['rew_ceiling_ppc']));
$success_message = "<strong>Success!</strong> Performance rewards ceiling settings saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 22)) {
$st = $db->prepare("update idevaff_config set mod_later = ?");
$st->execute(array($_POST['mod_later']));

$success_message = "<strong>Success!</strong> Commission change preference saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 24)) {
if (!$_POST['answer']) {
$fail_message = "<strong>Error!</strong> Missing FAQ answer.";
$fail = 1; }
if (!$_POST['question']) {
$fail_message = "<strong>Error!</strong> Missing FAQ question.";
$fail = 1; }
if (!$fail) {
$newquestion = $_POST['question'];
$newquestion = str_replace('"', "'", $newquestion);
$newanswer = $_POST['answer'];

$max_sort = $db->query("select max(sort) as sort from idevaff_faq");
$result = $max_sort->fetch();
$new_sort = $result['sort'] + 1;

$st = $db->prepare("insert into idevaff_faq (question, answer,sort) values (?,?,?)");
$st->execute(array($newquestion,$newanswer,$new_sort));
$success_message = "<strong>Success!</strong> FAQ added.";
} else {
$faq1 = $_POST['question'];
$faq2 = $_POST['answer']; } }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 25)) {
$st = $db->prepare("update idevaff_config set faq_location = ?, faq = ?");
$st->execute(array($_POST['faq_location'],$_POST['faq']));
$success_message = "<strong>Success!</strong> Settings saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 26)) {
$st = $db->prepare("update idevaff_config set idev_affiliate = ?");
$st->execute(array($_POST['idev_affiliate']));
$success_message = "<strong>Success!</strong> Settings saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 27)) {
$chka2 = $db->query("select type from idevaff_integration where type = '72198'");
if (!$chka2->rowCount()) {
$db->query("insert into idevaff_integration (type, auto, manual, idev_vartotal, idev_order, idev_var1, cart_var1, use_var1, tag_var1, idev_var2, cart_var2, use_var2, tag_var2, idev_var3, cart_var3, use_var3, tag_var3) VALUES ('72198', '1', '0', 'idev_saleamt', 'idev_ordernum', 'idev_option_1', 'customer_name', 0, 'Customer Name','idev_option_2', 'customer_email', 0, 'Customer Email', 'idev_option_3', 'items_purchased', 0, 'Products Purchased')");
header("Location: setup.php?action=2"); } }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 32)) {
$st = $db->prepare("update idevaff_config set redirect_method = ?, link_type = ?, link_style = ?");
$st->execute(array($_POST['redirect_method'],$_POST['link_type'],$_POST['link_style']));
$success_message = "<strong>Success!</strong> Affiliate link settings saved.";
if ($_POST['link_style'] == 2) { $warning_message = "<strong>Notice!</strong> Please continue your setup below."; } }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == '32.1')) {
$st = $db->prepare("update idevaff_config set standard_link_structure = ?");
$st->execute(array($_POST['standard_link_structure']));
$success_message = "<strong>Success!</strong> Standard linking configuration saved."; }


if ((isset($_POST['cfg'])) && ($_POST['cfg'] == '32.2')) {

$new_seo_url = strip_tags($_POST['seo_url']);
$new_seo_url = htmlspecialchars($new_seo_url, ENT_QUOTES, 'UTF-8');

$st = $db->prepare("update idevaff_config set seo_link_extension = ?, seo_url = ?, seo_link_structure = ?");
$st->execute(array($_POST['seo_link_extension'],$new_seo_url,$_POST['seo_link_structure']));
$success_message = "<strong>Success!</strong> SEO linking configuration saved.";
$warning_message = "<strong>Notice!</strong> Please be sure to complete the SEO linking setup using the instructions below."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 33)) {
$st = $db->prepare("update idevaff_alert set ca_use = ?, ca_adm = ?, ca_adm_tier = ?");
$st->execute(array($_POST['allow_comalert'],$_POST['ca_adm'],$_POST['ca_adm_tier']));
$success_message = "<strong>Success!</strong> Settings saved."; }

if ((isset($_REQUEST['cfg'])) && ($_REQUEST['cfg'] == 34)) { $db->query("update idevaff_config set show_idev = '0'"); }

if ((isset($_GET['cfg'])) && ($_REQUEST['cfg'] == 35)) {
$st = $db->prepare("update idevaff_affiliates set approved = '0' where id = ?");
$st->execute(array($_REQUEST['id']));
$success_message = "<strong>Success!</strong> This account has been un-approved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 36)) {
if (!$_POST['answer']) {
$fail_message = "<strong>Error!</strong> FAQ not updated. Missing FAQ answer."; }
if (!$_POST['question']) {
$fail_message = "<strong>Error!</strong> FAQ not updated. Missing FAQ question."; }
if (!$fail_message) {
$newquestion = $_POST['question'];
$newquestion = str_replace('"', "'", $newquestion);
$newanswer = $_POST['answer'];
$st = $db->prepare("update idevaff_faq set question = ?, answer = ? where id = ?");
$st->execute(array($newquestion,$newanswer,$_POST['faqid']));
$success_message = "<strong>Success!</strong> FAQ Updated"; } }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 37)) {
$st = $db->prepare("update idevaff_config set paypal_return = ?");
$st->execute(array($_POST['paypal_return']));
$displaytag = "<font color='#CC0000'>PayPal Return URL Updated</font>"; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 38)) {
$st = $db->prepare("update idevaff_email_settings set address = ?, cc_email_address = ?, alternate_email_address = ?, from_name = ?, signature = ?, transport = ?, smtp_port = ?, smtp_host = ?, smtp_auth = ?, smtp_user = ?, smtp_pass = ?, smtp_char_set = ?, smtp_security = ?, delivery_type = ?, api_email_address = ?");

$st->execute(array($_POST['email_address'],$_POST['cc_email_address'],$_POST['alternate_email_address'],htmlspecialchars($_POST['email_from']),htmlspecialchars($_POST['email_sig']),$_POST['delivery_method'],$_POST['smtp_port'],$_POST['smtp_host'],$_POST['smtp_auth'],$_POST['smtp_user'],$_POST['smtp_pass'],$_POST['smtp_char_set'],$_POST['smtp_security'],$_POST['delivery_type'],$_POST['api_email_address']));

$success_message = "<strong>Success!</strong> Email settings saved.";
$warning_message = "<strong>Notice!</strong> Be sure to test your email settings below."; }


if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 48)) {

if (($_POST['field_1_1'] == 0) && ($_POST['field_1_2'] == 1)) {
$field11conv = 1; $field12conv = 1; } else {
if ($_POST['field_1_1'] == 1) { $field11conv = 1; } else { $field11conv = 0; }
if ($_POST['field_1_2'] == 1) { $field12conv = 1; } else { $field12conv = 0; } }
$st = $db->prepare("update idevaff_form_fields set used = ?, req = ? where id = 1");
$st->execute(array($field11conv,$field12conv));
if (($_POST['field_2_1'] == 0) && ($_POST['field_2_2'] == 1)) {
$field21conv = 1; $field22conv = 1; } else {
if ($_POST['field_2_1'] == 1) { $field21conv = 1; } else { $field21conv = 0; }
if ($_POST['field_2_2'] == 1) { $field22conv = 1; } else { $field22conv = 0; } }
$st = $db->prepare("update idevaff_form_fields set used = ?, req = ? where id = 2");
$st->execute(array($field21conv,$field22conv));

if (($_POST['field_3_1'] == 0) && ($_POST['field_3_2'] == 1)) {
$field31conv = 1; $field32conv = 1; } else {
if ($_POST['field_3_1'] == 1) { $field31conv = 1; } else { $field31conv = 0; }
if ($_POST['field_3_2'] == 1) { $field32conv = 1; } else { $field32conv = 0; } }
$st = $db->prepare("update idevaff_form_fields set used = ?, req = ? where id = 3");
$st->execute(array($field31conv,$field32conv));

if (($_POST['field_4_1'] == 0) && ($_POST['field_4_2'] == 1)) {
$field41conv = 1; $field42conv = 1; } else {
if ($_POST['field_4_1'] == 1) { $field41conv = 1; } else { $field41conv = 0; }
if ($_POST['field_4_2'] == 1) { $field42conv = 1; } else { $field42conv = 0; } }
$st = $db->prepare("update idevaff_form_fields set used = ?, req = ? where id = 4");
$st->execute(array($field41conv,$field42conv));

if (($_POST['field_5_1'] == 0) && ($_POST['field_5_2'] == 1)) {
$field51conv = 1; $field52conv = 1; } else {
if ($_POST['field_5_1'] == 1) { $field51conv = 1; } else { $field51conv = 0; }
if ($_POST['field_5_2'] == 1) { $field52conv = 1; } else { $field52conv = 0; } }
$st = $db->prepare("update idevaff_form_fields set used = ?, req = ? where id = 5");
$st->execute(array($field51conv,$field52conv));

if (($_POST['field_6_1'] == 0) && ($_POST['field_6_2'] == 1)) {
$field61conv = 1; $field62conv = 1; } else {
if ($_POST['field_6_1'] == 1) { $field61conv = 1; } else { $field61conv = 0; }
if ($_POST['field_6_2'] == 1) { $field62conv = 1; } else { $field62conv = 0; } }
$st = $db->prepare("update idevaff_form_fields set used = ?, req = ? where id = 6");
$st->execute(array($field61conv,$field62conv));

if (($_POST['field_7_1'] == 0) && ($_POST['field_7_2'] == 1)) {
$field71conv = 1; $field72conv = 1; } else {
if ($_POST['field_7_1'] == 1) { $field71conv = 1; } else { $field71conv = 0; }
if ($_POST['field_7_2'] == 1) { $field72conv = 1; } else { $field72conv = 0; } }
$st = $db->prepare("update idevaff_form_fields set used = ?, req = ? where id = 7");
$st->execute(array($field71conv,$field72conv));

if (($_POST['field_8_1'] == 0) && ($_POST['field_8_2'] == 1)) {
$field81conv = 1; $field82conv = 1; } else {
if ($_POST['field_8_1'] == 1) { $field81conv = 1; } else { $field81conv = 0; }
if ($_POST['field_8_2'] == 1) { $field82conv = 1; } else { $field82conv = 0; } }
$st = $db->prepare("update idevaff_form_fields set used = ?, req = ? where id = 8");
$st->execute(array($field81conv,$field82conv));

if (($_POST['field_9_1'] == 0) && ($_POST['field_9_2'] == 1)) {
$field91conv = 1; $field92conv = 1; } else {
if ($_POST['field_9_1'] == 1) { $field91conv = 1; } else { $field91conv = 0; }
if ($_POST['field_9_2'] == 1) { $field92conv = 1; } else { $field92conv = 0; } }
$st = $db->prepare("update idevaff_form_fields set used = ?, req = ? where id = 9");
$st->execute(array($field91conv,$field92conv));

if (($_POST['field_10_1'] == 0) && ($_POST['field_10_2'] == 1)) {
$field101conv = 1; $field102conv = 1; } else {
if ($_POST['field_10_1'] == 1) { $field101conv = 1; } else { $field101conv = 0; }
if ($_POST['field_10_2'] == 1) { $field102conv = 1; } else { $field102conv = 0; } }
$st = $db->prepare("update idevaff_form_fields set used = ?, req = ? where id = 10");
$st->execute(array($field101conv,$field102conv));

if (($_POST['field_11_1'] == 0) && ($_POST['field_11_2'] == 1)) {
$field111conv = 1; $field112conv = 1; } else {
if ($_POST['field_11_1'] == 1) { $field111conv = 1; } else { $field111conv = 0; }
if ($_POST['field_11_2'] == 1) { $field112conv = 1; } else { $field112conv = 0; } }
$st = $db->prepare("update idevaff_form_fields set used = ?, req = ? where id = 11");
$st->execute(array($field111conv,$field112conv));

if (($_POST['field_12_1'] == 0) && ($_POST['field_12_2'] == 1)) {
$field121conv = 1; $field122conv = 1; } else {
if ($_POST['field_12_1'] == 1) { $field121conv = 1; } else { $field121conv = 0; }
if ($_POST['field_12_2'] == 1) { $field122conv = 1; } else { $field122conv = 0; } }
$st = $db->prepare("update idevaff_form_fields set used = ?, req = ? where id = 12");
$st->execute(array($field121conv,$field122conv));

if (($_POST['field_13_1'] == 0) && ($_POST['field_13_2'] == 1)) {
$field131conv = 1; $field132conv = 1; } else {
if ($_POST['field_13_1'] == 1) { $field131conv = 1; } else { $field131conv = 0; }
if ($_POST['field_13_2'] == 1) { $field132conv = 1; } else { $field132conv = 0; } }
$st = $db->prepare("update idevaff_form_fields set used = ?, req = ? where id = 13");
$st->execute(array($field131conv,$field132conv));

if (($_POST['field_14_1'] == 0) && ($_POST['field_14_2'] == 1)) {
$field141conv = 1; $field142conv = 1; } else {
if ($_POST['field_14_1'] == 1) { $field141conv = 1; } else { $field141conv = 0; }
if ($_POST['field_14_2'] == 1) { $field142conv = 1; } else { $field142conv = 0; } }
$st = $db->prepare("update idevaff_form_fields set used = ?, req = ? where id = 14");
$st->execute(array($field141conv,$field142conv));

if ($_POST['field_15_1'] == 1) { $field151conv = 1; $field152conv = 1; } else { $field151conv = 0; $field152conv = 0; }
$st = $db->prepare("update idevaff_form_fields set used = ?, req = ? where id = 15");
$st->execute(array($field151conv,$field152conv));
$success_message = "<strong>Success!</strong> Settings saved.";
}

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 49)) {
$cuscount = $db->query("select id from idevaff_form_fields_custom");
$cuscount = $cuscount->rowCount();
if ($cuscount == 5) {
$custom_create_error = true;
$fail_message = "<strong>Error!</strong> Maximum 5 custom fields have been reached."; }
elseif (!$_POST['custom_field_title']) {
$custom_create_error = true;
$fail_message = "<strong>Error!</strong> Please enter a field title.";
} else {
if ((isset($_POST['display_payment'])) && ($_POST['display_payment'] == 1)) { $display_payment = 1; } else { $display_payment = 0; }
if ((isset($_POST['display_invoice'])) && ($_POST['display_invoice'] == 1)) { $display_invoice = 1; } else { $display_invoice = 0; }
if ((isset($_POST['display_record'])) && ($_POST['display_record'] == 1)) { $display_record = 1; } else { $display_record = 0; }
if ((isset($_POST['custom_field_edit'])) && ($_POST['custom_field_edit'] == 1)) { $custom_field_edit = 1; } else { $custom_field_edit = 0; }
$gethighnum = $db->query("select MAX(sort) as highnum from idevaff_form_fields_custom");
$gethighnum = $gethighnum->fetch();
$highnum = $gethighnum['highnum'] + 1;
$st = $db->prepare("insert into idevaff_form_fields_custom (title, def_value, req, sort, display_payment, display_invoice, display_record, edit) VALUES (?, ?, ?, '$highnum', '$display_payment', '$display_invoice', '$display_record', '$custom_field_edit')");

$st->execute(array($_POST['custom_field_title'], $_POST['custom_field_default_value'],$_POST['custom_field_req']));

$getnewid = $db->query("select MAX(id) as newid from idevaff_form_fields_custom");
$getnewid= $getnewid->fetch();
$getnewid= $getnewid['newid'];
$st = $db->prepare("update idevaff_form_fields_custom set name = 'custom_$getnewid' where id = ?");
$st->execute(array($getnewid));

$custom_create_success = true;
$success_message = "<strong>Success!</strong> Custom form field has been created."; } }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 50)) {
if ($_POST['field_value_update'] == '') {
$fail_message = "<strong>Error!</strong> Please enter a form field title.";
} else {
$st = $db->prepare("update idevaff_form_fields_custom set title = ?, def_value = ?, req =  ?, edit =  ?, display_payment = ?, display_invoice = ?, display_record = ? where id = ?");

$st->execute(array($_POST['field_value_update'], $_POST['default_value_update'],$_POST['field_req_update'],$_POST['field_edit_update'],$_POST['display_payment'],$_POST['display_invoice'],$_POST['display_record'],$_POST['custom_id']));

$success_message = "<strong>Success!</strong> Custom form field updated."; } }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 83)) {

if (isset($_POST['opvar1_tag'])) { $opvar1 = $_POST['opvar1_tag']; } else { $opvar1 = false; }
if (isset($_POST['opvar1_cart'])) { $opcart1 = $_POST['opvar1_cart']; } else { $opcart1 = false; }
if (isset($_POST['use_op1'])) { $opuse1 = $_POST['use_op1']; } else { $opuse1 = 0; }

if (isset($_POST['opvar2_tag'])) { $opvar2 = $_POST['opvar2_tag']; } else { $opvar2 = false; }
if (isset($_POST['opvar2_cart'])) { $opcart2 = $_POST['opvar2_cart']; } else { $opcart2 = false; }
if (isset($_POST['use_op2'])) { $opuse2 = $_POST['use_op2']; } else { $opuse2 = 0; }

if (isset($_POST['opvar3_tag'])) { $opvar3 = $_POST['opvar3_tag']; } else { $opvar3 = false; }
if (isset($_POST['opvar3_cart'])) { $opcart3 = $_POST['opvar3_cart']; } else { $opcart3 = false; }
if (isset($_POST['use_op3'])) { $opuse3 = $_POST['use_op3']; } else { $opuse3 = 0; }

$st = $db->prepare("update idevaff_integration set idev_var1 = 'idev_option_1', cart_var1 = ?, use_var1 = ?, tag_var1 = ?, idev_var2 = 'idev_option_2', cart_var2 = ?, use_var2 = ?, tag_var2 = ?, idev_var3 = 'idev_option_3', cart_var3 = ?, use_var3 = ?, tag_var3 = ? where type = ?");

$st->execute(array($opcart1,$opuse1,$opvar1,$opcart2,$opuse2,$opvar2,$opcart3,$opuse3,$opvar3,$_POST['update_type']));

$success_message = "<strong>Success!</strong> Optional variables updated."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 84)) {

$fail_message = null;
$note_image_write = null;

if($_FILES['file_upload_logo']['name'] != '') {

// UPLOADED LOGO
$logo_file_type = $_FILES['file_upload_logo']['type'];
$logo_file_size = $_FILES['file_upload_logo']['size'];
$logo_file_name = $_FILES['file_upload_logo']['name'];
$logo_file_temp = $_FILES['file_upload_logo']['tmp_name'];
$logo_file_extension = strtolower( substr($logo_file_name, -3));

list($width, $height, $type, $attr) = getimagesize($logo_file_temp);

//1 IMAGETYPE_GIF 
//2 IMAGETYPE_JPEG 
//3 IMAGETYPE_PNG 

if ( ($type != 1) && ($type != 2) && ($type != 3) ) {
$fail_message .= "<strong>Error!</strong> You can only upload image files with a <strong>.gif</strong>, <strong>.jpg</strong>, or <strong>.png</strong> extension."; }


if (!isset($fail_message)) {
$newfilename = null;
$newfilename = md5($newfilename.microtime());
$newfilename = $newfilename . "." . $logo_file_extension;

$res = copy($logo_file_temp, $path . "/assets/note_images/" . $newfilename);
if (!$res) {
$fail_message .= "<strong>Error!</strong> Due to an unexpected response from the server, the logo did not upload properly. Check your <font color=\"#CC0000\">assets/note_images</font> folder permissions for <strong>write</strong> permissions.";
}

if (!isset($fail_message)) {
$note_image_write = $newfilename;
} } }

if (($_POST['note_sub'] == '') || ($_POST['note_con'] == '')) {
$fail_message .= "<strong>Error!</strong> You must enter both a subject and message.";
}

if (($_POST['note_display'] == 0) && ($_POST['note_attach'] == 0)) {
$fail_message .= "<strong>Error!</strong> You must attach or display this note.";
}

if (!isset($fail_message)) {
$newnote = $_POST['note_con'];
$newnote1 = $_POST['note_sub'];
            $cdate_stamp = time();
$st = $db->prepare("insert into idevaff_notes (note_to, note_sub, note_con, note_display, note_attach, note_image, note_image_location, stamp) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
$st->execute(array($_POST['note_to'],$newnote1,$newnote,$_POST['note_display'],$_POST['note_attach'], $note_image_write,$_POST['note_image_location'], $cdate_stamp));
$success_message = "<strong>Success!</strong> Affiliate note created."; }

}

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 86)) {
$st = $db->prepare("update idevaff_config set lead_approval = ?");
$st->execute(array($_POST['lead_approval']));
$displaytag = "<font color='#CC0000'>Lead Settings Updated</font>"; } }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 88)) {
$st = $db->prepare("update idevaff_delayed set enabled = ?, days = ?, action = ?");
$st->execute(array($_POST['delay_use'],$_POST['delay_days'],$_POST['delay_action']));
$success_message = "<strong>Success!</strong> Settings saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 89)) {
$st = $db->prepare("update idevaff_logo_settings set logo_enabled = ?, logo_size = ?, logo_width = ?, logo_height = ?, logo_type = ?, logo_default = ?");
$st->execute(array($_POST['logo_status'],$_POST['logo_size'],$_POST['logo_w'],$_POST['logo_h'],$_POST['logo_type'],$_POST['logo_default']));


$success_message = "<strong>Success!</strong> Settings saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 90)) {

$pass_var_id = $_POST['pass_var_id'];
$pass_var_username = $_POST['pass_var_username'];
$pass_var_subid = $_POST['pass_var_subid'];
$pass_var_tid1 = $_POST['pass_var_tid1'];
$pass_var_tid2 = $_POST['pass_var_tid2'];
$pass_var_tid3 = $_POST['pass_var_tid3'];
$pass_var_tid4 = $_POST['pass_var_tid4'];
$pass_custom_var_1 = $_POST['pass_custom_var_1'];
$pass_custom_var_2 = $_POST['pass_custom_var_2'];
$pass_custom_var_3 = $_POST['pass_custom_var_3'];
$pass_custom_var_4 = $_POST['pass_custom_var_4'];
$pass_custom_var_5 = $_POST['pass_custom_var_5'];
$custom_var_1 = $_POST['custom_var_1'];
$custom_var_2 = $_POST['custom_var_2'];
$custom_var_3 = $_POST['custom_var_3'];
$custom_var_4 = $_POST['custom_var_4'];
$custom_var_5 = $_POST['custom_var_5'];
$google_utm_source = $_POST['google_utm_source'];
$google_utm_medium = $_POST['google_utm_medium'];
$google_utm_campaign = $_POST['google_utm_campaign'];
$google_utm_source_value = $_POST['google_utm_source_value'];
$google_utm_medium_value = $_POST['google_utm_medium_value'];
$google_utm_campaign_value = $_POST['google_utm_campaign_value'];
$pass_variables = $pass_var_id . "-" . $pass_var_username . "-" . $pass_var_subid . "-" . $pass_var_tid1 . "-" . $pass_var_tid2 . "-" . $pass_var_tid3 . "-" . $pass_var_tid4 . "-" . $pass_custom_var_1 . "-" . $pass_custom_var_2 . "-" . $pass_custom_var_3 . "-" . $pass_custom_var_4 . "-" . $pass_custom_var_5 . "-" . $google_utm_source . "-" . $google_utm_medium . "-" . $google_utm_campaign;

$st = $db->prepare("update idevaff_config set pass_var = ?");
$st->execute(array($pass_variables));
$st = $db->prepare("update idevaff_custom_vars set custom_var_1 = ?, custom_var_2 = ?, custom_var_3 = ?, custom_var_4 = ?, custom_var_5 = ?, google_utm_source_value = ?, google_utm_medium_value = ?, google_utm_campaign_value = ?");
$st->execute(array($custom_var_1,$custom_var_2,$custom_var_3,$custom_var_4,$custom_var_5,$google_utm_source_value,$google_utm_medium_value,$google_utm_campaign_value));
$success_message = "<strong>Success!</strong> Settings saved.";
}

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 91)) {
$st = $db->prepare("update idevaff_config set ip_setting = ?");
$st->execute(array($_POST['ip_setting']));
$success_message = "<strong>Success!</strong> Settings saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 92)) {
$st = $db->prepare("update idevaff_config set mark_track = ?, sub_enable = ?, use_keywords = ?, allow_alternate = ?");
$st->execute(array($_POST['mark_track'],$_POST['sub_enable'],$_POST['use_keywords'],$_POST['allow_alternate']));
$success_message = "<strong>Success!</strong> Settings saved."; }



if ((isset($_REQUEST['cfg'])) && ($_REQUEST['cfg'] == 93)) {
$chka2 = $db->query("select type from idevaff_integration where type = '44'");
if (!$chka2->rowCount()) {
$db->query("insert into idevaff_integration (type, auto, manual, idev_vartotal, idev_order, idev_var1, cart_var1, use_var1, tag_var1, idev_var2, cart_var2, use_var2, tag_var2, idev_var3, cart_var3, use_var3, tag_var3) VALUES ('44', '1', '0', 'idev_saleamt', 'idev_ordernum', 'idev_option_1', 'customer_name', 0, 'Customer Name','idev_option_2', 'customer_email', 0, 'Customer Email', 'idev_option_3', 'items_purchased', 0, 'Products Purchased')");
header("Location: setup.php?action=2"); } }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 94)) {
$st = $db->prepare("update idevaff_config set delay_minutes = ?");
$st->execute(array($_POST['delay_minutes']));
$success_message = "<strong>Success!</strong> Duplicate delay minutes saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 95)) {
$st = $db->prepare("update idevaff_config set fraud_type = ?, delay_minutes = 0, duplicate_notify = 0");
$st->execute(array($_POST['fraud_type']));

if ($_POST['fraud_type'] == 1) {
$warning_message = "<strong>Notice!</strong> The option you selected has additional settings below."; }
if ($_POST['fraud_type'] == 2) {
$db->query("update idevaff_config set duplicate_notify = '1'");
$warning_message = "<strong>Notice!</strong> The option you selected has additional settings below."; }
$success_message = "<strong>Success!</strong> Fraud control type saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 96)) {
$st = $db->prepare("update idevaff_config set duplicate_notify = ?");
$st->execute(array($_POST['duplicate_notify']));

$success_message = "<strong>Success!</strong> Fraud control email settings saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 97)) {
$video_logo_url_write = null;
$video_logo_url = $_POST['video_logo_url'];
if (($video_logo_url != '') && ($video_logo_url != 'http://')) {
$test = getimagesize($video_logo_url);
if (isset($test['mime'])) {
list($width, $height, $type, $attr) = getimagesize($video_logo_url);
$s1 = $width;
$s2 = $height;
$link_type = $type;

if ($link_type > 3) {
$fail_message = "<strong>Error!</strong> Only JPG, GIF or PNG images are allowed.";
} else {
$video_logo_url_write = $_POST['video_logo_url'];
//if (($s1 > 100) || ($s2 > 100)) {
//$warning_message = "<strong>Warning!</strong> Although the image you're using is acceptable, we strongly recommend using a logo image no more than 100x100 pixels.";
//}
} } else {
$fail_message = "<strong>Error!</strong> Invalid image location. Only JPG, GIF or PNG images are allowed.";
} }
$st = $db->prepare("update idevaff_video_settings set enabled = ?, video_logo_url = ?");
$st->execute(array($_POST['videos_enabled'],$video_logo_url_write));
if (!isset($fail_message)) { $success_message = "<strong>Success!</strong> Settings saved."; }
}

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 99)) {

    $check_char_config = $db->query("select char_set from idevaff_config");
    $check_char_config = $check_char_config->fetch();
    $existing_char_set = $check_char_config['char_set'];

    $new_char_set = $_POST['char_set'];

    if ($existing_char_set != $new_char_set) {
        $db->query("update idevaff_config set cur_sym = ''");
        $warning_message = "<strong>Notice!</strong> Please update your <strong>Currency Symbol</strong> now.";
    }

    $st = $db->prepare("update idevaff_config set char_set = ?, timezone = ?, idev_time_format = ?, time_seconds = ?, idev_date_format = ?");
    $success_message = "<strong>Success!</strong> Settings saved.";
    $st->execute(array($_POST['char_set'], $_POST['timezone'], $_POST['idev_time_format'], $_POST['time_seconds'], $_POST['idev_date_format']));

}

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 98)) {
$st = $db->prepare("update idevaff_integration set option_1 = ? where type = '49'");
$st->execute(array($_POST['alertpay_code']));
$displaytag = "<font color='#CC0000'>AlertPay Security Code Updated</font>"; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 100)) {
$st = $db->prepare("update idevaff_config set currency = ?, cur_sym = ?, cur_sym_location = ?, decimal_symbols = ?");
$st->execute(array(strtoupper($_POST['currency']),$_POST['cur_sym'],$_POST['cur_sym_location'],$_POST['decimal_symbols']));
$success_message = "<strong>Success!</strong> Currency settings saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 103)) {
$st = $db->prepare("update idevaff_config set commission_blocking = ?");
$st->execute(array($_POST['commission_blocking']));
$success_message = "<strong>Success!</strong> Commission blocking settings saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 104)) {
$st = $db->prepare("update idevaff_canspam set display = ?, forced = ?");
$st->execute(array($_POST['canspam_on'],$_POST['canspam_acc']));
$success_message = "<strong>Success!</strong> Settings saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == '104.1')) {
$st = $db->prepare("update idevaff_canspam set canspam = ?");
$st->execute(array($_POST['canspam_display']));
$success_message = "<strong>Success!</strong> CAN-SPAM rules updated."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 105)) {
$st = $db->prepare("update idevaff_config set maint_mode = ?");
$st->execute(array($_POST['maint_mode']));
$success_message = "<strong>Success!</strong> Maintenance mode settings saved.";
}

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 108)) {
$user_min = check_type('user_min');
$pass_min = check_type('pass_min');
if (($user_min < 4) || ($pass_min < 4)) {
$fail_message = "<strong>Error!</strong> Field <strong>minimums</strong> must be at least 4 character in length.";
} else {
$st = $db->prepare("update idevaff_config set user_min = ?, pass_min = ?");
$st->execute(array($user_min, $pass_min));
$success_message = "<strong>Success!</strong> Settings saved.";
} }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 110)) {
$st = $db->prepare("update idevaff_config set tier_numbers = ?, tlinks = ?, email_tier_referral = ?, second_contact = ?, tier_link_url = ?, recruitment_bonus = ?");
$st->execute(array($_POST['tier_numbers'],$_POST['tlink'],$_POST['email_tier_referral'],$_POST['second_contact'],$_POST['tier_link_url'],$_POST['recruitment_bonus']));
$success_message = "<strong>Success!</strong> Tier options updated.";
$warning_message = "<strong>Notice!</strong> Please be sure to adjust your tier payout levels below."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 113)) {
$db->query("update idevaff_tier_settings set level_1_amount = '0', level_1_type = '1'");
$db->query("update idevaff_tier_settings set level_2_amount = '0', level_2_type = '1'");
$db->query("update idevaff_tier_settings set level_3_amount = '0', level_3_type = '1'");
$db->query("update idevaff_tier_settings set level_4_amount = '0', level_4_type = '1'");
$db->query("update idevaff_tier_settings set level_5_amount = '0', level_5_type = '1'");
$db->query("update idevaff_tier_settings set level_6_amount = '0', level_6_type = '1'");
$db->query("update idevaff_tier_settings set level_7_amount = '0', level_7_type = '1'");
$db->query("update idevaff_tier_settings set level_8_amount = '0', level_8_type = '1'");
$db->query("update idevaff_tier_settings set level_9_amount = '0', level_9_type = '1'");
$db->query("update idevaff_tier_settings set level_10_amount = '0', level_10_type = '1'");

if (isset($_POST['level_1_type'])) { $st = $db->prepare("update idevaff_tier_settings set level_1_amount = ?, level_1_type = ?");
$st->execute(array($_POST['level_1_amount'],$_POST['level_1_type'])); }
if (isset($_POST['level_2_type'])) { $st = $db->prepare("update idevaff_tier_settings set level_2_amount = ?, level_2_type = ?"); 
$st->execute(array($_POST['level_2_amount'],$_POST['level_2_type']));
}
if (isset($_POST['level_3_type'])) { $st = $db->prepare("update idevaff_tier_settings set level_3_amount = ?, level_3_type = ?"); 
$st->execute(array($_POST['level_3_amount'],$_POST['level_3_type']));
}
if (isset($_POST['level_4_type'])) { $st = $db->prepare("update idevaff_tier_settings set level_4_amount = ?, level_4_type = ?");
$st->execute(array($_POST['level_4_amount'],$_POST['level_4_type']));
 }
if (isset($_POST['level_5_type'])) { $st = $db->prepare("update idevaff_tier_settings set level_5_amount = ?, level_5_type = ?"); 
$st->execute(array($_POST['level_5_amount'],$_POST['level_5_type']));
}
if (isset($_POST['level_6_type'])) { $st = $db->prepare("update idevaff_tier_settings set level_6_amount = ?, level_6_type = ?");
$st->execute(array($_POST['level_6_amount'],$_POST['level_6_type']));
 }
if (isset($_POST['level_7_type'])) { $st = $db->prepare("update idevaff_tier_settings set level_7_amount = ?, level_7_type = ?"); 
$st->execute(array($_POST['level_7_amount'],$_POST['level_7_type']));
}
if (isset($_POST['level_8_type'])) { $st = $db->prepare("update idevaff_tier_settings set level_8_amount = ?, level_8_type = ?"); 
$st->execute(array($_POST['level_8_amount'],$_POST['level_8_type']));
}
if (isset($_POST['level_9_type'])) { 
$st = $db->prepare("update idevaff_tier_settings set level_9_amount = ?, level_9_type = ?");
$st->execute(array($_POST['level_9_amount'],$_POST['level_9_type']));
 }
if (isset($_POST['level_10_type'])) { $st = $db->prepare("update idevaff_tier_settings set level_10_amount = ?, level_10_type = ?");
$st->execute(array($_POST['level_10_amount'],$_POST['level_10_type']));
 }
$success_message = "<strong>Success!</strong> Tier level payout amounts have been updated."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 114)) {
$st = $db->prepare("update idevaff_config set direct_links = ?");
$st->execute(array($_POST['direct_links']));
$displaytag = "<font color='#CC0000'>Direct Linking Option Updated&nbsp;</font>"; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 115)) {
$st = $db->prepare("insert into idevaff_direct_pages (page) VALUES (?)");
$st->execute(array($_POST['direct_page']));
$displaytag = "<font color='#CC0000'>Direct Linking Page Added&nbsp;</font>"; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 116)) {
    try {
        $data = serialize($_POST['mailchimp_data']);
        $st = $db->prepare("UPDATE `idevaff_newsletter_addons` SET meta_value=? where meta_key='mailchimp'");
        $st->execute(array($data));
        $success_message = "<strong>Success!</strong> MailChimp settings saved."; 
    } catch (Exception $ex) {
        $error_message = "<strong>Error!</strong> {$ex->getMessage()}";
    }
/*    
$st = $db->prepare("update idevaff_newsletter_mailchimp set enabled = ?, api_key = ?, list_id = ?");
$st->execute(array($_POST['mailchimp_status'],$_POST['mailchimp_key'],$_POST['mailchimp_listid']));
$success_message = "<strong>Success!</strong> MailChimp settings saved."; 
*/
}

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 117)) {
$st = $db->prepare("update idevaff_newsletter_generic set enabled = ?");
$st->execute(array($_POST['mailgeneric_status']));
$success_message = "<strong>Success!</strong> Generic API settings saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 118)) {
$warning = null;
$warning_display = null;
$master = $_POST['master_affiliate'];
$pay_amount = $_POST['pay_amount'];
$pay_type = $_POST['pay_type'];

$slaves = $_POST['slaves'];

if ($slaves > 0) {
if (is_array($slaves)) {

while (list ($key, $val) = each ($slaves)) {

$get_count = $db->prepare("select id from idevaff_commission_override where slave = ?");
$get_count->execute(array(htmlspecialchars(strip_tags($val))));
if ($get_count->rowCount() > 9) {
$warning_display = 1;
$warning .= $val . " ";
} else {

$get_count = $db->prepare("select id from idevaff_commission_override where slave = ? and id = ?");
$get_count->execute(array($val,$master));
if ($get_count->rowCount()) {
$warning_display = 2;
$warning .= $val . " ";
} else {

$st = $db->prepare("insert into idevaff_commission_override (id, slave, commission_amount, commission_type) VALUES (?, ?, ?, ?)");
$st->execute(array($master,$val,$pay_amount,$pay_type));
$success_message = "<strong>Success!</strong> Override created for parent affiliate ID: " . $master;
} } }

} }
}
 



 if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 120)) {
$error = null;
$product_id = $_POST['product_id'];
$product_amount = $_POST['product_amount'];
$product_commission = $_POST['product_commission'];
$product_type = $_POST['product_type'];
$sql=$db->prepare("select id from idevaff_products where product_id = ?");
$sql->execute(array($product_id));
if ($sql->rowCount()) {
$fail_message = "<strong>Error!</strong> Product identifier already exists.";
} else {
if ($product_id == '') {
$fail_message = "<strong>Error!</strong> Product identifier is missing.<br />";
} else {
if ($product_amount < '.01') {
$fail_message = "<strong>Error!</strong> Product amount is missing, too low or not a numeric value.<br />";
} else {
if ($product_commission < '.01') {
$fail_message = "<strong>Error!</strong> Product commission is missing, too low or not a numeric value.<br />";
} else {
function amount_valid($credential) {
global $db;
$rtn_value = false;
if (get_magic_quotes_gpc()) {
$credential = stripslashes($credential); }
if (!(preg_match("/[^0-9.]/i", $credential))) {
$rtn_value=true; } return $rtn_value; }
if (!amount_valid($product_amount)) { $fail_message = "<strong>Error!</strong> Invalid product amount. Use numeric values only.<br />";
} else {
function commission_amount_valid($credential) {
global $db;
$rtn_value = false;
if (get_magic_quotes_gpc()) {
$credential = stripslashes($credential); }
if (!(preg_match("/[^0-9.]/i", $credential))) {
$rtn_value=true; } return $rtn_value; }
if (!commission_amount_valid($product_commission)) { $fail_message = "<strong>Error!</strong> Invalid commission amount. Use numeric values only.<br />";
} else {
function id_valid($credential) {
global $db;
$rtn_value = false;
if (get_magic_quotes_gpc()) {
$credential = stripslashes($credential); }
if (!(preg_match("/[^a-z0-9_-]/i", $credential))) {
$rtn_value=true; } return $rtn_value; }
if (!id_valid($product_id)) { $fail_message = "<strong>Error!</strong> Invalid product identifier. Use only alpha-numeric characters, underscores and hyphens.<br />";
} else {
$st = $db->prepare("insert into idevaff_products (product_id, product_amount, product_commission, product_type) VALUES (?,?,?,?)");
$st->execute(array($product_id,$product_amount,$product_commission,$product_type));
$success_message = "<strong>Success!</strong> Product commission created.";
} } } } } } } }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 121)) {
$error = null;
$start_month = $_POST['start_month'];
$start_day = $_POST['start_day'];
$start_year = $_POST['start_year'];
$end_month = $_POST['end_month'];
$end_day = $_POST['end_day'];
$end_year = $_POST['end_year'];
$promo_amount = $_POST['promo_percent'];

function idev_promo_strtotime($date, $end = false) {
    list($month, $day, $year) = explode("-",$date);
    if($end == false) {
        return(mktime( 12,0,0,$month, $day, $year));
    } else {
        return(mktime( 23,59,59,$month, $day, $year));
            }
}

$promo_str_start = $start_month . "-" .  $start_day . "-" . $start_year;
$promo_start = idev_promo_strtotime($promo_str_start);
$promo_str_end = $end_month . "-" .  $end_day . "-" . $end_year;
$promo_end = idev_promo_strtotime($promo_str_end);

if ($promo_end == $promo_start) {
$fail_message = "<strong>Error!</strong> The start date and end data cannot be the same.";
} else {

if ($promo_end < $promo_start) {
$fail_message = "<strong>Error!</strong> The end date you've chosen is earlier than the start date.";
} else {
//$query=$db->query("select id from idevaff_promo where (start_date <= '$promo_start' AND end_date >= '$promo_end') OR (start_date >= '$promo_start' AND end_date <= '$promo_end') OR (start_date >= '$promo_start' AND start_date <= '$promo_end') OR (end_date >= '$promo_start' AND end_date <= '$promo_end')");
$query=$db->prepare("select id from idevaff_promo where (start_date <= ? AND end_date >= ?) OR (start_date >= ? AND end_date <= ?) OR (start_date >= ? AND start_date <= ?) OR (end_date >= ? AND end_date <= ?)");
$query->execute(array($promo_start,$promo_end,$promo_start,$promo_end,$promo_start,$promo_end,$promo_start,$promo_end));
if ($query->rowCount()) {
$fail_message = "<strong>Error!</strong> An existing promotional bonus already exists during a portion of the selected time period. The time period for multiple promotional bonuses cannot overlap each other.";
} else {
$st = $db->prepare("insert into idevaff_promo (start_date, end_date, amount, enabled) VALUES (?, ?, ?, '1')");
$st->execute(array($promo_start,$promo_end,$promo_amount));
$success_message = "<strong>Success!</strong> Promotional bonus created.";
} } }

}

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 122)) {
$non_commissioned = $_POST['non_commissioned'];
$st=$db->prepare("update idevaff_config set non_commissioned = ?");
$st->execute(array($non_commissioned));
$success_message = "<strong>Success!</strong> Settings saved.";
}

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 123)) {
$success = 0;
$removed = 0;
$assign_affiliate = $_POST['assign_affiliate'];
$assign_amount = $_POST['assign_amount'];
$time_stamp = $_POST['time_stamp'];
$customer_ip = $_POST['customer_ip'];
$sale_amount = $_POST['sale_amount'];
$order_number = $_POST['order_number'];
$converted_amount = $_POST['converted_amount'];
$conversion_currency = $_POST['conversion_currency'];
$geo = $_POST['geo'];
$sql = $db->prepare("insert into idevaff_sales (id, payment, approved, ip, code, tracking, amount, type, currency, converted_amount, geo) VALUES (?,?,'0',?,?,?, ?,'1',?,?,?)");
$sql->execute(array($assign_affiliate,$assign_amount,$customer_ip,$time_stamp,$order_number,$sale_amount,$conversion_currency,$converted_amount,$geo));

// --------------------------------------------
// DEFINE POST BACK AND WEBHOOK VALUES
// --------------------------------------------

	$ds	= $db->query("select decimal_symbols from idevaff_config");
	$ds = $ds->fetch();
	$decimal_symbols = $ds['decimal_symbols'];

	$event = "commission_created";
	$data_affiliate_id = $assign_affiliate;
	$data_order_number = $order_number;
	$data_commission = number_format($assign_amount,$decimal_symbols);
	$data_sale_amount = number_format($sale_amount,$decimal_symbols);
	$data_date = date($dateformat, $time_stamp);
	$data_time = date($timeformat, $time_stamp);
	$data_timestamp = $time_stamp;
	$data_sub_id = null;
	$data_tid1 = null;
	$data_tid2 = null;
	$data_tid3 = null;
	$data_tid4 = null;
	$data_currency = $conversion_currency;
	$data_cart_profile = null;
	
// --------------------------------------------
// START WEBHOOK CALL
// --------------------------------------------

	include($path."/API/webhooks/webhook.php");
	
if ($_POST['assign_remove'] == 1) {
$id = $_POST['id'];
$st = $db->prepare("delete from idevaff_general_sales where id = ?");
$st->execute(array($id));
$removed = 1; } else { $remove = 0; }
$success = 1;
if ($removed == 1) {
$success_message = "<strong>Success!</strong> Commission created and sale removed from sales log.";
} else {
$success_message = "<strong>Success!</strong> Commission created.";
}
$warning_message = "<strong>Notice!</strong> The new commission is now pending approval.";
}

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 124)) {
$network = $_POST['network'];
$st = $db->prepare("update idevaff_config set network = ?");
$st->execute(array($network));
$displaytag = "<font color='#CC0000'>Settings Updated&nbsp;</font>";
}

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 125)) {
$st = $db->prepare("update idevaff_config set signup_api = ?");
$st->execute(array($_POST['signup_api']));
$success_message = "<strong>Success!</strong> Settings saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 126)) {

if (file_exists('../plugin_keys/vanity_codes_key.php')) {
include ("../plugin_keys/vanity_codes_key.php");
if ($vanity_key == '81573') {
$ok_to_update = true;
} }

if (isset($ok_to_update)) {
$vanity_codes = $_POST['vanity_codes'];
} else {
$vanity_codes = '0'; }

$st = $db->prepare("update idevaff_config set coupon_priority = ?, vanity_codes = ?, vanity_notify = ?");
$st->execute(array($_POST['coupon_priority'],$vanity_codes,$_POST['vanity_notify']));
$success_message = "<strong>Success!</strong> Settings saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 128)) {
if ((isset($_POST['max_comm_use'])) && ($_POST['max_comm_use'] == 1)) { $max_comm_use = 1; } else { $max_comm_use = 0; }
$st = $db->prepare("update idevaff_config set max_comm_use = ?, max_comm_amt = ?, max_comm_email = ?");
$st->execute(array($max_comm_use,$_POST['max_comm_amt'],$_POST['max_comm_email']));
$success_message = "<strong>Success!</strong> Allowed commission restrictions updated."; }



if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 129)) {
$fail_message = null;
$signup_code = $_POST['signup_code'];
$signup_code = strtolower($signup_code);

$sql=$db->prepare("select id from idevaff_private where code = ?");
$sql->execute(array($signup_code));
if ($sql->rowCount()) {
$fail_message = "<strong>Error!</strong> Invalid signup code. Signup code already exists.";
} else {
if ($signup_code == '') {
$fail_message = "<strong>Error!</strong> Invalid signup code. Signup code is missing.";
} else {
if ((strlen($signup_code) > 20) || (strlen($signup_code) < 4)) {
$fail_message = "<strong>Error!</strong> Invalid signup code. Signup code must be between 4 and 20 characters in length. The signup code you're creating is " . strlen($signup_code) . " characters long.";
} else {
function signup_code_valid($credential) {
$rtn_value = false;
if (get_magic_quotes_gpc()) {
$credential = stripslashes($credential); }
if (!(preg_match("/[^a-z0-9_-]/i", $credential))) {
$rtn_value=true; } return $rtn_value; }
if (!signup_code_valid($signup_code)) {
$fail_message = "<strong>Error!</strong> Invalid signup code. Use only alpha-numeric characters, underscores and hyphens.";
} } }

if (!isset($fail_message)) {
if ((isset($_POST['no_expiration'])) && ($_POST['no_expiration'] == 1)) {
$expiration_option = '0';
$expiration_code = '0';
} else {
$expiration_option = '1';
function idev_promo_strtotime($date) {
    list($month, $day, $year) = explode("-",$date);
        return(mktime( 23,59,59,$month, $day, $year));
            }
if (isset($_POST['expiration_month'])) { $expiration_month = $_POST['expiration_month']; }
if (isset($_POST['expiration_day'])) { $expiration_day = $_POST['expiration_day']; }
if (isset($_POST['expiration_year'])) { $expiration_year = $_POST['expiration_year']; }
$promo_str_start = $expiration_month . "-" .  $expiration_day . "-" . $expiration_year;
$expiration_code = idev_promo_strtotime($promo_str_start); }
$st = $db->prepare("insert into idevaff_private (type, code, expires) VALUE (?, ?, ?)");
$st->execute(array($expiration_option,$signup_code,$expiration_code));
$success_message = "<strong>Sucess!</strong> Signup code created.</strong>"; } } }











if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 130)) {
$private_signup_enabled = $_POST['private_signup_enabled'];
$st = $db->prepare("update idevaff_config set private = ?");
$st->execute(array($private_signup_enabled));
$success_message = "<strong>Success!</strong> Settings saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 131)) {
$st = $db->prepare("update idevaff_config set sale_approval_1 = ?, sale_approval_2 = ?, sale_approval_3 = ?");
$st->execute(array($_POST['sale_approval_1'],$_POST['sale_approval_2'],$_POST['sale_approval_3']));
$success_message = "<strong>Success!</strong> Settings saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 134)) {
$st = $db->prepare("update idevaff_config set marketing_delivery = ?, email_links_active = ?");
$st->execute(array($_POST['marketing_delivery'],$_POST['email_links_active']));
$success_message = "<strong>Success!</strong> Settings saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 135)) {
$st = $db->prepare("update idevaff_config set qr_codes = ?");
$st->execute(array($_POST['qr_codes_setting']));
$success_message = "<strong>Success!</strong> Settings saved."; }


if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 136)) {
$st = $db->prepare("update idevaff_config set auto_add_ban = ?, auto_add_suspension = ?");
$st->execute(array($_POST['auto_add_ban'],$_POST['auto_add_suspension']));
$success_message .= "<strong>Success!</strong> Settings saved.<br />\n"; }


if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 137)) {
$st = $db->prepare("update idevaff_config set aff_lib = ?");
$st->execute(array($_POST['aff_lib']));
$success_message = "<strong>Success!</strong> Settings saved.<br />\n"; }



if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 138)) {
$suspended_location = $_POST['suspended_location'];
if ($suspended_location == '') { $suspended_location = "http://"; }
$st = $db->prepare("update idevaff_config set suspended_location = ?");
$st->execute(array($suspended_location));
$success_message = "<strong>Success!</strong> Settings saved.<br />\n"; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 139)) {
$db->query("update idevaff_video_settings set video_logo_url = ''");
$success_message = "<strong>Success!</strong> Logo image removed."; }



if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 140)) {
$fb_enabled = $_POST['idev_facebook_enabled'];
$st = $db->prepare("update idevaff_facebook set enabled = ?");
$st->execute(array($fb_enabled));
$success_message = "<strong>Success!</strong> Settings saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 141)) {
$st = $db->prepare("update idevaff_cp_settings set bar_comms_last_6 = ?, pie_top_5_month = ?");
$st->execute(array($_POST['bar_comms_last_6'],$_POST['pie_top_5_month']));
$success_message = "<strong>Success!</strong> Settings saved.<br />\n"; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 142)) {
$st = $db->prepare("update idevaff_cp_settings set cp_page_width = ?, cp_menu_location = ?, cp_fixed_navbar = ?, cp_fixed_left_menu = ?, logo_footer = ?");
$st->execute(array($_POST['cp_page_width'],$_POST['cp_menu_location'],$_POST['cp_fixed_navbar'],$_POST['cp_fixed_left_menu'],$_POST['logo_footer']));

$st = $db->prepare("update idevaff_config set contact_form = ?, contact_link = ?");
$st->execute(array($_POST['contact_form'],$_POST['contact_link']));

$success_message = "<strong>Success!</strong> Settings saved.<br />\n"; }

if ((isset($_REQUEST['cfg'])) && ($_REQUEST['cfg'] == 143)) {
$query_update = $db->query("select cp_theme from idevaff_cp_settings");
$query_update->setFetchMode(PDO::FETCH_ASSOC);
$update_cp_settings=$query_update->fetch();
$active_theme=$update_cp_settings['cp_theme'];
include($path . "/templates/themes/" . $active_theme . "/theme_info/default_colors.php");
$st = $db->prepare("update idevaff_cp_settings set background = ?, heading_back = ?, header_background = ?, top_menu_background = ?, top_menu_text = ?, heading_text = ?, portlet_1 = ?, portlet_2 = ?, portlet_3 = ?, portlet_4 = ?, portlet_5 = ?, portlet_6 = ?, portlet_text_1 = ?, portlet_text_2 = ?, portlet_text_3 = ?, portlet_text_4 = ?, portlet_text_5 = ?, portlet_text_6 = ?, box_tt_back = ?, box_tt_text = ?, box_ce_back = ?, box_ce_text = ?, box_te_back = ?, box_te_text = ?, box_uv_back = ?, box_uv_text = ?, cp_main_menu_color = ?, cp_main_menu_text = ?");
$st->execute(array($background_color, $page_heading_background_color, $header_background_color, $top_menu_background_color, $top_menu_text_color, $page_heading_text_color, $portlet_box_color_1, $portlet_box_color_2, $portlet_box_color_3, $portlet_box_color_4, $portlet_box_color_5, $portlet_box_color_6, $portlet_text_color_1, $portlet_text_color_2, $portlet_text_color_3, $portlet_text_color_4, $portlet_text_color_5, $portlet_text_color_6, $background_total_transactions, $text_total_transactions, $background_current_earnings, $text_current_earnings, $background_total_earned, $text_total_earned, $background_unique_visitors, $text_unique_visitors, $cp_main_menu_color, $cp_main_menu_text));
$success_message = "<strong>Success!</strong> Settings saved.<br />\n"; }

/*
if ((isset($_REQUEST['cfg'])) && ($_REQUEST['cfg'] == 144)) {

$fail_message = null;
$affiliate_id = $_POST['affiliate_id'];
$postback_url = $_POST['postback_url'];
$varname_aff_id = $_POST['varname_aff_id'];
$varname_on = $_POST['varname_on'];
$varname_comm_amount = $_POST['varname_comm_amount'];
$varname_saleamt = $_POST['varname_saleamt'];
$varname_currency = $_POST['varname_currency'];
$varname_sub = $_POST['varname_sub'];
$varname_tid1 = $_POST['varname_tid1'];
$varname_tid2 = $_POST['varname_tid2'];
$varname_tid3 = $_POST['varname_tid3'];
$varname_tid4 = $_POST['varname_tid4'];

function variable_valid($credential) {
global $db;
$rtn_value = false;
if (get_magic_quotes_gpc()) {
$credential = stripslashes($credential); }
if (!(preg_match("/[^a-zA-Z0-9_]/i", $credential))) {
$rtn_value=true; } return $rtn_value; }

function varname_length($credential) {
$rtn_value = false;
if (get_magic_quotes_gpc()) {
$credential = stripslashes($credential); }
if ((strlen($credential) < '1') || (strlen($credential) > '30')) {
$rtn_value=true; } return $rtn_value; }

$check_existing_postback=$db->prepare("select id from idevaff_postback where affiliate_id = ?");
$check_existing_postback->execute(array($affiliate_id));
if ($check_existing_postback->rowCount()) { $fail_message = "<strong>Error!</strong> Postback already exists for this affiliate.<br />\n"; }

if (($postback_url == '') || ($postback_url == 'http://')) { $fail_message = "Please enter the <strong>Postback URL</strong> for this affiliate.<br />\n"; }

if (!isset($fail_message)) { if (varname_length($varname_aff_id)) { $fail_message = "Your variable name for the <strong>Affiliate ID</strong> must be 1 - 30 characters in length.<br />\n"; } }
if (!isset($fail_message)) { if (!variable_valid($varname_aff_id)) { $fail_message = "Invalid variable name for the <strong>Affiliate ID</strong>. Accepted entries include alpha-numeric characters and underscores.<br />\n"; } }
if (!isset($fail_message)) { if (varname_length($varname_on)) { $fail_message = "Your variable name for the <strong>Order Number</strong> must be 1 - 30 characters in length.<br />\n"; } }
if (!isset($fail_message)) { if (!variable_valid($varname_on)) { $fail_message = "Invalid variable name for the <strong>Order Number</strong>. Accepted entries include alpha-numeric characters and underscores.<br />\n"; } }
if (!isset($fail_message)) { if (varname_length($varname_comm_amount)) { $fail_message = "Your variable name for the <strong>Commission Amount</strong> must be 1 - 30 characters in length.<br />\n"; } }
if (!isset($fail_message)) { if (!variable_valid($varname_comm_amount)) { $fail_message = "Invalid variable name for the <strong>Commission Amount</strong>. Accepted entries include alpha-numeric characters and underscores.<br />\n"; } }
if (!isset($fail_message)) { if (varname_length($varname_saleamt)) { $fail_message = "Your variable name for the <strong>Sale Amount</strong> must be 1 - 30 characters in length.<br />\n"; } }
if (!isset($fail_message)) { if (!variable_valid($varname_saleamt)) { $fail_message = "Invalid variable name for the <strong>Sale Amount</strong>. Accepted entries include alpha-numeric characters and underscores.<br />\n"; } }
if (!isset($fail_message)) { if (varname_length($varname_currency)) { $fail_message = "Your variable name for the <strong>Currency</strong> must be 1 - 30 characters in length.<br />\n"; } }
if (!isset($fail_message)) { if (!variable_valid($varname_currency)) { $fail_message = "Invalid variable name for the <strong>Currency</strong>. Accepted entries include alpha-numeric characters and underscores.<br />\n"; } }
if (!isset($fail_message)) { if (varname_length($varname_sub)) { $fail_message = "Your variable name for the <strong>Sub-Affiliate ID</strong> must be 1 - 30 characters in length.<br />\n"; } }
if (!isset($fail_message)) { if (!variable_valid($varname_sub)) { $fail_message = "Invalid variable name for the <strong>Sub-Affiliate ID</strong>. Accepted entries include alpha-numeric characters and underscores.<br />\n"; } }
if (!isset($fail_message)) { if (varname_length($varname_tid1)) { $fail_message = "Your variable name for the <strong>TID1</strong> must be 1 - 30 characters in length.<br />\n"; } }
if (!isset($fail_message)) { if (!variable_valid($varname_tid1)) { $fail_message = "Invalid variable name for the <strong>TID1</strong>. Accepted entries include alpha-numeric characters and underscores.<br />\n"; } }
if (!isset($fail_message)) { if (varname_length($varname_tid2)) { $fail_message = "Your variable name for the <strong>TID2</strong> must be 1 - 30 characters in length.<br />\n"; } }
if (!isset($fail_message)) { if (!variable_valid($varname_tid2)) { $fail_message = "Invalid variable name for the <strong>TID2</strong>. Accepted entries include alpha-numeric characters and underscores.<br />\n"; } }
if (!isset($fail_message)) { if (varname_length($varname_tid3)) { $fail_message = "Your variable name for the <strong>TID3</strong> must be 1 - 30 characters in length.<br />\n"; } }
if (!isset($fail_message)) { if (!variable_valid($varname_tid3)) { $fail_message = "Invalid variable name for the <strong>TID3</strong>. Accepted entries include alpha-numeric characters and underscores.<br />\n"; } }
if (!isset($fail_message)) { if (varname_length($varname_tid4)) { $fail_message = "Your variable name for the <strong>TID4</strong> must be 1 - 30 characters in length.<br />\n"; } }
if (!isset($fail_message)) { if (!variable_valid($varname_tid4)) { $fail_message = "Invalid variable name for the <strong>TID4</strong>. Accepted entries include alpha-numeric characters and underscores.<br />\n"; } }

if (!isset($fail_message)) {
$st = $db->prepare("insert into idevaff_postback (affiliate_id, url, var_id, var_commission, var_sale_amount, var_order_number, var_sub_id, var_tid1, var_tid2, var_tid3, var_tid4, var_currency) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$st->execute(array($affiliate_id,$postback_url,$varname_aff_id,$varname_comm_amount,$varname_saleamt,$varname_on,$varname_sub,$varname_tid1,$varname_tid2,$varname_tid3,$varname_tid4,$varname_currency));

$success_message = "<strong>Success!</strong> Postback added."; }

}
*/

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 145)) {
$st = $db->prepare("update idevaff_facebook set id = ?");
$st->execute(array(base64_encode($_POST['idev_facebook_id'])));
$success_message = "<strong>Success!</strong> Settings saved."; }

if ((isset($_REQUEST['cfg'])) && ($_REQUEST['cfg'] == 146)) {
if (isset($_REQUEST['rem_logs'])) {
$db->query("delete from idevaff_general_sales");
$success_message = "<strong>Success!</strong> Sales logs removed."; } }

if ((isset($_REQUEST['cfg'])) && ($_REQUEST['cfg'] == 146)) {
$st = $db->prepare("delete from idevaff_general_sales where id = ?");
$st->execute(array($_REQUEST['rem_id']));
$success_message = "<strong>Success!</strong> Individual sales log removed."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 147)) {
if (isset($_POST['option_enabled'])) {
$db->query("update idevaff_payment_methods set enabled = '0'");
if( is_array($_POST['option_enabled'])) { 
foreach( $_POST['option_enabled'] as $subject ) {
$st = $db->prepare("update idevaff_payment_methods set enabled = '1' where id = ?");
$st->execute(array($subject));
if ($subject == '2') {
$warning_message = "<h4>Important Notice</h4>You have selected <strong>Stripe</strong> as a payment option for your affiliates. Please click on the <strong>Stripe Payment Settings</strong> tab to complete additional configuration steps.";
}
}
$success_message = "<strong>Success!</strong> Settings saved.";
}
} else {
$fail_message = "<strong>Error!</strong> You must select at least one payment option for your affiliates.";
}

$error = null;
if (isset($_POST['new_payment_method'])) {
if ($_POST['new_payment_method'] != '') {

function method_name_valid($credential) {
global $db;
$rtn_value = false;
if (get_magic_quotes_gpc()) {
$credential = stripslashes($credential); }
if (!(preg_match("/[^a-z0-9_\s]/i", $credential))) {
$rtn_value=true; } return $rtn_value; }

if (!method_name_valid($_POST['new_payment_method'])) {
$error = 1;
$error_message = "New payment method not added. Please use alphabetical characters only.";
}

if (!isset($error)) {
$st = $db->prepare("select id from idevaff_payment_methods where name = ?");
$st->execute(array($_POST['new_payment_method']));
if ($st->rowCount()) {
$error = 1;
$error_message = "New payment method not added. The payment method name you have chosen already exists.";
} }

if (!isset($error)) {
$st = $db->prepare("insert into idevaff_payment_methods (name, enabled) VALUES (?, '1')");
$st->execute(array($_POST['new_payment_method']));
$success_message = "<strong>Success!</strong> New payment method added.";
} else {
$warning_message = "<strong>Warning!</strong> " . $error_message;
} } }
}


if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 148)) {
$st = $db->prepare("update idevaff_affiliates set pay_method = ? where pay_method = ?");
$st->execute(array($_POST['move_to_method'],$_POST['move_from_method']));
$success_message = "<strong>Success!</strong> Bulk move complete."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 149)) {
$st = $db->prepare("update idevaff_affiliates set pay_method = ? where pay_method = ?");
$st->execute(array($_POST['move_to_method'],$_POST['move_from_method']));
$st = $db->prepare("delete from idevaff_payment_methods where id = ?");
$st->execute(array($_POST['move_from_method']));
$success_message = "<strong>Success!</strong> Account have been moved and payout method removed."; }

if ((isset($_REQUEST['cfg'])) && ($_REQUEST['cfg'] == 150)) {
$st = $db->prepare("delete from idevaff_payment_methods where id = ?");
$st->execute(array($_REQUEST['delete']));
$success_message = "<strong>Success!</strong> Payout method removed."; }


if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 151) && isset($_POST['seal_status'])) {
$st = $db->prepare("update idevaff_config set seal = ?");
$st->execute(array($_POST['seal_status']));
$success_message = "<strong>Success!</strong> Setting saved."; }

if(isset($_POST['cfg']) && $_POST['cfg'] === 'aweber_settings' ) {
    try {
        $data = $_POST['aweber_data'];
        $st = $db->query("select `meta_value` from `idevaff_newsletter_addons` where `meta_key`='aweber'");
        $data2 = $st->fetch();

        if(!empty($data2)) {
            $data2 = unserialize($data2['meta_value']);
            if($data2['oauth_code'] != $data['oauth_code']) {
                $data['consumer_key'] = $data['consumer_secret'] = $data['access_key'] = $data['access_secret'] = '';
            }
        }
        
        $data = serialize($data);
        $st = $db->prepare("UPDATE `idevaff_newsletter_addons` SET meta_value=? where meta_key='aweber'");
        $st->execute(array($data));
        $success_message = "<strong>Success!</strong> Setting saved.";
    } catch (Exception $ex) {
        $error_message = "<strong>Error!</strong> {$ex->getMessage()}";
    }
}

if(isset($_POST['cfg']) && $_POST['cfg'] === 'constant_settings' ) {
    try {
        $data = serialize($_POST['constant_contact_data']);
        $st = $db->prepare("UPDATE `idevaff_newsletter_addons` SET meta_value=? where meta_key='constant_contact'");
        $st->execute(array($data));
        $success_message = "<strong>Success!</strong> Setting saved.";
    } catch (Exception $ex) {
        $error_message = "<strong>Error!</strong> {$ex->getMessage()}";
    }
}

if(isset($_POST['cfg']) && $_POST['cfg'] === 'icontact_settings' ) {
    try {
        $data = serialize($_POST['i_contact_data']);
        $st = $db->prepare("UPDATE `idevaff_newsletter_addons` SET meta_value=? where meta_key='i_contact'");
        $st->execute(array($data));
        $success_message = "<strong>Success!</strong> Setting saved.";
    } catch (Exception $ex) {
        $error_message = "<strong>Error!</strong> {$ex->getMessage()}";
    }
}

if(isset($_POST['cfg']) && $_POST['cfg'] === 'get_response_settings' ) {
    try {
        $data = serialize($_POST['get_response_data']);
        $st = $db->prepare("UPDATE `idevaff_newsletter_addons` SET meta_value=? where meta_key='get_response'");
        $st->execute(array($data));
        $success_message = "<strong>Success!</strong> Setting saved.";
    } catch (Exception $ex) {
        $error_message = "<strong>Error!</strong> {$ex->getMessage()}";
    }
}

if(isset($_POST['cfg']) && $_POST['cfg'] === 'campaign_monitor_settings' ) {
    try {
        $data = serialize($_POST['campaign_monitor_data']);
        $st = $db->prepare("UPDATE `idevaff_newsletter_addons` SET meta_value=? where meta_key='campaign_monitor'");
        $st->execute(array($data));
        $success_message = "<strong>Success!</strong> Setting saved.";
    } catch (Exception $ex) {
        $error_message = "<strong>Error!</strong> {$ex->getMessage()}";
    }
}

if(isset($_POST['cfg']) && $_POST['cfg'] === 'active_campaign_settings' ) {
    try {
        $data = serialize($_POST['active_campaign_data']);
        $st = $db->prepare("UPDATE `idevaff_newsletter_addons` SET meta_value=? where meta_key='active_campaign'");
        $st->execute(array($data));
        $success_message = "<strong>Success!</strong> Setting saved.";
    } catch (Exception $ex) {
        $error_message = "<strong>Error!</strong> {$ex->getMessage()}";
    }
}

if(isset($_POST['cfg']) && $_POST['cfg'] === 'vertical_response_settings' ) {
    try {
        $data = serialize($_POST['vertical_response_data']);
        $st = $db->prepare("UPDATE `idevaff_newsletter_addons` SET meta_value=? where meta_key='vertical_response'");
        $st->execute(array($data));
        $success_message = "<strong>Success!</strong> Setting saved.";
    } catch (Exception $ex) {
        $error_message = "<strong>Error!</strong> {$ex->getMessage()}";
    }
}

if (isset($_POST['cfg']) && $_POST['cfg'] === 'convertkit_settings') {
    try {
        $data = serialize($_POST['convertkit_data']);
        $st = $db->prepare("UPDATE `idevaff_newsletter_addons` SET meta_value=? where meta_key='convertkit'");
        $st->execute(array($data));
        $success_message = "<strong>Success!</strong> Setting saved.";
    } catch (Exception $ex) {
        $error_message = "<strong>Error!</strong> {$ex->getMessage()}";
    }
}

if (isset($_POST['cfg']) && $_POST['cfg'] === 'infusionsoft_settings') {
    try {
        $query = $db->query("SELECT meta_value FROM `idevaff_newsletter_addons` WHERE meta_key='infusionsoft'");
        $query->setFetchMode(PDO::FETCH_ASSOC);
        $infusionsoft_data = $query->fetch();
        $infusionsoft_data = unserialize($infusionsoft_data['meta_value']);

        $infusionsoft_data = $_POST['infusionsoft_data'];
        $data = serialize($infusionsoft_data);
        $st = $db->prepare("UPDATE `idevaff_newsletter_addons` SET meta_value=? where meta_key='infusionsoft'");
        $st->execute(array($data));
        $success_message = "<strong>Success!</strong> Setting saved.";
    } catch (Exception $ex) {
        $error_message = "<strong>Error!</strong> {$ex->getMessage()}";
    }
}

if (isset($_POST['cfg']) && $_POST['cfg'] === 'sendgrid_settings') {
    try {
        $data = serialize($_POST['sendgrid_data']);
        $st = $db->prepare("UPDATE `idevaff_newsletter_addons` SET meta_value=? where meta_key='sendgrid'");
        $st->execute(array($data));
        $success_message = "<strong>Success!</strong> Setting saved.";
    } catch (Exception $ex) {
        $error_message = "<strong>Error!</strong> {$ex->getMessage()}";
    }
}

if ((isset($_REQUEST['cfg'])) && ($_REQUEST['cfg'] == 152)) {
$st = $db->prepare("update idevaff_config set protection_profile = ?, protection_secret_key = ?");
$st->execute(array($_REQUEST['protection_profile'], $_REQUEST['protection_secret_key']));
$success_message = "<strong>Success!</strong> Settings saved."; }

if ((isset($_REQUEST['cfg'])) && ($_REQUEST['cfg'] == 811)) {
    //save stripe data
    $stripe_client_id = isset($_POST['stripe_client_id']) ? $_POST['stripe_client_id'] : '';
    $stripe_api_secret = isset($_POST['stripe_api_secret']) ? $_POST['stripe_api_secret'] : '';

   // $q = $db->prepare("UPDATE idevaff_config SET stripe_client_id=?, stripe_api_secret=? ");
   // $q->execute(array($stripe_client_id,$stripe_api_secret));

	$st = $db->prepare("update idevaff_config set stripe_client_id = (AES_ENCRYPT(?, '" . SITE_KEY . "')), stripe_api_secret = (AES_ENCRYPT(?, '" . SITE_KEY . "'))");
	$st->execute(array($stripe_client_id,$stripe_api_secret));
	
    $success_message = "<strong>Success!</strong> Settings saved.";
}

if ((isset($_REQUEST['cfg'])) && ($_REQUEST['cfg'] == 156)) {
$db->query("update idevaff_countries set def = '0'");
$st = $db->prepare("update idevaff_countries set def = '1' where country_code = ?");
$st->execute(array($_POST['country']));
$success_message = "<strong>Success!</strong> Settings saved.";
}

if ((isset($_REQUEST['cfg'])) && ($_REQUEST['cfg'] == 157)) {
include("../includes/random.php");
$new_key = iDevRandomNum();
$newkey = $db->prepare("update idevaff_config set secret = ?");
$newkey->execute(array($new_key));
$success_message = "<strong>Success!</strong> Your secret key has been updated. Be sure to update your CRONs and script calls!";
}

if ((isset($_REQUEST['cfg'])) && ($_REQUEST['cfg'] == 158)) {
	
if (!filter_var($_POST['webhook_url'], FILTER_VALIDATE_URL) === false) {
$st = $db->prepare("update idevaff_config set webhook_url = ?");
$st->execute(array($_POST['webhook_url']));
$success_message = "<strong>Success!</strong> Setting saved.";
} else {
$db->query("update idevaff_config set webhook_url = ''");
$fail_message = "<strong>Error</strong> Invalid or empty URL location.";
}
}

if ((isset($_REQUEST['cfg'])) && ($_REQUEST['cfg'] == 159)) {
	
	$geo_name = $_POST['geo_name'];
	
function geo_name_valid($credential) {
$rtn_value = false;
//$credential = stripslashes($credential);
if (!(preg_match('/^[a-zA-Z0-9_]+$/', $credential))) {
$rtn_value=true; } return $rtn_value; }
if (geo_name_valid($geo_name)) {
$fail_message = "Invalid variable name. Only alphanumeric and underscores are allowed.";
}

if (!isset($fail_message)) {
	$st = $db->prepare("update idevaff_config set pass_geo = ?");
$st->execute(array($_POST['pass_geo']));
$st = $db->prepare("update idevaff_custom_vars set geo = ?");
$st->execute(array($geo_name));
$success_message = "<strong>Success!</strong> Setting saved.";
}
}

if ((isset($_REQUEST['cfg'])) && ($_REQUEST['cfg'] == 160)) {
	
	$details_show = $_POST['details_show'];
	
	if (($_POST['details_show_type'] == '0') && ($_POST['details_show_signup'] == '0') && ($_POST['details_show_requirements'] == '0') && ($_POST['details_show_duration'] == '0')) {
		$details_show = 0;
	}
	
	//if (($_POST['details_show_type'] == '1') || ($_POST['details_show_signup'] == '1') || ($_POST['details_show_requirements'] == '1') || ($_POST['details_show_duration'] == '1') && ($_POST['details_show'] == '0')) {
	//	$details_show = 1;
	//}
	
$st = $db->prepare("update idevaff_cp_settings set details_show = ?, details_show_type = ?, details_show_signup = ?, details_show_requirements = ?, details_show_duration = ?");
$st->execute(array($details_show,$_POST['details_show_type'],$_POST['details_show_signup'],$_POST['details_show_requirements'],$_POST['details_show_duration']));
$success_message = "<strong>Success!</strong> Settings saved.";
}

if ((isset($_REQUEST['cfg'])) && ($_REQUEST['cfg'] == 165)) {
    $st = $db->prepare("update idevaff_config set force_ssl = ?");
    $st->execute(array($_POST['force_ssl']));

    header("Location: setup.php?action=1&tab=5&ssl_updated=1");
    exit();

}

if ((isset($_REQUEST['cfg'])) && ($_REQUEST['cfg'] == 166)) {
    $st = $db->prepare("update idevaff_ga set footer = ?");
    $new_ga_footer = htmlentities($_POST['ga_footer'], ENT_QUOTES, 'UTF-8');
    $st->execute(array($new_ga_footer));
    $success_message = "<strong>Success!</strong> Settings saved.";
}
if ((isset($_REQUEST['cfg'])) && ($_REQUEST['cfg'] == 167)) {
    $st = $db->prepare("update idevaff_ga set signup = ?");
    $new_ga_signup = htmlentities($_POST['ga_signup'], ENT_QUOTES, 'UTF-8');
    $st->execute(array($new_ga_signup));
    $success_message = "<strong>Success!</strong> Settings saved.";
}

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 168)) {

    $newpay_alt_sliding = '0.00';

    if ($_POST['newpay_sliding'] <= 0) {
        $fail_message = "<strong>Error!</strong> Commission payout amount must be positive. It cannot be zero.";
        $fail = 1;
    }
    if ((isset($_POST['newpay_alt_sliding'])) && ($_POST['newpay_alt_sliding'] < 0)) {
        $fail_message = "<strong>Error!</strong> Repeat/Recurring payout amount must be positive. It cannot be negative.";
        $fail = 1;
    }

    if (isset($_POST['percupdate'])) {
        $newpay_sliding = $_POST['newpay_sliding'] / 100;
    } else {
        $newpay_sliding = $_POST['newpay_sliding'];
    }
    if (isset($_POST['percupdate'])) {
        $current = $_POST['current'] / 100;
    } else {
        $current = $_POST['current'];
    }

    if (isset($_POST['newpay_alt_sliding'])) {
        if (isset($_POST['percupdate'])) {
            $newpay_alt_sliding = $_POST['newpay_alt_sliding'] / 100;
        } else {
            $newpay_alt_sliding = $_POST['newpay_alt_sliding'];
        }
    }

    $min_amount = $_POST['min_amount'];
    $max_amount = $_POST['max_amount'];

    if ($fail != 1) {

        $st = $db->prepare("update idevaff_paylevels_sliding set amt = ?, amt_alt = ?, min_amount = ?, max_amount = ? where id = ?");
        $st->execute(array($newpay_sliding, $newpay_alt_sliding, $min_amount, $max_amount, $_POST['change']));
        $success_message = "<strong>Success!</strong> Scale level updated.";
    }
}

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 169)) {

    $gethighnum = $db->prepare("select MAX(slidinglevel) as highnum from idevaff_paylevels_sliding where type = ? and paylevel = ?");
    $gethighnum->execute(array($_POST['scale_type'], $_POST['scale_level']));
    $gethighnum = $gethighnum->fetch();
    $highnum = $gethighnum['highnum'] + 1;

    $st = $db->prepare("insert into idevaff_paylevels_sliding (type, paylevel, slidinglevel, min_amount, max_amount, amt, amt_alt) VALUES (?,?,?,0,0,0,0)");
    $st->execute(array($_POST['scale_type'], $_POST['scale_level'], $highnum));
    $success_message = "<strong>Success!</strong> Scale rate added. Update your new scale values below. Rates can not be left with <strong>zeros</strong> for defaults.";
}

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 170)) {

    $getscaledeets = $db->prepare("select type, slidinglevel, paylevel from idevaff_paylevels_sliding where id = ?");
    $getscaledeets->execute(array($_POST['scale_remove']));
    $getscaledeets = $getscaledeets->fetch();
    $deet_type = $getscaledeets['type'];
    $deet_slidinglevel = $getscaledeets['slidinglevel'];
    $deet_level = $getscaledeets['paylevel'];

    $st = $db->prepare("select count(*) from idevaff_paylevels_sliding where type = ? and paylevel = ?");
    $st->execute(array($deet_type, $deet_level));
    if ($st->fetchColumn() <= 1) {
        $fail_message = "<strong>Error!</strong> You have to have at least one scale rate defined for each level.";
        $fail = 1;
    }

    if ($fail != 1) {
        $st = $db->prepare("delete from idevaff_paylevels_sliding where id = ?");
        $st->execute(array($_POST['scale_remove']));
        $success_message = "<strong>Success!</strong> Scale rate removed.";
    }
}

if ((isset($_REQUEST['cfg'])) && ($_REQUEST['cfg'] == 171)) {
    $st = $db->prepare("update idevaff_config set sliding = ?");
    $st->execute(array($_POST['sliding']));
    $success_message = "<strong>Success!</strong> Settings saved.";
}

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 172)) {
	
	if ($_POST['privacy_signup'] == 0) { $priv_req = 0; } else { $priv_req = $_POST['privacy_required']; }
	
$st = $db->prepare("update idevaff_privacy set privacy_enabled = ?, privacy_signup = ?, privacy_required = ?");
$st->execute(array($_POST['privacy_enabled'],$_POST['privacy_signup'],$priv_req));
$success_message = "<strong>Success!</strong> Settings saved."; }

if ((isset($_POST['cfg'])) && ($_POST['cfg'] == 173)) {
$st = $db->prepare("update idevaff_privacy set policy = ?");
$st->execute(array($_POST['privacy_policy']));
$success_message = "<strong>Success!</strong> Privacy Policy updated."; }

if ((isset($_REQUEST['cfg'])) && ($_REQUEST['cfg'] == 174)) {
    $chka2 = $db->query("select type from idevaff_integration where type = '187'");
    if (!$chka2->rowCount()) {
        $db->query("insert into idevaff_integration (type, auto, manual, idev_vartotal, idev_order, idev_var1, cart_var1, use_var1, tag_var1, idev_var2, cart_var2, use_var2, tag_var2, idev_var3, cart_var3, use_var3, tag_var3) VALUES ('187', '1', '0', 'idev_saleamt', 'idev_ordernum', 'idev_option_1', 'customer_name', 0, 'Customer Name','idev_option_2', 'customer_email', 0, 'Customer Email', 'idev_option_3', 'items_purchased', 0, 'Products Purchased')");
        header("Location: setup.php?action=2");
    }
}

?>