<?php
    $page = 'dashboard';
    if(isset($_GET,$_GET['p'])){
        $page = $_GET['p'];
    }
    if(!file_exists($page . '.php')){
        $page = '404';
    }
    $file = $page . '.php';
    $title = ucwords(str_replace('_',' ',$page));
    function generateMenu($items, $depth=0, $reorder=false) {

        // Start the menu list
        $html = '<ul class="nav nav-pills flex-column">';

        // Sort the array by key in ascending order
        if($reorder) ksort($items);
    
        foreach($items as $key => $item) {

            // Generate unique id for the collapse component
            $id = 'menu-' . $key . '-' . $depth;
    
            if(isset($item['sub'])) {
                // Menu with submenu
                $html .= '<li class="nav-item ps-3">';
                $html .= '<button class="nav-link" data-bs-toggle="collapse" data-bs-target="#' . $id . '" role="button" aria-expanded="false" aria-controls="' . $id . '">';
                $html .= '<i class="bi bi-' . $item['icon'] . ' me-1"></i>';
                $html .= '<span class="">' . $item['label'] . '</span>';
                $html .= '</button>';
                $html .= '<div class="collapse" id="' . $id . '">';
                $html .= generateMenu($item['sub'], $depth+1, true); // Recursive call for submenu
                $html .= '</div>';
                $html .= '</li>';
            } else {
                // Simple menu item
                $html .= '<li class="nav-item ps-3">';
                $html .= '<a class="nav-link" href="' . $item['link'] . '">';
                $html .= '<i class="bi bi-' . $item['icon'] . ' me-1"></i>';
                $html .= '<span class="">' . $item['label'] . '</span>';
                $html .= '</a>';
                $html .= '</li>';
            }
        }
    
        // Close the menu list
        $html .= '</ul>';
    
        return $html;
    }
    $sidebar = [
        "dashboard" => [
            "label" => "Dashboard",
            "icon" => "speedometer2",
            "link" => "/",
        ],
        "utilities" => [
            "label" => "Utilities",
            "icon" => "tools",
            "link" => "#",
            "sub" => [
                "file" => [
                    "label" => "File",
                    "icon" => "file",
                    "link" => "?p=file",
                ],
                "message" => [
                    "label" => "Message",
                    "icon" => "envelope",
                    "link" => "?p=message",
                ],
                "notification" => [
                    "label" => "Notification",
                    "icon" => "bell",
                    "link" => "?p=notification",
                ],
                "search" => [
                    "label" => "Search",
                    "icon" => "search",
                    "link" => "?p=search",
                ],
                "task" => [
                    "label" => "Task",
                    "icon" => "list-task",
                    "link" => "?p=task",
                ],
                "toast" => [
                    "label" => "Toast",
                    "icon" => "exclamation-square",
                    "link" => "?p=toast",
                ],
            ],
        ],
        "components" => [
            "label" => "Components",
            "icon" => "layers",
            "link" => "#",
            "sub" => [
                "accordion" => [
                    "label" => "Accordion",
                    "icon" => "arrow-down-up",
                    "link" => "?p=accordion",
                ],
                "alert" => [
                    "label" => "Alert",
                    "icon" => "exclamation-square",
                    "link" => "?p=alert",
                ],
                "avatar" => [
                    "label" => "Avatar",
                    "icon" => "person-bounding-box",
                    "link" => "?p=avatar",
                ],
                "blockquote" => [
                    "label" => "Blockquote",
                    "icon" => "quote",
                    "link" => "?p=blockquote",
                ],
                "box" => [
                    "label" => "Box",
                    "icon" => "postcard",
                    "link" => "?p=box",
                ],
                "card" => [
                    "label" => "Card",
                    "icon" => "card-heading",
                    "link" => "?p=card",
                ],
                "code" => [
                    "label" => "Code",
                    "icon" => "code-square",
                    "link" => "?p=code",
                ],
                "carousel" => [
                    "label" => "Carousel",
                    "icon" => "collection-play",
                    "link" => "?p=carousel",
                ],
                "dropdown" => [
                    "label" => "Dropdown",
                    "icon" => "caret-down-square",
                    "link" => "?p=dropdown",
                ],
                "feed" => [
                    "label" => "Feed",
                    "icon" => "chat-left-text",
                    "link" => "?p=feed",
                ],
                "invoice" => [
                    "label" => "Invoice",
                    "icon" => "file-spreadsheet",
                    "link" => "?p=invoice",
                ],
                "list" => [
                    "label" => "List",
                    "icon" => "list-ul",
                    "link" => "?p=list",
                ],
                "modal" => [
                    "label" => "Modal",
                    "icon" => "window",
                    "link" => "?p=modal",
                ],
                "offcanvas" => [
                    "label" => "Offcanvas",
                    "icon" => "window-sidebar",
                    "link" => "?p=offcanvas",
                ],
                "progress" => [
                    "label" => "Progress",
                    "icon" => "hourglass",
                    "link" => "?p=progress",
                ],
                "ribbon" => [
                    "label" => "Ribbon",
                    "icon" => "bookmark",
                    "link" => "?p=ribbon",
                ],
                "stepper" => [
                    "label" => "Stepper",
                    "icon" => "diagram-3",
                    "link" => "?p=stepper",
                ],
                "table" => [
                    "label" => "Table",
                    "icon" => "table",
                    "link" => "?p=table",
                ],
                "tabs" => [
                    "label" => "Tabs",
                    "icon" => "segmented-nav",
                    "link" => "?p=tabs",
                ],
                "timeline" => [
                    "label" => "Timeline",
                    "icon" => "clock-history",
                    "link" => "?p=timeline",
                ],
            ],
        ],
        "pages" => [
            "label" => "Pages",
            "icon" => "file-earmark",
            "link" => "#",
            "sub" => [
                "authentication" => [
                    "label" => "Authentication",
                    "icon" => "shield-lock",
                    "link" => "#",
                    "sub" => [
                        "2fa" => [
                            "label" => "2-Factor Authentication",
                            "icon" => "shield-lock",
                            "link" => "#",
                            "sub" => [
                                "2fa1" => [
                                    "label" => "2-Factor Authentication 1",
                                    "icon" => "shield-lock",
                                    "link" => "2fa1.php",
                                ],
                                "2fa2" => [
                                    "label" => "2-Factor Authentication 2",
                                    "icon" => "shield-lock",
                                    "link" => "2fa2.php",
                                ],
                            ],
                        ],
                        "forgot" => [
                            "label" => "Forgot",
                            "icon" => "question-diamond",
                            "link" => "#",
                            "sub" => [
                                "forgot1" => [
                                    "label" => "Forgot 1",
                                    "icon" => "question-diamond",
                                    "link" => "forgot1.php",
                                ],
                                "forgot2" => [
                                    "label" => "Forgot 2",
                                    "icon" => "question-diamond",
                                    "link" => "forgot2.php",
                                ],
                            ],
                        ],
                        "login" => [
                            "label" => "Login",
                            "icon" => "box-arrow-in-right",
                            "link" => "#",
                            "sub" => [
                                "login1" => [
                                    "label" => "Login 1",
                                    "icon" => "box-arrow-in-right",
                                    "link" => "login1.php",
                                ],
                                "login2" => [
                                    "label" => "Login 2",
                                    "icon" => "box-arrow-in-right",
                                    "link" => "login2.php",
                                ],
                            ],
                        ],
                        "recover" => [
                            "label" => "Recover",
                            "icon" => "arrow-repeat",
                            "link" => "#",
                            "sub" => [
                                "recover1" => [
                                    "label" => "Recover 1",
                                    "icon" => "arrow-repeat",
                                    "link" => "?p=recover1",
                                ],
                                "recover2" => [
                                    "label" => "Recover 2",
                                    "icon" => "arrow-repeat",
                                    "link" => "?p=recover2",
                                ],
                            ],
                        ],
                        "register" => [
                            "label" => "Register",
                            "icon" => "person-plus",
                            "link" => "#",
                            "sub" => [
                                "register1" => [
                                    "label" => "Register 1",
                                    "icon" => "person-plus",
                                    "link" => "?p=register1",
                                ],
                                "register2" => [
                                    "label" => "Register 2",
                                    "icon" => "person-plus",
                                    "link" => "?p=register2",
                                ],
                            ],
                        ],
                        "verify" => [
                            "label" => "Verify",
                            "icon" => "check-circle",
                            "link" => "#",
                            "sub" => [
                                "verify1" => [
                                    "label" => "Verify 1",
                                    "icon" => "check-circle",
                                    "link" => "?p=verify1",
                                ],
                                "verify2" => [
                                    "label" => "Verify 2",
                                    "icon" => "check-circle",
                                    "link" => "?p=verify2",
                                ],
                            ],
                        ],
                    ],
                ],
                "dispatch" => [
                    "label" => "Dispatch",
                    "icon" => "arrow-up-right-circle",
                    "link" => "#",
                    "sub" => [
                        "dispatchList" => [
                            "label" => "List",
                            "icon" => "list-ul",
                            "link" => "?p=dispatchList",
                        ],
                        "dispatchArchive" => [
                            "label" => "Archive",
                            "icon" => "archive",
                            "link" => "?p=dispatchArchive",
                        ],
                        "dispatchDetails" => [
                            "label" => "Details",
                            "icon" => "chat-dots",
                            "link" => "?p=dispatchDetails",
                        ],
                        "dispatchMyshipments" => [
                            "label" => "My Shipments",
                            "icon" => "list-stars",
                            "link" => "?p=dispatchMyshipments",
                        ],
                        "dispatchShipment" => [
                            "label" => "Shipment",
                            "icon" => "box-seam",
                            "link" => "?p=dispatchShipment",
                        ],
                    ],
                ],
                "error" => [
                    "label" => "Error",
                    "icon" => "exclamation-circle",
                    "link" => "#",
                    "sub" => [
                        "403" => [
                            "label" => "Access Denied",
                            "icon" => "exclamation-octagon",
                            "link" => "?p=403",
                        ],
                        "404" => [
                            "label" => "Page Not Found",
                            "icon" => "exclamation-diamond",
                            "link" => "?p=404",
                        ],
                        "500" => [
                            "label" => "Internal Server Error",
                            "icon" => "exclamation-triangle",
                            "link" => "?p=500",
                        ],
                    ],
                ],
                "humanResources" => [
                    "label" => "Human Resources",
                    "icon" => "person-badge",
                    "link" => "#",
                    "sub" => [
                        "evaluations" => [
                            "label" => "Evaluations",
                            "icon" => "graph-up",
                            "link" => "#",
                            "sub" => [
                                "evaluationList" => [
                                    "label" => "List",
                                    "icon" => "list-check",
                                    "link" => "?p=evaluationList",
                                ],
                                "evaluationDetails" => [
                                    "label" => "Details",
                                    "icon" => "list-columns",
                                    "link" => "?p=evaluationDetails",
                                ],
                            ],
                        ],
                        "evaluation" => [
                            "label" => "Evaluation",
                            "icon" => "graph-up",
                            "link" => "?p=evaluation",
                        ],
                        "requests" => [
                            "label" => "Requests",
                            "icon" => "chat-square-dots",
                            "link" => "#",
                            "sub" => [
                                "requestsList" => [
                                    "label" => "List",
                                    "icon" => "list-check",
                                    "link" => "?p=requestsList",
                                ],
                                "requestsArchives" => [
                                    "label" => "Archives",
                                    "icon" => "archive",
                                    "link" => "?p=requestsArchives",
                                ],
                                "requestsDetails" => [
                                    "label" => "Details",
                                    "icon" => "list-columns",
                                    "link" => "?p=requestsDetails",
                                ],
                            ],
                        ],
                        "vacation" => [
                            "label" => "Vacation",
                            "icon" => "calendar-x",
                            "link" => "?p=vacation",
                        ],
                    ],
                ],
                "messages" => [
                    "label" => "Messages",
                    "icon" => "envelope",
                    "link" => "?p=messages",
                ],
                "profile" => [
                    "label" => "Profile",
                    "icon" => "person",
                    "link" => "?p=profile",
                ],
                "searchResults" => [
                    "label" => "Search Results",
                    "icon" => "search",
                    "link" => "?p=searchResults",
                ],
                "settings" => [
                    "label" => "Settings",
                    "icon" => "gear",
                    "link" => "?p=settings",
                ],
                "support" => [
                    "label" => "Support",
                    "icon" => "life-preserver",
                    "link" => "#",
                    "sub" => [
                        "tickets" => [
                            "label" => "Tickets",
                            "icon" => "chat-square-dots",
                            "link" => "#",
                            "sub" => [
                                "ticketList" => [
                                    "label" => "List",
                                    "icon" => "list-check",
                                    "link" => "?p=ticketList",
                                ],
                                "ticketArchive" => [
                                    "label" => "Archive",
                                    "icon" => "archive",
                                    "link" => "?p=ticketArchive",
                                ],
                                "ticketDetails" => [
                                    "label" => "Details",
                                    "icon" => "ticket-detailed",
                                    "link" => "?p=ticketDetails",
                                ],
                            ],
                        ],
                        "help" => [
                            "label" => "Help",
                            "icon" => "question-circle",
                            "link" => "?p=help",
                        ],
                    ],
                ],
                "tasks" => [
                    "label" => "Tasks",
                    "icon" => "list-task",
                    "link" => "?p=tasks",
                ],
                "website" => [
                    "label" => "Website",
                    "icon" => "globe-americas",
                    "link" => "website.html",
                ],
            ],
        ],
    ];
