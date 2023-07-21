<!-- ======= Settings ======= -->
<div class="col-12">
    <div class="row">
        <div class="col-4 col-lg-3">
            <div class="accordion" id="settingsMenu">
                <div class="accordion-item bg-transparent">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#settingsMenuGeneral" aria-expanded="true" aria-controls="settingsMenuGeneral">
                            <i class="bi bi-gear me-1"></i>General
                        </button>
                    </h2>
                    <div id="settingsMenuGeneral" class="accordion-collapse collapse show" data-bs-parent="#settingsMenu">
                        <div class="accordion-body p-0" id="settingsMenuGeneralMenu"></div>
                    </div>
                </div>
                <div class="accordion-item bg-transparent">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#settingsMenuAuthentication" aria-expanded="false" aria-controls="settingsMenuAuthentication">
                            <i class="bi bi-shield-lock me-1"></i>Authentication
                        </button>
                    </h2>
                    <div id="settingsMenuAuthentication" class="accordion-collapse collapse" data-bs-parent="#settingsMenu">
                        <div class="accordion-body p-0" id="settingsMenuAuthenticationMenu"></div>
                    </div>
                </div>
                <div class="accordion-item bg-transparent">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#settingsMenuMaintenance" aria-expanded="false" aria-controls="settingsMenuMaintenance">
                            <i class="bi bi-tools me-1"></i>Maintenance
                        </button>
                    </h2>
                    <div id="settingsMenuMaintenance" class="accordion-collapse collapse" data-bs-parent="#settingsMenu">
                        <div class="accordion-body p-0" id="settingsMenuMaintenanceMenu"></div>
                    </div>
                </div>
                <div class="accordion-item bg-transparent">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#settingsMenuLogger" aria-expanded="false" aria-controls="settingsMenuLogger">
                            <i class="bi bi-body-text me-1"></i>Logger
                        </button>
                    </h2>
                    <div id="settingsMenuLogger" class="accordion-collapse collapse" data-bs-parent="#settingsMenu">
                        <div class="accordion-body p-0" id="settingsMenuLoggerMenu"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-8 col-lg-9">
            <div class="card">
                <div class="accordion" id="settingsContent"></div>
            </div>
        </div>
    </div>
</div>
<script src="/js/sampleData.js"></script>
<script>
    const Users = sampleUsers;
    const Organizations = sampleOrganizations;
    const Versions = sampleVersions;
</script>
<script src="/js/settings.js"></script>
<!-- ======= End Settings ======= -->