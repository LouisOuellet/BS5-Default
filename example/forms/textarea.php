<!-- ======= Textarea ======= -->
<div class="col-12">
    <div class="row">
        <div class="col-12 my-2">
            <div class="card p-5" id="example"></div>
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
<!-- ======= End Textarea ======= -->