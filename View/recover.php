<!-- ======= Recover Account ======= -->
<h3 class="mb-3">Recover Account</h3>
<form method="post" class="w-100">
    <p class="text-center">
        You are only one step a way from your new password, recover your password now.
    </p>
    <div class="form-floating my-3">
        <input type="password" name="password" class="form-control form-control-lg" placeholder="*******************" id="password">
        <label for="password">Password</label>
    </div>
    <div class="form-floating my-3">
        <input type="password" name="password2" class="form-control form-control-lg" placeholder="*******************" id="password">
        <label for="password">Retype Password</label>
    </div>
    <input type="hidden" class="d-none" name="csrf" value="">
    <button type="submit" name="recover" class="btn btn-primary w-100">Change password</button>
</form>
<div class="d-flex align-items-center justify-content-between w-100 mt-3">
    <a href="/"><i class="bi bi-chevron-left me-1"></i>Back to Sign In</a>
</div>
<!-- ======= End Recover Account ======= -->