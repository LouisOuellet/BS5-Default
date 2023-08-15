<!-- ======= Profile ======= -->
<div class="col-12" id="layout"></div>
<div class="col-12">
    <div class="row">
        <div id="code" class="col-12 my-2"></div>
        <div id="htmlcode" class="col-12 my-2"></div>
    </div>
</div>
<script src="/js/sampleData.js"></script>
<?php if($type){ ?>
    <script src="/js/<?= $type ?>/<?= $page ?>.js"></script>
<?php } else { ?>
    <script src="/js/<?= $page ?>.js"></script>
<?php } ?>
<!-- ======= End Profile ======= -->


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
        "id": 1,
        "created": "2023-04-10 11:40:05",
        "modified": "2023-05-04 12:19:03",
        "username": "louis@laswitchtech.com",
        "name": "Louis Ouellet",
        "address": "15 rue Richardson",
        "city": "Beauharnois",
        "state": "Quebec",
        "country": "Canada",
        "zipcode": "J6N 2S9",
        "phone": "4502250426",
        "mobile": "5145940414",
        "status": 7,
        "database": null,
        "server": null,
        "domain": "laswitchtech.com",
    };
</script>
<script src="/js/<?= $page ?>.js"></script>
<!-- ======= End Profile ======= -->