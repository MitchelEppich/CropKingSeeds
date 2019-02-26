<?PHP
if (!defined('admin_includes')) { die(); }
include("session.check.php");
include_once $path . '/includes/integrations/aweber/aweber_helper.php';
include_once $path . '/includes/integrations/constant_contact/cc_helper.php';
include_once $path . '/includes/integrations/i_contact/ic_helper.php';
include_once $path . '/includes/integrations/get_response/gr_helper.php';
include_once $path . '/includes/integrations/mailchimp/mc_helper.php';
include_once $path . '/includes/integrations/campaign_monitor/cm_helper.php';
include_once $path . '/includes/integrations/active_campaign/ac_helper.php';
include_once $path . '/includes/integrations/vertical_response/vr_helper.php';
include_once $path . '/includes/integrations/convertkit/ck_helper.php';
include_once $path . '/includes/integrations/infusionsoft/is_helper.php';
include_once $path . '/includes/integrations/sendgrid/sg_helper.php';
?>
<div class="crumbs">
<ul id="breadcrumbs" class="breadcrumb">
<li><i class="icon-home"></i> <a href="dashboard.php">Dashboard</a></li>
<li> System Settings</li>
<li class="current"> <a href="setup.php?action=62" title="">Mailing List Integration</a></li>
</ul>
<?PHP include("templates/crumb_right.php"); ?>
</div>
<div class="page-header">
<div class="page-title"><h3>Mailing List Integration</h3><span>Automatically have new affiliate accounts added to your mailing list manager.</span></div>
<?PHP include("templates/stats.php"); ?>
</div>
<?PHP include("notifications.php"); ?>
<div class="tabbable tabbable-custom">
<ul class="nav nav-tabs">
<li <?php makeActiveTab(1);?>><a href="#tab_1_1" data-toggle="tab">Get Response</a></li>
<li <?php makeActiveTab(2);?>><a href="#tab_1_2" data-toggle="tab">Aweber</a></li>
<li <?php makeActiveTab(3);?>><a href="#tab_1_3" data-toggle="tab">Constant Contact</a></li>
<li <?php makeActiveTab(4);?>><a href="#tab_1_4" data-toggle="tab">iContact</a></li>
<li <?php makeActiveTab(5);?>><a href="#tab_1_5" data-toggle="tab">Mail Chimp</a></li>
<li <?php makeActiveTab(6);?>><a href="#tab_1_6" data-toggle="tab">Campaign Monitor</a></li>
<li <?php makeActiveTab(7);?>><a href="#tab_1_7" data-toggle="tab">Active Campaign</a></li>
<li <?php makeActiveTab(8);?>><a href="#tab_1_8" data-toggle="tab">Vertical Response</a></li>
<li <?php makeActiveTab(9);?>><a href="#tab_1_9" data-toggle="tab">ConvertKit</a></li>
<li <?php makeActiveTab(10);?>><a href="#tab_1_10" data-toggle="tab">Infusionsoft</a></li>
<li <?php makeActiveTab(11);?>><a href="#tab_1_11" data-toggle="tab">SendGrid</a></li>
</ul>
<div class="tab-content">
    <div class="tab-pane<?php makeActiveTab(1, 'no'); ?>" id="tab_1_1">
        <div class="col-md-12">
            <div class="widget box" style="margin-top:20px;">
                <div class="widget-header"><h4><i class="icon-envelope-alt"></i> GetResponse Mailing List Integration</h4></div>
                <div class="widget-content">
                    <?php
                        $iDevGR = new IdevGetResponseUtility($get_response_data['api_key']);
                    ?>
                    <form class="form-horizontal row-border" method="post" action="setup.php">
                    	<input name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>" type="hidden" />
                        <div class="form-group">
                            <label class="col-md-3 control-label"><img src="images/mailinglists/getresponse.png" style="height:30px; width:155px; border:0px; margin-bottom:10px;" /></label>
                            <div class="col-md-2" style="padding-top:5px;">
                                <select class="form-control" name="get_response_data[enabled]">
                                    <option value="0" <?php if ($get_response_data['enabled'] == 0) { ?> selected="selected" <?php } ?>>Disabled</option>
                                    <option value="1" <?php if ($get_response_data['enabled'] == 1) { ?> selected="selected" <?php } ?>>Enabled</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-3 control-label">API Key</label>
                            <div class="col-md-4">
                                <input type="text" name="get_response_data[api_key]" class="form-control" value="<?PHP echo $get_response_data['api_key']; ?>" />
                                <span class="help-block"><a href="http://apidocs.getresponse.com/en/article/api-key" class="btn btn-sm" target="_blank" rel="nofollow">Get Your API Key</a></span>
                            </div>
                        </div>
                        <?php 
                        if($get_response_data['enabled'] == 0) {
                        }
                        elseif($get_response_data['enabled'] == 1 && !$iDevGR->checkValid()) {
                        ?>
                        <div class="form-group">
                            <label class="col-md-12 control-label">Invalid API details</label>
                        </div>
                        <?php
                        }
                        elseif($get_response_data['enabled'] == 1 && $iDevGR->checkValid() ) {
                        ?>        
                        <div class="form-group">
                            <label class="col-md-3 control-label">GetResonse Campaigns</label>
                            <div class="col-md-4">
                            <?php 

                            $gr_lists = $iDevGR->getLists();
                            if(!empty($gr_lists) && !isset($gr_lists['error'])) {
                                foreach($gr_lists as $campaign_id => $campaign_data) {
                                    if( !empty($get_response_data['list_ids']) && in_array( $campaign_id, $get_response_data['list_ids']) ) {
                                            $checked = 'checked="checked"';
                                    }
                                    else {
                                        $checked = "";
                                    }
                                    echo "<label for='icontact_data_{$campaign_id}'><input type='checkbox' class='checkbox-inline' value='{$campaign_id}' name='get_response_data[list_ids][]' $checked> {$campaign_data['name']}</label><br />";
                                }
                            }
                            ?>
                            </div>
                        </div>
                        <?php } ?>
                        <div class="form-actions">
                            <button href="#getresponse" target="_blank" class="btn btn-success btn-sm" data-toggle="modal">Video Tutorial</button> <button class="btn btn-primary btn-sm">Save Settings</button>
                        </div>
                        <input type="hidden" name="action" value="62">
                        <input type="hidden" name="tab" value="1">
                        <input type="hidden" name="cfg" value="get_response_settings">
                    </form>
                </div>
            </div>
        </div>
