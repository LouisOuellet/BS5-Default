<!-- ======= Calendar ======= -->
<div class="col-12">
    <div class="row">
        <div class="col-12 my-2">
            <div id="example" class="card card-body p-0"></div>
        </div>
        <div id="code" class="col-12 my-2"></div>
        <div id="htmlcode" class="col-12 my-2"></div>
    </div>
</div>
<?php if($type){ ?>
    <script src="/js/<?= $type ?>/<?= $page ?>.js"></script>
<?php } else { ?>
    <script src="/js/<?= $page ?>.js"></script>
<?php } ?>
<!-- ======= End Calendar ======= -->