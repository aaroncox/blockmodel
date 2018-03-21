// To run:
// mongo mongodb://mongo1.steemdata.com:27017/SteemData -u steemit -p steemit < instances_of_ops.js

db.Operations.findOne({type: 'account_create_with_delegation'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'account_create'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'account_update'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'account_witness_proxy'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'account_witness_vote'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'author_reward'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'cancel_transfer_from_savings'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'change_recovery_account'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'claim_reward_balance'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'comment_benefactor_reward'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'comment_options'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'comment'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'convert'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'curation_reward'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'custom_json'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'custom'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'decline_voting_rights'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'delegate_vesting_shares'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'delete_comment'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'escrow_approve'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'escrow_dispute'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'escrow_release'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'escrow_transfer'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'feed_publish'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'fill_convert_request'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'fill_order'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'fill_transfer_from_savings'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'fill_vesting_withdraw'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'interest'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'limit_order_cancel'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'limit_order_create'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'limit_order_create2'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'liquidity_reward'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'pow'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'pow2'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'producer_reward'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'recover_account'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'request_account_recovery'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'return_vesting_delegation'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'set_withdraw_vesting_route'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'shutdown_witness'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'transfer_from_savings'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'transfer_to_savings'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'transfer_to_vesting'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'transfer'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'vote'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'withdraw_vesting'}, {type: 1, block_num: 1});
db.Operations.findOne({type: 'witness_update'}, {type: 1, block_num: 1});
