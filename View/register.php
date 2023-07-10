<!-- ======= Registration ======= -->
<h3 class="mb-3">Registration</h3>
<form method="post" class="w-100">
    <div class="form-floating my-3">
        <input type="text" name="username" class="form-control form-control-lg" placeholder="username@domain.com" id="username">
        <label for="username">Email Address</label>
    </div>
    <div class="form-floating my-3">
        <input type="password" name="password" class="form-control form-control-lg" placeholder="*******************" id="password">
        <label for="password">Password</label>
    </div>
    <div class="form-floating my-3">
        <input type="password" name="password2" class="form-control form-control-lg" placeholder="*******************" id="password">
        <label for="password">Retype Password</label>
    </div>
    <div class="form-check my-3 mb-5 form-switch">
        <input class="form-check-input" style="margin-left: -1.4em; margin-right: 1.4em;transform: scale(1.8);" type="checkbox" role="switch" name="agrement" id="agrement">
        <label class="form-check-label" for="agrement">I agree to the <a href="terms.php">terms</a></label>
    </div>
    <input type="hidden" class="d-none" name="csrf" value="">
    <button type="submit" name="register" class="btn btn-primary w-100">Register</button>
</form>
<div class="d-flex align-items-center justify-content-between w-100 mt-3">
    <a href="/"><i class="bi bi-chevron-left me-1"></i>Back to Sign In</a>
</div>
<!-- ======= End Registration ======= -->