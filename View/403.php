<?php if(!$this->getTemplate()){ ?>
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

        <!-- ======= Leaflet.JS ======= -->
        <link rel="stylesheet" href="/plugins/leaflet/css/leaflet.css">

        <!-- ======= Tempus-Dominus.JS ======= -->
        <link rel="stylesheet" href="/plugins/tempus-dominus/css/tempus-dominus.min.css">

        <!-- ======= Prism.JS ======= -->
        <link rel="stylesheet" href="/plugins/prism/css/prism-tomorrow.min.css">
        <link rel="stylesheet" href="/plugins/prism/css/prism-autolinker.min.css">
        <link rel="stylesheet" href="/plugins/prism/css/prism-ie8.min.css">
        <link rel="stylesheet" href="/plugins/prism/css/prism-line-highlight.min.css">
        <link rel="stylesheet" href="/plugins/prism/css/prism-line-numbers.min.css">
        <link rel="stylesheet" href="/plugins/prism/css/prism-show-language.min.css">
        <link rel="stylesheet" href="/plugins/prism/css/prism-wpd.min.css">

        <!-- ======= DataTables.JS ======= -->
        <link rel="stylesheet" href="/plugins/datatables/css/dataTables.bootstrap5.min.css">
        <link rel="stylesheet" href="/plugins/datatables/css/buttons.bootstrap5.min.css">
        <link rel="stylesheet" href="/plugins/datatables/css/colReorder.bootstrap5.min.css">
        <link rel="stylesheet" href="/plugins/datatables/css/fixedColumns.bootstrap5.min.css">
        <link rel="stylesheet" href="/plugins/datatables/css/fixedHeader.bootstrap5.min.css">
        <link rel="stylesheet" href="/plugins/datatables/css/keyTable.bootstrap5.min.css">
        <link rel="stylesheet" href="/plugins/datatables/css/responsive.bootstrap5.min.css">
        <link rel="stylesheet" href="/plugins/datatables/css/rowGroup.bootstrap5.min.css">
        <link rel="stylesheet" href="/plugins/datatables/css/rowReorder.bootstrap5.min.css">
        <link rel="stylesheet" href="/plugins/datatables/css/scroller.bootstrap5.min.css">
        <link rel="stylesheet" href="/plugins/datatables/css/searchBuilder.bootstrap5.min.css">
        <link rel="stylesheet" href="/plugins/datatables/css/dataTables.dateTime.min.css">
        <link rel="stylesheet" href="/plugins/datatables/css/stateRestore.bootstrap5.min.css">
        <link rel="stylesheet" href="/plugins/datatables/css/select.bootstrap5.min.css">

        <!-- ======= Select2 ======= -->
        <link rel="stylesheet" href="/plugins/select2/css/select2.min.css" />
        <link rel="stylesheet" href="/plugins/select2/css/select2-bootstrap-5-theme.min.css" />

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

        <!-- ======= Chart.JS ======= -->
        <script src="/plugins/chart/js/chart.js"></script>

        <!-- ======= Leaflet.JS ======= -->
        <script src="/plugins/leaflet/js/leaflet.js"></script>

        <!-- ======= Tempus-Dominus.JS ======= -->
        <script src="/plugins/tempus-dominus/js/tempus-dominus.min.js"></script>

        <!-- ======= Prism.JS ======= -->
        <script src="/plugins/prism/js/prism.min.js"></script>
        <script src="/plugins/prism/js/prism-actionscript.min.js"></script>
        <script src="/plugins/prism/js/prism-apacheconf.min.js"></script>
        <script src="/plugins/prism/js/prism-applescript.min.js"></script>
        <script src="/plugins/prism/js/prism-aspnet.min.js"></script>
        <script src="/plugins/prism/js/prism-autohotkey.min.js"></script>
        <script src="/plugins/prism/js/prism-bash.min.js"></script>
        <script src="/plugins/prism/js/prism-c.min.js"></script>
        <script src="/plugins/prism/js/prism-clike.min.js"></script>
        <script src="/plugins/prism/js/prism-coffeescript.min.js"></script>
        <script src="/plugins/prism/js/prism-cpp.min.js"></script>
        <script src="/plugins/prism/js/prism-csharp.min.js"></script>
        <script src="/plugins/prism/js/prism-css.min.js"></script>
        <script src="/plugins/prism/js/prism-dart.min.js"></script>
        <script src="/plugins/prism/js/prism-eiffel.min.js"></script>
        <script src="/plugins/prism/js/prism-erlang.min.js"></script>
        <script src="/plugins/prism/js/prism-fortran.min.js"></script>
        <script src="/plugins/prism/js/prism-fsharp.min.js"></script>
        <script src="/plugins/prism/js/prism-gherkin.min.js"></script>
        <script src="/plugins/prism/js/prism-git.min.js"></script>
        <script src="/plugins/prism/js/prism-go.min.js"></script>
        <script src="/plugins/prism/js/prism-groovy.min.js"></script>
        <script src="/plugins/prism/js/prism-haml.min.js"></script>
        <script src="/plugins/prism/js/prism-handlebars.min.js"></script>
        <script src="/plugins/prism/js/prism-haskell.min.js"></script>
        <script src="/plugins/prism/js/prism-http.min.js"></script>
        <script src="/plugins/prism/js/prism-ini.min.js"></script>
        <script src="/plugins/prism/js/prism-jade.min.js"></script>
        <script src="/plugins/prism/js/prism-java.min.js"></script>
        <script src="/plugins/prism/js/prism-javascript.min.js"></script>
        <script src="/plugins/prism/js/prism-jsx.min.js"></script>
        <script src="/plugins/prism/js/prism-julia.min.js"></script>
        <script src="/plugins/prism/js/prism-latex.min.js"></script>
        <script src="/plugins/prism/js/prism-less.min.js"></script>
        <script src="/plugins/prism/js/prism-lolcode.min.js"></script>
        <script src="/plugins/prism/js/prism-markdown.min.js"></script>
        <script src="/plugins/prism/js/prism-markup.min.js"></script>
        <script src="/plugins/prism/js/prism-matlab.min.js"></script>
        <script src="/plugins/prism/js/prism-nasm.min.js"></script>
        <script src="/plugins/prism/js/prism-nsis.min.js"></script>
        <script src="/plugins/prism/js/prism-objectivec.min.js"></script>
        <script src="/plugins/prism/js/prism-pascal.min.js"></script>
        <script src="/plugins/prism/js/prism-perl.min.js"></script>
        <script src="/plugins/prism/js/prism-php-extras.min.js"></script>
        <script src="/plugins/prism/js/prism-php.min.js"></script>
        <script src="/plugins/prism/js/prism-powershell.min.js"></script>
        <script src="/plugins/prism/js/prism-python.min.js"></script>
        <script src="/plugins/prism/js/prism-r.min.js"></script>
        <script src="/plugins/prism/js/prism-rest.min.js"></script>
        <script src="/plugins/prism/js/prism-rip.min.js"></script>
        <script src="/plugins/prism/js/prism-ruby.min.js"></script>
        <script src="/plugins/prism/js/prism-rust.min.js"></script>
        <script src="/plugins/prism/js/prism-sas.min.js"></script>
        <script src="/plugins/prism/js/prism-scala.min.js"></script>
        <script src="/plugins/prism/js/prism-scheme.min.js"></script>
        <script src="/plugins/prism/js/prism-scss.min.js"></script>
        <script src="/plugins/prism/js/prism-smalltalk.min.js"></script>
        <script src="/plugins/prism/js/prism-smarty.min.js"></script>
        <script src="/plugins/prism/js/prism-sql.min.js"></script>
        <script src="/plugins/prism/js/prism-stylus.min.js"></script>
        <script src="/plugins/prism/js/prism-swift.min.js"></script>
        <script src="/plugins/prism/js/prism-twig.min.js"></script>
        <script src="/plugins/prism/js/prism-typescript.min.js"></script>
        <script src="/plugins/prism/js/prism-wiki.min.js"></script>
        <script src="/plugins/prism/js/prism-yaml.min.js"></script>
        <script src="/plugins/prism/js/prism-autolinker.min.js"></script>
        <script src="/plugins/prism/js/prism-file-highlight.min.js"></script>
        <script src="/plugins/prism/js/prism-highlight-keywords.min.js"></script>
        <script src="/plugins/prism/js/prism-ie8.min.js"></script>
        <script src="/plugins/prism/js/prism-line-highlight.min.js"></script>
        <script src="/plugins/prism/js/prism-line-numbers.min.js"></script>
        <script src="/plugins/prism/js/prism-show-language.min.js"></script>
        <script src="/plugins/prism/js/prism-wpd.min.js"></script>

        <!-- ======= Prettier.JS ======= -->
        <script src="/plugins/prettier/js/standalone.js"></script>
        <script src="/plugins/prettier/js/parser-html.js"></script>

        <!-- ======= JSZip.JS ======= -->
        <script src="/plugins/jszip/js/jszip.min.js"></script>

        <!-- ======= PDFMake.JS ======= -->
        <script src="/plugins/pdfmake/js/pdfmake.min.js"></script>
        <script src="/plugins/pdfmake/js/vfs_fonts.js"></script>

        <!-- ======= DataTables.JS ======= -->
        <script src="/plugins/datatables/js/jquery.dataTables.min.js"></script>
        <script src="/plugins/datatables/js/dataTables.bootstrap5.min.js"></script>
        <script src="/plugins/datatables/js/dataTables.buttons.min.js"></script>
        <script src="/plugins/datatables/js/buttons.bootstrap5.min.js"></script>
        <script src="/plugins/datatables/js/buttons.colVis.min.js"></script>
        <script src="/plugins/datatables/js/buttons.html5.min.js"></script>
        <script src="/plugins/datatables/js/buttons.print.min.js"></script>
        <script src="/plugins/datatables/js/dataTables.dateTime.min.js"></script>
        <script src="/plugins/datatables/js/dataTables.fixedColumns.min.js"></script>
        <script src="/plugins/datatables/js/dataTables.fixedHeader.min.js"></script>
        <script src="/plugins/datatables/js/dataTables.keyTable.min.js"></script>
        <script src="/plugins/datatables/js/dataTables.responsive.min.js"></script>
        <script src="/plugins/datatables/js/responsive.bootstrap5.min.js"></script>
        <script src="/plugins/datatables/js/dataTables.rowGroup.min.js"></script>
        <script src="/plugins/datatables/js/dataTables.rowReorder.min.js"></script>
        <script src="/plugins/datatables/js/dataTables.scroller.min.js"></script>
        <script src="/plugins/datatables/js/dataTables.searchBuilder.min.js"></script>
        <script src="/plugins/datatables/js/searchBuilder.bootstrap5.min.js"></script>
        <script src="/plugins/datatables/js/dataTables.dateTime.min.js"></script>
        <script src="/plugins/datatables/js/dataTables.stateRestore.min.js"></script>
        <script src="/plugins/datatables/js/stateRestore.bootstrap5.min.js"></script>
        <script src="/plugins/datatables/js/dataTables.select.min.js"></script>

        <!-- ======= FullCalendar.JS ======= -->
        <script src="/plugins/fullcalendar/js/index.global.min.js"></script>

        <!-- ======= Select2.JS ======= -->
        <script src="/plugins/select2/js/select2.min.js"></script>

        <!-- ======= TinyMCE.JS ======= -->
        <script src="/plugins/tinymce/tinymce.min.js"></script>
        <script src="/plugins/tinymce/js/tinymce-jquery.min.js"></script>
    </head>
    <body data-bs-spy="scroll" data-bs-target="#main-nav" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="0" class="h-100 w-100">
<?php } ?>
        <!-- ======= 403 ======= -->
        <div class="col-12">
            <div class="d-flex justify-content-center align-items-center">
                <div class="d-flex justify-content-start align-items-center">
                    <h1 class="display-1 text-danger me-3">403</h1>
                    <div style="max-width: 500px">
                        <h3><i class="bi bi-exclamation-triangle fs-1 text-danger me-2"></i>Oops! Permission denied.</h3>
                        <p>
                            Looks like you do not the appropriate permission to be here.
                            Meanwhile, you may <a href="/">return to dashboard</a> or try using the search form.
                        </p>
                        <form action="?p=searchResults" method="post" autocomplete="on" novalidate>
                            <div class="input-group">
                                <input type="text" name="search" class="form-control search" placeholder="Search..." value="<?php if(isset($_POST['search'])){ echo $_POST['search']; } ?>">
                                <button type="submit" name="submit" class="btn btn-secondary"><i class="bi bi-search"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- ======= End 403 ======= -->
<?php if(!$this->getTemplate()){ ?>
    </body>
</html>
<?php } ?>