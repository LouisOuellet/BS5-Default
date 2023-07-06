<!-- ======= Dashboard ======= -->
<div class="col-12">
    <div class="row">

        <!-- ======= Badge Bonus ======= -->
        <div class="col-3 my-2" id="badgeBonus">
        </div>
        <!-- ======= End Badge Bonus ======= -->

        <!-- ======= Badge Tasks ======= -->
        <div class="col-3 my-2" id="badgeTasks">
        </div>
        <!-- ======= End Badge Tasks ======= -->

        <!-- ======= Badge Transactions ======= -->
        <div class="col-3 my-2" id="badgeTransactions">
        </div>
        <!-- ======= End Badge Transactions ======= -->

        <!-- ======= Badge Tickets ======= -->
        <div class="col-3 my-2" id="badgeTickets">
        </div>
        <!-- ======= End Badge Tickets ======= -->

        <!-- ======= Monthly Recap Report ======= -->
        <div class="col-12 my-2">
            <div class="card">
            <div class="card-header">
                <h5 class="card-title">Monthly Recap Report</h5>
            </div>
            <div class="card-body pb-1">
                <div class="row">
                    <div class="col-md-8">
                        <p class="text-center">
                        <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                        </p>
                        <div class="chart"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                        <canvas id="salesChart" style="max-height:200px;"></canvas>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <p class="text-center">
                            <strong>Goal Completion</strong>
                        </p>
                        <div class="progress-group">
                            Add Products to Cart
                            <span class="float-right"><b>160</b>/200</span>
                            <div class="progress progress-sm">
                                <div class="progress-bar bg-primary" style="width: 80%"></div>
                            </div>
                        </div>
                        <div class="progress-group">
                            Complete Purchase
                            <span class="float-right"><b>310</b>/400</span>
                            <div class="progress progress-sm">
                                <div class="progress-bar bg-danger" style="width: 75%"></div>
                            </div>
                        </div>
                        <div class="progress-group">
                            <span class="progress-text">Visit Premium Page</span>
                            <span class="float-right"><b>480</b>/800</span>
                            <div class="progress progress-sm">
                                <div class="progress-bar bg-success" style="width: 60%"></div>
                            </div>
                        </div>
                        <div class="progress-group">
                            Send Inquiries
                            <span class="float-right"><b>250</b>/500</span>
                            <div class="progress progress-sm">
                                <div class="progress-bar bg-warning" style="width: 50%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <div class="row">
                    <div class="col-sm-3 col-6">
                        <div class="d-flex flex-column justify-content-center align-items-center border-end">
                        <span class="text-success"><i class="bi bi-caret-up me-1"></i>17%</span>
                        <h5 class="my-2">$340,600.00</h5>
                        <span class="description-text">TOTAL REVENUE</span>
                        </div>
                    </div>
                    <div class="col-sm-3 col-6">
                        <div class="d-flex flex-column justify-content-center align-items-center border-end">
                        <span class="text-warning"><i class="bi bi-caret-up me-1"></i>0%</span>
                        <h5 class="my-2">$341,300.00</h5>
                        <span class="description-text">TOTAL COST</span>
                        </div>
                    </div>
                    <div class="col-sm-3 col-6">
                        <div class="d-flex flex-column justify-content-center align-items-center border-end">
                        <span class="text-danger"><i class="bi bi-caret-down me-1"></i>20%</span>
                        <h5 class="my-2">- $700.00</h5>
                        <span class="description-text">TOTAL PROFIT</span>
                        </div>
                    </div>
                    <div class="col-sm-3 col-6">
                        <div class="d-flex flex-column justify-content-center align-items-center">
                            <span class="text-danger"><i class="bi bi-caret-down me-1"></i>18%</span>
                            <h5 class="my-2">$0.00</h5>
                            <span class="description-text">GOAL COMPLETIONS</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <!-- ======= End Monthly Recap Report ======= -->

        <!-- ======= Timeline ======= -->
        <div class="col-12 my-2">
            <div class="card card-body">
            <div id="timelineContainer"></div>
            </div>
        </div>
        <!-- ======= End Timeline ======= -->

        <!-- ======= Feed ======= -->
        <div class="col-12 my-2">
            <div class="card card-body">
            <div id="feedContainer"></div>
            </div>
        </div>
        <!-- ======= End Feed ======= -->

        <!-- ======= Spacer ======= -->
        <div class="col-12 my-5"></div>
        <!-- ======= End Spacer ======= -->

    </div>
</div>
<script src="/js/dashboard.js"></script>
<!-- ======= End Dashboard ======= -->