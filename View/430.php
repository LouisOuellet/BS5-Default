<!-- ======= Sign In ======= -->
<h3 class="mb-3">Sign In</h3>
<form method="post" class="w-100">
    <div class="form-floating my-3">
        <input type="text" name="username" class="form-control form-control-lg" placeholder="username@domain.com" id="username">
        <label for="username">Username</label>
    </div>
    <div class="form-floating my-3">
        <input type="password" name="password" class="form-control form-control-lg" placeholder="*******************" id="password">
        <label for="password">Password</label>
    </div>
    <div class="form-check my-3 mb-5 form-switch">
        <input class="form-check-input" style="margin-left: -1.4em; margin-right: 1.4em;transform: scale(1.8);" type="checkbox" role="switch" name="remember" id="remember">
        <label class="form-check-label" for="remember">Remember me</label>
    </div>
    <input type="hidden" class="d-none" name="csrf" value="">
    <button type="submit" name="login" class="btn btn-primary w-100">Sign In</button>
</form>
<div class="d-flex align-items-center justify-content-between w-100 mt-3">
    <a href="/forgot">I forgot my password</a>
    <a href="/register">Register</a>
</div>
<!-- ======= End Sign In ======= -->