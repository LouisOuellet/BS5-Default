<!-- ======= Profile ======= -->
<div class="col-12">
    <div class="row">
        <div class="col-4 col-lg-3" id="col1"></div>
        <div class="col-8 col-lg-9" id="col2"></div>
    </div>
</div>
<script>
    // Load the profile data
    const Profile = {
        "id": <?= $this->Auth->User->get('id') ?>,
        "created": "<?= $this->Auth->User->get('created') ?>",
        "modified": "<?= $this->Auth->User->get('modified') ?>",
        "username": "<?= $this->Auth->User->get('username') ?>",
        "name": "<?= $this->Auth->User->get('name') ?>",
        "address": "<?= $this->Auth->User->get('address') ?>",
        "city": "<?= $this->Auth->User->get('city') ?>",
        "state": "<?= $this->Auth->User->get('state') ?>",
        "country": "<?= $this->Auth->User->get('country') ?>",
        "zipcode": "<?= $this->Auth->User->get('zipcode') ?>",
        "phone": "<?= $this->Auth->User->get('phone') ?>",
        "mobile": "<?= $this->Auth->User->get('mobile') ?>",
        "status": <?= $this->Auth->User->get('status') ?>,
        "database": "<?= $this->Auth->User->get('database') ?>",
        "server": "<?= $this->Auth->User->get('server') ?>",
        "domain": "<?= $this->Auth->User->get('domain') ?>"
    };
</script>
<script src="/js/profile.js"></script>
<!-- ======= End Profile ======= -->