<div class="modal fade" id="getresponse">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
<h4 class="modal-title">GetResponse Integration</h4>
</div>
<div class="modal-body">
<div>Integrate iDevAffiliate with GetResponse so all new accounts are automatically added to your GetResponse mailing list(s).</div>
<br />
<div class="video-container">
<iframe src="//player.vimeo.com/video/124188105" frameborder="0" width="560" height="315" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>
    </div> 
    <div class="tab-pane<?php makeActiveTab(2, 'no'); ?>" id="tab_1_2">
        <div class="col-md-12">
            <div class="widget box" style="margin-top:20px;">
                <div class="widget-header"><h4><i class="icon-envelope-alt"></i> Aweber Mailing List Integration</h4></div>
                <div class="widget-content">
                    <?php  
                    $link = '<a target="_blank" href="https://auth.aweber.com/1.0/oauth/authorize_app/0bfe4e89" class="btn btn-sm">Get Authorization Code</a>';
                    $link2 = '<a target="_blank" href="https://auth.aweber.com/1.0/oauth/authorize_app/0bfe4e89">Here</a>';
                    $error_code = "";
                    $aweber_util = new IdevAweberUtility($getaweber);
                    //echo '<pre>' . print_r($getaweber) . '</pre>';
                    //var_dump($aweber_util->authorized());
                    if($getaweber['oauth_code'] != '') {
                        if(!$aweber_util->authorized()) {
                            $ret = $aweber_util->authorize();
                            if($ret != '') {
                                //authorize error
                                //echo $ret;
                                $error_code = "Invalid Api Key. Please authorize again $link2.";
                            }
                            else {
                                $getaweber = $aweber_util->getData();
                            }
                        }
                    }
                    if($error_code != '') {
                        $desc = $error_code;
                    }
                    else {
                        $desc = $link;
                    }
                    ?>
                    <form class="form-horizontal row-border" method="post" action="setup.php">
                    	<input name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>" type="hidden" />
                        <div class="form-group">
                            <label class="col-md-3 control-label"><img src="images/mailinglists/aweber.png" style="height:30px; width:155px; border:0px; margin-bottom:10px;" /></label>
                            <div class="col-md-2" style="padding-top:5px;">
                                <select class="form-control" name="aweber_data[enabled]">
                                    <option value="0" <?php if ($getaweber['enabled'] == 0) { ?> selected="selected" <?php } ?>>Disabled</option>
                                    <option value="1" <?php if ($getaweber['enabled'] == 1) { ?> selected="selected" <?php } ?>>Enabled</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-3 control-label">Authorization Code</label>
                            <div class="col-md-4">
                                <input type="text" name="aweber_data[oauth_code]" class="form-control" value="<?PHP echo $getaweber['oauth_code']; ?>" />
                                <span class="help-block"><?php echo $desc; ?></span>
                            </div>
                        </div>
                        <?php if( $aweber_util->authorized() ): ?>
                        <div class="form-group">
                            <label class="col-md-3 control-label">Aweber Lists</label>
                            <div class="col-md-4">
                                <?php
                                $lists = $aweber_util->getList();
                                if(is_array($lists) && !empty($lists)) {
                                    //echo "<pre>"; print_r($lists); echo "</pre>";
                                    foreach($lists as $key => $name):
                                        if( !empty($getaweber['list_ids']) && in_array($key, $getaweber['list_ids'])) {
                                            $checked = 'checked="checked"';
                                        }
                                        else {
                                            $checked = "";
                                        }
                                        echo "<label for='aweber_list_$key'><input type='checkbox' class='checkbox-inline' value='$key' name='aweber_data[list_ids][]' $checked> $name</label><br />";
                                    endforeach;
                                } else {
                                    echo "Sorry no lists found.";
                                }
                                ?>
                            </div>
                        </div>
                        <?php endif; ?>
                        <div class="form-actions">
                            <button href="#aweber" target="_blank" class="btn btn-success btn-sm" data-toggle="modal">Video Tutorial</button> <button class="btn btn-primary btn-sm">Save Settings</button>
						</div>
                        <input type="hidden" name="aweber_data[consumer_key]" value="<?php echo $getaweber['consumer_key']; ?>">
                        <input type="hidden" name="aweber_data[consumer_secret]" value="<?php echo $getaweber['consumer_secret']; ?>">
                        <input type="hidden" name="aweber_data[access_key]" value="<?php echo $getaweber['access_key']; ?>">
                        <input type="hidden" name="aweber_data[access_secret]" value="<?php echo $getaweber['access_secret']; ?>">
                        <input type="hidden" name="action" value="62">
                        <input type="hidden" name="tab" value="2">
                        <input type="hidden" name="cfg" value="aweber_settings">
                    </form>
                </div>
            </div>
        </div>

