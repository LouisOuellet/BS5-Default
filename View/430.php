<!-- ======= Sign In ======= -->
<h3 class="mb-3">Sign In</h3>
<?php
    switch($this->Auth->Authentication->status()){
        case 1:
            echo "<p class='m-0'>Your account has been deleted!</p>";
            break;
        case 2:
            echo "<p class='m-0'>Your account has been banned!</p>";
            break;
        case 3:
            echo "<p class='m-0'>Your account has been locked out!</p>";
            echo "<p class='m-0'>You may try again in " . $this->Configurator->get('auth','lockoutDuration') . " seconds.</p>";
            break;
        case 4:
            echo "<p class='m-0'>You attempted to login too many times.</p>";
            break;
        case 5:
            echo "<p class='m-0'>Your account is not active!</p>";
            break;
    }
?>
<form method="post" class="w-100">
    <div class="form-floating my-3">
        <input type="text" name="username" class="form-control form-control-lg" style="width:350px;" placeholder="username@domain.com" id="username" autocomplete="current-username">
        <label for="username">Username</label>
    </div>
    <div class="form-floating my-3">
        <input type="password" name="password" class="form-control form-control-lg" style="width:350px;" placeholder="*******************" id="password" autocomplete="current-password">
        <label for="password">Password</label>
    </div>
    <div class="form-check my-3 mb-5 form-switch">
        <input class="form-check-input" style="margin-left: -1.4em; margin-right: 1.4em;transform: scale(1.8);" type="checkbox" role="switch" name="remember" id="remember">
        <label class="form-check-label" for="remember">Remember me</label>
    </div>
    <input type="hidden" class="d-none" name="csrf" value="<?= $this->CSRF->token() ?>">
    <button type="submit" name="login" class="btn btn-primary w-100">Sign In</button>
</form>
<div class="d-flex align-items-center justify-content-between w-100 mt-3">
    <a href="/forgot"><i class="bi bi-chevron-left me-1"></i>I forgot my password</a>
    <a href="/register">Register<i class="bi bi-chevron-right ms-1"></i></a>
</div>
<!-- ======= End Sign In ======= -->