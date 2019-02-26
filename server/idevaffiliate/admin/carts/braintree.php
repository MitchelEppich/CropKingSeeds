<?PHP
$cart_profile = '182';
$cart_profile_version = '1.0';
$cart_name = "BrainTree";
$cart_cat = '1';
$protection_eligible = '1';
$coupon_code_eligible = '1';
$per_product_eligible = '0';
$profile_protection_eligible = '1';
$recurring_supported = '1';
$alternate_commission_supported = '0';
$ssl_required = '0';

// CREATE TABLE DATA
$checkdat = $db->query("SHOW COLUMNS from idevaff_carts_data LIKE 'bt_environment'");
if (!$checkdat->rowCount()) {
    $add_column = $db->prepare("ALTER TABLE idevaff_carts_data "
            . "ADD bt_environment blob, "
            . "ADD bt_merchant_id blob, "
            . "ADD bt_public_key blob, "
            . "ADD bt_private_key blob");
    $add_column->execute();
}

if (!isset($readingonly)) {
    include("module_update.php");

    // UPDATE DATA
    if (isset($_POST['bt_environment'], $_POST['bt_merchant_id'], $_POST['bt_public_key'], $_POST['bt_private_key'])) {
       try {
           $st = $db->prepare("UPDATE `idevaff_carts_data` "
                . "SET `bt_environment` = (AES_ENCRYPT(?, '" . SITE_KEY . "')), "
                . "`bt_merchant_id` = (AES_ENCRYPT(?, '" . SITE_KEY . "')), "
                . "`bt_public_key` = (AES_ENCRYPT(?, '" . SITE_KEY . "')), "
                . "`bt_private_key` = (AES_ENCRYPT(?, '" . SITE_KEY . "'))");
        $st->execute(array($_POST['bt_environment'], $_POST['bt_merchant_id'], $_POST['bt_public_key'], $_POST['bt_private_key']));
       } catch (Exception $ex) {
           die($ex->getMessage());
       }
        
        $success_message = "<strong>Success!</strong> Settings saved.";
    }

    // GET CART DATA
    $query_cart_data = $db->query("SELECT "
            . "AES_DECRYPT(bt_environment, '" . SITE_KEY . "') AS d_bt_environment, "
            . "AES_DECRYPT(bt_merchant_id, '" . SITE_KEY . "') AS d_bt_merchant_id, "
            . "AES_DECRYPT(bt_public_key, '" . SITE_KEY . "') AS d_bt_public_key, "
            . "AES_DECRYPT(bt_private_key, '" . SITE_KEY . "') AS d_bt_private_key "
            . "from idevaff_carts_data");
    $query_cart_data->setFetchMode(PDO::FETCH_ASSOC);
    $cart_data = $query_cart_data->fetch();
    $bt_environment = $cart_data['d_bt_environment'];
    $bt_merchant_id = $cart_data['d_bt_merchant_id'];
    $bt_public_key = $cart_data['d_bt_public_key'];
    $bt_private_key = $cart_data['d_bt_private_key'];
	
    ?>

    <?PHP include("includes/notifications.php"); ?>

    <div class="widget box">
        <div class="widget-header"><h4><i class="icon-shopping-cart"></i> <?PHP echo $cart_name; ?> Integration Instructions</h4>
            <span class="pull-right"><a href="setup.php?action=2"><button class="btn btn-default btn-sm">Back To Integration Profiles</button></a>
            </span>
        </div>
        <div class="widget-content">

            <?PHP include ("carts/notes_integration.php"); ?>

            <div class="alert alert-warning">Instruction Set 1 of 3</div>
            <table class="table table-striped table-bordered table-highlight-head">
                <tbody>
                    <tr>
                        <td width="5%">1.</td>
                        <td width="95%">Login to your <?PHP echo $cart_name; ?> account and go to <strong>Settings</strong> > <strong>Webhooks</strong> and click <strong>Create New Webhook</strong>.</td>
                    </tr>
                    <tr>
                        <td width="5%"></td>
                        <td width="95%">Enter this for your <strong>Destination URL</strong>:</td>
                    </tr>
                    <tr>
                        <td width="5%"></td>
                        <td width="95%"><textarea rows="2" class="form-control"><?PHP echo $base_url; ?>/connect/braintree.php</textarea></td>
                    </tr>
                    <tr>
                        <td width="5%"></td>
                        <td width="95%">Select <strong>Charged Successfully</strong> event.</td>
                    </tr>
                    <tr>
                        <td width="5%"></td>
                        <td width="95%">Hit the <strong>Create Webhook</strong> button.</td>
                    </tr>
                    <tr>
                        <td width="5%">2.</td>
                        <td width="95%">Go to <strong>Settings</strong> > <strong>Processing</strong> > <strong>Custom Fields</strong> > <strong>Options</strong></td>
                    </tr>
                    <tr>
                        <td width="5%"></td>
                        <td width="95%">Click <strong>Add</strong>.</td>
                    </tr>
                    <tr>
                        <td width="5%"></td>
                        <td width="95%">Enter this for your API Name: <strong>customer_ip</strong></td>
                    </tr>
                    <tr>
                        <td width="5%"></td>
                        <td width="95%">Enter this for your Display Name: <strong>Customer IP</strong></td>
                    </tr>
                    <tr>
                        <td width="5%"></td>
                        <td width="95%">In <strong>Options</strong> select <strong>Store and Pass Back</strong> and click <strong>Save</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="widget box">
        <div class="widget-header"><h4><i class="icon-shopping-cart"></i> Update Your <?PHP echo $cart_name; ?> Payment Form(s)</h4></div>
        <div class="widget-content">
            <div class="alert alert-warning">Instruction Set 2 of 3</div>
            <table class="table table-striped table-bordered table-highlight-head">
                <tbody>
                    <tr>
                        <td width="5%">1.</td>
                        <td width="95%">Add these two lines of code to your existing payment form(s):</td>
                    </tr>
                    <tr>
                        <td width="5%"></td>
                        <td width="95%"><textarea rows="4" class="form-control"><input type="hidden" name="customer_ip" id="idev_custom_x21" />
<script type="text/javascript" src="<?PHP echo $base_url; ?>/connect/customer_ip.php"></script></textarea></td>
    </tr>
    <tr>
    <td width="5%"></td>
    <td width="95%"><strong>EXAMPLE CODE</strong><br /><img src="https://www.idevlibrary.com/files/bt.png" style="border:none;" /></td>
    </tr>
    <tr>
    <td width="5%">2.</td>
    <td width="95%">Add this code to your Customer Object.</td>
    </tr>
    <tr>
    <td width="5%"></td>
    <td width="95%"><textarea rows="4" class="form-control">'customFields' => [
'customer_ip' => $_POST['customer_ip']
]
        </textarea></td>
                    </tr>
                    <tr>
                        <td width="5%"></td>
                        <td width="95%"><strong>EXAMPLE CODE</strong><br /><img src="https://www.idevlibrary.com/files/bt_code.png" style="border:none; box-shadow: 0 0 5px rgba(0, 0, 0, 0.3)" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="widget box">
        <div class="widget-header"><h4><i class="icon-shopping-cart"></i> <?PHP echo $cart_name; ?> Integration Settings</h4></div>
        <div class="widget-content">
            <div class="alert alert-warning">Instruction Set 3 of 3</div>
            <form class="form-horizontal row-border" method="post" action="setup.php">
            	<input name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>" type="hidden" />
                <div class="form-group">
                    <label class="col-md-3 control-label"><?PHP echo $cart_name; ?> Environment</label>
                    <div class="col-md-9">
                        <select name="bt_environment" class="form-control input-width-xlarge">
                            <option value="sandbox" <?PHP echo (html_output($bt_environment) != 'sandbox')?: 'selected'; ?>>Sandbox</option>
                            <option value="production" <?PHP echo (html_output($bt_environment) != 'production')?: 'selected'; ?>>Production</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label"><?PHP echo $cart_name; ?> Merchant ID</label>
                    <div class="col-md-9">
                        <input type="text" name="bt_merchant_id" class="form-control input-width-xlarge" value="<?PHP echo html_output($bt_merchant_id); ?>">
                        <div class="help-block">Found in your Braintree Dashboard.</div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label"><?PHP echo $cart_name; ?> Public Key</label>
                    <div class="col-md-9">
                        <input type="text" name="bt_public_key" class="form-control input-width-xlarge" value="<?PHP echo html_output($bt_public_key); ?>">
                        <div class="help-block">Found in your Braintree Dashboard.</div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label"><?PHP echo $cart_name; ?> Private Key</label>
                    <div class="col-md-9">
                        <input type="text" name="bt_private_key" class="form-control input-width-xlarge" value="<?PHP echo html_output($bt_private_key); ?>">
                        <div class="help-block">Found in your Braintree Dashboard.</div>
                    </div>
                </div>
                <div class="form-actions">
                    <input type="submit" value="Save Settings" class="btn btn-primary">
                </div>
                <input type="hidden" name="action" value="2">
                <input type="hidden" name="code" value="1">
                <input type="hidden" name="module" value="182">
                </form>
        </div>
    </div>

    <?PHP include("carts/notes.php"); ?>

<?PHP } ?>