<div class="modal fade" id="aweber">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
<h4 class="modal-title">Aweber Integration</h4>
</div>
<div class="modal-body">
<div>Integrate iDevAffiliate with Aweber so all new accounts are automatically added to your Aweber mailing list(s).</div>
<br />
<div class="video-container">
<iframe src="//player.vimeo.com/video/124189207" frameborder="0" width="560" height="315" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>
    </div>    
    <div class="tab-pane<?php makeActiveTab(3, 'no'); ?>" id="tab_1_3">
        <div class="col-md-12">
            <div class="widget box" style="margin-top:20px;">
                <div class="widget-header"><h4><i class="icon-envelope-alt"></i> Constant Contact Mailing List Integration</h4></div>
                <div class="widget-content">
                    <?php
                        $iDevCC = new IdevConstantContactUtility($constant_contact_data);
                    ?>
                    <form class="form-horizontal row-border" method="post" action="setup.php">
                    	<input name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>" type="hidden" />
                        <div class="form-group">
                            <label class="col-md-3 control-label"><img src="images/mailinglists/constantcontact.png" style="height:30px; width:155px; border:0px; margin-bottom:10px;" /></label>
                            <div class="col-md-2" style="padding-top:5px;">
                                <select class="form-control" name="constant_contact_data[enabled]">
                                    <option value="0" <?php if ($constant_contact_data['enabled'] == 0) { ?> selected="selected" <?php } ?>>Disabled</option>
                                    <option value="1" <?php if ($constant_contact_data['enabled'] == 1) { ?> selected="selected" <?php } ?>>Enabled</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-3 control-label">Username</label>
                            <div class="col-md-4">
                                <input type="text" name="constant_contact_data[username]" class="form-control" value="<?PHP echo $constant_contact_data['username']; ?>" />
                                <span class="help-block">Enter your Constant Contact Username</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-3 control-label">Password</label>
                            <div class="col-md-4">
                                <input type="password" name="constant_contact_data[password]" class="form-control" value="<?PHP echo $constant_contact_data['password']; ?>" />
                                <span class="help-block">Enter your Constant Contact Password</span>
                            </div>
                        </div>
                        <?php
                            if($constant_contact_data['username'] != '' && $constant_contact_data['password'] != '') {
                        ?>
                        <div class="form-group">
                            <label class="col-md-3 control-label">Constant Contact Lists</label>
                            <div class="col-md-4">
                                <?php 
                                $cc_lists = $iDevCC->getList();
                                //$cc_lists = array();
                                if( is_array($cc_lists) && !empty($cc_lists) && !isset($cc_lists['error'])) {
                                    //echo "<pre>"; print_r($lists); echo "</pre>";
                                    foreach($cc_lists as $key => $value):
                                        if( !empty($constant_contact_data['list_ids']) && in_array( $value['id'], $constant_contact_data['list_ids']) ) {
                                            $checked = 'checked="checked"';
                                        }
                                        else {
                                            $checked = "";
                                        }
                                        //echo "<option value='{$value['id']}' ". selected($list_id,$value['id'],false) .">{$value['Name']}</option>";
                                        echo "<label for='constant_contact_data_{$value['id']}'><input type='checkbox' class='checkbox-inline' value='{$value['id']}' name='constant_contact_data[list_ids][]' $checked> {$value['Name']}</label><br />";
                                    endforeach;
                                } elseif(isset ($cc_lists['error'])) {
                                    if($cc_lists['error'] == 'Invalid status code 401')
                                        echo "Invalid username or password.";
                                    else
                                        echo $cc_lists['error'];
                                }
                                else {
                                    echo "No lists found.";
                                }
                                ?>
                            </div>
                        </div>
                            <?php } ?>
                        <div class="form-actions">
                            <button href="#constantcontact" target="_blank" class="btn btn-success btn-sm" data-toggle="modal">Video Tutorial</button> <button class="btn btn-primary btn-sm">Save Settings</button>
                        </div>
                        <input type="hidden" name="action" value="62">
                        <input type="hidden" name="tab" value="3">
                        <input type="hidden" name="cfg" value="constant_settings">
                    </form>
                </div>
            </div>
        </div>
<div class="modal fade" id="constantcontact">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
<h4 class="modal-title">Constant Contact Integration</h4>
</div>
<div class="modal-body">
<div>Integrate iDevAffiliate with Constant Contact so all new accounts are automatically added to your Constant Contact mailing list(s).</div>
<br />
<div class="video-container">
<iframe src="//player.vimeo.com/video/124252533" frameborder="0" width="560" height="315" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>
    </div> 
    <div class="tab-pane<?php makeActiveTab(4, 'no'); ?>" id="tab_1_4">
        <div class="col-md-12">
            <div class="widget box" style="margin-top:20px;">
                <div class="widget-header"><h4><i class="icon-envelope-alt"></i> iContact Mailing List Integration</h4></div>
                <div class="widget-content">
                    <?php
                        $iDevIC = new IdevIContactUtility($i_contact_data);
                        $cc_ret = '';
                    ?>
                    <form class="form-horizontal row-border" method="post" action="setup.php">
                    	<input name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>" type="hidden" />
                        <div class="form-group">
                            <label class="col-md-3 control-label"><img src="images/mailinglists/icontact.png" style="height:30px; width:155px; border:0px; margin-bottom:10px;" /></label>
                            <div class="col-md-2" style="padding-top:5px;">
                                <select class="form-control" name="i_contact_data[enabled]">
                                    <option value="0" <?php if ($i_contact_data['enabled'] == 0) { ?> selected="selected" <?php } ?>>Disabled</option>
                                    <option value="1" <?php if ($i_contact_data['enabled'] == 1) { ?> selected="selected" <?php } ?>>Enabled</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-3 control-label">App ID</label>
                            <div class="col-md-4">
                                <input type="text" name="i_contact_data[app_id]" class="form-control" value="<?PHP echo $i_contact_data['app_id']; ?>" />
                                <span class="help-block">Enter your iContact Application ID</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-3 control-label">iContact Username</label>
                            <div class="col-md-4">
                                <input type="text" name="i_contact_data[api_username]" class="form-control" value="<?PHP echo $i_contact_data['api_username']; ?>" />
                                <span class="help-block">Enter your iContact Account Username</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-3 control-label">API Password</label>
                            <div class="col-md-4">
                                <input type="password" name="i_contact_data[api_password]" class="form-control" value="<?PHP echo $i_contact_data['api_password']; ?>" />
                                <span class="help-block">Enter your iContact API Password</span>
                            </div>
                        </div>
                        <?php 
                        if($i_contact_data['enabled'] == 1 && !$iDevIC->validApi()) {
                        ?>
                        <div class="form-group">
                            <label class="col-md-12 control-label">Invalid API details</label>
                        </div>
                        <?php
                        }
                        elseif($i_contact_data['enabled'] == 0) {
                        }
                        else {
                        ?>        
                        <div class="form-group">
                            <label class="col-md-3 control-label">iContact Lists</label>
                            <div class="col-md-4">
                                <?php 
                                $ic_lists = $iDevIC->getLists();
                                if( is_array($ic_lists) && !empty($ic_lists) && !isset($ic_lists['error'])) {
                                    //echo "<pre>"; print_r($lists); echo "</pre>";
                                    foreach($ic_lists as $key => $list):
                                        if( !empty($i_contact_data['list_ids']) && in_array( $list->listId, $i_contact_data['list_ids']) ) {
                                            $checked = 'checked="checked"';
                                        }
                                        else {
                                            $checked = "";
                                        }
                                        echo "<label for='icontact_data_{$list->listId}'><input type='checkbox' class='checkbox-inline' value='{$list->listId}' name='i_contact_data[list_ids][]' $checked> {$list->name}</label><br />";
                                    endforeach;
                                } elseif(isset ($ic_lists['error'])) {
                                    echo $ic_lists['error'];
                                }
                                else {
                                    echo "No lists found.";
                                }
                                ?>
                            </div>
                        </div>
                        <?php } ?>
                        <div class="form-actions">
                           <a href="http://www.icontact.com/developerportal/documentation/register-your-app/" target="_blank" class="btn btn-danger btn-sm">Register Your App</a> 
                            <button href="#icontact" target="_blank" class="btn btn-success btn-sm" data-toggle="modal">Video Tutorial</button> <button class="btn btn-primary btn-sm">Save Settings</button>
                        </div>
                        <input type="hidden" name="action" value="62">
                        <input type="hidden" name="tab" value="4">
                        <input type="hidden" name="cfg" value="icontact_settings">
                    </form>
                </div>
            </div>
        </div>