?>
<!doctype html>
<html lang="en" data-bs-theme="light" data-theme="glass" class="h-100 w-100">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Panel - <?= $title; ?></title>

        <!-- ======= Boostrap Icons ======= -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">

        <!-- ======= Leaflet ======= -->
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css">

        <!-- ======= Prism.JS ======= -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism.min.css" disabled>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-coy.min.css" disabled>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-dark.min.css" disabled>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-funky.min.css" disabled>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-okaidia.min.css" disabled>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-tomorrow.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-twilight.min.css" disabled>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/plugins/autolinker/prism-autolinker.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/plugins/ie8/prism-ie8.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/plugins/line-highlight/prism-line-highlight.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/plugins/line-numbers/prism-line-numbers.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/plugins/show-invisibles/prism-show-invisibles.min.css" disabled>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/plugins/show-language/prism-show-language.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/plugins/wpd/prism-wpd.min.css">

        <!-- ======= DataTables.JS ======= -->
        <link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css" disabled>
        <link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/dataTables.bootstrap5.min.css">
        <link rel="stylesheet" href="https://cdn.datatables.net/buttons/2.3.6/css/buttons.dataTables.min.css" disabled>
        <link rel="stylesheet" href="https://cdn.datatables.net/buttons/2.3.6/css/buttons.bootstrap5.min.css">
        <link rel="stylesheet" href="https://cdn.datatables.net/colreorder/1.6.2/css/colReorder.dataTables.min.css" disabled>
        <link rel="stylesheet" href="https://cdn.datatables.net/colreorder/1.6.2/css/colReorder.bootstrap5.min.css">
        <link rel="stylesheet" href="https://cdn.datatables.net/fixedcolumns/4.2.2/css/fixedColumns.dataTables.min.css" disabled>
        <link rel="stylesheet" href="https://cdn.datatables.net/fixedcolumns/4.2.2/css/fixedColumns.bootstrap5.min.css">
        <link rel="stylesheet" href="https://cdn.datatables.net/fixedheader/3.3.2/css/fixedHeader.dataTables.min.css" disabled>
        <link rel="stylesheet" href="https://cdn.datatables.net/fixedheader/3.3.2/css/fixedHeader.bootstrap5.min.css">
        <link rel="stylesheet" href="https://cdn.datatables.net/keytable/2.9.0/css/keyTable.dataTables.min.css" disabled>
        <link rel="stylesheet" href="https://cdn.datatables.net/keytable/2.9.0/css/keyTable.bootstrap5.min.css">
        <link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.4.1/css/responsive.dataTables.min.css" disabled>
        <link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.4.1/css/responsive.bootstrap5.min.css">
        <link rel="stylesheet" href="https://cdn.datatables.net/rowgroup/1.3.1/css/rowGroup.dataTables.min.css" disabled>
        <link rel="stylesheet" href="https://cdn.datatables.net/rowgroup/1.3.1/css/rowGroup.bootstrap5.min.css">
        <link rel="stylesheet" href="https://cdn.datatables.net/rowreorder/1.3.3/css/rowReorder.dataTables.min.css" disabled>
        <link rel="stylesheet" href="https://cdn.datatables.net/rowreorder/1.3.3/css/rowReorder.bootstrap5.min.css">
        <link rel="stylesheet" href="https://cdn.datatables.net/scroller/2.1.1/css/scroller.dataTables.min.css" disabled>
        <link rel="stylesheet" href="https://cdn.datatables.net/scroller/2.1.1/css/scroller.bootstrap5.min.css">
        <link rel="stylesheet" href="https://cdn.datatables.net/searchbuilder/1.4.2/css/searchBuilder.dataTables.min.css" disabled>
        <link rel="stylesheet" href="https://cdn.datatables.net/searchbuilder/1.4.2/css/searchBuilder.bootstrap5.min.css">
        <link rel="stylesheet" href="https://cdn.datatables.net/datetime/1.4.1/css/dataTables.dateTime.min.css">
        <link rel="stylesheet" href="https://cdn.datatables.net/staterestore/1.2.2/css/stateRestore.dataTables.min.css" disabled>
        <link rel="stylesheet" href="https://cdn.datatables.net/staterestore/1.2.2/css/stateRestore.bootstrap5.min.css">
        <link rel="stylesheet" href="https://cdn.datatables.net/select/1.6.2/css/select.dataTables.min.css" disabled>
        <link rel="stylesheet" href="https://cdn.datatables.net/select/1.6.2/css/select.bootstrap5.min.css">

        <!-- ======= Themes ======= -->
        <link rel="stylesheet" href="css/themes/default/styles.css">
        <link rel="stylesheet" href="css/themes/cerulean/styles.css" data-theme="cerulean" disabled>
        <link rel="stylesheet" href="css/themes/cosmos/styles.css" data-theme="cosmos" disabled>
        <link rel="stylesheet" href="css/themes/cyborg/styles.css" data-theme="cyborg" disabled>
        <link rel="stylesheet" href="css/themes/darkly/styles.css" data-theme="darkly" disabled>
        <link rel="stylesheet" href="css/themes/flathy/styles.css" data-theme="flathy" disabled>
        <link rel="stylesheet" href="css/themes/glass/styles.css" data-theme="glass" disabled>
        <link rel="stylesheet" href="css/themes/journal/styles.css" data-theme="journal" disabled>
        <link rel="stylesheet" href="css/themes/litera/styles.css" data-theme="litera" disabled>
        <link rel="stylesheet" href="css/themes/lumen/styles.css" data-theme="lumen" disabled>
        <link rel="stylesheet" href="css/themes/lux/styles.css" data-theme="lux" disabled>
        <link rel="stylesheet" href="css/themes/materia/styles.css" data-theme="materia" disabled>
        <link rel="stylesheet" href="css/themes/minty/styles.css" data-theme="minty" disabled>
        <link rel="stylesheet" href="css/themes/morph/styles.css" data-theme="morph" disabled>
        <link rel="stylesheet" href="css/themes/pulse/styles.css" data-theme="pulse" disabled>
        <link rel="stylesheet" href="css/themes/quartz/styles.css" data-theme="quartz" disabled>
        <link rel="stylesheet" href="css/themes/sandstone/styles.css" data-theme="sandstone" disabled>
        <link rel="stylesheet" href="css/themes/simplex/styles.css" data-theme="simplex" disabled>
        <link rel="stylesheet" href="css/themes/sketchy/styles.css" data-theme="sketchy" disabled>
        <link rel="stylesheet" href="css/themes/slate/styles.css" data-theme="slate" disabled>
        <link rel="stylesheet" href="css/themes/solar/styles.css" data-theme="solar" disabled>
        <link rel="stylesheet" href="css/themes/spacelab/styles.css" data-theme="spacelab" disabled>
        <link rel="stylesheet" href="css/themes/superhero/styles.css" data-theme="superhero" disabled>
        <link rel="stylesheet" href="css/themes/united/styles.css" data-theme="united" disabled>
        <link rel="stylesheet" href="css/themes/vapor/styles.css" data-theme="vapor" disabled>
        <link rel="stylesheet" href="css/themes/yeti/styles.css" data-theme="yeti" disabled>
        <link rel="stylesheet" href="css/themes/zephyr/styles.css" data-theme="zephyr" disabled>

        <!-- ======= JQuery ======= -->
        <!-- <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script> -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

        <!-- ======= Bootstrap ======= -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>

        <!-- ======= JQuery Timeago ======= -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-timeago/1.6.7/jquery.timeago.min.js"></script>

        <!-- ======= Chart.JS ======= -->
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

        <!-- ======= Leaflet ======= -->
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>

        <!-- ======= Prism.JS ======= -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-actionscript.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-apacheconf.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-applescript.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-aspnet.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-autohotkey.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-bash.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-c.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-clike.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-coffeescript.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-cpp.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-csharp.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-css.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-dart.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-eiffel.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-erlang.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-actionscript.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-actionscript.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-actionscript.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-actionscript.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-actionscript.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-actionscript.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-actionscript.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-actionscript.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-fortran.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-fsharp.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-gherkin.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-git.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-go.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-groovy.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-haml.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-handlebars.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-haskell.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-http.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-ini.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-jade.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-java.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-javascript.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-jsx.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-julia.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-latex.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-less.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-lolcode.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-markdown.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-markup.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-matlab.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-nasm.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-nsis.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-objectivec.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-pascal.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-perl.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-php-extras.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-php.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-powershell.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-python.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-r.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-rest.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-rip.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-ruby.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-rust.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-sas.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-scala.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-scheme.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-scss.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-smalltalk.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-smarty.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-sql.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-stylus.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-swift.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-twig.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-typescript.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-wiki.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-yaml.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/plugins/autolinker/prism-autolinker.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/plugins/file-highlight/prism-file-highlight.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/plugins/highlight-keywords/prism-highlight-keywords.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/plugins/ie8/prism-ie8.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/plugins/line-highlight/prism-line-highlight.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/plugins/line-numbers/prism-line-numbers.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/plugins/show-language/prism-show-language.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/plugins/wpd/prism-wpd.min.js"></script>

        <!-- ======= Prettier.JS ======= -->
        <script src="https://unpkg.com/prettier/standalone.js"></script>
        <script src="https://unpkg.com/prettier/parser-html.js"></script>

        <!-- ======= DataTables.JS ======= -->
        <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
        <script src="https://cdn.datatables.net/1.13.4/js/dataTables.bootstrap5.min.js"></script>
        <script src="https://cdn.datatables.net/buttons/2.3.6/js/dataTables.buttons.min.js"></script>
        <script src="https://cdn.datatables.net/buttons/2.3.6/js/buttons.bootstrap5.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
        <script src="https://cdn.datatables.net/buttons/2.3.6/js/buttons.colVis.min.js"></script>
        <script src="https://cdn.datatables.net/buttons/2.3.6/js/buttons.html5.min.js"></script>
        <script src="https://cdn.datatables.net/buttons/2.3.6/js/buttons.print.min.js"></script>
        <script src="https://cdn.datatables.net/datetime/1.4.1/js/dataTables.dateTime.min.js"></script>
        <script src="https://cdn.datatables.net/fixedcolumns/4.2.2/js/dataTables.fixedColumns.min.js"></script>
        <script src="https://cdn.datatables.net/fixedheader/3.3.2/js/dataTables.fixedHeader.min.js"></script>
        <script src="https://cdn.datatables.net/keytable/2.9.0/js/dataTables.keyTable.min.js"></script>
        <script src="https://cdn.datatables.net/responsive/2.4.1/js/dataTables.responsive.min.js"></script>
        <script src="https://cdn.datatables.net/responsive/2.4.1/js/responsive.bootstrap5.min.js"></script>
        <script src="https://cdn.datatables.net/rowgroup/1.3.1/js/dataTables.rowGroup.min.js"></script>
        <script src="https://cdn.datatables.net/rowreorder/1.3.3/js/dataTables.rowReorder.min.js"></script>
        <script src="https://cdn.datatables.net/scroller/2.1.1/js/dataTables.scroller.min.js"></script>
        <script src="https://cdn.datatables.net/searchbuilder/1.4.2/js/dataTables.searchBuilder.min.js"></script>
        <script src="https://cdn.datatables.net/searchbuilder/1.4.2/js/searchBuilder.bootstrap5.min.js"></script>
        <script src="https://cdn.datatables.net/datetime/1.4.1/js/dataTables.dateTime.min.js"></script>
        <script src="https://cdn.datatables.net/staterestore/1.2.2/js/dataTables.stateRestore.min.js"></script>
        <script src="https://cdn.datatables.net/staterestore/1.2.2/js/stateRestore.bootstrap5.min.js"></script>
        <script src="https://cdn.datatables.net/select/1.6.2/js/dataTables.select.min.js"></script>
    </head>
    <body data-bs-spy="scroll" data-bs-target="#main-nav" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="0" class="h-100 w-100">

        <!-- ======= Controls ======= -->
        <div id="controls" class="d-flex position-fixed bottom-0 end-0 mb-3 me-3" style="z-index:1041;">

            <!-- ======= Collapsible ======= -->
            <div id="controlsCollapsible" class="collapse collapse-horizontal show">

                <div class="d-flex">

                    <!-- ======= Back to Top ======= -->
                    <div class="mx-1 back-to-top" style="display:none;">
                        <a href="#" class="d-flex align-items-center justify-content-center btn btn-primary py-2">
                            <i class="bi bi-arrow-up my-1" style="font-size:1em;"></i>
                        </a>
                    </div>
                    <!-- ======= End Back to Top ======= -->

                    <!-- ======= Light Mode Selector ======= -->
                    <div class="mx-1 dropdown dropup">
                        <button class="btn btn-primary py-2 dropdown-toggle d-flex align-items-center" type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (auto)">
                        <i class="bi bi-circle-half my-1 theme-icon-active" style="font-size:1em;"></i>
                        <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text">
                        <li>
                            <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
                            <i class="bi bi-sun-fill me-2 opacity-50 theme-icon" style="font-size:1em;"></i>
                            Light
                            </button>
                        </li>
                        <li>
                            <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
                            <i class="bi bi-moon-stars-fill me-2 opacity-50 theme-icon" style="font-size:1em;"></i>
                            Dark
                            </button>
                        </li>
                        <li>
                            <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
                            <i class="bi bi-circle-half me-2 opacity-50 theme-icon" style="font-size:1em;"></i>
                            Auto
                            </button>
                        </li>
                        </ul>
                    </div>
                    <!-- ======= End Light Mode Selector ======= -->

                    <!-- ======= Theme Selector ======= -->
                    <div class="mx-1 dropdown dropup">
                        <button class="btn btn-primary py-2 dropdown-toggle d-flex align-items-center" type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (auto)">
                            <i class="bi bi-palette my-1 theme-icon-active" style="font-size:1em;"></i>
                            <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text">
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center active" data-theme-value="default" aria-pressed="true">
                                Default
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="cerulean" aria-pressed="false">
                                Cerulean
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="cosmos" aria-pressed="false">
                                Cosmos
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="cyborg" aria-pressed="false">
                                Cyborg
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="darkly" aria-pressed="false">
                                Darkly
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="flathy" aria-pressed="false">
                                Flathy
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="glass" aria-pressed="false">
                                Glass
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="journal" aria-pressed="false">
                                Journal
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="litera" aria-pressed="false">
                                Litera
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="lumen" aria-pressed="false">
                                Lumen
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="lux" aria-pressed="false">
                                Lux
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="materia" aria-pressed="false">
                                Materia
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="minty" aria-pressed="false">
                                Minty
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="morph" aria-pressed="false">
                                Morph
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="pulse" aria-pressed="false">
                                Pulse
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="quartz" aria-pressed="false">
                                Quartz
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="sandstone" aria-pressed="false">
                                Sandstone
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="simplex" aria-pressed="false">
                                Simplex
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="sketchy" aria-pressed="false">
                                Sketchy
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="slate" aria-pressed="false">
                                Slate
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="solar" aria-pressed="false">
                                Solar
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="spacelab" aria-pressed="false">
                                Spacelab
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="superhero" aria-pressed="false">
                                Superhero
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="united" aria-pressed="false">
                                United
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="vapor" aria-pressed="false">
                                Vapor
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="yeti" aria-pressed="false">
                                Yeti
                                </button>
                            </li>
                            <li>
                                <button type="button" class="dropdown-item d-flex align-items-center" data-theme-value="zephyr" aria-pressed="false">
                                Zephyr
                                </button>
                            </li>
                        </ul>
                    </div>
                    <!-- ======= End Theme Selector ======= -->

                </div>

            </div>
            <!-- ======= End Collapsible ======= -->

            <!-- ======= Collapse ======= -->
            <div class="mx-1">
                <button type="button" class="d-flex align-items-center justify-content-center btn btn-primary py-2" data-bs-toggle="collapse" data-bs-target="#controlsCollapsible" aria-expanded="true" aria-controls="controlsCollapsible">
                    <i class="bi bi-chevron-right my-1" style="font-size:1em;"></i>
                </button>
            </div>
            <!-- ======= End Collapse ======= -->

        </div>
        <!-- ======= End Controls ======= -->

        <!-- ======= Toasts ======= -->
        <div id="toastArea"></div>
        <!-- ======= End Toasts ======= -->
        
        <!-- ======= Main ======= -->
        <main>
        
            <!-- ======= Panel ======= -->
            <div class="container-fluid">
                <div class="row">

                    <!-- ======= Sidebar ======= -->
                    <div class="col-md-2 sidebar vh-100 pb-4 bg-dark bg-glass position-fixed vh-100 overflow-y collapse collapse-horizontal show" id="sidebar">
                        <div class="container-fluid">
                            <a class="sidebar-brand w-100 d-flex justify-content-center align-items-center py-4 fs-4 text-decoration-none" href="/">
                                <i class="bi bi-bootstrap-fill me-2 fs-1"></i>
                                <h4 class="brand m-0">Panel</h4>
                            </a>
                            <?= generateMenu($sidebar) ?>
                        </div>
                    </div>
                    <!-- ======= End Sidebar ======= -->
                
                    <!-- ======= Main Content ======= -->
                    <div id="content" class="col-12 col-md-10 d-md-block p-0" style="margin-left: 16.666667%;">

                        <!-- ======= Navbar ======= -->
                        <nav id="navbar" class="navbar navbar-expand-md navbar-light px-3">
                            <div class="container-fluid">

                                <!-- ======= Sidebar Toggler ======= -->
                                <a id="sidebarToggle" class="cursor-pointer pe-3" role="button" aria-expanded="true" aria-controls="Toggle Sidebar">
                                    <i class="bi bi-list fs-2"></i>
                                </a>
                                <!-- ======= End Sidebar Toggler ======= -->

                                <!-- ======= Nav ======= -->
                                <div id="navbarNavs" class="nav nav-pills d-flex align-items-center">
                                </div>
                                <!-- ======= End Nav ======= -->

                                <!-- ======= Widgets ======= -->
                                <ul class="nav nav-pills ms-3 d-flex align-items-center ms-auto z-1040">

                                    <!-- ======= Search Field ======= -->
                                    <li id="searchField" class="nav-item collapse collapse-horizontal">
                                        <form class="d-flex" action="?p=searchResults" method="post" autocomplete="on" novalidate>
                                            <input type="text" class="form-control search" placeholder="Search..." aria-label="Search" aria-describedby="searchBtn" value="<?php if(isset($_POST['search'])){ echo $_POST['search']; } ?>">
                                        </form>
                                    </li>
                                    <!-- ======= End Search Field ======= -->

                                    <!-- ======= Search Button ======= -->
                                    <li class="nav-item">
                                        <a id="searchBtn" href="#searchField" class="nav-link text-decoration-none py-2 icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="Toggle Search Field">
                                            <i class="bi bi-search fs-4" style="height: 2.25rem !important;width: 1.5rem !important"></i>
                                        </a>
                                    </li>
                                    <!-- ======= End Search Button ======= -->

                                    <!-- ======= Tasks ======= -->
                                    <li class="nav-item" id="taskArea"></li>
                                    <!-- ======= End Tasks ======= -->

                                    <!-- ======= Messages ======= -->
                                    <li class="nav-item" id="messageArea"></li>
                                    <!-- ======= End Messages ======= -->

                                    <!-- ======= Notifications ======= -->
                                    <li class="nav-item" id="notificationArea"></li>
                                    <!-- ======= End Notifications ======= -->

                                    <!-- ======= FullScreen ======= -->
                                    <li class="nav-item">
                                        <a id="fullscreenToggle" href="#" class="nav-link text-decoration-none py-2 icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);">
                                            <i class="bi bi-fullscreen fs-4" style="height: 2.25rem !important;width: 1.5rem !important"></i>
                                        </a>
                                    </li>
                                    <!-- ======= End FullScreen ======= -->

                                    <!-- ======= Profile ======= -->
                                    <li class="nav-item dropdown">
                                        <a id="profileMenu" href="#" class="nav-link text-decoration-none py-0" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src="https://www.gravatar.com/avatar/e05b4330e145079f1d73aa859b23ab86?s=128&d=mp" alt="mdo" width="48" height="48" class="rounded-circle">
                                            <span class="position-absolute top-80 start-80 translate-middle text-bg-success border border-light rounded-circle" style="padding: 8px; display:block;"></span>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profileMenu" style="min-width:350px;max-width:500px;">
                                            <li class="my-2">
                                                <div class="d-flex flex-column justify-content-center align-items-center">
                                                    <div class="">
                                                        <img src="https://www.gravatar.com/avatar/e05b4330e145079f1d73aa859b23ab86?s=128&d=mp" alt="mdo" width="72" height="72" class="rounded-circle my-2">
                                                        <span class="position-absolute translate-middle text-bg-success border border-light rounded-circle" style="padding: 8px; display:block;top: 96px;right:38%;"></span>
                                                    </div>
                                                    <div>
                                                        <h5>John Doe</h5>
                                                    </div>
                                                </div>
                                            </li>
                                            <li><hr class="dropdown-divider"></li>
                                            <li class="dropdown-submenu dropstart">
                                                <button type="button" class="dropdown-item" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-circle-fill text-success me-1"></i>
                                                    <span>Online</span>
                                                </button>
                                                <ul class="dropdown-menu" style="min-width:350px;max-width:500px;">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-circle-fill text-success me-1"></i>
                                                            <span>Online</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-circle-fill text-warning me-1"></i>
                                                            <span>Away</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-circle-fill text-danger me-1"></i>
                                                            <span>Busy</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-circle-fill text-secondary me-1"></i>
                                                            <span>Offline</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="?p=profile">
                                                    <i class="bi bi-person me-1"></i>
                                                    <span>Profile</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="?p=settings">
                                                    <i class="bi bi-gear me-1"></i>
                                                    <span>Settings</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="?p=help">
                                                    <i class="bi bi-question-circle me-1"></i>
                                                    <span>Help</span>
                                                </a>
                                            </li>
                                            <li><hr class="dropdown-divider"></li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    <i class="bi bi-box-arrow-right me-1"></i>
                                                    <span>Sign Out</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <!-- ======= End Profile ======= -->

                                    </ul>
                                    <!-- ======= End Widgets ======= -->

                            </div>
                        </nav>
                        <!-- ======= End Navbar ======= -->
            
                        <!-- ======= Page Title and Breadcrumbs ======= -->
                        <div class="row py-2 px-3 mx-0 d-flex align-items-center">
                            <div class="col-md-6 d-flex align-items-center justify-content-start">
                                <h1 class="m-0"><?= $title; ?></h1>
                            </div>
                            <div class="col-md-6 d-flex justify-content-end">
                                <nav aria-label="breadcrumb">
                                    <ol id="breadcrumbs" class="breadcrumb user-select-none"></ol>
                                </nav>
                            </div>
                        </div>
                        <!-- ======= End Page Title and Breadcrumbs ======= -->

                        <!-- ======= Builder.JS ======= -->
                        <script src="/js/builder.js"></script>

                        <!-- ======= Panel.JS ======= -->
                        <script src="/js/panel.js"></script>
            
                        <!-- ======= Page Content ======= -->
                        <div class="row mt-4 px-3 mx-0 pb-3">
                            <?php
                                if(file_exists($file)){
                                    require $page . '.php';
                                }
                            ?>
                        </div>
                        <!-- ======= End Page Content ======= -->

                    </div>
                    <!-- ======= End Main Content ======= -->

                </div>
            </div>
            <!-- ======= End Panel ======= -->

        </main>
        <!-- ======= End Main ======= -->
    </body>
</html>
