<!-- ======= Playground ======= -->
<div class="col-12">
    <div class="row">
        <div id="playground" class="col-12 my-2"></div>
    </div>
</div>
<script src="/js/sampleData.js"></script>
<?php if($type){ ?>
    <script src="/js/<?= $type ?>/<?= $page ?>.js"></script>
<?php } else { ?>
    <script src="/js/<?= $page ?>.js"></script>
<?php } ?>
<!-- ======= End Playground ======= -->