<div class="modal fade" id="icontact">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
<h4 class="modal-title">iContact Integration</h4>
</div>
<div class="modal-body">
<div>Integrate iDevAffiliate with iContact so all new accounts are automatically added to your iContact mailing list(s).</div>
<br />
<div class="video-container">
<iframe src="//player.vimeo.com/video/124256276" frameborder="0" width="560" height="315" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>		
    </div> 
    <div class="tab-pane<?php makeActiveTab(5, 'no'); ?>" id="tab_1_5">
        <div class="col-md-12">
            <div class="widget box" style="margin-top:20px;">
                <div class="widget-header"><h4><i class="icon-envelope-alt"></i> MailChimp Mailing List Integration</h4></div>
                <div class="widget-content">
                    <form class="form-horizontal row-border" method="post" action="setup.php">
                    	<input name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>" type="hidden" />
                        <div class="form-group">
                            <label class="col-md-3 control-label"><img src="images/mailinglists/mailchimp.png" style="height:30px; width:155px; border:0px; margin-bottom:10px;" /></label>
                            <div class="col-md-2" style="padding-top:5px;">
                                <select class="form-control" name="mailchimp_data[enabled]">
                                    <option value="0" <?php if ($mailchimp_data['enabled'] == 0) { ?> selected="selected" <?php } ?>>Disabled</option>
                                    <option value="1" <?php if ($mailchimp_data['enabled'] == 1) { ?> selected="selected" <?php } ?>>Enabled</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-3 control-label">MailChimp API Key</label>
                            <div class="col-md-4">
                                <input type="text" name="mailchimp_data[api_key]" class="form-control" value="<?php echo $mailchimp_data['api_key']; ?>" />
                            </div>
                        </div>
                        <?php
                        $iDevMC = new IdevMailChimpUtility($mailchimp_data['api_key']);
                        ?>
                        <?php 
                        if($mailchimp_data['enabled'] == 1 && !$iDevMC->checkApiKey()) {
                        ?>
                        <div class="form-group">
                            <label class="col-md-12 control-label">API Key format is invalid</label>
                        </div>
                        <?php
                        }
                        elseif ($mailchimp_data['enabled'] == 1 && !$iDevMC->checkValid()) {
                        ?>
                        <div class="form-group">
                            <label class="col-md-12 control-label">Invalid API details</label>
                        </div>
                        <?php
                        }
                        elseif($mailchimp_data['enabled'] == 0) {
                        }
                        else {
                        ?>        
                        <div class="form-group">
                            <label class="col-md-3 control-label">MailChimp Lists</label>
                            <div class="col-md-4">
                                <?php 
                                $mc_lists = $iDevMC->getLists();
                                if( is_array($mc_lists) && !empty($mc_lists) ) {
                                    //echo "<pre>"; print_r($mc_lists); echo "</pre>";
                                    //die;
                                    foreach($mc_lists['data'] as $key => $list):
                                        if( !empty($mailchimp_data['list_ids']) && in_array( $list['id'], $mailchimp_data['list_ids']) ) {
                                            $checked = 'checked="checked"';
                                        }
                                        else {
                                            $checked = "";
                                        }
                                        echo "<label for='mailchimp_data_{$list['id']}'><input type='checkbox' class='checkbox-inline' value='{$list['id']}' name='mailchimp_data[list_ids][]' $checked> {$list['name']}</label><br />";
                                    endforeach;
                                }
                                else {
                                    echo "No lists found.";
                                }
                                ?>
                            </div>
                        </div>
                        <?php } ?>
                        <div class="form-actions">
                            <button href="#mailchimp" target="_blank" class="btn btn-success btn-sm" data-toggle="modal">Video Tutorial</button> <button class="btn btn-primary btn-sm">Save Settings</button>
                        </div>
                        <input type="hidden" name="action" value="62">
                        <input type="hidden" name="cfg" value="116">
                        <input type="hidden" name="tab" value="5">
                    </form>
                </div>
            </div>
        </div>
