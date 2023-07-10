<!-- ======= Forgot Password ======= -->
<h3 class="mb-3">Forgot Password</h3>
<form method="post" class="w-100">
    <p class="text-center">
        You forgot your password? Here you can easily retrieve a new password.
    </p>
    <div class="form-floating my-3">
        <input type="text" name="username" class="form-control form-control-lg" placeholder="username@domain.com" id="username">
        <label for="username">Email Address</label>
    </div>
    <input type="hidden" class="d-none" name="csrf" value="">
    <button type="submit" name="forgot" class="btn btn-primary w-100">Request new password</button>
</form>
<div class="d-flex align-items-center justify-content-between w-100 mt-3">
    <a href="/"><i class="bi bi-chevron-left me-1"></i>Back to Sign In</a>
</div>
<!-- ======= End Forgot Password ======= -->