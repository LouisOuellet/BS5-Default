<!doctype html>
<html lang="en" data-bs-theme="light" data-theme="glass" class="h-100 w-100">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title><?= $this->getLabel() ?></title>

        <!-- ======= Bootstrap 5 ======= -->
        <link rel="stylesheet" href="/css/themes/default/styles.css">

        <!-- ======= Boostrap Icons ======= -->
        <link rel="stylesheet" href="/plugins/bootstrap/css/bootstrap-icons.min.css">

        <!-- ======= Themes ======= -->
        <link rel="stylesheet" href="/css/themes/cerulean/styles.css" data-theme="cerulean" disabled>
        <link rel="stylesheet" href="/css/themes/cosmos/styles.css" data-theme="cosmos" disabled>
        <link rel="stylesheet" href="/css/themes/cyborg/styles.css" data-theme="cyborg" disabled>
        <link rel="stylesheet" href="/css/themes/darkly/styles.css" data-theme="darkly" disabled>
        <link rel="stylesheet" href="/css/themes/flathy/styles.css" data-theme="flathy" disabled>
        <link rel="stylesheet" href="/css/themes/glass/styles.css" data-theme="glass" disabled>
        <link rel="stylesheet" href="/css/themes/journal/styles.css" data-theme="journal" disabled>
        <link rel="stylesheet" href="/css/themes/litera/styles.css" data-theme="litera" disabled>
        <link rel="stylesheet" href="/css/themes/lumen/styles.css" data-theme="lumen" disabled>
        <link rel="stylesheet" href="/css/themes/lux/styles.css" data-theme="lux" disabled>
        <link rel="stylesheet" href="/css/themes/materia/styles.css" data-theme="materia" disabled>
        <link rel="stylesheet" href="/css/themes/minty/styles.css" data-theme="minty" disabled>
        <link rel="stylesheet" href="/css/themes/morph/styles.css" data-theme="morph" disabled>
        <link rel="stylesheet" href="/css/themes/pulse/styles.css" data-theme="pulse" disabled>
        <link rel="stylesheet" href="/css/themes/quartz/styles.css" data-theme="quartz" disabled>
        <link rel="stylesheet" href="/css/themes/sandstone/styles.css" data-theme="sandstone" disabled>
        <link rel="stylesheet" href="/css/themes/simplex/styles.css" data-theme="simplex" disabled>
        <link rel="stylesheet" href="/css/themes/sketchy/styles.css" data-theme="sketchy" disabled>
        <link rel="stylesheet" href="/css/themes/slate/styles.css" data-theme="slate" disabled>
        <link rel="stylesheet" href="/css/themes/solar/styles.css" data-theme="solar" disabled>
        <link rel="stylesheet" href="/css/themes/spacelab/styles.css" data-theme="spacelab" disabled>
        <link rel="stylesheet" href="/css/themes/superhero/styles.css" data-theme="superhero" disabled>
        <link rel="stylesheet" href="/css/themes/united/styles.css" data-theme="united" disabled>
        <link rel="stylesheet" href="/css/themes/vapor/styles.css" data-theme="vapor" disabled>
        <link rel="stylesheet" href="/css/themes/yeti/styles.css" data-theme="yeti" disabled>
        <link rel="stylesheet" href="/css/themes/zephyr/styles.css" data-theme="zephyr" disabled>

        <!-- ======= JQuery ======= -->
        <script src="/plugins/jquery/js/jquery.min.js"></script>

        <!-- ======= JQuery - Input Mask ======= -->
        <script src="/plugins/jquery/js/jquery.inputmask.min.js"></script>

        <!-- ======= Bootstrap ======= -->
        <script src="/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>

        <!-- ======= JQuery Timeago ======= -->
        <script src="/plugins/timeago/js/jquery.timeago.min.js"></script>
    </head>
	<body class="h-100 w-100">
		
		<!-- ======= Main ======= -->
		<main class="h-100 w-100 d-flex align-items-center justify-content-center">
            <?php require $this->getViewFile(); ?>
		</main>
		<!-- ======= End Main ======= -->
		
	</body>
</html>