<div class="modal fade" id="mailchimp">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
<h4 class="modal-title">MailChimp Integration</h4>
</div>
<div class="modal-body">
<div>Integrate iDevAffiliate with MailChimp so all new accounts are automatically added to your MailChimp mailing list(s).</div>
<br />
<div class="video-container">
<iframe src="//player.vimeo.com/video/124240376" frameborder="0" width="560" height="315" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>
    </div>
	<div class="tab-pane<?php makeActiveTab(6, 'no'); ?>" id="tab_1_6">
        <div class="col-md-12">
            <div class="widget box" style="margin-top:20px;">
                <div class="widget-header"><h4><i class="icon-envelope-alt"></i> Campaign Monitor Mailing List Integration</h4></div>
                <div class="widget-content">
                    <form class="form-horizontal row-border" method="post" action="setup.php">
                    	<input name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>" type="hidden" />
                        <div class="form-group">
                            <label class="col-md-3 control-label"><img src="images/mailinglists/campaignmonitor.jpg" style="height:30px; width:155px; border:0px; margin-bottom:10px;" /></label>
                            <div class="col-md-2" style="padding-top:5px;">
                                <select class="form-control" name="campaign_monitor_data[enabled]">
                                    <option value="0" <?php if ($campaign_monitor_data['enabled'] == 0) { ?> selected="selected" <?php } ?>>Disabled</option>
                                    <option value="1" <?php if ($campaign_monitor_data['enabled'] == 1) { ?> selected="selected" <?php } ?>>Enabled</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-3 control-label">Campaign Monitor API Key</label>
                            <div class="col-md-4">
                                <input type="text" name="campaign_monitor_data[api_key]" class="form-control" value="<?php echo $campaign_monitor_data['api_key']; ?>" />
                            </div>
                        </div>
						<div class="form-group">
                            <label class="col-md-3 control-label">Campaign Monitor Client ID</label>
                            <div class="col-md-4">
                                <input type="text" name="campaign_monitor_data[client_id]" class="form-control" value="<?php echo $campaign_monitor_data['client_id']; ?>" />
                            </div>
                        </div>
                        <?php
                        $iDevCM = new IdevCampaignMonitorUtility($campaign_monitor_data['api_key'], $campaign_monitor_data['client_id']);
                        ?>
                        <?php 
                        if($campaign_monitor_data['enabled'] == 1 && !$iDevCM->checkApiKey()) {
                        ?>
                        <div class="form-group">
                            <label class="col-md-12 control-label">API Key / Client ID is blank</label>
                        </div>
                        <?php
                        }
                        elseif ($campaign_monitor_data['enabled'] == 1 && !$iDevCM->checkValid()) {
                        ?>
                        <div class="form-group">
                            <label class="col-md-12 control-label">Invalid API details</label>
                        </div>
                        <?php
                        }
                        elseif($campaign_monitor_data['enabled'] == 0) {
                        }
                        else {
                        ?>        
                        <div class="form-group">
                            <label class="col-md-3 control-label">Campaign Monitor Lists</label>
                            <div class="col-md-4">
                                <?php 
                                $cm_lists = $iDevCM->getLists()->response;
                                if( is_array($cm_lists) && !empty($cm_lists) ) {
                                    foreach($cm_lists as $list):
                                        if( !empty($campaign_monitor_data['list_ids']) && in_array( $list->ListID, $campaign_monitor_data['list_ids']) ) {
                                            $checked = 'checked="checked"';
                                        }
                                        else {
                                            $checked = "";
                                        }
                                        echo "<label for='campaign_monitor_data{$list->ListID}'><input type='checkbox' class='checkbox-inline' value='{$list->ListID}' name='campaign_monitor_data[list_ids][]' $checked> {$list->Name}</label><br />";
                                    endforeach;
                                }
                                else {
                                    echo "No lists found.";
                                }
                                ?>
                            </div>
                        </div>
                        <?php } ?>
                        <div class="form-actions">
                            <button class="btn btn-primary btn-sm">Save Settings</button>
                        </div>
                        <input type="hidden" name="action" value="62">
                        <input type="hidden" name="cfg" value="campaign_monitor_settings">
                        <input type="hidden" name="tab" value="6">
                    </form>
                </div>
            </div>
        </div>
    </div>
	<div class="tab-pane<?php makeActiveTab(7, 'no'); ?>" id="tab_1_7">
        <div class="col-md-12">
            <div class="widget box" style="margin-top:20px;">
                <div class="widget-header"><h4><i class="icon-envelope-alt"></i> Active Campaign Mailing List Integration</h4></div>
                <div class="widget-content">
                    <form class="form-horizontal row-border" method="post" action="setup.php">
                    	<input name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>" type="hidden" />
                        <div class="form-group">
                            <label class="col-md-3 control-label"><img src="images/mailinglists/activecampaign.jpg" style="height:30px; width:155px; border:0px; margin-bottom:10px;" /></label>
                            <div class="col-md-2" style="padding-top:5px;">
                                <select class="form-control" name="active_campaign_data[enabled]">
                                    <option value="0" <?php if ($active_campaign_data['enabled'] == 0) { ?> selected="selected" <?php } ?>>Disabled</option>
                                    <option value="1" <?php if ($active_campaign_data['enabled'] == 1) { ?> selected="selected" <?php } ?>>Enabled</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-3 control-label">Active Campaign API URL</label>
                            <div class="col-md-4">
                                <input type="text" name="active_campaign_data[api_url]" class="form-control" value="<?php echo $active_campaign_data['api_url']; ?>" />
                            </div>
                        </div>
						<div class="form-group">
                            <label class="col-md-3 control-label">Active Campaign API Key</label>
                            <div class="col-md-4">
                                <input type="text" name="active_campaign_data[api_key]" class="form-control" value="<?php echo $active_campaign_data['api_key']; ?>" />
                            </div>
                        </div>
                        <?php
                        $iDevAC = new IdevActiveCampaignUtility($active_campaign_data['api_url'], $active_campaign_data['api_key']);
                        ?>
                        <?php 
                        if($active_campaign_data['enabled'] == 1 && !$iDevAC->checkApiKey()) {
                        ?>
                        <div class="form-group">
                            <label class="col-md-12 control-label">API URL / API Key is blank</label>
                        </div>
                        <?php
                        }
                        elseif ($active_campaign_data['enabled'] == 1 && !$iDevAC->checkValid()) {
                        ?>
                        <div class="form-group">
                            <label class="col-md-12 control-label">Invalid API details</label>
                        </div>
                        <?php
                        }
                        elseif($active_campaign_data['enabled'] == 0) {
                        }
                        else {
                        ?>        
                        <div class="form-group">
                            <label class="col-md-3 control-label">Active Campaign Lists</label>
                            <div class="col-md-4">
                                <?php 
                                $ac_lists = $iDevAC->getLists();
                                if( is_object($ac_lists) && !empty($ac_lists) ) {
                                    foreach($ac_lists as $list):
										if (isset($list->id)) {
											if( !empty($active_campaign_data['list_ids']) && in_array( $list->id, $active_campaign_data['list_ids']) ) {
												$checked = 'checked="checked"';
											}
											else {
												$checked = "";
											}
											echo "<label for='active_campaign_data{$list->id}'><input type='checkbox' class='checkbox-inline' value='{$list->id}' name='active_campaign_data[list_ids][]' $checked> {$list->name}</label><br />";
										}
                                    endforeach;
                                }
                                else {
                                    echo "No lists found.";
                                }
                                ?>
                            </div>
                        </div>
                        <?php } ?>
                        <div class="form-actions">
                            <button class="btn btn-primary btn-sm">Save Settings</button>
                        </div>
                        <input type="hidden" name="action" value="62">
                        <input type="hidden" name="cfg" value="active_campaign_settings">
                        <input type="hidden" name="tab" value="7">
                    </form>
                </div>
            </div>
        </div>
    </div>
	<div class="tab-pane<?php makeActiveTab(8, 'no'); ?>" id="tab_1_8">
        <div class="col-md-12">
            <div class="widget box" style="margin-top:20px;">
                <div class="widget-header"><h4><i class="icon-envelope-alt"></i> Vertical Response Mailing List Integration</h4></div>
                <div class="widget-content">
                    <form class="form-horizontal row-border" method="post" action="setup.php">
                    	<input name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>" type="hidden" />
                        <div class="form-group">
                            <label class="col-md-3 control-label"><img src="images/mailinglists/verticalresponse.png" style="height:30px; width:155px; border:0px; margin-bottom:10px;" /></label>
                            <div class="col-md-2" style="padding-top:5px;">
                                <select class="form-control" name="vertical_response_data[enabled]">
                                    <option value="0" <?php if ($vertical_response_data['enabled'] == 0) { ?> selected="selected" <?php } ?>>Disabled</option>
                                    <option value="1" <?php if ($vertical_response_data['enabled'] == 1) { ?> selected="selected" <?php } ?>>Enabled</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-3 control-label">Vertical Response API Key</label>
                            <div class="col-md-4">
                                <input type="text" name="vertical_response_data[api_key]" class="form-control" value="<?php echo $vertical_response_data['api_key']; ?>" />
                            </div>
                        </div>
						<div class="form-group">
                            <label class="col-md-3 control-label">Vertical Response API Secret</label>
                            <div class="col-md-4">
                                <input type="text" name="vertical_response_data[api_secret]" class="form-control" value="<?php echo $vertical_response_data['api_secret']; ?>" />
                            </div>
                        </div>
						<div class="form-group" <?php if($vertical_response_data['api_key'] == '' || $vertical_response_data['api_secret'] == '') { ?>style="display: none;"<?php } ?>>
                            <label class="col-md-3 control-label">Vertical Response Access Token</label>
                            <div class="col-md-4">
                                <input type="text" name="vertical_response_data[access_token]" class="form-control" value="<?php echo $vertical_response_data['access_token'] ; ?>" />
								<span class="help-block"><a target="_blank" href="https://vrapi.verticalresponse.com/api/v1/oauth/authorize?client_id=<?php echo $vertical_response_data['api_key']; ?>&redirect_uri=<?php echo $base_url; ?>/includes/integrations/vertical_response/access_token.php" class="btn btn-sm">Get Access Token</a></span>
                            </div>
                        </div>
                        <?php
                        $iDevVR = new IdevVerticalResponseUtility($vertical_response_data['api_key'], $vertical_response_data['api_secret'], (isset($vertical_response_data['access_token']) ? $vertical_response_data['access_token'] : ''));
                        ?>
                        <?php 
                        if($vertical_response_data['enabled'] == 1 && !$iDevVR->checkApiKey()) {
                        ?>
                        <div class="form-group">
                            <label class="col-md-12 control-label">API Key / API Secret is blank</label>
                        </div>
                        <?php
                        }
                        elseif ($vertical_response_data['enabled'] == 1 && !$iDevVR->checkValid()) {
                        ?>
                        <div class="form-group">
                            <label class="col-md-12 control-label">Invalid Access token</label>
                        </div>
                        <?php
                        }
                        elseif($vertical_response_data['enabled'] == 0) {
                        }
                        else {
                        ?>        
                        <div class="form-group">
                            <label class="col-md-3 control-label">Vertical Response Lists</label>
                            <div class="col-md-4">
                                <?php 
                                $vr_lists = $iDevVR->getLists();
                                if( is_object($vr_lists) && !empty($vr_lists) ) {
                                    foreach($vr_lists->items as $list):
										if( !empty($vertical_response_data['list_ids']) && in_array( $list->response->attributes['id'], $vertical_response_data['list_ids']) ) {
											$checked = 'checked="checked"';
										}
										else {
											$checked = "";
										}
										echo "<label for='vertical_response_data{$list->response->attributes['id']}'><input type='checkbox' class='checkbox-inline' value='{$list->response->attributes['id']}' name='vertical_response_data[list_ids][]' $checked> {$list->response->attributes['name']}</label><br />";
                                    endforeach;
                                }
                                else {
                                    echo "No lists found.";
                                }
                                ?>
                            </div>
                        </div>
                        <?php } ?>
                        <div class="form-actions">
                            <button class="btn btn-primary btn-sm">Save Settings</button>
                        </div>
                        <input type="hidden" name="action" value="62">
                        <input type="hidden" name="cfg" value="vertical_response_settings">
                        <input type="hidden" name="tab" value="8">
                    </form>
                </div>
            </div>
        </div>
    </div>
	
	
	
	
	<div class="tab-pane<?php makeActiveTab(9, 'no'); ?>" id="tab_1_9">
        <div class="col-md-12">
            <div class="widget box" style="margin-top:20px;">
                <div class="widget-header"><h4><i class="icon-envelope-alt"></i> ConvertKit Mailing List Integration</h4></div>
                <div class="widget-content">
                    <form class="form-horizontal row-border" method="post" action="setup.php">
                    	<input name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>" type="hidden" />
                        <div class="form-group">
                            <label class="col-md-3 control-label"><img src="images/mailinglists/convertkit.jpg" style="height:30px; width:155px; border:0px; margin-bottom:10px;" /></label>
                            <div class="col-md-2" style="padding-top:5px;">
                                <select class="form-control" name="convertkit_data[enabled]">
                                    <option value="0" <?php if ($convertkit_data['enabled'] == 0) { ?> selected="selected" <?php } ?>>Disabled</option>
                                    <option value="1" <?php if ($convertkit_data['enabled'] == 1) { ?> selected="selected" <?php } ?>>Enabled</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-3 control-label">ConvertKit API Key</label>
                            <div class="col-md-4">
                                <input type="text" name="convertkit_data[api_key]" class="form-control" value="<?php echo $convertkit_data['api_key']; ?>" />
                            </div>
                        </div>
						<div class="form-group">
                            <label class="col-md-3 control-label">ConvertKit API Secret</label>
                            <div class="col-md-4">
                                <input type="text" name="convertkit_data[api_secret]" class="form-control" value="<?php echo $convertkit_data['api_secret']; ?>" />
                            </div>
                        </div>
                        <?php
                        $iDevCK = new IdevConvertKitUtility($convertkit_data['api_key'], $convertkit_data['api_secret']);
                        ?>
                        <?php 
                        if($convertkit_data['enabled'] == 1 && !$iDevCK->checkApiKey()) {
                        ?>
                        <div class="form-group">
                            <label class="col-md-12 control-label">API Key / API Secret is blank</label>
                        </div>
                        <?php
                        }
                        elseif ($convertkit_data['enabled'] == 1 && !$iDevCK->checkValid()) {
                        ?>
                        <div class="form-group">
                            <label class="col-md-12 control-label">Invalid API details</label>
                        </div>
                        <?php
                        }
                        elseif($convertkit_data['enabled'] == 0) {
                        }
                        else {
                        ?>        
                        <div class="form-group">
                            <label class="col-md-3 control-label">ConvertKit Lists</label>
                            <div class="col-md-4">
                                <?php 
                                $ck_lists = $iDevCK->getLists();
                                if( is_array($ck_lists->forms) && !empty($ck_lists->forms) ) {
                                    foreach($ck_lists->forms as $list):
										if (isset($list->id)) {
											if( !empty($convertkit_data['list_ids']) && in_array( $list->id, $convertkit_data['list_ids']) ) {
												$checked = 'checked="checked"';
											}
											else {
												$checked = "";
											}
											echo "<label for='convertkit_data{$list->id}'><input type='checkbox' class='checkbox-inline' value='{$list->id}' name='convertkit_data[list_ids][]' $checked> {$list->name}</label><br />";
										}
                                    endforeach;
                                }
                                else {
                                    echo "No lists found.";
                                }
                                ?>
                            </div>
                        </div>
                        <?php } ?>
                        <div class="form-actions">
                            <button class="btn btn-primary btn-sm">Save Settings</button>
                        </div>
                        <input type="hidden" name="action" value="62">
                        <input type="hidden" name="cfg" value="convertkit_settings">
                        <input type="hidden" name="tab" value="9">
                    </form>
                </div>
            </div>
        </div>
    </div>
	<div class="tab-pane<?php makeActiveTab(10, 'no'); ?>" id="tab_1_10">
        <div class="col-md-12">
            <div class="widget box" style="margin-top:20px;">
                <div class="widget-header"><h4><i class="icon-envelope-alt"></i> Infusionsoft Mailing List Integration</h4></div>
                <div class="widget-content">
                    <form class="form-horizontal row-border" method="post" action="setup.php">
                    	<input name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>" type="hidden" />
                        <div class="form-group">
                            <label class="col-md-3 control-label"><img src="images/mailinglists/infusionsoft.jpg" style="height:30px; width:155px; border:0px; margin-bottom:10px;" /></label>
                            <div class="col-md-2" style="padding-top:5px;">
                                <select class="form-control" name="infusionsoft_data[enabled]">
                                    <option value="0" <?php if ($infusionsoft_data['enabled'] == 0) { ?> selected="selected" <?php } ?>>Disabled</option>
                                    <option value="1" <?php if ($infusionsoft_data['enabled'] == 1) { ?> selected="selected" <?php } ?>>Enabled</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-md-3 control-label">Client ID</label>
                            <div class="col-md-4">
                                <input type="text" name="infusionsoft_data[api_key]" class="form-control" value="<?PHP echo isset($infusionsoft_data['api_key']) ? $infusionsoft_data['api_key'] : ''; ?>" />
                                <span class="help-block"><a href="https://keys.developer.infusionsoft.com/apps/mykeys" class="btn btn-sm" target="_blank" rel="nofollow">Get Your Client ID</a></span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-md-3 control-label">Secret ID</label>
                            <div class="col-md-4">
                                <input type="text" name="infusionsoft_data[api_secret]" class="form-control" value="<?PHP echo isset($infusionsoft_data['api_secret']) ? $infusionsoft_data['api_secret'] : ''; ?>" />
                            </div>
                        </div>

                        <div class="form-group">
							<?php 
								if (isset($_REQUEST['remove_token'])) {
									$infusionsoft_data['access_token'] = '';
									$data = serialize($infusionsoft_data);
									$st = $db->prepare("UPDATE `idevaff_newsletter_addons` SET meta_value=? where meta_key='infusionsoft'");
								}
							?>
							<?PHP if (isset($infusionsoft_data['access_token'])) { ?>
							<div class="col-md-12"><div class="alert alert-danger"><strong>Access Token Is Set</strong><br /><br /><a href="setup.php?action=62&tab=10&remove_token=true" class="btn btn-danger">Remove Access Token</a></div></div>
							<?PHP } ?>
                            <?PHP if (!isset($infusionsoft_data['access_token'])) { ?>
							<div class="col-md-12">To get the access token, click <strong>Get Access Token</strong>. Once you allow the token to be set (and close the Infusionsoft Window), click the <strong>Refresh Page for Token</strong> button and you are all set.<br /><br />
							<a target="_blank" href="https://signin.infusionsoft.com/app/oauth/authorize?client_id=<?php echo $infusionsoft_data['api_key']; ?>&redirect_uri=<?php echo urlencode($base_url.'/includes/integrations/infusionsoft/access_token.php'); ?>&response_type=code&scope=full" class="btn btn-primary">Get Access Token</a> <a href="setup.php?action=62&tab=10" class="btn btn-warning">Refresh Page for Token</a></div>
							<?PHP } ?>
                        </div>
						<div class="form-actions">
                            <button href="#infusionsoft" target="_blank" class="btn btn-success btn-sm" data-toggle="modal">Video Tutorial</button> <button class="btn btn-primary btn-sm">Save Settings</button>
                        </div>
                        <input type="hidden" name="action" value="62">
                        <input type="hidden" name="cfg" value="infusionsoft_settings">
                        <input type="hidden" name="tab" value="10">
                    </form>
                </div>
            </div>
        </div>
<div class="modal fade" id="infusionsoft">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
<h4 class="modal-title">Infusionsoft Integration</h4>
</div>
<div class="modal-body">
<div>Integrate iDevAffiliate with Infusionsoft so all new accounts are automatically added to your Infusionsoft account.</div>
<br />
<div class="video-container">
<iframe src="//player.vimeo.com/video/124240376" frameborder="0" width="560" height="315" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>
    </div>
    <div class="tab-pane<?php makeActiveTab(11, 'no'); ?>" id="tab_1_11">
        <div class="col-md-12">
            <div class="widget box" style="margin-top:20px;">
                <div class="widget-header"><h4><i class="icon-envelope-alt"></i> SendGrid Mailing List Integration</h4></div>
                <div class="widget-content">
                    <form class="form-horizontal row-border" method="post" action="setup.php">
                    	<input name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>" type="hidden" />
                        <div class="form-group">
                            <label class="col-md-3 control-label"><img src="images/mailinglists/sendgrid.jpg" style="height:30px; width:155px; border:0px; margin-bottom:10px;" /></label>
                            <div class="col-md-2" style="padding-top:5px;">
                                <select class="form-control" name="sendgrid_data[enabled]">
                                    <option value="0" <?php if ($sendgrid_data['enabled'] == 0) { ?> selected="selected" <?php } ?>>Disabled</option>
                                    <option value="1" <?php if ($sendgrid_data['enabled'] == 1) { ?> selected="selected" <?php } ?>>Enabled</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-3 control-label">SendGrid API Key</label>
                            <div class="col-md-4">
                                <input type="text" name="sendgrid_data[api_key]" class="form-control" value="<?php echo $sendgrid_data['api_key']; ?>" />
                            </div>
                        </div>
                        <?php
                        $iDevSG = new IdevSendGridUtility($sendgrid_data['api_key']);
                        ?>
                        <?php 
                        if($sendgrid_data['enabled'] == 1 && !$iDevSG->checkApiKey()) {
                        ?>
                        <div class="form-group">
                            <label class="col-md-12 control-label">API Key is blank</label>
                        </div>
                        <?php
                        }
                        elseif ($sendgrid_data['enabled'] == 1 && !$iDevSG->checkValid()) {
                        ?>
                        <div class="form-group">
                            <label class="col-md-12 control-label">Invalid API details</label>
                        </div>
                        <?php
                        }
                        elseif($sendgrid_data['enabled'] == 0) {
                        }
                        else {
                        ?>        
                        <div class="form-group">
                            <label class="col-md-3 control-label">SendGrid Lists</label>
                            <div class="col-md-4">
                                <?php 
                                $sg_lists = $iDevSG->getLists();
                                if( is_array($sg_lists->lists) && !empty($sg_lists->lists) ) {
                                    foreach($sg_lists->lists as $list):
										if (isset($list->id)) {
											if( !empty($sendgrid_data['list_ids']) && in_array( $list->id, $sendgrid_data['list_ids']) ) {
												$checked = 'checked="checked"';
											}
											else {
												$checked = "";
											}
											echo "<label for='sendgrid_data{$list->id}'><input type='checkbox' class='checkbox-inline' value='{$list->id}' name='sendgrid_data[list_ids][]' $checked> {$list->name}</label><br />";
										}
                                    endforeach;
                                }
                                else {
                                    echo "No lists found.";
                                }
                                ?>
                            </div>
                        </div>
                        <?php } ?>
                        <div class="form-actions">
                            <button class="btn btn-primary btn-sm">Save Settings</button>
                        </div>
                        <input type="hidden" name="action" value="62">
                        <input type="hidden" name="cfg" value="sendgrid_settings">
                        <input type="hidden" name="tab" value="11">
                    </form>
                </div>
            </div>
        </div>
    </div>
	
	
</div>
</div>